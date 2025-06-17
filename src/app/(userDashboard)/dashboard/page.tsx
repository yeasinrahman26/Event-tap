"use client";

import {
  Calendar,
  Heart,
  LogOut,
  MessageCircle,
  Pencil,
  Rss,
  Share2,
  ShieldAlert,
  User,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* <aside className="w-full lg:w-80 bg-white shadow-md p-4 md:p-6">
        <ul className="space-y-4 text-[#E60076]">
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <Heart /> Preferences
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <Pencil /> My Events
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <Calendar /> Attending Events
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <User /> Following Organizer
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <MessageCircle /> My Posts
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <Rss /> Followers
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <Share2 /> New Category Request
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <UserPlus /> Invite a Friend
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <ShieldAlert /> About
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:underline">
            <LogOut /> Logout
          </li>
        </ul>
      </aside> */}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 bg-[#FAF4F1]">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-4 md:p-6">
          <div className="text-center">
            <div className="text-center mb-6">
              <div className="relative w-24 h-24 mx-auto">
                <Image
                  src="/featureImg.png"
                  alt="John Doe"
                  fill
                  className="rounded-full object-cover border-2 border-[#E60076]"
                />
              </div>
              <h2 className="mt-3 font-semibold text-lg">John Doe</h2>
              <p className="text-sm text-gray-500">john.doe@example.com</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <button
                onClick={() => setIsOpen(true)}
                className="px-6 py-2 bg-[#E60076] border-2 border-[#E60076] text-white rounded transition hover:shadow-md hover:scale-105"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-8 text-left">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Profile Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="font-medium">Full Name:</div>
              <div>John Doe</div>
              <div className="font-medium">Email:</div>
              <div>john.doe@example.com</div>
              <div className="font-medium">Birth Date:</div>
              <div>1985-06-15</div>
              <div className="font-medium">Sex:</div>
              <div>Male</div>
              <div className="font-medium">Language:</div>
              <div>English</div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl p-6 sm:p-8 shadow-lg"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="text-xl text-gray-700 mb-4"
            >
              ← Back
            </button>
            <h2 className="text-2xl text-center font-bold text-[#35140D] mb-6">
              Update Profile
            </h2>

            <div className="relative w-24 h-24 mx-auto mb-4">
              <Image
                src="/featureImg.png"
                alt="Profile"
                fill
                className="rounded-full object-cover border-4 border-white shadow"
              />
              <div className="absolute bottom-0 right-0 bg-pink-600 text-white p-1 rounded-full cursor-pointer hover:bg-pink-700">
                ✏️
              </div>
            </div>

            <form className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="john.doe@example.com"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Birth Date
                </label>
                <input
                  type="date"
                  defaultValue="1985-06-15"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Sex
                </label>
                <input
                  type="text"
                  defaultValue="Male"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#35140D]">
                  Language
                </label>
                <input
                  type="text"
                  defaultValue="English"
                  className="w-full mt-1 border border-gray-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition"
              >
                Update Profile
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
