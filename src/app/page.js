'use client';

import { useEffect } from 'react';
import styles from './page.module.css';
import Services from '@/Components/Services';
import Whyus from '@/Components/Whyus';
import Blogs from '@/Components/Blogs';
import Contact from '@/Components/Contact';
import Popular from '@/Components/Popular';
import Testimonial from '@/Components/Testimonial';
import Terminal from '@/Components/Terminal';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  return (
    <div className={styles.Page}>
      {/* <div className={styles['model-area']}>
        <model-viewer
          src="/models/plutohd.glb"
          alt="3D model"
          auto-rotate
          shadow-intensity="0"
          style={{ width: '100%', height: '100%' }}
        ></model-viewer>
      </div> */}

<div className={styles.featured}>
  <div className={styles.left} >  
    <h1>Securing our Communities</h1>
      <p>PlutoSec is a leading cybersecurity company in Canada, specializing in advanced penetration testing by certified experts. We provide in-depth security assessments for enterprises and government organizations to identify vulnerabilities and strengthen cyber resilience.</p>
      <div className={styles['btn-section']}>
        <div className={styles['filled-btn']}>Get Started</div>
        <div className={styles['outline-btn']}>Contact Us</div>
      </div></div>
      <div className={styles.right} > 
  <Terminal/>
  </div>
</div>


    


      

   <Services/>
   <Whyus/>
   <Blogs/>
   <div className="headings">
          <h1>Contact Us</h1>
          <img src="/headingimg.svg" />
        </div>
   <Contact/>

    </div>
  );
}
