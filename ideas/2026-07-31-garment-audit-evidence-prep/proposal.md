---
title: "FindingSweep — audit record sweeper for garment factories"
slug: garment-audit-evidence-prep
date: 2026-07-31
category: Compliance / SEA-Manufacturing
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Reads your payroll and attendance records before the auditor does, and flags every finding they will write up."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [AI-agent, Multilingual, SMB, Compliance-driven, Manufacturing]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FindingSweep — audit record sweeper for garment factories

## 1. One-liner

Reads your payroll and attendance records before the auditor does, and flags every finding they will write up.

## 2. Trend signal — why now?

Three things converged in the last 18 months.

**Audit volume is climbing and the industry has admitted it's a problem.** SLCP has now run assessments at 14,000 facilities across 60+ countries, with 10,200 assessments in 2024 alone and a 27% year-over-year growth rate reported for 2023. The ITC published an entire report — *Navigating the Regulatory Landscape: Audit fatigue in the garment and textile industry* — on this exact pain. amfori separately published "Tackling audit fatigue: A strategic imperative for sustainable supply chains." When the standard-setters themselves publish papers about how their own instrument is crushing suppliers, the pain is not speculative.

**The convergence fix only worked for a third of them.** This is the signal everyone misses. ITC's survey of 439 facilities found **33% saw a decrease in the number of social audits** since adopting SLCP. Which means roughly two-thirds got no relief at all. The shared-assessment model reduced *duplicate* audits for some, but it did nothing about the underlying work: assembling and reconciling the records that any audit — shared or not — demands.

**The cost of failure is measured in dollars and hours, and it's documented.** Zaki Saleemi, owner of Crescent Bahuman, put a number on it publicly: *"In my organization 21 percent of working time is spent on audits, that's about 20-26 audits costing 75 to 100,000 dollars per year."* Meanwhile SLCP assessments average **10.1 legal non-compliances per facility**, with working hours and wages & benefits as the top two categories — precisely the two categories that are pure record-reconciliation problems.

And the enabling shift: multimodal OCR got cheap enough to read a stack of Vietnamese attendance registers for pennies. Gemini 2.5 Flash-Lite runs at $0.10 per million input tokens / $0.40 output, with batch processing cutting that another 50%. Two years ago, reading 300 handwritten timecards and cross-checking them against a payroll ledger cost more in inference than the audit itself.

```
Provenance:
  - Signal 1 (Demand): Crescent Bahuman owner Zaki Saleemi — "21 percent of working time is spent on audits, that's about 20-26 audits costing 75 to 100,000 dollars per year"; industry frustration over duplicate audits — https://fashionunited.uk/news/fashion/frustration-grows-around-supply-chain-audits-and-certifications/2023011767294 — observed 2026-07-31
  - Signal 2 (Feasibility): Gemini 2.5 Flash-Lite at $0.10/$0.40 per 1M tokens, batch API cuts cost 50%, native vision for document extraction — https://benchlm.ai/google/api-pricing — observed 2026-07-31
  - Signal 3 (Economic): SLCP at 14,000 facilities in 60+ countries, 10,200 assessments in 2024, $26M audit savings in 2023; only 33% of 439 surveyed facilities saw audit count decrease — https://intracen.org/news-and-events/news/tackling-audit-fatigue-a-pathway-to-transform-textile-supply-chains and https://slconvergence.org/updates/slcp-continues-to-scale-and-diversify-with-converged-assessments-supporting-facilities-of-all-sizes-deeper-in-the-supply-chain-and-in-new-sectors — observed 2026-07-31
  - Signal 4 (Economic): Social compliance audits priced $240–498/man-day in Vietnam/Asia — https://www.v-trust.com/en/our-services/supplier-evaluation/social-compliance-audit-service-in-china-india-vietnam and https://www.the-inspection-company.com/blogs/factory-audit-vietnam-cost-2026-price-guide-for-importers — observed 2026-07-31
  Category: Underserved niche
```

## 3. The opportunity

Every dollar in the social-compliance software market is aimed at the wrong side of the table.

