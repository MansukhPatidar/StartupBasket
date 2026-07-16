---
title: "ShelfSonar — AI-shopping visibility radar for online stores"
slug: ai-shopping-visibility-radar
date: 2026-07-16
category: Retail / US
complexity: Medium
score: 66
verdict: VALIDATE
confidence: Medium
oneLiner: "Shows which of your products go invisible to ChatGPT, Gemini and Google AI — plus the exact fix."
tags:
  vertical: Retail
  model: SaaS
  geography: US
  secondary: [AI-agent, GEO, SMB, Solo-builder, Ecommerce]
axes:
  problem: 14
  demand: 11
  build: 11
  distribution: 10
  revenue: 10
  time: 7
  defensibility: 3
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ShelfSonar — AI-shopping visibility radar for independent ecommerce sellers

## 1. One-liner

Shows which of your products go invisible to ChatGPT, Gemini and Google AI — plus the exact fix.

## 2. Trend signal — why now?

Two things happened in the last twelve months and they point in opposite directions, which is exactly why there's an opening.

First, the hype: OpenAI + Stripe shipped the Agentic Commerce Protocol (ACP) in Sept 2025, "Buy it in ChatGPT" Instant Checkout launched Feb 2026, Google announced its Universal Commerce Protocol at NRF Jan 2026. Everyone told merchants to "get ready for agentic checkout."

Then the correction: **ChatGPT Instant Checkout was effectively discontinued in March 2026** — fewer than ~30 of Shopify's millions of merchants ever went live with in-chat purchase completion. The checkout dream stalled on inventory sync, returns, and customer service. So the "build an ACP checkout endpoint" idea is dead on arrival.

But the *discovery* half is very much alive and growing. Products still get **surfaced and recommended** inside ChatGPT, Perplexity, Gemini, and Google's AI Overviews — the buyer just finishes on the seller's own storefront. Shopify reported AI-attributed orders grew **11× year-over-year** (March 2026 announcement). Google's Shopping Graph carries 50B+ listings and is where the recommendation actually happens.

And here's the pain nobody has tooled: a product can be **technically approved** in Google Merchant Center and still be **completely invisible** to AI shoppers, because the AI matches natural-language buyer queries ("organic cotton sleep mask under $30") against product titles and attributes — and "The Luna" matches nothing. Merchant Center's Diagnostics tab tells you a product is *disapproved*. It does **not** tell you an approved product is *AI-invisible*. That's the silent killer, and no diagnostic explains it.

Provenance:
  - Signal 1 (demand): "My products are invisible to ChatGPT. I tried three Shopify apps to fix it" — merchant first-person account; multiple 2026 guides confirm title/attribute mismatch is "the single most common reason enrolled products never surface" — https://jonfrowski.medium.com/my-products-are-invisible-to-chatgpt-i-tried-three-shopify-apps-to-fix-it-and-this-is-what-works-38b806750f31 / https://metricusapp.com/blog/shopify-chatgpt-shopping-products-not-showing/ — 2026-05
  - Signal 2 (feasibility): AI shopping surfaces (ChatGPT, Gemini, Perplexity) are queryable in natural language, and feeds are cheap to parse — "if that file is clean, structured and complete, you are visible. If it is not, you are invisible. Not penalized. Just not there." — https://www.byteout.com/blog/ecommerce/chatgpt-lost-the-ai-shopping-war/ — 2026
  - Signal 3 (economic): Shopify AI-attributed orders up 11× YoY; agencies charging $300–$5,000/mo for "AI search visibility"; a GEO-tracking category (visibility across ChatGPT/Perplexity/Gemini) is forming — https://www.thekeyword.co/news/shopify-chatgpt-agentic-storefront-launch / https://www.nuxa.ai/cost/restaurant-seo — 2026
  Category: Platform shift

## 3. The opportunity

The whole ecommerce world just got a new, invisible gatekeeper — the AI shopping agent — and the failure mode is **silent**. A disapproved product screams at you in Merchant Center. An AI-invisible product says nothing. Your feed is green, your ads run, and yet when a shopper asks Gemini "best budget sleep mask for side sleepers," you're simply not in the answer, and you never find out why.

