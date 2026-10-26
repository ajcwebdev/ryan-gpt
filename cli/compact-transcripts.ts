import { createHash } from 'node:crypto'
import { constants } from 'node:fs'
import { copyFile, lstat, mkdtemp, readFile, readdir, rm, unlink, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { isDeepStrictEqual } from 'node:util'

type JsonObject = Record<string, unknown>
export type TimedWord = { start: number, end: number, word: string, speaker?: string }
type Output = { path: string, hash: string, staged?: string }
type Source = { path: string, hash: string }
export type CompactionSummary = {
  applied: boolean
  rawFiles: number
  timingFiles: number
  timingEntries: number
  newFiles: number
  removedBytes: number
  writtenBytes: number
  bytesSaved: number
}

const hash = (bytes: string | Buffer): string => createHash('sha256').update(bytes).digest('hex')
const object = (value: unknown, label: string): JsonObject => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`${label} must be an object`)
  return value as JsonObject
}
const string = (value: unknown, label: string): string => {
  if (typeof value !== 'string') throw new Error(`${label} must be a string`)
  return value
}
const seconds = (value: unknown): number => {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) throw new Error('Invalid native timestamp')
  return value
}
const speaker = (value: unknown): { speaker?: string } => {
  if (value === undefined || value === null) return {}
  return { speaker: string(value, 'Speaker label') }
}
const array = (value: unknown, label: string): unknown[] => {
  if (!Array.isArray(value) || !value.length) throw new Error(`${label} must be a nonempty array`)
  return value
}

const content = (text: string): string => text
  .replace(/^\[(?:\d{1,2}:)?\d{2}:\d{2}(?:[.,]\d+)?\]\s*(?:\[[^\]\r\n]+\]\s*)?/gm, '')
  .normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '')

async function readRegular(path: string): Promise<Buffer> {
  const stat = await lstat(path)
  if (!stat.isFile() || stat.isSymbolicLink()) throw new Error(`Expected a regular file: ${path}`)
  return readFile(path)
}

async function existing(path: string): Promise<Buffer | undefined> {
  try {
    return await readRegular(path)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') return undefined
    throw error
  }
}

async function rawFiles(root: string): Promise<string[]> {
  const entries = await readdir(root, { withFileTypes: true })
  const paths: string[] = []
  for (const entry of entries) {
    if (entry.name === '.DS_Store') continue
    const path = join(root, entry.name)
    if (entry.isDirectory()) paths.push(...await rawFiles(path))
    else if (entry.name === 'result.json' || entry.name === 'transcription.json') paths.push(path)
  }
  return paths.sort()
}

function resultWords(result: JsonObject): TimedWord[] {
  const evidence = object(result.evidence, 'Transcription evidence')
  return array(evidence.words, 'Native words').map((entry) => {
    const word = object(entry, 'Native word')
    if (word.timingSource !== 'native') throw new Error('Refusing to preserve estimated word timings as native')
    return {
      start: seconds(word.startSeconds), end: seconds(word.endSeconds),
      word: string(word.text, 'Word text'), ...speaker(word.speaker)
    }
  })
}

function whisperWords(raw: JsonObject): TimedWord[] {
  return array(raw.transcription, 'Whisper transcription').flatMap((entry) => {
    const word = object(entry, 'Whisper word')
    const text = string(word.text, 'Whisper text')
    if (!text.length || text === "'") return []
    const offsets = object(word.offsets, 'Whisper offsets')
    return [{ start: seconds(offsets.from) / 1000, end: seconds(offsets.to) / 1000, word: text }]
  })
}

function sonioxWords(result: JsonObject): TimedWord[] {
  const raw = object(object(result.evidence, 'Soniox evidence').rawResponse, 'Soniox response')
  const words = array(raw.tokens, 'Soniox native tokens').map((entry) => {
    const token = object(entry, 'Soniox token')
    return {
      start: seconds(token.start_ms) / 1000, end: seconds(token.end_ms) / 1000,
      word: string(token.text, 'Soniox token text'), ...speaker(token.speaker)
    }
  })
  if (words.map(word => word.word).join('') !== result.text) throw new Error('Soniox tokens do not preserve the full transcript')
  return words
}

