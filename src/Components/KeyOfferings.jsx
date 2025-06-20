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
  const offerings10 = [
    {
      title: "Cyber Risk Assessment",
      items: [
        "We evaluate threats to your digital infrastructure.",
        "We identify weak points in your network and software.",
        "We review past incidents and current exposures.",
        "We score risks based on business impact.",
        "We assess your third-party vendor risks.",
        "We analyze user behavior and insider threats.",
        "We track risk trends and future threats.",
        "We provide a full risk report with priorities.",
        "We help you build a roadmap to reduce risk.",
        "We support security budget planning.",
      ],
    },
    {
      title: "Security Policy Development",
      items: [
        "We create clear security guidelines for your team.",
        "We align policies with global standards (NIST, ISO).",
        "We design rules for access control and device use.",
        "We build password and authentication policies.",
        "We draft safe email and web usage practices.",
        "We write disaster recovery and backup policies.",
        "We develop cloud security policies.",
        "We guide BYOD and remote work policies.",
        "We review existing policies for gaps.",
        "We help with policy rollout and training.",
      ],
    },
    {
      title: "Incident Response Planning",
      items: [
        "We build a complete incident response plan.",
        "We create detection and response workflows.",
        "We define roles and responsibilities.",
        "We prepare communication templates for emergencies.",
        "We simulate cyberattacks to test your response.",
        "We guide on isolating and analyzing incidents.",
        "We create playbooks for ransomware and phishing.",
        "We link the response plan to your backup systems.",
        "We review recovery time and system integrity.",
        "We train staff on how to react during attacks.",
      ],
    },
    {
      title: "Compliance and Governance Consulting",
      items: [
        "We map your systems to the required compliance standards.",
        "We help meet ISO 27001, SOC 2, HIPAA, and PCI-DSS.",
        "We guide GDPR and local data protection laws.",
        "We document controls and processes for audits.",
        "We perform gap assessments for certification.",
        "We support internal and third-party audits.",
        "We advise on data retention and privacy policies.",
        "We assess roles and the separation of duties.",
        "We ensure continuous improvement in compliance.",
        "We prepare risk registers and control logs.",
      ],
    },
  ];
  const offerings11 = [
  {
    title: "External Network Testing",
    items: [
      "We scan public-facing systems for exploitable weaknesses.",
      "We test all IP ranges exposed to the internet.",
      "We attempt to bypass layered perimeter defenses.",
      "We evaluate DNS, SSL/TLS, and other protocol misconfigurations.",
      "We test servers, routers, and edge network devices.",
      "We check default user accounts and weak credentials.",
      "We uncover hidden vulnerabilities in remote access tools.",
      "We verify patch levels and outdated software services.",
      "We analyze potential breach paths from an attacker’s perspective.",
      "We deliver prioritized and actionable remediation steps.",
    ],
  },
  {
    title: "Internal Network Testing",
    items: [
      "We simulate a real insider threat attack scenario.",
      "We scan all internal IP ranges and active hosts.",
      "We assess workstations, file servers, and network gear.",
      "We test privilege escalation paths across user roles.",
      "We inspect VLAN segmentation and network access controls.",
      "We check shared folders and sensitive data file access.",
      "We review weak credentials and potential lateral moves.",
      "We monitor internal traffic for signs of data leaks.",
      "We rate the real impact of discovered security flaws.",
      "We provide clear and practical mitigation actions.",
    ],
  },
  {
    title: "Wireless and VPN Testing",
    items: [
      "We audit Wi‑Fi network security and encryption standards.",
      "We test wireless access points for rogue or hidden devices.",
      "We evaluate VPN configuration settings and user access rights.",
      "We check authentication strength on remote VPN networks.",
      "We attempt man‑in‑the‑middle attacks on Wi‑Fi and VPN traffic.",
      "We test both client and server VPN configurations thoroughly.",
      "We verify certificate usage, trust settings, and expiration.",
      "We assess split‑tunnel usage and potential data leakage risks.",
      "We test guest network isolation and security enforcement.",
      "We provide step‑by‑step technical remediation advice.",
    ],
  },
  {
    title: "Firewall and IDS/IPS Review",
    items: [
      "We audit firewall rule sets and access control policies.",
      "We check all open ports and rule-based exceptions.",
      "We test IDS/IPS detection and intrusion prevention capabilities.",
      "We simulate known attacks to trigger security alerts.",
      "We assess logging configuration and alert response thresholds.",
      "We review fail‑open states and high‑availability setups.",
      "We test redundancy features and fallback security controls.",
      "We examine management access interfaces and authentication methods.",
      "We analyze rule efficiency and unnecessary cleanup needs.",
      "We recommend strong and optimal security hardening strategies.",
    ],
  },
];

