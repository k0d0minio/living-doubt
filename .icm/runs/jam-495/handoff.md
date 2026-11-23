# Handoff jam-495

## Next action

The operator answers Q1 on the HUD card, reads the spec and ticks Spec approved on
https://github.com/k0d0minio/living-doubt/pull/6. Then the operator says `build JAM-495`.

## How to test

Open `/privacy` on the preview and read the controller, the data, the rights and the contact.
Look at the footer of each page for the company identity and the complaints-book logo, and
open the logo link.

## Blockers

- Q1 waits for an answer (who adds the Livro de Reclamações logo file).
- Spec approved is not ticked.
- Build needs JAM-490 on `main` (the footer, `lib/site.ts`, `components/Section.tsx`).

## Do not touch

- The footer and the layout: they belong to JAM-490.
