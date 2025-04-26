import React, { useEffect, useRef, useState } from 'react';
import './Terminal.css';

const scriptLines = [    "Starting enhanced PlutoSec terminal...",
    "Initializing security test suite...",
    "Scanning for vulnerabilities...",
    "✓ Firewall configuration verified",
    "✓ Endpoint protection active",
    "✓ SSL certificate valid",
    "Running penetration tests...",
    "✓ No critical threats found",
    "✓ All systems secure 🔐",
    "Security testing complete ✅",
    "Loading authentication modules...",
    "✓ Two-factor authentication enabled",
    "✓ Session timeout set to 15 minutes",
    "✓ Biometric fallback active",
    "Validating encryption protocols...",
    "✓ AES-256 in use",
    "✓ RSA public key verified",
    "✓ HMAC integrity checks enabled",
    "Monitoring network traffic...",
    "✓ No anomalies detected",
    "✓ Ingress and egress routes clean",
    "✓ Suspicious IPs blocked",
    "Checking DNS security...",
    "✓ DNSSEC verified",
    "✓ No DNS spoofing attempts",
    "✓ Resolver secure",
    "Auditing user privileges...",
    "✓ No unauthorized escalations",
    "✓ Admin accounts verified",
    "✓ Privileged roles reviewed",
    "Inspecting logs for breaches...",
    "✓ Logs intact",
    "✓ No tampering detected",
    "✓ Audit trail complete",
    "Verifying software integrity...",
    "✓ Hash values match",
    "✓ Packages unaltered",
    "✓ All binaries signed",
    "Testing web app firewalls...",
    "✓ WAF rules loaded",
    "✓ OWASP Top 10 mitigated",
    "✓ Injection attempts blocked",
    "Reviewing access control policies...",
    "✓ Role-based access enforced",
    "✓ Principle of least privilege followed",
    "✓ Access control lists optimized",
    "Conducting brute-force protection tests...",
    "✓ Login attempts rate-limited",
    "✓ CAPTCHA enabled",
    "✓ Lockout thresholds configured",
    "Simulating phishing scenarios...",
    "✓ Awareness training passed",
    "✓ Email filters effective",
    "✓ No credentials leaked",
    "Evaluating cloud security posture...",
    "✓ IAM roles reviewed",
    "✓ Bucket permissions restricted",
    "✓ Encryption at rest enabled",
    "Testing API security...",
    "✓ API keys secured",
    "✓ Rate limiting configured",
    "✓ CORS policies enforced",
    "Running malware scans...",
    "✓ No threats found",
    "✓ Signatures updated",
    "✓ Heuristic analysis clean",
    "Inspecting physical security logs...",
    "✓ No unauthorized entry",
    "✓ Surveillance active",
    "✓ Biometrics operational",
    "Analyzing container security...",
    "✓ Containers isolated",
    "✓ Images scanned",
    "✓ Runtime security active",
    "Validating CI/CD pipeline security...",
    "✓ Secrets not exposed",
    "✓ Code scanned pre-deploy",
    "✓ Deployment verified",
    "Reviewing third-party dependencies...",
    "✓ No known CVEs",
    "✓ Packages updated",
    "✓ Licenses compliant",
    "Testing password policies...",
    "✓ Complexity requirements met",
    "✓ History enforced",
    "✓ Rotation scheduled",
    "Verifying mobile app security...",
    "✓ Secure storage used",
    "✓ SSL pinning active",
    "✓ Root detection implemented",
    "Simulating DDoS attack...",
    "✓ Auto-scaling effective",
    "✓ Rate limits triggered",
    "✓ Services remained online",
    "Evaluating incident response plan...",
    "✓ Contacts updated",
    "✓ Runbook tested",
    "✓ Response time acceptable",
    "Checking telemetry systems...",
    "✓ Real-time alerts functional",
    "✓ Metrics consistent",
    "✓ Dashboards updated",
    "Scanning for rogue devices...",
    "✓ All devices known",
    "✓ MAC filtering enabled",
    "✓ Rogue APs blocked",
    "Testing backups and recovery...",
    "✓ Backups recent",
    "✓ Restore successful",
    "✓ RPO/RTO targets met",
    "Analyzing insider threat vectors...",
    "✓ Behavior analytics clean",
    "✓ No data exfiltration attempts",
    "✓ Privileged actions logged",
    "Evaluating remote work security...",
    "✓ VPN usage enforced",
    "✓ Remote wipe enabled",
    "✓ Endpoint compliance verified",
    "Conducting zero-day simulation...",
    "✓ No exploitation vectors found",
    "✓ Patch management current",
    "✓ EDR detected anomalies",
    "Inspecting firmware integrity...",
    "✓ No unsigned firmware",
    "✓ Bootloader locked",
    "✓ Hardware secure boot enabled",
    "Analyzing blockchain integration...",
    "✓ Smart contracts verified",
    "✓ Private keys protected",
    "✓ Chain integrity validated",
    "Reviewing email security...",
    "✓ SPF/DKIM/DMARC configured",
    "✓ Spam filter optimized",
    "✓ No phishing links passed",
    "Evaluating code repositories...",
    "✓ Access controls in place",
    "✓ No secrets in commits",
    "✓ Review workflows enabled",
    "Performing SIEM test...",
    "✓ Events ingested",
    "✓ Correlation rules active",
    "✓ Threats escalated",
    "Assessing social engineering resistance...",
    "✓ Staff alert",
    "✓ Reporting channels active",
    "✓ No compromise occurred",
    "Testing IoT device security...",
    "✓ Firmware updated",
    "✓ Network segmented",
    "✓ Default creds changed",
    "Evaluating compliance posture...",
    "✓ GDPR aligned",
    "✓ SOC2 controls enforced",
    "✓ Audit-ready documentation",
    "Testing token-based auth systems...",
    "✓ JWT tokens valid",
    "✓ Expiry settings enforced",
    "✓ Revocation logic active",
    "Analyzing browser security...",
    "✓ Extensions audited",
    "✓ HTTPS enforced",
    "✓ Sandboxing active",
    "Final system health check...",
    "✓ All systems green",
    "✓ Risk level: LOW",
    "✓ Security status: STABLE 🛡️",
    "✓ PlutoSec test suite complete 🚀" ];

const Terminal = () => {
  const [displayLines, setDisplayLines] = useState([]);
  const terminalRef = useRef(null);
  const lineRef = useRef([]); // for accumulating characters
  const indexRef = useRef(0); // track line number

  useEffect(() => {
    function typeLine() {
      const currentIndex = indexRef.current;
      if (currentIndex >= scriptLines.length) {
        const cursor = document.createElement("span");
        cursor.className = "cursor";
        terminalRef.current?.appendChild(cursor);
        return;
      }

      const currentLine = scriptLines[currentIndex];
      if (!currentLine) return;

      let charIndex = 0;
      lineRef.current.push('');

      const interval = setInterval(() => {
        if (charIndex < currentLine.length) {
          lineRef.current[currentIndex] += currentLine[charIndex++];
          setDisplayLines([...lineRef.current]);
        } else {
          clearInterval(interval);
          indexRef.current += 1;
          setTimeout(typeLine, 20);
        }

        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, 10);
    }

    typeLine();
  }, []);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="button close"></div>
        <div className="button minimize"></div>
        <div className="button maximize"></div>
      </div>
      <div className="terminal-body" ref={terminalRef}>
        {displayLines.map((line, i) => (
          <div key={i} className="line">{line}</div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