const offerings12 = [
  {
    title: "Injection and Validation Testing",
    items: [
      "We test for SQL, OS, and command injection issues.",
      "We check user input validation across all forms.",
      "We assess error handling for information leakage.",
      "We detect blind injection risks in backend logic.",
      "We verify database configurations and access controls.",
      "We identify injection points in URL and parameters.",
      "We inspect sanitization on file upload fields.",
      "We evaluate logic flaws that allow bypasses.",
      "We check API calls for unsafe data handling.",
      "We provide validated recommendations and mitigation steps.",
    ],
  },
  {
    title: "Authentication and Session Management",
    items: [
      "We test login mechanisms and credential handling.",
      "We assess session token creation and expiration.",
      "We check multi-factor authentication setup.",
      "We verify password reset and recovery flows.",
      "We inspect access control logic and roles.",
      "We test account lockout and audit logging.",
      "We check for weak or default credentials.",
      "We evaluate session hijacking and fixation risks.",
      "We assess cookie security flags.",
      "We offer clear fixes for credential issues.",
    ],
  },
  {
    title: "Client-Side and Input Handling",
    items: [
      "We tested DOM and reflected cross-site scripting points.",
      "We check stored XSS in user profiles and comments.",
      "We evaluate CSRF protection where needed.",
      "We inspect JavaScript logic for unsafe behavior.",
      "We test hidden form fields and input tampering.",
      "We verify secure use of HTML5 APIs.",
      "We inspect dependency libraries for vulnerabilities.",
      "We check content security policy enforcement.",
      "We test browser storage and local/session data usage.",
      "We provide recommendations to secure client code.",
    ],
  },
  {
    title: "API and Integration Testing",
    items: [
      "We test API endpoints for injection and logic flaws.",
      "We evaluate authorization and endpoint access controls.",
      "We check input validation on all API parameters.",
      "We test rate limiting and throughput protection.",
      "We inspect error messages for info disclosure.",
      "We evaluate third-party integrations and embedded code.",
      "We check insecure direct object reference issues.",
      "We test JSON/XML parsing and schema validation.",
      "We monitor API response consistency and security.",
      "We deliver prioritized API hardening recommendations.",
    ],
  },
];
const offerings13 = [
  {
    title: "Static Code and Logic Analysis",
    items: [
      "We review source files line by line for insecure code usage.",
      "We check unsafe memory handling and sensitive data exposure risks.",
      "We identify risky patterns such as hard coded credentials and secrets.",
      "We inspect flawed logic flows that enable access bypass or data leaks.",
      "We test custom business rules for abuse potential and manipulation.",
      "We detect race conditions and unsafe concurrent file operations.",
      "We highlight outdated libraries and insecure open-source dependencies.",
      "We inspect all error-handling logic and debug code thoroughly.",
      "We assess integration safety with third-party services and SDKs.",
      "We provide exact code paths and step-by-step remediation guidance.",
    ],
  },
  {
    title: "Authentication and Session Review",
    items: [
      "We check password hashing methods, token storage, and login security.",
      "We verify proper session timeout settings and renewal logic handling.",
      "We inspect password reset flows and MFA implementation for gaps.",
      "We identify token generation flaws using weak or static algorithms.",
      "We test the logout functionality and proper session termination behavior.",
      "We find unused credentials or leftover developer test accounts.",
      "We review backdoor access and hidden authentication logic in code.",
      "We ensure proper role verification and permission enforcement checks.",
      "We test for privilege escalation logic flaws in user session changes.",
      "We suggest secure handling techniques for all identity mechanisms.",
    ],
  },
  {
    title: "Input and Output Validation",
    items: [
      "We locate all unsanitized inputs and missing input validation filters.",
      "We check the rendering logic for unsafe user-generated data handling.",
      "We test boundary checks for trusted and untrusted input sources.",
      "We review file uploads, query parameters, and hidden input fields.",
      "We inspect dynamic rendering logic for injection and XSS issues.",
      "We validate input checks across all frontend and backend modules.",
      "We test server output for unsafe data reflection vulnerabilities.",
      "We check encoding and escaping gaps in rendered responses.",
      "We examine logic for insecure JSON and XML parsing workflows.",
      "We provide consistent input validation strategies and fixes.",
    ],
  },
  {
    title: "Cryptography and Error Handling",
    items: [
      "We review encryption logic across the full application codebase.",
      "We check weak or broken algorithms like MD5 and SHA1 usage.",
      "We test randomness and cryptographic key generation functions.",
      "We examine key and secret storage methods for secure handling.",
      "We verify TLS use and secure transport enforcement in code.",
      "We inspect verbose error messages that leak sensitive data.",
      "We check exception handlers for unhandled errors or exposure risks.",
      "We test logging for overexposed data, stack traces, or debug info.",
      "We verify safe log handling and log storage practices in code.",
      "We recommend updated cryptographic libraries and usage patterns.",
    ],
  },
];
const offerings14 = [
  {
    title: "iOS and Android App Testing",
    items: [
      "We test app builds on the latest Android and iOS versions.",
      "We check input validation and mobile interface issues.",
      "We inspect app permissions and access controls.",
      "We assess insecure data handling in sensitive operations.",
      "We evaluate background tasks for data leaks.",
      "We inspect logging to detect private data exposure.",
      "We scan for weak crypto and outdated libraries.",
      "We test local storage methods for security gaps.",
      "We evaluate third‑party SDKs and embedded services.",
      "We provide step‑by‑step remediation guidance.",
    ],
  },
  {
    title: "API and Backend Testing",
    items: [
      "We test all mobile‑linked APIs for injection flaws.",
      "We verify authentication and session token handling.",
      "We check API responses for sensitive data leaks.",
      "We assess endpoint access control and authorization issues.",
      "We test token usage patterns and expiration rules.",
      "We examine backend rate limiting and flood protection.",
      "We inspect error handling for information leakage clues.",
      "We review SSL/TLS configuration across endpoints.",
      "We evaluate business logic in API calls.",
      "We deliver practical backend hardening steps.",
    ],
  },
  {
    title: "Data Storage and Privacy Review",
    items: [
      "We analyze how apps store personal or sensitive data.",
      "We test local files, databases, and cache security.",
      "We inspect encryption strength for stored data.",
      "We look for hard coded secrets in code.",
      "We assess mobile app compliance with privacy laws.",
      "We evaluate third‑party tracking and data use.",
      "We test access to contacts, photos, and location.",
      "We review user consent and permission prompts.",
      "We inspect the clipboard and background access risks.",
      "We provide clear fixes to protect user privacy.",
    ],
  },
  {
    title: "Reverse‑Engineering and Tampering Checks",
    items: [
      "We test how easily the app can be decompiled.",
      "We check the presence of debug symbols or logs.",
      "We attempt function misuse functions in premium areas.",
      "We examine code paths for modification risks.",
      "We assess protections like obfuscation and root checks.",
      "We test runtime behavior against hook‑based attacks.",
      "We analyze binary protection techniques.",
      "We verify that critical logic remains server‑side.",
      "We inspect anti‑tampering mechanisms.",
      "We offer recommendations to reduce reverse‑engineering risks.",
    ],
  },
];
const offerings15 = [
  {
    title: "Phishing Simulation Testing",
    items: [
      "We design customized phishing campaigns for your staff mailboxes.",
      "We simulate spear phishing using known contacts and job roles.",
      "We test how users respond to email links and attachments.",
      "We track clicks, logins, and any data entries in real-time.",
      "We assess how many report the phishing attempt correctly.",
      "We test multiple lures including fake invoices or security alerts.",
      "We analyze responses across departments and access levels.",
      "We track whether users escalate the incident internally.",
      "We compare results against known phishing benchmarks.",
      "We provide clear training suggestions based on behavior.",
    ],
  },
  {
    title: "Pretext and Impersonation Testing",
    items: [
      "We perform phone-based impersonation of internal staff or vendors.",
      "We attempt to gather passwords or internal system details.",
      "We test front desk staff with delivery or visitor pretexts.",
      "We simulate calls from IT or finance for sensitive info.",
      "We evaluate remote support scams targeting end users.",
      "We test receptionists and call center social engineering resistance.",
      "We record how employees respond to authority-based pressure.",
      "We assess willingness to bypass verification under urgency.",
      "We rate the risk of real-world impersonation success.",
      "We recommend changes in response protocols and training.",
    ],
  },
  {
    title: "USB Drop and Physical Baiting",
    items: [
      "We plant labeled USB drives in common areas to test curiosity.",
      "We use staged office documents and filenames as bait.",
      "We track how many devices get plugged into work systems.",
      "We monitor if antivirus or EDR tools flag the files.",
      "We test if USB access is blocked on endpoint devices.",
      "We evaluate physical access points around secure zones.",
      "We test staff response to unattended devices or notes.",
      "We observe entry attempts using tailgating and props.",
      "We assess building security awareness for social tactics.",
      "We document physical and digital exposure from bait success.",
    ],
  },
  {
    title: "Employee Awareness Assessment",
    items: [
      "We evaluate baseline knowledge of social engineering risks.",
      "We review employee responses to past phishing or scam attempts.",
      "We survey understanding of reporting and escalation processes.",
      "We assess how well policies are understood and applied.",
      "We test user decisions using role-based simulation quizzes.",
      "We analyze awareness gaps across departments or teams.",
      "We observe repeated risky behaviors from test scenarios.",
      "We measure progress after awareness training if applicable.",
      "We provide detailed feedback by role and risk category.",
      "We help shape future training based on real behaviors.",
    ],
  },
];

