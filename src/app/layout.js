import { LanguageProvider } from "@/Context/LanguageContext";
import HtmlWrapper from "@/Components/HtmlWrapper";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import ScrollProgressBar from "@/Components/ScrollProgressBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "PlutoSec",
  description:
    "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.",
  icons: {
    icon: "/plutofav.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <HtmlWrapper>
        <body className={montserrat.variable}>
          <Script
            type="module"
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
            strategy="afterInteractive"
          />
          

          <div className="bg-wrapper">
            <div className="circle-container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="content">
           
             <ScrollProgressBar />
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </HtmlWrapper>
    </LanguageProvider>
  );
} 
