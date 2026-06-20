---
title: "WattReady — competency registry for UK electrical firms"
slug: uk-electrician-competency-registry
date: 2026-06-20
category: Compliance / UK Electrical Contractors (NICEIC, NAPIT, ELECSA scheme members)
complexity: Medium
score: 82
verdict: STRONG GO
confidence: High
oneLiner: "Keeps every electrician's qualifications, CPD and certs audit-ready so UK firms survive the October 2026 scheme assessment."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Solo-builder, Deadline-driven]
axes:
  problem: 18
  demand: 13
  build: 12
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# WattReady — competency registry for UK electrical firms

## 1. One-liner

Keeps every electrician's qualifications, CPD and certs audit-ready so UK firms survive the October 2026 scheme assessment.

## 2. Trend signal — why now?

Three regulatory changes land on UK electrical contractors in the same six-month window of 2026 — and they hit the one thing a small firm can't afford to lose: its registration scope.

- **EAS individual-competency shift (1 Oct 2026).** The Electrotechnical Assessment Specification moves from *firm-level* to *individual* competency. Every employed person doing EICRs, EV charging, solar PV, battery storage or micro-wind must now personally hold a Level 3 inspection-and-testing award (City & Guilds 2391-52 or EAL equivalent) **and** show two years of *documented* periodic-inspection experience. The experience-only route closes permanently. Enforcement is phased: 2024 = awareness, 2025–26 = "improvement phase" where assessors record development points on your report, **Oct 2026 = hard deadline — non-compliant scopes get removed from your firm's registration.**
- **BS 7671 Amendment 4, "the Orange Book" (published 15 Apr 2026, mandatory 15 Oct 2026).** New EICR forms decouple C1/C2 codes from FI observations; new chapters (Ch 57 batteries, Ch 81 energy efficiency). NICEIC, NAPIT and ECA will expect documented evidence of A4 CPD training at every assessment after October.
- **EICR renewal wave (Apr–May 2026).** Certificates issued in the 2021 rush hit five-year expiry; PRS non-compliance fines rose to £40,000 from Nov 2025. Demand surges exactly as the rules tighten.

The signal isn't a hunch — it's a dated cliff. Forum threads already read like distress flares: *"Being pushed out of NICEIC after 15 years if I don't take 2391 exam"*, *"2330 L3 + 2391-52 insufficient for NICEIC Approved Contractor"*, *"New CPS rules in October."*

```
Provenance:
  - Signal 1 (Demand): EAS shifts to individual competency 1 Oct 2026; experience-only EICR route closes; forum threads on scope-loss fear — https://www.learntradeskills.co.uk/blog/eicr-changes-2026-level-3-qualification-required + https://www.electriciansforums.net/threads/being-pushed-out-of-niceic-after-15-years-if-i-dont-take-2391-exam.216656/ — 2026-06-20
  - Signal 2 (Feasibility): Amendment 4 form changes + EAS spec are public; LLM can map operative quals→scope and assemble audit packs; existing tool (iCertifi) explicitly only generates certificates, does not track competency or build audit evidence — https://icertifi.co.uk/bs-7671-amendment-4-2026/ — 2026-06-20
  - Signal 3 (Economic): £291.2bn UK electrical install market, 585k businesses; NICEIC assesses 40,000+ firms, NAPIT 20,000+ installers; schemes launching paid A4 CPD courses Apr 2026; firms already pay for cert software — https://www.ibisworld.com/united-kingdom/industry/electrical-installation/200554/ + https://niceic.com/eas-changes-what-you-need-to-know/ — 2026-06-20
  Category: Regulatory arbitrage
```

## 3. The opportunity

The incumbent isn't a competitor — it's the **shoebox**. Today the typical 1–10-operative firm keeps scheme evidence in scattered PDFs, a folder of qualification scans, and a panicked rebuild the week the assessor books a visit. Certificate software (iCertifi, Click, Elec-Mate) is genuinely good at *making* certificates — and that's exactly where it stops. None of them models the **assessment** as the unit of work: *which operative is qualified for which scope, is their CPD current with the latest amendment, do issued certs use the post-October form, and where are the gaps that will cost us scope on assessment day.*

