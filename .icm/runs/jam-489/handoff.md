# Handoff jam-489

## Next action

The operator tests the preview, ticks **Ready to merge** on
https://github.com/k0d0minio/living-doubt/pull/1, then says `release JAM-489`.

## How to test

Open the preview. The browser tab shows the bronze Nourish mark on a near-black square.
Open `/brand/nourish-mark.svg`: it shows the mark with no words.

## Acceptance criteria

- Marks exist with no text element: met if CI is green (`tests/brand.test.ts`).
- Marks read at 32 px and 400 px: met (agent). Rendered at both sizes: the ring, the three
  strokes and the wave are separate shapes. The favicon uses a heavier stroke (64 in place
  of 40) on near-black for the 32 px size.
- Favicon in a browser tab: for the operator (`app/icon.svg`, `app/apple-icon.png`).
- Tokens in the Tailwind theme: met if CI is green.
- No hex colour outside the theme in `app/` and `components/`: met if CI is green.
- Screenshot not in the repo: met if CI is green.

## Notes

- The SVGs come from `.icm/runs/jam-489/mark.py` (geometry measured on the mockup). Run
  `python3 mark.py bronze|mono|icon <out>` to make them again.
- `font-display` and `font-body` show the fallback sans until JAM-490 puts
  `fontVariables` of `lib/fonts.ts` on `<html>` in `app/layout.tsx`.
- `app/globals.css` sets the body to `ink` and `cream` with `font-body`, and h1 to h3 to
  `font-display` weight 300.

## Blockers

- Ready to merge is not ticked.

## Do not touch

- `app/layout.tsx`, the header, the footer, `components/`: JAM-490.
- `lib/images.ts` (JAM-491), `lib/prices.ts` (JAM-493), `lib/company.ts` (JAM-495).
