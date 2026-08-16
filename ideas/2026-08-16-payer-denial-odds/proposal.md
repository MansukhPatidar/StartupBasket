---
title: "OddsEngine — prior-auth odds engine for specialty practices"
slug: payer-denial-odds
date: 2026-08-16
category: HealthTech / US independent practices
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Tells a practice which payer will deny this prior auth, and which denials are worth fighting."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Solo-builder, Data-product]
axes:
  problem: 17
  demand: 14
  build: 11
  distribution: 11
  revenue: 12
  time: 6
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# OddsEngine

## 1. One-liner

Tells a practice which payer will deny this prior auth, and which denials are worth fighting.

## 2. Trend signal — why now?

Three things happened in the last eight months, and they line up.

**One: the denial wall got worse, fast.** Prior authorization denials rose an estimated 31% year over year in 2026, and PA denials now make up 34% of all first-pass claim denials, up from 22% in 2023. The AMA's December 2025 survey of 1,000 physicians is brutal reading: 40 prior auths per physician per week, 13 hours of physician and staff time weekly, 40% of practices employ someone whose *only* job is prior auth, 32% say requests are often or always denied, and 74% say denials have increased over five years.

**Two — and this is the part nobody has built on — the data went public.** CMS-0057-F took effect January 1, 2026. Impacted payers (Medicare Advantage, Medicaid FFS and managed care, CHIP, and QHP issuers on the federal exchanges) had to post aggregated prior authorization metrics on public-facing websites by **March 31, 2026**, covering calendar year 2025: approval rates, denial rates, appeal outcomes, extended reviews, and average decision times. Separately, from January 1, 2026, payers must give a **specific reason** for every denial rather than a generic rejection code.

KFF ran the first analysis of that data in August 2026, and the spread is enormous. Medicare Advantage denials average 12% but range from 5% (Elevance) to 17% (UnitedHealth). Medicaid managed care averages 14%, ranging 2% (L.A. Care) to 23% (Independence Health Group). ACA marketplace averages 18%, ranging 3% (Guidewell) to 25% (Centene). And the appeal numbers are the real story: **two-thirds of MA appeals succeed, half of Medicaid denials get overturned, and 43% of ACA denials are eventually approved.**

**Three: nobody can actually use it.** Healthcare Dive's coverage of the KFF analysis names the gap outright — insurers "used inconsistent formats for reporting the metrics, making it difficult to compare them," they report only percentages and not request volumes, and they are "not required to break down the data by service type." The data is public, legally mandated, annually refreshed, and sitting in 200-odd inconsistent HTML pages and PDFs that no practice manager will ever normalize.

Meanwhile 65% of denied claims are never appealed at all, and each denial costs $25–181 to rework. Practices are writing off money that has a 58–78% chance of coming back, because nobody can tell them which fights are winnable.

Provenance:
  - Signal 1 (demand): AMA 2025 Prior Authorization Physician Survey — 40 PAs/physician/week, 13 hrs/week staff time, 40% employ dedicated PA staff, 32% often/always denied, 94% cite burnout — https://www.ama-assn.org/press-center/ama-press-releases/ama-survey-prior-authorization-reform-pledge-falls-short-physicians — 2026-05-13
  - Signal 2 (feasibility/regulatory): CMS-0057-F effective 2026-01-01; payers must publish approval/denial/appeal-outcome metrics by 2026-03-31 and give specific denial reasons — https://careevolution.com/post/understanding-cms-0057-f/ — 2026-01
  - Signal 3 (economic): KFF first-of-its-kind analysis — denial rates range 2%–25% by insurer; two-thirds of MA appeals overturned; data formats inconsistent and non-comparable — https://www.healthcaredive.com/news/prior-authorization-denials-vary-widely-among-insurers/827891/ — 2026-08-14
  Category: Regulatory arbitrage (data-disclosure unlock) + Tech-unlock

## 3. The opportunity

Every existing tool in this space works on **one claim at a time, after the fact**. CoverMyMeds submits the PA (free, pharmacy-centric). Cohere and Infinx automate submission for enterprises. Rivet builds appeal worklists for independent practices. Adonis drafts appeals with AI agents. All of them are reactive: something got denied, now go fight it.

Not one of them exploits the thing that changed in March 2026 — a **legally mandated, annually refreshed, cross-payer outcome dataset**. That dataset answers a question no practice can currently answer: *given this payer, this plan line, and this service, what actually happens?*

The gap is a pricing-and-priority gap, not a workflow gap. Practices don't primarily lack a place to type an appeal letter. They lack a reason to believe the appeal is worth the 45 minutes. When 65% of denials are never appealed and the overturn rate is 58–78%, the binding constraint is **triage confidence**, not drafting capacity.

