import React, { useState } from "react";
import { TrendingGigs, LocalGigs } from "../gigs"; // Import both TrendingGigs and LocalGigs arrays

function ExploreDropdown({ dropdownOpen, setDropdownOpen }) {
  const [trendingGigsToShow, setTrendingGigsToShow] = useState(3); // State to manage how many trending gigs to show
  const [localGigsToShow, setLocalGigsToShow] = useState(3); // State to manage how many local gigs to show

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const seeMoreTrending = () => {
    setTrendingGigsToShow(trendingGigsToShow + 3); // Show 3 more trending gigs each time "see more" is clicked
  };

  const seeMoreLocal = () => {
    setLocalGigsToShow(localGigsToShow + 3); // Show 3 more local gigs each time "see more" is clicked
  };

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default action to avoid navigating away
  };

  return (
    <div className="relative">
      <button
        className="hover:text-purple-400 transition-colors"
        onClick={toggleDropdown}
      >
        Explore
      </button>
      <div
        className={`absolute top-full right-0 mt-2 w-60 bg-white border border-gray-300 rounded-lg shadow-lg z-50 transition-transform duration-300 ease-in-out ${
          dropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          transformOrigin: "top right", // Set origin for a smooth dropdown animation
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <div className="p-4">
          <h4 className="text-lg font-semibold mb-2">Professional Jobs</h4>
          <ul className="space-y-2">
            {/* Render the first 'trendingGigsToShow' gigs from TrendingGigs */}
            {TrendingGigs.slice(0, trendingGigsToShow).map((gig, index) => (
              <li key={index}>
                <a href="#" className="block hover:bg-gray-100 p-2 rounded-md" onClick={handleLinkClick}>
                  {gig.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Show 'see more' button only if there are more gigs to display */}
          {trendingGigsToShow < TrendingGigs.length && (
            <button
              className="text-sm pt-2 text-blue-500 hover:underline"
              onClick={seeMoreTrending}
            >
              see more
            </button>
          )}
        </div>
        <div className="border-t border-gray-300">
          <div className="p-4">
            <h4 className="text-lg font-semibold mb-2">Local Jobs</h4>
            <ul className="space-y-2">
              {/* Render the first 'localGigsToShow' gigs from LocalGigs */}
              {LocalGigs.slice(0, localGigsToShow).map((gig, index) => (
                <li key={index}>
                  <a href="#" className="block hover:bg-gray-100 p-2 rounded-md" onClick={handleLinkClick}>
                    {gig.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Show 'see more' button only if there are more local gigs to display */}
            {localGigsToShow < LocalGigs.length && (
              <button
                className="text-sm pt-2 text-blue-500 hover:underline"
                onClick={seeMoreLocal}
              >
                see more
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreDropdown;
