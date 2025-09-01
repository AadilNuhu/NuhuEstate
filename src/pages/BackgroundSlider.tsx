import { useState, useEffect } from "react";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import { FaArrowRight } from 'react-icons/fa'

// Slide data
const slides = [
  {
    id: 1,
    image: h3,
    alt: "Dream Home",
    title: "Your Dream Home Awaits",
    subtitle: "Premium properties just for you",
    link: "Contact Us",
  },
  {
    id: 2,
    image: h1,
    alt: "Luxury Living in Accra",
    title: "Luxury Living in Accra's Finest Neighborhoods",
    subtitle: "Experience elegance and comfort",
    link: "Our Story",
  },
  {
    id: 3,
    image: h2,
    alt: "Real Estate Excellence",
    title: "Three Decades of Real Estate Excellence",
    subtitle: "Smart properties tailored for you",
    link: "Schedule Visit"
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          aria-hidden={index !== current}
        >
          {/* Image */}
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-600/70" />
          {/* Text Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-white">
            <div className="max-w-[700px]">
              <h1 className="text-3xl leading-16 sm:text-4xl md:text-6xl font-bold drop-shadow-lg mb-4">
                {slide.title}
              </h1>
              <p className="text-base mb-6 sm:text-lg md:text-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
              <a href="" className="flex justify-between w-[200px] items-center bg-blue-400 px-7 py-3 rounded-xl">{slide.link} <FaArrowRight /> </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-white scale-110" : "bg-gray-500"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
