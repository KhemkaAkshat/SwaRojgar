import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io"; // Correct package

import { posts } from "./posts"; // Adjust the path if necessary

function Postbar() {
  return (
    <div className="postbar w-2/5">
      <div className="flex gap-3 justify-center items-center">
        <button className="text-center h-12 w-12 flex justify-center items-center rounded-full font-semibold text-3xl text-white bg-purple-400 hover:bg-purple-600 transition-all ease">
          +
        </button>

        {/* Wrapper div for input and icon */}
        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Add a new post"
            className="rounded-3xl drop-shadow-md p-3 w-full pr-20 text-sm border focus:border-purple-500 focus:outline-none"
          />

          {/* Camera Icon, positioned inside the input */}
          <IoCameraOutline className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />

          {/* Link Icon, positioned inside the input */}
          <IoIosLink className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post, index) => (
        <div key={index} className="pb-5 mt-8 rounded-xl shadow-md bg-white">
          <div className="Profile flex gap-4 items-center p-2 ">
            <img src={post.pp} alt="" className="rounded-full w-12 h-12 " />
            <p className="font-bold text-lg">{post.name}</p>
          </div>
          <div className="posts p-5">
            <img src={post.cover} alt="" className="rounded-md" />
          </div>
          <div className="bottom flex justify-around items-center gap-5 ">
            <div className="w-[20vw] text-lg font-medium font-body ">
              Starts from <span className="font-semibold">{post.price}</span>
            </div>
            {/* Changed button text to "Hire" */}
            <button className="bg-green-700 font-semibold p-3 px-5 text-white rounded-xl hover:bg-green-900 transition-all ease">
              Hire
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postbar;
