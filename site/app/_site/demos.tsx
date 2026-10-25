"use client";
import { useState } from "react";
import { CalendarDate } from "@internationalized/date";
import {
  Accordion, Agenda, AgendaItem, Alert, AnnouncementCard, AppShell, Avatar, AvatarGroup, Badge, Breadcrumbs, Button, Calendar, Card, CardAction, CardBody,
  CardHeader, CardLane, CardMeta, CardTitle, CardWhen, CaseTimeline, Cell, Checkbox, CheckboxGroup, Column, ComboBox, CommandPalette, ConsultationSlotPicker,
  Container, DatePicker, DialogTrigger, Disclosure, Divider, DoorPlate, Drawer, EmptyState, FileUpload, Footer, ForumCard, Grid, Hero, Highlight, Icon,
  IconButton, ICONS, Kbd, Link, Logo, MenuButton, MenuItem, MenuSection, MenuSeparator, Meter, MobileHeader, Modal, ModalActions, ModalBody, Navbar, NavItem,
  NowLine, Pagination, Popover, PrivacyNotice, Progress, Radio, RadioGroup, ReportRecord, ReportsTable, RoleBadge, Search, Section, SectionHeader, Segment,
  SegmentedControl, Select, SelectOption, Severity, Sidebar, SidebarNote, SidebarSection, Skeleton, Spinner, Stack, Stepper, Switch, Tab, Table, TableBody,
  TableHeader, TableRow, TabList, TabPanel, Tabs, Tag, TagGroup, TextArea, TextField, Tile, TimeBlock, Timetable, toast, Tooltip, TooltipTrigger, TopBar,
  ViewState, type IconName, type Key,
} from "@meetingat10/design-system/react";
import { REPORT_ROWS, SLOT_DAYS, SLOTS, WEEK, WEEK_EVENTS } from "./examples/data";

type Theme = "light" | "dark";
type DemoProps = { theme?: Theme };
/** Landmark and id suffix, so the light and dark panels never share a name (none in the one-theme gallery). */
const sfx = (t?: Theme) => (t === "light" ? " (light)" : t === "dark" ? " (dark)" : "");

const Matrix = ({ children }: { children: React.ReactNode }) => <div className="site-matrix">{children}</div>;
const Caption = ({ children }: { children: React.ReactNode }) => <p className="site-caption">{children}</p>;
const Topics = () => [
  <SelectOption key="p" id="planning" icon="graduation-cap">Course planning</SelectOption>,
  <SelectOption key="t" id="thesis" icon="notepad" description="Proposal, chapters or defense">Thesis advising</SelectOption>,
  <SelectOption key="c" id="career" icon="rocket">Career guidance</SelectOption>,
];
const COURSES = ["Intro to Computing", "Data Structures", "Databases", "Software Engineering", "Web Development", "Algorithms"];

function SlotDemo({ theme }: DemoProps) {
  const [day, setDay] = useState("wed");
  const [slot, setSlot] = useState<string | null>("s1000");
  return <ConsultationSlotPicker label={`Consultation time${sfx(theme)}`} days={SLOT_DAYS} selectedDay={day} onDayChange={setDay} slots={SLOTS} value={slot} onChange={setSlot} timeZoneNote="sample local campus time" />;
}
function PaginationDemo({ theme }: DemoProps) {
  const [page, setPage] = useState(5);
  return <Pagination label={`Pages${sfx(theme)}`} page={page} pageCount={12} onPageChange={setPage} summary="Showing 41-50 of 118 posts" />;
}
function CommandDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Stack gap={8}>
      <Button variant="secondary" icon="command" onPress={() => setOpen(true)}>Open the command palette</Button>
      <Caption>The real palette also opens with Ctrl+K or Cmd+K anywhere on the page.</Caption>
      <CommandPalette
        isOpen={open}
        onOpenChange={setOpen}
        onAction={(id) => toast(`Chose ${String(id)}`, { description: "Sample action" })}
        items={[
          { id: "community", label: "Community", section: "Go to", icon: "chats" },
          { id: "consultations", label: "Consultations", section: "Go to", icon: "chalkboard", keywords: ["office hours", "booking"] },
          { id: "reports", label: "My reports", section: "Go to", icon: "file" },
          { id: "new-post", label: "New post", section: "Actions", icon: "pencil", shortcut: "N" },
          { id: "book", label: "Book a consultation", section: "Actions", icon: "calendar-check", shortcut: "B" },
        ]}
      />
    </Stack>
  );
}
function ToastDemo() {
  return (
    <Matrix>
      <Button variant="secondary" onPress={() => toast("Draft saved", { tone: "success", description: "DEMO-024 · only you can see it." })}>Show success toast</Button>
      <Button variant="secondary" onPress={() => toast("Post moved to Saved", { action: { label: "Undo", onAction: () => toast("Moved back") } })}>Show toast with action</Button>
    </Matrix>
  );
}
function IconGallery() {
  const [weight, setWeight] = useState<Key>("regular");
  return (
    <Stack gap={12}>
      <SegmentedControl aria-label="Icon weight" selectedKey={weight} onSelectionChange={setWeight}>
        <Segment id="regular">Regular</Segment>
        <Segment id="fill">Fill</Segment>
        <Segment id="duotone">Duotone</Segment>
      </SegmentedControl>
      <ul className="site-icons">
        {(Object.keys(ICONS) as IconName[]).map((n) => (
          <li key={n}><Icon name={n} size={24} weight={weight as "regular"} /><span>{n}</span></li>
        ))}
      </ul>
    </Stack>
  );
}

