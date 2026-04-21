// src/components/Pricing.jsx

import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className="w-full bg-[#f3f4f6] py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Starter */}
          <div
            className="bg-white rounded-xl p-6 text-left shadow-sm 
                          hover:shadow-xl hover:-translate-y-1 
                          transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">Starter</h3>
            <p className="text-sm text-gray-500">Perfect for getting started</p>

            <h2 className="text-3xl font-bold mt-4">
              $0
              <span className="text-sm text-gray-500 font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Basic templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Community support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> 1 project per month
              </li>
            </ul>

            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full text-sm hover:opacity-90 transition">
              Get Started Free
            </button>
          </div>

          {/* Pro */}
          <div
            className="relative rounded-xl p-6 text-left text-white 
                          bg-gradient-to-r from-purple-600 to-purple-800 
                          shadow-lg 
                          hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
                          transition duration-300"
          >
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
              Most Popular
            </span>

            <h3 className="text-lg font-semibold">Pro</h3>
            <p className="text-sm opacity-80">Best for professionals</p>

            <h2 className="text-3xl font-bold mt-4">
              $29
              <span className="text-sm font-normal opacity-80">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaCheck /> Access to all premium tools
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited templates
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Priority support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Unlimited projects
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Cloud sync
              </li>
              <li className="flex items-center gap-2">
                <FaCheck /> Advanced analytics
              </li>
            </ul>

            <button className="w-full mt-6 bg-white text-purple-700 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise */}
          <div
            className="bg-white rounded-xl p-6 text-left shadow-sm 
                          hover:shadow-xl hover:-translate-y-1 
                          transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
            <p className="text-sm text-gray-500">For teams and businesses</p>

            <h2 className="text-3xl font-bold mt-4">
              $99
              <span className="text-sm text-gray-500 font-normal">/Month</span>
            </h2>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Team collaboration
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Custom integrations
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Dedicated support
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> SLA guarantee
              </li>
              <li className="flex items-center gap-2">
                <FaCheck className="text-green-500" /> Custom branding
              </li>
            </ul>

            <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 rounded-full text-sm hover:opacity-90 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
