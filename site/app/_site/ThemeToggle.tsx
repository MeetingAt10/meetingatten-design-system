"use client";
import { useEffect, useState } from "react";
import { Button } from "@meetingat10/design-system/react";

type Mode = "system" | "light" | "dark";
const NEXT: Record<Mode, Mode> = { system: "light", light: "dark", dark: "system" };

/** Cycles system, light and dark; only an explicit choice is stored. */
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  useEffect(() => setMode((localStorage.getItem("theme") as Mode) || "system"), []);
  const apply = (m: Mode) => {
    setMode(m);
    if (m === "system") { delete document.documentElement.dataset.theme; localStorage.removeItem("theme"); }
    else { document.documentElement.dataset.theme = m; localStorage.setItem("theme", m); }
  };
  return <Button variant="tertiary" size="sm" onPress={() => apply(NEXT[mode])} aria-label={`Theme: ${mode}. Change theme`}>Theme: {mode}</Button>;
}
