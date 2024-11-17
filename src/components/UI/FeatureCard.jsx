import React from "react";

const FeatureCard = ({ head, par, imgsrc }) => {
  return (
    <div className="flex items-start p-4 rounded-lg shadow-lg bg-white">
      <div className="w-1/3 h-full flex items-left justify-left">
        <img
          src={imgsrc}
          alt=""
          className="w-full h-full object-contain max-h-32"
        />
      </div>
      <div className="w-2/3 pl-4 flex flex-col items-start text-left">
        <h3 className="text-lg font-semibold mb-2">{head}</h3>
        <p className="text-sm text-gray-600">{par}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
