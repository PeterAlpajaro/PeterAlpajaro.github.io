// IMPORTS --------------------------------------------------------------------
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';

// PAGES --------------------------------------------------------------------
import Home from '../pages/Home';
import HapticGlove from '../pages/HapticGlove.tsx';
import VitalE from '../pages/VitalE.tsx';
import CampusManhunt from '../pages/CampusManhunt.tsx';
import MyDiet from '../pages/MyDiet.tsx';


// APP ENTRY POINT -----------------------------------------------------------
const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Header Section */}
        <header className="header">
          <h1 className="header-title">Peter Alpajaro</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </header>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project1" element={<HapticGlove />} />
          <Route path="/project2" element={<VitalE />} />
          <Route path="/project3" element={<MyDiet />} />
          <Route path="/project4" element={<CampusManhunt />} />

        </Routes>

        {/* Footer Section */}
        <footer id="contact" className="footer">
          <p>Contact me at: palpajar@uwaterloo.ca</p>
          <p>&copy; {new Date().getFullYear()} Peter Alpajaro. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
