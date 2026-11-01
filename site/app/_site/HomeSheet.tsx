"use client";
import { Icon, NowLine, TimeBlock, Timetable, useNow } from "@meetingat10/design-system/react";
import { WEEK, WEEK_EVENTS } from "./examples/data";

/** The home page artifact: a college week, with the now-line live while it falls inside the sheet. */
export function HomeSheet() {
  const live = useNow();
  const now = live !== undefined && live >= 8 && live <= 17 ? live : 10.7;
  return (
    <Timetable
      label="A college week, built from the design system"
      days={WEEK}
      events={WEEK_EVENTS}
      now={now}
      band={<><span className="ds-timetable__band-label"><Icon name="lock" size={16} weight="fill" /><strong>Reports</strong></span>Restricted: you see only your own records.</>}
    />
  );
}

/** The five rules, each beside a live specimen. */
export function RuleSpecimens({ current, forms }: { current: React.ReactNode; forms: React.ReactNode }) {
  const rules: Array<[string, string, React.ReactNode]> = [
    ["Each lane has its own block color", "Schedule is navy, community is amber and consultations are emerald. The color fills the whole block. It is never a stripe or a dot.", (
      <div className="site-blocks site-blocks--tight">
        <TimeBlock time="09:00" title="Data Structures" />
        <TimeBlock time="14:00" title="Study circle" lane="community" />
        <TimeBlock time="10:00" title="Office hours" lane="consult" />
      </div>
    )],
    ["State shows in the line", "A solid line is open, dashed is pending, hatched is taken or restricted and struck is closed. A word always comes with it.", forms],
    ["Reports are marked as restricted", "Reports are hatched ink with no hue. Color never signals confidentiality. The words and the hatching do.", (
      <div className="site-band"><span className="ds-timetable__band-inner"><span className="ds-timetable__band-label"><Icon name="lock" size={16} weight="fill" /><strong>Reports</strong></span>Your own records only</span></div>
    )],
    ["The current time is a line", "A red line carries the time on a plate. It moves as the minutes pass and stays still under reduced motion.", (
      <div className="site-nowline" aria-hidden="true"><span className="site-nowline__hour">10:00</span><span className="site-nowline__hour">11:00</span><NowLine offset={0.7} label="10:42" /></div>
    )],
    ["The current item is a solid block", "The page you are on, the chosen day and the current page number each turn into a navy block. A current item's icon switches to its fill weight.", current],
  ];
  return (
    <ol className="site-rules">
      {rules.map(([title, body, specimen]) => (
        <li key={title} className="site-rule">
          <div className="site-rule__text"><h3 className="ds-type-h3">{title}</h3><p className="ds-type-body ds-secondary">{body}</p></div>
          <div className="site-rule__specimen">{specimen}</div>
        </li>
      ))}
    </ol>
  );
}
