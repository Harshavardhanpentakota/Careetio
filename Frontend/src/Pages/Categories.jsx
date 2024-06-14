import NavBar from "../Components/NavBar"
import { Heading } from "../Components/Heading"
import {CourseButton} from "../Components/CourseButton"
import axios from "axios"
import { useLocation } from "react-router"
// import { useNavigate } from "react-router"
import PropTypes from 'prop-types';
import { useEffect, useState } from "react"

const Categories = ({category}) => {
    console.log(category);
    const { state } = useLocation();
    const isSignedIn = state && state.isSignedIn;
    const [courses,setCourses]= useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchCourses = async () => {
            try{
                const res= await axios.get(`http://localhost:3000/api/v1/courses/?cat=${category}`);
                setCourses(res.data.courses);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchCourses();
    },[category]);
    if(loading){
        return <>
        <div className="flex justify-center items-center h-screen bg-gray-900">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
</div>
        </>
    }

    if(error){
        return <div>Error: {error.message}</div>
    }
  return (
    <>
{/* <div className="text-center">
   <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
   Show navigation
   </button>
</div>
<div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label">
    <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="ms-3">Dashboard</span>
            </a>
         </li>
      </ul>
   </div>
</div> */}


    <div className="bg-slate-900 h-screen text-white flex flex-col">
        <NavBar isSignedIn={isSignedIn} />
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="flex flex-col items-center bg-white my-10 p-10">
        <Heading label={"Information Technology"} className="text-black" />
        <p className="mb-3 text-sm pt-5 text-center mx-64 font-normal text-black ">Information technology (IT) is the backbone of modern society, encompassing a vast array of technologies and systems that facilitate the storage, retrieval, transmission, and manipulation of data. From the rise of the internet to the advent of cloud computing and artificial intelligence, IT has revolutionized how businesses operate, how individuals communicate, and how information is accessed and shared globally. In the realm of business, IT has become integral to operations, with companies relying on enterprise resource planning (ERP) systems, customer relationship management (CRM) software, and data analytics tools to streamline processes, improve efficiency, and gain insights into market trends and consumer behavior.The internet has connected people and businesses across the globe, enabling instant communication, collaboration, and access to a wealth of information. Social media platforms, e-commerce websites, and online marketplaces have transformed how goods and services are bought and sold, while search engines and online databases provide instant access to knowledge on virtually any topic.</p>
        </div>
        <div>
        {
            courses?(
                courses.map((course) => {
                    return <CourseButton key={course.id} id={course.name} label={course.name} onClick={() => {}} />
                })
            ) : (<>
            No Courses Found
            </>)
        }
        </div>
    </div>
    </>
  )
}


Categories.propTypes = {
    category: PropTypes.string.isRequired,
  };
  

export default Categories