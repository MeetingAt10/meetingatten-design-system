import type { Metadata } from "next";
import { Agenda, AgendaItem, Badge, Button, Hero, Logo, NavItem, Section, SectionHeader } from "@meetingat10/design-system/react";
import { docsIn } from "@/lib/content";
import { EXAMPLES } from "@/app/_site/examples/list";
import { HomeSheet, RuleSpecimens } from "@/app/_site/HomeSheet";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const components = docsIn("components").length;
  const foundations = docsIn("foundations").length;
  return (
    <main>
      <Hero
        plate={<Logo size="lg" code="DS 1.0" />}
        title="The faculty door, rebuilt as an interface."
        lead="Tokens, React components and patterns for the ACCS landing page, the portal and admin, and Meeting At 10. The pinned ACCS palette, accessible by default, the same in plain CSS and React."
        actions={<><Button size="lg" href="/guides/getting-started/" icon="rocket">Get started</Button><Button size="lg" variant="secondary" href="/components/" iconEnd="arrow-right">Browse components</Button></>}
        note="Sample schedule on the right, built from the package: Timetable, TimeBlock and NowLine."
        art={<HomeSheet />}
      />

      <Section tone="sheet" aria-labelledby="inside-h">
        <SectionHeader id="inside-h" title="What is inside" description="Four parts, one world: the weekly consultation timetable taped to a CCS faculty door." />
        <Agenda>
          <AgendaItem chip={`${foundations} pages`} title="Foundations" href="/foundations/" linkLabel="Palette, type, motion">The 54 pinned colors and their light and dark roles, the type scale, the 8px row module, spring motion and the materials: rules, blocks, hatching, highlighter, plates.</AgendaItem>
          <AgendaItem chip={`${components} pages`} lane="community" title="Components" href="/components/" linkLabel="Browse components">Every component on a light and a dark sheet, with props generated from the TypeScript types, states, and keyboard and screen reader notes.</AgendaItem>
          <AgendaItem chip={`${EXAMPLES.length} pages`} lane="consult" title="Patterns" href="/examples/landing/" linkLabel="See the patterns">Whole pages built only from the package: the ACCS landing page, the portal overview, a restricted report, sign-in and the Meeting At 10 site.</AgendaItem>
          <AgendaItem chip="Guides" title="Guides" href="/guides/" linkLabel="Read the guides">Getting started, migrating the three apps, voice and tone, accessibility, icons, and the changelog.</AgendaItem>
        </Agenda>
      </Section>

      <Section aria-labelledby="rules-h">
        <SectionHeader id="rules-h" title="Five rules of the world" description="Each rule is enforced in code, and each one is visible on this page." />
        <RuleSpecimens
          current={<nav aria-label="Specimen navigation" className="ds-stack ds-stack--4"><NavItem href="/" icon="house" isCurrent>Overview</NavItem><NavItem href="/components/" icon="code">Components</NavItem></nav>}
          forms={<div className="site-matrix"><Badge>Open</Badge><Badge tone="warning" form="pending">Pending</Badge><Badge form="restricted">Restricted</Badge><Badge form="closed">Withdrawn</Badge></div>}
        />
      </Section>

      <Section tone="plate" aria-labelledby="install-h">
        <div className="site-cta">
          <h2 id="install-h" className="ds-type-h1">Install by tag.</h2>
          <pre className="site-install"><code>npm install github:MeetingAt10/meetingatten-design-system#v1.0.0</code></pre>
          <div className="ds-row"><Button size="lg" variant="plate" href="/guides/getting-started/" iconEnd="arrow-right">Read the getting started guide</Button></div>
        </div>
      </Section>
    </main>
  );
}
