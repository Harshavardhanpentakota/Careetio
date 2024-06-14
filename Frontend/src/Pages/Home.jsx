
import NavBar from '../Components/NavBar'
import {Card} from "../Components/Card"
import {useNavigate} from "react-router-dom"
import { useLocation } from 'react-router-dom'


export const Home = () => {
  const navigate= useNavigate()
  const { state } = useLocation();
  const isSignedIn = state && state.isSignedIn;
  const email = state && state.email;
  const Name=state && state.firstName;
return (
  <div className={`bg-slate-900 h-screen flex flex-col`}>
    <NavBar isSignedIn={isSignedIn} />
    <hr className="h-px mx-4 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="flex justify-evenly ">
      <Card heading={"IT"} description={"Information technology (IT) is a broad field that uses computers, software, and other tools to create, store, process, and exchange information. IT is a part of information and communications technology (ICT), and is responsible for a large part of our daily activities, including business operations, personal access to information, and making jobs easier."} button_label={"Continue"}
       onClick={() => navigate("/categories/it/?name="+Name,{ state: { isSignedIn: isSignedIn,email} })} />
      <Card heading={"Non-IT"} description={"There are a range of job opportunities for engineers who want a career change or a chance to apply their skills to a different workplace setting. Non-engineering jobs for engineers give engineering professionals the chance to explore different career paths and achieve their career goals. By researching the types of non-engineering job options you can pursue with your background in engineering, you have the opportunity to discover a new job that aligns with your revised career goals."} button_label={"Continue"} 
      onClick={() => navigate("/categories/non-it/?name="+Name,{ state: { isSignedIn: isSignedIn,email} })}  />
      </div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://careetio.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://ideogram.ai/assets/image/balanced/response/GgAJZuBjR0Kmi6HhQVKqVw" className="h-10 w-10 mr-1 rounded-full shadow-lg" alt="Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Careetio</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Careetio™</a>. All Rights Reserved.</span>
    </div>
</footer>



  </div>
);
}

export default Home