# Scheduling / Consultation Slot

Sixteen variants: Available x Selected x seven states (14), plus Booked and Unavailable (unselected, Disabled). Invalid Booked+Selected or Unavailable+Enabled combinations are not offered. State is written, not color-only. A selected time is not a confirmed booking.

## Figma source

| Component | Size (w x h) | Radius | Padding (t r b l) | Gap | Master fill |
|---|---|---|---|---|---|
| `ACCS 2026 / Scheduling / Consultation Slot` | 388 x 112 | 6 | 12 / 16 / 12 / 16 | 4 | `#FFFFFF` |

Variant axes:
- Availability: Available / Booked / Unavailable; Selected: False / True; State: Default / Hover / Pressed / Focus / Disabled / Error / Loading (16 variants)

## Anatomy

| Part | Spec |
|---|---|
| Container | 388 x 112 master, `radius-tile` (8), padding 12 / 16, gap 4, 1px `color/border-default` |
| Time | `Label` 14/20 / 600: "09:00–09:30" |
| State line | `Caption`: "+ Available", "✓ Selected", "— Booked", "× Unavailable" |
| Message | error "Couldn’t check this slot. Try again."; loading "Checking availability…" |

## States

| State | Treatment (tokens) |
|---|---|
| Available, Default | `color/surface` |
| Hover | `color/info/bg` |
| Pressed | `color/border-strong` 2px edge |
| Focus | 3px focus ring |
| Disabled | `color/disabled/bg`, `color/disabled/fg` |
| Error | `color/danger/fg` border + message |
| Loading | message "Checking availability…" |
| Selected=True | `color/info/bg` fill, 2px `color/action/default` border, "✓ Selected"; all states above apply on top |
| Booked / Unavailable | Disabled tokens; "— Booked", "× Unavailable" |

## Usage (from the Figma frames)

- Use a radio-group selection model for a single appointment.
- Dates, time zone and availability need service confirmation; no response deadline is promised.

## Accessibility

- Announce full date, time zone, availability and selected state; a single slot uses a radio-group model.
- Offer keyboard date entry; arrows move within a documented grid.

## Reference markup

Classes come from `dist/components.css`. Live matrices: `preview/index.html`.

```html
<div class="ds-slots" role="radiogroup" aria-label="Wed 21 Oct, sample local campus time">
  <button class="ds-slot" role="radio" aria-checked="false"><span class="ds-slot__time">09:00–09:30</span><span class="ds-slot__state">+ Available</span></button>
  <button class="ds-slot" role="radio" aria-checked="true"><span class="ds-slot__time">10:00–10:30</span><span class="ds-slot__state">✓ Selected</span></button>
  <button class="ds-slot" role="radio" aria-disabled="true"><span class="ds-slot__time">11:00–11:30</span><span class="ds-slot__state">— Booked</span></button>
  <button class="ds-slot" role="radio" aria-disabled="true"><span class="ds-slot__time">14:00–14:30</span><span class="ds-slot__state">× Unavailable</span></button>
</div>
```
