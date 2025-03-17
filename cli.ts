// cli.ts

import { Command } from 'commander'
import { createEmbeds } from './utils/create-embeds'
import { queryEmbeddings } from './utils/query-embeddings'

/**
 * Sets up Commander to handle the --createEmbeddings and --queryEmbeddings flags.
 */
const program = new Command()
program
  .name('embedding-script')
  .description('CLI tool for creating and querying OpenAI text embeddings')
  .option('--createEmbeddings', 'Create embeddings for .md files')
  .option('--queryEmbeddings <question>', 'Query embeddings by question from embeddings.json')

program.action(async (options) => {
  if (options.createEmbeddings) {
    await createEmbeds()
  } else if (options.queryEmbeddings) {
    await queryEmbeddings(options.queryEmbeddings)
  } else {
    console.log('No valid command specified. Use --createEmbeddings or --queryEmbeddings.')
  }
})

program.parse()