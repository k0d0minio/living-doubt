# Findings jam-495

- The shared contract of 2026-11-23 writes `site.email` of JAM-490 with a full-width at sign
  (U+FF20) in place of `@`. If JAM-490 copies it, the mailto link fails. Check the value in
  `lib/site.ts` of JAM-490.
- The logo file is a PNG (`public/legal/livro-reclamacoes.png`), not the SVG that the spec names in `touches:`. The official site has no SVG.
- JAM-490's footer imports `@/lib/company` from this run. Merge JAM-490 and JAM-495 together, or `main` does not build between them.
