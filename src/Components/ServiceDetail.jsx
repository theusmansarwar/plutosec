"use client";
import React from "react";
import KeyOfferings from "@/Components/KeyOfferings";
import SuccessStories from "@/Components/SuccessStories";
import '../app/globals.css';
import './Services.css'

const ServiceDetail = ({slug }) => {
  return (
    <div >
      
      <div className="headings">
        <h1>Key Offerings</h1>
        <img src="/headingimg.svg"  alt="headingimg"/>
      </div>

      <KeyOfferings slug={slug} />

      <div className="headings">
        <h1>Success Stories</h1>
        <img src="/headingimg.svg"  alt="headingimg"/>
      </div>

      <SuccessStories slug={slug} />
    </div>
  );
};

export default ServiceDetail;
