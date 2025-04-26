"use client";
import React from "react";
import styles from "./page.module.css";
import "../globals.css";
import Careers from "@/Components/Careers";
import Link from "next/link";
import { usePathname } from "next/navigation";
const page = () => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter((segment) => segment);
  return (
    <div className={styles.careerpage}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          {" "}
          <nav className="breadcrumb">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              {pathSegments.map((segment, index) => {
                const href = "/" + pathSegments.slice(0, index + 1).join("/");
                const label = segment.replace(/-/g, " "); // optional: replace dashes with spaces

                return (
                  <li key={index}>
                    <Link href={href}>
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
      <h1 className={styles.htext}>Join Our Journey of Plutosec</h1>
      <p className={styles.ptext}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Nascetur eget
        vulputate amet aptent vivamus.Lorem ipsum odor amet, consectetuer
        adipiscing elit. Nascetur eget vulputate amet aptent vivamus.Lorem ipsum
        odor amet, consectetuer adipiscing elit. Nascetur eget vulputate amet
        aptent vivamus.
      </p>

      <Careers />
    </div>
  );
};

export default page;
