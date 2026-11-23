# Spec: The experience page: the story of Nourish, sauna, ice bath, contrast therapy

- ticket: JAM-492
- touches: app/experience/page.tsx, tests/experience.test.ts
- complexity: standard

## Problem

The site has no page that tells Max's story or explains the session. A visitor cannot read
what the sauna, the ice bath and contrast therapy do, or how to do a first session. The
source text (`nourish 3.docx`, `nourish.docx`) has a repeated block and strong health
claims that the site must not make.

## Proposed change

A page at `/experience` with seven sections, in this order:

1. Why Nourish: Max's story, first person, short (light edit of `nourish 3.docx`).
2. The suggested session: a simple visual timeline of three rounds (15 min sauna, shower,
   3 min ice bath), then shower and relax, inside the 75-minute session.
3. Sauna: 4 to 6 short points, softened ("can help", "many people feel"). One photo
   (`images.sauna`).
4. Ice bath: 4 to 6 short points, softened. First time: 30 seconds to 3 minutes. One photo
   (`images.stove`).
5. Contrast therapy: why both, and why the sauna comes first. Short.
6. First time? A shortened "Breathe and relax, you got this" text from `nourish.docx`, and
   the medical note: "Ask your doctor first if you are pregnant or have a heart condition
   or high blood pressure."
7. A Book button (the shared `BookButton`).

The page has its own title and meta description. The page uses the shared `Section`,
`BookButton` and `images` names. The header and the footer come from the shell.

## Acceptance criteria

- [ ] `/experience` shows the 7 sections in the order above. (verify: agent)
- [ ] The repeated block of the source is used once: the page has no repeated paragraph. (verify: CI)
- [ ] The page text has no "detox", no percentage number, no promise of weight loss, of healing or of a cure. (verify: CI)
- [ ] The medical note is on the page, word for word. (verify: CI)
- [ ] The page title and the meta description are set. (verify: CI)
- [ ] The session timeline shows three rounds of sauna, shower and ice bath, then shower and relax. (verify: agent)
- [ ] The photos crop so that the stove brand is not the subject. (verify: operator)
- [ ] Max reads and accepts the text on UAT. (verify: operator)

## Out of scope

- Photo files and `lib/images.ts` (JAM-491), the header, the footer, `BookButton`, `Section` and `lib/site.ts` (JAM-490), the brand colours and fonts (JAM-489).
- Prices, the FAQ and the house rules (JAM-493, JAM-494).
- Booking, payment, accounts, a database, a CMS.

## Open questions

- none
