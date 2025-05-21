
import React from 'react'
import styles from './page.module.css';
import "../globals.css";
import Services2 from '@/Components/Service2';
import Testimonial from '@/Components/Testimonial';
import Whypluto from '@/Components/Whypluto';
import Link from "next/link";
import Breadcrumb from '@/Components/Breadcrumb';
import Blogs from '@/Components/Blogs';
import BlogCard from '@/Components/BlogCard';
export const metadata = {
  title: "Services | PlutoSec",
  description: "Get expert cybersecurity solutions to detect threats, fix vulnerabilities, and protect your digital assets with trusted, advanced services.",
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
    <h1 className={styles.htext}>Blogs</h1>
    <p className={styles.ptext}>You need the latest updates to stay ahead. Our blog gives you news, tips, and insights that matter. We break down complex topics so you get clear answers fast. Learn how to protect your data, spot new threats, and boost your security. Every post helps you stay sharp in a changing cyber world.</p>
    <BlogCard/>
    </div>




  )
}

export default page