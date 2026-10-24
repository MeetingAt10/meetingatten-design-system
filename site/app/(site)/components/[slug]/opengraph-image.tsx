import { docsIn, findDoc } from "@/lib/content";
import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ACCS Design System component";
export function generateStaticParams() {
  return docsIn("components").map((d) => ({ slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const d = findDoc("components", (await params).slug)!;
  return ogImage("Components", d.title, d.description);
}
