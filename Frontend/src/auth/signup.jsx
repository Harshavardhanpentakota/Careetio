import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/subHeading";
import { InputBox } from "../Components/inputBox";
import { Button } from "../Components/Button";
import { BottomWarning } from "../Components/BottomWarning";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const  Signup = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <div className="flex flex-col justify-center text-white">
        <div className="rounded-lg bg-gray-800 w-80 text-center  p-2 h-max px-10">
          <Heading label={"Sign up"} color={"white"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            placeholder={"Harsha"}
            label={"First Name"}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
          <InputBox
            placeholder={"Vardhan"}
            label={"Last Name"}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <InputBox
            placeholder={"harsha@batman.com"}
            label={"Email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            placeholder={"12345678"}
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                if(email && password){
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      email,
                      firstName,
                      lastName,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                  navigate("/home",{ state: { isSignedIn: true,email,firstName } });
                }
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;