"use client";

import React from "react";
import "./TestimonialCard.css";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialCard = () => {
  const testimonials = [
    {
      id: 1,
      image: "/person2.jpg",
      quote:
        "As a System Administrator, I value precision and speed PlutoSec delivered both. Their structured reports and quick threat mitigation helped us maintain uptime without compromise.",
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
    {
      id: 4,
      image: "/kwame.webp",
      quote:
        "PlutoSec delivered a clear, thorough security assessment that gave us immediate direction. The quality of their reporting and insight exceeded our expectations.",
      role: "Chief Technology Officer",
      name: "Kwame Boateng",
    },
    {
      id: 5,
      image: "/amina.webp",
      quote:
        "As a Cybersecurity Engineer, I need accuracy and speed from any external partner. PlutoSec delivered both fast diagnostics, clean reporting, and actionable fixes that strengthened our environment.",
      role: "Cybersecurity Engineer",
      name: "Amina Yusuf",
    },
    {
      id: 6,
      image: "/hiroshi.webp",
      quote:
        "PlutoSec caught a vulnerability in our application that multiple internal reviews had missed. Their sharp analysis helped us patch before release.",
      role: "DevSecOps Engineer",
      name: "Hiroshi Tanaka",
    },
    {
      id: 7,
      image: "/mei.webp",
      quote:
        "Working with PlutoSec was like switching from reactive to proactive security overnight. Their ongoing threat monitoring is now a core part of our operations.",
      role: "IT Infrastructure Manager",
      name: "Mei Lin Zhang",
    },
    {
      id: 8,
      image: "/liam.webp",
      quote:
        "PlutoSec made compliance easy. From documentation to technical controls, everything was tailored to our exact requirements with zero fluff.",
      role: "Compliance Lead",
      name: "Liam O’Donnell",
    },
    {
      id: 9,
      image: "/sofia.webp",
      quote:
        "PlutoSec didn’t just find issues they walked us through every fix. The hands-on support was invaluable to our small internal team.",
      role: "Startup Co-Founder",
      name: "Sofia Rossi",
    },
    {
      id: 10,
      image: "/mateo.webp",
      quote:
        "PlutoSec’s red team simulation showed us just how exposed we were and how quickly we could improve. The exercise paid off tenfold.",
      role: "Security Program Manager",
      name: "Mateo Ríos",
    },
    {
      id: 11,
      image: "/isabela.webp",
      quote:
        "Our leadership team now sees cybersecurity as a strategic asset, thanks to how clearly PlutoSec laid out the risks and business impact.",
      role: "Chief Operating Officer",
      name: "Isabela Fernandes",
    },
    {
      id: 12,
      image: "/noah.webp",
      quote:
        "PlutoSec was professional, detail-oriented, and incredibly responsive throughout. Every deliverable was on time and exceeded expectations.",
      role: "Network Architect",
      name: "Noah Walker",
    },
    {
      id: 13,
      image: "/emily.webp",
      quote:
        "We brought PlutoSec in for a one-time audit and ended up retaining them for ongoing advisory. That says it all.",
      role: "Head of IT Risk",
      name: "Emily Carter",
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
