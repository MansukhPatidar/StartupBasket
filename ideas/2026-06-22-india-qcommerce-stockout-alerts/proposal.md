---
title: "ShelfRadar — stockout radar for India's quick-commerce brands"
slug: india-qcommerce-stockout-alerts
date: 2026-06-22
category: Retail / India
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches dark-store stockouts and ranking drops on Blinkit, Zepto and Instamart before a brand loses a day's sales."
tags:
  vertical: Retail
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, SMB, AI-agent, D2C, Quick-commerce]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ShelfRadar

## 1. One-liner

Catches dark-store stockouts and ranking drops on Blinkit, Zepto and Instamart before a brand loses a day's sales.

## 2. Trend signal — why now?

Quick commerce is no longer a side channel in India — it's where discovery happens. Blinkit hit ~650k daily orders by May 2026, ahead of Zepto (~550k) and Instamart (~112M orders in Q4 FY26). Funding into the sector ran $271M across 9 rounds by March 2026, up ~1000% YoY. Every D2C brand is now being pushed onto these apps.

And every one of them is bleeding silently. The mechanic is brutal and well-documented: availability is decided **per dark store, per pincode** — being listed nationally means nothing. When an SKU shows "out of stock," the platform algorithm deprioritizes it, and even after restock it takes **2–3 weeks to rebuild ranking**. Miss fill-rate targets in the first 48–72 hours of a live listing and your rank takes a hit that takes weeks to recover. 50% of consumers switch to a rival app entirely when their preferred brand is OOS — so a stockout doesn't lose one sale, it leaks high-intent customers permanently.

The kicker: small brands have **no alerting**. As one industry write-up put it, "It's a common frustration for brand managers to look at their sales dashboard and see a sudden dip, only to find that their product was 'out of stock' for half the city." Enterprise tools that solve this (42Signals, DataWeave, GobbleCube) are priced and built for category-manager teams at large FMCG brands. The thousands of ₹2–25cr brands newly forced onto q-commerce check listings by hand, daily, or not at all.

Provenance:
  - Signal 1 (demand): Stockouts trigger algorithmic deprioritization, 2–3 week ranking recovery, 50% of customers switch platforms when OOS; brands discover dips only after the fact with "no automatic alerts" — https://www.42signals.com/blog/visibility-on-quick-commerce-platforms/ and https://codexxa.net/blog/how-to-sell-on-zepto-and-blinkit/ — 2026-06-22
  - Signal 2 (feasibility): Pincode/dark-store-level availability + share-of-search scraping with WhatsApp/Telegram alerts is a proven, commoditized pattern (42Signals, Actowiz); cheap AI to convert raw scrapes into a prioritized action list is the new layer — https://www.actowizmetrics.com/darkstore-data-analytics-instamart-zepto-blinkit.php — 2026-06-22
  - Signal 3 (economic): Q-commerce funding $271M / 9 rounds by Mar 2026 (+~1000% YoY); Blinkit ~650k daily orders; small brands already spend on the channel but bleed (founder: "spent over a million capital on these platforms within three months, not even 10% of sales") — https://www.deccanherald.com/business/with-87-companies-in-indias-quick-commerce-segment-raises-404-million-in-2025-3684626 and https://www.storyboard18.com/brand-marketing/quick-commerces-ad-fee-toll-are-platforms-squeezing-out-small-d2c-brands-73952.htm — 2026-06-22
  Category: Underserved niche

## 3. The opportunity

The incumbents (42Signals, DataWeave, GobbleCube, Actowiz) built a real category — hyperlocal digital-shelf analytics — but they built it for mid-market and enterprise FMCG. Their product is a **dashboard for an analyst**: deep, broad, multi-platform, priced for a category-management team that has the headcount to stare at it.

The small brand doesn't have that headcount. The founder *is* the category manager, the performance marketer, and the ops lead. They don't want a BI tool with 40 charts. They want a phone buzz that says: *"Your bestseller went OOS in 38 of 120 Bengaluru dark stores 3 hours ago — and your search rank for 'protein bar' dropped from #4 to #11. Call your replenishment contact."*

ShelfRadar is the **action layer, not the analytics layer**. Same underlying scraped data, radically narrower job-to-be-done: detect the three things that actually cost money (stockouts, ranking drops, undercut pricing), rank them by lost-revenue impact, and push a one-line "fix this now" to WhatsApp. Priced for a ₹2–25cr brand, not a Britannia.

## 4. Target market

