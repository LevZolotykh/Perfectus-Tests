import React from "react";
import clsx from "clsx";

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div
      className={clsx(
        " fixed w-screen",
        "h-screen",
        "top-14",
        "left-0 ",
        "duration-200",
        {
          "-translate-x-full": !active,
          " @apply -translate-x-0": active,
        }
      )}
      onClick={() => setActive(false)}
    >
      <div
        className="flex flex-col items-center w-1/3 h-full bg-white duration-400 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-base text-black p-2.5">{header}</div>
        <ul className="flex items-center flex-col text-center">
          {items.map((item) => (
            <li className="flex items-center m-2.5">
              <a href={item.to} className="text-black">
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
