import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon, InformationCircleIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { addToDb, getappliedJobs } from '../assets/fakedb';
import { JobsData } from '../App';
import PageBanner from './PageBanner';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {
    const params = useParams();
    const [matched, setMatched] = useState({});

    const applyJob = (id) => {
        addToDb(id)
    }

    const job = useContext(JobsData);

    useEffect( () => {
        setMatched(job.find(job => job.id == params.id))
    } , [params])

    const {id, title, company_name, remote_or_onsite, location, full_time_or_part_time, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information} = matched;
    return (
        <div>
            <PageBanner>Job Details</PageBanner>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-container mb-32'>

                <div className='col-span-2'>
                   <p className='mb-6 p-color'><span className='font-semibold text-black mr-2'>Job Description:</span>
                        {job_description}
                   </p>

                   <p className='mb-6 p-color'><span className='text-black font-semibold mr-2'>Job Responsibility:</span> 
                        {job_responsibility}
                   </p>

                   <p className='mb-6 p-color'><span className='text-black font-semibold'>Educational Requirements:</span><br/>
                        {educational_requirements}
                   </p>

                    <p className='mb-6 p-color'><span className='text-black font-semibold'>Experiences:</span><br/>
                        {experiences}
                    </p>

                </div>

                <div>
                <div className='bg-color p-6 rounded-lg text-lg'>
                    <h2 className='font-semibold text-xl'>Job Details</h2>
                    <div  className='bg-slate-400 my-4 h-[1px]' ></div>
                    <p className='flex gap-2 p-color mb-3'>
                        <span className='flex items-center gap-1 font-semibold text-black'>  <CurrencyDollarIcon className="h-6 w-6 text-[#8091fd]" /> Salary:</span> {salary}
                    </p>

                    <p className='flex gap-2 p-color mb-6'>
                        <span className='flex items-center gap-1 font-semibold text-black'>  <CalendarDaysIcon className="h-6 w-6 text-[#8091fd]" /> Job Title:</span> {title}
                       
                    </p>

                    <h2 className='font-semibold text-xl'>Contact Information</h2>

                    <div  className='bg-slate-400 my-4 h-[1px]' ></div>
                    <p className='flex gap-2 p-color mb-3 items-center'>
                        <InformationCircleIcon className="h-8 w-8 text-[#8091fd]" />{contact_information}
                    </p>
                    
                    <p className='flex gap-2 p-color mb-4'>
                        <span className='flex items-center gap-1 font-semibold text-black'><MapPinIcon className="h-6 w-6 text-[#8091fd]" /> Address:</span> {location}
                    </p>

                </div>
                    <button onClick={() => applyJob(id)} className='btn w-full my-4'>Apply Now</button>
                    <Toaster />
                </div>

            </div>
        </div>
    );
};

export default JobDetails;