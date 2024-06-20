import React from 'react'
import { Dock } from '../magicui/dock'
import { DockIcon } from '../magicui/dock'
import { useTheme } from './theme-provider'
const Footer = () => {
    const {theme}=useTheme();
    const iconComponents=[{
        path:"/github.svg",
        link:"https://github.com/Harshavardhanpentakota/Careetio"
    },{
        path:"/instagram.svg",
        link:"https://www.instagram.com/harsha_weirdo2/"
    }]

  return (
    <>
    {
        theme === "light"?(
            <div className=' bg-black p-10 '  >
        <h1 className='text-white text-3xl font-bold font-montserrat' >Careetio</h1>
        <Dock>
           <DockIcon magnification={100} >
            <img src="./github.svg" alt="" />
           </DockIcon>
        </Dock>
    </div>
        ):
        (
            <div className=' bg-white '  >
        <h1 className='text-black text-3xl font-bold font-montserrat' >Careetio</h1>
        <Dock>
        <DockIcon>
           {
             iconComponents.map((icon,index) => (
                <a key={index} href="{icon.link}" target="_blank">
                    <img key={index} src={icon.path} className='w-5 h-5' alt="" />
                </a>
            ))
           }
           </DockIcon>
        </Dock>
    </div>
        )
    }
    </>
  )
}

export default Footer