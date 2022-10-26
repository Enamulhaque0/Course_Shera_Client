import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title, body , id , img, price} = useLoaderData()
    return (
        <div className='w-full h-96 flex justify-center items-center'>
            
            <h1 className='font-bold text-3xl text-green-800'>{title} successfully purchased!! thank you</h1>
        </div>
    );
};

export default Checkout;