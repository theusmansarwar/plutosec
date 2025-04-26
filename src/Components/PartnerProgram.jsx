import React from "react";
import "./PartnerProgram.css";

const PartnerProgram = () => {
  return (
    <div className="partners-container">
      <div className="left-container">
        <div className="image-container">
          <img src='/image1.jpg' alt="Typing" className="left-image" />
          <img src='/image2.jpg' alt="Handshake" className="left-image" />
        </div>
        <div className="card-text">
          <h3>Nam Id Non. At Nunc At, Ex. Viverra Id Quisque</h3>
          <p>
            enim, hendrerit turpis nisl, varius varius Lorem Viverra Morbi
            scelerisque quis nec praesent dui.tincidunt Vestibulum elit eget
            tempor vitae fringilla sed
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-container">
        <img src='/image3.jpg' alt="Cyber Security" className="right-image" />
      </div>
    </div>
  );
};
export default PartnerProgram;