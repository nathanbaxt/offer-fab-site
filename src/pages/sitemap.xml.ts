import locations from "../../content/locations.json";

const SITE = "https://offerfabrications.com.au";

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const entries = [
    { loc: `${SITE}/`, priority: "1.0" },
    { loc: `${SITE}/locations/`, priority: "0.8" },
    ...locations.map((l) => ({ loc: `${SITE}/locations/${l.slug}/`, priority: "0.7" })),
  ];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    entries
      .map(
        (e) =>
          `  <url><loc>${e.loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${e.priority}</priority></url>`
      )
      .join("\n") +
    `\n</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
