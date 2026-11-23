# Handoff jam-491

## Next action

Wait until JAM-490 (`components/BookButton.tsx`, `components/Section.tsx`, `lib/site.ts`)
and JAM-493 (`lib/prices.ts`) are on `main`. Then: `git fetch origin && git merge
origin/main`, push, `gh pr ready 3`, `ci-status.sh 3 --watch`. Then check the `agent`
criteria on the preview (steps 8 to 12 of Build).

The pull request stays a draft until then (J, 2026-11-23): the page imports those files,
so typecheck and build fail without them.

## Criteria

- Code done for all criteria. Not verified yet: CI (draft, imports missing), the
  `agent` criteria on the preview, Lighthouse mobile ≥ 90.

## Build notes

- Photos: WebP in `public/images/`, 55 to 167 KB. `sauna` is cropped so the bucket with the
  HUUM mark is out of the frame. `stove` is 4:5, for JAM-492.
- `iceBath` (`image.png`) has no known source: its licence entry says to confirm it before
  go-live. See `findings.md`.
- The FAQ teaser has its own short answers, with the facts of JAM-494.

## How to test

Open the preview home page on a phone. Scroll from the top: the hero, the intro, the three
pillars, the session, the prices, the FAQ, the location and the last Book button.

## Blockers

- JAM-490 and JAM-493 not on `main`.

## Do not touch

- The files of JAM-489, JAM-490, JAM-492, JAM-493, JAM-494 and JAM-495.
