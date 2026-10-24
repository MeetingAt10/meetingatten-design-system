import type { MetadataRoute } from "next";
import { allDocs, routeOf, SECTIONS } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import { EXAMPLES } from "./_site/examples/list";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...Object.keys(SECTIONS).map((s) => `/${s}/`), ...allDocs().map(routeOf), ...EXAMPLES.map((e) => `/examples/${e.slug}/`)];
  return paths.map((p) => ({ url: new URL(p, SITE_URL).toString() }));
}
