import { ImageResponse } from "next/og";
import { identity, logoSrc } from "@/lib/og";

export const dynamic = "force-static";

/**
 * Home-screen icon at /apple-icon.png: the calendar mark on its own paper (iOS paints transparent corners black).
 * A route with an extension, so the CDN serves it as a file instead of rewriting it to a page.
 */
export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: identity("m10-paper") }}>
        <img src={logoSrc()} width={136} height={136} alt="" />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
