
import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Link from "next/link";
import GetInTouch from '@/Components/GetInTouch';
import Popular from '@/Components/Popular';
import TestimonialCard from '@/Components/TestimonialCard';
import PartnerProgram from '@/Components/PartnerProgram';
import Testimonial from '@/Components/Testimonial';
import MissionFlipCard from '@/Components/MissionFlipCard';
import OurPartnersCard from '@/Components/OurPartnersCard';
import Breadcrumb from '@/Components/Breadcrumb';

import PartnerContact from '@/Components/PartnerContact';

export const metadata = {
  title: "Partner Program | PlutoSec",
  description: "Discover why our company is the best choice for your needs, with outstanding service and quality.",
};
const page = () => {
 
  return (
   
    <div className={styles.ContactFormArea} >
      
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <Breadcrumb />
        </div>
      </div>
      <h1 className={styles.htext}>Partners Program</h1>
    <p className={styles.ptext}>PlutoSec Partner Program helps you grow with confidence. You can expand your reach and earn more without extra cost. Our team supports you at every step and offers tools to close deals faster. You get access to sales resources and expert training that makes your journey smooth. We build trust with secure solutions and help you reach the right clients. It is a chance to grow faster and work smarter in the security industry.</p>
    <PartnerProgram/>
    <MissionFlipCard/>
    <OurPartnersCard/>
    <PartnerContact/>
    <Testimonial/>
   
    </div>



  
  )
}

export default page