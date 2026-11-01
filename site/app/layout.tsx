import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import { Providers } from "./_site/Providers";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Meeting At 10 Design System", template: "%s · Meeting At 10 Design System" },
  description: "Tokens, components and patterns for ACCS (Access for College of Computer Studies) and the Meeting At 10 site. The system rebuilds the faculty-door timetable as an interface, with live demos in light and dark.",
  openGraph: { siteName: "Meeting At 10 Design System", type: "website" },
  // The calendar mark; its frame follows the OS color scheme in the tab strip. The home-screen PNG is app/apple-icon.png/route.tsx.
  icons: { icon: [{ url: "/logo/meeting-at-10-auto.svg", type: "image/svg+xml" }], apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }] },
};

// Applies a stored theme before first paint; no stored choice keeps following the OS.
const THEME_BOOT = "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} /></head>
      <body className="ds-body">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
