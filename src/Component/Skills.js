import React from "react";
import { SiReact, SiJavascript, SiTailwindcss } from "react-icons/si";

const skills = () => {
  return (
    <div className=" max-w-4xl mx-auto justify-center py-12" id="footer">
      <p className="text-black text-2xl text-center sm:text-4xl pt-4 font-bold">
        Skills
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl sm:w-52">
          <SiReact color="#2196f3" className=" mx-auto text-4xl" />
          <p className=" mt-6 text-xl sm:text-2xl font-semibold text-center">
            ReactJs
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl sm:w-52">
          <SiJavascript color="#ffdf00" className=" mx-auto text-4xl" />
          <p className=" mt-6 text-xl sm:text-2xl font-semibold text-center">
            Javascript
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-xl sm:w-52">
          <SiTailwindcss color="#00C0A3" className=" mx-auto text-4xl" />
          <p className=" mt-6 text-xl sm:text-2xl font-semibold text-center">
            Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default skills;
