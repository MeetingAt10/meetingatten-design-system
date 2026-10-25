"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { EXAMPLES } from "./list";

/** Links between the pattern pages; the current one is marked. */
export function ExampleLinks() {
  const path = usePathname();
  return (
    <div className="site-example-bar__links">
      {EXAMPLES.map((e) => {
        const href = `/examples/${e.slug}/`;
        return <Link key={e.slug} className="site-example-bar__link" href={href} aria-current={path === href || path === href.slice(0, -1) ? "page" : undefined}>{e.title}</Link>;
      })}
    </div>
  );
}
