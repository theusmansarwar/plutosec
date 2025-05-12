'use client';
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./FAQ.css";
import "./Services.css";

const faqs = [
  {
    question: "Is my cloud data safe with PlutoSec?",
    answer:
      "Yes, Cloud security solutions use strict access control, smart tools, and 24/7 alerts. We protect your data across all platforms and stop unauthorized access before it leads to breaches or losses.",
  },
  {
    question: "Can I trust 24/7 protection for my business?",
    answer:
      "Yes, managed security services monitor and defend your systems in real time. Threats are detected and stopped quickly. You stay safe without worrying about missed alerts or slow response during critical times.",
  },
  {
    question: "How do you find system weaknesses effectively?",
    answer:
      "We simulate real-world cyberattacks using penetration testing. This shows hidden risks in your applications and networks. You can fix these issues early and build stronger defenses against threats before they cause damage.",
  },
  {
    question: "How does red and blue team testing work?",
    answer:
      "We use red teaming to attack and blue teaming to defend. This shows how secure your systems are. You see real gaps and improve your defense strategy with clear, guided actions.",
  },
  {
    question: "What is Extended Detection and Response (XDR)?",
    answer:
      "XDR is an advanced solution that watches your endpoints, cloud, and networks. It spots threats quickly and reacts fast. You stay protected across all layers with real-time visibility and response.",
  },
  {
    question: "Why are regular system scans important?",
    answer:
      "Vulnerability assessments help you find security issues early. We scan your systems and guide your fixes. This reduces risk and keeps your software safe before any attacker can take advantage.",
  },
  {
    question: "Can I control who accesses my system?",
    answer:
      "Identity and access management ensure that only the right users can log in. This prevents data leaks, stops account abuse, and keeps your digital assets under full control at all times.",
  },
  {
    question: "How can I meet security standards easily?",
    answer:
      "Compliance consulting helps you follow required security rules. We guide your process, improve your setup, and support audit readiness. You avoid delays, fines and stay aligned with trusted standards.",
  },
  {
    question: "How does DevSecOps improve my development process?",
    answer:
      "We add security to your development pipeline. You catch issues early and avoid problems later. This makes your apps safer and keeps your releases clean, fast, and ready for users.",
  },
  {
    question: "What support do I get from your consultants?",
    answer:
      "Cybersecurity consultancy gives you expert help to review, improve, and protect your systems. We offer smart, direct advice so you can strengthen your digital setup and stay ready against modern cyber threats.",
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
               <img src="/headingimg.svg" />
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