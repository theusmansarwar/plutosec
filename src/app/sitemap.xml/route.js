// app/sitemap.xml/route.js

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
      "terms-and-condition",
      "privacy-policy",
      "about-us",
    ];
  
    const serviceRoutes = services.map((s) => `services/${s.slug}`);
    const allRoutes = [...staticRoutes, ...serviceRoutes];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>${route.includes("services/") ? "0.7" : "0.9"}</priority>
      </url>`
      )
      .join("")}
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  