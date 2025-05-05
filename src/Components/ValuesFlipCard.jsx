import React from "react";
import "./ValuesFlipCard.css";
import { TbTargetArrow } from "react-icons/tb";

const cardsData = [
    {
      id: 1,
      title: "Goal Setting",
      items: ["Define your goals", "Plan your steps", "Track your progress"],
    },
    {
      id: 2,
      title: "Teamwork",
      items: ["Communicate clearly", "Support each other", "Share success"],
    },
    {
      id: 3,
      title: "Innovation",
      items: ["Think creatively", "Take smart risks", "Learn from failure"],
    },
    {
      id: 4,
      title: "Integrity",
      items: ["Be honest", "Stay accountable", "Build trust"],
    },
  
  ];
  

  const ValuesFlipCard = ({ title, items }) => {
    return (
      <div className="values-flip-card">
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <TbTargetArrow className="card-icon" />
            <h3 className="card-title">{title}</h3>
          </div>
          {/* Back Side */}
          <div className="flip-card-back">
            <ol className="card-text">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  };
  

  const ValuesFlipCardList = () => {
    return (
        <div>
            <div className="heading-area">
              <div className="left">
              <div className="headings">
              <h1>Our Values</h1>
              <img src="/headingimg.svg" />
            </div>
                <p className="description-heading">
                Strong values build strong security. PlutoSec stands on trust, speed, and clear action. You get support that never slows down. We act with purpose and always put your safety first. These values guide every step we take. That’s how we protect what matters to you.
                </p>
              </div>
            
          
        </div>
      <div className="values-flip-card-grid">
        {cardsData.map((card) => (
          <ValuesFlipCard key={card.id} title={card.title} items={card.items} />
        ))}
      </div>
      </div>
    );
  };
  

export default ValuesFlipCardList;
