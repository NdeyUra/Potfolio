import React from "react";
import profile from "../Images/profile.png";
import { FaGithub, FaTwitter, FaEnvelope, FaFacebook } from "react-icons/fa";

const card = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={profile}
            alt="profile"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">
            Saurav Kumar Pandey
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            React Developer
          </p>
          <div className="flex align-center justify-center mt-4">
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
        </div>
      </div>
    </div>
  );
};

export default card;
