"use client";
import { useState } from "react";
import {
  AnnouncementCard, Button, ForumCard, Grid, Meter, Pagination, ReportsTable, SectionHeader, Segment, SegmentedControl, Stack, Tab, TabList, TabPanel, Tabs,
  TimeBlock, Timetable, Divider, EmptyState, type Key,
} from "@meetingat10/design-system/react";
import { Portal } from "./Portal";
import { REPORT_ROWS, WEEK, WEEK_EVENTS } from "./data";

export function AdminOverviewBody() {
  const [view, setView] = useState<Key>("week");
  const [page, setPage] = useState(1);
  const days = view === "day" ? WEEK.filter((d) => d.isToday) : WEEK;
  return (
    <Portal current="overview" title="Overview">
      <Stack gap={32}>
        <SectionHeader
          level={1}
          split
          title="Your week"
          description="Wednesday 21 October. Sample data: every name, room and record is synthetic."
          actions={
            <>
              <SegmentedControl aria-label="Schedule view" selectedKey={view} onSelectionChange={setView}>
                <Segment id="week" icon="calendar">Week</Segment>
                <Segment id="day" icon="clock">Day</Segment>
              </SegmentedControl>
              <Button icon="plus" href="/examples/landing/#consultations">Book a consultation</Button>
            </>
          }
        />
        <Timetable label={view === "day" ? "Today, sample schedule" : "This week, sample schedule"} days={days} events={WEEK_EVENTS} now={10.7} startHour={8} endHour={17} />

        <Grid columns="main">
          <Tabs>
            <TabList aria-label="Community feed">
              <Tab id="latest" icon="chats" count={3}>Latest</Tab>
              <Tab id="saved" icon="push-pin">Saved</Tab>
              <Tab id="mine" icon="note">My posts</Tab>
            </TabList>
            <TabPanel id="latest">
              <Stack gap={12}>
                <AnnouncementCard level={3} tag="Announcement" when="Mon 19 Oct · 09:00" title="Hackathon briefing moves to the AVR" meta="Community desk" href="#" demo>Same time, Wednesday 13:00. Bring a laptop.</AnnouncementCard>
                <ForumCard level={3} topic="Algorithms" title="What helped recursion finally click for you?" author="Demo member" replies={6} status="Open discussion" href="#" demo />
              </Stack>
            </TabPanel>
            <TabPanel id="saved">
              <ForumCard level={3} topic="Web development" title="Which CSS layout finally made sense to you?" author="Demo member" replies={11} href="#" demo />
            </TabPanel>
            <TabPanel id="mine">
              <EmptyState level={3} title="You have not posted yet" description="Questions are welcome. Keep personal and case details out of community posts." action={<Button variant="secondary" icon="pencil">Write a post</Button>} />
            </TabPanel>
          </Tabs>

          <Stack gap={24}>
            <section aria-labelledby="next-h" className="ds-stack ds-stack--12">
              <h2 id="next-h" className="ds-type-h4">Next consultation</h2>
              <TimeBlock time="Wed 21 Oct · 15:30-16:30" title="Thesis check-in" meta="CCS 304 · Prof. Reyes (sample)" lane="consult" form="pending" icon="hourglass" />
              <p className="ds-type-body-small ds-secondary">Awaiting the faculty member's confirmation. Nothing is booked until they confirm.</p>
            </section>
            <Divider />
            <Meter label="Consultation slots taken this week" value={6} maxValue={8} valueLabel="6 of 8" />
            <Meter label="Draft storage used" value={12} maxValue={100} valueLabel="12 MB of 100 MB" />
          </Stack>
        </Grid>

        <Stack gap={12}>
          <ReportsTable caption="Own reports (demo records)" rows={REPORT_ROWS} />
          <Pagination page={page} pageCount={3} onPageChange={setPage} summary="Showing 1-4 of 9 demo records" />
        </Stack>
      </Stack>
    </Portal>
  );
}
