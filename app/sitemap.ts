import type { MetadataRoute } from "next";
import { getProjects, getSite, locales } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${getSite("fr").domain}`;
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of locales) {
    entries.push({ url: `${base}/${lang}`, lastModified: new Date(), priority: 1 });
    for (const p of getProjects(lang)) {
      entries.push({
        url: `${base}/${lang}/projets/${p.slug}`,
        lastModified: new Date(),
        priority: 0.7,
      });
    }
  }
  return entries;
}
