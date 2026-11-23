# Handoff jam-492

## Next action

The operator ticks **Spec approved** on https://github.com/k0d0minio/living-doubt/pull/4, then says `build JAM-492`.

## How to test

After build: open `/experience` on the preview. See the seven sections in order, the session timeline, the medical note, and the Book button at the end.

## Blockers

- Spec approved is not ticked.
- Build imports `Section`, `BookButton` (JAM-490) and `images` (JAM-491). The pull request stays a draft until those are on `main`.

## Do not touch

- `lib/images.ts`, `components/`, `app/layout.tsx`, `lib/site.ts`: other tickets own them.
