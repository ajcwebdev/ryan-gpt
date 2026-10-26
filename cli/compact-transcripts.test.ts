import { strict as assert } from 'node:assert'
import { mkdtemp, readFile, readdir, rm, writeFile, mkdir, access } from 'node:fs/promises'
import { writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import { compactTranscripts } from './compact-transcripts'

const quiet = (): void => {}
const exists = async (path: string): Promise<boolean> => access(path).then(() => true, () => false)
const native = (text = 'Hello world') => ({
  text,
  segments: [{ start: '00:00:02', end: '00:00:05', text }],
  evidence: {
    timingQuality: 'mixed',
    words: [
      { startSeconds: 2.125, endSeconds: 2.125, text: 'Hello', speaker: 'speaker-A', timingSource: 'native', confidence: 0.8 },
      { startSeconds: 4.012345678901234, endSeconds: 4.5, text: 'world', timingSource: 'native', normalized: 'world' }
    ],
    rawResponse: { diagnostic: 'discard this' },
    chunkEvidence: [{ sourceOffsetSeconds: 1800 }]
  }
})

async function fixture(run: (root: string) => Promise<void>): Promise<void> {
  const root = await mkdtemp(join(tmpdir(), 'ryan-gpt-compact-test-'))
  try {
    await run(root)
  } finally {
    await rm(root, { recursive: true, force: true })
  }
}

async function episode(root: string, name: string, raw: unknown, text = '[00:00:02] [speaker-A] Hello world\n'): Promise<string> {
  const dir = join(root, name)
  await mkdir(dir)
  await writeFile(join(dir, 'result.json'), JSON.stringify(raw))
  await writeFile(join(dir, 'transcription.txt'), text)
  return dir
}

test('dry run validates native words without changing any episode files', async () => fixture(async root => {
  const dir = await episode(root, 'episode', native())
  const before = await readFile(join(dir, 'result.json'))
  const summary = await compactTranscripts(root, false, quiet)
  assert.equal(summary.rawFiles, 1)
  assert.equal(summary.timingEntries, 2)
  assert.equal(summary.applied, false)
  assert.deepEqual(await readdir(dir), ['result.json', 'transcription.txt'])
  assert.deepEqual(await readFile(join(dir, 'result.json')), before)
}))

test('preserves native global times, zero durations, speaker identity and exact floats while dropping diagnostics', async () => fixture(async root => {
  const dir = await episode(root, 'episode', native())
  const original = await readFile(join(dir, 'transcription.txt'))
  await compactTranscripts(root, true, quiet)
  assert.deepEqual(JSON.parse(await readFile(join(dir, 'transcription.words.json'), 'utf8')), [
    { start: 2.125, end: 2.125, word: 'Hello', speaker: 'speaker-A' },
    { start: 4.012345678901234, end: 4.5, word: 'world' }
  ])
  assert.deepEqual(await readFile(join(dir, 'transcription.txt')), original)
  assert.equal(await exists(join(dir, 'result.json')), false)
  const repeated = await compactTranscripts(root, true, quiet)
  assert.equal(repeated.rawFiles, 0)
  assert.equal(repeated.newFiles, 0)
}))

test('validates the complete batch before creating outputs or deleting any raw files', async () => fixture(async root => {
  const first = await episode(root, '01-valid', native())
  const second = await episode(root, '02-truncated', native('Hello world missing words'))
  await assert.rejects(compactTranscripts(root, true, quiet), /Readable transcript differs/)
  assert.equal(await exists(join(first, 'result.json')), true)
  assert.equal(await exists(join(second, 'result.json')), true)
  assert.equal(await exists(join(first, 'transcription.words.json')), false)
}))

test('rejects absent or estimated word timings before removing the source', async () => fixture(async root => {
  const raw = native()
  raw.evidence.words[0].timingSource = 'interpolated'
  const dir = await episode(root, 'estimated', raw)
  await assert.rejects(compactTranscripts(root, true, quiet), /estimated word timings/)
  assert.equal(await exists(join(dir, 'result.json')), true)
  raw.evidence.words = []
  await writeFile(join(dir, 'result.json'), JSON.stringify(raw))
  await assert.rejects(compactTranscripts(root, true, quiet), /Native words must be a nonempty array/)
  assert.equal(await exists(join(dir, 'result.json')), true)
}))

test('refuses to overwrite conflicting timing artifacts', async () => fixture(async root => {
  const dir = await episode(root, 'conflict', native())
  const original = '[{"start":0,"end":1,"word":"different"}]\n'
  await writeFile(join(dir, 'transcription.words.json'), original)
  await assert.rejects(compactTranscripts(root, true, quiet), /Existing transcript artifact differs/)
  assert.equal(await readFile(join(dir, 'transcription.words.json'), 'utf8'), original)
  assert.equal(await exists(join(dir, 'result.json')), true)
}))

test('retains existing Whisper sidecar bytes including whitespace and reversed native intervals', async () => fixture(async root => {
  const dir = join(root, 'whisper')
  await mkdir(dir)
  await writeFile(join(dir, 'transcription.txt'), '[00:00:01] Hello world\n')
  await writeFile(join(dir, 'transcription.json'), JSON.stringify({ transcription: [
    { text: '', offsets: { from: 0, to: 0 } },
    { text: ' Hello', offsets: { from: 1000, to: 900 } },
    { text: "'", offsets: { from: 1000, to: 1000 } },
    { text: ' ', offsets: { from: 1200, to: 1200 } },
    { text: 'world', offsets: { from: 1300, to: 1900 } }
  ] }))
  const sidecar = '[\n {"start":1,"end":0.9,"word":" Hello"},\n {"start":1.2,"end":1.2,"word":" "},\n {"start":1.3,"end":1.9,"word":"world"}\n]\n'
  await writeFile(join(dir, 'transcription.words.json'), sidecar)
  const summary = await compactTranscripts(root, true, quiet)
  assert.equal(summary.timingEntries, 3)
  assert.equal(summary.newFiles, 0)
  assert.equal(await readFile(join(dir, 'transcription.words.json'), 'utf8'), sidecar)
  assert.equal(await exists(join(dir, 'transcription.json')), false)
}))

test('retains a wrapped Soniox alternate with every native token, boundary and speaker', async () => fixture(async root => {
  const dir = await episode(root, 'soniox', {
    schemaVersion: 2, provider: 'soniox', result: {
      text: ' everyone, welcome',
      evidence: { rawResponse: { tokens: [
        { start_ms: 2610, end_ms: 2670, text: ' ever', speaker: '1' },
        { start_ms: 2670, end_ms: 2800, text: 'yon', speaker: '1' },
        { start_ms: 2800, end_ms: 2800, text: 'e,', speaker: '1' },
        { start_ms: 2800, end_ms: 2810, text: ' ', speaker: '2' },
        { start_ms: 2810, end_ms: 3000, text: 'welcome', speaker: '2' }
      ] } }
    }
  })
  const canonical = await readFile(join(dir, 'transcription.txt'))
  const summary = await compactTranscripts(root, true, quiet)
  assert.equal(summary.timingEntries, 5)
  const words = JSON.parse(await readFile(join(dir, 'transcription.soniox.words.json'), 'utf8'))
  assert.equal(words.map((word: { word: string }) => word.word).join(''), ' everyone, welcome')
  assert.deepEqual(words[3], { start: 2.8, end: 2.81, word: ' ', speaker: '2' })
  assert.equal(await readFile(join(dir, 'transcription.soniox.txt'), 'utf8'), ' everyone, welcome\n')
  assert.deepEqual(await readFile(join(dir, 'transcription.txt')), canonical)
  assert.equal(await exists(join(dir, 'transcription.words.json')), false)
}))

test('detects concurrent transcript edits before committing the batch', async () => fixture(async root => {
  const dir = await episode(root, 'concurrent', native())
  await assert.rejects(compactTranscripts(root, true, () => {
    writeFileSync(join(dir, 'transcription.txt'), 'Changed during compaction')
  }), /Source changed during compaction/)
  assert.equal(await exists(join(dir, 'result.json')), true)
  assert.equal(await exists(join(dir, 'transcription.words.json')), false)
}))

test('preserves Soniox token boundaries even when its readable transcript is already canonical', async () => fixture(async root => {
  const dir = await episode(root, 'soniox-matching', {
    schemaVersion: 2, provider: 'soniox', result: {
      text: 'Hello world',
      evidence: { rawResponse: { tokens: [
        { start_ms: 0, end_ms: 100, text: 'Hel', speaker: '1' },
        { start_ms: 100, end_ms: 200, text: 'lo', speaker: '1' },
        { start_ms: 200, end_ms: 300, text: ' world', speaker: '2' }
      ] } }
    }
  })
  await compactTranscripts(root, true, quiet)
  const words = JSON.parse(await readFile(join(dir, 'transcription.words.json'), 'utf8'))
  assert.deepEqual(words, [
    { start: 0, end: 0.1, word: 'Hel', speaker: '1' },
    { start: 0.1, end: 0.2, word: 'lo', speaker: '1' },
    { start: 0.2, end: 0.3, word: ' world', speaker: '2' }
  ])
  assert.equal(await exists(join(dir, 'transcription.soniox.txt')), false)
}))
