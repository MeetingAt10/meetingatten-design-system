# Typography

Three pinned families: Plus Jakarta Sans for display and headings, Inter for reading, JetBrains Mono only for times, codes, references, keys and code.

The families are pinned by the user (decision 2026-10-25); the scale is the Office Hours scale. Sizes are in rem and line heights are unitless, so user text scaling and 200% zoom keep their proportions. Display, H1 and H2 are fluid: they grow with the viewport between a minimum and a maximum.

## Scale

| Style | Family | Weight | Size | Line height | Tracking | Class |
|---|---|---|---|---|---|---|
| Display | Plus Jakarta Sans | 800 | 44 to 72px, fluid (`clamp(2.75rem, 1.4rem + 3.2vw, 4.5rem)`) | 1.02 | -0.035em | `.ds-type-display` |
| H1 | Plus Jakarta Sans | 800 | 32 to 44px, fluid (`clamp(2rem, 1.45rem + 1.5vw, 2.75rem)`) | 1.1 | -0.03em | `.ds-type-h1` |
| H2 | Plus Jakarta Sans | 700 | 24 to 30px, fluid (`clamp(1.5rem, 1.3rem + 0.6vw, 1.875rem)`) | 1.2 | -0.025em | `.ds-type-h2` |
| H3 | Plus Jakarta Sans | 700 | 20px | 1.3 | -0.015em | `.ds-type-h3` |
| H4 | Plus Jakarta Sans | 700 | 17px | 1.4 | -0.01em | `.ds-type-h4` |
| Body large | Inter | 400 | 18px | 1.6 (29px) | 0 | `.ds-type-body-large`, `.ds-lead` |
| Body | Inter | 400 | 16px | 1.625 (26px) | 0 | `.ds-type-body` |
| Body small | Inter | 400 | 14px | 1.5714 (22px) | 0 | `.ds-type-body-small` |
| Label | Inter | 600 | 14px | 1.4286 (20px) | -0.005em | `.ds-type-label` |
| Caption | Inter | 500 | 12px | 1.3333 (16px) | 0 | `.ds-type-caption` |
| Code | JetBrains Mono | 400 | 13px | 1.5385 (20px) | 0 | `.ds-type-code` |
| Time | JetBrains Mono | 500 | 12px | 1.3333 (16px) | 0.01em | `.ds-time` |

Each style is a set of tokens: `--ds-type-<style>-font-family`, `-font-weight`, `-size`, `-line-height`, `-letter-spacing`. Source: `tokens/foundations/type.json`.

## The time style

`time` is the tabular mono style for time codes (`09:00-10:30`), room codes (`CCS 304`) and references (`CCS-2026-0142`). `.ds-time` adds tabular numerals and a slashed zero, so columns of times line up and `0` never reads as `O`. Blocks, the timetable hour labels, the now-line label, case timeline dates and file sizes use it.

## Families and loading

| Token | Stack |
|---|---|
| `--ds-font-family-display` | "Plus Jakarta Sans Variable", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif |
| `--ds-font-family-body` | "Inter Variable", Inter, ui-sans-serif, system-ui, sans-serif |
| `--ds-font-family-mono` | "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace |

- Vite or plain apps: import `@meetingat10/design-system/fonts.css` once. It self-hosts the three variable families from fontsource, and the stacks above name them first.
- Next.js apps with `next/font`: put the font variables in front of the stacks once, after the package imports. The type styles read the family tokens, so every style follows.

```css
:root {
  --ds-font-family-body: var(--font-inter), "Inter Variable", "Inter", ui-sans-serif, system-ui, sans-serif;
  --ds-font-family-display: var(--font-plus-jakarta-sans), "Plus Jakarta Sans Variable", "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
  --ds-font-family-mono: var(--font-jetbrains-mono), "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace;
}
```

`.ds-body` turns off faux bold (`font-synthesis-weight: none`), so load the weights you use: 800 and 700 for Plus Jakarta Sans, 400 to 600 for Inter and JetBrains Mono. The variable fonts cover them.

## Tailwind

| Utility | Sets |
|---|---|
| `type-h1`, `type-body`, `type-time` (every style) | Family, weight, size, line height and tracking together |
| `text-h1`, `text-body`, `text-time` | Size and line height only |
| `font-display`, `font-sans`, `font-mono` | The three families |
| `font-regular` to `font-extrabold` | 400, 500, 600, 700, 800 |

## Rules

| Rule | Detail |
|---|---|
| Headings carry their own weight | No eyebrow or kicker label above a heading; no uppercase mono labels. Use size, weight and space |
| Mono is not a costume | JetBrains Mono only for times, codes, references, keys and code |
| Wrapping | Headings balance their lines (`text-wrap: balance`); paragraphs avoid orphans (`pretty`) |
| Reading width | Prose stops at 680px (`--ds-grid-reading-max`, `.ds-reading`); `.ds-lead` stops at 38rem |
| Numbers | Tables, `<time>` and `<data>` get tabular numerals from the base styles |
| Labels | Persistent 14px labels on every control; a placeholder never replaces one |
| Density | `data-density` sets the running text: Body in `comfortable`, Body small in `compact` ([density.md](../themes/density.md)) |
| Long-form | `.ds-prose` styles headings, lists, tables, inline code and code blocks for policy and docs pages |
