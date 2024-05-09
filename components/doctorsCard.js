import React from "react";
import Image from "next/image";
import { HiChevronDoubleRight } from "react-icons/hi";
const Doctors = (cards) => {
  return (
    <div className="bg-gradient-to-r from-[#012727] via-[#016162] to-[#01989b]">
      <div
        className={`flex flex-col items-center justify-center ${
          cards.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div
          className={`md:w-1/2 ${
            cards.index % 2 === 0 ? "p-6 mb-5 md:hidden" : "p-6 md:hidden"
          }`}
        >
          <Image
            src={cards.image2}
            alt={cards.alt}
            width={261}
            height={269}
            className="md:hidden"
          />
        </div>
        <div
          className={`md:w-1/2 md:text-start text-center ${
            cards.index % 2 === 0 ? "p-6" : "p-6 mb-5"
          }`}
        >
          <h1 className="text-white text-3xl text-center md:text-start">
            {cards.name}
          </h1>
          <h2 className="text-white text-xl text-center md:text-start">
            {cards.title}
          </h2>
          <p className="text-white hidden md:block md:text-start">
            {cards.description}
          </p>
          <button className="button inline-flex items-center px-10 py-3 mt-4 bg-white  font-semibold rounded-lg shadow-md transition-all duration-500 ease-in-out hover:bg-gray-200 transform hover:translate-x-2">
            <span className="relative flex">
              Consult
              <span className="right-0 top-0 w-6 h-6 flex items-center justify-center transition-all duration-500 ease-in-out transform translate-x-0 group-hover:translate-x-full">
                <HiChevronDoubleRight className=" text-[50px]" />
              </span>
            </span>
          </button>
        </div>
        <div
          className={`md:w-1/2 ${cards.index % 2 === 0 ? "p-6 mb-5" : "p-6"}`}
        >
          <Image
            src={cards.image}
            alt={cards.alt}
            width={641}
            height={355}
            className="hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
