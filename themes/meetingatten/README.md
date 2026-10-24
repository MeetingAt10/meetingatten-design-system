# Themes: `meetingatten` and `meetingatten-dark`

Meeting At 10 team site (handle `meetingatten`, Next.js + Tailwind 4). **NOT IN FIGMA.** Rebuilt as a sibling of ACCS: the same semantic token names and structure (`canvas`, `surface`, `raised`, `text-primary`, `action/*`, `secondary/*`, `accent/*`, status), the same Figma type scale, spacing, radii and focus recipe, so components from `dist/components.css` work unchanged.

## What differs from ACCS

| | ACCS (Figma) | Meeting At 10 |
|---|---|---|
| Canvas | cool `#F5F7FB` | warm paper `#FBF8F3` |
| Action | source blue `#032E87` | ink `#172033` (hover `#46516A`, pressed `#0B1220`) |
| Secondary | teal | **sun** (burnt orange, 7 steps mirroring the ACCS families) |
| Accent | purple | source blue (relates it to ACCS) |
| Dark action | light blue | light neutral `#F5F7FB` |
| Shared | ink `#172033`, white, neutrals, status colors, focus, Plus Jakarta Sans / Inter / JetBrains Mono, radii 4/6/8/12 | |

## Identity rationale

| Question | Answer |
|---|---|
| Audience | Peers, advisers, recruiters: a small student team that ships |
| Related how | Same ink, neutrals, type, tokens and component shapes as ACCS |
| Distinct how | Warm paper + ink actions + a sunrise-orange secondary, oversized display type and a mono "log" |
| Why sunrise | The name is a time (daily 10:00); morning light is the metaphor, and orange complements ACCS blue |
| Personality | Direct, dry, confident, short sentences (see `docs/voice-and-tone.md`) |

Primitives (`sun` 50-950 in 7 steps, `paper` 50/200) live in `tokens/foundations/meetingatten-color.json` and are marked NOT IN FIGMA. All contrast pairs pass in both modes (`npm run check:contrast`).

## Patterns (`templates/meetingatten-home.html`)

| Pattern | Spec |
|---|---|
| Hero | Display style at oversize via clamp (not a Figma size), mono meta line, one word highlighted on `secondary/default` with `secondary/on-solid` text; punctuation kerned tight (no stray space before full stops) |
| Work | `surface` cards with Badge chips |
| Team | Numbered ruled list with Role badges; names pending |
| Log | Mono block: decided / blocked / next |
| Footer | `inverse` surface via `text-primary`, wordmark and handle only |

Logo: none. Use the text wordmark "Meeting At 10"; do not use the ACCS mark.
