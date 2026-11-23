# Handoff jam-490

## Next action

The operator answers Q1 on the HUD card (or in the pull request), ticks **Spec approved** on
https://github.com/k0d0minio/living-doubt/pull/5, then says `new JAM-490` (to take the answer)
and `build JAM-490`.

## How to test

<Build writes this.>

## Blockers

- Q1 waits for an answer.
- Spec approved is not ticked.
- Build imports names of other tickets: the tokens and the mark of JAM-489, `lib/company.ts` of JAM-495. The pull request stays a draft until they are on `main`.

## Notes for Build

- Contract correction (session local_206d1ac9, 2026-11-23): `site.email` is `maximrettich@yahoo.com` with the ASCII `@` (U+0040). The brief's copy had U+FF20, which breaks the mailto link.
- If `lib/company.ts` of JAM-495 exports `complaintsBook` (`url`, `logo`, `alt`) on `main`, the footer uses it. If not, the footer links https://www.livroreclamacoes.pt as text.

## Do not touch

- none
