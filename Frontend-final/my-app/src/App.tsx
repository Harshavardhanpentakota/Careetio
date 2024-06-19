
import React from 'react'
import { BorderBeam } from "../components/magicui/border-beam"
import Button from "../lib/Button"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../Pages/LandingPage'

function App() {

  return (
    <>
    <div className="pt-20">

    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
    </div>
  </>
  )
}

export default App
