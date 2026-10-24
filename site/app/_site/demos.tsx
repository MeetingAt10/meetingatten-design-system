"use client";
import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
import {
  Avatar, Badge, Button, Calendar, Card, CardHeader, CardLink, CardMeta, Checkbox, ComboBox, Container, DatePicker, Divider, Feature, FeatureRow,
  FileUpload, Grid, Hero, Icon, IconButton, Link, Progress, Radio, RadioGroup, Search, Section, SectionHeader, Select, SelectOption, Skeleton,
  Spinner, Stack, Switch, TextArea, TextField, Tile, Wash, type IconName,
  AnnouncementCard, CaseTimeline, ConsultationSlotPicker, ForumCard, PrivacyNotice, ReportRecord, ReportsTable,
  Alert, DialogTrigger, Drawer, EmptyState, Modal, ModalActions, Popover, Tooltip, toast,
  AppShell, Breadcrumbs, Footer, MenuButton, MenuItem, MobileHeader, Navbar, NavItem, Pagination, Sidebar, SidebarNote, Stepper, Tab, TabList, TabPanel, Tabs, TopBar,
} from "@meetingat10/design-system/react";

const Row = ({ children }: { children: React.ReactNode }) => <div className="site-matrix">{children}</div>;
const Label = ({ children }: { children: React.ReactNode }) => <p className="ds-tag-mono" style={{ margin: 0 }}>{children}</p>;
const ICONS: IconName[] = ["search", "menu", "chevron", "bell", "calendar", "forum", "report", "shield", "check", "alert", "close", "user", "home", "lock", "info"];
const COURSES = [{ id: "cs101", name: "Intro to Computing" }, { id: "cs201", name: "Data Structures" }, { id: "cs301", name: "Databases" }, { id: "cs401", name: "Software Engineering" }];
const Topics = () => [<SelectOption key="p" id="planning">Course planning</SelectOption>, <SelectOption key="t" id="thesis">Thesis advising</SelectOption>, <SelectOption key="c" id="career">Career guidance</SelectOption>];
const Box = ({ children }: { children: React.ReactNode }) => <div className="bg-info-bg rounded-tile p-4 ds-type-body-small">{children}</div>;

const select = () => (<Stack><Select label="Topic" placeholder="Choose a topic">{Topics()}</Select><Select label="Topic" defaultSelectedKey="thesis" description="One topic per consultation.">{Topics()}</Select><Select label="Topic" isDisabled placeholder="Unavailable">{Topics()}</Select></Stack>);
const badge = () => <Row>{(["neutral", "info", "success", "warning", "danger", "secondary", "accent"] as const).map((t) => <Badge key={t} tone={t}>{t === "neutral" ? "Student" : t}</Badge>)}</Row>;

function PaginationDemo({ label }: { label: string }) {
  const [page, setPage] = useState(5);
  return <Pagination label={label} page={page} pageCount={12} onPageChange={setPage} />;
}
const NAV = [{ label: "Community", href: "#", current: true }, { label: "Consultations", href: "#" }, { label: "My reports", href: "#" }];
const SideNav = ({ label }: { label: string }) => (
  <Sidebar label={label} footer={<><Badge>Student</Badge><SidebarNote>Own reports only · proposed permission</SidebarNote></>}>
    <NavItem href="#" icon="home" isCurrent>Overview</NavItem>
    <NavItem href="#" icon="forum">Community</NavItem>
    <NavItem href="#" icon="calendar" className="is-hover">Consultations</NavItem>
    <NavItem href="#" icon="report" className="is-focus">My reports</NavItem>
  </Sidebar>
);

const DAYS = [{ id: "19", weekday: "M", day: 19, label: "Mon 19 Oct" }, { id: "20", weekday: "T", day: 20, label: "Tue 20 Oct" }, { id: "21", weekday: "W", day: 21, label: "Wed 21 Oct" }, { id: "22", weekday: "T", day: 22, label: "Thu 22 Oct" }, { id: "23", weekday: "F", day: 23, label: "Fri 23 Oct" }];
const SLOTS = [{ id: "s9", time: "09:00–09:30" }, { id: "s10", time: "10:00–10:30" }, { id: "s11", time: "11:00–11:30", state: "booked" as const }, { id: "s14", time: "14:00–14:30", state: "unavailable" as const }];
function SlotDemo() {
  const [day, setDay] = useState("21");
  const [slot, setSlot] = useState<string | null>("s10");
  return <ConsultationSlotPicker label="Demo consultation" days={DAYS} selectedDay={day} onDayChange={setDay} slots={SLOTS} value={slot} onChange={setSlot} timeZoneNote="sample local campus time" />;
}
const REPORT_ROWS = [{ id: "24", reference: "DEMO-024", category: "General concern", status: "Draft · policy gate", href: "#", actionLabel: "View draft" }, { id: "18", reference: "DEMO-018", category: "Process question", status: "Review pending · demo", href: "#" }, { id: "9", reference: "DEMO-009", category: "General question", status: "Resolved · demo", href: "#" }];

