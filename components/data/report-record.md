---
title: Report Record
description: One restricted record as a ruled list row with its reference, status in line form and words, labeled facts and one action; the phone form of the reports table.
react: ReportRecord
---
# Report Record

A report record shows one restricted record as a ruled row: the reference in tabular mono and the status badge on top, a short neutral title, the facts as labeled pairs, and one action. It is the phone and side-panel form of the [Reports Table](reports-table.md). Reports copy stays serious and neutral.

## When to use

- Use it for reports on phones and in narrow side panels.
- Use a list of records (`.ds-record-list`) for several reports; the rules separate them, not cards.
- Don't use it on wide screens where the table fits; use [Reports Table](reports-table.md).
- Don't put sensitive preview text in the title; use a neutral category ("General concern").

## Anatomy

| Part | Class | Notes |
|---|---|---|
| List | `.ds-record-list` | Hairline on top; each record adds a hairline below |
| Record | `.ds-record` | `<article>` named by its title, 16px vertical padding |
| Head | `.ds-record__head` | Reference on the left, status badge on the right |
| Reference | `.ds-record__ref` | Tabular mono 500 13/20 with slashed zero |
| Status | `.ds-badge` | Words plus the line-form marker |
| Title | `.ds-record__title` | Label weight 16/24, H3 by default; falls back to the reference |
| Facts | `.ds-record__facts` | Definition list: caption labels (`dt`) over body-small values (`dd`) |
| Action | `.ds-record__action` | Standalone link, named with the reference |

## States

| State | Looks | Set by |
|---|---|---|
| Pending (default) | Warning tone, dashed marker | `statusTone="warning"`, `statusForm="pending"` (defaults) |
| Resolved or active | Solid marker | `statusForm="solid"` |
| Restricted | Hatched marker | `statusForm="restricted"` |
| Closed | Struck marker | `statusForm="closed"` |
| Link hover and focus | Underline and arrow step; 2px focus ring | `:hover`, `:focus-visible` on the link |

## Behavior and accessibility

- Each record is an `<article>` labeled by its title, so it reads as one unit.
- Facts keep their labels in the reading order; nothing relies on column position.
- The action link is named with the reference ("View record DEMO-024").
- The status word and the marker form carry the state; tone only reinforces. Set `statusForm` and `statusTone` explicitly: the defaults draw a pending look.
- Forced colors: rules stay visible; badge markers are redrawn in `CanvasText`.

## React

```tsx
import { ReportRecord } from '@meetingat10/design-system/react';

<ul className="ds-record-list">
  <li>
    <ReportRecord
      reference="DEMO-024" title="General concern" status="Draft"
      facts={[{ label: 'Updated', value: '21 Oct' }, { label: 'Visibility', value: 'You only' }]}
      href="/reports/demo-024"
    />
  </li>
  <li>
    <ReportRecord
      reference="DEMO-009" title="General question" status="Resolved" statusTone="success" statusForm="solid"
      facts={[{ label: 'Updated', value: '2 Oct' }]} href="/reports/demo-009"
    />
  </li>
</ul>
```

`reference`, `status` and `facts` are required. `actionLabel` defaults to "View record"; `level` to 3.

## Plain CSS

```html
<ul class="ds-record-list">
  <li>
    <article class="ds-record" aria-labelledby="rec-24">
      <header class="ds-record__head">
        <span class="ds-record__ref">DEMO-024</span>
        <span class="ds-badge ds-badge--warning ds-badge--pending"><span class="ds-badge__mark" aria-hidden="true"></span>Draft</span>
      </header>
      <h3 class="ds-record__title" id="rec-24">General concern</h3>
      <dl class="ds-record__facts">
        <div><dt>Updated</dt><dd>21 Oct</dd></div>
        <div><dt>Visibility</dt><dd>You only</dd></div>
      </dl>
      <a class="ds-link ds-link--standalone ds-record__action" href="/reports/demo-024" aria-label="View record DEMO-024">View record<svg class="ds-icon ds-icon--16" aria-hidden="true"><use href="sprite.svg#ds-arrow-right"/></svg></a>
    </article>
  </li>
</ul>
```
