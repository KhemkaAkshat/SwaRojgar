import React from "react";
import "./index.css";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home.jsx';
import AdvancedEscrowDemo from "./EscrowAccount.jsx";
import CustomerEscrowInterface from "./customerEscrow.jsx";
import ResolutionCenter from "./ResolutionCenter.jsx";
import Profile from "./freelancerProfile.jsx";
import ClientProfile from "./clientProfile.jsx";
import Search from "./search.jsx";
import ClientDashboard from './ClientDashboard'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/custescrow' element={<CustomerEscrowInterface />} />
        <Route path='/escrow' element={<AdvancedEscrowDemo />} />
        <Route path='/ResolutionCenter' element={<ResolutionCenter />} />
        <Route path='/freelancer-dashboard' element={<Home />} />
        <Route path='/client-dashboard' element={<ClientDashboard />} /> {/* Updated route */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clientprofile" element={<ClientProfile />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
