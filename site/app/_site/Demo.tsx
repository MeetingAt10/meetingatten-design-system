import { DemoPanel } from "./demos";

/** A component's live demo in light and dark, side by side (client components; component pages only). */
export function Demo({ name }: { name: string }) {
  return (
    <section aria-labelledby="demo-h">
      <h2 id="demo-h" className="ds-type-h3" style={{ margin: "24px 0 0" }}>Live demo</h2>
      <div className="site-demo">
        {(["light", "dark"] as const).map((t) => (
          <div key={t} className="ds-body site-demo__panel" data-theme={t}>
            <p className="ds-eyebrow" style={{ margin: 0 }}>{t}</p>
            <DemoPanel name={name} theme={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
