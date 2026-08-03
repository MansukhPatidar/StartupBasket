---
title: "AllowedGap — variance auditor for small physician practices"
slug: payer-underpayment-variance
date: 2026-08-03
category: HealthTech / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Reads every remittance and tells a 4-doctor practice which payers quietly paid below the contracted rate."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Revenue-recovery, Data-unlock]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# AllowedGap

## 1. One-liner

Reads every remittance and tells a 4-doctor practice which payers quietly paid below the contracted rate.

## 2. Trend signal — why now?

Three things moved at once, and they point at the same pile of money.

**The leak is measured, and it's big.** MGMA puts underpayment at **5–7% of net revenue for small-to-midsize physician groups**, versus 2–3% for large hospital systems. That gap isn't because payers treat small practices worse — it's because nobody at a 6-doctor practice is checking. An MGMA Stat poll (Feb 11, 2025, n=193) found **only 30% of practices audit payer payments against contracted rates monthly**; 30% do it annually, 23% answered "other," which is a polite way of saying never. One respondent: *"It's ridiculous how often [payer] payments are incorrect."* Another: *"Clinics [that] do not audit at least weekly are losing money."*

**The yardstick became public.** The Transparency in Coverage rule forces every commercial insurer to publish in-network negotiated rates as machine-readable files, keyed by **provider NPI and billing code (CPT/HCPCS)**, updated monthly, free, no login. Schema 2.0 has been enforced since Feb 2, 2026. Historically the blocker to underpayment detection was "you can't audit without your fee schedule, and small practices don't have a copy of their contract." Now the rate is downloadable whether the practice kept the contract or not.

**But the yardstick is deliberately unusable at practice scale.** A single Cigna network MRF regularly exceeds 200 GB; UHC files reach into the terabytes. Standard JSON parsers fail; you need streaming parsers and real cloud spend. A practice manager cannot open this. A vendor who does the extraction *once* can resell it to thousands of practices for pennies each. That asymmetry is the whole business.

Meanwhile every existing underpayment vendor — MD Clarity, Waystar, FinThrive, Experian Health, R1/Cloudmed, Revecore, Aspirion, CorroHealth — sells to hospitals, health systems, IDNs, and 15–25+ provider groups. In a 10-vendor category roundup, **not one demonstrates pricing or case studies for practices under 10 providers.** Two-thirds of US office-based physicians work in practices of fewer than seven physicians. The largest segment by headcount is the one segment nobody serves.

Provenance:
  - Signal 1 (demand): MGMA Stat poll — only 30% of practices audit payer payments monthly; 5–7% net revenue lost to underpayment at small/midsize groups; verbatim practice-leader quotes — https://www.mgma.com/mgma-stat/regular-auditing-of-payer-payments-crucial-to-ensure-accurate-reimbursement and https://payerprice.com/blog/underpayment-detection — observed 2026-08-03
  - Signal 2 (feasibility): Transparency in Coverage MRFs publish in-network negotiated rates by NPI + billing code, public and free, Schema 2.0 enforced Feb 2026; 835 ERA retrievable as JSON via modern APIs (Stedi), Availity free to register — https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-B/part-147/section-147.212 and https://www.stedi.com/docs/healthcare/api-reference/get-healthcare-reports-835 — observed 2026-08-03
  - Signal 3 (economic): Funded vendor category (MD Clarity, Waystar, FinThrive, R1/Cloudmed, Aspirion, Revecore) all targeting hospitals and enterprise; no vendor priced for under-10-provider practices — https://www.mdclarity.com/comparison/best-healthcare-underpayment-detection-software — observed 2026-08-03
  Category: Tech-unlock (public rate data became the missing yardstick; extraction cost is the barrier being arbitraged)

## 3. The opportunity

Here's the mechanic that makes this a business rather than a feature.

