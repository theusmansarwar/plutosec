"use client";

import React from "react";
import "./Service2.css";
import { useRouter } from "next/navigation";

const Services3 = ({ slug }) => {

 const services1 = [
  {
    _id: "1",
    image: "/21.png",
    name: "PCI DSS Compliance",
    introduction:
      "Our testers assess your card systems to meet PCI DSS. You secure payment data across VISA, AMEX, and MasterCard networks. We help you avoid costly non-compliance penalties. You also build customer confidence with trusted transaction channels.",
  },
  {
    _id: "2",
    image: "/25.png",
    name: "Prioritized Security",
    introduction:
      "We help you protect credit card transactions. Testing ensures safe processing, storing, and transmitting of sensitive customer payment information every time. You prevent data leaks from payment APIs and point-of-sale systems. Your business stays strong against evolving fraud tactics.",
  },
  {
    _id: "3",
    image: "/12.png",
    name: "Comprehensive Assessments",
    introduction:
      "You strengthen your security approach with detailed assessments. We offer precise findings and suggestions tailored to your systems and business needs. Every test covers real-world attack paths. You receive clear next steps to fix each issue.",
  },
  {
    _id: "4",
    image: "/15.png",
    name: "Tester-Driven Reporting",
    introduction:
      "You receive clear and complete reports from real testers. Formats meet your compliance goals and fit your organization’s internal process structure. We break down each finding in simple terms. Your team acts fast without confusion.",
  },
  {
    _id: "5",
    image: "/24.png",
    name: "UK GDPR Readiness",
    introduction:
      "We test your systems against UK GDPR standards. You find privacy gaps early and prevent major compliance or data breach risks. It reduces legal exposure. Customers feel safer knowing their data gets proper care.",
  },
  {
    _id: "6",
    image: "/23.png",
    name: "DPA 2018 Compliance",
    introduction:
      "You meet the UK Data Protection Act standards. Pentesting highlights weak areas in data flow and helps maintain full regulatory alignment. Security updates based on findings help you avoid regulatory fines. Your data stays within legal limits at all times.",
  },
];
const services2 = [
  {
    _id: "1",
    image: "/20.png",
    name: "Zero False Positives",
    introduction:
      "We help you avoid noise. Our pentesting ensures accurate results so your team focuses only on real and confirmed security risks. You save time by acting only on valid threats. Your team avoids wasted effort on false alarms.",
  },
  {
    _id: "2",
    image: "/24.png",
    name: "Expert-Led Collaboration",
    introduction:
      "Skilled testers work with your developers to fix flaws fast. You get expert help that improves your entire security approach quickly. Each finding includes clear guidance for your IT team. Our approach helps reduce downtime and tighten overall security.",
  },
  {
    _id: "3",
    image: "/15.png",
    name: "Detailed Reporting Standards",
    introduction:
      "Our team follows OSFI guidelines. You receive clear reports in multiple formats to match your compliance and internal audit needs. Reports are easy to share with board members or regulators. Each detail supports your efforts to pass reviews without stress.",
  },
  {
    _id: "4",
    image: "/16.png",
    name: "Finance-Driven Insights",
    introduction:
      "We support finance events and industry panels. You benefit from knowledge shaped by real-time trends and trusted cybersecurity leadership in finance. You gain access to top insights across the financial landscape. This helps you stay alert to future risks and industry shifts.",
  },
  {
    _id: "5",
    image: "/21.png",
    name: "PCI DSS Compliance",
    introduction:
      "We secure your cardholder data across systems. Our pentests help you meet every requirement in PCI DSS and avoid penalties. You strengthen trust across your payment channels. Secure processing gives customers confidence in your services.",
  },
  {
    _id: "6",
    image: "/24.png",
    name: "EU-GDPR Alignment",
    introduction:
      "You protect customer data and meet strict regulations. We help reduce legal risks and secure systems under GDPR and related standards. You avoid fines for privacy breaches. Your brand reputation stays strong with every standard met.",
  },
];

const services3 = [
  {
    _id: "1",
    image: "/22.png",
    name: "A Team That Grows With Your Needs",
    introduction:
      "Our testers hold an OSCP certification at a minimum. They keep learning new skills to face emerging threats and technologies. Their expertise evolves to ensure defenses stay strong. You get a security partner that adjusts as your digital infrastructure changes.",
  },
  {
    _id: "2",
    image: "/20.png",
    name: "Zero False Positives",
    introduction:
      "Packetlabs holds SOC 2 Type II accreditation. Our penetration tests, adversary simulations, and other assessments guarantee accurate results. You avoid false alarms and focus on real risks. It allows your IT team to save time and respond only to confirmed vulnerabilities.",
  },
  {
    _id: "3",
    image: "/23.png",
    name: "In-Depth Security Reviews",
    introduction:
      "Packetlabs goes beyond vulnerability scans. We provide detailed remediation advice to improve your security strategy and IT environment. You get actionable steps to fix critical gaps. Each review is customized to reflect your institution’s size, systems, and risk profile.",
  },
  {
    _id: "4",
    image: "/26.png",
    name: "Discover Hidden Flaws",
    introduction:
      "Automated tools miss many threats. Our testers use manual methods to find deep vulnerabilities. We expose logic flaws and privilege escalations that others overlook. You gain protection that attackers don’t expect. Manual testing helps uncover flaws inside academic portals, admin dashboards, and LMS systems.",
  },
  {
    _id: "5",
    image: "/14.png",
    name: "Real-Time Risk Updates",
    introduction:
      "Our team uses the MITRE ATT&CK Framework to give fast feedback on threats and tactics. You get clear insights to respond quickly and adjust defenses. You stay informed and make faster security decisions when it matters most.",
  },
  {
    _id: "6",
    image: "/26.png",
    name: "Tailored Compliance Support",
    introduction:
      "Packetlabs helps you meet industry regulations like FERPA and CIPA. We provide expert guidance to keep your institution compliant and secure. You avoid fines and reputational harm. Our reports help you pass audits and create a safer digital space for every student.",
  },
];

const services4 = [
  {
    _id: "1",
    image: "/20.png",
    name: "Zero False Positives",
    introduction:
      "You get clean and accurate results through manual testing. We remove noise and help you secure systems without wasting your resources. This keeps your response team focused on verified threats only.",
  },
  {
    _id: "2",
    image: "/21.png",
    name: "Expert-Level Insight",
    introduction:
      "We dig deep into your systems and code. You receive direct guidance that strengthens applications and secures the full development process. Every fix is mapped clearly so your team can act faster.",
  },
  {
    _id: "3",
    image: "/15.png",
    name: "100% Tester-Driven Security",
    introduction:
      "Our experts test every part of your system manually. You uncover actual risks and fix them before attackers get a chance. No automated tools replace the human intelligence behind our results.",
  },
  {
    _id: "4",
    image: "/18.png",
    name: "Complete Risk Visibility",
    introduction:
      "Attackers move across networks fast. We map every route they use and show you how one weak link can break everything. You gain visibility across departments and shared service layers.",
  },
  {
    _id: "5",
    image: "/23.png",
    name: "Government-Focused Compliance",
    introduction:
      "We help you meet NIST and ISO standards. You stay compliant and secure critical data across ministries and public-sector vendors. Our team aligns with your internal audit and procurement cycles.",
  },
  {
    _id: "6",
    image: "/22.png",
    name: "Advanced Threat Simulation",
    introduction:
      "Red team experts use real attack methods. You find hidden gaps across cloud and on-site assets before hackers try to exploit them. You also understand how attackers think and move across networks.",
  },
];


const services5 = [
  {
    _id: "1",
    image: "/19.png",
    name: "Surpass Compliance",
    introduction:
      "A certified tester helps your technology firm stay compliant with SOC 2, NIST SP 800-11.5, ITSG-33, ISO, COBIT, CIS controls, and OSSTMM. You avoid confusion and meet every rule without missing key steps. Compliance becomes easier when your team has a clear understanding of security priorities.",
  },
  {
    _id: "2",
    image: "/18.png",
    name: "Leverage Expert Insights",
    introduction:
      "Over 30 OSCP-certified ethical hackers work as one team to support your goals. You discover security gaps early and act fast to protect your operations before threats cause damage. You also gain industry-specific recommendations that apply to your tech stack and business model.",
  },
  {
    _id: "3",
    image: "/23.png",
    name: "Guarantee Cyber Insurance Eligibility",
    introduction:
      "Penetration tests improve your chances of getting approved for cyber insurance. You reduce your risk score and lower your premiums through real action instead of reports alone. Insurance providers value proactive testing that proves ongoing security efforts.",
  },
  {
    _id: "4",
    image: "/14.png",
    name: "Fortify Security Posture",
    introduction:
      "Global attacks continue to rise, and every breach leaves a lasting impact. You strengthen your defense through expert testing and gain clarity on the weak points inside your systems. Its insight helps your developers build secure code and close exposure points early.",
  },
  {
    _id: "5",
    image: "/26.png",
    name: "Expose What Others Miss",
    introduction:
      "Automated scans stop at the surface, but manual testing digs deeper. You uncover logic flaws and trust issues that attackers target when no one is watching. Our testers mimic real-world attacks so you understand what a breach would look like before it happens.",
  },
  {
    _id: "6",
    image: "/22.png",
    name: "Make Faster Security Decisions",
    introduction:
      "You need answers that match how modern threats work. Our team shows how one small gap can break your system and gives you the proof to act before damage begins. You get clear and prioritized reports that allow leadership.",
  },
];

const services6 = [
  {
    _id: "1",
    image: "/17.png",
    name: "Real-Time Attack Response",
    introduction:
      "Your defenders must react fast. Our red team joins your blue team in live sessions. We launch attacks, trace alerts, and fix issues instantly. You get new rules from each missed signal. This collaboration reduces time-to-response and strengthens your internal detection playbook.",
  },
  {
    _id: "2",
    image: "/22.png",
    name: "No False Alerts",
    introduction:
      "False alarms waste your time. We deliver only accurate results. You get real insights through penetration testing, red teaming, and full security audits. You avoid guesswork and focus on threats that matter. You gain confidence knowing your team is working with clean and verified threat data.",
  },
  {
    _id: "3",
    image: "/24.png",
    name: "Beyond Basic Scans",
    introduction:
      "Basic scans miss real threats. We go deeper to find hidden risks. You stay compliant with healthcare standards like SOC 2, NIST SP800-115, and ITSG-33. You keep systems locked down and ready. Manual testing also uncovers logic flaws and device-specific vulnerabilities that tools overlook.",
  },
  {
    _id: "4",
    image: "/25.png",
    name: "Cyber Defense Across the Five Cs",
    introduction:
      "Every healthcare group must cover five key areas. We focus on compliance, cost, change, continuity, and coverage. You gain a defense plan that fits your goals. This full-spectrum strategy reduces surprises and gives you control.",
  },
  {
    _id: "5",
    image: "/12.png",
    name: "Secure Medical Devices",
    introduction:
      "Hackers target weak devices. We test each one to find open doors. You patch fast and protect equipment that matters. You maintain safety across critical hardware from insulin pumps to imaging systems.",
  },
  {
    _id: "6",
    image: "/13.png",
    name: "Stop Ransomware in Healthcare",
    introduction:
      "Ransomware locks out patient files. We find the cracks that let attackers in. You fix them first and stay in control. You avoid data loss and service downtime. Our tests mimic ransomware paths to see how fast it spreads and how to cut it off.",
  },
];
const services7 = [
  {
    _id: "1",
    image: "/23.png",
    name: "Guaranteed Compliance",
    introduction:
      "Our team guarantees your infrastructure follows NERC CIP, SOC 2, ISO 27000, and NIST SP800-115 standards. This protects operations and lowers insurance costs. We help streamline documentation and deliver the evidence needed to pass audits.",
  },
  {
    _id: "2",
    image: "/20.png",
    name: "Safeguarded Sensitive Information",
    introduction:
      "Energy companies handle sensitive data that hackers want for financial gain or access to other systems. Protecting this data keeps your business secure. We identify where data is exposed, customer portals, and control rooms.",
  },
  {
    _id: "3",
    image: "/21.png",
    name: "Enhanced Efficiency Levels",
    introduction:
      "Penetration tests find weaknesses in your systems. Fixing them improves reliability and efficiency, reducing downtime risk during emergencies or unexpected events. A stronger infrastructure means fewer interruptions, faster incident response, and greater trust in your utility services.",
  },
  {
    _id: "4",
    image: "/26.png",
    name: "Improved Bottom Line",
    introduction:
      "Better security and system efficiency reduce costs linked to breaches. You improve customer satisfaction and retention with reliable, secure services. Each security upgrade helps you save on recovery costs and avoid brand damage from public incidents.",
  },
  {
    _id: "5",
    image: "/22.png",
    name: "Environmental Damage",
    introduction:
      "Cyberattacks can disrupt utilities and cause serious environmental harm. Protecting your systems helps prevent costly damage to natural resources and infrastructure. Critical control systems for gas, water, and electricity must remain secure to avoid contamination.",
  },
  {
    _id: "6",
    image: "/18.png",
    name: "Ransom Payments",
    introduction:
      "Hackers may demand ransom to unlock stolen data. Paying ransom can cause financial strain and force shutdowns of critical energy facilities. We focus on detecting the access points that ransomware actors use. You gain early warning and can neutralize threats before damage spreads.",
  },
];
const services8 = [
  {
    _id: "1",
    image: "/22.png",
    name: "Undetected Spills",
    introduction:
      "Spills cause heavy losses. You face downtime, cleanup costs, and legal damage. Our security checks catch system flaws early. You stop threats before they reach control layers. That keeps your environment safe and your assets protected.",
  },
  {
    _id: "2",
    image: "/19.png",
    name: "Production Disruption",
    introduction:
      "Production delays cost money. You cannot afford downtime. We test every layer of your system to stop attacks before they block your process. You keep equipment online and work without pause.",
  },
  {
    _id: "3",
    image: "/14.png",
    name: "Plant Shutdown",
    introduction:
      "Unplanned shutdowns hit your bottom line. We find every entry point an attacker could use. You patch those paths fast. Your plant runs steadily without sudden failures or breaks.",
  },
  {
    _id: "4",
    image: "/17.png",
    name: "Facility Terrorism",
    introduction:
      "Facility terrorism targets critical infrastructure, which causes severe damage. Comprehensive security testing uncovers risks and protects your assets from sabotage and malicious attacks.",
  },
  {
    _id: "5",
    image: "/15.png",
    name: "Utility Interruption",
    introduction:
      "Utility interruptions disrupt essential services and endanger safety. Securing networks prevents outages and maintains reliable, continuous operations for the energy and water supply.",
  },
  {
    _id: "6",
    image: "/18.png",
    name: "Ransom Payments",
    introduction:
      "Ransomware locks your data and stops your work. We test your defenses before attackers strike. You close every risky gap. Your systems stay in control. You never need to pay to get your own data back.",
  },
];
const services9 = [
  {
    _id: "1",
    image: "/12.png",
    name: "Penetration Testing",
    introduction:
      "Our testers find weak spots in your banking systems caused by software flaws or human error. We guide you to fix them. You also get full insight into your current security posture. That helps you make informed decisions fast. Your system becomes harder to breach.",
  },
  {
    _id: "2",
    image: "/25.png",
    name: "Mobile Application Testing",
    introduction:
      "We check your banking apps for security gaps. Protect customer data and ensure safe transactions on mobile platforms with our thorough testing. You reduce the chance of data theft. Customers get safer access. You also stay compliant with mobile app security standards.",
  },
  {
    _id: "3",
    image: "/26.png",
    name: "Firewall Security Assessment",
    introduction:
      "Our experts evaluate your firewall settings. We ensure strong defenses that block unauthorized access and keep your banking network secure. You reduce exposure to outside threats. Misconfigurations get fixed before they become risky. Your firewall becomes smarter and stronger.",
  },
  {
    _id: "4",
    image: "/21.png",
    name: "Phishing Assessment",
    introduction:
      "We simulate phishing attacks to identify risks. Training your staff helps reduce the chances of falling victim to phishing scams. Your employees learn how attacks work. They respond faster and smarter. You build stronger defenses across every team.",
  },
  {
    _id: "5",
    image: "/16.png",
    name: "Cloud Security Solutions",
    introduction:
      "Protect banking data stored in the cloud. Our solutions secure your cloud environment against breaches and unauthorized access. You keep customer data safe no matter where it's stored. You prevent leaks from weak permissions.",
  },
];




  const getServicesBySlug = (slug) => {
    switch (slug) {
      case "retail-ecommerce":
        return services1;
      case "finance":
        return services2;
      case "education":
        return services3;
      case "government":
        return services4;
      case "technology":
        return services5;
     case "health-care":
        return services6;
    
         case "utilities-energy":
        return services7;
         case "oil-gas":
        return services8;
     case "banking":
        return services9;
    
      default:
        return [];
    }
  };

  const filteredServices = getServicesBySlug(slug);

  return (
    <div className="services2-section">
        <div className="service2-section">  
          <div className="service-area-section">
            <div className="service-grid">
              {filteredServices.map((service) => (
                <div className="service-item2" key={service._id} 
                // onClick={() => router.push(`/services/${service.slug}`)}
                >
  
                  <img src={service.image} alt={service.name} />
                
                  <h2>{service.name}</h2>
                  <p>{service.introduction}</p>
                  
                  </div>
           
              ))}
            </div>
          </div>
        </div>
       
      </div>
  );
};

export default Services3;
