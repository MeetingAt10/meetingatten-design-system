import { Icon } from "@meetingat10/design-system/react";
import { Elevation, Materials, Palette, Radius, Semantic, Spacing, TypeScale } from "./TokenDemos";
import { MotionDemo, IconsDemo } from "./FoundationDemos";

/** Which foundation page shows which specimen (by page slug). */
export const TOKEN_DEMOS: Record<string, { title: string; themed: boolean }> = {
  color: { title: "Palette and semantic colors", themed: true },
  typography: { title: "Type scale", themed: false },
  spacing: { title: "Spacing", themed: false },
  radius: { title: "Radius", themed: false },
  elevation: { title: "Elevation", themed: true },
  motion: { title: "Motion", themed: false },
  treatments: { title: "Materials", themed: true },
  iconography: { title: "Icon vocabulary", themed: false },
};

function Specimen({ slug, theme }: { slug: string; theme: "light" | "dark" }) {
  switch (slug) {
    case "color": return <><Palette /><Semantic theme={theme} /></>;
    case "typography": return <TypeScale />;
    case "spacing": return <Spacing />;
    case "radius": return <Radius />;
    case "elevation": return <Elevation />;
    case "motion": return <MotionDemo />;
    case "treatments": return <Materials />;
    case "iconography": return <IconsDemo />;
    default: return null;
  }
}

/** Build-time specimens for a foundation page; themed specimens render on a light and a dark sheet. */
export function TokenDemo({ slug }: { slug: string }) {
  const demo = TOKEN_DEMOS[slug];
  if (!demo) return null;
  const themes = demo.themed ? (["light", "dark"] as const) : (["light"] as const);
  return (
    <section aria-labelledby="specimen-h" className="site-demo-wrap">
      <h2 id="specimen-h" className="ds-type-h3">{demo.title}</h2>
      <div className={demo.themed ? "site-demo" : "site-demo site-demo--single"}>
        {themes.map((t) => (
          <div key={t} className="ds-body site-demo__panel" data-theme={demo.themed ? t : undefined}>
            {demo.themed && <p className="site-demo__label"><Icon name={t === "light" ? "sun" : "moon"} size={16} />{t === "light" ? "Light" : "Dark"}</p>}
            <Specimen slug={slug} theme={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
