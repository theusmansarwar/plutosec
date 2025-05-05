"use client";

import React from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import "../../globals.css";
import Breadcrumb from "@/Components/Breadcrumb";
import Popular from "@/Components/Popular";
import KeyOfferings from "@/Components/KeyOfferings";
import SuccessStories from "@/Components/SuccessStories";

const Page = () => {
  const { slug } = useParams();

  let htext = "";
  let ptext = "";

  if (slug === "penetration-testing") {
    htext = "Pentest Services";
    ptext =
      "PlutoSec’s Pentest Services simulate real-world attacks to find vulnerabilities in your systems. We test your security measures thoroughly and provide actionable insights to fix weaknesses. Our team helps you strengthen your security posture and protect your business.";
  } else if (slug === "compliance-consulting") {
    htext = "Compliance Consulting & Certifications";
    ptext =
      "PlutoSec’s Compliance Consulting & Certifications help your business meet global cybersecurity standards. We guide you through every step of the compliance process. Our team ensures that your systems and processes align with industry regulations and certification frameworks. You stay secure and audit-ready at all times.";
  } else if (slug === "extended-detection") {
    htext = "Extended Detection & Response (XDR) Services";
    ptext =
      "PlutoSec’s Extended Detection & Response (XDR) Services provide comprehensive threat detection and rapid response across your entire IT environment. We integrate multiple security layers to ensure that your systems are constantly monitored. Our XDR services help you identify and neutralize threats before they can cause significant damage.";
  } else if (slug === "red-teaming-blue-teaming") {
    htext = "Red Teaming | Blue Teaming Services";
    ptext =
      "PlutoSec offers Red Teaming and Blue Teaming services to strengthen your organization’s security posture. Our Red Team simulates real-world cyberattacks to test your defenses, while our Blue Team focuses on defending against these attacks. Together, they create a comprehensive security strategy to identify vulnerabilities, improve incident response, and increase overall resilience.";
  } else if (slug === "identity-and-access-management") {
    htext = "Identity and Access Management";
    ptext =
      "PlutoSec helps you control who accesses your systems. We make sure only the right people get the right access. Our Identity and Access Management (IAM) services protect your data and reduce the risks of unauthorized use. We secure every identity across your network, apps, and devices. You stay in control with strong verification, smart access rules, and real-time monitoring.";
  } else if (slug === "devsecops") {
    htext = "DevSecOps as a Service";
    ptext =
      "PlutoSec blends security into your development cycle from start to finish. We help your teams deliver fast without losing control of risks. Our DevSecOps service builds a secure pipeline that scans, detects, and stops threats early. You ship safer code and reduce security costs. We align tools and practices to protect your code, apps, and infrastructure.";
  } else if (slug === "managed-security") {
    htext = "Managed Security Services";
    ptext =
      "PlutoSec offers complete Managed Security Services to keep your business protected around the clock. We handle your security operations so you can focus on growth. Our team monitors threats, responds to incidents, and improves your defense strategy. You get expert protection without managing complex tools or hiring a full security team.";
  } else if (slug === "cloud-security-solutions") {
    htext = "Cloud Security Solutions";
    ptext =
      "PlutoSec offers strong Cloud Security Solutions to protect your data, apps, and workloads in the cloud. We help you secure public, private, and hybrid environments. Our team finds risks, fixes weak points, and keeps your cloud setup safe from threats. You get full visibility, better access control, and peace of mind.";
  } else if (slug === "vulnerability-assessment") {
    htext = "Vulnerability Assessment Services";
    ptext =
      "PlutoSec offers Vulnerability Assessment Services to find weak points in your systems before attackers do. We scan networks, devices, and apps to detect security flaws. Our team gives you clear reports and solutions to fix issues. You stay secure and prevent risks before they grow.";
  }

  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}>{htext}</h1>
      <p className={styles.ptext}>{ptext}</p>

      <div className="headings">
        <h1>Key Offerings</h1>
        <img src="/headingimg.svg" />
      </div>

      <KeyOfferings slug={slug} />

      <div className="headings">
        <h1>Success Stories</h1>
        <img src="/headingimg.svg" />
      </div>

      <SuccessStories slug={slug} />
      {/* <Popular /> */}
    </div>
  );
};

export default Page;
