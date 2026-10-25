import { SECTIONS } from "@/lib/content";
import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Meeting At 10 Design System components";
export const dynamic = "force-static";

export default function Image() {
  return ogImage("Design system", SECTIONS.components.title, SECTIONS.components.description);
}
