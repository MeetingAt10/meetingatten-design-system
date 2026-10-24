import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Card, CardHeader, CardMeta, Feature, FeatureRow, Grid, Hero, Section, SectionHeader } from "@meetingat10/design-system/react";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main>
      <Hero
        eyebrow="ACCS · Access for College of Computer Studies"
        title="One design system for every ACCS screen."
        lead="Tokens, light and dark themes and React components built on the team’s Figma palette: soft layers, accessible by default, the same in Tailwind and plain CSS."
        actions={<><Link className="ds-btn ds-btn--primary" href="/guides/getting-started/">Get started</Link><Link className="ds-btn ds-btn--secondary" href="/components/">Browse components</Link></>}
        aside={
          <>
            <Card><CardHeader><Badge tone="secondary">Soft layers</Badge><span className="ds-tag-mono">Light + dark</span></CardHeader><h2 className="ds-type-h3">Raised cards, tinted tiles, token washes.</h2><CardMeta>Every color comes from the locked Figma palette.</CardMeta></Card>
            <Card><CardHeader><Badge tone="accent">React Aria</Badge><span className="ds-tag-mono">31 components</span></CardHeader><h2 className="ds-type-h3">Keyboard, focus and ARIA built in.</h2><CardMeta>Tested with Testing Library and axe in every state.</CardMeta></Card>
          </>
        }
      />
      <Section band aria-label="Explore">
        <SectionHeader eyebrow="Explore" title="Start with the foundations, then build screens." />
        <FeatureRow>
          <Feature icon="shield" tone="secondary" title="Foundations" href="/foundations/" linkLabel="Color, type, treatments">The locked ACCS palette, type scale, spacing, radius, elevation, motion and the look tokens built from them.</Feature>
          <Feature icon="forum" tone="accent" title="Components" href="/components/" linkLabel="Browse components">Live demos in light and dark, props generated from the TypeScript types, and the rules for each component.</Feature>
          <Feature icon="report" title="Examples" href="/examples/landing/" linkLabel="See example pages">Landing, admin overview, sign-in and report detail, built only from the package.</Feature>
        </FeatureRow>
      </Section>
      <Section aria-label="Principles">
        <SectionHeader eyebrow="Rules" title="Built to keep the colors." />
        <Grid columns={3}>
          {[
            ["Locked palette", "Product code uses semantic and look tokens only. Raw hex and primitive colors fail the build (check:tokens)."],
            ["Checked contrast", "Every text and boundary pair, including text on washes, is tested in light and dark."],
            ["Cards with a purpose", "Cards are for collection items and floating panels. Everything else stays open."],
          ].map(([title, body]) => (
            <div key={title} className="ds-stack"><h3 className="ds-type-h4" style={{ margin: 0 }}>{title}</h3><p className="ds-type-body ds-secondary" style={{ margin: 0 }}>{body}</p></div>
          ))}
        </Grid>
      </Section>
    </main>
  );
}
