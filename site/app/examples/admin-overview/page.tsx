import type { Metadata } from "next";
import { EXAMPLES } from "../../_site/examples/list";
import { AdminOverviewBody } from "../../_site/examples/bodies";

const ex = EXAMPLES.find((e) => e.slug === "admin-overview")!;
export const metadata: Metadata = { title: `${ex.title} example`, description: ex.description, alternates: { canonical: "/examples/admin-overview/" } };

export default function Page() {
  return <AdminOverviewBody />;
}
