---
title: "LandedTrue — cost-basis ledger for FBA reimbursement recovery"
slug: fba-cost-basis-reimbursement
date: 2026-07-24
category: Retail / Global
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns FBA sellers' messy supplier invoices into accurate per-SKU landed cost so Amazon reimbursements pay true value."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Amazon-seller, AI-agent, Ecommerce, SMB, Solo-builder, Document-extraction]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# LandedTrue — cost-basis ledger for FBA reimbursement recovery

## 1. One-liner

Turns FBA sellers' messy supplier invoices into accurate per-SKU landed cost so Amazon reimbursements pay true value.

## 2. Trend signal — why now?

In March 2025 Amazon flipped how it reimburses lost/damaged FBA inventory — from **selling price** to **manufacturing/sourcing cost**. Recoveries dropped **50–75% per claim on average**. The kicker: the number Amazon pays now depends entirely on the per-unit cost sitting in your Seller Central cost field. If that field is **missing or zero, Amazon substitutes its own lower internal estimate** — and most sellers never filled it in. Separately, the claim window collapsed from an 18-month lookback to **~60 days**, so annual audits now forfeit money "by design" and monthly reconciliation is the floor.

There's a whole content industry screaming about this (Carbon6, Novadata, Refunzo, RefundPros, Vova Even, Titan Network all published "source cost" explainers in 2025–2026). But every tool in the space **files claims** — none of them **fix the input that determines the payout**: turning supplier invoices into a correct, defensible per-SKU landed cost and keeping Seller Central's cost fields true.

Provenance:
  - Signal 1 (demand): Amazon reimbursement recoveries down 50–75% post source-cost change; sellers "frustrated," leaving $1,500–$3,000/yr unclaimed — https://novadata.io/resources/blog/amazon-reimbursement-guide — 2026-07
  - Signal 2 (feasibility): Payout now keyed to per-unit cost in Seller Central; "if cost fields are missing or zero, Amazon substitutes its own lower internal estimate"; sellers told to review each SKU's Amazon estimate vs. real cost records and upload support — https://vovaeven.com/blog/amazon-quietly-changed-how-fba-reimbursements-are-calculated — 2026-07
  - Signal 3 (economic): Reimbursement-service market charges 10–25% of recovered funds (GETIDA/Seller Investigators 25%, TrueOps 10%, Refully 18%, Helium 10 15–18%); Sellerboard bundles audit at $19/mo — money is already moving through this category — https://www.amplisell.com/blog-post/best-amazon-reimbursement-services-for-fba-brands — 2026-07
  Category: Tech-unlock

## 3. The opportunity

The reimbursement-recovery category is crowded — but they all do the same downstream thing: connect to Seller Central, scan for lost/damaged/overcharge discrepancies, file the claim, take a cut. **They inherit whatever cost basis is already there.** After March 2025, that basis is the whole ballgame: a filed claim on a SKU with a blank cost field pays Amazon's estimate — often near-zero.

The incumbents are structurally unmotivated to fix this. They're paid on **contingency (a % of what's recovered)**, so the fastest path to their fee is filing the claims that already exist, not doing the tedious per-SKU cost forensics that would *raise the value of every future claim*. Nobody owns the invoice → landed-cost → Seller Central pipeline.

That pipeline is exactly what an AI-first tool does 10× better than a human bookkeeper: read a supplier invoice (often in another currency, with freight and duty on separate lines, with 3 SKUs bundled into one line item), split landed cost down to the unit, flag SKUs where Amazon's estimate is below your real cost, and generate the documentation packet Amazon asks for when you contest. Get the basis right once and **every** reimbursement, every FBA-fee dispute, and every P&L that reads from COGS gets more accurate — permanently.

## 4. Target market

- **Primary customer:** US/UK/EU/India **Amazon FBA sellers doing $200K–$5M/yr GMV** — the band big enough to lose real money to under-valued reimbursements but too small to have a dedicated ops analyst. Private-label and light-manufacturing sellers with 20–500 SKUs and supplier invoices in one or more foreign currencies.
- **Why they buy (their words):** "Most sellers don't realize they're leaving $1,500–$3,000 per year unclaimed" and "many sellers have not updated their sourcing costs, which means Amazon is still estimating them" — lower than reality. They feel it as: *I got a $9 reimbursement on a unit that cost me $23 landed, and I have no clean way to prove the $23.*
- **Rough TAM:** ~2M+ active FBA sellers globally; the $200K–$5M band is plausibly 300–500K sellers. Even 0.5% penetration at ~$40/mo is a $70–120M ARR ceiling — well past the $5M target, and a bootstrapper only needs a sliver.
- **Why now for them:** The 60-day window means the pain is now **monthly and recurring**, not a once-a-year cleanup they can procrastinate on. And the cost-basis lever only started mattering in March 2025 — the behavior (fill in your COGS properly) is brand-new and most haven't adopted it.

