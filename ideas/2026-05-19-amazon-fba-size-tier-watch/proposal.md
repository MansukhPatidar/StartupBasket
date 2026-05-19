---
title: "TierWatch — fee-tier watchtower for Amazon FBA sellers"
slug: amazon-fba-size-tier-watch
date: 2026-05-19
category: Retail / Global E-commerce Sellers
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the day Amazon silently reclassifies your ASIN into a pricier FBA size tier and builds the reimbursement case before it expires."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Amazon-seller, SP-API, AI-agent, Reimbursement, SMB, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy]
featured: false
---

# TierWatch — fee-tier watchtower for Amazon FBA sellers

## 1. One-liner

Catches the day Amazon silently reclassifies your ASIN into a pricier FBA size tier and builds the reimbursement case before it expires.

## 2. Trend signal — why now?

Amazon's **January 15, 2026 FBA fee restructure** changed how Large standard, Small Bulky, Large Bulky and Extra-Large units are priced: the fee is now calculated on the **greater of unit weight or dimensional weight**, plus a new **Overmax handling surcharge** for items over 96" longest side or 130" length+girth. That single rule change means a fulfillment-center scan that records a carton 0.4" larger, or a packaging engineer who bumps the outer box, silently flips an ASIN — sometimes an entire SKU line — into a tier that costs $5–48 *more per unit*. Sellers don't get an alert. They find out when margin craters two months later.

The pain is loud and verbatim on Seller Central forums:

- One seller: FBA fee jumped from **$40.43 to $88.93 per order — $48 overcharge × 29 orders = $1,392** — and Amazon's reply was *"The $88.93 fee was correctly calculated based on the (incorrect) measurements at that time."* The thread ran *"more than two months with no result."*
- Another: charged **$9.40 instead of $3.28** across 100 unit sales, claim nearly expired because Amazon only refunds fulfillment overcharges going back **90 days** and the remeasurement was slow-walked.
- A third documented Amazon overwriting corrected measurements with the wrong values on repeated remeasurement requests — *"quite frustrating."*

Industry estimate: **up to 20% of inventory is misclassified**, costing sellers millions/year; sellers lose **1–3% of revenue** to reimbursable issues that go unclaimed.

Provenance:
  - Signal 1 (Demand): Verbatim seller overcharge complaints, $1,392 dim-tier dispute, "more than two months no result" — https://sellercentral.amazon.com/seller-forums/discussions/t/fe4a0969-6e01-4991-946c-ccd033080e80 — 2026-05-19
  - Signal 2 (Feasibility/Why-now): Jan 15 2026 FBA fee rule — fees now "greater of unit weight or dimensional weight" + Overmax surcharge, mass silent reclassification — https://amzprep.com/amazon-fba-fees/ — 2026-05-19
  - Signal 3 (Economic): $11.3B raised across FBA aggregators; reimbursement services run 10–25% commission; up to 20% inventory misclassified — https://tracxn.com/d/trending-business-models/startups-in-amazon-aggregators/ , https://www.refunzo.com/insights/amazon-fba-fee-errors-detection-and-resolution-guide — 2026-05-19
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents in FBA reimbursement — GETIDA, Refunzo, SellerQI, Bindwise — are built around **lost and damaged inventory** on a 10–25% commission model. They scan for missing units, not for the slow, structural bleed of a *size-tier misclassification* caused by Amazon's own measurement. Helium 10, SmartScout and Jungle Scout solve the adjacent-but-different problem: they're **calculators** — you type in the correct dimensions to plan packaging. None of them watch, day over day, the dimensions *Amazon currently has on file* against the dimensions you've verified, catch the exact day a flip happened, and assemble the remeasurement-then-reimbursement packet while the 90-day window is still open.

That's the gap: a continuous **fee-tier watchtower** that turns a silent margin leak into a dated, evidence-backed Amazon case the seller can file in two clicks. The wedge is the 90-day clock — every week of detection lag is money that becomes permanently unrecoverable.

## 4. Target market

- **Primary customer:** Owner-operators and ops managers of Amazon FBA brands doing **$500K–$15M/yr GMV**, 50–2,000 active ASINs, especially in oversize/bulky categories (home, sporting goods, furniture, pet, garden) where the Jan-2026 dim-weight rule bites hardest. US-first, then UK/EU/DE marketplaces.
- **Why they buy (their words):** *"Sellers should not be penalized for Amazon's measurement errors."* They already believe they're being overcharged; they lack the tooling to *prove which ASIN, which day, how much* before the window closes.
- **Rough TAM reasoning:** ~2M active FBA sellers globally; the serious tier (>$100K GMV) is ~300–400K. Even 0.5% adoption at $99/mo ≈ 1,500–2,000 customers ≈ $1.8–2.4M ARR. Oversize-heavy sellers — the sharpest pain — are a focused beachhead of tens of thousands.
- **Why now for them:** The Jan-2026 rule made tier flips both more frequent and more expensive. Sellers are actively re-auditing catalogs in 2026 and venting on forums — demand is in motion, not hypothetical.

