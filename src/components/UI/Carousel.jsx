import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ images, variant }) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden mx-auto">
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 h-full w-8 bg-gray-800 bg-opacity-40 text-white flex items-center justify-center hover:bg-opacity-60 z-10"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 h-full w-8 bg-gray-800 bg-opacity-40 text-white flex items-center justify-center hover:bg-opacity-60 z-10"
      >
        <FaChevronRight size={20} />
      </button>

      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-full"
            style={{ width: `${100 / images.length}%` }}
          >
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
