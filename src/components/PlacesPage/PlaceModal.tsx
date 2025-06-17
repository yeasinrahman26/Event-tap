"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PlaceCard } from "./PlacesId/PlacesId";

const PlaceModal = ({ modal }: { modal: PlaceCard }) => {
  const { image, title, description } = modal;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full hover:shadow-xl transition"
      >
        <div className="relative h-72">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-4">{title}</h3>
          <p>{description.split(" ").slice(0, 7).join(" ")}...</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-4xl rounded-lg overflow-hidden shadow-lg"
          >
            <div className="relative h-64 sm:h-80 md:h-[400px] lg:h-[500px] w-full">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
                {title}
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                {modal.description}
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-4 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaceModal;