const offerings16 = [
  {
    title: "Wi‑Fi Encryption Testing",
    items: [
      "We analyze WPA2, WPA3, and outdated encryption methods.",
      "We check key exchange processes and handshake leaks.",
      "We verify encryption strength against brute‑force attempts.",
      "We assess key rotation and session confidentiality.",
      "We look for downgrade attacks and weak protocol fallback.",
      "We test PSK security on shared or hidden networks.",
      "We evaluate EAP configurations and trust chains.",
      "We inspect encryption coverage across multiple SSIDs.",
      "We simulate attack scenarios targeting weak encryption points.",
      "We give clear recommendations to improve Wi‑Fi encryption.",
    ],
  },
  {
    title: "Rogue Access Point Detection",
    items: [
      "We scan your environment for unauthorized access points.",
      "We compare SSIDs and MAC addresses against known assets.",
      "We detect Evil Twin and spoofed hotspot setups.",
      "We identify cloned networks inside corporate areas.",
      "We test device behavior when switching to rogue signals.",
      "We monitor beacon frames for hidden rogue devices.",
      "We check signal strength zones for false coverage.",
      "We simulate rogue AP attacks and capture attempts.",
      "We assess Wi‑Fi client trust behaviors.",
      "We provide a full analysis with detection response steps.",
    ],
  },
  {
    title: "Guest Network Isolation",
    items: [
      "We test guest networks for access to internal resources.",
      "We check the firewall and routing rules across VLANs.",
      "We verify segmentation between guest and employee zones.",
      "We attempt lateral movement from guest SSIDs.",
      "We scan shared printers and storage for access leaks.",
      "We inspect DHCP and DNS setups on guest networks.",
      "We evaluate guest portal behavior under load.",
      "We test client isolation on crowded access points.",
      "We monitor guest devices for unsafe broadcasts.",
      "We suggest fixes to enforce strong network isolation.",
    ],
  },
  {
    title: "Wireless Authentication Review",
    items: [
      "We review enterprise Wi‑Fi authentication protocols in use.",
      "We test EAP types like PEAP, TLS, and TTLS.",
      "We assess certificate handling and validation settings.",
      "We check captive portals and access timers.",
      "We inspect fallback authentication behaviors.",
      "We test for credential reuse across devices.",
      "We evaluate 802.1X configurations and RADIUS responses.",
      "We verify protection against MAC spoofing.",
      "We monitor access logs and failed login attempts.",
      "We recommend stronger user and device authentication controls.",
    ],
  },
];
const offerings17 = [
  {
    title: "Input Validation Testing",
    items: [
      "We test all API parameters for injection flaws.",
      "We check for SQL, command, and XML injection issues.",
      "We verify input length, type, and encoding safety.",
      "We inspect file upload endpoints for hidden threats.",
      "We simulate malformed requests to test system behavior.",
      "We validate JSON and XML schema consistency.",
      "We test special characters in query and body data.",
      "We assess path traversal risks on parameter use.",
      "We monitor for input reflection and echo leaks.",
      "We deliver a full report with safe input handling tips.",
    ],
  },
  {
    title: "Authentication and Authorization",
    items: [
      "We test token generation, expiry, and validation methods.",
      "We check access control rules across all API roles.",
      "We attempt privilege escalation through broken logic.",
      "We evaluate token revocation and refresh behavior.",
      "We inspect OAuth and JWT setups for misconfigurations.",
      "We test session state and cookie handling.",
      "We verify 2FA and credential security practices.",
      "We check password reset flows for weaknesses.",
      "We simulate attacker roles to test access separation.",
      "We offer fixes to improve access and identity control.",
    ],
  },
  {
    title: "Endpoint Configuration Review",
    items: [
      "We scan all endpoints and hidden routes.",
      "We check exposed debug and admin APIs.",
      "We test endpoint responses under different request types.",
      "We inspect HTTP headers for version disclosure.",
      "We review error messages for sensitive information leaks.",
      "We validate HTTPS enforcement and redirect behavior.",
      "We assess CORS settings and origin trust policies.",
      "We test caching headers on sensitive API calls.",
      "We analyze endpoint behavior against replay attacks.",
      "We suggest secure endpoint design and deployment fixes.",
    ],
  },
  {
    title: "Rate Limiting and Abuse Prevention",
    items: [
      "We test API limits under rapid request floods.",
      "We check throttling settings across all key endpoints.",
      "We simulate brute-force login and data scraping attacks.",
      "We evaluate timeout and retry response behavior.",
      "We test captcha and challenge enforcement if present.",
      "We inspect IP tracking and session locking.",
      "We assess abuse prevention in high-volume APIs.",
      "We check account-based and token-based rate rules.",
      "We simulate both traffic to gauge load protection.",
      "We recommend effective traffic control and abuse mitigation.",
    ],
  },
];
const offerings18 = [
  {
    title: "Asset Discovery and Mapping",
    items: [
      "We identify all internet-facing assets.",
      "We scan domains, subdomains, and public IPs.",
      "We detect cloud storage buckets and web apps.",
      "We find shadow IT and untracked assets.",
      "We monitor DNS records and SSL certs.",
      "We map hosting environments and registrars.",
      "We scan for rogue servers and endpoints.",
      "We provide a full asset inventory.",
      "We update maps in real time.",
      "We help you reclaim and secure lost assets.",
    ],
  },
  {
    title: "Risk Scoring and Prioritization",
    items: [
      "We assign risk levels to each exposed asset.",
      "We consider exploitability and business impact.",
      "We group findings by urgency and risk type.",
      "We highlight high-value targets like login panels.",
      "We flag outdated software and known CVEs.",
      "We link assets to past breaches or leaks.",
      "We prioritize misconfigured APIs and services.",
      "We compare your exposure to industry norms.",
      "We update scores as threats evolve.",
      "We provide focused remediation plans.",
    ],
  },
  {
    title: "Continuous Monitoring",
    items: [
      "We monitor new assets as they appear.",
      "We scan for configuration drift and new risks.",
      "We detect asset changes in real time.",
      "We track newly exposed ports and services.",
      "We watch DNS, SSL, and domain expiry.",
      "We alert on misconfigurations and shadow IT.",
      "We monitor leaked credentials and asset misuse.",
      "We flag malicious lookalike domains.",
      "We provide weekly and monthly status reports.",
      "We ensure threat visibility never drops.",
    ],
  },
  {
    title: "Vulnerability Discovery",
    items: [
      "We test public assets for open vulnerabilities.",
      "We scan web apps and APIs for flaws.",
      "We detect weak auth and outdated platforms.",
      "We inspect cloud setups for exposure points.",
      "We scan for brute-force and DDoS vectors.",
      "We test SSL/TLS and access control policies.",
      "We analyze known CVEs in exposed software.",
      "We identify high-risk services in use.",
      "We detect dev/test apps left open.",
      "We report findings with fixed suggestions.",
    ],
  },
];
const offerings19 = [
  {
    title: "Device Firmware Testing",
    items: [
      "We analyze firmware for hidden vulnerabilities and backdoors.",
      "We test code execution paths and insecure configurations.",
      "We inspect update mechanisms for spoofing or tampering.",
      "We scan for hard coded credentials and unsafe defaults.",
      "We check debug ports and developer interfaces.",
      "We assess encryption usage in firmware storage.",
      "We simulate real-world attacks on bootloaders.",
      "We reverse-engineer binaries for hidden functions.",
      "We validate patching readiness and update rollout logic.",
      "We suggest hardened firmware development and release practices.",
    ],
  },
  {
    title: "Communication & Protocol Security",
    items: [
      "We test all communication channels for unencrypted traffic.",
      "We inspect Wi-Fi, Bluetooth, Zigbee, and custom protocols.",
      "We check for weak encryption in data transfers.",
      "We evaluate session handling and message integrity.",
      "We test protocol misuse and spoofing risks.",
      "We simulate man-in-the-middle attacks across channels.",
      "We assess firmware-over-the-air (FOTA) update security.",
      "We analyze port exposure and network traffic flow.",
      "We verify use of secure tunneling or VPN where required.",
      "We give clear feedback on securing all device communications.",
    ],
  },
  {
    title: "Access Control & Authentication",
    items: [
      "We test user and admin access paths on devices.",
      "We check default credentials and password policies.",
      "We evaluate authentication logic across hardware and apps.",
      "We test privilege separation and role-based controls.",
      "We simulate brute-force attacks on interfaces and APIs.",
      "We inspect login flows and password resets.",
      "We review session persistence and token expiration.",
      "We test physical access interfaces for bypass risks.",
      "We evaluate root access protection and debug options.",
      "We provide steps to implement strong access control layers.",
    ],
  },
  {
    title: "Cloud and App Integration Testing",
    items: [
      "We test APIs that connect devices to cloud services.",
      "We analyze mobile apps used to control IoT devices.",
      "We check cloud storage settings for exposed data.",
      "We evaluate API key handling and endpoint access.",
      "We simulate token theft and replay scenarios.",
      "We assess mobile-to-cloud communication security.",
      "We inspect third-party service integrations.",
      "We test mobile app permissions and SDK configurations.",
      "We review app store release setups and encryption practices.",
      "We offer solutions to secure the full device-cloud path.",
    ],
  },
];

