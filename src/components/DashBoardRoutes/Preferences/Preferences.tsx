"use client";

import { useState } from "react";
import img from '@/assets/contact-img.png'
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
}

export default function Preference() {
  const categories: Category[] = [
    {
      id: 1,
      name: "Cars",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Entertainment",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Touristic Sat Attractions",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Motorbikes",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Bicycle",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Chill-out",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      name: "Sports Events",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      name: "Museums",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      name: "Theaters",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 10,
      name: "Yoga",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 11,
      name: "Concert",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 12,
      name: "Drama",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 13,
      name: "Sport",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 14,
      name: "Travel",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 15,
      name: "Photography",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategories((prev) =>
      prev.includes(category.id)
        ? prev.filter((id) => id !== category.id)
        : [...prev, category.id]
    );
    console.log(`Toggled category: ${category.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Preferences
        </h1>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category)}
              className={`relative h-40 rounded-2xl overflow-hidden cursor-pointer transform transition-all hover:scale-105 shadow-md hover:shadow-lg ${
                selectedCategories.includes(category.id)
                  ? "ring-4 ring-pink-500 ring-opacity-75"
                  : ""
              }`}
            >
              {/* Background Image */}
              <Image
                src={img}
                // src={category.image || "/placeholder.svg"}
                alt={category.name}
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 bg-opacity-40" />

              {/* Category Name */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-white font-semibold text-xl md:text-2xl text-center leading-tight">
                  {category.name}
                </h3>
                {/* Selection Indicator */}
                {selectedCategories.includes(category.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
