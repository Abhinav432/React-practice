import React from "react";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      {/* Top Bar */}
      <div className="flex justify-between h-[80px] items-center px-6 md:px-16 py-4 border-b bg-zinc-100">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <img src="https://img.icons8.com/emoji/32/blueberries.png" alt="logo" />
          <span className="text-gray-800">Blue</span> Berry
        </div>

        {/* Location & Search */}
        <div className="flex-grow mx-7 hidden lg:flex items-center gap-4">
          <div className="bg-pink-400 border rounded-md px-2 py-1 flex items-center">
          <select className="border px-2 py-1 rounded-md text-sm bg-amber-500 w-34 h-7  text-gray-700">
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy</option>
          </select>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="w-[200px] border rounded-md h-8 bg-white px-4 py-2 pl-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FiSearch className="absolute left-45 top-1/2 transform -translate-y-1/2  text-black" />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-lg  w-30  text-gray-700">
          <a href="#" className="hover:text-indigo-600 ml-2 text-violet-400 text-xl">Login</a>
          </div>
          <div className="flex items-center w-30 gap-3">
            <FiHeart />
            <div>
            <spam>3 items</spam>
            <h6 className="font-semibold">Wishlist</h6>
            </div>
          </div>
          <div className="flex items-center  w-30 gap-1">
            <FiShoppingCart />
            <span>4</span>
          </div>
        
      </div>

      {/* Navigation Bar */}
      <nav className="px-6 md:px-16 py-3 flex flex-wrap justify-between items-center text-gray-700 text-sm">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap font-semibold text-sm md:text-base text-violet-800">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">Categories</a>
          <a href="#" className="hover:text-indigo-600">Products</a>
          <a href="#" className="hover:text-indigo-600">Pages</a>
          <a href="#" className="hover:text-indigo-600">Blog</a>
          <a href="#" className="hover:text-indigo-600">Offers</a>
        </div>

        {/* Location Dropdown (Mobile View shown here always for simplicity) */}
        <div className="mt-2 md:mt-0">
          <select className="border px-2 py-1 rounded-md text-sm text-gray-700">
            <option>Kangra</option>
            <option>Delhi</option>
            <option>Mumbai</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
