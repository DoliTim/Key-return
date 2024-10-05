// src/components/FoundKeys.js
import React, { useState } from 'react';
import { FaBox, FaTruck, FaGift } from 'react-icons/fa'; // Importing relevant icons
import glsLogo from '../assets/gls-logo.png'; // Import GLS logo (assuming you have it in assets)
import './FoundKeys.css';

const FoundKeys = () => {
  const [keyNumber, setKeyNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="found-keys-container">
      <header className="found-keys-header">
        <h1>I Found Keys</h1>
        <p>If you've found a KeyReturn key tracker, please enter the registered key number below and follow the instructions to return it to its rightful owner.</p>
      </header>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="found-keys-form">
          <label htmlFor="keyNumber">Registered Key Number:</label>
          <input
            type="text"
            id="keyNumber"
            value={keyNumber}
            onChange={(e) => setKeyNumber(e.target.value)}
            required
            placeholder="Enter the key number"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      ) : (
        <div className="instructions">
          <h2>Thank You for Helping Return These Keys!</h2>
          <p>
            Please choose one of the options below to return the keys to their rightful owner:
          </p>
          <div className="options">
            <div className="option">
              <FaTruck className="option-icon" />
              <h3>Return via GLS Courier</h3>
              <p>You can schedule a pickup using GLS courier services. A GLS driver will collect the keys at your convenience. Click below to schedule a pickup.</p>
              <a href="https://posljipaket.si/" target="_blank" rel="noopener noreferrer" className="gls-link">
                <img src={glsLogo} alt="GLS Logo" className="gls-logo" /> Schedule Pickup with GLS
              </a>
            </div>
            <div className="option">
              <FaBox className="option-icon" />
              <h3>Return via GLS Parcel Locker (Paketomat)</h3>
              <p>Drop the keys off at your nearest GLS parcel locker (Paketomat). Make sure they are securely packaged and clearly marked with the KeyReturn label.</p>
              <a href="https://posljipaket.si/" target="_blank" rel="noopener noreferrer" className="gls-link">
                <img src={glsLogo} alt="GLS Logo" className="gls-logo" /> Find Your Nearest Parcel Locker
              </a>
            </div>
          </div>
          <div className="claim-reward">
            <FaGift className="reward-icon" />
            <h3>Claim Your Reward</h3>
            <p>After successfully returning the keys, you are eligible for a reward! We appreciate your honesty and willingness to help return lost items. Please contact us after completing the return to claim your reward.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoundKeys;
