# Handoff jam-493

## Next action

When JAM-490 (PR #5) is on `main`: merge `origin/main` into this branch, `gh pr ready 7`,
then `ci-status.sh 7 --watch` one time. On green, check the agent criteria on the preview,
set `phase: release`, and show the gate card.

## Done in Build

- `lib/prices.ts`: the contract shape (`single`, `packs`, `memberships`, `giftCards`,
  `groupHire`), plus `membershipConditions`, `giftAmounts`, `giftValidMonths`,
  `cancelHours` and the format function `eur()` (`€110`).
- `app/prices/page.tsx`: the six sections of the spec. Each button is `BookButton`.
- `tests/prices.test.ts`: the values, the import of `@/lib/prices` by the prices page, the
  home check as `todo` (Q1, J in chat 2026-11-23: the default), and no payment code.
- Criteria: none verified yet. A draft runs no CI, and the page imports files of JAM-490.

## How to test

Open `/prices` on the preview. Compare each price and condition with `nourish 2.docx`.
Click a "Book" or "Buy" button: it goes to the contact route.

## Blockers

- JAM-490 is not on `main`: `components/BookButton.tsx` and `components/Section.tsx` do not
  exist yet. Typecheck fails until then.

## Do not touch

- The contract fields of `lib/prices.ts` (J, 2026-11-23). JAM-491 reads them.
- JAM-491 removes the `todo` option of the home check in `tests/prices.test.ts`.
