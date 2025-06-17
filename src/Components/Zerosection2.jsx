'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Zerosection.css';

const Zerosection2 = () => {

const cards = [
     { id: 1, logo: '/zemalt.png', title: "Zemalt PVT LTD" },
  { id: 2, logo: '/Brodium.png', title: "Broadium" },

  { id: 3, logo: '/utho.png', title: "Utho" },
  { id: 4, logo: '/mhc.png', title: "Men's Health Clinic" },
  { id: 5, logo: '/paramed.png', title: "ParaMed" },
  { id: 6, logo: '/rh.png', title: "RH Insurance" },
  { id: 7, logo: '/srj.png', title: "SRJ Chartered Professional Accountants" },
  { id: 8, logo: '/prasad.png', title: "Prasad & Company LLP" },
  { id: 9, logo: '/negup.png', title: "Negup" },
  { id: 10, logo: '/lowest.png', title: "LowestRates.ca Toronto" },
  { id: 11, logo: '/insurance.png', title: "Insurance-Canada.ca" },
  { id: 12, logo: '/dharna.png', title: "Dharna CPA Accounting & Tax Services" },
  { id: 13, logo: '/cql.png', title: "CQL & Partners" },
  { id: 14, logo: '/cpa.png', title: "Chartered Professional Accountants LLP " },
  { id: 15, logo: '/cleved.png', title: "Cleveland & Clinic Canada" },
  { id: 16, logo: '/canadas.png', title: "Canada's Medical Clinic" },
  { id: 17, logo: '/canada.png', title: "Canada Clinics" },
];


  const cardsPerPage = 3;
  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(0);
  const startIdx = currentPage * cardsPerPage;
  const visibleCards = cards.slice(startIdx, startIdx + cardsPerPage);

  const goToPage = (index) => setCurrentPage(index);
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 0));
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <div
      className='zero-section'
     
    >
     
       
            <div className="headings">
          <h1>OUR VALUABLE CLIENTS</h1>
          <img src="/headingimg.svg"  alt="headingimg"/>
        </div>
          <div className='hr' />
          <p className='description'>
           We work with top companies in healthcare, technology, finance, telecom, and cloud services. PlutoSec delivers cybersecurity solutions made to fit your needs. Our expertise and strong focus create trust and protection that meet the highest global standards. We build lasting partnerships that keep your digital world safe.</p>
    

        {/* Cards */}
        <div className='cards-section'>
          {visibleCards.map((card) => (
            <div className='cards-area' key={card.id}>
              <div className="top">
                <img src={card.logo} alt={card.title} />
              </div>
              <div className='hr2' />
              <p>{card.title}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className='pagination'>
          <div className='dots-wrapper'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentPage ? 'active' : ''}`}
                onClick={() => goToPage(index)}
              />
            ))}
          </div>
          <div className='arrowss'>
            <FaArrowLeft className='arrow' onClick={prevPage} />
            <FaArrowRight className='arrow' onClick={nextPage} />
          </div>
        </div>

      
      </div>
  
  );
};

export default Zerosection2;
