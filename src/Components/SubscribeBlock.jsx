"use client";
import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import "./SubscribeBlock.css";
import './Comments.css';
import { Subscribe } from "@/DAL/create";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribeBlock = () => {
  const [email, setEmail] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setError(null);

    if (!checkboxChecked) {
      setError("You must agree to the terms before subscribing.");
      return;
    }

   

    setLoading(true);
    try {
      const response = await Subscribe({ email });

      if (response.status === 201) {
        setEmail("");
        setCheckboxChecked(false);
        toast.success(response?.message || "Subscribed successfully");
      } else {
        setError(response.message || "Subscription failed.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="followus-section">

      <h2 className="title">Follow Us</h2>

      <div className="social-icons">
        <a href="https://www.facebook.com/plutosec.ca" target="_blank" rel="noopener noreferrer">
          <div className="icon"><RiFacebookFill /></div>
        </a>
        <a href="https://www.linkedin.com/company/pluto-security-ltd/" target="_blank" rel="noopener noreferrer">
          <div className="icon"><FaLinkedinIn /></div>
        </a>
        <a href="https://www.instagram.com/plutosec.ca/" target="_blank" rel="noopener noreferrer">
          <div className="icon"><AiFillInstagram /></div>
        </a>
        <a href="https://www.tiktok.com/@plutosec.cyber.sec" target="_blank" rel="noopener noreferrer">
          <div className="icon"><RiTiktokFill /></div>
        </a>
        <a href="https://x.com/Pluto_Sec" target="_blank" rel="noopener noreferrer">
          <div className="icon"><RiTwitterXFill /></div>
        </a>
      </div>

      <p>Subscribe to our newsletter and receive a selection of cool articles every week.</p>

      

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      
      {error && <p className="error-message">{error}</p>}
      <div className="checkbox-container">
        <input
          type="checkbox"
          checked={checkboxChecked}
          onChange={() => setCheckboxChecked(!checkboxChecked)}
        />
        
        <p>
 I agree to the terms of use for storing my submitted data.
        </p>
      </div>

      <div className={`btn ${loading ? 'disabled' : ''}`} onClick={!loading ? handleSubscribe : null}>
        {loading ? "Subscribing..." : "Subscribe"}
      </div>
    </div>
  );
};

export default SubscribeBlock;
