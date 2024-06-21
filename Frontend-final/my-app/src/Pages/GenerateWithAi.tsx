import React from 'react'
import Navbar from '@/components/ui/Navbar'
import SearchBar from '../components/ui/SearchBar';
import WordFadeIn from '@/components/magicui/word-fade-in'
const GenerateWithAi = () => {
  return (
    <div>
      <Navbar genAi={true} />
     <div className='flex flex-col items-center justify-center mt-20 mx-auto px-30 ' >
      <WordFadeIn words='AI-Powered Career Pathways Tailored Just for You.' className='text-5xl font-bold font-montserrat' delay={0.5} />
      <SearchBar genAi={true} />
      </div>
    </div>
  )
}

export default GenerateWithAi