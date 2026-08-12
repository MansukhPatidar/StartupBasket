---
title: "ShelfProof — agent shelf audit for Shopify merchants"
slug: agentic-shelf-audit
date: 2026-08-12
category: Retail / US — Shopify D2C Merchants ($500K–$20M GMV) Auto-Enrolled Into AI Shopping Channels That Silently Drop Products Nobody Told Them Were Missing
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Asks the AI shopping agents what they actually see, then fixes the product data that made you invisible."
tags:
  vertical: Retail
  model: SaaS
  geography: US
  secondary: [Platform-shift, SMB, AI-agent, Solo-builder, Ecommerce, Shopify]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 13
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ShelfProof

## 1. One-liner

Asks the AI shopping agents what they actually see, then fixes the product data that made you invisible.

## 2. Trend signal — why now?

Something structural happened in March 2026 and most merchants slept through it.

On 24 March 2026, Shopify activated **Agentic Storefronts by default** for eligible US merchants — syndicating catalogs into ChatGPT, Microsoft Copilot and Google AI Mode without merchants opting in. Merchants found out after the fact. The Shopify Community thread is not subtle about it: *"For the new 'Agentic Storefronts', not only does it not wait for sellers to Opt In, it doesn't allow us to Opt Out."* (thefourthplace, 4 April 2026).

The traffic is real, not theoretical. Shopify reported that in Q1 2026, **AI-driven traffic to Shopify stores grew 8× year over year, and orders from AI-powered searches grew nearly 13×**. New buyers place orders through AI channels at nearly twice the rate of other channels. Metricus puts AI-attributed orders at 11× growth between January 2025 and early 2026.

Here's the gap. Being enrolled is not being visible. An audit of high-growth brands found **82% of Shopify stores have significant data-quality gaps** — missing Google Product Category, missing GTIN, JSON-LD that contradicts the Merchant Center feed, creative product titles ("The Luna") that match no shopper query. Agents quietly skip those products. And when I read Shopify's own documentation on agentic storefront products, it describes what gets excluded but **specifies no exclusion report and no diagnostic status view for merchants**. There is no "your product was dropped" email. There is no error queue.

So the merchant is enrolled by default into a channel growing 13× a year, is probably invisible in it, and has no instrument that tells them so. Meanwhile in research testing 1,000 brand queries across five AI platforms, **70% of brands tested were completely invisible**.

That's the whole idea: build the instrument.

```
Provenance:
  - Signal 1 (Demand): Shopify auto-enrolled US merchants into agentic storefronts on 24 Mar 2026 with no opt-out; merchants publicly complaining about zero control and zero visibility — https://community.shopify.com/t/not-allowed-to-opt-out-of-generative-ai-agentic-storefronts/600746 — 4–12 April 2026
  - Signal 2 (Feasibility): Shopify's own docs define agentic product syndication but provide no merchant-facing exclusion reporting or diagnostic view; 82% of stores carry data-quality gaps that silently suppress products — https://help.shopify.com/en/manual/online-sales-channels/agentic-storefronts/products + https://metricusapp.com/blog/shopify-chatgpt-shopping-products-not-showing/ — accessed 12 Aug 2026
  - Signal 3 (Economic): Shopify Q1 2026 — AI-driven traffic up 8× YoY, AI-search orders up ~13× YoY; AI-visibility tooling market already clearing $99–$495/mo (Profound, Peec, Otterly) — https://shopify.com/news/agentic-commerce-momentum + https://acromatico.com/ai-visibility-tool-pricing-compared — 2026
  Category: Platform shift
```

## 3. The opportunity

Two camps exist today and neither serves the mid-market Shopify merchant.

**Camp one — AI visibility trackers.** Profound ($99–$5,000/mo), Peec (€89–199), Otterly ($29–489), Scrunch, Anagram, AthenaHQ, Cognizo. These are *brand* monitors built for marketing teams: they track share-of-voice on prompts like "best running shoes" and tell you your brand got mentioned 4% of the time. They are diagnosis without treatment. A merchant learns they're invisible and gets a chart, not a fix.

**Camp two — feed apps.** Multifeed, AdNabu, Simple Google Shopping Feed, 42feeds. Paid tiers start around $5.95/mo. These are plumbing: they map GTIN and Google Product Category and push a valid XML feed. They optimize for Google Merchant Center's validator, which is a *rules* checker. They have no idea what ChatGPT actually said when a shopper asked for your product.

The gap between the two is the entire product. Camp one tells you that you're invisible at the brand level. Camp two makes your feed technically valid. **Nobody closes the loop at SKU level** — nobody asks the agents real buying questions, records which SKUs surfaced and which competitor won instead, traces that back to the specific data defect on that specific product, and fixes it.

