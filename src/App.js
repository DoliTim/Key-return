// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import HowItWorksDetailed from './components/HowItWorksDetailed';
import Subscription from './components/Subscription';
import AboutUs from './components/AboutUs';
import FoundKeys from './components/FoundKeys'; // Importing FoundKeys component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorksDetailed />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/found-keys" element={<FoundKeys />} /> {/* New Found Keys route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
