---
title: "RemitSweep — underpayment sweeper for solo optometry practices"
slug: optometry-underpayment-recovery
date: 2026-07-03
category: HealthTech / US Solo & Small Optometry / Eye-Care Practices
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Reads every insurance remittance against your contracted rates and drafts appeals for the dollars payers quietly shorted you."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Compliance-driven, RevenueRecovery]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RemitSweep — underpayment sweeper for solo optometry practices

## 1. One-liner

Reads every insurance remittance against your contracted rates and drafts appeals for the dollars payers quietly shorted you.

## 2. Trend signal — why now?

Three things converged in the last 12 months and put money on the table.

**The pain is now quantified and it's "silent."** Optometry practices without a revenue-integrity partner carry an average of **$62,000–$95,000 a year in undetected underpayments**, concentrated in diagnostic bundling and modifier disputes — claims that were *paid*, just paid below contract, so nothing lands in the denial queue and nobody notices ([Eye Care Billing Consultants / industry data, 2026](https://www.eyecarebillingconsultants.com/ophthalmology-practice-tips/eye-care-billing-errors-revenue-loss/)). Across healthcare generally, providers lose **1–3% of net revenue** to underpayments and ~11% of claims are underpaid or denied ([RPM Medical Billing, 2026](https://www.rpmmedicalbilling.com/medical-billing-underpayments/); [MD Clarity](https://www.mdclarity.com/blog/underpaid-claims-healthcare)). The reason it persists: "most internal billing teams are structured to work denial queues — not to run systematic payer allowable comparisons by CPT and modifier across every remittance."

