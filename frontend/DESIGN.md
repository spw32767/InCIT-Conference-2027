---
name: InCIT 2027
description: A respectful, readable contemporary academic conference website.
colors:
  primary: '#132238'
  slate: '#364E68'
  accent: '#98CCD3'
  paper: '#EBF0F6'
  white: '#FFFFFF'
  border: '#DCE3EA'
  input-border: '#CBD5DF'
  destructive: '#B42318'
  registration: '#D52D35'
  registration-hover: '#B4232C'
  note-background: '#F7F9FB'
  warning-background: '#FFF3CD'
  warning-foreground: '#664D03'
  warning-border: '#FFCA2C'
  draft-note-on-dark: '#FFB4AB'
  schedule-active-background: '#21613B'
  schedule-active-text: '#FFFFFF'
  schedule-closing-background: '#7C4C12'
  schedule-closing-text: '#FFFFFF'
typography:
  display:
    fontFamily: Montserrat, sans-serif
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -1.5px
  headline:
    fontFamily: Montserrat, sans-serif
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -1px
  body:
    fontFamily: Montserrat, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
  content-body:
    fontFamily: Montserrat, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.9
  navigation:
    fontFamily: Montserrat, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1
  action:
    fontFamily: Montserrat, sans-serif
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.7
  page-title:
    fontFamily: Montserrat, sans-serif
    fontSize: 60px
    fontWeight: 700
    lineHeight: 1.15
  section-title:
    fontFamily: Montserrat, sans-serif
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.3
  section-title-mobile:
    fontFamily: Montserrat, sans-serif
    fontSize: 25px
    fontWeight: 600
    lineHeight: 1.3
  brand:
    fontFamily: Montserrat, sans-serif
    fontSize: 25px
    fontWeight: 700
    lineHeight: 1
  footer-brand:
    fontFamily: Montserrat, sans-serif
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.5
  footer-body:
    fontFamily: Montserrat, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.8
  footer-note:
    fontFamily: Montserrat, sans-serif
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.8
  mobile-navigation:
    fontFamily: Montserrat, sans-serif
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1
  brand-mobile:
    fontFamily: Montserrat, sans-serif
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1
  display-small:
    fontFamily: Montserrat, sans-serif
    fontSize: 30px
    fontWeight: 600
    lineHeight: 1.25
  display-tablet:
    fontFamily: Montserrat, sans-serif
    fontSize: 42px
    fontWeight: 600
    lineHeight: 1.25
  section-lead:
    fontFamily: Montserrat, sans-serif
    fontSize: 21px
    fontWeight: 500
    lineHeight: 1.6
  date-minimum:
    fontFamily: Montserrat, sans-serif
    fontSize: 17px
    fontWeight: 600
    lineHeight: 1.45
rounded:
  control: 6px
  card: 8px
  sponsor: 16px
  menu-toggle: 5px
  shadcn-base: 10px
  pill: 24px
  hero-action: 999px
spacing:
  compact: 8px
  inline: 12px
  base: 16px
  gutter: 24px
  group: 32px
  section-desktop: 84px
  section-mobile: 52px
components:
  alert-note:
    backgroundColor: '{colors.note-background}'
    textColor: '{colors.slate}'
    rounded: '{rounded.control}'
    padding: 16px 18px
  alert-warning:
    backgroundColor: '{colors.warning-background}'
    textColor: '{colors.warning-foreground}'
    rounded: '{rounded.control}'
    padding: 16px 18px
  registration-button:
    backgroundColor: '{colors.registration}'
    textColor: '{colors.white}'
    rounded: '{rounded.hero-action}'
    padding: 8px 20px
    height: 40px
  registration-button-hover:
    backgroundColor: '{colors.registration-hover}'
  home-button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.white}'
    typography: '{typography.content-body}'
    rounded: '{rounded.hero-action}'
    padding: 14px 28px
    height: 54px
  home-button-primary-hover:
    backgroundColor: '{colors.slate}'
  home-button-secondary:
    backgroundColor: '{colors.white}'
    textColor: '{colors.primary}'
    typography: '{typography.content-body}'
    rounded: '{rounded.hero-action}'
    padding: 14px 28px
    height: 54px
  date-card:
    backgroundColor: '{colors.paper}'
    textColor: '{colors.primary}'
    rounded: '{rounded.card}'
    padding: 26px 24px
  date-card-featured:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.paper}'
    rounded: '{rounded.card}'
    padding: 26px 24px
