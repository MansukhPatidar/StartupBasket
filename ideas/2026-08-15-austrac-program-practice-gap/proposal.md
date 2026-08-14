---
title: "DriftLedger — AML practice ledger for Australian firms"
slug: austrac-program-practice-gap
date: 2026-08-15
category: Compliance / Australia
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads what your firm actually did on each matter and flags where it drifted from the AML program you filed."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [Australia, AUSTRAC, Tranche-2, AML, SMB, Compliance-driven, AI-agent]
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

# DriftLedger

## 1. One-liner

Reads what your firm actually did on each matter and flags where it drifted from the AML program you filed.

## 2. Trend signal — why now?

On 1 July 2026 — six weeks ago — roughly 90,000 Australian businesses became AML/CTF reporting entities for the first time. Lawyers, accountants, conveyancers, real estate agents, buyer's agents, trust and company service providers, dealers in precious metals and stones. Enrolment closed 29 July 2026. Daily penalties now accrue for the unenrolled: up to A$18,780/day for corporations.

The interesting part isn't the deadline. It's how catastrophically unready the market was. The Access Group surveyed **more than 1,700 accounting professionals** and found **only 6% felt on top of the legislation**, **32% had not started engaging with the reforms at all**, and **62% said they were unclear about the new rules** — up from 50% a month earlier. Confusion was *increasing* as the deadline closed.

What did those firms do? They bought a program. A dozen vendors — AMLTranche, ClearAML, AML Mate, SimpleAML, OverSEER, NameScan, First AML — sprang up selling AUSTRAC enrolment, an auto-generated risk assessment, a written AML/CTF program, and per-check identity verification at $49–$449/month. The written program got produced, adopted, and filed.

And then the firm went back to work. The two-partner accounting practice that bought a 40-page program in June 2026 is not following it in August 2026. Nobody is. The program says "enhanced due diligence for customers assessed as high risk"; the actual matter file has a driver's licence scan and nothing else. The program says training is refreshed annually and logged; the log has three of eleven staff. This is the single most common finding in AML evaluations — the gap between documented procedures and actual practice.

That gap is currently invisible, and it compounds silently for years. Records must be kept **seven years** across six categories. The first annual compliance report covers 1 July 2026 – 30 June 2027 and lodges by 30 September 2027. The first independent evaluation is staggered — proposals put cohorts at 30 June 2029 through 1 July 2032. So a firm has three to six years of accumulating drift before an evaluator opens the drawer. By then it's unfixable: you cannot retroactively do the customer due diligence you didn't do in 2027.

AUSTRAC has already shown it will litigate the paperwork failure mode specifically — it launched civil penalty proceedings against reporting entities for missed compliance reports, with penalties in the range of A$3,300 for sole traders and A$16,500 for companies per contravention, against a statutory ceiling of A$31.3M per contravention for a body corporate.

Provenance:
  - Signal 1 (demand): Access Group survey of 1,700+ accounting professionals — only 6% prepared, 32% not started, 62% unclear on Tranche 2 rules — https://www.accountingtimes.com.au/profession/access-group-warns-of-guidance-gap-ahead-of-tranche-2-aml-ctf — observed 2026-08-15
  - Signal 2 (feasibility): AUSTRAC independent evaluation must test control design *and operational effectiveness*, requiring access to CDD records, screening logs and training materials — gaps between documented procedure and actual practice are the most common finding — https://amltranche.com.au/blog/independent-evaluation-aml-program-australia — observed 2026-08-15
  - Signal 3 (economic): ~90,000 entities newly captured from 1 July 2026; government-estimated A$23,250/yr compliance cost per entity; a funded vendor category already charging $49–$449/mo for the adjacent onboarding problem — https://themodernregulator.com/june-2026-regulatory-update/ — observed 2026-08-15
  - Signal 4 (enforcement): AUSTRAC civil penalty proceedings for missed compliance reports establish the regulator litigates documentation failure, not just money laundering — https://www.austrac.gov.au/news-and-media/media-release/austrac-launches-civil-penalty-proceedings-missed-compliance-reports — observed 2026-08-15
  Category: Regulatory arbitrage

