import { readFileSync } from "node:fs";
import { join } from "node:path";
import { REPO } from "@/lib/content";

type Tok = Record<string, { $value: unknown; cssVar: string }>;
const tokens = () => JSON.parse(readFileSync(join(REPO, "dist/tokens.json"), "utf8")) as { foundations: Tok; themes: Record<string, { tokens: Tok }>; treatments: Record<string, unknown> };

/** Semantic color tokens as swatches, with the value for this panel's theme. */
export function Swatches({ theme }: { theme: "light" | "dark" }) {
  const t = tokens().themes[theme].tokens;
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(9.5rem, 1fr))" }}>
      {Object.entries(t).map(([name, tok]) => (
        <div key={name} className="grid gap-1">
          <span className="rounded-tile" style={{ height: 44, background: `var(${tok.cssVar})`, boxShadow: "inset 0 0 0 1px var(--ds-border-subtle)" }} />
          <code className="ds-mono ds-type-caption">{name.replace(/^color\./, "")}</code>
          <span className="ds-mono ds-type-caption ds-secondary">{String(tok.$value)}</span>
        </div>
      ))}
    </div>
  );
}

const STYLES = ["display", "h1", "h2", "h3", "h4", "body-large", "body", "body-small", "label", "caption", "code"];

/** The Figma text styles, each set in its own style. */
export function TypeScale() {
  const f = tokens().foundations;
  const px = (v: unknown) => String(v).replace("rem", "") === String(v) ? String(v) : `${parseFloat(String(v)) * 16}px`;
  return (
    <div className="grid gap-4">
      {STYLES.map((s) => (
        <div key={s} className="grid gap-1">
          <span className="ds-tag-mono">{s} · {px(f[`type.${s}.size`]?.$value)} / {px(f[`type.${s}.line-height`]?.$value)} · {String(f[`type.${s}.font-weight`]?.$value)}</span>
          <span className={`ds-type-${s}`}>Your Access to the College of Computer Studies</span>
        </div>
      ))}
    </div>
  );
}