When a payer pays less than it owes, **nothing breaks**. There's no denial, no rejection, no error queue. The claim comes back with a **CO-45 adjustment** — "charges exceed the contracted fee schedule" — and the practice management system **auto-posts it and writes off the difference**. The claim shows as paid. The A/R clears. The money is gone and no human ever looked at it.

That is fundamentally different from a denial. Denials scream. Underpayments are silent. Every RCM tool a small practice owns is built to chase the things that scream. The industry's own framing: billers *"write off CO-45 adjustments without knowing if the allowed amount is correct, trusting the payer's math on every line."*

The stated reason nobody solves this for small practices: *"the contract is the yardstick; without it, you are measuring nothing."* And small practices famously don't have the contract — physicians *"blindly sign contracts without anyone reading them and don't even keep a copy."*

**The TiC files break that deadlock.** The negotiated rate is now public data keyed to the practice's own NPI. You no longer need the practice to find a contract in a drawer. You need to have already parsed a terabyte of payer JSON — which you do once, centrally, and amortize across every customer.

The incumbents can't easily follow down-market. Their models are enterprise licensing or contingency recovery services with account managers — economics that require a $10M+ revenue customer to make sense. Selling a $299/mo product to a 4-doctor practice requires zero-touch onboarding and self-serve, which is a different company, not a different price page.

Known underpayment patterns the product hunts, all documented: **E/M downcoding** (payers auto-shifting 99214 → 99213, high-volume and high-value, forcing you to appeal), **fee schedule drift** (old rates paid after a contract renewal), **modifier bundling errors** (-25, -59/-XE), **multi-procedure reductions applied deeper than contracted**, and **incorrect coordination of benefits**. One documented example: a payer short-paying CPT 99215 by $23; at 4,000 annual claims that's **$16,800/year from a single code at a single payer.**

## 4. Target market

- **Primary customer:** The practice manager / office manager / billing lead at an independent, physician-owned US specialty or primary care practice with **2–9 providers**, roughly $600K–$5M in annual collections. Specialties with high E/M volume and repetitive code mixes are the sharpest wedge: primary care, dermatology, orthopedics, gastroenterology, ophthalmology, behavioral health groups.
- **Why they buy:** In their words — *"It's ridiculous how often payments are incorrect"* and *"Clinics that do not audit at least weekly are losing money."* They already suspect they're being short-paid. They have no way to prove it, no fee schedule to check against, and a billing team of 1–3 people who are already drowning in eligibility checks and collections. Underpayment auditing sits permanently at the bottom of the priority list because it's the only task where **doing nothing produces no visible consequence.**
- **Rough TAM reasoning:** Nearly two-thirds of US office-based physicians work in practices of fewer than seven physicians; 62.8% of single-specialty physicians are in practices of 10 or fewer. That's on the order of tens of thousands of independent practices in the 2–9 provider band even after accounting for the well-documented consolidation trend (non-physician ownership now 63.9% of practices). Capturing 1,000 of them at $3.6K ACV is a $3.6M business. I do not need this market to grow — I need it to stop being ignored.
- **Why now for them:** Margins are compressed, costs are up, and consolidation pressure is real — practices that stay independent are actively hunting for revenue they already earned. Auditing rates ticked up from 26% (Jan 2023) to 30% (Feb 2025), with respondents attributing the rise to *"increasingly common reimbursement discrepancies."* Demand is drifting toward this. It just has nothing affordable to land on.

## 5. Product sketch (MVP)

