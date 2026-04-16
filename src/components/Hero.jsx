import React from "react";

import { FiArrowRight, FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="w-full bg-[#f3f4f6] py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-block bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full mb-4">
              ✨ New: AI-Powered Tools Available
            </span>

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm md:text-base mb-6 max-w-md">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary Button */}
              <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-full text-sm hover:bg-purple-700 transition">
                Explore Products
                <FiArrowRight className="text-base" />
              </button>

              {/* Secondary Button */}
              <button className="flex items-center justify-center gap-2 border border-purple-500 text-purple-600 px-5 py-2.5 rounded-full text-sm hover:bg-purple-50 transition">
                <FiPlay className="text-base" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="../../assets/banner.png" // 👉 তোর image path বসাবি
              alt="hero"
              className="w-full max-w-md mx-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
