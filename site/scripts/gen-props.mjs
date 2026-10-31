// Props tables for the site: reads exported interfaces, type aliases and component docs from ../src/react with the TypeScript compiler API.
import ts from 'typescript';
import { readFileSync, readdirSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';

const SRC = join(process.cwd(), '..', 'src', 'react');
const files = readdirSync(SRC, { recursive: true }).filter((f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx') && !f.startsWith('test'));
const out = { interfaces: {}, aliases: {}, components: {} };
const doc = (node) => ts.getJSDocCommentsAndTags(node).map((d) => (typeof d.comment === 'string' ? d.comment : '')).join(' ').replace(/\s+/g, ' ').trim();
const exported = (node) => node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword);

for (const f of files) {
  const sf = ts.createSourceFile(f, readFileSync(join(SRC, f), 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  for (const s of sf.statements) {
    if (!exported(s)) continue;
    if (ts.isInterfaceDeclaration(s)) {
      out.interfaces[s.name.text] = {
        extends: (s.heritageClauses ?? []).flatMap((h) => h.types.map((t) => t.getText(sf))),
        props: s.members.filter(ts.isPropertySignature).map((m) => ({ name: m.name.getText(sf), optional: !!m.questionToken, type: m.type?.getText(sf).replace(/\s+/g, ' ') ?? '', doc: doc(m) })),
      };
    } else if (ts.isTypeAliasDeclaration(s)) {
      out.aliases[s.name.text] = s.type.getText(sf).replace(/\s+/g, ' ');
    } else if (ts.isFunctionDeclaration(s) && s.name) {
      out.components[s.name.text] = { doc: doc(s), file: f };
    }
  }
}
mkdirSync('.generated', { recursive: true });
writeFileSync('.generated/props.json', JSON.stringify(out, null, 2));
console.log(`gen-props: ${Object.keys(out.components).length} components, ${Object.keys(out.interfaces).length} interfaces`);

// The logo files (Meeting At 10 and the proposed ACCS marks), served for the favicon and the Logo demo.
mkdirSync('public/logo', { recursive: true });
for (const f of readdirSync(join(process.cwd(), '..', 'assets', 'logo'))) copyFileSync(join(process.cwd(), '..', 'assets', 'logo', f), join('public/logo', f));

// The brand renders, served at /imagery/<name>.webp for the home page and the expressive demos.
mkdirSync('public/imagery', { recursive: true });
for (const f of readdirSync(join(process.cwd(), '..', 'assets', 'imagery')).filter((f) => f.endsWith('.webp'))) copyFileSync(join(process.cwd(), '..', 'assets', 'imagery', f), join('public/imagery', f));
