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
      <h1 className={styles.htext}>Testimonials</h1>
    <p className={styles.ptext}>Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet aptent vivamus.</p>
    
    <TestimonialCard/>
    <GetInTouch/>
    <Popular/>
    </div>



  
  )
}

export default page