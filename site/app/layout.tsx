import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { ToastRegion } from "@meetingat10/design-system/react";
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

// Applies a stored theme before first paint; no stored choice keeps following the OS.
const THEME_BOOT = "try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} /></head>
      <body className="ds-body">
        {children}
        <ToastRegion />
      </body>
    </html>
  );
}
