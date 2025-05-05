'use client'
import React from "react";
import "./GetInTouch.css";
import { useRouter } from "next/navigation";

const GetInTouch = () => {
  const router = useRouter(); 
  return (
    <div className="get-in-touch">
      <div className="left-container">
        <h1 className="title">Specialists With Years Of Experince</h1>
        <p >
        Our team brings over 15 years of experience in cybersecurity. We tackle complex security challenges efficiently. Clients trust us because we deliver consistent and effective results. Our experts stay ahead of evolving threats. 
        </p>
        <p>
        We ensure your business remains secure against emerging risks. Tailored solutions meet your unique security needs. We strengthen your security posture and protect your valuable data.
        </p>
        <button className="btn"  onClick={() => router.push("/contact")}>Get in Touch</button>
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