import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FcPrint } from "react-icons/fc";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


const Course = () => {
  const course = useLoaderData();
  const { title, body, id, img, price } = course;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Course Info",
    onAfterPrint: () => {},
  });

  return (
    <div
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
      className="flex justify-center items-center"
    >
      <div className="max-w-md rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 ">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide mb-8">
              {title}{" "}
              <span title="Download This Course Info" className="flex justify-end items-center cursor-pointer">
                <FcPrint onClick={handlePrint}></FcPrint>
              </span>
            </h2>

            <p className="dark:text-gray-100">{body.slice(0, 500)}</p>
          </div>
          <Link to={`../checkout/${id}`}>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Enrol $ {price}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