Sedex, amfori, SLCP, QIMA, Bureau Veritas, ELEVATE — they all sell to **brands and auditors**. Their product is visibility *into* the supply chain. Net-Inspect, ComplianceQuest, Benchmark Gensuite sell CAPA tracking to large manufacturers as part of a six-figure QMS deployment. GoAudits at $10/user/month is a generic checklist app that knows nothing about SLCP's Converged Assessment Framework.

Nobody sells a tool to the factory whose job it is to survive the audit.

That factory has a compliance officer — often one person, sometimes wearing an HR hat too — who is handed a 60-day corrective action deadline and a stack of paper. The CAF requires the facility to answer **95% of assessment questions with specific numerical and date-based answers and no blank key fields**, then a verifier arrives and cross-checks every number against source documents. The documented failure modes are exactly what you'd expect: *misunderstanding of CAF questions, incomplete or inaccurate self-assessments, insufficient documentation or recordkeeping, and language barriers.*

Here's the specific gap. The two top non-compliance categories — working hours and wages & benefits — are not moral failures. They're **arithmetic failures**. A factory records attendance on paper or a fingerprint terminal, computes piece-rate wages in a spreadsheet, and the two never fully reconcile. The auditor finds the mismatch in four hours of sampling. The factory could have found it themselves in advance — if anyone had built the tool.

That's the 10× move: run the auditor's own reconciliation logic against your records *before* the auditor arrives, in the local language, on the documents you actually have, for a price a 400-worker factory can sign off on without a board meeting.

## 4. Target market

**Primary customer:** The compliance / CSR officer (or HR-compliance dual-hat manager) at a Tier-1 or Tier-2 garment, footwear, or textile factory in Vietnam, Indonesia, Cambodia, Sri Lanka, Bangladesh, or India. 200–2,000 workers. Exporting to EU/US brands. Undergoes 4–20 audits a year across SLCP, SMETA/Sedex, amfori BSCI, WRAP, and buyer-proprietary programs.

**Why they buy, in their words:** Saleemi's "21 percent of working time" is the CEO version. The compliance officer's version is more specific — the recurring finding. As ComplianceQuest documents the pattern: *"Every time a finding returns, the organization absorbs the cost of re-investigation, re-documentation, and re-response, with quality team bandwidth consumed by issues that should have been permanently resolved cycles ago."* And from the audit side, the tell that a factory has lost control: *"During audits, when compliance officers are asked to produce Corrective Action Plans, some factories can't produce them."*

**Rough TAM reasoning:** 14,000 facilities have completed an SLCP assessment, and SLCP is one scheme among several — Sedex membership and amfori BSCI (roughly 40,000 audits annually across its mapped supplier network) overlap but also extend it. Call the addressable universe of export factories under recurring third-party social audit **50,000–80,000 globally**, with 50%+ classified as SMEs. I don't need a big share. 700 factories at $350/mo is $2.9M ARR.

**Why now for them:** Audits aren't going down. EU due-diligence regulation has been delayed and narrowed under the Omnibus package — CSDDD now applies from 2028 to companies above €1.5bn turnover — but brands have already built their supplier-monitoring programs and aren't dismantling them. Meanwhile the number of schemes keeps growing. The factory's audit load is a ratchet.

## 5. Product sketch (MVP)

- **Record ingest.** Upload attendance registers, timecards, payroll ledgers, and wage slips — photos, scans, Excel exports, or fingerprint-terminal CSVs. Handwritten Vietnamese, Bahasa, Khmer, and Bengali supported.
- **The sweep.** Cross-reconciles attendance against payroll worker-by-worker, period-by-period. Flags every row where hours don't match pay, overtime exceeds the local statutory cap, a rest-day is missing, or the effective rate falls below minimum wage.
- **Finding preview.** Each flag is written the way an auditor writes it, mapped to the specific CAF / SMETA / BSCI question it will fail, with severity graded (Zero Tolerance / Major / Minor) and the source document page cited.
- **Self-assessment autofill.** Pulls the numerical answers the CAF demands straight out of your records, so the 95%-completion bar isn't a week of manual data entry.
- **CAP builder.** For each open finding, drafts the corrective action with a root cause, an owner, and a deadline inside the 60-day window — the artifact the auditor asks for and factories frequently can't produce.
- **Evidence pack.** Assembles the document bundle per finding — policy, payroll extract, photo, training record — and tells you which pieces are missing before verification day.
- **Repeat-finding tracker.** Flags any finding that also appeared in your last audit, because that's the one that escalates.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product.

