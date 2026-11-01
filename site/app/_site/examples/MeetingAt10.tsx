"use client";
import { Agenda, AgendaItem, Button, Footer, Hero, Logo, Navbar, Section, SectionHeader, Timetable, type TimetableEvent } from "@meetingat10/design-system/react";

const TODAY = [{ id: "today", label: "Today", fullLabel: "A working day at Meeting At 10", isToday: true }];
const DAY: TimetableEvent[] = [
  { id: "standup", day: "today", start: 10, end: 10.5, title: "Standup", meta: "Everyone, 15 minutes" },
  { id: "build", day: "today", start: 10.5, end: 12.5, title: "Build", meta: "Pairs, one task each", lane: "consult" },
  { id: "lunch", day: "today", start: 12.5, end: 13.5, title: "Lunch", form: "taken", stateLabel: "Away" },
  { id: "review", day: "today", start: 13.5, end: 15, title: "Review", meta: "Walk through what changed", lane: "community" },
  { id: "ship", day: "today", start: 16, end: 17, title: "Ship", meta: "Tag, deploy, write it down" },
];

export function MeetingAt10Body() {
  return (
    <>
      <Navbar
        brand={<Logo />}
        brandHref="/examples/meeting-at-10/"
        links={[{ label: "Work", href: "#work", current: true }, { label: "Team", href: "#team" }, { label: "Log", href: "#log" }]}
        actions={<Button size="sm" variant="secondary" href="/examples/landing/">See ACCS</Button>}
      />
      <main>
        <Hero
          title="We meet at 10. Then we ship."
          lead="Meeting At 10 is the capstone team building ACCS, the college workspace for the College of Computer Studies. We hold a 15-minute meeting and ship a small change every working day."
          actions={<><Button size="lg" href="#work" icon="rocket">What we build</Button><Button size="lg" variant="secondary" href="#team">The team</Button></>}
          note="The now-line on our day sheet stays at 10:00."
          art={<Timetable label="A working day at Meeting At 10" days={TODAY} events={DAY} now={10} startHour={8} endHour={18} isolate={false} />}
        />
        <Section tone="sheet" aria-labelledby="work-h" id="work">
          <SectionHeader id="work-h" title="What we build" description="The ACCS landing page, the portal and admin, and the design system under both." />
          <Agenda>
            <AgendaItem chip="ACCS" title="The ACCS landing page" href="/examples/landing/" linkLabel="See the landing page">What a student sees first: the week, the lanes, and the boundary around reports.</AgendaItem>
            <AgendaItem chip="Portal" lane="consult" title="The portal and admin" href="/examples/admin-overview/" linkLabel="See the portal">Community, consultations and own reports for students, faculty and staff.</AgendaItem>
            <AgendaItem chip="System" lane="community" title="This design system" href="/" linkLabel="Read the docs">Tokens, React components and patterns that every ACCS screen uses.</AgendaItem>
          </Agenda>
        </Section>
        <Section aria-labelledby="team-h" id="team">
          <SectionHeader id="team-h" title="The team" description="Four roles attend the standup. Each role owns one part of the work." />
          <Agenda>
            <AgendaItem chip="10:00" title="Project lead">Keeps the standup to fifteen minutes and the scope small.</AgendaItem>
            <AgendaItem chip="10:00" lane="consult" title="Frontend">Builds every screen from this system.</AgendaItem>
            <AgendaItem chip="10:00" lane="community" title="Backend">Data, sign-in, and the access rules that keep reports apart.</AgendaItem>
            <AgendaItem chip="10:00" lane="restricted" title="Design">Owns this design system and decides when a style is clear enough to ship.</AgendaItem>
          </Agenda>
        </Section>
        <Section tone="plate" aria-labelledby="log-h" id="log">
          <div className="site-cta">
            <h2 id="log-h" className="ds-type-h1">Next meeting: 10:00 tomorrow.</h2>
            <p className="ds-lead">Same room, same fifteen minutes. Then we go back to shipping.</p>
          </div>
        </Section>
      </main>
      <Footer brand={<Logo />} description="We meet at 10. Then we ship." note="Built with the Meeting At 10 design system." />
    </>
  );
}
