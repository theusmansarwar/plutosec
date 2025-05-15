"use client";

import React from "react";
import "./TestimonialCard.css";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";




const TestimonialCard = () => {
  const router = useRouter();
  const testimonials = [
  {
    id: 1,
    image: "/person3.jpg",
    quote:
      "PlutoSec helped secure our ecommerce platform. Their clear reports, quick action, and expertise made a real difference. Highly recommended, excellent team.",
    role: "System Administrator",
    name: "Tessa Martel",
  },
  {
    id: 2,
    image: "/person2.jpg",
    quote:
      "PlutoSec provides strong security for our government systems. Transparent pricing, clear communication, and technical expertise make them a top Canadian firm.",
    role: "SOC Analyst",
    name: "Lily Moreau",
  },
  {
    id: 3,
    image: "/person1.jpg",
    quote:
      "We needed compliance in healthcare. PlutoSec guided us well, explained everything clearly, and delivered secure results. Professional, responsive, and easy to trust.",
    role: "CTO",
    name: "Charlotte Tremblay",
  },
];
  return (
    
      <div className="testimonial2-grid-section">
        <div className="testimonial2-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial2-card">
              <img src={item.image} alt={item.name} className="profile-img" />
              <div className="quote">
                <FaQuoteLeft />
              </div>
              <p className="testimonial2-text">{item.quote}</p>
              <hr className="divider" />
              <p className="role">{item.role}</p>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default TestimonialCard;
