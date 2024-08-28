import React from "react";
import mainImage from "./assets/main.png";
import logo from "./assets/logo.png";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <>
      <div className=" pt-5 px-8 flex items-center bg-contain bg-center">
        {/* Navbar */}
        <div className=" mr-[30vw]">
          <img className="w-[14vw]" src={logo} alt="Logo" />
        </div>
        <div className=" ml-[24vw] flex gap-20 font-semibold text-xl">
          <button>Explore</button>
          <button>Lists</button>
          <button>Profile</button>
        </div>
      </div>
      <div className=" justify-center items-center w-1/2 p-20">
        <div className="font-bold text-3xl ">
            Find the Perfect Freelancer for you
        </div>
        <div className="flex mt-10 ">
            <input type="text" className="text-xl border-2 p-5 w-3/4 rounded-xl" />
            <button className="ml-[-1vw] p-5 bg-purple-400 rounded-tr-xl rounded-br-xl ">
            <IoSearch className="text-3xl"/>
            </button>
        </div>
      </div>
    </>
  );
}

export default Home;
