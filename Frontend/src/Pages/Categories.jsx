import NavBar from "../Components/NavBar"
import { Heading } from "../Components/Heading"
import {CourseButton} from "../Components/CourseButton"
import axios from "axios"
const Categories = async (category) => {
    const courses=await CourseFetcher(category);
  return (
    <div className="bg-slate-900 h-screen text-white flex flex-col">
        <NavBar isSignedIn={true} />
        <div className="flex flex-col items-center bg-white my-10 p-10">
        <Heading label={"Information Technology"} className="text-black" />
        <p className="mb-3 text-sm pt-5 text-center mx-64 font-normal text-black ">Information technology (IT) is the backbone of modern society, encompassing a vast array of technologies and systems that facilitate the storage, retrieval, transmission, and manipulation of data. From the rise of the internet to the advent of cloud computing and artificial intelligence, IT has revolutionized how businesses operate, how individuals communicate, and how information is accessed and shared globally. In the realm of business, IT has become integral to operations, with companies relying on enterprise resource planning (ERP) systems, customer relationship management (CRM) software, and data analytics tools to streamline processes, improve efficiency, and gain insights into market trends and consumer behavior.The internet has connected people and businesses across the globe, enabling instant communication, collaboration, and access to a wealth of information. Social media platforms, e-commerce websites, and online marketplaces have transformed how goods and services are bought and sold, while search engines and online databases provide instant access to knowledge on virtually any topic.</p>
        </div>
        {
            courses.map((course) => {
                return <CourseButton key={course.id} id={course.name} label={course.name} onClick={() => {}} />
            })
        }
    </div>
  )
}

function CourseFetcher(category){
    try{
        const courses= axios.get("http://localhost:3000/api/v1/courses?cat="+category);
        console.log("F")
        return courses;
    }
    catch(err){
        return err;
    }
    
}

export default Categories