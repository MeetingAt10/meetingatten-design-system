# Motion

Motion shows where things went and never slows the work: 120ms color changes, overlays that rise on an exponential ease-out, springs for anything that moves in space.

## Durations

| Token | Value | Use |
|---|---|---|
| `--ds-motion-duration-instant` | 0ms | State flips |
| `--ds-motion-duration-quick` | 120ms | Color, hover, border and focus changes; tooltips; small overlay exits |
| `--ds-motion-duration-base` | 200ms | Scrim and panel fades, popover entrance, tab panel fade, neighbor dimming |
| `--ds-motion-duration-slow` | 320ms | Modal and toast rise, the chosen slot's fill swipe |
| `--ds-motion-duration-deliberate` | 480ms | The highlighter swipe |

## Eases

| Token | Curve | Use |
|---|---|---|
| `--ds-motion-ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances and hover: the exponential ease-out |
| `--ds-motion-ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Pending loops (sweep line, skeleton pulse) |
| `--ds-motion-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Things leaving: modal, drawer, toast, popover |
| `--ds-motion-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | General transitions |

## Springs

| Token | Stiffness / damping / mass | Use |
|---|---|---|
| `--ds-motion-spring-snappy` | 600 / 49 / 1 | Checks, switch thumb, radio dot, caret turns, block lift and drop, link arrows |
| `--ds-motion-spring-smooth` | 420 / 40 / 1 | Indicators sliding along rules (tabs, segments, day strip), progress and meter fills, disclosure height, layout glides |
| `--ds-motion-spring-gentle` | 260 / 32 / 1 | Drawers, bottom sheets, the modal sheet on phones |

The springs are close to critically damped: they settle without a visible bounce. The build turns each one into a CSS `linear()` curve plus the time it needs to settle (`scripts/lib.mjs`, `springCurve`), emitted as two properties:

```css
.thing {
  transition: translate var(--ds-motion-spring-snappy-duration) var(--ds-motion-spring-snappy);
}
```

With the current values the settle times are about 380ms (snappy), 420ms (smooth) and 560ms (gentle). Read them from the `-duration` properties rather than hard-coding them.

The same springs ship for the Motion library as `spring.snappy`, `spring.smooth` and `spring.gentle` (generated into `src/react/lib/motion.ts`).

## Distances

| Foundation | Treatment | Value | Use |
|---|---|---|---|
| `--ds-motion-distance-lift` | `--ds-lift` | 2px (`-2px` as a translate) | Hover lift of blocks, linked cards, primary buttons |
| `--ds-motion-distance-drop` | `--ds-drop` | 6px (`-6px`) | Blocks dropping into their cells |
| `--ds-motion-distance-rise` | `--ds-rise` | 8px | Overlays rising into place |

## Signature motions

| Motion | Where | How |
|---|---|---|
| Now-line glide | [NowLine](../components/scheduling/now-line.md), [Timetable](../components/scheduling/timetable.md) | The line and its time label move with a 1s linear glide each time the clock updates (every 30 seconds) |
| Block drop | Timetable, `.ds-block--enter` | Blocks drop 6px into their cells once on the snappy spring, staggered 25ms; transform only, content visible throughout |
| Highlighter swipe | [Highlight](../components/layout/highlight.md), the chosen [consultation slot](../components/scheduling/consultation-slot.md) | The wash scales in from the left: 480ms for text highlights (`@starting-style`), 320ms for the slot fill |
| Isolate on select | `.ds-isolate` (on by default in Timetable) | When a block is hovered, focused or chosen, its neighbors dim to 55% over 200ms |

Around them: indicators slide along rules on the smooth spring, overlays rise 8px from their resting place on the ease-out, and sheets slide in on the gentle spring.

## The CSS layer

`src/css/base/motion.css` holds the shared keyframes: `ds-fade-in`, `ds-fade-out`, `ds-rise-in`, `ds-sink-out`, `ds-drop-in`, `ds-slide-in-end`, `ds-slide-out-end`, `ds-slide-in-up`, `ds-slide-out-down`, `ds-swipe`, `ds-sweep` (the pending line), `ds-tick` (the spinner hand) and `ds-pulse` (skeletons). Overlays animate on React Aria's `[data-entering]` and `[data-exiting]` attributes. Page content is visible by default: blocks move from a visible state and never wait to appear; only overlays fade in.

## The Motion library (React)

| Component | What moves |
|---|---|
| [Toast](../components/feedback/toast.md) | Swipe sideways to dismiss (past 90px); at most three visible, stacked from the bottom; closing toasts fade out in a view transition where the browser supports it |
| [Drawer](../components/feedback/drawer.md) `side="bottom"` | Drag down to close (past 120px or a fast flick) |
| [Timetable](../components/scheduling/timetable.md) | Block drop on first paint and a layout glide when the schedule changes |

Two more libraries handle small motions: `@number-flow/react` rolls the digits of [Progress](../components/feedback/progress.md) and [Meter](../components/feedback/meter.md) values, and React Aria's `SelectionIndicator` slides the tab rule, the segment chip and the day block in pure CSS.

`DesignSystemProvider` wraps the app in Motion's `MotionConfig` with `reducedMotion="user"` and the smooth spring as the default transition. For your own motion, use the exported tokens:

```tsx
import { motion } from 'motion/react';
import { spring, distance, duration, ease } from '@meetingat10/design-system/react';

<motion.li initial={{ y: -distance.drop }} animate={{ y: 0 }} transition={spring.snappy} />
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: duration.base, ease: ease.out }} />
```

`duration` is in seconds, `ease` values are cubic-bezier arrays and `distance` values are pixels. Add `motion` to the app's own dependencies if the app animates with it directly.

## Reduced motion

| Layer | What happens under `prefers-reduced-motion: reduce` |
|---|---|
| CSS | Every animation and transition inside `.ds-body` takes 1ms and runs once: no travel, no loops. The spinner hand rests, the sweep line and skeleton pulse stop, indicators and highlights land at once |
| Motion | `MotionConfig reducedMotion="user"` turns off transform animations; Toast and Drawer drop their drag gestures; Timetable skips the drop and the layout glide; toasts skip the view transition |
| NumberFlow | New values appear without rolling |
| Now-line | Jumps to the new time instead of gliding |

State never depends on motion: every moving thing has a resting state that reads on its own, with words where it matters. The CSS rule is scoped to `.ds-body`, so put that class on `<body>`. `DesignSystemProvider` also takes `reducedMotion="always"` or `"never"` for an explicit user setting.

## Rules

| Rule | Detail |
|---|---|
| Quick by default | Hover and color changes take 120ms on the ease-out |
| Transform and opacity | Move with `translate`, `scale` and `opacity`; height animates only in the disclosure panel |
| No decorative loops | The only loops show pending work (spinner, sweep line, skeleton) and they stop under reduced motion |
| Springs for space | Anything that travels uses a spring token, not a hand-tuned curve |
| Tokens, not numbers | Use `--ds-motion-*` in CSS and `duration`, `ease`, `spring`, `distance` in React |
