'use client'
import React from 'react'
import Terminal from './Terminal'
import { useRouter } from "next/navigation";
import './Featured.css'
const Featured = () => {
     const router = useRouter();
  return (
    <div className="featured">
  <div className="left" >  
    <h1>Protect your data now with strong cybersecurity services</h1>
      <p>PlutoSec is a leading cybersecurity company in Canada, specializing in advanced penetration testing by certified experts. We offer detailed security assessments to help enterprises and government organizations identify vulnerabilities and enhance cyber resilience.</p>
      <div className='btn-section'>
        <div className='filled-btn' onClick={() => router.push("/services")}>Get Started</div>
        <div className='outline-btn'
         onClick={() => router.push("/contact")}>Contact Us</div>
      </div></div>
      <div className="right" > 
  <Terminal/>
  </div>
</div>
  )
}

export default Featured