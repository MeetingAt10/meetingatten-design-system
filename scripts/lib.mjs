// Shared helpers: load W3C DTCG token files, flatten, resolve {aliases}, WCAG maths.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const readJson = (p) => JSON.parse(readFileSync(p, 'utf8'));

function flatten(node, path, type, out) {
  if (node && typeof node === 'object' && '$value' in node) {
    out.set(path.join('.'), { type: node.$type ?? type, value: node.$value, path });
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$') || typeof v !== 'object') continue;
    flatten(v, [...path, k], node.$type ?? type, out);
  }
}

function resolveAll(map, fallback) {
  const get = (name, seen = []) => {
    const t = map.get(name) ?? fallback?.get(name);
    if (!t) throw new Error(`Unresolved token reference {${name}}`);
    if (typeof t.value === 'string') {
      const m = t.value.match(/^\{([^}]+)\}$/);
      if (m) {
        if (seen.includes(m[1])) throw new Error(`Circular alias ${m[1]}`);
        return get(m[1], [...seen, name]);
      }
    }
    return t;
  };
  for (const [name, t] of map) map.set(name, { ...t, value: get(name).value, type: t.type ?? get(name).type, alias: typeof t.value === 'string' && /^\{/.test(t.value) ? t.value.slice(1, -1) : undefined });
  return map;
}

export function loadTokens() {
  const foundations = new Map();
  const fdir = join(ROOT, 'tokens/foundations');
  for (const f of readdirSync(fdir).sort()) flatten(readJson(join(fdir, f)), [], undefined, foundations);
  resolveAll(foundations);
  const themes = {};
  const tdir = join(ROOT, 'tokens/themes');
  for (const f of readdirSync(tdir).sort()) {
    const j = readJson(join(tdir, f));
    const m = new Map();
    flatten(j, [], undefined, m);
    resolveAll(m, foundations);
    themes[f.replace('.json', '')] = { dark: !!j.$extensions?.dark, description: j.$description, tokens: m };
  }
  return { foundations, themes };
}

// "color.action.default" -> "--ds-action-default"; "space.16" -> "--ds-space-16"; "size.button-h" -> "--ds-size-button-h"
export const cssName = (name) => '--ds-' + name.replace(/^color\./, '').replace(/\./g, '-');

export function cssValue(t) {
  const v = t.value;
  switch (t.type) {
    case 'fontFamily': return v.map((f) => (/\s/.test(f) ? `"${f}"` : f)).join(', ');
    case 'cubicBezier': return `cubic-bezier(${v.join(', ')})`;
    case 'shadow': return (Array.isArray(v) ? v : [v]).map((s) => `${s.offsetX} ${s.offsetY} ${s.blur} ${s.spread} ${s.color}`).join(', ');
    default: return String(v);
  }
}

// ---- treatments: repo-owned look tokens (tokens/treatments.json) ----
export function loadTreatments() {
  const j = readJson(join(ROOT, 'tokens/treatments.json'));
  return Object.fromEntries(Object.entries(j).filter(([k]) => !k.startsWith('$'))
    .map(([k, v]) => [k, 'all' in v ? { all: v.all, light: v.all, dark: v.all } : v]));
}
const refVar = (r) => `var(${cssName(r.slice(1, -1))})`;
const mix = (r, a) => `color-mix(in srgb, ${refVar(r)} ${a}%, transparent)`;
export function treatmentCss(v) {
  if (Array.isArray(v)) return v.map(treatmentCss).join(', ');
  if (typeof v === 'string') return v.startsWith('{') ? refVar(v) : v;
  if (v.wash) return `radial-gradient(closest-side, ${refVar(v.wash)}, transparent)`;
  if (v.tint) return mix(v.tint, v.alpha);
  if (v.highlight) return `inset 0 1px 0 ${mix(v.highlight, v.alpha)}`;
  throw new Error('Unknown treatment value ' + JSON.stringify(v));
}

// ---- WCAG 2.x ----
export function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = [...h].map((c) => c + c).join('');
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
}
export function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
