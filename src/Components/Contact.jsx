
import "./Contact.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact-container">
      
      <div className="contact-info2">
        <div className="head">
          <h2>Contact Information</h2>
          <p>Say something to start a chat!</p>
        </div>
        <div className="info">
          <div className="info-item">
            <span>
              <IoIosCall/>
            </span>{" "}
            +1012 3456 789
          </div>
          <div className="info-item">
            <span>
              <IoMdMail />
            </span>{" "}
            demo@gmail.com
          </div>
          <div className="info-item">
            <span>
              <IoLocationSharp />
            </span>{" "}
            132 Dartmouth Street Boston,
            <br />
            Massachusetts 02156 United States
          </div>
        </div>
        <div className="social-icons">
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaDiscord />
          </span>
        </div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>
      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" />
          </div>
        </div>
        <p>Select Subject?</p>
        <div className="radio-group">
          <label htmlFor="general-inquiry">
            <input id="general-inquiry" type="radio" name="subject" /> General
            Inquiry
          </label>
          <label htmlFor="general-inquiry2">
            <input id="general-inquiry2" type="radio" name="subject" /> General
            Inquiry
          </label>
          <label htmlFor="general-inquiry3">
            <input id="general-inquiry3" type="radio" name="subject" /> General
            Inquiry
          </label>
          <label htmlFor="general-inquiry4">
            <input id="general-inquiry4" type="radio" name="subject" /> General
            Inquiry
          </label>
        </div>
        <div className="textarea-container">
          <label htmlFor="textarea" className="text-area-label">
            Message
          </label>
          <textarea id="textarea" placeholder="Write your message.."></textarea>
        </div>
        <button className="send-btn">Send Message</button>
      </div>
    </div>
  );
};
export default Contact;