Two incumbents own the adjacent jobs and neither owns this one:

- **Feed managers (AIShoppingFeeds, DataFeedWatch, Feedonomics, Channable):** they *build and push* feeds to channels including OpenAI Commerce format. They optimize deliverability, not *AI-query answerability*. They'll happily push a "The Luna" title that no AI will ever match.
- **Google Merchant Center Diagnostics:** binary approve/disapprove on policy and data-quality. It has no concept of "approved but unmatchable by natural-language queries."

The 10× move: stop treating this as feed plumbing and treat it as **query-match visibility**. Actually run the natural-language buyer queries a shopper would type, against ChatGPT/Perplexity/Gemini/Google AI, see whether the seller's SKUs come back, and when they don't, pinpoint the exact title/attribute gap and hand over the rewrite. Diagnostic + prescription, not a feed pipe.

## 4. Target market

- **Primary customer:** Owner-operator or solo marketer of an independent online store doing **$200K–$5M/yr GMV**, US-based, selling on WooCommerce, BigCommerce, Squarespace, a custom stack, or a small Shopify store *without* a marketing agency. Categories where natural-language discovery matters most: apparel, home goods, beauty, supplements, gifts, hobby/specialty.
- **Why they buy (in their words):** "My stuff shows up nowhere when I ask ChatGPT, but my competitor does." "Merchant Center says everything's approved so I don't know what's wrong." "I paid an agency $1,500/mo and can't tell if it moved anything."
- **Rough TAM reasoning:** ~500K+ independent US online retailers; even a narrow serviceable slice (non-enterprise, non-agency, discovery-sensitive categories) is comfortably 100K+ stores. Capturing 2,000–4,000 of them at ~$79/mo is a $2–4M ARR business — well inside the target band.
- **Why now for them:** AI-attributed orders are up 11× and climbing; the channel went from "novelty" to "measurable revenue" in one year. The store owner *feels* the traffic shift and has no instrument to see it.

## 5. Product sketch (MVP)

- **Visibility scan:** point ShelfSonar at your store URL / product feed; it ingests your catalog (feed file, sitemap, or Merchant Center connection).
- **Query battery:** for each product it generates the 10–20 natural-language buyer queries a real shopper would ask ("waterproof hiking boots for wide feet under $120"), then runs them against the live AI shopping surfaces.
- **Invisibility report:** a ranked list — "these 47 of your 300 SKUs never surface for any of their buyer queries," with the specific reason per product (title mismatch, missing attribute, no GTIN, thin description, PDF-only spec).
- **One-click rewrite:** for each invisible SKU, a suggested title + description + attribute set written to match how shoppers actually ask, in the store's brand voice — copy-paste or push back via feed.
- **Competitor gap view:** for a given query, show which competitor products *do* surface and what their titles/attributes have that yours lack.
- **Weekly re-scan + alerting:** track visibility score over time per SKU and per surface (ChatGPT vs Gemini vs Google AI vs Perplexity), flag regressions.
- **No checkout, no feed hosting:** we diagnose and prescribe; existing feed tools or the store's own admin apply the fix.

## 6. AI angle — what's load-bearing

AI is the product, twice over. (1) The buyer queries have to be *generated* the way a real human phrases intent — that's an LLM turning a SKU into the messy natural-language questions a shopper asks. (2) The *evaluation* is running those queries against the AI shopping surfaces and parsing whether the SKU came back and why not — semantic matching, not keyword grep. (3) The *rewrite* is an LLM producing a title/attribute set optimized for query-match while staying truthful and on-brand. Remove the AI and you're left with a static feed linter — which already exists and doesn't solve the actual "invisible but approved" problem. The AI is what turns "your feed is technically fine" into "here is the exact reason a shopper can't find this and here is the fix."

## 7. Localization angle (if any)

