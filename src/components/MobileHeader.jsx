import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";

const MobileHeader = () => {
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
      <nav className="shadow-none w-full bg-white h-24 flex items-center justify-between">
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
        <div className="pr-6 hidden  sm516:block">
          <a
            href="tel:89218737073"
            className=" w-full font-bold bg-cyan-600 text-center border-4 border-salte-500 p-4 rounded"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </nav>
      <Menu active={menuActive} setActive={setMenuActive} items={items} />
    </header>
  );
};
export default MobileHeader;
