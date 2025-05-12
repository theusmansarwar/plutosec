"use client";
import "./Contact.css";
import axios from "axios";
import { useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosCall, IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

const handleCaptchaChange = (token) => {
  setCaptchaToken(token);
};
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
    name: formData.firstname,
    lastname: formData.lastname,
    phone: formData.phone,
    email: formData.email,
    subject: formData.subject,
    query: formData.message,
    captchaToken: captchaToken,
  };

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URI}/CreateLeads`,
      payload
    );

    if (res.status === 201) {
      setStatus("success");
      toast.success(res?.data?.message);
      setErrors({});
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setCaptchaToken(null);
      recaptchaRef.current.reset();
    }
  } catch (err) {
    if (err.response?.status === 400) {
      const fieldErrors = {};
      err.response.data.missingFields.forEach((field) => {
        fieldErrors[field.name] = field.message;
      });
      setErrors(fieldErrors);
    } else {
      setStatus("error");
    }
  }
};


  return (
    <div className="contact-container">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />

      <div className="contact-info2">
        <div className="head">
          <h2>Contact Information</h2>
          <p>Start a conversation with us, and we'll assist you right away!</p>
        </div>
        <div className="info">
          <div className="info-item">
            <span>
              <IoIosCall />
            </span>{" "}
            +1 (905) 367-6038
          </div>
          <div className="info-item">
            <span>
              <IoMdMail />
            </span>{" "}
            Contact@plutosec.ca
          </div>
          <div className="info-item">
            <span>
              <IoLocationSharp />
            </span>{" "}
            335 Yonge St, Toronto, ON M5B 2L3
          </div>
        </div>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/plutosec.ca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <RiFacebookFill />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/company/pluto-security-ltd/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://www.instagram.com/plutosec.ca/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <AiFillInstagram />
            </span>
          </a>
        </div>
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>

      <div className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <input
              id="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            {errors.lastname && <p className="error-msg">{errors.lastname}</p>}
            <input
              id="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            {errors.email && <p className="error-msg">{errors.email}</p>}
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <p>Select Subject?</p>
        {errors.subject && <p className="error-msg">{errors.subject}</p>}
        <div className="radio-group">
          {["Penetration Testing", "Cloud Security"].map((subject) => {
            const id = subject.toLowerCase().replace(/\s+/g, "-");
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
          {["Network Security", "Managed Security", "General Inquiry"].map(
            (subject) => {
              const id = subject.toLowerCase().replace(/\s+/g, "-");
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
            }
          )}
        </div>

        <div className="form-group">
          <label className="text-area-label" htmlFor="message">
            Message
          </label>
          {errors.query && <p className="error-msg">{errors.query}</p>}
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
          {errors.captchaToken && <p className="error-msg">{errors.captchaToken}</p>}
     <ReCAPTCHA
  ref={recaptchaRef}
  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  onChange={handleCaptchaChange}
/>
        <button className="send-btn" onClick={handleSubmit}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
