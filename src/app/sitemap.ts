import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { articles, comparisons } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    "",
    "/features",
    "/how-it-works",
    "/pricing",
    "/personal-task-management",
    "/team-task-management",
    "/remote-team-task-management",
    "/sprint-management",
    "/team-workload-management",
    "/workflow-automation",
    "/kanban-board",
    "/blog",
    "/guides",
    "/templates",
    "/compare",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route.startsWith("/pricing") ? 0.9 : 0.8,
  }));

  const blogRoutes = articles.map((art) => ({
    url: `${baseUrl}/blog/${art.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const comparisonRoutes = Object.keys(comparisons).map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...blogRoutes, ...comparisonRoutes];
}
