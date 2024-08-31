import React from "react";
import Navbar from "./navbar";
import Leftbar from "./Leftbar";
import Postbar from "./postbarClient";
import Rightbar from "./rightbarClient";

function ClientDashboard() {
  return (
    <>
      {/* Navbar Opening */}
      <Navbar />
      <hr className="mt-5" />
      {/* Navbar Closing */}

      {/* Dashboard opening */}
      <div className="flex justify-around mt-[3vw] p-2">
        {/* Leftbar */}
        <Leftbar />
        {/* Postbar */}
        <Postbar />
        {/* Rightbar */}
        <Rightbar />
      </div>

      {/* AI Component */}
    </>
  );
}

export default ClientDashboard;
