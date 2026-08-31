# Freecash — Onboarding Redesign

Design assignment: redesign of the Freecash mobile app, focused on the
onboarding flow.

**→ [Live prototype](https://underseamouse.github.io/Almedia/)** — clickable
end to end, from the splash screen to the unlocked offers.

**→ [Component storybook](https://underseamouse.github.io/Almedia/storybook/)** —
foundations, effects and components in isolation, with computed contrast.

> Study work. The Freecash brand, logos and game artwork belong to their
> respective owners and appear here only to present the design work,
> with no commercial purpose.

## Contents

| | |
|---|---|
| [research.md](research.md) | What is wrong with the current onboarding, and which patterns the redesign leans on |
| [flow.md](flow.md) | The whole flow: screens, branches, what changes against the original and why |
| [design-system.md](design-system.md) | Freecash design system mapped to tokens: color, type, radii, spacing |
| [screens.md](screens.md) | Screen-by-screen breakdown — composition, hierarchy, contrast |
| [audit.md](audit.md) | Audit: measurements against the mockups, discrepancies found |
| [prototype/](prototype/) | The live prototype — React + Vite sources, plus the reasoning behind the technical calls |
| [storybook/](storybook/) | Components in isolation — [published](https://underseamouse.github.io/Almedia/storybook/) |
| [screen/](screen/) | Early static mockup of the first screen |

## The prototype

The complete onboarding flow, built from the mockups and verified by
measurement inside the 402×874 frame:

```
loading → intro → 4 cards (match-3, streak, payouts, gift)
        → signup → offers → quiz drawer → offers unlocked
```

Running it and building it: [prototype/README.md](prototype/README.md). That
file also covers the animation decisions and three traps worth hitting once
rather than three times.

Published through GitHub Pages from `docs/` (Settings → Pages → Deploy from a
branch → `main` / `/docs`). Two things are served from there:

```bash
cd prototype  && npm run deploy   # → docs/            the prototype
cd storybook  && npm run deploy   # → docs/storybook/  the component library
```

The two are independent: rebuilding the prototype leaves `docs/storybook`
alone, and vice versa.

## Principle

Every decision here comes with its "why". A rule says what to do, a principle
says what for. Departures from the design system are recorded with a reason
rather than made silently.