type Theme = "light" | "dark";
/** Landmark names get the panel's theme so the light and dark copies stay unique on the page. */
const sfx = (t: Theme) => (t === "dark" ? " (dark)" : "");

export const DEMOS: Record<string, (p: { theme: Theme }) => React.ReactNode> = {
  AnnouncementCard: () => <AnnouncementCard title="Make room for your next idea." meta="Community desk · illustrative" href="#" demo>Explore the proposed peer study circle and share a topic you’d like to learn together.</AnnouncementCard>,
  ForumCard: () => <ForumCard topic="Study together" title="What helped you understand recursion?" excerpt="A sample community question. Share a useful explanation or ask a follow-up." author="Demo member" replies={6} status="Open discussion" href="#" demo />,
  ConsultationSlotPicker: () => <SlotDemo />,
  CaseTimeline: () => <CaseTimeline label="Demo case activity" events={[{ title: "Review scope pending", actor: "Assigned reviewer · DEMO", body: "Policy gate remains active. No sensitive submission." }, { title: "Draft saved locally · DEMO", actor: "Student · own report", body: "Illustrative record only; not a submitted case." }, { title: "Record created · DEMO", actor: "Sample event", body: "DEMO-024 · dates and events are illustrative." }]} />,
  ReportsTable: ({ theme }) => <ReportsTable caption={`Own reports / demo records${sfx(theme)}`} rows={REPORT_ROWS} />,
  ReportRecord: () => <div style={{ maxWidth: 390 }}><ReportRecord reference="DEMO-024" status="Draft · policy gate" facts={[{ label: "Category", value: "General concern" }, { label: "Permission", value: "Student · own reports" }]} href="#" actionLabel="View draft" /></div>,
  PrivacyNotice: ({ theme }) => <PrivacyNotice title={`Policy confirmation required${sfx(theme)}`} level={3} foot="Sensitive submission is disabled until scope and policy are confirmed.">Access permission: assigned reviewers only (proposed). Identity visibility: recipients and anonymity behavior are not yet confirmed. Restricted access does not mean anonymous.</PrivacyNotice>,
  Alert: () => (<Stack>{(["info", "success", "warning", "error"] as const).map((t) => <Alert key={t} tone={t} role="note" title={{ info: "Illustrative schedule", success: "Draft saved", warning: "Policy gate", error: "We couldn’t sign you in" }[t]}>{{ info: "These times are examples, not live availability.", success: "Your draft is kept on this device.", warning: "Submission is disabled until access rules are confirmed.", error: "Check your email and password, then try again." }[t]}</Alert>)}</Stack>),
  ToastRegion: () => (<Row><Button variant="secondary" onPress={() => toast("Display preference updated", { description: "Dark mode is on.", tone: "success" })}>Show a toast</Button><div className="ds-toast" style={{ position: "static" }}><Icon name="check" /><div className="ds-toast__content"><span className="ds-toast__title">Display preference updated</span><span className="ds-toast__body">Static preview</span></div><IconButton icon="close" label="Dismiss preview" inverse /></div></Row>),
  Modal: () => (<DialogTrigger><Button variant="destructive">Discard draft</Button><Modal title="Discard draft?" role="alertdialog">{({ close }) => (<><p className="ds-modal__msg">This removes DEMO-024. It cannot be undone.</p><ModalActions><Button variant="secondary" onPress={close}>Keep draft</Button><Button variant="destructive" onPress={close}>Discard draft</Button></ModalActions></>)}</Modal></DialogTrigger>),
  Drawer: () => (<DialogTrigger><Button variant="secondary">Filter reports</Button><Drawer title="Filter reports"><Stack><Checkbox defaultSelected>Drafts</Checkbox><Checkbox>Review pending</Checkbox><Checkbox>Resolved</Checkbox></Stack></Drawer></DialogTrigger>),
  Tooltip: () => (<Row><Tooltip content="Notifications" delay={200}><IconButton icon="bell" label="Notifications" /></Tooltip><Tooltip content="Search the community" delay={200}><IconButton icon="search" label="Search" /></Tooltip><span className="ds-tooltip" style={{ display: "inline-block" }}>Static preview</span></Row>),
  Popover: () => <Popover trigger={<Button variant="tertiary">What is a policy gate?</Button>} title="Policy gate"><p>Submission stays disabled until recipients and access rules are confirmed.</p></Popover>,
  EmptyState: () => <EmptyState icon="report" title="No reports yet" level={3} description="Drafts you start appear here." action={<Button>Start a draft</Button>} />,
  Navbar: ({ theme }) => <Navbar label={`Navbar demo${sfx(theme)}`} brand="ACCS" links={NAV} actions={<Button size="sm">Sign in</Button>} />,
  NavItem: () => <div style={{ display: "grid", gap: 8, maxWidth: 240 }}><NavItem href="#" icon="home" isCurrent>Overview</NavItem><NavItem href="#" icon="forum">Community</NavItem><NavItem href="#" icon="calendar" className="is-hover">Hover</NavItem><NavItem href="#" icon="report" className="is-focus">Focus</NavItem><NavItem href="#" icon="lock" isDisabled>Disabled</NavItem></div>,
  Sidebar: ({ theme }) => <div style={{ display: "flex" }}><SideNav label={`Workspace demo${sfx(theme)}`} /></div>,
  TopBar: () => <TopBar title="College workspace" tools={<><Search label="Search community" placeholder="Search community" /><IconButton icon="bell" label="Notifications" /></>} />,
  MobileHeader: () => <MobileHeader start={<IconButton icon="menu" label="Open menu" />} end={<IconButton icon="bell" label="Notifications" />}><span className="ds-type-h4">ACCS</span></MobileHeader>,
  AppShell: ({ theme }) => <div style={{ height: 420, overflow: "hidden", border: "1px solid var(--ds-border-subtle)", borderRadius: 12 }} data-density="compact"><AppShell contentAs="div" className="min-h-0" sidebar={<SideNav label={`App shell sidebar${sfx(theme)}`} />} topBar={<TopBar title="College workspace" tools={<IconButton icon="bell" label="Notifications" />} />}><h3 className="ds-type-h1" style={{ margin: 0 }}>Your college, connected.</h3><p className="ds-secondary" style={{ margin: 0 }}>Content column with the grid margins.</p></AppShell></div>,
  Tabs: () => (<Tabs><TabList aria-label="Community demo"><Tab id="o">Overview</Tab><Tab id="f">Forum</Tab><Tab id="c">Consultations</Tab><Tab id="a" isDisabled>Archive</Tab></TabList><TabPanel id="o">Overview panel</TabPanel><TabPanel id="f">Forum panel</TabPanel><TabPanel id="c">Consultations panel</TabPanel><TabPanel id="a">Archive</TabPanel></Tabs>),
  Breadcrumbs: ({ theme }) => <Breadcrumbs label={`Breadcrumbs demo${sfx(theme)}`} items={[{ label: "Workspace", href: "#" }, { label: "My reports", href: "#" }, { label: "DEMO-024" }]} />,
  Pagination: ({ theme }) => <PaginationDemo label={`Pagination demo${sfx(theme)}`} />,
  Stepper: ({ theme }) => (<Stack><Stepper label={`Booking progress${sfx(theme)}`} steps={["Topic", "Time", "Review", "Done"]} current={0} /><Stepper label={`Booking progress, step 3${sfx(theme)}`} steps={["Topic", "Time", "Review", "Done"]} current={2} /></Stack>),
  MenuButton: () => (<Row><MenuButton label="Draft actions"><MenuItem id="keep">Keep draft</MenuItem><MenuItem id="export">Export summary</MenuItem><MenuItem id="discard" danger>Discard draft</MenuItem></MenuButton><MenuButton label="More actions" iconOnly><MenuItem id="a">Copy link</MenuItem></MenuButton></Row>),
  Footer: ({ theme }) => <Footer brand={<span className="ds-type-h4">ACCS</span>} description="Your Access to the College of Computer Studies." columns={[{ title: `Product${sfx(theme)}`, links: [{ label: "Community", href: "#" }, { label: "Consultations", href: "#" }] }, { title: `Policy${sfx(theme)}`, links: [{ label: "Privacy and access", href: "#" }] }]} note="ACCS · Proposed, not approved" />,
  Button: () => (<>
    <Label>Intent</Label>
    <Row><Button>Continue</Button><Button variant="secondary">Cancel</Button><Button variant="tertiary">Learn more</Button><Button variant="destructive">Remove draft</Button></Row>
    <Label>State</Label>
    <Row><Button className="is-hover">Hover</Button><Button className="is-pressed">Pressed</Button><Button className="is-focus">Focus</Button><Button isDisabled>Disabled</Button><Button loading>Loading…</Button></Row>
    <Row><Button variant="secondary" className="is-hover">Hover</Button><Button variant="secondary" className="is-focus">Focus</Button><Button variant="secondary" isDisabled>Disabled</Button><Button size="sm">Small (44px)</Button></Row>
  </>),
  IconButton: () => (<Row><IconButton icon="bell" label="Notifications" /><IconButton icon="menu" label="Menu" className="is-hover" /><IconButton icon="close" label="Close" className="is-focus" /><IconButton icon="search" label="Search" isDisabled /><span className="bg-text-primary rounded-control p-2 inline-flex"><IconButton icon="close" label="Dismiss" inverse /></span></Row>),
  Icon: () => (<><Row>{ICONS.map((n) => <span key={n} className="inline-flex flex-col items-center gap-1 ds-type-caption ds-secondary" style={{ width: 64 }}><Icon name={n} size={24} />{n}</span>)}</Row><Row><Icon name="forum" size={16} /><Icon name="forum" /><Icon name="forum" size={24} /></Row></>),
  Link: () => (<Stack><Row><Link href="#">Join the conversation</Link><Link href="#" className="is-hover">Hover</Link><Link href="#" className="is-focus">Focus</Link><Link href="#" isDisabled>Disabled</Link></Row><p className="ds-type-body" style={{ margin: 0 }}>Read the <Link href="#" inline>privacy and access</Link> notes before posting.</p></Stack>),
  Badge: badge,
  Spinner: () => (<Row><Spinner label="Loading" /><span className="inline-flex" style={{ color: "var(--ds-action-default)" }}><Spinner /></span><Button loading>Saving…</Button></Row>),
  Progress: () => (<Stack><Progress label="Upload" value={40} /><Progress label="Profile complete" value={100} /><Progress label="Syncing" isIndeterminate /></Stack>),
  Avatar: () => (<Row><Avatar name="Demo Learner" size="sm" /><Avatar name="Demo Learner" /><Avatar name="Demo Adviser" size="lg" /></Row>),
  Tile: () => (<Row><Tile icon="forum" tone="secondary" /><Tile icon="calendar" tone="accent" /><Tile icon="report" /><Tile icon="shield" tone="neutral" /></Row>),
  Skeleton: () => (<div aria-busy="true" className="ds-stack"><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>Loading reports</p><Skeleton /><Skeleton /><Skeleton short /></div>),
  Divider: () => (<Stack><p style={{ margin: 0 }}>Draft summary</p><Divider /><p style={{ margin: 0 }}>Activity</p></Stack>),
  Field: () => <TextField label="Credits" description="Between 1 and 6." isRequired />,
  TextField: () => (<Stack>
    <TextField label="College email" placeholder="name@college.edu" description="Use your college account." />
    <TextField label="Student number" isRequired defaultValue="DEMO-2026-001" />
    <TextField label="Password" type="password" isInvalid errorMessage="Enter your password to continue." />
    <TextField label="Reference" isDisabled defaultValue="DEMO-024" />
  </Stack>),
  TextArea: () => (<Stack><TextArea label="Add details" description="Do not include names or identifiers." /><TextArea label="Add details · unavailable" isDisabled placeholder="Sensitive submission is disabled." /></Stack>),
  Select: select,
  SelectOption: select,
  Search: () => (<Stack><Search label="Search community" placeholder="Search community" /><Search label="Search reports" defaultValue="recursion" /><Search label="Search" placeholder="Unavailable" isDisabled /></Stack>),
  Checkbox: () => (<Stack>
    <Row><Checkbox>Keep me signed in</Checkbox><Checkbox defaultSelected>Email updates</Checkbox><Checkbox isIndeterminate>All topics</Checkbox></Row>
    <Row><Checkbox className="is-hover">Hover</Checkbox><Checkbox className="is-focus">Focus</Checkbox><Checkbox isInvalid>I agree</Checkbox><Checkbox isDisabled>Disabled</Checkbox><Checkbox isDisabled defaultSelected>Disabled on</Checkbox></Row>
  </Stack>),
  RadioGroup: () => (<Stack><RadioGroup label="Meeting type" defaultValue="campus"><Radio value="online">Online</Radio><Radio value="campus">On campus</Radio><Radio value="phone" isDisabled>Phone (unavailable)</Radio></RadioGroup><RadioGroup label="Preferred time" isInvalid errorMessage="Choose a time."><Radio value="am">Morning</Radio><Radio value="pm">Afternoon</Radio></RadioGroup></Stack>),
  ComboBox: () => (<Stack><ComboBox label="Course" placeholder="Type a course" items={COURSES}>{(c) => <SelectOption id={c.id}>{c.name}</SelectOption>}</ComboBox><ComboBox label="Course" items={COURSES} defaultSelectedKey="cs201" isInvalid errorMessage="Pick a course you are enrolled in.">{(c) => <SelectOption id={c.id}>{c.name}</SelectOption>}</ComboBox></Stack>),
  Switch: () => (<Stack><Switch>Email updates</Switch><Switch defaultSelected>Show demo content</Switch><Switch className="is-focus">Focus</Switch><Switch isDisabled defaultSelected>Locked setting</Switch></Stack>),
  DatePicker: () => (<Stack><DatePicker label="Preferred date" defaultValue={new CalendarDate(2026, 10, 21)} /><DatePicker label="Follow-up date" isInvalid errorMessage="Choose a weekday." /><Calendar aria-label="Consultation date" defaultValue={new CalendarDate(2026, 10, 21)} isDateUnavailable={(d) => d.day === 23} /></Stack>),
  Calendar: () => <Calendar aria-label="Consultation date" defaultValue={new CalendarDate(2026, 10, 21)} />,
  FileUpload: () => (<Stack><FileUpload label="Attachment" description="PDF up to 5 MB." acceptedFileTypes={["application/pdf"]} /><FileUpload label="Report attachment · unavailable" description="Disabled until policy is confirmed." isDisabled /></Stack>),
  Container: () => <Container><Box>Container: centered 1200px column with breakpoint margins</Box></Container>,
  Stack: () => <Stack gap={24}><Box>Stack gap 24</Box><Box>Item</Box><Box>Item</Box></Stack>,
  Grid: () => (<Stack><Grid><Box>2 columns</Box><Box>2 columns</Box></Grid><Grid columns="main"><Box>main (2fr)</Box><Box>side (1fr)</Box></Grid></Stack>),
  Section: ({ theme }) => <Section band aria-label={`Demo band${sfx(theme)}`}><Box>Section with band: surface, density rhythm, container</Box></Section>,
  SectionHeader: () => <SectionHeader eyebrow="One system. Different responsibilities." title="Community, consultation and reports." description="Each in its own voice." action={<Link href="#">See all</Link>} />,
  Hero: () => <Hero eyebrow="Student · community access" title="Your Access to the College of Computer Studies" lead="Find a conversation, catch an update or make space for a question." actions={<><Button>Browse community</Button><Button variant="secondary">Explore consultation</Button></>} />,
  FeatureRow: () => (<FeatureRow>
    <Feature icon="forum" tone="secondary" title="Community" href="#" linkLabel="Join the conversation">Casual and encouraging.</Feature>
    <Feature icon="calendar" tone="accent" title="Consultations" href="#" linkLabel="Explore consultation">Empathetic and clear.</Feature>
    <Feature icon="report" title="Reports" href="#" linkLabel="See a sample record">Serious and structured.</Feature>
  </FeatureRow>),
  Wash: () => <Wash className="rounded-card" style={{ minHeight: 220, padding: 24 }}><p className="ds-type-h3" style={{ margin: 0 }}>Text on a wash stays readable</p></Wash>,
  Card: () => (<Stack>
    <Card><CardHeader><Badge tone="info">Announcement</Badge><span className="ds-tag-mono">Demo</span></CardHeader><h3 className="ds-type-h3">Make room for your next idea.</h3><p className="ds-type-body" style={{ margin: 0 }}>Explore the proposed peer study circle.</p><CardMeta><span>Community desk · illustrative</span><Link href="#">Read update</Link></CardMeta></Card>
    <CardLink href="#"><CardHeader><Badge tone="accent">Study together</Badge><span className="ds-tag-mono">Demo</span></CardHeader><h3 className="ds-type-h3">What helped you understand recursion?</h3><CardMeta>Demo member · 6 sample replies</CardMeta></CardLink>
    <CardLink href="#" className="is-hover"><h3 className="ds-type-h3">Hover: lifted</h3></CardLink>
    <Card as="div" overlay><h3 className="ds-type-h3">Overlay panel</h3></Card>
  </Stack>),
};

export function DemoPanel({ name, theme }: { name: string; theme: Theme }) {
  const D = DEMOS[name];
  return D ? <D theme={theme} /> : null;
}
