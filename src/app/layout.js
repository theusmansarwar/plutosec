// app/layout.tsx
import { LanguageProvider } from "@/Context/LanguageContext";
import HtmlWrapper from "@/Components/HtmlWrapper"; // Make sure this doesn't return <html> or <body>
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMessageSquareQuote } from "react-icons/lu";
import Link from "next/link";
import ViewCounter from "@/Components/ViewCounter";
import { ToastContainer } from "react-toastify";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const title = "Canada’s Leading Cybersecurity & Penetration Testing Services | PlutoSec";
const description = "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.";
const url = "https://plutosec.ca"; // Replace with your actual URL
const image = "/plutofav.png"; // Or another Open Graph-friendly image

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


export default function RootLayout({ children }) {
  
 

  return (
    <html lang="en" className={montserrat.variable}>
      <head>
       
      </head>
      <body>
        <LanguageProvider>
          <HtmlWrapper>
            <div className="bg-wrapper">
              <div className="circle-container">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <div className="content">
               
                <Link href="/contact" className="linkss">
                  <div className="first-btn">
                    <LuMessageSquareQuote /> <span>Get a quote</span>
                  </div>
                </Link>
                <a href="mailto:contact@plutosec.ca" className="linkss">
                  <div className="second-btn">
                    <MdOutlineMailOutline /> <span>Email Us</span>
                  </div>
                </a>
                  <ToastContainer
          position="top-right"
          autoClose={3000}
          pauseOnHover={false}
          newestOnTop
        />
                <ViewCounter/>
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </HtmlWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
