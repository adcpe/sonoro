import './CurrentMixPanel.css'
import { useAudio } from '../../context/AudioContext.jsx'

function CurrentMixPanel() {
  const { sounds, activeSoundIds, volumes, clearAll, setVolume } = useAudio()

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
          {activeSounds.map((sound) => {
            const vol = volumes[sound.id] ?? 1
            const volPercent = Math.round(vol * 100)

            return (
              <li key={sound.id} className='current-mix-item'>
                <div className='current-mix-info'>
                  <span className='current-mix-name'>{sound.label}</span>
                  <span className='current-mix-volume-label'>{volPercent}%</span>
                </div>
                <input
                  type='range'
                  min='0'
                  max='100'
                  value={volPercent}
                  className='current-mix-slider'
                  onChange={(e) => setVolume(sound.id, Number(e.target.value) / 100)}
                />
              </li>
            )
          })}
        </ul>
      )}
    </section>
  )
}

export default CurrentMixPanel
