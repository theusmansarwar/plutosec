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
    "",
    "careers",
    "contact",
    "services",
    "why-us",
    "testimonial",
    "partner",
    "industries",
    "success-stories",
    "terms-and-condition",
    "privacy-policy",
    "about-us",
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
    </url>`)
    .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
