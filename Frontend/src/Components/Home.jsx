import React from 'react'
import NavBar from './NavBar'

const Home = () => {
return (
  <div>
    <NavBar />
    <div className="">
      <div className="flex flex-1  mx-3 justify-center h-3/4">
        <div className="h-80 w-1/3 bg-cyan-200 mt-36 rounded-xl mx-6 text-center ">
          <h1 className="text-3xl m-20 text-center font-custom2 font-bold  "> IT </h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3">
            Continue
          </button>
        </div>
        <div className="h-80 w-1/3 bg-cyan-200 mt-36 rounded-xl mx-6 text-center">
          <h1 className="text-3xl m-20 text-center font-custom2 font-bold">Non - IT</h1>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  my-3 ">
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);
}

export default Home