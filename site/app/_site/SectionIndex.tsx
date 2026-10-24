import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@meetingat10/design-system/react";
import { docsIn, routeOf, SECTIONS, type Doc, type Section } from "@/lib/content";

export function sectionMetadata(section: Section): Metadata {
  const s = SECTIONS[section];
  return { title: s.title, description: s.description, alternates: { canonical: `/${section}/` } };
}

/** Section landing page: every page of the section, grouped by category, with its description. */
export function SectionIndex({ section }: { section: Section }) {
  const groups = new Map<string, Doc[]>();
  for (const d of docsIn(section)) groups.set(d.category ?? "pages", [...(groups.get(d.category ?? "pages") ?? []), d]);
  return (
    <main className="ds-container ds-section">
      <SectionHeader level={1} eyebrow="ACCS Design System" title={SECTIONS[section].title} description={SECTIONS[section].description} />
      <div className="site-index">
        {[...groups].map(([cat, docs]) => (
          <section key={cat} aria-label={cat}>
            <h2>{cat}</h2>
            <ul>
              {docs.map((d) => (
                <li key={d.slug}>
                  <Link className="ds-link-inline" href={routeOf(d)}>{d.title}</Link>
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
