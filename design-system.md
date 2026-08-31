# Design system — tokens and styles in Figma

The home file for the question "what got built in Figma and where it came
from". Raw values are not duplicated here — the source of truth stays in
`design-system/*.pdf`. What is recorded here is the PDF → Figma mapping and
the decisions taken wherever the sources disagree or stay silent.

Built in https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled, page
**"Design System"** (a new page next to "Screens", the empty page originally
given as the working file).

## What was created

**Variables → collection "Colors"** (mode "Value"), 131 primitives, named after
the sections of Colors.pdf itself: `Primary/Base`, `Primary/Main`,
`Primary/Gray Blue`, `Primary/Error`, `Primary/Warning`,
`Primary/Information`, `Secondary/Light Yellow`, `Secondary/Orange`,
`Secondary/Fuchsia`, `Secondary/Blue`, `Secondary/Purple`, `Secondary/Gray`,
`Special/Gold`, `Special/Silver`, `Special/Bronze`, `Special/Overlay`. Scopes
are `[]`, so primitives stay hidden from the pickers — standard practice.

**Variables → collection "Semantic"** (mode "Dark"), 3 aliases — the only
semantic tokens that follow directly from Elements.pdf:
- `surface/background` → `Primary/Gray Blue/900` (#141523)
- `surface/container` → `Primary/Gray Blue/500` (#252539)
- `surface/elevated-border` → `Primary/Gray Blue/200` (#525266)

**Text styles** — 44 of them, Poppins, `Heading 2xl…xs` × `Text xl…xs` ×
Regular/Medium/SemiBold/Bold (the exact spelling comes from
`listAvailableFontsAsync`, so "SemiBold", not "Semibold"). Line height and
letter spacing (2%) are the exact px values from Typographies.pdf, not
percentages.

**Page "Design System"**, 3 sections: Colors (swatches for every variable),
Typography (specimens of all 44 styles), Elements (the background + container
composition exactly as in Elements.pdf, with the caption text taken from the
PDF itself).

## Gaps and contradictions in the sources — recorded, not glossed over

1. **Elements.pdf does not contain components or states**, contrary to how it
   is described in the project notes — only the 2 surface tokens above.
2. **Secondary/Gray in Colors.pdf duplicates Secondary/Blue byte for byte**
   (and Primary/Information too) — the same 11 hex values. This looks like a
   copy-paste inside the PDF rather than a transcription error on my side. It
   is preserved as the source has it — following the data literally — but it
   is worth confirming with Freecash before hand-off: as things stand, the
   real grey is indistinguishable from the blue in the system.

## Roundness / spacing / size scales — measured on freecash.com

`design-system/*.pdf` describes neither radii, nor spacing, nor control
heights. The source for those is the **live freecash.com site**, read through
computed styles rather than estimated by eye: 792 elements, frequency analysis
plus spot measurement of the controls.

The key finding: Freecash has **its own named radius scale**, visible in the
markup's class names — `rounded-01` = 4px, `rounded-02` = 8px, `rounded-07` =
32px, `rounded-full`. The variable naming in Figma mirrors it one to one.

- **Collection "Radius"**: `rounded/01…07` + `rounded/full`. The values
  01/02/07/full are observed on the site by class name; 03/04/05/06 are
  interpolated along the step (those px values appear on the site as arbitrary
  values). Every variable's description states whether it is observed or
  interpolated.
- **Collection "Spacing"**: `spacing/1…12` — a Tailwind scale on a 4px base,
  confirmed by the classes `gap-1`=4px … `gap-8`=32px. Plus `spacing/2-75` =
  11px (the real `py-2.75` on the small button; a dot is not allowed in a Figma
  variable name) and `spacing/5` = 20px (`px-5`, the horizontal padding on
  every button).
- **Collection "Size"**: `size/control-sm` 38, `control-md` 44, `control-lg`
  48 — the measured heights of Sign In, the primary CTA and the input. Plus
  `size/icon-sm|md|lg`.

The type scale from Typographies.pdf **was confirmed by the site**: 16px (447
elements), 14px (219), 18/12/20/10/24/32/48 — exactly `Text lg/md/xl/sm/xs`
and `Heading xs/sm/md/xl`.

## Corrections after checking against the site

1. **The buttons were pills — that was wrong.** The real button radius is 8px
   (`rounded-02`). `rounded/full` stays only where it genuinely occurs: badges,
   the active tab, the progress bar, the avatar.
2. **`text/on-primary` was bound to pure black** — measurement gives
   `rgb(20,21,35)` = #141523, i.e. `Primary/Gray Blue/900`. Fixed.
3. **The input background** is not `surface/container` (#252539) but #2F3043.
   Added the token `surface/input` → `Primary/Gray Blue/400`.
4. **Added** `action/secondary` (#525266 — the real secondary button) and
   `border/subtle` (white 10% — the real border on the language pill).
5. **The alpha channels from Colors.pdf were lost** on the first pass: the PDF
   explicitly writes `(10%)` on the 25 steps, `(80%)` on Gray Blue/Transparent
   and `60%` on Overlay, and I had stored them opaque. Fixed, and
   `Primary/Base/White 10%` and `Black 10%` were added, since the PDF lists
   them as separate styles.

## Component audit

A scripted audit for unbound values was run over the components. It started at
**48 violations** (25 paddings, 12 gaps, 6 fills, 3 radii, 2 strokes) and ended
at **10**, all ten being deliberate Apple/Google/Facebook brand colours,
documented in the component description.

Requirements every component now meets:
- fills and strokes → `Colors`/`Semantic` variables;
- radii → `rounded/*`, padding and gaps → `spacing/*`, heights → `size/*`;
- all text → text styles from Typographies.pdf (not one local font);
- **responsive behaviour**: the label inside a control is `FILL` and centered,
  the container takes a fixed height from a token with a `FILL`-ready width.
  Verified against the site: at 375px the height, radius and padding of the
  buttons do not change — only the width does. Long text in a Selector Card and
  an Alert row wraps and grows the height instead of being clipped;
- every set carries a description naming the source of its values.

## Page "Components" — 16 components, 77 variants

The table below reflects the state after the audit (see [audit.md](audit.md)).
Token collections: `Colors` (133), `Semantic` (20), `Rounded` (8), `Spacing`
(10), `Size` (9), `Border` (3).

| Component | Variants | Spec / source |
|---|---|---|
| Button | Size×Style×State, 30 | h 38/44, radius 8, padding-x 20, gap 8. States: Default/Pressed/Focus/Disabled/Loading |
| Social Button | Provider×State, 12 | h 44, radius 8. Brand colours are a documented departure |
| Input Field | State, 5 | h 48, radius 8, padding-x 16, background #2F3043. Default/Filled/Focused/Disabled/Error |
| Selector Card | State, 4 | radius 12, text wraps. Default/Selected/Focus/Disabled |
| Pill Selector | State, 4 | h 44, radius 8. Default/Selected/Focus/Disabled |
| Badge | Type, 3 | pill, hugs its content. Streak/Balance/Rating |
| **Offer Card** | Type, 2 | build brief §3.E. Guaranteed / Estimated, type scale from freecash.com |
| **Earnings Meter** | State, 2 | build brief §3.C / R5. Progress / Complete |
| **Coin Voice** | Mood, 2 | build brief §3.A. Neutral / Celebrating |
| **Stat Block** | Tone, 2 | build brief §3.F. Gold / Neutral |
| Progress Bar | Tone, 2 | h 8 (`size/track`), pill, FILL-ready |
| Tab Bar Item | State, 2 | active state gets a pill backing |
| Avatar | Size, 3 | radius bound to `rounded/full` instead of px/2 |
| Loader | 1 | 48 ring (`size/loader`), stroke `border/ring` |
| Tooltip | 1 | radius 12, the pointer lives inside the component |
| Alert Row | Severity, 2 | text wraps, icon aligned to the top |

The components in bold were built off the back of the audit, to meet the build
brief's requirements.

The "Design System" and "Components" pages sit on a dark background
(`surface/background`) — components and swatches are shown in the context they
actually work in, since states on 10% alpha are otherwise unreadable.

## Next

Ready for the onboarding screens to be assembled on top of these components and
tokens.
