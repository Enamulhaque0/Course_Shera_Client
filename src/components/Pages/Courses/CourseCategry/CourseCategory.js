import React from 'react';
import { Link } from 'react-router-dom';


const CourseCategory = ({course}) => {
    const {id,title} = course
    return (
       <Link to={`../course/${id}`}>
       
       
       <div>
             <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
     
      <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
        <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
          <div className="mr-2">
          
         
          </div>
          <span className="text-gray-800 transition-colors duration-200 group-hover:text-blue-600 cursor-pointer">
            {title}
          </span>
        </div>
      
        
     
      
      </div>
    </div>
        </div>
       
       
       </Link>
    );
};

export default CourseCategory;