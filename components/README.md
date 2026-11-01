# Components

Every component spec, grouped by category. Each spec covers when to use it, anatomy, states, behavior and accessibility, React usage and plain-CSS markup.

Styles live in `src/css/components/<category>/<name>.css` (built into `dist/components.css`); React components in `src/react/<category>/<Name>.tsx`, imported from `@meetingat10/design-system/react`. The design system site renders each spec with a live light and dark demo and a props table generated from the TypeScript types. Everything is proposed, not approved.

## Scheduling

- [Consultation Slot Picker](scheduling/consultation-slot.md) (`ConsultationSlotPicker`): Pick a consultation day from a sliding day strip, then one slot from blocks in line-form states that always say their state in words.
- [Now-line](scheduling/now-line.md) (`NowLine`): The present moment across a time grid, a 2px line and dot in the now color with the time on a small plate.
- [Time Block](scheduling/time-block.md) (`TimeBlock`): The unit of the Office Hours world, a block whose lane color owns the whole fill, with its time code, title and state in words.
- [Timetable](scheduling/timetable.md) (`Timetable`): A ruled week or day sheet of time blocks on a real, labeled hour grid, with the now-line on today and a hatched restricted band.

## Controls

- [Button](control/button.md) (`Button`): A block you press to act, in primary, secondary, tertiary, destructive and plate intents.
- [Calendar](control/calendar.md) (`Calendar`): A month of days where today carries the now-dot, the chosen day becomes a solid block and unavailable days are struck through.
- [Checkbox](control/checkbox.md) (`Checkbox`): An independent on or off choice whose check is drawn in as the box fills navy, alone or in a labeled group.
- [ComboBox](control/combobox.md) (`ComboBox`): Type to filter a longer list, then pick one option; the caret button opens the full list.
- [Date Picker](control/date-picker.md) (`DatePicker`): Type a date segment by segment in an input-shaped group, or pick it from a calendar popover.
- [Field](control/field.md) (`Field`): The label, description, control and error layout shared by every form control.
- [File Upload](control/file-upload.md) (`FileUpload`): A dashed drop sheet that turns solid when files hover over it; each file becomes a ruled row with its size, a progress line and a remove action.
- [Icon Button](control/icon-button.md) (`IconButton`): A square block holding one icon, always named, with the name repeated as a tooltip.
- [Kbd](control/kbd.md) (`Kbd`): Keycaps for a keyboard shortcut, read as one phrase.
- [Radio](control/radio.md) (`RadioGroup`): Choose exactly one option in a labeled group; the center dot springs in, and card radios make block-shaped choices.
- [Search](control/search.md) (`Search`): A text field with a magnifier and a clear button; Escape clears and Enter submits.
- [Segmented Control](control/segmented-control.md) (`SegmentedControl`): One choice among two to five views, with a paper chip that slides to the chosen segment.
- [Select Option](control/select-option.md) (`SelectOption`): One row in a Select or ComboBox list, on the shared listbox sheet, with a check when selected.
- [Select](control/select.md) (`Select`): Pick one option from a short list; the trigger matches the text input and the list floats on an overlay sheet.
- [Switch](control/switch.md) (`Switch`): An on or off setting that takes effect at once; the thumb springs across and the track fills navy.
- [Tag Group](control/tag-group.md) (`TagGroup`): Topics and active filters as ruled chips; selectable tags take the schedule wash and removable tags carry a remove button.
- [Text Area](control/text-area.md) (`TextArea`): Several lines of text that grow with the content, with a label, help, an error and an optional count.
- [Text Field](control/text-field.md) (`TextField`): One line of text with a persistent label, help text and an error that keeps what was typed.

## Navigation

- [App Shell](navigation/app-shell.md) (`AppShell`): The workspace layout, a sidebar beside the top bar and content on desktop and a mobile header with a navigation drawer below 1024px.
- [Breadcrumbs](navigation/breadcrumbs.md) (`Breadcrumbs`): Where the page sits, as a slash-separated trail whose last item is the current page in plain text.
- [Command Palette](navigation/command-palette.md) (`CommandPalette`): One search over destinations and actions in a modal sheet, opened with Ctrl+K or Cmd+K.
- [Footer](navigation/footer.md) (`Footer`): The site footer with the wordmark and a short description, named link columns, and a quiet bottom line for status notes.
- [Nav Item](navigation/item.md) (`NavItem`): One sidebar or mobile-menu destination; the current page becomes a solid navy block with its icon in the fill weight.
- [Link](navigation/link.md) (`Link`): Navigation in text or on its own, with an underline that thickens on hover and an arrow that steps forward on standalone links.
- [Menu](navigation/menu.md) (`MenuButton`): A button that opens a short list of actions on a floating sheet; destructive actions use danger ink and sit last.
- [Mobile Header](navigation/mobile-header.md) (`MobileHeader`): The sticky 56px bar below 1024px with the menu control, the wordmark and one or two actions.
- [Navbar](navigation/navbar.md) (`Navbar`): The landing and Meeting At 10 top navigation with the wordmark, a few links and one primary action; links move into a drawer below 768px.
- [Pagination](navigation/pagination.md) (`Pagination`): Previous, page blocks with gaps, and next for long lists; the current page is the solid navy block.
- [Sidebar](navigation/sidebar.md) (`Sidebar`): The workspace rail from 1024px, with the brand on top, grouped navigation, and the signed-in person and role at the bottom.
- [Stepper](navigation/stepper.md) (`Stepper`): Progress through a short flow drawn as a timeline, with done steps on a solid line, the current step marked, and upcoming steps on a dashed line, each with its state in words.
- [Tabs](navigation/tab.md) (`Tabs`): Views of one page on a ruled header, where the selected tab carries a 2px navy rule that slides between tabs.
- [Top Bar](navigation/top-bar.md) (`TopBar`): The workspace title strip on desktop, with the page title on the left and search and quick tools on the right.

