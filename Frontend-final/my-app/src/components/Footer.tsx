import React from 'react'
import { useTheme } from './ui/theme-provider'
const Footer = () => {
    const {theme}=useTheme();

  return (
    <div className='mt-20' >
        {
        theme === "dark" ? (
          <div className="bottom-0 bg-white text-black p-4 flex justify-between">
            <p className='font-montserrat font-bold text-2xl' >Careetio</p>
            <div className='relative flex ' >
            <div className='flex flex-row justify-center items-center' > 
            <span className='px-2 text-sm font-montserrat' >Want to contribute?</span>
                <a href="https://github.com/Harshavardhanpentakota/Careetio/"><img src="./github2.svg" className='h-8 w-8 mr-2' alt="github" /></a>
                </div>
                <a href="https://www.instagram.com/phvproxy8/"><img src="./instagram2.svg" className='h-8 w-8 mr-2' alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/harsha-vardhan-pentakota-657969259/"><img src="./linkedin.svg" className='h-8 w-8 mr-2' alt="Linkedin" /></a>
            </div>
          </div>
        ) : (
          <div className=" bottom-0 bg-black text-white p-4 flex justify-between">
            <p className='font-montserrat font-bold text-2xl' >Careetio</p>
            <div className='relative flex ' >
                <div className='flex flex-row justify-center items-center' >
                <span className='px-2 text-sm font-montserrat' >Want to contribute?</span>
                <a href="https://github.com/Harshavardhanpentakota/Careetio/">
                <img src="./git.svg" className='h-8 w-8 mr-2' alt="github" /></a>
                </div>
                <a href="https://www.instagram.com/phvproxy8/"><img src="./instag.svg" className='h-9 w-9 mr-2' alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/harsha-vardhan-pentakota-657969259/"><img src="./linked.svg" className='h-8 w-8 mr-2' alt="Linkedin" /></a>
            </div>
          </div>
        )
    }
    </div>
  )
}

export default Footer