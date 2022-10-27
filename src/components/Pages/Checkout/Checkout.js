import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title} = useLoaderData()
    return (
        <div className='w-full h-96 flex justify-center items-center'>
            
            <h1 className='font-bold text-3xl text-green-800'>You are successful  enrolled in <small className='text-purple-500'>{title}</small> </h1>
        </div>
    );
};

export default Checkout;