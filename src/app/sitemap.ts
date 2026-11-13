import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_CONFIG.siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/modules`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/why-us`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_CONFIG.siteUrl}/demo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
