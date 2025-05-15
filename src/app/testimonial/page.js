
import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Link from "next/link";
import GetInTouch from '@/Components/GetInTouch';
import Popular from '@/Components/Popular';
import TestimonialCard from '@/Components/TestimonialCard';
import Breadcrumb from '@/Components/Breadcrumb';
import Blogs from '@/Components/Blogs';
import Testimonial from '@/Components/Testimonial';
export const metadata = {
  title: "Testimonials | PlutoSec",
  description: "Discover how PlutoSec has helped businesses strengthen their security. Read trusted client testimonials and learn from their experiences",
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
      <h1 className={styles.htext}>Testimonials</h1>
    <p className={styles.ptext}>Our clients trust PlutoSec to secure their businesses. Discover their experiences and learn how we’ve helped strengthen their security. We value each testimonial and use the insights to continually improve our services.</p>
     <TestimonialCard/>
  
    <GetInTouch/>
   
     <Blogs/>
    </div>



  
  )
}

export default page