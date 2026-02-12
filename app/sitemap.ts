import type { MetadataRoute } from "next";

const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://learn.zeenomtech.com";
const siteUrl = raw.startsWith("http") ? raw : `https://${raw.trim()}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