The second gap is timing. Rivet et al. engage *after* denial. The published data lets you act *before* submission — flag that this specific payer denies this service category at 3× the market rate, so the packet needs the extra clinical documentation up front, or the patient should be scheduled under their secondary coverage instead.

So the wedge is: normalize the messy public data into a payer-by-payer odds layer, then use it to (a) pre-flag high-risk submissions and (b) rank denials by expected recovery value. The incumbents own the *doing*. Nobody owns the *deciding*.

## 4. Target market

- **Primary customer:** Practice manager or revenue-cycle lead at an independent specialty practice, 3–15 providers, US, in a PA-heavy specialty — gastroenterology, orthopedics, rheumatology, oncology, cardiology, advanced imaging, behavioral health. $2M–$15M annual collections.
- **Why they buy:** In their words. Dr. Jessica Korman, gastroenterologist in Bethesda: *"When I prescribe a medication, I would say 95% of the time, I have to obtain a prior authorization."* And: *"We have four full-time employees who their sole focus is on obtaining prior authorization for medications to treat Crohn's disease and ulcerative colitis."* Dr. Jack Resneck, dermatologist and former AMA president: *"We're spending something like 15 hours a week per physician just filling out these forms and waiting on hold for the insurance companies."* Dr. Alexa Kimball, on the appeal side: *"the peer-to-peer review process often feels like a black box"* and *"Insurance companies know it will often be impossible for a doctor to take a call or return it in real time."*
- **Rough TAM reasoning:** ~120,900 independent physicians remain in the US as of January 2026 (down 152,200 over eight years — consolidation is real and is a genuine headwind). At an average of 6 physicians per independent specialty group, that's roughly 20,000 groups; filtering to PA-heavy specialties in the 3–15 provider band, call it 6,000–9,000 realistically addressable practices. At $600/mo that's a $43M–$65M ceiling. Plenty of room for a $3–5M ARR business; correctly *not* a venture-scale market.
- **Why now for them:** Denials up 31% YoY. A 6-provider specialty group carries $55K–$190K of annual revenue at risk from PA denials alone; orthopedics groups run $48K–$112K, oncology $85K–$210K. The money at stake now clears the cost of software by an order of magnitude, which was not true three years ago.

## 5. Product sketch (MVP)

- **Payer odds lookup.** Type payer + plan line + service category, get the published denial rate, average decision time, and appeal-overturn rate, benchmarked against the market average for that service. Sourced and dated, with a link to the payer's own posted page.
- **Pre-submission risk flag.** Connects to the practice's scheduling or billing export. Before a PA goes out, flags the ones facing a payer whose denial rate for that category runs well above market, with the specific documentation those denials most often cite as missing.
- **Denial triage queue.** Ranks open denials by expected recovery value — claim amount × that payer's published overturn rate × time remaining in the appeal window — so staff work the winnable ones first instead of chronologically.
- **Specific-reason parser.** CMS now forces payers to state a specific denial reason. Reads it, matches it against the appeal arguments that historically overturn that reason for that payer, and drafts the rebuttal.
- **Appeal-window clock.** Tracks each denial's deadline by payer and plan line, escalating as the window closes.
- **Payer scorecard report.** Monthly one-pager the practice can take into contract renegotiation, or use to decide which plans to stay in-network with.
- **Peer-to-peer prep sheet.** Given only 16% of physicians say the payer's "peer" has appropriate qualifications, a one-page brief with the clinical criteria and the payer's own published turnaround commitments before the doctor picks up the phone.

## 6. AI angle — what's load-bearing

Two places, both real.

**Normalizing the mess.** The CMS rule mandates *what* to publish, not *how*. The result is a few hundred payers posting metrics in inconsistent HTML tables, PDFs, and footnoted spreadsheets with different service taxonomies and different denominators. Turning that into a comparable schema — and re-doing it every March as new filings land — is document-extraction work at exactly the scale where LLMs beat both hand-coded scrapers and human analysts. Without AI this is a permanent data-entry salary.

**Reading the denial reason.** The specific-reason mandate is new as of January 2026, so denial letters now carry genuine clinical signal in free text. Mapping that text to the argument that overturns it — for that payer, that service — is a language task. Rules engines were useless here before, because the old generic rejection codes contained nothing to reason about.

Strip the AI out and you have a static spreadsheet that's stale by April and can't read a denial letter. The product doesn't exist.

## 7. Localization angle

