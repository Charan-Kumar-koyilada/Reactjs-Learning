import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mb-12">
      <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
        Airlume.Ai
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-gray-600">
        <a className="hover:text-blue-600 cursor-pointer">Home</a>
        <a className="hover:text-blue-600 cursor-pointer">Features</a>
        <a className="hover:text-blue-600 cursor-pointer">Loyalty Points</a>
        <a className="hover:text-blue-600 cursor-pointer">How it works</a>
        <a className="hover:text-blue-600 cursor-pointer">FAQ</a>
      </div>
      <div className="gap-6 flex items-center flex-row">
        <button className="text-sm text-gray-600 hover:text-blue-600">
          Log in
        </button>

        <button className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-md hover:opacity-90 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
