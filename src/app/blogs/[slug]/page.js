// /app/services/[slug]/page.js

import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/Components/Breadcrumb";
import BlogDetail from "@/Components/BlogDetail"; // <-- Move blog logic to client component

export async function generateMetadata({ params }) {
const slug = (await params).slug

  return {
    title: `${slug.replace(/-/g, " ")} | PlutoSec`,
    description: `Details about ${slug.replace(/-/g, " ")} on PlutoSec.`,
    icons: { icon: "/plutofav.png" },
  };
}

export default async function Page({ params }) {
  const slug = (await params).slug
  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}></h1>
      <p className={styles.ptext}></p>

      <BlogDetail slug={slug} /> {/* Client-side fetching */}
    </div>
  );
}
