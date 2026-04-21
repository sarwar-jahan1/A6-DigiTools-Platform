import React, { useState } from "react";
import products from "../data/products.json";
import ProductCard from "./ProductCard";
import { FiShoppingCart } from "react-icons/fi";
import * as Icons from "react-icons/fa";
import { toast } from "react-toastify";

const Products = ({ cart, setCart }) => {
  const [activeTab, setActiveTab] = useState("products");

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Premium Digital Tools
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
          Choose from our curated collection of premium digital products...
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "products" ? "bg-purple-600 text-white" : "border"
            }`}
          >
            Products
          </button>

          <button
            onClick={() => setActiveTab("cart")}
            className={`px-5 py-2 rounded-full ${
              activeTab === "cart" ? "bg-purple-600 text-white" : "border"
            }`}
          >
            Cart ({cart.length})
          </button>
        </div>

        {/* PRODUCTS */}
        {activeTab === "products" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
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
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm text-left">
            <h3 className="text-lg font-semibold mb-6">Your Cart</h3>

            {cart.length === 0 ? (
              <div className="flex items-center gap-3 text-gray-400">
                <FiShoppingCart className="text-3xl" />
                <p>Your cart is empty</p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                {cart.map((item, index) => {
                  const Icon = Icons[item.icon];

                  return (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-50 p-4 rounded-lg mb-3"
                    >
                      <div className="flex items-center gap-3">
                        {/* ICON */}
                        {Icon && <Icon className="text-purple-600 text-xl" />}

                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">${item.price}</p>
                        </div>
                      </div>

                      {/* REMOVE */}
                      <button
                        onClick={() => {
                          setCart(cart.filter((_, i) => i !== index));

                          toast.error(`${item.name} removed`);
                        }}
                        className="text-red-500 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}

                {/* TOTAL */}
                <div className="flex justify-between mt-6 font-semibold text-lg">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>

                {/* CHECKOUT */}
                <button
                  onClick={() => {
                    toast.success("Order placed successfully!");
                    setCart([]); // ✅ CLEAR CART
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 rounded-full hover:opacity-90 transition"
                >
                  Proceed To Checkout
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
