import type { MetadataRoute } from "next";
import { klinika, ordinace } from "@/content/klinika";
import { pravniDokumenty } from "@/content/pravni";

const url = klinika.web;

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
    // Právní texty se mění zřídka a nejsou cílem hledání, ale patří do
    // indexu — vyhledávače je berou jako známku důvěryhodnosti webu.
    ...pravniDokumenty.map((d) => ({
      url: `${url}/${d.slug}`,
      lastModified: new Date(d.aktualizovano),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