## 3. The opportunity

The Tranche 2 vendor category solved the **front door**: enrol the entity, ID-check the customer, generate a program document. That's a real product and it sold well, because the deadline was legible and terrifying.

Nobody sells the **back door**. I checked the vendor comparison tables directly: internal reviews, gap analysis between written program and actual practice, and independent evaluation preparation are not offered by any vendor in the category. Consultants will do it — at a A$2,000–4,000/month retainer, which prices out the two-partner firm entirely.

So the market structure right now is: 90,000 firms hold a written program they are not following, sold to them by a vendor with no incentive or capability to tell them so, with a three-to-six-year fuse before anyone checks.

The wedge is that the written program is *machine-readable* and so is the evidence. The firm's own AML program states what it committed to do. The firm's practice management system (FYI, Karbon, Xero Practice Manager, Actionstep, PropertyMe, Console) holds what actually happened on each matter. A model that reads the first and interrogates the second produces a specific, dated, per-matter list of where the firm departed from its own policy — while there's still time to remediate.

This is a genuinely nasty problem to do by hand, which is why nobody does it. It's not a compliance question, it's a reconciliation across two unstructured corpora. That's the AI-shaped hole.

Critically: I'm not selling audit. I'm selling the thing that makes the audit survivable, and — more saleable — the thing that stops today's matter from becoming next year's finding.

## 4. Target market

- **Primary customer:** Principal / managing partner / practice manager at an Australian Tranche 2 reporting entity with **3–40 staff** — suburban accounting practices, small law firms doing conveyancing and trusts, independent real estate agencies, standalone conveyancers. Firms big enough to have a compliance obligation and matter volume, too small to have a compliance officer.
- **Why they buy:** They bought a program under deadline pressure, they know they aren't following it, and they cannot see how bad it is. David Boyar of The Access Group put the mood exactly: *"This is the latest in a cumulative burden on small practices, and the timeframe for compliance compounds an already significant challenge."* And on the guidance vacuum: *"There is no single, authoritative source that tells a two-partner accounting firm — step by step, service by service, client by client — exactly what to do."* That sentence is the product spec.
- **Rough TAM reasoning:** ~90,000 newly captured entities. Strip out sole traders with negligible matter volume and the enterprise tail that has real compliance staff, and the serviceable middle is plausibly 25,000–35,000 firms. At A$300/mo average that's a A$90M+ category; I need ~0.5% of it for a A$1M business.
- **Why now for them:** The obligations are live *today* and the evidence is accumulating *today*. Every month of drift is a month that cannot be repaired later. The firms are also freshly sensitised — they just spent money and panic on this in June, so the budget line exists and the topic is not abstract.

## 5. Product sketch (MVP)

- **Program ingest** — upload the AML/CTF program document the firm already bought (any vendor's, or a consultant's Word file). The product extracts the firm's own stated commitments into a checkable list: risk-rating triggers, EDD conditions, screening cadence, training frequency, record categories, escalation thresholds.
- **Matter sweep** — connect the practice management system and read the last N matters. For each, assemble what evidence actually exists: ID documents, beneficial ownership records, screening results, risk rating, file notes.
- **Drift report** — the core artifact. A dated, per-matter list: *"Matter 4471, settled 12 Aug — your program requires source-of-funds evidence for cash components over A$10K; the file has none."* Ranked by exposure, not alphabetically.
- **Remediation clock** — for each drift item, whether it's still fixable (client contactable, matter open) or already frozen into the record. Fixable items get a chase workflow.
- **Training and personnel gaps** — reconcile the staff list against the training log, flag who's unlogged, since every person at the business must undertake AML/CTF training.
- **Evidence binder** — one export per period holding the risk assessments, CDD records, screening logs, training records and decision rationale an evaluator will ask for, in the order they'll ask.
- **Compliance report pre-fill** — as the 30 September 2027 lodgement approaches, the accumulated record answers the annual compliance report questions instead of the principal reconstructing a year from memory.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist. That's the test and it passes cleanly.

