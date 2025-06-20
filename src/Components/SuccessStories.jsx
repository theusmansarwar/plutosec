import React, { useState } from "react";
import "./SuccessStories.css";

const SuccessStories = ({ slug }) => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const stories1 = [
    {
      title: "Leading Industry",
      data: [
        "A healthcare network stopped a data breach after system scans.",
        "A hospital fixed access flaws after internal testing.",
        "A clinic secured devices before the risk became real.",
        "A lab blocks threat actors in the early stages.",
        "A pharmacy chain avoided downtime after API testing.",
        "A diagnostics center patched outdated ports quickly.",
        "A care group improved staff login security.",
        "A medical firm closed the backup exposure risks.",
      ],
    },
    {
      title: "Automatically Secured",
      data: [
        "A finance platform blocked hidden threats in its payment gateway.",
        "A bank improved its firewall rules after we found internal risks.",
        "A billing app stopped attackers from bypassing login screens.",
        "A credit union patched its database before real damage happened.",
        "A trading service secured cloud access before attacks.",
        "An insurance firm fixed token flaws in the login.",
        "A POS vendor stopped injection risks in code.",
        "A payment portal secures APIs from bot abuse.",
      ],
    },
    {
      title: "Company Protected",
      data: [
        "An e-commerce brand stopped fraud after we found code flaws in the checkout.",
        "A fashion store fixed app bugs that exposed user data.",
        "A delivery business secured accounts after testing its API structure.",
        "A retailer blocked access attempts on its mobile store.",
        "A supply company closed unsecured login paths.",
        "A gifting site removed hardcoded tokens in apps.",
        "An e-store reduced login abuse from bad actors.",
        "A delivery brand patched billing flaws before the breach.",
      ],
    },
    {
      title: "Stronger Systems",
      data: [
        "A government office fixed access control gaps in its internal tools.",
        "A university secured staff portals after a full pentest session.",
        "A public agency patched weak cloud settings before any breach.",
        "A city network improved protection after a real-world threat simulation.",
        "A utility department has weak firewall setups.",
        "A transport network blocked external scans quickly.",
        "A municipal team improved app roles and controls.",
        "A council IT team locked down risky endpoints.",
      ],
    },
  ];

  const stories2 = [
    {
      title: "Compliance Achieved",
      data: [
        "A healthcare provider achieved HIPAA compliance after a full review.",
        "A finance firm passed a SOC 2 audit after expert guidance.",
        "A global company earned ISO 27001 with complete support.",
        "An e-commerce platform met GDPR rules on time.",
        "A law firm secured data after a GDPR review.",
        "A startup passed SOC 2 after control updates.",
        "A public sector unit met ISO 27001 standards.",
        "A pharma company closed HIPAA gaps in its systems.",
      ],
    },
    {
      title: "Certification Ready",
      data: [
        "A retail brand passed ISO 27001 after a risk review.",
        "A healthcare app met GDPR by securing user data.",
        "A software firm fixed gaps before SOC 2 testing.",
        "A finance site became GDPR-ready with strong controls.",
        "An education app passed HIPAA after security steps.",
        "A logistics firm earned SOC 2 with better audits.",
        "A marketing team passed GDPR checks after fixes.",
        "A tech group got ISO 27001 by improving systems.",
      ],
    },
    {
      title: "Audit Cleared",
      data: [
        "A cloud provider gained SOC 2 trust with a safe setup.",
        "A clinic passed HIPAA after securing all data.",
        "A retail chain reached GDPR goals on schedule.",
        "An insurer met GDPR by fixing workflows.",
        "A gaming firm passed SOC 2 before the deadline.",
        "A fintech team got ISO 27001 after review.",
        "A supply firm closed HIPAA gaps in networks.",
        "A telecom provider met GDPR after a user data scan.",
      ],
    },
    {
      title: "Stronger Compliance Systems",
      data: [
        "A factory earned ISO 27001 by fixing access flaws.",
        "A care center met HIPAA after patching weak points.",
        "A tech group secured SOC 2 with new policies.",
        "A public body met GDPR with better controls.",
        "A SaaS team passed GDPR after system updates.",
        "A non-profit got ISO 27001 after staff checks.",
        "A pharma brand hit HIPAA goals after audits.",
        "A bank passed SOC 2 after risk controls.",
      ],
    },
  ];
  const stories3 = [
    {
      title: "Threats Detected Early",
      data: [
        "A hospital spotted ransomware before system lockdown.",
        "A finance app caught stealth malware in background scans.",
        "A retail chain identified lateral movement across devices.",
        "A telecom company flagged risky admin activity in time.",
        "A government portal saw credential theft attempts early.",
        "A cloud firm blocked an exploit before it spread.",
        "A care provider caught beaconing traffic during peak hours.",
        "A logistics firm spotted attack patterns in employee logins.",
      ],
    },
    {
      title: "Response in Real Time",
      data: [
        "A trading app stopped data theft during the live session.",
        "A healthcare platform shut down a phishing attack in minutes.",
        "A law firm ended a session hijack before access was gained.",
        "A startup halted brute-force attempts through live response.",
        "A media group blocked attacker IPs mid-scan.",
        "A billing system ended exfiltration after an XDR alert.",
        "A university neutralized ransomware nodes before activation.",
        "A transport provider stopped script injection in real time.",
      ],
    },
    {
      title: "Breach Impact Reduced",
      data: [
        "A bank suffered limited damage after an early-stage exploit alert.",
        "An e-commerce platform avoided data loss during an API attack.",
        "A software firm stopped malware lateral spread in seconds.",
        "A public agency contained risk from endpoint compromise.",
        "A payment service prevented PII exposure in a quick time.",
        "A pharma lab isolated devices during a threat scan.",
        "A SaaS firm secured cloud access before the threat escalated.",
        "A delivery app restored a safe state after fast XDR action.",
      ],
    },
    {
      title: "Stronger Threat Visibility",
      data: [
        "A gaming platform improved insight into hidden traffic.",
        "A defense contractor tracked fileless malware actions.",
        "A research lab visualized an attack chain across endpoints.",
        "A telecom firm mapped real-time threats from a single dashboard.",
        "A diagnostics firm flagged abnormal system behavior fast.",
        "A financial agency enhanced alert correlation with context.",
        "A healthcare network linked threat signals across systems.",
        "A tech brand saw weak points through live threat graph.",
      ],
    },
  ];
  const stories4 = [
    {
      title: "Real-World Attacks Simulated",
      data: [
        "A hospital faced a full-scale breach simulation without real impact.",
        "A fintech firm detected weak endpoints during stealth test.",
        "A logistics group saw privilege escalation in action.",
        "A defense agency tracked social engineering attempts live.",
        "A retail chain exposed unmonitored access zones.",
        "A cloud startup flagged code execution risks in time.",
        "A research center learned hidden data exfiltration paths.",
        "A utility company found gaps in escalation response.",
      ],
    },
    {
      title: "Defense Gaps Exposed",
      data: [
        "A telecom group spotted poor detection rules during drills.",
        "A healthcare network improved threat alerting after test runs.",
        "A finance team failed to flag lateral movement till audit.",
        "A travel company missed DNS tunneling signs in early phases.",
        "A SaaS firm saw attack indicators too late.",
        "A trading company realized endpoint delays in blocking.",
        "A government unit overlooked real-time phishing links.",
        "A university caught slow firewall response during breach test.",
      ],
    },
    {
      title: "Blue Team Wins",
      data: [
        "A law firm blocked unauthorized access in real time.",
        "A diagnostics lab traced C2 communication paths quickly.",
        "A council IT team isolated compromised accounts fast.",
        "A media group stopped internal data leaks under pressure.",
        "A mobile app company reversed exploit payloads mid-attack.",
        "A hospital shut down script injection within seconds.",
        "A public agency blocked backdoor routes post-alert.",
        "A payment vendor protected tokens after detection.",
      ],
    },
    {
      title: "Stronger Security Coordination",
      data: [
        "A pharma brand aligned red-blue teams after joint drills.",
        "A tech firm improved post-breach analysis from joint sessions.",
        "A city portal created faster incident flow between teams.",
        "A cloud company bridged gaps in team playbooks.",
        "A banking network unified reporting from both teams.",
        "A service provider linked logs across defense layers.",
        "A transport agency upgraded drills after team sync.",
        "A government lab learned threat flows through joint actions.",
      ],
    },
  ];
  const stories5 = [
    {
      title: "Access Risks Eliminated",
      data: [
        "A telecom firm removed excessive admin roles from critical apps.",
        "A healthcare unit blocked shared passwords across teams.",
        "A university cut off access from orphaned accounts.",
        "A finance company fixed weak 2FA settings for remote staff.",
        "A retail group removed hidden user roles from internal portals.",
        "A hospital flagged login sessions from unauthorized locations.",
        "A tech brand removed dormant users from privileged groups.",
        "A cloud startup restricted access after login trail review.",
      ],
    },
    {
      title: "Identity Gaps Closed",
      data: [
        "A media house secured third-party logins from unknown IPs.",
        "A logistics firm blocked token reuse during session checks.",
        "A SaaS company stopped credential stuffing through rate limits.",
        "A public office reset access flows after role mismatch.",
        "An insurance agency revoked risky SSO settings.",
        "A diagnostics lab stopped overlapping permissions in portals.",
        "A service provider cleaned identity overlaps in cloud tools.",
        "A government network removed legacy access points.",
      ],
    },
    {
      title: "Stronger Control Achieved",
      data: [
        "A payment firm set smart rules for high-risk app logins.",
        "A travel brand traced all access paths to critical systems.",
        "A university enforced MFA on every user level.",
        "A council IT team blocked stale access tokens automatically.",
        "A tech firm isolated third-party identity providers.",
        "A supply chain group flagged rogue device logins.",
        "A banking portal tested session expiry under load.",
        "A city transport network improved user provisioning speed.",
      ],
    },
    {
      title: "Stronger Access Strategy",
      data: [
        "A clinic created a full access control policy.",
        "A retail chain now audits account logs monthly.",
        "A cloud app tracks access by role and action.",
        "A government unit reviews permissions quarterly.",
        "A startup trained staff on login security basics.",
        "A media brand now integrates IAM with HR tools.",
        "A utility provider built real-time access alerts.",
        "A finance group logs all account changes for audits.",
      ],
    },
  ];

  const stories6 = [
    {
      title: "Security Gaps Found in Code",
      data: [
        "A fintech firm found secret keys exposed in commits.",
        "A healthcare app flagged missing validation in forms.",
        "A delivery startup caught token leaks in dev logs.",
        "A retail brand found default credentials in test builds.",
        "A logistics portal exposed debug endpoints to users.",
        "A banking app discovered weak auth checks in APIs.",
        "A travel tool showed open routes in backend calls.",
        "A media platform flagged outdated libraries in its stack.",
      ],
    },
    {
      title: "Fixes Applied in Dev Cycle",
      data: [
        "A social platform added checks in pull request stages.",
        "A payment service blocked risky builds in the CI pipeline.",
        "A cloud firm enforced dependency scanning on merge.",
        "A trading app used SAST tools in all branches.",
        "A healthcare group added security steps to release flows.",
        "A real estate firm locked down access to build servers.",
        "A job board applied pre-commit hooks for checks.",
        "A SaaS startup set alerts for risky code changes.",
      ],
    },
    {
      title: "Threats Caught Before Release",
      data: [
        "A finance app stopped data leak from error logs.",
        "A travel firm removed hidden backdoors in pre-prod.",
        "A payment tool blocked script injection in staging.",
        "A commerce site caught logic flaws in checkout flow.",
        "A learning app halted API misuse in UAT phase.",
        "A media app stopped path traversal before launch.",
        "A rideshare app fixed file upload risks early.",
        "A retailer removed harmful hardcoded URLs.",
      ],
    },
    {
      title: "Development Made Secure",
      data: [
        "A banking group now tracks all code risks by phase.",
        "A gaming app trains devs on secure coding weekly.",
        "A law firm auto-reports flaws per repo.",
        "A retail chain builds secure images for all apps.",
        "A healthcare firm runs post-merge scans in real time.",
        "A finance startup added live monitoring to dev servers.",
        "A cloud service logs every pipeline activity.",
        "A telecom group aligns release checks with OWASP.",
      ],
    },
  ];

  const stories7 = [
    {
      title: "Security Gaps Found in Code",
      data: [
        "A fintech firm found secret keys exposed in commits.",
        "A healthcare app flagged missing validation in forms.",
        "A delivery startup caught token leaks in dev logs.",
        "A retail brand found default credentials in test builds.",
        "A logistics portal exposed debug endpoints to users.",
        "A banking app discovered weak auth checks in APIs.",
        "A travel tool showed open routes in backend calls.",
        "A media platform flagged outdated libraries in its stack.",
      ],
    },
    {
      title: "Fixes Applied in Dev Cycle",
      data: [
        "A social platform added checks in pull request stages.",
        "A payment service blocked risky builds in the CI pipeline.",
        "A cloud firm enforced dependency scanning on merge.",
        "A trading app used SAST tools in all branches.",
        "A healthcare group added security steps to release flows.",
        "A real estate firm locked down access to build servers.",
        "A job board applied pre-commit hooks for checks.",
        "A SaaS startup set alerts for risky code changes.",
      ],
    },
    {
      title: "Threats Caught Before Release",
      data: [
        "A finance app stopped data leak from error logs.",
        "A travel firm removed hidden backdoors in pre-prod.",
        "A payment tool blocked script injection in staging.",
        "A commerce site caught logic flaws in checkout flow.",
        "A learning app halted API misuse in UAT phase.",
        "A media app stopped path traversal before launch.",
        "A rideshare app fixed file upload risks early.",
        "A retailer removed harmful hardcoded URLs.",
      ],
    },
    {
      title: "Development Made Secure",
      data: [
        "A banking group now tracks all code risks by phase.",
        "A gaming app trains devs on secure coding weekly.",
        "A law firm auto-reports flaws per repo.",
        "A retail chain builds secure images for all apps.",
        "A healthcare firm runs post-merge scans in real time.",
        "A finance startup added live monitoring to dev servers.",
        "A cloud service logs every pipeline activity.",
        "A telecom group aligns release checks with OWASP.",
      ],
    },
  ];

  const stories8 = [
    {
      title: "Cloud Environment Secured",
      data: [
        "A finance app locked misconfigured S3 buckets in AWS.",
        "A healthcare platform secured open ports in Azure.",
        "A logistics firm removed outdated containers in GCP.",
        "A retail brand fixed weak storage policies in hybrid cloud.",
        "A media startup closed unsafe dev environments in seconds.",
        "A software company blocked external access to test zones.",
        "A law agency encrypted traffic between multi-cloud assets.",
        "A banking portal detected unusual behavior in cloud sessions.",
      ],
    },
    {
      title: "Access Control Improved",
      data: [
        "A ride-sharing app removed inactive cloud user roles.",
        "A payment firm restricted privilege levels in IAM.",
        "A data vendor applied MFA to third-party accounts.",
        "A legal service disabled unused tokens in admin tools.",
        "A gaming brand tightened cloud login access from new regions.",
        "A crypto platform logged all permission changes in real time.",
        "A design studio flagged open access to internal dashboards.",
        "A delivery business stopped role abuse in Kubernetes clusters.",
      ],
    },
    {
      title: "Threats Blocked in Cloud",
      data: [
        "A streaming service stopped lateral movement in containers.",
        "A learning platform stopped exploit attempts in serverless apps.",
        "A consultancy firm detected hidden malware in build pipelines.",
        "A food chain removed risky packages from cloud images.",
        "A diagnostics group flagged sudden spikes in API calls.",
        "A booking site responded to compromised tokens fast.",
        "A social platform spotted fake sign-ins on new cloud IPs.",
        "A research lab isolated suspicious cloud-native workloads.",
      ],
    },
    {
      title: "Cloud Visibility Gained",
      data: [
        "A digital agency mapped unused assets across cloud zones.",
        "A publisher got insights from detailed cloud posture scans.",
        "A startup saw activity trails across all cloud accounts.",
        "A public agency unified logs from private and public clouds.",
        "A transport company traced missteps in cloud migration.",
        "A telecom vendor visualized cloud usage trends in dashboards.",
        "A SaaS firm identified drift from cloud security baselines.",
        "A tech group automated alerts from shadow cloud usage.",
      ],
    },
  ];

  const stories9 = [
    {
      title: "Weak Points Detected",
      data: [
        "A university found critical flaws in old Wi-Fi routers.",
        "A retail firm spotted broken links in internal tools.",
        "A law office flagged outdated firmware in scanners.",
        "A logistics app detected open ports in staging zones.",
        "A travel site found risky services running on test servers.",
        "A clinic exposed weak DNS settings in its devices.",
        "A finance group revealed unused IPs open to attacks.",
        "A car rental service found legacy code in backend systems.",
      ],
    },
    {
      title: "Fast Fixes Applied",
      data: [
        "A design firm patched known bugs in plugins.",
        "A delivery brand removed expired certs from servers.",
        "A tax platform closed risky admin panels.",
        "A gaming company shut unused test logins.",
        "A health provider replaced exposed debug tools.",
        "A bank updated SSL configs after report findings.",
        "A builder portal fixed misconfigured access paths.",
        "A media house resolved long-standing security gaps.",
      ],
    },
    {
      title: "Risks Prevented Early",
      data: [
        "A startup avoided breach from weak SSH keys.",
        "A payment site stopped exposure due to open APIs.",
        "A hospital avoided attack via unpatched services.",
        "A CRM tool blocked misuse of public test endpoints.",
        "A support platform avoided abuse of forgotten subdomains.",
        "A state agency halted risk from old software versions.",
        "A gifting store avoided downtime from network missteps.",
        "A fintech brand caught major risk in dev setup.",
      ],
    },
    {
      title: "Security Posture Improved",
      data: [
        "A travel agency gained full asset visibility.",
        "A food brand learned patch cycles for better control.",
        "A finance app now tracks risks by category.",
        "A nonprofit set up clear fix workflows.",
        "A gaming site mapped risk trends over months.",
        "A city portal scored high in latest audits.",
        "A utility provider used reports to train staff.",
        "A media group automated scans into monthly reviews.",
      ],
    },
  ];
  const stories10 = [
    {
      title: "Real-World Impact",
      data: [
        "A healthcare group aligned with HIPAA after detailed policy revision.",
        "A clinic reduced insider threats after user behavior analysis.",
        "A hospital created an incident response plan that prevented system downtime.",
        "A diagnostics center mapped all digital assets for risk control.",
        "A care facility adopted secure data retention practices.",
        "A medical lab mitigated device misuse risks through staff policy training.",
        "A pharmacy network rolled out access control improvements.",
        "A telehealth provider reduced audit failures with stronger documentation.",
      ],
    },
    {
      title: "Trusted by Leaders",
      data: [
        "A finance company passed its ISO 27001 readiness review.",
        "A fintech startup automated compliance workflows.",
        "A bank implemented real-time threat reporting protocols.",
        "A payment processor improved vendor risk monitoring.",
        "An insurance group added secure backup and recovery systems.",
        "A billing platform enforced strict access role policies.",
        "A digital wallet enables secure API governance.",
        "A credit firm minimized data leak risks after a gap assessment.",
      ],
    },
    {
      title: "Secured in Action",
      data: [
        "A retailer responded effectively to a phishing attack after simulation training.",
        "A logistics firm secured API integrations using our governance model.",
        "An e-commerce business protected personal data through encryption policies.",
        "A gift delivery app reduced employee password reuse incidents.",
        "A food service chain adopted secure mobile access strategies.",
        "A fashion brand added endpoint security controls on staff devices.",
        "A global marketplace tracked high-risk users using behavior analytics.",
        "A delivery company improved security documentation for auditors.",
      ],
    },
    {
      title: "Strength Through Strategy",
      data: [
        "A university implemented a full-scale governance framework.",
        "A government office mapped user access roles across departments.",
        "A public transport agency secured its cloud environment.",
        "A city council enforced continuous compliance checks.",
        "A power company developed policies for operational continuity.",
        "A municipal department trained staff on advanced threat handling.",
        "A defense unit improved change control procedures.",
        "A national agency passed SOC 2 audit after full gap analysis.",
      ],
    },
  ];
  const stories11 = [
  {
    title: "Security Reinforced",
    data: [
      "A finance firm blocked repeated external breaches after patching network flaws.",
      "An e‑commerce site closed internal backdoors before a critical audit.",
      "A hospital secured remote VPN access after thorough testing insights.",
      "A logistics provider fixed serious WLAN exposure risks proactively.",
      "A utility company tightened firewall configurations and rule management.",
      "A retailer segmented internal traffic to protect connected POS systems.",
      "A university patched vulnerable routers and access points before term.",
      "A cloud vendor applied IDS improvements to prevent major intrusions.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A healthcare provider met strict PCI DSS infrastructure testing standards.",
      "A fintech platform passed all SOC 2 internal network requirements.",
      "A government agency earned ISO 27001 after firewall policy reviews.",
      "A telecom firm validated their IDS/IPS alert coverage successfully.",
      "A startup aligned their VPN setup with GDPR data protection rules.",
      "A bank documented patching control processes for internal audits.",
      "A cruise operator fixed wireless network weaknesses before deployment.",
      "A parking service verified segmentation settings for PCI‑ready terminals.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A manufacturing plant blocked unauthorized VLAN and internal traffic.",
      "A dental clinic secured its local network after gap analysis sessions.",
      "A hotel chain enforced strict and updated firewall access policies.",
      "A digital agency applied VPN certificate monitoring best practices.",
      "A municipal office banned rogue devices from office-wide Wi‑Fi.",
      "A SaaS provider corrected serious firewall misconfigurations early.",
      "A public transit office patched IDS detection and alerting gaps.",
      "An insurance firm reinforced all internal network authentication standards.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A care center maintained service uptime after infrastructure failover testing.",
      "A defense supplier ensures network redundancy even under heavy load.",
      "A transport service hardened its VPN before the busy peak season.",
      "A school district reinforced campus wireless after network penetration tests.",
      "A mobile app vendor secured backend API servers and core routers.",
      "A healthcare app tightened internal network access for all staff.",
      "A parking operator improved VPN resilience against targeted attacks.",
      "A tech startup built a robust and redundant firewall failover architecture.",
    ],
  },
];
const stories12 = [
  {
    title: "Web Security Improved",
    data: [
      "An e‑commerce client stopped SQL injection risks before launch.",
      "A SaaS platform secured login flows to block brute‑force attacks.",
      "A finance portal added session flags to prevent hijacks.",
      "A healthcare app enforced CSRF checks for form submissions.",
      "A retail site fixed XSS flaws in comment fields.",
      "A travel platform secured API tokens against misuse.",
      "A fintech startup patched insecure file upload logic.",
      "A marketplace improved third‑party integration safety.",
    ],
  },
  {
    title: "Compliance and Trust",
    data: [
      "A banking app met OWASP Top 10 standards before audit.",
      "A legal portal achieved PCI‑DSS readiness before go‑live.",
      "A pharma site passed an ISO 27001 web app controls review.",
      "A telecom vendor secured APIs ahead of the GDPR launch.",
      "A betting site enforced KYC workflows securely.",
      "A healthcare system updated its authentication for HIPAA.",
      "A media streaming app aligned with SOC 2 session rules.",
      "A crypto exchange fixed the runtime app logic before certification.",
    ],
  },
  {
    title: "Systems Hardened",
    data: [
      "An educational app closed cross‑site scripting gaps.",
      "A hospitality booking site improved client data handling.",
      "A logistics portal enforced CORS and API origin checks.",
      "A payment gateway added MFA and credential strength enforcement.",
      "A cloud service hardened its REST API endpoints.",
      "A real estate app secures file storage paths.",
      "A dating platform fixed XSS in user profile fields.",
      "A news site improved browser storage controls.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A startup deployed secure input filters and regained trust.",
      "A mobile API backend recovered fast after testing.",
      "A retail app improved uptime after web attack prevention.",
      "A fintech vendor hardened API error handling proactively.",
      "A SaaS vendor avoided breaches through secure session controls.",
      "A transport portal recovered quickly after logic flaw testing.",
      "A healthcare startup blocked API misuse before demo day.",
      "A marketplace built layered protections across web apps.",
    ],
  },
];
const stories13 = [
  {
    title: "Code Risks Eliminated",
    data: [
      "A fintech app removed hardcoded secrets before public release.",
      "A telecom API fixed the broken access logic found in the source review.",
      "A crypto exchange patched weak session validation in custom code.",
      "A healthcare tool corrected insecure token storage during the audit.",
      "A logistics system removed hidden debug functions in the backdoor logic.",
      "A banking dashboard improved memory handling after a C review.",
      "A payment platform blocked injection paths missed in external tests.",
      "A legal software fixed bypass flaws in user role checks.",
    ],
  },
  {
    title: "Compliance and Assurance",
    data: [
      "A financial portal aligned with PCI-DSS secure coding rules.",
      "A SaaS app passed ISO 27001 source-level security checks.",
      "A government portal fixed authentication flaws before an audit review.",
      "A health records platform met HIPAA secure software requirements.",
      "A betting site removed risky logging to meet GDPR compliance.",
      "A legal CRM patched file upload logic before ISO readiness.",
      "A media company secured code to comply with SOC 2 practices.",
      "A retail system removed legacy crypto to pass the internal audit.",
    ],
  },
  {
    title: "Systems Strengthened",
    data: [
      "A cloud SaaS hardened input filters across critical modules.",
      "An education portal fixes unvalidated redirects in the source logic.",
      "A mobile app refactored weak crypto with AES-256 integration.",
      "A travel site corrected insecure error-handling routines.",
      "A marketplace improved session controls through static code checks.",
      "A smart device platform secures firmware update mechanisms.",
      "A startup replaced outdated libraries with safe alternatives.",
      "A healthcare app enforced proper exception handling everywhere.",
    ],
  },
  {
    title: "Resilience Achieved",
    data: [
      "A startup scaled securely after code-based logic flaws were fixed.",
      "A finance app maintained uptime after securing the backend logic.",
      "A payment vendor resolved rollback issues through race condition fixes.",
      "A social platform secured input validation across all modules.",
      "A crypto wallet fixed parser bugs and strengthened transaction safety.",
      "A SaaS vendor prevented escalation flaws in the role change code.",
      "A retail system improved data flow controls after review.",
      "A logistics app blocked malformed requests in the middleware logic.",
    ],
  },
];
const stories14 = [
  {
    title: "App Security Strengthened",
    data: [
      "A health app closed API flaws that leaked user data.",
      "A banking client strengthened login flows to block brute force.",
      "A delivery platform secured iOS storage against data theft.",
      "A finance tool stopped token reuse across sessions.",
      "A ride‑sharing app improved permission handling for user safety.",
      "A travel firm patched weak crypto in Android.",
      "A gaming app blocked hacking via code obfuscation.",
      "A fitness app secured third‑party plugin calls properly.",
    ],
  },
  {
    title: "Compliance and Trust",
    data: [
      "A healthcare app met HIPAA after data privacy fixes.",
      "A finance platform passed SOC 2 with secure mobile login.",
      "A booking service aligned GDPR through consent screens.",
      "A retail app achieved PCI DSS via encrypted storage.",
      "A wellness app complied with ISO 27001 mobile controls.",
      "A charity app followed OWASP MASVS after mobile testing.",
      "A fintech provider added session limits before audit.",
      "A mobile wallet app met PSD2 with secure APIs.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A utility app secured IDOR endpoints in article access.",
      "An education platform patched API input flaws.",
      "A social media app blocked unsafe file uploads.",
      "A crypto wallet fixed root bypass vectors.",
      "A chat app disabled location tracking without consent.",
      "A media app removed hardcoded admin tokens.",
      "A grocery app improved TLS certificate checks.",
      "A productivity tool secured push notification data.",
    ],
  },
  {
    title: "Trust Restored",
    data: [
      "A bank regained user trust with secure mobile login.",
      "A delivery startup reduced breach risk via testing.",
      "A school portal passed safety checks before launch.",
      "A wellness startup protected signups from tampering.",
      "A payments app grew its user base after privacy improvements.",
      "A legal firm kept app data safe on every device.",
      "A nonprofit app secured iOS data across installs.",
      "A video platform protects content via secure API layers.",
    ],
  },
];

