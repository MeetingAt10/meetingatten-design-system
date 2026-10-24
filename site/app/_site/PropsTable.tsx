import { readFileSync } from "node:fs";
import { join } from "node:path";

interface Prop { name: string; optional: boolean; type: string; doc: string }
interface Gen { interfaces: Record<string, { extends: string[]; props: Prop[] }>; aliases: Record<string, string>; components: Record<string, { doc: string; file: string }> }
const gen = (): Gen => JSON.parse(readFileSync(join(process.cwd(), ".generated/props.json"), "utf8"));

/** `a `code` b` -> text with <code> segments. */
const Doc = ({ text }: { text: string }) => <>{text.split("`").map((part, i) => (i % 2 ? <code key={i} className="ds-mono">{part}</code> : part))}</>;

/** Own props plus props inherited from this package's interfaces (minus Omit keys); React Aria bases are listed by name. */
function collect(g: Gen, name: string, omit = new Set<string>(), external: string[] = []): Prop[] {
  const iface = g.interfaces[name];
  if (!iface) return [];
  const own = iface.props.filter((p) => !omit.has(p.name));
  const inherited: Prop[] = [];
  for (const e of iface.extends) {
    const m = e.match(/^Omit<\s*([\w.]+)(?:<[^>]*>)?\s*,\s*(.+)>$/);
    const base = m ? m[1] : e;
    const omitted = new Set([...omit, ...(m ? [...m[2].matchAll(/'([^']+)'/g)].map((x) => x[1]) : [])]);
    if (g.interfaces[base]) inherited.push(...collect(g, base, omitted, external));
    else external.push(base);
  }
  return [...own, ...inherited.filter((p) => !own.some((o) => o.name === p.name))];
}

/** Props of a React component, generated from its TypeScript interface at build time. */
export function PropsTable({ component }: { component: string }) {
  const g = gen();
  let name = `${component}Props`;
  if (g.aliases[name] && g.interfaces[g.aliases[name]]) name = g.aliases[name];
  const external: string[] = [];
  const props = collect(g, name, new Set(), external);
  return (
    <section aria-labelledby="props-h">
      <h2 id="props-h" className="ds-type-h3" style={{ margin: "0 0 8px" }}>{component} props</h2>
      {g.components[component]?.doc && <p className="ds-type-body ds-secondary"><Doc text={g.components[component].doc} /></p>}
      {props.length > 0 ? (
        <div className="prose-table">
          <table>
            <thead><tr><th scope="col">Prop</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead>
            <tbody>
              {props.map((p) => (
                <tr key={p.name}><td><code className="ds-mono">{p.name}{p.optional ? "?" : ""}</code></td><td><code className="ds-mono">{g.aliases[p.type] ?? p.type}</code></td><td><Doc text={p.doc} /></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : <p className="ds-type-body-small ds-secondary">Standard HTML attributes for the rendered element.</p>}
      {external.length > 0 && <p className="ds-type-body-small ds-secondary">Also accepts the props of <code className="ds-mono">{[...new Set(external)].join(", ")}</code> (React Aria events, state and ARIA).</p>}
    </section>
  );
}
