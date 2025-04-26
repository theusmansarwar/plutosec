"use client";

import React from "react";
import "./Testimonial.css";
import { FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    image: "/person.jpg",
    quote:
      "Excepturi praesentium beatae ut nemo commodi. Nemo omnis repudiandae culpa quaerat soluta dolorem aspernatur et.",
    role: "LEAD INTRANET SPECIALIST",
    name: "DEVIN BARTOLETTI",
  },
  {
    id: 2,
    image: "/person.jpg",
    quote:
      "PlutoSec has been instrumental in strengthening our security posture. Their team is highly professional and proactive.",
    role: "SECURITY MANAGER",
    name: "SARAH LIN",
  },
  {
    id: 3,
    image: "/person.jpg",
    quote:
      "We trust PlutoSec with our most sensitive data. Their insights and rapid response are second to none.",
    role: "CTO",
    name: "JAMES HAWKINS",
  },
];

const Testimonial = () => {
  return (<>
  
  
  <div className="Head-area">
          <div className="headings">
            <h1>Testimonials </h1>
            <img src="/headingimg.svg" />
          </div>
          <p className="viewall-text" onClick={() => router.push("/services")}>
            View All <FaArrowRightLong />
          </p>
        </div>   
    <div className="testimonial-grid-section">
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <img src={item.image} alt={item.name} className="profile-img" />
            <div className="quote">“</div>
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
