# RyanGPT

Browse the [content catalog](content/catalog.md) for videos, chapters, and HackMD references. The [JSON catalog](content/catalog.json) provides the combined inventory; [TODO.md](TODO.md) tracks transcription batches and repository tasks.

## Transcript storage

Each episode keeps its readable `transcription.txt`, source identity, and compact native timing data in `transcription.words.json` when available. Existing summaries, chapters, source metadata, and small historical run records remain alongside them. Large provider responses such as `result.json` and Whisper `transcription.json` are removed after the transcript and timings have been verified.

Timing files are JSON arrays of `{ "start": 0, "end": 0.5, "word": "Hello", "speaker": "A" }`. Times are seconds; `speaker` is optional. Entries preserve the provider's native words or pieces, including their original whitespace, rather than estimating word times from sentence timestamps. The catalog lists them under `assets.wordTimings` in schema version 2.

The 2025-07-25 episode also retains a distinct Soniox version as `transcription.soniox.txt` and `transcription.soniox.words.json`; its existing transcript remains unchanged.

Inspect local transcripts before applying compaction:

```bash
bun run compact:transcripts
bun run compact:transcripts content/youtube/2026
bun run compact:transcripts --apply
```

Compaction runs locally without provider calls. It verifies preservation before removing raw responses; no external archive is required. After applying it to new episodes, manually update the asset lists in [catalog.json](content/catalog.json); the command does not edit the catalog.

## Setup

Install dependencies and copy the example environment file.

```bash
bun install
cp .env.example .env
```

Set `OPENAI_API_KEY` for the embeddings commands.

Set `DEVTO_API_KEY` if you want authenticated DEV.to imports. The importer also works without it for public posts.

## Import DEV.to Posts

Fetch Ryan Carniato's public DEV.to posts into `content/blog/<year>/`.
Each imported file gets YAML frontmatter with DEV.to metadata, followed by the article markdown body.

```bash
bun as -- --fetchDevtoPosts
```

To import a different DEV.to username:

```bash
bun as -- --fetchDevtoPosts ben
```

## Generate Your Own Embeddings

`createEmbeddings` scans both `content/youtube/` and `content/blog/`, so import DEV.to posts first if you want them included in the embedding corpus.

```bash
bun as -- --createEmbeddings
```

## Chat with Embeddings

```bash
bun as -- --queryEmbeddings "Why is Marko the most underrated frontend framework ever?"
```

For a saved example answer, see [Why is Marko underrated?](content/questions-and-answers/why-is-marko-underrated.md).
