import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 text-white py-6 px-4 text-sm md:text-base mx-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Адрес */}
        <div className="flex flex-col space-y-2">
          <a
            href="https://yandex.ru/maps/?text=Приозерск%20улица%20Калинина%20д11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            <p>улица Калинина, д 11</p>
            <p>Приозерск</p>
          </a>
          <a
            href="https://vk.com/perfdentis?from=search"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4"
          >
            <img src="/images/VKIcon.svg" alt="VK" className="w-6 h-6" />
          </a>
        </div>

        <div className="hidden md:block">
          <h3 className="font-bold mb-2">Часы работы</h3>
          <ul>
            <li>Понедельник: 9:30 - 6:00</li>
            <li>Вторник: 9:30 - 6:00</li>
            <li>Среда: 9:30 - 6:00</li>
            <li>Четверг: 9:30 - 6:00</li>
            <li>Пятница: 9:30 - 6:00</li>
            <li>Суббота: 9:30 - 6:00</li>
            <li>Воскресенье: Выходной</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Навигация</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/about" className="hover:underline">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/clinic" className="hover:underline">
                Клиника
              </Link>
            </li>
            <li>
              <Link to="/prices" className="hover:underline">
                Прейскурант
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="hover:underline">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-xs text-left">
        © 2024 Перфектус. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
