import { SignUp } from "@clerk/clerk-react";

import React from 'react'

const SignUpPage = () => {
  return (
    <div className="h-[calc(100vh-56px)] flex items-center justify-center">
    <SignUp />
  </div>
  )
}

export default SignUpPage