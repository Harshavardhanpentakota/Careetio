import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Import from 'react-router-dom' for proper TypeScript support
import Home from './Pages/Home'; // Remove '.jsx' extension
import LandingPage from './Pages/LandingPage'; // Remove '.jsx' extension
import Signin from './auth/signin'; // Remove '.jsx' extension
import Signup from './auth/signup'; // Remove '.jsx' extension
import Categories from './Pages/Categories'; // Remove '.jsx' extension
import Navbar from './Components/Navbar2'; // Remove '.jsx' extension
import { FC } from 'react'; // Import FC type for functional component

interface AppProps {
  isSignedin: boolean; // Define type for isSignedin prop
}

const App: FC<AppProps> = ({ isSignedin }) => {
  return (
    <>
      <Navbar isSignedin={isSignedin} /> {/* Pass isSignedin prop */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories/it" element={<Categories category="IT" />} /> {/* Use string literal for category prop */}
          <Route path="/categories/non-it" element={<Categories category="NON-IT" />} /> {/* Use string literal for category prop */}
        </Routes>
      </div>
    </>
  );
};

export default App;
