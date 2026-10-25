export const EXAMPLES = [
  { slug: "landing", title: "ACCS landing", description: "The first viewport is a ruled week: community, consultations and a hatched reports lane, with the now-line on today." },
  { slug: "admin-overview", title: "Portal overview", description: "A student's week in the portal: timetable, community feed, next consultation and own reports, in compact density." },
  { slug: "report-detail", title: "Report detail", description: "A restricted record as open sections: privacy notice, progress, details, activity timeline and gated submission." },
  { slug: "sign-in", title: "Sign in", description: "A floating sheet with labeled fields, an honest inline error and one primary action." },
  { slug: "meeting-at-10", title: "Meeting At 10", description: "The team site: a day sheet anchored on the 10:00 rule. We meet at 10. Then we ship." },
] as const;
export type ExampleSlug = (typeof EXAMPLES)[number]["slug"];
