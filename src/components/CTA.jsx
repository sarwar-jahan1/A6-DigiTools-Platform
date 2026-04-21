import React from "react";

// src/components/CTA.jsx

const CTA = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-16 md:py-12 text-center text-white">
      {/* Content (centered but full width section) */}
      <div className="px-4">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-base opacity-90 max-w-xl mx-auto">
          Join thousands of professionals using Digitools to work smarter. Start
          your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          {/* Primary */}
          <button className="bg-white text-purple-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition">
            Explore Products
          </button>

          {/* Secondary */}
          <button className="border border-white px-6 py-2.5 rounded-full text-sm hover:bg-white hover:text-purple-700 transition">
            View Pricing
          </button>
        </div>

        {/* Bottom text */}
        <p className="mt-6 text-xs opacity-80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default CTA;
