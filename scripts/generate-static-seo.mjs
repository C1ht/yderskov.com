import fs from 'fs';

const BASE = "https://yderskov.com";

// 1. Parse slugs from app/blog/posts.ts
const postsContent = fs.readFileSync('app/blog/posts.ts', 'utf8');
const slugRegex = /slug:\s*"([^"]+)"/g;
let match;
const slugs = [];
while ((match = slugRegex.exec(postsContent)) !== null) {
  slugs.push(match[1]);
}

// Remove duplicates if any
const uniqueSlugs = [...new Set(slugs)];

// 2. Define static pages
const staticPages = [
  "",
  "villaer",
  "sommerhuse",
  "tilbygninger",
  "lejligheder",
  "special",
  "erhverv",
  "priser",
  "prisberegner",
  "prisberegner/demo",
  "inspiration",
  "blog",
  "om",
  "faq",
  "kontakt",
  "arkitekt-aalborg",
  "arkitekt-sjaelland"
];

// 3. Build sitemap.xml
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

const now = new Date().toISOString().split('T')[0];

staticPages.forEach(p => {
  const url = p ? `${BASE}/${p}` : `${BASE}/`;
  const priority = p === "" ? "1.0" : (["villaer", "sommerhuse", "tilbygninger", "arkitekt-aalborg", "arkitekt-sjaelland"].includes(p) ? "0.9" : "0.8");
  const freq = p === "" || p === "blog" ? "weekly" : "monthly";
  xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
});

uniqueSlugs.forEach(slug => {
  xml += `
  <url>
    <loc>${BASE}/blog/${slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>`;
});

xml += `
</urlset>`;

// Write to root sitemap.xml and public/sitemap.xml
fs.writeFileSync('sitemap.xml', xml);
fs.writeFileSync('public/sitemap.xml', xml);

// 4. Build robots.txt
const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${BASE}/sitemap.xml
`;

// Write to root robots.txt and public/robots.txt
fs.writeFileSync('robots.txt', robotsTxt);
fs.writeFileSync('public/robots.txt', robotsTxt);

console.log("SEO files (sitemap.xml, robots.txt) generated successfully in root and public/!");
