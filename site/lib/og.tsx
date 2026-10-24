import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { REPO } from "./content";

export const OG_SIZE = { width: 1200, height: 630 };

// Colors come from the built tokens (Open Graph images cannot use CSS variables).
const light = JSON.parse(readFileSync(join(REPO, "dist/tokens.json"), "utf8")).themes.light.tokens as Record<string, { $value: string }>;
const c = (name: string) => light[`color.${name}`].$value;

/** Build-time Open Graph image: source blue ground, white title, light blue eyebrow. */
export function ogImage(eyebrow: string, title: string, description = "") {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: c("action.default"), color: c("on-action") }}>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: c("info.bg") }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          {description && <div style={{ display: "flex", fontSize: 30, lineHeight: 1.4, maxWidth: 980 }}>{description.slice(0, 140)}</div>}
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>ACCS Design System</div>
      </div>
    ),
    OG_SIZE,
  );
}
