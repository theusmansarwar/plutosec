'use client';
import "./Contact.css";
import axios from "axios";
import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value, name, type } = e.target;
    const key = type === "radio" ? "subject" : id;
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      name: `${formData.firstname} ${formData.lastname}`,
      phone: formData.phone,
      email: formData.email,
      subject: formData.subject,
      query: formData.message,
    };
  
    try {
      const res = await axios.post("https://plutosec.ca/api/CreateLeads", payload);
  
      if (res.status == 201) {
        setStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };
  
  return (
    <div className="contact-container">
      <div className="contact-info2">
        <div className="head">
          <h2>Contact Information</h2>
          <p>Say something to start a chat!</p>
        </div>
        <div className="info">
          <div className="info-item">
            <span><IoIosCall /></span> +1 (905) 367-6038
          </div>
          <div className="info-item">
            <span><IoMdMail /></span> Contact@plutosec.ca
          </div>
          <div className="info-item">
            <span><IoLocationSharp /></span> 335 Yonge St, Toronto, ON M5B 2L3
          </div>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/plutosec.ca" target="_blank" rel="noopener noreferrer">
            <span><RiFacebookFill /></span>
          </a>
          <a href="https://www.linkedin.com/company/pluto-security-ltd/" target="_blank" rel="noopener noreferrer">
            <span><FaLinkedinIn /></span>
          </a>
          <a href="https://www.instagram.com/plutosec.ca/" target="_blank" rel="noopener noreferrer">
            <span><AiFillInstagram /></span>
          </a>
        </div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>

      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input id="firstname" type="text" value={formData.firstname} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input id="lastname" type="text" value={formData.lastname} onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <p>Select Subject?</p>
        <div className="radio-group">
  {["Penetration Testing", "Cloud Security"].map((subject) => {
    const id = subject.toLowerCase().replace(/\s+/g, '-');
    return (
      <label htmlFor={id} key={id}>
        <input
          id={id}
          type="radio"
          name="subject"
          value={subject}
          checked={formData.subject === subject}
          onChange={handleChange}
        />
        {subject}
      </label>
    );
  })}
</div>

<div className="radio-group">
  {["Network Security", "Managed Security", "General Inquiry"].map((subject) => {
    const id = subject.toLowerCase().replace(/\s+/g, '-');
    return (
      <label htmlFor={id} key={id}>
        <input
          id={id}
          type="radio"
          name="subject"
          value={subject}
          checked={formData.subject === subject}
          onChange={handleChange}
        />
        {subject}
      </label>
    );
  })}
</div>


        <div className="form-group">
          <label className="text-area-label" htmlFor="message">Message</label>
          <textarea id="message" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button className="send-btn" onClick={handleSubmit}>Send Message</button>

        {status === "success" && <p className="success-msg">Your message has been sent!</p>}
        {status === "error" && <p className="error-msg">Something went wrong. Please try again.</p>}
      </div>
    </div>
  );
};

export default Contact;
