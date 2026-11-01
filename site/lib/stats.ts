import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ICONS, imagery } from "@meetingat10/design-system/react";
import { REPO, docsIn } from "./content";

/** Counts shown on the home page, read from the repo at build time (nothing is typed in by hand). */
export function stats() {
  const t = JSON.parse(readFileSync(join(REPO, "dist/tokens.json"), "utf8"));
  return {
    components: docsIn("components").length,
    tokens: Object.keys(t.foundations).length + Object.keys(t.themes.light.tokens).length + Object.keys(t.treatments).length,
    icons: Object.keys(ICONS).length,
    renders: Object.keys(imagery).length,
  };
}

/** The package version, read at build time. */
export const VERSION: string = JSON.parse(readFileSync(join(REPO, "package.json"), "utf8")).version;
