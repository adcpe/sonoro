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

export function AudioProvider({ children }) {
  const [sounds] = useState(INITIAL_SOUNDS)
  const [activeSoundIds, setActiveSoundIds] = useState([])

  const [volumes, setVolumes] = useState(() => {
    const initial = {}
    INITIAL_SOUNDS.forEach((sound) => {
      initial[sound.id] = sound.defaultVolume ?? 1
    })
    return initial
  })

  function toggleSound(id) {
    setActiveSoundIds((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  function clearAll() {
    setActiveSoundIds([])
  }

  function setVolume(id, volume) {
    // volume: 0-1
    setVolumes((prev) => ({
      ...prev,
      [id]: Math.min(1, Math.max(0, volume)),
    }))
  }

  const value = useMemo(
    () => ({
      sounds,
      activeSoundIds,
      volumes,
      toggleSound,
      clearAll,
      setVolume,
    }),
    [sounds, activeSoundIds, volumes],
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
