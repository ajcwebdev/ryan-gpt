// src/routes/api/query.ts

import { json } from '@solidjs/router'
import type { APIEvent } from '@solidjs/start/server'
import { queryEmbeddingsRuntime } from '../../../utils/query-embeddings'

/**
 * Handles POST requests to query embeddings by question using a user-provided OpenAI API key.
 *
 * @async
 * @function POST
 * @param {APIEvent} event - The API event containing the request and response context
 */
export async function POST(event: APIEvent) {
  const body = await event.request.json()
  const { question, apiKey } = body

  if (!question || !apiKey) {
    return json({ error: 'Missing question or apiKey in request body' }, { status: 400 })
  }

  try {
    const result = await queryEmbeddingsRuntime(question, apiKey)
    if (typeof result === 'string') {
      return json({ error: result }, { status: 500 })
    }
    return json({ answer: result.answer, combinedContent: result.combinedContent }, { status: 200 })
  } catch (error) {
    return json({ error: (error as Error).message }, { status: 500 })
  }
}