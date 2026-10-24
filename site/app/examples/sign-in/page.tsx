import type { Metadata } from "next";
import { EXAMPLES } from "../../_site/examples/list";
import { SignInBody } from "../../_site/examples/bodies";

const ex = EXAMPLES.find((e) => e.slug === "sign-in")!;
export const metadata: Metadata = { title: `${ex.title} example`, description: ex.description, alternates: { canonical: "/examples/sign-in/" } };

export default function Page() {
  return <SignInBody />;
}
