import { SECTIONS, type Section } from "@/lib/content";
import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ACCS Design System section";
export function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({ section }));
}

export default async function Image({ params }: { params: Promise<{ section: string }> }) {
  const s = SECTIONS[(await params).section as Section];
  return ogImage("ACCS Design System", s.title, s.description);
}
