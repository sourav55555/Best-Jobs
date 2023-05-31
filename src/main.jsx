import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Statistics from './Components/Statistics';
import AppliedJobs from './Components/AppliedJobs';
import Blogs from './Components/Blogs';
import JobDetails from './Components/JobDetails';
import ErrorPage from './Components/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: () => fetch("jobs.json"),
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"statistics",
        element: <Statistics/>
      },
      {
        path: "applied",
        element: <AppliedJobs/>
      },
      {
        path: "blogs",
        element: <Blogs/>
      },
      {
        path: "job/:id",
        element: <JobDetails/>
      },
      {
        path: "*",
        element: <ErrorPage/>
      }
      
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
