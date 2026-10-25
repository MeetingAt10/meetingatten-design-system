# Spacing

A 4px base and an 8px row module: every row, control and hour line in the system lands on multiples of 8.

The timetable is the reference. Its hour rows are 48px (40px in compact), controls are 40, 48 or 56px tall, and stacks step by 8. Odd values (2, 12, 20) exist only for tight groups inside a component; they never set the page rhythm.

## Scale

| Token | Value | Use |
|---|---|---|
| `--ds-space-2` | 2px | Gaps inside listboxes, nav lists and segmented controls |
| `--ds-space-4` | 4px | Icon to text in chips, optical alignment |
| `--ds-space-8` | 8px | Icon to label, block padding, tight stacks |
| `--ds-space-12` | 12px | Block and option padding, field parts, small groups |
| `--ds-space-16` | 16px | Default stack gap, control groups, mobile margins |
| `--ds-space-20` | 20px | Card padding, button side padding |
| `--ds-space-24` | 24px | Sheet padding, gutters, region gaps |
| `--ds-space-32` | 32px | Section header to content, agenda rows |
| `--ds-space-40` | 40px | Hero gaps, view-state padding |
| `--ds-space-48` | 48px | Page regions, wide margins |
| `--ds-space-64` | 64px | Section rhythm on phones (comfortable) |
| `--ds-space-80` | 80px | Large landing gaps |
| `--ds-space-96` | 96px | Section rhythm from 1024px (comfortable) |
| `--ds-space-128` | 128px | Marketing sections only |

Names are pixel values: `--ds-space-16` is 16px. Source: `tokens/foundations/spacing.json`.

## The row module

| Thing | Size | Token |
|---|---|---|
| Hour row | 48px (40px compact) | `--ds-size-hour-row`, `--ds-size-hour-row-compact`, read through `--ds-density-hour-row` |
| Controls | 40 / 48 / 56px | `--ds-size-control-sm`, `-md`, `-lg` |
| Coarse pointers | at least 44px | `--ds-size-touch-min` |
| Top bar | 64px | `--ds-size-topbar-h` |
| Time column | 3.5rem | `--ds-size-time-col` |
| Rule | 1px | `--ds-size-rule` |

New blocks and rows snap to this module, so a page reads as one sheet, not a collage of boxes.

## Layout helpers

| Class | Gap |
|---|---|
| `.ds-stack` | 16px vertical; `--4`, `--8`, `--12`, `--24`, `--32`, `--48` |
| `.ds-row` | 12px wrapping row; `--8`, `--16`; `--between`, `--end` |
| `.ds-cols` | Grid gutter: 16px on phones, 24px from 600px |
| `.ds-section` | Density rhythm: 64/96px comfortable, 24/32px compact |

React: `<Stack gap={24}>`, `<Row gap={8} justify="between">`, `<Grid columns={3}>`, `<Section>` ([stack](../components/layout/stack.md), [grid](../components/layout/grid.md), [section](../components/layout/section.md)).

## Tailwind

Tailwind keeps its 4px multiplier: `p-4` is 16px, the same as `--ds-space-16`. Use the CSS variable when you want the token name in the code (`gap-(--ds-space-24)`).

## Density

`data-density` changes the section rhythm and the hour rows, never the space tokens ([density.md](../themes/density.md)).
