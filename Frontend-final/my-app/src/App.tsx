
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'
import { ThemeProvider } from "@/components/ui/theme-provider"
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import SigninPage from './auth/Signin';
import SignUpPage from './auth/Signup';
import { BorderBeam } from "@/components/magicui/border-beam";

function App() {
  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className="relative rounded-xl">
      <BorderBeam borderWidth={2.5} />
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element = {<SigninPage />} />
        <Route path='/signup' element = {<SignUpPage />} />
      </Routes>
    </Router>
    </div>
    </div>
    </ThemeProvider>
  </>
  )
}

export default App
