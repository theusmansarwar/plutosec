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
        "Penetration Testing Services – Web App, Network, API & Mobile App Security. In today’s digital landscape, safeguarding your...",
    },
    {
      _id: "2",
      image: "/Security.svg",
      name: "Managed Security Services",
      slug: "managed-security-services",
      introduction:
        "Our comprehensive MSSP solution integrates 24/7 monitoring, incident response, and advanced threat detection.",
    },
    {
      _id: "3",
      image: "/Security.svg",
      name: "Red Teaming | Blue Teaming",
      slug: "red-blue-teaming",
      introduction:
        "Choose PlutoSec for premier red team security simulations and blue team defensive strategies.",
    },
    {
      _id: "4",
      image: "/Security.svg",
      name: "Cloud Security Solutions",
      slug: "cloud-security-solutions",
      introduction:
        "Looking for cloud security assessment services? PlutoSec protects your sensitive data in the cloud.",
    },
    {
      _id: "5",
      image: "/Security.svg",
      name: "Extended Detection & Response (XDR)",
      slug: "xdr-services",
      introduction:
        "PlutoSec leads with Managed Detection and Response (MDR) and advanced XDR cybersecurity capabilities.",
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
              Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
              vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
              adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem
              ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
              vulputate amet aptent vivamus.
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