The core operation is: read an unstructured 40-page policy document written by one of a dozen vendors in a dozen different house styles, extract the firm's *specific* commitments as testable conditions, then read hundreds of unstructured matter files — file notes, scanned IDs, email threads, free-text risk comments — and decide for each whether the committed condition was actually met.

There is no rules engine for this, because the rules are different at every single firm. The program is bespoke to the entity by law — AUSTRAC requires it be proportionate to the nature, size and complexity of the business. So the "policy" side is as unstructured as the "evidence" side. Two unstructured corpora, reconciled per-matter. That's document understanding doing the entire job, and it only became cheap enough per-matter to run at a A$300/mo price point in roughly the last 18 months.

The honest caveat: the model must be tuned to under-claim. A false "you're fine" is a catastrophic product failure. Every drift call cites the specific document and the specific policy clause, and ambiguity resolves to "human should look," never to "compliant."

## 7. Localization angle

This is a deliberately Australia-only play, and the constraint is the moat.

The product encodes the AUSTRAC regime specifically: the six record categories and their seven-year retention, the reformed program requirements from the 2026 rules, the designated-service definitions that determine which of a firm's matters are even captured, the staggered evaluation cohorts, the 30 September annual lodgement. None of that transfers.

The integration surface is equally local: PropertyMe and Console for real estate, Actionstep and LEAP for law, FYI and Xero Practice Manager for accounting. An offshore competitor building a "global AML gap analysis" product hits an Australian firm's stack and bounces.

Pricing works in AUD at A$249–599/mo against a government-estimated A$23,250/yr compliance cost and a A$2,000–4,000/mo consultant alternative. The natural next markets are the same-regime jurisdictions — NZ, and the UK/Ireland where equivalent DNFBP obligations have run for years and the same drift exists with a decade of accumulation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers by matter volume and seats — A$249/mo (up to 3 staff, ~30 matters/mo), A$449/mo (up to 10 staff), A$899/mo (up to 40 staff, multi-office). Annual prepay at 2 months free, which matters because this is a budget-line purchase for a practice.
- **ACV:** ~A$5,400 blended (A$450/mo average).
- **Rough math to A$1M ARR:** 185 firms at A$450/mo. Out of ~30,000 serviceable entities that's 0.6% penetration. Achievable inside 18 months with the channel below.
- **Rough math to A$5M ARR:** ~925 firms, or ~500 firms plus the initial-audit service line. Requires winning at least one professional-body or franchise-network endorsement (see §9) — organic-only likely tops out around A$2M.
- **Expansion path:** three real levers. (1) Matter volume — a growing agency moves up tiers automatically. (2) The **initial drift audit** as a one-off A$1,500–3,500 engagement, which is also the best possible sales device because the report *is* the pitch. (3) The evaluation-readiness package as cohorts approach their 2029–2032 dates, sold either to the firm or, better, to the evaluators themselves as a workpaper tool.

## 9. Go-to-market wedge — first 100 customers

The unfair advantage here is that **AUSTRAC's enrolment register is public**, and every Tranche 2 entity had to enrol by 29 July 2026. The prospect list is enumerated, current, and government-maintained. That is not normally how this goes.

- **The free drift snapshot on real files.** Take the enrolment register, filter to the 3–40 staff band, cross-reference against state real estate and law society registries for size. Offer a no-charge drift report on ten matters — the firm uploads its program and ten files, gets back a specific list of where it departed from its own policy. The report sells itself because it's about *their* files, not a hypothetical. Target 2,000 firms, expect 4–6% to take a free look, expect a third of those to convert once they see their own gaps in writing.
- **Go through the vendor that sold them the program.** A dozen AML vendors have 90,000 relationships and a structural blind spot — none of them offer gap analysis, and it's awkward for them to build it because it audits their own output. Referral or white-label partnership with two mid-tier vendors puts the product in front of their base as a complement rather than a competitor. This is the fastest path to volume and the highest-leverage two conversations in the whole plan.
- **The consultants, as channel not competition.** Firms charging A$2,000–4,000/mo retainers cannot profitably serve two-partner practices, but they field the enquiries. Give them a partner tier: they run DriftLedger across their small-client tail, keep the margin, and reserve human hours for the complex work. They also become the evaluator pool from 2029.
- **Professional bodies and franchise networks.** CPA Australia, CA ANZ, the state law societies and the Real Estate Institutes are all actively publishing Tranche 2 guidance right now and are visibly aware their members are drowning — CPA Australia is already hosting the AUSTRAC obligations factsheet. A member-benefit deal with one REI state body or one national real estate franchise (Ray White, LJ Hooker, Harcourts) delivers hundreds of offices in one contract.
- **Content against the specific fear.** Not generic "AML compliance" SEO — that's saturated by vendors with budgets. Target the post-purchase question: "is my AML program actually being followed", "what does an AUSTRAC independent evaluation look at", "AML compliance report 30 September 2027". Low volume, near-zero competition, and the searcher is a principal with a live worry.

