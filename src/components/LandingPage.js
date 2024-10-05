// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';
import NavBar from './NavBar';
import StatsSection from './StatsSection'; // Importing Stats Section
import HowItWorks from './HowItWorks'; // Importing How It Works Section
import Subscription from './Subscription'; // Importing Subscription Component
import { Link } from 'react-scroll'; // Importing smooth scroll Link from react-scroll
import obesek from '../assets/obesek.png'; // Importing obesek.png image

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <header className="landing-header">
        <div className="hero-content-container">
          <div className="hero-content">
            <h1>Never Lose Your Keys Again</h1>
            <p>
              At Key Return, we offer secure, smart, analog key fobs that are registered to you. 
              If you lose your keys, they will always find their way back to you. We partner with 
              trusted logistics providers like GLS to ensure your keys are returned safely.
            </p>
            <Link to="how-it-works" smooth={true} duration={1000}>
              <button className="cta-button">How It Works</button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={obesek} alt="Key Return product" />
        </div>
      </header>
      
      {/* Stats Section */}
      <StatsSection />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Subscription Section */}
      <section id="subscription">
        <Subscription />
      </section>

      <section id="partnerships" className="info-section">
        <h2>Our Partnership with GLS</h2>
        <p>
          We've teamed up with GLS to ensure that your keys are returned in the safest way possible.
          As one of the largest logistics companies in Europe, GLS guarantees a smooth and secure 
          return process for your keys, no matter where they are found.
        </p>
        <Link to="subscription" smooth={true} duration={1000}>
          <button className="cta-button">Subscribe Now</button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;
