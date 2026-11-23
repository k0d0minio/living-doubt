# Spec: Brand: the Nourish mark as SVG, the favicon, and the design tokens

- ticket: JAM-489
- touches: public/brand/nourish-mark.svg, public/brand/nourish-mark-mono.svg, app/icon.svg, app/apple-icon.png, app/globals.css, lib/fonts.ts, tests/brand.test.ts
- complexity: standard

## Problem

The site has no clean vector version of the Nourish mark, no favicon and no design tokens.
The only source of the mark is a phone screenshot of a 3D bronze sign mockup. The shell
ticket JAM-490 and the pages need one mark and one set of tokens (colours, type, spacing).

## Proposed change

- A flat SVG redraw of the mark only: the open circle, the three flame/steam strokes and
  the wave. The SVG has no words. "NOURISH" and the tagline stay live text in a font.
- Two files: a bronze version for dark backgrounds, and a single-colour version that
  takes the colour of the text around it (`currentColor`).
- The browser tab shows the mark as the favicon. iOS gets an apple icon (the bronze mark
  on near-black, 180 × 180 px).
- The design tokens are in the Tailwind 4 theme (the `@theme` block of `app/globals.css`,
  which is the Tailwind config in version 4). The names are fixed, because JAM-490 to
  JAM-495 build against them (J, 2026-11-23):
  - colours: `ink` (near-black background), `ink-soft` (raised dark surface), `bronze`
    (accent), `wood` (warm neutral), `cream` (light text on dark);
  - font utilities: `font-display` (thin geometric sans for headings: Jost) and
    `font-body` (readable sans: Inter);
  - a type scale (`display`, `h1`, `h2`, `h3`, `label`, `body`, `small`) and the section
    spacing (`section`, `section-sm`).
- The two fonts load through `next/font/google` in `lib/fonts.ts`. That file exports the
  CSS variables. JAM-490 puts them on `<html>` in `app/layout.tsx`: this run does not
  touch the layout, the header, the footer, `components/` or a page.

## Acceptance criteria

- [ ] `public/brand/nourish-mark.svg` and `public/brand/nourish-mark-mono.svg` exist and have no `<text>` element. (verify: CI)
- [ ] Both marks read clearly at 32 px and at 400 px: the circle, the three strokes and the wave are separate shapes at both sizes. (verify: agent)
- [ ] The favicon shows the mark in a browser tab. (verify: operator)
- [ ] The colours `ink`, `ink-soft`, `bronze`, `wood`, `cream`, the fonts `display` and `body`, the type scale and the section spacing are in the Tailwind theme of `app/globals.css`. (verify: CI)
- [ ] No file in `app/` or `components/` hard-codes a hex colour outside the theme block. (verify: CI)
- [ ] The screenshot of the mockup is not in the repo. (verify: CI)

## Out of scope

- The header, the footer, `app/layout.tsx` and `components/`: JAM-490 (the shell). JAM-490 applies the font variables of `lib/fonts.ts`.
- A change to the home page.
- `lib/images.ts`, `lib/prices.ts`, `lib/company.ts`: JAM-491, JAM-493, JAM-495.
- The words of the logo as an SVG or an image.
- Photos, copy and the pages: the other v1 tickets.
- A token story page or a style guide page.
- An Open Graph image.

## Open questions

- none
