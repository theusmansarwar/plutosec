'use client';

import React, { useRef, useState } from "react";
import axios from "axios";
import "./Careers.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Careers = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
  
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

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("jobTitle", formData.jobTitle);

    if (fileInputRef.current?.files[0]) {
      form.append("resume", fileInputRef.current.files[0]);
    }

    try {
      const res = await axios.post(
        "https://plutosec.ca/api/applications/CreateApplication",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 201) {
        toast.success(res?.data?.message || "Application submitted successfully!");
        setErrors({});
        setFormData({
         name:"",
          email: "",
          phone: "",
          jobTitle: "",
        });
        setSelectedFileName("");
        if (fileInputRef.current) fileInputRef.current.value = null;
      }
    } catch (err) {
      if (err.response?.status === 400 && err.response.data?.missingFields) {
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
       
            <div className="field-group">
              <label htmlFor="name">Name</label>
              {errors.name && <p className="error-msg">{errors.name}</p>}
              <input id="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
           
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
            <PhoneInput
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              countryCodeEditable={false}
            />
          </div>

          <div className="field-group">
            <label htmlFor="resume" className="upload-label">Upload Resume</label>
            {errors.resume && <p className="error-msg">{errors.resume}</p>}
            <div className="upload-box" onClick={handleUploadClick}>
              <p>Upload Doc or PDF</p>
              <span> Click here to choose file</span>
            </div>
            {selectedFileName && (
              <p className="selected-file-name">Selected File: <strong>{selectedFileName}</strong></p>
            )}
            <input
              id="resume"
              accept=".doc,.docx,.pdf"
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
        <img className="center-image" src='/Career.png' alt="Employment Agreement" />
      </div>
    </div>
  );
};

export default Careers;
