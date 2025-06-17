import { EventType } from "@/types/EventType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  event: EventType;
  visibleItems?: number;
 
};

const EventCard = ({ event }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full">
      <div className="relative   h-80">
        <Image
          src={`${event?.image}`}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
            {event.date}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            <span className="inline-block w-1 h-1 bg-gray-300 rounded-full mr-1"></span>
            {event.location}
          </span>
        </div>

        <h3 className="font-semibold text-lg mb-1">{event.title}</h3>

        <p className="text-gray-500 text-sm mb-4">{event.description}</p>

        <Link href={`/events/${event.id}`}>
          <button  className="w-full text-rose-500 border border-rose-500 rounded-full py-2 text-sm font-medium hover:bg-rose-50 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
