# Spec: Home page

- ticket: JAM-491
- touches: app/page.tsx, lib/images.ts, public/images/
- complexity: standard

## Problem

The site has no home page. A visitor must learn in one scroll what Nourish is, how a
session works, what it costs and how to book. The photos are placeholders for v1, and
Max's own photos must replace them in one place later.

## Proposed change

The route `/` shows 8 sections in this order:

1. Hero: a full-width sauna photo (clay-banks), "NOURISH", "Recovery garden · Sauna & ice
   bath", one line about Sintra, the Book button.
2. Intro: two or three sentences from the "Why Nourish" story of `nourish 3.docx`, light
   edit.
3. Three pillars with short uppercase labels: SAUNA, ICE BATH, REST. One photo and two
   lines each. SAUNA = the dark wood sauna (huum r_3QoSxNWOw), ICE BATH = the tub render
   (`image.png`, shown small), REST = steam and light (tylijura).
4. The session: 75 minutes, the suggested routine (15 min sauna, cool down and shower,
   3 min ice bath, three rounds, always finish with the ice bath), 8 people at most. A
   link to `/experience`.
5. Prices teaser: the single session, the packs, memberships "from €72 / month", gift
   cards. The values come from the shared prices list of JAM-493. A link to `/prices`.
6. FAQ teaser: 5 short questions (what to bring, the first time, cancellation, parking,
   opening hours), with the facts of JAM-494. A link to `/faq`.
7. Location: Sintra, free parking one minute on foot. No map and no street address.
8. A final call to action with the Book button.

One list of the five photos (hero, sauna, stove, steam, ice bath) gives, for each photo,
the file, the alt text, the source, the licence and "placeholder". The stove photo is in
the list for JAM-492. All photos are optimised files in `public/images/`.

## Acceptance criteria

- [ ] The route `/` shows the 8 sections in the order above, on a 375 px and on a 1280 px wide screen. (verify: agent)
- [ ] Each Book button on the page is the shared Book button of JAM-490. (verify: agent)
- [ ] Each photo shows through `next/image` and has alt text. (verify: agent)
- [ ] The photo list has 5 entries, each with a source, a licence and placeholder set to true. (verify: CI)
- [ ] The prices teaser shows memberships "from €72 / month", and its values come from the shared prices list. (verify: agent)
- [ ] The links go to `/experience`, `/prices` and `/faq`. (verify: agent)
- [ ] The page shows no map and no street address. (verify: agent)
- [ ] Lighthouse performance on mobile is 90 or more on the Vercel preview. (verify: agent)
- [ ] The lint, typecheck and test checks are green. (verify: CI)

## Out of scope

- The header, the footer, the layout and the Book button itself (JAM-490).
- The brand colours, fonts and mark (JAM-489).
- The prices list (JAM-493), the experience page (JAM-492), the FAQ page (JAM-494).
- Booking, payment, accounts, a database, a CMS. A map or a street address.
- Max's own photos. They replace the placeholders later, in the photo list.

## Open questions

- Defaults that the operator checks: the pillar photos are SAUNA = huum r_3QoSxNWOw, ICE
  BATH = `image.png`, REST = tylijura. The FAQ teaser has its own short answers, with the
  facts of JAM-494.