- **Connect once, then nothing.** Practice forwards its ERA/835 feed — either via clearinghouse connection (Availity is free to register; modern APIs return 835s as JSON) or by dropping remittance files into a monitored inbox. No PM system rip-and-replace.
- **Rate baseline built for you.** We pre-load the negotiated rate for that practice's NPI, by CPT and modifier, per payer, from public transparency files — so the practice never has to locate a contract.
- **The variance report.** Every posted remit line compared against expected allowed amount. Output is a ranked list: this payer, this code, this many claims, this much money, with confidence level.
- **Pattern flags, not line noise.** Groups findings into the known failure modes — downcoding, fee schedule drift, bundling, multi-procedure reduction errors — because "$23 short on one claim" is ignorable and "$16,800/yr on 99215 from Aetna" gets a meeting.
- **Appeal packet generator.** Drafts the reconsideration letter per payer, with claim IDs, the contracted rate cited, and the variance math attached. Practice reviews and sends.
- **Appeal clock.** Appeal deadlines run from the **remittance date, not the service date**, and are short — UnitedHealthcare 65 days to appeal, Cigna 90, Humana 90, Aetna 120. The product surfaces what's about to age out while it's still recoverable.
- **Recovery ledger.** Tracks what was filed, what came back, what was actually paid — so the customer can see the product paying for itself.
- **Monthly one-pager.** A single email the practice manager can put in front of the owner-physician: found, filed, recovered.

## 6. AI angle — what's load-bearing

Remove the AI and this product mostly doesn't work — but it's worth being precise about where it's actually doing work, because two of the four jobs are ordinary engineering.

**Not AI:** The core variance comparison is arithmetic. Expected rate minus paid amount. Anyone claiming AI does that is decorating.

**Genuinely AI, and load-bearing:**

1. **Rate reconciliation across messy public data.** TiC files are enormous, inconsistently structured across payers, and full of plan variants, provider-group arrangements, and rates expressed as percentages or algorithms. Mapping "which of these 40 rate entries actually applies to this practice's contract for this code" is a fuzzy matching and disambiguation problem at scale. This is the hard part and the moat.
2. **Distinguishing a real underpayment from a legitimate adjustment.** Most variance is *correct* — bundling rules, sequestration, COB, multiple-procedure reductions, patient responsibility. Flooding a practice manager with false positives kills the product in week two. Worse, over-appealing is actively harmful: it burns staff hours and payer relationships on claims that can't win. Classifying variance into *appealable / explainable / uncertain* is the judgment call that makes the tool trustworthy.
3. **Appeal drafting.** Turning a variance finding plus payer-specific policy language into a letter a biller will actually send, without a human writing each one. Straightforward LLM work, high time-savings.

The honest framing: AI makes the messy-data and false-positive problems tractable at a price point of $299/month. Without it you'd need an analyst per customer, which is exactly the enterprise service model that already exists and already fails this segment.

## 7. Localization angle

`N/A — this is a US-only play.` The entire opportunity is manufactured by two US regulatory artifacts: the Transparency in Coverage rule that publishes negotiated rates, and the CO-45/835 remittance standard that makes the leak silent and machine-readable. No other market has this combination. Attempting a global version would mean rebuilding from zero against payment systems that don't publish rates. Depth in one market beats breadth here.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/month for 2–4 providers, $499/month for 5–9. Flat SaaS, not contingency.
- **Why flat and not contingency:** Contingency (20–30% of recovered) is how the enterprise vendors price, and it looks founder-friendly — no recovery, no charge. I'm rejecting it for three reasons. It requires proving attribution for every recovered dollar, which is an accounting argument with every customer every month. It caps you at a percentage of a shrinking pool as the practice's payers clean up. And it makes revenue lumpy and unforecastable for a bootstrapper. Flat pricing also sits naturally next to what they already pay: medical billing software runs **$50–$600+ per provider per month** (Tebra $99–$399/provider/mo). At $299 flat for a 4-provider practice, we're roughly $75/provider — a rounding error against a documented 5–7% revenue leak.
- **ACV:** ~$3,600–$6,000. Call it $3,900 blended.
- **Math to $1M ARR:** 260 practices × $3,900 = $1.01M.
- **Math to $5M ARR:** ~1,100 practices at a slightly richer blend (~$4,500 ACV with the 5–9 provider tier weighted heavier). Needs one repeatable channel producing ~40 net new customers/month by year three, plus sub-2%/mo churn. Achievable, not trivial.
- **Expansion path:** Provider-count tier upgrades as practices add doctors. Then adjacent modules on the same ingested data — denial-pattern analytics, payer scorecards for contract renegotiation (the practice finally has evidence to argue rates), and fee schedule benchmarking against local TiC data ("you're 12% below market on 99213 with this payer"). That last one is a genuinely valuable second product and it's free to build once the first exists.
- **Cost structure:** The TiC extraction pipeline is the dominant fixed cost — real cloud spend to parse terabytes monthly. It's near-flat regardless of customer count, which means gross margin is ugly at 20 customers and excellent at 500. Budget for that trough.

