# Handoff jam-494

## Next action

The operator ticks Spec approved on https://github.com/k0d0minio/living-doubt/pull/2, then says `build JAM-494`.

## How to test

Open `/faq` on the preview. Press Tab to reach a question and press Enter: the answer opens. Check the 13 questions and the 7 numbered house rules, then paste the page address into validator.schema.org: it shows one FAQPage with no errors.

## Blockers

- Spec approved is not ticked.
- Build imports `components/Section.tsx` and `lib/site.ts` (contact values) of JAM-490. The pull request stays a draft until JAM-490 is on `main`.

## Do not touch

- `lib/`: the FAQ and rules data stay in `app/faq/` (J, 2026-11-23).
