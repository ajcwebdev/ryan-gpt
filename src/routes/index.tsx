// src/routes/index.tsx
// New frontend page with a form to capture an OpenAI API key and question,
// displaying the returned answer on the screen.

import { createSignal } from 'solid-js'

/**
 * Provides a form for querying embeddings with a user-provided question and
 * OpenAI API key, then renders the response on the screen.
 *
 * @returns {JSX.Element} The main page component
 */
export default function HomePage() {
  const [question, setQuestion] = createSignal('')
  const [apiKey, setApiKey] = createSignal('')
  const [answer, setAnswer] = createSignal('')

  /**
   * Handles the form submission by sending question and apiKey to our API route,
   * then setting the resulting answer in local state.
   *
   * @async
   * @function handleSubmit
   * @param {Event} e - The form submission event
   */
  async function handleSubmit(e: Event) {
    e.preventDefault()
    try {
      const resp = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: question(),
          apiKey: apiKey()
        })
      })
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`)
      }
      const data = await resp.json()
      setAnswer(data.answer)
    } catch (err) {
      console.error(err)
      setAnswer('An error occurred. Check console for details.')
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label for="apiKey">OpenAI API Key:</label>
        <input
          id="apiKey"
          type="text"
          value={apiKey()}
          onInput={(e) => setApiKey(e.currentTarget.value)}
        />
        <label for="question">Question:</label>
        <input
          id="question"
          type="text"
          value={question()}
          onInput={(e) => setQuestion(e.currentTarget.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {answer()}
      </div>
    </main>
  )
}
