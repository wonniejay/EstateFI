import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home"; // Import your Home component
import About from "./pages/About"; // Import your About component
import Profile from "./pages/Profile"; // Import your Home component
import Writing from "./pages/Writing"; // Import your Writing component

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Define the Home route */}
        <Route path="/about" element={<About />} /> {/* Define the About route */}
        <Route path="/profile" element={<Profile />} /> {/* Define the Profile route */}
        <Route path="/Writing" element={<Writing />} /> {/* Define the Writing route */}
        {/* Define other routes for your application */}
      </Routes>
    </Router>
  );
}

export default App;