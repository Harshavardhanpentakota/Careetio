
import { useState } from "react";
import {Button} from "./Button"
import { Heading } from "./Heading";
const NavBar = ({isSignedIn}) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  return (
    <nav className="bg-slate-900  w-full left-0  h-32 py-2 mt-0 sm:h-24  m-2  shadow-transparent shadow-md ">
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
        <div className="ml-16 pl-5">
          <Heading label="Careetio" color="white" />
        </div>
        <div className={`md:flex ${showDropdown ? "block" : "hidden"}`}>
          <div className="flex-1 flex justify-center m-3">
            <Button label="Home" onClick={"/"}/>
            <Button label="About" onClick={"/"}/>
          </div>
          {
            isSignedIn?
            <div className="flex-1 flex justify-center m-3">
              <Button label="Sign out" onClick={"/signin"}/>
            </div>
            :
            <div className="flex-1 flex justify-center m-3">
              <Button label="Sign in" onClick={"/signin"}/>
              <Button label="Sign up" onClick={"/signup"}/>
            </div>
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar