import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeToggle } from "./_site/ThemeToggle";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans", weight: ["600", "700", "800"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "ACCS Design System", template: "%s · ACCS Design System" },
  description: "Tokens, themes and React components for ACCS (Access for College of Computer Studies): soft layers on the ACCS Figma palette, with live demos in light and dark.",
  openGraph: { siteName: "ACCS Design System", type: "website" },
};

const NAV = [["Foundations", "/foundations/"], ["Components", "/components/"], ["Guides", "/guides/"], ["Examples", "/examples/landing/"]] as const;
// Applies a stored theme before first paint; no stored choice keeps following the OS.
const THEME_BOOT = "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} /></head>
      <body className="ds-body">
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
      </body>
    </html>
  );
}
