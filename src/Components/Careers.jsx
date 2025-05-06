'use client';

import React, { useRef, useState } from "react";
import axios from "axios";
import "./Careers.css";

const Careers = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
  });

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const form = new FormData();
    form.append("name", name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("jobTitle", formData.jobTitle);

    if (fileInputRef.current.files[0]) {
      form.append("resume", fileInputRef.current.files[0]);
    }

    try {
      const res = await axios.post("https://plutosec.ca/api/applications/CreateApplication", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status == 201) {
        alert("Application submitted successfully!");
      } else {
        alert("Failed to submit application.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("There was an error submitting your application.");
    }
  };

  return (
    <div className="apply-form-container">
      <div className="apply-form-left">
        <div>
          <h1>Apply Now</h1>
          <p className="subtitle">Ready to Take the Next Step?</p>
          <p className="description">
            Fill out the form below and take the first step toward an exciting
            career with us. Let&apos;s build the future together!
          </p>
        </div>
        <form className="form-fields" onSubmit={handleSubmit}>
          <div className="name-row">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="First name" onChange={handleChange} />
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Last name" onChange={handleChange} />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input id="jobTitle" type="text" placeholder="Job title" onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Email address" onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone number" onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="resume" className="upload-label">Upload Resume</label>
            <div className="upload-box" onClick={handleUploadClick}>
              <p>Upload an image or PDF</p>
              <span>Drag & drop or click to choose file</span>
            </div>
            {selectedFileName && (
              <p className="selected-file-name">Selected File: {selectedFileName}</p>
            )}
            <input
              id="resume"
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
          </div>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </div>

      <div className="apply-form-right">
        <img className="top-logo" src='/PlutoSec-Logo-Transparent1.svg' alt="PlutoSec Logo" />
        <img className="center-image" src='/applyform_img.svg' alt="Employment Agreement" />
        <img className="bottom-logo" src='/PlutoSec-Logo-Transparent1.svg' alt="PlutoSec Logo" />
      </div>
    </div>
  );
};

export default Careers;
