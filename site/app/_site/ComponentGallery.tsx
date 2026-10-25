import Link from "next/link";
import { SectionHeader } from "@meetingat10/design-system/react";
import { docsIn, routeOf, SECTIONS, type Doc } from "@/lib/content";
import { DemoPanel } from "./demos";

/** Wide layouts and grids get a full row (after the other tiles of their category, so the grid has no holes). */
const WIDE = new Set(["app-shell", "navbar", "footer", "top-bar", "hero", "section", "agenda", "table", "reports-table", "timetable", "consultation-slot", "icon"]);

/**
 * The components index as a gallery: every component's default demo in the current theme, grouped by category.
 * Previews are inert (seen, not tabbed through or read twice); the name links to the full page and its tile is the target.
 */
export function ComponentGallery() {
  const groups = new Map<string, Doc[]>();
  for (const d of docsIn("components")) groups.set(d.category ?? "other", [...(groups.get(d.category ?? "other") ?? []), d]);
  for (const docs of groups.values()) docs.sort((a, b) => Number(WIDE.has(a.slug)) - Number(WIDE.has(b.slug)));
  return (
    <main className="ds-container ds-section">
      <SectionHeader
        level={1}
        title={SECTIONS.components.title}
        description="Every component's default demo, in the current theme. Open one for its light and dark sheets, states, props, and keyboard and screen reader notes."
      />
      <nav aria-label="Component categories" className="site-gallery__jump">
        {[...groups].map(([cat, docs]) => (
          <a key={cat} href={`#cat-${cat}`}>{cat}<span className="ds-time">{docs.length}</span></a>
        ))}
      </nav>
      {[...groups].map(([cat, docs]) => (
        <section key={cat} aria-labelledby={`cat-${cat}`} className="site-gallery__group">
          <h2 id={`cat-${cat}`} className="site-index__title"><span className="ds-agenda__chip">{cat}</span><span className="ds-time">{docs.length}</span></h2>
          <ul className="site-gallery">
            {docs.map((d) => (
              <li key={d.slug} className={WIDE.has(d.slug) ? "site-gallery__item site-gallery__item--wide" : "site-gallery__item"}>
                <div className="site-gallery__preview" inert>{d.demo && <DemoPanel name={d.demo} />}</div>
                <div className="site-gallery__text">
                  <h3 className="site-gallery__name"><Link className="site-gallery__link" href={routeOf(d)}>{d.title}</Link></h3>
                  <p className="site-gallery__desc">{d.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
