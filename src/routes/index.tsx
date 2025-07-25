import { createSignal } from 'solid-js'

export default function HomePage() {
  const [question, setQuestion] = createSignal('')
  const [apiKey, setApiKey] = createSignal('')
  const [answer, setAnswer] = createSignal('')
  const [isLoading, setIsLoading] = createSignal(false)
  const [error, setError] = createSignal('')

  async function handleSubmit(e: Event): Promise<void> {
    e.preventDefault()
    
    const currentQuestion = question().trim()
    const currentApiKey = apiKey().trim()
    
    if (!currentQuestion || !currentApiKey) {
      setError('Please fill in all fields')
      console.log('Form submission failed: Missing required fields')
      return
    }

    setIsLoading(true)
    setError('')
    setAnswer('')
    console.log('Starting API request for question:', currentQuestion)

    try {
      const resp = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: currentQuestion,
          apiKey: currentApiKey
        })
      })

      console.log('API response status:', resp.status)

      if (!resp.ok) {
        const errorData = await resp.json().catch(() => ({}))
        throw new Error(errorData.error || `HTTP error! Status: ${resp.status}`)
      }

      const data = await resp.json()
      console.log('API response received successfully')
      setAnswer(data.answer || 'No answer received')
    } catch (err) {
      console.error('API request failed:', err)
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
      setError(errorMessage)
    } finally {
      setIsLoading(false)
      console.log('API request completed')
    }
  }

  return (
    <main>
      <div class="container">
        <h1>RyanGPT</h1>
        
        <form class="form" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="apiKey">OpenAI API Key</label>
            <input
              id="apiKey"
              type="password"
              placeholder="sk-..."
              value={apiKey()}
              onInput={(e) => setApiKey(e.currentTarget.value)}
              disabled={isLoading()}
            />
          </div>
          
          <div class="form-group">
            <label for="question">Question</label>
            <input
              id="question"
              type="text"
              placeholder="Ask me anything about Ryan's streams..."
              value={question()}
              onInput={(e) => setQuestion(e.currentTarget.value)}
              disabled={isLoading()}
            />
          </div>
          
          <button 
            type="submit" 
            class="submit-button"
            disabled={isLoading()}
          >
            <span class={`button-text ${isLoading() ? 'loading' : ''}`}>
              {isLoading() ? 'Searching...' : 'Ask Question'}
            </span>
            <div class={`spinner ${isLoading() ? 'loading' : ''}`}></div>
          </button>
        </form>

        <div class={`answer-container ${error() ? 'error' : ''}`}>
          {error() || answer()}
        </div>
      </div>
    </main>
  )
}