That loop is what a merchant will pay for, because it's the only version that ends in more orders instead of more dashboard. The incumbents' weakness is structural: visibility trackers don't have write-access to your catalog, and feed apps don't have an observation layer. This sits in the middle and needs both.

## 4. Target market

- **Primary customer:** Shopify merchants doing **$500K–$20M GMV**, US-based, in considered-purchase categories where shoppers ask comparison questions — supplements, skincare, home goods, pet, outdoor gear, specialty apparel, small appliances. The buyer is the founder, the head of ecommerce, or a fractional ecommerce consultant running 5–15 stores. 1–20 employees. Already spending on Google Shopping and Meta.
- **Why they buy:** They know something changed and can't measure it. They've read that AI orders are up 13×. They ask ChatGPT for their own product, watch a competitor come back, and have no idea why. The current workaround is literally manual: the Metricus writeup notes the step most store owners skip is manually typing their product names into AI platforms to see what comes back. That's a person with a spreadsheet doing this by hand, badly, once.
- **Rough TAM reasoning:** Shopify has millions of merchants, but the honest slice is narrow. Merchants above $500K GMV in agent-relevant categories in the US is realistically in the low hundreds of thousands. I need ~700 of them paying $149/mo for $1.25M ARR. That's a fraction of a percent of the reachable base — appropriately unambitious.
- **Why now for them:** Default enrollment in March 2026 means the channel is live whether they engage or not. Fix cycles are fast enough to feel: price and availability changes propagate in 24–72 hours, titles and new products index in 1–3 weeks. Metricus reports 80% of brands implementing the top three fixes saw measurable change within 10 days. A tool that produces visible movement in 10 days sells itself on a trial.

## 5. Product sketch (MVP)

- **Shelf audit.** Runs your real category buying questions ("best magnesium supplement for sleep", "waterproof dog bed under $80") across ChatGPT, Google AI Mode, Copilot and Perplexity on a schedule, and records which products and brands came back.
- **SKU-level surfacing report.** Not "your brand appeared 4% of the time" — *"these 41 of your 380 SKUs have never once surfaced on any tracked question."* That list is the product.
- **Defect trace.** For each invisible SKU, name the probable cause: title doesn't match how shoppers phrase it, missing Google Product Category, missing GTIN, JSON-LD disagreeing with the feed, AI crawler blocked in robots.txt, variant data incomplete.
- **One-click rewrites.** Generates query-shaped titles and descriptions for the flagged SKUs and writes them back to Shopify on approval. Keeps the old version so a merchant can roll back.
- **Competitor capture.** When a rival wins your question, log which brand, which product, and what the agent cited as the source.
- **Re-audit and proof.** Re-runs the same questions 14 days post-fix and shows what moved. This is the retention mechanic and the renewal argument.
- **Crawler and schema preflight.** Flags themes blocking AI crawlers and Product schema that contradicts the catalog.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product — not because the app uses an LLM to write copy, but because **the thing being measured is an AI system's behavior**. The observation layer *is* querying models at scale and parsing unstructured, non-deterministic answers into structured SKU-level records. There's no API that reports "your product was excluded"; the only way to know is to ask the agent and read what it says. That's irreducibly a model-interrogation problem.

Second load-bearing use: mapping a natural-language answer back to a defect. Understanding that "The Luna" lost to "organic cotton sleep mask" because of title-query mismatch is a language judgment, not a rules check. Feed validators have existed for fifteen years and cannot do this.

The rewriting is the *least* important AI in the stack. Anyone can generate a title. Knowing which 41 SKUs need one is the moat-ish part.

## 7. Localization angle (if any)

`N/A — this is a US-first play.` The wedge is created by a specific platform event in a specific market: Shopify's default enrollment applied to **US** merchants, and the agent shopping surfaces (ChatGPT shopping, Google AI Mode) have their deepest commerce integration in the US. Running this in India or SEA today means measuring a channel that barely converts there yet. Follow the enrollment as Shopify expands it — UK, Canada, Australia are the natural second wave, and the product ports with zero localization work since it's all English-language agent querying.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $99/mo (up to 250 SKUs, 2 engines), **$199/mo** (up to 2,000 SKUs, 4 engines, weekly re-audits), $399/mo (unlimited SKUs, daily audits, competitor tracking, multi-store for agencies).
- **ACV:** ~$1,800 blended. Sits deliberately between the $5.95 feed apps and Profound's $399+ enterprise tier — expensive enough to signal it isn't plumbing, cheap enough to go on a company card without a meeting.
- **Rough math to $1M ARR:** 560 customers × $149/mo avg × 12 = $1.0M. Realistic mix: ~400 self-serve at $99–199 and ~160 agency/multi-store seats at $399.
- **Rough math to $5M ARR:** Needs ~2,300 paying merchants at a higher blended ACV (~$180), which means winning the agency channel properly — consultants managing 10–30 stores each buying multi-store seats. It also assumes agent commerce keeps compounding; if AI order share plateaus, this caps closer to $2M. I'd rather state that than pretend the $5M is safe.
- **Expansion path:** SKU-count tiers (grows automatically as catalogs grow), added engines, multi-store agency seats, and eventually a done-for-you remediation tier where the fixes are applied and reported monthly — that's a $600–1,200/mo service line with real gross margin once the audit engine exists.

