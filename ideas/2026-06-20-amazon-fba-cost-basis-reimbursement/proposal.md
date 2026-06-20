---
title: "TrueCost — cost-basis defender for Amazon FBA sellers"
slug: amazon-fba-cost-basis-reimbursement
date: 2026-06-20
category: Retail / Amazon FBA Third-Party Sellers (US + Global)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Builds the cost-of-goods evidence packet that wins back the money Amazon underpays on lost-inventory reimbursements."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [AI-agent, SMB, Solo-builder, E-commerce, Amazon]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TrueCost — cost-basis defender for Amazon FBA sellers

## 1. One-liner

Builds the cost-of-goods evidence packet that wins back the money Amazon underpays on lost-inventory reimbursements.

## 2. Trend signal — why now?

Amazon quietly rewrote the rules of FBA reimbursement in March 2025 and the bill is landing on sellers right now.

Until March 2025, when Amazon lost or damaged your FBA inventory it reimbursed you at roughly your **selling price** minus fees. As of **March 10–31, 2025**, Amazon reimburses **only the "sourcing cost"** — your manufacturing/landed cost — and *only if you can prove it*. If you don't upload matching supplier invoices within the claim window, Amazon defaults to its **own internal estimate, which sellers report runs 15–25% below true cost** (Refunzo, BellaVix). One forum seller: Amazon lost two units worth **$255.50 each and reimbursed $137.16 each.**

The window is brutal: cost documentation must be submitted within **60 days** of the claim, and a denied dispute triggers a **30-day lockout** before you can resubmit (Amazon Seller Forums; SalesDuo). About **40% of denied claims are winnable on appeal** — but only with invoices cleanly matched to the ASIN (Refunzo). Most sellers don't have that packet ready, so they eat the gap.

The incumbents — GETIDA, Carbon6's Seller Investigators, Refunzo — were built for the *old* game: crawl your account, *find* missing units, take **25% of recovered dollars** (GETIDA now also charges a **$50/mo minimum** as of July 2025). They are optimized to find claims, not to defend the *valuation* of each claim. The new money leak is undervaluation, and nobody owns that wedge.

Provenance:
  - Signal 1 (Demand): Sellers publicly enraged over undervalued reimbursements — "$255.50 unit reimbursed $137.16," "losing tens of thousands," "they will not reimburse an adequate amount" — Amazon Seller Forums "Reimbursement Policy: An Unfair Burden on Sellers" — https://sellercentral.amazon.com/seller-forums/discussions/t/267c908a-c71a-44bd-9caa-08357276de20 — 2026-06-20
  - Signal 2 (Feasibility): Policy now hinges on OCR/LLM matching supplier invoices → ASIN cost basis, submitted in a 60-day window — a structured-extraction + drafting task that became cheap in the last 12 months — https://www.refunzo.com/blog/documentation-amazon-cost-based-fba-reimbursements-2026/ — 2026-06-20
  - Signal 3 (Economic): Incumbents (GETIDA, Carbon6/Seller Investigators) charge 25% of recovered dollars + new monthly minimums, proving money moves here; their model targets finding units, not defending valuation — https://medium.com/@sellerinvestigators/seller-investigators-vs-getida-e340647eb2c6 — 2026-06-20
  Category: Workflow automation

## 3. The opportunity

Two gaps, one wedge.

**Gap 1 — the incumbents leave valuation on the table.** GETIDA-style services find the *claim* and take 25% of whatever Amazon pays — including the lowballed amount. They have **zero incentive to fight Amazon's undervaluation**, because re-evaluation appeals are slow, manual, and don't move their commission much. A focused tool that maximizes the *per-unit dollar* — not just claim count — recovers money the 25%-of-anything services systematically miss.

**Gap 2 — sellers have no COGS evidence machine.** The whole new policy turns on one artifact: a supplier invoice cleanly mapped to the right ASIN, showing per-unit cost, submitted inside 60 days. Sellers keep invoices as a mess of PDFs, WhatsApp images, and spreadsheets in 10 currencies. When a claim fires, they scramble, miss the window, and get the estimate. TrueCost is the thing that keeps a **claim-ready cost-basis ledger** so every reimbursement is defended at full value automatically.

The incumbents are strong at *detection*. The fresh, un-owned job is *valuation defense*. That's a knife-edge wedge, not a frontal assault.

## 4. Target market

- **Primary customer:** US + UK/EU/India third-party FBA sellers doing **$500K–$10M GMV/year** with **50–2,000 SKUs** — big enough that lost-inventory dollars matter, small enough to not have an ops analyst babysitting reimbursements. Brand owners and private-label sellers, not retail-arbitrage flippers.
- **Why they buy:** In their words — "Amazon lost our products and reimbursed a fraction of what we paid," "despite valid invoices our re-evaluation request keeps getting denied," "it's unconscionable for Amazon to steal from us this way." This is hair-on-fire when it's their cash.
- **Rough TAM reasoning:** ~1.5M+ 3P sellers; the slice doing $500K+ with real inventory exposure is plausibly **150K–300K** worldwide. Capturing even 3,000 at $79/mo = ~$2.8M ARR. The market is large and fragmented — the opposite of the ~5,000-company invite-only 1P vendor pool.
- **Why now for them:** The March 2025 cost-basis rule is the first reimbursement cycle where undervaluation bites at scale, the 60-day window punishes the unprepared, and the Jan 2026 prep/labeling changes add a fresh reason claims get denied.

## 5. Product sketch (MVP)

- **Cost-basis ledger:** drop in supplier invoices (PDF, image, email) and TrueCost extracts supplier, date, per-unit cost, quantity, currency, and **maps each line to the right ASIN/SKU** — building a defensible cost record per product.
- **Underpayment radar:** pull reimbursement events via SP-API, compare Amazon's paid amount against your true landed cost, and flag every claim paid below cost basis.
- **Re-evaluation packet:** for each underpaid claim, auto-assemble the appeal — matched invoice, per-unit cost math, ASIN reference, and a drafted re-evaluation request worded to Amazon's denial reasons.
- **60-day window watch:** countdown + alerts so no claim ages out before documentation is filed.
- **Lockout tracker:** logs the 30-day re-submit lockout after a denial so you appeal the moment it lifts.
- **Recovery dashboard:** dollars recovered vs. left-on-table, by ASIN and supplier, with exportable proof for your bookkeeper.
- **COGS health check:** flags ASINs with stale, missing, or unmatched cost docs *before* a claim fires — so you're never caught at the estimate.

## 6. AI angle — what's load-bearing

Remove the AI and there's no product. The core is **messy-invoice → structured per-unit cost → correct ASIN mapping** across dozens of supplier formats, languages, and currencies — exactly the OCR + LLM extraction/matching job that got cheap and reliable in the last year. The second AI job is **drafting the re-evaluation appeal** tuned to Amazon's specific denial language ("competitive pricing," "documentation mismatch"), which is a generation task that previously needed a human VA. A dumb form-filler can't reconcile a Shenzhen supplier's PDF in RMB against a US ASIN; the model is the engine, not decoration.

## 7. Localization angle (if any)

Soft-global. The wedge is one of the few **India-relevant** Amazon plays that doesn't need a India-only build: a large share of FBA private-label sourcing runs through Indian and Chinese suppliers whose invoices arrive in vernacular formats, GST line items, and INR/RMB — exactly the parsing edge generic US tools fumble. A ₹2,000–4,000/mo tier sells to India-based FBA exporters who currently can't justify a 25% USD commission service. Multi-currency landed-cost math (freight + duty into the cost basis) is the localized depth that a US-first incumbent skips.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** flat SaaS, **$49 / $79 / $149 per month** by SKU count and marketplace count. Deliberately *not* a 25%-of-recovery cut — that's the anti-GETIDA positioning. Sellers keep 100% of what they recover.
- **ACV:** ~$950/year blended.
- **Rough math to $1M ARR:** ~1,050 sellers × $79/mo × 12 ≈ $1.0M.
- **Rough math to $5M ARR:** ~4,400 sellers blended, or add a done-with-you "managed defense" tier at $400/mo for high-GMV brands and a per-marketplace expansion on EU/UK/India.
- **Expansion path:** start at lost/damaged reimbursement defense → expand into fee-overcharge audits, removal-order claims, SAFE-T claims, and chargeback defense for hybrid 1P/3P sellers. ACV grows with SKU count and added marketplaces.

## 9. Go-to-market wedge — first 100 customers

