import React from 'react'
import PropTypes from "prop-types"
const Card = ({ path, title,description}:{title:string,description:string,path:string}) => {
  return (
    <div>
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
           <div className='flex flex-row' >
           <img src={path} className='h-7 w-7 rounded-full' alt="" />
           <h5 className="mb-2 mx-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
           </div>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </a>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    path:PropTypes.string
}

export default Card