"use client";
import React, { useState } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { RiTiktokFill,RiTwitterXFill  } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import "./SubscribeBlock.css";
import { Subscribe } from "@/DAL/create";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SubscribeBlock = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

      const response = await Subscribe({email:email});

      if (response.status === 201) {
        setEmail("");
         setLoading(false);
         toast.success(response?.message || "Subscribed successfully");
      } else {
        setError(response.message || "Subscription failed.");
         setLoading(false);
      }
    
  };

  return (
    <div className="followus-section">
      <ToastContainer
              position="top-right"
              autoClose={3000}
              pauseOnHover={false}
            />
      <h2 className="title">Follow Us</h2>
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
                      <RiTwitterXFill  />
                    </div>
                  </a>
                </div>

      <p>
        Subscribe to our newsletter and receive a selection of cool articles every week.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
  {error && <p className="error">{error}</p>}
      <div className="btn" onClick={handleSubscribe}>
        {loading ? "Subscribing..." : "Subscribe"}
      </div>

    

      <div className="checkbox-container">
        <input type="checkbox" required />
        <p>
          By checking this box, you confirm that you have read and agree to our terms of use regarding the storage of data submitted through this form.
        </p>
      </div>
    </div>
  );
};

export default SubscribeBlock;
