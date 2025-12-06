import './SoundGrid.css'
import { useAudio } from '../../context/AudioContext.jsx'

function SoundGrid() {
  const { sounds, activeSoundIds, volumes, toggleSound } = useAudio()

  return (
    <div className='sound-grid'>
      {sounds.map((sound) => {
        const isActive = activeSoundIds.includes(sound.id)
        const vol = volumes[sound.id] ?? 1
        const volPercent = Math.round(vol * 100)

        return (
          <button
            key={sound.id}
            type='button'
            className={'sound-card' + (isActive ? ' sound-card-active' : '')}
            onClick={() => toggleSound(sound.id)}>
            <span className='sound-card-label'>{sound.label}</span>
            <span className='sound-card-status'>{isActive ? `On · ${volPercent}%` : 'Off'}</span>
          </button>
        )
      })}
    </div>
  )
}

export default SoundGrid
