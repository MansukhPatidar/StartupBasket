---
title: "ClawGuard — clawback sentry for NDIS sole traders"
slug: ndis-claim-clawback-check
date: 2026-06-06
category: HealthTech / Australia (NDIS allied-health sole traders)
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Scores each NDIS claim's audit-defensibility before you submit, so the agency can't claw it back months later."
tags:
  vertical: HealthTech
  model: SaaS
  geography: Global
  secondary: [Australia, NDIS, Compliance-driven, Solo-builder, AI-agent, SMB]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# ClawGuard — clawback sentry for NDIS sole traders

## 1. One-liner

Scores each NDIS claim's audit-defensibility before you submit, so the agency can't claw it back months later.

## 2. Trend signal — why now?

Australia's NDIS is in the middle of the biggest integrity crackdown in its history, and the people most exposed are the 257,318 **unregistered providers** — overwhelmingly sole-trader allied-health professionals (OTs, physios, speech pathologists, psychologists, podiatrists) who bill the scheme but don't run a corporate compliance department.

What changed in the last 12 months:

- The NDIA moved from **periodic audits to real-time, data-driven compliance monitoring** and now reviews **20,000 high-risk claims per month**. A ten-month enforcement push cut one category of claims 47% and saved $132M; there are **635 active investigations and $86M in blocked claims** in flight.
- Auditors explicitly check that progress notes reference numbered NDIS plan goals and substantiate every billed line — "if a participant has a goal to develop cooking independence but three months of notes never mention cooking, auditors will question whether that goal is being actively pursued." A note missing participant name, date, time, support activity, response, or next steps is treated as **incomplete** — and an incomplete note can't defend a paid claim.
- Allied-health therapy rates have been **frozen since 2019 and actively cut in July 2025**. Margins are thin and a single clawback "debt" — repaid by the NDIA simply reducing your future payments — can wipe a sole trader's month. As one industry analysis put it: *"Variable revenue against fixed costs is where businesses fail."*

The fear is concrete, current, and financial. Nobody is selling these 257K solo providers a cheap, standalone way to know — before they submit — whether a claim will survive a data-match.

Provenance:
  - Signal 1 (demand): Wisentic survey of UK/AU vets + NDIS compliance press — providers' #1 pain is fragmented, audit-exposed claim admin; Conway Consulting "Existential Threats to Allied Health Providers in 2026" documents frozen/cut rates and clawback exposure — https://www.conwaygroup.com.au/insights/the-existential-threats-facing-allied-health-providers-in-2026 — observed 2026-06-06
  - Signal 2 (feasibility): NDIS auditor progress-note checklist is now public and explicit (named fields, goal-linking), and LLMs can read freetext clinical notes and reason about whether they substantiate a billed line item — https://ndiscompliant.com.au/blog/ndis-progress-notes-audit-requirements — observed 2026-06-06
  - Signal 3 (economic): NDIA reviewing 20,000 claims/month, $86M blocked, 635 investigations, debts recovered by docking future payments; UK/AU care-software market growing double digits and incumbents (Splose, Halaxy, ShiftCare) charge $27–59/practitioner/mo but only validate claims generated inside their own PMS — https://www.ndis.gov.au/governance/debt-management-and-recovery — observed 2026-06-06
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents — Splose ($27/practitioner/mo), Halaxy ($29–59, free-tier for solos), ShiftCare ($9–25/seat, 5-seat minimum), FlowLogic — are **full practice-management systems**. Their pre-claim validation is real but it only works on claims born *inside their own roster and notes engine*. It checks pricing codes and missing fields. It does **not** read your freetext clinical note and tell you, in plain words, *"this line for a 90-minute capacity-building session is not substantiated — your note never states the duration or links to a plan goal, and the NDIA's data-match will flag it."*

Two structural gaps the incumbents leave open:

1. **The sole trader isn't in the walled garden.** A solo OT on Halaxy's free tier, or one who keeps notes in an AI scribe and just emails invoices to plan managers, gets none of the PMS's validation. Switching their whole practice to a paid PMS to get one feature is a non-starter when rates are frozen.
2. **Nobody scores defensibility the way the NDIA does.** Validation = "is this a valid line item?" Defensibility = "if an auditor pulls this claim and reads my note, do I survive?" Those are different questions. The first is plumbing; the second is the thing keeping providers up at night.

ClawGuard is a **drop-in clawback sentry**, not a PMS. It sits beside whatever the provider already uses. The wedge is doing one feared job — *will this claim survive a clawback review?* — better and cheaper than any all-in-one platform bothers to.

## 4. Target market

