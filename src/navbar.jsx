import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import logo from "./assets/logo.png";
import ExploreDropdown from './navbarComponents/ExploreDropdown';
import OrdersDropdown from './navbarComponents/OrderDropdown';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ordersDropdownOpen, setOrdersDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <div className="pt-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div>
        <img className="w-[10vw]" src={logo} alt="Logo" />
      </div>

      {/* Search Bar */}
      <div className="flex">
        <input
          type="text"
          className="text-md border border-gray-300 p-2 w-[30vw] rounded-l-md focus:outline-none focus:border-purple-400"
          placeholder="Search what you need"
        />
        <button 
          className="p-2 bg-purple-400 text-white rounded-r-md"
          onClick={handleSearchClick} // Update to handleSearchClick
        >
          <IoSearch className="text-xl w-[3vw] hover:scale-125 transition-all ease" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 font-medium text-lg text-gray-700">
        {/* Explore Dropdown */}
        <ExploreDropdown 
          dropdownOpen={dropdownOpen} 
          setDropdownOpen={setDropdownOpen} 
        />

        {/* Orders Dropdown */}
        <OrdersDropdown 
          ordersDropdownOpen={ordersDropdownOpen} 
          setOrdersDropdownOpen={setOrdersDropdownOpen} 
        />

        {/* Profile Button */}
        <button 
          className="hover:text-purple-400 transition-colors" 
          onClick={() => navigate("/profile")}
        >
          Profile
        </button>
      </div>
    </div>
  );
}

export default Navbar;
