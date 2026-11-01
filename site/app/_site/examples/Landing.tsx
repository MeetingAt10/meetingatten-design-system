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
          lead="Ask the community, book a consultation and track your own reports, each in its own lane of the college week."
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
          <SectionHeader id="lanes-h" title="Community, consultations and reports" description="Everything in ACCS sits in one of these lanes. The reports lane is hatched. Only you and the people assigned to your record can open it." />
          <Agenda>
            <AgendaItem chip="Community" lane="community" title="Ask a question, share an answer" href="#community" linkLabel="Join the conversation">Post a question about recursion at midnight and read the explanations by morning.</AgendaItem>
            <AgendaItem chip="Consultations" lane="consult" title="Book office hours" href="#consultations" linkLabel="See open slots">Faculty publish their hours and you choose an open slot. Nothing is booked until they confirm.</AgendaItem>
            <AgendaItem chip="Reports" lane="restricted" title="Your own records" href="/examples/report-detail/" linkLabel="See a record">Drafts stay yours. Submission opens when recipients and access rules are confirmed.</AgendaItem>
          </Agenda>
        </Section>

        <Section id="consultations" aria-labelledby="book-h">
          <Grid columns="split">
            <Stack gap={24}>
              <SectionHeader id="book-h" title="Find a time to talk" description="Pick a day, then an open slot. Open slots have a solid outline, booked slots are hatched and unavailable slots are struck through." />
              <Alert title="Consultations are not for emergencies">For urgent matters, contact the college office.</Alert>
            </Stack>
            <Booking />
          </Grid>
        </Section>

        <Section tone="sheet" id="community" aria-labelledby="community-h">
          <SectionHeader split id="community-h" title="This week in the community" description="Community content is public within the college community." actions={<Button variant="secondary" iconEnd="arrow-right">All posts</Button>} />
          <Grid columns="main">
            <ForumCard topic="Algorithms" title="What helped recursion finally click for you?" excerpt="Share the explanation, drawing or example that worked. Follow-up questions welcome." author="Paolo Dizon" replies={6} status="Open discussion" href="#" />
            <Stack gap={16}>
              <AnnouncementCard tag="Announcement" when="Mon 19 Oct · 09:00" title="Hackathon briefing moves to the AVR" meta="Community desk" href="#">The briefing is still at Wednesday 13:00. Bring a laptop. Teams form on the day.</AnnouncementCard>
              <ForumCard variant="open" topic="Web development" title="Which CSS layout finally made sense to you?" excerpt="Grid, flex or the one your instructor drew on the whiteboard." author="Paolo Dizon" replies={11} status="Open discussion" href="#" />
            </Stack>
          </Grid>
        </Section>

        <Section id="reports" aria-labelledby="faq-h">
          <Grid columns={2}>
            <Stack gap={16}>
              <h2 id="faq-h" className="ds-type-h2">Questions about access</h2>
              <Accordion defaultExpandedKeys={["anon"]}>
                <Disclosure id="anon" title="Is the community anonymous?">No. Community posts show your name to members of the college community. Do not post personal or case details there.</Disclosure>
                <Disclosure id="reports" title="Who can see my reports?">You, and the people assigned to your record once recipients and access rules are confirmed. Restricted access does not mean anonymous.</Disclosure>
                <Disclosure id="live" title="Are these schedules current?">Yes. Consultation hours follow each faculty member's posted schedule and change when it changes.</Disclosure>
              </Accordion>
            </Stack>
            <p className="ds-lead">Community access does <Highlight under>not</Highlight> grant report access. Every screen shows where the boundary sits.</p>
          </Grid>
        </Section>

        <Section tone="plate" aria-labelledby="cta-h">
          <div className="site-cta">
            <h2 id="cta-h" className="ds-type-h1">Sign in to see your college week.</h2>
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
