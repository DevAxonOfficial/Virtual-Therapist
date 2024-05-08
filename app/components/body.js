import React from "react";
import Doctors from "./doctorsCard";
import { PROMPS_DOCTORS } from "../utils/constants";
const Body = () => {
  return (
    <div>
      <p className="text-white text-center p-10 font-bold text-3xl bg-gradient-to-r from-gray-800 to-gray-400">
        Meet Our Doctors
      </p>
      {PROMPS_DOCTORS.map((DOCTORS, index) => (
        <Doctors key={index} {...DOCTORS} />
      ))}
    </div>
  );
};

export default Body;
