---
title: PulsePad — iPad anesthesia cockpit for independent US vet clinics
slug: pulsepad-vet-anesthesia
date: 2026-05-09
category: HealthTech SaaS / US Independent Small-Animal Vet Clinics (AVImark + Cornerstone shops)
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: iPad cockpit that reads any anesthesia monitor with the camera and ends handwritten charts for independent US vet clinics.
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Voice-first, Compliance-driven, SMB, PIMS-agnostic, Workflow-automation]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# PulsePad — iPad anesthesia cockpit that OCRs any vet monitor and ends paper charts

## 1. One-liner

iPad cockpit that reads any anesthesia monitor with the camera and ends handwritten charts for independent US vet clinics.

## 2. Trend signal — why now?

Three things broke loose in the last 12 months and they all point at the same gap:

- **ACVAA published new monitoring guidelines in July 2025** — the first major revision since 2009. The update expands what must be documented every surgery: hemodynamic, respiratory, thermoregulatory, neuromuscular blockade, anesthetic depth, plus a new pre-anesthesia equipment checklist. More boxes to fill on the same paper sheet a vet tech is filling between checking pulses on a sleeping Labrador.
- **State boards are citing the combo, not just one or the other.** The California Veterinary Medical Board filed accusations against multiple licensees in late 2025 and early 2026 — Naiditch (Dec 2025), Byerly (Dec 2025), Van Volkenburgh (Feb 2026), Ross — each pairing "Anesthesia Violation" with "Recordkeeping Violation" in the same complaint. The legal exposure is real and getting named.
- **The PIMS giants moved, but they bundled.** Instinct rolled out "Ax Mode" inside Instinct EMR. ezyVet has Vet Radar. Midmark sells an Anesthetic Record Interface tied to its own monitors. Digitail raised a $23M Series B in 2025. Vetcove raised $30M. Money is flowing — but every solution requires either swapping out the PIMS or buying a specific monitor brand. The 50%+ of US small-animal clinics still on AVImark/Cornerstone (Covetrus + IDEXX legacy server-based) have no clean path.

Layer in a vet tech market that's 15% short on credentialed staff (NAVTA), with 14,300 openings and 7,500 grads sitting the licensing exam each year. Nobody has spare hands to scribble vitals every 5 minutes.

Provenance:
  - Signal 1 (Demand/Regulatory): ACVAA Small Animal Anesthesia and Sedation Monitoring Guidelines 2025 — published July 2025, first revision since 2009 — https://acvaa.org/updated-acvaa-small-animal-anesthesia-monitoring-guidelines-are-available/ — observed 2026-05-09
  - Signal 2 (Demand/Enforcement): California VMB 2025–2026 disciplinary actions pairing "Anesthesia Violation" with "Recordkeeping Violation" (Naiditch, Byerly, Van Volkenburgh, Ross) — https://www.vmb.ca.gov/consumers/2026_disciplinary.shtml — observed 2026-05-09
  - Signal 3 (Economic/Feasibility): Digitail closes $23M Series B led by Five Elms Capital; Vetcove closes $30M; Instinct ships "Ax Mode" inside Instinct EMR — https://digitail.com/blog/digitail-raises-23m-series-b-led-by-five-elms-capital/ + https://instinct.vet/blog/introducing-instincts-digital-anesthesia-mode-for-veterinary-hospitals/ — observed 2026-05-09
  Category: Workflow automation

## 3. The opportunity

Every existing digital anesthesia record is bundled into something the customer doesn't want to swap. Instinct Ax Mode = upgrade your PIMS. Vet Radar = move to ezyVet. Midmark Advisor = buy Midmark's $4–8K monitor. The independent two-vet practice on AVImark since 2008, running a SurgiVet or Cardell monitor, gets nothing useful — they keep using the paper sheet and roll the dice on the next AAHA audit or board complaint.

PulsePad attacks the gap directly: a standalone iPad app that reads any anesthesia monitor by pointing the iPad's rear camera at the screen, transcribes voice notes from the vet tech, generates an ACVAA-formatted PDF chart at the end of the case, and emails it / drops it into the existing PIMS as an attachment. No PIMS migration. No new monitor. No 30-page implementation. $149/mo per clinic, swipe a card, used the same afternoon.

The 10× claim isn't "AI-powered" — it's "you don't have to rip and replace anything." The clinic stays on AVImark. The monitor stays on the cart. The paper sheet goes in the bin.

## 4. Target market

