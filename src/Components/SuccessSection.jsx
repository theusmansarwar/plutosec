import React from "react";
import "./SuccessSection.css";

const SuccessSection = () => {
  const successStories = [
    {
      title: "NEGUP Solution",
      image: "./negup1.png",
      description:
        "Every security challenge tells a story. PlutoSec builds strong protection through clear strategies that work in real environments. Our experience with NEGUP Solution proves that serious threats can shift into lasting resilience through the right balance of innovation, precision, and smart execution.",
      problems: [
         "The company lacked a system to detect threats across its network.",
" Phishing emails hit employees often and cause problems.",
" The firewall was weak and could not secure internal systems well.",
" Devices did not have endpoint protection installed.",
" Cloud data was open without strong security controls.",
" Employees did not know basic cybersecurity rules.",
" The network faced ransomware risks without safeguards.",
 "No alerts warned of intrusions in real time.",
 "Antivirus tools were outdated and weak.",
 "The company had no disaster recovery plan.",
      ],
      solutions: [
      "PlutoSec set up a SIEM tool for central threat monitoring", "AI filters blocked phishing emails before they reached staff", "Advanced firewalls added strong layers of security", "Endpoint detection and response tools covered all devices", "Cloud platforms have strict access controls", "Staff learned cybersecurity through training", "Ransomware defenses were put in place", "Real-time alerts sped up breach response", "All tools received upgrades to the latest secure versions", "A custom disaster recovery plan secured business continuity"

      ],
      outcomes: [
       "The company gained full visibility of threats at all times", "Phishing incidents fell by 98%", "Network defenses stopped outside attacks well", "All devices got reliable protection", "Cloud file sharing became secure with encryption", "Employees became key defenders against risks", "Ransomware attacks stopped completely", "Breach response time fell below three minutes", "Systems stayed updated with patches and fixes", "Backups and recovery plans kept the business running smoothly"

      ],
      cardData: [
        { title: "14", description: "Days Completion" },
        { title: "92%", description: "Fewer Vulnerabilities" },
        { title: "PHIPA", description: "Passed Audit" }
      ]
    },
    {
      title: "Utho",
      image: "./utho1.png",
      description:
        "Cyber threats hit without warning. Utho relied on PlutoSec to build real-time protection that keeps their infrastructure safe around the clock. Our custom strategy improved server security, locked customer data, and defended the cloud system from deep attacks and hidden threats.",
      problems: [
        "Brute force attacks targeted Utho’s cloud servers almost every day", "The system had no defense in place to stop DDoS attacks", "Threats inside the backend infrastructure stayed hidden due to low visibility", "Admin panels used weak authentication that attackers could bypass", "Data moved across the network without encryption", "Server updates did not follow a proper schedule", "Logs from different systems were not tracked in one place", "Plugins carried malware that posed serious risks", "Third-party APIs were used without proper checks", "Server backups were not tested for reliability"

      ],
      solutions: [
    "PlutoSec applied hardening protocols to protect all servers", "DDoS protection and IP filtering were added to stop network floods", "Tools were deployed to detect hidden infrastructure threats", "Multi-factor authentication was enabled for admin-level access", "SSL and TLS encryption secure all data during transmission", "Server patching was automated to avoid delays", "A central SIEM platform was added to track all logs", "Scans were run to catch and remove malicious plugins", "API access was secured with gateway rules and limits", "All backups were tested using regular integrity checks"

      ],
      outcomes: [
      "Server uptime remained at 100% even during active threats", "Over 5,000 brute force attacks were blocked every month", "Admins could see all infrastructure activity in real time", "Admin access became secure with strong MFA controls", "Data moved through a safe that encrypted channels without leaks", "Security patches were always up to date after automation", "Real-time alerts helped the team react without delay", "All plugin-based attacks were stopped completely", "Harmful API requests were detected and blocked instantly", "Backup systems worked smoothly and restored data without issues"

      ],
      cardData: [
        { title: "21", description: "Days Completion" },
        { title: "5,000+", description: "Threats Blocked" },
        { title: "100%", description: "Server Uptime" }
      ]
    },
    {
      title: "ParaMed",
      image: "./paramed1.png",
      description:
        "Healthcare systems require more than care and need strong protection. ParaMed chose PlutoSec to guard their digital world. We provide solutions that keep patient data safe, meet all regulations, and secure medical operations. All this happened without stopping the daily care they deliver.",
      problems: [
     "Patient records sat on weak systems, which risked data exposure", "Data is moved without encryption, which makes it easy to intercept", "ParaMed faced a heavy HIPAA compliance fines risk", "Remote access lacked security, which allowed unauthorized entry", "Old software raises the chances of cyberattacks", "Third-party vendors accessed data without control", "Role-based access control gave too much access", "No central incident response system caused slow reactions", "Medical staff faced frequent phishing attacks",

      ],
      solutions: [
       "Patient data moved to a secure cloud platform", "Full encryption is applied to all data transfers", "Systems are audited for full HIPAA compliance", "Remote staff used secure VPN access", "Patch management kept software up to date", "Third-party access is logged and tightly controlled", "Role-based access limits data views strictly", "Automated incident response installed", "Staff trained to recognize and report phishing", "Real-time threat dashboards showed alerts immediately"

      ],
      outcomes: [
       "Patient data remains secure and monitored 24/7", "ParaMed passed compliance audits with zero violations", "Remote access risks dropped to zero", "Phishing attacks reduced by 93%", "Staff became strong first defenders against threats", "Third-party data access is fully tracked and controlled", "System uptime improved, and response times shortened", "Threats are detected in under five seconds", "Medical staff work safely from any location", "Patient trust grew due to solid data protection"

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
