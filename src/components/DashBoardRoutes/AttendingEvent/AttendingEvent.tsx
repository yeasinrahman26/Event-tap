"use client";

import { ArrowLeft, MapPin } from "lucide-react";
import img from "@/assets/gg.png";
import Image from "next/image";
interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export default function AttendingEvents() {
  const events: Event[] = [
    {
      id: 1,
      title: "City Tour",
      date: "May 30",
      time: "7:00pm",
      location: "San Francisco",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      title: "City Tour",
      date: "May 30",
      time: "7:00pm",
      location: "San Francisco",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      title: "City Tour",
      date: "May 30",
      time: "7:00pm",
      location: "San Francisco",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 4,
      title: "City Tour",
      date: "May 30",
      time: "7:00pm",
      location: "San Francisco",
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  const handleDetails = (eventId: number) => {
    console.log(`View details for event ${eventId}`);
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="bg-white  px-4 py-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Attending Events
        </h1>
      </div>

      {/* Events List */}
      <div className="px-4 py-6 space-y-4">
        {events.map((event) => (
          <div key={event.id} className="bg-white border border-gray-300 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center space-x-4">
              {/* Event Image */}
              <div className="flex-shrink-0">
                <Image
                  //   src={event.image || "/placeholder.svg"}
                  src={img}
                  alt={event.title}
                  className="w-20 h-20 rounded-xl object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {event.date} - {event.time}
                </p>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              {/* Details Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => handleDetails(event.id)}
                  className="px-6 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors font-medium"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
