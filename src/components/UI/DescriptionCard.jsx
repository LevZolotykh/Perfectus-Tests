import React from "react";

const DescriptionCard = ({ head, par, imgsrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start text-left max-w-96 md:w-full">
      <div className="w-full flex justify-center items-center mb-4">
        <img
          src={imgsrc}
          alt={head}
          className="w-full h-auto max-h-60 object-contain rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{head}</h3>
      <p className="text-gray-600 mx-0">{par}</p>
    </div>
  );
};

export default DescriptionCard;
