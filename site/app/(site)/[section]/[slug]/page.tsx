import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDocs, findDoc } from "@/lib/content";
import { DocView, docMetadata } from "@/app/_site/DocView";
import { TokenDemo } from "@/app/_site/TokenDemo";

type Params = { params: Promise<{ section: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return allDocs().filter((d) => d.section !== "components").map((d) => ({ section: d.section, slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { section, slug } = await params;
  return docMetadata(findDoc(section, slug));
}

export default async function DocPage({ params }: Params) {
  const { section, slug } = await params;
  const d = findDoc(section, slug);
  if (!d) notFound();
  return <DocView doc={d} demo={d.demo ? <TokenDemo name={d.demo} /> : undefined} />;
}
