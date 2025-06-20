// File: /app/services/[slug]/page.js

import React from "react";
import styles from "./page.module.css";
import Breadcrumb from "@/Components/Breadcrumb";
import ServiceDetail from "@/Components/ServiceDetail";
import Testimonial from "@/Components/Testimonial";
import Blogs from "@/Components/Blogs";

/** ----------------------------------------------------------------
 * Map each slug to its heading & paragraph text
 * ---------------------------------------------------------------- */
function getContentBySlug(slug) {
  if (slug === "penetration-testing") {
    return {
      htext: "Pentest Services",
      metaDescription:
        "PlutoSec’s Pentest Services simulate real-world attacks to identify vulnerabilities and strengthen your security measures.",
      cta: '<a href="https://plutosec.ca/contact" >Contact us today</a> to secure your business and fix critical vulnerabilities!',
      ptext:
        "PlutoSec’s Pentest Services simulate real-world attacks to find vulnerabilities in your systems. We test your security measures thoroughly and provide actionable insights to fix weaknesses. Our team helps you strengthen your security posture and protect your business.",
    };
  } else if (slug === "compliance-consulting") {
    return {
      htext: "Compliance Consulting & Certifications",
      metaDescription:
        "PlutoSec’s Compliance Consulting & Certifications help you meet global cybersecurity standards and ensure your systems are audit-ready.",
      cta: '<a href="https://plutosec.ca/contact" >Get in touch today</a> to ensure your business meets all cybersecurity regulations!',
      ptext:
        "PlutoSec’s Compliance Consulting & Certifications help your business meet global cybersecurity standards. We guide you through every step of the compliance process. Our team ensures that your systems and processes align with industry regulations and certification frameworks. You stay secure and audit-ready at all times.",
    };
  } else if (slug === "extended-detection") {
    return {
      htext: "Extended Detection & Response (XDR) Services",
      metaDescription:
        "PlutoSec’s XDR Services offer comprehensive threat detection and rapid response, ensuring constant monitoring and proactive threat neutralization.",
      cta: '<a href="https://plutosec.ca/contact" >Reach out today to safeguard your IT environment</a> with our advanced XDR services!',
      ptext:
        "PlutoSec’s Extended Detection & Response (XDR) Services provide comprehensive threat detection and rapid response across your entire IT environment. We integrate multiple security layers to ensure that your systems are constantly monitored. Our XDR services help you identify and neutralize threats before they can cause significant damage.",
    };
  } else if (slug === "red-teaming-blue-teaming") {
    return {
      htext: "Red Teaming | Blue Teaming Services",
      metaDescription:
        "PlutoSec’s Red and Blue Teaming services help strengthen security by simulating cyberattacks and enhancing defense strategies for better resilience",
      cta: '<a href="https://plutosec.ca/contact" > Contact us today to improve your organization’s security </a>with our Red and Blue Teaming services! ',
      ptext:
        "PlutoSec offers Red Teaming and Blue Teaming services to strengthen your organization’s security posture. Our Red Team simulates real-world cyberattacks to test your defenses, while our Blue Team focuses on defending against these attacks. Together, they create a comprehensive security strategy to identify vulnerabilities, improve incident response, and increase overall resilience.",
    };
  } else if (slug === "identity-and-access-management") {
    return {
      htext: "Identity and Access Management",
      metaDescription:
        "PlutoSec’s IAM services secure your systems by controlling access, ensuring only authorized users get the right permissions to protect your data.",
      cta: '<a href="https://plutosec.ca/contact" >Get in touch today to strengthen your access control </a>with our Identity and Access Management solutions! ',
      ptext:
        "PlutoSec helps you control who accesses your systems. We make sure only the right people get the right access. Our Identity and Access Management (IAM) services protect your data and reduce the risks of unauthorized use. We secure every identity across your network, apps, and devices. You stay in control with strong verification, smart access rules, and real-time monitoring.",
    };
  } else if (slug === "devsecops") {
    return {
      htext: "DevSecOps as a Service",
      metaDescription:
        "PlutoSec’s DevSecOps service integrates security into your development cycle, enabling fast delivery with proactive threat detection and reduced risks.",
      cta: '<a href="https://plutosec.ca/contact" >Contact us today to secure your development pipeline </a>with our DevSecOps solutions!',
      ptext:
        "PlutoSec blends security into your development cycle from start to finish. We help your teams deliver fast without losing control of risks. Our DevSecOps service builds a secure pipeline that scans, detects, and stops threats early. You ship safer code and reduce security costs. We align tools and practices to protect your code, apps, and infrastructure.",
    };
  } else if (slug === "managed-security") {
    return {
      htext: "Managed Security Services",
      metaDescription:
        "PlutoSec’s Managed Security Services provide 24/7 threat monitoring, incident response, and expert protection, allowing you to focus on business growth.",
      cta: '<a href="https://plutosec.ca/contact" >Get in touch today to safeguard your business </a> with our Managed Security Services!',
      ptext:
        "PlutoSec offers complete Managed Security Services to keep your business protected around the clock. We handle your security operations so you can focus on growth. Our team monitors threats, responds to incidents, and improves your defense strategy. You get expert protection without managing complex tools or hiring a full security team.",
    };
  } else if (slug === "cloud-security-solutions") {
    return {
      htext: "Cloud Security Solutions",
      metaDescription:
        "PlutoSec’s Cloud Security Solutions protect your data, apps, and workloads across public, private, and hybrid clouds, ensuring visibility and control",
      cta: '<a href="https://plutosec.ca/contact" >Contact us today to secure your cloud environment </a> with our expert Cloud Security Solutions',
      ptext:
        "PlutoSec offers strong Cloud Security Solutions to protect your data, apps, and workloads in the cloud. We help you secure public, private, and hybrid environments. Our team finds risks, fixes weak points, and keeps your cloud setup safe from threats. You get full visibility, better access control, and peace of mind.",
    };
  } else if (slug === "vulnerability-assessment") {
    return {
      htext: "Vulnerability Assessment Services",
      metaDescription:
        "PlutoSec’s Vulnerability Assessment Services identify weak points in your systems, providing reports and solutions to fix security flaws before they’re exploited.",
      cta: '<a href="https://plutosec.ca/contact" > Contact us today to identify and fix vulnerabilities</a> in your systems with our expert assessment services!   ',
      ptext:
        "PlutoSec offers Vulnerability Assessment Services to find weak points in your systems before attackers do. We scan networks, devices, and apps to detect security flaws. Our team gives you clear reports and solutions to fix issues. You stay secure and prevent risks before they grow.",
    };
  } else if (slug === "cybersecurity-consultancy") {
    return {
      htext: "Cybersecurity Consultancy",
      metaDescription:
        "PlutoSec’s Cybersecurity Consultancy provides expert guidance to build secure environments, identify risks, and ensure compliance with tailored defense strategies.",
      cta: '<a href="https://plutosec.ca/contact" >Contact us today for personalized cybersecurity solutions</a> and expert consultancy to protect your business!',
      ptext:
        "PlutoSec’s Cybersecurity Consultancy helps you build a strong and secure digital environment. We guide you through every stage of security planning and decision-making. Our team identifies risks, builds defense strategies, and ensures compliance. You gain expert insights tailored to your business goals.",
    };
  } else if (slug === "infrastructure-pentesting") {
    return {
      htext: "Infrastructure Penetration Testing Services",
      metaDescription:
        "Identify hidden network flaws with Infrastructure Penetration Testing. Strengthen servers, fix risks, and secure your systems from real-world cyber threats.",
      cta: 'Secure your infrastructure now. Let our experts help you build stronger protection before attackers strike.<a href="https://plutosec.ca/contact" > Book your assessment today</a>.',
      ptext:
        " PlutoSec's Infrastructure Penetration Testing evaluates your network, servers, and infrastructure components. We simulate real-world attacks to locate hidden vulnerabilities. Our team delivers detailed reports and practical remediation plans. You gain stronger defenses and resilient systems.",
    };
  } else if (slug === "web-app-testing") {
    return {
      htext: "Web Application Testing",
      metaDescription:
        "Find hidden flaws with Web Application Testing. Secure your site, protect data, and fix issues fast. Build trusted and safe systems for all users.",
      cta: '<a href="https://plutosec.ca/contact" >Let us test your web apps before attackers do</a>. Get expert help to build secure and stable systems users can rely on.',
      ptext:
        " Web Application Testing finds hidden flaws in your websites and portals. We test both the user side and the server side for security issues. Our team checks login safety, data handling, and session control. You get complete reports and easy fixes. It helps you stay secure, avoid data loss, and build safe web systems for users.",
    };
  } else if (slug === "mobile-app-testing") {
    return {
      htext: "Mobile Application Testing Services",
      metaDescription:
        "Protect Android and iOS apps with Mobile Application Testing. Fix logic flaws, secure APIs, and safeguard user data. Build trusted and compliant mobile apps.",
      cta: '<a href="https://plutosec.ca/contact" >Secure your mobile apps before attackers find flaws</a>. Let us help you build safer apps that users can trust and regulators approve.',
      ptext:
        "PlutoSec's Mobile Application Testing secures Android and iOS apps through advanced threat simulations. We identify issues in app logic, insecure APIs, and local data storage. Our team provides detailed findings with clear and effective fixes. You improve app security, protect user data, and meet industry standards.",
    };
  } else if (slug === "source-code-review") {
    return {
      htext: "Source code reviews",
      metaDescription:
        "Find hidden flaws in your app's code with expert Source Code Review. Improve security, fix risky patterns, and protect your software before release.",
      cta: '<a href="https://plutosec.ca/contact" >Let our experts review your code line by line</a>. Build safer apps with stronger foundations and fewer vulnerabilities.',
      ptext:
        "Source Code Review uncovers hidden flaws in your app's codebase. We analyze both frontend and backend code for risky patterns. Our team checks logic, encryption, and data flow across all modules. You get detailed reports and secure fixes. It helps you avoid future breaches, improve code quality, and launch safer applications.",
    };
  } else if (slug === "social-engineering") {
    return {
      htext: "Social engineering testing",
      metaDescription:
        "Social Engineering Testing identifies human security gaps through phishing and impersonation tests. Strengthen staff awareness and reduce social threats",
      cta: '<a href="https://plutosec.ca/contact" >Train your team before attackers trick them</a>. Improve awareness today and build real human-layer security with expert-led testing.',
      ptext:
        "PlutoSec's Social Engineering Testing reveals human weaknesses in your security. We simulate phishing, impersonation, and other real-world attacks. Our experts test staff awareness, find gaps, and share easy fixes. You get full reports, training insights, and a stronger defense against deception. It helps lower the risk of human error and social threats",
    };
  } else if (slug === "wifi-security-assessment") {
    return {
      htext: "Wi-Fi Security Assessment Services",
      metaDescription:
        "Secure your wireless environment before attackers do. Schedule your Wi‑Fi security assessment today and keep your network safe.",
      cta: 'Stop wireless threats before they reach your systems. Strengthen your Wi‑Fi security today. <a href="https://plutosec.ca/contact" >Book your assessment now</a>.',
      ptext:
        "PlutoSec's Wi‑Fi Security Testing finds weak points in your wireless networks. We test access points, guest setups, and encryption strength. You discover how attackers can break in through wireless flaws. Our experts give you complete reports and simple fixes to secure your network. This helps reduce risk and protect sensitive data.",
    };
  } else if (slug === "api-security") {
    return {
      htext: "API Security Testing Services by plutosec",
      metaDescription:
        "API Testing detects flaws in data exchange, access control, and input validation to protect your systems, prevent misuse, and reduce risk.",
      cta: ' Secure your APIs before attackers find a way in. Act now to protect your digital services. <a href="https://plutosec.ca/contact" >Schedule your API test today</a>.',
      ptext:
        "PlutoSec's API Testing finds security gaps in how your applications exchange data. We test input validation, access control, and data leaks across every endpoint. You receive full reports and easy fixes that help protect your systems and user data. This improves stability, stops misuse, and reduces risk.",
    };
  } else if (slug === "iot-security-assessment") {
    return {
      htext: "IoT Security Testing Services",
      metaDescription:
        "IoT Security Testing reveals risks in smart devices, firmware, and APIs. Strengthen protection, fix flaws, and secure your IoT environment today.",
      cta: 'Start protecting your IoT environment now. Avoid costly breaches and stay compliant. <a href="https://plutosec.ca/contact" > Book your detailed IoT security test today</a>. ',
      ptext:
        " PlutoSec's IoT Security Testing finds flaws in your connected devices and smart systems. We check firmware, APIs, network paths, and cloud links. You uncover weak access controls, insecure updates, and unsafe data handling. Our experts provide clear reports and easy fixes. You gain safer devices and stronger protection.",
    };
  } else if (slug === "attack-surface-management") {
    return {
      htext: "Attack Surface Management Services by plutosec",
      metaDescription:
        " Discover and reduce external risks with Attack Surface Management. Monitor exposed assets, close security gaps, and improve cyber resilience in real time.",
      cta: 'Stop threats before they reach your systems. <a href="https://plutosec.ca/contact" >Take control of your external attack surface today</a> with expert monitoring and actionable insights.',
      ptext:
        "PlutoSec's Attack Surface Management helps you find exposed assets and close weak spots. We scan your entire external environment, domains, IPs, cloud links, APIs, and shadow assets. Our team shows you what attackers see. You get real-time insights, risk scores, and clear fixes. It helps reduce exposure, stop breaches, and strengthen security posture.",
    };
  } else if (slug === "compromise-assessment-services") {
    return {
      htext: "Compromise Assessment Services by plutosec Cybersecurity",
      metaDescription:
        " Find hidden threats and silent breaches with Compromise Assessment Services. Get full system visibility and expert help to secure your network fast.",
      cta: 'Uncover hidden breaches before they cause damage. <a href="https://plutosec.ca/contact" >Book your compromise assessment today</a>.',
      ptext:
        "PlutoSec's Compromise Assessment Services detect hidden threats across your systems. You get a deep scan of endpoints, servers, networks, and logs. Our team finds malware, backdoors, and unauthorized access paths. You receive clear reports and simple solutions. We help you block future threats and restore control. You can protect your business before damage spreads.",
    };
  } else if (slug === "pcidss-penetration-testing") {
    return {
      htext: "PCI DSS Compliance Penetration Test by plutosec",
      metaDescription:
        "Meet PCI DSS standards with expert Penetration Testing. Fix cardholder data risks, pass audits, and protect payment systems.",
      cta: 'Protect payment data and meet PCI DSS rules. <a href="https://plutosec.ca/contact" >Schedule your PCI DSS Penetration Test today</a> ',
      ptext:
        "PlutoSec's PCI DSS Penetration Testing helps you meet strict compliance rules. We test your networks, systems, and applications for risks that expose cardholder data. You get a full assessment of internal and external threats. We give you simple fixes that align with PCI DSS rules. You stay secure and ready for audits. Your business keeps payment data safe.",
    };
  } else if (slug === "breach-attack-simulation") {
    return {
      htext: "Breach and Attack Simulation Services",
      metaDescription:
        "Test your defences in real-world scenarios. Simulate breach attempts to expose gaps, fix weak points, and strengthen your security posture.",
      cta: 'Safely run real-world attack simulations. Discover your security gaps before attackers find them. <a href="https://plutosec.ca/contact" >Book your breach simulation now</a>.',
      ptext:
        "PlutoSec's Breach Attack Simulation shows how attackers could break into your systems. You run safe but real simulations across endpoints, networks, applications, and user controls. You detect weak areas and fix them before real threats strike. You gain visibility, improve your response time, and reduce attack impact. You get clear reports and direct solutions tailored to your environment.",
    };
  } else if (slug === "architecture-review-services") {
    return {
      htext: "Security Architecture Review Services by plutosec",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "purple-teaming") {
    return {
      htext: "Purple Team Testing",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "privileged-access-management") {
    return {
      htext: "Privileged Access Management (PAM)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "blockchain-security") {
    return {
      htext: "Blockchain Security",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "mobile-threat-defence") {
    return {
      htext: "Mobile Threat Defense (MTD)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "incident-response-retainer") {
    return {
      htext: "Cybersecurity Incident Response Retainer Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "ddos-attack-sim") {
    return {
      htext: "Simulating DDoS Attacks for Robust Cyber Defense",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "caasm") {
    return {
      htext: "Asset attack surface management",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "cloud-pentesting-solutions") {
    return {
      htext: "Cloud Penetration Testing Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "soc-service") {
    return {
      htext: "SOC as a Service (Security Operations Centre as a Service)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "managed-security-providers") {
    return {
      htext: "MSSP: Managed Security Service Provider That You Can Rely On",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "endpoint-detect-response") {
    return {
      htext:
        "EDR: Fortify Your Defences with MCS Managed Endpoint Detection and Response",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "network-detection-response") {
    return {
      htext: "NDR: Managed Network Detection and Response",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "managed-siem-soar") {
    return {
      htext: "Managed SIEM and SOAR",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "threat-intelligence-hunting") {
    return {
      htext: "Threat Intelligence and Hunting Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "mitre-attack-framework") {
    return {
      htext: "MITRE ATTaCK Framework",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "custom-reporting-compliance") {
    return {
      htext: "Custom Reports for Compliance",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "digital-forensics-incident-response") {
    return {
      htext: "Digital Forensic DFIR: Digital Forensics and Incident Response",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "insider-threat-monitoring") {
    return {
      htext: "Insider threat and behavioral monitoring services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "fimm-analysis") {
    return {
      htext: "File Integrity Monitoring and Malware Analysis Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "account-takeover-protection") {
    return {
      htext: "Account Takeover protection",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "deception-technology") {
    return {
      htext: "Deception Tech (phishing attack)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "identity-threat-detection-response") {
    return {
      htext: "Identity Threat Detection and Response (Separate)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "unified-asset-management") {
    return {
      htext: "Unified Cyber Security asset management",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "cyber-risk-quantification") {
    return {
      htext: "Cyber risk Quantification",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "identity-access-management") {
    return {
      htext: "Identity and Access Management Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "data-security-solutions") {
    return {
      htext: "Data security Solutions",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "threat-intelligence-solutions") {
    return {
      htext: "Threat intelligence Solutions",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "emai-lsecurity-solutions") {
    return {
      htext: "Email security solution IMP",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "zero-trust-network-access") {
    return {
      htext: "Zero Trust Network Access",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "waf-services") {
    return {
      htext: "Web Application Firewall Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "web-security-solutions") {
    return {
      htext: "Web security solution",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "network-security") {
    return {
      htext: "Network security solution",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "sase-solutions") {
    return {
      htext: "Secure access services edge Solutions",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "backup-disaster-recovery") {
    return {
      htext: "Backup and Disaster Recovery Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "iaas") {
    return {
      htext: "Iaas security solution",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "micro-segmentation") {
    return {
      htext: "Micro-segmentation Security",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "ssd-lifecycle") {
    return {
      htext: "Secure Software Development Life Cycle (SSDLC)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "ciso") {
    return {
      htext: "CIOS as a services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "security-maturity-assessment") {
    return {
      htext: "Security Maturity assessment",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "process-policy-audits-reviews") {
    return {
      htext: "Process & Policy Audits and Reviews",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "governance-risk-compliance") {
    return {
      htext: "Governance, Risk, and Compliance (GRC) Services",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "senior-management-assurance") {
    return {
      htext: "Senior management assurance",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "cs-strategy-roadmap") {
    return {
      htext: "Cyber Security Strategy and Roadmap",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "compliance-services") {
    return {
      htext:
        "ISO 27001, PCI DSS & GDPR IMP (Cybersecurity Compliance Services)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "soc2") {
    return {
      htext: "SOC2 Type II Assessment Services (specify category)",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "hipaa-compliance") {
    return {
      htext: "Hipaa compliance",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else if (slug === "nist-compliance") {
    return {
      htext: "NIST compliance",
      metaDescription: "",
      cta: '<a href="" >   </a> ',
      ptext: "",
    };
  } else {
    return {
      htext: "Service Not Found",
      ptext:
        "This PlutoSec service is currently unavailable or does not exist.",
    };
  }
}

/* ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * ------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = (await params).slug;
  const { htext, metaDescription } = getContentBySlug(slug);

  return {
    title: `${htext} | PlutoSec`,
    description: metaDescription,
    icons: { icon: "/plutofav.png" },
  };
}

/* ---------------------------------------------------------------
 * Default-exported page component
 * ------------------------------------------------------------- */
export default async function Page({ params }) {
  const slug = (await params).slug;
  const { htext, ptext, cta } = getContentBySlug(slug);

  return (
    <div className={styles.Servicearea}>
      <div className={styles.bgSection}>
        <div className={styles.bgSection1}>
          <Breadcrumb />
        </div>
      </div>

      <h1 className={styles.htext}>{htext}</h1>
      <p className={styles.ptext}>{ptext}</p>
      <p className={styles.ptext} dangerouslySetInnerHTML={{ __html: cta }}></p>

      <ServiceDetail slug={slug} />
      <Testimonial />
      <Blogs />
    </div>
  );
}