- **Primary customer:** Independent US small-animal veterinary clinics, 1–4 DVMs, AAHA-accredited or pursuing accreditation, running a legacy PIMS (AVImark, Cornerstone, IntraVet, ImproMed) and an off-the-shelf anesthesia monitor (SurgiVet Advisor, Cardell, Mindray, BioLight, Midmark, Edan). Owner-operator economics, $1.5M–$6M annual revenue.
- **Why they buy:** AAHA surprise audits. State board complaints citing "anesthesia + recordkeeping." A vet tech who quit because she's tired of writing in 5-min increments while watching a capnography trace. ACVAA 2025 added more boxes to fill. The malpractice insurer asking, in a renewal questionnaire, whether anesthesia records are typed.
- **Rough TAM reasoning:** ~32,000 small-animal clinics in the US (AVMA). ~3,000 AAHA-accredited; another ~4,500 affiliated. Independent (non-corporate-rolled-up) is roughly 60% — call it 18,000–20,000 clinics. Realistic serviceable target in years 1–3: the 5,000–7,000 AAHA-touching independents who already self-identify as records-conscious.
- **Why now for them:** The ACVAA guideline update in July 2025 forced anesthesia CE refreshers across the industry. Tech vacancy is at 15%. The cost of replacing a vet tech who walked is $20K. A $149/mo tool that gives a tech back 30–45 minutes per surgery day pays for itself in the first week.

## 5. Product sketch (MVP)

- **Camera-OCR vital capture.** Prop the iPad up next to the anesthesia monitor. Camera reads HR, RR, SpO2, EtCO2, NIBP, MAP, Temp, agent % off the screen. Logs every 30–60 seconds.
- **Voice-first event log.** Tech taps once and speaks: "0.3 mL ketamine IV, 14:32." Whisper transcribes, app puts it in the drug column with timestamp. No typing while gloved.
- **ACVAA 2025 checklist mode.** Pre-anesthesia equipment checklist enforced before "start case." Personnel name + role required.
- **Auto-generated PDF chart.** Case ends → PDF with timeline graph, drug log, monitoring narrative, and the AAHA / ACVAA-required fields, signed by the assigned tech and DVM.
- **PIMS drop.** Email the PDF, push to a watched folder, or drag-drop attach to the AVImark/Cornerstone patient record. No API integration project.
- **Multi-OR.** One iPad per induction table. Cloud roster of cases for the practice manager.
- **Audit binder.** One click to pull the last 90 / 180 / 365 days of charts as a single PDF for AAHA audits.
- **Fallback typing.** Tech can correct OCR by tapping the value. Never blocked by an unreadable screen.

## 6. AI angle — what's load-bearing

Two AI capabilities are doing the actual work, and both became reliably cheap in the last 12 months:

1. **Multimodal vision reading the monitor screen.** A GPT-4o-class model reads HR/RR/SpO2/EtCO2/NIBP/agent % off arbitrary monitor brands and screen layouts. Pre-2024 this was unreliable and per-call expensive. In 2025–2026 it's pennies per case and accurate enough that human spot-check beats handwriting.
2. **Whisper voice transcription tuned for vet drug names.** Tech says "1.2 of dexmedetomidine IM" while gloved; transcript classifies dose, route, drug, time. This is the part that kills the paper sheet — gloves + scribbling is the moment the chart turns into chicken scratch.

Strip the AI out and you have… a digital paper form. Nobody wants that. The AI is the reason the workflow collapses from 5-minute manual interrupts to 2-second voice or zero touch.

## 7. Localization angle (if any)

N/A — this is a US-first play. The US has the unique combination of (a) AAHA accreditation as a paid voluntary standard, (b) state veterinary medical boards with active enforcement, (c) AVImark + Cornerstone legacy entrenchment, and (d) a vet tech credentialing model that creates the documentation burden. UK and Canada are obvious year-2 expansions; AVA / RCVS guidelines parallel ACVAA. Skip them until the US wedge is proven.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo per clinic, single OR. $99/mo per additional OR/induction table. Annual prepay 2 months free.
- **ACV:** Realistic blended $1,800–$2,400/yr per clinic.
- **Rough math to $1M ARR:** 500 clinics × $1,800 = $900K. 500 clinics × $2,000 ACV = $1M. Achievable in 18 months with one founder doing AAHA-list outreach and one part-time SDR.
- **Rough math to $5M ARR:** ~2,000 clinics at $2,500 ACV. Requires expansion: voice-AI surgical safety checklist, post-op recovery chart, pain-score logging, anesthesia drug ordering integration with Vetcove / Patterson. Each adds $30–60/mo per clinic.
- **Expansion path:** Multi-OR upsells, multi-location practices (corporate rollups), then add-on modules (recovery monitoring, controlled-drug log integration, AAHA audit-binder export-as-a-service).

## 9. Go-to-market wedge — first 100 customers

Concrete. The first 100 are surgically targeted:

