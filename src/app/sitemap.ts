import type { MetadataRoute } from "next";
import { experiences, projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    "",
    "/experience",
    "/projects",
    ...experiences.map((item) => `/companies/${item.slug}`),
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
