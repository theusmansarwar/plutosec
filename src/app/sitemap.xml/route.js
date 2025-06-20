
export const dynamic = 'force-dynamic'; // 👈 Forces runtime generation

import { getblogSlugs } from "@/DAL/fetch";
const services = [
  { slug: "penetration-testing" },
  { slug: "managed-security" },
  { slug: "red-teaming-blue-teaming" },
  { slug: "cloud-security-solutions" },
  { slug: "extended-detection" },
  { slug: "vulnerability-assessment" },
  { slug: "identity-and-access-management" },
  { slug: "compliance-consulting" },
  { slug: "devsecops" },
  { slug: "cybersecurity-consultancy" },
  { slug: "infrastructure-pentesting" },
  { slug: "web-app-testing" },
  { slug: "mobile-app-testing" },
  { slug: "source-code-review" },
  { slug: "social-engineering" },
  { slug: "wifi-security-assessment" },
  { slug: "api-security" },
  { slug: "iot-security-assessment" },
  { slug: "attack-surface-management" },
  { slug: "compromise-assessment-services" },
  { slug: "pcidss-penetration-testing" },
  { slug: "breach-attack-simulation" },
  { slug: "architecture-review-services" },
  { slug: "purple-teaming" },
  { slug: "privileged-access-management" },
  { slug: "blockchain-security" },
  { slug: "mobile-threat-defence" },
  { slug: "incident-response-retainer" },
  { slug: "ddos-attack-sim" },
  { slug: "caasm" },
  { slug: "cloud-pentesting-solutions" },
  { slug: "soc-service" },
  { slug: "managed-security-providers" },
  { slug: "endpoint-detect-response" },
  { slug: "network-detection-response" },
  { slug: "managed-siem-soar" },
  { slug: "threat-intelligence-hunting" },
  { slug: "mitre-attack-framework" },
  { slug: "custom-reporting-compliance" },
  { slug: "digital-forensics-incident-response" },
  { slug: "insider-threat-monitoring" },
  { slug: "fimm-analysis" },
  { slug: "account-takeover-protection" },
  { slug: "deception-technology" },
  { slug: "identity-threat-detection-response" },
  { slug: "unified-asset-management" },
  { slug: "cyber-risk-quantification" },
  { slug: "identity-access-management" },
  { slug: "data-security-solutions" },
  { slug: "threat-intelligence-solutions" },
  { slug: "emai-lsecurity-solutions" },
  { slug: "zero-trust-network-access" },
  { slug: "waf-services" },
  { slug: "web-security-solutions" },
  { slug: "network-security" },
  { slug: "sase-solutions" },
  { slug: "backup-disaster-recovery" },
  { slug: "iaas" },
  { slug: "micro-segmentation" },
  { slug: "ssd-lifecycle" },
  { slug: "ciso" },
  { slug: "security-maturity-assessment" },
  { slug: "process-policy-audits-reviews" },
  { slug: "governance-risk-compliance" },
  { slug: "senior-management-assurance" },
  { slug: "cs-strategy-roadmap" },
  { slug: "compliance-services" },
  { slug: "soc2" },
  { slug: "hipaa-compliance" },
  { slug: "nist-compliance" }
];

const industries = [
  "retail-ecommerce",
  "finance",
  "government",
  "education",
  "technology",
  "healthcare",
  "utilities-energy",
  "oil-gas",
  "banking",
];

// Make sure you import or define getblogSlugs somewhere
// const getblogSlugs = require('./your-api-file').getblogSlugs;





export async function GET() {
  const baseUrl = "https://plutosec.ca";

  const staticRoutes = [
    "", "careers", "contact", "services", "why-us", "testimonial", "partner",
    "industries", "success-stories", "terms-and-condition", "privacy-policy", "about-us"
  ];

  const serviceRoutes = services.map(s => `services/${s.slug}`);
  const industryRoutes = industries.map(i => `industries/penetration-testing-for-${i}`);

  let blogRoutes = [];
  try {
    const res = await getblogSlugs();
    if (res && res.slugs && Array.isArray(res.slugs)) {
      blogRoutes = res.slugs.map(blog => `blogs/${blog.slug}`);
    }
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
  }

  const allRoutes = [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(route => `
    <url>
      <loc>${baseUrl}/${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${
        route.startsWith("services/") || route.startsWith("industries/") || route.startsWith("blogs/")
          ? "0.7"
          : "0.9"
      }</priority>
    </url>`).join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
