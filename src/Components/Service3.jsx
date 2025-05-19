"use client";

import React from "react";
import "./Service2.css";
import { useRouter } from "next/navigation";

const Services3 = ({ slug }) => {
  const router = useRouter();

  const services = [
    {
      _id: "1",
      image: "/1.png",
      name: "PCI DSS Compliance",
      slug: "pci-dss",
      introduction:
        "Our testers assess your card systems to meet PCI DSS. You secure payment data across VISA, AMEX, and MasterCard networks.",
    },
    {
      _id: "2",
      image: "/2.png",
      name: "Prioritized Security",
      slug: "prioritized-security",
      introduction:
        "We help you protect credit card transactions. Testing ensures safe processing, storing, and transmitting of sensitive customer payment information every time.",
    },
    {
      _id: "3",
      image: "/3.png",
      name: "Comprehensive Assessments",
      slug: "comprehensive-assessments",
      introduction:
        "You strengthen your security approach with detailed assessments. We offer precise findings and suggestions tailored to your systems and business needs.",
    },
    {
      _id: "4",
      image: "/4.png",
      name: "Tester-Driven Reporting",
      slug: "tester-driven-reporting",
      introduction:
        "You receive clear and complete reports from real testers. Formats meet your compliance goals and fit your organization’s internal process structure.",
    },
    {
      _id: "5",
      image: "/5.png",
      name: "UK GDPR Readiness",
      slug: "uk-gdpr",
      introduction:
        "We test your systems against UK GDPR standards. You find privacy gaps early and prevent major compliance or data breach risks.",
    },
    {
      _id: "6",
      image: "/6.png",
      name: "DPA 2018 Compliance",
      slug: "dpa-2018",
      introduction:
        "You meet the UK Data Protection Act standards. Pentesting highlights weak areas in data flow and helps maintain full regulatory alignment.",
    },
  ];

  const getServicesBySlug = (slug) => {
    switch (slug) {
      case "retail-ecommerce":
        return services;
      case "prioritized-security":
        return services.filter(s => s.slug === "prioritized-security");
      case "comprehensive-assessments":
        return services.filter(s => s.slug === "comprehensive-assessments");
      case "tester-driven-reporting":
        return services.filter(s => s.slug === "tester-driven-reporting");
      case "uk-gdpr":
        return services.filter(s => s.slug === "uk-gdpr");
      case "dpa-2018":
        return services.filter(s => s.slug === "dpa-2018");
      case "all":
        return services;
      default:
        return [];
    }
  };

  const filteredServices = getServicesBySlug(slug);

  return (
    <div className="services2-section">
        <div className="service2-section">  
          <div className="service-area-section">
            <div className="service-grid">
              {services.map((service) => (
                <div className="service-item" key={service._id} 
                // onClick={() => router.push(`/services/${service.slug}`)}
                >
  
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

export default Services3;
