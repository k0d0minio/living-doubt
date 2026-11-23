# Handoff jam-493

## Next action

The operator tests `/prices` on the preview, ticks **Ready to merge** on
https://github.com/k0d0minio/living-doubt/pull/7, then says `release JAM-493`.

## Done in Build

- `lib/prices.ts`: the contract shape (`single`, `packs`, `memberships`, `giftCards`,
  `groupHire`), plus `membershipConditions`, `giftAmounts`, `giftValidMonths`,
  `cancelHours` and the format function `eur()` (`€110`).
- `app/prices/page.tsx`: the six sections of the spec. Each button is `BookButton`.
- `tests/prices.test.ts`: the values, the import of `@/lib/prices` by the prices page, the
  home check as `todo` (Q1, J in chat 2026-11-23: the default), and no payment code.

## Acceptance criteria

- Each price in the format `€110`: met (agent, local dev server; the preview needs a Vercel sign-in).
- Each condition, the 12-month validity, the 24-hour rule: met (agent, local dev server).
- Each Book, Buy and Contact Max button goes to the contact route (`#contact`, which is on the page): met (agent, local dev server).
- The prices page reads `@/lib/prices`; the home check is `todo`: met (CI green at 1902031).
- The values of `lib/prices.ts`: met (CI).
- No payment code: met (CI).
- The prices match `nourish 2.docx` and Max accepts €25 for one session: operator, on UAT.

## How to test

Open `/prices` on the preview and compare each price and condition with `nourish 2.docx`.
Click a "Buy" button: the page goes to the contact block.

## Blockers

- Ready to merge waits for the operator's test.

## Do not touch

- The contract fields of `lib/prices.ts` (J, 2026-11-23). JAM-491 reads them.
- JAM-491 removes the `todo` option of the home check in `tests/prices.test.ts`.
