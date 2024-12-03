import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "../components/UI/Carousel";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

test("Карусель переключается с последнего изображения на первое", () => {
  // Arrange
  const images = ["/img1.jpg", "/img2.jpg"];
  render(<Carousel slides={images} />);

  const nextButton = screen.getByRole("button", { name: /next/i });

  // Act
  fireEvent.click(nextButton); // к последнему
  fireEvent.click(nextButton); // вернуться к первому

  // Assert
  expect(screen.getByAltText(/img1/i)).toBeVisible();
});