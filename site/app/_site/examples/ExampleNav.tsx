import Link from "next/link";
import { EXAMPLES } from "./list";

export function ExampleNav({ current }: { current: string }) {
  return (
    <nav aria-label="Examples" className="ds-container" style={{ paddingBlock: 16 }}>
      <div className="site-nav">
        <span className="ds-tag-mono">Examples</span>
        {EXAMPLES.map((e) => <Link key={e.slug} className="ds-link" href={`/examples/${e.slug}/`} aria-current={e.slug === current ? "page" : undefined}>{e.title}</Link>)}
      </div>
    </nav>
  );
}
