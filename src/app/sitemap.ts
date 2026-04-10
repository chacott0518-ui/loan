import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const last = new Date();

  return [
    {
      url: base,
      lastModified: last,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/resources/business-loan-routing`,
      lastModified: last,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${base}/resources/welcome-ltv-guide`,
      lastModified: last,
      changeFrequency: "monthly",
      priority: 0.72,
    },
  ];
}
