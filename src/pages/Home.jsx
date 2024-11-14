import React from "react";
import TextOnPic from "../components/UI/TextOnPic";
import FeedbackCard from "../components/UI/FeedbackCard";
import TripleCard from "../components/UI/TripleCard";
import Features from "../components/UI/Features";
import DoctorCard from "../components/UI/DoctorCard";
import VisitUs from "../components/UI/VisitUs";
import Carousel from "../components/UI/Carousel";

const Home = () => {
  const images = [
    "/images/Carousel1.svg",
    "/images/Carousel2.svg",
    "/images/Carousel3.svg",
    "/images/Carousel4.svg",
    "/images/Carousel5.svg",
  ];
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <TextOnPic
        imgsrc={"/images/Home1.svg"}
        head={"Надежные стоматологи в Перфектус"}
        par={"Опытная команда. Исключительный подход."}
      />
      <FeedbackCard />
      <TripleCard
        head={"Comprehensive Dental Treatments"}
        par={
          "At Advance Dental C anley Heights, we’re committed to helping you achieve a lifetime of excellent oral health. From preventative care and regular check-ups, to restorative treatments and cosmetic dentistry, our experienced team is here for you."
        }
      />
      <Features />
      <DoctorCard />
      <VisitUs />
      <Carousel images={images} variant="variant1" />
    </div>
  );
};

export default Home;
