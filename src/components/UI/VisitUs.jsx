import React from "react";
import { FiMapPin, FiClock } from "react-icons/fi";

const VisitUs = () => {
  return (
    <section className="px-4 py-8 sm:px-8 md:px-16 lg:px-24">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Посетите нас</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
        Мы находимся в удобном месте в центре Приозерска. Найдите нас на 3-м
        этаже бизнес-центра по адресу: улица Калинина, 11. Бесплатная парковка
        доступна.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:flex-1 p-4 border rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiMapPin className="text-cyan-600 mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />
            <h3 className="font-semibold">Локация</h3>
          </div>
          <p className="text-gray-700 mb-2">Приозерск, ул. Калинина, 11</p>
          <a
            href="https://yandex.ru/maps/?ll=30.129719%2C61.046928&z=15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            Открыть в картах
          </a>
          <div className="mt-4">
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.129719%2C61.046928&z=15&l=map"
              width="100%"
              height="300"
              title="Yandex Map"
            ></iframe>
          </div>
        </div>

        <div className="md:flex-2 p-4 border rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FiClock className="text-cyan-600 mr-2 text-sm sm:text-base md:text-lg lg:text-xl" />
            <h3 className="font-semibold">Время работы</h3>
          </div>
          <table className="w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td>Понедельник</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Вторник</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Среда</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Четверг</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Пятница</td>
                <td>9:00 - 18:00</td>
              </tr>
              <tr>
                <td>Суббота</td>
                <td>9:00 - 14:00</td>
              </tr>
              <tr>
                <td>Воскресенье</td>
                <td className="text-red-500">Выходной</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
