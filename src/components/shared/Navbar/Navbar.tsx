"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  name: string;
  path: string;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();

  const navElement = ({ name, path }: NavbarProps) => (
    <li
      onClick={() => setMenuOpen(false)}
      className={`${
        pathName === path || pathName.includes(path + "/")
          ? "font-semibold bg-white/30 lg:bg-transparent"
          : ""
      } ${
        pathName === "/events" || pathName === "/places"
          ? "text-white"
          : "text-black"
      } duration-500 hover:text-blue-500 py-1 px-5 rounded-r-sm md:rounded-sm`}
    >
      <Link href={path} className="text-sm lg:text-[18px]">
        {name}
      </Link>
    </li>
  );

  return (
    <header
      className={`w-full py-4 z-10 ${
        ["/", "/events", "/places"].includes(pathName) ? "absolute" : ""
      } ${
        pathName === "/events" || pathName === "/places" ? "text-white" : ""
      }`}
    >
      <nav className="px-5 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Logo and Menu Icon */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden focus:outline-none"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              <Image
                src="/logo.png"
                alt="logo"
                width={32}
                height={32}
                className="w-6 h-6"
              />
              <p className="font-bold invert-0 text-lg">Event Tap</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 font-medium">
            {navElement({ name: "Home", path: "/" })}
            {navElement({ name: "Events", path: "/events" })}
            {navElement({ name: "Places", path: "/places" })}
            {navElement({ name: "Map View", path: "/map-view" })}
          </ul>

          {/* Right-side Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/dashboard">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Profile"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            <Link href="/signUp">
              <button className="px-5 py-2 border-[#F6339A] bg-[#F6339A] hover:border-[#F6339A] border-2 hover:bg-white hover:text-black text-white text-sm rounded-md transition">
                Register
              </button>
            </Link>
            <Link href="/signIn">
              <button className="px-5 py-2 border-[#F6339A] hover:text-white border-2 hover:bg-[#F6339A] text-sm rounded-md transition">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 h-full w-2/3 max-w-xs bg-[black]/60 shadow-lg transform transition-transform duration-500 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <span className="font-bold text-lg">Menu</span>
            <X
              className="w-6 h-6 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col gap-2 px-4 py-4">
            {navElement({ name: "Home", path: "/" })}
            {navElement({ name: "Events", path: "/events" })}
            {navElement({ name: "Places", path: "/places" })}
            {navElement({ name: "Map View", path: "/map-view" })}
            <hr className="my-2" />
            <Link href="/signUp">
              <button className="px-5 py-2 border-[#F6339A] bg-[#F6339A] hover:border-[#F6339A] border-2 hover:bg-white hover:text-black text-white text-sm rounded-md transition">
                Register
              </button>
            </Link>
            <Link href="/signIn">
              <button className="px-5 py-2 border-[#F6339A] hover:text-white border-2 hover:bg-[#F6339A] text-sm rounded-md transition">
                Login
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
