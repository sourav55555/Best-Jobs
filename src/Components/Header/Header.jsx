import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isOpen , setIsOpen] = useState(false);
    return (
        <nav className='my-container py-10 flex items-center justify-between bg-gradient-to-r from-[#dbe0ff] to-[#e9e0ff] relative'>

            <Link to="/">
                <h2 className='font-bold text-3xl'>Best-Jobs</h2>
            </Link>

            <div className={`flex z-10 items-center gap-6 md:flex-row flex-col absolute md:static md:bg-transparent bg-gradient-to-r from-[#dbe0ff] to-[#e9e0ff] md:w-auto w-full left-0 md:py-0 py-4 transition-all duration-200 -top-52 ${isOpen ? "top-24" : "-top-52"}`}>

                <NavLink onClick={() => setIsOpen(!isOpen)} to="/"  className={({ isActive}) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} to="statistics"  className={({ isActive}) => isActive ? "active" : ""}>Statistics</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} to="applied"  className={({ isActive}) => isActive ? "active" : ""}>Applied Jobs</NavLink>
                <NavLink onClick={() => setIsOpen(!isOpen)} to="blogs"  className={({ isActive}) => isActive ? "active" : ""}>Blogs</NavLink>

            </div>

            <div className='flex gap-4 items-center'>

                <button className='btn z-10'>Start Applying</button>
                <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen ?  <XCircleIcon className="h-6 w-6 text-red-400"/> : <Bars3Icon className="h-6 w-6 text-lime-700" />
                }
                </button>
            
           
            </div>
        </nav>
    );
};

export default Header;