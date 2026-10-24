import Link from "next/link";
import { docsIn, routeOf, type Doc } from "@/lib/content";

/** Section navigation, grouped by component category. */
export function Sidebar({ current }: { current: Doc }) {
  const groups = new Map<string, Doc[]>();
  for (const d of docsIn(current.section)) groups.set(d.category ?? "", [...(groups.get(d.category ?? "") ?? []), d]);
  return (
    <nav className="site-sidebar" aria-label={`${current.section} pages`}>
      {[...groups].map(([cat, docs]) => (
        <div key={cat}>
          {cat && <h2>{cat}</h2>}
          <ul>
            {docs.map((d) => <li key={d.slug}><Link href={routeOf(d)} aria-current={d.slug === current.slug ? "page" : undefined}>{d.title}</Link></li>)}
          </ul>
        </div>
      ))}
    </nav>
  );
}
