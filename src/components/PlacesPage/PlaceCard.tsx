import { EventType } from "@/types/EventType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  place: EventType;
  visibleItems?: number;
};

const PlaceCard = ({ place }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 h-full">
      <div className="relative h-80 ">
        <Image
          src={`${place?.image}`}
          alt={place.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 ">
        <h3 className="font-semibold text-lg mb-4">{place.title}</h3>

        <Link href={`/places/${place.id}`}>
          <button className="w-full text-rose-500 border border-rose-500 rounded-full py-2 text-sm font-medium hover:bg-rose-50 transition-colors">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlaceCard;
