'use client';
import React, { useRef } from "react";
import "./Careers.css";

const Careers = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
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
        <form className="form-fields">
          <div className="name-row">
            <div className="field-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="First name" autoComplete="off"/>
            </div>
            <div className="field-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Last name" autoComplete="off"/>
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="jobTitle">Job Title</label>
            <input id="jobTitle" type="text" placeholder="Job title" autoComplete="off" />
          </div>

          <div className="field-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="Email address" autoComplete="off"/>
          </div>

          <div className="field-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="tel" placeholder="Phone number" autoComplete="off"/>
          </div>

       
          <div className="field-group">
            <label htmlFor="resume" className="upload-label">Upload Resume</label>
            <div className="upload-box" onClick={handleUploadClick}>
              <p>Upload an image or PDF</p>
              <span>Drag & drop or click to choose file</span>
            </div>
            <input id="resume" type="file" style={{ display: "none" }} ref={fileInputRef}  />
          </div>

          <button type="submit" className="submit-btn">
            Send
          </button>
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
