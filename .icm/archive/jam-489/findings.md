# Findings jam-489

- BAXTER: living-doubt has no row in `~/baxter_live/workspace/_config/satellites.md`, so
  `gate pack` refuses the review pictures of a pull request. Add the row
  (path `~/Desktop/Repositories/living-doubt`). (2026-11-23)
- The gate card says "Preview: not found", though the check Vercel passed on #1.
  `.icm/environments.md` lists no preview, UAT or production address yet. (2026-11-23)
