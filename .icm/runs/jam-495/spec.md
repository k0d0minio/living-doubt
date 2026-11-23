# Spec: Legal: company identity, privacy policy, Livro de Reclamações

- ticket: JAM-495
- touches: lib/company.ts, app/privacy/page.tsx, public/legal/livro-reclamacoes.svg, tests/legal.test.ts
- complexity: standard

## Problem

The site does not yet meet the basic legal duties of a Portuguese business site. It shows no
company identity, it has no privacy policy, and it has no link to the Livro de Reclamações.

## Proposed change

- The identity of the company is in one data file, `lib/company.ts`: Living Doubt Unipessoal
  Lda; Avenida Conselheiro Barjona de Freitas, n.º 22, 2º Esq., 1500-204 Lisboa, Portugal;
  NIF PT518814858; Cons. Reg. Comercial Lisboa 518814858; share capital €100,00. The footer
  (JAM-490) reads it on every page. This run does not edit the footer.
- The same file gives the Livro de Reclamações address (https://www.livroreclamacoes.pt) and
  the path of its official logo, for the footer.
- A page `/privacy` with a short GDPR privacy policy, in English: the controller (the company
  above), what the site collects in v1 (only what a visitor sends by email or WhatsApp), why
  and for how long, the rights of the visitor (access, correction, erasure, objection, a
  complaint to the CNPD), the contact, and a note that the booking provider will have its own
  policy when booking comes. The page says that the site sets no cookie and loads no tracking.
- No cookie banner: the site sets no cookie. A test fails if the code sets a cookie or loads
  analytics or tracking.

## Acceptance criteria

- [ ] `lib/company.ts` exports `company` with the name, the address lines, the NIF, the registry and the share capital of the ticket, and a test checks each value. (verify: CI)
- [ ] `/privacy` shows the controller, what the site collects, the rights of the visitor, the contact and the note on the booking provider. (verify: agent)
- [ ] The footer of every page shows the company identity and links to `/privacy` and to https://www.livroreclamacoes.pt with the official logo, after JAM-490 is merged. (verify: agent)
- [ ] A test fails if the code of the app reads or sets a cookie, or loads analytics or tracking. (verify: CI)
- [ ] The response headers of `/` and `/privacy` on the preview have no `Set-Cookie`. (verify: agent)

## Out of scope

- The footer itself, the layout and the sitemap entry of `/privacy` (JAM-490).
- Terms and a waiver (they come with the booking flow).
- A cookie banner, analytics and a consent tool.
- Translations: the site language is English.

## Open questions

- The email in the identity is `site.email` of JAM-490. This run does not copy it.
