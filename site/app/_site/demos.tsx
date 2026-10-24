"use client";
import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
import {
  Avatar, Badge, Button, Calendar, Card, CardHeader, CardLink, CardMeta, Checkbox, ComboBox, Container, DatePicker, Divider, Feature, FeatureRow,
  FileUpload, Grid, Hero, Icon, IconButton, Link, Progress, Radio, RadioGroup, Search, Section, SectionHeader, Select, SelectOption, Skeleton,
  Spinner, Stack, Switch, TextArea, TextField, Tile, Wash, type IconName,
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

function PaginationDemo() {
  const [page, setPage] = useState(5);
  return <Pagination page={page} pageCount={12} onPageChange={setPage} />;
}
const NAV = [{ label: "Community", href: "#", current: true }, { label: "Consultations", href: "#" }, { label: "My reports", href: "#" }];
const SideNav = () => (
  <Sidebar label="Workspace demo" footer={<><Badge>Student</Badge><SidebarNote>Own reports only · proposed permission</SidebarNote></>}>
    <NavItem href="#" icon="home" isCurrent>Overview</NavItem>
    <NavItem href="#" icon="forum">Community</NavItem>
    <NavItem href="#" icon="calendar" className="is-hover">Consultations</NavItem>
    <NavItem href="#" icon="report" className="is-focus">My reports</NavItem>
  </Sidebar>
);

export const DEMOS: Record<string, () => React.ReactNode> = {
  Navbar: () => <Navbar label="Demo" brand="ACCS" links={NAV} actions={<Button size="sm">Sign in</Button>} />,
  NavItem: () => <div style={{ display: "grid", gap: 8, maxWidth: 240 }}><NavItem href="#" icon="home" isCurrent>Overview</NavItem><NavItem href="#" icon="forum">Community</NavItem><NavItem href="#" icon="calendar" className="is-hover">Hover</NavItem><NavItem href="#" icon="report" className="is-focus">Focus</NavItem><NavItem href="#" icon="lock" isDisabled>Disabled</NavItem></div>,
  Sidebar: () => <div style={{ display: "flex" }}><SideNav /></div>,
  TopBar: () => <TopBar title="College workspace" tools={<><Search label="Search community" placeholder="Search community" /><IconButton icon="bell" label="Notifications" /></>} />,
  MobileHeader: () => <MobileHeader start={<IconButton icon="menu" label="Open menu" />} end={<IconButton icon="bell" label="Notifications" />}><span className="ds-type-h4">ACCS</span></MobileHeader>,
  AppShell: () => <div style={{ height: 420, overflow: "hidden", border: "1px solid var(--ds-border-subtle)", borderRadius: 12 }} data-density="compact"><AppShell sidebar={<SideNav />} topBar={<TopBar title="College workspace" tools={<IconButton icon="bell" label="Notifications" />} />}><h3 className="ds-type-h1" style={{ margin: 0 }}>Your college, connected.</h3><p className="ds-secondary" style={{ margin: 0 }}>Content column with the grid margins.</p></AppShell></div>,
  Tabs: () => (<Tabs><TabList aria-label="Community demo"><Tab id="o">Overview</Tab><Tab id="f">Forum</Tab><Tab id="c">Consultations</Tab><Tab id="a" isDisabled>Archive</Tab></TabList><TabPanel id="o">Overview panel</TabPanel><TabPanel id="f">Forum panel</TabPanel><TabPanel id="c">Consultations panel</TabPanel><TabPanel id="a">Archive</TabPanel></Tabs>),
  Breadcrumbs: () => <Breadcrumbs label="Breadcrumbs demo" items={[{ label: "Workspace", href: "#" }, { label: "My reports", href: "#" }, { label: "DEMO-024" }]} />,
  Pagination: () => <PaginationDemo />,
  Stepper: () => (<Stack><Stepper label="Booking progress" steps={["Topic", "Time", "Review", "Done"]} current={0} /><Stepper label="Booking progress, step 3" steps={["Topic", "Time", "Review", "Done"]} current={2} /></Stack>),
  MenuButton: () => (<Row><MenuButton label="Draft actions"><MenuItem id="keep">Keep draft</MenuItem><MenuItem id="export">Export summary</MenuItem><MenuItem id="discard" danger>Discard draft</MenuItem></MenuButton><MenuButton label="More actions" iconOnly><MenuItem id="a">Copy link</MenuItem></MenuButton></Row>),
  Footer: () => <Footer brand={<span className="ds-type-h4">ACCS</span>} description="Your Access to the College of Computer Studies." columns={[{ title: "Product", links: [{ label: "Community", href: "#" }, { label: "Consultations", href: "#" }] }, { title: "Policy", links: [{ label: "Privacy and access", href: "#" }] }]} note="ACCS · Proposed, not approved" />,
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
  Section: () => <Section band aria-label="Demo band"><Box>Section with band: surface, density rhythm, container</Box></Section>,
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

export function DemoPanel({ name }: { name: string }) {
  const D = DEMOS[name];
  return D ? <D /> : null;
}
