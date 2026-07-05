---
title: "BasisKeeper — cost-basis keeper for Amazon FBA sellers"
slug: amazon-fba-cost-basis
date: 2026-07-05
category: Retail / US & Global — Amazon FBA Private-Label & Wholesale Sellers (reimbursement cost basis)
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Turns your supplier invoices into a defensible per-SKU cost basis so Amazon reimburses lost FBA inventory in full."
tags:
  vertical: Retail
  model: SaaS
  geography: Global
  secondary: [Amazon-seller, E-commerce, AI-agent, Document-extraction, SMB, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BasisKeeper — cost-basis keeper for Amazon FBA sellers

## 1. One-liner

Turns your supplier invoices into a defensible per-SKU cost basis so Amazon reimburses lost FBA inventory in full.

## 2. Trend signal — why now?

Amazon flipped the ground under every FBA seller. As of the March 2025 FBA inventory reimbursement policy (tightened again through Q2 2026), Amazon reimburses lost and damaged units at **manufacturing cost, not retail price**. If you haven't loaded a per-SKU cost — backed by a supplier invoice — into Amazon's new "Manage Your Manufacturing Cost" page inside the Inventory Defect and Reimbursement (IDR) portal, Amazon fills in its own estimate. And Amazon's estimate favors Amazon.

The numbers are ugly and public. Sellers report recovery amounts **dropping 50–75% on average** under the new basis. The documentation window collapsed to **60 days** for manual claims. The bulk-upload file Amazon provides **doesn't even include a SKU column or product description**, so anyone with a real catalog is doing it by hand or not at all. Meanwhile the entire incumbent tooling category — GETIDA, Refunzo, Carbon6 — is built to *file claims on commission*, not to *maintain the cost basis those claims now depend on*. The bottleneck moved upstream and nobody followed it.

This isn't a hunch. It's a policy change that mechanically transferred money from sellers to Amazon, a portal that's demonstrably clunky, and a wall of seller-forum rage. That's the setup.

Provenance:
  - Signal 1 (Demand): Sellers report reimbursement recovery down 50–75% under manufacturing-cost basis; forum posts call it "punitive" and "unconscionable" — [https://sellercentral.amazon.com/seller-forums/discussions/t/267c908a-c71a-44bd-9caa-08357276de20](https://sellercentral.amazon.com/seller-forums/discussions/t/267c908a-c71a-44bd-9caa-08357276de20) — 2026-07-05
  - Signal 2 (Feasibility): Amazon shipped the IDR / "Manage Your Manufacturing Cost" portal (Jan 2025) requiring per-unit supplier-invoice proof, with SP-API access and a documented 60-day window; cheap vision-LLM invoice parsing makes populating it automatable — [https://sellercentral.amazon.com/help/hub/reference/external/G66ZLS453YSE2Y4R](https://sellercentral.amazon.com/help/hub/reference/external/G66ZLS453YSE2Y4R) — 2026-07-05
  - Signal 3 (Economic): A funded incumbent category (GETIDA 25% / Refunzo 15% commission, Carbon6, SellerLabs) already monetizes FBA reimbursement — but exclusively on the claims side, leaving the cost-basis side unowned — [https://getida.com/](https://getida.com/) / [https://www.refunzo.com/blog/documentation-amazon-cost-based-fba-reimbursements-2026/](https://www.refunzo.com/blog/documentation-amazon-cost-based-fba-reimbursements-2026/) — 2026-07-05
  Category: Workflow automation

## 3. The opportunity

The reimbursement-tools market is crowded — but every player sits in the same spot: they audit your transactions, find discrepancies, file claims, and take 15–25% of what comes back. That model quietly broke in 2025. When reimbursement is pegged to manufacturing cost and your cost basis in Amazon's portal is blank (or Amazon's lowball estimate), the claim your GETIDA-style service files still pays out at the estimate. The commission-filers optimize the *back half* of a pipeline whose *front half* — a correct, invoice-backed, per-SKU cost basis loaded **before** the loss event — is now the thing that determines the payout.

BasisKeeper owns the front half. It ingests supplier invoices (PDF, image, email), extracts per-unit landed manufacturing cost, maps each line to the seller's ASIN/SKU, and pushes a defensible cost figure into Amazon's IDR portal — then keeps it current as new POs land. When Amazon loses a unit, the basis is already there, already documented, already at full value. No 60-day scramble. No estimate.

The incumbents won't chase this because it's orthogonal to how they earn: maintaining a cost baseline generates no commission. It's unglamorous document hygiene that happens to now be worth thousands a month per seller. That's exactly the kind of boring, high-pain gap a small team can own.

## 4. Target market

- **Primary customer:** Private-label and wholesale Amazon FBA sellers, US marketplace first (then UK/DE/global), doing **$500K–$10M annual GMV**, with **50–2,000 active SKUs**, run by the owner plus maybe a VA — no dedicated finance or ops hire. The people who feel every lost-unit dollar personally.
- **Why they buy (in their words):** *"Amazon lost two of our units, each valued at $255.50. They reimbursed us only $137.16."* … *"We sell high value inventory and are losing tens of thousands of dollars because they will not reimburse an adequate amount."* … *"Even when sellers provide valid invoices to substantiate the actual cost, Amazon routinely denies these claims."* (Amazon seller forums, 2026.) They're bleeding money on inventory Amazon already admits it lost.
- **Rough TAM reasoning:** There are ~2M active third-party Amazon sellers; the slice doing $500K+ GMV with real SKU counts and FBA exposure is in the low-to-mid hundreds of thousands globally. Even a few thousand paying seats is a healthy bootstrapped business.
- **Why now for them:** The policy change is recent, the money loss is ongoing and compounding with every restock, and most sellers *still don't know* the window dropped to 60 days or that a blank cost field = a lowball payout.

## 5. Product sketch (MVP)

- **Invoice inbox:** forward or drag supplier invoices (PDF/image/email); AI extracts per-unit cost, currency, quantity, PO date.
- **Landed-cost builder:** optionally roll in freight/duty allocations to compute a per-unit manufacturing cost that matches Amazon's definition (and flags what Amazon won't count, so there are no surprises).
- **SKU/ASIN mapper:** matches each invoice line to the seller's catalog, surfaces unmatched or ambiguous lines for one-click confirmation.
- **Portal push + coverage dashboard:** writes cost basis to Amazon's IDR portal (via SP-API where available, guided/assisted upload where not) and shows a red/green map of which SKUs have a defended basis vs. Amazon's estimate.
- **Estimate-gap alerts:** flags SKUs where Amazon's current estimate is materially below your documented cost, with the dollar exposure per SKU.
- **Re-evaluation packet:** when a claim pays at estimate, auto-assembles the invoice + cost worksheet for a re-evaluation reimbursement request.
- **Freshness watchdog:** nags when a new PO changes your cost, or when a cost record ages toward Amazon's proof requirements.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody will keep updated — which is exactly why the problem exists today. The load-bearing work is **document understanding at messy real-world quality**: supplier invoices come as scanned PDFs, phone photos, WeChat screenshots, multi-currency, multi-line, with SKUs that don't match Amazon's naming. A vision-LLM pipeline that reliably turns that chaos into a clean, mapped, per-unit cost — and re-maps it every time a new invoice lands — is the entire product. Rules-based OCR breaks on the variety; humans won't do it at 800-SKU scale for the same reason they're not doing it now. The AI is what makes "keep every SKU's cost basis current and defensible" go from a full-time job to a background service.

## 7. Localization angle (if any)

Global-first, US-marketplace-first. Localization is a secondary expansion lever, not the wedge: Amazon EU (UK/DE/FR/IT/ES) and JP run the same manufacturing-cost logic, and a large share of FBA supplier invoices originate from Chinese manufacturers — so multi-currency and CJK-invoice parsing is a genuine edge when expanding to sellers sourcing from Alibaba/1688. But the core buyer is defined by their Amazon marketplace, not their country, so this is a global SaaS play with per-marketplace portal quirks rather than a geo-arbitrage play.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered flat SaaS by SKU count — **$39/mo** (up to 100 SKUs), **$99/mo** (up to 500), **$249/mo** (up to 2,000), plus a **10% performance kicker** on *incremental* reimbursement recovered above Amazon's estimate (measurable, and it aligns us with the seller). Flat-first is deliberate: it undercuts the 15–25% commission model on high-value catalogs and gives us predictable ARR.
- **ACV:** Blended ~**$1,500/yr** (mix of tiers + modest performance kicker).
- **Rough math to $1M ARR:** ~670 sellers at ~$1,500 ACV. Reachable within the $500K+ GMV FBA cohort.
- **Rough math to $5M ARR:** ~3,300 sellers, or the same seat count with a richer performance kicker and EU/JP marketplace expansion lifting ACV toward $2,500. Needs proven recovery lift to justify the kicker at scale.
- **Expansion path:** more marketplaces (each is a new portal + currency), agency/aggregator seats (multi-account cost management), and adjacent COGS-derived features sellers already want (true net-margin per SKU, restock cost forecasting).

## 9. Go-to-market wedge — first 100 customers

- **Free "estimate-gap audit":** connect read-only SP-API, and we show — for free — the dollar gap between Amazon's current cost estimates and a rough landed cost we infer. This is a concrete, scary number per account and the entire hook. Convert audit → paid.
- **Reimbursement-agency partnerships:** the GETIDA/Refunzo-style filers *need* a correct cost basis for their commissions to pay out fully. Partner (or white-label) with 3–5 mid-size agencies who refer us upstream — their incentive is perfectly aligned. This is the fastest channel.
- **The complaint list:** the Amazon seller forums, r/FulfillmentByAmazon, and FBA Facebook/Discord groups are full of sellers posting exact dollar losses on lowball reimbursements. DM/reply with a link to a free audit that quantifies *their* exposure. Warm, self-selecting, self-documenting demand.
- **FBA-influencer + prep-center channel:** FBA YouTubers and 3PL/prep centers touch these sellers weekly; a rev-share on the estimate-gap audit gives them a genuinely useful thing to hand their audience.

## 10. Build complexity — justification

Medium. Off-the-shelf: vision-LLM invoice extraction, Amazon SP-API for catalog/inventory/reimbursement data, standard web stack. Custom work: robust invoice→SKU mapping at scale, matching Amazon's exact cost-definition rules, and the portal write path (SP-API where available, a guided/assisted flow where Amazon still forces manual upload). The clunky, SKU-column-less bulk-upload reality is friction to engineer around, not a research problem. A 1–3 person team ships a credible v1 (audit + extraction + coverage dashboard) in ~10–14 weeks; portal push and re-evaluation packets follow.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping sellers document their own true costs to Amazon; no ToS conflict — SP-API is sanctioned. |
| Ethical — no harm / dark patterns | ✅ | Sellers recover what they actually paid on inventory Amazon lost. Squarely pro-user. |
| Market exists (evidence above) | ✅ | Policy change + forum rage + funded incumbent category. |
| 1–5 person team can build this | ✅ | Off-the-shelf AI + public API + web stack. |
| Launchable with <$50K / ₹40L | ✅ | No inventory, no capex; inference + hosting + founder time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Recurring, quantified money loss on inventory Amazon admits losing; 50–75% recovery drop. Hair-on-fire for high-value catalogs. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: verbatim forum complaints with dollar figures, a funded adjacent tooling market, a documented policy shift. A skeptic nods. |
| Build feasibility | 15 | 12/15 | Off-the-shelf extraction + SP-API, but invoice→SKU mapping and a flaky portal write path add real engineering friction. |
| Distribution clarity | 15 | 12/15 | Free estimate-gap audit is a sharp hook; agency partnerships are incentive-aligned. Needs to prove the audit converts. |
| Revenue mechanics | 15 | 11/15 | Clear WTP vs. 15–25% commission incumbents; flat pricing undercuts them. Open question: flat vs. performance mix and its effect on conversion. |
| Time to first revenue | 10 | 8/10 | Audit-to-paid funnel can close in weeks once extraction works on real invoices. |
| Defensibility | 10 | 5/10 | Accumulating per-SKU cost data creates switching cost, but copyable and Amazon-platform-dependent. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can build a reliable document-extraction pipeline *and* someone who deeply understands Amazon FBA reimbursement mechanics (ideally an ex-seller or agency operator).

### Key assumptions to validate (3–5)

1. **Assumption:** The dollar gap between Amazon's estimates and true cost is large and common enough that a free audit produces a scary number for most $500K+ sellers. **How to test:** Run the read-only audit against 20–30 real seller accounts (recruit via agencies/forums) and measure the median exposure surfaced.
2. **Assumption:** Sellers will pay flat SaaS rather than only accept commission-only. **How to test:** Put both pricing options in front of 40 sellers post-audit; measure willingness and preferred model.
3. **Assumption:** The IDR portal write path is automatable at acceptable reliability (or agencies will do the upload). **How to test:** Build the SP-API + assisted-upload path against 5 live accounts and measure success rate + Amazon acceptance of the submitted basis.
4. **Assumption:** Reimbursement agencies will partner rather than build this themselves. **How to test:** Pitch 5 mid-size agencies on a referral/white-label; gauge interest and terms.

### Risk flags

1. **Platform dependency (primary):** Amazon could fix the bulk-upload UX, auto-populate cost from purchase data, or restrict SP-API — any of which shrinks the wedge. Mitigate by moving fast, banking data lock-in, and expanding into COGS-derived features that survive a portal fix.
2. **Amazon-denies-valid-invoices risk:** Sellers report Amazon rejecting even legitimate invoices. If acceptance rates are low, the value prop weakens; the re-evaluation packet must actually move the needle. Validate acceptance early.
3. **Incumbent fast-follow:** GETIDA/Carbon6 could bolt cost-basis management onto their claims product. Our edge is focus, extraction quality, and being first to own the upstream job — a 6–12 month head start, not a patent.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (doc-extraction/AI) + Amazon FBA domain advisor or ex-agency operator
Time to revenue:        6–10 weeks (free audit → paid conversion)
Capital to launch:      $15–30K (inference, SP-API dev, hosting, founder time)
Top 3 assumptions to validate first:
  1. Median estimate-gap exposure across 20–30 real accounts is large enough to sell on — run read-only audits
  2. Sellers prefer/accept flat SaaS over commission-only — A/B the offer with 40 post-audit sellers
  3. Portal write path (SP-API or assisted) achieves acceptable Amazon acceptance — test against 5 live accounts
Kill criteria:
  - Abandon if median audited exposure is under ~$300/mo for target sellers (not worth a paid tier)
  - Abandon if Amazon acceptance of submitted invoice-backed basis stays below ~50% after tuning
  - Abandon if Amazon ships auto-populated cost-from-purchase-data before v1 ships, collapsing the wedge
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway invoice-extraction demo (10 real supplier invoices → per-unit cost table). Confirm extraction quality is good enough to be trusted.
- **Day 3–4:** Recruit 15–20 FBA sellers from forums / an agency contact. Run a manual "estimate-gap audit" on their accounts (read-only export) and hand each a one-page dollar-exposure number.
- **Day 5:** Put the $39/$99/$249 flat tiers (plus optional 10% kicker) in front of them. **Go/no-go:** proceed only if ≥30% say they'd pay a flat tier *this month* and the median surfaced exposure clears ~$300/mo. Falsifiable: either the exposure is real and they reach for a card, or it isn't and they shrug.