N/A — this is a US-only play by construction. The entire asset is a dataset created by a specific US federal rule (CMS-0057-F) covering US payer types. There is no localization wedge because there is no equivalent mandated disclosure elsewhere. The concept is portable in principle — the StartupBasket catalog already has Brazil glosa and UAE denial-recovery plays — but the data moat isn't.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $400/mo for 3–5 providers, $800/mo for 6–10, $1,400/mo for 11–15. Deliberately under the $500–$2,500/mo entry band that cloud PA tools already charge, because I'm selling decision support, not replacing their submission tool.
- **ACV:** ~$7,800 realistic blended average.
- **Math to $1M ARR:** 128 practices at $650/mo average. That is a reachable number for a two-person team working named specialty lists.
- **Math to $5M ARR:** ~640 practices, which is roughly 8% of the realistically addressable 6,000–9,000. Requires either a billing-company channel or expansion revenue, probably both. Achievable but not casual.
- **Expansion path:** Per-provider growth as practices add doctors; a payer-scorecard tier for contract negotiation; and the natural upsell — billing companies and small MSOs that manage 20–80 practices and want the odds layer across their whole book. That last one is where the ACV multiplies.

## 9. Go-to-market wedge — first 100 customers

- **Publish the scorecard nobody else has.** KFF did the analysis once, at market level, in August 2026. Normalize the same public filings down to payer × service category × state and publish it free. This is the single best lead magnet available in US healthcare RCM right now, and it's built from the same data pipeline the product runs on — zero marginal cost. Practice managers searching "does UnitedHealthcare deny MRI prior auth" have nowhere good to land today.
- **Work the specialty societies' state chapters.** GI, orthopedic, and rheumatology state societies run practice-management listservs and annual meetings with 100–400 practice administrators each. Sponsor three, present the state-specific denial data for their payers. This audience is small, concentrated, and gathers on purpose.
- **MGMA and state MGMA chapters.** Practice administrators are the exact buyer and they organize themselves into these groups. A 20-minute talk titled "Your worst payer, by their own published numbers" sells itself.
- **Cold outreach with the practice's own data.** Pull a target practice's likely payer mix from their public in-network listings, generate a one-page "here's what your three biggest payers published about themselves" PDF, email the practice manager. This is personalized without being manual — the data pipeline generates it. Expect 3–5% reply on a well-built list of 2,000.
- **Billing companies as a channel.** Independent billing companies serving 20–80 small practices are a single sale that lands many logos. Slower to close, so it's a month-4 motion, not a launch motion.

## 10. Build complexity — justification

**Medium.** The normalization pipeline is the real work: several hundred payer sites, inconsistent formats, annual refresh, and it must be auditable because the whole pitch is "these are their own published numbers." Everything else is off-the-shelf — document extraction, a ranking calculation, a queue UI, and standard billing-system exports. No custom models. A technical pair ships a credible v1 in 12–16 weeks, with the first 6 weeks spent almost entirely on data normalization and verification. HIPAA handling adds real overhead: BAAs, encryption, access logging. Notably, the MVP can launch with the public dataset alone and *no* PHI at all, which is the right sequencing.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Built on data payers are legally required to publish publicly. PHI handling needs standard HIPAA/BAA discipline, and the v1 lookup tier touches no PHI. |
| Ethical — no harm / dark patterns | ✅ | Helps practices recover legitimately owed reimbursement and reduces care delays. No patient-facing manipulation. |
| Market exists (evidence above) | ✅ | AMA survey, KFF analysis, funded incumbents charging $500–$2,500/mo. |
| 1–5 person team can build this | ✅ | Technical pair, 12–16 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Data pipeline, cloud, compliance setup. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | 13 hrs/week/practice, 40% employ dedicated PA staff, $55K–$190K at risk for a 6-provider group, 94% cite burnout. Felt daily, costs real money. Not a 19 only because it's a known chronic pain they've built staffing workarounds for. |
| Demand evidence | 15 | 14/15 | Multiple independent hard signals: AMA n=1,000 survey, KFF analysis of 14 largest insurers per market, funded incumbents with public pricing. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Standard stack, but the normalization pipeline is genuinely fiddly and HIPAA adds overhead. 12–16 weeks, not 6. |
| Distribution clarity | 15 | 11/15 | Named channels (state specialty societies, MGMA chapters, billing companies) and a strong free data lead magnet. Docked because healthcare sales cycles are slow even at SMB scale and the buyer is busy. |
| Revenue mechanics | 15 | 12/15 | Pricing sits below a benchmarked incumbent band; 128 practices to $1M is credible. Docked because $5M needs a channel that isn't proven yet. |
| Time to first revenue | 10 | 6/10 | Realistically 3–4 months to first paying customer: 12–16 week build plus a pilot period. Healthcare buyers don't swipe a card on day one. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. The underlying data is public by law — anyone can scrape it. The moat is a normalized historical time series that compounds each March, plus workflow lock-in once denial triage runs through you. Month 3 it's copyable; month 12 you have two filing years and outcome feedback they don't. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build a resilient extraction pipeline and someone who can speak RCM fluently to practice managers. A technical founder with a revenue-cycle co-founder or advisor is the shape. A pure technical solo founder will build the right pipeline and fail to sell it.

