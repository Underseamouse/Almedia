# Freecash — component storybook

A living library of the onboarding components. Built from the
[“First screens”](https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled?node-id=155-4760)
mockup and the tokens in [../design-system.md](../design-system.md).

## Running it

Node was not present on this machine — it is installed locally in
`~/.local/node`, without sudo and without touching the system PATH.

```bash
export PATH="$HOME/.local/node/bin:$PATH"
cd projects/freecash-onboarding/storybook
npm run storybook
```

It opens at http://localhost:6006. Ctrl+C to stop.

A static build (the folder opens from disk or uploads anywhere):

```bash
npm run build-storybook
```

## What is inside

**Foundations** — five navigable sections instead of one long scroll:

| Section | What it shows |
|---|---|
| `Overview` | Where the values come from (PDF → Figma → `tokens.css` → the pages), the "a departure needs a reason" rule, and a map of the sections |
| `Color` | Raw scales · ~22 semantic aliases · the **computed WCAG contrast** of every text/surface pair |
| `Typography` | A live specimen of all 11 Poppins steps plus the 4-weight axis |
| `Space & Radius` | The named radius scale, the 4px spacing grid, control heights, stroke widths |
| `Motion` | Durations by travel distance, 4 curves, a live playground |

The important part: the Foundations pages **read their values live from
`tokens.css`** via `getComputedStyle` — not one hex is retyped by hand, so the
documentation cannot drift from the tokens. Contrast is **computed**, not
eyeballed. The helpers live in `src/tokens/_docs.tsx`. The motion tokens are
new; Figma has none.

**Effects** — four effects taken from references:

| Component | Source | What it does |
|---|---|---|
| `BreathingOrb` | thinking-orbs, `ring` mode | A ring of dots that breathes in place instead of rotating. Rotation reads as "working", breathing as "alive and waiting"; the splash lasts under a second, and it needs the second reading |
| `MonoOutline` | border-beam, `mono` variant | A hairline outline: `travel` / `pulse` / `bloom`. The monochrome is deliberately achromatic — it frames without pulling attention off the green |
| `PixelReveal` | img-fx | The image arrives as a grid of colours sampled from itself, shimmers, then dissolves diagonally. The wait reads as pulling into focus rather than as a substitution |
| `Ambient` | the project's own mockup | A dark base, blurred pools of light and grain. The grain is not decoration: large dark fills band on OLED, and noise breaks the gradient up |

**Components** — `Button`, `AwardStat` + `Laurel`, `EarningsMeter` +
`AnimatedNumber`, `SelectorCard`, `CoinVoice`, `OfferCard`, `GlassCard`,
`Logo`, plus the new ones for the final screen: `WalletPill` (gold rim and
halo, comp 214-9615) and `GameBoard` (a 5×4 board of 3D emoji, comp 221-9710).
Every story now carries a description with its "why".

**Onboarding cards** — the four value-prop carousel cards (Figma 283-5134 /
283-5260 / 291-7670 / 291-8062), ported **with their logic**, not as images. A
shared `OnboardingCard` shell (background + glow + caption) holds a different
hero in the middle of each:

| Card | Hero | Logic |
|---|---|---|
| Play on your own pace | `MiniMatch3` | A scripted 4×4 loop: swap → match-3 → a flash in the tile's colour → refill. Respects reduced motion |
| Watch your balance grow | `CoinStack` | The motion from the supplied Lottie, reproduced **parametrically: the coin count is a prop**, so the balance is customisable |
| Fast withdraw to | `PaymentLogos` | VISA/amazon/PayPal logos — **PNGs exported from Figma and committed** (Figma links live 7 days, and brands have to be exact) |
| Starter reward | `RewardBadge` | The €10 rosette, also a committed PNG; the amount is baked into the artwork because in onboarding it is a fixed number |

The card backgrounds are **sampled pixel-for-pixel from rendered frames** (each
is a colour fill under a `#d9d9d9` multiply scrim; the final composite was taken
rather than the stack reproduced). Assets live in `src/assets/onboarding/`,
alongside the source Lottie `coins-stack.lottie.json` kept as a reference.
There are individual cards, an "All four" gallery and a swipe carousel.

**Screens** — two screens from the flow:
- `Game screen` — the final visual (comp 181-8798), assembled **entirely from
  library parts** (Ambient · Logo · WalletPill · GameBoard · Button) on the
  token grid. Available as a full screen and as an Anatomy breakdown.
- `Trust cold-open` — the trust screen in three beats: splash → heading → proof
  and action. Autoplay, a step-by-step mode, and all three side by side.

## Decisions worth knowing

**The laurel wreath is drawn, not shipped as an asset** — it takes the gold
token, scales to any block and mirrors itself.

**The wreath does semantic work.** It borrows the grammar of an award, so the
number reads as granted by people rather than claimed by the app. That is
precisely the job of the first screen: the whole redesign exists because the
product's promises stopped being believed. Only verifiable public numbers go
inside the wreath.

**`OfferCard` separates the guarantee from the ceiling.** A guaranteed reward is
written flat ("40.00 zł"); an estimated one always carries "up to". The habit of
showing the ceiling as if it were the payout is the central defect the redesign
answers.

**Numbers in the meter tween and flip digit by digit at the same time.** The
tween shows how much the amount grew; flipping only the digits that changed
keeps the rest readable. Either one alone works worse: the tween alone looks
like a spreadsheet, the flip alone hides the scale.

**The button shrinks on press instead of changing colour.** On a dark theme a
colour shift under a finger is barely visible; a size shift is.

**Everything respects `prefers-reduced-motion`.** Animation is presentation, not
message.

## Real assets

`Logo` and `Laurel` are not approximations but vectors exported from Figma
(`120:4320` and `120:4182`) and turned into components by a script. The wreath
is 26 paths; redrawing it lost the taper toward the tip, and that taper is
exactly what reads as laurel rather than a random cluster of leaves.

The wreath's colour is `#FFF686` (Light Yellow 200), as in the mockup, and
**not** the gold token: gold went muddy against the green glow. It is
registered as `--laurel`.

Both icons recolour through props, so the logo can sit on a light background
with no redraw (`<Logo ink="var(--gb-900)" />`).

One placeholder remains — **the offer artwork**: generated SVG data URIs, so the
pixel sampler stays same-origin.

## Button — reconciled with the edited component

The values are taken from the component after its edits: every filled button
gained a hairline edge from its own family — dark green `Main/800` (`#067544`)
on primary, light grey `Gray Blue/100` (`#7d7d9e`) on secondary. On a near-black
background a flat fill has no edge and the shape drifts; the hairline gives it
one without turning the button into an outline.

The glow under primary is no longer a prop — it is part of the variant, as in
the component.

**Two inconsistencies inside the component itself**, which were not carried into
the code:

- `Size=Small, Style=Primary, State=Focus` has a `#067544` edge plus a shadow,
  while `Size=Medium` in the same state has a 2px `#01d676` edge and no shadow.
- `Size=Small, Style=Primary, State=Pressed` has an edge and a shadow;
  `Size=Medium` has neither.

It looks as though the edits did not reach every variant. The code follows one
rule — "focus = a 2px green ring, pressed = a fill change only" — for both
sizes. If the intent was different, the code and the component can both be
corrected.

A smaller point: on `Size=Medium, Style=Primary, State=Default` the layer text
reads "See how it works" rather than "Button label". A component's default is
better off with a neutral label.

## Next

The rest of the flow's screens are assembled from these components (see
[../flow.md](../flow.md)). The build order starts from the quiz: `SelectorCard`
+ `EarningsMeter` + `CoinVoice` already cover screens 04–10.
