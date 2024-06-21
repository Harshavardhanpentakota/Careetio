import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './button'
import SparklesText from '../magicui/sparkles-text'
import { useState } from 'react'
const SearchBar = ({genAi}:{genAi:boolean}) => {  
  const [content, setContent] = useState("") ;
  return (
      <div className=" relative flex w-full max-w-[600px] items-center space-x-4 m-10 ">
      <Input type="email" placeholder="Search your path" onChange={(e) => setContent(e.target.value)} />
      {
        !genAi ?(
            <Button type="submit" onClick={() => console.log(content)} >Search</Button>
        ):(
            <Button variant="outline" className='shadow-md' >
            <a href="/generate-ai">
            <SparklesText className='text-md' sparklesCount={4} text='Generate with AI' />
            </a>
          </Button>
        )
      }
    </div>
  )
}

export default SearchBar