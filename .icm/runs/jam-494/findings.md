# Findings jam-494

- BAXTER config: `~/baxter_live/workspace/_config/satellites.md` has no row for `k0d0minio/living-doubt`. `baxter_gate.py pack` refuses the review pack of PR 2. The shots are in `~/baxter_live/workspace/scratch/shots/127.0.0.14100-{phone-20261123-142412,desktop-20261123-142404}.png`.
- `.icm/environments.md` has no production or UAT address, so a review has no "before" picture.
- The Vercel preview address of the branch is not in a GitHub deployment status. The gate card says "Preview: not found".
