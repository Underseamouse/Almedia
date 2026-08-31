# Research — moodboard and discovery

The home file for the question "where did the decisions in the spec and build
brief come from". The requirements and the copy are not duplicated here — the
source of truth stays in `freecash-onboarding-prd.md`,
`freecash-onboarding-spec.md` and `freecash-onboarding-build-brief.md`, which
live outside this repository.

Source: the moodboard Figma file —
https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled (page
"Moodboard", node `0:1`).

---

## How the moodboard is organised

One page, two kinds of content:

- 15 frames of third-party app onboardings (style and flow references) — page
  "Moodboard" (`0:1`).
- A separate "Discovery" page (`42:384`) → Section 1 (`42:385`) — real
  screenshots of the current Freecash onboarding with sticky notes recording
  the findings.
- An empty "Screens" page (`42:383`) — the node picked as the working file;
  the target place for the design system and the screens.

## Discovery vs PRD: checked, no discrepancies

Every finding from the sticky notes in Section 1 already carries over verbatim
into `freecash-onboarding-prd.md` (section 3, Problem statement). The key ones:

- "New users are dropped into a black box for their entire first session…" →
  Problem #1.
- The note about Q7/Q8 (the promise to "find the best offer to reach your
  200+ zł goal" while the answer is always the same Disney Solitaire) →
  Problem #2, verbatim.
- "Post-onboarding offer list artificially shows 1 offer…" → consistent with R8.
- "Whole onboarding session takes 80–90 sec", "Generic ABCD questionnaire —
  functional but forgettable, no emotional investment", "No possible future
  earnings mentioned", "The motivating moment is sequenced too late" —
  background context, none of it contradicting the PRD.

The thesis note that sets the direction for the whole redesign (written by
Said Isaev):

> The onboarding doesn't feel friendly, doesn't feel gamified enough. I think
> it can be improved to bring more emotions to the onboarding, introduce user
> to the product and bring more emotions at the same time.

Conclusion: the PRD, spec and build brief reflect the discovery accurately, so
all three can be relied on without re-checking against the moodboard.

## Patterns drawn from the references

The references fall into two clusters. Freecash conceptually belongs to the
first, which is itself an argument for the decisions already taken in the spec
and build brief — they match working analogues rather than personal taste:

- **Cluster A — quiz → value → ask afterwards** (Cal AI, Duolingo, stoic.,
  Gentler Streak, How We Feel, Ahead).
- **Cluster B — utility/business, ask immediately** (Slack, Shopify, Cash App,
  TikTok, Withings Health Mate, Shop, Arc Search, Any Distance) — not relevant
  to Freecash.

| # | Pattern | Source (node) | Where it already shows up here |
|---|---|---|---|
| 1 | Continuous progress (a thin bar that fills on every answer and never resets between screens) — not dots | Duolingo `37:109`, stoic. `38:296`, Cal AI `37:2` | Progress bar + Earnings Meter, build brief §3.B/C |
| 2 | A mascot voice: introduces itself by name → immediately asks for the user's name → holds that voice to the end of the flow | Gentler Streak `38:358` ("…and who are you?"), Duolingo `37:109`, Ahead `38:376` | Coin Voice, spec.md §1 + build brief §3.A |
| 3 | A trust cold-open with no ask at all on the first screen, then a stack of verified stats (icon + number + caption) | Ahead `38:376` | Screen 0 + Stat block, build brief §5/§3.F |
| 4 | A real, not decorative, payoff for the quiz — the plan or offer must visibly rest on the answers | Cal AI `37:2` (generates a personal plan with numbers) | The benchmark for Screen 14, Matched Offers — if the offers are not genuinely personalised, it will show against references of this calibre |
| 5 | A reward-ready screen before the hard commitment (payment or account) | Cal AI `37:2`, stoic. `38:296` | Screen 12, Reward Unlocked |
| 6 | A micro-gesture as investment before the start (draw a checkmark — "I promise myself") | Ahead `38:376` | Not in the current build brief — a possible reinforcement, not a requirement |

## Open question

Pattern 4 (real personalisation) is the weakest point of R8 without backend
data (see PRD §8, item 4: matching logic depth). If the backend cannot support
honest matching by the case-study deadline, keep the fallback copy from build
brief Screen 14 ("Your starter offer, {name}" instead of "Picked for your
goal") — otherwise, against Cal AI-level references, the gap between the
promise and the fact will be exactly as visible as it is in the original
Freecash.
