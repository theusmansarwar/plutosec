import React from "react";
import "./MissionFlipCard.css";

import { FaHandHoldingUsd, FaRocket, FaGlobe } from "react-icons/fa";

const cardData = [
  {
    title: "Grow Your Business",
    text: "Secure your digital environment. Protect assets and boost efficiency. Focus on growth without the risk.",
    Icon: FaHandHoldingUsd
  },
  {
    title: "Launch Your Business",
    text: "Start strong with the right security measures. Secure your brand from day one. Protect your growth potential",
    Icon: FaRocket
  },
  {
    title: "Global Connections",
    text: "Expand globally with confidence. Ensure cybersecurity resilience wherever you operate. Safeguard your connections worldwide.",
    Icon: FaGlobe
  }
];

const MissionFlipCard2 = () => {
  return (
    <div>
    
     <div className="heading-area">
              <div className="left">
              <div className="headings">
              <h1>Our Mission</h1>
              <img src="/headingimg.svg" />
            </div>
                <p className="description-heading">
                PlutoSec protects businesses with advanced cybersecurity solutions. We deliver services that keep your digital assets secure and your operations running smoothly. Our goal is to make your business resilient in an ever-changing cyber landscape. We help you build trust, enhance security, and grow confidently.
                </p>
              </div>
            
            </div>
   
    <div className="mission-cards-grid">
      {cardData.map((card, index) => (
        <div className="mission-flip-card" key={index}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front">
              <card.Icon className="card-icon" />
              <h2 className="card-title">{card.title}</h2>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <h2 className="card-back-title">{card.title}</h2>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default MissionFlipCard2;
