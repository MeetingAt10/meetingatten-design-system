import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { resolveLink } from "./content";

/** Renders a repo markdown file (plain CommonMark + GFM, no JSX) with site link resolution. */
export async function Markdown({ source, file }: { source: string; file: string }) {
  const { default: Content } = await evaluate(source, { ...runtime, format: "md", remarkPlugins: [remarkGfm] });
  return (
    <div className="prose">
      <Content
        components={{
          a: ({ href = "", children }: { href?: string; children?: React.ReactNode }) => {
            const to = resolveLink(file, href);
            if (!to) return <span>{children}</span>;
            return to.startsWith("/") ? <Link className="ds-link-inline" href={to}>{children}</Link> : <a className="ds-link-inline" href={to}>{children}</a>;
          },
          table: (p: React.ComponentProps<"table">) => <div className="prose-table"><table {...p} /></div>,
        }}
      />
    </div>
  );
}