## 10. Build complexity — justification

**Medium.** The document understanding is off-the-shelf — commercial models handle policy extraction and evidence reconciliation without custom training. The genuine work is integration breadth: PropertyMe, Console, Actionstep, LEAP, FYI and Xero Practice Manager each need a connector, and several have mediocre APIs. A pair could ship a credible v1 against two integrations plus manual/CSV upload in 10–14 weeks; the manual-upload path alone is enough to run the free-audit wedge and take money.

The part that needs discipline is calibration. Under-claiming is mandatory, every finding must cite its source clause and source document, and the product needs a domain advisor — an AML consultant on retainer or equity — to validate the extraction logic against real programs. That's a hiring/relationship dependency, not an engineering one, and it's why this is tagged `domain-expertise-required`.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-support tooling. Not providing legal advice, not performing the statutory independent evaluation itself — positioning must stay on the readiness side of that line. |
| Ethical — no harm / dark patterns | ✅ | Helps firms meet obligations honestly. The failure mode to avoid is fear-marketing; findings must be evidenced, never inflated. |
| Market exists (evidence above) | ✅ | 90,000 entities, live obligations, funded adjacent vendor category, 6%-readiness survey. |
| 1–5 person team can build this | ✅ | Pair plus a domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Model inference, a few integrations, no capital requirement. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real and expensive, but the pain is *latent* — the fuse runs to 2029–2032. Firms know they should care; they don't bleed weekly. That deferred deadline is exactly what caps this below 17. |
| Demand evidence | 15 | 13/15 | A 1,700-person survey showing 6% readiness, a funded vendor category charging real money for the adjacent problem, and a regulator already litigating documentation failure. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Core reconciliation is off-the-shelf; integration breadth and calibration discipline are the drag. 10–14 weeks to a sellable v1. |
| Distribution clarity | 15 | 12/15 | Public enrolment register is a genuine unfair advantage, and the free-report wedge is strong. Docked for dependence on partnerships (vendors, bodies) to reach the second hundred. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked between $49 tools and $2–4K consultants, with a defensible A$449 midpoint. The audit one-off strengthens cash. Churn is the open question. |
| Time to first revenue | 10 | 7/10 | The paid initial audit can close inside 6–8 weeks of launch. Subscription conversion is slower — practices buy on a considered cycle. |
| Defensibility | 10 | 5/10 | Regulatory knowledge and local integrations are real but copyable; the existing vendors could bolt this on within a year if they're willing to audit their own output. Accumulated per-firm history is the only compounding asset. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can build careful document-reconciliation systems, paired with genuine AUSTRAC fluency. Attempting this without an AML practitioner in the founding circle produces confident, wrong findings — which is worse than no product.

### Key assumptions to validate (3–5)

