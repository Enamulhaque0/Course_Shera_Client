import userEvent from "@testing-library/user-event";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div></div>
              <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Students lose interest even in their favorite online courses if
                they are not organized well. That’s exactly where we come into
                play to ensure you stay motivated to complete your courses in
                the best possible manner.
              </h1>
            </div>
            {/* <div className=" btn btn-warning items-center ">
             
              <Link
                to="/register"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Register 
              </Link>
            </div> */}
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <iframe
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
            src="https://embed.lottiefiles.com/animation/87979"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
