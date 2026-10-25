import Link from "next/link";
import { docsIn, routeOf, type Doc } from "@/lib/content";

/** Section rail, grouped by category; the current page is the solid block. */
export function Sidebar({ current }: { current: Doc }) {
  const groups = new Map<string, Doc[]>();
  for (const d of docsIn(current.section)) groups.set(d.category ?? "", [...(groups.get(d.category ?? "") ?? []), d]);
  return (
    <nav className="site-sidebar" aria-label={`${current.section} pages`}>
      {[...groups].map(([cat, docs]) => (
        <div key={cat || "pages"} className="site-sidebar__group">
          {cat && <h2 className="site-sidebar__label">{cat}</h2>}
          <ul>
            {docs.map((d) => (
              <li key={d.slug}><Link className="ds-nav-item" href={routeOf(d)} aria-current={d.slug === current.slug ? "page" : undefined}><span className="ds-nav-item__label">{d.title}</span></Link></li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
