import type { Metadata } from "next";
import { EXAMPLES } from "../../_site/examples/list";
import { LandingBody } from "../../_site/examples/bodies";

const ex = EXAMPLES.find((e) => e.slug === "landing")!;
export const metadata: Metadata = { title: `${ex.title} example`, description: ex.description, alternates: { canonical: "/examples/landing/" } };

export default function Page() {
  return <LandingBody />;
}
