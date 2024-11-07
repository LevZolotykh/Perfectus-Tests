import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/clinic">Клиника</Link>
        <Link to="/prices">Цены</Link>
        <Link to="/services">Услуги</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
};

export default Header;
