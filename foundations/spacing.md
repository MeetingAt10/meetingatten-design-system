# Spacing

Source: Figma "ACCS 2026 / Dimensions" and Foundations 03.1. An **8px working rhythm**; 4px is an optical exception for icon gaps and fine alignment, not a second grid.

| Token | Value | Figma guidance |
|---|---|---|
| `space/4` | 4px | Optical exception (icon gaps, slot internals) |
| `space/8` | 8px | Icon-to-label |
| `space/16` | 16px | Control group, card gap |
| `space/24` | 24px | Card inset |
| `space/32` | 32px | Section gap |
| `space/40` | 40px | (between 32 and 48) |
| `space/48` | 48px | Page regions |
| `space/64` | 64px | Page regions |
| `space/80` | 80px | Major documentation rhythm |
| `space/96` | 96px | Major documentation rhythm |

Names are pixel values: `--ds-space-16` is 16px. Tailwind's `p-4` is the same 16px (4px multiplier); use the CSS variables for Figma names.

## Component-internal values (not in Dimensions)

| Token | Value | Where |
|---|---|---|
| `size/12` | 12px | Slot padding, nav item, link, inline alert and toast gap |
| `size/20` | 20px | Report Record padding |

## Anatomy of a predictable stack (03.5)

Title + contextual metadata, readable body then supporting guidance, one primary action. 24px inset, 16px gap, 48px control. 24px minimum target (WCAG 2.2 AA); recommend 44px+ on mobile with 8px separation.

## Density (usage, not tokens)

`accs-landing` and `accs-admin` share these tokens. Landing uses the 64-96 rhythm between sections and Body large; admin uses 24-32 between regions and Body 14/22. Neither changes a token.
