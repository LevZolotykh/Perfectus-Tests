import React from "react";
import DesktopTextOnPic from "../components/UI/TextOnPic";

const Home = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto">
      <DesktopTextOnPic
        imgsrc={"/images/Home1.svg"}
        head={"Надежные стоматологи в Перфектус"}
        par={"Опытная команда. Исключительный подход."}
      />
    </div>
  );
};

export default Home;
