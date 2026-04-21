# SEO TODO

Backlog from the 2026-04-22 SEO audit. Items #1 and #2 ("Ship real OG image" and "Fix canonical/sitemap trailing-slash mismatch") are being worked in the current session and are not on this list.

Ordered by bang-for-buck.

---

## 🔴 Critical

### #3 — Enrich idea-page `meta description` with score/verdict/category

**Problem:** `ideaMeta()` in `src/lib/seo.ts` uses the raw `oneLiner` (~90 chars avg). SERP snippets do best at 140–160 chars, and we're not differentiating one SB result from another when Google clusters them.

**Fix:** Compose description as:
```
{oneLiner} Scored {score}/100 ({verdict}). {category}. From StartupBasket's rubric-scored AI idea catalog.
```
…trimmed to 158 chars. Adds score/verdict differentiation + category keywords.

**Effort:** 20 min. **Impact:** Medium (better SERP CTR).

---

## 🟡 High-value

### #4 — Rewrite homepage H1/title with intent keywords

**Problem:** Current H1 "AI product ideas, scored honestly" is a tagline, not a ranking surface. Nobody searches for "scored honestly." We're leaving queries like "AI SaaS ideas 2026," "bootstrapped SaaS ideas," "micro-SaaS niche ideas" on the table.

**Fix:** Keep the designed H1 but add an H2 right under it with intent copy: *"Startup and SaaS ideas for bootstrapped founders, validated by a 4-layer rubric."* Update `homepageMeta()` title to `StartupBasket — Validated AI startup & SaaS ideas for bootstrapped founders`.

**Effort:** 30 min. **Impact:** High (new ranking surface).

---

### #5 — Add `lastmod` to sitemap

**Problem:** Sitemap has only `<loc>`. Without `lastmod`, Google guesses recrawl priority. For a site publishing a new page every few days, this matters.

**Fix:** Configure `@astrojs/sitemap` with custom `serialize`:
- Idea pages: `lastmod` = `idea.data.date`, `changefreq: weekly`
- `/ideas`: `changefreq: weekly`
- `/`: `changefreq: daily`
- `/about`, `/motivation`: `changefreq: monthly`

**Effort:** 15 min. **Impact:** Medium (better recrawl cadence).

---

### #6 — Per-idea dynamic OG cards

**Problem:** Every idea shares the same default OG. A per-idea card (title + score + verdict + vertical on a branded background) is the single best lever for social CTR.

**Fix:** Generate at build time using `@resvg/resvg-js` + a templated SVG, or `@vercel/og` style satori. Output `public/og/<slug>.png`. Update `ideaMeta()` to point at the per-idea image.

**Effort:** 3–4 hours. **Impact:** High.

---

### #7 — Noindex or enforce thin tag pages

**Problem:** Secondary tags slip in freely — `tags.ts` declares a canonical `SECONDARY` list but the schema doesn't enforce it. Tags with 1 idea (e.g. `/tags/tax-automation/`) land in the sitemap as thin content.

**Fix (pick one):**
- **(a)** Enforce canonical `SECONDARY` list in `src/content/config.ts` via a zod refinement; reject unknowns at build.
- **(b)** Add `<meta name="robots" content="noindex">` to tag pages with `< 3` ideas, and exclude them from the sitemap.

(b) is safer — it keeps long-tail tags available but stops them from competing for authority until they have real depth.

**Effort:** 30 min. **Impact:** Medium (protects site authority).

---

### #8 — Add 60–80 word intro copy to tag pages

**Problem:** `/tags/*` pages are card lists with no descriptive intro. Google increasingly downranks list-only facet pages.

**Fix:** Per tag *kind* (vertical / model / geography / secondary), add a templated intro sentence + 1–2 sentences of editorial context. E.g.:
- Vertical: "HealthTech ideas in StartupBasket target digital-first clinics, multilingual scribes, and practice-operations SaaS. {count} ideas, each scored on the 7-axis rubric."
- Geography: "{Geography} ideas where local payment rails, language, or regulation create a wedge against global SaaS. {count} ideas."

**Effort:** 1 hour. **Impact:** Medium.

---

### #9 — Rotate pinned homepage hero idea

**Problem:** `HERO_SLUG = "ai-medical-scribe-india"` is hardcoded in `src/pages/index.astro`. Homepage above-the-fold hasn't refreshed in weeks — signals staleness to both visitors and crawlers.

**Fix:** Pick one:
- **(a)** Unpin: default to newest STRONG GO, or newest with `featured: true`.
- **(b)** Rotate weekly via a small script keyed on ISO week.
- **(c)** Keep manual pinning but surface it in `/new-idea` output ("consider pinning this one").

**Effort:** 15 min for (a). **Impact:** Low–medium.

---

## 🟢 Nice-to-have

### #10 — Add RSS feed

**Problem:** Daily-publishing site without a feed is weird. Feedly / Inoreader / Readwise Reader traffic is hyper-engaged — typically 2–5x time-on-page vs organic.

**Fix:** `@astrojs/rss` — ~15 minutes. Output at `/rss.xml`. Link from `<head>` and the footer.

**Effort:** 15 min. **Impact:** Low–medium.

---

### #11 — Breadcrumb schema on idea pages

**Fix:** Add `BreadcrumbList` JSON-LD to idea pages: Home → Ideas → {Vertical} → {Title}.

**Effort:** 20 min. **Impact:** Low (minor rich-result eligibility).

---

### #12 — Category landing pages with editorial intros

**Problem:** We have 1,500+ word proposals but no SEO-bait landing pages that bundle them by theme ("12 AI SaaS ideas for Indian SMBs, scored and validated"). IdeaBrowser and SaaSIdeas.xyz rank via this pattern.

**Fix:** `/collections/<slug>` pages with a 200–400 word editorial intro + a curated list of ideas. Start with 4–6 (India SMB, US vertical SaaS, Compliance-driven, Solo-builder, IoT+SaaS).

**Effort:** 1 day. **Impact:** High — opens a new query space.

---

### #13 — Semantic landmarks on idea page hero

**Fix:** Wrap the idea-detail hero band in `<header>` and ensure the prose is inside `<article>`. Verifies accessibility scores and helps AI extractors (perplexity, chatgpt browsing, etc.) read the page cleanly.

**Effort:** 10 min. **Impact:** Low.

---

### #14 — Dedicated `/pipeline` or `/methodology` SEO page

**Problem:** Queries like "how to validate a startup idea," "startup idea rubric," "how to score a business idea" have real volume. We have the methodology — we just haven't externalized it as an SEO asset distinct from `/about`.

**Fix:** New page `/methodology` targeting those queries. Longer-form (800–1,200 words), includes the rubric table and the 6-stage pipeline with examples linking out to real proposals. Cross-link from `/about` and `/motivation`.

**Effort:** 2–3 hours. **Impact:** High if content is solid.
