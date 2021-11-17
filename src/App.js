import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage/Homepage'
import Player from './components/Player/Player'
import Sidebar from './components/Sidebar/Sidebar'
import AlbumPage from './views/AlbumPage/AlbumPage'
import ArtistPage from './views/ArtistPage/ArtistPage'
import { useState } from 'react'
function App() {
  const [playing, setPlaying] = useState({})
  const handlePlaying = (track) => {
    setPlaying(track)
  }
  return (
    <BrowserRouter>
      <Sidebar />
      <Player
        song={{
          title: playing?.title,
          artist: playing?.artist?.name,
          demo: playing?.preview,
          cover: playing?.cover,
        }}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/album/:id" element={<AlbumPage passSong={handlePlaying} />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
