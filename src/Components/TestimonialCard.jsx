'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { ImQuotesLeft } from 'react-icons/im';
import './TestimonialCard.css';
import { GrNext, GrPrevious } from "react-icons/gr";
const testimonials = [
  {
    rating: 5,
    review:
      "PlutoSec helped secure our ecommerce platform. Their clear reports, quick action, and expertise made a real difference. Highly recommended, excellent team.",
    name: "Tessa Martel",
    designation: "System Administrator",
    image: "/testimonial.jpg",
  },
  {
    rating: 5,
    review:
      "PlutoSec provides strong security for our government systems. Transparent pricing, clear communication, and technical expertise make them a top Canadian firm.",
    name: "Lily Moreau",
    designation: "SOC Analyst",
    image: "/testimonial.jpg",
  },
  {
    rating: 5,
    review:
      "We needed compliance in healthcare. PlutoSec guided us well, explained everything clearly, and delivered secure results. Professional, responsive, and easy to trust.",
    name: "Charlotte Tremblay",
    designation: "CTO",
    image: "/testimonial.jpg",
  },
  {
    rating: 5,
    review:
      "PlutoSec secured our transportation firm with reliable compliance testing. Their unmatched service, communication, and technical strength make them the right choice.",
    name: "Owen Leduc",
    designation: "Chief Financial Officer",
    image: "/testimonial.jpg",
  },
];


const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % total);
  const prevTestimonial = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goTo = (index) => setCurrent(index);

  const { rating, review, name, designation, image } = testimonials[current];

  return (
    <>
    <div className="testimonial-container">
      <div className="left-container">
        <div className="quote-icon"><ImQuotesLeft /></div>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" style={{ color: i < rating ? 'var(--background-color)' : '#ccc' }} />
          ))}
        </div>
        <p className="review">{review}</p>
        <p className="name">{name}</p>
        <p className="designation">{designation}</p>
       
      </div>
      <div className="right-container" style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
    </div>
     <div className="pagination-controls">
          <div className='move-btn' onClick={prevTestimonial}><GrPrevious /></div>
          <div className="dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                onClick={() => goTo(i)}
                className={i === current ? 'dot active' : 'dot'}
              ></span>
            ))}
          </div>
          <div className='move-btn' onClick={nextTestimonial}><GrNext /></div>
        </div>
        </>
  );
};

export default TestimonialCard;
