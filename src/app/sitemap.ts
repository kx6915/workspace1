import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    "",
    "/experience",
    "/projects",
    ...projects.map((p) => `/projects/${p.slug}`),
  ].map((path) => ({ url: `${base}${path}`, lastModified: new Date() }));
}
