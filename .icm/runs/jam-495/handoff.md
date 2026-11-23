# Handoff jam-495

## Next action

The operator answers Q1 on the HUD card, reads the spec and ticks Spec approved on
https://github.com/k0d0minio/living-doubt/pull/6. Then the operator says `build JAM-495`.

## How to test

Open `/privacy` on the preview and read the controller, the data, the rights and the contact.
Look at the footer of each page for the company identity and the complaints-book logo, and
open the logo link.

## Blockers

- The footer logo: `components/Footer.tsx` comes from JAM-490 and is not on `main`. When JAM-490 is on `main`, merge `main` into this branch and change the footer link "Livro de Reclamações" to show `complaintsBook.logo` from `lib/legal.ts` (J, chat, 2026-11-23: "add it to the footer").
- This run depends on JAM-490 only (`lib/company.ts`, `lib/site.ts`, `components/Section.tsx`, `components/Footer.tsx`). JAM-490 does not depend on this run.

- Build needs JAM-490 on `main` (the footer, `lib/site.ts`, `components/Section.tsx`).

## Do not touch

- The footer and the layout: they belong to JAM-490.
