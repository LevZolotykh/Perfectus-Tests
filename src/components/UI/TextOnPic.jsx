import React from "react";

const DesktopTextOnPic = ({ head, par, imgsrc }) => {
  return (
    <div className="relative mx-auto">
      <img src={imgsrc} alt="Home1" className=" w-full" />
      <img
        src={imgsrc}
        alt="Home1"
        className=" w-full absolute top-0 mask-gradient-to-r brightness-50"
      />
      <div className="absolute top-1/4 left-1/4 flex flex-col max-w-3xl">
        <h1 className="headerText text-white">{head}</h1>
        <p className=" paragraphText mb-10 mx-0 text-white">{par}</p>
        <div className="pr-6 hidden md:block">
          <a
            href="tel:89218737073"
            className=" w-full font-bold bg-white text-center text-black border-4 border-salte-500 p-4 rounded "
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
        <p className=" mx-0 mt-8 text-xl font-bold text-white hidden md:block">
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

export default DesktopTextOnPic;
