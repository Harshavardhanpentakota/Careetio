import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './button'
import SparklesText from '../magicui/sparkles-text'
import { useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom";
const SearchBar = ({genAi, setSearch}:{genAi:boolean,setSearch:React.Dispatch<React.SetStateAction<string>>;}) => {  
  const [content, setContent] = useState("") ;
  const {isSignedIn} = useAuth();
  const navigate = useNavigate();


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSignedIn) {
      navigate("/signup");
      return;
    }
    setSearch(content);
  }

  const clearSearch = () => {
    setContent("");
    setSearch("");
  }

  return (
    <form onSubmit={handleSearch} className="relative flex w-full max-w-[600px] items-center space-x-4 m-10 mb-5">
       <div className="relative flex items-center w-full">
        <Input type="text" placeholder="Search your path" value={content} onChange={(e) => setContent(e.target.value)} className="pr-10" />
        {content && (
          <button type="button" onClick={clearSearch} className="absolute right-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      {
        !genAi ? (
          <Button type="submit" onClick={() => console.log(content)}>Search</Button>
        ) : (
          <Button variant="outline" className='shadow-md' type="submit">
            <SparklesText className='text-md' sparklesCount={4} text='Generate with AI' />
          </Button>
        )
      }
    </form>
  )
}

export default SearchBar