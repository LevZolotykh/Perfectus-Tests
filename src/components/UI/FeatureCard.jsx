import React from "react";

const FeatureCard = ({ head, par, imgsrc }) => {
  return (
    //     <div className="flex items-start p-4 bg-white shadow-lg rounded-lg h-full">
    //       <div className="flex-shrink-0 h-full aspect-square">
    //         <img src={imgsrc} alt="" className="h-full w-full object-contain" />
    //       </div>
    //       <div className="ml-4">
    //         <h3 className="text-lg font-semibold mb-2">{head}</h3>
    //         <p className="text-sm text-gray-600 mx-0">{par}</p>
    //       </div>
    //     </div>
    //   );
    <div className="flex items-start p-4 bg-white shadow-lg rounded-lg h-full">
      <div className="w-full">
        <img
          src={imgsrc}
          alt={head}
          className="h-full w-full object-contain mr-4"
        />
      </div>
      <div className=" flex flex-col justify-between">
        <h3 className="text-lg font-semibold mb-2">{head}</h3>
        <p className=" m-0 text-sm text-gray-600 break-words">{par}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
