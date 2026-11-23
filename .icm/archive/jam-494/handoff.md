# Handoff jam-494

## Next action

The operator tests `/faq` on the preview, ticks Ready to merge on https://github.com/k0d0minio/living-doubt/pull/2, then says `release JAM-494`.

## How to test

Open `/faq` on the preview. Press Tab to reach a question and press Enter: the answer opens. Check the 13 questions and the 7 numbered house rules, then paste the page address into validator.schema.org: it shows one FAQPage with no errors.

## Criteria

- 13 questions and 7 numbered rules, corrected spelling: the local dev server shows 13 `<details>` and 7 `<li>` in the `<ol>`. The operator checks the text.
- Native disclosure with keyboard: 13 `<details>` with `<summary>` on the local dev server. Not tried in a browser: the repo forbids the browser tool (router rule 9). Native `<summary>` takes Tab, Enter and Space.
- One FAQPage JSON-LD with 13 Question entries and an acceptedAnswer each: met (CI test, and the local dev server HTML).
- Hours, 8 people, 24 hours: met (CI test).
- Lint, typecheck, test: met (CI GREEN at 6ed5ed1).
- Schema.org validator: the operator checks it.

## Blockers

- Ready to merge is not ticked.

## Do not touch

- `lib/`: the FAQ and rules data stay in `app/faq/` (J, 2026-11-23).
