# Findings jam-495

- The shared contract of 2026-11-23 writes `site.email` of JAM-490 with a full-width at sign
  (U+FF20) in place of `@`. If JAM-490 copies it, the mailto link fails. Check the value in
  `lib/site.ts` of JAM-490.
- The logo file is a PNG (`public/legal/livro-reclamacoes.png`), not an SVG. The official site has no SVG.
- Closed: the circular dependency of JAM-490 and JAM-495. JAM-490 now owns `lib/company.ts` (J, chat, 2026-11-23). This run removed its copy and keeps the complaints-book data in `lib/legal.ts`.
