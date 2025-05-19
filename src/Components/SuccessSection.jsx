import React from "react";
import "./SuccessSection.css";

const SuccessSection = () => {
  const successStories = [
    {
      title: "NEGUP Solution",
      image: "./negup.png",
      description:
        "Every security challenge tells a story. PlutoSec builds strong protection through clear strategies that work in real environments. Our experience with NEGUP Solution proves that serious threats can shift into lasting resilience through the right balance of innovation, precision, and smart execution.",
      problems: [
        "No centralized threat detection system",
        "Frequent phishing email attacks",
        "Weak firewall and network security",
        "No endpoint protection across devices",
        "Unsecured cloud data access",
        "Lack of employee security awareness",
        "Vulnerability to ransomware threats",
        "No real-time intrusion alerts",
        "Outdated antivirus and software tools",
        "Absence of a disaster recovery plan"
      ],
      solutions: [
        "Deployed SIEM for centralized threat analysis",
        "Implemented AI-based email filtering",
        "Installed advanced firewalls with layered security",
        "Rolled out endpoint detection and response (EDR)",
        "Secured cloud platforms with access control",
        "Conducted staff cyber awareness training",
        "Introduced ransomware prevention protocols",
        "Enabled real-time breach alert system",
        "Upgraded to the latest cybersecurity tools",
        "Designed a custom disaster recovery strategy"
      ],
      outcomes: [
        "24/7 visibility into potential cyber threats",
        "98% reduction in phishing-related incidents",
        "Strong perimeter defense across the network",
        "Full device-level protection company-wide",
        "Controlled and encrypted cloud file sharing",
        "Staff became the first line of cyber defense",
        "Zero ransomware incidents post-implementation",
        "Fast threat response time under 3 minutes",
        "The system is always up-to-date and patched",
        "Business continuity is secured through backups"
      ],
      cardData: [
        { title: "14", description: "Days Completion" },
        { title: "92%", description: "Fewer Vulnerabilities" },
        { title: "PHIPA", description: "Passed Audit" }
      ]
    },
    {
      title: "Utho",
      image: "./utho.png",
      description:
        "Cyber threats hit without warning. Utho relied on PlutoSec to build real-time protection that keeps their infrastructure safe around the clock. Our custom strategy improved server security, locked customer data, and defended the cloud system from deep attacks and hidden threats.",
      problems: [
        "Frequent brute force attacks on cloud servers",
        "No DDoS mitigation in place",
        "Limited visibility into backend infrastructure threats",
        "Weak authentication on admin panels",
        "Unencrypted data transmissions",
        "Inconsistent server patching schedules",
        "No central log monitoring system",
        "Risk of malware injection via plugins",
        "Unverified third-party API access",
        "Lack of server backup validation"
      ],
      solutions: [
        "Applied server hardening protocols across the infrastructure",
        "Integrated DDoS protection and IP filtering",
        "Deployed infrastructure threat intelligence tools",
        "Enforced multi-factor authentication for admin access",
        "Secured all data with SSL/TLS encryption",
        "Automated patching and update workflows",
        "Deployed centralized log management (SIEM)",
        "Scanned and isolated malicious scripts/plugins",
        "Set up API gateway controls and rate-limiting",
        "Validated backups with integrity checks regularly"
      ],
      outcomes: [
        "100% server uptime maintained under threat",
        "Blocked over 5,000 brute force attempts monthly",
        "Enhanced infrastructure visibility in real-time",
        "Secured admin control with MFA enforcement",
        "Protected client data through encrypted channels",
        "Zero breaches due to outdated patches",
        "Real-time alerting minimized response delays",
        "Malicious plugin activity dropped to zero",
        "API abuse attempts identified and blocked",
        "Reliable, secure backup recovery guaranteed"
      ],
      cardData: [
        { title: "21", description: "Days Completion" },
        { title: "5,000+", description: "Threats Blocked" },
        { title: "100%", description: "Server Uptime" }
      ]
    },
    {
      title: "ParaMed",
      image: "./paramed.png",
      description:
        "Healthcare systems require more than care and need strong protection. ParaMed chose PlutoSec to guard their digital world. We provide solutions that keep patient data safe, meet all regulations, and secure medical operations. All this happened without stopping the daily care they deliver.",
      problems: [
        "Patient records stored on vulnerable systems",
        "No encryption on data in transit",
        "Risk of HIPAA non-compliance fines",
        "Unsecured remote access for medical staff",
        "Outdated software on internal systems",
        "Limited visibility into third-party data access",
        "Inadequate role-based access control",
        "No centralized incident response system",
        "High risk from phishing targeting medical staff",
        "Lack of real-time threat detection tools"
      ],
      solutions: [
        "Migrated patient data to a secure cloud platform",
        "Applied end-to-end encryption for data in transit",
        "Audited systems for full HIPAA compliance",
        "Implemented secure VPN for remote staff access",
        "Deployed patch management across all endpoints",
        "Controlled third-party integrations with access logs",
        "Introduced RBAC across all medical systems",
        "Installed automated incident response workflows",
        // "Conducted a phishing simulation and staff training",
        // "Integrated real-time threat intelligence dashboard"
      ],
      outcomes: [
        "Patient data is secured and monitored 24/7",
        "Passed compliance audit with zero violations",
        "Eliminated unauthorized remote data access",
        "Reduced phishing success rate by 93%",
        "Staff trained to identify and report threats",
        "Third-party access became fully traceable",
        "Improved system uptime and faster response",
        "Threats are now detected in under 5 seconds",
        "Medical staff work safely from any location",
        "Built patient trust through strong data protection"
      ],
      cardData: [
        { title: "93%", description: "Phishing Drop" },
        { title: "0", description: "HIPAA Violations" },
        { title: "24/7", description: "Data Monitoring" }
      ]
    }
  ];

  return (
    <div className="success-section-wrapper">
      {successStories.map((story, index) => (
        <div key={index} className="success-section">
          <div className="header">
            <div className="header-left">
              <h1>{story.title}</h1>
              <p>{story.description}</p>
            </div>
            <div className="header-right">
              <img src={story.image} alt={story.title} />
            </div>
          </div>
          <div className="success-cards-section">
            <div className="top">
              {[
                { title: "Problems", items: story.problems },
                { title: "Solutions", items: story.solutions },
                { title: "Outcomes", items: story.outcomes }
              ].map((card, idx) => (
                <div key={idx} className="info-card">
                  <h2 className="info-title">{card.title}</h2>
                  <ul className="info-list">
                    {card.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bottom">
              {story.cardData.map((card, i) => (
                <div key={i} className="number-card">
                  <strong>{card.title}</strong>
                  <span>{card.description}</span>
                </div>
              ))}
            </div>
          </div>
            <img className="heading-img" src="/headingimg.svg" />
        </div>
      ))}
    </div>
  );
};

export default SuccessSection;
