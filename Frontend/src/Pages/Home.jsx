
import NavBar from '../Components/NavBar'
import {Card} from "../Components/Card"
import {useNavigate} from "react-router-dom"


export const Home = () => {
  const navigate= useNavigate()
return (
  <div className={`bg-slate-900 h-screen flex flex-col`}>
    <NavBar isSignedIn={false} />
      <div className="flex justify-evenly ">
      <Card heading={"IT"} description={"Information technology (IT) is a broad field that uses computers, software, and other tools to create, store, process, and exchange information. IT is a part of information and communications technology (ICT), and is responsible for a large part of our daily activities, including business operations, personal access to information, and making jobs easier."} button_label={"Continue"}
       onClick={() => navigate("/categories/it")} />
      <Card heading={"Non-IT"} description={"There are a range of job opportunities for engineers who want a career change or a chance to apply their skills to a different workplace setting. Non-engineering jobs for engineers give engineering professionals the chance to explore different career paths and achieve their career goals. By researching the types of non-engineering job options you can pursue with your background in engineering, you have the opportunity to discover a new job that aligns with your revised career goals."} button_label={"Continue"} 
      onClick={() => navigate("/categories/non-it")}  />
      </div>
    </div>
);
}

export default Home