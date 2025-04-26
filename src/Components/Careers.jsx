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
        <h1 >Apply Now</h1>
        <p className="subtitle">Ready to Take the Next Step?</p>
        <p className="description">
          Fill out the form below and take the first step toward an exciting
          career with us. Let&apos;s build the future together!
        </p>
        </div>
        <form className="form-fields">
          <div className="name-row">
            <div className="field-group">
              <label>First Name</label>
              <input type="text" placeholder="First name" />
            </div>
            <div className="field-group">
              <label>Last Name</label>
              <input type="text" placeholder="Last name" />
            </div>
          </div>
          <div className="field-group">
            <label>Job Title</label>
            <input type="text" placeholder="Job title" />
          </div>
          <div className="field-group">
            <label>Email Address</label>
            <input type="email" placeholder="Email address" />
          </div>
          <div className="field-group">
            <label className="upload-label">Upload Resume</label>
            <div className="upload-box" onClick={handleUploadClick}>
              <p>Upload an image or PDF</p>
              <span>Drag & drop or click to choose file</span>
            </div>
            <input type="file" style={{ display: "none" }} ref={fileInputRef} />
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