import { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'

import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header/Header'

export const JobsData = createContext([]);

function App() {
  const [count, setCount] = useState([]);

  const allJobs = useLoaderData();

  useEffect( () => {
   /*  fetch('jobs.json')
    .then(res => res.json())
    .then(data => setCount(data)); */
    setCount(allJobs)
} , [])


  return (
    <div className="App">
      <JobsData.Provider value={count}>
        <Header/>
        <Outlet/>
        <Footer/>
      </JobsData.Provider>
    </div>
  )
}

export default App
