
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import process from "process"
// import { ClerkProvider } from '@clerk/clerk-react'
// import { configDotenv } from 'dotenv'

// const Key=process.env.REACT_APP_VITE_CLERK_PUBLISHABLE_KEY;
// console.log
// if (!Key) {
//   throw new Error("Missing Publishable Key")
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
)
