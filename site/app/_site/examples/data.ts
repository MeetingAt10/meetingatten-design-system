import type { TimetableDay, TimetableEvent, ReportRow, ConsultationDay, ConsultationSlot } from "@meetingat10/design-system/react";

/** The week used across the examples (October 2026). Wednesday is "today". */
export const WEEK: TimetableDay[] = [
  { id: "mon", label: "Mon", date: "19", fullLabel: "Monday 19 October" },
  { id: "tue", label: "Tue", date: "20", fullLabel: "Tuesday 20 October" },
  { id: "wed", label: "Wed", date: "21", fullLabel: "Wednesday 21 October", isToday: true },
  { id: "thu", label: "Thu", date: "22", fullLabel: "Thursday 22 October" },
  { id: "fri", label: "Fri", date: "23", fullLabel: "Friday 23 October" },
];

export const WEEK_EVENTS: TimetableEvent[] = [
  { id: "mon-ds", day: "mon", start: 9, end: 10.5, title: "Data Structures", meta: "CCS 201" },
  { id: "mon-study", day: "mon", start: 14, end: 15, title: "Study circle", meta: "Library 2F", lane: "community" },
  { id: "tue-open", day: "tue", start: 10, end: 11, title: "Planning", meta: "Prof. Reyes", lane: "consult", form: "open" },
  { id: "tue-booked", day: "tue", start: 12.5, end: 13.5, title: "Thesis", lane: "consult", form: "taken" },
  { id: "tue-web", day: "tue", start: 15, end: 16.5, title: "Web lab", meta: "Lab 3" },
  { id: "wed-hours", day: "wed", start: 9, end: 11, title: "Office hours", meta: "CCS 304", lane: "consult" },
  { id: "wed-hack", day: "wed", start: 13, end: 14.5, title: "Hackathon", meta: "AVR", lane: "community" },
  { id: "wed-check", day: "wed", start: 15.5, end: 16.5, title: "Check-in", lane: "consult", form: "pending" },
  { id: "thu-algo", day: "thu", start: 8, end: 9.5, title: "Algorithms", meta: "CCS 105" },
  { id: "thu-org", day: "thu", start: 11, end: 12, title: "Assembly", meta: "Gym", lane: "community" },
  { id: "fri-se", day: "fri", start: 8, end: 10, title: "Capstone", meta: "Lab 3" },
  { id: "fri-open", day: "fri", start: 13, end: 14, title: "Career", meta: "Ms. Cruz", lane: "consult", form: "open" },
  { id: "fri-cancel", day: "fri", start: 15, end: 16, title: "Seminar", lane: "schedule", form: "disabled", stateLabel: "Cancelled" },
];

export const SLOT_DAYS: ConsultationDay[] = [
  { id: "mon", weekday: "Mon", day: 19, label: "Mon 19 Oct", openCount: 0, isDisabled: true },
  { id: "tue", weekday: "Tue", day: 20, label: "Tue 20 Oct", openCount: 2 },
  { id: "wed", weekday: "Wed", day: 21, label: "Wed 21 Oct", openCount: 3, isToday: true },
  { id: "thu", weekday: "Thu", day: 22, label: "Thu 22 Oct", openCount: 1 },
  { id: "fri", weekday: "Fri", day: 23, label: "Fri 23 Oct", openCount: 2 },
];

export const SLOTS: ConsultationSlot[] = [
  { id: "s0900", time: "09:00-09:30" },
  { id: "s0930", time: "09:30-10:00", state: "booked" },
  { id: "s1000", time: "10:00-10:30" },
  { id: "s1030", time: "10:30-11:00" },
  { id: "s1400", time: "14:00-14:30", state: "unavailable" },
  { id: "s1430", time: "14:30-15:00", state: "booked" },
];

export const REPORT_ROWS: ReportRow[] = [
  { id: "24", reference: "CCS-2026-0142", category: "General concern", status: "Draft", statusTone: "warning", statusForm: "pending", updated: "21 Oct", href: "/examples/report-detail/", actionLabel: "Open draft" },
  { id: "18", reference: "CCS-2026-0118", category: "Process question", status: "Restricted review", statusForm: "restricted", updated: "17 Oct", href: "/examples/report-detail/" },
  { id: "9", reference: "CCS-2026-0091", category: "General question", status: "Resolved", statusTone: "success", updated: "2 Oct", href: "/examples/report-detail/" },
  { id: "4", reference: "CCS-2026-0047", category: "General concern", status: "Withdrawn", statusForm: "closed", updated: "28 Sep", href: "/examples/report-detail/" },
];
