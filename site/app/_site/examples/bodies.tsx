"use client";
import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
import {
  Alert, AnnouncementCard, AppShell, Badge, Breadcrumbs, Button, Calendar, Card, CaseTimeline, Checkbox, ConsultationSlotPicker, Divider, EmptyState, Feature, FeatureRow, FileUpload, Footer, ForumCard, Grid, Hero, Icon, IconButton, Link, MenuButton, MenuItem, NavItem, Navbar, PrivacyNotice, Radio, RadioGroup, ReportRecord, ReportsTable, Search, Section, SectionHeader, Select, SelectOption, Sidebar, SidebarNote, Stack, Tab, TabList, TabPanel, Tabs, TextArea, TextField, Tooltip, TopBar, Wash, toast,
} from "@meetingat10/design-system/react";

const Topics = () => [<SelectOption key="p" id="planning">Course planning</SelectOption>, <SelectOption key="t" id="thesis">Thesis advising</SelectOption>, <SelectOption key="c" id="career">Career guidance</SelectOption>];

const Announcement = () => (
  <AnnouncementCard title="Make room for your next idea." meta="Community desk · illustrative" href="#" demo>Explore the proposed peer study circle and share a topic you’d like to learn together.</AnnouncementCard>
);
const Post = () => (
  <ForumCard topic="Study together" title="What helped you understand recursion?" excerpt="A sample community question. Share a useful explanation or ask a follow-up." author="Demo member" replies={6} status="Open discussion" href="#" demo />
);
const DAYS = [{ id: "19", weekday: "M", day: 19, label: "Mon 19 Oct" }, { id: "20", weekday: "T", day: 20, label: "Tue 20 Oct" }, { id: "21", weekday: "W", day: 21, label: "Wed 21 Oct" }, { id: "22", weekday: "T", day: 22, label: "Thu 22 Oct" }, { id: "23", weekday: "F", day: 23, label: "Fri 23 Oct" }];
const SLOTS = [{ id: "s9", time: "09:00–09:30" }, { id: "s10", time: "10:00–10:30" }, { id: "s11", time: "11:00–11:30", state: "booked" as const }, { id: "s14", time: "14:00–14:30", state: "unavailable" as const }];
function Slots() {
  const [day, setDay] = useState("21");
  const [slot, setSlot] = useState<string | null>("s10");
  return <ConsultationSlotPicker label="Consultation · October 2026 · DEMO" days={DAYS} selectedDay={day} onDayChange={setDay} slots={SLOTS} value={slot} onChange={setSlot} timeZoneNote="sample local campus time" />;
}
const ROWS = [{ id: "24", reference: "DEMO-024", category: "General concern", status: "Draft · policy gate", href: "/examples/report-detail/", actionLabel: "View draft" }, { id: "18", reference: "DEMO-018", category: "Process question", status: "Review pending · demo", href: "#" }, { id: "9", reference: "DEMO-009", category: "General question", status: "Resolved · demo", href: "#" }];

export function LandingBody() {
  return (
    <>
    <div className="ds-container"><Navbar label="ACCS demo" brand="ACCS" links={[{ label: "Community", href: "#", current: true }, { label: "Consultations", href: "#consultation" }, { label: "My reports", href: "/examples/report-detail/" }]} actions={<Button size="sm">Sign in</Button>} /></div>
    <main>
      <Hero
        eyebrow="Student · community access"
        title="Your Access to the College of Computer Studies"
        lead="Find a conversation, catch an update or make space for a question. Community content is public within the proposed college community."
        actions={<><Button>Browse community</Button><Button variant="secondary">Explore consultation</Button></>}
        aside={<><Announcement /><Post /></>}
      />
      <Section band aria-label="What ACCS covers">
        <SectionHeader eyebrow="One system. Different responsibilities." title="Community, consultation and reports, each in its own voice." />
        <FeatureRow>
          <Feature icon="forum" tone="secondary" title="Community" href="#" linkLabel="Join the conversation">Casual and encouraging. Share a useful explanation or ask a follow-up—everyone starts somewhere.</Feature>
          <Feature icon="calendar" tone="accent" title="Consultations" href="#consultation" linkLabel="Explore consultation">Empathetic and clear. Choose a sample time that works for you. You can review it before continuing.</Feature>
          <Feature icon="report" title="Reports" href="/examples/report-detail/" linkLabel="See a sample record">Serious and structured. Submission is unavailable while recipients and access rules are confirmed.</Feature>
        </FeatureRow>
      </Section>
      <Section id="consultation" aria-label="Consultation">
        <Grid columns="main">
          <div>
            <SectionHeader eyebrow="Illustrative schedule" title="Let’s find a time to talk." description="Choose a sample time for a general course-planning consultation. Consultation is support, not an urgent-response channel." />
            <Alert role="note" title="Illustrative schedule">These times are examples, not live availability.</Alert>
          </div>
          <Stack gap={24}>
            <Slots />
            <RadioGroup label="Meeting type" defaultValue="campus"><Radio value="online">Online</Radio><Radio value="campus">On campus</Radio></RadioGroup>
            <Select label="Topic" defaultSelectedKey="planning">{Topics()}</Select>
            <Button block>Review sample selection</Button>
            <p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>No booking is created. Dates, time zone and availability need service confirmation. No response deadline is promised.</p>
          </Stack>
        </Grid>
      </Section>
      <section className="ds-container" style={{ paddingBottom: 64 }}>
        <PrivacyNotice title="Community access does not grant report access" foot="Consultation selection is a preview, not a booked appointment. No promises of anonymity, security or response time.">Keep posts welcoming, relevant and free of personal or sensitive case details. Never post names, identifiers or restricted report content.</PrivacyNotice>
      </section>
    </main>
    <Footer brand={<span className="ds-type-h4">ACCS</span>} description="Access for College of Computer Studies. Your Access to the College of Computer Studies." columns={[{ title: "Product", links: [{ label: "Community", href: "#" }, { label: "Consultations", href: "#consultation" }, { label: "Reports", href: "/examples/report-detail/" }] }, { title: "Policy", links: [{ label: "Privacy and access", href: "#" }, { label: "Accessibility", href: "#" }] }]} note="ACCS · Proposed, not approved · Synthetic records only" />
    </>
  );
}