## 5. Product sketch (MVP)

- **Invoice drop-zone:** forward supplier invoices (PDF, photo, email) → AI extracts line items, quantities, unit prices, currency, freight, duty.
- **Landed-cost splitter:** allocates freight/duty/tariff across units, converts currency at invoice-date FX, produces a defensible **per-SKU landed cost** with the math shown.
- **Seller Central gap report:** connects (read) to your account, lists every SKU where the cost field is blank/zero or where **Amazon's internal estimate is below your real landed cost** — ranked by dollars at risk.
- **One-click cost push:** writes corrected per-unit costs back to Seller Central cost fields (bulk).
- **Contest packet builder:** when Amazon under-values a claim, assembles the invoice + landed-cost worksheet Amazon asks for to dispute it.
- **Monthly reconciliation nudge:** flags new discrepancies inside the 60-day window so nothing ages out.
- **Recovery ledger:** running tally of claims, values, and the delta between "Amazon estimate" and "true landed cost" you recaptured.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody fills in — which is *precisely why the money is sitting on the table today*. The load-bearing work is **document understanding**: real supplier invoices are a mess — bundled line items ("3 ASINs, 1 line"), freight and duty broken out separately, multi-currency, handwritten annotations, PO numbers that don't match Seller SKUs. A vision-LLM that reliably maps invoice lines → SKUs → per-unit landed cost, and reasons about how to allocate shipping across units, is the entire product. The Seller Central push and claim-contest packet are plumbing; the extraction+allocation is the moat-in-miniature.

## 7. Localization angle (if any)

Genuine India + global wedge. Indian FBA sellers (Amazon.in + exporters to Amazon.com) deal with GST invoices, INR↔USD conversion, and freight-forwarder invoices that global tools don't parse cleanly — a ₹1,499/mo tier works where a $40 tier feels steep. Same logic for LatAm sellers importing from China with customs paperwork. The core engine is global; the invoice-format + currency + import-doc handling is where a localized cut beats a US-centric incumbent. But the beachhead is US FBA sellers, where the dollar impact per seller is highest.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Flat SaaS, **$39/mo** (Starter, ≤100 SKUs) / **$89/mo** (Growth, ≤500 SKUs). Deliberately **not** contingency — flat pricing is the wedge against the 10–25% incumbents, and it aligns us with the seller (we make your future claims worth more, we don't skim them).
- **ACV:** ~$600–900.
- **To $1M ARR:** ~1,400 sellers × ~$60/mo avg × 12 ≈ $1.0M. A niche of a 2M+ seller pool.
- **To $5M ARR:** ~7,000 sellers, or add a done-with-you tier ($199/mo with quarterly cost-basis audit) and an accountant/agency channel reselling to their seller books.
- **Expansion path:** per-SKU tiers grow with the catalog; upsell a contingency add-on *only* on the disputed-claim contest packets (optional, seller opts in), plus a COGS feed into their P&L/accounting. Multi-marketplace (Walmart WFS has the same reimbursement mechanics) is the natural land-and-expand.

## 9. Go-to-market wedge — first 100 customers

