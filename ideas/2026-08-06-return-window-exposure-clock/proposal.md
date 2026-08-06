---
title: "ReturnClock — open-window exposure clock for DTC brands"
slug: return-window-exposure-clock
date: 2026-08-06
category: Retail / US+EU DTC — Shopify Brands ($2M–$20M Revenue) Running Extended and Promotional Return Windows
complexity: Low
score: 71
verdict: GO
confidence: Medium
oneLiner: "Shows a DTC brand how much revenue is still returnable today, before Returnuary eats the quarter."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [DTC, Shopify, SMB, AI-agent, Solo-builder, Finance-ops]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 2
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ReturnClock

## 1. One-liner

Shows a DTC brand how much revenue is still returnable today, before Returnuary eats the quarter.

## 2. Trend signal — why now?

Three things changed in the last 18 months, and together they broke the way small brands think about returns.

**Return windows stopped being 30 days.** For the 2025 holiday season, every major retailer stretched their window into late January 2026 — Amazon accepting Nov 1–Dec 31 purchases until Jan 31, Walmart taking Oct 1–Dec 31 purchases through Jan 31, Target extending Nov 1–Dec 24 purchases to Jan 24 ([Krazy Coupon Lady](https://thekrazycouponlady.com/tips/money/holiday-shopping-returns), [PPC Land](https://ppc.land/amazon-extends-holiday-return-window-through-january-2026/)). Small brands match these windows because they're competing for the same shopper. The moment they do, a sale made in October is not really revenue until February.

**The returns curve moved and merchants didn't notice.** Cahoot's December 2025 analysis found shoppers now "buy earlier, return earlier," that retailers were "caught off-guard by how many returns showed up early," and — the line that matters — that "few rigorously forecast holiday returns." It also flags a "real liquidity crunch" specifically for smaller e-commerce sellers ([Cahoot, 29 Dec 2025](https://www.cahoot.ai/holiday-returns-hitting-earlier-than-expected-and-operations-impact/)). Ordoro's reporting on the same season notes that too many merchants still don't know the true cost of returns or have a way to track them, which makes planning nearly impossible ([Ordoro](https://blog.ordoro.com/2025/12/17/ecommerce-return-trends-2025/)).

**The accounting standard already demands this number, and nobody small is computing it.** Under ASC 606 returns are variable consideration: an accrual-basis seller must book a refund liability and return asset *at the time of sale*, not when the return arrives. Guidance is explicit that booking on arrival makes the P&L lag reality by 30–60 days, and that the reserve assumption should be re-tested quarterly against actuals. Public DTC companies disclose this reserve in 10-K footnotes, typically running 2–6% of gross revenue ([Glencoyne](https://www.glencoyne.com/guides/returns-accrual-best-practices), [Numeral](https://gonumeral.com/refund-accounting-under-gaap/)).

So: the obligation got longer, the timing got less predictable, the standard requires a number, and the brands in the $2M–$20M band are computing it with a blended historical percentage in a spreadsheet — if at all.

Provenance:
  - Signal 1 (demand): "Few rigorously forecast holiday returns"; retailers "caught off-guard"; smaller sellers face a "real liquidity crunch" — https://www.cahoot.ai/holiday-returns-hitting-earlier-than-expected-and-operations-impact/ — 29 Dec 2025
  - Signal 2 (feasibility): Extended windows now standard to late January across Amazon/Walmart/Target, making open-obligation horizons 10+ weeks instead of 4 — https://ppc.land/amazon-extends-holiday-return-window-through-january-2026/ — 2025-2026 season
  - Signal 3 (economic): ASC 606 requires refund-liability accrual at time of sale; reserves run 2–6% of gross revenue at public DTC brands; returns-management software already sells at $155–240/mo (Loop Essentials/Advanced) — https://www.glencoyne.com/guides/returns-accrual-best-practices ; https://outvio.com/blog/best-loop-returns-alternatives/ — 2026
  Category: Underserved niche

## 3. The opportunity

Every returns tool on the market is built around the moment a customer *asks* to return something. Loop, Narvar, Returnly, ReturnPrime, Redo — they are portals and reverse-logistics engines. They optimize the return once it exists: route it, offer an exchange, print a label, claw back margin.

Not one of them answers the question a founder actually asks in the second week of January: **"how much of what I already sold can still come back, and when does it stop being at risk?"**

That's a different product. It's forward-looking, not reactive. It's a liability clock, not a workflow. The data to compute it is sitting in the same Shopify order feed the returns portal already reads — order date, SKU, channel, discount, the return policy that applied at purchase time — but nobody assembles it into an exposure curve because returns vendors are paid to process returns, not to tell you that 38% of your Q4 revenue is still legally revocable on January 14th.

The gap widens because return windows are no longer one number. A brand running a standard 30-day policy, a 60-day holiday extension for Oct 1–Dec 31 orders, a 14-day final-sale carve-out, and a wholesale exception has four overlapping clocks running at once. The spreadsheet approach — one blended historical rate applied to trailing revenue — cannot see any of that. It produces a single smeared percentage exactly when the founder needs a dated curve.

This is a classic underserved-niche shape: the number is required by the accounting standard, the pain is acute and calendar-driven, the incumbents are adjacent but structurally uninterested, and the input data is already in an API the merchant has authorized.

## 4. Target market

**Primary customer:** Founder, Head of Finance, or fractional CFO at a US or EU DTC brand doing $2M–$20M in annual revenue on Shopify, with a physical product, a return rate above 10%, and at least one seasonal or promotional return-window extension per year. Apparel, footwear, accessories, home goods, and specialty equipment are the sweet spot. Below $2M the founder doesn't accrue anything and doesn't care; above ~$25M they have a real finance team and are buying NetSuite or a proper FP&A tool.

**Why they buy:** The pain is a specific, dated, recurring event. In late December they have their best cash position of the year and they make decisions with it — inventory buys for spring, a media commitment, a hire, sometimes a distribution to themselves. Then January arrives and a meaningful slice of that cash walks back out. Cahoot's framing of a "real liquidity crunch" for smaller sellers is the polite version. The founder-level version is buying inventory in December against money that wasn't theirs yet.

**Rough TAM reasoning:** Shopify does not publish a revenue-band breakdown, so I'm reasoning from shape rather than a cited count. The $2M–$20M DTC band on Shopify across US/EU is plausibly in the low tens of thousands of brands; the subset with return rates high enough to matter (apparel and adjacent categories) is a meaningful fraction of that. I don't need the number to be big. At $99–$299/mo, roughly 500 paying brands is $1M ARR. That's a small share of an addressable base I'm confident exceeds 10,000. **This is an estimate, not a sourced figure** — and the honest read is that it caps the business well under $10M ARR, which is fine for this portfolio and bad for anyone chasing more.

**Why now for them:** Windows extended into late January for the second consecutive season, and the early-return shift means the exposure curve no longer matches the historical shape they've internalized. Their mental model is stale in a way they can feel but can't quantify.

## 5. Product sketch (MVP)

- **Open-window exposure number** — one figure on the dashboard: gross revenue still inside a live return window right now, with the dollar amount that expires each day for the next 90 days.
- **Policy modeling** — define multiple overlapping windows (standard, holiday extension, final-sale, wholesale, per-collection) with date ranges, and the product applies the right clock to the right order automatically.
- **Cohort-based return curve** — instead of one blended rate, learns the return probability curve by cohort (SKU family, channel, discount depth, gift-flagged, first-time vs repeat) and by day-since-delivery, so the forecast is dated rather than smeared.
- **Reserve worksheet** — the ASC 606 refund-liability number for the period, with the beginning reserve + provision − refunds = ending reserve reconciliation an accountant expects, exportable to CSV/Xero/QBO.
- **Cash-timing view** — projected refund outflow by week, so the December inventory decision is made against net-of-returns cash rather than gross.
- **Drift alerts** — flags when actual returns for a live cohort are running materially ahead of the forecast curve, early enough to matter, plus a note on which cohort is driving it.
- **Promo pre-check** — before launching an extended-window promotion, model what it does to the exposure curve and the January cash trough.
- **Year-over-year season replay** — last season's curve overlaid on this one, which is the artifact that makes a skeptical founder believe the forecast.

## 6. AI angle — what's load-bearing

Honest answer: **the AI here is statistical modeling, not an LLM, and it is genuinely load-bearing but it is not exotic.**

The core is survival analysis — a hazard model over "days since delivery" that estimates the probability a given order comes back on a given future day, conditioned on cohort features. That's the thing a spreadsheet cannot do. A blended historical rate gives you one scalar; the model gives you a dated curve per cohort, which is the entire product. Remove it and you have a burn-down chart of policy windows, which is mildly useful and not worth $99/mo.

Where an LLM earns its place is narrow and I'll say so plainly: parsing the brand's own written return policy (and its promotional variants) into structured window rules, and writing the plain-English explanation of why the forecast moved this week. Both are convenience, not substance.

I'd rather be straight about this than dress it up: the defensible technical work is the cohort model and the correctness of the policy-to-order matching. Anyone claiming a large AI moat on this idea is selling something. The model does need real data volume to beat a naive baseline, which is the central risk in section 13.

## 7. Localization angle (if any)

N/A as a wedge — this is a global play, launching US-first with EU close behind.

Two notes that matter but don't constitute a localization strategy. First, the EU's statutory 14-day withdrawal right means EU brands have a legally mandated floor window on top of whatever commercial policy they run, so the policy engine has to model a regulatory minimum, not just merchant choice. That's a feature requirement, not a market wedge. Second, the accounting export needs to speak both ASC 606 and IFRS 15 framing; the underlying treatment of returns as variable consideration is materially similar, so this is a labeling problem rather than a second product. India, LATAM, and SEA are poor fits — return rates and windows are lower, COD dynamics dominate, and willingness to pay for a finance-ops tool at this band is thin.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** three tiers, priced against Loop's $155–240/mo anchor and deliberately positioned as an add-on rather than a replacement, since the brand is already paying for a returns portal.

- **Starter — $99/mo:** single policy, exposure clock, 90-day curve. For $2M–$5M brands.
- **Growth — $199/mo:** overlapping policies, cohort model, reserve worksheet, accounting export. For $5M–$15M brands. This is the expected center of gravity.
- **Finance — $349/mo:** multi-store, multi-currency, drift alerts, promo pre-check, fractional-CFO seat sharing.

**ACV:** ~$2,200 blended, assuming the mix lands mostly on Growth.

**Rough math to $1M ARR:** 380 customers at $199/mo ≈ $908K, plus a tail of Finance-tier accounts gets you across $1M. Call it 400–450 paying brands. That is a real number of logos to acquire but not an absurd one for a two-year build in a niche with a dated, recurring trigger event.

**Rough math to $5M ARR:** requires roughly 1,900 customers at the same mix, which I don't think this wedge alone supports. Getting there means expanding the wedge: adding the mirror-image problem for marketplace sellers (Amazon/TikTok Shop return windows and reimbursement timing), selling a multi-client seat to the fractional-CFO and ecommerce-accounting firms who serve dozens of brands each, and eventually pricing a percentage-of-reserve model for larger accounts. **I'd underwrite this as a $1M–$2.5M ARR business and treat $5M as upside contingent on the agency channel working.** Saying otherwise would be dishonest about the ceiling.

**Expansion path:** brands grow into higher tiers as revenue grows; multi-store and multi-currency pull in the ones running separate EU entities; the accounting-firm seat is the highest-leverage expansion because one firm brings 20–60 brands.

## 9. Go-to-market wedge — first 100 customers

The calendar does most of the work here. This product has a natural annual moment — late Q3, when brands are setting holiday policy — and a natural proof moment in January.

- **Free "Returnuary Exposure Report," seeded in September.** A read-only Shopify app that connects, computes last season's actual exposure curve, and produces a dated PDF: "on January 14th last year, $X of your Q4 revenue was still returnable; $Y actually came back; your December cash position overstated reality by $Z." This is a specific, personalized, verifiable number about the merchant's own business — the strongest cold open I know. Target 1,500 installs across the free tool in Sept–Oct; converting 8–12% to paid before the season is 120–180 customers.
- **Ecommerce accounting and fractional-CFO firms as the primary channel.** There is a well-defined set of firms specializing in DTC bookkeeping (the Bean Ninjas / A2X-adjacent ecosystem, plus the fractional-CFO shops that publish returns-reserve guidance — Glencoyne and Eightx both do). They already do this calculation manually for clients and hate it. Offer a multi-client dashboard and revenue share. Twenty firms at three converted clients each is 60 customers, and they close faster than the brands do because the buyer already understands ASC 606.
- **Loop / ReturnPrime / Redo app-ecosystem adjacency.** These tools own the return *after* it's requested and have no forecasting story. Build the integration, list in the Shopify App Store under returns, and pitch complementary co-marketing rather than competition. App Store search for "returns" is a real discovery channel for Shopify brands.
- **Direct outreach to brands that publicly extended their window.** Every brand that posts an extended holiday return policy is announcing that it has taken on unmodeled exposure. Scrape the policy pages of DTC brands in the target band each October, and send the exposure report for their specific announced window. Highly targeted, seasonal, and the pitch writes itself.
- **One piece of content that has to exist:** a rigorous, public "how to compute your returns reserve under ASC 606 without a finance team" guide with a free calculator. This is the SEO asset the accounting firms will link to, and it qualifies inbound better than anything else because the people searching for it have already accepted they need the number.

## 10. Build complexity — justification

**Low.** The inputs are a Shopify OAuth app reading orders, fulfillments, and refunds — a well-documented, stable API the merchant authorizes in two clicks. The policy engine is date arithmetic over order cohorts. The forecast is a survival/hazard model on historical order-and-refund data, which is standard statistical work on data the merchant hands you at install; no proprietary dataset needed, because every merchant's own history is the training set for their own curve. The accounting export is CSV plus QBO/Xero APIs.

A competent solo builder ships a credible v1 in 8–10 weeks: 3 weeks on ingestion and the policy engine, 3 weeks on the cohort model and backtest, 2 weeks on dashboard and export, the rest on the free exposure-report funnel. The genuinely fiddly parts are refund-to-order attribution edge cases (partial refunds, exchanges, discounts, gift cards, shipping) and getting the backtest honest enough that the numbers survive a founder checking them against Shopify's own reports. Those are grind, not research.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only merchant data under explicit OAuth. Not regulated advice — it's a reporting and forecasting tool, and the reserve worksheet is a draft the merchant's accountant signs off on. |
| Ethical — no harm / dark patterns | ✅ | Product tells merchants the truth about money that isn't theirs yet. If anything it pushes toward conservative cash behavior. |
| Market exists (evidence above) | ✅ | Returns software category is established and priced ($155–240/mo at Loop); ASC 606 mandates the number; sourced reporting confirms merchants don't forecast it. |
| 1–5 person team can build this | ✅ | Solo builder, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Shopify app fees, hosting, and a season of content. Well under $15K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Acute, expensive, and dated — but seasonal. It's a hair-on-fire problem in December–February and a quiet one in June. That seasonality is the single biggest drag on this axis and the reason it isn't 18. Brands feel it hard, then forget it for two quarters. |
| Demand evidence | 15 | 11/15 | Strong adjacent evidence: priced incumbents in returns software, an accounting standard that mandates the calculation, and dated 2025–26 reporting that merchants don't forecast returns and smaller sellers hit liquidity crunches. What's missing is direct evidence of merchants asking for *this specific product* — I found no thread of founders begging for an exposure forecaster. That gap is why this is 11 and not 14. |
| Build feasibility | 15 | 13/15 | Off-the-shelf API, standard modeling, no infra novelty. Docked for refund-attribution edge cases and the honesty bar on the backtest. |
| Distribution clarity | 15 | 11/15 | The free exposure report is a genuinely strong wedge with a personalized number, and the accounting-firm channel is real and named. Docked because the whole plan is seasonally gated — miss the September–October window and you wait a year for the best version of the pitch. |
| Revenue mechanics | 15 | 11/15 | Pricing is benchmarked against a real anchor and the $1M path needs ~400 logos, which is credible. Docked because $5M requires channel expansion I can't yet underwrite, and because seasonal products carry churn risk in the off-season. |
| Time to first revenue | 10 | 8/10 | 8–10 weeks to v1 and the free report converts warm. Not a 9–10 because the highest-converting moment is calendar-locked to autumn. |
| Defensibility | 10 | 2/10 | This is the weak axis and I won't pretend otherwise. Loop or Redo could ship an exposure tab in a quarter, and they already have the merchant's data and the distribution. The only real moats are accumulated cross-brand curve priors and the accounting-firm relationships — both take a year-plus to matter. A cheap clone is entirely possible. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because the cohort model and the refund-attribution correctness are the product; if the numbers are wrong once, a finance buyer never trusts you again. Content because the ASC 606 guide and the exposure report are the distribution, and both require writing that an accountant respects.

### Key assumptions to validate (3–5)

1. **Assumption:** Brands in the $2M–$20M band cannot currently produce a dated exposure curve and know it's a gap. **How to test:** 25 interviews with DTC founders and fractional CFOs in Sept, asking them to show how they compute their returns reserve today. If most produce a defensible dated number already, the wedge is gone.
2. **Assumption:** The cohort model beats a naive blended-rate baseline by enough to be worth paying for. **How to test:** backtest on 15–20 volunteer brands' historical order/refund exports; require materially lower forecast error than blended-rate at a 60-day horizon. If it doesn't clear that, the product is a burn-down chart and should be priced at $29, not $199.
3. **Assumption:** The free exposure report converts to paid at 8%+. **How to test:** ship the read-only app in September, measure install-to-paid before December. Below 4% and the GTM math collapses.
4. **Assumption:** Accounting firms will resell or refer. **How to test:** pitch 15 DTC-specialist firms with the multi-client dashboard mock; look for 3+ committing to pilot clients.
5. **Assumption:** Churn survives the off-season. **How to test:** track logo retention Feb–Aug in year one. This is the assumption I'm least sure of.

### Risk flags

1. **Seasonality risk:** the pain peaks for roughly one quarter a year. That threatens both off-season churn and the credibility of an annual contract. Mitigation is making the promo pre-check and cash-timing views useful year-round, but I'd want to see retention data before believing it.
2. **Platform dependency:** the product is a Shopify app reading Shopify data. Shopify could ship a native returns-forecast surface, and app-store policy or API changes are outside your control. Multi-platform (WooCommerce, BigCommerce) is a hedge but splits early focus.
3. **Incumbent encroachment:** Loop, Redo, ReturnPrime and Narvar all have the data and the customer. Defensibility scores 2/10 for a reason. The realistic bet is that returns vendors stay focused on processing economics, which is where their revenue model points them — but that's a bet.
4. **Trust/accuracy risk:** this is a finance number. One visibly wrong reserve figure in front of a merchant's accountant kills the account and the referral. Requires conservative defaults, visible confidence intervals, and never presenting a forecast as an accounting fact.
5. **Thin direct demand evidence:** I could not find merchants explicitly asking for this. The demand is inferred from an adjacent, well-evidenced pain. That's what caps confidence at Medium.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder comfortable with survival/hazard modeling and
                        finance-literate writing; ideally has shipped a Shopify app before
Time to revenue:        10–14 weeks (8–10 to v1, then free-report funnel)
Capital to launch:      $10–15K / ₹9–13 lakh
Top 3 assumptions to validate first:
  1. Brands can't produce a dated exposure curve today — 25 founder/fractional-CFO interviews in September
  2. Cohort model beats blended-rate baseline at 60-day horizon — backtest on 15–20 volunteer brands' exports
  3. Free exposure report converts at 8%+ — ship read-only app in September, measure before December
Kill criteria:
  - Abandon if the cohort model fails to materially beat a blended-rate baseline on backtest across 15+ brands
  - Abandon if free-report install-to-paid conversion is under 4% by December 1
  - Abandon if fewer than 2 of 15 pitched accounting firms will pilot the multi-client dashboard
  - Abandon if a major returns vendor ships an equivalent exposure forecast before your v1
```

## 15. Next step — 1-week validation sprint

The whole sprint is designed to attack assumption #2 first, because it's the one that decides whether this is a $199 product or a $29 product.

- **Day 1–2:** Recruit 12–15 DTC brands in the target band and get historical order + refund CSV exports (Shopify exports this natively, so the ask is low-friction). Offer the finished exposure analysis free in exchange.
- **Day 3–4:** Build the backtest offline — no product, no UI. Fit the cohort hazard model on each brand's first 18 months, forecast the next 6, compare forecast error against the naive blended-rate baseline at 30/60/90-day horizons. This is a notebook, not an app.
- **Day 5:** Run 10 interviews with the same founders and 5 fractional CFOs. Show each their own two curves — the blended rate they'd have used versus the model — and ask directly: is the difference worth $199/mo?

**Falsifiable go/no-go:** proceed only if the cohort model cuts 60-day forecast error by ≥25% versus the blended-rate baseline on a majority of the tested brands, **and** ≥5 of 15 interviewed buyers say yes to $199/mo when shown their own numbers. Either one failing means the model isn't the product and the idea should be reshaped or dropped — not repriced hopefully and shipped anyway.
