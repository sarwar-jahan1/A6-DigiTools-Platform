import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { FiShoppingCart } from "react-icons/fi";
import * as Icons from "react-icons/fa"; // 🔥 ADD THIS

const Products = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Choose from our curated collection of premium digital products.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "products"
                ? "bg-purple-600 text-white"
                : "border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "cart"
                ? "bg-purple-600 text-white"
                : "border"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cart={cart}
                addToCart={(item) => setCart([...cart, item])}
              />
            ))}
          </div>
        )}

        {/* CART */}
        {activeTab === "cart" && (
          <div className="mt-12 bg-white rounded-xl p-8 text-left">

            <h3 className="text-lg font-semibold mb-6">Your Cart</h3>

            {cart.length === 0 ? (
              <div className="flex items-center gap-3 text-gray-400">
                <FiShoppingCart className="text-4xl" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {cart.map((item, index) => {
                  const Icon = Icons[item.icon]; // 🔥 GET ICON

                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b py-3"
                    >
                      {/* LEFT */}
                      <div className="flex items-center gap-3">

                        {/* ICON */}
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          {Icon && (
                            <Icon className="text-purple-600 text-sm" />
                          )}
                        </div>

                        {/* TEXT */}
                        <div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-500">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <button
                        onClick={() => handleRemove(index)}
                        className="text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}

                {/* TOTAL */}
                <div className="flex justify-between mt-4 font-semibold">
                  <span>Total</span>
                  <span>${total}</span>
                </div>

                {/* BUTTON */}
                <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full">
                  Proceed to Checkout
                </button>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

export default Products;