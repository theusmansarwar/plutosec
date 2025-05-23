// File: /app/services/[slug]/page.js

import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/Components/Breadcrumb";
import Testimonial from "@/Components/Testimonial";
import Blogs from "@/Components/Blogs";
import Services3 from "@/Components/Service3";

/** ----------------------------------------------------------------
 * Map each slug to its heading & paragraph text
 * ---------------------------------------------------------------- */

function getContentBySlug(slug) {
  switch (slug) {
    case "penetration-testing-for-retail-ecommerce":
      return {
        htext: "Retail / E-commerce Sector",
        ptext:
          "Cyber threats hit retail and e-commerce more than any other sector. Attackers target customer data, payment systems, and supply chains. You cannot afford delays. Every gap in your system becomes a doorway for threats. ",
        overview: `Secure your customer’s payment data, login credentials, and personal information with a Pentest.
The e-commerce and retail industry faces 32.4% of all cyberattacks. You cannot ignore the risk. Your payment platforms, apps, and inventory systems stay exposed without proper testing.
We help you spot threats before damage occurs. Our methods protect you from phishing, ransomware, and malware. You also meet PCI DSS standards. Customers trust you more when their data stays safe.`,
      };
    case "penetration-testing-for-finance":
      return {
        htext: "Finance",
        ptext:
          "Plutosec helps financial institutions stay ahead of rising threats. You protect sensitive data, avoid disruptions, and meet strict compliance needs with expert-led cybersecurity services built for finance.",
        overview: `Secure your financial platforms and client records with reliable penetration testing tailored for the finance sector.
Finance stands as the second most targeted sector in cybercrime. Data shows a steady rise in attacks over the past three years. You cannot leave systems exposed. A single breach can impact services and break client trust.
You must protect operations and maintain compliance. Work with penetration testers who understand OSFI and PIPEDA standards. Our team also covers SOC2, ISO 27000, NIST SP800-115, PCI DSS 11.3, and CREST. You meet every requirement with confidence and avoid fines or delays.`,
      };
    case "penetration-testing-for-government":
      return {
        htext: "Government Systems",
        ptext:
          "Government systems hold sensitive data that attracts cyberattacks. You need strong testing to protect national information, infrastructure, and digital public services.",
        overview: `Stop breaches before they happen by securing public systems, sensitive records, and government infrastructure.
Cyberattacks target government networks more than any other. Over 38% of global attacks hit government systems. The United States and Canada face the highest risk.
You must identify weaknesses in every area if you are a ministry, public vendor, or third-party service provider. Regulatory audits demand full compliance.
We help you meet these standards. Our team runs expert-led penetration tests that match evolving policies. You stay protected and aligned with all government cybersecurity requirements.`,
      };
    case "penetration-testing-for-education":
      return {
        htext: "Education",
        ptext:
          "Hackers target education networks often. Schools keep sensitive student and staff data. You must act fast to stop attacks. Weak systems increase risk. Penetration testing helps you protect data and meet compliance.",
        overview: `Secure student and faculty data across every system and device through expert-led penetration testing.
Education remains one of the most vulnerable industries to cyber threats. Attackers exploit weak controls and outdated systems. It ranks lowest in overall cybersecurity strength out of 17 industries. You must act fast to fix the exposure before attackers take advantage.
A penetration testing partner helps you detect threats early and meet compliance standards. Strong testing practices give you visibility into weak points. You gain the tools to secure digital learning platforms and on-campus infrastructure. Every report helps you comply with policies and gives you a clear path to remediation.`,
      };
    case "penetration-testing-for-technology":
      return {
        htext: "Tech Companies",
        ptext:
          " Technology companies handle vast amounts of sensitive data. You must defend your systems and third-party connections. Strong cybersecurity plans with thorough manual penetration tests protect your business from data breaches and costly downtime.",
        overview: `Secure your sensitive data and third-party connections with a Pentest.
Significant cyber threats target the technology sector due to the sensitive data that tech firms and their vendors manage. Creating a detailed cybersecurity roadmap is vital. Manual penetration testing makes up over 95% of our approach. This method protects you from operational downtime, reputational harm, and financial losses.
The tech industry faces high risks of data breaches. Our CREST-certified, SOC 2 Type II-accredited team of OSCP-certified ethical hackers offers comprehensive services. You receive strong protection to improve your security posture.`,
      };
    case "penetration-testing-for-health-care":
      return {
        htext: "Healthcare",
        ptext:
          "Healthcare systems face growing risks every day. You need protection that keeps your network safe and your data secure. Our services help you stay ahead of attacks and meet compliance without confusion.",
        overview: `Secure your healthcare systems and patient records using tested and reliable cybersecurity solutions.
Most healthcare teams discover a breach months after it starts. That delay gives attackers time to steal valuable patient data. You store sensitive details like social security numbers, insurance data, payment history, and personal records. Hackers know that.
You must stay ready. Our cybersecurity services protect your systems and help you meet compliance rules like SOC 2 and ISO 27000. You avoid risks and reduce impact. Patient data stays safe. Operations continue without disruption.
Cybersecurity is now a core part of every healthcare setup. You need strong defenses to protect patients and support your team.`,
      };
    case "penetration-testing-for-utilities-energy":
      return {
        htext: "Utilities & Energy",
        ptext:
          "Protect your critical infrastructure from cyber threats. Packetlabs helps you find weaknesses and secure your utility networks. Stay ahead of attacks and meet industry regulations with expert penetration testing tailored to your energy sector needs.",
        overview: `Protect your power grids and utility operations using proven cybersecurity built for critical infrastructure.
Utilities and energy systems run critical services. That makes you a prime target. Hackers see your sector as high value. They go after your networks to cause downtime or steal data.
You must know how a real attack works. We will show you that. Our penetration testing reveals system gaps. You see how attackers move. You learn where alerts fail. You fix weak spots before they cause damage.
Our team meets NERC CIP standards. You stay secure across wireless setups, IoT devices, and all data channels. You reduce risk and keep operations running without threat.`,
      };
    case "penetration-testing-for-oil-gas":
      return {
        htext: "Oil & Gas Companies",
        ptext:
          "Cyberattacks on oil and gas systems put critical operations at risk. Protect your sensitive data and infrastructure against hackers who seek to disrupt and steal. Strong cybersecurity is essential for safety and trust.",
        overview: `Protect your oil and gas operations with expert cybersecurity and penetration testing tailored to your industry.
Stop breaches before they happen. Secure public systems, sensitive records, and government infrastructure. Cyberattacks target government networks more than any other sector. Over 38% of attacks worldwide hit government systems. The United States and Canada face the highest risk.
You must find weaknesses everywhere if you are a ministry, public vendor, or third-party service provider. Regulatory audits require full compliance. We help you meet these rules. Our team performs expert penetration tests. They keep up with changing policies.`,
      };
    case "penetration-testing-for-banking":
      return {
        htext: "Banking",
        ptext:
          "Secure your banking systems and protect sensitive financial data from cyber threats. Microminder offers expert penetration testing to help banks stay ahead of hackers and maintain trust with their clients.",
        overview: `Protect your bank’s data and infrastructure from relentless cyberattacks with trusted security solutions tailored.
Banks face constant cyber threats that target their sensitive data and critical systems. Breaches can cause severe damage to reputation and customer trust. Attackers use advanced methods, making strong defenses essential. Microminder’s expert team helps you find and fix weaknesses before criminals exploit them.
Proactive steps reduce risks and ensure compliance with banking regulations. Regular penetration testing keeps your security up to date and protects your bank from evolving cyberattacks.`,
      };
    default:
      return {
        htext: "Industry Not Found",
        ptext: "This industry is currently unavailable or does not exist.",
        overview:
          "Please select a valid industry to see the relevant cybersecurity services.",
      };
  }
}

/* ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * ------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const { htext, ptext } = getContentBySlug(slug);

  return {
    title: `${htext} | PlutoSec`,
    description: ptext,
    icons: { icon: "/plutofav.png" },
  };
}

/* ---------------------------------------------------------------
 * Default-exported page component
 * ------------------------------------------------------------- */
export default async function Page({ params }) {
  const slug = (await params).slug;
  const { htext, ptext, overview } = getContentBySlug(slug);

  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}>Penetration Testing for the {htext}</h1>
      <p className={styles.ptext}>{ptext}</p>
      <h1 className={styles.htext}>OVERVIEW</h1>
      {(() => {
  const [firstSentence, ...rest] = overview.split('.');
  return (
    <>
      <p className={styles.ptext}>
        <strong>{firstSentence.trim()}.</strong>
      </p>
      <p className={styles.ptext}>
        {rest.join('.').trim()}
      </p>
    </>
  );
})()}
<h1 className={styles.htext2}>What PLUTOSEC offers our {htext} Clients.</h1>
<Services3 slug={slug}/>
      <Testimonial />
      <Blogs />
    </div>
  );
}