const Shell = ({ current, title, children }: { current: string; title: string; children: React.ReactNode }) => (
  <div data-density="compact">
    <AppShell
      sidebar={
        <Sidebar label="Workspace" logo={<span className="ds-tag-mono">ACCS</span>} footer={<><Badge>Student</Badge><SidebarNote>Own reports only · proposed permission</SidebarNote></>}>
          <NavItem href="/examples/admin-overview/" icon="home" isCurrent={current === "Overview"}>Overview</NavItem>
          <NavItem href="#" icon="forum">Community</NavItem>
          <NavItem href="#" icon="calendar">Consultations</NavItem>
          <NavItem href="/examples/report-detail/" icon="report" isCurrent={current === "My reports"}>My reports</NavItem>
        </Sidebar>
      }
      topBar={<TopBar title={title} tools={<><Search label="Search community" placeholder="Search community" /><Tooltip content="Notifications"><IconButton icon="bell" label="Notifications" onPress={() => toast("No new notifications", { description: "Demo workspace." })} /></Tooltip></>} />}
    >
      {children}
    </AppShell>
  </div>
);

export function AdminOverviewBody() {
  return (
    <Shell current="Overview" title="College workspace">
      <Stack>
        <div className="ds-row"><Badge>Student · community access</Badge><Badge tone="info">DEMO</Badge></div>
        <h1 className="ds-type-h1">Your college, connected.</h1>
        <p className="ds-type-body ds-secondary" style={{ margin: 0 }}>Find a conversation, catch an update or make space for a question.</p>
      </Stack>
      <Grid columns="main">
        <Tabs>
          <TabList aria-label="Community"><Tab id="latest">Latest</Tab><Tab id="saved">Saved</Tab></TabList>
          <TabPanel id="latest"><Stack><Announcement /><Post /></Stack></TabPanel>
          <TabPanel id="saved"><EmptyState icon="forum" tone="secondary" title="Nothing saved yet" description="Save a post to find it here later." action={<Link href="#">Browse community</Link>} /></TabPanel>
        </Tabs>
        <Stack gap={24}>
          <h2 className="ds-type-h3" style={{ margin: 0 }}>Let’s find a time to talk.</h2>
          <Calendar aria-label="Consultation date · DEMO" defaultValue={new CalendarDate(2026, 10, 21)} isDateUnavailable={(d) => d.day === 23} />
          <Select label="Topic" defaultSelectedKey="planning">{Topics()}</Select>
          <Button block>Review sample selection</Button>
          <p className="ds-type-caption ds-secondary" style={{ margin: 0 }}>Consultation is support, not an urgent-response channel.</p>
        </Stack>
      </Grid>
      <ReportsTable caption="Own reports / demo records" rows={ROWS} className="ds-only-desktop" />
      <div className="ds-only-mobile"><Stack>{ROWS.map((r) => <ReportRecord key={r.id} reference={r.reference} status={r.status} facts={[{ label: "Category", value: r.category }]} href={r.href} actionLabel={r.actionLabel ?? "View"} level={2} />)}</Stack></div>
      <p className="ds-tag-mono">Proposed interface · Fictional content · No real student data</p>
    </Shell>
  );
}

