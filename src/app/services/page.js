
import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Popular from '@/Components/Popular';
import Services2 from '@/Components/Service2';
import Testimonial from '@/Components/Testimonial';
import Whypluto from '@/Components/Whypluto';
import Link from "next/link";
import Breadcrumb from '@/Components/Breadcrumb';
export const metadata = {
  title: "Services | PlutoSec",
  description: "Discover why our company is the best choice for your needs, with outstanding service and quality.",
};
const page = () => {

  return (
  
  
    <div className={styles.Servicearea} >
        <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <Breadcrumb />
        </div>
      </div>
    <h1 className={styles.htext}>Our Services</h1>
    <p className={styles.ptext}>Our team provides advanced cybersecurity solutions to help businesses detect threats and defend their systems. We ensure your digital assets stay protected. Our experts assess vulnerabilities and offer reliable services to strengthen your security posture.</p>
    <Services2/>
    <Whypluto/>
    <Testimonial/>
    {/* <Popular/> */}
    </div>




  )
}

export default page