The Oct 2026 rule change is what makes this a category, not a feature. Before the EAS shift, firm-level Qualified Supervisor sign-off was enough, so per-operative competency tracking wasn't load-bearing — a spreadsheet did the job. The moment competency goes individual, every operative becomes a separate audit surface, and a spreadsheet stops scaling. A focused AI-first tool can ingest the public specs once and keep every firm continuously assessment-ready, turning a two-day panic into a green dashboard.

## 4. Target market

- **Primary customer:** Owner or Qualified Supervisor of a UK electrical contracting firm registered with NICEIC / NAPIT / ELECSA, in the **1–15 operative band** — sole trader plus a handful of electricians. The segment too small to employ a compliance manager but large enough to have multiple operatives whose individual scopes now must each be evidenced.
- **Why they buy (their words):** *"if I haven't got the 2391 by the time I sit my next assessment I'd be removed from NICEIC altogether"* — losing a scope means losing the right to self-certify that work, which means losing the work. This is survival spend, not nice-to-have.
- **Rough TAM reasoning:** NICEIC assesses 40,000+ businesses; NAPIT 20,000+ installers; together with ELECSA they cover the bulk of the UK's scheme-registered electrical firms. Conservatively **40,000–60,000 firms** are in scope, the majority in the small-team band. Even 1–2% adoption at £50/mo is a real business.
- **Why now for them:** A once-in-a-decade dual deadline (1 Oct + 15 Oct 2026) with phased enforcement already recording "development points" on their assessment reports today. The clock is visible and ticking.

## 5. Product sketch (MVP)

- **Operative competency registry** — one record per electrician: qualifications (with expiry), 2391-52 / Level 3 status, logged inspection experience toward the two-year requirement, mapped to the scopes (EICR, EV, solar, battery) the EAS now gates individually.
- **Scope-gap radar** — a per-firm dashboard that flags, in red, any scope the firm currently certifies but no longer has a personally-qualified operative to cover after 1 Oct 2026 — *before* the assessor finds it.
- **CPD capture + A4 currency check** — log a course or toolbox talk by photo/PDF; AI extracts provider, date, hours, and tags whether it evidences Amendment 4 currency. Generates the rolling-12-month CPD pack assessors ask for.
- **Form-version sentinel** — checks that EICRs and certs issued after 15 Oct 2026 use the Amendment 4 forms (C1/C2 decoupled from FI), warns on stale templates.
- **Assessment evidence pack** — one click assembles the audit bundle (operative quals, CPD records, scope mapping, sample certs) in the order the NICEIC/NAPIT assessor walks it.
- **Renewal pipeline** — surfaces which client EICRs from 2021 are hitting five-year expiry, turning the renewal wave into a booked-work list.
- **Deadline countdown + action list** — plain-English "do these 4 things before October or lose these 2 scopes."

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet with reminders — so the AI has to do real work, and it does:

- **Document understanding** is the core. Operatives' qualifications, CPD certificates, training receipts and existing EICRs arrive as messy photos and PDFs. The model extracts qualification type, awarding body, dates and hours, and **classifies each item against the EAS scope matrix and Amendment 4 currency** — judgement, not OCR.
- **Scope reasoning.** Mapping "this person holds 2391-52 + 2 years logged → cleared for periodic-inspection scope; this person does not → firm has a gap" is exactly the inference an assessor performs by hand. The product automates that reasoning across the whole team continuously.
- **Form-drift detection.** Recognising whether an issued certificate uses pre- or post-Amendment-4 layout is a visual/structural classification task that compounds across thousands of certs.

The AI collapses a domain expert's two-day evidence assembly into a live dashboard. That's the load-bearing claim.

## 7. Localization angle

This **is** the localization play — it's UK-regulation-specific to the bone (EAS, BS 7671 Amendment 4, NICEIC/NAPIT/ELECSA scheme rules, Part P). That specificity is the moat: a generic "compliance tracker" can't reason about which 2391 variant clears which scope. The same engine ports later to adjacent UK competent-person schemes (gas/Gas Safe, plumbing/heating under NAPIT's wider remit) and to Ireland's RECI/Safe Electric — but UK electrical is the wedge and the deadline is the trigger. `Geography: EU` (UK).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** £49/mo for a solo/up-to-3-operative firm; £89/mo up to 10 operatives; £149/mo up to 25. Annual prepay discount. Sits just above cert-software spend (£20–50/mo) because the value — not losing a scope — is an order of magnitude higher than "making certificates."
- **ACV:** ~£780/yr blended.
- **Math to $1M ARR (~£790K):** ~1,000 firms at £65/mo average. Out of 40,000–60,000 scheme firms, that's ~2% penetration — achievable inside a deadline-driven 12-month window.
- **Math to $5M ARR:** ~5,000 firms (8–10% of the market) **or** layer expansion — per-seat CPD for larger firms, EICR renewal lead-gen, and porting to gas/heating competent-person schemes to double the addressable base.
- **Expansion path:** ACV grows as firms add operatives (per-head pricing), as renewal-pipeline tooling converts to a booked-work feature worth paying more for, and as the registry becomes the system of record across multiple schemes.

## 9. Go-to-market wedge — first 100 customers

- **Training-provider partnerships.** A handful of providers (TradeSkills4U, Optima, Elec Training, Learn Trade Skills) are selling A4 + 2391 refresher courses to exactly these firms right now. Offer them a co-branded "your firm is assessment-ready" tool to bundle with every course sale — they already have the buyer at the moment of maximum anxiety. Target 3 partnerships → first 50 customers.
- **Forum + deadline content.** ElectriciansForums.net and r/electricians are full of live threads ("New CPS rules in October", "pushed out of NICEIC"). Publish a free "Will you lose a scope in October? — 2-minute self-check" tool; answer threads with it. The audience is concentrated and panicking; conversion on a free diagnostic is high.
- **Cold outreach to scheme directories.** NICEIC and NAPIT publish searchable registers of approved contractors. Scrape the small-firm segment, send a personalised 90-second Loom showing *their* likely scope gaps under the new rules. Expect 3–5% reply at this urgency.
- **Scheme/assessor channel (later).** Once proven, pitch NICEIC/NAPIT to recommend the tool to members as a way to raise pass rates — turns the regulator into a distribution partner.

## 10. Build complexity — justification

Medium. The web app, document upload, and dashboard are off-the-shelf; the AI is standard vision+LLM document extraction and classification — no custom models. The hard part is **encoding the domain correctly**: the EAS scope matrix, which qualifications clear which scope, and the Amendment 4 form differences. That's research-and-rules work, not infrastructure. A technical founder with an electrical-compliance advisor (or a domain-expert co-founder) ships v1 in ~10–12 weeks; the rules must be right, because a false "you're fine" is a credibility killer.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A productivity/record tool; we don't certify or replace the assessor. |
| Ethical — no harm / dark patterns | ✅ | Helps firms genuinely comply; no gaming of safety rules. Must avoid false-assurance — handled by conservative gap-flagging. |
| Market exists (evidence above) | ✅ | 40k+ NICEIC firms, dated deadline, live forum distress, existing spend on cert software. |
| 1–5 person team can build this | ✅ | Founder + compliance advisor; standard stack + off-the-shelf AI. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair build; inference + hosting cheap at SMB scale. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Lose a scope = lose work; £40k fines adjacent; dated, enforced deadline. Hair-on-fire. |
| Demand evidence | 15 | 13/15 | Scheme rule docs + verbatim forum threads + 60k firms + rising search volume. A skeptic nods. |
| Build feasibility | 15 | 12/15 | Off-the-shelf AI; domain-encoding is the real work; ~10–12 weeks for a pair. |
| Distribution clarity | 15 | 13/15 | Named partners (training providers), named lists (scheme registers), concentrated forums, deadline urgency. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked vs cert software; survival-value justifies premium; conversion is the open assumption. |
| Time to first revenue | 10 | 8/10 | Deadline panic compresses trial→paid; partnerships can pre-sell. |
| Defensibility | 10 | 6/10 | Regulatory-knowledge + workflow lock-in (system of record); copyable, and urgency is time-boxed to Oct 2026. |
| **Total** | **100** | **82/100** | STRONG GO. |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy` — needs someone who deeply understands the EAS/BS 7671 scheme world (or a tight advisor) plus a builder who can ship document-AI cleanly.

### Key assumptions to validate (3–5)

1. **Assumption:** Small firms will pay £49–89/mo for assessment-readiness on top of existing cert software. **How to test:** Pre-sell annual plans to 20 firms via a training-provider partner before building beyond the diagnostic.
2. **Assumption:** The EAS scope-to-qualification mapping can be encoded accurately enough that gap-flagging is trustworthy. **How to test:** Have a NICEIC/NAPIT assessor or two domain experts validate the rules engine against 30 real firm profiles.
3. **Assumption:** Training providers will co-distribute rather than build it themselves. **How to test:** Pitch 5 providers; secure 2 signed referral/bundle agreements within 3 weeks.
4. **Assumption:** Document extraction is reliable on messy real-world qualification scans. **How to test:** Run 200 real certs/quals through the pipeline; measure extraction accuracy >95% before launch.

### Risk flags

1. **Market timing (time-boxed):** Acute urgency peaks at Oct 2026, then softens to steady-state annual-assessment value. Must convert the spike into retained recurring revenue (renewal pipeline + system-of-record stickiness) or churn rises post-deadline.
2. **Platform/rule dependency:** Built on scheme rules and BS 7671 amendments that evolve — but that's also the moat. Requires ongoing rule maintenance; a stale rules engine is worse than none.
3. **Incumbent encroachment:** Cert vendors (iCertifi, Elec-Mate) could bolt on competency tracking. Counter with a 6-month head start, assessor-grade rules depth, and the assessment-pack workflow they don't currently model.
4. **False-assurance liability:** Telling a firm "you're compliant" when they aren't is reputationally fatal. Conservative flagging and clear "we assist, the assessor decides" framing required.

## 14. Structured verdict

```
Score:                  82/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Technical founder + electrical-compliance domain advisor (or domain co-founder)
Time to revenue:        6–10 weeks (deadline-driven pre-sell possible)
Capital to launch:      £8–15K ($10–19K)
Top 3 assumptions to validate first:
  1. Firms pay £49–89/mo on top of cert software — pre-sell 20 annual plans via a training partner
  2. EAS scope→qualification rules engine is assessor-accurate — validate against 30 real profiles with an assessor
  3. Training providers co-distribute — secure 2 signed referral/bundle deals in 3 weeks
Kill criteria:
  - Abandon if <5 of 20 pre-sell targets convert to paid annual plans before build
  - Abandon if a cert-software incumbent ships equivalent competency+audit-pack tooling before your v1
  - Abandon if the rules engine can't be validated to assessor standard (false-assurance risk too high)
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Will you lose a scope in October?" diagnostic — 8 questions mapping a firm's operatives/quals to EAS scopes, outputs a red/green gap report. No backend beyond the rules.
- **Day 3–4:** Pitch 5 training providers for co-distribution and post the diagnostic into 3 live forum threads + r/electricians. Track completions and "notify me when the full tool launches" sign-ups.
- **Day 5:** Decide go/no-go on a falsifiable bar: **≥40 diagnostic completions AND ≥10 firms leaving an email/pre-order intent AND ≥1 training provider verbally agreeing to bundle.** Below that, the urgency isn't converting and the wedge is wrong.

The result is falsifiable: either firms run the gap-check and raise their hands, or they don't.
