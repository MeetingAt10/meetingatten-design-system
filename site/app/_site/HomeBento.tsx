"use client";
import {
  Badge, Button, Checkbox, ForumCard, Icon, ReportsTable, Segment, SegmentedControl, Switch, Tab, TabList, TabPanel, Tabs, TextField,
} from "@meetingat10/design-system/react";
import { REPORT_ROWS } from "./examples/data";

/** A framed window around a live component preview: title strip, then the real component. */
function Win({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <figure className={`site-win ${className ?? ""}`}>
      <figcaption className="site-win__bar"><span className="site-win__title">{title}</span></figcaption>
      <div className="site-win__body">{children}</div>
    </figure>
  );
}

/** Live previews of real components, set in a bento grid. Interactive, at the scale they have in use. */
export function HomeBento() {
  return (
    <div className="site-bento">
      <Win title="Community" className="site-bento__feed">
        <Tabs>
          <TabList aria-label="Community feed">
            <Tab id="latest" icon="chats" count={12}>Latest</Tab>
            <Tab id="saved" icon="push-pin">Saved</Tab>
            <Tab id="mine" icon="note">My posts</Tab>
          </TabList>
          <TabPanel id="latest">
            <ForumCard topic="Algorithms" title="What helped recursion finally click for you?" excerpt="Share the explanation, drawing or example that worked." author="Paolo Dizon" replies={6} status="Open discussion" href="#" />
          </TabPanel>
          <TabPanel id="saved"><p className="ds-type-body ds-secondary">Posts you save appear here.</p></TabPanel>
          <TabPanel id="mine"><p className="ds-type-body ds-secondary">You have not posted yet.</p></TabPanel>
        </Tabs>
      </Win>

      <Win title="Controls" className="site-bento__controls">
        <div className="ds-stack ds-stack--20">
          <div className="ds-row ds-row--8">
            <Button icon="sign-in">Sign in</Button>
            <Button variant="secondary">Create account</Button>
            <Button variant="tertiary">Learn more</Button>
          </div>
          <TextField label="Student email" type="email" placeholder="name@qcu.edu.ph" />
          <SegmentedControl aria-label="Schedule view" defaultSelectedKey="week">
            <Segment id="week" icon="calendar">Week</Segment><Segment id="day" icon="clock">Day</Segment><Segment id="list" icon="list-checks">List</Segment>
          </SegmentedControl>
          <div className="ds-row">
            <Switch defaultSelected>Reminders</Switch>
            <Checkbox defaultSelected>Email me</Checkbox>
          </div>
        </div>
      </Win>

      <Win title="Records" className="site-bento__table">
        <ReportsTable caption="Own reports" rows={REPORT_ROWS} />
      </Win>

      <Win title="Status" className="site-bento__status">
        <div className="ds-stack ds-stack--16">
          <div className="ds-row ds-row--8">
            <Badge>Open</Badge>
            <Badge tone="warning" form="pending">Pending</Badge>
            <Badge form="restricted">Restricted</Badge>
            <Badge tone="success">Resolved</Badge>
            <Badge form="closed">Withdrawn</Badge>
          </div>
          <div className="ds-row ds-row--8">
            <Badge tone="community">Community</Badge>
            <Badge tone="consult">Consultation</Badge>
          </div>
          <p className="ds-type-body-small ds-secondary"><Icon name="lock" size={16} weight="fill" /> Every status has a word as well as a color.</p>
        </div>
      </Win>
    </div>
  );
}
