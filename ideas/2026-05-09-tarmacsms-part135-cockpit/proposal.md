---
title: TarmacSMS — Part 135 SMS cockpit for small charter ops
slug: tarmacsms-part135-cockpit
date: 2026-05-09
category: Compliance SaaS / US Small Part 135 Charter & Air-Tour Operators (1–10 aircraft)
complexity: Medium
score: 81
verdict: STRONG GO
confidence: Medium
oneLiner: AI cockpit that drafts SMS manuals, FRAT, and FAA Declaration packages for small Part 135 operators by May 2027.
tags:
  vertical: Compliance
  model: SaaS
  geography: US
  secondary: [Aviation, Voice-first, AI-agent, SMB, Compliance-driven, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# TarmacSMS — Part 135 SMS cockpit for small US charter, air-tour, and single-pilot operators

## 1. One-liner

AI cockpit that drafts SMS manuals, FRAT, and FAA Declaration packages for small Part 135 operators by May 2027.

## 2. Trend signal — why now?

On April 26, 2024 the FAA published the final rule (14 CFR Part 5) extending mandatory Safety Management Systems to all Part 135 operators and Part 91.147 air-tour LOA holders. The deadline cycle is now active and visible:

- **October 2026** — implementation plan due to the operator's FAA Certificate Management Office (CMO) for design validation.
- **May 28, 2027** — fully implemented SMS plus Declaration of Compliance must be on file with the FAA.
- **~1,850 Part 135 operators + ~700 air-tour LOA holders** affected (FAA estimates in the 160-page final rule).

Operator-side complaints are loud and recent. Pilot/ops voices on Jetcareers (May–Sept 2025 thread "Pilots & Ops folks—What's your honest take on SMS tools?"):

> *"Some of these products are hundreds or even thousands of dollars per month. That's absurd."* — ppragman
>
> *"Most off the shelf programs require more positions than we have for effective management."* — TUCKnTRUCK
>
> *"Either too general or too bespoke to some other customer's needs."* — ppragman
>
> *"Literally none of the FRATs I have ever used … had any basis in any statistics. The numbers were clearly made up by how scary whoever made the FRAT thought that particular thing was."* — ppragman
>
> *"Give them tools to build their own."* — killbilly

Incumbent pricing is public and lopsided: SMS Pro $0/free → $2,600/mo per division, ACSF SMS Tool gated behind $1,234–$16,538/yr ACSF membership tied to fleet size. Polaris VOCUS and Baldwin SM4 anchor enterprise. Mid-2027 deadline + concentrated complaint pile + cheap LLM doc-RAG = window.

Provenance:
  - Signal 1: FAA SMS final rule (April 26, 2024) extending Part 5 to ~1,850 Part 135 operators and ~700 air-tour LOAs; implementation plan due October 2026, Declaration of Compliance due May 28, 2027 — https://www.federalregister.gov/documents/2024/04/26/2024-08669/safety-management-systems — 2024-04-26
  - Signal 2: Pilots/ops verbatim pain on cost, modularity, and FRAT logic — https://jetcareers.com/forums/threads/pilots-ops-folks-whats-your-honest-take-on-sms-tools.344940/ — 2025-09 thread (read 2026-05-09)
  - Signal 3: Incumbent pricing / paid-vs-membership lock — https://www.asms-pro.com/Pricing.aspx and https://acsf.aero/membership/ — 2026 pricing pages
  Category: Regulatory arbitrage

## 3. The opportunity

The FAA just dropped a 36-month deadline on a population that historically did SMS on a clipboard. Big iron — Polaris VOCUS, Baldwin SM4, Ideagen, ASMS-Pro Enterprise — built for 50-aircraft flight departments with a director of safety. The 1,200+ small certificate holders (1–10 aircraft, 1–15 staff, often single-PIC) need a workable SMS *yesterday* but won't pay $30K/yr for a module pack that assumes departments they don't have.

Where incumbents are weak:
- **Manual generation.** Incumbents sell software; the operator still has to write the 80–150 page SMS manual. AI does this in minutes if it can ingest the operator's existing GOM, OpSpecs, and aircraft list.
- **FRAT logic.** Pilots openly mock that legacy FRAT scoring is "made up." A FRAT calibrated to ASRS / NTSB / operator's own incident history is genuinely better, not just prettier.
- **Hazard intake.** Today: form-based, post-flight, low compliance. Voice memo / SMS hazard intake transcribed and triaged is 10× lower friction.
- **Declaration of Compliance package.** Incumbents leave the cover-letter-and-evidence packet to the operator or to a $10K-30K consultant. This is the natural automation layer.

Faster manual + better FRAT + voice hazard intake + auto-bundled Declaration package, priced for the long tail. That's the wedge.

## 4. Target market

- **Primary customer:** US Part 135 certificate holder, 1–10 aircraft, 1–15 employees. Single-PIC certificate holders, small commuter/on-demand charters, air-tour LOA holders (Part 91.147). Owner is also the chief pilot or director of operations.
- **Why they buy:** May 28, 2027 Declaration of Compliance is a hard FAA gate. Miss it and the certificate is at risk. Operators are aware (NBAA / NATA / ACSF have been beating the drum since mid-2024) and now mid-cycle on action.
- **Rough TAM:** ~1,200 small Part 135 operators + ~500 air-tour LOA holders + ~300 small Part 145 / Part 21 with overlapping needs ≈ 2,000 buyers in the US wedge. Adjacent: ~3,000 Part 91 corporate departments choosing voluntary SMS. Canadian TC SMS, EASA Part-ORO add lateral motion later.
- **Why now for them:** Implementation plan to CMO due October 2026. Most haven't started. Consultants are quoting $10K-30K. They want a tool they can run themselves over a weekend.

## 5. Product sketch (MVP)

- **Manual builder.** Upload existing GOM, MEL, training records, ops specs. Drafts a Part 5–compliant SMS manual (Safety Policy, SRM, SA, Safety Promotion sections) tailored to the operator's fleet and ops type.
- **Gap analysis.** Side-by-side: each Part 5 / AC 120-92B element vs the operator's existing program. Color-coded with the exact text to add.
- **FRAT 2.0.** Configurable risk model with calibration data (ASRS, NTSB, operator's own log) — operator can see *why* a number is what it is. Pilot completes pre-flight via mobile/SMS in 60 seconds.
- **Voice hazard reports.** Pilot says "logging a hazard" into iPhone or dispatch line, Whisper-class STT transcribes, AI classifies (weather, fatigue, equipment, ATC, planning, company), routes to safety officer queue.
- **Safety performance dashboard.** Auto-trends hazard reports, flights, FRAT scores, training currency. Numbers the FAA actually wants to see at the design-validation visit.
- **Declaration of Compliance bundle.** One-click PDF export: implementation plan + manual + sample evidence + cover letter. Mirrors the FAA Part 5 FAQ structure.
- **Change manager.** Records ops changes (new aircraft, new airport, new pilot) and forces an SRM workflow before the change goes live — the part most operators forget.

## 6. AI angle — what's load-bearing

Three load-bearing AI surfaces:

1. **Doc-RAG manual generation.** The operator's existing manuals + Part 5 + AC 120-92B + operator's OpSpec letters → a customized SMS manual. Without LLMs this is a $15K consultant week. With LLMs it's a few hours and a review pass.
2. **Voice hazard intake.** Pilots will not fill forms. They will leave a 30-second voicemail. Whisper + classifier collapses 15 minutes of compliance friction into 30 seconds. Removes the AI and you're back to a Google Form nobody fills out.
3. **FRAT calibration / safety performance trending.** Embedding-based clustering of an operator's own hazard reports + ASRS public data lets the FRAT and dashboard say genuinely useful things. Without ML this is a static spreadsheet.

Strip out the AI and you have a Notion template. The product disappears.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the FAA's specific May 2027 Part 135 Part 5 deadline. Lateral expansion to Transport Canada SMS (already mature for similar operators), EASA Part-ORO, and CAA UK is plausible Year 2. Each foreign regulator has slightly different evidence requirements but the same operator pain pattern.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tiers (monthly):**
  - **Solo** — single-PIC, 1 aircraft: **$199/mo**
  - **Small fleet** — 2–5 aircraft: **$399/mo**
  - **Charter** — 6–10 aircraft + air-tour LOA: **$699/mo**
  - **One-time Implementation Pack** — gap analysis + manual + Declaration bundle: **$2,500** (drives urgency-priced front-end revenue before May 2027)
- **ACV:** ~$5,000 blended (mix of $2.4K–$8.4K subs + ~$2.5K front-end pack).
- **$1M ARR math:** 200 customers × $5K = $1M. Hit by month 12 if you lock 15–20 logos/month over the deadline cycle.
- **$5M ARR math:** 1,000 customers × $5K. Need ~50% share of the small-operator long tail by mid-2028, plus expansion into voluntary Part 91 departments. Plausible if Declaration submission becomes the de-facto channel.
- **Expansion path:** add Part 145 maintenance SMS module, add a managed-audit upsell ($500/mo), add a flight-data-monitoring connector ($150/mo).

## 9. Go-to-market wedge — first 100 customers

Specific, deadline-shaped:

- **Scrape the FAA Legal Part 135 holders spreadsheet** (public on faa.gov). Filter to 1–10 aircraft. ~1,200 names, addresses, certificate numbers. Cold email the chief pilot/owner with a personalized 2-minute Loom: "Here's your gap analysis for free." Conversion target: 4–6%.
- **NATA Air Charter Summit + ACSF Symposium booth ($5–10K each)**. Both events run small-operator tracks; ACSF members are the bullseye and many openly resent ACSF Tool dues tied to fleet size.
- **Partner with 3–5 small Part 135 consultants** (Avicair, Vyclimb, PAI Consulting, Air Compliance) on a referral split. Their clients are pre-qualified, and the consultants currently have to send people to enterprise tools they hate.
- **Free "May 2027 Countdown" microsite + free gap-analysis tool**. Operator drops in fleet size and OpSpec PDFs, gets a free 5-page gap report, soft-gated on email. Distribute through r/aviation, /r/flying, AOPA forums, Beechtalk, Pilots of America "Single Pilot Part 135" thread.
- **NBAA SMS resource page guest post + webinar co-hosted with NATA**. Both have been promoting the deadline; both want a small-operator-priced answer to recommend.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Whisper STT, Claude/GPT for doc-RAG, Postgres + pgvector, standard SaaS stack, Twilio for SMS hazard intake. Custom: the SMS manual scaffold (one-time domain-expert build with a Part 5 specialist), the FRAT calibration model, and the Declaration of Compliance evidence bundler. A 2-person team (engineer + part-time aviation safety SME) ships v1 in 12–14 weeks. Add 4 weeks for FAA-CMO-friendly packaging.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | SaaS workflow tool. Tool drafts; operator submits. No FAA approval required for the tool. |
| Ethical — no harm / dark patterns | ✅ | Reduces compliance burden; no exploitative pattern. |
| Market exists (evidence above) | ✅ | ~1,850 Part 135 + ~700 air-tour LOA on a deadline; verbatim pilot complaints; incumbent pricing public. |
| 1–5 person team can build this | ✅ | Pair + part-time aviation SME. |
| Launchable with <$50K / ₹40L | ✅ | ~$25–35K: ~$8K SME contract for manual scaffolds, ~$4K booth, ~$10K runway, AI/infra <$1K/mo at v1 scale. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17 | Hard FAA deadline, certificate at risk, $10K-30K consultant alternative. Not hair-on-fire daily but deadline-on-fire. |
| Demand evidence | 15 | 13 | Final rule + ~2,500 affected operators + verbatim pilot/ops complaints + paid incumbents profitable. Strong. |
| Build feasibility | 15 | 12 | RAG + Whisper + workflow CRUD; manual scaffold needs domain SME, FRAT model needs calibration. Medium not Low. |
| Distribution clarity | 15 | 12 | FAA public list, NATA/ACSF/NBAA known channels, consultant referrals, deadline-driven. Conversion math has some uncertainty. |
| Revenue mechanics | 15 | 12 | Pricing benchmarked below SMS Pro Professional and ACSF dues; ACV $5K realistic. $1M ARR math credible; $5M needs share dominance. |
| Time to first revenue | 10 | 8 | Implementation Pack can pre-sell during build; first paying customer 8–10 weeks post-launch realistic. |
| Defensibility | 10 | 7 | Soft moat: aviation-safety domain knowledge, FAA-CMO-friendly packaging, accumulated operator hazard data, FRAT calibration. Copyable but with a head start. |
| **Total** | **100** | **81** | STRONG GO |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Builder needs LLM/voice integration chops + a Part 5–literate aviation safety co-founder or fractional SME (ex-NATA/ACSF/Part 135 chief pilot). Without the SME, the manual scaffolds are wrong and the FAA CMOs reject Declarations.

### Key assumptions to validate

1. **Assumption:** Small Part 135 owners will self-serve through a $399/mo product without a 6-month sales cycle. **How to test:** Cold-email 200 owners with a free gap-analysis Loom, measure reply + booked-demo rate. Target ≥4% reply, ≥1.5% booked demo.
2. **Assumption:** AI-drafted SMS manual will pass an FAA CMO design-validation review. **How to test:** Run two pilot operators through the full draft + submit, get CMO feedback letter. Target: zero rule-citing rejections, only narrative tweaks.
3. **Assumption:** Voice hazard intake actually drives reporting frequency up vs. forms. **How to test:** Two-week A/B with 5 pilot operators (voice vs form). Target ≥2× hazard reports per pilot per week on the voice cohort.
4. **Assumption:** Operators will pay a $2,500 Implementation Pack on top of subscription. **How to test:** Pre-sell 10 packs at $2,500 before code is written. Target: 8 paid in 4 weeks of outreach.

### Risk flags

1. **Regulatory drift.** FAA could push the May 2027 deadline (it has happened in adjacent rules). Demand softens but doesn't disappear; deadline urgency goes from acute to chronic.
2. **Incumbent reaction.** SMS Pro / ACSF can drop a "small operator" tier under us. Mitigate by being faster on AI manual gen and voice, and by going hard on the consultant-referral channel that incumbents can't match.
3. **Domain credibility risk.** A bad CMO interaction on one customer's Declaration package could go viral on Jetcareers / Pilots of America. Mitigate with the SME on retainer for a hands-on review of every Declaration in the first 50 customers.
4. **Adverse selection in voice intake.** Hazard reports on a vendor system are discoverable in litigation. Operators will demand clarity on storage / privilege. Need ASAP-aware design from day one.

## 14. Structured verdict

```
Score:                  81/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical founder + part-time Part 5/Part 135 SME (ex-NATA/ACSF/chief pilot)
Time to revenue:        8–10 weeks (Implementation Pack pre-sales during build)
Capital to launch:      $25–35K
Top 3 assumptions to validate first:
  1. Cold-outreach reply rate to 200 small Part 135 owners ≥4%
  2. Two pilot Declarations clear FAA CMO design validation with no rule-citing rejections
  3. Pre-sell 8 Implementation Packs at $2,500 before code complete
Kill criteria:
  - Abandon if <2% reply rate from 200 cold emails to Part 135 owners
  - Abandon if first two CMO submissions both come back with rule-citing rejections
  - Abandon if FAA pushes May 2027 deadline by >12 months before $250K ARR booked
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull FAA Legal Part 135 spreadsheet, filter to 1–10 aircraft, dedupe to ~1,200 prospects. Pull ~50 air-tour LOA holders.
- **Day 2:** Record a 90-second Loom showing a mocked gap-analysis output. Build a one-page landing with email capture + price tiers + "buy Implementation Pack" Stripe link.
- **Day 3–4:** Cold-email 200 prospects (chief pilots/owners). Personalize with their fleet count from the spreadsheet. Track replies, booked demos, and any Stripe pre-pay clicks.
- **Day 5:** Decide go / no-go.

**Falsifiable outcome:** ≥8 booked demos and ≥3 prepaid Implementation Packs ($7,500 cash) in 5 days = GO. Less than 4 demos and zero prepaid = PASS.
