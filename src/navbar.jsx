import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import logo from "./assets/logo.png";
import Profile from './freelancerProfile';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div className="pt-4 px-6 flex justify-between items-center">
        {/* Navbar */}
        <div>
          <img className="w-[10vw]" src={logo} alt="Logo" />
        </div>
        <div className="flex">
          <input
            type="text"
            className="text-md border border-gray-300 p-2 w-[30vw] rounded-l-md focus:outline-none focus:border-purple-400"
            placeholder="Search what you need"
          />
          <button className="p-2 bg-purple-400 text-white rounded-r-md">
            <IoSearch className="text-xl w-[3vw] hover:scale-125 transition-all ease" />
          </button>
        </div>
        <div className="flex gap-8 font-medium text-lg text-gray-700">
          <div className="relative">
            <button
              className="hover:text-purple-400 transition-colors"
              onClick={toggleDropdown}
            >
              Explore
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">Professional Jobs</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Video Editing</a></li>
                    <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Web Development</a></li>
                    <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Logo Design</a></li>
                    {/* Add more professional job links as needed */}
                  </ul>
                </div>
                <div className="border-t border-gray-300">
                  <div className="p-4">
                    <h4 className="text-lg font-semibold mb-2">Local Jobs</h4>
                    <ul className="space-y-2">
                      <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Plumber</a></li>
                      <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Driver</a></li>
                      <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Carpenter</a></li>
                      <li><a href="#" className="block hover:bg-gray-100 p-2 rounded-md">Cook</a></li>
                      {/* Add more local job links as needed */}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button className="hover:text-purple-400 transition-colors">
            Orders
          </button>
          <button className="hover:text-purple-400 transition-colors" onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
