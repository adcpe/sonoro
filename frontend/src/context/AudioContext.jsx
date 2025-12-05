import { createContext, useContext, useState, useMemo } from 'react'

const AudioContext = createContext(null)

const INITIAL_SOUNDS = [
  { id: 'rain', label: 'Rain' },
  { id: 'waves', label: 'Waves' },
  { id: 'wind', label: 'Wind' },
  { id: 'cafe', label: 'Cafe' },
  { id: 'fire', label: 'Fire' },
  { id: 'night', label: 'Night' },
]

export function AudioProvider({children}) {
  const [sounds] = useState(INITIAL_SOUNDS)
  const [activeSoundIds, setActiveSoundIds] = useState([])

  function toggleSound(id) {
    setActiveSoundIds((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  function clearAll() {
    setActiveSoundIds([])
  }

  const value = useMemo(
    () => ({
      sounds,
      activeSoundIds,
      toggleSound,
      clearAll,
    }),
    [sounds, activeSoundIds],
  )

  return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const ctx = useContext(AudioContext)
  if (!ctx) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return ctx
}
