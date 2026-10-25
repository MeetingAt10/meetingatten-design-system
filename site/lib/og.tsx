import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { REPO } from "./content";

export const OG_SIZE = { width: 1200, height: 630 };

// Colors come from the built tokens (images rendered at build time cannot use CSS variables).
const built = JSON.parse(readFileSync(join(REPO, "dist/tokens.json"), "utf8")) as {
  foundations: Record<string, { $value: string }>;
  themes: { light: { tokens: Record<string, { $value: string }> } };
};
const c = (name: string) => built.themes.light.tokens[`color.${name}`].$value;
/** A logo artwork color (color.identity.*). */
export const identity = (name: string) => built.foundations[`color.identity.${name}`].$value;

/** The Meeting At 10 mark from assets/logo as a data URI: the original for light grounds, `dark` for dark ones. */
export const logoSrc = (ground: "light" | "dark" = "light") =>
  `data:image/svg+xml;base64,${readFileSync(join(REPO, "assets/logo", ground === "dark" ? "meeting-at-10-dark.svg" : "meeting-at-10.svg")).toString("base64")}`;

/** Build-time Open Graph image: the Meeting At 10 mark and name on the navy plate, then the title and description in white. */
export function ogImage(context: string, title: string, description = "") {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 80, background: c("plate.bg"), color: c("plate.fg") }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 30 }}>
          <img src={logoSrc("dark")} width={64} height={64} alt="" />
          <div style={{ display: "flex", fontWeight: 800 }}>Meeting At 10</div>
          <div style={{ display: "flex", width: 2, height: 34, background: c("plate.fg"), opacity: 0.5 }} />
          <div style={{ display: "flex", color: c("info.bg") }}>{context}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          {description && <div style={{ display: "flex", fontSize: 30, lineHeight: 1.4, maxWidth: 980 }}>{description.slice(0, 140)}</div>}
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>Meeting At 10 Design System</div>
      </div>
    ),
    OG_SIZE,
  );
}
