"use client";
import PlaceCard from "@/components/PlacesPage/PlaceCard";
import PlaceModal from "@/components/PlacesPage/PlaceModal";
import PlacesCarousel from "@/components/PlacesPage/PlacesCarousel";

import { useParams } from "next/navigation";
import React from "react";
interface CarouselSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

export type EventType = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  image?: string;
};

export interface PlaceCard {
  id: string;
  title: string;
  image: string;
  description: string;
}

const placesCard: PlaceCard[] = [
  {
    id: "1",
    title: "Sunset Beach",
    image: "/featureImg.png",
    description:
      "A beautiful beach with golden sands and breathtaking sunsets.",
  },
  {
    id: "2",
    title: "Mountain Trail",
    image: "/featureImg.png",
    description: "A scenic mountain trail perfect for hiking and nature walks.",
  },
  {
    id: "3",
    title: "City Lights",
    image: "/featureImg.png",
    description: "Experience the vibrant nightlife and stunning skyline views.",
  },
  {
    id: "4",
    title: "Forest Escape",
    image: "/featureImg.png",
    description: "Relax and unwind in the serene beauty of the forest.",
  },
  {
    id: "5",
    title: "Desert Dunes",
    image: "/featureImg.png",
    description: "Explore the vast and mysterious desert landscape.",
  },
];

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/findEvent-img3.png",
    alt: "Group of runners in colorful athletic wear running on a road",
    title: "Join the Running Revolution",
    description: "Experience the thrill of running with our vibrant community",
  },
  {
    id: 2,
    image: "/findEvent-img1.png",
    alt: "Runners participating in a marathon event",
    title: "Push Your Limits",
    description: "Challenge yourself and achieve new personal records",
  },
  {
    id: 3,
    image: "/findEvent-img2.png",
    alt: "Trail runners in scenic mountain landscape",
    title: "Explore New Trails",
    description: "Discover beautiful running routes and scenic adventures",
  },
];
const places: EventType[] = [
  {
    id: "1",
    title: "City Marathon 2025",
    description:
      "The City Marathon 2025 is more than just a race—it's a celebration of endurance, community, and health. Join thousands of runners from all walks of life as they gather in New York City to challenge their limits and achieve personal bests. Whether you're a seasoned marathoner or a first-time participant, this event offers an unforgettable experience. With live music stages throughout the route, cheering crowds, hydration stations, and scenic views of the city’s landmarks, the energy is unbeatable. Beyond the race, enjoy pre-event expos, wellness talks, and fitness activities. Make new friends, explore the city, and be part of something truly extraordinary. Don’t miss the post-race celebration with local bands, food trucks, and giveaways!",
    date: "Jun 17 - 20",
    location: "New York City",
    image: "/featureImg.png",
  },
  {
    id: "2",
    title: "Creative Workshop",
    description:
      "Our Creative Workshop invites artists, thinkers, and makers of all levels to dive into an inspiring and collaborative environment. Located in the vibrant heart of San Francisco, this five-day event includes hands-on sessions, guest speakers, and interactive showcases. Discover new techniques in painting, sculpture, digital design, and mixed media from renowned professionals in the industry. Share your work, get feedback, and find your creative tribe. Whether you're looking to refine your style, explore new mediums, or just play with ideas, this workshop offers a supportive space to grow and connect. Materials are provided, and each day ends with an open gallery session.",
    date: "May 20 - 25",
    location: "San Francisco",
    image: "/featureImg.png",
  },
  {
    id: "3",
    title: "Outdoor Yoga",
    description:
      "Reconnect with your body, mind, and nature through Outdoor Yoga in beautiful Miami. This wellness event brings together yoga practitioners and newcomers alike for daily sessions on the beach and in serene parks. Guided by expert instructors, you'll experience various styles such as Vinyasa, Hatha, and Yin yoga, all while breathing fresh ocean air. Relax with guided meditations, enjoy wholesome snacks, and browse wellness vendor booths. Whether you’re seeking relaxation, flexibility, or just a peaceful escape from the busy world, Outdoor Yoga is a rejuvenating experience not to be missed.",
    date: "Jul 01 - 05",
    location: "Miami",
    image: "/featureImg.png",
  },
  {
    id: "4",
    title: "Summer Festival",
    description:
      "The Summer Festival in Los Angeles is a vibrant celebration of music, art, food, and culture. Spread over several city blocks and featuring multiple stages, this multi-day event showcases local and international music acts, street performances, art installations, and more. Enjoy gourmet food trucks, artisan markets, family-friendly activities, and evening fireworks. Whether you're dancing in the crowd, browsing handmade crafts, or simply soaking up the California sun, the Summer Festival promises fun for everyone. It’s the perfect way to celebrate summer with friends and family.",
    date: "Aug 10 - 15",
    location: "Los Angeles",
    image: "/featureImg.png",
  },
  {
    id: "5",
    title: "Tech Conference",
    description:
      "The Tech Conference in Seattle is a forward-thinking gathering of innovators, engineers, and entrepreneurs. Over the course of five days, dive into the latest advancements in AI, blockchain, cloud computing, cybersecurity, and more. Attend keynote sessions from industry leaders, hands-on workshops, startup showcases, and panel discussions covering the future of technology. Network with peers, explore new tools, and discover opportunities for collaboration and growth. Whether you're a developer, a tech founder, or just passionate about innovation, this conference delivers deep insights and valuable connections.",
    date: "Sep 05 - 10",
    location: "Seattle",
    image: "/featureImg.png",
  },
  {
    id: "6",
    title: "Food Festival",
    description:
      "Indulge your taste buds at the Chicago Food Festival, where the city’s diverse culinary scene comes to life. This event features food from over 100 local chefs, restaurants, and food trucks offering everything from gourmet dishes to classic street food. Enjoy live cooking demos, tasting booths, beverage pairings, and culinary competitions. Learn from celebrity chefs, try international cuisines, and savor sweet treats and savory delights. Live music, cultural dance performances, and kids’ activities make this a fun event for the whole family. Come hungry and leave happy!",
    date: "Oct 12 - 18",
    location: "Chicago",
    image: "/featureImg.png",
  },
];
const PlacesId = () => {
  const params = useParams();
  const id = params.id;
  const details = places.find((place) => place.id === id);

  return (
    <div>
      <PlacesCarousel slides={slides} />
      <div className="max-w-[1440px] mx-auto space-y-10 mb-10">
        <div className="mx-auto  bg-white px-4 lg:px-0 space-y-4">
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-7 items-start">
            <div>
              <h1 className="text-4xl font-bold ">{details?.title}</h1>
            </div>
            <div>
              <p className="text-[#EF6E98] font-semibold text-lg md:text-2xl">
                {details?.location}{" "}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="my-10">
            <div>
              <h2 className="font-bold text-3xl mb-1">Description</h2>
              <p className="text-gray-500">{details?.description}</p>
            </div>
          </div>
          {/* card */}
          <div className="grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-3 my-10 gap-8 ">
            {placesCard.slice(0, 3).map((modal) => (
              <PlaceModal key={modal.id} modal={modal}></PlaceModal>
            ))}
          </div>

          {/* map */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                details?.location || ""
              )}&output=embed`}
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
      </div>
    </div>
  );
};

export default PlacesId;
