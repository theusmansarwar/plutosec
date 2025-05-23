import React from "react";
import "./Whyus.css";
const Whyus = () => {
  return (
    <div className="why-us">
      <div className="left">
        <div className="headings">
          <h1>Why Us?</h1>
          <img src="/headingimg.svg"  alt="headingimg"/>
        </div>
        <p>
        PlutoSec leads cybersecurity in Canada and is trusted by businesses in Toronto, Vancouver, Montreal, and more. Our expert team provides advanced penetration testing customized to meet your needs and industry standards. We take a consultative approach, ensuring you fully understand each evaluation and gain actionable insights. We improve your security with precision and lasting results by following trusted frameworks like NIST and ISO.
        </p>
      </div>
      <div className="right">
        <img src="/choose.svg" />
      </div>
    </div>
  );
};

export default Whyus;
