import React from "react";
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import SigninPage from "./auth/Signin";
import SignUpPage from "./auth/Signup";
import GenerateWithAi from "./Pages/GenerateWithAi";
import { Toaster } from "./components/ui/sonner";
import Dashboard from "./Pages/Dashboard";

const router =  createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/generate-ai",
    element: <GenerateWithAi />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  }
])
function App() {


	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<div>
					<RouterProvider router={router} />
					<Toaster />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
