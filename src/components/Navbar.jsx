import { FiShoppingCart } from "react-icons/fi";

const Navbar = ({ cart }) => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="text-xl font-bold text-purple-600">DigiTools</h1>

        <div className="flex items-center gap-4">

          <div className="relative">
            <FiShoppingCart className="text-xl" />

            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </div>

          <button>Login</button>

          <button className="bg-purple-600 text-white px-4 py-1 rounded-full">
            Get Started
          </button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;