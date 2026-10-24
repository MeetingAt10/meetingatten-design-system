import Link from "next/link";
import { ThemeToggle } from "@/app/_site/ThemeToggle";

const NAV = [["Foundations", "/foundations/"], ["Components", "/components/"], ["Guides", "/guides/"], ["Examples", "/examples/landing/"]] as const;

/** Site chrome for the documentation pages (examples render full pages of their own). */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="site-skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="ds-container site-header__inner">
          <Link className="site-brand" href="/">ACCS <span>Design System</span></Link>
          <nav className="site-nav" aria-label="Main">
            {NAV.map(([label, href]) => <Link key={href} className="ds-link" href={href}>{label}</Link>)}
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <div id="main">{children}</div>
      <footer className="site-footer">
        <div className="ds-container ds-type-body-small">ACCS Design System · Proposed, not approved · Synthetic content only · Built from the team&apos;s Figma palette</div>
      </footer>
    </>
  );
}
