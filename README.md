# RyanGPT

Browse the [content catalog](content/catalog.md) for videos, chapters, and HackMD references. The [JSON catalog](content/catalog.json) provides the combined inventory; [TODO.md](TODO.md) tracks transcription batches and repository tasks.

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
