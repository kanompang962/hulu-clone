import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Auth from './pages/Auth'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Auth" element={<Auth />} />
        <Route path="/movieDetail" element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App
