import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Components/Home.jsx'
import LandingPage from './Components/LandingPage'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App
