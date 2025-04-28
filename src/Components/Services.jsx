"use client";

import React from "react";
import "./Services.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Services = () => {
  const router = useRouter();

  const services = [
    {
      _id: "1",
      image: "/Security.svg",
      name: "Pentest Services",
      slug: "pentest-services",
      introduction:
        "Advanced penetration testing for web applications, networks, APIs, and mobile apps to detect vulnerabilities and enhance security defenses.",
    },
    {
      _id: "2",
      image: "/Security.svg",
      name: "Managed Security Services",
      slug: "managed-security-services",
      introduction:
        "Continuous security monitoring, threat detection, and incident response to safeguard enterprise environments against evolving cyber threats.",
    },
    {
      _id: "3",
      image: "/Security.svg",
      name: "Red Teaming | Blue Teaming",
      slug: "red-blue-teaming",
      introduction:
        "Comprehensive red and blue teaming services to simulate real-world attacks, uncover security gaps, and strengthen your cyber resilience.",
    },
    {
      _id: "4",
      image: "/Security.svg",
      name: "Cloud Security Solutions",
      slug: "cloud-security-solutions",
      introduction:
        "Cloud security assessments and risk analysis to protect sensitive data and ensure compliance across multi-cloud environments.",
    },
    {
      _id: "5",
      image: "/Security.svg",
      name: "Extended Detection & Response (XDR)",
      slug: "xdr-services",
      introduction:
        "Integrated threat detection and response across endpoints, networks, and cloud platforms for complete visibility and rapid threat mitigation.",
    },
    {
      _id: "6",
      image: "/Security.svg",
      name: "Vulnerability Assessment Services",
      slug: "vulnerability-assessment",
      introduction:
        "Top-tier cybersecurity firm offering in-depth vulnerability assessments and protection for digital assets.",
    },
   
  ];
  

  return (
    <div className="services-section">
      <div className="service-section">
        <div className="heading-area">
          <div className="left">
          <div className="headings">
          <h1>Our Cybersecurity Services</h1>
          <img src="/headingimg.svg" />
        </div>
            <p>
            PlutoSec offers a range of cybersecurity solutions to protect your organization from evolving threats. Our services are designed to strengthen your security across multiple platforms.
            </p>
          </div>
          <p className="viewall-text" onClick={() => router.push("/services")}>
            View All <FaArrowRightLong />
          </p>
        </div>

        <div className="service-area-section">
          <div className="service-grid">
            {services.map((service) => (
              <div className="service-item" key={service._id}>

                <img src={service.image} alt={service.name} />
                <div className="right">
                <h2>{service.name}</h2>
                <p>{service.introduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Services;
