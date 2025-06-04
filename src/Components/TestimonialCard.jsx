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
    image: "/person2.jpg",
    quote:
      "As a System Administrator, I value precision and speed—PlutoSec delivered both. Their structured reports and quick threat mitigation helped us maintain uptime without compromise.",
    role: "System Administrator",
    name: "Tessa Martel",
  },
  {
    id: 2,
    image: "/person4.jpg",
    quote:
      "Managing IT operations at scale requires trustworthy security partners. PlutoSec enhanced our infrastructure’s resilience with clear processes, responsive support, and proactive defenses.",
    role: "IT Manager",
    name: "Rohan Sharma",
  },
  {
    id: 3,
    image: "/person1.jpg",
    quote:
      "In my role as CTO, compliance and data protection are top priorities. PlutoSec brought clarity to complex healthcare standards and executed a secure, scalable solution.",
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
