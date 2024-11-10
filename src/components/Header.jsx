import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

const Header = () => {
  return (
    <header>
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
