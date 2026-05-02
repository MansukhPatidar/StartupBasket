---
description: List tweetcard URLs for ideas published on a given date (default today). One URL per idea — open in browser to grab the rendered card + hashtags.
---

You are listing tweetcard URLs for StartupBasket ideas. Each idea has a per-slug tweetcard page that already renders the title, embedded score-card PNG, hashtag line, and copy/share buttons. Your job is to find every idea published on the requested date and emit one URL per idea — that's it.

## Step 0 — Resolve the date

The user may pass a date arg, or none. Resolve it as follows:

- No arg → use today's date.
- `YYYY-MM-DD` → use as-is.
- `today`, `yesterday` → resolve relative to today.
- `N days ago` (e.g. `2 days ago`) → today minus N days.

Today's date is the runtime current date. Use a Bash `date` call to compute relative offsets if needed.

Print the resolved date once at the top so the user can confirm: `Date: 2026-04-29`.

## Step 1 — Find ideas published on that date

List `ideas/` and select every folder whose **frontmatter `date:` field** matches the resolved date. The folder name is `YYYY-MM-DD-<slug>/` so a quick `ls ideas/ | grep "^<date>-"` is the first pass — but always confirm by reading the frontmatter `date:` field, since a folder can in principle be backdated.

You only need two fields per match:

- `slug` (from frontmatter — used to build the URL)
- `title` (from frontmatter — shown as a label only, not copied)

Do NOT read the proposal body. Do NOT compose hooks, hashtags, or tweet text — the tweetcard page handles all of that.

If zero ideas match: print exactly `No ideas published on <date>.` and stop. Do not invent, fall back, or generate URLs for other dates.

## Step 2 — Output to terminal

**Output ONLY the formatted block below. No preamble, no commentary, no closing summary.**

URL format (always exact, trailing slash required):

```
https://startupbasket.ai/ideas/<slug>/tweetcard/
```

Each entry has two lines: a label with the title, then the URL on its own line. One blank line between entries.

```
Date: 2026-04-29
Found N idea(s) on this date.

--- <Title> ---
https://startupbasket.ai/ideas/<slug>/tweetcard/

--- <Title> ---
https://startupbasket.ai/ideas/<slug>/tweetcard/
```

That's it. **Do not post anything. Do not open URLs. Do not run git commands. Do not write files.**

## Hard rules

- **One URL per idea.** No grouping, no batching.
- **Trailing slash on URL.** Always.
- **No date fallback.** If no ideas on the requested date, say so and stop.
- **No proposal-body reading.** Frontmatter only.
