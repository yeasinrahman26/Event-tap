import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Review from "../EventPage/EventDetails/Review";

const testimonials = [
  {
    name: "Sarah Marie",
    role: "Outdoor Enthusiast",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Jason Loped",
    role: "Event Organizer",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
  {
    name: "Priya Kusal",
    role: "Adventure Seeker",
    text: "EventTap made finding local events so easy and fun! I've joined several bike rides and meetups thanks to the app.",
    rating: 5,
    image: "/testimonial-img.jpg",
  },
];
export default function TestimonialSection() {
  return (
    <section className="bg-[#F3EEE7] md:h-full flex items-center  ">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 xl:px-0 my-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#2a0901] mb-16   font-laila">
          Testimonials
        </h2>
        <Review></Review>
      </div>
    </section>
  );
}
