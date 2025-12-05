import './SoundGrid.css'
import { useAudio } from '../../context/AudioContext.jsx'

function SoundGrid() {
  const { sounds, activeSoundIds, toggleSound } = useAudio()

  return (
    <div className='sound-grid'>
      {sounds.map((sound) => {
        const isActive = activeSoundIds.includes(sound.id)
        return (
          <button
            key={sound.id}
            type='button'
            className={'sound-card' + (isActive ? ' sound-card-active' : '')}
            onClick={() => toggleSound(sound.id)}>
            <span className='sound-card-label'>{sound.label}</span>
            <span className='sound-card-status'>{isActive ? 'On' : 'Off'}</span>
          </button>
        )
      })}
    </div>
  )
}

export default SoundGrid
