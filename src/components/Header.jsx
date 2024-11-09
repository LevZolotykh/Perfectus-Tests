import React, { useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Перфектус", to: "/" },
    { value: "О нас", to: "/about" },
    { value: "Клиника", to: "/clinic" },
    { value: "Цены", to: "/prices" },
    { value: "Услуги", to: "/services" },
    { value: "Контакты", to: "/contacts" },
  ];
  return (
    <header>
      <nav className="w-full bg-white h-24 fixed flex items-center">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <div className="border border-black w-7 my-auto"></div>
        </div>

        <Link
          to="/"
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center p-6  text-black"
        >
          <img src="/images/Logo.svg" alt="Logo" className="w-12 h-12 mr-2" />
          <span className="text-xl ">Перфектус</span>
        </Link>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </header>
  );
};

export default Header;
