# Focus, touch and layout anatomy

Source: Figma 03.5 and 06.1.

| Item | Rule |
|---|---|
| Focus ring | `3px` `color/focus` (`#3157D5` light, `#97B5FF` dark) with a `2px` gap in the surface color (`--ds-size-focus-ring`, `--ds-size-focus-offset`, `--ring-gap`) |
| Visibility | Never remove focus on keyboard input; focus must not be obscured by sticky chrome; retain the ring on raised and modal surfaces |
| Inverse | `color/inverse/focus` on inverse backgrounds (toast, inverse icon button) |
| High contrast | Under `forced-colors: active` (Windows High Contrast) the browser drops box-shadows: `src/css/base/forced-colors.css` draws a 2px `Highlight` outline for focus, gives shadow-only containers a `CanvasText` edge, and redraws fill-only states (switch, radio dot, progress, selected day/cell/page, tab and nav indicators) with system colors. System colors appear nowhere else |
| Targets | 24px minimum (WCAG 2.2 AA, with exceptions); 44px+ recommended on mobile with 8px separation; make the visible label clickable |
| Control heights | Buttons, tabs, nav items 48px; fields, search, link, icon button, option 44px |
| Motion | Optional and reduced-motion aware; state changes must remain understandable without animation. Reduced motion removes nonessential movement, never the state signal |
