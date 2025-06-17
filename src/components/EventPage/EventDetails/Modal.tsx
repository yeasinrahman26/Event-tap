"use client";
import { useState } from "react";

export default function Modal({ onClose }: { onClose: () => void }) {
  const [rating, setRating] = useState(0);

  return (
    <div className="fixed inset-0 bg-black/30  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-96 p-6 border-2 border-[#EA1E63] rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add Comment</h2>

        {/* Star Rating */}
        <div className="flex text-rose-500 text-2xl mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <button
              key={i}
              onClick={() => setRating(i)}
              className={i <= rating ? "text-rose-500" : "text-gray-300"}
            >
              ★
            </button>
          ))}
        </div>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Title"
          className="w-full mb-2 px-3 py-2 bg-gray-50 border rounded outline-none focus:ring-2 focus:ring-rose-300"
        />
        <textarea
          placeholder="Write your comment"
          rows={4}
          className="w-full mb-4 px-3 py-2 bg-gray-50 border rounded outline-none resize-none focus:ring-2 focus:ring-rose-300"
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="bg-[#EA1E63] hover:bg-rose-600 text-white px-4 py-2 rounded transition">
            Add Comment
          </button>
        </div>
      </div>
      
    </div>
  );
}
