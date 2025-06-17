import Image from "next/image";
import React from "react";
import Logo from "@/assets/banner/login-logo.png"; // Adjust the path as necessary

const Invite = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Invite a Friend
      </h1>
      <div className="flex flex-col gap-5 items-center justify-center">
        <div>
          <Image src={Logo} alt="Logo" width={200} height={200}></Image>
        </div>
        {/* input  */}
        <div className="  my-10 space-y-4">
          <p className="text-sm text-gray-800 font-medium">
            Enter your friend's email address to send an invitation.
          </p>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded-md transition duration-200">
            Invite Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invite;
