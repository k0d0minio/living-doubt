# Spec: Brand: the Nourish mark as SVG, the favicon, and the design tokens

- ticket: JAM-489
- touches: public/brand/nourish-mark.svg, public/brand/nourish-mark-mono.svg, app/icon.svg, app/apple-icon.png, app/globals.css, app/layout.tsx, app/page.tsx, tests/brand.test.ts
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
  which is the Tailwind config in version 4):
  - colours: near-black `ink`, bronze `bronze` (with a light and a dark step), warm wood
    `wood`, light text `bone`;
  - fonts through `next/font/google`: Jost (thin geometric sans, near to the wordmark) for
    headings, Inter for body text;
  - a type scale (`display`, `h1`, `h2`, `h3`, `label`, `body`, `small`) and the section
    spacing (`section`, `section-sm`).
- The placeholder home page uses the tokens: the mark, the name in the heading font, the
  tagline as an uppercase label. It has no hex colour.

## Acceptance criteria

- [ ] `public/brand/nourish-mark.svg` and `public/brand/nourish-mark-mono.svg` exist and have no `<text>` element. (verify: CI)
- [ ] Both marks read clearly at 32 px and at 400 px: the circle, the three strokes and the wave are separate shapes at both sizes. (verify: agent)
- [ ] The favicon shows the mark in a browser tab. (verify: operator)
- [ ] The colour, font, type-scale and spacing tokens are in the Tailwind theme of `app/globals.css`. (verify: CI)
- [ ] No file in `app/` or `components/` hard-codes a hex colour outside the theme block. (verify: CI)
- [ ] The screenshot of the mockup is not in the repo. (verify: CI)

## Out of scope

- The header, the footer and the page layout: JAM-490 (the shell).
- The words of the logo as an SVG or an image.
- Photos, copy and the pages: the other v1 tickets.
- A token story page or a style guide page.
- An Open Graph image.

## Open questions

- none
