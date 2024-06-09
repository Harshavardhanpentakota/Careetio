
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
    <div className="flex  flex-1 p-5 h-screen bg-slate-900 text-black">
      <div className=" w-full  ">
        <img
          src={
            "https://ideogram.ai/assets/image/lossless/response/9E1EBAQ1Qrepym4P6cYvkQ"
          }
          alt="logo"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="h-full w-full g-2 ">
        <div className="p-4 mx-2 bg-white rounded-3xl">
        <h1 className="text-3xl m-20 text-center font-custom font-bold ">WELCOME TO CAREETIO</h1>
        <p className="text-xl m-20 text-center  font-custom">
          Embarking on the journey to discover the perfect career path is a
          profound exploration, one that requires guidance, insight, and
          resources.
        </p>
        </div>
        <div className="mt-4 w-[50%] bg-slate-950 mx-auto rounded-3xl ">
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