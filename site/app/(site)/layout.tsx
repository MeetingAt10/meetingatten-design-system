import Link from "next/link";
import { Footer, Logo } from "@meetingat10/design-system/react";
import { allDocs, routeOf, SECTIONS } from "@/lib/content";
import { EXAMPLES } from "@/app/_site/examples/list";
import { ThemeToggle } from "@/app/_site/ThemeToggle";
import { SiteSearch } from "@/app/_site/SiteSearch";
import { VERSION } from "@/lib/stats";
import { SiteNav } from "@/app/_site/SiteNav";

/** Site chrome for the documentation pages (examples render whole pages of their own). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const items = [
    ...allDocs().map((d) => ({ id: `${d.section}/${d.slug}`, label: d.title, section: SECTIONS[d.section].title, description: d.category, href: routeOf(d), icon: d.section === "components" ? ("code" as const) : d.section === "foundations" ? ("highlighter" as const) : ("books" as const) })),
    ...EXAMPLES.map((e) => ({ id: `examples/${e.slug}`, label: e.title, section: "Patterns", description: e.description, href: `/examples/${e.slug}/`, icon: "door" as const })),
  ];
  return (
    <>
      <a className="ds-skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="ds-container site-header__inner">
          <Link className="site-brand" href="/">
            <Logo />{" "}
            <span className="site-brand__name">Design system</span>
          </Link>
          <SiteNav />
          <div className="site-header__tools">
            <SiteSearch items={items} />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div id="main" tabIndex={-1}>{children}</div>
      <Footer
        brand={<Logo />}
        description="Tokens, components and patterns from Meeting At 10 for the ACCS landing page, portal and admin, and the Meeting At 10 site."
        columns={[
          { title: "System", links: [{ label: "Foundations", href: "/foundations/" }, { label: "Components", href: "/components/" }, { label: "Patterns", href: "/examples/landing/" }] },
          { title: "Guides", links: [{ label: "Getting started", href: "/guides/getting-started/" }, { label: "Migrating apps", href: "/guides/migrating-apps/" }, { label: "Changelog", href: "/guides/changelog/" }] },
          { title: "Patterns", links: EXAMPLES.slice(0, 4).map((e) => ({ label: e.title, href: `/examples/${e.slug}/` })) },
        ]}
        meta={`v${VERSION}`}
      />
    </>
  );
}
