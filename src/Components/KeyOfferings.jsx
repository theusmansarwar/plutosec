"use client";
import React, { useState } from "react";
import "./KeyOfferings.css";

const KeyOfferings = ({ slug }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const offerings1 = [
    {
      title: "External Penetration",
      items: [
        "We scan external systems for vulnerabilities.",
        "We test firewalls and network configurations.",
        "We evaluate publicly available systems like websites.",
        "We check server configurations for errors.",
        "We inspect DNS settings and SSL/TLS protocols.",
        "We test the security of web applications.",
        "We assess network protocols for unauthorized access.",
        "We uncover flaws in outdated software.",
        "We deliver detailed reports on findings.",
        "We provide actionable steps to fix vulnerabilities.",
      ],
    },
    {
      title: "Internal Penetration",
      items: [
        "We test devices inside your network.",
        "We simulate attacks from internal sources.",
        "We assess risks from insider threats.",
        "We check weak user passwords.",
        "We identify open ports and exposed services.",
        "We test shared folders and drives.",
        "We evaluate access to critical files.",
        "We report insecure internal communication.",
        "We review your local network structure.",
        "We provide fixes to close internal gaps.",
      ],
    },
    {
      title: "Web Application Security",
      items: [
        "We test login pages and user input areas.",
        "We check for SQL injection risks.",
        "We identify cross-site scripting flaws.",
        "We examine access control issues.",
        "We test broken authentication points.",
        "We check for unsafe file uploads.",
        "We scan plugins and extensions for bugs.",
        "We simulate attacks on APIs.",
        "We analyze session management flaws.",
        "We give steps to secure your app.",
      ],
    },
    {
      title: "Social Engineering",
      items: [
        "We attempt phishing attacks on users.",
        "We test staff response to suspicious emails.",
        "We check how users handle unknown calls.",
        "We assess the risk of leaked credentials.",
        "We test access to secured areas.",
        "We track the success of impersonation attempts.",
        "We evaluate user awareness of threats.",
        "We measure policy enforcement on security.",
        "We report how users expose systems.",
        "We share ways to improve user training.",
      ],
    },
  ];

  const offerings2 = [
    {
      title: "ISO 27001 Compliance",
      items: [
        "We assess your existing security policies and practices.",
        "We identify gaps in your information security management system.",
        "We define the scope for ISO 27001 implementation.",
        "We help you create risk assessments and treatment plans.",
        "We assist in drafting mandatory ISO documents.",
        "We guide you in implementing security controls.",
        "We review your business continuity procedures.",
        "We prepare your team for internal audits.",
        "We coordinate with certification bodies.",
        "We help you maintain compliance after certification.",
      ],
    },
    {
      title: "GDPR Readiness",
      items: [
        "We analyze how your business handles personal data.",
        "We identify non-compliant data processing practices.",
        "We help you build privacy policies and notices.",
        "We set up procedures for data subject rights requests.",
        "We assist in maintaining lawful consent practices.",
        "We implement data breach notification processes.",
        "We help you manage third-party data processors.",
        "We guide you on secure data storage methods.",
        "We provide training to staff on GDPR basics.",
        "We ensure continuous alignment with GDPR rules.",
      ],
    },
    {
      title: "SOC 2 Preparation",
      items: [
        "We assess your current controls against the SOC 2 Trust Principles.",
        "We help define the scope of your SOC 2 audit.",
        "We create a gap analysis to highlight weak areas.",
        "We assist in drafting internal policies and controls.",
        "We guide you in implementing the required security measures.",
        "We review monitoring and incident response procedures.",
        "We help you maintain documentation of practices.",
        "We conduct readiness assessments before audits.",
        "We support communication with auditors.",
        "We ensure your system stays SOC 2 ready.",
      ],
    },
    {
      title: "HIPAA Compliance",
      items: [
        "We evaluate your handling of protected health information.",
        "We review your HIPAA security and privacy policies.",
        "We help you identify gaps in administrative safeguards.",
        "We support technical safeguard implementation.",
        "We assess physical access and data protection.",
        "We train staff on HIPAA rules and duties.",
        "We build risk management and audit plans.",
        "We assist in breach notification procedures.",
        "We review third-party agreements for compliance.",
        "We help you stay HIPAA compliant at all times.",
      ],
    },
  ];
  const offerings3 = [
    {
      title: "Threat Detection",
      items: [
        "We deploy advanced tools to detect anomalies in your network.",
        "We continuously monitor all endpoints and data sources.",
        "We analyze traffic for potential signs of malicious behavior.",
        "We use AI-powered detection to spot hidden threats.",
        "We integrate with existing security systems to enhance detection.",
        "We alert you in real-time on emerging threats.",
        "We correlate data across your IT infrastructure.",
        "We assess vulnerabilities in critical applications.",
        "We ensure that all detection systems are up to date.",
        "We provide detailed reports of detected threats.",
      ],
    },
    {
      title: "Incident Response",
      items: [
        "We assist in developing an incident response plan.",
        "We respond quickly to security breaches and attacks.",
        "We contain threats before they spread within your network.",
        "We provide real-time remediation steps during incidents.",
        "We minimize downtime and operational disruption.",
        "We help recover data and restore systems after an attack.",
        "We perform post-incident analysis to identify root causes.",
        "We ensure proper reporting for compliance purposes.",
        "We recommend changes to improve future incident responses.",
        "We offer ongoing support and advice during recovery.",
      ],
    },
    {
      title: "Threat Hunting",
      items: [
        "We proactively search for hidden threats in your network.",
        "We identify vulnerabilities before attackers can exploit them.",
        "We use advanced techniques to find unknown threats.",
        "We monitor past incidents to spot emerging patterns.",
        "We analyze data from all sources to uncover suspicious activities.",
        "We conduct an in-depth investigation of detected anomalies.",
        "We ensure continuous improvement in threat hunting techniques.",
        "We refine detection algorithms based on findings.",
        "We work with your team to improve security awareness.",
        "We provide detailed findings and actionable steps.",
      ],
    },
    {
      title: "Continuous Monitoring",
      items: [
        "We ensure 24/7 monitoring of your IT infrastructure.",
        "We track endpoints, networks, and applications in real-time.",
        "We detect and alert on any security incidents promptly.",
        "We integrate security information and event management (SIEM).",
        "We analyze system logs for potential threats.",
        "We monitor user behavior to detect insider threats.",
        "We use automated systems to scan for vulnerabilities.",
        "We ensure up-to-date security threat intelligence feeds.",
        "We provide regular updates and health checks.",
        "We help your team maintain secure network environments.",
      ],
    },
  ];

  const offerings4 = [
    {
      title: "Red Teaming",
      items: [
        "We perform realistic penetration testing on your systems.",
        "We identify security gaps that could be exploited by attackers.",
        "We assess the effectiveness of your security measures under stress.",
        "We simulate advanced persistent threats (APT) to test long-term resilience.",
        "We perform social engineering attacks to test human vulnerabilities.",
        "We analyze and exploit network vulnerabilities to gain unauthorized access.",
        "We simulate insider threats to evaluate internal weaknesses.",
        "We test physical security measures to identify gaps.",
        "We provide comprehensive reports with attack paths and suggestions.",
        "We guide you in fixing the identified vulnerabilities.",
      ],
    },
    {
      title: "Blue Teaming",
      items: [
        "We monitor and defend your network 24/7.",
        "We analyze incoming threats and respond immediately.",
        "We create detection and response protocols for your team.",
        "We enhance your incident response capabilities.",
        "We improve your network’s overall security posture.",
        "We implement intrusion detection and prevention systems.",
        "We conduct vulnerability assessments to identify risks.",
        "We help strengthen endpoint protection measures.",
        "We assess and improve your security awareness programs.",
        "We provide real-time reports and actionable insights on security gaps.",
      ],
    },
    {
      title: "Threat Simulation",
      items: [
        "We simulate insider threats to assess internal security measures.",
        "We evaluate the risks posed by privileged users.",
        "We test access control policies for sensitive data.",
        "We identify areas where internal threats could exploit vulnerabilities.",
        "We assess the security of internal networks and systems.",
        "We evaluate user access privileges and their impact on security.",
        "We test if insiders can exfiltrate sensitive data undetected.",
        "We simulate malicious activity by employees or contractors.",
        "We provide insights on minimizing insider threat risks.",
        "We suggest improvements to your internal security policies.",
      ],
    },
    {
      title: "Incident Response & Recovery",
      items: [
        "We conduct a thorough investigation of the security breach.",
        "We provide a detailed incident report with timelines.",
        "We analyze the causes that led to the incident.",
        "We identify any gaps in your security infrastructure.",
        "We review your response actions and their effectiveness.",
        "We offer suggestions for improving future responses.",
        "We analyze the attack methods used by intruders.",
        "We recommend long-term solutions to prevent similar incidents.",
        "We help develop stronger security policies based on findings.",
        "We provide a comprehensive root cause analysis.",
      ],
    },
  ];

  const offerings5 = [
    {
      title: "User Access Control",
      items: [
        "We create role-based access policies.",
        "We prevent access to unauthorized resources.",
        "We remove unused or risky accounts.",
        "We monitor login activity for suspicious behavior.",
        "We manage access to apps, servers, and databases.",
        "We assign permissions based on job roles.",
        "We enforce least-privilege access rules.",
        "We automate access requests and approvals.",
        "We track account usage in real time.",
        "We provide reports on all user activities.",
      ],
    },
    {
      title: "Multi-Factor Authentication",
      items: [
        "We implement strong two-factor methods.",
        "We use OTP, biometrics, or device-based tokens.",
        "We enforce MFA across all sensitive apps.",
        "We support mobile-based authentication.",
        "We detect and block suspicious login attempts.",
        "We apply context-based access rules.",
        "We alert on unusual login behaviors.",
        "We integrate MFA into cloud and on-prem systems.",
        "We help reduce password-related risks.",
        "We simplify user login without losing security.",
      ],
    },
    {
      title: "Privileged Access Management",
      items: [
        "We isolate admin accounts from normal users.",
        "We secure access to servers, databases, and controls.",
        "We track privileged user activity in real time.",
        "We control what admins can see or do.",
        "We rotate credentials automatically.",
        "We limit the scope of privileged sessions.",
        "We record and audit all sensitive operations.",
        "We set time-based or task-based access.",
        "We block access from risky devices or locations.",
        "We review access rights regularly.",
      ],
    },
    {
      title: "Identity Governance",
      items: [
        "We define clear identity lifecycle policies.",
        "We automate onboarding and offboarding.",
        "We ensure compliance with data access laws.",
        "We detect and fix policy violations.",
        "We review and certify user access regularly.",
        "We clean up orphan or ghost accounts.",
        "We enforce access rules based on risk level.",
        "We create reports for audits and regulators.",
        "We improve transparency in access control.",
        "We align identity policies with business goals.",
      ],
    },
  ];

  const offerings6 = [
    {
      title: "Secure CI/CD Pipeline",
      items: [
        "We integrate security tools into your build process.",
        "We block unsafe code from moving forward.",
        "We scan each commit and build in real time.",
        "We automate security checks for faster releases.",
        "We add secret management into the pipeline.",
        "We test app behavior during early stages.",
        "We enable rollback on failed security tests.",
        "We run static and dynamic analysis in each phase.",
        "We enforce signed code and artifact validation.",
        "We protect pipelines from tampering and misuse.",
      ],
    },
    {
      title: "Code and Dependency Scanning",
      items: [
        "We scan source code for logic flaws.",
        "We detect hard coded secrets and tokens.",
        "We find outdated libraries with known exploits.",
        "We remove insecure third-party packages.",
        "We run vulnerability scans in every build.",
        "We flag unsafe code patterns.",
        "We check language-specific risks.",
        "We offer secure alternatives to risky libraries.",
        "We help patch issues before deployment.",
        "We provide reports on code quality and risk.",
      ],
    },
    {
      title: "Infrastructure as Code (IaC) Security",
      items: [
        "We review IaC templates for misconfigurations.",
        "We stop public exposure of sensitive resources.",
        "We scan Terraform, CloudFormation, and ARM scripts.",
        "We detect open ports and loose access settings.",
        "We block insecure default settings in templates.",
        "We apply least-privilege rules in cloud policies.",
        "We monitor changes to IaC files in version control.",
        "We enforce guardrails before deployment.",
        "We validate each commit against security policies.",
        "We log every change for auditing.",
      ],
    },
    {
      title: "Continuous Monitoring and Compliance",
      items: [
        "We monitor builds and pipelines 24/7.",
        "We detect drift in security settings.",
        "We log all activity for auditing.",
        "We alert on policy violations in real time.",
        "We track compliance with standards like ISO and SOC2.",
        "We generate audit-ready security reports.",
        "We fix gaps in automation and coverage.",
        "We create policies for secure coding.",
        "We align tools with your compliance needs.",
        "We help reduce time during audits and reviews.",
      ],
    },
  ];

  const offerings7 = [
    {
      title: "24/7 Threat Monitoring",
      items: [
        "We watch your environment all day and night.",
        "We detect threats across all systems.",
        "We monitor networks, devices, and cloud.",
        "We respond to alerts in real time.",
        "We block malicious traffic before it reaches you.",
        "We detect DDoS, malware, and ransomware.",
        "We track unusual user behavior.",
        "We use threat intelligence to anticipate risks.",
        "We integrate alerts into your workflow.",
        "We provide real-time reports of security status.",
      ],
    },
    {
      title: "Vulnerability Assessment",
      items: [
        "We scan all assets for known vulnerabilities.",
        "We assess applications, networks, and devices.",
        "We check your system configurations for weaknesses.",
        "We prioritize vulnerabilities based on impact.",
        "We run automated and manual testing.",
        "We check for compliance with security standards.",
        "We provide actionable steps to fix issues.",
        "We track all assessments in a central dashboard.",
        "We offer remediation advice and best practices.",
        "We schedule regular vulnerability scans.",
      ],
    },
    {
      title: "Penetration Testing",
      items: [
        "We perform in-depth penetration tests on systems.",
        "We simulate attacks to identify weaknesses.",
        "We conduct tests on networks, apps, and hardware.",
        "We analyze results and provide remediation advice.",
        "We test both external and internal threats.",
        "We focus on high-risk assets and endpoints.",
        "We identify attack paths to exploit vulnerabilities.",
        "We help your team fix the issues we uncover.",
        "We run red and blue team exercises.",
        "We deliver detailed reports on attack simulations.",
      ],
    },
    {
      title: "Security Awareness Training",
      items: [
        "We educate employees on cybersecurity best practices.",
        "We offer training sessions for various roles.",
        "We conduct phishing simulations to raise awareness.",
        "We test security knowledge with quizzes and tests.",
        "We monitor the effectiveness of training.",
        "We provide ongoing education on emerging threats.",
        "We help prevent insider threats and human errors.",
        "We enhance response capabilities during incidents.",
        "We assess employee compliance with security protocols.",
        "We offer customized training for your organization's needs.",
      ],
    },
  ];
  const offerings8 = [
    {
      title: "Security Incident Management",
      items: [
        "We define security incident protocols for quick responses.",
        "We help prioritize incidents based on severity.",
        "We provide real-time incident detection and containment.",
        "We facilitate investigation and analysis of incidents.",
        "We offer remediation and recovery steps for affected systems.",
        "We support compliance reporting for security incidents.",
        "We assist with post-incident analysis to prevent future breaches.",
        "We create actionable incident reports and timelines.",
        "We ensure proper escalation of critical incidents.",
        "We collaborate with your team to improve incident response plans.",
      ],
    },
    {
      title: "Advanced Threat Protection",
      items: [
        "We deploy tools to detect sophisticated and zero-day attacks.",
        "We continuously monitor your infrastructure for advanced threats.",
        "We use AI and machine learning to identify hidden threats.",
        "We defend against advanced persistent threats (APT).",
        "We integrate threat intelligence feeds to enhance detection.",
        "We provide advanced firewall and endpoint protection.",
        "We continuously update threat signatures and detection rules.",
        "We perform deep packet inspection for malware detection.",
        "We block or quarantine suspicious files and activities.",
        "We offer detailed forensic analysis of any detected threats.",
      ],
    },
    {
      title: "Endpoint Detection and Response (EDR)",
      items: [
        "We install endpoint agents that detect suspicious activity.",
        "We continuously monitor endpoints for signs of compromise.",
        "We provide automated response actions for incidents.",
        "We detect malicious behaviors like fileless attacks.",
        "We conduct regular vulnerability scans on endpoints.",
        "We provide real-time alerts on endpoint risks.",
        "We integrate with SIEM for centralized monitoring.",
        "We offer detailed incident response tools for endpoint threats.",
        "We conduct root cause analysis for endpoint breaches.",
        "We ensure regular updates to endpoint security protocols.",
      ],
    },
    {
      title: "Cloud Security",
      items: [
        "We secure cloud infrastructures like AWS, Azure, and GCP.",
        "We monitor cloud environments for misconfigurations.",
        "We assess cloud security policies and permissions.",
        "We implement security measures for cloud storage and databases.",
        "We perform cloud vulnerability assessments.",
        "We ensure secure cloud identity and access management.",
        "We provide secure access to cloud-based applications.",
        "We deploy cloud firewalls and intrusion prevention systems.",
        "We secure serverless and containerized applications.",
        "We ensure compliance with cloud security standards.",
      ],
    },
  ];

  const offerings9 = [
    {
      title: "Data Loss Prevention (DLP)",
      items: [
        "We monitor and prevent unauthorized data access or transfer.",
        "We classify sensitive data to ensure it's protected.",
        "We deploy encryption and tokenization for data security.",
        "We enforce policies that prevent data leakage or theft.",
        "We track all data movement and monitor for unusual activities.",
        "We block access to sensitive data based on user roles.",
        "We audit data access and use to identify potential risks.",
        "We prevent data loss across both on-prem and cloud environments.",
        "We ensure compliance with regulations like GDPR and CCPA.",
        "We provide real-time alerts for data protection violations.",
      ],
    },
    {
      title: "Network Security",
      items: [
        "We deploy firewalls, VPNs, and IDS/IPS for network protection.",
        "We monitor network traffic for suspicious activity.",
        "We perform regular vulnerability assessments of network devices.",
        "We apply segmentation to reduce the impact of network breaches.",
        "We secure Wi-Fi networks and wireless communications.",
        "We detect and mitigate DDoS attacks in real-time.",
        "We integrate next-gen network security tools to enhance defenses.",
        "We ensure secure communications through encryption protocols.",
        "We continuously patch and update network devices.",
        "We provide detailed reports on network security incidents.",
      ],
    },
    {
      title: "Security Audits and Compliance",
      items: [
        "We conduct thorough security audits to evaluate your environment.",
        "We assess your compliance with industry regulations like HIPAA, PCI-DSS, etc.",
        "We identify gaps in your security controls and suggest improvements.",
        "We provide detailed audit reports and remediation guidance.",
        "We ensure compliance with data protection laws (GDPR, CCPA).",
        "We help prepare for third-party audits and assessments.",
        "We assist with achieving certification for compliance standards.",
        "We review your security posture and recommend improvements.",
        "We provide a continuous audit trail for all security events.",
        "We help implement necessary controls to meet regulatory standards.",
      ],
    },
    {
      title: "Security Operations Center (SOC)",
      items: [
        "We operate 24/7 Security Operations Center (SOC) services.",
        "We monitor and respond to security incidents around the clock.",
        "We provide threat intelligence feeds and real-time analysis.",
        "We perform proactive hunting for advanced threats.",
        "We integrate your security tools into a centralized dashboard.",
        "We offer incident management and incident response planning.",
        "We provide customized alerts and reports for critical events.",
        "We help identify and mitigate risks before they become issues.",
        "We provide regular reports and KPIs for your security health.",
        "We assist with improving your internal security processes.",
      ],
    },
  ];


  let offerings = [];
  if (slug === "penetration-testing") {
    offerings = offerings1;
  } else if (slug === "compliance-consulting") {
    offerings = offerings2;
  } else if (slug === "extended-detection") {
    offerings = offerings3;
  } else if (slug === "red-teaming-blue-teaming") {
    offerings = offerings4;
  } else if (slug === "identity-and-access-management") {
    offerings = offerings5;
  } else if (slug === "devsecops") {
    offerings = offerings6;
  } else if (slug === "managed-security") {
    offerings = offerings7;
  } else if (slug === "cloud-security-solutions") {
    offerings = offerings8;
  } else if (slug === "vulnerability-assessment") {
    offerings = offerings9;
  } else {
    offerings = [];
  }
  

  const { items = [], title = "" } = offerings[selectedTab] || {};

  return (
    <div className="offerings-container">
      {offerings.length > 0 ? (
        <>
          <div className="tab-container">
            {offerings.map((offering, index) => (
              <div
                key={index}
                className={`tab ${selectedTab === index ? "active" : ""}`}
                onClick={() => setSelectedTab(index)}
              >
                {offering.title}
              </div>
            ))}
          </div>

          <div
            className={`offerings-content ${
              selectedTab === 0 ? "first-tab-active" : ""
            }`}
          >
            <div className="left">
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="right"><div className="bg-image"></div>
              <div className="overlay"></div>
            </div>
          </div>
        </>
      ) : (
        <p>No offerings available for this service. slug: {slug}</p>
      )}
    </div>
  );
};

export default KeyOfferings;
