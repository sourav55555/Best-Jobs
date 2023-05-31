import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black my-container text-gray-400 pt-28'>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12'>
            <div className=''>
                <h2 className='font-semibold text-3xl text-white mb-4'>Best-Jobs</h2>
                <p >
                There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
                </p>
            </div>

            <div className='ms-6'>
                <h4 className='text-xl font-semibold text-white mb-4'>Company</h4>
                <ul className='leading-8'>
                    <li><a href="#">About US</a></li>
                    <li><a href="#"></a>Latest</li>
                    <li><a href="#"></a>Work</li>
                    <li><a href="#"></a>Carrer</li>
                </ul>
            </div>

            <div className='ms-6'>
                <h4 className='text-xl font-semibold text-white mb-4'>Product</h4>
                <ul className='leading-8'>
                    <li><a href="">Prototype</a></li>
                    <li><a href="">Plans</a></li>
                    <li><a href="">Customers</a></li>
                    <li><a href="">Integrations</a></li>
                </ul>
            </div>

            <div className='ms-6'>
                <h4 className='text-xl font-semibold text-white mb-4'>Support</h4>
                <ul className='leading-8'>
                    <li><a href="">Help</a></li>
                    <li><a href="">Sales</a></li>
                    <li><a href="">Partner</a></li>
                    <li><a href="">Developers</a></li>
                </ul>
            </div>

            <div className='ms-6'>
                <h4 className='text-xl font-semibold text-white mb-4'>Contact</h4>
                <p>524 Broadway , NYC</p>
                <p>+1 777 - 978 - 5570</p>
            </div>
            </div>

            <div className='flex justify-between items-center flex-wrap py-16 pb-20'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by Best-Jobs</p>
            </div>
            
        </div>
    );
};

export default Footer;