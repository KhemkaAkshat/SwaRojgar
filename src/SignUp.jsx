import React from "react";
import signupImage from "./assets/sigup.png"; // Corrected the typo in the file name
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-300">
      {/* Outer wrapper to center the content vertically and horizontally */}
      <div className="m-[5vw] w-[90vw] max-w-[1200px] flex justify-center items-center border-2 p-[2vw] rounded-3xl bg-white shadow-lg transition-all duration-500 ease-in-out transform">
        {/* Image section */}
        <div className="hidden md:block w-1/2 p-5">
          <img
            src={signupImage}
            alt="Sign Up Page"
            className="w-full rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
          />
        </div>
        {/* Main section */}
        <div className="w-full md:w-1/2 p-5">
          <h4 className="text-5xl font-bold mb-4 text-gray-800">Create Account</h4>
          <h5 className="text-lg mb-6 text-gray-600">Join us and start your journey!</h5>
          <div className="flex gap-4 w-full md:w-3/4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-3/4 mt-4 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full md:w-3/4 mt-4 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full md:w-3/4 mt-4 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <div className="w-full md:w-3/4 mt-4">
            <label className="block mb-2 text-gray-600">Upload ID Card:</label>
            <input
              type="file"
              className="w-full p-2 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
          </div>
          <button
            onClick={() => alert("Account created successfully!")}
            type="button"
            className="w-full md:w-3/4 mt-6 p-4 rounded-lg bg-purple-500 hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 text-white font-bold"
          >
            Sign Up
          </button>
          <div className="mt-4 text-center">
            Already have an account?{' '}
            <button
              onClick={() => navigate("/Login")}
              className="text-purple-600 hover:underline font-semibold"
            >
              Sign in
            </button>
          </div>
          <div className="flex justify-center gap-5 mt-8">
            <button className="bg-white p-4 rounded-full transition-transform duration-500 hover:scale-110 shadow-lg hover:shadow-2xl">
              <FaGooglePlusG className="text-3xl text-red-500" />
            </button>
            <button className="bg-white p-4 rounded-full transition-transform duration-500 hover:scale-110 shadow-lg hover:shadow-2xl">
              <FaGooglePlusG className="text-3xl text-blue-500" />
            </button>
            <button className="bg-white p-4 rounded-full transition-transform duration-500 hover:scale-110 shadow-lg hover:shadow-2xl">
              <FaGooglePlusG className="text-3xl text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
