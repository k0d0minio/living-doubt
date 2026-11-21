# Nourish — living-doubt

The website of Nourish, a sauna and ice-bath business. The client is Living Doubt (contact:
Max Rettich). The site has the 75-minute session, the FAQ, the house rules, the packs, the
memberships, the gift cards and the opening hours (07:00 to 23:00). Booking and payment go
through an external service, which gives the door code after a booking. One Next.js app on
Vercel (project `living-doubt`, team `kodominio`), with no database.

The work pipeline is the BAXTER blueprint (`.icm/_system/`, version in
`.icm/_system/VERSION`, answers in `.icm/.copier-answers.yml`). This file is identity and
routing only. The rules live once, in the files it points at.

## Routing

@.icm/_system/ROUTER.md

The router has the commands, the stages and the lanes. A ticket is a Linear key of the team
`JAM` (Linear project `living-doubt`). The files below belong to this repo.

| You are asked to | Go to |
|---|---|
| read the stack and the conventions of the code | `.icm/project-rules.md` |
| read where the build runs | `.icm/environments.md`, the one home of the addresses |
| read the UAT batch, record the client's sign-off, promote, roll back | `.icm/_system/features/uat.md`, then `.icm/_system/scripts/promote.sh` |
| do a setup act in Vercel or GitHub | `.icm/setup/`: one file for each act. A person ticks its boxes |
| change what CI checks or how a release is cut | the blueprint. `ci.yml`, `promote.yml` and `icm.yml` come from it |

## Release

`ci.yml` runs the checks on each push to `main` and on each pull request that is ready. Its
job `release` keeps the release-please pull request open on `main`, with
`release-please-config.json` and `.release-please-manifest.json` of this repo (the answer
`release_config: true`: the repo had no tag at its first render). The tags are `v*`.
