import React from "react";
import heroImage from "../assets/logo.png";
// Replace with your image path

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10">
      {/* Left Side - Text */}
      <div className="max-w-xl space-y-6 text-center px-48 md:text-left">
        <p className="text-gray-500 text-lg">Flat 20% Off</p>
        <h1 className="text-4xl md:text-5xl px-2 font-bold text-gray-800 leading-tight">
          Explore <span className="text-indigo-500">Warm</span> <br />
          Fast Food & Snacks
        </h1>
        <button className="mt-4 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md shadow-md">
          Shop Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="mt-10 md:mt-0 max-w-xl">
        <img
          src={heroImage}
          alt="Snacks with fruits and honey"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