const offerings20 = [
  {
    title: "Internal and External Network Testing",
    items: [
      "We scan your internal systems for PCI risks and attack entry points.",
      "We test external IPs to find weak spots attackers can exploit.",
      "We inspect cloud networks, VLANs, and DMZ paths for exposure.",
      "We check firewall rules to ensure strong segmentation.",
      "We look for open ports, weak services, and unsafe paths.",
      "We follow how traffic flows across all your network layers.",
      "We identify systems exposed to real-world attack paths.",
      "We offer fixes to lock down your internal and external networks.",
    ],
  },
  {
    title: "Web Application and API Assessment",
    items: [
      "We test websites and portals that handle payment information.",
      "We find flaws like XSS, SQL injection, and weak inputs.",
      "We review how sessions, cookies, and roles are managed.",
      "We look for access gaps that expose sensitive actions.",
      "We check for logging issues and data leaks.",
      "We assess payment forms and third-party scripts.",
      "We test API endpoints for access, data, and logic flaws.",
      "We give clear reports that meet PCI DSS web testing standards.",
    ],
  },
  {
    title: "Cardholder Data Environment Review",
    items: [
      "We locate all systems that store or process cardholder data.",
      "We map where data flows, how it's stored, and how it's sent.",
      "We inspect encryption strength for data at rest and in motion.",
      "We review tokenization practices and masking of card numbers.",
      "We track user actions and data entry points across your systems.",
      "We check backups, exports, and logs for sensitive data.",
      "We outline your full PCI scope in a clear and simple view.",
      "We help you fix unsafe data handling and shrink the PCI footprint.",
    ],
  },
  {
    title: "PCI DSS Compliance Reporting",
    items: [
      "We map each issue directly to PCI DSS controls.",
      "We give proof and details for every risk we find.",
      "We explain the impact of risks on PCI DSS goals.",
      "We provide clear, simple steps to fix each issue.",
      "We include all logs, scan results, and screenshots.",
      "We define your scope boundaries and systems reviewed.",
      "We support you in answering auditor questions fast.",
      "We help you prepare for smooth audits with confidence.",
    ],
  },
];
const offerings21 = [
  {
    title: "Endpoint and Server Inspection",
    items: [
      "We scan all devices for malware and hidden attacker tools.",
      "We find unauthorized access through stealthy processes.",
      "We detect misuse of admin rights on critical machines.",
      "We trace login patterns to uncover backdoor activity.",
      "We check system persistence through services and tasks.",
      "We examine lateral movement paths across the network.",
      "We look into suspicious installed software and payloads.",
      "We offer quick and effective steps to remove threats.",
    ],
  },
  {
    title: "Threat Indicator Hunting",
    items: [
      "We search for malware traces across files and memory.",
      "We inspect registry changes tied to breach behavior.",
      "We detect data staging and exfiltration markers.",
      "We uncover tools that attackers leave behind.",
      "We identify signatures from known threat actors.",
      "We check timelines to detect silent attacks.",
      "We match findings with updated threat intelligence.",
      "We remove every sign of compromise fast.",
    ],
  },
  {
    title: "Network Traffic Analysis",
    items: [
      "We monitor traffic flows to catch hidden communication.",
      "We detect command and control server activity.",
      "We flag suspicious ports and remote shells.",
      "We examine DNS, HTTP, and custom protocol misuse.",
      "We trace traffic spikes from infected hosts.",
      "We investigate VPN and proxy misuse.",
      "We analyze router logs and firewall bypass signs.",
      "We block attacker access routes quickly.",
    ],
  },
  {
    title: "Log and Authentication Review",
    items: [
      "We analyze login events and session activity.",
      "We trace failed logins and brute force attempts.",
      "We detect abnormal access to critical data.",
      "We identify MFA bypass or session hijacking.",
      "We track suspicious IP access and geo-location drift.",
      "We audit token use and credential theft.",
      "We review the shell history and user commands.",
      "We deliver actions to stop insider or external abuse.",
    ],
  },
];
const offerings22 = [
  {
    title: "Attack Path Simulation",
    items: [
      "We simulate full breach-to-impact scenarios across your systems.",
      "We map every step attackers could take to reach their target.",
      "We trace privilege escalation paths and lateral movement.",
      "We uncover exposed services used in real-world attacks.",
      "We identify weak user roles and misconfigured policies.",
      "We review segmentation flaws and insecure routing.",
      "We reveal attack chaining paths missed in manual reviews.",
      "We give you clear actions to break every attack chain.",
    ],
  },
  {
    title: "Security Control Validation",
    items: [
      "We test if firewalls and IDS block common intrusion methods.",
      "We check EDR response to known and custom malware payloads.",
      "We measure alert speed and clarity from your SIEM.",
      "We review WAF strength against web-based threats.",
      "We uncover blind spots where controls fail silently.",
      "We validate escalation paths missed by current tools.",
      "We assess detection overlap across all control layers.",
      "We guide you in tuning controls to catch more threats.",
    ],
  },
  {
    title: "Endpoint and Network Testing",
    items: [
      "We simulate ransomware, spyware, and trojan infections.",
      "We inject threats through mail, DNS, and compromised links.",
      "We observe real-time tool responses across endpoints.",
      "We track threat signals inside lateral traffic flows.",
      "We simulate insider misuse and stolen credential abuse.",
      "We analyze endpoint logs for threat activity footprints.",
      "We confirm if controls react to stealthy C2 callbacks.",
      "We check if SOC teams detect and respond on time.",
    ],
  },
  {
    title: "Automated and Continuous Testing",
    items: [
      "We set up regular testing cycles for long-term defence.",
      "We update attack techniques with current threat intelligence.",
      "We track defence performance over time and across assets.",
      "We generate monthly reports to show risk reduction.",
      "We push alerts when recurring flaws reappear.",
      "We measure time to detect and time to respond.",
      "We adjust simulations to mimic changing attacker methods.",
      "We keep your systems resilient with constant updates.",
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
  }
  else if (slug === "cybersecurity-consultancy") {
    offerings = offerings10;
  } 
  else if (slug === "infrastructure-pentesting") {
  offerings = offerings11;
} else if (slug === "web-app-testing") {
  offerings = offerings12;
} else if (slug === "mobile-app-testing") {
  offerings = offerings13;
} else if (slug === "source-code-review") {
  offerings = offerings14;
} else if (slug === "social-engineering") {
  offerings = offerings15;
} else if (slug === "wifi-security-assessment") {
  offerings = offerings16;
} else if (slug === "api-security") {
  offerings = offerings17;
} else if (slug === "iot-security-assessment") {
  offerings = offerings18;
} else if (slug === "attack-surface-management") {
  offerings = offerings19;
} else if (slug === "compromise-assessment-services") {
  offerings = offerings20;
} else if (slug === "pcidss-penetration-testing") {
  offerings = offerings21;
} else if (slug === "breach-attack-simulation") {
  offerings = offerings22;
} else if (slug === "architecture-review-services") {
  offerings = offerings22;
} else if (slug === "purple-teaming") {
  offerings = offerings22;
} else if (slug === "privileged-access-management") {
  offerings = offerings22;
} else if (slug === "blockchain-security") {
  offerings = offerings22;
} else if (slug === "mobile-threat-defence") {
  offerings = offerings22;
} else if (slug === "incident-response-retainer") {
  offerings = offerings22;
} else if (slug === "ddos-attack-sim") {
  offerings = offerings22;
} else if (slug === "caasm") {
  offerings = offerings22;
} else if (slug === "cloud-pentesting-solutions") {
  offerings = offerings21;
} else if (slug === "soc-service") {
  offerings = offerings22;
} else if (slug === "managed-security-providers") {
  offerings = offerings13;
} else if (slug === "endpoint-detect-response") {
  offerings = offerings14;
} else if (slug === "network-detection-response") {
  offerings = offerings15;
} else if (slug === "managed-siem-soar") {
  offerings = offerings16;
} else if (slug === "threat-intelligence-hunting") {
  offerings = offerings17;
} else if (slug === "mitre-attack-framework") {
  offerings = offerings18;
} else if (slug === "custom-reporting-compliance") {
  offerings = offerings19;
} else if (slug === "digital-forensics-incident-response") {
  offerings = offerings10;
} else if (slug === "insider-threat-monitoring") {
  offerings = offerings11;
} else if (slug === "fimm-analysis") {
  offerings = offerings12;
} else if (slug === "account-takeover-protection") {
  offerings = offerings13;
} else if (slug === "deception-technology") {
  offerings = offerings14;
} else if (slug === "identity-threat-detection-response") {
  offerings = offerings15;
} else if (slug === "unified-asset-management") {
  offerings = offerings16;
} else if (slug === "cyber-risk-quantification") {
  offerings = offerings17;
} else if (slug === "identity-access-management") {
  offerings = offerings18;
} else if (slug === "data-security-solutions") {
  offerings = offerings19;
} else if (slug === "threat-intelligence-solutions") {
  offerings = offerings10;
} else if (slug === "emai-lsecurity-solutions") {
  offerings = offerings11;
} else if (slug === "zero-trust-network-access") {
  offerings = offerings12;
} else if (slug === "waf-services") {
  offerings = offerings13;
} else if (slug === "web-security-solutions") {
  offerings = offerings14;
} else if (slug === "network-security") {
  offerings = offerings15;
} else if (slug === "sase-solutions") {
  offerings = offerings16;
} else if (slug === "backup-disaster-recovery") {
  offerings = offerings17;
} else if (slug === "iaas") {
  offerings = offerings18;
} else if (slug === "micro-segmentation") {
  offerings = offerings19;
} else if (slug === "ssd-lifecycle") {
  offerings = offerings10;
} else if (slug === "ciso") {
  offerings = offerings11;
} else if (slug === "security-maturity-assessment") {
  offerings = offerings12;
} else if (slug === "process-policy-audits-reviews") {
  offerings = offerings13;
} else if (slug === "governance-risk-compliance") {
  offerings = offerings14;
} else if (slug === "senior-management-assurance") {
  offerings = offerings15;
} else if (slug === "cs-strategy-roadmap") {
  offerings = offerings16;
} else if (slug === "compliance-services") {
  offerings = offerings17;
} else if (slug === "soc2") {
  offerings = offerings18;
} else if (slug === "hipaa-compliance") {
  offerings = offerings19;
} else if (slug === "nist-compliance") {
  offerings = offerings10;
}

  else {
    // offerings = [];
    offerings = offerings10;
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
