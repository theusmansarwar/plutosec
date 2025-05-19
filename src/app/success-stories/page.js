// File: /app/services/page.js

import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/Components/Breadcrumb";
import PartnerProgram from "@/Components/PartnerProgram";
import OurPartnersCard from "@/Components/OurPartnersCard";
import SuccessSection from "@/Components/SuccessSection";
import Zerosection from "@/Components/Zerosection";

/* ---------------------------------------------
 * Static Metadata
 * ------------------------------------------- */
export const metadata = {
  title: "Success Stories | PlutoSec",
  description: "",
  icons: { icon: "/plutofav.png" },
};

/* ---------------------------------------------
 * Static Page Component
 * ------------------------------------------- */
export default function Page() {
  // Optional: If you want to hardcode content, do it here:
  const htext = "Success Stories That Speak For Themselves";
  const ptext = "Discover how PlutoSec helps businesses overcome cybersecurity challenges with real, measurable results.";

  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}>{htext}</h1>
      <p className={styles.ptext}>{ptext}</p>
<SuccessSection/>
<Zerosection/>
<OurPartnersCard/>


    </div>
  );
}