1. **AAHA-accredited member directory scrape, focused on independents.** Public list, 3,000 hospitals. Filter out corporate rollups (Mars, NVA, Thrive, BluePearl, VCA) using the chain-name dictionary. ~1,200–1,500 independents. Personalized cold email + Loom: "Saw your AAHA listing, you're due for re-accreditation in 14 months — here's a 2-minute video of how PulsePad makes the anesthesia binder a non-event." Expect 4–6% reply, 1.5–2% close = 25–30 customers.
2. **VTS (Anesthesia/Analgesia) credentialed techs as champions.** AVTAA membership is small (~250 active VTS-Anesthesia). DM the public list on LinkedIn + AVTAA member directory. Free Pro for any VTS-Anesthesia who pilots in their clinic and writes a 200-word review. Each champion drags 2–4 clinics behind them. = 20–40 customers.
3. **VETgirl + dvm360 sponsored content.** Both publish CE on the 2025 ACVAA guidelines. Sponsor a single piece tying "the new ACVAA guidelines" to "your anesthesia chart" with a 30-day pilot CTA. VETgirl's email list is ~70K. Realistic 0.05% direct conversion = 35 trials, 30% close = 10 customers.
4. **VMX 2026 + AVMA Convention 2026 + VHMA 2026 booth crawl.** Skip the booth, walk the floor with an iPad demo. Anesthesia track sessions are where the buyers are. 200–300 in-person demos across the three cons = 30–40 trials, 15–20 closes.
5. **State board complaint / disciplinary action subscribers.** Subscribe to CA, TX, FL, NY VMB enforcement RSS. When a clinic gets cited for "recordkeeping," send a templated note to the practice owner: "We can't fix the past, but here's how the next chart writes itself." Sympathetic close — small numbers, but high signal. 5–10 customers.

Total path: 90–120 paying clinics in 9 months. No paid ads, no SEO play, no enterprise quota. ~$60–80K spend.

## 10. Build complexity — justification

Medium. Three off-the-shelf APIs (OpenAI multimodal vision, Whisper, a PDF lib), one iPad app, one thin web admin for practice managers. The non-trivial piece is the **monitor library**: each major model (SurgiVet Advisor, Cardell 9405, Mindray uMEC, BioLight, Edan iM, Midmark Cardell-9402) has a different screen layout. Build a per-model template / few-shot example library starting with the top 5 covering ~70% of US clinics. 3–4 months for v1 with one full-stack engineer + a vet tech advisor on retainer. v1 ships covering 5 monitor models + AAHA PDF; long tail extended monitor-by-monitor as customers report theirs.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Records tool, not a medical device. No FDA pathway needed because nothing is alarming, dosing, or controlling the patient. PulsePad observes; it does not treat. |
| Ethical — no harm / dark patterns | ✅ | Augments documentation; tech still actively monitors patient. Fallback to manual entry always available. |
| Market exists (evidence above) | ✅ | ACVAA guidelines + state board citations + funded competitors all confirm. |
| 1–5 person team can build this | ✅ | Solo engineer + part-time vet tech advisor for 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | iPad-based, off-the-shelf APIs, no hardware to ship. ~$25–35K to MVP and 5 pilot clinics. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Felt every surgery day. State boards naming the violation. AAHA audit risk. ACVAA 2025 added documentation burden. Not on-fire daily but acute when it bites. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: ACVAA July 2025 publication; 4+ named CA disciplinary actions 2025–2026; Digitail $23M, Vetcove $30M; Instinct + ezyVet + Midmark + VetMo all already shipping competing-but-bundled products. |
| Build feasibility | 15 | 11/15 | Solid: vision + Whisper + PDF + iPad. Friction: per-monitor screen-template library. 3–4 months v1, but the monitor long-tail will be ongoing. |
| Distribution clarity | 15 | 12/15 | AAHA list + AVTAA list + VMX/VHMA shows + state-board enforcement RSS = a named channel with conversion math. Niche is small enough to walk every door. |
| Revenue mechanics | 15 | 12/15 | $149/mo benchmark sane against $300–1,000/mo PIMS spend. 500 clinics → $1M ARR is grindable, not aspirational. Multi-OR upsell is real. |
| Time to first revenue | 10 | 8/10 | Pilot in 6 weeks, paying in 8–10 weeks. Pre-sale to 2–3 friendly clinics is realistic before code is done. |
| Defensibility | 10 | 6/10 | Soft moat: monitor-OCR template library compounds with every clinic; AAHA-format PDF templates; workflow lock-in once techs trained. PIMS giants could clone but won't because they prefer to bundle into their own PIMS upgrade. Execution-led 9-month head start is the real moat. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — Need a builder comfortable with multimodal vision prompting + iPad/iOS, plus a vet tech (ideally VTS-Anesthesia) on payroll or co-founder-equity from week 1. Without the domain advisor, the chart format is wrong, the monitor library starts in the wrong order, and the pitch lands flat.

