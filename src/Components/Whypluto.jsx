"use client";
import React from "react";
import "./Whypluto.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const clientImages = [
  "/person.jpg",
  "/person.jpg",
  "/person.jpg",
  "/person.jpg",
];
const Whypluto = () => {

  return (
    <div>
      <div className="Head-area">
        <div className="headings">
          <h1>Why you Should Choose PlutoSec </h1>
          <img src="/headingimg.svg" />
        </div>
      </div>

      <div className="why-area">
        <div className="left" style={{ backgroundImage: `url(/whyusimg.svg)` }}>
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
            We proudly introduce ourselves as a digital creative agency
            committed to realizing our clients' vision and mission through
            creative, innovative, and technology-based solutions in the digital
            world. We proudly introduce ourselves as a digital creative agency
            committed to realizing our clients' vision and mission through
            creative, innovative, and technology-based solutions in the digital
            world. and technology-based solutions in the digital world.
          </p>
          <button className="send-btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Whypluto;
