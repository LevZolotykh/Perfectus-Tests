import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  // Тест 1: Проверка наличия текста и ссылок в компоненте
  it("should render address and navigation links correctly", () => {
    // Arrange
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Act: Ищем элементы
    const addressElement = screen.getByText("улица Калинина, д 11");
    const aboutLink = screen.getByText("О нас");

    // Assert: Проверяем их существование
    expect(addressElement).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });

  // Тест 2: Проверка правильного отображения изображения и его ссылки
  it("should display VK icon with correct attributes", () => {
    // Arrange
    render(
      <Router>
        <Footer />
      </Router>
    );

    // Act: Ищем изображение и проверяем его атрибуты
    const vkIcon = screen.getByAltText("VK");

    // Assert: Проверяем, что изображение существует и имеет корректные атрибуты
    expect(vkIcon).toBeInTheDocument();
    expect(vkIcon).toHaveAttribute("src", "/images/VKIcon.svg");
    expect(vkIcon.closest("a")).toHaveAttribute(
      "href",
      "https://vk.com/perfdentis?from=search"
    );
  });
});
