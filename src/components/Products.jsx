import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { FiShoppingCart } from "react-icons/fi";

const Products = () => {
  const [activeTab, setActiveTab] = useState("products"); // products | cart
  const [cart, setCart] = useState([]);

  return (
    <div className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          {/* Products Button */}
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full text-sm ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "border text-gray-600"
            }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full text-sm ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "border text-gray-600"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={() => setCart([...cart, product])}
              />
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="mt-12 bg-white rounded-xl p-10 text-center shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Your Cart
            </h3>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <FiShoppingCart className="text-4xl" />
                <p className="text-sm">Your cart is empty</p>
              </div>
            ) : (
              <div className="text-left space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2 text-sm"
                  >
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