N/A at launch — this is a **US-first play** by necessity: the AI shopping surfaces, Google Shopping Graph density, and merchant behavior are furthest along in the US, and ACP/UCP eligibility is US-limited today. There's a natural expansion path to UK/EU/AU as those surfaces mature, and a future multilingual angle (does my product surface when a shopper asks in Spanish?), but forcing localization now would dilute the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three self-serve tiers — **Starter $29/mo** (up to 100 SKUs, monthly scan), **Growth $79/mo** (up to 1,000 SKUs, weekly scan, rewrites, competitor gap), **Pro $199/mo** (up to 10K SKUs, daily scan, all surfaces, API). Value metric = SKUs monitored.
- **ACV:** blended ~$85/mo → **~$1,020/yr**.
- **Rough math to $1M ARR:** ~1,000 paying stores at $85/mo blended = $1.02M. Achievable within the non-Shopify + small-Shopify long tail.
- **Rough math to $5M ARR:** ~4,500 stores at ~$92 blended, or hold customer count and lift ACV via more surfaces, more SKUs, and a done-for-you rewrite upsell. Needs retention >85% annually and a working self-serve funnel — the aggressive assumption.
- **Expansion path:** SKU-count creep as catalogs grow; add surfaces (TikTok Shop AI, Amazon Rufus) as premium; a "monthly rewrite pack" service tier; agency/reseller plan for the very firms charging $1,500/mo who need an instrument.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the complainers:** pull the merchants publicly posting "my products are invisible to ChatGPT / not showing in AI" across r/shopify, r/ecommerce, Shopify community forums, and X in the last 90 days. Run a free ShelfSonar scan on their public store and DM them their own invisibility report — "here are your 31 invisible SKUs." Personalized proof, not a pitch.
- **Free public scan as the hook:** a "How invisible is your store to AI shoppers?" landing tool. Enter your URL, get a free top-line score + 5 sample invisible SKUs, paywall the full report + rewrites. This is the top of the funnel and the shareable artifact.
- **Feed-tool adjacency:** the non-Shopify feed tools (WooCommerce/BigCommerce feed plugins) have audiences who already feel the feed pain but get no visibility diagnostic — guest posts, plugin-directory adjacency, integration listings.
- **Category niche beachhead:** start with one discovery-heavy vertical (e.g. specialty apparel or supplements), win 30–40 stores, publish a "we found the average small [category] store is invisible for 34% of its own products" data report as earned-media distribution.
- **Agency wedge:** the $300–$5K/mo AI-visibility agencies need reporting they don't have — sell them a white-label/reseller tier so their clients see a number.

## 10. Build complexity — justification

Medium. The catalog ingest, LLM query-generation, and rewrite pieces are off-the-shelf (feed parsers, an LLM API, standard web stack). The non-trivial part is **reliably querying the AI shopping surfaces and attributing whether a specific SKU surfaced** — these surfaces change, some gate automated access, and results are non-deterministic, so you need a resilient evaluation harness and sampling strategy rather than a brittle single-shot check. Realistically a technical pair ships a credible v1 in **10–14 weeks**; the surface-querying reliability is the engineering risk, not the AI.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading public AI outputs + a seller's own catalog; respect surface ToS/rate limits |
| Ethical — no harm / dark patterns | ✅ | Rewrites must stay truthful; we explicitly refuse keyword-stuffing / false attributes |
| Market exists (evidence above) | ✅ | Live merchant complaints, 11× AI-order growth, agencies already charging |
| 1–5 person team can build this | ✅ | Technical pair, 10–14 weeks to v1 |
| Launchable with <$50K / ₹40L | ✅ | Main cost is LLM/API inference + eval infra |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 14/20 | Real, felt, revenue-linked — but "invisible" pain is quieter than a hair-on-fire outage; some owners don't yet know they have it. |
| Demand evidence | 15 | 11/15 | First-person complaints, 11× order growth, paid agency spend. Strong signal, but much of it is Shopify-app-shaped already. |
| Build feasibility | 15 | 11/15 | Mostly off-the-shelf; surface-querying reliability is the one gnarly bit. |
| Distribution clarity | 15 | 10/15 | Free-scan hook + complainer scraping is concrete; conversion from free scan to paid is unproven. |
| Revenue mechanics | 15 | 10/15 | Pricing benchmarked and wallet-appropriate; $5M needs strong retention on an SMB base that churns. |
| Time to first revenue | 10 | 7/10 | Free-scan-to-paid funnel can convert in weeks post-launch; not pre-sold. |
| Defensibility | 10 | 3/10 | Thin. Execution + accumulated query/rewrite data only. Feed incumbents or a Shopify-app clone can encroach fast. |
| **Total** | **100** | **66/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (resilient surface-querying/eval harness) · `content-heavy` (the free-scan artifact and category data reports are the distribution engine).

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of small stores are AI-invisible for a large fraction of their approved SKUs. **How to test:** run scans on 50 random independent stores; measure the invisible-SKU rate. If it's <15% on average, the pain is too small.
2. **Assumption:** Owners will pay $29–$199/mo for a diagnostic they can't get from Merchant Center. **How to test:** put the free scan behind an email wall, gate the full report, measure free→paid conversion on the first 500 scans. Target >4%.
3. **Assumption:** We can query the AI shopping surfaces reliably enough for trustworthy per-SKU verdicts. **How to test:** build the eval harness first; measure verdict stability across repeated runs on a fixed catalog. Abandon if verdicts are coin-flippy.
4. **Assumption:** Fixing the flagged title/attributes actually moves surfacing within 2–4 weeks. **How to test:** apply rewrites to a cohort, re-scan, measure visibility lift. Falsifiable and it's the whole value prop.