- **Primary customer:** Founder or head-of-growth at an Indian D2C brand doing ₹2–25cr annual revenue, live (or going live) on at least one of Blinkit/Zepto/Instamart, with 5–60 SKUs. Think a regional snack brand, a personal-care line, a supplements brand — bootstrapped or lightly funded, no dedicated e-commerce analyst.
- **Why they buy (in their words):** *"Sellers are unaware whether a spike in orders was caused by paid advertising, organic traction, or something else entirely"* (Sonalika Sabharwal, SouLilly Toys). *"The ROAS rarely goes beyond 1.2x to 1.5x for small brands"* — they cannot afford to also leak organic sales to silent stockouts.
- **Rough TAM reasoning:** India's q-commerce seller base is tens of thousands and growing; the platforms onboard new brands continuously. Even 10,000 addressable small brands × ₹3,000/mo ACV ≈ ₹36cr (~$4.3M) ARR ceiling on the entry tier alone — and that's before multi-platform and pricing-intelligence upsells.
- **Why now for them:** Q-commerce flipped from optional to mandatory for discovery in the last 12 months. Brands that ignored it in 2024 are scrambling onto it in 2026, paying 35–50% of selling price in platform + ad fees, and cannot afford to lose the *free* sales on top.

## 5. Product sketch (MVP)

- Connect a brand by handing over its SKU list + the cities/pincodes it cares about (no platform login or API needed for v1 — public app data).
- Per-dark-store / per-pincode availability tracking across Blinkit, Zepto, Instamart, refreshed multiple times a day.
- Instant WhatsApp + Telegram alert when an SKU crosses a stockout threshold (e.g. "OOS in >20% of tracked stores").
- Daily share-of-search tracking for the brand's 10–20 priority keywords; alert when organic rank drops sharply.
- Competitor price + availability watch on a handful of named rival SKUs; alert on undercut.
- A weekly "Monday fix list": the 5 highest-impact issues ranked by estimated lost-sales, in plain language, with a suggested action each.
- No 40-chart dashboard. One screen: today's leaks, this week's fixes.

## 6. AI angle — what's load-bearing

The scraping is plumbing — not the moat, not the AI. The AI does two load-bearing jobs:

1. **Noise-to-signal triage.** Raw availability data across hundreds of dark stores is overwhelming. AI clusters it into a ranked, lost-revenue-weighted shortlist ("these 5 things matter, ignore the other 200 fluctuations") and writes each as a one-line instruction a non-analyst founder can act on. Without this, you've just rebuilt the enterprise dashboard the customer can't use.
2. **Anomaly + cause attribution.** Distinguishing a real ranking collapse from normal daily churn, and tying a sales dip to its cause (OOS vs. rank drop vs. competitor promo) — exactly the "was it paid, organic, or something else?" question founders say they can't answer.

Remove the AI and you have a raw data feed nobody on a 3-person brand team has time to read. The product *is* the triage.

## 7. Localization angle

India-first by construction. The platforms (Blinkit/Zepto/Instamart), the dark-store-per-pincode availability model, and the buyer wallet are all India-specific. Delivery is WhatsApp-first because that's where Indian SMB founders live. Pricing in ₹ at a ₹2,500–8,000/mo band that global digital-shelf tools (priced in enterprise USD) structurally cannot match. The same pattern could later port to LatAm/SEA q-commerce, but the wedge is India.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Starter ₹2,500/mo (one platform, one city, up to 15 SKUs). Growth ₹6,000/mo (all three platforms, up to 5 cities, 50 SKUs, competitor watch). Scale ₹15,000/mo (unlimited cities, pricing intelligence, agency seats).
- **ACV:** ~₹55,000–70,000 (~$700–850) blended.
- **Math to $1M ARR (~₹8.3cr):** ~1,200 brands at a ~₹58k blended ACV. Reachable inside the small-brand segment alone.
- **Math to $5M ARR:** ~6,000 brands, or fewer brands + an agency/reseller tier (agencies managing 20–50 brands each on a Scale plan) + a pricing-intelligence upsell. The agency channel is the realistic accelerant past $1M.
- **Expansion path:** more platforms/cities/SKUs → competitor pricing intelligence → ad-spend efficiency module (tie organic rank to paid spend) → light replenishment-suggestion layer.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the shelf, then pitch the leak.** The product's own engine finds, today, which named small brands are OOS across many dark stores. Cold-DM/email those founders a 30-second Loom showing *their* live stockout map: "you were out in 38 stores this morning." That's not a pitch, it's a diagnosis. Target 5% reply on a list of 2,000.
- **Q-commerce agencies and onboarding consultants** (the firms running "Blinkit/Zepto listing optimization" services) — partner/reseller deals; they have the brand relationships and want a retention tool. 10–15 agencies each bringing 10+ brands.
- **D2C founder communities** — the relevant WhatsApp/Slack groups, the Inc42/Storyboard18 readership, and niche subreddits where these exact complaints are posted. Seed with a free "is my brand leaking?" one-time stockout audit as the top-of-funnel hook.

If a brand sees its own live OOS map, the demo *is* the close. That's why distribution is the strong axis, not the weak one.

## 10. Build complexity — justification

