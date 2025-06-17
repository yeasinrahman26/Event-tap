"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Marie",
    role: "Outdoor Enthusiast",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Jason Loped",
    role: "Event Organizer",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Priya Kusal",
    role: "Adventure Seeker",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Photographer",
    text: "EventTap introduced me to amazing communities I didn’t know existed nearby!",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Lina Chen",
    role: "Food Blogger",
    text: "I found the best food events through EventTap. It's my go-to app now.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: {
    name: string;
    role: string;
    text: string;
    rating: number;
    image: string;
  };
}) => {
  return (
    <div className="relative w-full   bg-white bg-[url(/cardBg.png)] bg-no-repeat bg-cover py-14 px-10 rounded-xl shadow-md">
      <div className="absolute top-6 right-8">
        <Image
          src="/testimonial-coma.png"
          alt="quote"
          width={40}
          height={40}
          className="w-10 h-10 object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-[#2a0903]">{testimonial.name}</h3>
      <p className="text-gray-600 mb-4">{testimonial.role}</p>
      <p className="text-gray-800 mb-6">"{testimonial.text}"</p>
      <div className="text-[#ff5757] text-right">
        {"★★★★★".slice(0, testimonial.rating)}
      </div>
      <div className="absolute left-0 md:-bottom-5 lg:-bottom-7 xl:-bottom-8">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={100}
          height={100}
          className="w-20 h-20 md:w-14 md:h-14 object-cever lg:w-16 xl:w-20 lg:h-16 xl:h-20 rounded-full"
        />
      </div>
    </div>
  );
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleItems);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className=" py-16 px-5 xl:px-0">
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                style={{ flex: `0 0 ${100 / visibleItems}%` }}
                className="px-3" // <-- add this class for spacing
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                currentIndex === 0
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`rounded-full w-8 h-8 flex items-center justify-center border ${
                currentIndex >= maxIndex
                  ? "text-gray-300 border-gray-200 cursor-not-allowed"
                  : "text-gray-600 border-gray-300 hover:bg-gray-50"
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