### Risk flags

1. **Platform dependency:** the entire product reads live AI shopping surfaces that can change output format, gate automated access, or shift ranking overnight. This is the top existential risk.
2. **Incumbent encroachment:** feed tools (AIShoppingFeeds et al.) or a Shopify app could bolt on a "visibility check" and reach the Shopify majority faster — hence the deliberate non-Shopify + multi-surface wedge.
3. **Market timing:** if the AI shopping surfaces converge on reading structured feeds directly and auto-normalizing titles, the "invisible-but-approved" gap could close and shrink the problem.
4. **Attribution ambiguity:** proving *our* rewrite caused the visibility lift (vs. the surface reshuffling) is genuinely hard and undercuts ROI claims if we can't show it cleanly.

## 14. Structured verdict

```
Score:                  66/100
Verdict:                VALIDATE
Confidence:             Medium
Best-fit builder:       Technical founder who can build a resilient AI-surface eval harness, paired with a content/GEO operator for the free-scan distribution engine
Time to revenue:        6–10 weeks post-launch (free-scan → paid funnel)
Capital to launch:      $8–15K ($ mostly LLM/API inference + eval infra)
Top 3 assumptions to validate first:
  1. Invisible-SKU rate on real stores is high (scan 50 stores, need >15% avg)
  2. Free→paid conversion on gated scan clears ~4% (gate first 500 scans)
  3. Surface-querying yields stable per-SKU verdicts (build eval harness, measure repeatability)
Kill criteria:
  - Abandon if average invisible-SKU rate across 50 scanned stores is <15%
  - Abandon if per-SKU verdicts aren't repeatable enough to trust (verdict flips >20% run-to-run on a fixed catalog)
  - Abandon if free→paid conversion stays <2% after 1,000 scans
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway eval harness — take 10 real independent stores' public catalogs, generate buyer queries for ~30 SKUs each, run them against ChatGPT/Gemini/Google AI, and record surfaced-or-not. This alone tests the hardest technical assumption.
- **Day 3–4:** Compute the invisible-SKU rate per store and eyeball *why* the invisible ones failed. Hand three store owners their personalized invisibility report (cold DM) and ask one question: "would you pay $79/mo to fix and monitor this?"
- **Day 5:** Decide. **Go** only if (a) average invisible-SKU rate ≥15%, (b) per-SKU verdicts are stable enough to trust, and (c) ≥1 of 3 owners says yes to paying. Any one failing → back to the drawing board or PASS.

The result is falsifiable: a hard invisible-SKU percentage, a repeatability number, and a yes/no on willingness-to-pay — not "people seemed interested."
