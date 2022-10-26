import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({course}) => {

    const {img,instructor,price,title,id}= course
    return (
        <Link to= {`../course/${id}`} >
        <div>
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50">
	<img  src={img} alt="" className=" w-42 rounded-md h-72 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Price : $ {price}</span>
		<h2 className="text-xl font-semibold tracking-wide">{title}</h2>
	</div>
	<p className="dark:text-gray-100">instructor : {instructor}</p>
</div>
        </div>
        
        
        </Link>
    );
};

export default CourseDetails;