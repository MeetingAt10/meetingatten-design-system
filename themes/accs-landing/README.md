# Theme: `accs-landing`

ACCS marketing site (Next.js + Tailwind 4). **Tokens are the Figma "ACCS 2026" Semantic LIGHT mode**, identical to `accs-admin`. This theme differs only in usage.

| Item | Value |
|---|---|
| Activate | `<html data-theme="accs-landing">` (also the `:root` default) |
| Tokens | `accs-light` (Figma LIGHT): canvas `#F5F7FB`, surface `#FFFFFF`, text `#172033`, action `#032E87` |
| Type | Display 36/44 and H1 30/38 for headlines, Body large 16/26 for body, mono eyebrow labels |
| Logo | `assets/logo/logo-horizontal.svg` (>= 240px) or compact (>= 130px) in the nav |
| Accents | Secondary (teal) and accent (purple) as small chips only; blue stays the dominant action; neither means permission or confidentiality |
| Radius | Controls 6, cards 8, modal 12 |

## Source status

Figma has **no landing-page frame**. The patterns below are composed from the Figma tokens, components and the product-pattern frames (05) and use their real copy. Anything marketing-specific (section order, footer) is a proposal.

## Patterns (see `templates/landing.html`)

| Pattern | Spec |
|---|---|
| Nav | `ds-container`, compact logo left, text links, one 48px primary "Sign in"; collapses to the 44px menu control under 1024px |
| Hero | Mono eyebrow, Display headline "Your Access to the College of Computer Studies", Body large lead (max 680px), one primary + one secondary action, product preview (community cards) on the right from 1024px |
| Pillars | Three `ds-card`s: Community, Consultations, My reports. Figma voice per context (encouraging, empathetic, serious) |
| Product preview | Announcement Card and Forum Card with Figma copy, `DEMO` labels |
| Privacy | Durable notice: "Community access does not grant report access." No anonymity or security promises |
| Footer | `ds-footer`: logo, short descriptor, links; "Proposed, not approved" while the identity is unapproved |

## Do / don't

| Do | Don't |
|---|---|
| One primary action per region | Two filled buttons side by side |
| Honest copy ("sample", "proposed", "illustrative") | "Secure", "anonymous", "reply within 24 hours" |
| Keep tagline exact: Your Access to the College of Computer Studies | Reword the tagline or imply a seal |
| Label synthetic content `DEMO` | Real student names or data |
