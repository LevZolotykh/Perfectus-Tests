import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DesktopHeader from "../components/DesktopHeader";

describe("DesktopHeader Component", () => {
  // Тест 1: Проверка наличия логотипа и его текста
  it("should render the logo with correct text and link", () => {
    // Arrange
    render(
      <Router>
        <DesktopHeader />
      </Router>
    );

    // Act
    const logoLink = screen.getByRole("link", { name: /перфектус/i });
    const logoImage = screen.getByAltText("Logo");

    // Assert
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "/images/Logo.svg");
  });

  // Тест 2: Проверка кнопки "ЗАПИСАТЬСЯ" и её атрибутов
  it('should display the "ЗАПИСАТЬСЯ" button with correct attributes', () => {
    // Arrange
    render(
      <Router>
        <DesktopHeader />
      </Router>
    );

    // Act
    const callToAction = screen.getByRole("link", { name: /записаться/i });

    // Assert
    expect(callToAction).toBeInTheDocument();
    expect(callToAction).toHaveAttribute("href", "tel:89218737073");
    expect(callToAction).toHaveClass(
      "font-bold bg-cyan-600 text-center border-4 border-salte-500 p-4 rounded"
    );
  });
});