1. **Assumption:** Firms will act on latent risk with a 3–6 year fuse rather than deferring. **How to test:** Run 25 free drift reports on real files. The measurable signal is not "did they like it" — it's what percentage request a paid remediation or subscription within 30 days of seeing their own gaps.
2. **Assumption:** Practice management systems expose enough matter-level evidence to reconcile against policy. **How to test:** Technical spike against PropertyMe and Actionstep sandboxes before writing product code. If evidence lives only in unstructured attachments, ingestion cost rises materially.
3. **Assumption:** A A$449/mo midpoint clears where the firm has already spent on an AML vendor this year. **How to test:** Price-test three tiers across 40 sales conversations; watch whether "we already pay for AML software" is a stall or a hard no.
4. **Assumption:** At least one mid-tier AML vendor will partner rather than treat this as an attack on their program quality. **How to test:** Direct approach to three vendors in month one. Their answer reshapes the entire GTM.
5. **Assumption:** Drift is actually widespread — that a typical firm's real files depart from its written program often enough to justify a product. **How to test:** The first 10 free audits answer this definitively. If median drift is under 2 findings per 10 matters, the premise is wrong and the idea dies here.

### Risk flags

1. **Market timing (the central risk):** The independent evaluation fuse runs to 2029–2032 and the first compliance report to Sept 2027. This product may be 12–24 months early to genuine urgency. The mitigation is to sell on the *irreversibility* of today's drift — the evidence you fail to capture this month cannot be recreated in 2029 — and to lean on the Sept 2027 compliance report as the near-term forcing event.
2. **Incumbent absorption:** AMLTranche, ClearAML and peers have the relationships and could ship a gap-analysis module. The counter-argument is that it's genuinely awkward for a vendor to build a tool that grades its own auto-generated program — but "awkward" is not "impossible," and a year is a short head start.
3. **Liability positioning:** A product that says "you have 3 gaps" implies "and otherwise you're fine." That implication is dangerous. Contractual framing, insurance, and relentlessly conservative model calibration are mandatory from day one, not month twelve.
4. **Regulatory drift:** The evaluation staggering was still at consultation stage in the sources I found — cohort dates may move. Doesn't threaten the core product, but any GTM messaging keyed to specific 2029/2031/2032 dates needs re-verification against the final rules before it goes on a landing page.
5. **Platform dependency:** Value scales with practice-management integrations. A major vendor closing or pricing its API meaningfully degrades the product for that vertical.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who ships careful document-AI, paired with an
                        AUSTRAC-fluent AML practitioner as co-founder or equity advisor
Time to revenue:        6–8 weeks to first paid drift audit; 4–5 months to meaningful MRR
Capital to launch:      A$25–40K ($16–26K) — mostly the domain advisor and 4 months of runway
Top 3 assumptions to validate first:
  1. Drift is real and common — run 10 free audits on real matter files, measure median
     findings per 10 matters; under 2 kills the idea
  2. Latent risk converts — of 25 firms shown their own gaps, does >20% pay within 30 days
  3. One mid-tier AML vendor will partner rather than compete — three direct conversations
     in month one
Kill criteria:
  - Abandon if median drift across the first 10 real-file audits is under 2 findings per
    10 matters — the premise is then false
  - Abandon if <15% of firms shown a free drift report on their own files take any paid
    action within 30 days — the fuse is too long and the market will wait until 2029
  - Abandon if two or more incumbent AML vendors ship gap-analysis modules before v1 —
    they own the relationships and the head start is gone
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the AUSTRAC enrolment register, filter to 3–40 staff Tranche 2 entities, build a 300-firm list across accounting, conveyancing and real estate. In parallel, obtain 5 real AML/CTF programs from different vendors — via a friendly practitioner or by buying the cheapest tiers directly — and confirm the commitments extract cleanly into testable conditions.
- **Day 3–4:** Offer 25 firms a free drift report on ten of their own matters, run manually — no product, just the founders reading files against the program. This is deliberately unscalable; it produces the only number that matters. Approach three AML vendors about partnership in the same window.
- **Day 5:** Decide on two falsifiable measures. **Go** if median drift ≥2 findings per 10 matters *and* ≥5 of the 25 firms ask what it would cost to fix or monitor this. **No-go** if files are broadly clean — the market genuinely complied and there is no product — or if firms read their own gap list and shrug, which proves the 2029 fuse is too long to sell against today.

The manual audit is the entire sprint. If ten firms' real files don't show drift, no amount of product quality saves this, and I'd rather learn that for the price of a week than a year.