Cost side is honest: model calls to run hundreds of queries across four engines on a schedule. At $199/mo with weekly audits this is a few dollars of inference per account per month. Margin is fine; it just isn't free, so the cheap tier must cap query volume.

## 9. Go-to-market wedge — first 100 customers

- **Free public audit as the entire top of funnel.** Merchant enters their store URL, gets a real report in 90 seconds: "we asked 20 buying questions in your category — you appeared in 3, here are the 41 SKUs that never surfaced, here's who won instead." This is genuinely alarming and genuinely free, and it's the exact thing merchants are currently doing by hand. Gate the fixes, not the diagnosis.
- **Mine the Shopify Community and Reddit threads directly.** The opt-out thread has named, dated, angry merchants on record. r/shopify, r/ecommerce and the Shopify forums have an ongoing stream of "why aren't my products showing in ChatGPT." Reply with their actual audit — not a pitch, the report. Expect a high reply rate because you're handing over information they can't get anywhere else.
- **Agency and consultant channel.** Ecommerce consultants and Shopify Plus partners each manage 10–30 stores and are being asked "what's our AI strategy" by every client right now. They have no defensible answer. Give them a white-labelable multi-store audit at $399/mo; each one that adopts drags in a portfolio. Target the ~300 most active Shopify Partners on LinkedIn with a report on one of their public client stores.
- **Category leaderboards as content.** Publish "who wins 'best magnesium supplement' on ChatGPT — August 2026" per category, monthly. Every brand named checks their own position, every brand not named finds out they're invisible. This produces the inbound the tracker tools currently capture, at zero ad spend.
- **Shopify App Store listing.** Slow to rank but compounding, and it's where the buying intent already sits. Not the primary channel for the first 100 — it's the channel for customers 300–1,000.

The first 100 come from the free audit plus forum mining. That's a 6–8 week sprint, not a strategy deck.

## 10. Build complexity — justification

**Low.** The observation layer is scheduled model queries plus structured parsing — off-the-shelf APIs, no custom models. The write-back is the Shopify Admin API, which is well-documented and stable. The defect-trace rules (missing GTIN, category, schema mismatch, robots.txt crawler blocks) are ordinary checks against catalog and page data. No proprietary data, no infrastructure exotica.