export function SignInBody() {
  return (
    <Wash>
      <main className="ds-container" style={{ minHeight: "80vh", display: "grid", placeItems: "center", paddingBlock: 48 }}>
        <Card as="div" overlay style={{ width: "min(30rem, 100%)", padding: 32 }}>
          <Stack gap={24}>
            <div><h1 className="ds-type-h1">Sign in</h1><p className="ds-type-body ds-secondary" style={{ margin: "8px 0 0" }}>Use your college account. This page uses fictional content.</p></div>
            <div className="ds-alert ds-alert--error" role="alert"><Icon name="alert" /><div><b className="ds-alert__title">We couldn’t sign you in</b><span className="ds-alert__body">Check your email and password, then try again. Your email is kept.</span></div></div>
            <form className="ds-stack ds-stack--24" onSubmit={(e) => e.preventDefault()}>
              <TextField label="College email" type="email" autoComplete="username" defaultValue="demo.learner@example.edu" />
              <TextField label="Password" type="password" autoComplete="current-password" isInvalid errorMessage="Enter your password to continue." />
              <Checkbox>Keep me signed in</Checkbox>
              <Button type="submit" block>Continue</Button>
              <div className="ds-row" style={{ justifyContent: "space-between" }}><Link href="#">Learn more</Link><Link href="/examples/landing/">Back to ACCS</Link></div>
            </form>
          </Stack>
        </Card>
      </main>
    </Wash>
  );
}

export function ReportDetailBody() {
  return (
    <Shell current="My reports" title="College workspace">
      <div className="ds-row" style={{ justifyContent: "space-between" }}>
        <Breadcrumbs items={[{ label: "My reports", href: "/examples/admin-overview/" }, { label: "DEMO-024" }]} />
        <MenuButton label="Draft actions" onAction={(id) => toast(id === "discard" ? "Discard is disabled in the demo" : "Summary exported (demo)")}><MenuItem id="export">Export summary</MenuItem><MenuItem id="discard" danger>Discard draft</MenuItem></MenuButton>
      </div>
      <Stack>
        <h1 className="ds-type-h1">Report DEMO-024</h1>
        <div className="ds-row"><Badge>Student · own reports</Badge><Badge tone="warning">Draft · policy gate</Badge><Badge tone="info">DEMO</Badge></div>
        <p className="ds-type-body" style={{ margin: 0 }}>You are viewing your own illustrative draft. No report has been submitted.</p>
      </Stack>
      <PrivacyNotice title="Policy confirmation required" foot="Sensitive submission is disabled until scope and policy are confirmed.">Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed. These are separate decisions; restricted access does not mean anonymous. Backend enforcement is required.</PrivacyNotice>
      <Grid columns="main">
        <Stack gap={24}>
          <section className="ds-stack"><h2 className="ds-type-h2" style={{ margin: 0 }}>Draft summary</h2><b className="ds-type-label">General process question · DEMO</b><p className="ds-type-body" style={{ margin: 0 }}>This sample asks how a college process is explained. It contains no personal account, real identity or sensitive attachment.</p></section>
          <Divider />
          <section className="ds-stack"><h2 className="ds-type-h2" style={{ margin: 0 }}>Activity / illustrative events</h2>
            <CaseTimeline events={[
              { title: "Review scope pending", actor: "Assigned reviewer · DEMO", body: "Policy gate remains active. No sensitive submission." },
              { title: "Draft saved · DEMO", actor: "Student · own report", body: "Illustrative record only; not a submitted case." },
              { title: "Record created · DEMO", actor: "Sample event", body: "DEMO-024 · dates and events are illustrative." },
            ]} />
          </section>
          <Divider />
          <section className="ds-stack ds-stack--24"><h2 className="ds-type-h2" style={{ margin: 0 }}>Add details · unavailable</h2>
            <TextArea label="Details" isDisabled placeholder="Sensitive submission is disabled." description="Exact recipients and anonymity behavior must be confirmed first." />
            <FileUpload label="Attachment · unavailable" isDisabled description="Disabled until policy is confirmed." />
            <Button isDisabled>Submit report unavailable</Button>
          </section>
        </Stack>
        <Stack gap={24}>
          <section className="ds-stack"><h2 className="ds-type-h3" style={{ margin: 0 }}>Access scope</h2><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>Proposed: the author’s own report only. Access decisions must be enforced by the backend, not by a badge or hidden navigation.</p></section>
          <Divider />
          <section className="ds-stack"><h2 className="ds-type-h3" style={{ margin: 0 }}>Submission remains gated</h2><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>No response or resolution deadline is promised.</p></section>
        </Stack>
      </Grid>
      <p className="ds-tag-mono">Demo record · Proposed access rules · No real student data</p>
    </Shell>
  );
}
