# Spec: FAQ and house rules page

- ticket: JAM-494
- touches: app/faq/page.tsx, app/faq/content.ts, tests/faq.test.ts
- complexity: standard

## Problem

A first visitor has questions about the session, what to bring, the stove, parking,
cancellation, group hire and entry. The site has no page that answers them, and no page
that lists the house rules. The client's answers are in `nourish.docx`.

## Proposed change

A page at `/faq` with two sections. The first section is an accordion of 13 questions with
their answers: what Nourish offers, what to bring, the first time, the stove, the shower,
parking, cancellation, group hire, the toilet, talking, capacity, opening hours and entry.
Each answer is closed at first. A click, or Enter or Space on the question, opens it. The
second section is a numbered list of the 7 house rules. The page has `FAQPage` structured
data for search engines. The text is a light edit of the doc, in English, with corrected
spelling. The group hire answer links to the contact (email and WhatsApp). The entry answer
says "you get your entry code when you book". The questions and the rules are in the page
folder, not in a shared file.

## Acceptance criteria

- [ ] `/faq` shows the 13 questions of the ticket, each with its answer, and the 7 house rules as a numbered list, with corrected spelling. (verify: operator)
- [ ] Each question is a native disclosure (`<details>` and `<summary>`): Tab moves to it, Enter or Space opens and closes it. (verify: agent)
- [ ] The page has one `FAQPage` JSON-LD block, built from the same data as the accordion, with 13 `Question` entries that each have an `acceptedAnswer`. (verify: CI)
- [ ] The JSON-LD of the page passes the Schema.org validator (validator.schema.org) with no errors. (verify: operator)
- [ ] The opening hours answer says 07:00 to 23:00, the capacity and group hire answers say 8 people, and the cancellation answer says 24 hours. (verify: CI)
- [ ] Lint, typecheck and test of the workflow `ci` pass. (verify: CI)

## Out of scope

- The site header, footer and layout (JAM-490).
- Booking, payment, the real entry code flow, accounts.
- Translations: the site is English only.
- A shared `lib/` file for the FAQ or rules data.

## Open questions

- none