The input is the mess: handwritten registers in four scripts, fingerprint-terminal exports in inconsistent schemas, payroll spreadsheets where every factory names its columns differently, and scanned wage slips at bad angles. Traditional OCR plus a rules engine dies on the first factory whose overtime column is labelled "TC ngoài giờ" and whose piece-rate bonus is written in the margin. That's why this product didn't exist in 2023 — the ingest problem made every deployment a bespoke consulting project.

Vision-language models collapse that. The model reads the document, infers the schema, normalizes it, and hands a clean table to a deterministic reconciliation engine. **The compliance logic itself should stay hard-coded** — statutory overtime caps and minimum wages are law, not vibes, and you don't want a model guessing at them. AI does the reading and the drafting; rules do the judging.

The second load-bearing use is language. The finding must be legible to a Vietnamese compliance officer *and* auditable in English by the verifier. Generating both from one source, in auditor register, is squarely model work.

Unit economics hold: a 500-worker factory's monthly record set is a few hundred pages. At Flash-Lite batch rates that's cents of inference against a $350/month subscription.

## 7. Localization angle

Localization isn't a feature here — it's the product surface.

- **Language:** Vietnamese, Bahasa Indonesia, Khmer, Bengali, Sinhala, Hindi. The compliance officer does not work in English; the verifier's report does. Bridging that gap is the job.
- **Statutory rule packs:** Overtime caps, rest-day rules, minimum wage, and social-insurance contribution rates are per-country and per-province, and they change. Vietnam's Labour Code caps and Indonesia's provincial UMP/UMK schedules are entirely different regimes. Each country pack is real work and each one is a barrier to the next entrant.
- **Piece-rate math:** The ILO documents piece-rate as the dominant pay model across Vietnam, Indonesia, Cambodia, and Bangladesh. Piece-rate-to-minimum-wage conversion is where a huge share of wage findings originate, and no Western payroll tool models it.
- **Pricing:** $250–500/month works in Ho Chi Minh City and Jakarta against a $75–100K annual audit burden. A $2,000/month enterprise GRC seat does not.
- **Distribution:** WhatsApp and Zalo are how factory managers actually communicate. Support and alerting should live there, not in a web-app notification centre.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on worker count — $199/mo under 500 workers, $399/mo for 500–1,500, $799/mo above. Annual prepay at 10 months.
- **ACV:** ~$4,200 blended.
- **To $1M ARR:** 240 factories. Against a universe of 50,000+ audited export facilities, that's under 0.5% penetration.
- **To $5M ARR:** ~1,000 factories plus expansion. Requires three things to be true: country packs live in 5+ markets, at least one multi-site group deal (a group with 12 factories is a single sale worth $50K+/yr), and a second module — health & safety findings, or chemical/ZDHC — attached to the same ingest.
- **Expansion path:** More sites per group, more schemes covered, then the natural adjacency — sell the *aggregated* view to the sourcing agents and small importers who manage 20–50 of these factories and currently have no visibility between audits.

The comparison that makes this an easy yes: a single social audit runs $240–498 per man-day and a typical audit is 2–3 man-days. One avoided re-audit pays for a year of subscription.

## 9. Go-to-market wedge — first 100 customers

- **Mine the verifier body lists.** SLCP publishes approved Verifier Bodies; SGS, Bureau Veritas, TÜV SÜD, Intertek, QIMA, TESTCOO, and V-Trust all publish regional office contacts and many publish client-facing material. Start with the ~30 VB offices operating in Vietnam and Indonesia. Not to sell to them — to identify which factories are in cycle.
- **Go directly at the industrial parks.** VITAS (Vietnam Textile & Apparel Association) and API (Indonesian Textile Association) publish member directories. Scrape 2,000 member factories with export activity, enrich for compliance-officer contact via LinkedIn, and send a Vietnamese-language 90-second Loom showing a real reconciliation catching a real overtime breach. This is a job-title-specific, pain-specific message to a list of people who all just failed something. Expect 3–6% reply, 15% of those to a pilot.
- **Free pre-audit scan as the hook.** Upload one month of records, get the finding list free. It's a demo that produces genuine anxiety — every factory has findings sitting in their records right now, they just don't know which. Convert on the "fix it before they arrive" urgency. This is the single highest-leverage channel and it's self-serve.
- **Compliance consultants as a channel.** There's a fragmented cottage industry of ex-auditor consultants doing pre-audit prep manually across SEA. They're not competitors, they're distribution — the tool makes them 5× faster on the same fee. Recruit 10 with a 20% recurring referral share.
- **The audit-fatigue conversation.** ITC, amfori, STAR Network, and the OECD Garment Forum all convene on this exact topic publicly. Show up in those forums with data from real reconciliations. That's not "content marketing" — it's being the only vendor in the room representing the supplier's side.

## 10. Build complexity — justification

**Medium.** The ingest pipeline is the real work: handling scanned and handwritten records across multiple scripts, normalizing wildly inconsistent payroll schemas, and reconciling attendance to wages at worker-level granularity without falling over on a 2,000-person roster. That's off-the-shelf models but non-trivial data engineering and a lot of ugly real-world document edge cases.

The compliance rules are hand-built per country and that's deliberate — encoding Vietnam's Labour Code overtime caps and Indonesia's provincial minimum-wage schedules is domain work, not engineering difficulty, but it needs a domain advisor to be correct. The CAF/SMETA/BSCI question mappings are published and mappable.

Two people, 14–18 weeks to a v1 that handles one country and one scheme end-to-end. Each additional country pack is 2–3 weeks after that.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Factory analyses its own records to find and fix its own violations. No certification claim is made — the verifier still verifies. |
| Ethical — no harm / dark patterns | ✅ | Worth stating plainly: this must surface real breaches so they get fixed, never help conceal them. The product finds underpaid workers and unpaid overtime. Any feature that helps a factory pass while workers stay underpaid is out of scope — and product-suicidal, since verifiers cross-check against workers directly. |
| Market exists (evidence above) | ✅ | 14,000 SLCP facilities, documented $75–100K/yr audit burden, ITC and amfori both publishing on the pain. |
| 1–5 person team can build this | ✅ | Two engineers plus a part-time compliance advisor. |
| Launchable with <$50K / ₹40L | ✅ | Inference is cents per factory-month. Main cost is the domain advisor and travel to industrial parks. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Quantified at 21% of working time and $75–100K/yr by a named operator. Recurring, deadline-driven, with order cancellation as the downside. Not 18+ because the pain is periodic rather than daily. |
| Demand evidence | 15 | 13/15 | Multiple independent institutional signals — ITC report, amfori position paper, SLCP survey data (n=439, only 33% saw relief), named public quotes. Docked for zero evidence anyone has yet paid for *this specific* product. |
| Build feasibility | 15 | 11/15 | Models handle ingest, but multi-script handwritten reconciliation at roster scale is genuine engineering. 14–18 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Named directories (VITAS, API), named job title, and a self-serve free-scan hook with real urgency. Docked because cold outreach into SEA factories typically needs local-language phone follow-up, not just email. |
| Revenue mechanics | 15 | 11/15 | Pricing is well-anchored against a documented audit spend. 240 factories to $1M is credible. Docked because SEA SMB software churn is real and unproven here. |
| Time to first revenue | 10 | 7/10 | Free scan converts fast once built, but v1 is 14–18 weeks out. Realistically 5–6 months to first dollar. |
| Defensibility | 10 | 4/10 | Honest score. Country rule packs and scheme mappings compound, and accumulated finding data gets genuinely useful, but a well-resourced player (Sedex, QIMA) could ship a facility-side product. Bet on speed and on the fact that they're structurally aligned to the buyer, not the factory. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build a robust document-ingest pipeline and someone who has sat through a BSCI audit. Without the second person, the rule packs will be subtly wrong and the first verifier who spots it kills your credibility in that market.

### Key assumptions to validate

