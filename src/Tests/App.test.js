import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("Рендер главной страницы по маршруту '/'", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const images = screen.getAllByRole("img");
  expect(images.length).toBeGreaterThan(0);
});

test("Рендер AboutUs по маршруту '/about'", () => {
  render(
    <MemoryRouter initialEntries={["/about"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/что-то про нас/i)).toBeInTheDocument();
});

test("Переход на страницу ошибки для несуществующего URL", () => {
  render(
    <MemoryRouter initialEntries={["/неизвестный-путь"]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/404 - страница не найдена/i)).toBeInTheDocument();
});

test("Проверка наличия виджета Яндекс.Карт на главной странице", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const iframe = screen.getByTitle("Yandex Map");
  expect(iframe).toBeInTheDocument();

  expect(iframe).toHaveAttribute(
    "src",
    "https://yandex.ru/map-widget/v1/?ll=30.129719%2C61.046928&z=15&l=map"
  );
});

test("Проверка наличия ссылки на Яндекс.Карты", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const mapLink = screen.getByRole("link", { name: "Открыть в картах" });
  expect(mapLink).toBeInTheDocument();

  expect(mapLink).toHaveAttribute(
    "href",
    "https://yandex.ru/maps/?ll=30.129719%2C61.046928&z=15"
  );
});

test("Проверка наличия виджета с отзывами Яндекс.Карт на странице", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  const iframe = screen.getByTitle("FeedBacks");
  expect(iframe).toBeInTheDocument();

  expect(iframe).toHaveAttribute(
    "src",
    "https://yandex.ru/maps-reviews-widget/169644780197?comments"
  );
});
