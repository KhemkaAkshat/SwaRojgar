import React from "react";
import { MdDesignServices, MdOutlineDesignServices, MdOutlineOndemandVideo } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { RiSteering2Fill } from "react-icons/ri";
import { FaShower } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { IoMdStar } from "react-icons/io";
import MapComponent from "./MapComponent";

function Leftbar() {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-5 border rounded-xl shadow-lg bg-white h-auto">
      {/* Leftbar Content */}
      <div className="flex flex-col mb-8">
        <h2 className="text-xl font-bold mb-4 flex items-center">
          Trending Gigs
          <IoMdStar className="ml-2 text-yellow-500 animate-pulse" />
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {/* Video Editing Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MdOutlineOndemandVideo className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Video Editing</h4>
          </div>

          {/* Graphic Design Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MdOutlineDesignServices className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Graphic Design</h4>
          </div>

          {/* Web Dev Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CgWebsite className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Web Dev</h4>
          </div>
        </div>

        {/* Local Gigs Section */}
        <h2 className="text-xl font-bold mt-10 mb-4">Local Gigs</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Cooking Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <PiCookingPot className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Cooking</h4>
          </div>

          {/* Driving Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <RiSteering2Fill className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Driving</h4>
          </div>

          {/* Plumber Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaShower className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Plumber</h4>
          </div>
        </div>

        {/* Professional Gigs Section */}
        <h2 className="text-xl font-bold mt-10 mb-4">Professional Gigs</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Web Dev Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <CgWebsite className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Web Dev</h4>
          </div>

          {/* Logo Design Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <MdDesignServices className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Logo Design</h4>
          </div>

          {/* Social Media Marketing Card */}
          <div className="w-full p-4 rounded-xl shadow-md bg-white transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <SiMarketo className="text-4xl text-purple-600 mb-4" />
            <h4 className="font-semibold text-gray-800">Social Media Marketing</h4>
          </div>
        </div>
      </div>

      {/* Map Component */}
      <div className="mt-10 p-5 border rounded-xl bg-white shadow-md">
        <h2 className="text-xl font-bold mb-4">Map</h2>
        <div className="h-64 md:h-80">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
