"use client";

import React from "react";
import "./Service2.css";

import { useRouter } from "next/navigation";

const Services2 = () => {
  const router = useRouter();

  const services = [
    {
      _id: "1",
      image: "/Security.svg",
      name: "Pentest Services",
      slug: "penetration-testing",
      introduction:
        "We simulate real attacks to discover vulnerabilities and help strengthen your overall security posture effectively.",
    },
    {
      _id: "2",
      image: "/Security.svg",
      name: "Managed Security Services",
      slug: "managed-security",
      introduction:
        "We manage your entire security infrastructure continuously, preventing, detecting, and responding to threats in real time.",
    },
    {
      _id: "3",
      image: "/Security.svg",
      name: "Red Teaming | Blue Teaming",
      slug: "red-teaming-blue-teaming",
      introduction:
        "We test and measure your security readiness through adversarial simulations and defensive strategies.",
    },
    {
      _id: "4",
      image: "/Security.svg",
      name: "Cloud Security Solutions",
      slug: "cloud-security-solutions",
      introduction:
        "We secure your cloud platforms using intelligent controls, continuous monitoring, and robust configuration management tools.",
    },
    {
      _id: "5",
      image: "/Security.svg",
      name: "Extended Detection & Response (XDR)",
      slug: "extended-detection",
      introduction:
        "Our advanced XDR detects and responds to threats across endpoints, networks, and cloud environments instantly.",
    },
    {
      _id: "6",
      image: "/Security.svg",
      name: "Vulnerability Assessment Services",
      slug: "vulnerability-assessment",
      introduction:
        "We scan and assess systems for vulnerabilities. It helps prioritize fixes before attackers can exploit them.",
    },
    {
      _id: "7",
      image: "/Security.svg",
      name: "Identity & Access Management",
      slug: "identity-and-access-management",
      introduction:
        "We protect your systems by controlling user access. Strict identity verification and authentication reduce risk.",
    },
    {
      _id: "8",
      image: "/Security.svg",
      name: "Compliance Consulting",
      slug: "compliance-consulting",
      introduction:
        "We guide you through security standards. Our expert consulting ensures compliance and helps you achieve certifications",
    },
    {
      _id: "9",
      image: "/Security.svg",
      name: "DevSecOps",
      slug: "devsecops",
      introduction:
        "We embed security throughout development, operations, and delivery pipelines. This prevents vulnerabilities from reaching production.",
    },
  ];
  
  

  return (
    <div className="services2-section">
      <div className="service2-section">

        <div className="service-area-section2">
          <div className="service-grid2">
            {services.map((service) => (
              <div className="service-item2" key={service._id} 
              onClick={() => router.push(`/services/${service.slug}`)}>

                <img src={service.image} alt={service.name} />
                <h2>{service.name}</h2>
                <p>{service.introduction}</p>
               
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Services2;
