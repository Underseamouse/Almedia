# Hi-fi screens

The final screens are assembled on the **"Screens"** page in
https://www.figma.com/design/fJgAaPHYv49oF8MK6uMmcU/Untitled.

Structure and copy come from [flow.md](flow.md) and the lo-fi pass. Tokens and
components come from [design-system.md](design-system.md).

---

## 00 — Trust cold-open

The first screen of the session. Its job is to establish trust **before** any
ask (PRD R1, pattern 3 from [research.md](research.md), Ahead as the
reference).

### Composition

Hierarchy top to bottom: who we are → what we promise → what proves it → what
to do → the fallback path. One focus, one action.

- **Logo** — compact, at the top, not competing with the heading.
- **Heading** `Heading lg/Bold` 40/60. Two lines: "Real people." in white,
  "Real payouts." in the brand green. The colour carries meaning: the subject
  stays neutral, the payout promise is what gets emphasised.
- **Subheading** `Text lg/Regular`, `text/secondary` — takes the grandeur out
  of the heading and names the source of the rating.
- **Two glass cards** — the proof. Verifiable numbers only (Trustpilot 4.7/5
  from 242,605 reviews, 10M+ downloads), as R1 requires.
- **Button** — an instance of the `Button` component (Size=Medium,
  Style=Primary).
- **Log-in link** — for the returning user; the tap target is brought up
  to 44px.

### Light

Three blurred pools drawn from the palette rather than a decorative gradient:
`Main/500` at the top (behind the logo and heading), `Information/500` in the
middle (under the cards — it gives the glass something to refract), `Main/500`
at the bottom under the button (tying the CTA into the composition). All of
them at 0.12–0.22 opacity, so the dark `surface/background` base stays
dominant, as it is in the original app.

### Contrast

| Element | Ratio | AA |
|---|---|---|
| Heading, white | 18.08 | ✓ |
| Heading, green | 9.37 | ✓ |
| Subheading | 7.94 | ✓ |
| "Log in" | 9.37 | ✓ |

### Deliberate departures from the system

1. **The glass cards use a gradient fill and a gradient edge.** The system's
   tokens describe solid colours only; a glass effect cannot be expressed in
   them. The values: white 14% → 4.5% (fill), white 34% → 5% (edge, catching
   light along the top). Radius, padding and the typography inside the cards
   are all tokens.
2. **The logo is a placeholder.** It is assembled from shapes and its 6%
   tracking falls outside the type ramp. The layer is named accordingly:
   replace with the real brand asset.
3. **The shadow under the button** is a green glow at 30%. An effect, not a
   colour token.

Everything else — fills, strokes, radii, spacing, heights, text styles — is
bound to variables and styles.

### Open

- The "Log in" link points at a sign-in screen that does not exist in the flow
  (see the open question in [flow.md](flow.md)).
- The type ramp gives a line height of 1.5 at every size. For 40px display text
  that reads noticeably airy; current practice is tighter. Left as the system
  has it for now, but it is a candidate to raise with the Freecash team.
