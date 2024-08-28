import React from "react";
import "./index.css"
import Login from "./Login";
import SignUp from "./SignUp"; // Make sure to import SignUp if you're using it
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> {/* Default route or entry point */}
        <Route path="/Login" element={<Login />} /> {/* Route for Login */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
