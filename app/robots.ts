import type { MetadataRoute } from "next";
import { klinika } from "@/content/klinika";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${klinika.web}/sitemap.xml`,
  };
}
