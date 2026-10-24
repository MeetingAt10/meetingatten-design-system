import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allDocs, docBody, findDoc, routeOf, SECTIONS } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Sidebar } from "@/app/_site/Sidebar";
import { Demo } from "@/app/_site/Demo";
import { PropsTable } from "@/app/_site/PropsTable";

type Params = { params: Promise<{ section: string; slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return allDocs().map((d) => ({ section: d.section, slug: d.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { section, slug } = await params;
  const d = findDoc(section, slug);
  if (!d) return {};
  return { title: d.title, description: d.description, alternates: { canonical: routeOf(d) }, openGraph: { title: d.title, description: d.description, url: routeOf(d) } };
}

export default async function DocPage({ params }: Params) {
  const { section, slug } = await params;
  const d = findDoc(section, slug);
  if (!d) notFound();
  const body = docBody(d);
  const split = body.indexOf("\n## ");
  const intro = split > 0 ? body.slice(0, split) : body;
  const rest = split > 0 ? body.slice(split) : "";
  return (
    <div className="ds-container site-docs">
      <Sidebar current={d} />
      <main className="min-w-0">
        <article>
        <p className="ds-eyebrow">{SECTIONS[d.section].title}{d.category ? ` · ${d.category}` : ""}</p>
        <Markdown source={intro} file={d.file} />
        {d.demo && <Demo name={d.demo} />}
        {d.react && <PropsTable component={d.react} />}
        {rest && <Markdown source={rest} file={d.file} />}
        </article>
      </main>
    </div>
  );
}
