# Freecash — interactive onboarding prototype

A live prototype of the full Freecash onboarding flow in the NEW design
(card carousel). React + Vite. Clickable end to end.

**Demo:** https://underseamouse.github.io/Almedia/

> Study work: a design assignment on redesigning onboarding. The brand, game
> artwork and logos belong to their respective owners and are used only to
> present the design work, with no commercial purpose.

## Running it

```bash
npm install
npm run dev
```

## Building and publishing

```bash
npm run deploy
```

Builds and writes the result into `docs/` at the repository root — that is the
folder GitHub Pages serves (Settings → Pages → Deploy from a branch → `main` /
`/docs`). Build paths are relative (`base: './'`), so the project works the
same from a domain root and from a subpath like `/Almedia/`.

```bash
npm run single
```

Bundles everything into one self-contained `freecash-onboarding.html` (~4 MB):
CSS, JS and every image are inlined as `data:` URIs. It opens straight from
disk with no server — handy as an email attachment. The only external
dependency left is the Poppins webfont from Google Fonts.

## Flow

`loading → intro → [game · days · pay · gift] → signup → offers`

"Log in" on the intro jumps **straight to signup**, skipping onboarding.

The stepper counts **4 card steps** (25 / 50 / 75 / 100 %). Signup has no
stepper and no wallet — that is how the updated mockup 291-8361 has it. The
"Skip" control to the right of the progress bar jumps straight to signup.

