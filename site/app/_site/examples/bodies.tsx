"use client";
import { CalendarDate } from "@internationalized/date";
import {
  Badge, Button, Calendar, Card, CardHeader, CardLink, CardMeta, Checkbox, DatePicker, Divider, Feature, FeatureRow, FileUpload, Grid, Hero, Icon,
  IconButton, Link, Radio, RadioGroup, Search, Section, SectionHeader, Select, SelectOption, Stack, TextArea, TextField, Wash,
} from "@meetingat10/design-system/react";

const Topics = () => [<SelectOption key="p" id="planning">Course planning</SelectOption>, <SelectOption key="t" id="thesis">Thesis advising</SelectOption>, <SelectOption key="c" id="career">Career guidance</SelectOption>];

const Announcement = () => (
  <Card><CardHeader><Badge tone="info">Announcement</Badge><span className="ds-tag-mono">Demo</span></CardHeader><h3 className="ds-type-h3">Make room for your next idea.</h3><p className="ds-type-body" style={{ margin: 0 }}>Explore the proposed peer study circle and share a topic you’d like to learn together.</p><CardMeta><span>Community desk · illustrative</span><Link href="#">Read update</Link></CardMeta></Card>
);
const Post = () => (
  <CardLink href="#"><CardHeader><Badge tone="accent">Study together</Badge><span className="ds-tag-mono">Demo</span></CardHeader><h3 className="ds-type-h3">What helped you understand recursion?</h3><p className="ds-type-body" style={{ margin: 0 }}>A sample community question. Share a useful explanation or ask a follow-up.</p><CardMeta>Demo member · 6 sample replies · Open discussion</CardMeta></CardLink>
);
const Notice = ({ title, children, foot }: { title: string; children: React.ReactNode; foot?: string }) => (
  <aside className="ds-notice" aria-label={title}><p className="ds-notice__title"><Icon name="lock" size={16} />{title}</p><p>{children}</p>{foot && <p className="ds-notice__foot">{foot}</p>}</aside>
);

export function LandingBody() {
  return (
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
            <div className="ds-alert" role="note"><Icon name="info" /><div><b className="ds-alert__title">Illustrative schedule</b><span className="ds-alert__body">These times are examples, not live availability.</span></div></div>
          </div>
          <Stack gap={24}>
            <DatePicker label="Preferred date · DEMO" defaultValue={new CalendarDate(2026, 10, 21)} description="Sample local campus time." />
            <RadioGroup label="Meeting type" defaultValue="campus"><Radio value="online">Online</Radio><Radio value="campus">On campus</Radio></RadioGroup>
            <Select label="Topic" defaultSelectedKey="planning">{Topics()}</Select>
            <Button block>Review sample selection</Button>
            <p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>No booking is created. Dates, time zone and availability need service confirmation. No response deadline is promised.</p>
          </Stack>
        </Grid>
      </Section>
      <section className="ds-container" style={{ paddingBottom: 64 }}>
        <Notice title="Community access does not grant report access" foot="Consultation selection is a preview, not a booked appointment.">Keep posts welcoming, relevant and free of personal or sensitive case details. Never post names, identifiers or restricted report content.</Notice>
      </section>
    </main>
  );
}

const Shell = ({ current, title, children }: { current: string; title: string; children: React.ReactNode }) => (
  <div className="ds-app" data-density="compact">
    <nav className="ds-sidebar" aria-label="Workspace">
      <span className="ds-tag-mono">ACCS</span>
      <div className="ds-sidebar__nav">
        {[["home", "Overview", "/examples/admin-overview/"], ["forum", "Community", "#"], ["calendar", "Consultations", "#"], ["report", "My reports", "/examples/report-detail/"]].map(([icon, label, href]) => (
          <a key={label} className="ds-nav-item" href={href} aria-current={label === current ? "page" : undefined}><Icon name={icon as "home"} />{label}</a>
        ))}
      </div>
      <div className="ds-sidebar__role"><Badge>Student</Badge><p className="ds-sidebar__note">Own reports only · proposed permission</p></div>
    </nav>
    <div className="ds-app__main">
      <header className="ds-topbar"><p className="ds-topbar__title">{title}</p><div className="ds-topbar__tools"><Search label="Search community" placeholder="Search community" /><IconButton icon="bell" label="Notifications" /></div></header>
      <main className="ds-app__content">{children}</main>
    </div>
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
        <Stack>
          <h2 className="ds-type-h3" style={{ margin: 0 }}>Latest in community</h2>
          <Announcement />
          <Post />
        </Stack>
        <Stack gap={24}>
          <h2 className="ds-type-h3" style={{ margin: 0 }}>Let’s find a time to talk.</h2>
          <Calendar aria-label="Consultation date · DEMO" defaultValue={new CalendarDate(2026, 10, 21)} isDateUnavailable={(d) => d.day === 23} />
          <Select label="Topic" defaultSelectedKey="planning">{Topics()}</Select>
          <Button block>Review sample selection</Button>
          <p className="ds-type-caption ds-secondary" style={{ margin: 0 }}>Consultation is support, not an urgent-response channel.</p>
        </Stack>
      </Grid>
      <div className="ds-table-wrap">
        <table className="ds-table">
          <caption>Own reports / demo records</caption>
          <thead><tr><th scope="col">Reference</th><th scope="col">Category</th><th scope="col">Status</th><th scope="col">Action</th></tr></thead>
          <tbody>
            {[["DEMO-024", "General concern", "Draft · policy gate"], ["DEMO-018", "Process question", "Review pending · demo"], ["DEMO-009", "General question", "Resolved · demo"]].map(([ref, cat, status]) => (
              <tr key={ref}><td className="ds-mono">{ref}</td><td>{cat}</td><td>{status}</td><td><Link href="/examples/report-detail/">View</Link></td></tr>
            ))}
          </tbody>
        </table>
      </div>
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
      <Link href="/examples/admin-overview/">← My reports / DEMO-024</Link>
      <Stack>
        <h1 className="ds-type-h1">Report DEMO-024</h1>
        <div className="ds-row"><Badge>Student · own reports</Badge><Badge tone="warning">Draft · policy gate</Badge><Badge tone="info">DEMO</Badge></div>
        <p className="ds-type-body" style={{ margin: 0 }}>You are viewing your own illustrative draft. No report has been submitted.</p>
      </Stack>
      <Notice title="Policy confirmation required" foot="Sensitive submission is disabled until scope and policy are confirmed.">Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed. Restricted access does not mean anonymous.</Notice>
      <Grid columns="main">
        <Stack gap={24}>
          <section className="ds-stack"><h2 className="ds-type-h2" style={{ margin: 0 }}>Draft summary</h2><b className="ds-type-label">General process question · DEMO</b><p className="ds-type-body" style={{ margin: 0 }}>This sample asks how a college process is explained. It contains no personal account, real identity or sensitive attachment.</p></section>
          <Divider />
          <section className="ds-stack"><h2 className="ds-type-h2" style={{ margin: 0 }}>Activity / illustrative events</h2>
            <ol className="ds-timeline">
              <li><span className="ds-timeline__title">Review scope pending</span><span className="ds-timeline__actor">Assigned reviewer · DEMO</span><p className="ds-timeline__body">Policy gate remains active. No sensitive submission.</p></li>
              <li><span className="ds-timeline__title">Draft saved · DEMO</span><span className="ds-timeline__actor">Student · own report</span><p className="ds-timeline__body">Illustrative record only; not a submitted case.</p></li>
            </ol>
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
