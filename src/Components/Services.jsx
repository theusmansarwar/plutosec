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
      image: "/1.png",
      name: "Pentest Services",
      slug: "penetration-testing",
      introduction:
        "We simulate real attacks to discover vulnerabilities and help strengthen your overall security posture effectively.",
    },
    {
      _id: "2",
      image: "/2.png",
      name: "Managed Security Services",
      slug: "managed-security",
      introduction:
        "We manage your entire security infrastructure continuously, preventing, detecting, and responding to threats in real time.",
    },
    {
      _id: "3",
      image: "/3.png",
      name: "Red Teaming | Blue Teaming",
      slug: "red-teaming-blue-teaming",
      introduction:
        "We test and measure your security readiness through adversarial simulations and defensive strategies.",
    },
    {
      _id: "4",
      image: "/4.png",
      name: "Cloud Security Solutions",
      slug: "cloud-security-solutions",
      introduction:
        "We secure your cloud platforms using intelligent controls, continuous monitoring, and robust configuration management tools.",
    },
    {
      _id: "5",
      image: "/5.png",
      name: "Extended Detection & Response (XDR)",
      slug: "extended-detection",
      introduction:
        "Our advanced XDR detects and responds to threats across endpoints, networks, and cloud environments instantly.",
    },
    {
      _id: "6",
      image: "/6.png",
      name: "Vulnerability Assessment Services",
      slug: "vulnerability-assessment",
      introduction:
        "We scan and assess systems for vulnerabilities. It helps prioritize fixes before attackers can exploit them.",
    },
    {
      _id: "7",
      image: "/7.png",
      name: "Identity & Access Management",
      slug: "identity-and-access-management",
      introduction:
        "We protect your systems by controlling user access. Strict identity verification and authentication reduce risk.",
    },
    {
      _id: "8",
      image: "/8.png",
      name: "Compliance Consulting",
      slug: "compliance-consulting",
      introduction:
        "We guide you through security standards. Our expert consulting ensures compliance and helps you achieve certifications",
    },
    {
      _id: "9",
      image: "/9.png",
      name: "DevSecOps",
      slug: "devsecops",
      introduction:
        "We embed security throughout development, operations, and delivery pipelines. This prevents vulnerabilities from reaching production.",
    },
   
      ];
  

  return (
    <div className="services-section">
      <div className="service-section">
        <div className="heading-area">
          <div className="left">
          <div className="headings">
          <h1>Our Cybersecurity Services</h1>
          <img src="/headingimg.svg"  alt="headingimg"/>
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
              <div className="service-item" key={service._id} 
              // onClick={() => router.push(`/services/${service.slug}`)}
              >

                <img src={service.image} alt={service.name} />
              
                <h2>{service.name}</h2>
                <p>{service.introduction}</p>
                
        <div className="outline-btn" onClick={() => router.push(`/services/${service.slug}`)}>Learn More</div>
                </div>
         
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Services;
