

import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Link from "next/link";
import GetInTouch from '@/Components/GetInTouch';
import Popular from '@/Components/Popular';
import TestimonialCard from '@/Components/TestimonialCard';
import MissionFlipCard2 from '@/Components/MissionFlipCard2';
import WhyChoose from '@/Components/WhyChoose';
import ValuesFlipCardList from '@/Components/ValuesFlipCard';
import Breadcrumb from '@/Components/Breadcrumb';

export const metadata = {
  title: "Why Choose Us | PlutoSec",
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
      <h1 className={styles.htext}>Why Choose Us</h1>
    <p className={styles.ptext}>Cyber threats grow fast, but we stay faster. PlutoSec is a trusted name in cybersecurity. We protect your data using smart tools and expert support. You get fast detection and strong response against threats. Our team handles identity access and keeps your cloud safe. We follow all rules and help you stay compliant. PlutoSec stays ahead to keep you secure. You can focus on your goals without worry.</p>
    <WhyChoose/>
   
    <ValuesFlipCardList/>
   <MissionFlipCard2/>
    </div>



  
  )
}

export default page