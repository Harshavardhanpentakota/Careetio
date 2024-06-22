import React from 'react'
import Navbar from '@/components/ui/Navbar'
import SearchBar from '../components/ui/SearchBar';
import WordFadeIn from '@/components/magicui/word-fade-in'
import { useTheme } from '@/components/ui/theme-provider';
import Particles from '@/components/magicui/particles';
import { useState,useEffect } from 'react';
import DialogGen from '@/components/ui/DialogGen';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
const GenerateWithAi = () => {
  const {theme} =useTheme();
  const [search, setSearch] = useState("");
  const [content,setContent]=useState("");
  const [loading,setLoading]=useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const generateContentUsingAI = async () => {
      if (search.trim() === "") {
        return; // Do not make the request if search is empty
      }
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/courses/description/generate?search=${search}`);
        console.log(response.data.description);
        setContent(response.data.description);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }
    generateContentUsingAI();
  }, [search])
  
  if(error){
    console.log(error);
  }

  if(loading){
    return (
      <div className="flex justify-center items-center h-screen bg-white">
              <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
              </div>
    )
  }

  return (
    <div>
      {theme === "dark" ? (
        <Particles className="fixed h-full w-full" quantity={200} />
      ) : (
        <Particles
          quantity={200}
          className="fixed h-full w-full"
          color="#000000"
        />
      )}
      <Navbar genAi={true} />
     <div className='flex flex-col items-center justify-center mt-20 mx-auto px-30 ' >
      <WordFadeIn words='AI-Powered Career Pathways Tailored Just for You.' className='text-5xl font-bold font-montserrat' delay={0.5} />
      <SearchBar genAi={true} setSearch={setSearch} />
      </div>
     {
      search && (
        <Dialog defaultOpen={true} >
        {
          search ?(
              <DialogContent className="max-w-4xl p-7" >
              <DialogHeader>
                <div className="flex justify-between" >
                <DialogTitle className="font-montserrat font-bold text-3xl" >{search}</DialogTitle>
            <div>
            </div>
                </div>
                <DialogDescription className="max-h-[70vh] overflow-y-auto p-4 " >
                <ReactMarkdown>{content}</ReactMarkdown>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          ):
          (
              <div className="flex justify-center items-center h-screen bg-white">
              <div role="status" className='flex'>
                <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span >Loading...</span>
              </div>
              </div>
          )
        }
      </Dialog>
      )
     }
    </div>
  )
}

export default GenerateWithAi