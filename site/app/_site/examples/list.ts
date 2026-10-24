export const EXAMPLES = [
  { slug: "landing", title: "Landing page", description: "ACCS landing built from Hero, Feature Row, Section Header and form controls on soft layers." },
  { slug: "admin-overview", title: "Admin overview", description: "Compact admin overview: collection cards, search, consultation picker and a reports table." },
  { slug: "sign-in", title: "Sign in", description: "Sign-in panel floating on a wash: text fields, an inline error, a checkbox and one primary action." },
  { slug: "report-detail", title: "Report detail", description: "Report detail as headed sections with dividers, no cards: summary, activity, gated submission." },
] as const;
export type ExampleSlug = (typeof EXAMPLES)[number]["slug"];
