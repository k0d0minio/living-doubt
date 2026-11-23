import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["/", "/experience", "/prices", "/faq", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
