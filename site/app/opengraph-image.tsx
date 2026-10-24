import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "ACCS Design System";
export const dynamic = "force-static";

export default function Image() {
  return ogImage("Your Access to the College of Computer Studies", "ACCS Design System", "Tokens, themes and React components on the ACCS Figma palette.");
}
