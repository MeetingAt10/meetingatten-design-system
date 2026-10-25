import { ogImage, OG_SIZE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Meeting At 10 Design System";
export const dynamic = "force-static";

export default function Image() {
  return ogImage("Design system 1.0", "The faculty door, rebuilt as an interface.", "Tokens, themes and React components for the ACCS landing, portal and admin, and the Meeting At 10 site.");
}
