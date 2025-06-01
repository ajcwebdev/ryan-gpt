import { Command } from 'commander'
import { createEmbeds } from './utils/create-embeds'
import { queryEmbeddings } from './utils/query-embeddings'
import { createChaptersMarkdown } from './utils/create-chapters'

const program = new Command()
program
  .name('embedding-script')
  .description('CLI tool for creating and querying OpenAI text embeddings')
  .option('--createEmbeddings', 'Create embeddings for .md files')
  .option('--queryEmbeddings <question>', 'Query embeddings by question from embeddings.json')
  .option('--createChapters', 'Create chapters.md file with all episodes and chapters')

program.action(async (options) => {
  if (options.createEmbeddings) {
    await createEmbeds()
  } else if (options.queryEmbeddings) {
    await queryEmbeddings(options.queryEmbeddings)
  } else if (options.createChapters) {
    await createChaptersMarkdown()
  } else {
    console.log('No valid command specified. Use --createEmbeddings, --queryEmbeddings, or --createChapters.')
  }
})

program.parse()