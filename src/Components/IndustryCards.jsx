"use client";

import React from "react";
import "./IndustryCard.css";

import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";

const IndustryCard = () => {
  const router = useRouter();

const industries = [
  {
    _id: "1",
    name: "Retail & Ecommerce",
    slug: "retail-ecommerce",
  },
  {
    _id: "2",
    name: "Finance",
    slug: "finance",
  },
  {
    _id: "3",
    name: "Government",
    slug: "government",
  },
  {
    _id: "4",
    name: "Education",
    slug: "education",
  },
  {
    _id: "5",
    name: "Technology",
    slug: "technology",
  },
  {
    _id: "6",
    name: "Health Care",
    slug: "health-care",
  },
  {
    _id: "7",
    name: "Utilities & Energy",
    slug: "utilities-energy",
  },
  {
    _id: "8",
    name: "Oil & Gas",
    slug: "oil-gas",
  },
  {
    _id: "9",
    name: "Banking",
    slug: "banking",
  },
];

  
  

  return (
  <div className="industries-section">
        <div className="industries-section">  
          <div className="industries-area-section">
            <div className="industries-grid">
              {industries.map((industries) => (
                <div className="industries-item" key={industries._id} 
                // onClick={() => router.push(`/industries/${industries.slug}`)}
                >
  
                 <h2>{industries.name}</h2>
             
                  </div>
           
              ))}
            </div>
          </div>
        </div>
       
      </div>
  );
};

export default IndustryCard;
