import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsData } from '../App';
import bannerImg from "../assets/—Pngtree—online recruitment concept with a_7537121.png"
import Category from './Category';
import Jobs from './Jobs';

const Home = () => {
    const [category, setCategory] = useState([])

    const jobs = useContext(JobsData);

    useEffect( () =>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    } , [])

    return (
        <div className='mb-40'>

            <div className='flex justify-center flex-col md:flex-row items-center my-container bg-gradient-to-r from-[#dbe0ff] to-[#e9e0ff] mb-32'>

                <div className='md:w-1/2 w-full'>
                    <h2 className='text-5xl mb-6 font-bold'>
                        One Step <br/> Closer To Your<br/>
                        <span className='text-emerald-400'>Dream Job</span>
                    </h2>
                    
                    <p className='w-4/6 mb-6 p-color'>
                        Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <button className='btn'>Get Started</button>
                </div>

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center'>
                    <img className='md:h-[500px] md:w-[550px] w-full' src={bannerImg} alt="banner image" />
                </div>

            </div>

            <div className='my-container text-center mb-32'>
                <h3 className='font-semibold text-3xl mb-4'>Job Category List</h3>
                <p className='mb-6 p-color'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='flex md:flex-nowrap flex-wrap items-center justify-around gap-6'>
                {
                    category.map( data => <Category category={data} key={data.id}/>)
                }
                </div>

            </div>

            <div className='my-container text-center'>

                <h3 className='font-semibold text-3xl mb-4'>Featured Jobs</h3>
                <p className='mb-6 p-color'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                    <div>
                    {
                        <Jobs />
                    }
                    </div>
                
            </div>

        </div>
        
    );
};

export default Home;