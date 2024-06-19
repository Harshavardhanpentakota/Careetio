import Button from "./Button";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
export const Navbar = ({isSignedin}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-900 h-20 flex justify-evenly fixed top-0 w-full shadow-lg ">
            <div className="flex" >
                <h1 className="text-white" >Careetio</h1>
            </div>
            <div className="flex">
                <Button label="Home" onClick={() => navigate("/home")} />
                {
                    isSignedin ? <Button label="Signout" onClick={() => navigate("/")} /> : <>
                    <Button label="Sign in" onClick={() => navigate("/signin")} />
                    <Button label="Sign up" onClick={() => navigate("/signup")} />
                    </>
                }
            </div>
        </div>
    )
}

Navbar.propTypes = {
    isSignedin: PropTypes.bool.isRequired
}

export default Navbar;