- **Primary customer:** Sole-trader and 1–3 person allied-health providers billing NDIS — occupational therapists, physiotherapists, speech pathologists, psychologists, podiatrists — who are unregistered or registered only for therapeutic supports (group 0128). Solo or tiny, no compliance staff, AU$80k–250k of NDIS billings/year.
- **Why they buy:** In their world a clawback isn't a line item — it's the NDIA silently reducing next month's payments. They live in fear of a post-payment review of notes they wrote at 9pm between clients. They want to press one button and hear "you're safe" or "fix this first."
- **Rough TAM reasoning:** 257,318 unregistered NDIS providers; allied-health solo therapists are a large slice. Even a conservative serviceable slice of ~40,000 solo/micro allied-health providers at AU$39/mo is a >AU$18M ARR ceiling — comfortably inside the $1–5M target with single-digit-percent penetration.
- **Why now for them:** Real-time data-matching went live, rates got cut, and the crackdown is in the news every month of 2026. The pain moved from background to foreground in under a year.

## 5. Product sketch (MVP)

- Paste or upload an invoice line (service code, date, duration, $) plus the matching progress note — PDF, image, or text.
- Get a **Clawback Risk Score** (Green / Amber / Red) per claim line in seconds.
- Plain-English flags: "Note doesn't state session duration," "No NDIS goal referenced," "Service code 15_xxx requires evidence of [X] — missing," "Non-face-to-face time billed without a record of what was done."
- One-click **"fix-it" prompts** — the exact sentence(s) the note needs to add to substantiate the line (provider edits and re-checks; ClawGuard never invents clinical facts).
- Always-current rules engine keyed to the live **NDIS Pricing Arrangements and Price Limits** and the published auditor checklist, updated each release.
- Batch mode: drop a folder of a fortnight's notes+invoices, get a triage list of which claims to fix before the run.
- Private by design: provider's call whether to retain anything; export a clean "defensibility pack" per participant for the 7-year record.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core job is reading an unstructured, idiosyncratic freetext clinical note and reasoning about whether it **substantiates a specific billed line** under NDIS rules — duration stated, support activity described, participant response recorded, goal linked, non-face-to-face justified. That's exactly the judgement an NDIA reviewer makes, and exactly what rule-based PMS validators *can't* do because it's semantic, not structural. An LLM doing note-to-claim substantiation matching is the engine; the rules table and the UI are scaffolding around it.

## 7. Localization angle (if any)

This **is** a localization play — Australia-specific by construction. The moat is NDIS regulatory knowledge: the exact pricing arrangements, the 36 registration groups, the auditor checklist fields, the data-match patterns. A generic "claims checker" is useless here; the value is being natively fluent in NDIS. The same engine pattern ports later to adjacent audit-heavy schemes (UK personal-health budgets, US Medicaid waiver providers, Aussie Aged Care) — but v1 wins by being unapologetically NDIS-native, not global.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** AU$39/mo solo tier (unlimited checks), AU$89/mo for 2–3 practitioner micro-clinics. One-off "audit-ready pack" export as a paid add-on.
- **ACV:** ~AU$470/year solo.
- **Rough math to $1M ARR:** ~1,800 solo subscribers × AU$470 ≈ AU$850k, plus a few hundred micro-clinics → AU$1M. That's <0.7% of the unregistered-provider pool.
- **Rough math to $5M ARR:** ~9,000 paying providers (≈3.5% of unregistered providers) or a smaller base plus a plan-manager B2B tier (see expansion). Achievable without leaving the niche.
- **Expansion path:** (a) per-participant "defensibility pack" exports, (b) a **plan-manager / bookkeeper tier** — the firms that process invoices for hundreds of providers will pay per-seat to screen claims before they pay them, since they carry clawback exposure too, (c) adjacent schemes once the AU engine is proven.

## 9. Go-to-market wedge — first 100 customers

- **Facebook groups are where this niche actually lives.** "NDIS Providers Australia," "NDIS Sole Traders & Small Providers," allied-health-specific groups have tens of thousands of members posting daily about audits and clawbacks. Show up with a free "Clawback Risk Self-Check" — paste one note, get a score. The post *is* the demo. Convert to paid for unlimited checks.
- **Cold-target the unregistered allied-health directory.** Provider directories and the NDIS register list practitioners with public emails; scrape the solo allied-health segment, send a 60-second Loom: "here's a real anonymised note that got clawed back, and what ClawGuard would have flagged." Expect low single-digit reply, high intent.
- **Partner with NDIS bookkeepers / plan managers** — a handful of them touch thousands of providers' invoices. One referral deal puts ClawGuard in front of a provider's whole client base at the exact moment of pain (invoice submission).
- **Ride the compliance-content wave.** Conway, ClinicComply, NDISCompliant et al. publish constant audit-fear content. Guest the "here's the tool" angle; their audience is pre-qualified and scared.

## 10. Build complexity — justification

