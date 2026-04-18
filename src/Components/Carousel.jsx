import { useState, useEffect } from "react";

const Carousel = ({ children, autoSlide = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);

  const total = children.length;

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slide = setInterval(next, interval);
    return () => clearInterval(slide);
  }, [current]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      
      <div className="relative h-80">
        {children.map((child, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            {child}
          </div>
        ))}
      </div>

      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        ‹
      </button>

      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full">
        ›
      </button>
    </div>
  );
};

export default Carousel;