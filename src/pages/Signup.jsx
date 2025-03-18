import React from "react";
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/2 max-w-md bg-white shadow-lg rounded-lg flex">
      {/* Right Side - Signup Form */}
        <div className="w-full p-10">
          <h2 className="text-3xl font-bold mb-6">Sign up</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              placeholder="Mobile number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
            >
              CONTINUE
            </button>
          </form>

          <p className="text-sm mt-4">
            Already have an account? <Link to="/login"><span className="font-semibold cursor-pointer">Sign in</span></Link>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-13 text-gray-500">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}