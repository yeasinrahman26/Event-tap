import Image from "next/image";
import React from "react";

const   ContactSection = () => {
    return (
        <section className="bg-white   my-20">

            <div className="max-w-[1440px] mx-auto flex gap-8 px-4 xl:px-0 font-sans flex-col lg:flex-row ">
                {/* Left Side */}
                <div className="flex-1 flex flex-col md:flex-row lg:flex-col   gap-6 ">
                        {/* Image */}
                    <div className="w-full h-full">
                        <Image
                            src="/contact-img.png"
                            alt="Event"
                            width={500}
                            height={500}
                            className=" w-full h-full object-cover rounded-lg border border-gray-200"
                        />
                    </div>
                    {/* Contact Info */}
                    <div className=" w-full h-full bg-white rounded-lg border border-gray-200 p-3 lg:p-6 flex flex-col gap-6 ">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <span className="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center text-xl text-pink-600 mt-0.5">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path
                                        d="M4 4h16v16H4V4zm8 8l8-5H4l8 5zm0 2l-8-5v10h16V9l-8 5z"
                                        fill="#e91e63"
                                    />
                                </svg>
                            </span>
                            <div>
                                <div className="font-semibold text-lg">Email</div>
                                <div className="text-gray-600 text-sm">manage@gmail.com</div>
                            </div>
                        </div>
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <span className="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center text-xl text-pink-600 mt-0.5">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path
                                        d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
                                        fill="#e91e63"
                                    />
                                </svg>
                            </span>
                            <div>
                                <div className="font-semibold text-lg">Phone</div>
                                <div className="text-gray-600 text-sm">+1 (555) 123-4567</div>
                            </div>
                        </div>
                        {/* Office */}
                        <div className="flex items-start gap-4">
                            <span className="bg-pink-100 rounded-full w-9 h-9 flex items-center justify-center text-xl text-pink-600 mt-0.5">
                                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                    <path
                                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
                                        fill="#e91e63"
                                    />
                                </svg>
                            </span>
                            <div>
                                <div className="font-semibold text-lg">Office</div>
                                <div className="text-gray-600 text-sm">
                                    123 EventTap Lane, Cityville, State 98765
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="flex-1 bg-white rounded-lg border border-gray-200 p-7 space-y-3">
                    <div className="font-fredoka text-4xl md:text-5xl font-bold text-[#3d1a0b]  leading-tight font-laila">
                    <h1 > Get in Touch</h1>
                        <p className="text-gray-600 text-base ">
                            Contact with us and know about our events
                        </p>
                    </div>
                    <form className="flex flex-col gap-3">
                        <label>
                            <div className="text-sm mb-1">First name</div>
                            <input
                                type="text"
                                placeholder="First name"
                                className="w-full px-3 py-2 rounded-md border border-gray-400 text-base outline-none "
                            />
                        </label>
                        <label>
                            <div className="text-sm mb-1">Email</div>
                            <input
                                type="email"
                                placeholder="user12event@gmail.com"
                                className="w-full px-3 py-2 rounded-md border border-gray-400 text-base outline-none "
                            />
                        </label>
                        <label>
                            <div className="text-sm mb-1">Phone number</div>
                            <input
                                type="tel"
                                placeholder="+1 555 123 78900"
                                className="w-full px-3 py-2 rounded-md border border-gray-400 text-base outline-none "
                            />
                        </label>
                        <label>
                            <div className="text-sm mb-1">Message</div>
                            <textarea
                                placeholder="Leave us a message..."
                                rows={4}
                                className="w-full px-3 py-2 rounded-md border border-gray-400 text-base outline-none resize-vertical "
                            />
                        </label>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" id="privacy" />
                            <label htmlFor="privacy" className="text-sm">
                                I agree to with friendly{" "}
                                <a href="#" className="text-pink-600 underline">
                                    privacy policy.
                                </a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="bg-pink-600 text-white border-none rounded-md py-3 text-lg font-medium cursor-pointer mt-2 transition-colors hover:bg-pink-700"
                        >
                            Explore Events
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