const stories15 = [
  {
    title: "Human Risk Reduced",
    data: [
      "A law firm blocked spoofed invoice scams after phishing tests.",
      "A hospital avoided patient data loss through staff awareness drills.",
      "A bank flagged impersonation attempts after phone-based pretexts.",
      "A retail chain updated receptionist protocols after in-person testing.",
      "A SaaS team improved phishing detection with realistic campaigns.",
      "A government office updated entry badge checks after USB drops.",
      "A telecom company closed gaps in remote support trust flow.",
      "A university trained students and staff against social tricks.",
    ],
  },
  {
    title: "Compliance Achieved",
    data: [
      "A finance firm met ISO 27001 requirements for social testing.",
      "A healthcare provider aligned with HIPAA awareness controls.",
      "A telecom vendor included phishing simulations for GDPR compliance.",
      "A utility provider passed NIST readiness audits with human testing.",
      "A payment app team met SOC 2 incident response metrics.",
      "A retailer documented awareness levels for PCI DSS validation.",
      "A transport company improved staff audit trails for ISO needs.",
      "A tech startup completed phishing audits for investor due diligence.",
    ],
  },
  {
    title: "Awareness Improved",
    data: [
      "A cloud firm improved reporting habits across technical staff.",
      "A dental group added scam simulations to annual training.",
      "A logistics team stopped bait USB usage company-wide.",
      "A finance app banned phone-based info sharing after tests.",
      "A real estate office blocked fake IT calls after awareness drills.",
      "A public agency changed visitor policies after pretext failures.",
      "A school integrated phishing training into staff onboarding.",
      "A media firm reduced human-caused incidents by 80%.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A transport company enforced zero-trust around remote requests.",
      "A healthcare firm deployed real-time scam reporting tools.",
      "A legal platform built layered defense against email fraud.",
      "A gaming startup added phishing training after a breach attempt.",
      "A SaaS vendor enabled simulation-based awareness tracking.",
      "A government agency improved badge and access protocol enforcement.",
      "A social app provider blocked tailgating with smart ID checks.",
      "A fintech company maintained resilience after aggressive testing.",
    ],
  },
];
const stories16 = [
  {
    title: "Security Reinforced",
    data: [
      "A university blocked rogue access points across campuses.",
      "A fintech startup secured WPA3 and disabled legacy protocols.",
      "A hotel chain restricted guest Wi‑Fi from core systems.",
      "A hospital improved EAP configuration and cert handling.",
      "A corporate office detected spoofed APs using our scans.",
      "A logistics firm segmented public Wi‑Fi from backend servers.",
      "A real estate company patched Wi‑Fi credential exposure.",
      "A retailer blocked hidden SSIDs leaking sensitive traffic.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A law firm aligned wireless setup with ISO 27001.",
      "A healthcare provider passed HIPAA checks after Wi‑Fi testing.",
      "A financial company met PCI DSS wireless standards.",
      "A government agency enforced WPA2‑Enterprise after an audit.",
      "A SaaS vendor secured guest networks to meet SOC 2.",
      "A school district restricted student access by MAC filters.",
      "A telecom provider configured wireless to meet GDPR guidelines.",
      "A travel agency passed a security audit through secure AP controls.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A co‑working space shut down unauthorized guest access.",
      "A manufacturing plant isolated factory floor Wi‑Fi zones.",
      "A tech firm removed WEP‑enabled devices from the network.",
      "A marketing agency restricted devices through access control lists.",
      "A consultancy deployed rotating Wi‑Fi keys for internal teams.",
      "A delivery company added monitoring for rogue AP behavior.",
      "A design studio fixed device authentication issues fast.",
      "A hotel group adopted certificate‑based login across branches.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A medical supplier improved uptime with strong Wi‑Fi controls.",
      "A transportation firm hardened the network before seasonal demand.",
      "A data center enabled fallback auth without weakening security.",
      "A cloud vendor implemented full logging across all APs.",
      "A startup reduced signal bleed beyond office boundaries.",
      "A bank tested wireless failover for branch systems.",
      "A health-tech firm blocked wireless access to dev environments.",
      "A government department enabled fast Wi‑Fi lockdown response.",
    ],
  },
];
const stories17 = [
  {
    title: "Security Reinforced",
    data: [
      "A fintech startup blocked token leakage via response headers.",
      "A logistics API restricts overexposed endpoints fast.",
      "A marketplace fixed input validation issues in mobile APIs.",
      "A payment provider corrected OAuth flaws before launch.",
      "A gaming platform stopped account abuse through stronger throttling.",
      "A SaaS vendor isolated admin APIs from public access.",
      "A retail chain patched insecure password reset logic.",
      "A banking app sealed session hijack paths in its API.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A healthcare platform passed OWASP API Top 10 checks.",
      "A legal SaaS met ISO 27001 API security criteria.",
      "A crypto exchange enforced KYC API access under GDPR.",
      "A trading firm passed the SOC 2 review after token changes.",
      "A cloud app met HIPAA rules after CORS rework.",
      "A travel portal updated its APIs to align with PCI DSS.",
      "A school system blocked unsafe file APIs before the audit.",
      "A telecom app secured tokens to meet regional regulations.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A news app stopped replay attacks with token checks.",
      "A booking engine added schema validation for user input.",
      "A smart home API filters unsafe characters at entry.",
      "A social media app enforced strict API access rules.",
      "A courier API has limited exposure to location-based data.",
      "A CRM vendor added alerting for throttling violations.",
      "A file transfer service tightened the authentication for nested APIs.",
      "A mobile backend filters invalid method calls.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A digital bank reduced API abuse during peak hours.",
      "A public app maintained uptime after access rule changes.",
      "A remote tool API avoided floods through traffic shaping.",
      "A startup deployed alerts on rate-limit violations.",
      "A subscription app improved reliability after input filter updates.",
      "A delivery platform enabled auto-locks for rogue endpoints.",
      "A health-tracker app added fallback auth for outages.",
      "A utility provider set up layered API protection rules.",
    ],
  },
];
const stories18 = [
  {
    title: "Exposure Reduced",
    data: [
      "A media firm removed 12 unknown subdomains.",
      "A fintech startup secured leaked cloud buckets.",
      "A university blocked access to open dev servers.",
      "A travel company shut down forgotten APIs.",
      "A SaaS provider patched public-facing Git repos.",
      "An e-commerce platform disabled unused admin panels.",
      "A hospital mapped all legacy domains.",
      "A telecom brand reclaimed expired certs on key services.",
    ],
  },
  {
    title: "Security Boosted",
    data: [
      "A retail chain patched known CVEs in cloud systems.",
      "A crypto firm enforced MFA on admin portals.",
      "A healthcare network fixed DNS misconfigured.",
      "A bank closed API endpoints leaking data.",
      "A logistics app stopped open S3 access.",
      "A social network blocked unsafe webhooks.",
      "An insurance firm secured mobile API front doors.",
      "A payment platform protected admin consoles with geo-fencing.",
    ],
  },
  {
    title: "Compliance Achieved",
    data: [
      "A finance app passed PCI DSS with better exposure control.",
      "A school district met NIST standards on asset inventory.",
      "A retail firm aligned ISO 27001 by reducing shadow IT.",
      "A medical platform improved HIPAA compliance after testing.",
      "A startup passed SOC 2 with improved API visibility.",
      "A legal portal passed the GDPR audit with domain cleanup.",
      "An NGO met cyber insurance conditions through real-time ASM.",
      "A B2B vendor secured client-facing portals for ISO readiness.",
    ],
  },
  {
    title: "Trust Rebuilt",
    data: [
      "A bank restored user trust after public API risk removal.",
      "A health tracker app regained privacy scores after cleanup.",
      "A cloud tool vendor removed leftover test assets.",
      "A hotel chain fixed exposed file shares before breach.",
      "A streaming service removed 3 fake lookalike domains.",
      "A food delivery firm secured mobile endpoints.",
      "A content platform fixes insecure redirect chains.",
      "A charity app passed security reviews ahead of a major release.",
    ],
  },
];
const stories19 = [
  {
    title: "Security Reinforced",
    data: [
      "A smart home brand blocked Wi-Fi spoofing after protocol tests.",
      "A wearable vendor patched exposed debug interfaces.",
      "A factory IoT system secured firmware updates with strong keys.",
      "A health monitoring device disabled hardcoded admin accounts.",
      "A vehicle tracker encrypted its device-cloud data in transit.",
      "A warehouse sensor line closed open telnet ports.",
      "A retail kiosk system fixed default login flaws.",
      "A robotics startup hardened remote access paths.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A medical IoT vendor passed HIPAA firmware security checks.",
      "A smart energy company aligned cloud controls with ISO 27001.",
      "A payment device firm met PCI DSS API requirements.",
      "A smart meter provider enforced GDPR-compliant access control.",
      "A healthcare tracker passed the SOC 2 authentication review.",
      "A city IoT system secured edge devices for NIST compliance.",
      "A fitness wearable vendor passed regional privacy audits.",
      "A transport device maker fulfilled IoT-specific ENISA guidelines.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "An industrial pump controller limited endpoint exposure.",
      "A farming device fixed command injection points.",
      "A home automation app improved authentication layers.",
      "A logistics provider hardened token and session logic.",
      "A smart speaker brand reduced attack surface in APIs.",
      "A cloud storage client reworked firmware permissions.",
      "A drone manufacturer fixed GPS data spoofing paths.",
      "A traffic sensor firm isolated admin channels.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A smart lighting system added fallback auth and logging.",
      "A remote meter system survived endpoint brute-force attempts.",
      "A wearable app recovered from token misuse detection.",
      "A retail device stayed protected during real-world DDoS.",
      "A hospital monitoring tool enforced backup access systems.",
      "A drone control network blocked rogue telemetry.",
      "A smart building firm deployed encrypted Wi-Fi mesh links.",
      "A school safety system restored secure service during a live breach test.",
    ],
  },
];
const stories20 = [
  {
    title: "Security Reinforced",
    data: [
      "A retail chain shut down risky ports after external testing.",
      "A hotel group patched SQL flaws in its booking system.",
      "A payment app stopped session leaks in admin pages.",
      "A food app removed unsafe plugins in checkout flows.",
      "A charity secured cloud assets from PCI risk exposure.",
      "A delivery firm upgraded SSL on all public servers.",
      "A gift store blocked API abuse in mobile purchases.",
      "A finance firm reduced network permissions in PCI zones.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A merchant passed PCI DSS Level 1 with no findings.",
      "A restaurant met SAQ-A rules by reducing card scope.",
      "An ecommerce site protected card data before audit.",
      "A fintech app applied PCI DSS 4.0 encryption rules.",
      "A retail chain removed log files that leaked data.",
      "A ticket platform added tokenization controls.",
      "A hardware shop passed ROC with full documentation.",
      "A crypto exchange improved token storage for safety.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A marketplace blocked IP scans on cardholder systems.",
      "A delivery firm added tight firewall rules and alerts.",
      "A media group enforced MFA on PCI-connected assets.",
      "A store cleared out test and unused accounts.",
      "A food app secured third-party webhook calls.",
      "A subscription app removed exposed dev APIs.",
      "A retail POS vendor limited access to key devices.",
      "A repair center locked down remote connections.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A payment app now runs PCI scans every quarter.",
      "A billing tool logs all user activity near card data.",
      "A rewards app set alerts for all scope and config changes.",
      "A cloud platform added zones just for card storage.",
      "A vendor portal locks accounts after failed access tries.",
      "A utility app audits all card processing flows monthly.",
      "A grocery chain tracks token use across all services.",
      "A food truck app now enforces encryption on all logins.",
    ],
  },
];
const stories21 = [
  {
    title: "Security Reinforced",
    data: [
      "A retailer traced malware to one machine and removed it fast",
      "A tech firm cleaned out keyloggers on five user laptops",
      "A bank blocked VPN access from an ex-employee’s device",
      "A media outlet found and removed remote tools missed by antivirus software",
      "A law firm stopped the attacker from spreading from one infected user",
      "A distributor blocked odd traffic from spreading data at night",
      "A SaaS firm erased fake admin accounts used in phishing",
      "A clinic removed clipboard hijackers on mobile checkout apps",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A finance company passed the ISO audit after a cleanup",
      "A school secured all systems ahead of the SOC 2 check",
      "A logistics platform cleared PCI issues from endpoints",
      "A legal office closed exposed RDP and locked open ports",
      "A government team avoided breach disclosure with fast action",
      "A healthcare app met HIPAA after fixing logging gaps",
      "A fintech app followed GDPR after cleaning stored keys",
      "A bank met NIST standards using our full system review",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A delivery firm added monitoring after botnet cleanup",
      "A telecom disabled risky remote access tools",
      "A social app upgraded protection across all user devices",
      "A travel app enforced tighter login controls",
      "A file-sharing tool shuts down unused services and ports",
      "A publisher locked admin roles and database access",
      "A gym stopped USB threats with stricter policies",
      "A news portal removed legacy protocols to cut risks",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A fintech platform installed alerts on every device",
      "A warehouse stopped data leaks with outbound rules",
      "A crypto company added regular breach reviews",
      "A hospital team blocked email threats after changes",
      "A car-sharing app now flags odd admin activity fast",
      "A gaming host cut breach response time by half",
      "A survey tool blocked session reuse with new tokens",
      "A utility company limited app access by user role",
    ],
  },
];
const stories22 = [
  {
    title: "Security Reinforced",
    data: [
      "A fintech firm detected weak admin controls before ransomware hit.",
      "A hospital improved its phishing defences after failed simulations.",
      "A logistics company closed firewall gaps found in lateral movement tests.",
      "A media agency blocked web app abuse after simulated attacks.",
      "A SaaS provider spotted gaps in MFA policies during endpoint tests.",
      "A law firm has hardened user groups based on privilege misuse.",
      "A mobile app vendor secured weak API tokens revealed in traffic logs.",
      "A cryptocurrency company discovered exposed SSH keys on its development servers.",
    ],
  },
  {
    title: "Compliance Ensured",
    data: [
      "A retail business passed the PCI-DSS using simulation results.",
      "A law firm proved NIST control strength during the audit.",
      "A healthcare provider met HIPAA logging standards.",
      "A SaaS platform reached GDPR goals through tested defences.",
      "A payment gateway addressed the SOC 2 audit findings early.",
      "A school cleared FERPA violations by securing endpoints.",
      "A cloud host proved ISO readiness after simulation cleanup.",
      "A legal team avoided disclosure rules after proactive testing.",
    ],
  },
  {
    title: "System Hardened",
    data: [
      "A government agency disabled risky ports after simulation alerts.",
      "A telecom firm improved SIEM tuning for silent threats.",
      "A cloud storage company removed legacy access methods.",
      "A bank locked down endpoints with policy updates.",
      "A survey platform removed weak tokens and enforced expiry.",
      "A news company blocked internal C2 traffic paths.",
      "A ride-share app restricted high-risk admin sessions.",
      "A booking site cleaned up default credentials on dev boxes.",
    ],
  },
  {
    title: "Resilience Built",
    data: [
      "A travel app reduced breach detection time by half.",
      "A gaming company set up continuous attack testing.",
      "A distributor found insider risks through controlled attacks.",
      "A clinic added identity checks based on simulation results.",
      "A streaming service automates breach response workflows.",
      "A warehouse team enforced segmentation rules post-simulation.",
      "A fintech app used alerts to block payloads in real time.",
      "A digital agency trained its staff after repeating attack drills.",
    ],
  },
];

  // Define stories arrays (make sure these are already defined with appropriate data)
  let stories = [];
  if (slug === "penetration-testing") {
    stories = stories1;
  } else if (slug === "compliance-consulting") {
    stories = stories2;
  } else if (slug === "extended-detection") {
    stories = stories3;
  } else if (slug === "red-teaming-blue-teaming") {
    stories = stories4;
  } else if (slug === "identity-and-access-management") {
    stories = stories5;
  } else if (slug === "devsecops") {
    stories = stories6;
  } else if (slug === "managed-security") {
    stories = stories7;
  } else if (slug === "cloud-security-solutions") {
    stories = stories8;
  } else if (slug === "vulnerability-assessment") {
    stories = stories9;
  } else if (slug === "cybersecurity-consultancy") {
    stories = stories10;
  } else if (slug === "infrastructure-pentesting") {
    stories = stories11;
  } else if (slug === "web-app-testing") {
    stories = stories12;
  } else if (slug === "mobile-app-testing") {
    stories = stories13;
  } else if (slug === "source-code-review") {
    stories = stories14;
  } else if (slug === "social-engineering") {
    stories = stories15;
  } else if (slug === "wifi-security-assessment") {
    stories = stories16;
  } else if (slug === "api-security") {
    stories = stories17;
  } else if (slug === "iot-security-assessment") {
    stories = stories18;
  } else if (slug === "attack-surface-management") {
    stories = stories19;
  } else if (slug === "compromise-assessment-services") {
    stories = stories20;
  } else if (slug === "pcidss-penetration-testing") {
    stories = stories21;
  } else if (slug === "breach-attack-simulation") {
    stories = stories22;
  } else if (slug === "architecture-review-services") {
    stories = stories22;
  } else if (slug === "purple-teaming") {
    stories = stories22;
  } else if (slug === "privileged-access-management") {
    stories = stories22;
  } else if (slug === "blockchain-security") {
    stories = stories22;
  } else if (slug === "mobile-threat-defence") {
    stories = stories22;
  } else if (slug === "incident-response-retainer") {
    stories = stories22;
  } else if (slug === "ddos-attack-sim") {
    stories = stories22;
  } else if (slug === "caasm") {
    stories = stories22;
  } else if (slug === "cloud-pentesting-solutions") {
    stories = stories21;
  } else if (slug === "soc-service") {
    stories = stories22;
  } else if (slug === "managed-security-providers") {
    stories = stories13;
  } else if (slug === "endpoint-detect-response") {
    stories = stories14;
  } else if (slug === "network-detection-response") {
    stories = stories15;
  } else if (slug === "managed-siem-soar") {
    stories = stories16;
  } else if (slug === "threat-intelligence-hunting") {
    stories = stories17;
  } else if (slug === "mitre-attack-framework") {
    stories = stories18;
  } else if (slug === "custom-reporting-compliance") {
    stories = stories19;
  } else if (slug === "digital-forensics-incident-response") {
    stories = stories10;
  } else if (slug === "insider-threat-monitoring") {
    stories = stories11;
  } else if (slug === "fimm-analysis") {
    stories = stories12;
  } else if (slug === "account-takeover-protection") {
    stories = stories13;
  } else if (slug === "deception-technology") {
    stories = stories14;
  } else if (slug === "identity-threat-detection-response") {
    stories = stories15;
  } else if (slug === "unified-asset-management") {
    stories = stories16;
  } else if (slug === "cyber-risk-quantification") {
    stories = stories17;
  } else if (slug === "identity-access-management") {
    stories = stories18;
  } else if (slug === "data-security-solutions") {
    stories = stories19;
  } else if (slug === "threat-intelligence-solutions") {
    stories = stories10;
  } else if (slug === "emai-lsecurity-solutions") {
    stories = stories11;
  } else if (slug === "zero-trust-network-access") {
    stories = stories12;
  } else if (slug === "waf-services") {
    stories = stories13;
  } else if (slug === "web-security-solutions") {
    stories = stories14;
  } else if (slug === "network-security") {
    stories = stories15;
  } else if (slug === "sase-solutions") {
    stories = stories16;
  } else if (slug === "backup-disaster-recovery") {
    stories = stories17;
  } else if (slug === "iaas") {
    stories = stories18;
  } else if (slug === "micro-segmentation") {
    stories = stories19;
  } else if (slug === "ssd-lifecycle") {
    stories = stories10;
  } else if (slug === "ciso") {
    stories = stories11;
  } else if (slug === "security-maturity-assessment") {
    stories = stories12;
  } else if (slug === "process-policy-audits-reviews") {
    stories = stories13;
  } else if (slug === "governance-risk-compliance") {
    stories = stories14;
  } else if (slug === "senior-management-assurance") {
    stories = stories15;
  } else if (slug === "cs-strategy-roadmap") {
    stories = stories16;
  } else if (slug === "compliance-services") {
    stories = stories17;
  } else if (slug === "soc2") {
    stories = stories18;
  } else if (slug === "hipaa-compliance") {
    stories = stories19;
  } else if (slug === "nist-compliance") {
    stories = stories10;
  } else {
    // stories = [];
    stories = stories10;
  }

  const sideLinks = stories.map((story) => story.title);

  const { title, data } = stories[activeStoryIndex];

  return (
    <div className="success-stories-container">
      <div className="sidebar">
        {sideLinks.map((link, index) => (
          <div
            className={`sidebar-item ${
              index === activeStoryIndex ? "active" : ""
            }`}
            key={index}
            onClick={() => setActiveStoryIndex(index)}
          >
            <span className="sidebar-link">{link}</span>
            <span className="side-line"></span>
          </div>
        ))}
      </div>
      <div className="content2">
        <div className="content-overlay">
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