## 5. Product sketch (MVP)

- Connect Amazon SP-API; pull the live FBA fee preview, recorded package dimensions and size tier for every ASIN, daily.
- Seller establishes a **verified baseline** per ASIN: upload a photo/video of the boxed unit on a tape measure or a packaging spec sheet; we OCR/vision-extract the true dimensions and weight.
- **Drift alarm:** the day Amazon's recorded dimensions or tier diverge from the verified baseline, the seller gets an alert showing the ASIN, the old vs. new tier, the per-unit and projected monthly overcharge.
- **Case builder:** auto-generates the remeasurement request and the fee-reimbursement claim — pre-filled ASIN, order IDs, dollar delta, the verified-dimension evidence pack — formatted to paste into Seller Central.
- **90-day clock:** every detected overcharge shows days-remaining to file; a recovery dashboard tracks claim status (open / remeasured / reimbursed / denied) and total dollars clawed back.
- **Catalog risk scan:** flags ASINs sitting within a fraction of an inch/ounce of a tier boundary — the ones one bad FC scan away from flipping.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Evidence extraction:** turning a seller's messy phone photo of a boxed product on a tape measure, or a heterogeneous supplier spec PDF, into structured verified dimensions/weight is a vision+OCR problem. Without it, baseline-setting is manual data entry no seller will sustain across 800 ASINs — the product dies on adoption.
2. **Case drafting:** Amazon reimbursement success hinges on a tightly argued case that ties exact order IDs, the dated dimension change, and the dollar delta to Amazon's own policy language. An LLM that drafts a defensible, policy-cited remeasurement + reimbursement packet per ASIN is the difference between a seller filing 3 cases and filing 300.

Remove the AI and you're left with a spreadsheet diff — exactly the workaround sellers already abandon.

## 7. Localization angle (if any)

N/A — this is a global play. The wedge is Amazon's marketplace mechanics, identical in logic across US/UK/DE/EU. Multi-marketplace support (currency, locale fee tables) is a feature, not a localization moat. No payment-rail or language quirk changes the core value.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS by ASIN count — Starter $49/mo (≤200 ASINs), Growth $149/mo (≤1,000), Pro $349/mo (unlimited + priority case templates). **Flat SaaS, not commission** — deliberately undercuts the 10–25% recovery cut incumbents take, and the recovery here is recurring (a tier flip bleeds every unit until fixed), so the seller keeps 100% of a large, ongoing number.
- **ACV:** Blended ~$1,500–1,900/yr.
- **Math to $1M ARR:** ~600 customers at a $145 blended monthly ≈ $1.04M.
- **Math to $5M ARR:** ~2,700 customers, or ~1,500 customers + an optional **done-for-you filing add-on** at 10% of recovered funds for sellers who won't self-file (captures the incumbents' model as an upsell, not the core).
- **Expansion path:** ASIN-count tier upgrades as catalogs grow; multi-marketplace seats; the recovery add-on; a quarterly "tier-boundary redesign" advisory report for packaging savings.

## 9. Go-to-market wedge — first 100 customers

