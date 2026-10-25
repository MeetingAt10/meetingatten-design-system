import { readFileSync, readdirSync } from "node:fs";
import { join, posix } from "node:path";

/** Repo root (the site builds from site/). */
export const REPO = join(process.cwd(), "..");

export type Section = "foundations" | "components" | "guides";
export interface Doc {
  section: Section;
  slug: string;
  /** Repo-relative path, e.g. components/control/button.md */
  file: string;
  title: string;
  description: string;
  /** React component documented on this page (frontmatter `react`). */
  react?: string;
  /** Demo shown on the page (frontmatter `demo`, defaults to `react`). */
  demo?: string;
  category?: string;
}

export const SECTIONS: Record<Section, { title: string; description: string }> = {
  foundations: { title: "Foundations", description: "The pinned ACCS palette, type, spacing, radius, elevation, motion, materials, themes and density." },
  components: { title: "Components", description: "Every component on a light and a dark sheet, with React props, states and accessibility notes." },
  guides: { title: "Guides", description: "Getting started, principles, voice, accessibility, icons, logo and assets, migrating apps, and the changelog." },
};

function parse(file: string) {
  const raw = readFileSync(join(REPO, file), "utf8");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n/);
  const meta: Record<string, string> = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const i = line.indexOf(": ");
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 2).trim();
  }
  return { meta, body: m ? raw.slice(m[0].length) : raw };
}

const plain = (s: string) => s.replace(/!\[[^\]]*\]\([^)]*\)/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").replace(/[`*_]/g, "").replace(/\s+/g, " ").trim();

function toDoc(section: Section, file: string, slug: string, title?: string): Doc {
  const { meta, body } = parse(file);
  const h1 = body.match(/^# (.+)$/m)?.[1] ?? slug;
  const firstPara = body.split(/\n\n+/).find((p) => p.trim() && !/^(#|\||```|-|\d+\.|<)/.test(p.trim())) ?? "";
  const description = meta.description ?? plain(firstPara).slice(0, 180);
  return { section, slug, file, title: title ?? meta.title ?? plain(h1), description, react: meta.react, demo: meta.demo ?? meta.react, category: file.split("/").length > 2 ? file.split("/")[1] : undefined };
}

const md = (dir: string) => readdirSync(join(REPO, dir), { recursive: true }).map(String).filter((f) => f.endsWith(".md") && !f.endsWith("README.md")).sort();
const slugOf = (f: string) => posix.basename(f, ".md");

let cache: Doc[] | undefined;
export function allDocs(): Doc[] {
  if (cache) return cache;
  const docs: Doc[] = [
    toDoc("guides", "README.md", "getting-started", "Getting started"), // the README's H1 is the system name
    ...md("docs").map((f) => toDoc("guides", `docs/${f}`, slugOf(f))),
    toDoc("guides", "CONTRIBUTING.md", "contributing"),
    toDoc("guides", "CHANGELOG.md", "changelog"),
    ...md("foundations").map((f) => toDoc("foundations", `foundations/${f}`, slugOf(f))),
    ...md("themes").map((f) => toDoc("foundations", `themes/${f}`, slugOf(f))),
    ...md("components").map((f) => toDoc("components", `components/${f}`, slugOf(f))),
  ];
  const seen = new Set<string>();
  for (const d of docs) {
    const key = `${d.section}/${d.slug}`;
    if (seen.has(key)) throw new Error(`Duplicate page slug ${key} (${d.file})`);
    seen.add(key);
  }
  return (cache = docs);
}

export const docsIn = (section: Section) => allDocs().filter((d) => d.section === section);
export const findDoc = (section: string, slug: string) => allDocs().find((d) => d.section === section && d.slug === slug);
export const docBody = (d: Doc) => parse(d.file).body;
export const routeOf = (d: Doc) => `/${d.section}/${d.slug}/`;

/** Route for a repo-relative markdown link, or undefined when the target is not a page. */
export function resolveLink(fromFile: string, href: string): string | undefined {
  if (/^(https?:|mailto:|#)/.test(href)) return href;
  const [path, hash] = href.split("#");
  const target = posix.normalize(posix.join(posix.dirname(fromFile), path));
  const doc = allDocs().find((d) => d.file === target);
  return doc ? routeOf(doc) + (hash ? `#${hash}` : "") : undefined;
}
