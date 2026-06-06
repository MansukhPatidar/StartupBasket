---
title: "CostProof — sourcing-cost ledger for Amazon FBA sellers"
slug: amazon-fba-sourcing-cost-evidence
date: 2026-06-06
category: Retail / Global Amazon FBA Sellers
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "CostProof documents per-SKU sourcing cost so every Amazon FBA reimbursement pays at your real cost, not a lowball estimate."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Amazon-seller, AI-agent, SMB, Compliance-driven, E-commerce]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CostProof — sourcing-cost ledger for Amazon FBA sellers

## 1. One-liner

CostProof documents per-SKU sourcing cost so every Amazon FBA reimbursement pays at your real cost, not a lowball estimate.

## 2. Trend signal — why now?

In March 2025 Amazon rewrote the rule that governs how it pays sellers for inventory it loses or damages in its own warehouses. For years, sellers got reimbursed at roughly the **retail sale price**. As of March 31, 2025, Amazon reimburses only the **manufacturing/sourcing cost** of the unit — and if the seller hasn't loaded their own cost into the new "Manage Your Sourcing Cost" page with acceptable proof, Amazon plugs in its *own* estimate, which sellers report is consistently a fraction of reality.

The seller forums lit up immediately. Real, sourced examples:
- A seller reimbursed **$0.53 for an item that cost over $20 to produce**.
- A $35 unit's claim rejected, paid **$5.85**.
- A seller who supplied photos of damaged units, valid supplier invoices and payment receipts still got **one-quarter** of the correct amount.
- If your cost submission is **rejected, you're locked out from resubmitting for 30 days**, and the low estimate stands the whole time.
- Industry write-ups estimate the change can cut payouts **up to 60% on high-margin goods**, and that **Amazon rejects ~60% of reimbursement requests for lack of evidence**.

This is no longer "did you file the claim." Every incumbent already files claims. The new bottleneck is **whether the per-SKU cost is on file, documented, and defensible before the claim is adjudicated**. That's a record-keeping and evidence-assembly problem nobody owns.

Provenance:
  - Signal 1 (demand): Sellers publicly reporting $0.53 payouts on $20 items, 60% rejection for lack of evidence, "destroying small businesses" op-ed — https://medium.com/@effyrosenberg/amazons-fba-reimbursement-policy-is-destroying-small-businesses-an-urgent-call-for-reform-4cc9b0089c24 and https://sellercentral.amazon.com/seller-forums/discussions/t/0b9ecdec-0f05-47d8-a106-609cc0a0e85b — 2025-07
  - Signal 2 (feasibility): "Manage Your Sourcing Cost" self-serve page now exists per-ASIN; cheap vision/LLM models OCR supplier invoices + Chinese Fapiao into structured per-unit cost and assemble Amazon's required proof-of-value packet — https://gobrandwoven.com/resources/articles/new-amazon-fba-inventory-reimbursement-policy-managing-sourcing-cost/ — 2025
  - Signal 3 (economic): GETIDA/Carbon6/Refunzo/TrueOps/Refully all charge 10–25% commission on recovered funds; the policy change enlarged the bleed by up to 60% on high-margin SKUs — https://www.amplisell.com/blog-post/best-amazon-reimbursement-services-for-fba-brands — 2026
  Category: Regulatory arbitrage (platform-rule shift)

## 3. The opportunity

The reimbursement-recovery category is crowded and mature — GETIDA, Carbon6/Seller Investigators, Refunzo, Refully, TrueOps, Helium 10 Managed Refunds. They all do the *same thing*: scan your account, find claimable discrepancies, file the claims, take 10–25% of whatever comes back.

Here's what every one of them does **badly**, because it was never their job: they recover the claim, but the *amount* that claim pays out is now decided by whether your sourcing cost is correctly loaded and documented. A recovery service that wins you a claim on a $20-cost unit and gets you $0.53 because your cost field is blank has technically "succeeded" — and still left $19.47 on the table. The seller eats the gap; the service still takes its cut of the $0.53.

