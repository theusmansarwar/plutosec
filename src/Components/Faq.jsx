'use client';
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./FAQ.css";
import "./Services.css";

const faqs = [
  {
    question: "What services does PlutoSec provide?",
    answer:
      "PlutoSec offers a range of cybersecurity solutions. We provide penetration testing, vulnerability assessments, and managed security services. Our goal is to safeguard your systems, networks, and data against cyber threats.",
  },
  {
    question: "How can PlutoSec help improve my security?",
    answer:
      "We identify weaknesses in your systems and give actionable steps to fix them. Our team strengthens your defenses and enhances your protection. We ensure your business meets security standards and reduces risk.",
  },
  {
    question: "What industries does PlutoSec serve?",
    answer:
      "PlutoSec serves many industries. We work with businesses in healthcare, finance, manufacturing, and more. We tailor our solutions to meet the specific security needs of each sector.",
  },
  {
    question: "Is PlutoSec suitable for small businesses?",
    answer:
      "Yes, PlutoSec fits businesses of all sizes. We offer scalable solutions for small businesses and large enterprises. Our team customizes services to meet your needs and budget.",
  },
  {
    question: "How do I get started with PlutoSec?",
    answer:
      "Contact us through our website. Share your concerns, and we’ll create a plan to protect your systems. We will guide you through the process and ensure the best security measures.",
  },
  {
    question: "Why should I trust PlutoSec for my cybersecurity?",
    answer:
      "PlutoSec is experienced and reliable. We use advanced tools and techniques to protect your business. Our team is committed to keeping your systems secure and preventing threats.",
  },
  {
    question: "What is the cost of PlutoSec services?",
    answer:
      "The cost depends on your specific security needs. Contact us for a detailed consultation. We will provide a transparent pricing plan based on your requirements.",
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