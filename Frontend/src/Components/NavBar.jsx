
import {Button} from "./Button"
import { Heading } from "./Heading";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const NavBar = ({isSignedIn}) => {
  const navigate=useNavigate();

  return (
    <nav className="bg-slate-900  w-full left-0 mt-0 sm:h-24  flex space-between  shadow-transparent shadow-md ">
      <div className="container left-0 mx-auto flex justify-between items-center m-0 pl-0">
        <div className="flex  justify-start items-center ml-4">
          <img
            src={
              "https://ideogram.ai/assets/image/balanced/response/GgAJZuBjR0Kmi6HhQVKqVw"
            }
            alt="Logo"
            className="h-10 w-10 mr-1 rounded-full shadow-lg"
          />
        </div>
        <div className="ml-16 pl-5 text-center">
          <Heading label="Careetio" color="white" />
        </div>
        <div>
          <div className="flex-1 flex justify-center mt-7 ml-7 mr-7">
            <Button label={"Home"} onClick={"/"}/>
            <Button label={"About"} onClick={"/"}/>
          {
            isSignedIn?
              <Button label="Sign out" onClick={() => navigate("/home")}/>
            :
           <>
              <Button label="Sign in" onClick={() => navigate("/signin")}/>
              <Button label="Sign up" onClick={() => navigate("/signup")}/>
              </>
          }
           </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  isSignedIn: PropTypes.bool.isRequired
}


export default NavBar