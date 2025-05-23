'use client'; // (only if you are using Next.js 13+ app folder)

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css'; // basic swiper styles
import 'swiper/css/autoplay'; // for autoplay
import './Certificatelist.css'

const images = [
  "/certificate1.webp",
  "/certificate2.webp",
  "/certificate3.webp",
  "/certificate4.webp",
  "/certificate5.webp",
  "/certificate6.webp",
  "/certificate7.webp",
  "/certificate8.webp",
  "/certificate9.webp",
];

const Certificatelist = () => {
  return (
    <div className="marquee-container">
        <div className='left'>

        <div className="headings">
          <h1>Certifications</h1>
          <img src="/headingimg.svg" alt="headingimg"/>
        </div>
        <p>
          PlutoSec leads cybersecurity in Canada and is trusted by businesses in
          Toronto, Vancouver, Montreal, and more. Our expert team provides
          advanced penetration testing customized to meet your needs and
          industry standards. We take a consultative approach, ensuring you
          fully understand each evaluation and gain actionable insights. We
          improve your security with precision and lasting results by following
          trusted frameworks like NIST and ISO.
        </p>
     





        </div>
        <div className='right'>
        <Swiper
        modules={[Autoplay]}
        spaceBetween={2}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Image ${index}`}
              className="marquee-image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
        </div>
    
    </div>
  );
};

export default Certificatelist;
