"use client";

import React from "react";
import "./Testimonial.css";
import { FaArrowRightLong, FaQuoteLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";




const Testimonial = () => {
  const router = useRouter();
  const testimonials = [
  {
    id: 1,
    image: "/person.jpg",
    quote:
      "Running an e-commerce platform demands reliable cybersecurity.  Their detailed reports and tailored advice helped us close security gaps quickly. Their team truly stands out in the industry.",
    role: "System Administrator",
    name: "Tessa Martel",
  },
  {
    id: 2,
    image: "/person.jpg",
    quote:
      "Government services require bulletproof cybersecurity.  We appreciated their transparent pricing, deep technical knowledge, and clear communication. Easily one of the top firms in Canada.",
    role: "SOC Analyst",
    name: "Lily Moreau",
  },
  {
    id: 3,
    image: "/person.jpg",
    quote:
      "Our healthcare company needed strict compliance testing.  The team was professional, responsive, and explained every detail in a way we could understand. Couldn't be happier with the outcome.",
    role: "CTO",
    name: "Charlotte Tremblay",
  },
];
  return (
    <>
      <div className="Head-area">
        <div className="headings">
          <h1>Testimonials </h1>
          <img src="/headingimg.svg" />
        </div>
        <p className="viewall-text" onClick={() => router.push("/testimonial")}>
          View All <FaArrowRightLong />
        </p>
      </div>
      <div className="testimonial-grid-section">
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <img src={item.image} alt={item.name} className="profile-img" />
              <div className="quote">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{item.quote}</p>
              <hr className="divider" />
              <p className="role">{item.role}</p>
              <p className="name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
