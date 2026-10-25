import { ImageResponse } from "next/og";
import { identity, logoSrc } from "@/lib/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

/** Home-screen icon: the calendar mark on its own paper (iOS paints transparent corners black). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: identity("m10-paper") }}>
        <img src={logoSrc()} width={136} height={136} alt="" />
      </div>
    ),
    size,
  );
}
