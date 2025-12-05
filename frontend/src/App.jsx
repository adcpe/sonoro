import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import MixesPage from './pages/MixesPage/MixesPage.jsx'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'
import Navbar from './components/layout/Navbar.jsx'
import { AudioProvider } from './context/AudioContext.jsx'

function App() {
  return (
    <AudioProvider>
      <div className='app-root'>
        <Navbar />
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/mixes' element={<MixesPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </AudioProvider>
  )
}

export default App
