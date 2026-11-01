export const EXAMPLES = [
  { slug: "landing", title: "ACCS landing", description: "The first screen is a ruled week with community, consultation and report lanes. A line marks the current time on today." },
  { slug: "admin-overview", title: "Portal overview", description: "A student's week in the portal. It has a timetable, the community feed, the next consultation and the student's own reports, in compact density." },
  { slug: "report-detail", title: "Report detail", description: "A restricted record laid out as open sections. It has a privacy notice, progress, details, an activity timeline and a disabled submit button." },
  { slug: "sign-in", title: "Sign in", description: "A floating sheet with labeled fields, an inline error and one primary action." },
  { slug: "meeting-at-10", title: "Meeting At 10", description: "The team site. A day sheet is fixed on the 10:00 rule. We meet at 10. Then we ship." },
] as const;
export type ExampleSlug = (typeof EXAMPLES)[number]["slug"];
