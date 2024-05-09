import React from "react";
import Doctors from "./doctorsCard";
import { PROMPS_DOCTORS } from "../utils/constants";
import { HiChevronDoubleRight } from "react-icons/hi";

const Body = () => {
  return (
    <div>
      <p className="text-white text-center p-10 font-bold text-3xl bg-gradient-to-r from-[#012727] via-[#016162] to-[#01989b]">
        Meet Our Doctors
      </p>
      {PROMPS_DOCTORS.map((DOCTORS, index) => (
        <Doctors key={index} {...DOCTORS} />
      ))}

      <div
        className="bg-contain bg-no-repeat bg-center h-[230px] md:block hidden"
        style={{
          backgroundImage: "url('/img/Mental Health.png')",
          backgroundSize: "100% 100%",
        }}
      >
        {" "}
        <div className="flex justify-start items-center h-full p-14">
          <div className="text-wrap">
            <h1 className="text-white lg:text-3xl md:text-2xl font-light">
              Your Mental Health Matters:
            </h1>
            <p className="font-bold lg:text-4xl text-white md:text-2xl">
              Access Virtual Therapy Anytime, Anywhere
            </p>
            <button className="button inline-flex items-center px-10 py-3 mt-4 bg-white  font-semibold rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:translate-x-2">
              <span className="relative flex">
                Get Started
                <span className="right-0 top-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full">
                  <HiChevronDoubleRight className=" text-[50px]" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-contain bg-center bg-no-repeat  h-[503px] md:hidden"
        style={{
          backgroundImage: "url('/img/Mental Health Mobile.png')",
          backgroundSize: "100% 100%",
        }}
      >
        {" "}
        <div className=" md:hidden ">
          <div className="block items-center text-center p-16">
            <h1 className="text-white text-lg font-light">
              Your Mental Health Matters:
            </h1>
            <p className="font-bold text-[25px] text-white ">
              Access Virtual Therapy Anytime, Anywhere
            </p>
            <button className="button inline-flex items-center px-10 py-3 mt-4 bg-white  font-semibold rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:translate-x-2">
              <span className="relative flex">
                Get Started
                <span className="right-0 top-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full">
                  <HiChevronDoubleRight className=" text-[50px]" />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-start items-center h-full p-14">
          <div className="text-wrap">
            <h1 className="text-white lg:text-3xl md:text-2xl font-light">
              Your Mental Health Matters:
            </h1>
            <p className="font-bold lg:text-4xl text-white md:text-2xl">
              Access Virtual Therapy Anytime, Anywhere
            </p>
            <button className="button inline-flex items-center px-10 py-3 mt-4 bg-white  font-semibold rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:translate-x-2">
              <span className="relative flex">
                Get Started
                <span className="right-0 top-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full">
                  <HiChevronDoubleRight className=" text-[50px]" />
                </span>
              </span>
            </button>
          </div>
        </div> */}
    </div>
  );
};

export default Body;