**It just got cheap to detect.** The 835 ERA (electronic remittance) is now available as developer-friendly JSON with full CARC/RARC adjustment-reason descriptions ([Stedi 835 API, 2026](https://www.stedi.com/docs/healthcare/api-reference/get-healthcare-reports-835)), and AI OCR now converts scanned paper EOBs from 3,500+ payors into structured 835 data ([QuickERA, 2026](https://quickintell.com/products/quickera)). The contractual-adjustment (CAS) field is the tell: if the write-off exceeds the contracted rate, the payer underpaid and the delta is recoverable. Reading that at scale used to need a billing analyst; an LLM now does it per-remittance for cents.

**Money is already moving — just not down-market.** MD Clarity raised and sells underpayment detection at **$500–$1,850/mo**, explicitly aimed at "physician groups, multi-site practices, and MSOs" ([MD Clarity pricing, 2026](https://www.mdclarity.com/)). The solo OD and the 2-chair practice can't justify that, don't have a billing analyst to run it, and are the exact segment optometry's fee schedules have squeezed hardest — 70% of ODs report **no fee-schedule increase from their largest vision plan in 5+ years** ([AOA Health Policy Institute](https://www.aoa.org/news/advocacy/third-party/vision-plan-reimbursment)).

Provenance:
  - Signal 1 (demand): Optometry practices lose $62K–$95K/yr in silent underpayments; billing teams work denial queues, not allowable comparisons — [Eye Care Billing Consultants](https://www.eyecarebillingconsultants.com/ophthalmology-practice-tips/eye-care-billing-errors-revenue-loss/) — 2026
  - Signal 2 (feasibility): 835 ERA now developer-JSON with CARC/RARC descriptions + AI EOB→835 OCR across 3,500 payors makes per-remittance underpayment detection cheap — [Stedi](https://www.stedi.com/docs/healthcare/api-reference/get-healthcare-reports-835) / [QuickERA](https://quickintell.com/products/quickera) — 2026
  - Signal 3 (economic): MD Clarity sells underpayment detection at $500–$1,850/mo to groups & MSOs — the solo/2-chair wallet is unserved — [MD Clarity](https://www.mdclarity.com/) — 2026
  Category: Underserved niche

## 3. The opportunity

This is an enterprise-tool-SMBs-can't-afford arbitrage. Underpayment recovery already works — MD Clarity, QuickERA, and the RCM outsourcers prove it — but every incumbent is built for organizations with a billing team and a $6K–$22K/yr budget. The solo OD and the 2–3 provider practice get skipped, and they're bleeding the *highest* percentage because they have zero systematic checking. Their EMR (RevolutionEHR, Compulink, Crystal PM) posts the payment and marks the claim closed. Nobody ever asks "was that the contracted rate?"

What a focused AI-first tool does 10× better than the status quo (which is *nothing* for this segment): ingest the practice's payer fee schedules once, then read every incoming remittance, flag each line where paid < contracted, quantify the recoverable dollars, and hand back a ready-to-send appeal packet with the CARC/RARC reason and the contract citation. The incumbent's weakness isn't quality — it's price and setup weight. We win on "$149/mo, drop your remits in, get a list of money you're owed by Friday."

## 4. Target market

- **Primary customer:** Owner-optometrist of a solo or 2–3 provider independent practice, US, roughly $400K–$1.5M annual collections, no dedicated billing analyst (front-desk staff or an outsourced biller handles posting). Optometry-first because silent underpayment is worst there and billing sophistication is lowest; expands to independent PT, chiro, and audiology (same shape).
- **Why they buy (their words):** "I have no idea if the insurance is paying me what my contract says." Practices "can only spot-check for underpayments" and "assume insurers always pay correctly" — which the data says is false. A recovered $40K/yr on a $149/mo tool is a 20×+ return they can feel.
- **Rough TAM reasoning:** ~44,000 optometry practice locations in the US, heavily skewed to independents; even a conservative independent solo/small base of ~25,000. Add independent PT (~38,000 clinics), chiro (~40,000), audiology — the adjacent same-shape wallet is 100,000+ US practices. At $149/mo, 3,000 practices = ~$5.4M ARR. We do not need to be huge.
- **Why now for them:** Fee schedules have been frozen for years while costs rose, so every recoverable dollar matters more than it did in 2019 — and this is the first year detection is cheap enough to sell at $149 instead of $1,850.

## 5. Product sketch (MVP)

- **One-time payer setup:** upload or key in contracted fee schedules per payer (or import from the EMR); we store the allowable per CPT + modifier.
- **Drop-in remittance ingestion:** forward 835 ERA files (or scan/upload paper EOBs — AI OCR converts them) from each payer.
- **Underpayment sweep:** every remittance line compared to contracted allowable; flags each underpaid line with paid vs. owed and the CARC/RARC reason.
- **"Money owed" dashboard:** running total of recoverable dollars this month/quarter, ranked by payer and by dollar size so the practice chases the biggest first.
- **One-click appeal packet:** auto-drafted corrected-claim / reconsideration letter citing the contract rate and adjustment code, formatted per payer, ready to fax/portal-submit.
- **Recovery tracker:** mark each appeal submitted / paid / denied so the practice sees dollars actually landing (this is the retention hook).
- **Monthly leak report:** "you recovered $3,240 and here's the pattern — Payer X keeps bundling code 92014" — turns a tool into an advisor.

## 6. AI angle — what's load-bearing

Remove the AI and the product collapses into a spreadsheet nobody fills in — which is exactly today's status quo. AI is load-bearing in three places: (1) **OCR + structuring of messy paper EOBs** across thousands of payor formats into normalized lines — the reason a solo practice can't do this manually; (2) **reasoning over CARC/RARC codes + contract terms** to decide whether an adjustment is legitimate (contractual) or a recoverable underpayment (the judgment a billing analyst charges $60K/yr for); (3) **drafting the payer-specific appeal letter** with the right code, contract citation, and tone. The moat isn't the 835 parser (that's commodity) — it's the AI turning a raw variance into a defensible, submittable recovery action a non-expert can send.

## 7. Localization angle (if any)

N/A — this is a US-only play. It's structurally bound to US payer contracts, CARC/RARC codes, the 835 EDI standard, and appeal/reconsideration workflows. That specificity is a feature: it's the exact regulatory/format knowledge that makes it hard for a generic global tool to copy, and it keeps the product narrow. No India/LatAm variant here.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo flat for solo, $249/mo for 2–3 providers (self-serve SaaS). Optional 15% success fee on first-90-day recovered dollars for practices that want zero upfront risk — but the flat sub is the core, because it's predictable and cheap enough to be an impulse yes.
- **ACV:** ~$1,800–$3,000. Very high value-to-price ratio (recovers $40K–$90K/yr on a ~$2K spend), which is what makes churn low and word-of-mouth strong.
- **To $1M ARR:** ~550 practices × $150/mo × 12 = ~$1M. Achievable within optometry alone.
- **To $5M ARR:** ~2,800 practices at a $150 blended ACV — requires expanding beyond optometry into PT/chiro/audiology (identical product shape) and adding the success-fee tier on larger practices. Nothing exotic; just more of the same funnel across adjacent verticals.
- **Expansion path:** add-on verticals, per-provider seat growth as practices add chairs, a higher tier that auto-submits appeals through payer portals, and a benchmarking upsell ("your Payer X underpays 8% more than peers").

## 9. Go-to-market wedge — first 100 customers

- **Optometry owner Facebook groups + ODs on Facebook (30k+ members) and Reddit r/optometry:** post a free "underpayment audit" offer — send us one month of remits + your fee schedule, we'll tell you exactly how much a single payer shorted you. The number *is* the demo. Convert the shocked ones.
- **Free teardown lead magnet:** a landing page where an OD uploads one 835 and gets a one-page "here's what you were underpaid last month" report instantly. Sourced directly from the pain: practices "have no idea if the insurance is paying what the contract says."
- **Optometry billing consultants & practice-management coaches as referral partners:** they see the leak across dozens of clients but can't manually audit every remittance; give them a referral cut. Warm intros to exactly the owner who feels the pain.
- **State optometric association vendor tables / newsletters** (AOA affiliates): cheap access to independents at the moment they're already griping about frozen fee schedules.
- **Cold outreach to the 2,000 independent practices scrapable from optometry directories:** personalized "your top payer likely underpaid you ~$X last quarter" email → free audit → paid.

## 10. Build complexity — justification

Medium. The 835 parsing (Stedi/health-samurai), EOB OCR (off-the-shelf vision + LLM), and letter drafting (LLM) are all commodity building blocks — no custom models. The real work is (a) building and maintaining the payer fee-schedule ingestion + normalization for enough payors to be useful, and (b) getting the underpayment-vs-legitimate-adjustment logic trustworthy enough that a non-expert acts on it without generating bogus appeals. That's careful domain work, not research. A technical founder + an optometry-billing advisor ship a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Appealing underpaid claims against your own contract is standard billing practice. Handle PHI under BAA/HIPAA. |
| Ethical — no harm / dark patterns | ✅ | Recovers money legitimately owed under contract; no upcoding, no fraud. |
| Market exists (evidence above) | ✅ | Incumbents charge $500–$1,850/mo; quantified $62K–$95K/yr leak per optometry practice. |
| 1–5 person team can build this | ✅ | Technical founder + billing-domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs; main cost is founder time + a clearinghouse/EDI integration. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, recurring, quantified dollar loss — but "silent," so urgency must be manufactured with the free-audit reveal; not hair-on-fire until they see the number. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: funded incumbents, hard $ figures, AOA fee-freeze survey. Weakness: little raw first-person OD complaint volume (it's silent by nature). |
| Build feasibility | 15 | 11/15 | Commodity APIs, but fee-schedule ingestion + trustworthy variance logic + HIPAA is real work — 3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Named channels (OD FB groups, billing-consultant referrals, association newsletters) with a demo that *is* the pitch; conversion still unproven. |
| Revenue mechanics | 15 | 12/15 | Clean pricing, huge value-to-price ratio, credible customer counts. PHI/BAA sales friction shaves it. |
| Time to first revenue | 10 | 7/10 | Free-audit → paid can close in 4–8 weeks; slowed by needing the practice's fee schedules and a signed BAA. |
| Defensibility | 10 | 5/10 | Execution + accumulating payer-format/fee-schedule library + workflow lock-in (recovery tracker). Copyable; incumbents could move down-market. Head start + niche focus is the moat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — you need someone who can ship EDI/OCR/LLM plumbing *and* someone who deeply understands optometry payer contracts and appeals, or the variance logic will be wrong and the appeals will bounce.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo/small ODs will hand over one month of remits + their fee schedule for a free audit. **How to test:** offer it in 3 OD Facebook groups; target ≥25 uploads in 2 weeks.
2. **Assumption:** The tool finds a *material* recoverable number (not $200) on a typical solo practice's remits. **How to test:** run the audit on the first 20 practices; median recoverable ≥ $2,000/month clears the bar.
3. **Assumption:** ODs will pay $149/mo for ongoing detection after seeing the one-time number. **How to test:** convert free-audit recipients; ≥15% paid conversion.
4. **Assumption:** Fee-schedule ingestion is tractable across the top ~10 vision/medical payors without per-practice manual heroics. **How to test:** build ingestion for the 5 most common payors; measure setup time per new practice (<30 min target).

### Risk flags

1. **Trust/accuracy risk:** a false "you were underpaid" that generates a bogus appeal burns the practice's payer relationship and our credibility. The variance logic must be conservative — under-flag rather than over-flag.
2. **Incumbent-downmarket risk:** MD Clarity or a clearinghouse could ship a $149 self-serve tier. Mitigate with speed, optometry-specific polish, and referral-partner lock-in before they notice.
3. **Data-access / HIPAA friction:** PHI means BAAs and security posture from day one; adds sales friction and build cost. Not a blocker, but it slows time-to-first-dollar.
4. **Silent-pain risk:** because the loss is invisible, demand must be *created* by the reveal — if the free audit doesn't consistently produce a jaw-drop number, the whole funnel stalls.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + optometry-billing domain advisor
Time to revenue:        6–10 weeks (free-audit → paid)
Capital to launch:      $15–30K (EDI/clearinghouse integration, OCR/LLM usage, BAA/security setup)
Top 3 assumptions to validate first:
  1. Free audit finds median ≥$2K/month recoverable on typical solo practices — run on 20 real practices
  2. ODs upload remits for a free audit — ≥25 uploads across 3 FB groups in 2 weeks
  3. ≥15% of audited practices convert to $149/mo
Kill criteria:
  - Abandon if median recoverable across 20 real audits is <$1,000/month (value story dies)
  - Abandon if <10% of free-audit recipients convert to paid after seeing their number
  - Abandon if a well-funded incumbent ships a <$200/mo self-serve tier before your v1 lands
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the throwaway free-audit engine — ingest one 835 + a hand-keyed fee schedule for 3 common vision/medical payors, output a one-page "underpaid last month = $X" report. No dashboard, no auth.
- **Day 3–4:** Post the free-audit offer in r/optometry and 2 OD owner Facebook groups; DM 30 independent practices from a directory with a personalized "your top payer likely shorted you ~$X" hook. Collect remit uploads.
- **Day 5:** Run the audit on every practice that responded. Decide **go / no-go** on one falsifiable number: **median recoverable ≥ $2,000/month across ≥10 real practices, and ≥3 of them say "yes, take my money" for ongoing detection.** Below that, it's a VALIDATE at best — the leak is real but either too small per-practice or too silent to sell.
