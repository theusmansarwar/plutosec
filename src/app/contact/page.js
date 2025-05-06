
import Contact from '@/Components/Contact'
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Faq from '@/Components/Faq';
import Link from "next/link";
import Breadcrumb from '@/Components/Breadcrumb';
export const metadata = {
  title: "Contact | PlutoSec",
  description: "Contact PlutoSec for fast, expert cybersecurity support. Get clear guidance, honest advice, and strong protection—starting today.",
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
    <h1 className={styles.htext}>Contact Us</h1>
    <p className={styles.ptext}>You can contact PlutoSec when you need fast and expert support. Our team helps you understand the next steps and answers your questions without delay. We guide you with honest advice and strong solutions. Start the conversation today and protect what matters most.</p>
    
    <Contact/>
    <Faq/>
    </div>



  )
}

export default page