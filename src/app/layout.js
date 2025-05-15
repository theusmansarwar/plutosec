// app/layout.tsx
import { LanguageProvider } from "@/Context/LanguageContext";
import HtmlWrapper from "@/Components/HtmlWrapper"; // Make sure this doesn't return <html> or <body>
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ScrollProgressBar from "@/Components/ScrollProgressBar";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuMessageSquareQuote } from "react-icons/lu";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Canada’s Leading Cybersecurity & Penetration Testing Services | PlutoSec",
  description:
    "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.",
  icons: {
    icon: "/plutofav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
          strategy="afterInteractive"
        />
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
