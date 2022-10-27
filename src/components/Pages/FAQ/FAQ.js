import { useState } from "react";

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border rounded shadow-sm">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <div className="flex items-center justify-center w-8 h-8 border rounded-full">
            <svg
              viewBox="0 0 24 24"
              className={`w-3 text-gray-600 transition-transform duration-200 ${
                isOpen ? 'transform rotate-180' : ''
              }`}
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="2,7 12,17 22,7"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
   const FAQ = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          
          <div className="space-y-4">
            <Item title="How can you help me learn to code?">
            You'll learn to code by completing coding challenges and building projects
            . You'll also earn verified certifications along the way.
            </Item>
            <Item title="How long will it take me to finish each of Course Shera certifications??">
            Each certification takes around 300 hours of dedicated learning. Some people may take longer. 
            These certifications are completely self-paced, so take as long as you need.
            </Item>
            <Item title="Do Programiz PRO have any mobile apps?">
            No, currently, we only have a web app. However, Programiz PRO is well optimized for all devices.
            </Item>
            <Item title="What is the difference between a Completion Certificate and a Professional Certificate?">
            You will get a Professional Certificate once you complete a learning path. However, you can get a 
            Completion Certificate after completing each level in a learning path. If you are signed in, you can also track your progress and
             closeness of certificates in the progress page which you can visit from navbar
            </Item>
          </div>
        </div>
      </div>
    );
  };
  export default FAQ