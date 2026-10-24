import type { Metadata } from "next";
import { docBody, routeOf, SECTIONS, type Doc } from "@/lib/content";
import { Markdown } from "@/lib/markdown";
import { Sidebar } from "./Sidebar";
import { PropsTable } from "./PropsTable";

export function docMetadata(d: Doc | undefined): Metadata {
  if (!d) return {};
  return { title: d.title, description: d.description, alternates: { canonical: routeOf(d) }, openGraph: { title: d.title, description: d.description, url: routeOf(d) } };
}

/** A documentation page: sidebar, the markdown intro, the demo (if any), props (if a React component), then the rest. */
export function DocView({ doc, demo }: { doc: Doc; demo?: React.ReactNode }) {
  const body = docBody(doc);
  const split = body.indexOf("\n## ");
  const intro = split > 0 ? body.slice(0, split) : body;
  const rest = split > 0 ? body.slice(split) : "";
  return (
    <div className="ds-container site-docs">
      <Sidebar current={doc} />
      <main className="min-w-0">
        <article>
          <p className="ds-eyebrow">{SECTIONS[doc.section].title}{doc.category ? ` · ${doc.category}` : ""}</p>
          <Markdown source={intro} file={doc.file} />
          {demo}
          {doc.react && <PropsTable component={doc.react} />}
          {rest && <Markdown source={rest} file={doc.file} />}
        </article>
      </main>
    </div>
  );
}
