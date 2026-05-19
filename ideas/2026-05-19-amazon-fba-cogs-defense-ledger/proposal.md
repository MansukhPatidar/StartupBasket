---
title: "CostProof — COGS ledger for Amazon FBA sellers"
slug: amazon-fba-cogs-defense-ledger
date: 2026-05-19
category: Retail / Global E-commerce Sellers
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Keeps every SKU's landed cost accurate and audit-proof so Amazon reimburses lost FBA stock at the right number, not pennies."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Amazon-seller, E-commerce, Compliance-driven, AI-agent, SMB, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CostProof — COGS ledger for Amazon FBA sellers

## 1. One-liner

Keeps every SKU's landed cost accurate and audit-proof so Amazon reimburses lost FBA stock at the right number, not pennies.

## 2. Trend signal — why now?

On **March 31, 2025** (postponed from March 10), Amazon flipped its FBA inventory reimbursement policy: warehouse-lost or damaged units are now reimbursed at **manufacturing cost (COGS)**, not retail. If a seller doesn't supply a per-SKU cost, Amazon "estimates" it from comparable listings — which sellers report pays pennies on the dollar. KPMG, Sovos, and Comarch all flagged this as one of the most consequential marketplace policy shifts of the year.

The mechanical consequence: a seller's reimbursement value now depends entirely on a number — landed cost per SKU — that (a) most sellers never maintained accurately, (b) changes every time a supplier price, FX rate, or freight cost moves, and (c) Amazon will challenge with an invoice request during claim investigation. Refunzo's own 2026 guidance: *"If Amazon cannot match the invoice to the ASIN without guessing, the claim is weakened from the start."* About **40% of denied claims are appealable** — but only with clean invoice→SKU→cost documentation.

Incumbent recovery tools (GETIDA, Refunzo) take **25% of recoveries** and chase *lost units*. Sellerboard shipped a "Reimbursement Gap" report in Oct 2025 that *flags* shortfalls but explicitly disclaims: estimates only, "verify with Amazon," "keep your own log of case IDs and outcomes." Nobody owns the upstream artifact the new policy actually requires: a **defensible, change-tracked landed-cost ledger that emits the evidence packet that wins the claim**.

Provenance:
  - Signal 1 (demand): Sellers "not happy" / "raising eyebrows" over lower COGS-basis payouts; verbatim Seller Central forum complaints ("we will give you next to nothing excluding all your branding, packaging, handling and shipping costs") — https://sellercentral.amazon.com/seller-forums/discussions/t/68864b6f-0ab8-41ef-be18-069c33df6336 & https://shefindsways.com/amazons-new-cogs-policy-why-sellers-are-raising-eyebrows/ — 2025
  - Signal 2 (feasibility): Amazon SP-API Feeds supports bulk COGS upload (25K SKUs/feed, JSON); landed-cost-per-unit is the recommended basis; invoice/PO proof requested during investigation — addressable with off-the-shelf doc-extraction + SP-API — https://marketplacevalet.com/how-to-add-cost-of-goods-for-amazon-reimbursement/ & https://developer-docs.amazon.com/sp-api/docs/mcf-best-practices — 2025–2026
  - Signal 3 (economic): GETIDA/Refunzo charge 25% commission, no monthly fee; reimbursements run ~3% of annual revenue (up to $500K for large portfolios); 7+ tools compete in the category — https://www.refunzo.com/insights/top-7-amazon-fba-reimbursement-tools-2025 & https://getida.com/ — 2025–2026
  Category: Platform shift

## 3. The opportunity

The March 2025 policy change converted a soft problem ("track your COGS for accounting") into a **hard, money-losing one** ("the exact landed cost on file when a unit goes missing is what you get paid — and you must prove it on demand"). Three failures now bleed cash:

1. **Stale cost** — supplier raised the price, freight spiked, FX moved; the SKU's on-file COGS is from 8 months ago, so the claim pays at the wrong basis.
2. **No defensible number** — seller never uploaded COGS, so Amazon's "comparable-product estimate" pays a fraction of true cost.
3. **Unwinnable appeal** — the claim is denied or short-paid, but the seller can't assemble an invoice that maps cleanly to the ASIN/SKU within the 90-day appeal window, so the 40%-appealable money is left on the table.

