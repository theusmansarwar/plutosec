import React from "react";
import "./MissionFlipCard.css";

import { FaHandHoldingUsd, FaRocket, FaGlobe } from "react-icons/fa";

const cardData = [
  {
    title: "Grow Your Wealth",
    text: "Manage your finances better with our expert tools.",
    Icon: FaHandHoldingUsd
  },
  {
    title: "Launch Your Business",
    text: "Start your entrepreneurial journey with us.",
    Icon: FaRocket
  },
  {
    title: "Global Connections",
    text: "Expand your reach to international markets.",
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
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
                  adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem
                  ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.
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