---

# Design System: InCIT 2027

## Temporary navigation review marker

Owner requested on 7 October 2026: header navigation entries for imported conference content use red `--draft-note-color`, including parent groups that contain imported pages. The route list lives in `src/lib/navigation.ts`; `data-content-imported` applies the temporary CSS overlay. Home is included because its About and Important Dates content was imported.

Preserve the original navigation colors for reversal: normal links use Slate Blue `--slate` (#364E68); hover, expanded and current-page links use Academic Ink `--ink` (#132238). Removing the imported-content marker overlay restores those existing states. The base palette and active underline styles are unchanged. Do not replace the original navigation tokens with red.

## Overview

**Creative North Star: "The Contemporary Academic Forum"**

The owner chose a respectful, readable academic character with room to breathe.
The interface gives conference information a clear hierarchy through typography,
aligned containers, quiet blue surfaces, and restrained technology imagery.
Reference websites inform the composition without defining an exact copy.

The owner also approved modest depth for future buttons and information groups.
Current content cards remain flat; this document records their actual styles.
Introduce gentle elevation where it clarifies a grouping or interaction, rather
than applying a prominent shadow to every surface. Establish its exact reusable
token when implementing it and update this record at that point.

**Key Characteristics:**
- Contemporary academic tone and generous spacing.
- Dark ink, cool paper, and a soft cyan accent.
- One shared content alignment across header, sections, and footer.
- Modest depth, purposeful imagery, and clear interaction states.

Extracted from `src/app/globals.css`, `src/app/home.css`, shared components,
and the running Home page on 6 October 2026. Frontmatter records actual styles,
not a claim that every element has already been normalized to a token scale.

## Colors

The palette combines deep academic ink with cool supporting surfaces.

### Primary
- **Academic Ink** (`primary`, CSS `--ink` / `--primary`): headings, primary
  actions, the footer, and the dark hero field.
- **Soft Cyan** (`accent`): section accents, selected decorative highlights,
  and text or icons on dark ink. It is not suitable for ordinary text on white.
- **Registration Red** (`registration`, CSS `--registration`): the owner's
  approved palette exception for the top-navigation Registration action, with
  white text and the deeper `registration-hover` tone on hover. Keep this action
  color separate from the temporary red imported-content review marker.

### Neutral
- **Slate Blue** (`slate`): supporting copy and navigation on light surfaces.
- **Cool Paper** (`paper`): alternating sections and date cards.
- **White** (`white`): primary reading surfaces and text on dark primary actions.
- **Quiet Border** (`border`) and **Input Border** (`input-border`): delimiters
  and control edges, rather than decorative emphasis.
- **Error Red** (`destructive`): the configured shadcn error role; no error
  form is currently implemented.
- **Note Paper** (`note-background`): a quiet static note surface with slate
  text and a slate left accent border.
- **Warning Paper**, **Warning Ink** and **Warning Accent** (`warning-background`,
  `warning-foreground`, `warning-border`): the approved reusable warning roles
  for pale yellow notes, readable brown text and a yellow left accent stripe.
  The existing cyan informational notice remains a separate treatment.

**The Readable Contrast Rule.** Use ink or slate for light-surface text.
Use paper, white, or cyan on ink. Cyan on white has only 1.76:1 contrast.

The current semantic shadcn roles map to these conference colors in the global
stylesheet. There is one supported light theme with deliberately dark sections;
a dark-mode switch has not been implemented or requested.

## Typography

Montserrat with sans-serif fallback is the established font for all roles.
The self-hosted variable Latin subset supplies regular through bold weights.
See `src/app/fonts/OFL.txt` for the SIL license. If Thai content is introduced,
the current face does not contain Thai glyphs: explicitly review the fallback
or add a suitable licensed Thai face rather than assuming Montserrat covers it.

The frontmatter display and headline sizes record desktop ceilings. The actual
CSS uses fluid sizing and different mobile rules; preserve those behaviors.
Secondary page titles use their own larger responsive scale. Content-body and
navigation are distinct roles even though they currently share a size.

**The Information First Rule.** Important dates, instructions, and body copy
must remain comfortable to read. Schedule labels, details, and disclaimers now use readable 14px text;
secondary mockup labels remain compact. Essential new content should use
content-body or body roles rather than decorative metadata sizes.

The Home heading breaks after “on” on desktop, keeping the year with
“Information Technology”. The year uses bold slate lettering at 1.2em, slightly larger than the preceding title,
remaining inline at the end of the second line.
Small screens may wrap further to preserve legibility.
This composition belongs to Home, not every page title.

## Layout

Header, page content, and footer share a centered container capped at 1280px.
Side margins are 24px on larger screens and 16px at widths up to 600px.
Use the shared container rather than independently positioning each section.

Home alternates white and cool paper backgrounds to make section changes clear.
Its desktop hero uses text beside the illustration and layered native SVG curves.
At 1050px and below the hero stacks; the globe becomes a centered lower region.
The illustration moves farther right above 1400px. These are Home-specific rules.

Home section headings are centered in Montserrat, with an 80px cyan rule below
the title and a 48px content gap (32px on mobile). Use this heading treatment
for major content sections; hero and footer headings retain their own roles.
About uses a centered 74ch reading column with justified 16px paragraphs (last line left-aligned), automatic hyphenation,
1.9 line height, and 24px paragraph gaps (20px on mobile). Its text is adapted
from the 2026 introduction; 2027 logistics remain explicitly pending. Important Dates uses a three-column semantic table (activity, date/period, and status with a visually
hidden status header). Mobile stacks each activity above its date and right-aligned status without
horizontal scrolling.
The footer changes from four columns to two at 1000px; its brand and contact
areas span the mobile grid. The main navigation switches to Menu at 1199px.

The spacing entries document recurring values, not an imposed universal grid.
Long articles and lists need a reading measure suited to their content; the
container maximum is not a required paragraph width.

## Elevation & Depth

Current sections and information cards mostly convey hierarchy through tonal
layers. The header has subtle translucency; a floating dropdown uses a restrained
shadow (`0 14px 35px #13223814`). The technology illustration contributes depth
without requiring shadows on every section.

**The Modest Depth Rule.** The owner prefers a little lift on future controls
and information groups. Use it selectively, keep it quiet, and avoid nested
layers of floating cards. Existing flat components may remain flat until their
content or interaction makes elevation useful.

Navigation styles use one base block plus responsive overrides.
State transitions in the navigation last 120–160ms and are removed when the
visitor prefers reduced motion. Hover feedback must have a keyboard equivalent.

## Shapes

Controls and information cards use gently rounded corners. Tags use pill shapes,
while numeric markers use circles. The shadcn base radius is separate from the
existing Home button and date-card values; do not silently replace one with the
other. Borders clarify grouping; the hero wave is not a reusable card silhouette.

## Components

### Buttons

Existing Home actions are confident, compact, and easy to identify. The primary
uses ink with white text, the secondary white with ink text and border. Both
use pill corners, 14px semibold labels, 54px minimum height and restrained
shadows (primary: 0 8px 20px ink at 18%; secondary: 0 4px 12px ink at 7%).
Hover changes the background and lifts the button 2px for fine pointers;
reduced motion removes the lift. Keyboard focus uses an offset outline.

A Radix shadcn Button is installed in `src/components/ui/button.tsx` for future
standard controls. Use its variant API and semantic colors. It has not replaced
the Home actions, and its default compact height is not a mobile touch target
recommendation. Choose an adequate size when placing new controls.

### Cards / Containers

Important Dates uses shadcn Table and Badge in a 1080px reading region.
Rows use 16px activity/date text, 14px supporting text, and a pale cyan active
background with a right-aligned status badge. Upcoming uses paper/slate, active
uses dark green (#21613b) / white, and Closing soon uses brown (#7c4c12) / white. Passed dates retain their normal appearance with an
empty status cell; the status column has no visible heading.
The preview starts at 25 September 2026 and can switch to the actual Bangkok
date. The client refreshes its reference date every minute; date-only milestones
are active on their date, while periods use inclusive start/end dates. Periods
within seven days of closing display Closing soon. Rows are sorted automatically by the latest start date, ascending, including registration periods. Status is calculated against the selected reference date independently of row order. The eight-row schedule is copied from the live InCIT 2026 reference, using only the latest dates, including the 10 October camera-ready update. The
reference year and simulated clock are explicitly labeled; 2027 dates remain pending.

### Chips

Research topic chips are informational labels, not buttons or filters. Preserve
that meaning unless an actual filtering workflow is introduced.

### Sponsors

Home includes a Sponsors section after Important Dates on cool paper, using the
shared centered heading. Nine white logo containers (three supplied logos repeated three times for preview)
form three rows capped at 768px
with 24px gaps; mobile stacks them at a 280px maximum with 16px gaps.
Containers are 116px tall with 20px padding. Logos preserve their aspect
ratios and use Next.js Image with a 180px display width and 72px height,
and contain fitting. Sponsor containers use 16px corners and an ink-tinted
shadow (0 4px 20px at 6%); fine-pointer hover lifts them 4px with a deeper
shadow (0 12px 28px at 12%). Reduced motion removes the lift and transitions.
A white Co-Organized by section follows, reserving a 180px-high dashed-outline
area for forthcoming logos, with a visible pending message. Local files and sources are documented in
`public/images/sponsors/README.md`. The 2027 relationship is marked pending.

### Navigation

The header combines the conference name, supplied College logo, and desktop
navigation. The College logo renders at 104px wide on desktop and 80px on mobile
to sit closer to the conference wordmark height. Dropdowns use disclosure buttons, expanded state, normal links,
and Escape-to-close behavior. About and Important Dates are reached through
the Hero actions and footer links; they are omitted from the header menu.
Home uses aria-current="location" at its section; secondary pages mark their group.
Hover and active underlines span the full navigation control, including dropdown arrows.
On smaller screens a Menu button reveals the same destinations.

The final top-navigation item is an icon-free red Registration pill linking to
`/registration`, the same destination as Registration in the Submissions menu.
It replaces Student Grant in the top navigation; Student Grant remains available
from the footer. Use the shadcn Button `registration` variant with `navigation` sizing:
a compact 40px height, 8px vertical and 20px horizontal padding,
full pill corners, semibold 14px text and a modest red-tinted shadow
(0 8px 20px at 18%). Hover deepens the red and lifts the action slightly;
reduced motion removes the lift and transition. At the mobile-navigation
breakpoint the pill fills the menu width with a 44px minimum touch height,
12px top and 4px bottom margin.
Keep focus visible. This separate action does not receive the imported-content
marker override; normal menu links retain their existing slate/ink tokens and
temporary review-marker behavior.

The footer groups the conference description, conference links, participant
links, and contact information. Contact data remains explicitly fictitious
until the owner supplies real details. Footer links and the mobile Menu now
have a 44px minimum clickable height. Footer focus uses cyan against ink.

### Committee groups

Committee extends the shared secondary-page header and existing centered
section-heading treatment. The current draft retains all 11 committee headings
from the ICSEC 2024 reference, with explicitly fictional names and affiliations.
Keep the red placeholder notice visible until confirmed members are supplied.

Use a plain bulleted member list with two columns on desktop and one at 600px
and below. Each member keeps the name and affiliation together on separate
lines: ink, medium-weight 16px names above slate 14px affiliations. Allow long
affiliations to wrap naturally. Centered headings, cyan rules and quiet section
dividers organize the groups without putting each person in a card.

### Static notes and Registration heading icons

Reusable shadcn Alert `note` and `warning` variants use a 3px left accent border,
small corners (`rounded-sm`, currently 6px), 16px vertical and 18px horizontal
padding, and 24px top spacing in Registration. Note uses the note-paper surface
with slate text/border and an Info icon. Warning uses the warning color roles
with a TriangleAlert icon. Their source paragraphs retain all authorized copy,
14px text and 1.85 line height. These static reading notes use `role="note"`
instead of announcing themselves as alerts. They remain distinct from the red
editorial draft notes and the existing cyan informational Alert.

Registration uses an explicit source-content presentation marker for the discount
note and online-participation exclusion warning; do not infer warning styling
by rewriting or matching prose. The owner explicitly replaced the discount-note
email and mailto destination with the existing example address
`incit2027@example.com`; treat it as sample contact data awaiting confirmation.
Other source wording remains preserved. Its four section headings pair the preserved
wording with UserRoundPen, Banknote, Gift and CreditCard Lucide icons. These
decorative icons are hidden from assistive technology, use the existing teal
heading accent, 24px dimensions and 1.8 stroke width, with a 12px text gap and
6px top offset. This heading-icon composition is specific to Registration.

### Reviewer list

Reviewers reuses Committee's plain bulleted member typography, keeping each
name and affiliation together on separate lines. Its current 85 fictional
entries follow the ICSEC 2024 list structure and remain explicitly marked as
placeholders. Use three columns on desktop, two at 900px and below, and one at
600px and below. Preserve the shared container, reading colors and seeded header.

### Source schedule tables and floor plans

Schedule presents five authorized ICSEC 2024 source tables without an introductory
paragraph: three daily programmes and two parallel-session tables. Retain source
wording, nested tables, row spans and column spans rather than summarizing cells
or flattening relationships. Only whitespace-only structural table text is
removed during rendering to keep valid markup; meaningful content remains.
The red reference note identifies the 2024 schedule as reference information
and the floor plans and PDF downloads as placeholders awaiting confirmed InCIT
2027 materials.

Use quiet paper table headers, ink 14px cell text, thin borders and comfortable
cell padding. Keep horizontal overflow inside each table container on narrow
screens. The daily programme Time column keeps a 190px minimum width; nested
tables retain enough width to preserve their relationships. Existing cyan/paper
tones distinguish Onsite and Online cells, with a written legend alongside the
color treatment.

Schedule, Abstract Booklet and Floor plan PDF controls use conference Buttons
with hero sizing. All three remain disabled, with no destination URLs, until
the owner supplies the files. Two noninteractive floor-plan placeholders use
the local `floor-plan-placeholder.svg` asset (1000 × 563), scale responsively
and preserve its aspect ratio. They do not open full images. Keep the written
placeholder notice visible; the retained source tables do not establish a
confirmed 2027 venue or programme.

### Imported-content navigation markers

The owner's red progress marker covers imported or populated draft destinations
and their parent menu groups, including Call for Papers, Reviewers and Schedule.
Use the existing draft-note color through the navigation's imported-content
state. Preserve normal navigation colors and interaction styling for other
destinations; this editorial marker does not change the conference palette.

### Venue reading pages and photo galleries

Accommodations, Transportation and Attractions extend the established Read
layout and centered seeded wave headers. Their nine place sections retain the
owner-authorized ICSEC 2024 text and 49 source photographs. Preserve that wording
verbatim; written red reference notes identify the 2024 materials and pending
2027 confirmation. Source contact and reservation links remain reading links,
and these pages use the existing imported-content navigation marker.

Use a quiet 220px contents column beside the article with a 48px gutter.
Sections pair a 74ch maximum prose measure with a photo gallery on desktop
(1.45fr / 1fr, 32px gap). Teal section headings and thin dividers preserve the
existing editorial hierarchy. At 1100px and below photos move above their prose;
at 900px and below the contents navigation moves above a single-column article.
At 600px and below outer padding and section gaps become smaller. Body copy
retains 16px Montserrat, slate text and 1.85 line height.

Gallery previews crop photographs to 4:3 with 12px corners. A horizontally
scrolling thumbnail strip uses 80 × 60px buttons, with a 2px teal outline on the
selected photo. Keep each thumbnail's accessible label and pressed state,
visible keyboard focus, and a written selected/total count. Photos remain
source assets with their recorded natural dimensions; avoid substituting
generated imagery or interpreting them as confirmed 2027 venue evidence.

Clicking or keyboard-activating a preview opens the existing dark Radix Dialog
image viewer. The expanded image preserves its natural aspect ratio within
the viewport. Its toolbar provides a selected/total count and 44px Previous,
Next and Close controls. Previous/Next and Left/Right arrow keys cycle through
the place's photographs, wrapping at the ends. Escape, outside click and Close
dismiss the viewer; focus returns to the preview. Preserve the accessible
gallery title, polite count updates and reduced-motion behavior. This extends
the existing overlay treatment without changing palette or typography tokens.

### Poster preview, overlay and PDF actions

Call for Papers uses the shared secondary header followed by a red placeholder
notice, a large responsive portrait image preview and a centered Download PDF
action below it. The preview itself opens the poster inside the website; there
is no separate View image button. The current image is a blank cool-paper
placeholder with an image symbol, and the downloadable file is an actual blank
PDF placeholder. Keep the red notice until the official image and PDF are supplied.

Use the shadcn Dialog poster variant for the image viewer: a dark ink overlay,
the image fitted within the viewport, and Download PDF and Close controls in
the upper-right toolbar. Clicking outside the viewer or pressing Escape closes
it. Preserve keyboard access, an accessible dialog title, visible focus and
focus return to the preview. Respect reduced motion and preserve the image's
aspect ratio on desktop and mobile.

The Download PDF action below the preview uses the conference Button variant;
the overlay controls use the secondary variant. All use hero sizing, with the
close control kept square. Both download links use the same PDF asset reference
(`/downloads/call-for-papers-placeholder.pdf` until replaced), rather than the
preview image. Update the image and PDF references together when official files
arrive; retain the existing palette, Montserrat and shared seeded waves.

## Do's and Don'ts

### Do:
- **Do** preserve the approved palette, font, and shared alignment.
- **Do** distinguish adjacent major sections with quiet background changes.
- **Do** add modest depth selectively where it helps grouping or interaction.
- **Do** use shadcn for standard controls and semantic color roles.
- **Do** use responsive optimized images and check keyboard and mobile behavior.
- **Do** label example content and replace it with owner-approved facts.

### Don't:
- **Don't** reproduce another conference site's design exactly.
- **Don't** use soft cyan as small text on white.
- **Don't** inherit tiny mockup labels as the default for essential information.
- **Don't** apply a prominent shadow to every component or nest floating cards.
- **Don't** turn Home's title breaks or hero wave into requirements for every page.
- **Don't** add login, payment processing, or internal registration workflows.


## Submission Guidelines

A Read surface using a cool paper introduction and a two-column editorial layout: sticky 260px contents navigation, 80px gutter and a 74ch article. Mobile places wrapping contents links above the article. Section headings, thin rules and a compact definition list organize requirements; a single paper checklist closes the page. Montserrat and existing ink/slate/paper colors remain unchanged. Draft status is explicit; the 2027 portal is disabled until supplied. Important Dates displays latest dates only and no countdown text beneath status badges.


Editorial draft, example, preview and pending-content annotations use the shared `draft-note` class: destructive red on light surfaces and light red (#FFB4AB) in the dark footer. Links and bold text inherit that color. Keep written draft labels alongside color; remove the annotation only once the related content is confirmed. New draft annotations must use this class. Normal conference copy and functional status badges retain their existing colors.

Submission Guidelines uses the source subtitle “Guidelines and submission portal for authors”. Do not add invented promotional lead text when extending conference pages.


Submission Guidelines now preserves every source content block and link from the 2026 Submission page, including eight policy/accepted-contribution sections. The page title is Paper Submission. Source headings and numbering remain verbatim. Original nested lists replace the summarized specs and invented checklist. Data lives in src/content/submission-guidelines.json, rendered using approved semantic elements only. A red draft notice identifies retained 2026 wording and the original 2026 portal link. The existing editorial layout and contents navigation remain.


## Shared content links and article hierarchy

Owner-directed rule: hyperlinks in reading content must visibly differ from ordinary
copy on every page. Use the global `--link` (#075DB5) and `--link-hover` (#034487)
tokens and a persistent underline. The `content-link` class is available for content
outside paragraph/list markup. Keep keyboard focus visible. Navigation retains its
navigation treatment, Button anchors retain their variant foreground/background,
and draft annotations retain red text, including their links. Never apply an
unlayered generic anchor color rule that overrides shadcn Button utilities.

Submission Guidelines uses teal `--heading-accent` (#12616B) for the article title,
an explicit separator before Submission, and slate for numbered policy headings.
The original email reminder is an informational shadcn Alert with a Mail icon,
a cool tinted surface, 1px cyan border and 12px corners. Its source wording is
unchanged; the notice is informational rather than a draft annotation.


### In-page navigation, external actions and shared secondary header

In-page contents is navigation: slate links without a persistent underline,
with ink and underline on hover/focus. Exclude all `nav` links from global prose
link styling. Blue underlined hyperlinks belong to reading content.

The shadcn Button `conference` variant and `hero` size match Home's primary
54px pill action, with ink/white, 28px horizontal padding, a modest ink shadow,
a fine upward hover motion (disabled for reduced motion), and an arrow icon.
Use this treatment for prominent external actions such as the submission portal.

All secondary pages share the owner's approved two-layer cyan/teal header.
Center the title and supplied description within the shared content container
on desktop and mobile. Titles have a centered 1100px maximum width; descriptions
have a centered 64ch maximum measure. Both balance wrapped lines. This alignment
applies to the wave header; articles and in-page navigation retain their own
reading alignment.
Submission retains the exact two owner-supplied SVG wave paths; every other route
uses a deterministic wave seeded by its page key, different between pages and
stable across refreshes. The shared gradient runs from cyan mixed with teal
(75% cyan) to cyan, with a translucent rear layer and an opaque front layer.
Each header uses a unique gradient identifier and a 1440 × 490 viewBox.

Use a light header surface (45% paper mixed with white). Place the wave crest
close below the supplied description as a header background. Titles without a
description keep the same compact composition. The red draft annotation lives
before the article title, outside the header. SVG is decorative, hidden from
assistive technology, and cannot intercept clicks.

The shared header uses 72px top padding (48px mobile), 120px bottom padding
and a 150px bottom-anchored SVG; pages without a description use 148px bottom
padding. Do not enlarge header whitespace to accommodate the artwork. Preserve
the approved palette and Montserrat throughout this extension.

### Source-content reading pages

Camera-Ready Instructions, Presentation Guidelines, Regular & Special Sessions
and Registration extend the existing editorial reading layout. Preserve the
authorized 2026 text, meaningful source headings, lists, images, tables and links
verbatim in their content data. Clearly written red draft and reference notes
identify the retained 2026 information and pending 2027 confirmation; these notes
stay in the article rather than the decorative header.

Keep prose in a 74ch reading measure alongside quiet contents navigation. On
desktop the contents column is sticky; at 900px and below it moves above the
article with wrapping links. Mobile retains comfortable body text, usable link
targets and reduced outer spacing. Contents links use the navigation treatment;
reading hyperlinks remain visibly blue and underlined, while draft-note links
retain red.

Registration allows the fee table to use the available article width while
keeping accompanying prose at 74ch. Preserve source row/column relationships
and keep any necessary table scrolling within the table rather than the page.
Prominent external service actions use the existing shadcn Button `conference`
variant and `hero` size. Registration's “Open Registration & Payment” action
currently renders as a disabled native button with its existing label and arrow,
without an anchor or payment URL, until the owner supplies the official
destination. This is separate from the active top-navigation link to the
Registration information page. Other source links remain explicitly provisional
until the owner confirms the 2027 destinations.
