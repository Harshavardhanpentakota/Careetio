import { useState, useEffect } from 'react';
import NavBar from "../Components/NavBar";
import { Heading } from "../Components/Heading";
import { CourseButton } from "../Components/CourseButton";
import axios from "axios";
import { useLocation } from "react-router";
import { SearchBar } from "../Components/SearchBar";
import PropTypes from 'prop-types';

const Categories = ({ category }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  const isSignedIn = state && state.isSignedIn;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/courses?cat=${category}`);
        setCourses(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="bg-slate-900 h-screen text-white flex flex-col">
      <NavBar isSignedIn={isSignedIn} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <SearchBar />
      <div className="flex flex-col items-center bg-white my-10 p-10">
        <Heading label={"Information Technology"} className="text-black" />
        <p className="mb-3 text-sm pt-5 text-center mx-64 font-normal text-black">
          Information technology (IT) is the backbone of modern society...
        </p>
      </div>
      <div>
        {courses.map((course) => (
          <CourseButton key={course.id} id={course.name} label={course.name} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

Categories.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Categories;
