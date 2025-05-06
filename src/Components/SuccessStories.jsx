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
  }
  else if (slug === "cybersecurity-consultancy") {
    stories = stories10;
  } else {
    stories = [];
  }

  // Generate sidebar links from story titles
  const sideLinks = stories.map((story) => story.title);

  // Extract the active story data
  const { title, data } = stories[activeStoryIndex];

  return (
    <div className="success-stories-container">
      <div className="sidebar">
        {sideLinks.map((link, index) => (
          <div
            className={`sidebar-item ${index === activeStoryIndex ? "active" : ""}`}
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