### Key assumptions to validate (3–5)

1. **Assumption:** Multimodal vision can read 5 mainstream monitor brands with ≥97% per-field accuracy on every-30s captures under realistic OR lighting. **How to test:** Borrow or buy used SurgiVet Advisor + Cardell + Mindray uMEC. Run 50 simulated cases each, log accuracy by field. Kill if median accuracy <95% even after few-shot calibration per model.
2. **Assumption:** Independent AAHA clinics on AVImark/Cornerstone will pay $149/mo without an integration. **How to test:** 30 cold pricing-included pitches to AAHA-list practice owners. ≥5 verbal commits to a paid 30-day pilot before any code shipped. Kill if <3.
3. **Assumption:** Vet techs will adopt the camera + voice workflow over paper after one full surgery day, not abandon back to clipboard. **How to test:** 4 in-clinic shadow sessions with a vet tech using a Wizard-of-Oz prototype (researcher does OCR by hand). Net Promoter ≥8 from the tech, plus willingness to use again unprompted. Kill if techs say "honestly the paper is faster."
4. **Assumption:** The ACVAA-format PDF satisfies the AAHA accreditation evaluator. **How to test:** Pay an ex-AAHA evaluator (consulting market exists) for a 2-hour audit of the generated chart format. Kill if material gaps require rebuild.

### Risk flags

1. **Platform dependency:** OpenAI / Anthropic vision API pricing or reliability shifts. Mitigation: build for multi-provider; benchmark Gemini 2.5 + Claude Opus 4.7 + GPT-4o quarterly.
2. **Regulatory drift:** If FDA or USDA reclassifies any animal-monitoring software as a "device," the legal posture changes. Mitigation: stay strictly observational, never alarm or interpret, no "the patient is light" predictions. Keep the boundary visible.
3. **PIMS-giant clone:** Instinct or Digitail extends their anesthesia mode to support arbitrary monitors. Mitigation: lean into PIMS-agnostic positioning + AAHA audit-binder feature; deepen monitor library.
4. **Tech adoption inertia:** Vet techs are famously skeptical of "just one more tablet." Mitigation: make the camera literally the only required interaction the first hour; voice second; no setup wizards.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Solo technical founder (iOS + multimodal-vision experience) plus a credentialed vet tech (VTS-Anesthesia preferred) as co-founder or weekly advisor
Time to revenue:        8–10 weeks from build start; 4–6 weeks if pre-sold
Capital to launch:      $25–35K to MVP + 5 pilot clinics
Top 3 assumptions to validate first:
  1. Vision-OCR ≥95% per-field accuracy on top-5 monitor brands — bench test against borrowed/used hardware
  2. ≥5 of 30 AAHA-list cold-pitched practice owners commit to a paid 30-day pilot
  3. Vet techs prefer the workflow over paper after one full day — Wizard-of-Oz prototype in 4 clinics
Kill criteria:
  - Abandon if monitor-OCR accuracy <95% after 2 months of prompt + few-shot tuning
  - Abandon if <3 of 30 cold AAHA pitches verbally commit to a paid pilot
  - Abandon if Instinct or Digitail ships PIMS-agnostic standalone anesthesia mode at <$199/mo before MVP launch
```

## 15. Next step — 1-week validation sprint

If I had one week to prove this is real before building:

- **Day 1:** Pull AAHA-accredited member list. Filter to ~600 likely independents. Draft and send 30 highly personalized cold emails to practice owners, each citing their specific clinic and a known anesthesia-related dvm360/AAHA topic. Target ≥3 reply meetings booked by end of day 5.
- **Day 2:** Buy or borrow access to a SurgiVet Advisor + a Cardell. Set up an iPad with Claude / GPT-4o vision and run 100 captures of varying lighting, distance, and screen content. Score per-field accuracy.
- **Day 3:** Wizard-of-Oz prototype — Figma + an iPad propped up. Visit 1 friendly clinic (an existing connection) and shadow 2 surgeries doing the OCR by hand. Watch the tech's reaction.
- **Day 4:** Schedule and run 4–6 of the booked AAHA-clinic Zoom calls. Pitch with pricing. Ask for verbal pilot commits.
- **Day 5:** Tally:
  - **GO** if (a) vision accuracy ≥95% on 2 monitors + (b) ≥3 verbal pilot commits + (c) the in-clinic tech says "I'd use this tomorrow."
  - **NO-GO** if any of those three fails. The cluster doesn't survive without all three.

The validation is falsifiable on three concrete numbers. No vibes.
