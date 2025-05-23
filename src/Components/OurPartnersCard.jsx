import React from "react";
import "./OurPartnersCard.css";

const partnerData = [
  {
    logo: "/comptia.png",
    description: [
      "Our link with CompTIA boosts our technical strength with worldwide certifications. This partnership keeps our team updated on industry standards. We provide trusted and certified cybersecurity solutions. It also helps us build trust with clients through recognized expertise.",
      "PlutoSec leverages CompTIA’s global credibility to maintain a skilled and knowledgeable workforce. With certified professionals, we deliver advanced security strategies that align with international best practices."
    ]
  },
  {
    logo: "/datto.png",
    description: [
      "Working with Datto lets us offer secure backup, disaster recovery, and business continuity services. This partnership protects client data from cyberattacks, system crashes, and unexpected issues. Together, we ensure data stays safe even in worst-case scenarios.",
      "PlutoSec strengthens this collaboration by adding proactive threat detection and response. The result is a complete, resilient data protection strategy for businesses of all sizes."
    ]
  },
  {
    logo: "/tsplus-logo.svg",
    description: [
      "TSplus helps us deliver secure remote access and application delivery. Clients get safe and scalable connections without risking data safety or performance quality. This partnership expands our ability to serve businesses with remote workforce needs.",
      "PlutoSec ensures TSplus deployments are fortified against evolving cyber threats. We help clients enjoy smooth, secure access with maximum reliability and minimal risk."
    ]
  },
  {
    logo: "/pecb-logo.svg",
    description: [
      "Our collaboration with PECB lets us apply global rules in cybersecurity compliance, risk checks, and auditing. This partnership ensures clients meet industry regulations with confidence and clarity. It strengthens our approach to maintaining high standards across all projects.",
      "PlutoSec aligns its security services with PECB standards, ensuring clients benefit from up-to-date practices. We support compliance journeys with actionable insights and technical expertise."
    ]
  }
];


const OurPartnersCard = () => {
  return (
    <div>
      <div className="heading-area">
        <div className="left">
          <div className="headings">
            <h1>Our Best Partners</h1>
            <img src="/headingimg.svg"  alt="headingimg"/>
          </div>
          <p className="description-heading">
          Our partners share our mission to build a safer digital world. They bring value, trust, and expertise. Together, we deliver stronger security solutions to every client.
          </p>
        </div>
      </div>

      <div className="partners-card-grid">
        {partnerData.map((partner, index) => (
          <div className="partners-card" key={index}>
            <div className="card-header">
              <img
                src={partner.logo}
                alt="Partner Logo"
                className="logo-image"
              />
            </div>
            <div className="card-body">
              {partner.description.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPartnersCard;
