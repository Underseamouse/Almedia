# Design system audit

A pass with the `design-design-system` skill (Audit Mode): hardcoded values,
naming, duplicates, missing states, a11y. Checked against
`design-system/*.pdf`, against `freecash-onboarding-build-brief.md` and
against the live freecash.com.

What was built and where it came from is in
[design-system.md](design-system.md). This file records only the
discrepancies.

> **Status: every finding is closed.** Below is what was found and how it was
> fixed. The state after the fixes: 16 components, 77 variants, 0 unbound
> values — apart from 37 Apple/Google/Facebook brand colours, which are a
> deliberate departure. Both contrast failures are resolved and the 4 missing
> components are built.

---

## 1. Hardcoded values

Fills, strokes, radii, padding, gaps and heights are bound to variables. What
remained unbound:

| What | Where | Verdict |
|---|---|---|
| Apple/Google/Facebook brand colours (10 values) | Social Button | Deliberate. Required by the providers, recorded in the component description |
| `strokeWeight` 1 / 2 / 4 | every component with a stroke | **Gap.** There are no stroke-width tokens, so the values are typed in by hand |
| 8px track height | Progress Bar | **Gap.** No token, even though this is a systemic value |
| 48px ring + stroke 4 | Loader | **Gap.** The size does not come from `size/*` |
| 16×8 pointer | Tooltip | Acceptable — shape geometry, not a token |

**Recommendation:** create a `Border` collection (`border/thin` 1,
`border/thick` 2, `border/ring` 4) and add `size/track` 8 and `size/loader` 48.

## 2. Naming

