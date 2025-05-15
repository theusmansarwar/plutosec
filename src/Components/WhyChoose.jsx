import React from "react";
import "./WhyChoose.css";
import './Services.css'
const WhyChoose = () => {
  return (
    <div className="why-choose-us">
      <div className="left-container">
       
          <div className="left-text">
          <div className="headings">
              <h1>Who we are?</h1>
              <img src="/headingimg.svg" />
            </div>
            <p>
            We are cybersecurity professionals who defend your data. Our team works with purpose and speed. You get smart support from people who understand threats.
            </p>
            <p>
            We believe strong security should be simple. That’s why we build tools that solve problems fast. You don’t have time to guess. We give you clear answers.
            </p>
            <p>
            Every company needs protection. No matter the size, we help you stay safe. You focus on your work. We handle the rest.
            </p>
            <p>
            PlutoSec stands for trust. We work hard so you don’t have to worry. You stay one step ahead because we never fall behind.
            </p>
          </div>
    
      </div>
      <div className="right-container">
        <div className="left-images">
          <div className="top-row">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <div className="bottom-row"></div>
        </div>
        <div className="right-image"></div>
      </div>
    </div>
  );
};
export default WhyChoose;