Low. It's off-the-shelf LLM document understanding plus a maintained rules table keyed to the NDIS pricing arrangements and auditor checklist — both public. No PMS to build, no rostering, no payments rails, no integrations required for v1 (upload/paste in, score out). A technical solo founder with an NDIS domain advisor ships a credible v1 in 6–8 weeks. The ongoing work is **rules maintenance** every NDIS release — that's the moat, not the code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A self-check / advisory tool; provider stays responsible for claims. Not legal/financial advice — positioned as a checker. |
| Ethical — no harm / dark patterns | ✅ | Helps providers bill *accurately*; never invents clinical facts. Pro-integrity, aligned with the NDIA's own goals. |
| Market exists (evidence above) | ✅ | 257K providers, 20K reviews/mo, active crackdown, paid PMS incumbents. |
| 1–5 person team can build this | ✅ | Solo + domain advisor, 6–8 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Mostly founder time + LLM API costs. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Clawbacks are financially existential for thin-margin sole traders and the crackdown is live. Not 17+ because many still procrastinate compliance until burned. |
| Demand evidence | 15 | 12/15 | Strong sourced macro signals (20K reviews/mo, $86M blocked, frozen rates) and paid incumbents — but I couldn't surface clean verbatim sole-trader quotes, so not 13+. |
| Build feasibility | 15 | 13/15 | Off-the-shelf LLM + public rules. Real work is note-to-claim reasoning accuracy and rules upkeep. |
| Distribution clarity | 15 | 11/15 | Named, active FB communities + scrapeable directory + plan-manager partners. Conversion math still unproven, so not 13+. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked below incumbents; $1M needs <0.7% penetration. Solo churn risk and low ACV cap the score. |
| Time to first revenue | 10 | 8/10 | Free self-check → paid in the same session; revenue plausible in 4–8 weeks of launch. |
| Defensibility | 10 | 4/10 | Moat is NDIS rules fluency + accumulated note→outcome data, but a PMS could bolt this on. Execution/focus lead, not a hard moat. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** Solo allied-health providers will trust and pay AU$39/mo for a pre-submission risk score. **How to test:** Free self-check in 3 FB groups; measure paste-rate → paywall-conversion on 200 trials.
2. **Assumption:** The LLM can match notes to billed lines accurately enough that "Green" is genuinely safe (false-negatives are the killer). **How to test:** Score 100 real anonymised claim+note pairs against an NDIS compliance consultant's manual verdict; require ≥90% agreement and near-zero false "Green."
3. **Assumption:** A standalone checker beats "just use my PMS's validation." **How to test:** 20 interviews with solo providers on Halaxy-free / scribe-only setups — do they currently get any defensibility check? (Expect: no.)
4. **Assumption:** Plan managers will pay to screen inbound invoices. **How to test:** Pitch 5 plan-management firms a per-seat screening tier; one paid pilot = signal.

### Risk flags

1. **Regulatory/liability risk:** If a "Green" claim still gets clawed back, the provider may blame the tool. Must be positioned as a checker, not a guarantee, with clear language — and tuned to over-flag rather than under-flag.
2. **Platform dependency:** NDIA could publish its own pre-submission checker, or PMS incumbents could bundle semantic defensibility. Speed and sole-trader focus are the defence.
3. **Market timing / policy churn:** NDIS rules and even the unregistered-provider model are shifting (mandatory registration creeping in from July 2026 for some groups). Rules upkeep is non-optional and the addressable base could move.
4. **Low ACV / churn:** Solo subscribers churn when cash is tight — the very condition the product addresses. Annual plans and the plan-manager tier de-risk this.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + NDIS compliance advisor (ex-auditor or allied-health practice owner)
Time to revenue:        4–8 weeks from launch
Capital to launch:      AU$8–15K (≈ ₹4–8L) — founder time + LLM API + rules buildout
Top 3 assumptions to validate first:
  1. Note→claim defensibility accuracy ≥90% vs expert, near-zero false "Green" — bench on 100 real pairs
  2. Free self-check converts to AU$39/mo in FB communities — 200-trial funnel
  3. Solo providers on non-PMS setups have no current defensibility check — 20 interviews
Kill criteria:
  - Abandon if false "Green" rate exceeds ~3% on the validation set (the product would create false confidence and liability)
  - Abandon if <2% of 300 free self-check users convert to paid within 30 days
  - Abandon if the NDIA ships a free official pre-submission defensibility checker before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Assemble 100 real, anonymised NDIS claim-line + progress-note pairs (via an allied-health advisor / consultant). Have an ex-auditor label each Green/Amber/Red.
- **Day 3–4:** Stand up a bare LLM prompt + the public NDIS pricing/checklist rules; run all 100 pairs; measure agreement with the expert labels, and especially the false-"Green" rate.
- **Day 5:** Post a free "paste-one-note" self-check in two NDIS Facebook groups; count paste-rate and "would you pay AU$39/mo" responses. **Decide go/no-go on:** ≥90% expert agreement AND near-zero false-Green AND ≥30 of 100 self-check users saying they'd pay.

Falsifiable: if the model green-lights claims an auditor would claw back, or providers won't pay, it dies on Day 5 — not after a build.
