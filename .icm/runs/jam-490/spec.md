# Spec: Site shell: header, navigation, footer, and the Book button to contact

- ticket: JAM-490
- touches: app/layout.tsx, app/not-found.tsx, app/sitemap.ts, app/robots.ts, app/opengraph-image.tsx, components/Header.tsx, components/MobileMenu.tsx, components/Footer.tsx, components/BookButton.tsx, components/Section.tsx, lib/site.ts, lib/booking.ts, tests/booking.test.ts
- complexity: standard

## Problem

The site has no shared layout. Each page must show the same sticky header with the mark, the
name, the navigation and the "Book a session" button, and the same footer. The base SEO
(title template, description, Open Graph image, sitemap, robots) and a 404 page do not exist.

## Proposed change

Each page gets one layout. The header stays at the top on scroll. It has the mark, the name
Nourish, the links Home, The experience, Prices, FAQ, and the "Book a session" button. On a
small screen the links go into a menu that a button opens and closes. The footer has the mark,
the opening hours (every day, 07:00 to 23:00), the email and the phone (with a WhatsApp link),
the company details, the links Privacy and Livro de Reclamações, and the town Sintra.

One config value (`NEXT_PUBLIC_BOOKING_URL`, read in `lib/site.ts` as `site.bookingUrl`)
decides the target of each Book button. When it is empty, the button opens the contact block
(Q1 default: the footer block `#contact`, with the email link and the WhatsApp link). When it
is set, each Book button goes to that address.

Page titles use the template "<page> · Nourish". The site has a default description and an
Open Graph image (the mark on black). `/sitemap.xml` lists the five routes and `/robots.txt`
allows all and names the sitemap. An unknown address shows a 404 page in the same style.

The shared parts for the other tickets: `components/BookButton.tsx` and
`components/Section.tsx` (a page section with a short uppercase label), with the props of the
shared contract.

## Acceptance criteria

- [ ] On desktop and on mobile, the links Home, The experience, Prices and FAQ open `/`, `/experience`, `/prices` and `/faq`. (verify: agent)
- [ ] The header stays at the top of the window when the page scrolls. (verify: agent)
- [ ] On a narrow screen, a menu button opens and closes the navigation, and the keyboard can use it. (verify: agent)
- [ ] With the booking address empty, each Book button opens the contact block with the email link and the WhatsApp link. With it set, each Book button goes to it. One test proves both cases. (verify: CI)
- [ ] The footer shows the mark, the hours 07:00 to 23:00, the email, the phone, the company details, the links Privacy and Livro de Reclamações, and Sintra. (verify: agent)
- [ ] A page title reads "<page> · Nourish", and the page has the default description and the Open Graph image. (verify: agent)
- [ ] `/sitemap.xml` and `/robots.txt` answer. (verify: agent)
- [ ] An unknown address shows the 404 page in the site style, with the header and the footer. (verify: agent)
- [ ] Lighthouse accessibility is 95 or more on the home page of the preview. (verify: operator)

## Out of scope

- The page content of `/`, `/experience`, `/prices`, `/faq` and `/privacy`: their own tickets.
- The colours, the fonts and the mark files: JAM-489. `lib/company.ts`: JAM-495.
- The booking service and its address: the booking ticket sets `NEXT_PUBLIC_BOOKING_URL`.
- A `/contact` page.

## Open questions

- The site address for the sitemap comes from `NEXT_PUBLIC_SITE_URL`, then the Vercel production address. No production domain exists on 2026-11-23.
