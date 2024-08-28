import React from "react";
import mainImage from "./assets/main.png";
import logo from "./assets/logo.png";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className="pt-4 px-6 flex justify-between items-center  ">
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
          <button className="p-2 bg-purple-400 text-white rounded-r-md ">
            <IoSearch className="text-xl w-[3vw] hover:scale-125 transition-all ease" />
          </button>
        </div>
        <div className="flex gap-8 font-medium text-lg text-gray-700">
          <button className="hover:text-purple-400 transition-colors">Explore</button>
          <button className="hover:text-purple-400 transition-colors">Orders</button>
          <button className="hover:text-purple-400 transition-colors">Profile</button>
        </div>
      </div>
    </>
  );
}

export default Home;
