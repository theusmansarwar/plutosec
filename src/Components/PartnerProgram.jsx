import React from "react";
import "./PartnerProgram.css";
import './Services.css'

const PartnerProgram = () => {
  return (
    <div className="partners-container">
      <div className="left-container">
        <div className="image-container">
          <img src="/image1.jpg" alt="Typing" className="left-image" />
          <img src="/image2.jpg" alt="Handshake" className="left-image" />
        </div>
        <div className="card-text">
          <h3>Stronger Together in Cybersecurity</h3>
          <p>
            PlutoSec partners with MSPs, consultants, and tech providers to
            deliver practical, flexible security solutions. Our program is built
            on collaboration and shared success. Together, we help businesses
            stay secure in a rapidly evolving digital world.{" "}
          </p>
      
        </div>
      </div>
      <div className="right-container">
        <img src="/image3.jpg" alt="Cyber Security" className="right-image" />
      </div>
    </div>
  );
};
export default PartnerProgram;
