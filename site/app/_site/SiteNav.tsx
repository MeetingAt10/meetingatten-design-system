"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  ["Foundations", "/foundations/"],
  ["Components", "/components/"],
  ["Patterns", "/examples/landing/"],
  ["Guides", "/guides/"],
] as const;

/** Top navigation; the section you are in carries the rule. */
export function SiteNav() {
  const path = usePathname() ?? "/";
  return (
    <nav className="site-nav" aria-label="Main">
      {NAV.map(([label, href]) => {
        const section = href.split("/")[1];
        const current = path.startsWith(`/${section}`);
        return <Link key={href} className="ds-navbar__link" href={href} aria-current={current ? "page" : undefined}>{label}</Link>;
      })}
    </nav>
  );
}
