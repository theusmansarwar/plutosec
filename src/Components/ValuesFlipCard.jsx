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
    {
      id: 5,
      title: "Customer Focus",
      items: ["Listen to feedback", "Deliver value", "Exceed expectations"],
    },
    {
      id: 6,
      title: "Continuous Improvement",
      items: ["Reflect often", "Embrace change", "Keep learning"],
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
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
                  adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem
                  ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.
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