A competent solo builder ships a credible v1 in **6–8 weeks**; a pair does it in 4–5 with a better free-audit funnel. The genuine engineering discipline is in query-set design per category and in keeping parsing stable as agent output formats drift — that's ongoing maintenance, not a build blocker.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Querying public consumer AI interfaces and using a merchant's own catalog via authorized OAuth. Must respect each engine's ToS on automated querying — use official APIs where available; this constrains method, not legality. |
| Ethical — no harm / dark patterns | ✅ | Tells merchants the truth about their own visibility and fixes their own data. No scraping of competitor private data, no manipulation of shoppers. |
| Market exists (evidence above) | ✅ | Adjacent tools clearing $99–$495/mo; 13× order growth; documented merchant complaints. |
| 1–5 person team can build this | ✅ | Solo-to-pair, 6–8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $5–10K: inference costs, Shopify Partner account, landing page. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and growing, but it's *invisible* pain — merchants are losing orders they never knew existed. That's weaker than a compliance deadline or a bill they must contest. It's a "should fix" not a "hair on fire," and that shows up in trial-to-paid. |
| Demand evidence | 15 | 12/15 | Strong: named merchants complaining on record, 13× order growth, an entire funded tool category already charging $99–495/mo. Docked because most of that spend is currently brand-level tracking by marketing teams, not SKU-level fixing by SMB merchants — adjacent, not identical. |
| Build feasibility | 15 | 13/15 | Off-the-shelf APIs, standard stack, 6–8 weeks solo. Only real friction is parsing drift across engines. |
| Distribution clarity | 15 | 13/15 | The free audit is a genuinely strong wedge — it delivers alarming, unavailable-elsewhere information in 90 seconds. Named forum threads with named merchants. Agency channel multiplies. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked against a live market. But it sits between a $5.95 commodity and a $399 enterprise tool, and price compression from feed apps adding "AI readiness" checkboxes is a genuine threat. Inference cost is real, not zero. |
| Time to first revenue | 10 | 8/10 | Free audit → paid fix conversion can start week one post-launch. Self-serve, card on file, no sales cycle. |
| Defensibility | 10 | 2/10 | This is the problem. A feed app with distribution can bolt on agent querying in a quarter. Shopify itself could ship an exclusion report and vaporize the diagnostic half. The only accumulating asset is the longitudinal record of what agents answered over time per category — real, but thin, and it takes a year to matter. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy` — you need someone who can build the query/parse engine and someone who will publish category leaderboards every month. The content engine is not optional; it *is* the distribution.

### Key assumptions to validate (3–5)

1. **Assumption:** Merchants will pay $149–199/mo for SKU-level agent visibility, not just $29 for brand tracking. **How to test:** Run 40 free audits from forum threads, then put a real Stripe checkout behind the fix workflow. Measure audit → paid conversion. Below 8% means the pricing tier is wrong.
2. **Assumption:** Fixing the flagged defects actually moves agent surfacing within 2–4 weeks. **How to test:** Take 15 volunteer stores, fix the top three defects on half their invisible SKUs, hold the other half as control, re-audit at day 14 and 28. If treated and control move the same, the product's core promise is false and this dies.
3. **Assumption:** The invisible-SKU list is large enough per store to be alarming. **How to test:** Run 100 stores through the audit before launch. If the median store has fewer than 10% invisible SKUs, the report isn't scary and the funnel collapses.
4. **Assumption:** Agencies will buy multi-store seats. **How to test:** Cold-outreach 50 Shopify Partners with a free audit of one public client store; measure how many ask for portfolio pricing.

### Risk flags

1. **Platform dependency — severe.** Two-sided. Shopify could ship a native exclusion/diagnostic report and kill the diagnosis half of the product overnight; the AI engines could restrict automated querying and kill the observation half. Mitigate by using official APIs where they exist and by making the *remediation* workflow the retained value, not the report.
2. **Defensibility is genuinely weak (2/10).** No proprietary data, no network effect, no regulatory knowledge. This is an execution-and-speed play. It wins by being first and building the category-leaderboard brand, or it doesn't win.
3. **Market timing — could be early.** AI order share is growing fast but off a small base. If a merchant's AI-attributed revenue is 1.5% of GMV, a $199/mo tool is a hard sell no matter how good the report. The 13× growth rate is the bet; if it flattens, the whole thesis flattens.
4. **Measurement attribution.** Proving *your* fix caused the surfacing change is hard when agent outputs are non-deterministic and shift with model updates. The control-group design in assumption 2 is mandatory, not optional — without it the product can't honestly claim ROI.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder or pair, ecommerce-native, willing to
                        publish category content monthly. Shopify ecosystem experience
                        is a major accelerant.
Time to revenue:        6–10 weeks (6–8 week build, free-audit funnel converts immediately)
Capital to launch:      $5–10K (₹4–8 lakh)
Top 3 assumptions to validate first:
  1. Fixes actually move agent surfacing — 15-store treated/control test at day 14 and 28
  2. Median store has a genuinely alarming invisible-SKU count — run 100 stores pre-launch
  3. $149–199/mo converts from a free audit at ≥8% — live Stripe checkout, 40 audits
Kill criteria:
  - Abandon if the treated/control test shows no surfacing lift at day 28 — the core
    promise is then unfalsifiable and the product is a dashboard
  - Abandon if free-audit → paid conversion stays under 4% across 100 audits
  - Abandon if Shopify ships a native per-SKU agentic exclusion/diagnostic report before
    v1 launches — the diagnosis wedge closes and only commodity rewriting remains
  - Abandon if median invisible-SKU rate across 100 stores is under 10%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Hand-build the audit for 25 real Shopify stores pulled from the Shopify Community opt-out thread and r/shopify. 20 category buying questions each, four engines, manual parsing into a spreadsheet. No product, no code beyond scripts. Record the invisible-SKU rate per store.
- **Day 3–4:** Send all 25 merchants their report cold, unsolicited, free. Measure reply rate and — the real signal — how many ask "how do I fix this?" unprompted. Offer 5 of them a manual fix for $199 paid upfront.
- **Day 5:** Decide on falsifiable outcomes. **Go if:** median invisible-SKU rate ≥10%, ≥8 of 25 reply, and **≥2 of 5 actually pay $199 before any product exists**. **No-go if:** fewer than 2 replies ask about fixing, or zero pre-payments — that means merchants find the information interesting but not worth money, which is the difference between a blog post and a business.

The pre-payment is the whole test. Reports get read; invoices get paid. Only one of those is a market.
