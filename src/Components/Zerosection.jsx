'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Zerosection.css';

const Zerosection = () => {

const cards = [
     { id: 1, logo: '/zemalt.png', title: "Zemalt PVT LTD" },
  { id: 2, logo: '/Brodium.png', title: "Broadium" },
  { id: 3, logo: '/cisspeasy.png', title: "CISSP Easy" },
  { id: 4, logo: '/pearsonvue.png', title: "Pearson VUE" },
  { id: 5, logo: '/voucherley.png', title: "Voucherley" },
  { id: 6, logo: '/CertBills.png', title: "CertBills" },
  { id: 7, logo: '/CisaOnline.png', title: "CISA Online" },
  { id: 8, logo: '/GymTario.png', title: "GymTario" },
  { id: 9, logo: '/TdotShop.png', title: "Tdot Shop" },
  { id: 10, logo: '/CISSPTraining.png', title: "CISSP Training" },
  { id: 11, logo: '/SwitchJob.png', title: "Switch Job" },
  { id: 12, logo: '/hiremeus.png', title: "HireMeUS" },
  { id: 13, logo: '/utho.png', title: "Utho" },
  { id: 14, logo: '/mhc.png', title: "Men's Health Clinic" },
  { id: 15, logo: '/paramed.png', title: "ParaMed" },
  { id: 16, logo: '/rh.png', title: "RH Insurance" },
  { id: 17, logo: '/srj.png', title: "SRJ Chartered Professional Accountants" },
  { id: 18, logo: '/prasad.png', title: "Prasad & Company LLP" },
  { id: 19, logo: '/negup.png', title: "Negup" },
  { id: 20, logo: '/lowest.png', title: "LowestRates.ca Toronto" },
  { id: 21, logo: '/insurance.png', title: "Insurance-Canada.ca" },
  { id: 22, logo: '/dharna.png', title: "Dharna CPA Accounting & Tax Services" },
  { id: 23, logo: '/cql.png', title: "CQL & Partners" },
  { id: 24, logo: '/cpa.png', title: "Chartered Professional Accountants LLP " },
  { id: 25, logo: '/cleved.png', title: "Cleveland & Clinic Canada" },
  { id: 26, logo: '/canadas.png', title: "Canada's Medical Clinic" },
  { id: 27, logo: '/Canada.png', title: "Canada Clinics" },
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
     
       
          <h1>OUR VALUABLE CLIENTS</h1>
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

export default Zerosection;
