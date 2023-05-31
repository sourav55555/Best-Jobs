import { data } from 'autoprefixer';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { JobsData } from '../App';
import { getappliedJobs } from '../assets/fakedb';
import AppliedJob from './AppliedJob';
import PageBanner from './PageBanner';


const AppliedJobs = () => {


    const allJobs = useContext(JobsData);

    const [showApplied, setShowApplied] = useState([]);

    const [filter, setFilter] = useState("");

    const alreadyDetails= getappliedJobs();
    let alreadyApplied = [];
    for(let id of alreadyDetails){
        alreadyApplied.push(allJobs.find(data => data.id == id))
    }
    

    let filtered = [];
    
    let handleChange = (event) => {

        setFilter(event.target.value)

    } 

    useEffect( ()=>{
        if(filter){
            filtered = alreadyApplied.filter(data => data.remote_or_onsite === filter);
            setShowApplied(filtered)
        }
        else{
            setShowApplied(alreadyApplied);
        }
    } , [filter])
    
    return (
        <div className='mb-40'>
            <PageBanner>Applied Jobs</PageBanner>
            
           <div className='my-container text-right'>
                <select className='rounded-lg px-2 py-3 border-2 bg-gray-100 my-6 ms-auto' onChange={handleChange} name="" id="">
                    <option value="">Filter By</option>
                    <option value="Remote">Remote</option>
                    <option value="Onsite">On-site</option>
                </select>
                
           {
                showApplied.map(data => <AppliedJob job={data} />)
            }
           </div>
            
        </div>
    );
};

export default AppliedJobs;