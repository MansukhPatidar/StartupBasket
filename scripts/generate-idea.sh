#!/bin/bash
# Generates one startup idea using the /new-idea skill via Claude CLI.
# Runs in a single repo: pulls, generates, runs the axes safety net,
# commits, and pushes. Cloudflare Pages auto-deploys.

set -e

REPO=/Users/mpatidar/GitHub/StartupBasket
cd "$REPO"

ts() { date '+%Y-%m-%d %H:%M:%S'; }

echo "$(ts) — Pulling latest from origin..."
git pull --ff-only origin main 2>/dev/null || true

echo "$(ts) — Starting idea generation..."
/Users/mpatidar/.local/bin/claude -p --dangerously-skip-permissions "/new-idea"

echo "$(ts) — Idea generation complete. Running axes safety net..."
node scripts/extract-axes.mjs 2>&1 || echo "$(ts) — extract-axes.mjs reported a non-zero exit (continuing)."

# The /new-idea skill already commits and pushes. Anything still
# uncommitted at this point is from extract-axes adding missing axes
# frontmatter. Push that as a follow-up commit if so.
if ! git diff --quiet ideas/; then
  git add ideas/
  git commit -m "Auto-extract missing axes frontmatter for scorecard"
  git push origin HEAD
  echo "$(ts) — Pushed axes fixes."
else
  echo "$(ts) — No axes fixes needed."
fi

echo "$(ts) — Done."
