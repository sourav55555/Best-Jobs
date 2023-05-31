import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { JobsData } from '../App';
import Job from './Job';


const Jobs = () => {
    const [showAll, setShowAll] = useState(false);

    const [job, setJob] = useState([]);  

    const allJobs = useContext(JobsData);
    
    useEffect( ()=>{
        showAll ? setJob(allJobs) : setJob(allJobs.slice(0,4))
    } , [showAll])
    

    return (
        <div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 mb-5'>

            {
                showAll ? job.map(property => <Job job = {property} key={property.id}
                />) : allJobs.slice(0,4).map(property => <Job job = {property} key={property.id}
                />)
            }

            </div>
            <button onClick={() => setShowAll(!showAll)} className={`btn ${showAll ? "hidden": ""}`}>Show All</button>
            
        </div>
    );
};

export default Jobs;