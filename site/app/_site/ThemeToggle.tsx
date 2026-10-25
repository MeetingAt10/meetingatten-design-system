"use client";
import { useEffect, useState } from "react";
import { SegmentedControl, Segment } from "@meetingat10/design-system/react";

type Mode = "system" | "light" | "dark";

/** System, light or dark; only an explicit choice is stored. */
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => setMode((localStorage.getItem("theme") as Mode) || "system"), []);
  const apply = (m: Mode) => {
    setMode(m);
    if (m === "system") { delete document.documentElement.dataset.theme; localStorage.removeItem("theme"); }
    else { document.documentElement.dataset.theme = m; localStorage.setItem("theme", m); }
  };
  return (
    <SegmentedControl aria-label="Theme" selectedKey={mode} onSelectionChange={(k) => apply(k as Mode)} className="site-theme">
      <Segment id="system" icon="desktop" aria-label="System theme"><span className="site-theme__label">System</span></Segment>
      <Segment id="light" icon="sun" aria-label="Light theme"><span className="site-theme__label">Light</span></Segment>
      <Segment id="dark" icon="moon" aria-label="Dark theme"><span className="site-theme__label">Dark</span></Segment>
    </SegmentedControl>
  );
}
