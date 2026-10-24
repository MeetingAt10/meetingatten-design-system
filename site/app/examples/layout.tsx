import Link from "next/link";
import { ExampleLinks } from "../_site/examples/ExampleNav";

/** Examples are whole pages: no site header or footer, only a slim navigation bar back to the docs. */
export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Examples" className="ds-container site-example-bar">
        <Link className="ds-link" href="/">← ACCS Design System</Link>
        <ExampleLinks />
      </nav>
      {children}
    </>
  );
}
