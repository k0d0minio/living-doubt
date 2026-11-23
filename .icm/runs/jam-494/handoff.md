# Handoff jam-494

## Next action

When JAM-490 (#5) and JAM-493 (#7) are on `main`: merge `origin/main` into this branch, mark #2 ready (`gh pr ready 2`), run `ci-status.sh 2 --watch`, then check the criteria and show the gate card.

## How to test

Open `/faq` on the preview. Press Tab to reach a question and press Enter: the answer opens. Check the 13 questions and the 7 numbered house rules, then paste the page address into validator.schema.org: it shows one FAQPage with no errors.

## Criteria

- Not verified yet. The pull request is a draft: CI does not run on a draft, and the page does not build before its imports are on `main`.

## Blockers

- The page imports `components/Section.tsx` and `lib/site.ts` (`email`, `phone`, `whatsappUrl`, `hours`) of JAM-490 (#5), and `lib/prices.ts` (`single.minutes`, `groupHire.people`) of JAM-493 (#7). The pull request stays a draft until both are on `main`.

## Do not touch

- `lib/`: the FAQ and rules data stay in `app/faq/` (J, 2026-11-23).
