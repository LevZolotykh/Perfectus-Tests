import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" text-center, p-8">
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
      <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;
