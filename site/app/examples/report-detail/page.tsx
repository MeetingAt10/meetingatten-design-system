import type { Metadata } from "next";
import { EXAMPLES } from "../../_site/examples/list";
import { ExampleNav } from "../../_site/examples/ExampleNav";
import { ReportDetailBody } from "../../_site/examples/bodies";

const ex = EXAMPLES.find((e) => e.slug === "report-detail")!;
export const metadata: Metadata = { title: `${ex.title} example`, description: ex.description, alternates: { canonical: "/examples/report-detail/" } };

export default function Page() {
  return (
    <>
      <ExampleNav current="report-detail" />
      <ReportDetailBody />
    </>
  );
}