export async function compactTranscripts(
  root: string,
  apply = false,
  log: (message: string) => void = console.log
): Promise<CompactionSummary> {
  const paths = await rawFiles(resolve(root))
  const sources: Source[] = []
  const protectedFiles = new Map<string, string>()
  const outputs: Output[] = []
  const targets = new Set<string>()
  const staging = apply && paths.length ? await mkdtemp(join(tmpdir(), 'ryan-gpt-transcripts-')) : undefined
  const summary: CompactionSummary = {
    applied: apply, rawFiles: paths.length, timingFiles: 0, timingEntries: 0,
    newFiles: 0, removedBytes: 0, writtenBytes: 0, bytesSaved: 0
  }

  async function protect(path: string): Promise<Buffer> {
    const bytes = await readRegular(path)
    protectedFiles.set(path, hash(bytes))
    return bytes
  }

  async function prepare(path: string, bytes: string, words?: TimedWord[]): Promise<void> {
    if (targets.has(path)) throw new Error(`Multiple raw transcripts target ${path}`)
    targets.add(path)
    const current = await existing(path)
    if (current) {
      if (words ? !isDeepStrictEqual(JSON.parse(current.toString('utf8')), words) : current.toString('utf8') !== bytes) {
        throw new Error(`Existing transcript artifact differs: ${path}`)
      }
      protectedFiles.set(path, hash(current))
      outputs.push({ path, hash: hash(current) })
      return
    }
    const output: Output = { path, hash: hash(bytes) }
    if (staging) {
      output.staged = join(staging, String(outputs.length))
      await writeFile(output.staged, bytes)
      const saved = await readRegular(output.staged)
      if (hash(saved) !== output.hash || (words && !isDeepStrictEqual(JSON.parse(saved.toString('utf8')), words))) {
        throw new Error(`Timing serialization failed: ${path}`)
      }
    }
    outputs.push(output)
    summary.newFiles += 1
    summary.writtenBytes += Buffer.byteLength(bytes)
  }

  async function verifyProtected(): Promise<void> {
    for (const [path, expected] of protectedFiles) {
      if (hash(await readRegular(path)) !== expected) throw new Error(`Source changed during compaction: ${path}`)
    }
  }

  try {
    for (const path of paths) {
      const bytes = await protect(path)
      const raw = object(JSON.parse(bytes.toString('utf8')), path)
      const directory = dirname(path)
      const canonicalPath = join(directory, 'transcription.txt')
      const canonical = (await protect(canonicalPath)).toString('utf8')
      if (!content(canonical)) throw new Error(`Readable transcript is empty: ${canonicalPath}`)
      let words: TimedWord[]
      let target = join(directory, 'transcription.words.json')
      if (basename(path) === 'transcription.json') {
        const rawText = array(raw.transcription, 'Whisper transcription').map(entry => string(object(entry, 'Whisper item').text, 'Whisper text')).join('')
        if (content(rawText) !== content(canonical)) throw new Error(`Readable transcript does not preserve Whisper text: ${canonicalPath}`)
        words = whisperWords(raw)
      } else {
        const result = raw.schemaVersion === 2 && raw.result ? object(raw.result, 'Wrapped result') : raw
        const text = string(result.text, 'Transcript text')
        if (!content(text)) throw new Error(`Raw transcript is empty: ${path}`)
        words = raw.provider === 'soniox' ? sonioxWords(result) : resultWords(result)
        if (content(text) !== content(canonical)) {
          if (raw.provider !== 'soniox') throw new Error(`Readable transcript differs from raw result: ${canonicalPath}`)
          target = join(directory, 'transcription.soniox.words.json')
          await prepare(join(directory, 'transcription.soniox.txt'), text + '\n')
        }
      }
      if (!words.length) throw new Error(`No native word timings: ${path}`)
      await prepare(target, JSON.stringify(words) + '\n', words)
      sources.push({ path, hash: hash(bytes) })
      summary.removedBytes += bytes.byteLength
      summary.timingFiles += 1
      summary.timingEntries += words.length
      if (sources.length % 20 === 0 || sources.length === paths.length) log(`Verified ${sources.length}/${paths.length} raw transcripts`)
    }
    summary.bytesSaved = summary.removedBytes - summary.writtenBytes
    if (!apply) return summary
    await verifyProtected()
    for (const output of outputs) {
      if (output.staged) await copyFile(output.staged, output.path, constants.COPYFILE_EXCL)
    }
    for (const output of outputs) {
      if (hash(await readRegular(output.path)) !== output.hash) throw new Error(`Retained artifact verification failed: ${output.path}`)
    }
    await verifyProtected()
    for (const source of sources) await unlink(source.path)
    return summary
  } finally {
    if (staging) await rm(staging, { recursive: true, force: true })
  }
}

async function main(): Promise<void> {
  const args = process.argv.slice(2)
  if (args.includes('--help')) {
    console.log('Usage: bun run compact:transcripts [episode-or-root] [--apply]\nDefaults to content/youtube. Dry run unless --apply is supplied. No network or provider calls.')
    return
  }
  const positional = args.filter(arg => !arg.startsWith('--'))
  if (positional.length > 1 || args.some(arg => arg.startsWith('--') && arg !== '--apply')) throw new Error('Expected one directory and optional --apply')
  console.log(JSON.stringify(await compactTranscripts(positional[0] ?? 'content/youtube', args.includes('--apply')), null, 2))
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error)
    process.exitCode = 1
  })
}