## 9. Go-to-market wedge — first 100 customers

The offer that makes this easy: **a free variance audit on 90 days of historical remittance data.** Findings are specific and denominated in dollars, and they're either there or they aren't. This is the whole GTM.

1. **The retro-audit cold open.** NPI registry data is public and enumerable — filter to independent practices in the 2–9 provider band in target specialties. Approach: "Send us 90 days of remittances. We'll tell you free what you were short-paid. If it's under $2,000, we'll say so and leave." Build a target list of ~2,000 practices, run personalized outreach to the practice manager by name. This converts unusually well because the ask is small, the deliverable is concrete, and the answer is a number, not a pitch. Expect a low single-digit reply rate on cold email, but a high close rate on completed audits — anyone who finds $8K sitting on the table buys a $299 tool.
2. **Medical billing consultants and small RCM firms as channel.** There is a long tail of 1–10 person billing companies each servicing 10–40 small practices. They are the exact people who feel this pain and can't afford enterprise tooling. Sell them a multi-practice seat, let them run audits across their whole book, and they become the distribution. One good billing-company partner is 20+ practices. This is the highest-leverage channel and I'd work it in parallel from week one, not later.
3. **Specialty-specific practice manager communities.** MGMA local/state chapters, specialty practice management groups, and the AAPC billing-and-coding community. These are dense with the exact buyer and they actively trade vendor recommendations. The credible entry is data, not ads: publish a real finding — "we analyzed X practices' remittances; here are the three codes most commonly downcoded by each major payer." That's a post people forward.
4. **Warm intro loop from the audit itself.** Every free audit produces a shareable artifact the practice manager shows their peers, because "here's what my insurer was doing to me" is inherently social among practice managers.

If the free retro-audit doesn't convert at a decent clip, the idea is wrong and I'd know within 6 weeks. That's the point of leading with it.

## 10. Build complexity — justification

**Medium**, and I want to be honest that it's the upper end of Medium rather than the lower.

Off-the-shelf: 835/ERA ingestion and parsing (mature standard, existing libraries, JSON via modern APIs), clearinghouse connection, appeal-letter generation, the web app, the variance arithmetic.

The custom work is the **TiC extraction pipeline** — streaming-parsing 200GB–1TB payer files monthly, normalizing across payers and schema variants, resolving which rate applies to a given NPI and code. That's a real data engineering project, not a weekend. It's the reason this hasn't been done for small practices, and it's the reason it's defensible once built.

