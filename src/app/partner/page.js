"use client";
import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Link from "next/link";
import { usePathname } from "next/navigation";
import GetInTouch from '@/Components/GetInTouch';
import Popular from '@/Components/Popular';
import TestimonialCard from '@/Components/TestimonialCard';
import PartnerProgram from '@/Components/PartnerProgram';
import Testimonial from '@/Components/Testimonial';
import MissionFlipCard from '@/Components/MissionFlipCard';
import OurPartnersCard from '@/Components/OurPartnersCard';
const page = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);
  return (
   
    <div className={styles.ContactFormArea} >
      
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <nav className="breadcrumb">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const label = segment.replace(/-/g, " "); // optional: replace dashes with spaces

                return (
                  <li key={index}>
                    <Link href={href}>
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <h1 className={styles.htext}>Partners Program</h1>
    <p className={styles.ptext}>Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.</p>
    <PartnerProgram/>
    <MissionFlipCard/>
    <OurPartnersCard/>
    <div className="heading-area">
              <div className="left">
              <div className="headings">
              <h1>Ready to get started?</h1>
              <img src="/headingimg.svg" />
            </div>
                <p className="description-heading">
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
                  adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem
                  ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
                  vulputate amet aptent vivamus.
                </p>
              </div>
            <div className={styles.contactcard}>
              <p>Lead Intranet Specialist</p>
                <div className={styles.btn}>Contact Us</div>
             
            </div>

            
            </div>
    <Testimonial/>
   
    </div>



  
  )
}

export default page