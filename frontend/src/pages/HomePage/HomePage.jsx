import SoundGrid from '../../components/audio/SoundGrid.jsx'
import CurrentMixPanel from '../../components/mixes/CurrentMixPanel.jsx'
import Timer from '../../components/timer/Timer.jsx'

function HomePage() {
  return (
    <div className='home-layout'>
      <section className='home-main'>
        <div className='home-left'>
          <h1 className='page-title'>Mixer</h1>
          <SoundGrid />
        </div>
        <aside className='home-right'>
          <CurrentMixPanel />
          <div className='home-timer'>
            <Timer />
          </div>
        </aside>
      </section>
    </div>
  )
}

export default HomePage
