import React from "react";

const FeedbackCard = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8 w-5/6">
      <div className="flex flex-col lg:flex-row lg:space-x-8 flex-grow">
        <div className="lg:w-3/5 w-full mb-6 lg:mb-0">
          <h1 className="text-3xl lg:text-4xl font-serif leading-tight mb-4">
            Мы - семейная стоматология Перфектус
          </h1>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
            Наша клиника в городе Приозерск на улице Калинина 11 стремится
            предоставлять качественные стоматологические услуги для всей семьи.
            Наши пациенты особенно ценят индивидуальный подход и заботу. Мы
            приглашаем вас оценить уровень сервиса и профессионализма наших
            специалистов.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
            Запишитесь на консутльтацию по номеру{" "}
            <a
              href="tel:+79218737073"
              className="text-blue-600 font-medium underline"
            >
              +7 (921) 873-70-73
            </a>
            .
          </p>
        </div>

        {/* Виджет с отзывами */}
        <div className="lg:w-2/5 w-full hidden sm516:flex h-1/2">
          <div className="relative w-full h-[400px] lg:h-[480px]">
            {/* Яндекс-виджет отзывов */}
            <iframe
              className="w-full lg:aspect-square lg:h-auto h-full border border-gray-300 rounded-lg"
              src="https://yandex.ru/maps-reviews-widget/169644780197?comments"
              title="FeedBacks"
            ></iframe>
            <a
              href="https://yandex.ru/maps/org/perfektus/169644780197/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs text-gray-400 block mt-2"
            >
              Перфектус на карте Приозерска — Яндекс Карты
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