CostProof attacks the **cost-evidence layer**, not the claim-filing layer:
1. Build and maintain a clean per-SKU sourcing-cost ledger from the seller's own supplier invoices.
2. Keep Amazon's "Manage Your Sourcing Cost" page synced and *never blank*.
3. When a loss/damage event happens, auto-assemble the exact proof-of-value packet Amazon accepts (manufacturer/commercial invoice or Fapiao + payment receipt + per-unit math) so the claim pays at true cost — and so a rejection-and-30-day-lockout never happens.

It is complementary to the recovery tools (sellers can keep GETIDA for the filing) and competes with none of them head-on. It plugs the hole they structurally ignore.

## 4. Target market

- **Primary customer:** US/UK/EU Amazon FBA sellers and small brands doing roughly **$500K–$10M GMV** with **50–5,000 active SKUs**, who carry real physical inventory in Amazon warehouses and feel warehouse loss/damage monthly. Owner-operators or a 1–3 person ops team, not enterprise aggregators.
- **Why they buy:** "Amazon paid me $0.53 for a unit that cost me $20, my cost field was blank, and now I'm locked out for 30 days." It's money walking out the door every month, and the existing recovery tools don't fix the payout size.
- **Rough TAM reasoning:** 75,000+ sellers crossed $1M in sales in 2025 (+36% YoY); ~2% of all sellers do $100K+/month. The serviceable wedge — mid-market FBA sellers with enough warehouse inventory to feel the bleed and enough margin to care about full payouts — is comfortably **150,000–300,000 accounts** worldwide. We need a few thousand to hit $5M ARR.
- **Why now for them:** The policy is barely a year old, the pain is fresh and unsolved, and most sellers still have **blank or estimate-filled cost fields** sitting on every SKU right now — a backlog of unprotected inventory.

## 5. Product sketch (MVP)

- **Invoice → cost ledger:** seller forwards or uploads supplier invoices (PDF, Fapiao, spreadsheet); CostProof OCRs and maps each line to the right ASIN/SKU with a defensible per-unit landed-from-supplier cost (excluding shipping/duty, per Amazon's definition).
- **Cost-field health dashboard:** every SKU flagged green (documented cost on file), amber (cost on file but no proof attached), or red (blank / Amazon-estimate only). Red = unprotected inventory.
- **One-click "Manage Sourcing Cost" sync:** push the documented cost to Amazon's page in bulk so no SKU is ever left to Amazon's estimate.
- **Proof-of-value packet builder:** for any reimbursement event, auto-bundle the accepted evidence (invoice + payment receipt + per-unit math + the damaged-unit reference) into the format Amazon's review accepts on the first pass.
- **Rejection / lockout guard:** detect when a cost submission risks rejection (missing receipt, unit mismatch) *before* you submit, so you never trigger the 30-day resubmission lockout.
- **Claim-window timer:** track the 60-day (lost/damaged) and 45–105-day (returns) windows per case and nudge before they close.
- **Audit trail:** every cost figure traces back to a source document — useful for Amazon appeals and for the seller's own bookkeeping/COGS.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody fills in — which is exactly why sellers are bleeding today. The load-bearing work is **document understanding**: supplier invoices arrive in dozens of layouts, languages, and currencies (Chinese Fapiao, generic commercial invoices, wholesale PDFs), and the hard part is reliably extracting *per-unit cost for the correct SKU* and matching it to the right ASIN despite messy descriptions and bundle/case-pack math. Vision-LLM OCR plus a reconciliation pass collapses a 2-hour-per-batch manual cost-mapping chore into minutes, and — critically — produces an evidence packet structured the way Amazon's reviewer expects, which is what flips rejection into approval. The AI isn't a chatbot on the side; it's the thing that turns a pile of invoices into a defensible cost on every SKU.

## 7. Localization angle (if any)

N/A as a primary wedge — Amazon FBA is a global, English-first platform and the policy is uniform across marketplaces, so this is a **global play** from day one. The one genuinely useful localization is **Chinese Fapiao and Mandarin supplier-invoice parsing**, since a large share of FBA sourcing runs through Chinese manufacturers; nailing Fapiao extraction is a feature advantage, not a separate market.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** flat SaaS by catalog size, **$49/mo (up to 250 SKUs), $99/mo (up to 1,000), $199/mo (up to 5,000)**. Flat fee, not commission — the explicit anti-positioning against the 25%-of-recovery incumbents ("keep 100% of what's yours").
- **ACV:** blended ~$1,200/year.
- **Rough math to $1M ARR:** ~850 sellers at ~$98/mo average. Very reachable inside the 75K+ million-dollar-seller pool.
- **Rough math to $5M ARR:** ~4,200 paying sellers, or ~2,500 sellers plus a **done-for-you cost-onboarding** upsell (we ingest your entire historical invoice archive and back-fill every SKU) at $500–2,000 one-time. The DFY tier also widens the wallet on bigger catalogs.
- **Expansion path:** more SKUs → higher tier; add a light **COGS/profitability export** (the same documented cost data feeds gross-margin reporting and bookkeeping), and a **multi-marketplace** seat add-on for sellers running US+UK+EU.

## 9. Go-to-market wedge — first 100 customers

- **Mine the complaint threads directly.** The Amazon Seller Central forums and r/FulfillmentByAmazon have *named, dated* posts of people who got reimbursed $0.53 / $5.85 / one-quarter of cost. DM/reply with a 90-second Loom showing their exact scenario fixed: blank cost field → documented cost → full payout. These people are pre-qualified and furious.
- **Wedge through the recovery tools' own audiences, as a complement not a competitor.** Post in the same FBA Facebook/Slack/Discord communities where GETIDA and Helium 10 users hang out: "Your recovery tool filed the claim — but did it pay at your cost or Amazon's estimate?" Offer a free cost-field audit that scores how many of their SKUs are unprotected (red).
- **Free "cost-field exposure" audit as the top of funnel.** Read-only scan that reports: X of your Y SKUs have blank/estimate-only cost = $Z of inventory unprotected at current loss rates. That number is the sales pitch; the fix is the product.
- **FBA agency / prep-center partnerships.** The 3PLs and Amazon agencies that already manage seller ops will white-label or refer this because it directly protects their clients' P&L — referral cut per converted seller.
- **Targeted content on the exact long-tail queries** sellers are searching right now ("amazon reimbursed me $0.53", "manage your sourcing cost rejected", "fba cost field blank") — these are bottom-funnel and barely contested.

## 10. Build complexity — justification

**Medium.** The web app, dashboard, and Amazon SP-API integration (inventory, reimbursement cases) are standard. The genuinely hard part is robust invoice/Fapiao extraction and SKU reconciliation across messy multi-format documents — that's an iterative accuracy grind, not a research breakthrough, and off-the-shelf vision-LLMs get you to a usable v1 with a human-in-the-loop review step. A 2–3 person team ships a credible v1 in **3–4 months**; first paying pilots can run before SP-API automation is fully built by letting sellers upload exports manually.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping sellers document their own real costs and use Amazon's official cost page. No grey area. |
| Ethical — no harm / dark patterns | ✅ | Sellers recover what they're genuinely owed; we don't inflate costs (that would get them banned, and we'd warn against it). |
| Market exists (evidence above) | ✅ | Sourced, dated, visceral complaints + a funded recovery category proving willingness to pay. |
| 1–5 person team can build this | ✅ | 2–3 people, 3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | SaaS + API + model inference costs; well under budget. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Money out the door monthly; $0.53-on-$20 and 30-day lockout are hair-on-fire. Caps below 18 because not every seller loses inventory often enough to feel it weekly. |
| Demand evidence | 15 | 13/15 | Multiple independent, sourced signals: forum posts, op-ed, 60% rejection stat, a whole funded recovery category. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Standard stack, but invoice/Fapiao extraction accuracy is a real grind with a human-review crutch needed early. |
| Distribution clarity | 15 | 12/15 | Named, furious leads in specific forums; free exposure-audit hook is strong. Conversion from "complainer" to "payer" still unproven. |
| Revenue mechanics | 15 | 12/15 | Flat-fee anti-commission positioning is clean; ACV and customer counts to $1M are conservative. Churn risk if seller's loss rate is low. |
| Time to first revenue | 10 | 7/10 | Manual-upload pilot can charge in weeks; full SP-API automation is the slower part. |
| Defensibility | 10 | 5/10 | Execution + accumulating cost-ledger lock-in (switching means re-documenting every SKU), but a recovery incumbent could bolt this on. 6–12 month head start, not a moat. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (document-extraction accuracy + SP-API), `domain-expertise-required` (must deeply understand Amazon's reimbursement and proof-of-value rules to assemble packets that actually pass).

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will pay a flat fee to *protect* payout size, not just to *recover* claims (which incumbents already do). **How to test:** put the flat-fee offer in front of 30 sellers from the complaint threads; measure pre-orders / LOIs.
2. **Assumption:** The free "cost-field exposure audit" reliably surfaces a scary, true number (lots of red SKUs) for most mid-market sellers. **How to test:** run the read-only audit on 20 real accounts, measure average % of unprotected SKUs and seller reaction.
3. **Assumption:** Invoice/Fapiao extraction + SKU reconciliation can hit a usable accuracy bar with a light human-review step. **How to test:** parse 500 real supplier invoices across formats, measure per-unit-cost extraction accuracy and review time.
4. **Assumption:** Amazon's proof-of-value review accepts our packet format on first pass often enough to avoid the 30-day lockout. **How to test:** submit documented claims for a pilot cohort and track first-pass approval rate.

### Risk flags

1. **Platform dependency:** Entirely dependent on Amazon's reimbursement rules and SP-API. Amazon announced **third-party developer API access fees starting 2026** — watch cost structure. Amazon could also change the cost-evidence rules again (it already delayed/revised once).
2. **Incumbent encroachment:** GETIDA/Carbon6 et al. could add cost-documentation as a feature. Mitigate with speed, deeper packet-quality, and the flat-fee/anti-commission brand.
3. **Variable pain frequency:** Sellers with low warehouse-loss rates may not feel enough monthly bleed to retain — segment toward higher-volume, higher-loss catalogs.
4. **Ethics line:** Must enforce truthful costs only; any feature that nudges cost inflation invites account bans and reputational ruin. Guardrails are a product requirement, not optional.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with hands-on Amazon FBA/SP-API and reimbursement-rules expertise (or a domain advisor who lives in seller forums)
Time to revenue:        4–8 weeks to first paid pilot (manual-upload), 3–4 months to automated v1
Capital to launch:      $15–30K ($ for inference, SP-API/dev, design)
Top 3 assumptions to validate first:
  1. Sellers pay flat fee to protect payout size, not just recover claims — 30-seller LOI test
  2. Free exposure audit surfaces a true, scary % of unprotected SKUs — 20-account read-only run
  3. First-pass approval rate on documented claims is high enough to dodge the 30-day lockout — pilot cohort
Kill criteria:
  - Abandon if <15% of 30 thread-sourced sellers will pay a flat fee after seeing their exposure number
  - Abandon if invoice/Fapiao extraction can't beat ~90% per-unit-cost accuracy with reasonable human review
  - Abandon if Amazon ships its own one-click documented-cost workflow that removes the pain
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 40 named, dated complaint posts (Seller Central forums + r/FulfillmentByAmazon) of sellers reporting lowball/blank-cost reimbursements. Build a one-page "your cost field is costing you $X" landing page with the flat-fee offer and a free exposure-audit CTA.
- **Day 3–4:** DM/reply to all 40 with a personalized 90-second Loom showing their exact scenario fixed. Offer the free read-only exposure audit to anyone who responds; run it manually for the first handful to measure average % of unprotected SKUs.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥6 of 40 (15%) booked a call AND ≥2 signed a paid-pilot LOI** after seeing their exposure number. Below that, the pain isn't worth a flat fee on top of their recovery tool — kill or reshape.
