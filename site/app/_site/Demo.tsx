import { DemoPanel } from "./demos";
import { Swatches, TypeScale } from "./TokenDemos";

/** The live demo in light and dark, side by side. Token demos render at build time; component demos are client components. */
export function Demo({ name }: { name: string }) {
  return (
    <section aria-label={`${name} demo in light and dark`} className="site-demo">
      {(["light", "dark"] as const).map((t) => (
        <div key={t} className="ds-body site-demo__panel" data-theme={t}>
          <p className="ds-eyebrow" style={{ margin: 0 }}>{t}</p>
          {name === "Swatches" ? <Swatches theme={t} /> : name === "TypeScale" ? <TypeScale /> : <DemoPanel name={name} />}
        </div>
      ))}
    </section>
  );
}
