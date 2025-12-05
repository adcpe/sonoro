import './CurrentMixPanel.css'
import { useAudio } from '../../context/AudioContext.jsx'

function CurrentMixPanel() {
  const { sounds, activeSoundIds, clearAll } = useAudio()

  const activeSounds = sounds.filter((s) => activeSoundIds.includes(s.id))

  return (
    <section className='current-mix'>
      <div className='current-mix-header'>
        <h2>Current Mix</h2>
        {activeSounds.length > 0 && (
          <button type='button' className='current-mix-clear' onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {activeSounds.length === 0 ? (
        <p className='current-mix-empty'>
          No active sounds. Toggle sounds in the mixer to build a mix.
        </p>
      ) : (
        <ul className='current-mix-list'>
          {activeSounds.map((sound) => (
            <li key={sound.id} className='current-mix-item'>
              <span className='current-mix-name'>{sound.label}</span>
              {/* Placeholder for future volume slider */}
              <span className='current-mix-volume'>Volume: 100%</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default CurrentMixPanel
