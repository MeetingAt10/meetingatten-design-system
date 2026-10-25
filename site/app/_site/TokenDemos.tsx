import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Badge, DoorPlate, TimeBlock } from "@meetingat10/design-system/react";
import { REPO } from "@/lib/content";

type Tok = Record<string, { $type?: string; $value: unknown; cssVar: string }>;
const tokens = () => JSON.parse(readFileSync(join(REPO, "dist/tokens.json"), "utf8")) as { foundations: Tok; themes: Record<string, { tokens: Tok }> };

/** The 54 pinned primitives, grouped by family (shown as values; product code never uses them directly). */
export function Palette() {
  const f = tokens().foundations;
  const families = new Map<string, Array<[string, string]>>();
  for (const [name, t] of Object.entries(f)) {
    if (!name.startsWith("color.") || name.startsWith("color.identity.")) continue; // identity: the logo artwork, not the palette
    const [, family, step] = name.split(".");
    families.set(family, [...(families.get(family) ?? []), [step, String(t.$value)]]);
  }
  return (
    <div className="site-palette">
      {[...families].map(([family, steps]) => (
        <div key={family} className="site-palette__family">
          <p className="site-caption">{family}</p>
          <div className="site-palette__row">
            {steps.map(([step, hex]) => (
              <div key={step} className="site-swatch">
                <span className="site-swatch__chip" style={{ background: hex }} />
                <span className="site-swatch__name">{step}</span>
                <span className="site-swatch__value">{hex}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** Semantic color tokens for one theme, each painted from its CSS variable. */
export function Semantic({ theme }: { theme: "light" | "dark" }) {
  const t = tokens().themes[theme].tokens;
  return (
    <div className="site-semantic">
      {Object.entries(t).map(([name, tok]) => (
        <div key={name} className="site-swatch">
          <span className="site-swatch__chip" style={{ background: `var(${tok.cssVar})` }} />
          <span className="site-swatch__name">{name.replace(/^color\./, "")}</span>
          <span className="site-swatch__value">{String(tok.$value)}</span>
        </div>
      ))}
    </div>
  );
}

const STYLES = ["display", "h1", "h2", "h3", "h4", "body-large", "body", "body-small", "label", "caption", "code", "time"];

/** Every text style, set in itself, with its size, line height and weight. */
export function TypeScale() {
  const f = tokens().foundations;
  const v = (s: string, k: string) => String(f[`type.${s}.${k}`]?.$value ?? "");
  return (
    <div className="site-type">
      {STYLES.map((s) => (
        <div key={s} className="site-type__row">
          <p className="site-type__meta"><span className="ds-time">{s}</span><span>{v(s, "size")} · {v(s, "line-height")} · {v(s, "font-weight")}</span></p>
          <p className={s === "time" ? "ds-time" : `ds-type-${s}`} style={{ margin: 0 }}>{s === "time" || s === "code" ? "09:00-10:30 · CCS 304 · DEMO-024" : "Your Access to the College of Computer Studies"}</p>
        </div>
      ))}
    </div>
  );
}

/** The spacing scale as ruled bars on the 8px rhythm. */
export function Spacing() {
  const f = tokens().foundations;
  const steps = Object.entries(f).filter(([n]) => n.startsWith("space."));
  return (
    <div className="site-scale">
      {steps.map(([n, t]) => (
        <div key={n} className="site-scale__row">
          <span className="ds-time">{n.replace("space.", "")}</span>
          <span className="site-scale__bar" style={{ width: String(t.$value) }} />
        </div>
      ))}
    </div>
  );
}

/** Radius scale and the component mapping. */
export function Radius() {
  const map = [["chip", "4"], ["block", "6"], ["plate", "6"], ["control", "8"], ["sheet", "12"], ["overlay", "16"], ["full", "pills"]];
  return (
    <div className="site-radius">
      {map.map(([k, v]) => (
        <div key={k} className="site-radius__item">
          <span className="site-radius__shape" style={{ borderRadius: k === "full" ? "var(--ds-radius-full)" : `var(--ds-radius-${k})` }} />
          <span className="site-swatch__name">{k}</span>
          <span className="site-swatch__value">{v}</span>
        </div>
      ))}
    </div>
  );
}

/** Sheets rest flat on a rule; blocks lift; overlays float. */
export function Elevation() {
  return (
    <div className="site-elevation">
      <div className="ds-sheet ds-sheet--pad"><p className="site-swatch__name">Sheet</p><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>Rule border, no shadow.</p></div>
      <div className="site-elevation__lift"><TimeBlock time="10:00" title="Lifted block" meta="hover or drag" lane="consult" /></div>
      <div className="site-elevation__overlay"><p className="site-swatch__name">Overlay</p><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>Shadow, no rule.</p></div>
    </div>
  );
}

/** The materials of the world: sheet and rules, blocks, hatching, highlighter, plate, line forms. */
export function Materials() {
  return (
    <div className="site-materials">
      <figure className="site-material"><div className="site-material__rules" aria-hidden="true" /><figcaption>Rules: a real, labeled time grid</figcaption></figure>
      <figure className="site-material"><div className="site-blocks site-blocks--tight"><TimeBlock time="09:00" title="Schedule" /><TimeBlock time="10:00" title="Community" lane="community" /><TimeBlock time="11:00" title="Consult" lane="consult" /></div><figcaption>Blocks: the lane owns the fill</figcaption></figure>
      <figure className="site-material"><div className="site-material__hatch" aria-hidden="true" /><figcaption>Hatching: taken or restricted</figcaption></figure>
      <figure className="site-material"><p className="ds-type-h4" style={{ margin: 0 }}>A <mark className="ds-highlight">highlighter</mark> stroke</p><figcaption>Highlighter: selection and emphasis</figcaption></figure>
      <figure className="site-material"><DoorPlate code="CCS 304" /><figcaption>Door plate: the ACCS wordmark</figcaption></figure>
      <figure className="site-material"><div className="site-matrix"><Badge>Open</Badge><Badge form="pending">Pending</Badge><Badge form="restricted">Restricted</Badge><Badge form="closed">Closed</Badge></div><figcaption>Line forms: solid, dashed, hatched, struck</figcaption></figure>
    </div>
  );
}
