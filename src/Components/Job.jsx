import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const {id, logo, title, company_name, remote_or_onsite, location, full_time_or_part_time, salary} = job
    return (
        <div className='p-6 border rounded-lg border-blue-200 text-left '>

            <img className='w-36 h-16 rounded-2xl mb-5' src={logo} alt="" />
            <p className='mb-2 text-lg font-semibold'>{title}</p>
            <p className='mb-4'>{company_name}</p>

            <div className='flex gap-4 mb-4'>
                <p className='px-2 text-sm py-1 border-2 rounded-lg border-blue-600 text-blue-600'>{remote_or_onsite}</p>
                <p className='px-2 text-sm py-1 border-2 rounded-lg border-blue-600 text-blue-600'>{full_time_or_part_time}</p>
            </div>

            <div className='flex flex-col md:flex-row mb-5 gap-4'>
                <p className='flex items-center gap-1'> <MapPinIcon className="h-4 w-4 text-[#a4b0fa]" /> {location}</p>
                <p className='flex items-center gap-1'> <CurrencyDollarIcon className="h-4 w-4 text-[#a4b0fa]" />  {salary}</p>
            </div>
            
            <Link to={`job/${id}`}>
                <button className='rounded-lg bg-gradient-to-r from-[#909ffd] to-[#a988fc] text-white font-semibold hover:bg-gradient-to-r py-2 px-3'>View Details</button>
            </Link>
        </div>
        
    );
};

export default Job;