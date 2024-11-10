import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <header className="relative w-screen max-w-screen-2xl mx-auto">
      <div className="block md:hidden">
        <MobileHeader />
      </div>

      <div className="hidden md:flex">
        <DesktopHeader />
      </div>
    </header>
  );
};

export default Header;
