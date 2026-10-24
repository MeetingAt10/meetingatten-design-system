# Density: `comfortable` and `compact`

`data-density` sets the default body text and the section rhythm. It points at existing Figma text styles and space tokens; it adds no values. Colors come from the theme ([light-dark.md](light-dark.md)).

| Setting | `comfortable` (default, `:root`) | `compact` |
|---|---|---|
| Use | ACCS landing, Meeting At 10 team site, sign-in | ACCS admin / product UI |
| Body text (`--ds-density-text-*`) | Body large 16/26 | Body 14/22 |
| Section rhythm (`--ds-density-section-space`, `-desktop`) | 64, 80 from 1024px | 24, 32 from 1024px |
| Headlines | Display 36/44, H1 30/38 | H1 30/38 |

```html
<html data-density="compact">   <!-- admin -->
```

Like `data-theme`, it works on any element. `.ds-body` and any element with `data-density` inside it pick up the density text; `.ds-section` uses the section rhythm.

## Compact (admin) guidance

| Topic | Guidance |
|---|---|
| Body | Body 14/22 with persistent 14px Label |
| Controls | Same 48px buttons and 44px controls (no compact control size exists in Figma); density comes from 16/24/32 spacing between regions, tables over card walls on desktop, labeled records on mobile |
| Reading | Max 680px for prose; content max 1200px |
| Navigation | 240px sidebar from 1024px (`ds-sidebar`), 72px top bar; top navigation at 768; 44px menu control on mobile |
| Roles | Role badge + note in the sidebar ("Own reports only · proposed permission"); not a privacy or status signal |
| Reports | Restricted-report pages always show the durable Privacy Notice, keep submission disabled until policy is confirmed, and use neutral titles and notifications |

Examples on the design system site: Admin overview and Report detail (`site/app/_site/examples/bodies.tsx`).

## Comfortable (landing) guidance

Figma has **no landing-page frame**. These patterns are composed from the Figma tokens, components and the product-pattern frames (05) and use their real copy. Anything marketing-specific (section order, footer) is a proposal.

| Pattern | Spec |
|---|---|
| Nav | `ds-container`, compact logo left, text links, one 48px primary "Sign in"; collapses to the 44px menu control under 1024px |
| Hero | Mono eyebrow, Display headline "Your Access to the College of Computer Studies", Body large lead (max 680px), one primary + one secondary action, product preview on the right from 1024px |
| Pillars | Community, Consultations, My reports. Figma voice per context (encouraging, empathetic, serious) |
| Product preview | Announcement Card and Forum Card with Figma copy, `DEMO` labels |
| Privacy | Durable notice: "Community access does not grant report access." No anonymity or security promises |
| Footer | Logo, short descriptor, links; "Proposed, not approved" while the identity is unapproved |
| Logo | `assets/logo/logo-horizontal.svg` (>= 240px) or compact (>= 130px) in the nav |

| Do | Don't |
|---|---|
| One primary action per region | Two filled buttons side by side |
| Honest copy ("sample", "proposed", "illustrative") | "Secure", "anonymous", "reply within 24 hours" |
| Keep tagline exact: Your Access to the College of Computer Studies | Reword the tagline or imply a seal |
| Label synthetic content `DEMO` | Real student names or data |

Example on the design system site: Landing page (`site/app/_site/examples/bodies.tsx`).
