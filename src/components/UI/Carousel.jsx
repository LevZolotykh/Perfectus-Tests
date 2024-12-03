import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [curr, setCurr] = useState(0);
  const totalSlides = slides.length;

  const prev = () => {
    setCurr((curr - 1 + totalSlides) % totalSlides);
  };

  const next = () => {
    setCurr((curr + 1) % totalSlides);
  };

  const getVisibleSlides = () => {
    const prevSlide = (curr - 1 + totalSlides) % totalSlides;
    const nextSlide = (curr + 1) % totalSlides;

    return [slides[prevSlide], slides[curr], slides[nextSlide]];
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className="relative overflow-hidden w-full h-[400px] hidden sm:block">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: "translateX(0)",
        }}
      >
        {visibleSlides.map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[33.33%] h-full px-2
               
              
            transition-transform duration-500`}
          >
            <img
              src={img}
              alt={`img${index + 1}`}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          aria-label="prev"
          onClick={prev}
          className="p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-200"
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          aria-label="next"
          onClick={next}
          className="p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-200"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