Medium. The scraping/availability-tracking infra across three platforms at pincode granularity is real engineering — anti-bot handling, data freshness, scale — but it's a known, off-the-shelf-adjacent problem (multiple vendors already do it, and scraping toolchains are mature). The AI triage and alerting sit on commodity LLM APIs + WhatsApp/Telegram. No novel ML, no hardware, no compliance bureaucracy. A 2–3 person team ships a credible v1 (one platform, two cities) in ~10–12 weeks, full three-platform coverage in ~4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Scraping public app data; stays clear of login/ToS-gated seller data in v1. Watch platform ToS as it scales. |
| Ethical — no harm / dark patterns | ✅ | Helps small brands compete; no deception. |
| Market exists (evidence above) | ✅ | Enterprise incumbents + documented small-brand pain + funded sector. |
| 1–5 person team can build this | ✅ | 2–3 people, ~4 months to full coverage. |
| Launchable with <$50K / ₹40L | ✅ | Scraping infra + LLM + messaging costs; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Silent revenue leak, felt daily, directly costs money and compounds (ranking decay). Just short of hair-on-fire because some brands haven't quantified the loss yet. |
| Demand evidence | 15 | 12/15 | Funded enterprise incumbents prove willingness-to-pay; multiple documented small-brand complaints; sector funding. Gap: no direct proof small brands will pay *this* price for *this* narrow tool yet. |
| Build feasibility | 15 | 12/15 | Scraping at scale is the real work but well-trodden; AI layer is commodity. |
| Distribution clarity | 15 | 12/15 | The "show them their own live stockout map" cold open is unusually strong; agency reseller channel is concrete. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below enterprise tools, ACV reasonable; ₹2,500 entry needs high volume to matter — agency tier carries the upside. |
| Time to first revenue | 10 | 8/10 | Diagnostic-led selling can close in days once a single-platform/single-city MVP is live; ~8–10 weeks to first paying brand. |
| Defensibility | 10 | 3/10 | Scraping is copyable; incumbents could trivially launch a cheap tier. Moat is speed, SMB-shaped UX, and the agency relationships — execution-only. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (scraping at scale + freshness is the hard part) · `domain-expertise-required` (must understand q-commerce ranking mechanics to weight the action list correctly).

### Key assumptions to validate (3–5)

1. **Assumption:** Small brands (₹2–25cr) will pay ₹2,500–6,000/mo for stockout/ranking alerts. **How to test:** Pre-sell to 20 founders off a free live stockout audit; require a card/UPI mandate, not a "yes I'd buy."
2. **Assumption:** The "your own live OOS map" cold open converts at ~5%. **How to test:** Run 200 personalized diagnostic Looms, measure reply + demo-booked rate.
3. **Assumption:** Pincode-level scraping stays reliable and affordable across three platforms at scale. **How to test:** Build the single-platform tracker first; measure data freshness, breakage rate, cost per 1,000 SKU-store checks over 4 weeks.
4. **Assumption:** Agencies will resell rather than build it themselves. **How to test:** Pitch 10 q-commerce agencies a rev-share; get 2 signed LOIs.

### Risk flags

1. **Platform dependency / ToS:** Entire product reads from three platforms that can change layouts, throttle, or block scraping. Mitigate with multi-platform spread and graceful degradation; never depend on a single app.
2. **Incumbent fast-follow:** 42Signals or GobbleCube can launch a ₹5k SMB tier in a quarter. Mitigate by owning the SMB UX + agency channel before they notice the segment.
3. **Market timing:** Platforms may improve their own seller dashboards (Blinkit already offers SKU/city attribution), eroding the gap. Mitigate by being cross-platform — no single platform's dashboard spans all three.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can run scrapers at scale, paired with a q-commerce domain advisor
Time to revenue:        8–10 weeks (single-platform, single-city MVP + diagnostic-led sales)
Capital to launch:      ₹6–12 lakh ($7–14K)
Top 3 assumptions to validate first:
  1. Small brands pay ₹2,500–6,000/mo — pre-sell 20 off a free live stockout audit with a payment mandate
  2. "Your own live OOS map" cold open converts ~5% — 200 personalized diagnostic Looms
  3. Pincode scraping stays reliable + cheap at scale — 4-week single-platform reliability/cost test
Kill criteria:
  - Abandon if <3 of 20 audited brands convert to paid after seeing their own live stockout map
  - Abandon if per-SKU-store scraping cost or breakage makes the ₹2,500 tier unprofitable at 4-week test
  - Abandon if Blinkit + Zepto + Instamart all ship adequate free cross-platform alerting before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Hand-build (even semi-manually) a live stockout + rank snapshot for 15 named small brands in one city on one platform. This is the demo asset.
- **Day 3–4:** Send each founder a 30-second personalized Loom showing their own leak map. Ask for a 15-min call and a ₹2,500/mo pre-commit (UPI mandate / card).
- **Day 5:** Decide. **Go** if ≥3 of 15 put down a real payment commitment off nothing but the diagnostic. **No-go** if founders nod ("useful!") but none will pre-pay — that means the pain isn't priced, and the ₹2,500 tier won't survive contact.

Falsifiable: payment mandates, not enthusiasm.
