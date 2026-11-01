"use client";
import { useState } from "react";
import {
  Accordion, Agenda, AgendaItem, Alert, AnnouncementCard, Button, ConsultationSlotPicker, Disclosure, DoorPlate, Footer, ForumCard, Grid,
  Hero, Highlight, Icon, Navbar, Radio, RadioGroup, Section, SectionHeader, Select, SelectOption, Stack, Timetable, toast, useNow,
} from "@meetingat10/design-system/react";
import { SLOT_DAYS, SLOTS, WEEK, WEEK_EVENTS } from "./data";

/** Live time on today's column while it falls inside the sheet; 10:42 otherwise. */
function useSheetNow(start = 8, end = 17) {
  const live = useNow();
  return live !== undefined && live >= start && live <= end ? live : 10.7;
}

function Booking() {
  const [day, setDay] = useState("wed");
  const [slot, setSlot] = useState<string | null>(null);
  return (
    <Stack gap={24}>
      <ConsultationSlotPicker days={SLOT_DAYS} selectedDay={day} onDayChange={setDay} slots={SLOTS} value={slot} onChange={setSlot} timeZoneNote="Asia/Manila (PHT)" />
      <RadioGroup label="Meeting type" defaultValue="campus" row>
        <Radio value="online" card description="A link is sent after the faculty member confirms.">Online</Radio>
        <Radio value="campus" card description="At the faculty office shown on the slot.">On campus</Radio>
      </RadioGroup>
      <Select label="Topic" placeholder="Choose a topic" defaultSelectedKey="planning">
        <SelectOption id="planning">Course planning</SelectOption>
        <SelectOption id="thesis">Thesis advising</SelectOption>
        <SelectOption id="career">Career guidance</SelectOption>
      </Select>
      <div className="ds-row">
        <Button icon="calendar-check" isDisabled={!slot} onPress={() => toast("Consultation request reviewed", { description: "Choose Confirm to book this slot.", tone: "success" })}>
          Review selection
        </Button>
        <span className="ds-type-body-small ds-secondary">{slot ? "Nothing is booked until a faculty member confirms." : "Choose an open slot first."}</span>
      </div>
    </Stack>
  );
}

