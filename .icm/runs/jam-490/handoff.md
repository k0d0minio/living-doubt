# Handoff jam-490

## Next action

Wait for JAM-495 (`lib/company.ts`) on `main`. Then merge `main` into this branch, mark
https://github.com/k0d0minio/living-doubt/pull/5 ready, read CI, and show the gate card.

## How to test

On the preview, open the site on a phone. Tap the menu button: the four links show, and
each one opens its page. Tap "Book a session": the page goes to the contact block at the
foot, with the email, the phone and WhatsApp. Run Lighthouse on the home page: the
accessibility score is 95 or more.

## Acceptance criteria

Checked by the agent on a local dev server, on 2026-11-23, with a temporary `lib/company.ts`
stub that was not committed:
- The four links: met. Desktop nav and mobile menu have `/`, `/experience`, `/prices`, `/faq`.
  The pages of the other tickets are not on this branch yet: they show the 404 page.
- The header stays at the top on scroll: met (header top 0 at scroll 1500, width 390).
- The mobile menu: met. The button toggles `aria-expanded`, Escape closes it, a link closes it.
- The Book button: the target logic is in `lib/booking.ts`, test `tests/booking.test.ts`.
  Met when CI is green. With the address empty, the button went to `#contact` in the dev server.
- The footer: met, with the stub company values. Real values come from JAM-495.
- Title template and description: met (`Page not found · Nourish`, the default description).
  The Open Graph image is `app/opengraph-image.png` (the mark on ink, 1200 × 630).
  `og:image:alt` did not show in the dev server: check it on the preview.
- `/sitemap.xml` and `/robots.txt`: met (200). They use `NEXT_PUBLIC_SITE_URL`, then the
  Vercel production address, then `http://localhost:3000`.
- The 404 page: met, with the header and the footer.
- Lighthouse accessibility: for the operator.

## Notes for Build

- Contract correction (session local_206d1ac9, 2026-11-23): `site.email` is `maximrettich@yahoo.com` with the ASCII `@` (U+0040).
- The footer links https://www.livroreclamacoes.pt as text. If JAM-495 exports `complaintsBook`, a later change can show its logo.
- The Open Graph image is a static PNG: a generated image needs hex colours in `app/`, which `tests/brand.test.ts` refuses.

## Blockers

- `lib/company.ts` (JAM-495) is not on `main`. CI fails on the import until it is. The pull request stays a draft.
- Ready to merge is not ticked.

## Do not touch

- none
