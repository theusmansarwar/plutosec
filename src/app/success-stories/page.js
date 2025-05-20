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
  const ptext = "Discover how PlutoSec helps your business stay safe before threats take over. Every day hackers look for easy targets. One small gap is all they need. You might not even know when they get in. That’s where we come in. We act like real attackers and test everything. You see what they see. You find the weak spots early. Then you fix them fast. That means no surprises and no panic. Your business keeps running strong.";

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