export function LandingBody() {
  const now = useSheetNow();
  return (
    <>
      <Navbar
        brand={<DoorPlate />}
        brandLabel="ACCS home"
        brandHref="/examples/landing/"
        links={[{ label: "Community", href: "#community" }, { label: "Consultations", href: "#consultations" }, { label: "Reports", href: "#reports" }]}
        actions={<Button size="sm" href="/examples/sign-in/" icon="sign-in">Sign in</Button>}
      />
      <main>
        <Hero
          plate={<DoorPlate size="lg" tagline="Access for College of Computer Studies" />}
          title="Your Access to the College of Computer Studies"
          lead="Ask the community, book a consultation, keep track of your own reports. One college week, each thing in its lane."
          actions={<><Button size="lg" href="/examples/sign-in/" icon="sign-in">Sign in</Button><Button size="lg" variant="secondary" href="#community">Browse the community</Button></>}
          note="Times are shown in Asia/Manila (PHT)."
          art={
            <Timetable
              label="A college week in ACCS"
              days={WEEK}
              events={WEEK_EVENTS}
              now={now}
              band={<><span className="ds-timetable__band-label"><Icon name="lock" size={16} weight="fill" /><strong>Reports</strong></span>Restricted: you see only your own records. Community access does not grant report access.</>}
            />
          }
        />

        <Section tone="sheet" aria-labelledby="lanes-h">
          <SectionHeader id="lanes-h" title="Three lanes, and a boundary that stays drawn" description="Everything in ACCS sits in one of three lanes. The reports lane is hatched on purpose: it is part of the week, and it is closed to everyone but you and the people assigned to your record." />
          <Agenda>
            <AgendaItem chip="Community" lane="community" title="Ask, answer, share what helped" href="#community" linkLabel="Join the conversation">Casual and encouraging. Post a question about recursion at midnight and find an explanation by morning.</AgendaItem>
            <AgendaItem chip="Consultations" lane="consult" title="Book office hours without the hallway hunt" href="#consultations" linkLabel="See open slots">Faculty publish their hours; you choose an open slot. Nothing is booked until they confirm.</AgendaItem>
            <AgendaItem chip="Reports" lane="restricted" title="Your own records, kept apart" href="/examples/report-detail/" linkLabel="See a record">Serious and structured. Drafts stay yours. Submission opens only when recipients and access rules are confirmed.</AgendaItem>
          </Agenda>
        </Section>

        <Section id="consultations" aria-labelledby="book-h">
          <Grid columns="split">
            <Stack gap={24}>
              <SectionHeader id="book-h" title="Find a time to talk" description="Pick a day, then an open slot. Open slots have a solid outline; booked ones are hatched; unavailable ones are struck through." />
              <Alert title="Consultation is support">It is not an urgent-response channel. For urgent matters, contact the college office.</Alert>
            </Stack>
            <Booking />
          </Grid>
        </Section>

        <Section tone="sheet" id="community" aria-labelledby="community-h">
          <SectionHeader split id="community-h" title="This week in the community" description="Community content is public within the college community." actions={<Button variant="secondary" iconEnd="arrow-right">All posts</Button>} />
          <Grid columns={3}>
            <ForumCard topic="Algorithms" title="What helped recursion finally click for you?" excerpt="Share the explanation, drawing or example that worked. Follow-up questions welcome." author="Paolo Dizon" replies={6} status="Open discussion" href="#" />
            <AnnouncementCard tag="Announcement" when="Mon 19 Oct · 09:00" title="Hackathon briefing moves to the AVR" meta="Community desk" href="#">Same time, Wednesday 13:00. Bring a laptop; teams form on the day.</AnnouncementCard>
            <ForumCard topic="Web development" title="Which CSS layout finally made sense to you?" excerpt="Grid, flex, or the one your instructor drew on the whiteboard." author="Paolo Dizon" replies={11} status="Open discussion" href="#" />
          </Grid>
        </Section>

        <Section id="reports" aria-labelledby="faq-h">
          <Grid columns="main">
            <Stack gap={16}>
              <h2 id="faq-h" className="ds-type-h2">Plain answers</h2>
              <Accordion defaultExpandedKeys={["anon"]}>
                <Disclosure id="anon" title="Is the community anonymous?">No. Community posts show your name to members of the college community. Do not post personal or case details there.</Disclosure>
                <Disclosure id="reports" title="Who can see my reports?">You, and the people assigned to your record once recipients and access rules are confirmed. Restricted access does not mean anonymous.</Disclosure>
                <Disclosure id="live" title="Are these schedules current?">Yes. Consultation hours follow each faculty member's posted schedule and update as it changes.</Disclosure>
              </Accordion>
            </Stack>
            <p className="ds-lead">Community access does <Highlight under>not</Highlight> grant report access. The boundary is drawn into every screen, not hidden in a policy page.</p>
          </Grid>
        </Section>

        <Section tone="plate" aria-labelledby="cta-h">
          <div className="site-cta">
            <h2 id="cta-h" className="ds-type-h1">Your college week, in one place.</h2>
            <div className="ds-row"><Button size="lg" variant="plate" href="/examples/sign-in/" icon="sign-in">Sign in with your CCS account</Button></div>
          </div>
        </Section>
      </main>
      <Footer
        brand={<DoorPlate />}
        description="Your Access to the College of Computer Studies."
        columns={[
          { title: "ACCS", links: [{ label: "Community", href: "#community" }, { label: "Consultations", href: "#consultations" }, { label: "Reports", href: "#reports" }] },
          { title: "Policy", links: [{ label: "Privacy and access", href: "#" }, { label: "Accessibility", href: "#" }] },
        ]}
        note="Quezon City University, College of Computer Studies."
      />
    </>
  );
}
