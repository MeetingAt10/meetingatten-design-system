"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@meetingat10/design-system/react";

const NAV = [
  ["Foundations", "/foundations/"],
  ["Components", "/components/"],
  ["Patterns", "/examples/landing/"],
  ["Guides", "/guides/"],
] as const;

/** Top navigation: inline links from 900px, a menu panel below. The section you are in carries the rule. */
export function SiteNav() {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  const links = NAV.map(([label, href]) => {
    const current = path.startsWith(`/${href.split("/")[1]}`);
    return <Link key={href} className="ds-navbar__link" href={href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>;
  });
  return (
    <>
      <nav className="site-nav" aria-label="Main">{links}</nav>
      <button type="button" className="site-menu-btn" aria-expanded={open} aria-controls="site-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
        <Icon name={open ? "x" : "list"} size={20} />
      </button>
      <nav id="site-menu" className="site-menu" aria-label="Main menu" data-open={open || undefined} hidden={!open}>{links}</nav>
    </>
  );
}
