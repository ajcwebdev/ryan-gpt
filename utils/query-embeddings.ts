// utils/query-embeddings.ts

import { env } from 'node:process'
import { readFileSync } from 'node:fs'
import { join, isAbsolute, resolve } from 'node:path'

/**
 * Calculates the cosine similarity between two vectors of equal length.
 *
 * @param {number[]} vectorA - The first vector
 * @param {number[]} vectorB - The second vector
 * @returns {number} The cosine similarity score between 0 and 1 (higher is more similar)
 */
function cosineSimilarity(vectorA: number[], vectorB: number[]): number {
  let dot = 0
  let magA = 0
  let magB = 0

  for (let i = 0; i < vectorA.length; i++) {
    dot += vectorA[i] * vectorB[i]
    magA += vectorA[i] * vectorA[i]
    magB += vectorB[i] * vectorB[i]
  }

  magA = Math.sqrt(magA)
  magB = Math.sqrt(magB)
  if (magA === 0 || magB === 0) return 0

  return dot / (magA * magB)
}

/**
 * Embeds text using the OpenAI API, returning the vector as a number array.
 *
 * @async
 * @function embedText
 * @param {string} text - The text to embed
 * @param {string} apiKey - The OpenAI API key
 * @returns {Promise<number[]>} Array of floats representing the text embedding
 * @throws {Error} If the API call fails
 */
async function embedText(text: string, apiKey: string): Promise<number[]> {
  const resp = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      input: text,
      model: 'text-embedding-3-large',
      encoding_format: 'float'
    })
  })
  if (!resp.ok) {
    throw new Error(`OpenAI error: ${await resp.text()}`)
  }
  const json = await resp.json()
  return json.data[0].embedding
}

/**
 * Calls the ChatCompletion API to generate an answer to the user's question using the text content.
 *
 * @async
 * @function callChatCompletion
 * @param {string} userQuestion - The question asked by the user
 * @param {string} fileContent - The content used for context
 * @param {string} apiKey - The OpenAI API key
 * @returns {Promise<string>} The assistant's answer from the ChatCompletion API
 * @throws {Error} If the API call fails
 */
async function callChatCompletion(userQuestion: string, fileContent: string, apiKey: string): Promise<string> {
  const chatBody = {
    model: 'o1-preview',
    messages: [
      {
        role: 'user',
        content: `Context:\n${fileContent}\n\nQuestion: ${userQuestion}`
      }
    ]
  }

  const chatRes = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(chatBody)
  })
  const chatJson = await chatRes.json()
  console.log(JSON.stringify(chatJson, null, 2))
  if (!chatRes.ok) {
    throw new Error(`OpenAI Chat API error: ${JSON.stringify(chatJson)}`)
  }
  return chatJson.choices[0].message.content
}

/**
 * Queries the previously created embeddings stored in "embeddings.json" to find the top matches
 * for a given question using cosine similarity. It then calls the ChatCompletion API to provide
 * an answer using the text content of the top matching files.
 *
 * @async
 * @function queryEmbeddings
 * @param {string} question - The user's question to embed and query
 * @param {string} [customDir] - An optional directory path from which the relative paths were generated
 * @returns {Promise<void>} Promise that resolves when the query is complete
 * @throws {Error} If the OPENAI_API_KEY is missing or "embeddings.json" is not found
 */
export async function queryEmbeddings(question: string, customDir?: string): Promise<void> {
  if (!question) {
    throw new Error('No question provided.')
  }

  const OPENAI_API_KEY = env['OPENAI_API_KEY']
  if (!OPENAI_API_KEY) {
    throw new Error('Please set the OPENAI_API_KEY environment variable.')
  }

  const baseDir = customDir
    ? (isAbsolute(customDir) ? customDir : resolve(process.cwd(), customDir))
    : process.cwd()

  let storedEmbeddings: Record<string, number[]>
  try {
    const content = readFileSync('embeddings.json', 'utf8')
    storedEmbeddings = JSON.parse(content)
  } catch (err) {
    throw new Error(`Error reading "embeddings.json": ${err}`)
  }

  const queryEmbedding = await embedText(question, OPENAI_API_KEY)
  const similarities: Array<{ filename: string, similarity: number }> = []

  for (const [filename, embedding] of Object.entries(storedEmbeddings)) {
    const sim = cosineSimilarity(queryEmbedding, embedding)
    similarities.push({ filename, similarity: sim })
  }

  similarities.sort((a, b) => b.similarity - a.similarity)
  const topMatches = similarities.slice(0, 5)

  console.log(`Top matches for: "${question}"`)
  console.table(topMatches)

  if (topMatches.length === 0) {
    console.log('No matches found in "embeddings.json".')
    return
  }

  let combinedContent = ''
  for (const match of topMatches) {
    const filename = match.filename
    const fileAbsolutePath = join(baseDir, filename)

    let fileContent = ''
    try {
      fileContent = readFileSync(fileAbsolutePath, 'utf8')
    } catch (err) {
      console.error(`Error reading file for context: ${fileAbsolutePath}`, err)
    }
    combinedContent += `\n\n---\n**File: ${filename}**\n${fileContent}\n`
  }

  const answer = await callChatCompletion(question, combinedContent, OPENAI_API_KEY)
  console.log('Answer:\n', answer)
}