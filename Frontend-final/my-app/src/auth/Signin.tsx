import { SignIn } from "@clerk/clerk-react";
import React from 'react'

const SigninPage = () => {
  return (
    <div className="h-[calc(100vh-56px)] flex items-center justify-center">
    <SignIn />
  </div>
  )
}

export default SigninPage