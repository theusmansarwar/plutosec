'use client';

import React, { useRef, useState } from "react";
import axios from "axios";
import "./Careers.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Careers = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [errors, setErrors] = useState({});
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

    if (fileInputRef.current?.files[0]) {
      form.append("resume", fileInputRef.current.files[0]);
    }

    try {
      const res = await axios.post("https://plutosec.ca/api/applications/CreateApplication", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status == 201) {
        toast.success(res?.data?.message || "Application submitted successfully!");
        setErrors({});
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          jobTitle: "",
        });
        setSelectedFileName("");
        if (fileInputRef.current) fileInputRef.current.value = null;
      }
    } catch (err) {
      if (err.response?.status == 400 && err.response.data?.missingFields) {
        const fieldErrors = {};
        err.response.data.missingFields.forEach((field) => {
          fieldErrors[field.name] = field.message;
        });
        setErrors(fieldErrors);
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    }
  };

  return (
    <div className="apply-form-container">
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover={false} />

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
              {errors.name && <p className="error-msg">{errors.name}</p>}
              <input id="firstName" type="text" placeholder="First name" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              {errors.name && <p className="error-msg">{errors.name}</p>}
              <input id="lastName" type="text" placeholder="Last name" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="jobTitle">Job Title</label>
            {errors.jobTitle && <p className="error-msg">{errors.jobTitle}</p>}
            <input id="jobTitle" type="text" placeholder="Job title" value={formData.jobTitle} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            {errors.email && <p className="error-msg">{errors.email}</p>}
            <input id="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <p className="error-msg">{errors.phone}</p>}
            <input id="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="field-group">
            <label htmlFor="resume" className="upload-label">Upload Resume</label>
            {errors.resume && <p className="error-msg">{errors.resume}</p>}
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
        <img className="center-image" src='/applyform_img.webp' alt="Employment Agreement" />
        <img className="bottom-logo" src='/PlutoSec-Logo-Transparent1.svg' alt="PlutoSec Logo" />
      </div>
    </div>
  );
};

export default Careers;
