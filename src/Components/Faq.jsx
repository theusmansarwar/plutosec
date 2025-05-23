'use client';
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./FAQ.css";
import "./Services.css";

const faqs = [
  {
    question: "What Are Penetration Services?",
    answer:
      "Penetration testing services simulate real-world cyberattacks to identify vulnerabilities in your system and improve overall security. These tests help you understand where your defenses might fail.",
  },
  {
    question: "How Can Vulnerability Assessments Benefit My Business?",
    answer:
      "Vulnerability assessments scan your systems to identify weaknesses before attackers can exploit them. They allow you to prioritize fixes and strengthen your security posture.",
  },
  {
    question: "What is Managed Security Monitoring?",
    answer:
      "Managed security monitoring provides continuous oversight of your IT infrastructure. This service detects potential threats and ensures quick responses to mitigate risks in real-time.",
  },
  {
    question: "Why is Cloud Security Important for My Organization?",
    answer:
      "Cloud security ensures your data stored in the cloud is protected from unauthorized access. It focuses on safeguarding your cloud applications and services from cyber threats and vulnerabilities.",
  },
  {
    question: "How Does Red Teaming Improve My Security?",
    answer:
      "Red teaming involves simulating advanced attacks to test your security systems. It provides insights into how well your organization responds to cyber threats and helps uncover security gaps.",
  },
  {
    question: "What is Identity & Access Management (IAM)?",
    answer:
      "IAM controls who has access to your systems and data. It ensures that only authorized individuals can access sensitive information, reducing the risk of unauthorized access and data breaches.",
  },
  {
    question: "How Can XDR Improve My Security Infrastructure?",
    answer:
      "XDR (Extended Detection & Response) offers integrated protection across endpoints, networks, and cloud environments. It detects threats and responds to them immediately, improving overall threat management.",
  },
  {
    question: "What Is Compliance Consulting?",
    answer:
      "Compliance consulting helps you meet security standards and regulations. It ensures your systems align with guidelines, reducing legal and operational risks.",
  },
  {
    question: "What is DevSecOps?",
    answer:
      "DevSecOps integrates security into the development process. It helps prevent vulnerabilities from reaching production by addressing security early on.",
  },
  {
    question: "Why Should I Consider Cyber Security Consultancy Services?",
    answer:
      "Cybersecurity consultancy services help you identify, assess, and improve your security strategy. They provide expert guidance on how to build a stronger, more resilient digital environment.",
  },
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      
               <div className="headings">
               <h1>Frequently Asked Questions</h1>
               <img src="/headingimg.svg" alt="headingimg"/>
             </div>
               
            
               
          
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <p>{faq.question}</p>
              {openIndex === index ? <FiMinus /> : <FiPlus />}
            </div>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;