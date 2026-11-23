# Handoff jam-493

## Next action

The operator answers Q1 on the HUD (or takes the default), ticks **Spec approved** on
https://github.com/k0d0minio/living-doubt/pull/7, then says `build JAM-493`.
Build runs `questions.sh JAM-493` first and puts the answer in `spec.md`.

## How to test

Open `/prices` on the preview. Compare each price and condition with `nourish 2.docx`.
Click a "Book" or "Buy" button: it goes to the contact route.

## Blockers

- Q1 waits for an answer. Spec approved is not ticked.
- Build imports `BookButton` and `Section` of JAM-490. The pull request stays a draft until JAM-490 is on `main`.

## Do not touch

- `lib/prices.ts` keeps the shape of the shared contract (J, 2026-11-23): `single`, `packs`, `memberships`, `giftCards`, `groupHire`. JAM-491 reads it. Extra fields are permitted.
- The files of JAM-490 and JAM-491 (layout, header, footer, `BookButton`, `Section`, `lib/site.ts`, `app/page.tsx`).
