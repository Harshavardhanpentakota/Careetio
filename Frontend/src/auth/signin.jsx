import { useState } from "react";
import { BottomWarning } from "../Components/BottomWarning";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { InputBox } from "../Components/inputBox";
import { SubHeading } from "../Components/subHeading";
import { useNavigate } from "react-router";
import axios from "axios";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center text-white">
        <div className="rounded-lg bg-gray-800 w-80 text-center p-2 h-max px-10">
          <Heading label={"Sign in"} color={"white"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            placeholder={"harsha@batman.com"}
            label={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            placeholder={"123456"}
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              label={"Sign in"}
              onClick={async () => {
                if(email && password){
                  const response=await axios.get("http://localhost:3000/api/v1/user/signin",
                    {
                      email: email,
                      password: password,
                    });
                  const name= response.firstName;
                  localStorage.setItem("token", response.data.token);
                  navigate("/home",{ state: { isSignedIn: true,email,name } });
                }
              }}
            />
          </div>
          <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin