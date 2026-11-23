# Handoff jam-495

## Next action

The operator tests the change on the preview of https://github.com/k0d0minio/living-doubt/pull/6,
ticks Ready to merge, then says `release JAM-495`.

## Criteria

- `company` has the identity of the ticket, and a test checks each value: CI (`tests/legal.test.ts`).
- `/privacy` shows the controller, what the site collects, the rights, the contact and the booking-provider note: met on the local dev server, 2026-11-23.
- The footer shows the identity, links `/privacy`, and links https://www.livroreclamacoes.pt with the official logo: met on the local dev server, 2026-11-23 (the footer change: J, chat, 2026-11-23).
- A test fails if the code reads or sets a cookie, or loads analytics or tracking: CI (`tests/legal.test.ts`).
- No `Set-Cookie` on `/` and `/privacy`: met on the local dev server, 2026-11-23. Not read on the preview.

## How to test

Open the preview and scroll to the footer: the company details, a Privacy link and the white
Livro de Reclamações logo must show. Click the logo: it opens livroreclamacoes.pt. Click
Privacy: the privacy policy opens.

## Blockers

- none

## Do not touch

- `lib/company.ts` belongs to JAM-490.