| Problem | Detail |
|---|---|
| The `Radius` collection holds `rounded/*` variables | The only collection whose name does not match its token prefix (`Spacing`→`spacing/*` and `Size`→`size/*` both match). Rename the collection to `Rounded` |
| Casing in component names | `Input field` and `Alert row` are lowercase; `Selector Card`, `Tab Bar Item`, `Social Button`, `Pill Selector` and `Progress Bar` are Title Case. Normalise to Title Case |
| The `Style` property means different things | On Button it is visual hierarchy; on Badge a semantic type; on Alert row severity; on Progress Bar colour. Rename: Badge → `Type`, Alert row → `Severity`, Progress Bar → `Tone` |
| `Primary/Gray Blue/Transparent` | The name does not describe the value (#141523 @ 80%). That is how the PDF writes it (as "Trabsparent", with the typo). Left as the source has it — but worth confirming with Freecash |

## 3. Duplicates and near-duplicates

- **Pill Selector ≈ Button (Secondary/Outline)** — identical geometry (h44,
  radius 8, padding-x 20). The difference is semantic: a Button is an action, a
  Pill Selector is a sticky choice. Do not merge them, but the documentation
  needs a line on when to use which.
- **Selector Card ≈ Pill Selector** — both say "pick one option". Both genuinely
  exist in the app (cards in the quiz, pills on the offer screen), so both are
  justified; the rule is: 3 or more options, or long text → Card; a binary
  choice → Pill.
- **Badge (Rating) ≈ Tab Bar Item (Active)** — both are tinted pills. Different
  purposes, no collision.

## 4. Missing states

| Component | Has | Missing |
|---|---|---|
| Button | Default, Pressed, Disabled | **Hover**, **Focus**, **Loading** |
| Social Button | — | **Pressed**, **Disabled**, **Loading** (no states at all) |
| Input field | Default, Focused, Error | **Disabled**, **Filled** (a value vs a placeholder) |
| Selector Card | Default, Selected | **Disabled**, **Focus** |
| Pill Selector | Default, Selected | **Disabled**, **Focus** |
| Tab Bar Item | Active, Inactive | sufficient |
| Badge, Avatar, Tooltip, Alert row, Progress Bar, Loader | — | stateless by nature |

`Loading` on Button and Social Button is not cosmetic: in the build brief,
Screen 13 is built entirely on social buttons, and there is nothing to show
while the provider's response is pending.

## 5. Accessibility

Contrast was computed with alpha taken into account, over
`surface/background`.

**WCAG AA failures (text needs ≥4.5:1):**

| Pair | Ratio | Where | Fix |
|---|---|---|---|
| `status/error` on the background | **3.88** | Alert row Error, the error helper in Input | `Primary/Error/300` → **6.53** (5.40 on container). Error/400 does not qualify: 3.99 on container |
| `text/primary` on `Information/500` | **3.00** | Badge Rating | Make it tinted like the other two badges: `Information/25` background, `Information/400` text → **7.54**. Fixes the contrast and the inconsistency at once |

**Touch targets:** Button `Size=Small` is **38px** tall against a 44 minimum
(iOS HIG, WCAG 2.5.5). 9 variants. The value comes from freecash.com, so the
problem is inherited from the product — but for mobile onboarding it is a real
risk. Recommendation: keep Small for the web and use Medium (44) on mobile
screens.

**Not failures, but worth recording:**
- Disabled buttons at 3.08 / 3.78 — WCAG 1.4.3 exempts inactive controls, so
  this is left deliberately.
- Facebook at 4.27 — a brand colour, not ours to change.
- The remaining pairs are fine: `text/primary` 18.1, `text/secondary` 7.9,
  `action/primary` 9.4, `status/warning` 11.6.

**Other:** not one component has a `Focus` state, so keyboard navigation on the
web is undocumented. The icons are placeholder ellipses; assembling the screens
will need real icons with text labels, so that states are not distinguished by
colour alone.

## 6. Components missing against the build brief

`freecash-onboarding-build-brief.md` §3 calls for 6 global components. Two
exist:

| From the brief | Status |
|---|---|
| A. Coin Voice | **missing** — the narrator of the whole flow, present on nearly every screen |
| B. Progress bar | exists |
| C. Earnings Meter | **missing** — the core mechanic of R5 (progress toward the guaranteed reward) |
| D. Single-choice card | exists (Selector Card) |
| E. Offer card | **missing** — Screen 14, the central fix of the whole redesign |
| F. Stat block | **missing** — Screen 0, trust |

The Offer card spec was taken from freecash.com and is ready to build: radius
15 card, `surface/container` background, 87×87 preview at radius 6, title
12/600 white, subtitle 12/500 `text/secondary`, "UP TO" label 12/500
`text/secondary`, amount 16/600 white, fractional part 13/600, rating badge
10/700 on a gradient.

**Also spotted on the site and in the app, but not built:** Icon Button
(40×40), segmented tabs (Cashout / My Withdrawals), the bottom navigation
container, the screen header, the payout tile (PayPal $5 / $10), the FAQ
accordion, the modal.

## 7. Inconsistencies in Freecash itself (not mine — notes for the team)

- Alongside the named `rounded-01…07` scale, the site carries arbitrary `15px`,
  `6px`, `10px` and `30px` — including the 15px on the main offer card.
- `Secondary/Gray` in Colors.pdf repeats `Secondary/Blue` byte for byte.
- The bottom navigation label reads "Rewards" in one place and "Quests" in
  another (already recorded in the PRD, R13).
- The offer card's padding is set as `2.5vw` — a floating value outside the
  spacing scale.

---

## What was done off the back of the audit

**Accessibility — both failures closed**
- Added `text/error` → `Error/300`: **6.53:1** on the background, **5.40:1** on
  the container (it was 3.88). `Error/400` was tested and rejected — it gives
  3.99 on the container. `status/error` remains for fills and strokes, where
  text contrast does not apply.
- Added `text/warning` → `Warning/500` (11.56) and `status/info` →
  `Information/400`.
- Badge Rating moved to an `Information/25` tint with `status/info` text:
  **7.54:1** (it was 3.00). This also brought the badge in line with Streak and
  Balance.
- Touch target: `Size=Small` (38px) is left as it is — that is the real
  freecash.com value — but the component description now states plainly that it
  is for the web and that mobile screens should take `Medium` (44px).

**States — added**
- Button: added `Focus` (an outer `action/primary` ring) and `Loading` (a
  spinner in place of the label) → 30 variants. `Hover` was deliberately left
  out: the product is mobile-first, and Focus (keyboard, assistive tech)
  matters more than a pointer state.
- Social Button: from 0 states to `Default / Pressed / Disabled / Loading` × 3
  providers = 12 variants.
- Input Field: added `Filled` (a real value vs a placeholder) and `Disabled`
  → 5.
- Selector Card and Pill Selector: added `Focus` and `Disabled` → 4 each.

**The missing components — all four built**
- **Stat Block** (§3.F) — icon + number + caption, Tone = Gold / Neutral.
- **Offer Card** (§3.E) — Type = Guaranteed / Estimated. The type scale is taken
  from the real freecash.com card; the site's radii of 15 and 6 are normalised
  to `rounded/04` and `rounded/02`, because they fall outside Freecash's own
  scale.
- **Earnings Meter** (§3.C / R5) — State = Progress / Complete, formula
  `(answered / 7) × 40.00 zł`, with the description recording that the amount
  is fixed.
- **Coin Voice** (§3.A) — Mood = Neutral / Celebrating, built from the brand
  coin rather than a new mascot (reasoning in the description).

**Tokens and naming**
- New `Border` collection: `border/thin` 1, `border/thick` 2, `border/ring` 4 —
  34 stroke weights moved from numbers to tokens.
- Added `size/track` 8, `size/loader` 48, `size/thumb` 87.
- Collection `Radius` → **`Rounded`** (matching the `rounded/*` prefix).
- `Input field` → `Input Field`, `Alert row` → `Alert Row`.
- The `Style` property split by meaning: Badge → `Type`, Alert Row →
  `Severity`, Progress Bar → `Tone`.
- Duplicates were not merged: Selector Card and Pill Selector both genuinely
  exist in the app. Instead, the "when to use which" rule went into each
  component's description (3+ options or wrapping text → Card, binary choice →
  Pill).

**Left open (deliberately)**
- 37 unbound values — the Apple / Google / Facebook brand colours.
- The notes on Freecash's own system in section 7 — input for the product team,
  not an edit of ours.
- Components spotted on the site but outside the onboarding flow (FAQ
  accordion, modal, segmented tabs, payout tile) — out of scope for the
  assignment.
