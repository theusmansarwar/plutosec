"use client"; // Ensure the component is a Client Component

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./Footer.css";
import "./Comments.css";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { Subscribe } from "@/DAL/create";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Footer = () => {
  const router = useRouter(); // Use the router for client-side navigation
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

    const response = await Subscribe({ email: email });

    if (response.status === 201) {
      setEmail("");
      setLoading(false);
      toast.success(response?.message || "Subscribed successfully");
    } else {
      setError(response.message || "Subscription failed.");
      setLoading(false);
    }
  };
  const menuItems = [
    { label: "Services", path: "/services" },
    { label: "Blogs", path: "/blogs" },
    { label: "Industries", path: "/industries" },
    { label: "Testimonials", path: "/testimonial" },
    { label: "Career", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
    { label: "Success Stories", path: "/success-stories" },
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
          <img src="/logo4.png" className="logo" />
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
            <a
              href="https://www.tiktok.com/@plutosec.cyber.sec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <RiTiktokFill />
              </div>
            </a>
            <a
              href="https://x.com/Pluto_Sec"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="icon">
                <RiTwitterXFill />
              </div>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            {menuItems.slice(0, 6).map((item) => (
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
            {menuItems.slice(6).map((item) => (
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
          {error && <p className="error-message">{error}</p>}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={handleSubscribe}>
            {loading ? "Subscribing..." : "Subscribe"}
          </button>

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
    href="https://www.google.com/maps/search/?api=1&query=201A-23+Westmore+Dr,+Etobicoke,+ON+M9V+3Y7"
    target="_blank"
    rel="noopener noreferrer"
  >
     201A-23 Westmore Dr. Etobicoke ON M9V 3Y7
  </a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>Copyright © 2021-2025 Plutosec.ca All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
