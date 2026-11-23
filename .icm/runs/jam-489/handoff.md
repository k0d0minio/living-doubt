# Handoff jam-489

## Next action

The operator checks the choices in `spec.md` (fonts Jost and Inter, the favicon as SVG with an
apple icon PNG; the token names are fixed by J, 2026-11-23), ticks **Spec approved** on
https://github.com/k0d0minio/living-doubt/pull/1, then says `build JAM-489`.

## How to test

Open the preview. The browser tab shows the bronze Nourish mark. Open
`/brand/nourish-mark.svg` and `/brand/nourish-mark-mono.svg`: each shows the mark with no words.

## Blockers

- Spec approved is not ticked.

## Do not touch

- `app/layout.tsx`, the header, the footer, `components/`: JAM-490.
- `lib/images.ts` (JAM-491), `lib/prices.ts` (JAM-493), `lib/company.ts` (JAM-495).