Incumbents are structurally misaligned: a 25%-of-recovery contingency model has **zero incentive to maximize the accuracy of the per-unit basis** — it profits from volume of recoveries, not correctness of each one, and it does nothing for the upstream "is your COGS current and provable" problem. CostProof attacks the basis itself: a flat-fee ledger that ingests supplier invoices, derives true landed cost per SKU, keeps it current, pushes it to Amazon via SP-API, and — when a claim is short-paid — emits a ready-to-file appeal packet with the matching invoice line highlighted. We don't compete with GETIDA on the 25% recovery; we make every claim, whoever files it, pay the right number.

## 4. Target market

- **Primary customer:** Amazon FBA private-label and wholesale sellers doing **$500K–$10M/yr GMV**, 50–3,000 active SKUs, sourcing from multiple suppliers (often overseas), running lean (owner + 0–3 ops staff). US/EU/UK marketplaces first; global SP-API works everywhere.
- **Why they buy (their words):** *"You guys lose thousands of our products every single year and now the plan is to have small businesses LOSE a bunch of money."* *"Amazon's estimate may not reflect your actual sourcing cost — especially if you get special supplier pricing or bulk discounts."* They feel directly robbed and want the number on file to be both **maximal-legitimate** and **defensible**.
- **Rough TAM:** ~2M+ active FBA sellers globally; the meaningful slice (>$500K GMV, multi-SKU, multi-supplier) is a few hundred thousand. At ~3% of revenue in reimbursement exposure, a $2M seller has $60K/yr at stake — a $79–$199/mo tool to protect a big chunk of that is trivially justified.
- **Why now for them:** The policy is live and biting *this quarter*. Every lost unit since March 2025 that was reimbursed on Amazon's estimate (not their COGS) was underpaid. The pain is recurring, monthly, and quantifiable on their own settlement reports.

## 5. Product sketch (MVP)

- **Invoice inbox:** forward/upload supplier invoices, POs, freight bills (PDF, image, email); AI extracts supplier, date, item, qty, per-unit cost, freight, duties.
- **Landed-cost engine:** maps invoice lines to ASIN/SKU (fuzzy match + seller-confirm), computes true landed cost per unit, tracks a **dated change history** for every SKU (this is the audit trail Amazon asks for).
- **SP-API push:** one-click bulk upload of current landed COGS to Amazon's "Manage Your COGS," kept in sync as costs change.
- **Shortfall radar:** pulls reimbursement settlement data, flags every claim paid below your on-file landed cost or below true cost, with the dollar gap.
- **Appeal packet generator:** for a short-paid/denied claim, produces a filing-ready packet — the specific invoice line, ASIN mapping, landed-cost breakdown, and a drafted case narrative — formatted for the Seller Central case.
- **Coverage dashboard:** % of active SKUs with a current, document-backed COGS; "exposure if lost today" per SKU; alerts when a cost is >90 days stale.

## 6. AI angle — what's load-bearing

AI does the work no spreadsheet can: **reading heterogeneous supplier documents** (Chinese factory invoices, freight forwarder bills, handwritten POs, multi-line packing lists in inconsistent layouts) and **resolving each line to the right SKU/ASIN** with a confidence score and a human-confirm loop. The hard, valuable, non-trivial step is exactly the one Amazon weaponizes: *"if Amazon cannot match the invoice to the ASIN without guessing, the claim is weakened."* Remove the AI and you're back to a seller hand-keying 800 invoice lines into a sheet and losing — i.e. the status quo that's bleeding them. The appeal-narrative drafting is a second, lighter AI layer. AI is the product, not a chatbot bolted on a dashboard.

## 7. Localization angle

