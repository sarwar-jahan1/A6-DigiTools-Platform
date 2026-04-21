import React from "react";

const Stats = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-800 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center text-white text-center">
        <div className="flex-1 py-4">
          <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="text-sm mt-2 opacity-80">Active Users</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30"></div>

        <div className="flex-1 py-4">
          <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
          <p className="text-sm mt-2 opacity-80">Premium Tools</p>
        </div>

        <div className="hidden md:block w-px h-12 bg-white/30"></div>

        <div className="flex-1 py-4">
          <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="text-sm mt-2 opacity-80">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
