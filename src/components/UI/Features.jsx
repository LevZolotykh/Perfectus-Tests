import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const cards = [
    {
      imgsrc: "/images/FamilyIcon.svg",
      head: "Dentistry for the whole family",
      par: "Kids, teens, adults — we will provide excellent personalised treatment and quality dental care for all ages.",
    },
    {
      imgsrc: "/images/ComfortIcon.svg",
      head: "Patient comfort is #1",
      par: "We excel at dental excellence — enjoy a safe and comfortable visit.",
    },
    {
      imgsrc: "/images/ModernIcon.svg",
      head: "Modern, seamless treatments",
      par: "High-tech care whether your teeth need a polish or a total smile makeover.",
    },
    {
      imgsrc: "/images/LanguageIcon.svg",
      head: "Multiple languages spoken",
      par: "We are able to fluently communicate with patients that speak English, Vietnamese, Mandarin, Cantonese & Teochew.",
    },
  ];

  return (
    <section className="text-center py-8 px-4 lg:px-16 bg-gray-100">
      <h2 className="text-3xl lg:text-4xl font-serif leading-tight mb-8">
        There’s a reason patients choose us as their preferred dentist.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <FeatureCard
            key={index}
            imgsrc={card.imgsrc}
            head={card.head}
            par={card.par}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
