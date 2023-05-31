import React from 'react';
import PageBanner from './PageBanner';

const Blogs = () => {
    return (
        <div>
            <PageBanner>Blogs</PageBanner>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-container mb-36' >

                <div className='border-[#909ffd] border rounded-lg p-5 md:p-8'>
                    <p className='border-b-[#a4aff8] bg-gray-100 rounded-lg py-4 px-2 border-b-2 '>Why should we use context Api?</p>
                    <p className='px-2 py-3'>Sometimes there are some data, we need to pass through many nested child components. We can do that with context API. Normally we can pass data from parent to child components using props. But we need to pass the props every time in all child components. With context Api, we don't need to use props and we can receive the data directly by context Api.</p>
                </div>

                <div className='border-[#909ffd] border rounded-lg p-5 md:p-8'>
                    <p className='border-b-[#a4aff8] bg-gray-100 rounded-lg py-4 px-2 border-b-2 '>What is a custom hook? </p>
                    <p className='px-2 py-3'>Custom hook name start with "use". It's a javascript function. We can use other hooks and our logic to create a new hook. </p>
                </div>

                <div className='border-[#909ffd] border rounded-lg p-5 md:p-8'>
                    <p className='border-b-[#a4aff8] bg-gray-100 rounded-lg py-4 px-2 border-b-2 '>What is useRef? </p>
                    <p className='px-2 py-3'>useRef is a react hook. We can store a mutable value in this hook, that does not cause a re-render when updated. It accepts one argument as the initial value and returns a reference.</p>
                </div>
                
                <div className='border-[#909ffd] border rounded-lg p-5 md:p-8'>
                    <p className='border-b-[#a4aff8] bg-gray-100 rounded-lg py-4 px-2 border-b-2 '>What is useMemo?</p>
                    <p className='px-2 py-3'>useMemo is a react hook. It can return a memorized value so that the value doesn't need to be recalculated. It runs if the dependencies are changed or updated.</p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;