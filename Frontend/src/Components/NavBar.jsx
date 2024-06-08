import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <nav className="bg-white fixed w-full left-0  h-32 py-2 mt-0 sm:h-24  m-0  shadow-transparent shadow-md ">
      <div className="container left-0 mx-auto flex justify-between items-center m-0 pl-0">
        <div className="flex  justify-start items-center ml-4">
          <img
            src={
              "https://ideogram.ai/assets/image/balanced/response/GgAJZuBjR0Kmi6HhQVKqVw"
            }
            alt="Logo"
            className="h-20 w-15 mr-1 rounded-full shadow-lg"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleDropdown}
            className="text-black hover:text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className={`md:flex ${showDropdown ? "block" : "hidden"}`}>
          <div className="flex-1 flex justify-center m-3">
            <NavLink
              to={`/`}
              className="text-gray-800  hover:text-cyan-400 hover:font-extrabold text-s px-3 font-san  font-bold text-md py-2 rounded-md sm:text-l "
            >
              Home
            </NavLink>
            <NavLink
              to={`/`}
              className="text-gray-800 hover:text-cyan-400 hover:font-extrabold text-s px-3 font-san  font-bold text-md py-2 rounded-md sm:text-l "
            >
              About Us
            </NavLink>
            <NavLink
              to={`/`}
              className="text-gray-800 hover:text-cyan-400 hover:font-extrabold text-s px-3 font-san  font-bold text-md py-2 rounded-md sm:text-l "
            >
              Know More
            </NavLink>
          </div>
          <div className="flex items-center pr-12">
            <NavLink to={`/SignUp`}>
              <button className="bg-cyan-200 text-black h-14 w-28 px-3 rounded-3xl hover:font-extrabold font-bold text-md hover:h-16 hover:w-48  ml-4 font-montserrat text-s sm:text-l ">
                Sign Up
              </button>
            </NavLink>

            <NavLink to={`/Login`}>
              <button className="bg-cyan-500 text-black h-14 w-28 px-3 rounded-3xl hover:font-extrabold font-bold text-md hover:h-16 hover:w-48  ml-4 font-montserrat text-s sm:text-l ">
                Login
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar