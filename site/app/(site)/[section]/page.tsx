import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeader } from "@meetingat10/design-system/react";
import { docsIn, routeOf, SECTIONS, type Doc, type Section } from "@/lib/content";

type Params = { params: Promise<{ section: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(SECTIONS).map((section) => ({ section }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const s = SECTIONS[(await params).section as Section];
  return s ? { title: s.title, description: s.description, alternates: { canonical: `/${(await params).section}/` } } : {};
}

export default async function SectionPage({ params }: Params) {
  const section = (await params).section as Section;
  if (!SECTIONS[section]) notFound();
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
