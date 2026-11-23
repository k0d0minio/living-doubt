# Handoff jam-492

## Next action

When JAM-490 (`components/Section.tsx`, `components/BookButton.tsx`) and JAM-491
(`lib/images.ts`) are on `main`: merge `origin/main` into this branch (no rebase), push,
`gh pr ready 4`, then `ci-status.sh 4 --watch`. On green, check the `agent` criteria on the
preview, set `phase: release` and show the gate card.

## Criteria

- 7 sections in order, no repeated paragraph, no strong claim, medical note, title and description: `tests/experience.test.ts`. Not proven: CI has not run (the pull request is a draft).
- Timeline of three rounds, then shower and relax: in the code. Not checked on the preview.

## How to test

Open `/experience` on the preview. Read the seven sections down to the Book button, and check that the photos do not show the stove brand as the subject. Max reads the text on UAT.

## Blockers

- `Section`, `BookButton` (JAM-490) and `images` (JAM-491) are not on `main`. The build fails until they are.

## Do not touch

- `lib/images.ts`, `components/`, `app/layout.tsx`, `lib/site.ts`: other tickets own them.
