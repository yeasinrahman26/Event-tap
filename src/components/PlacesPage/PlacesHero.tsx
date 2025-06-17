'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BackgroundImage = () => (
    <div className="absolute top-0 left-0 w-full">
        <Image
            src="/eventHero.png"
            alt="Banner Background"
            fill
            priority
            className=""
        />
    </div>
);

const ForegroundContent = () => (
        <section className=" px-4 py-24  flex flex-col items-center justify-center text-center  bg-[url(/eventHero.png)] bg-cover bg-center ">
        <h1 className="text-5xl md:text-7xl font-laila font-bold text-white mb-6 max-w-3xl ">Discover Events Around You</h1>
        <p className="text-gray-300 max-w-2xl mb-8 ">
          Discover and participate in a rich variety of events designed to inspire, engage, and bring people together
          around shared interests, wherever life takes you.
        </p>
        <Link
          href="/events"
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors"
        >
          Explore Events
        </Link>
      </section>
    
);

const PlacesHero = () => {
    return (
        <section className=" relative">
            <BackgroundImage />
            <ForegroundContent />
        </section>
    );
};

export default PlacesHero;
