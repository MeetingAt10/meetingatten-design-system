"use client";
import { CalendarDate } from "@internationalized/date";
import {
  Avatar, Badge, Button, Calendar, Card, CardHeader, CardLink, CardMeta, Checkbox, ComboBox, Container, DatePicker, Divider, Feature, FeatureRow,
  FileUpload, Grid, Hero, Icon, IconButton, Link, Progress, Radio, RadioGroup, Search, Section, SectionHeader, Select, SelectOption, Skeleton,
  Spinner, Stack, Switch, TextArea, TextField, Tile, Wash, type IconName,
} from "@meetingat10/design-system/react";

const Row = ({ children }: { children: React.ReactNode }) => <div className="site-matrix">{children}</div>;
const Label = ({ children }: { children: React.ReactNode }) => <p className="ds-tag-mono" style={{ margin: 0 }}>{children}</p>;
const ICONS: IconName[] = ["search", "menu", "chevron", "bell", "calendar", "forum", "report", "shield", "check", "alert", "close", "user", "home", "lock", "info"];
const COURSES = [{ id: "cs101", name: "Intro to Computing" }, { id: "cs201", name: "Data Structures" }, { id: "cs301", name: "Databases" }, { id: "cs401", name: "Software Engineering" }];
const Topics = () => [<SelectOption key="p" id="planning">Course planning</SelectOption>, <SelectOption key="t" id="thesis">Thesis advising</SelectOption>, <SelectOption key="c" id="career">Career guidance</SelectOption>];
const Box = ({ children }: { children: React.ReactNode }) => <div className="bg-info-bg rounded-tile p-4 ds-type-body-small">{children}</div>;

const select = () => (<Stack><Select label="Topic" placeholder="Choose a topic">{Topics()}</Select><Select label="Topic" defaultSelectedKey="thesis" description="One topic per consultation.">{Topics()}</Select><Select label="Topic" isDisabled placeholder="Unavailable">{Topics()}</Select></Stack>);
const badge = () => <Row>{(["neutral", "info", "success", "warning", "danger", "secondary", "accent"] as const).map((t) => <Badge key={t} tone={t}>{t === "neutral" ? "Student" : t}</Badge>)}</Row>;

export const DEMOS: Record<string, () => React.ReactNode> = {
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
