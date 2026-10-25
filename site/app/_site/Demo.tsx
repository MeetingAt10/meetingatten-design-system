import { Icon } from "@meetingat10/design-system/react";
import { DemoPanel } from "./demos";

/** A component's live demo on two sheets, light and dark (client components; component pages only). */
export function Demo({ name }: { name: string }) {
  return (
    <section aria-labelledby="demo-h" className="site-demo-wrap">
      <h2 id="demo-h" className="ds-type-h3">Live demo</h2>
      <div className="site-demo">
        {(["light", "dark"] as const).map((t) => (
          <div key={t} className="ds-body site-demo__panel" data-theme={t}>
            <p className="site-demo__label"><Icon name={t === "light" ? "sun" : "moon"} size={16} />{t === "light" ? "Light" : "Dark"}</p>
            <DemoPanel name={name} theme={t} />
          </div>
        ))}
      </div>
    </section>
  );
}
