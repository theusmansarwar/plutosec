
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

const title = "Canada’s Leading Cybersecurity & Penetration Testing Services | PlutoSec";
const description = "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.";
const url = "https://plutosec.ca"; // Replace with your actual URL
const image = "/plutofav.png";
export const metadata = {
  title,
  description,
  icons: {
    icon: "/plutofav.png",
  },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
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
