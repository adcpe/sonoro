import { useEffect, useState } from 'react'

function App() {
  const [sounds, setSounds] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchSounds() {
      try {
        const res = await fetch('http://localhost:8000/api/v1/sounds')
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }
        const data = await res.json()
        setSounds(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSounds()
  }, [])

  if (loading) return <div>Loading sounds...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Sonoro – Test Sounds</h1>
      <ul>
        {sounds.map((sound) => (
          <li key={sound.id}>
            {sound.name} (default volume: {sound.volume})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
