import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@meetingat10/design-system/react";
import { docsIn, routeOf, SECTIONS, type Doc, type Section } from "@/lib/content";

export function sectionMetadata(section: Section): Metadata {
  const s = SECTIONS[section];
  return { title: s.title, description: s.description, alternates: { canonical: `/${section}/` } };
}

/** Section landing page: every page of the section as ruled rows, grouped by category. */
export function SectionIndex({ section }: { section: Section }) {
  const groups = new Map<string, Doc[]>();
  for (const d of docsIn(section)) groups.set(d.category ?? "pages", [...(groups.get(d.category ?? "pages") ?? []), d]);
  return (
    <main className="ds-container ds-section">
      <SectionHeader level={1} title={SECTIONS[section].title} description={SECTIONS[section].description} />
      <div className="site-index">
        {[...groups].map(([cat, docs]) => (
          <section key={cat} aria-labelledby={`cat-${cat}`} className="site-index__group">
            <h2 id={`cat-${cat}`} className="site-index__title"><span className="ds-agenda__chip">{cat}</span><span className="ds-time">{docs.length}</span></h2>
            <ul className="site-index__list">
              {docs.map((d) => (
                <li key={d.slug}>
                  <Link className="site-index__link" href={routeOf(d)}>{d.title}</Link>
                  <p>{d.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
