import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SECTIONS, type Section } from "@/lib/content";
import { SectionIndex, sectionMetadata } from "@/app/_site/SectionIndex";

type Params = { params: Promise<{ section: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return (["foundations", "guides"] as const).map((section) => ({ section }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const section = (await params).section as Section;
  return SECTIONS[section] ? sectionMetadata(section) : {};
}

export default async function SectionPage({ params }: Params) {
  const section = (await params).section as Section;
  if (!SECTIONS[section]) notFound();
  return <SectionIndex section={section} />;
}
