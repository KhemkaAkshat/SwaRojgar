import React, { useEffect, useState } from "react";
import { IoCameraOutline } from "react-icons/io5";
import { IoIosLink } from "react-icons/io";
import axios from "axios";

function Postbar() {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5010/api/posts");
        setPosts(response.data); // Assuming response.data contains the array of posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="postbar w-2/5">
      {/* Input section for new posts */}
      <div className="flex gap-3 justify-center items-center mb-5">
        <button className="text-center h-12 w-12 flex justify-center items-center rounded-full font-semibold text-3xl text-white bg-purple-400 hover:bg-purple-600 transition-all ease">
          +
        </button>

        <div className="relative w-3/4">
          <input
            type="text"
            placeholder="Add a new post"
            className="rounded-3xl drop-shadow-md p-3 w-full pr-20 text-sm border focus:border-purple-500 focus:outline-none"
          />
          <IoCameraOutline className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />
          <IoIosLink className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl hover:cursor-pointer hover:text-gray-800 transition-all ease" />
        </div>
      </div>

      {/* Posts List */}
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="pb-5 mt-8 rounded-xl shadow-md bg-white">
            <div className="Profile flex gap-4 items-center p-2">
              {/* Replace with actual profile image or placeholder */}
              <img src="/path/to/profile/image" alt="" className="rounded-full w-12 h-12" />
              <p className="font-bold text-lg">{post.userId ? post.userId : "Unknown User"}</p>
            </div>
            <div className="posts p-5">
              <p className="font-bold">{post.title}</p>
              <p>{post.content}</p>
              {/* Show image if available */}
              {post.image && (
                <img src={`http://localhost:5010/${post.image}`} alt={post.title} className="mt-2 w-full rounded-md" />
              )}
            </div>
            <div className="bottom flex justify-around items-center gap-5">
              <button className="bg-red-500 font-semibold p-3 px-5 text-white rounded-xl hover:bg-red-900 transition-all ease">
                Apply
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Postbar;
