import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">
        There’s a reason patients choose us as
        <br />
        their preferred dentist.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl">
        <FeatureCard
          head="Dentistry for the whole family"
          par="Kids, teens, adults — we will provide excellent personalised treatment and quality dental care for all ages."
          imgsrc="/images/FamilyIcon.svg"
        />
        <FeatureCard
          head="Patient comfort is #1"
          par="We excel at dental excellence — enjoy a safe and comfortable visit."
          imgsrc="/images/ComfortIcon.svg"
        />
        <FeatureCard
          head="Modern, seamless treatments"
          par="High-tech care whether your teeth need a polish or a total smile makeover."
          imgsrc="/images/ModernIcon.svg"
        />
        <FeatureCard
          head="Multiple languages spoken"
          par="We are able to fluently communicate with patients that speak English, Vietnamese, Mandarin, Cantonese & Teochew."
          imgsrc="/images/LanguageIcon.svg"
        />
      </div>
    </div>
  );
};

export default Features;
