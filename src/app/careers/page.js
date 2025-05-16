
import React from "react";
import styles from "./page.module.css";
import "../globals.css";
import Careers from "@/Components/Careers";
import Breadcrumb from "@/Components/Breadcrumb";
export const metadata = {
  title: "Careers | PlutoSec",
  description: "Join PlutoSec’s growing cybersecurity team. Tackle new challenges, grow your skills, and help protect the digital world from threats.",
};
const page = () => {

  return (
    <div className={styles.careerpage}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <Breadcrumb />
        </div>
      </div>
      <h1 className={styles.htext}>Join Our Journey of Plutosec</h1>
      <p className={styles.ptext}>
      Be part of a growing cybersecurity team committed to protecting businesses. We prioritize innovation, teamwork, and personal growth. At PlutoSec, you’ll face new challenges and sharpen your skills. Our mission is to stay ahead of cyber threats and deliver outstanding security solutions. Join us and contribute to a safer digital world. Your expertise and passion will make an impact.
      </p>

      <Careers />
    </div>
  );
};

export default page;
