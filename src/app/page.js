
import styles from './page.module.css';
import Services from '@/Components/Services';
import Whyus from '@/Components/Whyus';
import Blogs from '@/Components/Blogs';
import Testimonial from '@/Components/Testimonial';
import Certificatelist from '@/Components/Certificateslist';

import '../app/globals.css'
import Contact2 from '@/Components/Contact2';
import ReviewsCarousel from '@/Components/ReviewsCarousel';
import Featured from '@/Components/Featured';
export const metadata = {
 title: "Canada’s Leading Cybersecurity & Penetration Testing Services | PlutoSec",
  description:
    "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.",
   icons: { icon: "/plutofav.png" },
  };
export default function Home() {
 


  return (
    <div className={styles.Page}>
  
<Featured/>


    


    
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