## Feedback

- [Disclosure and Accordion](feedback/disclosure.md) (`Disclosure`): Ruled rows that open in place, alone or grouped as an accordion, with a turning caret and a panel height that springs.
- [Drawer](feedback/drawer.md) (`Drawer`): A sheet that slides in from an edge over a scrim for secondary work that keeps the page in view; a swipeable bottom sheet on phones.
- [Empty State](feedback/empty-state.md) (`EmptyState`): Open content for a region with nothing to show yet, drawn as an empty ruled sheet, with the reason and one next step.
- [Inline Alert](feedback/inline-alert.md) (`Alert`): A persistent message next to the content it is about, on a tinted sheet with its icon on a solid tone block.
- [Meter](feedback/meter.md) (`Meter`): A known quantity within a range on a tick-ruled scale, with the reading in words and a fill tone that only reinforces.
- [Modal](feedback/modal.md) (`Modal`): A dialog sheet over a scrim for a decision or a short form, with protected focus; a bottom sheet on phones.
- [Popover](feedback/popover.md) (`Popover`): A floating sheet anchored to its trigger for extra detail or a quick setting, closed by Escape or a click outside.
- [Privacy Notice](feedback/privacy-notice.md) (`PrivacyNotice`): The access boundary stated on the page, in a hatched band with a lock and neutral ink, never a promise of anonymity or security.
- [Progress](feedback/progress.md) (`Progress`): A labeled bar whose navy fill springs to the value, with the value in rolling digits; determinate or indeterminate.
- [Spinner](feedback/spinner.md) (`Spinner`): A small clock face whose hand sweeps while work runs, drawn in the current text color.
- [Toast](feedback/toast.md) (`ToastRegion`): A short-lived note on the inverse ink sheet that rises from the bottom edge, with a time-left line, swipe to dismiss and a stack of three.
- [Tooltip](feedback/tooltip.md) (`Tooltip`): A small ink plate that names an icon-only control on hover and keyboard focus.

## Content

- [Announcement Card](content/announcement-card.md) (`AnnouncementCard`): A department or community update in a collection, with a lane chip, time, title, short body, source line and one link.
- [Avatar](content/avatar.md) (`Avatar`): A person's photo or initials in a circle on a lane wash, alone or as an overlapping group with a count.
- [Card](content/card.md) (`Card`): A paper sheet for one item in a collection or for a floating panel, never nested, with a rule at rest or a shadow when it floats.
- [Forum Card](content/forum-card.md) (`ForumCard`): A community discussion in a collection; the title is the link, its hit area covers the card, and the card lifts on hover.
- [Tile](content/tile.md) (`Tile`): A small solid block in a lane or status color holding one icon, duotone by default.

## Data

- [Case Timeline](data/case-timeline.md) (`CaseTimeline`): A record's history on a vertical time rule, solid through what happened and dashed into what is pending, with the current state on the now-dot.
- [Report Record](data/report-record.md) (`ReportRecord`): One restricted record as a ruled list row with its reference, status in line form and words, labeled facts and one action; the phone form of the reports table.
- [Reports Table](data/reports-table.md) (`ReportsTable`): Own or assigned reports in a captioned, ruled table with the reference as row header, the status in line form and words, and a named action per row.
- [Skeleton](data/skeleton.md) (`Skeleton`): Decorative placeholders in the shape of the content that is loading; the region announces the loading state in words.
- [Table](data/table.md) (`Table`): A ruled sheet of rows and columns with keyboard navigation, sortable columns and row selection.
- [View State](data/view-state.md) (`ViewState`): What a data region shows while it is loading, empty, failed or restricted, with the state in words and an honest next step.

## Badges

