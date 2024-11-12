import React from "react";
import DesktopTextOnPic from "../components/UI/TextOnPic";
import FeedbackCard from "../components/UI/FeedbackCard";
import TripleCard from "../components/UI/TripleCard";

const Home = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <DesktopTextOnPic
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
    </div>
  );
};

export default Home;
