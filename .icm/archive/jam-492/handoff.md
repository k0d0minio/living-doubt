# Handoff jam-492

## Next action

The operator tests `/experience` on the preview, ticks **Ready to merge** on https://github.com/k0d0minio/living-doubt/pull/4, then says `release JAM-492`.

## Criteria

- 7 sections in order, no repeated paragraph, no strong claim, medical note, title and description: met, `tests/experience.test.ts`, CI green at 9cd635f.
- 7 sections and the timeline (3 rounds of sauna 15 min, shower, ice bath 3 min, then shower and relax): met, checked by the agent `review-shots` on the local dev server at 9cd635f (2026-11-23).
- Photo crop, Max's text review: operator.

## How to test

Open `/experience` on the preview and read the seven sections down to the Book button. Check that neither photo shows the stove brand as the subject. Decide if the steam-over-stones photo is right next to the ice-bath text: the brief chose `images.stove` for this page, and the site has no ice-bath photo in the brief for it.

## Blockers

- Ready to merge is not ticked.

## Do not touch

- `lib/images.ts`, `components/`, `app/layout.tsx`, `lib/site.ts`: other tickets own them.
