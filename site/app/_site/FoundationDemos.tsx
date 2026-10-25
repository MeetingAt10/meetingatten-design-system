"use client";
import { useMemo, useState } from "react";
import { Button, Icon, ICONS, Search, Segment, SegmentedControl, type IconName, type Key } from "@meetingat10/design-system/react";

const SPRINGS = [
  { id: "snappy", label: "Snappy", use: "toggles, checks, block drop" },
  { id: "smooth", label: "Smooth", use: "indicators, layout" },
  { id: "gentle", label: "Gentle", use: "drawers, sheets" },
] as const;

/** The three springs as CSS linear() curves: press Play to send each block across its rule. */
export function MotionDemo() {
  const [run, setRun] = useState(0);
  return (
    <div className="site-motion">
      <Button variant="secondary" icon="timer" onPress={() => setRun((r) => r + 1)}>Play</Button>
      {SPRINGS.map((s) => (
        <div key={s.id} className="site-motion__row">
          <p className="site-motion__label"><span className="ds-type-label">{s.label}</span><span className="ds-time">--ds-motion-spring-{s.id}</span><span className="ds-type-caption ds-secondary">{s.use}</span></p>
          <div className="site-motion__track">
            <span key={run} className="site-motion__block" data-run={run > 0 || undefined} style={{ animationTimingFunction: `var(--ds-motion-spring-${s.id})`, animationDuration: `var(--ds-motion-spring-${s.id}-duration)` }} />
          </div>
        </div>
      ))}
      <p className="ds-type-caption ds-secondary">Under reduced motion the blocks land at once.</p>
    </div>
  );
}

/** The curated icon vocabulary in its three weights, searchable. */
export function IconsDemo() {
  const [weight, setWeight] = useState<Key>("regular");
  const [query, setQuery] = useState("");
  const names = useMemo(() => (Object.keys(ICONS) as IconName[]).filter((n) => n.includes(query.trim().toLowerCase())), [query]);
  return (
    <div className="ds-stack ds-stack--16">
      <div className="site-matrix">
        <Search label="Filter icons" placeholder="Filter by name" size="sm" value={query} onChange={setQuery} />
        <SegmentedControl aria-label="Icon weight" selectedKey={weight} onSelectionChange={setWeight}>
          <Segment id="regular">Regular</Segment><Segment id="fill">Fill</Segment><Segment id="duotone">Duotone</Segment>
        </SegmentedControl>
      </div>
      <p className="ds-type-caption ds-secondary" aria-live="polite">{names.length} of {Object.keys(ICONS).length} icons</p>
      <ul className="site-icons">
        {names.map((n) => <li key={n}><Icon name={n} size={24} weight={weight as "regular"} /><span>{n}</span></li>)}
      </ul>
    </div>
  );
}
