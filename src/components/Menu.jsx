import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Menu = ({ items, active, setActive }) => {
  return (
    <div
      className={clsx(
        " fixed w-screen",
        "h-screen",
        "top-0",
        "left-0 ",
        "duration-200",
        "z-10",
        {
          "-translate-x-full": !active,
          " @apply -translate-x-0": active,
        }
      )}
      onClick={() => setActive(false)}
    >
      <div
        className="flex flex-col items-left w-3/4 h-full bg-white duration-400 "
        onClick={(e) => e.stopPropagation()}
      >
        {active && (
          <nav className="flex flex-col bg-white text-lg text-black w-full h-full">
            {items.map((item, index) =>
              index === 0 ? (
                <Link
                  key={item.to}
                  to={item.to}
                  className="flex items-center p-6 border text-black"
                >
                  <img
                    src="/images/Logo.svg"
                    alt="Logo"
                    className="w-12 h-12 mr-2"
                  />
                  <span className="text-xl ">{item.value}</span>
                </Link>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="w-full flex justify-start items-center p-6 border border-bottom-slate-500 bg-white text-black"
                >
                  <span className="flex-grow text-left text-xl">
                    {item.value}
                  </span>
                </Link>
              )
            )}
            <div className="w-full mt-auto">
              <a
                href="tel:89218737073"
                className="block w-full font-bold bg-cyan-600 text-center p-2 border-4 border-salte-500 rounded"
              >
                ЗАПИСАТЬСЯ
              </a>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Menu;
