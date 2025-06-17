import Image from "next/image";
import fb from "@/assets/Icons/fb.png";
import linkedin from "@/assets/Icons/in.png";
import insta from "@/assets/Icons/insta.png";
import tube from "@/assets/Icons/tube.png";
import x from "@/assets/Icons/x.png";
import google from "@/assets/Icons/Group 399.png";
import Link from "next/link";

const aboutItems = [
  "EVENT TAP EventTap is the first event organizer app that connects people, allowing users to create an event and invite people to your event. EventTap helps locals and tourists discover new and interesting places near them.",
  "EventTap makes it simple and easy to create an event and join other people's events.",
  "Host an event and invite others to join you.",
  "Find events near you and join instantly.",
  "Get notified when your favorite events are created near you.",
  "Check events and locations nearby via the map.",
];

export default function About() {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          About Event Tap
        </h1>

        {/* Content List */}
        <div className="mb-16">
          <ul className="space-y-6">
            {aboutItems.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 mr-4 flex-shrink-0" />
                <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Follow Us On
          </h2>
          <div className="flex justify-center items-center space-x-6 md:space-x-8">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={insta} alt="Instagram" width={32} height={32} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fb} alt="Facebook" width={32} height={32} />
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={tube} alt="YouTube" width={32} height={32} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={x} alt="Twitter / X" width={32} height={32} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={linkedin} alt="LinkedIn" width={32} height={32} />
            </Link>
            <Link
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={google} alt="Google" width={32} height={32} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
