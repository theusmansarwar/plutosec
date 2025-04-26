import React from "react";
import "./GetInTouch.css";
const GetInTouch = () => {
  return (
    <div className="get-in-touch">
      <div className="left-container">
        <h1 className="title">Specialists With Years Of Experince</h1>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum
          reiciendis libero doloribus, velit laborum soluta incidunt aut beatae
          labore, quas iste odit aliquid ullam enim eius, explicabo non ea in
          quam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eum
          reiciendis libero doloribus, velit laborum soluta incidunt aut beatae
          labore, quas iste odit aliquid ullam enim eius, explicabo non ea in
          quam.
        </p>
        <button className="btn">Get in Touch</button>
      </div>
      <div className="right-container">
        <div className="experince">
          <span className="number">15+</span>
          <span> Years Experince</span>
        </div>
        <div className="right-image">
          <img src='/getintouch.jpg' alt="get in touch" />
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;