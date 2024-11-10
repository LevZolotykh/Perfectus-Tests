import React from "react";

const TextOnPic = ({ head, par }) => {
  return (
    <div className="relative mx-auto">
      <img src="/images/Home1.svg" alt="Home1" className=" w-full" />
      <img
        src="/images/Home1.svg"
        alt="Home1"
        className=" w-full absolute top-0 mask-gradient-to-r filter blur-xl"
      />
      <div className="absolute top-1/4 left-1/4 flex flex-col max-w-3xl">
        <h1 className="text-5xl text-white">{head}</h1>
        <p className=" text-xl mb-10 mx-0 text-white">{par}</p>
        <div className="pr-6">
          <a
            href="tel:89218737073"
            className=" w-full font-bold bg-white text-center text-black border-4 border-salte-500 p-4 rounded "
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
        <p className="mx-0 mt-10 text-xl font-bold text-white">
          ИЛИ ПОЗВОНИТЕ:
          <a
            href="tel:89218737073"
            className="text-2xl font-bold text-white ml-3"
          >
            +7 (921) 873 70-73
          </a>
        </p>
      </div>
    </div>
  );
};

export default TextOnPic;
