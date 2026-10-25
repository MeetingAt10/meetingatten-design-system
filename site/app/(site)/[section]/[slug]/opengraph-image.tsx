import { allDocs, findDoc, SECTIONS } from "@/lib/content";
import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Meeting At 10 Design System page";
export function generateStaticParams() {
  return allDocs().filter((d) => d.section !== "components").map((d) => ({ section: d.section, slug: d.slug }));
}

export default async function Image({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params;
  const d = findDoc(section, slug)!;
  return ogImage(SECTIONS[d.section].title, d.title, d.description);
}
