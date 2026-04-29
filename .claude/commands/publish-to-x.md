---
description: Generate copy-paste-ready X/Twitter snippets for ideas published on a given date (default today). One snippet per idea. No posting, no API — just text in the terminal.
---

You are generating X/Twitter snippets for ideas in the StartupBasket catalog. Your job is to produce **one tweet per idea published on the requested date**, ready to copy and paste into X.

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

If zero ideas match: print exactly `No ideas published on <date>.` and stop. Do not invent, fall back, or generate snippets for other dates.

## Step 2 — Read each proposal

For each matching idea, read the **full proposal.md**, not just the frontmatter. You need:

- `title`, `slug`, `score`, `verdict`, `oneLiner` from frontmatter
- `tags.vertical`, `tags.model`, `tags.geography`, `tags.secondary[]` from frontmatter (these become hashtags)
- The first 200 lines of the body — to find the *most compelling line* for a hook (a number, a regulatory shock, a dollar figure, a quote). The proposal's section 2 (Trend signal) and section 3 (The opportunity) are usually the goldmine.

## Step 3 — Compose ONE tweet per idea

### Hard constraints

- **≤ 240 characters effective**, where "effective" is what X actually counts: any URL in the tweet collapses to 23 chars in X's character counter, regardless of the URL's true length. So when you pre-flight count, sum (raw text excluding the URL) + 23. Note that the *raw text the user pastes into the composer* will look longer because the full URL is visible — that's fine, X re-counts it on submit.
- **URL must be exactly:** `https://startupbasket.ai/ideas/<slug>/` (trailing slash, no query string)
- **Hashtags required.** Build the list from the frontmatter tags:
  - Always include `#StartupIdeas` and `#StartupBasket`
  - Add one hashtag per `tags.*` value: vertical, model, geography, plus each item in `tags.secondary[]`
  - Hashtag-ify by stripping all non-alphanumerics: `IoT+SaaS` → `#IoTSaaS`, `India+Global` → `#IndiaGlobal`, `WhatsApp-first` → `#WhatsAppfirst`
  - If the full hashtag tail won't fit in 240 chars, drop tags from the *end of secondary[]* until it fits, but keep `#StartupIdeas`, `#StartupBasket`, vertical, geography (those four are the floor).
- **Score + verdict if it fits.** Format: `Score: 83/100 — STRONG GO`. If even after dropping non-floor hashtags it still doesn't fit, drop the score line.

### Structure

Each tweet should have, in order:

1. **Hook** — one sharp line drawn from the proposal body. A specific number, regulatory event, dollar figure, or shocking complaint. NOT a generic "AI for X" intro.
2. **Product line** — `<ProductName>: <oneLiner>` (or a tightened rewrite of the oneLiner if needed for length).
3. **Score line** (if it fits) — `Score: NN/100 — VERDICT`.
4. **URL** — the canonical idea URL.
5. **Hashtags** — space-separated.

Use **single newlines** between sections (X renders newlines fine). No emoji unless the score is STRONG GO — in that case a 🚀 at the very start of the hook is allowed.

### Example

For the QuoteShield idea (score 83, STRONG GO, vertical PropTech, geo Australia):

```
🚀 NSW just turned underquoting into a $110K-per-breach problem.

QuoteShield: AI Statements of Information + weekly price reviews built to survive a Fair Trading audit.

Score: 83/100 — STRONG GO
https://startupbasket.ai/ideas/quoteshield-au-underquoting-copilot/

#StartupIdeas #PropTech #SaaS #Australia #Compliancedriven #StartupBasket
```

(That example is 281 chars but the URL counts as 23, so effective length ≈ 264 → still over 240. In real output, drop one of the secondary hashtags and tighten the hook to fit.)

## Step 4 — Output to terminal

**Output ONLY the formatted block below. No preamble, no commentary, no "I'll now produce…", no closing summary.** The user is going to copy-paste straight from the terminal.

Print each snippet **inside a fenced code block** so the user can triple-click to select. Separate snippets with `---` on its own line.

Format:

```
Date: 2026-04-29
Found N idea(s) on this date.

--- Idea 1 of N: <Product Name> ---
```
<tweet text here, 240 chars or less>
```
Length: 234 chars (URL counted as 23)

--- Idea 2 of N: <Product Name> ---
```
<tweet text here>
```
Length: 218 chars
```

That's it. **Do not post anything.** Do not write any files. Do not run any git commands.

## Hard rules

- **One tweet per idea.** Never combine, never two-variant.
- **240-char ceiling, URL = 23.** Pre-flight count before printing.
- **Hashtags from frontmatter only.** Don't invent `#buildinpublic` or `#indiehackers`.
- **No fabricated stats.** Every number in the hook must come from the proposal body.
- **Trailing slash on URL.** Always.
- **No file writes.** Output to terminal only.
- **No date fallback.** If no ideas on the requested date, say so and stop.
