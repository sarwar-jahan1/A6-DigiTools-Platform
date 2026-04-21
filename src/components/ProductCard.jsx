import * as Icons from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductCard = ({ product, addToCart, cart = [] }) => {
  const Icon = Icons[product.icon];

  const [added, setAdded] = useState(false);

  useEffect(() => {
    const exists = cart.some((item) => item.id === product.id);
    setAdded(exists);
  }, [cart, product.id]);

  const handleClick = () => {
    addToCart(product);

    toast.success(`${product.name} added!`);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition hover:-translate-y-1">

      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        {Icon && <Icon className="text-purple-600" />}
      </div>

      <h3 className="font-semibold">{product.name}</h3>

      <p className="text-sm text-gray-500 mt-2">
        {product.description}
      </p>

      <p className="text-xl font-bold mt-4">
        ${product.price}
      </p>

      <button
        onClick={handleClick}
        disabled={added}
        className={`w-full mt-6 py-2 rounded-full flex items-center justify-center gap-2
          ${
            added
              ? "bg-green-500 text-white"
              : "bg-gradient-to-r from-purple-600 to-purple-800 text-white"
          }`}
      >
        {added ? (
          <>
            <FaCheck /> Added
          </>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default ProductCard;