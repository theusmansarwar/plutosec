import React from "react";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import "./SubscribeBlock.css";
const SubscribeBlock = () => {
  return (
    <div className="followus-section">
        <h2 className="title">Follow Us</h2>
        <div className="socials-share">
          <FaFacebook />
          <FaTwitter />
          <RiInstagramFill />
          <FaPinterest />
          <IoLogoYoutube />
        </div>
          <p>
            Subscribe to our newsletter and receive a selection of cool articles
            every weeks
          </p>
          <input type="email" placeholder="Enter your email" />
          <div className="btn">Subscribe</div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <p>
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </p>
          </div>
        </div>
    
  
  );
};
export default SubscribeBlock;