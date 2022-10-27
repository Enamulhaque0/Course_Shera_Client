import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCategory from '../CourseCategry/CourseCategory';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
    const courses = useLoaderData()
   
    return (
        <div className='flex sm:flex-col-1'>
         
  <div className="flex-auto w-64 ...">

<div className='grid lg:grid-cols-2  gap-3 mx-8 my-6'>
{
        courses.map(course => <CourseDetails key={course.id} course={course}></CourseDetails>)
    }
</div>
    
  </div>
  <div className="flex-auto w-32 hidden lg:block">
    {
        courses.map(course => <CourseCategory key={course.id} course={course}></CourseCategory>)
    }
  </div>
        </div>
    );
};

export default Courses;