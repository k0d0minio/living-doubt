# Handoff jam-491

## Next action

The operator ticks **Spec approved** on https://github.com/k0d0minio/living-doubt/pull/3,
then says `build JAM-491`.

Build notes (J, 2026-11-23, shared contract of JAM-489 to JAM-495): this run owns
`lib/images.ts` and the five photos in `public/images/` (hero = clay-banks, sauna = huum
r_3QoSxNWOw, stove = huum IsDUT74YEp4, steam = tylijura, iceBath = `image.png`). It uses
`BookButton`, `Section` and `site` of JAM-490, `prices` of JAM-493 and the Tailwind names
of JAM-489, and does not create their files. Keep the pull request a draft until those
files are on `main`, then rebase on `main`.

## How to test

Open the preview home page on a phone. Scroll from the top: the hero, the intro, the three
pillars, the session, the prices, the FAQ, the location and the last Book button.

## Blockers

- The Spec approved gate.

## Do not touch

- The files of JAM-489, JAM-490, JAM-492, JAM-493, JAM-494 and JAM-495.
