import React from 'react';
import './Footer.css';
import { RiFacebookFill,RiTwitterXLine  } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <img src='/shortlogo.svg' className="logo"/>
          <p className="footer-description">
            Lorem ipsum odor ametLorem ipsum odor ametLorem ipsum odor ametLorem ipsum odor ametLorem ipsum odor
          </p>
          <div className="social-icons">
            <div className="icon"><RiFacebookFill /></div>
            <div className="icon"><FaLinkedinIn/></div>
            <div className="icon"><RiTwitterXLine /></div>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>Services</li>
            <li>Career</li>
            <li>Solutions</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            <li>Why Us</li>
            <li>T&S</li>
            <li>Privacy Policy</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h4>Join a Newsletter</h4>
          <p>Your Email</p>
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
          <div className="contact-info">
            <p><CiMail/> info@hello.com</p>
            <p><IoCallOutline/> +1 000-000-0000</p>
            <p><IoLocationOutline/> 8819 Ohio St. South Gate, CA 90280</p>
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
