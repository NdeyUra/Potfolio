import React from "react";
import { FaGithub, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const footer = () => {
  return (
    <div className=" py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          href="https://github.com"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaTwitter />
          <span className="sr-only">Twitter</span>
        </a>
        <a
          href="https://github.com"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          href="https://github.com"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaFacebook />
          <span className="sr-only">Facebook</span>
        </a>
        <a
          href="https://github.com"
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300"
        >
          <FaEnvelope />
          <span className="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with
          <span className="mr-2" role="link" aria-label="heart">
            💙
          </span>
          by
          <a
            className="text-blue-500 hover:underline"
            href="mailto:sauravpandey109@gmail.com"
          >
            {" "}
            Saurav Kumar Pandey
          </a>
        </p>
      </div>
    </div>
  );
};

export default footer;
