# Environments

This file belongs to the repo. It is the one home of addresses. The scripts find the Vercel
projects from the git link of the repo, not from this file.

| Environment | Address | Vercel project | Database | Moves on |
|---|---|---|---|---|
| Production | <the production domain: not attached on 2026-11-21> | `living-doubt` (team `kodominio`) | none | the promotion, on the operator's word |
| UAT | <no custom environment `uat` on the Vercel project on 2026-11-21> | `living-doubt` (team `kodominio`) | none | each merge to main |
| Preview | One for each pull request | `living-doubt` (team `kodominio`) | none | each push to the branch |

A person fills each `<…>` cell when the domain or the environment exists. The setup acts are
in `.icm/setup/`. The UAT contract: `.icm/_system/features/uat.md`.
