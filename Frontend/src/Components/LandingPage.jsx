import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const LandingPage = () => {
    const [value, setValue] = useState();
    const navigate = useNavigate();

    const handleChange = (event) => {
      const newValue = event.target.value;
      setValue(newValue);

      
      if (newValue > 95) {
        navigate("/home");
      }
    };
  return (
    <div className="flex  flex-1 p-5 h-screen">
      <div className=" w-full  ">
        <img
          src={
            "https://ideogram.ai/assets/image/lossless/response/9E1EBAQ1Qrepym4P6cYvkQ"
          }
          alt="logo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="h-full w-full ">
        <h1 className="text-3xl m-20 text-center font-custom">Welcome to Careertio</h1>
        <p className="text-xl m-20 text-center text-gray-950 font-custom">
          Embarking on the journey to discover the perfect career path is a
          profound exploration, one that requires guidance, insight, and
          resources.
        </p>
        <div className="mt-[30%] w-[50%] bg-slate-950 mx-auto rounded-3xl ">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={handleChange}
            className="w-full h-32 bg-gray-200 rounded-lg appearance-none cursor-pointer pt-12 px-5  "
          />
          <h2 className="text-center text-white py-3 font-mono">Navigate your Career</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage