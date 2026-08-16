---
title: "CaDance — audit rehearsal room for Vietnam factories"
slug: factory-audit-record-rehearsal
date: 2026-08-16
category: Manufacturing / Vietnam
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: Finds the payroll-timecard gaps a social auditor will find, six weeks before the auditor lands.
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Multilingual, AI-agent, SMB, Compliance-driven, Vietnam]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaDance

## 1. One-liner

Finds the payroll-timecard gaps a social auditor will find, six weeks before the auditor lands.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the same direction.

**The audit findings stopped being random.** Audit practitioners running social compliance work across Ho Chi Minh City, Binh Duong and Bac Ninh report the same three Critical findings recurring: blocked fire exits, **payroll that does not match timecards**, and hidden subcontracting. Two of those three are document-reconciliation problems, not facility problems. One firm's Vietnam guidance puts it bluntly: "Timecards say one thing, social-insurance filings say another, and that gap is where forced overtime hides."

**Vietnam's own labor law digitized the evidence trail.** The Law on Social Insurance 2024 took effect 1 July 2025 and the Employment Law 2025 took effect 1 January 2026. Compulsory social insurance now captures employees on contracts of at least one month, qualifying part-timers, and enterprise managers — categories that previously sat outside coverage. Decree 293/2025/ND-CP lifted the Region I minimum wage to VND 5,310,000/month from 1 January 2026 (~7.2% average increase across regions). Late or short social insurance contributions accrue 0.03% per day on overdue amounts. Critically, Duane Morris' Vietnam practice notes employment compliance "is becoming increasingly difficult to compartmentalize" because government digitalization is connecting administrative databases — labor contracts, payroll, PIT declarations and SI filings now have to line up, and the state can see when they don't.

**The audit spend is recurring and priced per day.** Vietnam audit pricing in 2026 runs USD 240–400 per man-day all-inclusive. For high-risk categories like apparel, social and environmental audits run quarterly; low-risk suppliers are re-audited annually. A score of 70–84% is a conditional pass requiring corrective actions inside 30 days, with a re-audit to verify closure. Vietnam has roughly 6,000 garment, textile and clothing factories employing 2.5–2.7 million workers, exporting ~USD 46B of apparel and textiles in 2025.

The synthesis is in one line from an audit-prep guide: the mills that pass consistently "are the ones that treat compliance as a daily operating discipline rather than a scramble in the weeks before an announced audit date." That sentence is the product. Nobody sells the supplier a way to do that.

```
Provenance:
  - Signal 1 (Demand): Recurring Critical findings in HCMC/Binh Duong/Bac Ninh audits — "payroll that does not match timecards", hidden subcontracting; conditional pass 70-84% forces 30-day CAP + re-audit — https://tradewithviet.com/blog/factory-audits-vietnam/ — 2026-08-16
  - Signal 2 (Feasibility/Regulatory): Social Insurance Law 2024 (eff. 2025-07-01) + Employment Law 2025 (eff. 2026-01-01) + Decree 293/2025/ND-CP; govt digitalization cross-links contracts/payroll/PIT/SI filings; 0.03%/day late-contribution charge — https://blogs.duanemorris.com/vietnam/2026/08/12/vietnam-employment-compliance-2026-the-new-cost-of-doing-business-what-foreign-investors-need-to-fix-now/ — 2026-08-16
  - Signal 3 (Economic): Vietnam audit pricing USD 240-400/man-day in 2026; quarterly cadence for apparel; ~6,000 garment factories, ~USD 46B 2025 exports — https://sourcing-agent-vietnam.com/factory-audit-in-vietnam/ — 2026-08-16
  - Signal 4 (Product thesis, verbatim): "The mills that pass social compliance audits consistently are the ones that treat compliance as a daily operating discipline rather than a scramble in the weeks before an announced audit date." — https://www.eurotechworld.net/resources/social-compliance-esg/social-audit-preparation-checklist/ — 2026-08-16
  Category: Underserved niche (with regulatory tailwind)
```

## 3. The opportunity

The entire social-audit industry is built to serve **the buyer**. Sedex, amfori BSCI, WRAP, QIMA, Bureau Veritas, TÜV — every one of them sells assurance to the brand that's sourcing. The factory is the object being measured, never the customer being served.

So the factory's side of the transaction is unarmed. When an audit date is announced, a compliance officer with a spreadsheet spends three to six weeks manually pulling time clock exports, payroll registers, bank transfer logs, signed payslips and SI filings, then eyeballing them against each other for a sample of workers across several months. The auditor will do exactly this same cross-check — but systematically, with a sampling method, and going "several months back" rather than looking only at the current month. The factory checks 20 workers by hand. The auditor samples differently and finds the one the factory missed.

That asymmetry is the whole business. The auditor's procedure is *published*. Preparation guides spell out precisely what gets pulled side by side: "time clock data, the payroll register, bank transfer or cash logs, signed payslips and worker interview answers." Overtime is checked for correct calculation and genuine voluntariness, pay rates against statutory minimums, rest-day patterns against policy and law. This is a deterministic reconciliation over five data sources with known rules. A machine should run it continuously across 100% of workers and 12 months of history. A human with Excel cannot.

The 10× isn't "AI reads your documents." It's **coverage and cadence**. Manual prep samples maybe 3% of worker-months once a quarter, in a panic. Software samples 100% of worker-months every night, cheaply, and tells you in week one which 14 workers have a defect you can still lawfully fix — versus week eleven, when the auditor tells you and it becomes a Critical finding with a 30-day CAP and a paid re-audit.

Note the honest boundary: this does not help a factory that is genuinely running illegal forced overtime. It helps the much larger population of factories that are *broadly compliant but sloppy* — where the wage is right but the payslip wasn't signed, the SI filing lagged a headcount change, or a rest-day pattern drifted. Those are the findings that sink otherwise-decent suppliers, and they're all fixable if caught early.

## 4. Target market

- **Primary customer:** The compliance / HR-admin manager (often titled *Trưởng phòng Nhân sự* or a dedicated CSR officer) at a Vietnamese export factory with 200–3,000 workers — garment, footwear, furniture, or electronics assembly — in Ho Chi Minh City, Binh Duong, Dong Nai, Bac Ninh or Hai Duong. Tier-2 and Tier-3 suppliers to Western brands. These are the factories that hold BSCI/SMETA/WRAP audits but are too small to have an in-house compliance software budget or a Big-4 advisor.

- **Why they buy:** Their personal job outcome is attached to the audit score. A Critical finding means a 30-day corrective action plan, a paid re-audit at USD 240–400/man-day, and — the part that actually terrifies them — a brand compliance manager in Portland or Amsterdam asking whether to shift the order. Audit-prep guidance describes the alternative to their current state as avoiding "a scramble in the weeks before an announced audit date." Their current workaround is that scramble, executed by two or three staff working nights with Excel exports.

- **Rough TAM reasoning:** ~6,000 garment/textile/clothing factories in Vietnam alone. Strip out the micro-workshops with no export-audit exposure and the top-tier groups with SAP and in-house teams, and call the realistic middle band 1,500–2,500 factories in garments. Add footwear, furniture and electronics assembly and the Vietnam number plausibly reaches 3,000–4,000 audited export sites. At a ₫/USD 300/mo ACV, capturing 3% of 3,500 sites is ~105 customers and ~USD 378K ARR; 15% is ~525 sites and ~USD 1.9M ARR. The same product ports to Indonesia, Bangladesh, India and Cambodia with a rules-layer swap — that's the path past $5M, not Vietnam alone.

- **Why now for them:** Two forces landed in the same 14 months. The 2025–26 labor law changes moved the goalposts (new SI-covered categories, new minimum wage floors from 1 Jan 2026) so last year's clean payroll config is this year's defect. Simultaneously, government database linkage means the mismatch between payroll, PIT and SI filings is now visible to the state, not just to a visiting auditor. The cost of drift went up on both sides at once.

## 5. Product sketch (MVP)

- **Five-source reconciliation.** Ingest time clock exports, payroll register, bank transfer/cash disbursement logs, payslip records, and social insurance filings. Match them worker-by-worker, month-by-month, across a rolling 12 months.
- **Finding cards written in auditor language.** Each defect renders as the finding an auditor would write — "Worker ID 2214: October timecard shows 62 OT hours; payroll register pays 54; SI filing headcount excludes worker for October" — with the source rows shown side by side, in Vietnamese and English.
- **Audit-readiness score with a countdown.** A single number tracked against the announced or expected audit date, trending weekly, so the manager can show their GM that the number is going the right way.
- **Statutory rules pack, versioned.** Region I–IV minimum wages, OT caps and premium multipliers, rest-day rules, SI contribution categories — with effective dates, so a January 2026 rule change re-flags historic records rather than silently applying today's rule to last year.
- **Sampling simulator.** Runs the auditor's own sampling logic — several months back, not just current month — and shows which workers a real sample would most likely surface.
- **Fixability triage.** Sorts findings into "correctable now with a lawful remediation" versus "structural, disclose and plan," because pretending the second category is the first is how factories get caught. The guidance is explicit that documents "signed the night before" give themselves away.
- **CAP tracker.** For findings from a prior audit, tracks closure with evidence attached — since partially-closed prior CAPs "closed on paper without matching physical evidence" are themselves a common trigger for the next failure.

Explicitly out of scope for v1: fire safety, building integrity, chemical handling, worker interviews. Those need a physical walkthrough. We do the paper, which is where two of the three recurring Critical findings live.

## 6. AI angle — what's load-bearing

Remove the AI and the product genuinely collapses — but not at the reconciliation step. The reconciliation itself is rules, and rules are the right tool for it; I'd be suspicious of anyone claiming an LLM should decide whether 54 ≠ 62.

The AI is load-bearing at **ingestion**, and ingestion is the whole barrier to entry.

There is no standard here. One factory's time clock is a ZKTeco unit exporting fixed-width text with Vietnamese column headers. The next runs Vietnamese payroll software with a different sheet per month. A third keeps the disbursement log as a scanned, stamped PDF. A fourth hands you an Excel file where a human merged cells for readability and broke every parser ever written. Every one of these is a different shape, in a different language, with worker names that transliterate inconsistently across systems.

The AI does three jobs no rules engine can: it maps arbitrary spreadsheet and PDF layouts onto the canonical schema without a human writing a connector per factory; it resolves worker identity across five systems where the same person appears as "Nguyễn Thị Hương", "NGUYEN THI HUONG" and employee code 2214; and it drafts the finding narrative in the register an auditor expects, bilingually.

Without that, onboarding a factory is a two-week consulting engagement and the business is an agency, not software. With it, onboarding is an upload. That's the difference between a product and a services firm.

## 7. Localization angle

This is a Vietnam-first play and the localization *is* the moat, not a translation layer.

- **Language:** The entire working surface — column headers, worker names, finding narratives — is Vietnamese. The compliance manager reads Vietnamese; the brand's compliance officer reads English. Both views, same finding.
- **Statutory specificity:** Region I–IV minimum wage bands, Decree 293/2025/ND-CP effective dates, the new SI-covered worker categories from the 2024 law, the 0.03%/day late-contribution charge. This is not generalizable content — it's a maintained rules asset, and maintaining it is real ongoing work that a global SaaS won't do for a market this size.
- **Payment rails:** Domestic bank transfer and VNPay; annual prepay is normal and welcome for cash flow. Card-on-file SaaS billing is not the default expectation.
- **Distribution:** Zalo, not email, for the operator relationship. VITAS (Vietnam Textile and Apparel Association) and the provincial industrial-park operator networks in Binh Duong and Dong Nai are the real channels.

Expansion order after Vietnam: Indonesia, Bangladesh, India, Cambodia. Same audit standards (BSCI/SMETA/WRAP are global), same five-source reconciliation, different statutory pack. The reconciliation engine is the reusable asset; the rules pack is the per-country cost.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by worker headcount, billed per factory site per month.
  - Under 500 workers: USD 180/mo
  - 500–1,500 workers: USD 350/mo
  - 1,500–3,000 workers: USD 600/mo
  - Annual prepay at ~15% discount, which most Vietnamese factories will prefer.
- **ACV:** ~USD 3,600 blended (mix-weighted toward the mid tier, with annual prepay discount applied).
- **Anchor against the alternative:** a single re-audit triggered by a Critical finding costs USD 240–400/man-day, and apparel sites run quarterly audits. One avoided re-audit roughly pays for a year of the mid tier. That's an easy conversation, and it's the one the pricing is designed for.
- **Math to $1M ARR:** ~280 factory sites at USD 3,600 ACV = USD 1.008M. Against a Vietnam serviceable base of 3,000–4,000 audited export sites, that's under 10% penetration in one country.
- **Math to $5M ARR:** ~1,400 sites. Vietnam alone can't credibly deliver that — it needs Indonesia and Bangladesh live (each a comparable or larger factory base) plus the buyer-side upsell below. Realistic as a 4–5 year shape, not an 18-month one. I'd rather state that honestly than pretend Vietnam gets there.
- **Expansion path:** Three real levers. (1) Headcount tier migration as factories grow. (2) Multi-site groups — a supplier operating four plants buys four seats, and group-level rollup is a natural premium. (3) The buyer-side flip: once 50+ suppliers in a region are on the platform, the sourcing brand will pay for a portfolio view of supplier audit-readiness. That's a 5–10× ACV product sold to a different wallet, and it's the reason this doesn't cap out as a small tool — but it's a year-two-plus motion and I'm not scoring it as if it were in hand.

## 9. Go-to-market wedge — first 100 customers

- **Mine the published audit calendar and the brand supplier lists.** Major brands publish supplier factory lists with names and addresses — Nike, Adidas, H&M and others disclose these, and Vietnam is a top-two sourcing country for several of them. That's a named, addressed, downloadable list of exactly the factories that hold recurring social audits. Target the 400 Vietnam entries in the 200–3,000 worker band.
- **Lead with a free retro-audit on their own data.** The offer that converts here is not a demo, it's a finding. Ask for three months of time clock and payroll exports under NDA, run the reconciliation, and hand back a bilingual PDF listing the exact defects a SMETA auditor would surface. If the report is empty, they don't need us and we say so. If it lists nine workers with OT mismatches — which, given that this is a *recurring Critical finding* across the region, it usually will — the sale is already made. Expect this to be the single highest-converting motion in the plan, and expect a 15–25% conversion from completed retro-audit to paid, because the report is the proof.
- **Go through the audit consultants, not around them.** Vietnam has a layer of local social-compliance consultancies who prep factories for BSCI/SMETA by hand. They are not competitors — they're distribution. The tool makes their engagement faster and higher-margin. Offer 20% recurring revenue share. Ten consultants with eight factory clients each is 80 warm accounts, and the consultant makes the introduction with their own credibility attached.
- **VITAS and the industrial parks.** The Vietnam Textile and Apparel Association and the park operators in Binh Duong and Dong Nai run member workshops. A session titled "the three findings that fail Vietnamese factories" — using the real recurring-findings data, not a pitch — puts you in a room with 40 compliance managers who all have the same scar.
- **Zalo, not email.** Every factory relationship in Vietnam lives in Zalo groups. First-touch by email gets a 2% reply; a warm Zalo intro from a consultant or association contact gets a conversation. Budget for a Vietnamese-speaking founder or first hire — this channel does not work in English and does not work remotely from abroad.

The realistic shape of the first 100: ~25 from the retro-audit cold motion, ~50 from consultant channel, ~25 from association workshops.

## 10. Build complexity — justification

**Medium.** The reconciliation engine and the statutory rules pack are ordinary, well-understood software — deterministic matching over five normalized tables, plus a versioned rules layer with effective dates. Nothing research-grade. The genuinely hard part is ingestion: arbitrary Vietnamese spreadsheets, fixed-width time clock dumps, and scanned stamped PDFs, resolved to one worker identity across systems. That's where the engineering weeks go, and it's why this isn't Low.

Estimate: 14–18 weeks to a v1 that can onboard a factory from raw exports and produce a defensible bilingual findings report — for a pair, one of whom must be Vietnamese-speaking and comfortable sitting in a factory HR office watching how the data actually comes out of the clock. The rules pack needs a Vietnamese labor-law advisor on retainer from week one; getting a minimum wage band or an OT premium wrong doesn't just produce a bad report, it produces a *confidently wrong* report, which is worse than no product.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Factory processes its own HR/payroll data with a vendor. Standard DPA; data residency in Vietnam offered. Not offering legal advice — flagging discrepancies against published statute. |
| Ethical — no harm / dark patterns | ✅ | Genuine tension, faced squarely: a tool that surfaces labor violations could be used to *hide* them. Mitigations are product decisions, not policy text — findings are append-only and timestamped, no retroactive record editing, no "make this go away" path, and triage explicitly separates lawful remediation from structural issues requiring disclosure. Net effect is that underpaid workers get paid correctly. |
| Market exists (evidence above) | ✅ | ~6,000 VN garment factories; USD 240–400/man-day recurring audit spend; payroll-timecard mismatch documented as a recurring Critical finding. |
| 1–5 person team can build this | ✅ | Pair for v1 in 14–18 weeks, plus a part-time labor-law advisor. |
| Launchable with <$50K / ₹40L | ✅ | ~USD 25–35K: two founders' runway, advisor retainer, cloud, Vietnam entity/DPA setup. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Recurring Critical finding with direct financial consequence (paid re-audit, 30-day CAP) and career consequence for the buyer. Not 18+ because it's acutely felt on an audit cycle rather than daily — between audits, urgency decays, which is a real churn risk. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: documented recurring findings, published per-day audit pricing, quarterly cadence for apparel, a factory count. Held below 13 because I have practitioner-sourced descriptions of the pain, not verbatim factory-manager complaints — this market doesn't post on Reddit, so the evidence is one step removed. |
| Build feasibility | 15 | 11/15 | Reconciliation and rules are routine; ingestion of messy multi-format Vietnamese records is the real work. 14–18 weeks for a pair, not 6. |
| Distribution clarity | 15 | 11/15 | Named, downloadable target list (brand supplier disclosures) plus a high-converting retro-audit offer and a consultant channel. Docked for the Zalo/Vietnamese-language requirement — this is not a channel a remote foreign founder can run. |
| Revenue mechanics | 15 | 11/15 | Pricing anchors cleanly against a known alternative cost. $1M ARR at 280 sites is credible. $5M needs multi-country, which is stated but unproven. |
| Time to first revenue | 10 | 7/10 | Retro-audit motion can pre-sell during build, but the report needs a working engine first. Realistically 4–6 months to first paid, with pilots earlier. |
| Defensibility | 10 | 6/10 | Soft but real: the maintained Vietnamese statutory rules pack, accumulated ingestion adapters for local clock/payroll formats, and workflow lock-in via CAP history. A generic global competitor won't maintain the rules pack for a market this size — but a local team could copy the shape in a year. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs a builder who can handle messy document ingestion **and** a Vietnamese-speaking operator who can sit in factory HR offices. If one person is both, this is a strong solo-plus-advisor play. If the team is entirely non-Vietnamese and remote, distribution fails regardless of product quality — that's the single biggest fit risk.

### Key assumptions to validate

1. **Assumption:** Factories will hand over payroll and timecard exports to an unknown vendor under NDA. **How to test:** Approach 20 factories via consultant intro with the free retro-audit offer; measure how many actually send data. Below 6 of 20 and the wedge is broken.
2. **Assumption:** The reconciliation actually finds real defects in a broadly-compliant factory's records — i.e. the drift is common, not rare. **How to test:** Run the first 10 retro-audits and count factories with ≥3 findings a real auditor would write up. Below 6 of 10 and the value prop is too thin.
3. **Assumption:** The compliance manager can authorize USD 180–600/mo without a GM-level procurement cycle. **How to test:** Ask directly in the first 15 discovery calls what their discretionary monthly spend limit is.
4. **Assumption:** Local consultants see this as leverage, not as a threat to their billable hours. **How to test:** Pitch revenue share to 8 Vietnamese social-compliance consultancies; measure signed partners.
5. **Assumption:** Retention holds between audit cycles. **How to test:** Track month-4 to month-8 logins for the first cohort — this is the assumption I trust least.

### Risk flags

1. **Churn between audit cycles.** The most serious commercial risk. If the factory only cares in the six weeks before an audit, they'll cancel and re-subscribe, wrecking the ARR. Mitigation is making the product a monthly payroll-close habit rather than an audit-prep sprint — which is exactly what the "daily operating discipline" quote prescribes, but it has to be designed for, not hoped for.
2. **Misuse risk.** A tool that shows you what an auditor will find also shows you what to conceal. Handled with append-only findings, no retroactive editing, and explicit triage separating lawful fixes from disclosable issues — but it can't be engineered away entirely, and the founder should be honest about that rather than pretend otherwise.
3. **Regulatory-content liability.** A wrong minimum wage band or OT multiplier produces a confidently incorrect report and could cost a customer an audit. Requires a versioned rules pack with a named advisor signing off on every change, plus clear disclaimers that this is not legal advice.
4. **Buyer-side platform encroachment.** If Sedex or amfori ships a free supplier self-assessment with real reconciliation, the wedge narrows fast. Their current products are assessment questionnaires, not data reconciliation, and their customer is the brand — but this is the competitive event worth watching.
5. **Data sensitivity and trust.** Worker-level payroll data is about as sensitive as it gets. One breach ends the company. Vietnam data residency and a serious security posture are table stakes, not a v2 feature.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with document-ingestion chops, paired with a
                        Vietnamese-speaking operator; Vietnamese labor-law advisor on retainer
Time to revenue:        4–6 months (pilots earlier via free retro-audit)
Capital to launch:      USD 25–35K
Top 3 assumptions to validate first:
  1. Factories will share payroll/timecard exports under NDA — 20 consultant-intro
     approaches, need ≥6 to send data
  2. Reconciliation finds ≥3 auditor-grade findings in a typical factory — run 10
     retro-audits, need ≥6 to hit that bar
  3. Consultants treat this as leverage not threat — pitch 8 firms, need ≥3 signed
Kill criteria:
  - Abandon if fewer than 6 of 20 approached factories will share data under NDA
  - Abandon if fewer than 6 of 10 retro-audits surface 3+ genuine findings
  - Abandon if month-8 retention in the first cohort falls below 60% — that means
    it's an audit-prep service, not software, and the ARR never compounds
  - Abandon if Sedex or amfori ships free supplier-side record reconciliation
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the published Vietnam supplier lists from three major brand disclosures. Build a target sheet of 60 factories in the 200–3,000 worker band across HCMC, Binh Duong, Dong Nai. Separately, identify and contact 8 Vietnamese social-compliance consultancies.
- **Day 3–4:** Get 3 factories to share three months of real time clock + payroll exports under NDA — via consultant intro, not cold. Reconcile them **by hand in a spreadsheet**. No product, no code. The point is to learn whether the defects are actually there and whether the raw files are ingestible at all.
- **Day 5:** Present the hand-built findings report to each of the 3 factories. Ask one question and shut up: *"If this ran every month automatically, what would you pay for it?"*

**Falsifiable outcome:** Go if at least 2 of 3 hand-reconciled factories show 3+ genuine auditor-grade findings **and** at least 2 name a price of USD 150/mo or higher unprompted. Anything less and the pain is real but the wallet isn't — which makes it a consulting service, not a SaaS, and I don't want that business.