| # | Screen | Figma | What happens |
|---|---|---|---|
| — | Loading | 283-4239 | Freecash mark + rotating green arc, 2 s |
| — | Intro | 283-4407 | unchanged: logo, banner carousel, Trustpilot |
| 1 | Game | 283-4649 | green glass, game avatar **40px** (283-5342), 4×4 match-3, coins fly to the wallet; the "Play on your own pace" caption is centered in the space left between the board and the card's bottom edge |
| 2 | Days | 291-7429 | blue glass, 3 Lottie coin stacks (Day 1→2→3, once) |
| 3 | Pay | 291-7706 | gold glass `rgba(255,240,122,.75)`, three **landscape** cards 69.65×63.55, group tilted 1.81°, cards at 0 / +6.12 / −7.26°, 14px gap (Figma's 7px sits between the *rotated* boxes) |
| 4 | Gift | 291-8284 | glass `rgba(51,51,77,.5)`, starfield (lighten 54%, PNG, full-bleed), medal **222px** (top 14), confetti (2 bursts), 3D tilt. The CTA reads **"Claim reward and Sign Up"** here rather than "Next" — this button leaves onboarding for signup, and the label should say so |
| — | Offers | 293-8540 | post-login screen: two offers (see below) |
| — | Signup | 291-8361 | **no stepper, no wallet**: game collage taken straight from the mockup (left −54, top 74, 510×742, lighten 20%), Apple/Google/Facebook, divider, Continue with email |

**The balance** lives in `App`: `0 → €4.00` (game) `→ €6.00` (streak)
`→ €16.00` (gift). The numbers match the mockups: €4 at the start of the days
screen, €16 (+€10) on gift and signup. After the gift, a shimmering "Ready to
be withdrawn" line slides out from under the chip.

## Offers screen (293-8540 → 293-11385)

Two offers, each a 354×130 hero + a row + a button, radius 18,
`rgba(255,255,255,.05)` background and border.

Header per 293-11385: the logo block is exactly **64** (32 logo + py-16), an
**8** gap, then content with p-24 — which puts the heading at **96** and the
first card at **156**, with **289** between cards (265 + 24). After the quiz
the heading becomes `Your starter offers!` and the subheading disappears:
there is nothing left to explain once the offers are open.

Game artwork — 296-11653 / 11654 / 11655
(`src/assets/offers/{dice,disney,candy}.jpg`).

- **Offer 1, "Disney solitaire"** (293-8635) — wrapped in `border-beam`
  (`colorVariant="sunset"`, `strength={1}`, `size="md"`): an orange-red glow
  travels along the border, lifted **above the card's own content**
  (`z-index: 6` plus `brightness={2.6}`, `saturation={1.6}`), otherwise it
  drowns in the bright artwork. Worth knowing: the library's selectors
  `[data-beam="…"][data-active]` have specificity (0,2,1) — an override must
  beat that, or it loses on source order. The image (293-8922) shows
  immediately; the pixel-loading effect was dropped here. The scroll indicator
  is hidden.
- **Offer 2, "Unlock more offers"** (293-8875) — the image **never** resolves:
  the Pixel Organic shader runs forever and reads as a permanent loading
  state, which backs up the copy "answer questions to unlock".

Libraries: `border-beam@1.3`, `img-fx@0.5` (+ peer `three`).

## The quiz (drawer)

"Answer now" on the locked card opens a **drawer** (Figma 293-11481): a
`rgba(0,0,0,.8)` scrim with 3.35 blur, a `#141a26` sheet with a 24 rounded
top, sliding up along the `--ease-drawer` curve.

The sheet lives on `.screen-layer` — **beside** `.offers`, not inside it.
`.offers` scrolls, and a drawer nested in it with `inset:0` would stretch to
the height of the content instead of reaching the bottom of the frame (it
"floated"). `top={82}` is the mockup's 142 minus the status bar; the drawer's
bottom coincides with the bottom of `.shell-middle`, which is why `.quiz`
carries no home-indicator padding of its own — it would be counted twice.

Step layout follows 293-10197, measured in the frame: header **72** (p-24,
gap-24), heading in its own block **84** (p-24, 24/500, lh 36), body **464**
(px-24 pb-16, gap-24; a `#2f3043` 50% divider comes first), CTA at **620**
(pb-24, 48 button). Options are 352 wide, **h-80**, gap-16, radius 12,
`surface/container` + `border/default`, text 16/500. "Prefer not to say" is
h-44, 16/600. The name field is 352×58 inside a `border-beam` outline (sunset,
`strength={1}`).

**Next stays disabled until the step is answered**: the input needs non-empty
text, a question needs a selected option. A `statement` has nothing to answer,
so its button is live. Skipping an optional question stays with "Prefer not to
say" — a deliberate separate action rather than a stray tap on a dead button.

Inside are **9 steps** (`screens/quizData.js`, Figma screens 293-8923 / 9944 /
10159 / 10311 / 10733 / 10863 / 10449 / 10574 / 10995):

1. `And who am I talking to?` — name input (close icon instead of a back arrow)
2. `Nice to meet you, {name}!` — interstitial
3. `What's your gender?`
4. `[Got it, {name}.] How old are you?`
5. `[Halfway there!] What kind of games do you enjoy most?`
6. `[Noted.] How often do you play mobile games?`
7. `[Almost there] Have you made in-app purchases…?`
8. `[Good to know.] What's your preferred way to cash out?`
9. `[Last one, {name}!] How much do you want to earn today?`

The name is interpolated into the eyebrows via `{name}`. Then comes
**`Analysing your answers`** with an orb (293-11151) for exactly **2 seconds**,
after which the drawer slides away and all three offers open on the offers
screen (293-11385): Disney solitaire €2,180 / Dice dreams €1,890 /
Candy crush €3,410.

> The drawer animates with **CSS animations**, not `transition` plus a state
> flag: a flag needs a second tick (rAF), which freezes on a hidden tab, and
> the drawer would then appear instantly with no slide.

## How it is built

- **`components/GlassCard.jsx`** — the 270×290 glass card, radius 24. Captions
  inside the cards carry no `text-shadow` (deliberately dropped). Recipe from
  Figma: `rgba(tint,.65)` fill + a `#d9d9d9` layer in `mix-blend-multiply` 80%
  + two blurred spheres in the corners + `noise` (SVG feTurbulence) +
  `backdrop-filter: blur`.
- **`components/CardDeck.jsx`** — the carousel: the active card sits centered,
  its neighbours offset by 294px and tilted ±4° as in the mockup, with a smooth
  slide between them.
- **`components/LottieCoins.jsx`** + `assets/coins-day{1,2,3}.json` — the coin
  stacks. The JSONs are **generated** from the supplied `icons8-coins.json`
  (a script pulled the coin shapes and gradients out of it) for three different
  counts: 2 / 4 / (3+6) coins. They play once, in sequence, then hold. The
  canvas is a square 192×192 with a step of 20, so the stacks fit a 60px box
  (23.8 / 36.3 / 48.8 px) and **never spill past** the icon bounds. There are no
  dotted connectors between days (deliberately dropped). All three stacks share
  **one baseline** (bottomCoinY=140 on a 192 canvas): previously each stack was
  centered on its own and they floated at different heights. Sparks anchor to
  the top of their own stack, the glow to the shared ground.
  **There is no render swap:** Lottie draws the coins the whole time. The warm
  glow (`--ease-out`, 260ms) comes up on the same frame the stack starts
  falling, and sparks rise during the fall staggered 340–640ms, then breathe
  very softly (3.2s). This used to cross-fade to a static SVG, which made the
  coins change size and the glow appear with a jolt.
- **`game/boardData.js` + `game/useGame.js`** — the original deterministic
  match-3 logic, moved to 4×4 (48 cell, 6 gap) with the new icons. Both scenes
  are precomputed: a clean match and **zero accidental triples** after gravity
  (verified by simulation).
- **`components/BorderBeam.jsx`** — a hand-rolled travelling border glow (the
  button on the gift card). The offers screen uses the `border-beam` library
  instead (sunset).
- **`components/TiltCard.jsx`** — card hover tilt after the Transitions.dev
  snippet: the outer `.t-tilt` (a flat hover area) writes `--tilt-rx/ry/gx/gy`,
  the inner `.t-tilt-card` does the tilting, `.t-tilt-glare` is the highlight
  trailing the cursor. Used on the medal, where the glare is masked by a soft
  circle — on a transparent PNG its rectangular frame would otherwise show.

## Audit (measured in the 402×874 frame)

| Element | Result | Figma |
|---|---|---|
| Header (back + progress + Skip) | 60 / 140 | 60 / 140 ✓ |
| Wallet chip | 140 / 184 | 140 / 184 ✓ |
| Card (all 4) | 242 / 532, 270×290, centered | 232 / 522, 270×290 |
| Heading | 578 / 650 | 578 ✓ |
| Subheading | 660 / 708 | 660 / 708 ✓ |
| Button | 756 / 804 | 756 / 804 ✓ |
| Signup: heading | 390 / 462 | ≈390 ✓ |

Progress bar: 25 / 50 / 75 / 100 %. Back walks every step down to the intro,
Skip leads to signup — both verified.

`useGame` does not spawn coins once the card has left the center (`aliveRef`) —
otherwise an early Next sent them flying in from beyond the left edge.

**The starfield on the gift card.** In the mockup the image is 287×271 against
a 270×290 card — it does not reach the bottom. Its background is an opaque dark
grey rather than pure black, so under `mix-blend-mode: lighten` its edge left a
visible rectangular seam, and the JPEG added blocking artifacts on the dark
areas. The prototype keeps a PNG and stretches it full-bleed: the lift is even
and there is no seam.

**The flow is continuous and restartable.** "Continue with email" on signup
calls `restart()`: `cardIdx`, `balance`, `plus` and `note` reset and the screen
returns to loading. State used to persist, so a second "Get started" opened the
last card (the medal) — fixed.

"Ready to be withdrawn" appears **only on the medal card**
(`phase === 'cards' && cardIdx === 3`); on every other screen, signup included,
the line tucks back under the chip. The travelling glow (BorderBeam) is gone
from the balance — the chip keeps only the soft halo from the mockup
(Ellipse 1).

## Deliberate departures from Figma

1. **Cards at 242 instead of 232** (+10px). *Why:* the mockup leaves only 22px
   between the chip and the game badge, while the "+€X" line — absent from the
   mockup but requested for the prototype — takes 24px. The 10px shift removes
   the overlap.
2. **Copy**: `Every task and action can turns into…` → `turns into…` (the
   source's grammar), and a narrow hyphen → `—`.
3. **The laurel wreaths** beside Trustpilot are dropped.
4. Each card gets **its own** heading and subheading (Figma updated): game →
   "Play games you actually enjoy…", days → "Play daily, keep your streak…",
   payouts → "Cash out your way…", gift → "Your starter reward is ready!".

## Animation audit

Run through the `animate` (authoring) and `improve-animations` (audit) skills.

| Severity | Category | Location | Finding | Status |
|---|---|---|---|---|
| MEDIUM | Accessibility | `InfiniteCarousel.css` | infinite scroll with no `prefers-reduced-motion` | **fixed** — it stops under reduced motion |
| LOW | Cohesion | `cards.css` | bounce curve inlined, bypassing the tokens | **fixed** — moved into `--ease-spring` |
| LOW | Performance | `StepHeader.css` | `transition: width` on the progress bar | **kept deliberately** — the fill has a rounded cap and a glow that `scaleX` would stretch; the transition runs 4 times per flow on one 8px element |
| — | Physicality | `Board.css` `sparkle-pop` | `scale(0)` at the start | **exempt** — this is a burst spark, not a UI element appearing: a particle is allowed to ignite from nothing |

Everything else is clean: no `transition: all`, no `ease-in`, every curve comes
from the tokens, only `transform`/`opacity` animate, and
`prefers-reduced-motion` is covered in every other file that animates.

## Three traps worth not hitting twice

**1. The balance counter on framer's `AnimatePresence`.** In this version the
exit never finished and nodes piled up: the DOM held three `.wallet-amount`
elements — `€0` at opacity 1 sitting over `€1.50` and `€4.00` at opacity 0. The
widget showed a stale amount even though the state was correct, which the
invisible `.wallet-sizer` made visible. The counter moved to CSS (`key={text}`
plus `@keyframes wallet-amount-in`), and framer is gone from `Wallet.jsx`
entirely.

**2. Lottie and a hidden tab.** Lottie runs on `requestAnimationFrame`, which
freezes while `document.hidden`. The `complete` event then never arrives and
the Day 1 → Day 2 → Day 3 chain stalls forever. `LottieCoins` adds a fallback
timer computed from the clip's duration (`op/fr`), so `onDone` fires exactly
once regardless of tab visibility.

**3. `overflow: hidden` on `.shell` still makes a scroll container.** The frame
has `scrollHeight` 1271 against `clientHeight` 874: the ambient glow sits at
`top: -212px` with a height of 1281 and creates hidden overflow. While the quiz
drawer lived inside `.offers` — a real scroller — that element absorbed
`scrollIntoView`. The moment the drawer moved out, `autoFocus` on the name
field scrolled `.shell` itself: the whole frame jumped up by 397px, the drawer
went off-screen, and from the outside it looked like "the quiz doesn't start".

Fixed from both ends: focus is now set manually with
`focus({ preventScroll: true })`, and `.shell` moved to `overflow: clip` —
unlike hidden, clip never creates a scroll container, so nothing can displace
the frame, neither focus nor `scrollIntoView`.

Which yields a rule for verifying: an element's `offsetTop` stays "correct"
even when an ancestor is scrolled — the displacement shows up only in
`getBoundingClientRect()` and in the ancestor's `scrollTop`. Check position
relative to `.frame`, not by `offsetTop`.
