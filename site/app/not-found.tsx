import Link from "next/link";
import { Logo, TimeBlock } from "@meetingat10/design-system/react";

/** 404: a slot that is not on the timetable. */
export default function NotFound() {
  return (
    <main className="ds-container ds-section site-notfound">
      <Logo code="404" />
      <h1 className="ds-type-h1">This page is not on the timetable.</h1>
      <p className="ds-lead">The address may be old, or the page moved when the system was rebuilt.</p>
      <div className="site-notfound__block"><TimeBlock time="--:--" title="No page here" form="disabled" stateLabel="Not found" /></div>
      <p className="ds-type-body"><Link className="ds-link ds-link--standalone" href="/">Back to the design system</Link></p>
    </main>
  );
}
