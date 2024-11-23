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