N/A — this is a global play. The customer is defined by the Amazon SP-API surface, not geography; the same policy and the same COGS feed apply across all marketplaces. The only "localization" is multilingual invoice OCR (Chinese, Vietnamese, German supplier docs), which is a feature inside the global product, not a separate regional cut. No payment-rail or regulatory localization adds a wedge here.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** flat tiers by SKU count — **$79/mo** (≤250 SKUs), **$149/mo** (≤1,000), **$299/mo** (≤5,000). No commission. Explicitly positioned *against* the 25%-of-recovery incumbents: "they take a quarter of what you claw back; we make every claim pay right for a flat fee."
- **ACV:** ~$1,800 blended.
- **To $1M ARR:** ~560 sellers at $149/mo avg. The category already has hundreds of thousands of qualifying sellers and 7+ paid tools — this is a small slice.
- **To $5M ARR:** ~2,800 sellers, or land mid-tier aggregators/agencies that manage 20–100 seller accounts on a per-account plan (the agency channel is the multiplier).
- **Expansion path:** per-SKU tier creep as catalogs grow; add-on **done-for-you appeal filing** ($25/claim or 10% of recovered gap — undercuts the 25% incumbents and still margin-rich); multi-marketplace and Walmart WFS as the same policy logic spreads.

## 9. Go-to-market wedge — first 100 customers

- **The complaint threads are a target list.** The Amazon Seller Central forum thread on the policy, r/FulfillmentByAmazon, r/AmazonSeller, and the Refunzo/GETIDA blog comment sections have hundreds of sellers self-identifying with this exact pain *by name*. DM/comment with a free "what did Amazon's estimate cost you last quarter?" exposure scan.
- **Free exposure audit as the hook:** connect SP-API (read-only), we show "in the last 90 days Amazon short-paid you $X vs. your true COGS." That number sells itself; convert to paid to fix and defend it going forward. Expect strong reply on a quantified, personalized loss.
- **Agency/aggregator partnerships:** Amazon-account agencies and 3PLs already manage COGS reluctantly for clients. White-label/referral the ledger — one signed agency = 20–100 seller accounts.
- **Wedge content with distribution intent:** "Amazon paid you $8 for a $30 product — here's the invoice that gets the rest back," published into the FBA tool-comparison SEO graveyard (Sellerboard vs Helium10 etc.) and FBA YouTube/newsletter sponsorships where this audience already buys tools.
- **Marketplace listing:** Amazon Selling Partner Appstore — sellers actively browse it for reimbursement tools; we're the only COGS-defense one.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: document-extraction models, SP-API (Feeds for COGS upload, Finances/Reports for settlement data), standard web stack. Custom, non-trivial work: the invoice-line→SKU resolution engine with confidence + human-confirm, the dated landed-cost ledger with defensible change history, and the appeal-packet formatter matched to Seller Central's case structure. SP-API onboarding (app registration, OAuth, data-protection review) adds calendar time. A 2-person team ships a credible v1 in **~3–4 months**; the exposure-audit hook is buildable in ~6 weeks as a lead magnet ahead of the full ledger.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read/write of seller's own COGS via official SP-API; no ToS conflict; sellers are entitled to set their own cost basis. |
| Ethical — no harm / dark patterns | ✅ | Helps sellers claim *legitimate, documented* cost. Must guardrail against inflated-cost claims (Amazon flags those) — surface that as a feature, not a risk. |
| Market exists (evidence above) | ✅ | Live policy, vocal complaints, 7+ paid incumbents, quantified $ exposure. |
| 1–5 person team can build this | ✅ | 2 people, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Doc-AI API + SP-API + hosting; well under budget. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Recurring, quantifiable, money-losing every month since Mar 2025; sellers visibly angry. Not 17+ because for many small sellers the absolute $ is annoying-but-survivable, and behavior change (uploading COGS) is required. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: forum/Reddit complaints by name, analyst coverage, 7+ funded incumbents, public 25% pricing. Skeptic nods. |
| Build feasibility | 15 | 11/15 | Standard stack + doc-AI, but SP-API onboarding and the invoice→SKU resolver are real engineering; ~3–4 months not 6 weeks. |
| Distribution clarity | 15 | 12/15 | Named lists (forum threads, subreddits), a self-quantifying free-audit hook, Appstore, agency channel. Conversion of the audit→paid is the unproven step. |
| Revenue mechanics | 15 | 11/15 | Flat pricing benchmarked against a 25% incumbent norm; ACV credible; ~560 sellers to $1M is reachable. Churn risk if seller "fixes COGS once and leaves." |
| Time to first revenue | 10 | 7/10 | 6-week audit lead magnet → paid in 4–8 weeks post-build; not pre-sold. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-seller cost-history lock-in (switching means rebuilding the audit trail), but incumbents with SP-API access and money can copy the ledger within ~12 months. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (SP-API integration, document-extraction pipeline, SKU-resolution accuracy) · `domain-expertise-required` (FBA reimbursement mechanics, claim/appeal process, what Amazon's investigators actually accept).

### Key assumptions to validate (3–5)

1. **Assumption:** Target sellers will connect SP-API to a new tool for a free exposure number. **How to test:** Ship the read-only audit; measure connect rate from 50 cold outreaches to complaining sellers.
2. **Assumption:** The quantified shortfall is large enough ($/quarter) to drive flat-fee conversion. **How to test:** Run the audit on 25 real accounts; check median 90-day shortfall vs. the $149/mo ask.
3. **Assumption:** Sellers value an ongoing defensible ledger, not a one-time COGS upload (retention). **How to test:** Interview 20 sellers post-audit on whether they'd pay monthly to keep it current + appeal-ready.
4. **Assumption:** Invoice→SKU resolution can hit usable accuracy on messy multi-supplier docs. **How to test:** Run the extractor on 200 real supplier invoices; measure auto-match precision and human-confirm time.

### Risk flags

1. **Platform dependency:** Entire product rides Amazon SP-API and one Amazon policy. Amazon could change reimbursement rules again, build native COGS guidance, or restrict the API. Mitigate by generalizing to Walmart WFS and framing as a COGS-truth ledger, not an Amazon hack.
2. **Incumbent encroachment:** Sellerboard/GETIDA already touch COGS and settlements; a focused feature from them is the obvious threat. Defensibility is the accumulating per-seller audit trail and a flat-fee model they're disincentivized to cannibalize (they earn 25%).
3. **Behavior change required:** Value depends on sellers actually uploading/maintaining COGS. If they won't change behavior even when shown the loss, conversion stalls — this is the single biggest kill risk.
4. **Ethics/abuse:** Tool must not enable inflated-cost claims (Amazon flags and penalizes). Conservative, document-backed defaults are mandatory, not optional.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with FBA/marketplace-ops domain advisor
Time to revenue:        8–12 weeks (6-week audit lead magnet, then convert)
Capital to launch:      $8–15K ($/doc-AI + SP-API onboarding + hosting)
Top 3 assumptions to validate first:
  1. SP-API connect rate on free audit — 50 cold outreaches to policy complainers
  2. Median 90-day shortfall ≥ ~10× monthly price — run audit on 25 real accounts
  3. Sellers pay monthly for an ongoing ledger, not a one-time fix — 20 post-audit interviews
Kill criteria:
  - Abandon if <15% of audited sellers show a 90-day shortfall worth ≥ $1,500
  - Abandon if <10% of completed free audits convert to paid within 30 days
  - Abandon if a top-3 incumbent ships an equivalent flat-fee COGS-defense ledger before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway read-only SP-API script that pulls reimbursement settlement data and computes "Amazon estimate vs. a seller-entered true COGS" shortfall for the trailing 90 days.
- **Day 3–4:** Recruit 8–12 sellers from the Seller Central policy thread and r/FulfillmentByAmazon; run the script on their accounts; record each seller's actual 90-day shortfall and reaction.
- **Day 5:** Decide. **Go** if the median measured shortfall ≥ $1,500/quarter **and** ≥ 5 of ~10 sellers say they'd pay $149/mo to keep COGS current and appeal-ready. **No-go** if shortfalls are trivial or sellers shrug at the number.

Falsifiable outcome: a real dollar distribution of measured shortfalls and a hard count of sellers who commit to a price — not "they seemed interested."
