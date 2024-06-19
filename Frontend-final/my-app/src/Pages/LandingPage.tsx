import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Particles from "@/components/magicui/particles";
import GradualSpacing from "@/components/magicui/gradual-spacing";
function LandingPage() {
    return (
    <>
    <Particles className="fixed h-full w-full"  />
    <div className="flex flex-col h-full w-full">
      <div className=" mt-3 px-3 flex items-center justify-between w-full top-0 fixed" >
            <h1 className="text-3xl font-bold " >C</h1>
        <div id="Left side" >
            <Button variant="link" asChild>
                <a href="/home">Explore Careers</a>
            </Button>
            <Button variant="link"  asChild>
                <a href="/signin">Sign in</a>
            </Button>
            <Button variant="link"  asChild>
                <a href="/signup">Sign up</a>
            </Button>
            <ModeToggle/>
        </div>
      </div>
      <div className="flex flex-col mx-auto  text-left justify-center mt-20 ">
        <h1 className="text-5xl font-oswald font-bold mt-20 ">
            <GradualSpacing text="Careetio" />  
        </h1>
        <h1 className="text-5xl font-oswald font-bold mt-20 ">
             <GradualSpacing text="Unlock Your Future: Discover Your Ideal Career Path" />    
        </h1>

        <p className="mt-10 text-2xl font-semibold text-gray-250" >
            <GradualSpacing text="Empowering Self-Learners with Comprehensive Career Roadmaps" />  
        </p>
        
      </div>
    </div>
    </>);
}

export default LandingPage
