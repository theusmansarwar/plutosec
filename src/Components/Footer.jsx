"use client"; // Ensure the component is a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Footer.css";
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const router = useRouter(); // Use the router for client-side navigation

  const menuItems = [
    { label: "Services", path: "/services" },
    { label: "Career", path: "/careers" },
    { label: "Testimonials", path: "/testimonial" },
    { label: "Contact Us", path: "/contact" },
    { label: "Partner Program", path: "/partner" },
    { label: "Why Us", path: "/why-us" },
    { label: "Terms & Condition", path: "/terms-and-condition" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "About Us", path: "/about-us" },
  ];

  const handleNavClick = (item) => {
    router.push(item.path);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <img src="/logo2.png" className="logo" />
          <p className="footer-description">
            Defending Digital Assets – Empowering Cybersecurity Experts, and
            Shaping a Secure Future.
          </p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/plutosec.ca"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <RiFacebookFill />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/company/pluto-security-ltd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.instagram.com/plutosec.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <AiFillInstagram />
              </div>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            {menuItems.slice(4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Join a Newsletter</h4>
          <p>Your Email</p>
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
          <div className="contact-info">
            <p>
              <CiMail />{" "}
              <a href="mailto:contact@plutosec.ca">contact@plutosec.ca</a>
            </p>
            <p>
              <IoCallOutline /> <a href="tel:+19053676038">+1 (905) 367-6038</a>
            </p>
            <p>
              <IoLocationOutline />{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=335+Yonge+St,+Toronto,+ON+M5B+2L3"
                target="_blank"
                rel="noopener noreferrer"
              >
                335 Yonge St, Toronto, ON M5B 2L3
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2021 - 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