1. **Assumption:** Factories will upload payroll and attendance data — their most sensitive records — to a third-party tool. **How to test:** 20 in-person interviews at Vietnamese and Indonesian industrial parks. Ask directly, and offer an on-premise/regional-hosting option as the fallback. If more than half refuse outright even with local hosting, the whole model needs rethinking.
2. **Assumption:** A meaningful share of real findings are catchable from records alone. **How to test:** Get 5 factories to share last year's audit report plus the underlying records. Run the sweep retrospectively. Need to catch ≥50% of the working-hours and wages findings to justify the pitch.
3. **Assumption:** The compliance officer can authorize $199–399/month without a long approval chain. **How to test:** Ask in those same 20 interviews — who signs, and at what threshold.
4. **Assumption:** Country rule packs stay accurate without a full-time regulatory analyst. **How to test:** Track how many statutory changes hit Vietnam and Indonesia over one quarter and how long each takes to encode.

### Risk flags

1. **Ethical / adverse-use risk.** The most serious flag. A tool that shows a factory exactly which findings an auditor will catch can be used to fix problems or to hide them. Mitigations: never generate documents, only analyse supplied ones; keep an immutable original-record trail; refuse remediation suggestions that alter historical records rather than correcting forward. This needs to be an explicit product principle, not an afterthought — and it should be stated publicly, because brands will ask.
2. **Data sensitivity.** Payroll data for thousands of workers is as sensitive as it gets. A breach ends the company. Regional hosting and a real security posture are table stakes, not v2.
3. **Incumbent encroachment.** Sedex and QIMA already have the factory relationship and the brand trust. If either ships a facility-side prep tool, the pure-play window narrows fast.
4. **Regulatory timing.** CSDDD slipped to 2028 and narrowed scope. If brand-led audit programs soften alongside it, the ratchet loosens. I judge this unlikely — brands have sunk cost in these programs — but it's the macro bet.
5. **Willingness-to-pay asymmetry.** The factory bears the audit cost but the brand captures the compliance benefit. Some factories will argue the brand should pay. That's a real objection and it may push toward a brand-sponsored pricing motion later.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with document-AI experience, paired with
                        an ex-social-auditor or factory compliance manager from SEA
Time to revenue:        5–6 months
Capital to launch:      $15–25K (₹12–20L) — mostly domain advisor and field travel
Top 3 assumptions to validate first:
  1. Factories will share payroll/attendance with a third party — 20 in-person
     interviews at VN/ID industrial parks, with regional-hosting offered as fallback
  2. ≥50% of historical working-hours and wages findings are catchable from records
     alone — retrospective sweep against 5 factories' prior audit reports
  3. Compliance officer can approve $199–399/mo without escalation — ask directly
     in the same interview set
Kill criteria:
  - Abandon if >50% of 20 interviewed factories refuse data sharing even with
    in-country hosting
  - Abandon if the retrospective sweep catches <30% of prior working-hours and
    wages findings — the core claim is then false
  - Abandon if Sedex or QIMA ships a facility-side pre-audit product before v1
  - Abandon if fewer than 10 of the first 100 free scans convert to paid within
    60 days of the scan
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Assemble the target list. Pull VITAS and API member directories, filter to export factories in the 200–2,000 worker band, enrich for compliance-officer contacts. Target 300 named people. In parallel, buy and read the ITC audit fatigue report in full and map the top 20 CAF questions that are pure record-reconciliation.
- **Day 3–4:** The retrospective test — this is the one that matters. Get 5 factories (via a compliance consultant, offering the analysis free) to hand over last year's audit findings plus the underlying payroll and attendance records. Run the reconciliation manually in a spreadsheet. Measure precisely: of the working-hours and wages findings the auditor raised, what fraction were derivable from the records alone?
- **Day 5:** Fifteen calls with compliance officers in Vietnam and Indonesia, in-language. Three questions: how many audits last year, would you upload payroll to a hosted tool, and who signs a $299/month invoice.

**Falsifiable outcome:** Proceed only if the retrospective sweep reproduces **≥50%** of prior working-hours and wages findings from records alone, AND **≥8 of 15** interviewed compliance officers say they would share data given in-country hosting. Below either threshold, this is a consulting business, not a product.