Realistic estimate: **4–5 months to v1 for two people** — one strong data engineer on the rate pipeline, one full-stack on ingestion and the app. A shortcut exists for validation: **run the first 10–20 audits semi-manually** against a narrow slice (2–3 major payers, one specialty, top 30 CPT codes) before building the general pipeline. That gets to first revenue months earlier and proves the findings are real before the expensive part gets built. I'd insist on that sequencing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Practice's own remittance data, processed under BAA. TiC files are explicitly public. HIPAA compliance required — standard, well-trodden, not a barrier. |
| Ethical — no harm / dark patterns | ✅ | Helps practices collect money they contractually earned. The one ethical line: don't encourage mass-appealing legitimate adjustments. Classification design handles this deliberately. |
| Market exists (evidence above) | ✅ | MGMA-measured 5–7% leak, funded vendor category, documented buyer complaints. |
| 1–5 person team can build this | ✅ | Two people, 4–5 months, with a manual-first validation path. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are cloud spend for MRF processing and HIPAA-compliant infra. Well under $50K to first revenue, especially with the manual-first wedge. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | 5–7% of net revenue, felt every remittance cycle, money already earned. Not 19–20 only because it's silent — no forcing event, no deadline, no regulator. Practices have tolerated it for years, which is precisely the risk: painful but chronically deprioritized. |
| Demand evidence | 15 | 13/15 | MGMA poll with n and date, verbatim practice-leader quotes, a whole funded vendor category charging real money upmarket, documented dollar examples. A skeptic nods. Docked for zero direct evidence that *under-10-provider* practices specifically will buy — the incumbents' absence is suggestive but unproven. |
| Build feasibility | 15 | 10/15 | Ingestion and app are standard. The TiC pipeline is genuinely hard — terabyte streaming, cross-payer normalization, NPI-to-rate resolution. 4–5 months for a pair. Manual-first path de-risks it substantially. |
| Distribution clarity | 15 | 12/15 | Free retro-audit is a strong, falsifiable opener; NPI registry gives an enumerable list; billing-company channel is high-leverage and real. Docked because cold-emailing practice managers is a well-worn, noisy channel and conversion is unproven. |
| Revenue mechanics | 15 | 12/15 | $299–499/mo benchmarks cleanly against $50–600/provider/mo billing software. 260 customers to $1M is very reachable. Docked for the fixed-cost trough — margins are poor until a few hundred customers, and small-practice churn is real. |
| Time to first revenue | 10 | 7/10 | With the manual-first audit wedge, paying customers in ~8–10 weeks. Full product later. Not higher because HIPAA/BAA paperwork and data-connection friction slow the front end of every deal. |
| Defensibility | 10 | 5/10 | The rate pipeline is a genuine 6–12 month head start and gets better with accumulated payer-behavior data. But it's engineering, not a licence — a funded competitor can rebuild it, and an incumbent could theoretically launch a down-market SKU. Execution moat, honestly scored. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can build a terabyte-scale data pipeline *and* someone who genuinely understands revenue cycle — what CO-45 means, why a bundling adjustment is legitimate and a fee-schedule drift isn't. Without the domain half you ship a false-positive generator that practices abandon in a month. A technical founder with an RCM-veteran co-founder or advisor is the right shape. A pure engineer alone will get the classification wrong.

### Key assumptions to validate (3–5)

1. **Assumption:** TiC published rates actually match the practice's real contracted rates closely enough to compute reliable variance. **How to test:** Get 5 practices to share both their actual contract/fee schedule and their NPI. Compare TiC-derived rates against the real contract for the top 30 codes. If TiC rates diverge materially, the entire yardstick premise collapses — **test this in week one, before anything else.**
2. **Assumption:** Real, recoverable underpayments exist at material volume in a 2–9 provider practice (not just at $10M+ groups where 5% is big money). **How to test:** Run 10 manual retro-audits on 90 days of remittances. Measure dollars found per practice. Need to see meaningfully more than $3,600/yr — the cost of the product — or the ROI story dies.
3. **Assumption:** Practice managers will hand over remittance data to an unknown vendor. **How to test:** In the same 10 audits, track how many agree versus stall on HIPAA/BAA/IT friction. This is the quiet deal-killer in healthcare sales.
4. **Assumption:** Appeals filed on these findings actually get paid. **How to test:** File 20–30 appeals from the pilot audits across 3+ payers and measure recovery rate. Finding money that can't be collected is a demo, not a product.
5. **Assumption:** Small billing companies will resell rather than build. **How to test:** 15 conversations with 1–10 person RCM firms.

### Risk flags

