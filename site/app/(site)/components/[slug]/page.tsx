import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { docsIn, findDoc } from "@/lib/content";
import { DocView, docMetadata } from "@/app/_site/DocView";
import { Demo } from "@/app/_site/Demo";

type Params = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return docsIn("components").map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  return docMetadata(findDoc("components", (await params).slug));
}

export default async function ComponentPage({ params }: Params) {
  const d = findDoc("components", (await params).slug);
  if (!d) notFound();
  return <DocView doc={d} demo={d.demo ? <Demo name={d.demo} /> : undefined} />;
}
