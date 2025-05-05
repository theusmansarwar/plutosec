'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import './PartnerProgram.css'

const PartnerContact = () => {
    const router = useRouter(); 
  return (
    <div className="heading-area">
    <div className="left">
    <div className="headings">
    <h1>Ready to get started?</h1>
    <img src="/headingimg.svg" />
  </div>
      <p className="description-heading">
      Join the Plutosec Partner Program today. We provide all the tools and resources you need to succeed. Our team will support you throughout your journey. You can trust that we make it easy for you to offer high-quality security solutions to your clients.
      </p>
      <p className="description-heading">
      As a partner, you’ll gain access to exclusive offers and marketing materials. You don’t need to worry about complex processes. We make everything clear and easy to follow. Our team will help you at every step. You’ll be able to grow your business and earn more with our reliable support. </p>
    </div>
  <div className='contactcard'>
    <p>Lead Intranet Specialist</p>
      <div className='btn'  onClick={() => router.push("/contact")}>Contact Us</div>
   
  </div>

  
  </div>
  )
}

export default PartnerContact