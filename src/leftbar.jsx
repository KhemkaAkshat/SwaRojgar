// Leftbar.js
import React from "react";
import { MdDesignServices, MdOutlineDesignServices, MdOutlineOndemandVideo } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { RiSteering2Fill } from "react-icons/ri";
import { FaShower } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { IoMdStar } from "react-icons/io";

function Leftbar() {
  return (
    <div className="leftbar w-1/4 p-5 border-2 rounded-xl drop-shadow-md bg-white h-1/2">
          <h2 className="text-xl font-bold mb-2 flex animate-pulse">
            Trending Gigs
            <IoMdStar className="m-1 text-yellow-500 animate-pulse" />
          </h2>

          <div className="flex p-2  justify-around gap-2 bg-purple-400 rounded-2xl">
            <div className="w-[7vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>

              <MdOutlineOndemandVideo className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Video Editing
              </h4>
            </div>
            <div className="w-[7vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <MdOutlineDesignServices className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Graphic Design
              </h4>
            </div>
            <div className="w-[7vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <CgWebsite className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Web Dev
              </h4>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-2">Local Gigs</h2>
          <div className="flex pt-2 justify-around gap-1">
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <PiCookingPot className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Cooking
              </h4>
            </div>
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <RiSteering2Fill className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Driving
              </h4>
            </div>
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <FaShower className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Plumber
              </h4>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-10 mb-2">Professional Gigs</h2>
          <div className="flex pt-2 justify-around gap-1">
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <CgWebsite className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Web Dev
              </h4>
            </div>
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <MdDesignServices className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Logo Design
              </h4>
            </div>
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
              <div
                className="absolute inset-0 bg-white rounded-xl group-hover:bg-gradient-to-r from-transparent to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, rgba(128, 0, 128, 0.2) 0%, transparent 60%)`,
                }}
              ></div>
              <SiMarketo className="text-4xl ml-2 mt-3 mb-6 text-gray-700 transition-colors duration-300 relative z-10" />
              <h4 className="font-semibold mb-1 text-gray-800 transition-colors duration-300 relative z-10">
                Social Media Marketing
              </h4>
            </div>
          </div>
        </div>
  );
}

export default Leftbar;
