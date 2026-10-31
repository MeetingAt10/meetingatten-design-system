import type { Metadata } from "next";
import {
  Aurora, Badge, Button, CardAction, CardBody, CardHeader, CardLane, CardTitle, CountUp, FloatingArt, GridBackdrop, Hero, Logo, Marquee, NavItem, NowLine,
  Parallax, ParallaxScene, Reveal, ScrollProgress, Section, SectionHeader, SpotlightCard, WordReveal, type ImageryName,
} from "@meetingat10/design-system/react";
import { docsIn } from "@/lib/content";
import { art } from "@/lib/art";
import { stats } from "@/lib/stats";
import { EXAMPLES } from "@/app/_site/examples/list";
import { HomeSheet, RuleSpecimens } from "@/app/_site/HomeSheet";

export const metadata: Metadata = { alternates: { canonical: "/" } };

/** The hero constellation: render, left %, top %, width %, pointer depth (px), bob delay (s). Near renders are bigger and travel more. */
const CONSTELLATION: Array<[ImageryName, number, number, number, number, number]> = [
  ["fiber-ring", 1, 3, 21, 10, -8],
  ["mobius-loop", 68, 0, 25, 16, -6],
  ["neural-sphere", 20, 14, 56, 24, 0],
  ["glass-discs", 0, 56, 31, 40, -2],
  ["frosted-dodecahedron", 70, 58, 28, 34, -4],
];

const LANES = ["schedule", "community", "consult"] as const;

export default function Home() {
  const { components, tokens, icons, renders } = stats();
  const foundations = docsIn("foundations").length;
  const guides = docsIn("guides").length;
  const categories = [...new Set(docsIn("components").map((d) => d.category))];
  const names = docsIn("components").map((d) => ({ name: d.react ?? d.title, lane: LANES[categories.indexOf(d.category) % 3] }));
  const topics = [...docsIn("foundations"), ...docsIn("guides")].map((d) => d.title);
  return (
    <main>
      <ScrollProgress />
      <div className="site-stage">
        <Aurora />
        <GridBackdrop />
        <Hero
          plate={<Logo size="lg" code="DS 1.1" />}
          title={<WordReveal as="span" text="The faculty door, rebuilt as an interface." />}
          lead="Tokens, React components and patterns for the ACCS landing page, the portal and admin, and Meeting At 10. The pinned ACCS palette, accessible by default, the same in plain CSS and React."
          actions={<><Button size="lg" href="/guides/getting-started/" icon="rocket">Get started</Button><Button size="lg" variant="secondary" href="/components/" iconEnd="arrow-right">Browse components</Button></>}
          note="The renders are decoration. The sample week below is built from the package."
          art={
            <ParallaxScene className="site-constellation">
              <NowLine offset={0} label="10:00" className="site-constellation__now" />
              {CONSTELLATION.map(([name, left, top, width, depth, delay]) => (
                <FloatingArt key={name} {...art(name)} depth={depth} delay={delay} style={{ position: "absolute", left: `${left}%`, top: `${top}%`, width: `${width}%` }} />
              ))}
            </ParallaxScene>
          }
        />
      </div>

      <div className="site-ribbon">
        <Marquee duration={90}>
          {names.map((n) => <CardLane key={n.name} lane={n.lane}>{n.name}</CardLane>)}
        </Marquee>
        <Marquee reverse duration={110} className="site-ribbon__type">
          {topics.map((t) => <span key={t}>{t}</span>)}
        </Marquee>
      </div>

      <Section aria-labelledby="count-h">
        <h2 id="count-h" className="ds-visually-hidden">The package in numbers</h2>
        <ul className="site-stats">
          {([
            [components, "component pages", "Each with a live light and dark demo"],
            [tokens, "tokens", "Foundations, theme roles and materials"],
            [icons, "icons", "Regular, fill and duotone"],
            [renders, "3D renders", "Transparent WebP, ready to float"],
          ] as const).map(([n, label, hint], i) => (
            <Reveal as="li" key={label} index={i} className="site-stat">
              <span className="site-stat__n"><CountUp value={n} /></span>
              <span className="site-stat__label">{label}</span>
              <span className="site-stat__hint">{hint}</span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="sheet" aria-labelledby="inside-h">
        <Reveal><SectionHeader id="inside-h" title="What is inside" description="Four parts, one world: the weekly consultation timetable taped to a CCS faculty door." /></Reveal>
        <ul className="site-tiles">
          {([
            ["schedule", `${foundations} pages`, "Foundations", "/foundations/", "The 54 pinned colors and their light and dark roles, the type scale, the 8px row module, spring motion, the imagery and the materials.", "Palette, type, motion"],
            ["community", `${components} pages`, "Components", "/components/", "Every component on a light and a dark sheet, with props generated from the TypeScript types, states, and keyboard and screen reader notes.", "Browse components"],
            ["consult", `${guides} pages`, "Guides", "/guides/", "Getting started, migrating the three apps, voice and tone, accessibility, icons, and the changelog.", "Read the guides"],
            ["schedule", `${EXAMPLES.length} pages`, "Patterns", "/examples/landing/", "Whole pages built only from the package: the ACCS landing page, the portal overview, a restricted report, sign-in and the Meeting At 10 site.", "See the patterns"],
          ] as const).map(([lane, count, title, href, body, action], i) => (
            <Reveal as="li" key={title} index={i}>
              <SpotlightCard as="article" lane={lane} tilt className="ds-card--link">
                <CardHeader><CardLane lane={lane}>{count}</CardLane></CardHeader>
                <CardTitle href={href}>{title}</CardTitle>
                <CardBody>{body}</CardBody>
                <CardAction>{action}</CardAction>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="week-h">
        <Reveal><SectionHeader id="week-h" title="The product, at its real scale" description="A sample college week from the package: Timetable, TimeBlock and NowLine. The names and times are synthetic; nothing here is live." /></Reveal>
        <div className="site-week">
          <Parallax depth={50} className="site-week__art site-week__art--a"><FloatingArt {...art("glass-sphere")} delay={-3} /></Parallax>
          <Parallax depth={-30} className="site-week__art site-week__art--b"><FloatingArt {...art("wire-octahedron")} delay={-6} /></Parallax>
          <Reveal variant="scale"><HomeSheet /></Reveal>
        </div>
      </Section>

      <Section tone="sheet" aria-labelledby="rules-h">
        <Reveal><SectionHeader id="rules-h" title="Five rules of the world" description="Each rule is enforced in code, and each one is visible on this page." /></Reveal>
        <RuleSpecimens
          current={<nav aria-label="Specimen navigation" className="ds-stack ds-stack--4"><NavItem href="/" icon="house" isCurrent>Overview</NavItem><NavItem href="/components/" icon="code">Components</NavItem></nav>}
          forms={<div className="site-matrix"><Badge>Open</Badge><Badge tone="warning" form="pending">Pending</Badge><Badge form="restricted">Restricted</Badge><Badge form="closed">Withdrawn</Badge></div>}
        />
      </Section>

      <Section tone="plate" aria-labelledby="install-h">
        <div className="site-cta">
          <h2 id="install-h" className="ds-type-h1">Install by tag.</h2>
          <pre className="site-install"><code>npm install github:MeetingAt10/meetingatten-design-system#v1.1.0</code></pre>
          <div className="ds-row"><Button size="lg" variant="plate" href="/guides/getting-started/" iconEnd="arrow-right">Read the getting started guide</Button></div>
        </div>
      </Section>
    </main>
  );
}
