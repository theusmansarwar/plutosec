'use client';  // Ensure the component is a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './Footer.css';
import { RiFacebookFill, RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  const router = useRouter(); // Use the router for client-side navigation
  const [language, setLanguage] = useState('EN');

  const menuItems = [
    { label: 'Services', path: '/services' },
    { label: 'Career', path: '/careers' },
    { label: 'Testimonials', path: '/testimonial' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'Partner Program', path: '/partner' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'T&S', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'About Us', path: '/about-us' },
  ];

  const handleNavClick = (item) => {
    router.push(item.path); // Use router.push() for navigation
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <img src='/shortlogo.svg' className="logo" />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
          </p>
          <div className="social-icons">
            <div className="icon"><RiFacebookFill /></div>
            <div className="icon"><FaLinkedinIn /></div>
            <div className="icon"><RiTwitterXLine /></div>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {menuItems.slice(0, 4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>{item.label}</li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            {menuItems.slice(4).map((item) => (
              <li key={item.label} onClick={() => handleNavClick(item)}>{item.label}</li>
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
            <p><CiMail /> info@hello.com</p>
            <p><IoCallOutline /> +1 000-000-0000</p>
            <p><IoLocationOutline /> 8819 Ohio St. South Gate, CA 90280</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright @PlutoSec - 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
