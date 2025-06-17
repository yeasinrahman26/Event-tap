"use client";

import { useState } from "react";
import Image from "next/image";
import profile from "@/assets/profile.png";

interface Follower {
  id: number;
  name: string;
  role: string;
  avatar: string;
  isFollowing: boolean;
}

export default function Followers() {
  const [followers, setFollowers] = useState<Follower[]>([
    {
      id: 1,
      name: "Ayşe Arslan",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
    {
      id: 2,
      name: "Hüseyin Çelik",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
    {
      id: 3,
      name: "Merve Çelik",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
    {
      id: 4,
      name: "Murat Şahin",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
    {
      id: 5,
      name: "Emine Demir",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
    {
      id: 6,
      name: "Emine Demir",
      role: "Event Manager",
      avatar: "/placeholder.svg",
      isFollowing: true,
    },
  ]);

  const toggleFollow = (id: number) => {
    setFollowers((prev) =>
      prev.map((follower) =>
        follower.id === id
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Followers</h1>
      
      </div>

      {/* Followers List */}
      <div className="space-y-6 max-w-3xl mx-auto">
        {followers.map((follower) => (
          <div
            key={follower.id}
            className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={profile}
                  alt={follower.name}
                  width={60}
                  height={60}
                  className="w-16 h-16 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {follower.name}
                  </h3>
                  <p className="text-sm text-gray-500">{follower.role}</p>
                </div>
              </div>

              <button
                onClick={() => toggleFollow(follower.id)}
                className={`px-5 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  follower.isFollowing
                    ? "border-pink-500 text-pink-600 bg-pink-50 hover:bg-pink-100"
                    : "border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
                }`}
              >
                {follower.isFollowing ? "Following" : "Removed"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
