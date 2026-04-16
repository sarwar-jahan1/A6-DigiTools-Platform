import React from "react";
// src/components/Navbar.jsx

// src/components/Navbar.jsx

import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full bg-[#f3f4f6]">
      {/* Container */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

          {/* Menu - Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 text-sm font-medium">
            <li className="hover:text-purple-600 cursor-pointer">Products</li>
            <li className="hover:text-purple-600 cursor-pointer">Features</li>
            <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
            <li className="hover:text-purple-600 cursor-pointer">
              Testimonials
            </li>
            <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
          </ul>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-5">
            {/* Cart */}
            <FiShoppingCart className="text-gray-700 text-lg cursor-pointer" />

            {/* Login */}
            <button className="text-gray-600 text-sm font-medium hover:text-purple-600">
              Login
            </button>

            {/* Button */}
            <button className="bg-purple-600 text-white text-sm px-4 py-2 rounded-full hover:bg-purple-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <details className="dropdown dropdown-end">
              <summary className="text-xl cursor-pointer">☰</summary>

              <ul className="menu dropdown-content mt-3 p-3 shadow bg-white rounded-box w-52 text-sm">
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Features</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>

                <div className="divider my-1"></div>

                <li>
                  <a className="flex items-center gap-2">
                    <FiShoppingCart /> Cart
                  </a>
                </li>

                <li>
                  <a>Login</a>
                </li>

                <li>
                  <a className="bg-purple-600 text-white text-center rounded-lg">
                    Get Started
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
