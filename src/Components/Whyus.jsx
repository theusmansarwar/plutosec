import React from "react";
import "./Whyus.css";
const Whyus = () => {
  return (
    <div className="why-us">
      <div className="left">
        <div className="headings">
          <h1>Why Us?</h1>
          <img src="/headingimg.svg" />
        </div>
        <p>
          Across Canada, including cities like Toronto, Vancouver, and Montreal,
          we prioritize security and privacy. Our professional team specializes
          in advanced penetration testing, exceeding standard requirements to
          understand your specific cybersecurity needs.
        </p>
        <p>
          Through a consultative approach, we ensure clients comprehend our
          evaluations and offer expert guidance aligned with NIST and ISO
          standards to enhance your security strategy effectively.
        </p>
      </div>
      <div className="right">
        <img src="/choose.svg" />
      </div>
    </div>
  );
};

export default Whyus;
