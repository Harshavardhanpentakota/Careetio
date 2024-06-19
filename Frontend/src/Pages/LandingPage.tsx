import React from "react";
import { useNavigate } from "react-router-dom";
import { FC } from 'react';

const LandingPage: FC = () => {
    const navigate = useNavigate();
    return (
      <div className="bg-gray-900 flex flex-col">
        <div>
          <h1 className="text-black">gh</h1>
        </div>
      </div>
    );
}

export default LandingPage;
