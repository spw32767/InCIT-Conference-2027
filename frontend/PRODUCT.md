# Product: InCIT 2027

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People interested in InCIT 2027 who need conference information, dates,
submission guidance, and instructions for participating.

## Product Purpose

Provide clear, dependable information about the International Conference on
Information Technology 2027 and direct visitors to the appropriate external
services when they need to register, submit materials, or pay.

## Operating Context

This repository contains the conference information website. The frontend is
Next.js App Router with TypeScript and Tailwind v4, managed in npm workspaces.
A separate backend scaffold exists, but its presence does not establish a
requirement for accounts, payments, or application workflows.

## Capabilities and Constraints

- The owner confirmed on 6 October 2026: this is an information website.
- There is no login, account system, payment processing, or internal registration flow.
- Registration and payment actions link to external websites. Destination URLs
  and any external submission service remain to be supplied by the owner.
- Home contains About and Important Dates sections. Navigation also provides
  conference, submission, programme and venue information, with a prominent
  Registration button linking to the existing Registration page. Student Grant
  remains available from the footer.
- Submission Guidelines, Camera-Ready Instructions, Presentation Guidelines, Regular & Special Sessions and Registration contain clearly labeled drafts copied from 2026. Committee contains all 11 headings from ICSEC 2024 with fictional names and affiliations. Call for Papers contains an image placeholder opened in a dismissible overlay and a downloadable placeholder PDF. Reviewers contains 85 fictional names and affiliations based on the ICSEC 2024 list structure. Schedule contains the ICSEC 2024 schedule tables, two floor-plan image placeholders and three disabled PDF download buttons awaiting files, marked for replacement with confirmed 2027 information. Accommodations, Transportation and Attractions preserve owner-supplied ICSEC 2024 reference text across nine locations, with 49 source photographs in accessible galleries; they are marked pending confirmation for 2027. The other 7 secondary pages currently contain Coming soon content. Home dates are labeled as an InCIT 2026 reference schedule; 2027 dates are pending confirmation. Contact details are explicitly marked examples. About is
  adapted from the 2026 conference introduction, with 2027 logistics pending.
- The official schedule, venue, committees, speakers, fees, submission rules,
  service links, and final contact details are not yet confirmed.
- Do not invent conference facts, endorsements, indexing claims, or real contacts.

## Brand Commitments

- Use the name InCIT 2027 and the full conference title with year 2027.
- Preserve the owner's approved palette and Montserrat font; visual values
  are recorded in DESIGN.md.
- The College of Computing, Khon Kaen University logo is supplied by the owner.
  A future InCIT logo may be added when supplied.
- Maintain a contemporary academic character: respectful, readable, spacious.
- Reference sites inform composition and content structure; do not reproduce
  another conference website exactly.

## Evidence on Hand

- Owner-supplied logo: `public/images/1663735797-CPlogo-final-01.png`.
- Generated illustrative technology globe: `public/images/incit-2027-hero.webp`;
  it is decoration, not evidence of a venue, partner, or programme.
- Self-hosted Montserrat and its SIL Open Font License: `src/app/fonts/`.
- Existing layout rationale: `../docs/home-design.md`.
- Owner confirmation of the information-only scope is recorded above.
- No final conference schedule, external service URLs, or contact details have
  been provided. Example content is not a source for future factual claims.

## Product Principles

1. Make conference information easy to find and read on desktop and mobile.
2. Separate confirmed facts from mockup content and pending announcements.
3. Link to external services for transactional tasks; describe the destination clearly.
4. Keep pages visually consistent as real content is introduced.
5. Preserve efficient image delivery and keyboard-accessible navigation.

## Editorial constraint

Use supplied or source-grounded conference copy. Do not invent slogans, promotional subtitles or filler. Preserve meaningful source descriptions when adapting layout; rewrite only for clarity or confirmed 2027 facts. Draft annotations remain visibly red until resolved.

## Owner-directed content workflow

The owner is responsible for development; another reviewer will review wording. Preserve authorized supplied source text verbatim: do not summarize, paraphrase, omit clauses, invent subtitles or add checklists unless explicitly requested. Design permission applies to UI composition only. When full external source text cannot be reproduced, request the owner-provided text/file rather than silently substituting rewritten copy.
