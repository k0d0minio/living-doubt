# Findings jam-495

- The shared contract of 2026-11-23 writes `site.email` of JAM-490 with a full-width at sign
  (U+FF20) in place of `@`. If JAM-490 copies it, the mailto link fails. Check the value in
  `lib/site.ts` of JAM-490.
