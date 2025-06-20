"use client";
import React, { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineGlobal } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { RiCloseCircleFill } from "react-icons/ri";
import "./Header.css";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showHeaderdropdown, setShowHeaderdropdown] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [sideLinks, setSideLinks] = useState("");
  const [language, setLanguage] = useState("EN");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const toggleSubmenu = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  const menuItems = [
    { label: "Industries", path: "/industries" },
    { label: "Why Us", path: "/why-us" },
    { label: "Careers", path: "/careers" },
    { label: "Contact Us", path: "/contact" },
  ];
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const services = [
    {
      heading: "Cyber Risk Management",
      icon: "/1logo.png",
      data: [
        {
          title: "Infrastructure Penetration Testing Services",
          slug: "infrastructure-pentesting",
        },
        { title: "Web Application Testing", slug: "web-app-testing" },
        {
          title: "Mobile Application Testing Services",
          slug: "mobile-app-testing",
        },
        { title: "Source code reviews", slug: "source-code-review" },
        { title: "Social engineering testing", slug: "social-engineering" },
        {
          title: "Wi-Fi Security Assessment Services",
          slug: "wifi-security-assessment",
        },
        {
          title: "API Security Testing Services by plutosec",
          slug: "api-security",
        },
        {
          title: "IoT Security Testing Services",
          slug: "iot-security-assessment",
        },
        {
          title: "Attack Surface Management Services by plutosec",
          slug: "attack-surface-management",
        },
        {
          title: "Compromise Assessment Services by plutosec Cybersecurity",
          slug: "compromise-assessment-services",
        },
        {
          title: "PCI DSS Compliance Penetration Test by plutosec",
          slug: "pcidss-penetration-testing",
        },
        {
          title: "Breach and Attack Simulation Services",
          slug: "breach-attack-simulation",
        },
        // {
        //   title: "Security Architecture Review Services by plutosec",
        //   slug: "architecture-review-services",
        // },
        // { title: "Purple Team Testing", slug: "purple-teaming" },
        // {
        //   title: "Privileged Access Management (PAM)",
        //   slug: "privileged-access-management",
        // },
        // { title: "Blockchain Security", slug: "blockchain-security" },
        // { title: "Mobile Threat Defense (MTD)", slug: "mobile-threat-defence" },
        // {
        //   title: "Cybersecurity Incident Response Retainer Services",
        //   slug: "incident-response-retainer",
        // },
        // {
        //   title: "Simulating DDoS Attacks for Robust Cyber Defense",
        //   slug: "ddos-attack-sim",
        // },
        // { title: "Asset attack surface management", slug: "caasm" },
        // {
        //   title: "Cloud Penetration Testing Services",
        //   slug: "cloud-pentesting-solutions",
        // },
      ],
    },
    // {
    //   heading: "Management Security Services",
    //   icon: "/2logo.png",
    //   data: [
    //     {
    //       title: "SOC as a Service (Security Operations Centre as a Service)",
    //       slug: "soc-service",
    //     },
    //     {
    //       title: "MSSP: Managed Security Service Provider That You Can Rely On",
    //       slug: "managed-security-providers",
    //     },
    //     {
    //       title:
    //         "EDR: Fortify Your Defences with MCS Managed Endpoint Detection and Response",
    //       slug: "endpoint-detect-response",
    //     },
    //     {
    //       title: "NDR: Managed Network Detection and Response",
    //       slug: "network-detection-response",
    //     },
    //     { title: "Managed SIEM and SOAR", slug: "managed-siem-soar" },
    //     {
    //       title: "Threat Intelligence and Hunting Services",
    //       slug: "threat-intelligence-hunting",
    //     },
    //     { title: "MITRE ATTaCK Framework", slug: "mitre-attack-framework" },
    //     {
    //       title: "Custom Reports for Compliance",
    //       slug: "custom-reporting-compliance",
    //     },
    //     {
    //       title:
    //         "Digital Forensic DFIR: Digital Forensics and Incident Response",
    //       slug: "digital-forensics-incident-response",
    //     },
    //     {
    //       title: "Insider threat and behavioral monitoring services",
    //       slug: "insider-threat-monitoring",
    //     },
    //     {
    //       title: "File Integrity Monitoring and Malware Analysis Services",
    //       slug: "fimm-analysis",
    //     },
    //     {
    //       title: "Account Takeover protection",
    //       slug: "account-takeover-protection",
    //     },
    //   ],
    // },
    // {
    //   heading: "Cyber Technology Solutions",
    //   icon: "/3logo.png",
    //   data: [
    //     {
    //       title: "Deception Tech (phishing attack)",
    //       slug: "deception-technology",
    //     },
    //     {
    //       title: "Identity Threat Detection and Response (Separate)",
    //       slug: "identity-threat-detection-response",
    //     },
    //     {
    //       title: "Unified Cyber Security asset management",
    //       slug: "unified-asset-management",
    //     },
    //     {
    //       title: "Cyber risk Quantification",
    //       slug: "cyber-risk-quantification",
    //     },
    //     {
    //       title: "Identity and Access Management Services",
    //       slug: "identity-access-management",
    //     },
    //     { title: "Data security Solutions", slug: "data-security-solutions" },
    //     {
    //       title: "Threat intelligence Solutions",
    //       slug: "threat-intelligence-solutions",
    //     },
    //     {
    //       title: "Email security solution IMP",
    //       slug: "emai-lsecurity-solutions",
    //     },
    //     {
    //       title: "Zero Trust Network Access",
    //       slug: "zero-trust-network-access",
    //     },
    //     { title: "Web Application Firewall Services", slug: "waf-services" },
    //     { title: "Web security solution", slug: "web-security-solutions" },
    //     { title: "Network security solution", slug: "network-security" },
    //     {
    //       title: "Secure access services edge Solutions",
    //       slug: "sase-solutions",
    //     },
    //     {
    //       title: "Backup and Disaster Recovery Services",
    //       slug: "backup-disaster-recovery",
    //     },
    //     { title: "Iaas security solution", slug: "iaas" },
    //     { title: "Micro-segmentation Security", slug: "micro-segmentation" },
    //     {
    //       title: "Secure Software Development Life Cycle (SSDLC)",
    //       slug: "ssd-lifecycle",
    //     },
    //   ],
    // },
    // {
    //   heading: "Compliance & Consulting",
    //   icon: "/4logo.png",
    //   data: [
    //     { title: "CIOS as a services", slug: "ciso" },
    //     {
    //       title: "Security Maturity assessment",
    //       slug: "security-maturity-assessment",
    //     },
    //     {
    //       title: "Process & Policy Audits and Reviews",
    //       slug: "process-policy-audits-reviews",
    //     },
    //     {
    //       title: "Governance, Risk, and Compliance (GRC) Services",
    //       slug: "governance-risk-compliance",
    //     },
    //     {
    //       title: "Senior management assurance",
    //       slug: "senior-management-assurance",
    //     },
    //     {
    //       title: "Cyber Security Strategy and Roadmap",
    //       slug: "cs-strategy-roadmap",
    //     },
    //     {
    //       title:
    //         "ISO 27001, PCI DSS & GDPR IMP (Cybersecurity Compliance Services)",
    //       slug: "compliance-services",
    //     },
    //     {
    //       title: "SOC2 Type II Assessment Services (specify category)",
    //       slug: "soc2",
    //     },
    //     { title: "Hipaa compliance", slug: "hipaa-compliance" },
    //     { title: "NIST compliance", slug: "nist-compliance" },
    //   ],
    // },
  ];

  // Generate sidebar links from story titles
  useEffect(() => {
    const links = services.map((story) => ({
      title: story.heading,
      icon: story.icon,
    }));
    setSideLinks(links);
  }, [showHeaderdropdown]);

  // Extract the active story data
  const { title, data } = services[activeStoryIndex];

  const handleNavClick = (item) => {
    setMobileOpen(false);
    router.push(item.path);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  const controlHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    if (mobileOpen && window.innerWidth < 900) {
      setMobileOpen(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowHeaderdropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="Header">
        <img src="/logo4.png" alt="Logo" onClick={handleLogoClick} />
 <div className="menu-icon" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <RiCloseCircleFill className="close-icon" /> : <FiMenu />}
      </div>
        <ul className="nav">
          <li
            onMouseEnter={() => setShowHeaderdropdown(true)}
            onClick={() => setShowHeaderdropdown(true)}
          >
            Services <FaCaretDown />
          </li>

          {menuItems.map((item) => (
            <li key={item.label} onClick={() => handleNavClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className="language-select">
          <AiOutlineGlobal className="icons" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="EN">English</option>
          </select>
        </div>
      </div>
      {showHeaderdropdown && (
        <div
          className="dropdown-overlay"
          ref={dropdownRef}
          onMouseLeave={() => {
            setShowHeaderdropdown(false);
            setActiveStoryIndex(0);
          }}
        >
          <div className="header-dropdown">
            <div className="sidebar">
              {sideLinks.map((link, index) => (
                <div
                  className={`sidebar-items ${
                    index === activeStoryIndex ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setActiveStoryIndex(index)}
                >
                  <span className="sidebar-link">
                    <img src={link.icon} /> {link.title}
                  </span>
                  <span className="side-line"></span>
                </div>
              ))}
            </div>
            <div className="content3">
              <div className="content-overlay">
                <ul>
                  {data.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => router.push(`/services/${item.slug}`)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {mobileOpen && (
      <div className="mobile-header">
        <ul>
          <li>
            <span
            className="flex-span-list"
              style={{ cursor: "pointer" }}
              onClick={() => toggleDropdown()}
            >
             <span> Services </span> <FaCaretDown />
            </span>
            {showDropdown && (
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <span
                      onClick={() => toggleSubmenu(index)}
                      style={{
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        justifyContent:"space-between"
                      }}
                      
                    >
                     <span> {service.heading}</span> <FaCaretDown />
                    </span>

                    {openIndex === index && (
                      <ul style={{ marginLeft: "20px" }}>
                        {service.data.map((item, idx) => (
                          <li
                            key={idx}
                            onClick={() =>
                              router.push(`/services/${item.slug}`)
                            }
                            style={{ cursor: "pointer" }}
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
           {menuItems.map((item) => (
            <li key={item.label} onClick={() => handleNavClick(item)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      )}
    </>
  );
};

export default Header;
