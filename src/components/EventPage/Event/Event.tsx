"use client";

import { EventType } from "@/types/EventType";
import EventHero from "@/components/EventPage/EventHero/EventHero";
import { ChevronDown, Filter, MapPin, Search } from "lucide-react";
import { useState } from "react";
import EventCard from "@/components/EventPage/EventCard/EventCard";

// Sample event data

const events: EventType[] = [
  {
    id: 1,
    title: "City Marathon 2025",
    description: "Enjoy live performances from top local bands",
    date: "Jun 17 - 20",
    location: "New York City",
    image: "/featureImg.png",
  },
  {
    id: 2,
    title: "Creative Workshop",
    description: "Enjoy live performances from top local bands",
    date: "May 20 - 25",
    location: "San Francisco",
    image: "/featureImg.png",
  },
  {
    id: 3,
    title: "Outdoor Yoga",
    description: "Enjoy live performances from top local bands",
    date: "Jul 01 - 05",
    location: "Miami",
    image: "/featureImg.png",
  },
  {
    id: 4,
    title: "Summer Festival",
    description: "Enjoy live performances from top local bands",
    date: "Aug 10 - 15",
    location: "Los Angeles",
    image: "/featureImg.png",
  },
  {
    id: 5,
    title: "Tech Conference",
    description: "Enjoy live performances from top local bands",
    date: "Sep 05 - 10",
    location: "Seattle",
    image: "/featureImg.png",
  },
  {
    id: 6,
    title: "Food Festival",
    description: "Enjoy live performances from top local bands",
    date: "Oct 12 - 18",
    location: "Chicago",
    image: "/featureImg.png",
  },
];

export default function Event() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  return (
    <section className=" min-h-screen pb-16  xl:px-0">
      <div>
        <EventHero></EventHero>
      </div>
      {/* text section */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-0 ">
        <h1 className="text-4xl font-bold text-center my-15">
          All Events List
        </h1>
        {/* filer */}
        <div className="flex flex-col sm:flex-row gap-4 my-20  ">
          <div className="flex-1  relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by events"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 bg-white pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
            />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>

          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none appearance-none bg-white"
            >
              <option value="">Search by place</option>
              <option value="new-york">New York City, NY</option>
              <option value="san-francisco">San Francisco, CA</option>
              <option value="miami">Miami, FL</option>
              <option value="los-angeles">Los Angeles, CA</option>
              <option value="chicago">Chicago, IL</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700">Filters</span>
            </button>
            <button className="px-6 py-3 bg-[#EA1E63] text-white rounded-lg hover:bg-pink-600 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>
        {/* ewvents */}
        <div className="w-full  mx-auto   ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
