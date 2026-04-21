import * as Icons from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect } from "react";

const ProductCard = ({ product, addToCart, cart = [] }) => {
  const Icon = Icons[product.icon];

  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!cart) return;

    const exists = cart.some((item) => item.id === product.id);
    setAdded(exists);
  }, [cart, product.id]);

  return (
    <div className="bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-lg transition duration-300 hover:-translate-y-1 relative">
      {/* Tag */}
      <span
        className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-full
        ${product.tagType === "popular" && "bg-purple-100 text-purple-600"}
        ${product.tagType === "new" && "bg-green-100 text-green-600"}
        ${product.tagType === "best" && "bg-orange-100 text-orange-600"}
      `}
      >
        {product.tag}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
        {Icon && <Icon className="text-purple-600 text-lg" />}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-2">{product.description}</p>

      {/* Price */}
      <p className="text-xl font-bold text-gray-800 mt-4">
        ${product.price}
        <span className="text-sm font-normal text-gray-500">
          /{product.period}
        </span>
      </p>

      {/* Features */}
      <ul className="mt-4 space-y-2">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <FaCheck className="text-green-500 text-xs" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={() => addToCart(product)}
        disabled={added}
        className={`w-full mt-6 py-2 rounded-full text-sm transition flex items-center justify-center gap-2
          ${
            added
              ? "bg-green-500 text-white cursor-not-allowed"
              : "bg-gradient-to-r from-purple-600 to-purple-800 text-white hover:opacity-90"
          }
        `}
      >
        {added ? (
          <>
            <FaCheck /> Added to Cart
          </>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default ProductCard;
