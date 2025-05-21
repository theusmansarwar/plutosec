
import styles from './page.module.css';
import Services from '@/Components/Services';
import Whyus from '@/Components/Whyus';
import Blogs from '@/Components/Blogs';
import Testimonial from '@/Components/Testimonial';
import Terminal from '@/Components/Terminal';
import Certificatelist from '@/Components/Certificateslist';
import { useRouter } from "next/navigation";
import '../app/globals.css'
import Contact2 from '@/Components/Contact2';
import ReviewsCarousel from '@/Components/ReviewsCarousel';
export const metadata = {
 title: "Canada’s Leading Cybersecurity & Penetration Testing Services | PlutoSec",
  description:
    "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.",
  };
export default function Home() {
  const router = useRouter();


  return (
    <div className={styles.Page}>
  
<div className={styles.featured}>
  <div className={styles.left} >  
    <h1>Protect your data now with strong cybersecurity services</h1>
      <p>PlutoSec is a leading cybersecurity company in Canada, specializing in advanced penetration testing by certified experts. We offer detailed security assessments to help enterprises and government organizations identify vulnerabilities and enhance cyber resilience.</p>
      <div className={styles['btn-section']}>
        <div className={styles['filled-btn']} onClick={() => router.push("/services")}>Get Started</div>
        <div className={styles['outline-btn']} onClick={() => router.push("/contact")}>Contact Us</div>
      </div></div>
      <div className={styles.right} > 
  <Terminal/>
  </div>
</div>


    


    
{/* <ElfsightWidget/> */}
   <Services/>
   <Certificatelist/>
   <Whyus/>
    <ReviewsCarousel/> 
   <Blogs/>
     <Testimonial/>
   <div className="headings">
          <h1>Contact Us</h1>
          <img src="/headingimg.svg" />
        </div>
   <Contact2/>

    </div>
  );
}