- **The angry-thread harvest:** every "source cost reimbursement" explainer (Carbon6, Novadata, RefundPros, Vova Even, Titan) has a comment section and a linked subreddit/FB group full of sellers venting about lowball payouts. DM/comment with a free "cost-basis gap scan" — *we'll show you which of your SKUs Amazon is currently under-valuing, free.* That report **is** the demo.
- **Free gap-scan lead magnet:** read-only Seller Central connect → instant list of blank/under-valued cost fields ranked by dollars at risk. Converts because it quantifies their exact loss before asking for a dollar.
- **Agency/accountant channel:** the reimbursement agencies charge % and don't want to do cost forensics — partner, not compete. They hand us the cost-basis job; we hand them cleaner claims. Same with the ~5–10 known FBA-focused bookkeeping firms.
- **Communities:** post the gap-scan tool into the big FBA subreddits and the 3–4 largest FBA Facebook/Discord groups where policy-change panic is live right now.
- **YouTube co-marketing:** the FBA-tips creators who published the source-cost videos need a "here's the fix" segment — offer them the tool + affiliate.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: vision-LLM invoice extraction, Amazon SP-API (cost-field read/write, reimbursement reports), standard web stack. Custom work is the **landed-cost allocation engine** (freight/duty/currency split, bundle disambiguation) and making extraction robust across messy real-world invoices — that's real engineering discipline but not research-grade. Realistic v1 for a strong technical founder + part-time helper: **10–14 weeks**, most of it hardening extraction on real invoice samples and passing Amazon SP-API app review.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads seller's own data via official SP-API; writes seller's own cost fields with consent. |
| Ethical — no harm / dark patterns | ✅ | Helps sellers claim what they're legitimately owed; flat pricing avoids contingency skim. |
| Market exists (evidence above) | ✅ | Active paid category (10–25% incumbents), documented policy-driven pain, live seller anger. |
| 1–5 person team can build this | ✅ | 1–2 people, off-the-shelf AI + SP-API. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair, main cost is inference + dev time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring (monthly, 60-day window), quantified $ loss per seller. Not hair-on-fire daily, but it's money bleeding every cycle. |
| Demand evidence | 15 | 13/15 | Paid incumbents at 10–25%, policy-driven surge in complaints, multiple independent explainer sources. Skeptic nods. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + SP-API, but robust invoice extraction + landed-cost allocation + SP-API app review push it to ~12 weeks. |
| Distribution clarity | 15 | 12/15 | Named channels (angry threads, FBA subs/groups, agency partners), free gap-scan is a strong wedge. Conversion still to prove. |
| Revenue mechanics | 15 | 12/15 | Flat SaaS benchmarked against $19–$40+ tools; path to $1M is ~1,400 sellers. Churn risk once basis is "clean." |
| Time to first revenue | 10 | 7/10 | Free scan → paid in weeks, but SP-API app approval adds lead time before launch. |
| Defensibility | 10 | 5/10 | Execution moat: extraction quality + workflow lock-in via accumulated cost ledger. Copyable by a funded incumbent, but they're mis-incentivized (contingency) to. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can make invoice extraction genuinely reliable and who understands FBA reimbursement mechanics well enough to be trusted with sellers' cost data.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of $200K–$5M sellers have blank/under-valued cost fields *right now*. **How to test:** run the free gap-scan on 30 volunteer sellers; measure average dollars-at-risk surfaced.
2. **Assumption:** Sellers prefer flat SaaS over the contingency incumbents once they see the basis is a *permanent* fix, not a one-time recovery. **How to test:** offer both a flat and a %-of-recovery option to the first 30 and see which they pick.
3. **Assumption:** Vision-LLM extraction hits >95% line-accuracy on real, messy, multi-currency supplier invoices without heavy per-seller tuning. **How to test:** benchmark on 100 real invoices across 10 sellers before writing a line of GTM.
4. **Assumption:** Amazon SP-API cost-field write access is available and approvable for a small app. **How to test:** confirm SP-API roles/scopes and pass a sandbox review early.

### Risk flags

1. **Platform dependency:** Entirely reliant on Amazon SP-API and Amazon's reimbursement policy — Amazon could change the cost-field mechanics again, or fold cost-basis correction into Seller Central natively (they've been auto-resolving more cases in-console). Timing is a two-edged sword.
2. **Churn after cleanup:** Once a seller's basis is clean and steady, perceived value drops. Mitigate by owning the *ongoing* monthly reconciliation + new-SKU onboarding + P&L feed so it stays sticky.
3. **Extraction liability:** A wrong per-unit cost pushed to Seller Central could *lower* a payout or misstate COGS for tax. Needs human-in-the-loop confirmation before any write, and an audit trail.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with FBA/e-commerce domain advisor
Time to revenue:        8–12 weeks (post SP-API approval)
Capital to launch:      ₹4–8 lakh ($5–10K)
Top 3 assumptions to validate first:
  1. Gap-scan on 30 sellers shows material dollars-at-risk (blank/under-valued cost fields)
  2. Sellers choose flat SaaS over contingency once basis-as-permanent-fix is framed
  3. Invoice extraction hits >95% line accuracy on 100 real messy invoices
Kill criteria:
  - Abandon if <40% of 30 scanned sellers surface >$500/yr dollars-at-risk
  - Abandon if SP-API denies cost-field write access with no workable manual alternative
  - Abandon if Amazon ships native invoice→cost-basis correction inside Seller Central before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 30 FBA sellers ($200K–$5M) from the FBA subreddits and the source-cost explainer comment sections. Manually run the "cost-basis gap scan" for each (read-only Seller Central export + their last 20 supplier invoices), by hand, no product.
- **Day 3–4:** For each seller, compute per-SKU landed cost from their invoices, compare to their Seller Central cost fields, and produce a one-page "dollars Amazon is currently under-valuing you by" report. Watch how they react.
- **Day 5:** Offer the flat $39/mo tier (annual pre-pay) to all 30. **Go if ≥6 pre-pay** and the average surfaced dollars-at-risk exceeds $500/yr. No-go if the scans come back mostly clean (basis already handled) or nobody pre-pays.

Falsifiable outcome: pre-paid conversions out of 30, and average dollars-at-risk per seller.
