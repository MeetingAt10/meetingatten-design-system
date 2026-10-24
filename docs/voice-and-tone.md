# Voice and tone

Source: Figma 06.4 "Three contexts, one honest voice", 06.3 and 04.5-04.6 copy. Direct language, meaningful actions, no unverified claims.

| Context | Voice | Try | Avoid | Principle |
|---|---|---|---|---|
| Community (forum, announcements) | Casual, encouraging | "What helped it click for you? Share an explanation or ask a follow-up." | "Only experts should answer." | Invite participation; protect people from personal disclosure |
| Support (consultations, student help) | Empathetic, clear | "Choose a sample time that works for you. You can review it before continuing." | "We will reply within 24 hours." | Offer a clear next step without a service-level promise |
| Reports (grievance, restricted) | Serious, structured, neutral | "Submission is unavailable while recipients and access rules are confirmed." | "Your report is completely anonymous and secure." | State what is known, what is pending and what is disabled |

## Per surface

| Surface | Notes |
|---|---|
| ACCS landing | Community-driven and encouraging up front ("Your college, connected."); show the privacy boundary explicitly ("Community access does not grant report access"); never use grievance content in marketing |
| ACCS admin | Neutral and operational; reports stay explicit; role and permission copy follows 06.3 |
| Meeting At 10 | Not from Figma: direct, dry, short sentences ("We meet at 10. Then we ship.") |

## Rules

| Rule | Detail |
|---|---|
| Honest | No promises of anonymity, security, response time or finality; "restricted access does not mean anonymous" |
| Demo content | Label synthetic content: `DEMO`, "illustrative", "sample"; never real student data or names |
| Errors | Explain what went wrong and how to fix it next to the field; retain entered values; "Couldn’t validate this subject. Try again; your text is kept." |
| Buttons | Verb + object ("Continue", "Remove draft", "Review sample selection") |
| Destructive confirmation | Name the object; say whether it can be undone ("This action cannot be undone.") |
| Required fields | Text, not an asterisk alone |
| Name | **ACCS**; spoken "Access"; expand on first mention |
| No emoji | UI and system messages |

## Notifications and privacy (06.3)

| Do | Don't |
|---|---|
| Neutral: "There’s an update to a record you can access." Route to an authenticated, authorized view. Redact names, case categories, narrative, attachments and sensitive status from email subject lines, push previews and lock screens | Put an allegation, student identity or report description in a notification. A role label is not permission enforcement; restricted access is not a guarantee of confidentiality |

| Role | Permission scope (proposed) | Identity / confidentiality | Policy gate |
|---|---|---|---|
| Student | Own report drafts and records | Not confirmed; do not promise anonymity | Confirm recipients, consent and self-access |
| Assigned reviewer | Assigned cases only | Identity visibility and redaction unconfirmed | Confirm assignment, delegation and audit rules |
| Community moderator | Moderate community posts | No report access by default | Confirm public-post and moderation rules |
| Administrator | Manage configuration | No automatic permission to read cases | Explicit authorization required for case access |

Safe titles: browser title "ACCS / My reports"; never put report subjects, case details or identities in browser titles, community search, global search or notifications.
