import React from 'react';
import bannerimg1 from "../assets/Vector-1.png";
import bannerimg2 from "../assets/Vector.png";

const PageBanner = (props) => {

    return (
        <div className='h-44 bg-color flex justify-center items-center mb-32 relative'>
                <h2 className='text-3xl font-semibold'>{props.children}</h2>
                <img className='h-full absolute right-12 -top-32 z-0' src={bannerimg1} alt="" />
                <img className='h-full absolute left-12' src={bannerimg2} alt="" />
        </div>
    );
};

export default PageBanner;