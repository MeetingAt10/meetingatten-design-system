import type { Metadata } from "next";
import { EXAMPLES } from "../../_site/examples/list";
import { MeetingAt10Body } from "../../_site/examples/MeetingAt10";

const ex = EXAMPLES.find((e) => e.slug === "meeting-at-10")!;
export const metadata: Metadata = { title: `${ex.title} example`, description: ex.description, alternates: { canonical: "/examples/meeting-at-10/" } };

export default function Page() {
  return <MeetingAt10Body />;
}
