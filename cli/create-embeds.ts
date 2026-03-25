// cli/create-embeds.ts

import { env } from 'node:process'
import type { Dirent } from 'node:fs'
import { readFile, readdir } from 'node:fs/promises'
import { writeFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const CONTENT_DIRECTORIES = ['content/youtube', 'content/blog']

/**
 * Recursively finds all .md files in the specified directory and any nested subdirectories.
 *
 * @async
 * @function getAllMarkdownFiles
 * @param {string} dir - The directory path in which to search for markdown files
 * @returns {Promise<string[]>} A Promise that resolves to an array of absolute paths to .md files
 * @throws {Error} If reading a directory entry fails
 */
async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  let dirEntries: Dirent[]
  try {
    dirEntries = await readdir(dir, { withFileTypes: true })
  } catch (error) {
    const nodeError = error as NodeJS.ErrnoException
    if (nodeError.code === 'ENOENT') {
      return []
    }
    throw error
  }

  const mdFiles: string[] = []

  for (const entry of dirEntries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      const nestedFiles = await getAllMarkdownFiles(fullPath)
      mdFiles.push(...nestedFiles)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.md')) {
      mdFiles.push(fullPath)
    }
  }

  return mdFiles
}

/**
 * Creates embeddings for all .md files found in the content directories (recursively).
 * The embeddings are stored in a JSON file named "embeddings.json" in the project root,
 * keyed by the relative path (e.g., "content/youtube/2022/2022-01-08-something.md"
 * or "content/blog/2025/2025-01-01-post.md").
 *
 * @async
 * @function createEmbeds
 * @returns {Promise<void>} Promise that resolves when embeddings are created and stored
 * @throws {Error} If the OPENAI_API_KEY is missing or an error occurs in file reading/writing
 */
export async function createEmbeds(): Promise<void> {
  const openaiApiKey = env['OPENAI_API_KEY']
  if (!openaiApiKey) {
    throw new Error('Please set the OPENAI_API_KEY environment variable.')
  }

  let mdFiles: string[] = []
  try {
    for (const directory of CONTENT_DIRECTORIES) {
      const baseDir = join(process.cwd(), directory)
      const directoryFiles = await getAllMarkdownFiles(baseDir)
      mdFiles.push(...directoryFiles)
    }

    if (!mdFiles.length) {
      console.log(`No .md files found in ${CONTENT_DIRECTORIES.join(', ')}`)
      return
    }
  } catch (err) {
    throw new Error(`Error reading content directories: ${CONTENT_DIRECTORIES.join(', ')} - ${err}`)
  }

  const embeddings: Record<string, number[]> = {}
  for (const filePath of mdFiles) {
    const shortFilePath = relative(process.cwd(), filePath)
    const content = await readFile(filePath, 'utf8')
    try {
      const response = await fetch('https://api.openai.com/v1/embeddings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
          input: content,
          model: 'text-embedding-3-large',
          encoding_format: 'float'
        })
      })
      const json = await response.json()
      if (!response.ok) {
        throw new Error(`OpenAI API error: ${JSON.stringify(json)}`)
      }
      embeddings[shortFilePath] = json.data?.[0]?.embedding ?? []
      console.log(`Created embedding for: ${shortFilePath}`)
    } catch (err) {
      console.error(`Error creating embedding for ${filePath}:`, err)
    }
  }

  writeFileSync('embeddings.json', JSON.stringify(embeddings, null, 2), 'utf8')
  console.log(`Saved embeddings to "embeddings.json"`)
}
