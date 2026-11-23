# Spec: Prices page: single session, packs, memberships, gift cards, group hire

- ticket: JAM-493
- touches: lib/prices.ts, app/prices/page.tsx, tests/prices.test.ts
- complexity: standard

## Problem

A visitor cannot see the prices of Nourish today. The site has no prices page. The client
sends prices and conditions in `nourish 2.docx`. v1 sells nothing online, so the visitor
must see every price and condition on one page and contact Max to buy.

## Proposed change

A page at `/prices` shows these sections, in this sequence:

1. Single session: 75 minutes, €25.
2. Packs: 5 sessions €110, 10 sessions €200.
3. Memberships: 4 sessions per month €72, 8 sessions per month €128, and the conditions:
   3 months of first commitment, billed monthly; personal; each visit needs a booking;
   unused sessions of a month end with that billing month; after the first commitment,
   cancel with 30 days of notice.
4. Gift cards: Nourish experience €25 (one 75-minute session), Nourish for 2 €50 (a shared
   session for two), Five Nourish moments €110 (a 5-session pack), or an amount of €50,
   €100 or €150. Valid 12 months from purchase.
5. Group hire: the sauna for a group of 8, with a "Contact Max" button.
6. The cancellation rule: cancel or change a booking at least 24 hours before the session.

Each "Book" or "Buy" button is the shared `BookButton` of the shell (JAM-490). In v1 it goes
to the contact route. All prices and conditions come from one data file, `lib/prices.ts`.
The home teaser (JAM-491) reads the same file. A price change is one edit in that file.

## Acceptance criteria

- [ ] `/prices` shows each price of the ticket, in euro, in the format `€110` (no decimals, no space). (verify: agent)
- [ ] `/prices` shows each condition of the memberships, the 12-month validity of the gift cards and the 24-hour cancellation rule. (verify: agent)
- [ ] Each "Book", "Buy" and "Contact Max" button on `/prices` goes to the contact route of the shell. (verify: agent)
- [ ] A test shows that the prices page reads `@/lib/prices`, and that the home page reads it when its teaser exists (Q1). (verify: CI)
- [ ] A test shows the values of `lib/prices.ts`: single €25 for 75 minutes, packs €110 and €200, memberships €72 and €128, group of 8. (verify: CI)
- [ ] The change adds no payment code: no payment package, no checkout, no price form. (verify: CI)
- [ ] The prices match `nourish 2.docx`, and Max accepts the single-session price of €25. (verify: operator)

## Out of scope

- Booking and payment online, accounts, a database, a CMS.
- The home teaser (JAM-491), the header, the footer, the layout and `BookButton` (JAM-490).
- A change of a price or a condition that the ticket does not give.

## Open questions

- The single-session price €25 is inferred from the gift card "Nourish experience". Max confirms it on UAT.
- The 24-hour rule is in the ticket, not in `nourish 2.docx`. The words "cancel or change a booking" are a light edit. Check them.
