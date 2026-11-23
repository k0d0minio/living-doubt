# Handoff jam-490

## Next action

The operator tests the preview, ticks **Ready to merge** on
https://github.com/k0d0minio/living-doubt/pull/5, then says `release JAM-490`.

## How to test

On the preview, open the site on a phone. Tap the menu button: the four links show, and
each one opens its page. Tap "Book a session": the page goes to the contact block at the
foot, with the email, the phone and WhatsApp. Run Lighthouse on the home page: the
accessibility score is 95 or more.

## Acceptance criteria

Checked by the agent on a local dev server, on 2026-11-23:
- The four links: met. Desktop nav and mobile menu have `/`, `/experience`, `/prices`, `/faq`.
  The pages of the other tickets are not on this branch yet: they show the 404 page.
- The header stays at the top on scroll: met (header top 0 at scroll 1500, width 390).
- The mobile menu: met. The button toggles `aria-expanded`, Escape closes it, a link closes it.
- The Book button: the target logic is in `lib/booking.ts`, test `tests/booking.test.ts`.
  Met when CI is green. With the address empty, the button went to `#contact` in the dev server.
- The footer: met. The company values are in `lib/company.ts`.
- Title template and description: met (`Page not found · Nourish`, the default description).
  The Open Graph image is `app/opengraph-image.png` (the mark on ink, 1200 × 630).
  `og:image:alt` did not show in the dev server: check it on the preview.
- `/sitemap.xml` and `/robots.txt`: met (200). They use `NEXT_PUBLIC_SITE_URL`, then the
  Vercel production address, then `http://localhost:3000`.
- The 404 page: met, with the header and the footer.
- Lighthouse accessibility: for the operator.

## Notes for Build

- Contract correction (session local_206d1ac9, 2026-11-23): `site.email` is `maximrettich@yahoo.com` with the ASCII `@` (U+0040).
- Contract change (J, chat, 2026-11-23: "you've created a circular dependency with PRs 490 and 495"): JAM-490 owns `lib/company.ts`, copied from JAM-495 (commit 7becf8a~1), only `company`. JAM-495 keeps the complaints-book data in `lib/legal.ts` and adds the logo to the footer after this merges.
- The footer links Privacy and https://www.livroreclamacoes.pt as plain links.
- The Open Graph image is a static PNG: a generated image needs hex colours in `app/`, which `tests/brand.test.ts` refuses.

## Blockers

- Ready to merge is not ticked.

## Do not touch

- none