- **Mine the Amazon Seller Forums + Reddit r/FulfillmentByAmazon for the undervaluation threads** (they're active and specific — "reimbursed $137 on a $255 unit"). DM/reply with a free teardown: "send me one denied claim, I'll show you the dollar gap." This is a warm, self-selected list of people actively bleeding.
- **Free "Reimbursement Gap Scan":** seller connects read-only SP-API, TrueCost reports total dollars left on the table over the last 18 months in 10 minutes. The number *is* the pitch. Convert scan → paid at the moment they see a five-figure leak.
- **Partner with Amazon-seller bookkeepers, prep centers, and small agencies** (the ones who don't offer reimbursement) on a referral cut — they already have the trust and the client list, and TrueCost makes their books cleaner.
- **Anti-GETIDA content + comparison pages:** "Stop paying 25% on money you could keep" targeting the exact keywords sellers search when their GETIDA invoice arrives.

## 10. Build complexity — justification

Medium. Off-the-shelf: SP-API for reimbursement/inventory data, modern OCR+LLM for invoice extraction, standard web stack. The custom work is the **invoice→ASIN cost-matching engine and the per-claim valuation logic** (currencies, freight/duty allocation, partial matches) plus careful SP-API compliance under Amazon's March 2025 contractual rules for tools touching Seller Central. A small team ships a credible v1 in **~3–4 months**; the matching accuracy is the thing that takes the back half of that.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping sellers file accurate, documented claims; fully within Amazon policy. |
| Ethical — no harm / dark patterns | ✅ | Recovers money sellers are genuinely owed; no inflated/fraudulent claims. |
| Market exists (evidence above) | ✅ | Verbatim forum rage, 25%-commission incumbents, public policy shift. |
| 1–5 person team can build this | ✅ | SP-API + OCR/LLM + web stack; ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Mostly API + inference costs; no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Direct cash loss, felt monthly, with a public chorus of furious sellers. Not 17+ because many sellers tolerate the leak rather than chase it. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: forum quotes, 25%-commission incumbents, policy change, 40%-appeal-winnable stat. Strong but not yet a proven self-serve-COGS-tool category. |
| Build feasibility | 15 | 11/15 | Standard stack, but invoice→ASIN matching accuracy and SP-API compliance are non-trivial; ~3–4 months. |
| Distribution clarity | 15 | 11/15 | Warm self-selected list + free-scan hook is real; conversion math uncertain and partly content-dependent. |
| Revenue mechanics | 15 | 12/15 | Flat SaaS below incumbent commissions, clear ACV, large fragmented base; retention depends on ongoing leak visibility. |
| Time to first revenue | 10 | 8/10 | Free scan → paid can convert in days once v1 exists; revenue in ~6–8 weeks post-launch. |
| Defensibility | 10 | 5/10 | Execution moat + accumulating per-seller cost ledger (switching cost), but a capable incumbent (Carbon6) could bolt this on. Platform dependency on SP-API. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers' real undervaluation gap is large enough ($1K+/mo) to justify $79/mo. **How to test:** Run free Reimbursement Gap Scans on 25 real accounts; measure median 18-month gap.
2. **Assumption:** Invoice→ASIN cost matching can hit >90% accuracy on messy multi-currency supplier docs. **How to test:** Build the extractor against 200 real invoices from 20 sellers and score match accuracy.
3. **Assumption:** Sellers prefer flat SaaS + keep-100% over GETIDA's 25%-of-recovery. **How to test:** A/B the two pricing pitches against 50 forum-sourced leads; measure stated preference + signups.
4. **Assumption:** SP-API terms permit a tool that pulls reimbursement data and assists appeals at scale. **How to test:** Read the post-March-2025 developer agreement and confirm with a current SP-API dev.

### Risk flags

1. **Platform dependency:** Entire product rides Amazon SP-API and Amazon's reimbursement policy — Amazon can tighten access or auto-reimburse more, shrinking the wedge. Mitigate by expanding into fee/chargeback audits.
2. **Incumbent counter-move:** Carbon6/GETIDA could add COGS-defense to their existing reach. Move fast on the valuation-defense niche and the keep-100% positioning before they notice.
3. **Market timing:** If Amazon improves its own estimate accuracy, the undervaluation gap narrows — but the documentation/window burden remains, preserving a thinner product.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with Amazon-seller (FBA ops) domain advisor
Time to revenue:        6–8 weeks after a ~3–4 month build
Capital to launch:      ₹6–10 lakh / $8–12K (mostly inference + SP-API dev time)
Top 3 assumptions to validate first:
  1. Median undervaluation gap ≥ $1K/mo — measure via free Gap Scans on 25 accounts
  2. Invoice→ASIN match accuracy > 90% — score extractor on 200 real invoices
  3. Flat-SaaS keep-100% beats 25%-commission — A/B pitch on 50 forum leads
Kill criteria:
  - Abandon if median 18-month gap across 25 scanned accounts is < $3K (leak too small to pay for)
  - Abandon if invoice→ASIN match accuracy stalls below 80% after 200-invoice tuning
  - Abandon if Amazon SP-API terms prohibit programmatic reimbursement-data pulls for this use
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 30 undervaluation complaint threads from Amazon Seller Forums + r/FulfillmentByAmazon. DM 40 sellers offering a free manual "gap teardown" on one denied claim.
- **Day 3–4:** For the 10–15 who respond, hand-calculate true cost basis vs. Amazon's paid amount from their invoices. Record the dollar gap per seller and ask: "would you pay $79/mo to recover this automatically and keep 100%?"
- **Day 5:** Decide go/no-go. **Falsifiable bar:** go only if median gap ≥ $1K/mo AND ≥ 8 of 15 say yes to $79/mo flat. Below either, the wedge is too thin — revisit when Amazon's policy bites harder.
