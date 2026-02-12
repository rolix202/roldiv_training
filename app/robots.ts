import type { MetadataRoute } from "next";

const raw = process.env.NEXT_PUBLIC_SITE_URL || "https://learn.zeenomtech.com";
const siteUrl = raw.startsWith("http") ? raw : `https://${raw.trim()}`;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