export const DEMOS: Record<string, (p: DemoProps) => React.ReactNode> = {
  // ---- Controls ----
  Button: () => (
    <Stack gap={16}>
      <Matrix><Button icon="sign-in">Sign in</Button><Button variant="secondary">Browse the community</Button><Button variant="tertiary">Learn more</Button><Button variant="destructive" icon="trash">Discard draft</Button></Matrix>
      <Caption>States</Caption>
      <Matrix><Button className="is-hover">Hover</Button><Button className="is-pressed">Pressed</Button><Button loading>Saving draft</Button><Button isDisabled>Disabled</Button><Button variant="secondary" isDisabled>Disabled</Button></Matrix>
      <Caption>Sizes and icons</Caption>
      <Matrix><Button size="sm">Small</Button><Button>Medium</Button><Button size="lg" iconEnd="arrow-right">Large</Button></Matrix>
    </Stack>
  ),
  IconButton: () => (
    <Matrix>
      <IconButton icon="bell" label="Notifications, 2 unread" dot />
      <IconButton icon="dots-three" label="More actions" variant="outline" />
      <IconButton icon="plus" label="New post" variant="solid" />
      <IconButton icon="funnel" label="Filters" size="md" />
      <IconButton icon="trash" label="Delete" isDisabled />
    </Matrix>
  ),
  Field: () => <TextField label="Subject" description="Shown to the faculty member you book." isRequired defaultValue="Thesis topic review" />,
  TextField: () => (
    <Stack gap={20}>
      <TextField label="Subject" description="Shown to the faculty member you book." isRequired defaultValue="Thesis topic review" />
      <TextField label="Course code" defaultValue="CCS 10" isInvalid errorMessage="Couldn't find CCS 10. Check the code; your text is kept." />
      <TextField label="Room" icon="map-pin" placeholder="CCS 304" />
      <TextField label="Section" defaultValue="BSCS 3-A" isDisabled />
    </Stack>
  ),
  TextArea: () => <TextArea label="What happened" description="Leave out names you do not need to share." showCount maxLength={500} defaultValue="Sample text for the design system." />,
  Search: ({ theme }) => <Search label={`Search the community${sfx(theme)}`} showLabel placeholder="Search posts and topics" />,
  Select: () => (
    <Stack gap={20}>
      <Select label="Topic" placeholder="Choose a topic">{Topics()}</Select>
      <Select label="Topic" defaultSelectedKey="thesis" description="One topic per consultation.">{Topics()}</Select>
      <Select label="Topic" isDisabled placeholder="Unavailable">{Topics()}</Select>
    </Stack>
  ),
  SelectOption: () => <Select label="Topic" defaultSelectedKey="planning" defaultOpen={false}>{Topics()}</Select>,
  ComboBox: () => (
    <ComboBox label="Course" placeholder="Type a course" defaultItems={COURSES.map((c) => ({ id: c, name: c }))}>
      {(item: { id: string; name: string }) => <SelectOption id={item.id}>{item.name}</SelectOption>}
    </ComboBox>
  ),
  Checkbox: () => (
    <Stack gap={16}>
      <CheckboxGroup label="Notify me about" defaultValue={["replies"]}>
        <Checkbox value="replies">Replies to my posts</Checkbox>
        <Checkbox value="slots" description="Only consultations you booked.">Consultation changes</Checkbox>
        <Checkbox value="digest">Weekly digest</Checkbox>
      </CheckboxGroup>
      <Matrix><Checkbox isIndeterminate>Some topics</Checkbox><Checkbox isInvalid>Required choice</Checkbox><Checkbox isDisabled>Unavailable</Checkbox></Matrix>
    </Stack>
  ),
  Radio: () => (
    <Stack gap={20}>
      <RadioGroup label="Meeting type" defaultValue="campus" row>
        <Radio value="online">Online</Radio>
        <Radio value="campus">On campus</Radio>
        <Radio value="phone" isDisabled>Phone (unavailable)</Radio>
      </RadioGroup>
      <RadioGroup label="Meeting type, as blocks" defaultValue="online">
        <Radio value="online" card description="A link is sent after the faculty member confirms.">Online</Radio>
        <Radio value="campus" card description="At the faculty office shown on the slot.">On campus</Radio>
      </RadioGroup>
    </Stack>
  ),
  Switch: () => (
    <Stack gap={12}>
      <Switch defaultSelected showState>Show my name on posts</Switch>
      <Switch showState>Compact view</Switch>
      <Switch isDisabled>Sync calendar (unavailable)</Switch>
    </Stack>
  ),
  SegmentedControl: ({ theme }) => (
    <Stack gap={12}>
      <SegmentedControl aria-label={`Schedule view${sfx(theme)}`} defaultSelectedKey="week">
        <Segment id="week" icon="calendar">Week</Segment><Segment id="day" icon="clock">Day</Segment><Segment id="list" icon="list-checks">List</Segment>
      </SegmentedControl>
      <SegmentedControl aria-label={`Feed${sfx(theme)}`} defaultSelectedKey="all" block>
        <Segment id="all">All</Segment><Segment id="community">Community</Segment><Segment id="announcements">Announcements</Segment>
      </SegmentedControl>
    </Stack>
  ),
  TagGroup: () => {
    function Tags() {
      const [tags, setTags] = useState(["Algorithms", "Web", "Thesis", "Databases"]);
      return (
        <TagGroup label="Active filters" onRemove={(keys) => setTags((t) => t.filter((x) => !keys.has(x)))} emptyMessage="No filters. Showing everything.">
          {tags.map((t) => <Tag key={t} id={t} lane={t === "Web" ? "community" : t === "Thesis" ? "consult" : undefined}>{t}</Tag>)}
        </TagGroup>
      );
    }
    return <Tags />;
  },
  Kbd: () => <Matrix><Kbd keys={["Ctrl", "K"]} /><Kbd keys="Esc" /><Kbd keys={["Shift", "?"]} /><span className="ds-type-body-small ds-secondary">Open the command palette with <Kbd keys={["Ctrl", "K"]} /></span></Matrix>,
  Calendar: ({ theme }) => <Calendar aria-label={`Consultation date${sfx(theme)}`} defaultValue={new CalendarDate(2026, 10, 21)} isDateUnavailable={(d) => d.day === 23 || d.day === 30} />,
  DatePicker: () => <DatePicker label="Preferred date" description="Weekdays only." defaultValue={new CalendarDate(2026, 10, 21)} />,
  FileUpload: () => <FileUpload label="Attachments" description="PDF, PNG or JPG, up to 10 MB each." allowsMultiple />,

  // ---- Navigation ----
  Link: () => (
    <Stack gap={12}>
      <p className="ds-type-body">Read the <Link href="#">privacy and access notes</Link> before posting.</p>
      <Matrix><Link href="#" variant="standalone">Read update</Link><Link href="#" variant="quiet">Forgot password?</Link><Link href="https://example.org" external>CCS handbook</Link></Matrix>
    </Stack>
  ),
  NavItem: ({ theme }) => (
    <nav aria-label={`Sample navigation${sfx(theme)}`} className="ds-stack ds-stack--4" style={{ maxWidth: 260 }}>
      <NavItem href="#" icon="house" isCurrent>Overview</NavItem>
      <NavItem href="#" icon="chats" count={3}>Community</NavItem>
      <NavItem href="#" icon="chalkboard" className="is-hover">Consultations</NavItem>
      <NavItem href="#" icon="file">My reports</NavItem>
    </nav>
  ),
  Sidebar: ({ theme }) => (
    <div className="site-frame site-frame--tall">
      <Sidebar label={`Main${sfx(theme)}`} brand={<DoorPlate code="CCS" />} footer={<><div className="ds-sidebar__person"><Avatar name="Demo student" decorative /><div><p className="ds-sidebar__name">Demo student</p><RoleBadge>Student</RoleBadge></div></div><SidebarNote>Own reports only (proposed permission)</SidebarNote></>}>
        <SidebarSection label="Workspace">
          <NavItem href="#" icon="house" isCurrent>Overview</NavItem>
          <NavItem href="#" icon="chats" count={3}>Community</NavItem>
          <NavItem href="#" icon="chalkboard">Consultations</NavItem>
          <NavItem href="#" icon="file">My reports</NavItem>
        </SidebarSection>
      </Sidebar>
    </div>
  ),
  TopBar: ({ theme }) => (
    <div className="site-frame">
      <TopBar title="Overview" tools={<><Search label={`Search ACCS${sfx(theme)}`} size="sm" placeholder="Search" className="ds-topbar__search" /><IconButton icon="bell" label="Notifications, 2 unread" dot /></>} />
    </div>
  ),
  MobileHeader: () => (
    <div className="site-frame site-frame--phone">
      <MobileHeader start={<IconButton icon="list" label="Open navigation" tooltip={false} />} end={<IconButton icon="bell" label="Notifications" tooltip={false} />}><DoorPlate size="sm" /></MobileHeader>
    </div>
  ),
  AppShell: ({ theme }) => (
    <div className="site-frame site-frame--tall">
      <AppShell contentAs="div" density="compact" sidebar={<Sidebar label={`Shell navigation${sfx(theme)}`} brand={<DoorPlate code="CCS" />}><NavItem href="#" icon="house" isCurrent>Overview</NavItem><NavItem href="#" icon="chats">Community</NavItem></Sidebar>} topBar={<TopBar title="Overview" />}>
        <SectionHeader title="Your week" description="Content column." />
      </AppShell>
    </div>
  ),
  Navbar: ({ theme }) => (
    <div className="site-frame">
      <Navbar label={`Main${sfx(theme)}`} brand={<DoorPlate />} brandLabel="ACCS home" links={[{ label: "Community", href: "#", current: true }, { label: "Consultations", href: "#" }, { label: "Reports", href: "#" }]} actions={<Button size="sm" icon="sign-in">Sign in</Button>} />
    </div>
  ),
  Tabs: ({ theme }) => (
    <Tabs>
      <TabList aria-label={`Feed${sfx(theme)}`}>
        <Tab id="latest" icon="chats" count={12}>Latest</Tab>
        <Tab id="saved" icon="push-pin">Saved</Tab>
        <Tab id="mine" icon="note">My posts</Tab>
        <Tab id="archived" isDisabled>Archived</Tab>
      </TabList>
      <TabPanel id="latest"><p className="ds-type-body ds-secondary">Twelve new posts since Monday (sample).</p></TabPanel>
      <TabPanel id="saved"><p className="ds-type-body ds-secondary">Posts you pinned.</p></TabPanel>
      <TabPanel id="mine"><p className="ds-type-body ds-secondary">Nothing yet.</p></TabPanel>
    </Tabs>
  ),
  Breadcrumbs: ({ theme }) => <Breadcrumbs label={`Breadcrumbs${sfx(theme)}`} items={[{ label: "My reports", href: "#" }, { label: "Drafts", href: "#" }, { label: "DEMO-024" }]} />,
  Pagination: (p) => <PaginationDemo {...p} />,
  Stepper: ({ theme }) => (
    <Stack gap={24}>
      <Stepper label={`Booking progress${sfx(theme)}`} steps={["Choose a time", "Add details", "Review"]} current={1} />
      <Stepper label={`Report progress${sfx(theme)}`} steps={["Draft", { label: "Recipients confirmed", description: "Pending policy decision" }, "Submitted", "Review"]} current={1} />
    </Stack>
  ),
  MenuButton: () => (
    <Matrix>
      <MenuButton label="Draft actions" onAction={(k) => toast(`Chose ${String(k)}`, { description: "Sample action" })}>
        <MenuSection title="Draft"><MenuItem id="edit" icon="pencil" shortcut="E">Keep editing</MenuItem><MenuItem id="copy" icon="copy" description="DEMO-024">Copy reference</MenuItem></MenuSection>
        <MenuSeparator />
        <MenuItem id="discard" icon="trash" danger>Discard draft</MenuItem>
      </MenuButton>
      <MenuButton label="More actions" iconOnly><MenuItem id="share" icon="link">Copy link</MenuItem><MenuItem id="report" icon="flag">Report post</MenuItem></MenuButton>
    </Matrix>
  ),
  CommandPalette: () => <CommandDemo />,
  Footer: ({ theme }) => (
    <div className="site-frame">
      <Footer brand={<DoorPlate />} description="Your Access to the College of Computer Studies." columns={[{ title: `ACCS${sfx(theme)}`, links: [{ label: "Community", href: "#" }, { label: "Consultations", href: "#" }] }, { title: `Policy${sfx(theme)}`, links: [{ label: "Privacy and access", href: "#" }] }]} note="Proposed, not approved." />
    </div>
  ),

  // ---- Badges ----
  Badge: () => (
    <Stack gap={12}>
      <Matrix><Badge tone="success">Resolved</Badge><Badge tone="warning" form="pending">Review pending</Badge><Badge form="restricted">Restricted</Badge><Badge form="closed">Withdrawn</Badge><Badge tone="info">Submitted</Badge><Badge tone="danger">Rejected</Badge></Matrix>
      <Matrix><Badge tone="community">Community</Badge><Badge tone="consult">Consultation</Badge><Badge outline marker={false}>Demo</Badge></Matrix>
      <Caption>The marker's line form carries the state: solid, dashed, hatched, struck.</Caption>
    </Stack>
  ),
  RoleBadge: () => <Matrix><RoleBadge>Student</RoleBadge><RoleBadge>Faculty</RoleBadge><RoleBadge>Department staff</RoleBadge></Matrix>,
  Severity: () => <Matrix><Severity level="low" /><Severity level="medium" /><Severity level="high" /></Matrix>,

  // ---- Feedback ----
  Spinner: () => <Matrix><Spinner /><Spinner size={20} /><Spinner size={24} label="Loading reports" /><Spinner size={32} /></Matrix>,
  Progress: () => (
    <Stack gap={20}>
      <Progress label="Uploading attachments" value={62} hint="3 of 5 files" />
      <Progress label="Upload complete" value={100} tone="success" />
      <Progress label="Checking availability" isIndeterminate />
    </Stack>
  ),
  Meter: () => (
    <Stack gap={20}>
      <Meter label="Slots taken this week" value={3} maxValue={8} valueLabel="3 of 8" />
      <Meter label="Slots taken next week" value={7} maxValue={8} valueLabel="7 of 8" />
      <Meter label="Room capacity" value={40} maxValue={40} valueLabel="Full: 40 of 40" />
    </Stack>
  ),
  Alert: () => (
    <Stack gap={8}>
      <Alert title="Illustrative schedule">These times are examples, not live availability.</Alert>
      <Alert tone="success" title="Draft saved">Only you can see DEMO-024.</Alert>
      <Alert tone="warning" title="Community access does not grant report access" icon="lock">Keep posts free of personal or case details.</Alert>
      <Alert tone="danger" title="Couldn't save your draft" actions={<Button size="sm" variant="secondary">Try again</Button>}>Your text is kept on this device.</Alert>
      <Alert tone="neutral" title="Why is Submit disabled?" role="note">Recipients and access rules are still being confirmed.</Alert>
    </Stack>
  ),
  Toast: () => <ToastDemo />,
  Modal: () => (
    <Matrix>
      <DialogTrigger>
        <Button variant="secondary" icon="pencil">Edit details</Button>
        <Modal title="Edit consultation details">
          {({ close }) => (<><ModalBody><TextField label="Subject" defaultValue="Thesis topic review" /></ModalBody><ModalActions><Button variant="secondary" onPress={close}>Cancel</Button><Button onPress={close}>Save details</Button></ModalActions></>)}
        </Modal>
      </DialogTrigger>
      <DialogTrigger>
        <Button variant="destructive" icon="trash">Discard draft</Button>
        <Modal title="Discard draft DEMO-024?" role="alertdialog">
          {({ close }) => (<><ModalBody><p>The draft and its attachments are removed. This cannot be undone.</p></ModalBody><ModalActions><Button variant="secondary" onPress={close}>Keep draft</Button><Button variant="destructive" onPress={close}>Discard draft</Button></ModalActions></>)}
        </Modal>
      </DialogTrigger>
    </Matrix>
  ),
  Drawer: () => (
    <Matrix>
      <DialogTrigger>
        <Button variant="secondary" icon="funnel">Filters</Button>
        <Drawer title="Filter reports" footer={<><Button variant="secondary" slot="close">Cancel</Button><Button slot="close">Apply filters</Button></>}>
          <CheckboxGroup label="Status" defaultValue={["draft"]}><Checkbox value="draft">Draft</Checkbox><Checkbox value="review">In review</Checkbox><Checkbox value="resolved">Resolved</Checkbox></CheckboxGroup>
        </Drawer>
      </DialogTrigger>
      <DialogTrigger>
        <Button variant="secondary" icon="calendar">Bottom sheet</Button>
        <Drawer title="Wed 21 Oct" side="bottom"><p className="ds-type-body ds-secondary">Swipe down to close on touch screens.</p></Drawer>
      </DialogTrigger>
    </Matrix>
  ),
  Tooltip: () => (
    <Matrix>
      <IconButton icon="bell" label="Notifications" />
      <TooltipTrigger delay={300}><Button variant="tertiary" icon="info">Campus time</Button><Tooltip placement="bottom">All times are local campus time.</Tooltip></TooltipTrigger>
    </Matrix>
  ),
  Popover: () => <Popover trigger={<Button variant="secondary" icon="question">Why 30 minutes?</Button>} title="Consultation length" arrow><p className="ds-type-body-small ds-secondary" style={{ margin: 0 }}>Faculty publish 30-minute slots. Book two in a row for longer topics.</p></Popover>,
  EmptyState: () => <EmptyState level={3} title="No consultations booked yet" description="Booked times appear here. Faculty confirm each request." action={<Button icon="calendar-check">Book a time</Button>} />,
  PrivacyNotice: ({ theme }) => <PrivacyNotice level={3} title={`Restricted record${sfx(theme)}`} foot="Submission is disabled until recipients and access rules are confirmed."><p>Only you can open this draft today.</p><p>Restricted access does not mean anonymous.</p></PrivacyNotice>,
  Disclosure: () => (
    <Accordion defaultExpandedKeys={["anon"]}>
      <Disclosure id="anon" title="Is the community anonymous?">No. Posts show your name to members of the college community.</Disclosure>
      <Disclosure id="reports" title="Who can see my reports?">You, and the people assigned to your record once recipients are confirmed.</Disclosure>
      <Disclosure id="live" title="Are these schedules live?">No. Every schedule here is a sample.</Disclosure>
    </Accordion>
  ),

  // ---- Content ----
  Card: ({ theme }) => (
    <Grid columns={2}>
      <Card link>
        <CardHeader><span className="ds-card__lead"><CardLane lane="community">Algorithms</CardLane><CardWhen>Mon 19 Oct · 09:00</CardWhen></span><Badge outline marker={false}>Demo</Badge></CardHeader>
        <CardTitle href="#">What helped recursion finally click for you?</CardTitle>
        <CardBody>Share the explanation, drawing or example that worked.</CardBody>
        <CardMeta><span>6 replies</span><CardAction>Join the conversation</CardAction></CardMeta>
      </Card>
      <Card overlay as="section" aria-label={`Floating panel${sfx(theme)}`}>
        <CardTitle level={3}>Floating panel</CardTitle>
        <CardBody>Overlay cards float on a shadow instead of a rule.</CardBody>
      </Card>
    </Grid>
  ),
  AnnouncementCard: () => <AnnouncementCard when="Mon 19 Oct · 09:00" title="Hackathon briefing moves to the AVR" meta="Community desk" href="#" demo>Same time, Wednesday 13:00. Bring a laptop; teams form on the day.</AnnouncementCard>,
  ForumCard: () => <ForumCard topic="Algorithms" title="What helped recursion finally click for you?" excerpt="Share the explanation, drawing or example that worked." author="Demo member" replies={6} status="Open discussion" href="#" demo />,
  Tile: () => (
    <Stack gap={12}>
      <Matrix><Tile icon="calendar" /><Tile icon="chats" tone="community" /><Tile icon="chalkboard" tone="consult" /><Tile icon="lock" tone="restricted" /><Tile icon="tray" tone="neutral" /></Matrix>
      <Matrix><Tile icon="check-circle" tone="success" size="sm" /><Tile icon="warning" tone="warning" size="sm" /><Tile icon="warning-circle" tone="danger" size="sm" /><Tile icon="graduation-cap" size="lg" /></Matrix>
    </Stack>
  ),
  Avatar: () => (
    <Stack gap={12}>
      <Matrix><Avatar name="Ana Santos (sample)" size={24} /><Avatar name="Ben Cruz (sample)" size={32} lane="community" /><Avatar name="Cara Lim (sample)" lane="consult" /><Avatar name="Dan Reyes (sample)" size={48} lane="neutral" /><Avatar name="Eve Tan (sample)" size={64} /></Matrix>
      <AvatarGroup names={["Ana Santos", "Ben Cruz", "Cara Lim", "Dan Reyes", "Eve Tan"]} max={3} />
    </Stack>
  ),

  // ---- Data ----
  Skeleton: () => (
    <Stack gap={8} aria-busy="true">
      <Skeleton shape="title" />
      <Skeleton width="92%" /><Skeleton width="78%" /><Skeleton width="60%" />
      <Matrix><Skeleton shape="circle" /><Skeleton shape="block" height="3.5rem" width="10rem" /><Skeleton shape="block" height="3.5rem" width="10rem" /></Matrix>
    </Stack>
  ),
  ViewState: () => (
    <Grid columns={2}>
      <ViewState kind="empty" title="No reports yet" description="Drafts you save appear here." actions={<Button size="sm" icon="plus">New draft</Button>} />
      <ViewState kind="restricted" title="This record is restricted" description="Only you and assigned reviewers can open it." />
      <ViewState kind="error" title="Couldn't load reports" description="Check your connection and try again." actions={<Button size="sm" variant="secondary">Try again</Button>} />
      <ViewState kind="loading" title="Loading reports" />
    </Grid>
  ),
  Table: ({ theme }) => {
    function Sortable() {
      const [sort, setSort] = useState<{ column: Key; direction: "ascending" | "descending" }>({ column: "updated", direction: "descending" });
      const rows = [{ id: 1, ref: "DEMO-024", topic: "Course planning", replies: 3, updated: "2026-10-21" }, { id: 2, ref: "DEMO-018", topic: "Thesis advising", replies: 12, updated: "2026-10-17" }, { id: 3, ref: "DEMO-009", topic: "Career guidance", replies: 0, updated: "2026-10-02" }];
      const sorted = [...rows].sort((a, b) => (sort.direction === "ascending" ? 1 : -1) * String(a[sort.column as "ref"]).localeCompare(String(b[sort.column as "ref"]), undefined, { numeric: true }));
      return (
        <Table aria-label={`Consultation requests${sfx(theme)}`} sortDescriptor={sort} onSortChange={(d) => setSort(d as typeof sort)} selectionMode="multiple">
          <TableHeader>
            <Column id="ref" isRowHeader allowsSorting>Reference</Column>
            <Column id="topic" allowsSorting>Topic</Column>
            <Column id="replies" numeric allowsSorting>Replies</Column>
            <Column id="updated" allowsSorting>Updated</Column>
          </TableHeader>
          <TableBody items={sorted}>{(r) => <TableRow id={r.id}><Cell reference>{r.ref}</Cell><Cell>{r.topic}</Cell><Cell numeric>{r.replies}</Cell><Cell><time dateTime={r.updated}>{r.updated}</time></Cell></TableRow>}</TableBody>
        </Table>
      );
    }
    return <Sortable />;
  },
  ReportsTable: ({ theme }) => <ReportsTable caption={`Own reports, demo records${sfx(theme)}`} rows={REPORT_ROWS} />,
  ReportRecord: () => (
    <div className="ds-record-list">
      <ReportRecord reference="DEMO-024" title="General concern" status="Draft" statusTone="warning" statusForm="pending" facts={[{ label: "Updated", value: "21 Oct" }, { label: "Visibility", value: "You only" }]} href="#" />
      <ReportRecord reference="DEMO-009" title="General question" status="Resolved" statusTone="success" statusForm="solid" facts={[{ label: "Updated", value: "2 Oct" }]} href="#" />
    </div>
  ),
  CaseTimeline: ({ theme }) => (
    <CaseTimeline label={`Case activity${sfx(theme)}`} events={[
      { title: "Draft created", date: "21 Oct 09:12", actor: "You" },
      { title: "Recipients being confirmed", state: "current", body: "The department office is confirming who receives this category.", actor: "Department office" },
      { title: "Submitted to assigned reviewers", state: "pending" },
      { title: "Review", state: "restricted", body: "Visible only to assigned reviewers and you." },
    ]} />
  ),

  // ---- Scheduling ----
  TimeBlock: () => (
    <div className="site-blocks">
      <TimeBlock time="09:00-10:30" title="Data Structures" meta="CCS 201" />
      <TimeBlock time="14:00" title="Peer study circle" meta="Library 2F" lane="community" />
      <TimeBlock time="09:00-11:00" title="Consultation hours" meta="CCS 304" lane="consult" />
      <TimeBlock time="10:00-11:00" title="Course planning" lane="consult" form="open" onPress={() => toast("Slot chosen (sample)")} />
      <TimeBlock time="15:30" title="Thesis check-in" lane="consult" form="pending" />
      <TimeBlock time="12:30" title="Thesis advising" lane="consult" form="taken" />
      <TimeBlock time="15:00" title="Guest seminar" form="disabled" stateLabel="Cancelled" />
      <TimeBlock title="Reports" meta="Your own records only" lane="restricted" icon="lock" />
    </div>
  ),
  NowLine: () => (
    <div className="site-nowline" aria-label="Now-line on a ruled hour (sample)">
      <span className="site-nowline__hour">10:00</span><span className="site-nowline__hour">11:00</span>
      <NowLine offset={0.7} label="10:42" />
    </div>
  ),
  Timetable: ({ theme }) => <Timetable label={`A sample week${sfx(theme)}`} days={WEEK} events={WEEK_EVENTS} now={10.7} band={<><span className="ds-timetable__band-label"><Icon name="lock" size={16} weight="fill" /><strong>Reports</strong></span>Restricted: you see only your own records.</>} />,
  ConsultationSlotPicker: (p) => <SlotDemo {...p} />,

  // ---- Layout ----
  Container: () => <div className="site-frame"><Container width="reading"><p className="ds-type-body site-outline">Reading width: 680px, centered, with the grid margins.</p></Container></div>,
  Stack: () => <Stack gap={12}>{["8px rhythm", "Gap 12", "One direction"].map((t) => <p key={t} className="site-outline ds-type-body-small">{t}</p>)}</Stack>,
  Grid: () => <Grid columns={3}>{["One", "Two", "Three"].map((t) => <p key={t} className="site-outline ds-type-body-small">{t}</p>)}</Grid>,
  Section: ({ theme }) => (
    <div className="site-frame">
      <Section tone="plate" tight aria-label={`Call to action${sfx(theme)}`}><p className="ds-type-h3">A door-plate band: one per page.</p></Section>
    </div>
  ),
  SectionHeader: () => <SectionHeader split title="This week in the community" description="Sample posts from the college community." actions={<Button variant="secondary" iconEnd="arrow-right">All posts</Button>} />,
  Hero: () => (
    <div className="site-frame">
      <Hero plate={<DoorPlate size="lg" />} title={`Your Access to the College of Computer Studies`} lead="One college week, each thing in its lane." actions={<Button icon="sign-in">Sign in</Button>} art={<TimeBlock time="10:00" title="Consultation hours" lane="consult" meta="Sample" />} />
    </div>
  ),
  Agenda: () => (
    <Agenda>
      <AgendaItem chip="Community" lane="community" title="Ask, answer, share what helped" href="#" linkLabel="Join the conversation">Casual and encouraging.</AgendaItem>
      <AgendaItem chip="10:00" lane="consult" title="Book office hours" href="#" linkLabel="See open slots">Nothing is booked until faculty confirm.</AgendaItem>
      <AgendaItem chip="Reports" lane="restricted" title="Your own records, kept apart">Serious and structured.</AgendaItem>
    </Agenda>
  ),
  Highlight: () => (
    <Stack gap={12}>
      <p className="ds-type-h3">Community access does <Highlight under>not</Highlight> grant report access.</p>
      <p className="ds-type-body">Search hit: <Highlight>recursion</Highlight> · <Highlight tone="community">community</Highlight> · <Highlight tone="consult">consultation</Highlight> · <Highlight tone="schedule">schedule</Highlight></p>
    </Stack>
  ),
  Divider: () => <Stack gap={16}><p className="ds-type-body-small">Above</p><Divider /><Divider label="Today" /><p className="ds-type-body-small">Below</p></Stack>,

  // ---- Identity and icons ----
  DoorPlate: () => (
    <Stack gap={12}>
      <Matrix><DoorPlate size="sm" /><DoorPlate /><DoorPlate code="CCS 304" /><DoorPlate size="lg" tagline="Access for College of Computer Studies" /></Matrix>
      <Matrix><DoorPlate outline code="Faculty" /><DoorPlate name="Office hours" code="10:00" /></Matrix>
    </Stack>
  ),
  Logo: () => (
    <Stack gap={16}>
      <Matrix><Logo size="sm" /><Logo /><Logo code="DS 1.0" /><Logo size="lg" /></Matrix>
      <Matrix>
        <Logo markOnly size="xl" label="Meeting At 10" /><Logo markOnly size="lg" label="Meeting At 10" />
        <Logo markOnly label="Meeting At 10" /><Logo markOnly size="sm" label="Meeting At 10" />
      </Matrix>
      <div className="site-inverse-strip"><Logo inverse code="DS 1.0" /></div>
      <Caption>The proposed ACCS marks: files, not approved, shown on a light plate because they do not adapt to dark.</Caption>
      <div data-theme="light" className="site-logo-plate">
        <Matrix>
          <img className="ds-logo-file" src="/logo/logo-horizontal.svg" alt="ACCS logo, horizontal (proposed)" />
          <img className="ds-logo-file" src="/logo/logo-compact-minimum.svg" alt="ACCS logo, compact (proposed)" />
        </Matrix>
      </div>
    </Stack>
  ),
  Icon: () => <IconGallery />,
};

/** One demo by name; unknown names render a short note instead of failing the page. */
export function DemoPanel({ name, theme }: { name: string; theme?: Theme }) {
  const demo = DEMOS[name];
  return <>{demo ? demo({ theme }) : <p className="ds-type-body-small ds-secondary">No live demo for {name}.</p>}</>;
}

