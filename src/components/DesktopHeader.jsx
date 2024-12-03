import React from "react";
import { Link } from "react-router-dom";

const DesktopHeader = () => {
  return (
    <header className="flex justify-between items-center w-screen">
      <div className="mr-4">
        <Link to="/" className="flex items-center p-4 text-black text-xl mr-2">
          <img src="/images/Logo.svg" alt="Logo" className="w-12 h-12 mr-2" />
          {/* <span className="text-xl">Перфектус</span> */}
          Перфектус
        </Link>
      </div>
      <nav className=" flex space-x-5 justify-end border-none shadow-none bg-white items-center">
        <Link to="/about" className="text-black text-xl">
          О нас
        </Link>
        <Link to="/clinic" className="text-black text-xl">
          Клиника
        </Link>
        <Link to="/prices" className="text-black text-xl">
          Прейскурант
        </Link>
        <Link to="/services" className="text-black text-xl">
          Услуги
        </Link>
        <Link to="/contacts" className="text-black text-xl">
          Контакты
        </Link>
        <div className="pr-6">
          <a
            href="tel:89218737073"
            className=" w-full font-bold bg-cyan-600 text-center border-4 border-salte-500 p-4 rounded"
            aria-label="Записаться"
          >
            ЗАПИСАТЬСЯ
          </a>
        </div>
      </nav>
    </header>
  );
};

export default DesktopHeader;
