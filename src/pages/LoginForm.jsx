import React from "react";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-1/2 max-w-md bg-white shadow-lg rounded-lg flex">
        {/* Left Side - Discount Offer */}
       

        {/* Right Side - Login Form */}
        <div className="w-full p-10">
          <h2 className="text-3xl font-bold mb-6">Login</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Email or mobile phone number"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition"
            >
              CONTINUE
            </button>
          </form>

          <p className="text-xs mt-4">
            By continuing, you agree to Nicobar <span className="font-semibold cursor-pointer">Conditions of Use</span> and <span className="font-semibold cursor-pointer">Privacy Notice</span>.
          </p>

          <div className="mt-6">
            <p className="text-sm mb-2">New to  Ezonmart</p>
           <Link to="/signup"><button className="w-full border border-gray-400 py-2 rounded-md hover:bg-gray-100">
              Create your Ezonmart account
            </button></Link> 
          </div>

         
        </div>
      </div>
    </div>
  );
}