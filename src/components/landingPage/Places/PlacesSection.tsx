"use client"
import React from 'react'

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import CommonHeader from "../../shared/heading/CommonHeader"
import { EventType } from "@/types/EventType"
import Events from '../FeatureSection/Events'

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
]

const PlacesSection = () => {
     const [currentIndex, setCurrentIndex] = useState(0)
      const [visibleItems, setVisibleItems] = useState(4)
      const sliderRef = useRef<HTMLDivElement>(null)
    
      // Update visible items based on screen size
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 640) {
            setVisibleItems(1)
          } else if (window.innerWidth < 768) {
            setVisibleItems(2)
          } else if (window.innerWidth < 1024) {
            setVisibleItems(3)
          } else {
            setVisibleItems(4)
          }
        }
    
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, [])
    
      const maxIndex = Math.max(0, events.length - visibleItems)
    
      const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1))
      }
    
      const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1))
      }
  return (
    <section className="bg-[#F3EEE7] py-16 px-5 xl:px-0">
            
            <div className= " max-w-[1440px] w-full mx-auto  ">
                
           <CommonHeader section='places' title="Places to Explore"/>

            <div className="relative overflow-hidden">
                <div
                ref={sliderRef}
                className="flex  transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
                >
                      {events.map((event) => <Events
                        key={event?.id}
                        event={event}
                        visibleItems={visibleItems}
                        section='places'
                      />)
                  }
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
  )
}

export default PlacesSection