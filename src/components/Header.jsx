import React, { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", to: "/" },
    { value: "О нас", to: "/about" },
    { value: "Клиника", to: "/clinic" },
    { value: "Цены", to: "/prices" },
    { value: "Услуги", to: "/services" },
    { value: "Контакты", to: "/contacts" },
  ];
  return (
    <header>
      <nav className="w-full h-14 bg-gray-700 fixed z-50 flex items-center">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span className="absolute top-3 w-5 bg-black h-0.5" />
        </div>
      </nav>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Перфектус"}
        items={items}
      />
    </header>
  );
};

export default Header;