1. **Data-access risk (highest):** If TiC rates don't reconcile to actual contracted rates — because of plan-level variation, percentage-of-Medicare arrangements, or payer sandbagging of published data — the core premise fails. CMS's own 2026 changes acknowledge the percentage/algorithm problem exists. This is the single assumption that kills everything and it's testable in days.
2. **Platform dependency:** Entirely reliant on continued TiC publication and enforcement. A rollback or weakening of the rule removes the yardstick. Low probability near-term (Schema 2.0 enforcement tightened in 2026), high impact.
3. **False positives destroy trust:** Most payment variance is legitimate. A tool that cries wolf gets churned fast, and over-appealing wastes the customer's scarcest resource — biller hours. The classification layer isn't a nice-to-have, it's the product.
4. **Segment consolidation:** Independent small practices are a shrinking population — non-physician ownership is now 63.9% of US practices. The TAM erodes over time. Argues for moving fast and for the billing-company channel, which survives consolidation better.
5. **Incumbent down-market move:** MD Clarity claims to serve "providers of every size." If they ship a real self-serve small-practice SKU, the window narrows considerably.
6. **Unit-economics trough:** Fixed MRF processing cost is brutal at low customer counts. Under-capitalized founders can stall in the valley between 20 and 200 customers.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (data engineering strength) paired with an
                        RCM/medical-billing domain expert. Domain half is non-negotiable.
Time to revenue:        8–10 weeks via manual retro-audits; 4–5 months to full product
Capital to launch:      $15–30K (cloud spend for MRF processing + HIPAA-compliant infra)
Top 3 assumptions to validate first:
  1. TiC published rates reconcile to real contracted rates — compare against 5 practices'
     actual fee schedules on top 30 codes. Week one. Kills the idea if false.
  2. Material recoverable dollars exist at 2–9 provider scale — 10 manual retro-audits,
     measure dollars found per practice against the $3,600 annual price.
  3. Appeals actually get paid — file 20–30 from pilot findings across 3+ payers,
     measure realized recovery.
Kill criteria:
  - Abandon if TiC-derived rates diverge from actual contracted rates by >5% on top codes
    across the 5 test practices — the yardstick doesn't work and there's no substitute.
  - Abandon if median findings across 10 retro-audits are under $5,000/year per practice —
    the ROI doesn't clear the price plus the hassle of switching behaviour.
  - Abandon if realized appeal recovery is under 40% of filed variance — finding money you
    can't collect is not a product.
  - Abandon if fewer than 3 of 10 target practices will complete a free audit — the
    data-access friction is fatal and no amount of product fixes it.
```

## 15. Next step — 1-week validation sprint

The whole week is aimed at the one question that kills this fastest: **does the public rate data actually match the private contract?**

- **Day 1–2: Break the premise.** Download TiC in-network files for 2–3 major payers. Extract negotiated rates for a handful of specific NPIs across the top 30 E/M and procedure codes. In parallel, get 5 practice managers (via billing-consultant contacts or an MGMA chapter) to share their actual fee schedule for those same codes under NDA. Compare. **If published rates don't reconcile to real contracts, stop here — the idea is dead and you've spent two days.**
- **Day 3–4: Prove the money is real.** From those same 5 practices, take 90 days of remittance data. Manually compute variance on the top codes. Classify each finding as appealable / explainable / uncertain. Produce a dollar figure per practice.
- **Day 5: Force the decision.** Put the findings in front of all 5 practice managers with one question: *"We found $X. Would you pay $299/month for this to run automatically every month?"* Ask for a signed LOI or a deposit, not a compliment.

**Falsifiable outcome:** Go only if (a) TiC rates reconcile within 5% on top codes, (b) median findings exceed $5,000/year per practice, and (c) at least 3 of 5 practices commit in writing. Anything less is a no — and specifically, failing (a) means abandoning entirely rather than iterating, because there's no alternative yardstick for a customer who doesn't have their own contract.
