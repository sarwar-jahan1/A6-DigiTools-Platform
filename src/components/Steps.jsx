import React from "react";

// src/components/Steps.jsx

import { FaUser, FaBoxOpen, FaRocket } from "react-icons/fa";

const Steps = () => {
  return (
    <div className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Get Started In 3 Steps
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Step 1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative hover:shadow-lg transition">
            {/* Badge */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
              01
            </span>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <FaUser className="text-purple-600 text-xl" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Create Account
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative hover:shadow-lg transition">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
              02
            </span>

            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <FaBoxOpen className="text-purple-600 text-xl" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Choose Products
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl p-8 shadow-sm relative hover:shadow-lg transition">
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full">
              03
            </span>

            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 rounded-full mb-4">
              <FaRocket className="text-purple-600 text-xl" />
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Start Creating
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
