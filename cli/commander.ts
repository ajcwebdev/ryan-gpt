import { Command } from 'commander'
import { createEmbeds } from './create-embeds'
import { queryEmbeddings } from './query-embeddings'
import { createChaptersMarkdown } from './create-chapters'
import { fetchDevtoPosts } from './fetch-devto-posts'

const program = new Command()
program
  .name('embedding-script')
  .description('CLI tool for importing markdown content and managing embeddings')
  .option('--createEmbeddings', 'Create embeddings for .md files')
  .option('--queryEmbeddings <question>', 'Query embeddings by question from embeddings.json')
  .option('--createChapters', 'Create chapters.md file with all episodes and chapters')
  .option('--fetchDevtoPosts [username]', 'Fetch DEV.to posts into content/blog/<year>/')

program.action(async (options) => {
  if (options.createEmbeddings) {
    await createEmbeds()
  } else if (options.queryEmbeddings) {
    await queryEmbeddings(options.queryEmbeddings)
  } else if (options.createChapters) {
    await createChaptersMarkdown()
  } else if (options.fetchDevtoPosts !== undefined) {
    const username = typeof options.fetchDevtoPosts === 'string' ? options.fetchDevtoPosts : 'ryansolid'
    await fetchDevtoPosts(username)
  } else {
    console.log('No valid command specified. Use --createEmbeddings, --queryEmbeddings, --createChapters, or --fetchDevtoPosts.')
  }
})

await program.parseAsync()
