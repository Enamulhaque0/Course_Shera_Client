import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
const  {title, body , id , img, price} =course
    return (
        <div className='flex justify-center'>
          <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
	<img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-50 dark:bg-gray-500" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
			<p className="dark:text-gray-100">{body.slice(0,450)}</p>
		</div>
		<Link to={`../checkout/${id}`}>
		
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Enrol $ {price}</button>
		
		</Link>
	</div>
</div>
    </div>
       
    );
};

export default Course;