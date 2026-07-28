## Goal

Recreate the PMU Student Affairs Best Practices Seminar site — same visual language as the reference screenshots (deep navy `#0d1b3d`, gold accent `#c9a24a`, white surfaces, serif display + clean sans body) — pixel-tight and polished. Keep the section structure familiar, but redesign the **Schedule** section for clarity and add a new **Featured Seminar** section built from the uploaded Academic Advising PPTX/outline.

## Design system (src/styles.css)

- Palette tokens: `--navy 0d1b3d`, `--navy-deep 081229`, `--gold c9a24a`, `--gold-soft e8c77a`, `--cream faf8f3`, `--ink 1a1a1a`, `--muted 6b7280`, `--surface ffffff`.
- Fonts via `<link>` in `__root.tsx` head: **Playfair Display** (headings) + **Inter** (body). Small-caps eyebrow style with gold diamond divider (matching the reference).
- Reusable primitives: section wrapper w/ consistent vertical rhythm (py-20 md:py-28), section eyebrow + underlined title, gold diamond divider, card w/ soft shadow + 1px border.

## Route structure

Single-page marketing site at `/` with anchor nav. Sticky top nav with logo lockup (PMU + Student Affairs) and links: About, Schedule, Presenters, Featured Seminar, Why Attend, Register. Update `__root.tsx` head with real title/description/OG.

## Sections (top to bottom on `/`)

1. **Hero** — Navy background, gold eyebrow "PMU Student Affairs", Playfair headline "Best Practices Seminar 2025", subhead, dates (27–29 May 2025) + venue (PMU Auditorium), gold CTA "Register" + ghost CTA "View Schedule". Subtle geometric gold accent.
2. **About the Seminar** — Two-column: short mission paragraph + 3 stat pills (3 Days, 7 Departments, 20+ Sessions).
3. **Schedule** (redesigned, simpler than the reference mock)
  - Three horizontal day tabs (Day 1 / 2 / 3 with date).
  - Below tabs: a single clean vertical list of session cards for the active day — no left sidebar, no nested accordions. Each card: colored department icon chip • title + one-line description • time + location on the right • subtle "View details" chevron that expands the card inline to reveal presenter + objectives.
  - Uses framer-motion for tab crossfade and card expand.
4. **Presenters** — Responsive grid (2/3/4/7 columns responsive) of presenter cards mirroring screenshot 2: circular avatar with a colored icon badge floating above, department label, presenter name (or "TBA"), "Learn more" link. Clicking opens a shadcn Dialog with bio.
5. **Featured Seminar — Academic Advising** (NEW, from the uploaded file)
  - Full-bleed navy band, gold eyebrow "Featured Session".
  - Title: "Smart Academic Advising: Data, Automation, and Strategic Student Success Interventions".
  - Two-column layout: left = concise description (trimmed from the outline, ~3 short paragraphs); right = card with Presenter (Maged Soliman, MBA — Academic Advisor), time/place TBA, and two buttons: **Download Slides (.pptx)** and **View Outline (PDF)**.
  - Below: three compact sub-cards — **Objectives** (bulleted, 4–5 items), **Itinerary** (numbered, 8 items), **About the Presenter** (short bio).
  - PPTX served from `/public/academic-advising-best-practices.pptx` (copied from the upload). PDF generated from the outline text via a small build-time script → `/public/academic-advising-outline.pdf`.
6. **Why Attend** — 5-column icon row mirroring screenshot 2 (Share Best Practices, Enhance Student Success, Strengthen Collaboration, Drive Innovation, Achieve Excellence) on navy background with hairline gold circle icons.
7. **Register / CTA** — Cream band, headline + gold button linking to a mailto or form anchor. Include venue block with PMU Auditorium + dates.
8. **Footer** — Simple navy footer: PMU wordmark, contact line, copyright.

## Data model (in-file constants, no backend)

- `src/data/schedule.ts` — array of 3 days, each with sessions `{ dept, title, description, time, location, presenter, objectives[] }`. Seed Day 1 from screenshot 1; Days 2–3 placeholder-populated across the 7 departments (Academic Advising, Campus Life, Admissions, Career Services, Counseling, PTCCE, Registration).
- `src/data/presenters.ts` — 7 entries: department, icon, name (mostly "TBA", "Allan Joseph Bagoaisan" for Registration, "Maged Soliman" for Academic Advising), short bio.
- `src/data/featured-seminar.ts` — structured content pulled from the uploaded outline.

## Files to create/modify

- Modify: `src/routes/__root.tsx` (head metadata, Google Fonts link), `src/routes/index.tsx` (compose sections), `src/styles.css` (tokens + fonts).
- Create: `src/components/site/Nav.tsx`, `Hero.tsx`, `About.tsx`, `Schedule.tsx`, `Presenters.tsx`, `PresenterDialog.tsx`, `FeaturedSeminar.tsx`, `WhyAttend.tsx`, `RegisterCTA.tsx`, `Footer.tsx`, `SectionHeader.tsx`, `DeptIcon.tsx`.
- Data files under `src/data/`.
- Public assets: copy uploaded PPTX to `public/`, generate outline PDF to `public/`.
- Install: `framer-motion` (animations). shadcn Tabs, Dialog, Button, Card are already available.

## Technical notes

- No backend / Cloud needed; entirely static content.
- Framer-motion only used for tab and card transitions — restrained.
- All colors via CSS tokens; no hardcoded hex in components.
- Presenter avatars: use generated placeholder portraits only for the two named presenters; "TBA" cards use a neutral silhouette. Keep it minimal — no stock-photo lineup unless requested.

## Open question (I'll default if you don't answer)

Presenter avatars: generate stylized illustrated portraits for the 2 named presenters, or keep all cards as neutral silhouette + initials? **Default: neutral silhouette + initials** (safer, avoids fabricating likenesses). - you can keep neutral  
  
Main project info - only frontend design focused no backend or functionality needed