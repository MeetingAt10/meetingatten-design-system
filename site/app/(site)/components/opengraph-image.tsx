import { SECTIONS } from "@/lib/content";
import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ACCS Design System components";
export const dynamic = "force-static";

export default function Image() {
  return ogImage("ACCS Design System", SECTIONS.components.title, SECTIONS.components.description);
}
