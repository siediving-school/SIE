import { MetadataRoute } from "next";
import { posts } from "../lib/posts";

export const dynamic = "force-static";

const SITE_URL = "https://siediving.com";
const LOCALES = ["es", "en", "fr", "de", "zh", "ja"] as const;

function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${SITE_URL}/${locale}${path}`;
  }
  languages["x-default"] = `${SITE_URL}/es${path}`;
  return { languages };
}

const routes = [
  { path: "", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/cursos-padi/open-water", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/cursos-padi/advanced", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/destinos/santa-marta", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/destinos/providencia", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/destinos/isla-fuerte", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/destinos/gorgona", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/destinos/malpelo", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/expediciones", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/tienda/reguladores", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/tienda/bcd", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/tienda/mascaras", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const blogRoutes = posts.map((post) => ({
    url: `${SITE_URL}/es/noticias/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
    alternates: buildAlternates(`/noticias/${post.slug}`),
  }));

  const blogIndexRoute = {
    url: `${SITE_URL}/es/noticias`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    alternates: buildAlternates("/noticias"),
  };

  const staticRoutes = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}/es${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: buildAlternates(path),
  }));

  return [blogIndexRoute, ...staticRoutes, ...blogRoutes];
}
