"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  alt: string;   
}

interface PlacesCarouselProps {
  slides: Slide[];
}

const PlacesCarousel = ({ slides }: PlacesCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goToPrevious = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  return (
    <section className="relative">
      <div className="relative h-[00px] md:h-[700px]  overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full h-full flex-shrink-0 relative"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-white scale-110"
                  : "bg-white/30 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesCarousel;
