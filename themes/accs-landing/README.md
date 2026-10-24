# Theme: `accs-landing`

ACCS marketing site. Next.js + Tailwind 4. Airy, editorial, trustworthy.

| Trait | Decision |
|---|---|
| Canvas | White, with `surface-sunken` (`ink-50`) bands to separate sections |
| Action | `blue-800` `#032E87`, hover `blue-900` |
| Accent | Teal, used for eyebrows, small highlights, `accent-bg` chips. Never for primary buttons |
| Shape | Cards 16px, controls 10px, buttons 48px tall |
| Type | Hero `text-6xl` / 800, section heads `text-4xl` / 700, lead `text-lg` |
| Whitespace | 96px between sections, max width 72rem |
| Imagery | Real photos/illustration only; no stock-gradient blobs, no purple |

Activate: `<html data-theme="accs-landing">` (also the `:root` default).

## Patterns

Live markup: `templates/landing.html`. Classes live in `dist/components.css`.

| Pattern | Spec |
|---|---|
| **Nav** | 72px tall, wordmark left, 3-5 text links center, one `ds-btn--primary ds-btn--sm` right. Current page = `aria-current="page"` (ink color). Collapses to menu button under `md` |
| **Hero** | Eyebrow (mono, accent-fg) + display headline (max 3 lines, balanced) + 1 lead sentence (max 60ch) + 2 CTAs (primary + secondary). Right column on `lg`: one raised card with real content (e.g. department updates), not a decorative image |
| **Feature section** | `surface-sunken` band, eyebrow + h1, 3-up `ds-card` grid: icon tile, h3, 1-2 line description. Max 3 columns, max 6 features |
| **Steps** | Mono numerals `01 02 03`, h3, one line. No connecting lines or arrows |
| **CTA band** | Single `ds-band` (action background, white text), one headline, one sentence, one white button |
| **Footer** | `inverse` background, wordmark + one-line descriptor, 3 link columns, legal row. No newsletter form unless required |

## Dos and don'ts

| Do | Don't |
|---|---|
| One primary CTA per viewport | Two filled buttons side by side |
| Plain verbs: "Get access", "Sign in" | "Unlock", "Supercharge", exclamation marks |
| Show privacy/confidentiality explicitly near grievance content | Use playful color or social-style cards for grievance content |
| Alternate canvas and sunken bands | Gradients, glass cards, shadows on every card |
