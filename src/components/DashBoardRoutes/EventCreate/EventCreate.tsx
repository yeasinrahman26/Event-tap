"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import gg from "../../../../public/contact-img.png";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description?: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "City Tour",
    date: "2025-06-01",
    time: "19:00",
    location: "San Francisco",
    image: "/public/contact-img.png",
    description: "Explore the beautiful city of San Francisco",
  },
  {
    id: 2,
    title: "City Tour",
    date: "2025-06-02",
    time: "18:00",
    location: "San Francisco",
    image: "/public/contact-img.png",
    description: "Another amazing city tour",
  },
];

export default function EventCreate() {
  const [currentView, setCurrentView] = useState<"list" | "form">("list");
  const [events, setEvents] = useState<Event[]>(mockEvents);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState<Omit<Event, "id">>({
    title: "",
    date: "",
    time: "",
    location: "",
    image: "",
    description: "",
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const filesArray = Array.from(e.target.files);
    const validFiles = filesArray.filter(
      (file) => file.size <= 5 * 1024 * 1024
    );
    setImages((prev) => [...prev, ...validFiles]);

    if (validFiles.length > 0) {
      const objectUrl = URL.createObjectURL(validFiles[0]);
      setFormData((prev) => ({ ...prev, image: objectUrl }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    if (index === 0 && images.length > 0) {
      setFormData((prev) => ({
        ...prev,
        image: images[1] ? URL.createObjectURL(images[1]) : "",
      }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCreateOrEdit = () => {
    if (editingEvent) {
      setEvents((prev) =>
        prev.map((e) => (e.id === editingEvent.id ? { ...e, ...formData } : e))
      );
    } else {
      const newEvent: Event = {
        id: events.length + 1,
        ...formData,
      };
      setEvents([...events, newEvent]);
    }

    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      image: "",
      description: "",
    });
    setImages([]);
    setEditingEvent(null);
    setCurrentView("list");
  };

  const startEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      image: event.image,
      description: event.description || "",
    });
    setCurrentView("form");
  };

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      time: "",
      location: "",
      image: "",
      description: "",
    });
    setImages([]);
    setEditingEvent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 space-y-6">
        {currentView === "list" ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
              My Events
            </h1>
            <div className="flex justify-end items-center">
              <button
                onClick={() => {
                  resetForm();
                  setCurrentView("form");
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-lg"
              >
                <span className="text-xl">+</span> Create Event
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="flex gap-3 border p-3 rounded-md"
                >
                  <Image
                    // src={event.image || gg}
                    src={gg}
                    alt={event.title}
                    width={80}
                    height={60}
                    className="rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-gray-600">
                      {event.date} @ {event.time}
                    </p>
                    <p className="text-sm text-gray-500">{event.location}</p>
                    {event.description && (
                      <p className="text-sm text-gray-500 mt-1">
                        {event.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <button
                      onClick={() => startEdit(event)}
                      className="bg-pink-500 text-white text-xs px-2 py-1 rounded hover:bg-pink-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() =>
                        setEvents(events.filter((e) => e.id !== event.id))
                      }
                      className="border border-pink-500 text-pink-500 text-xs px-2 py-1 rounded hover:bg-pink-50"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className=" items-center gap-2">
              <button
                onClick={() => {
                  resetForm();
                  setCurrentView("list");
                }}
                className="text-xl hover:underline text-pink-500"
              >
                ← Back
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                {editingEvent ? "Edit Event" : "Create Event"}
              </h1>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateOrEdit();
              }}
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700"
                >
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Enter event description"
                />
              </div>

              {/* Upload Section */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Image
                </label>
                <label className="w-full cursor-pointer border-2 border-dashed border-gray-300 bg-gray-50 text-center p-6 rounded-md hover:border-pink-400 transition block">
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/gif"
                    multiple
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8 text-gray-400 mb-2"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" x2="12" y1="3" y2="15" />
                    </svg>
                    <p className="font-medium text-gray-800">Upload Image</p>
                    <p className="text-sm text-gray-500">
                      PNG, JPG or GIF Max 5MB
                    </p>
                  </div>
                </label>

                {images.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {images.map((file, index) => (
                      <div
                        key={index}
                        className="relative bg-gray-100 rounded-md overflow-hidden w-full aspect-square"
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(index)}
                          className="absolute top-1 right-1 bg-white text-pink-500 rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center hover:bg-gray-100"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Time
                  </label>
                  <input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
              >
                {editingEvent ? "Update" : "Create"} Event
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
