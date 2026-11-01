import Link from "next/link";
import { Logo } from "@meetingat10/design-system/react";
import { ExampleLinks } from "../_site/examples/ExampleNav";

/** Patterns are whole pages: no site header or footer, only a slim bar back to the docs. */
export default function ExamplesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav aria-label="Patterns" className="site-example-bar">
        <Link className="site-example-bar__home" href="/"><Logo size="sm"  inverse /><span>Back to the design system</span></Link>
        <ExampleLinks />
      </nav>
      {children}
    </>
  );
}
