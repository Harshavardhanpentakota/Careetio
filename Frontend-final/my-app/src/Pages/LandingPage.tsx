import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Particles from "@/components/magicui/particles";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useTheme } from "@/components/ui/theme-provider";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-multiple";
import Marquee from "@/components/magicui/marquee";
import Card from "@/components/ui/Card";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
function LandingPage() {
  const { theme } = useTheme();
  const {isSignedIn}=useUser();
  const navigate=useNavigate();

  if(isSignedIn){
    navigate("/home");
  }

  const CardDetails1 = [
    {
      title: "React.js",
      path: "/react-2.svg",
      description:
        "React was initially developed by Jordan Walke, a software engineer at Facebook. React makes it painless to create interactive UI's.",
    },
    {
      title: "Node.js",
      path: "nodejs-icon.svg",
      description:
        "Node.js comes with NPM, the world's largest software registry. It contains over a million packages, allowing developers to easily share and reuse code.",
    },
    { title: "Next.js", 
      path: '/nextjs.svg',
      description: "Next.js supports static site generation, which allows you to generate HTML at build time. This results in fast load times and improved SEO." 
    },
    {
        title:"Swift",
        path:"/swift.svg",
        description:"Swift is a programming language developed by Apple Inc. in 2014. It was designed to be a modern, safe, and expressive language for iOS, macOS development. "
    }
  ];
  const CardDetails2 = [
    {
      title: "Tailwind CSS",
      path: "/tailwind.svg",
      description:
        "Tailwind CSS is a utility-first CSS framework, meaning it provides low-level utility classes that you can use to build custom designs directly in your HTML.",
    },
    {
      title: "Rust",
      path: "rust.svg",
      description:
        "Rust's ownership system is unique. It tracks the ownership of memory and enforces strict rules at compile time to ensure memory safety and prevent data races.",
    },
    { title: "Dart", 
      path: '/dart.svg',
      description: "Dart is a programming language developed by Google. It was initially released in 2011 with the goal of providing a better language for building modern web applications." 
    },
    {
      title: "Github",
      path: "/github.svg",
      description: "GitHub allows developers to host public repositories for open-source projects and private repositories for proprietary code, with options for access control and permissions.",
    }
  ];

  return (
    <>
      {theme === "dark" ? (
        <Particles className="fixed h-full w-full" quantity={200} />
      ) : (
        <Particles
          quantity={200}
          className="fixed h-full w-full"
          color="#000000"
        />
      )}
      <div className="flex flex-col h-full w-full relative">
        <div className=" mt-3 px-3 flex items-center justify-between w-full top-0 ">
          <h1 className="text-3xl font-bold font-montserrat ">Careetio</h1>
          <div id="Left side">
            <Button variant="link" asChild  >
              <a href="/signin" >Sign in</a>
            </Button>
            <Button variant="link" asChild>
              <a href="/signup">Sign up</a>
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="flex flex-col mx-auto text-left justify-center mt-20 relative ">
          <h1 className="text-5xl font-montserrat font-bold mt-20 text-left ">
            <GradualSpacing text="Discover Your Ideal Career Path" />
          </h1>

          <p className="mt-10 text-lg font-montserrat  text-gray-400">
            <GradualSpacing text="Empowering Self-Learners with Comprehensive Career Paths" />
          </p>
          {theme === "dark" ? (
            <Button className="w-fit mt-5" variant="secondary" asChild>
              <a href="/home">Explore paths</a>
            </Button>
          ) : (
            <Button className="w-fit mt-5" asChild>
              <a href="/home">Explore paths</a>
            </Button>
          )}
        </div>
      </div>
      <div className="mt-20">
        <div className="flex flex-row justify-center mx-auto relative items-center w-full px-20">
          <Marquee className="my-marquee" reverse pauseOnHover>
            {CardDetails1.map((card, index) => (
              <Card
                key={index}
                path={card.path}
                title={card.title}
                description={card.description}
              />
            ))}
          </Marquee>
        </div>
        <div className="flex flex-row justify-center mx-auto items-center w-full px-20 relative">
          <Marquee className="my-marquee" pauseOnHover>
            {CardDetails2.map((card, index) => (
              <Card
                key={index}
                path={card.path}
                title={card.title}
                description={card.description}
              />
            ))}
          </Marquee>
        </div>
      </div>
      <TextRevealByWord text="Algorithms to Art:        Embracing New Horizons" />
      <div className="flex justify-center mx-auto items-center w-full  ">
        <AnimatedBeamMultipleOutputDemo />
      </div>
      <div>
      </div>
    </>
  );
}

export default LandingPage;
