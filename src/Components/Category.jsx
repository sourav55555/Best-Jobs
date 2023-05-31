import React from 'react';

const Category = ({category}) => {
    const {logo, name, available_posts} = category

    return (
        <div className='p-8 bg-color w-[310px] rounded-xl text-left'>

            <img className='w-10 h-10 mb-5' src={logo} alt="" />
            <p className='font-semibold text-lg mb-3'>{name}</p>
            <p className='text-gray-600 text-sm'>{available_posts} Jobs Available</p>
            
        </div>
    );
};

export default Category;