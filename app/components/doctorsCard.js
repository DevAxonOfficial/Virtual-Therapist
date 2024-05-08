import React from "react";
import Image from "next/image";
const Doctors = (cards) => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-400">
      <div
        className={`flex flex-col items-center justify-center ${
          cards.index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div className={`md:w-1/2 ${cards.index % 2 === 0 ? "p-6" : "mb-5"}`}>
          <h1 className="text-white text-3xl">{cards.name}</h1>
          <h2 className="text-white text-xl">{cards.title}</h2>
          <p className="text-white">{cards.description}</p>
          <button className="px-12 py-4 text-xl font-bold bg-white rounded-lg mt-4">
            Consult &#10172;
          </button>
        </div>
        <div className={`md:w-1/2 ${cards.index % 2 === 0 ? "mb-5" : "p-6"}`}>
          <Image src={cards.image} alt={cards.alt} width={641} height={355} />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
