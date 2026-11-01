import type { Metadata } from "next";
import Link from "next/link";
import {
  Badge, Button, Hero, Icon, Logo, NavItem, Reveal, ScrollProgress, Section, SectionHeader, WordReveal,
} from "@meetingat10/design-system/react";
import { docsIn } from "@/lib/content";
import { EXAMPLES } from "@/app/_site/examples/list";
import { HomeSheet, RuleSpecimens } from "@/app/_site/HomeSheet";
import { HomeBento } from "@/app/_site/HomeBento";
import { VERSION } from "@/lib/stats";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const SWATCHES = [
  ["Ivory", "canvas"], ["Paper", "surface"], ["Ink", "ink"], ["Navy", "navy"], ["Cobalt", "cobalt"], ["Emerald", "emerald"], ["Amber", "amber"],
] as const;

export default function Home() {
  const foundations = docsIn("foundations").length;
  const components = docsIn("components").length;
  const guides = docsIn("guides").length;
  const parts = [
    ["Foundations", "/foundations/", `${foundations} pages`, "Palette, type, spacing, motion and the materials every screen uses."],
    ["Components", "/components/", `${components} pages`, "Each component live in light and dark, with props, states and keyboard notes."],
    ["Patterns", "/examples/landing/", `${EXAMPLES.length} pages`, "Full pages built from the package: the landing page, portal, a restricted record, sign-in and the team site."],
    ["Guides", "/guides/", `${guides} pages`, "Install steps, app migration, voice and tone, accessibility and the changelog."],
  ] as const;
  return (
    <main>
      <ScrollProgress />
      <Hero
        className="site-hero"
        title={<WordReveal as="span" text="Interfaces for the college week" />}
        lead="Tokens, React components and patterns for the ACCS portal, the ACCS landing page and the Meeting At 10 site."
        actions={<><Button size="lg" href="/guides/getting-started/" icon="rocket">Get started</Button><Button size="lg" variant="secondary" href="/components/" iconEnd="arrow-right">Browse components</Button></>}
        art={<div className="site-enter site-hero__window" style={{ "--i": 3 } as React.CSSProperties}><div className="site-win__bar"><span className="site-win__title">This week</span><Badge tone="consult">Consultations open</Badge></div><div className="site-hero__sheet"><HomeSheet /></div></div>}
      />

      <Section tone="sheet" aria-labelledby="parts-h">
        <h2 id="parts-h" className="ds-visually-hidden">Parts of the system</h2>
        <ul className="site-index-rows">
          {parts.map(([title, href, count, body], i) => (
            <Reveal as="li" key={title} index={i}>
              <Link href={href} className="site-index-row">
                <span className="site-index-row__title">{title}</span>
                <span className="site-index-row__body">{body}</span>
                <span className="site-index-row__count">{count}<Icon name="arrow-right" size={20} /></span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="live-h">
        <Reveal><SectionHeader id="live-h" title="Live components" description="These are the package's own components running on this page. Switch the tabs, type in the field and flip the switches." /></Reveal>
        <Reveal variant="scale"><HomeBento /></Reveal>
      </Section>

      <Section tone="sheet" aria-labelledby="rules-h">
        <Reveal><SectionHeader id="rules-h" title="Five rules the interface follows" description="Each rule shows up on screen. The build checks them." /></Reveal>
        <RuleSpecimens
          current={<nav aria-label="Specimen navigation" className="ds-stack ds-stack--4"><NavItem href="/" icon="house" isCurrent>Overview</NavItem><NavItem href="/components/" icon="code">Components</NavItem></nav>}
          forms={<div className="site-matrix"><Badge>Open</Badge><Badge tone="warning" form="pending">Pending</Badge><Badge form="restricted">Restricted</Badge><Badge form="closed">Withdrawn</Badge></div>}
        />
      </Section>

      <Section className="ds-section--wash" aria-labelledby="look-h">
        <div className="site-look">
          <Reveal className="site-look__type">
            <h2 id="look-h" className="site-look__display">Fonts and <em>palette</em></h2>
            <p className="ds-lead">Plus Jakarta Sans sets headings and Inter sets body text. JetBrains Mono sets codes like <span className="ds-time">CCS-2026-0142</span> and nothing else. The ground is ivory, focus is cobalt, and emerald and amber mark the consultation and community lanes.</p>
          </Reveal>
          <Reveal variant="end" className="site-look__palette">
            <ul className="site-swatches" aria-label="Palette">
              {SWATCHES.map(([name, key]) => (
                <li key={key} className={`site-swatch site-swatch--${key}`}><span className="site-swatch__name">{name}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="plate" aria-labelledby="install-h">
        <div className="site-cta">
          <Logo size="lg" code={`v${VERSION}`} />
          <h2 id="install-h" className="ds-type-h1">Install a tagged release</h2>
          <pre className="site-install"><code>npm install github:MeetingAt10/meetingatten-design-system#v{VERSION}</code></pre>
          <div className="ds-row"><Button size="lg" variant="plate" href="/guides/getting-started/" iconEnd="arrow-right">Read the install guide</Button></div>
        </div>
      </Section>
    </main>
  );
}
