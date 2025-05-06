import { LanguageProvider } from "@/Context/LanguageContext";
import HtmlWrapper from "@/Components/HtmlWrapper"; // new file
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "PlutoSec",
  description: "PlutoSec offers expert penetration testing in Canada, helping businesses and governments boost security and fix vulnerabilities.",
  icons: {
    icon: "/plutofav.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <HtmlWrapper>
        <head>
          <meta name="google-site-verification" content="6lxBCbEUwWnkkyGfpvEJvaP_LBDcQ8IOtyc2LEqDeKM" />
          <link rel="icon" href="/plutofav.png" />
          <Script
            type="module"
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
            strategy="afterInteractive"
          />
           
        </head>
        <body>
          <div className="bg-wrapper">
            <div className="circle-container">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="content">
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
