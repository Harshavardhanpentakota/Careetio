
import { Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Signin from "./auth/signin.jsx"
import Signup from './auth/signup.jsx'
import Categories from './Pages/Categories.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/categories/it' element={<Categories category={"IT"} />} />
      <Route path='/categories/non-it' element={<Categories category={"NON-IT"} />} />
    </Routes>
  )
}

export default App