- **Forum strike list:** scrape the Seller Central forum + r/FulfillmentByAmazon + r/AmazonSeller threads from the last 6 months containing "overcharged," "dimension," "remeasure," "size tier." These are timestamped, named, furious people with the exact problem. Reply with a free one-ASIN audit; DM a Loom showing their own overcharge. Target 100+ qualified threads, expect 8–12% to trial.
- **Free Catalog Overcharge Scan:** a no-login tool — paste a Seller Central fee report, get a ranked list of likely tier-misclassified ASINs and estimated 90-day recoverable dollars. Gated upgrade to monitoring + case builder. Distribute via the forums above and Amazon-seller Slack/Discord communities.
- **Agency & prep-center channel:** Amazon agencies and 3PL prep centers manage dozens of seller catalogs and eat the blame for fee surprises. Offer a multi-account reseller dashboard + revenue share — each agency partner brings 10–40 sellers.
- **Aggregator/portfolio play:** FBA aggregators ($11.3B raised) run thousands of ASINs where tier leakage is pure lost EBITDA. One portfolio deal = hundreds of catalogs under monitoring.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: SP-API (fees, catalog, dimensions), standard web stack, hosted vision/OCR and LLM APIs for evidence extraction and case drafting. Custom work: a reliable per-ASIN daily diff engine, the verified-baseline ingestion UX, and case templates tuned against real Amazon reimbursement outcomes (the part that needs iteration with live sellers). SP-API rate limits and per-marketplace fee-table differences add integration grind. A 2-person team ships a credible v1 in ~10–14 weeks; the case-template tuning continues post-launch with early customers.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads seller's own data via official SP-API; files claims the seller is entitled to file. |
| Ethical — no harm / dark patterns | ✅ | Recovers money sellers are genuinely owed; no inflated or fabricated claims. |
| Market exists (evidence above) | ✅ | Verbatim forum complaints, dated rule change, funded adjacent industry. |
| 1–5 person team can build this | ✅ | 2-person, ~10–14 weeks to v1 on off-the-shelf APIs. |
| Launchable with <$50K / ₹40L | ✅ | API + infra costs only; no inventory, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Direct, dated dollar loss with a hard expiry; sellers actively angry and searching. Not 17+ because it's a margin leak, not an operations-stopping fire. |
| Demand evidence | 15 | 13/20→13/15 | Multiple independent verbatim signals, public dollar figures, "20% misclassified" industry claim, funded adjacent space. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Off-the-shelf APIs, but SP-API grind + case-template tuning push it past a 6-week solo build. |
| Distribution clarity | 15 | 12/15 | Named furious people on timestamped threads + free-scan funnel. Conversion math is estimated, not proven. |
| Revenue mechanics | 15 | 12/15 | Flat SaaS undercutting a known commission model; pricing benchmarked to Helium 10 tier; ACV credible. Conversion is the open assumption. |
| Time to first revenue | 10 | 8/10 | Free-scan → trial → paid funnel; first paying seller plausible within 4–8 weeks of launch. |
| Defensibility | 10 | 4/10 | Execution + workflow lock-in only. Amazon could change SP-API surface or auto-fix tiering; incumbents could bolt this on. 6-month head start, not a moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — core value is a robust SP-API diff engine + vision/LLM pipeline. A founder comfortable with marketplace APIs and data reconciliation, ideally with prior Amazon-seller-tool exposure.

### Key assumptions to validate (3–5)

1. **Assumption:** Tier misclassification from the Jan-2026 rule is frequent and large enough per affected seller (>$2K/yr recoverable) to justify $99–349/mo. **How to test:** run free Catalog Overcharge Scans on 30 real seller fee reports; measure median recoverable dollars per seller.
2. **Assumption:** Sellers will self-file the auto-built case rather than demand done-for-you. **How to test:** in beta, track what % of generated cases get filed vs. abandoned within 14 days.
3. **Assumption:** Amazon reimburses these dim-tier cases at a workable rate when the evidence packet is tight. **How to test:** file 20–30 real cases with beta sellers; measure approval rate and dollars recovered.
4. **Assumption:** The forum/free-scan funnel converts at ≥8%. **How to test:** 100-thread outreach sprint, measure trial starts and paid conversion.

### Risk flags

1. **Platform dependency:** Entirely on Amazon SP-API and Amazon's reimbursement policy. Amazon could tighten the API, change the 90-day window, or auto-correct tiering — any of which compresses the value. Highest risk.
2. **Market timing:** The Jan-2026 rule is the catalyst; the acute "everyone's re-auditing" window may be widest in 2026–27. Move fast.
3. **Competitive encroachment:** GETIDA/Refunzo/Helium 10 have the audience and could ship a dim-tier module. Speed and a sharper single-purpose UX are the only edges.
4. **Reimbursement variability:** If Amazon approval rates on dim-tier cases are low regardless of evidence quality, the recovery promise weakens — validate early (assumption 3).

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder/pair with Amazon marketplace-API experience
Time to revenue:        6–10 weeks from launch
Capital to launch:      $5–12K (API + infra; no inventory/capex)
Top 3 assumptions to validate first:
  1. Median recoverable $/seller >$2K/yr — run 30 free Catalog Overcharge Scans on real fee reports
  2. Amazon approves tight dim-tier cases at a workable rate — file 20–30 real beta cases, measure approval %
  3. Forum + free-scan funnel converts ≥8% to trial — 100-thread outreach sprint
Kill criteria:
  - Abandon if median recoverable dollars per audited seller < $1,200/yr (SaaS price can't be justified)
  - Abandon if Amazon approval rate on well-evidenced dim-tier cases < 30% across 25+ real filings
  - Abandon if Amazon ships native tier-change alerts + auto-reimbursement before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway script against SP-API (or a borrowed seller token) that pulls recorded dimensions, size tier and fee preview for a real catalog; diff against a hand-verified baseline for 5 ASINs. Confirm the data needed for detection is actually exposed and reliable.
- **Day 3–4:** Run a manual "Catalog Overcharge Scan" for 8–10 real sellers recruited from forum threads; hand them a one-page report of suspected misclassified ASINs and estimated 90-day recoverable dollars.
- **Day 5:** Decide go / no-go on a falsifiable bar: **≥5 of the 10 sellers have ≥$1,200/yr in plausibly recoverable overcharge AND ≥4 say they'd pay $99+/mo to have it caught and case-built automatically.** Below that bar, the margin leak isn't big or believed enough — kill or re-shape.
