import type { MetadataRoute } from "next";
import { ordinace } from "@/content/klinika";

const url = "https://www.zubniordinace-az.cz";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...ordinace.map((o) => ({
      url: `${url}/ordinace/${o.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
