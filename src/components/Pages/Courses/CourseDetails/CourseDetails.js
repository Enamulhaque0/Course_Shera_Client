import React from "react";
import { Link } from "react-router-dom";

const CourseDetails = ({ course }) => {
  const { img, instructor, title, id } = course;
  return (
    <Link to={`../course/${id}`}  >
      <div
        className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-sm  sm:px-12 dark:bg-gray-900 dark:text-gray-100"
        data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >
        <img
          src={img}
          alt=""
          className="w-56 rounded-sm h-30 mx-auto  dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>
            <p className="px-5 text-xs sm:text-base dark:text-blue-400 ">
              {instructor}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseDetails;
