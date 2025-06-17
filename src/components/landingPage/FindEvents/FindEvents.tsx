"use client"

import { useState } from "react"
import { Search, MapPin, Filter, ChevronDown } from "lucide-react"
import Image from "next/image"

const eventCategories = [
  {
    id: 1,
    title: "Music Concerts",
    location: "New York City, NY",
    image: "/findEvent-img1.png",
    color: "from-blue-600 to-purple-600",
  },
  {
    id: 2,
    title: "Sports Events",
    location: "San Francisco, CA",
    image: "/findEvent-img2.png",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 3,
    title: "Workshops",
    location: "Miami, FL",
    image: "/findEvent-img3.png",
    color: "from-purple-500 to-pink-600",
  },
]

export function FindEvents() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("")

  return (
    <div className="max-w-[1440px] w-full  mx-auto px-4 md:px-0 py-8">
      {/* Header */}
      <div className="text-center mb-8 font-laila">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Find Events by Category</h1>
        <h2 className="text-4xl font-bold text-gray-900">or Location</h2>
      </div>

      {/* Search Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search by events"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Event locations map"
            />
          </div>
        </div>

        {/* Event Categories */}
        <div className="space-y-4 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">

          {eventCategories.map((category) => (
            <div key={category.id} className="relative group cursor-pointer">
              <div className="relative h-40 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{category.title}</h3>
                    <p className="text-sm opacity-90">{category.location}</p>
                  </div>
                  <div className="flex justify-end">
                    <button className="bg-white bg-opacity-20 backdrop-blur-sm text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-30 transition-all">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
