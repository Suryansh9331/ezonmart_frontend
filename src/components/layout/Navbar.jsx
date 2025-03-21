import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar =() => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-gray-100">
      {/* Top Bar */}
      <div className="bg-gray-200 text-sm text-gray-600 py-2 px-4 flex justify-between items-center">
        <span>Help Center | Service - (920) 222-4242</span>
        <span>Download App</span>
      </div>

      {/* Main Navbar */}
      <nav className="relative bg-white shadow-md px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="justify-center">
          <img className="px-0.5 h-14 w-auto" src="./images/logo5.png" alt="logo" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          <li className="cursor-pointer hover:text-black">Men</li>
          <li className="cursor-pointer hover:text-black">Women</li>
          <li className="cursor-pointer hover:text-black">Kids</li>
          <li className="cursor-pointer hover:text-black">Blog</li>
          <li className="cursor-pointer hover:text-black">Contact</li>
          <li className="cursor-pointer font-semibold text-red-500">SPECIAL SALE</li>
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Live your life daily"
              className="border rounded-full py-1 px-4 text-sm w-48"
            />
            <FiSearch className="absolute right-3 top-2 text-gray-500" />
          </div>
          <FiHeart className="text-xl cursor-pointer hover:text-gray-600" />
          <div className="relative">
            <FiShoppingCart className="text-xl cursor-pointer hover:text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">1</span>
          </div>
         <Link to="/login"><FiUser className="text-xl cursor-pointer hover:text-gray-600"/></Link> 
   
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full bg-white w-2/3 p-6 shadow-lg transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="text-2xl absolute top-4 right-4"
            onClick={() => setMenuOpen()}
          >
            <FiX />
          </button>

          <ul className="mt-12 space-y-4 text-gray-700">
            <li className="cursor-pointer hover:text-black">Men</li>
            <li className="cursor-pointer hover:text-black">Women</li>
            <li className="cursor-pointer hover:text-black">Kids</li>
            <li className="cursor-pointer hover:text-black">Blog</li>
            <li className="cursor-pointer hover:text-black">Contact</li>
            <li className="cursor-pointer font-semibold text-black">SPECIAL SALE</li>
          </ul>
        </div>
        </nav>
      </header>
  );
};

export default Navbar;

