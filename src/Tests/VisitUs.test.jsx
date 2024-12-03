import React from "react";
import { render, screen } from "@testing-library/react";
import VisitUs from "../components/UI/VisitUs";

describe("VisitUs Component", () => {
  // Тест: Проверка отображения времени работы
  it("should render working hours table correctly", () => {
    // Arrange & Act
    render(<VisitUs />);

    // Assert: Проверить, что строка "Понедельник" содержит правильное расписание
    const mondayRow = screen.getByText(/понедельник/i).closest("tr");
    expect(mondayRow).toHaveTextContent("9:00 - 18:00");

    // Проверить наличие выходного для воскресенья
    const sundayRow = screen.getByText(/воскресенье/i).closest("tr");
    expect(sundayRow).toHaveTextContent("Выходной");
    expect(screen.getByText(/выходной/i)).toHaveClass("text-red-500");
  });

  // Тест: Проверка ссылки на карты
  it("should render a clickable map link", () => {
    // Arrange & Act
    render(<VisitUs />);

    // Assert
    const mapLink = screen.getByRole("link", { name: /открыть в картах/i });
    expect(mapLink).toBeInTheDocument();
    expect(mapLink).toHaveAttribute(
      "href",
      expect.stringContaining("yandex.ru/maps")
    );
  });
});