- [Role Badge](badge/role.md) (`RoleBadge`): An outlined plate naming a person's role, such as Student or Faculty; never a permission, privacy or status signal.
- [Severity](badge/severity.md) (`Severity`): One to three filled segments plus a word for how serious something is, a family separate from status.
- [Status Badge](badge/status.md) (`Badge`): A word plus a small marker whose line form carries the state, with a tone that only reinforces.

## Layout

- [Agenda](layout/agenda.md) (`Agenda`): Features or steps as ruled rows of a schedule, each led by a lane chip, never a row of same-size icon cards.
- [Container](layout/container.md) (`Container`): The centered content column, 1280px wide by default, with the page grid margins for each breakpoint.
- [Divider](layout/divider.md) (`Divider`): A hairline rule between sections, optionally labeled with what follows, or vertical between toolbar groups.
- [Grid](layout/grid.md) (`Grid`): Responsive columns on the page gutters, one column on phones, with equal, main and split layouts.
- [Hero](layout/hero.md) (`Hero`): The first viewport as a thesis, with the brand, a display headline, one line, actions and the product at work beside them.
- [Highlight](layout/highlight.md) (`Highlight`): A highlighter stroke behind the words that matter, swiped in from the left when it first appears.
- [Section Header](layout/section-header.md) (`SectionHeader`): A section's heading, an optional description and actions, with no label above the heading.
- [Section](layout/section.md) (`Section`): A full-width page region with the density rhythm and a centered container, on the canvas, a paper band or a door-plate band.
- [Stack](layout/stack.md) (`Stack`): Vertical rhythm with one gap on the 8px module, plus Row for wrapping horizontal groups.

## Identity

- [Door Plate](identity/door-plate.md) (`DoorPlate`): The faculty-door name plate, used as the ACCS wordmark until an ACCS logo is approved, and for page plates and room labels.
- [Logo](identity/logo.md) (`Logo`): The Meeting At 10 calendar mark and name, the design system's main logo, drawn inline so it follows the theme and forced colors.

## Icon

- [Icon](icon/icon.md) (`Icon`): Phosphor icons in currentColor, named from a curated vocabulary, with weights that carry meaning.

## Expressive

Marketing surfaces only (the ACCS landing, the Meeting At 10 site, the showcase); never inside portal workflows. See [motion](../foundations/motion.md) and [imagery](../foundations/imagery.md).

- [Reveal](expressive/reveal.md) (`Reveal`): Content that eases in as it scrolls into view, visible by default and static where scroll-driven animation is unsupported or motion is reduced.
- [WordReveal](expressive/word-reveal.md) (`WordReveal`): A headline whose words rise out of a clipped line on page load, one after another, read once by screen readers.
- [FloatingArt](expressive/floating-art.md) (`FloatingArt`): A transparent 3D brand render with a soft ink shadow, a slow bob and optional pointer parallax.
- [ParallaxScene](expressive/parallax-scene.md) (`ParallaxScene`): A container that tracks the pointer over itself and gives the floating art inside it depth.
- [Parallax](expressive/parallax.md) (`Parallax`): An element that drifts against the scroll while it crosses the viewport, static where scroll-driven animation is unsupported or motion is reduced.
- [Aurora](expressive/aurora.md) (`Aurora`): Three slow, blurred lane-colored glows behind a hero or band, decorative and still under reduced motion.
- [GridBackdrop](expressive/grid-backdrop.md) (`GridBackdrop`): The Office Hours ruled sheet as a ground: hour and half-hour hairlines that fade out toward the edges.
- [Marquee](expressive/marquee.md) (`Marquee`): An endless slow line of short labels, paused on hover and focus, wrapped into a plain list under reduced motion.
- [SpotlightCard](expressive/spotlight-card.md) (`SpotlightCard`): A card whose lane-colored glow follows the pointer, optionally tilting toward it, as one link or a plain sheet.
- [Orbit](expressive/orbit.md) (`Orbit`): Items on a dashed hairline ring that turns slowly while every item stays upright.
- [CountUp](expressive/count-up.md) (`CountUp`): A number that rolls up from 0 when it scrolls into view, with the final value always in the text.
- [ScrollProgress](expressive/scroll-progress.md) (`ScrollProgress`): A 2px bar across the top edge that fills as the page scrolls, shown only where scroll-driven animation is supported.

## Shared rules

- Lanes: schedule (navy, default), community (amber), consult (emerald), restricted (hatched ink, no hue). Color never signals permission or confidentiality.
- Line forms carry state and always come with a word: solid = open or active, dashed = pending or draft, hatched = taken or restricted, struck = disabled or closed.
- Craft rules: no eyebrows above headings, no colored side stripes over 1px, Agenda rows instead of same-size icon-card columns, mono only for times, codes, references, keys and code, a rule or a shadow but never both, cards only for collection items and floating panels, no emoji or Unicode glyph icons, honest claims only ([principles](../docs/principles.md)).