### Key assumptions to validate (3–5)

1. **Assumption:** Published payer metrics are granular and consistent enough to produce a *useful* per-service-category signal, not just a market-level average. **How to test:** Manually normalize filings from 25 payers across three states this week. If service-level breakdown is absent in most — which KFF explicitly warns is not required — the pre-submission flagging feature degrades to payer-level only, and the product gets meaningfully weaker. **This is the assumption most likely to be fatal, so test it first and test it honestly.**
2. **Assumption:** Practice managers will pay for triage confidence rather than more automation. **How to test:** 30 interviews with practice managers in GI/ortho/rheum. Show two mockups — "drafts your appeals faster" vs "tells you which appeals to skip." Buy signal on the second is the thesis.
3. **Assumption:** Published aggregate overturn rates actually predict *this practice's* outcomes well enough to rank by expected value. **How to test:** Take one pilot practice's last 200 denials, score them retroactively with the model, and check whether the ranking correlates with what actually got overturned.
4. **Assumption:** $400–$1,400/mo clears the bar for a 3–15 provider practice. **How to test:** Price the pilot from day one. Free pilots prove nothing here.

### Risk flags

1. **Regulatory dependency (the big one):** The entire data asset exists because of CMS-0057-F. A rollback, a weakening of the reporting requirement, or an enforcement lapse guts the moat. Rules made this and rules can unmake it. Conversely the January 2027 API compliance date could *strengthen* it considerably.
2. **Incumbent absorption:** Rivet already serves independent practices with appeal worklists and payer performance analytics. This feature is a natural roadmap item for them, and they have the customers already. Speed matters; so does being conspicuously better at the data layer specifically.
3. **Market consolidation headwind:** Independent physicians fell from 273,100 to 120,900 in eight years, and corporate/hospital entities now own 63.9% of practices. The customer base is structurally shrinking. Acquired practices move to enterprise RCM stacks and churn out. This caps the long-run ceiling and is the reason I won't call this a STRONG GO.
4. **Data quality ceiling:** If payers report percentages without volumes and without service breakdowns — which is what the rule currently permits — the signal may be too coarse for pre-submission flagging, leaving only the (still valuable, less differentiated) triage product.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + revenue-cycle domain co-founder or advisor
Time to revenue:        3–4 months
Capital to launch:      $15–25K (₹13–21L) — mostly compliance setup and data verification time
Top 3 assumptions to validate first:
  1. Published payer filings carry service-category granularity — manually normalize 25 payers across 3 states before writing any product code
  2. Practice managers buy triage confidence over drafting speed — 30 interviews, two mockups, measure buy signal on the "which appeals to skip" version
  3. Aggregate overturn rates predict practice-level outcomes — backtest one pilot practice's last 200 denials against the ranking model
Kill criteria:
  - Abandon if fewer than 40% of sampled payer filings include any service-category breakdown (product collapses to a generic appeal tool in a market that already has Rivet and Adonis)
  - Abandon if <5 of 30 interviewed practice managers rank triage above automation
  - Abandon if Rivet or a comparable incumbent ships a published-payer-data scorecard before your v1 lands
  - Abandon if backtested ranking fails to beat "sort by claim value" on the pilot's historical denials
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Hand-normalize the 2026 filings from 25 payers across three states — a mix of MA, Medicaid MCO, and QHP. Record, per filing, whether service-category breakdown exists, whether request volumes are disclosed, and how much manual judgment normalization required. This directly tests the fatal assumption.
- **Day 3–4:** Build the resulting scorecard for one metro's payer mix and take it to 30 practice managers in GI, orthopedics, and rheumatology — via state specialty society listservs and MGMA chapter contacts. Don't demo software. Show the data and ask what they'd do differently with it, then ask what they'd pay.
- **Day 5:** Go / no-go on two falsifiable thresholds: **(a)** ≥40% of sampled filings carry service-category granularity, and **(b)** ≥10 of 30 practice managers name a specific decision they would change based on the scorecard, with ≥5 stating a price at or above $400/mo unprompted.

Miss either threshold and this is a VALIDATE that didn't validate — the data is too coarse or the pain isn't priced, and the honest move is to walk rather than build a me-too appeal drafter into a market that already has three.
