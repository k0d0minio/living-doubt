# Project rules

This file belongs to the repo. Write the rules that are true for this repo only: the stack,
the conventions of the code, the names of things. Build and the lanes read it.

Keep it short. A rule that is true for all repos belongs in the blueprint, not here.

- Stack: one Next.js app (App Router, TypeScript, Tailwind CSS 4) at the repo root. npm, with
  `package-lock.json`. Node from `.nvmrc`.
- The scripts `lint`, `typecheck` and `test` are the code checks of the workflow `ci`. A test
  is a file `tests/*.test.ts` for the Node test runner (`tsx --test`).
- Site-wide values (the name, the description) are in `lib/site.ts`.
- Booking and payment are an external service. This app keeps no booking, no payment and no
  door code: it links to the service.
