"use client";
import React from "react";
import "./Whypluto.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { useRouter } from "next/navigation";


const clientImages = [
  "/person1.jpg",
  "/person2.jpg",
  "/person3.jpg",
  "/person.jpg",
];
const Whypluto = () => {
  const router = useRouter(); 
  return (
    <div>
      <div className="Head-area">
        <div className="headings">
          <h1>Why you Should Choose PlutoSec </h1>
          <img src="/headingimg.svg" />
        </div>
      </div>

      <div className="why-area">
        <div className="left" style={{ backgroundImage: `url(/whyusimg.webp)` }}>
          <div className="left-in-box">
            <div className="box">
              <h2 className="client-count">500+</h2>
              <p className="client-subtext">Trusted by our clients</p>
              <div className="client-avatars">
                {clientImages.map((src, index) => (
                  <div className="avatar" key={index}>
                    <Image
                      src={src}
                      alt={`client-${index}`}
                      width={64}
                      height={64}
                    />
                  </div>
                ))}
                <div className="avatar plus-sign">+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <p>
            PlutoSec provides expert cybersecurity to keep your business safe.
            We use advanced technology to protect your business from emerging
            threats. Our team’s expertise helps secure your systems and data
            effectively.
          </p>
          <p>
            We focus on proactive security. Our services detect vulnerabilities
            before they cause harm. You will enjoy fast response times and
            dependable support.
          </p>
          <p>
            PlutoSec customised solutions based on your needs. We collaborate
            closely with you to create strategies that match your business
            goals. Our approach ensures your security aligns with your unique
            challenges.
          </p>
          <p>
            Choose PlutoSec to safeguard your future. We work hard to protect
            your data and systems so you can focus on your growth. Trust us to
            keep your organization safe from potential threats.
          </p>
          <button className="send-btn"  onClick={() => router.push("/why-us")}>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Whypluto;
