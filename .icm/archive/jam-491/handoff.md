# Handoff jam-491

## Next action

The operator tests the preview, ticks **Ready to merge** on
https://github.com/k0d0minio/living-doubt/pull/3, then says `release JAM-491`.

## Criteria (2026-11-23, head 3f2fd65)

- Met, CI green: the photo list (5 entries, source, licence, placeholder); lint,
  typecheck, test. The prices test for the home import is on (no `todo`).
- Met, agent, on the local dev server (the preview needs a Vercel sign-in): the 8 sections
  in order; 2 Book buttons, both `BookButton`; 4 images through `next/image`, each with alt
  text; "from €72 / month" from `prices`; links to `/experience`, `/prices`, `/faq`; no map
  and no street address.
- Not verified: the layout at 375 px and 1280 px (see the review pack), and Lighthouse
  performance on mobile ≥ 90. The preview is behind Vercel sign-in, and a dev server
  gives no true score. The operator runs Lighthouse (mobile) on the preview.

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

- The Ready to merge gate.

## Do not touch

- The files of JAM-489, JAM-490, JAM-492, JAM-493, JAM-494 and JAM-495.
