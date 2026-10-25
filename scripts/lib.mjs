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
    case 'spring': return springCurve(v).linear;
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
  if (v.tint) return mix(v.tint, v.alpha);
  if (v.highlight) return `inset 0 1px 0 ${mix(v.highlight, v.alpha)}`;
  // Hatching: 1px diagonal hairlines every 7px, the paper-timetable mark for taken or restricted time.
  if (v.hatch) return `repeating-linear-gradient(135deg, ${mix(v.hatch, v.alpha)} 0 1px, transparent 1px 7px)`;
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

// ---- springs: { stiffness, damping, mass } -> CSS linear() easing + settle duration (same physics as Motion's spring) ----
export function springCurve({ stiffness: k, damping: c, mass: m = 1 }, { tolerance = 0.001, maxError = 0.002 } = {}) {
  const w0 = Math.sqrt(k / m);
  const z = c / (2 * Math.sqrt(k * m));
  const x = (t) => {
    if (z < 1) {
      const wd = w0 * Math.sqrt(1 - z * z);
      return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + ((z * w0) / wd) * Math.sin(wd * t));
    }
    if (z === 1) return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
    const wd = w0 * Math.sqrt(z * z - 1);
    return 1 - Math.exp(-z * w0 * t) * (Math.cosh(wd * t) + ((z * w0) / wd) * Math.sinh(wd * t));
  };
  let settle = 0; // last moment the curve is outside the tolerance band, scanned in 1ms steps up to 3s
  for (let t = 0; t <= 3; t += 0.001) if (Math.abs(x(t) - 1) > tolerance) settle = t;
  settle = Math.ceil((settle + 0.001) * 1000) / 1000;
  const N = 200;
  const pts = Array.from({ length: N + 1 }, (_, i) => [i / N, x((i / N) * settle)]);
  pts[N][1] = 1;
  // Ramer-Douglas-Peucker keeps the stops a straight-line interpolation cannot reproduce within maxError.
  const simplify = (a, b) => {
    let idx = -1, max = 0;
    for (let i = a + 1; i < b; i++) {
      const [x0, y0] = pts[a], [x1, y1] = pts[b], [px, py] = pts[i];
      const d = Math.abs(py - (y0 + ((y1 - y0) * (px - x0)) / (x1 - x0)));
      if (d > max) { max = d; idx = i; }
    }
    return max > maxError ? [...simplify(a, idx), ...simplify(idx, b).slice(1)] : [a, b];
  };
  const stops = simplify(0, N).map((i) => {
    const [p, v] = pts[i];
    return i === 0 || i === N ? `${+v.toFixed(4)}` : `${+v.toFixed(4)} ${+(p * 100).toFixed(2)}%`;
  });
  return { linear: `linear(${stops.join(', ')})`, duration: Math.round(settle * 1000), damping: +z.toFixed(3) };
}
