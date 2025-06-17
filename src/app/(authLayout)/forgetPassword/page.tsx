import Image from "next/image";


import React from "react";
import logo from "../../../../public/login-logo.png";

const page = () => {
  return (
    <section>
      <div className="  mx-auto flex flex-col-reverse md:flex-row items-center justify-center h-screen gap-10 px-4 md:px-0">
        {/* form section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-white rounded-lg  px-10 py-12 w-full ">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Forgot password
          </h1>
          <form className="w-full flex flex-col gap-4 max-w-md">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-[#EA1E63] text-white font-semibold rounded py-3 mt-2 hover:bg-blue-700 transition"
            >
              Reset password
            </button>
          </form>
           <div className="mt-20">
            <h1 className="md:text-lg text-gray-400">Check your email for forgotest instructions</h1>
        </div>
        </div>
       

        {/* img section */}
        <div className=" flex-1 h-full flex  mt-5 md:mt-0 bg-[#F3EEE7] w-full justify-center items-center  ">
          <div>
            <div className="flex  flex-col justify-center items-center gap-5">
              <figure className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Login Illustration"
                  width={500}
                  height={500}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
              </figure>
              <h1 className="text-4xl pb-5 lg:text-7xl font-laila font-semibold">
                Event Tap
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
