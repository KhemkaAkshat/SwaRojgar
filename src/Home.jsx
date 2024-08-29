import React from "react";
import mainImage from "./assets/main.png";
import logo from "./assets/logo.png";
import { IoCameraOutline, IoSearch } from "react-icons/io5";
import {
  MdDesignServices,
  MdOutlineDesignServices,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { trendingGigs } from "./gigs";
import { CgWebsite } from "react-icons/cg";
import { PiCookingPot } from "react-icons/pi";
import { RiSteering2Fill } from "react-icons/ri";
import { FaShower, FaStar } from "react-icons/fa";
import { SiMarketo } from "react-icons/si";
import { IoIosLink, IoMdStar } from "react-icons/io";
import { posts } from "./posts";
import { courses } from "./courses";

function Home() {
  return (
    <>
      {/* Navbar Opening  */}
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
          <button className="hover:text-purple-400 transition-colors">
            Explore
          </button>
          <button className="hover:text-purple-400 transition-colors">
            Orders
          </button>
          <button className="hover:text-purple-400 transition-colors">
            Profile
          </button>
        </div>
      </div>
      {/* Navbar Closing  */}

      {/* dashboard opening  */}
      <div className="flex justify-around mt-[3vw] p-5 gap-5">
        {/* Leftbar opening  */}
        <div className="leftbar w-1/3 p-5 ">
          <h2 className="text-xl font-bold mb-2 flex animate-pulse">
            Trending Gigs
            <IoMdStar className="m-1 text-yellow-500 animate-pulse" />
          </h2>

          <div className="flex p-3 pt-4 pb-4 justify-around gap-1 bg-emerald-900 rounded-2xl">
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
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
            <div className="w-[8vw] p-2 rounded-xl shadow-xl bg-white transition-all duration-300 relative overflow-hidden group">
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
        {/* Postbar opening  */}
        <div className="postbar w-1/3">
          <div className="flex gap-5">
            <button className="text-center pb-1 h-16 w-16 flex justify-center items-center rounded-full font-semibold text-3xl text-white bg-purple-400 hover:bg-purple-600 transition-all ease">
              +
            </button>

            {/* Wrapper div for input and icon */}
            <div className="relative w-3/4">
              <input
                type="text"
                placeholder="Add a new post"
                className="rounded-3xl drop-shadow-md p-5 w-full pr-10"
              />

              <IoCameraOutline className="absolute right-[4vw] top-1/3 -transform tranlate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />
              <IoIosLink className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />
            </div>
          </div>

          {/* posts  */}
          {posts.map((post, index) => {
            return (
              <div className="border-2 mt-8 rounded-md">
                <div className="Profile flex gap-4 items-center p-2 ">
                  <img
                    src={post.pp}
                    alt=""
                    className="rounded-full w-12 h-12 border-2 "
                  />
                  <p className="font-bold text-lg">{post.name}</p>
                </div>
                <div className="posts p-5">
                  <img src={post.cover} alt="" className="rouned-md" />
                </div>
                <div className="bottom flex  justify-around items-center gap-5 mb-2">
                  <div className="w-[20vw] text-lg font-medium font-body ">
                    Starts from{" "}
                    <span className="font-semibold">{post.price}</span>
                  </div>
                  <button className="bg-green-900 font-semibold p-3 px-5  text-white rounded-xl">
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* rightbar opening  */}
        <div className="rightbar w-1/3 border-2">
          <div className="courses flex flex-wrap">
            {courses.map((course, index) => {
              return (
                <div className=" w-1/2 p-5">
                <div className="mb-5 bg-white rounded shadow-lg ">
                  <iframe
                  className="rounded-xl"
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${course.videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  </div> 
                  <div className="font-bold pb-5 p-2">{course.name}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
