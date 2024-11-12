import React from "react";
import DescriptionCard from "./DescriptionCard";
const TripleCard = ({ head, par }) => {
  return (
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-center">
        Comprehensive Dental Treatments
      </h2>
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        At Advance Dental Canley Heights, we're committed to helping you achieve
        a lifetime of excellent oral health. From preventative care and regular
        check-ups, to restorative treatments and cosmetic dentistry, our
        experienced team is here for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <DescriptionCard
          imgsrc="/images/General.svg"
          head="General and Preventative"
          par="Cleanings, exams, fillings, and gum treatments. Put your best smile forward with help from our top-notch team. We’re your trusted dental partner and will keep your smile healthy for a lifetime."
        />
        <DescriptionCard
          imgsrc="/images/Restorative.svg"
          head="Restorative"
          par="Tough times happen. We restore broken, infected teeth, and lost teeth, and treat other concerns. An in-depth diagnosis and custom treatment plan help patients feel confident in their care."
        />
        <DescriptionCard
          imgsrc="/images/Cosmetic.svg"
          head="Cosmetic"
          par="Experience the joy of a brand new smile through state-of-the-art cosmetic care. From crowns to veneers, we have an eye for facial aesthetics and are known for our incredible transformations."
        />
      </div>

      <a
        href="tel:89218737073"
        className="mt-8 px-6 py-2 bg-cyan-600 text-white font-medium rounded border-4 border-salte-500"
      >
        ВСЕ УСЛУГИ
      </a>
    </div>
  );
};

export default TripleCard;
