import React from "react";
import "./index.css"
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/Login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
