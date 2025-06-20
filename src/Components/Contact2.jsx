"use client";
import React, { useState, useRef } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact2.css";
import { CreateLeads } from "@/DAL/create";
const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    subject: [],
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubjectChange = (e) => {
  const { value, checked } = e.target;

  setFormData((prev) => {
    const subjects = new Set(prev.subject);
    if (checked) {
      subjects.add(value);
    } else {
      subjects.delete(value);
    }
    return { ...prev, subject: [...subjects] };
  });
};
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatSubject = (subjects) => {
      if (subjects.length === 0) return "";
      if (subjects.length === 1) return subjects[0];
      return subjects.slice(0, -1).join(", ") + " and " + subjects.slice(-1);
    };
    const payload = {
      name: formData.name,
      lastname: formData.lastname,
      phone: formData.phone,
      email: formData.email,
      subject: formatSubject(formData.subject),
      query: formData.message,
      captchaToken,
    };

    try {
      const res = await CreateLeads(payload);

      if (res.status === 201) {
        setStatus("success");
        toast.success(res?.message || "Form submitted successfully");
        setErrors({});
        setFormData({
          name: "",
          lastname: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setCaptchaToken(null);
        recaptchaRef.current.reset();
      }
      if (res?.status === 400) {
        const fieldErrors = {};
        res.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
      }
    } catch (err) {
      if (err.response?.status == 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        setStatus("error");
        toast.error("Submission failed. Please try again.");
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        <iframe
          title="Google Map"
          style={{
            filter: "invert(0%)",
            width: "100%",
            height: "100%",
            border: "0",
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.470967552435!2d-79.60309389999999!3d43.7423158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3afdb0955555%3A0x4020cb1e9a111b90!2s23%20Westmore%20Dr%20Unit%20201-A%2C%20Etobicoke%2C%20ON%20M9V%203Y7%2C%20Canada!5e0!3m2!1sen!2s!4v1750424039904!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="contact-form2">
        <h1>Start a conversation with us, and we'll assist you right away!</h1>
        <form onSubmit={handleSubmit}>
          <div className="fromgrouprow">
            <div className="formgroupform2">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>
            <div className="formgroupform2">
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <span className="error-msg">{errors.lastname}</span>
              )}
            </div>
          </div>

          <div className="fromgrouprow">
            <div className="formgroupform2">
              <PhoneInput
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                countryCodeEditable={false}
              />
              {errors.phone && (
                <span className="error-msg">{errors.phone}</span>
              )}
            </div>

            <div className="formgroupform2">
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-msg">{errors.email}</span>
              )}
            </div>
          </div>
          <div className="radio-group-form">
            <p>
              Select Subject?{" "}
              {errors.subject && (
                <span className="error-msg">{errors.subject}</span>
              )}
            </p>

            <div className="radio-group-grid">
              {[
                "Penetration Testing",
                "Cloud Security",
                "Network Security",
                "Managed Security",
                "Cyber Consultation",
                "General Inquiry",
              ].map((subject) => {
                const id = subject.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div className="radio-element" key={id}>
                    <input
                      id={id}
                      type="checkbox"
                      name="subject"
                      value={subject}
                      checked={formData.subject.includes(subject)}
                      onChange={handleSubjectChange}
                    />

                    <label htmlFor={id} className="radio-wrapper">
                      {subject}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <textarea
            name="message"
            placeholder="Please type your enquiry and our team will get back to you..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.query && <span className="error-msg">{errors.query}</span>}

          <div className="recaptch-div">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
              theme="dark"
            />
            {errors.captchaToken && (
              <span className="error-msg">{errors.captchaToken}</span>
            )}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={false}
      />
    </div>
  );
};

export default Contact2;
