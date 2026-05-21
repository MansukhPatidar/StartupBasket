---
title: "ReAuthRx — reauth packet engine for PT & OT clinics"
slug: pt-reauth-packet-engine
date: 2026-05-21
category: HealthTech / US Outpatient PT, OT & SLP Clinics
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "ReAuthRx assembles the payer-ready medical-necessity packet that wins a therapy reauthorization before visit 7 turns into free care."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, AI-agent, SMB, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ReAuthRx — reauthorization packet engine for outpatient therapy clinics

## 1. One-liner

ReAuthRx assembles the payer-ready medical-necessity packet that wins a therapy reauthorization before visit 7 turns into free care.

## 2. Trend signal — why now?

Outpatient physical, occupational, and speech therapy is in the middle of a prior-authorization squeeze, and 2026 made it worse — not better — for therapy specifically.

- UnitedHealthcare's Medicare Advantage rule (effective Jan 2025, fully enforced through 2026) auto-covers the **first 6 visits within 8 weeks** without clinical review — but anything past that, or any plan of care longer than 8 weeks, gets pulled into a medical-necessity review run through Optum. The review hinges on whether your notes prove the patient is still *improving*, not just *maintaining*. ([UHCprovider PA expansion PDF](https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/pa-requirements/medicare/UHC-Medicare-Therapies-Prior-Auth-Expansion-Outpatient-Therapy.pdf))
- "Incomplete clinical documentation" is the **leading cause** of UHC therapy PA denials, per practice-management coverage of the 2026 rules. ([SPRY](https://www.sprypt.com/blog/united-healthcares-prior-authorization-form-pdf))
- PT staff spend **~14.6 hours/week** on prior authorizations; ~$85K of support cost per physician-equivalent. The "not medically necessary" reason accounts for 45–50% of PA denials, and 61% of physicians say AI-driven payer review produces *more* denials than human review. ([Adonis](https://www.adonis.io/resources/prior-authorization-challenges-facing-physical-therapy-practices))
- The crucial detail: a denial for missing/insufficient authorization on visit 8 — when only visits 1–7 were approved — is **non-recoverable in most cases**. The clinic already delivered the care. It just doesn't get paid. ([Cloud RCM 2026 chiro/PT billing guide](https://www.cloudrcmsolutions.com/2026-chiropractic-pt-billing-guide-cpt-icd-10-at-modifier-medicare-updates-denial-prevention/))

That last point is the whole business. This isn't a "denied claim you can appeal" — it's revenue that evaporates if the reauth packet is weak. AI scribes (SPRY, HelloNote, DeepCura, OneChart) now write the *visit note*. None of them assemble and pre-screen the *reauthorization request* against a specific payer's medical-necessity bar.

Provenance:
  - Signal 1 (demand): Incomplete documentation is the leading cause of UHC therapy PA denials; PT staff spend ~14.6 hrs/week on prior auth — https://www.adonis.io/resources/prior-authorization-challenges-facing-physical-therapy-practices — 2026-05
  - Signal 2 (feasibility): Cheap LLMs reliably read payer medical-necessity criteria and structure defensible therapy documentation; AI scribes for PT shipped at scale in 2026 — https://www.sprypt.com/blog/best-emr-physical-therapy-2025-buyers-guide — 2026-05
  - Signal 3 (economic): UHC 2026 rule forces medical-necessity review on any therapy plan of care beyond 6 visits / 8 weeks; visits past authorization are non-recoverable — https://www.uhcprovider.com/content/dam/provider/docs/public/prior-auth/pa-requirements/medicare/UHC-Medicare-Therapies-Prior-Auth-Expansion-Outpatient-Therapy.pdf — 2026-05
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbent isn't a competitor — it's the **front-desk coordinator with a spreadsheet**. In a 1–4 therapist clinic, one person tracks every patient's visit count against their authorization, watches for the patient who's about to cross the threshold, digs through SOAP notes to find objective measures, retypes them into the payer portal, and hopes. When they miss one, the clinic treats a patient for free.

AI scribes solved the wrong half. They make the *note* faster to write. But the note is written for the clinician, not the payer. The payer wants: objective functional deltas (ROM in degrees, MMT grades, standardized outcome scores like the LEFS or DASH trending across visits), explicit skilled-care justification, and a clear statement of why the patient is still improving toward a functional goal a restorative aide could not achieve. A generic "patient tolerated treatment well" note is technically complete and still gets the reauth denied.

ReAuthRx does the half nobody does: it watches the authorization runway, and **before the threshold visit**, it pulls the clinic's own SOAP notes, extracts the objective measures, structures them into the medical-necessity narrative the specific payer (UHC/Optum, Aetna, Cigna, Humana, the big Medicaid MCOs) actually scores against, flags the gaps the therapist still needs to fill in plain English, and outputs a portal-ready packet. A 45-minute scavenger hunt becomes a 5-minute review-and-sign.

## 4. Target market

- **Primary customer:** Owner or office manager of an independent outpatient PT/OT/SLP clinic in the US — 1 to 6 treating therapists, single or 2–3 locations. The person who feels this is the front-desk lead or billing coordinator; the person who *pays* is the owner-therapist.
- **Why they buy:** In their words — "We found out in February we'd been treating a UHC patient for six visits past her auth. That's $700 we're never getting back, and it was nobody's *job* to catch it." The pain is recurring (every clinic has a handful of these per month), specific (a known threshold moment), and directly costs cash.
- **Rough TAM reasoning:** ~38,000 outpatient PT clinics in the US plus a large OT/SLP overlap. Conservatively 25,000 independent small clinics are addressable. At $149/mo that's a ~$45M ceiling on the core product — comfortably a sub-$5M ARR business at low-single-digit penetration, and the multi-payer/RCM expansion lifts the ceiling.
- **Why now for them:** The 6-visit/8-week UHC rule went into hard enforcement through 2026; other commercial payers are copying the milestone-review structure. The threshold moment used to be rare. Now it's routine, and clinics are losing money they can measure.

## 5. Product sketch (MVP)

- **Authorization runway tracker** — import each patient's plan, authorized visit count, and auth expiry; dashboard surfaces every patient within 2 visits of a threshold, color-coded by urgency.
- **Reauth packet builder** — pulls the patient's existing SOAP notes (from Jane, WebPT, Prompt, or a PDF upload), extracts objective measures, and drafts the medical-necessity narrative.
- **Payer-specific medical-necessity check** — scores the draft against the chosen payer's published criteria (UHC/Optum first), and lists in plain English exactly what's missing ("no MMT grade recorded since visit 3", "no standardized outcome measure — add LEFS or quote prior").
- **Improvement-vs-maintenance flag** — the single highest-value check: tells the therapist whether the current notes read as "skilled, progressing care" or "maintenance" *before* it goes to the payer.
- **Portal-ready export** — outputs the packet in the structure the payer's portal expects, copy-paste clean, plus a PDF for the chart.
- **Denied-reauth log** — captures every denial reason so the clinic learns which notes patterns lose, and so ReAuthRx tightens its checks.
- **Threshold alerts** — email/SMS to the coordinator when a patient crosses into the danger zone.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet with reminders — which is exactly the failing status quo. The AI does three things a rules engine can't:

1. **Reads unstructured SOAP notes** and pulls out the objective functional measures buried in free-text prose written by ten different therapists with ten different styles.
2. **Judges "improvement vs. maintenance"** — a genuinely fuzzy, narrative call that is precisely what the payer's reviewer (often itself an automated system) makes. ReAuthRx has to think like that reviewer.
3. **Rewrites the narrative** into the medical-necessity framing the payer scores against, while staying truthful to the clinical facts in the note.

The runway tracker is plumbing. The packet judgment is the product, and it is fundamentally an LLM reasoning task.

## 7. Localization angle (if any)

N/A — this is a US-only play. The wedge *is* a US regulatory quirk (Medicare/commercial payer prior-authorization for outpatient therapy and the milestone-review structure). There is no India/SEA/LatAm version because the payer system that creates the pain doesn't exist there. Geography here is a gate, not a lens — and it gates this firmly to the US.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo per clinic (flat, up to 4 therapists), $99/mo solo tier, $299/mo multi-location (5+ therapists). Add-on: $79/mo for OT/SLP packet modules. Annual billing 2 months free.
- **ACV:** ~$1,900 blended.
- **Rough math to $1M ARR:** ~525 clinics × $149/mo × 12 ≈ $940K, plus add-ons gets past $1M. ~2% penetration of the addressable 25,000.
- **Rough math to $5M ARR:** ~2,200 clinics on blended ~$1,900 ACV, or fewer clinics if the product expands into full reauth-and-appeal workflow at a higher tier. Requires multi-payer coverage (not just UHC) and at least one EMR integration partnership to reach clinics at scale.
- **Expansion path:** start with PT, add OT and SLP modules; move upstream from reauth into initial-PA assembly; move downstream into the appeal packet for the reauths that still get denied. Each step is a real upsell to a customer already feeling the same pain.

## 9. Go-to-market wedge — first 100 customers

- **State PT association vendor lists & CEU webinars.** Run a free 45-minute CEU-adjacent webinar — "How to never treat a UHC patient for free again" — co-promoted with 3–4 state chapter newsletters (CA, TX, FL, NY). PT clinic owners attend CEU content religiously; expect 150–250 registrants per session, 8–12% to a paid trial.
- **Cold outreach to clinics that publicly complain.** Scrape r/physicaltherapy, the APTA community forums, and PT Facebook groups for owners venting about UHC/Optum denials. Send a 90-second Loom showing their exact denial scenario caught two visits early. Target 600 contacts, 5% trial conversion = 30 trials.
- **Billing-company channel.** Independent PT billing services (PTBillingServices, park-style RCM shops) already manage denials for dozens of small clinics each. Offer them a per-clinic referral fee or white-label tier — one billing partner can deliver 15–40 clinics.
- **WebPT/Jane integration directory.** Once one EMR integration ships, list in their app marketplace. Clinics actively browse these for billing add-ons; it's intent-qualified traffic.

First 100 is realistically 2 webinars + cold outreach + one billing partner inside ~4 months.

## 10. Build complexity — justification

Medium. The runway tracker, payer-criteria checks, and packet export are standard web-app work. The real work is two things: (1) ingesting SOAP notes reliably from messy PDFs and a couple of EMR APIs/exports, and (2) tuning the improvement-vs-maintenance judgment against real denied/approved reauth examples until it's trustworthy. That tuning needs domain input from a practicing PT and a corpus of real packets — gettable, but it's why this isn't a 6-week build. A technical founder plus a PT advisor ships a credible v1 in ~14–18 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A documentation-assist tool; the therapist signs and owns the clinical content. HIPAA BAA required — standard. |
| Ethical — no harm / dark patterns | ✅ | Helps clinics get paid for care actually delivered; must not coach inflating medical necessity beyond the true notes. |
| Market exists (evidence above) | ✅ | UHC rule + documented denial volume + 14.6 hrs/week burden. |
| 1–5 person team can build this | ✅ | Technical founder + PT advisor; standard stack plus LLM APIs. |
| Launchable with <$50K / ₹40L | ✅ | Build cost is time; inference and BAA-covered infra are modest. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Non-recoverable revenue loss at a known recurring moment. Hair-on-fire for the owner, but felt monthly, not daily. |
| Demand evidence | 15 | 12/15 | Strong: documented denial volume, quantified hours, hard 2026 rule. Short of 13+ because direct "I'd pay for this" voice is thinner than the structural evidence. |
| Build feasibility | 15 | 11/15 | Standard app, but EMR ingestion + judgment tuning push it to ~14–18 weeks. |
| Distribution clarity | 15 | 11/15 | Named channels (state chapters, billing companies, complaint scraping) with plausible math; conversion still unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing fits existing $99–500/mo EMR spend; ACV and customer count credible. Add-on/upsell path clear. |
| Time to first revenue | 10 | 7/10 | First paying clinic within 6–8 weeks of launch via trial-to-paid; not pre-sellable instantly given the build curve. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating payer-criteria knowledge + denied-reauth corpus + EMR integrations + clinic workflow lock-in. Copyable, but a focused head start compounds. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs an LLM-comfortable builder and a practicing PT (or PT billing veteran) advisor who knows what a payer reviewer actually scores.

### Key assumptions to validate (3–5)

1. **Assumption:** Small PT clinics will pay $149/mo for a tool that only covers the reauth moment, not full RCM. **How to test:** 25 owner interviews + a pre-sell landing page with a real checkout; target ≥8% of webinar registrants starting a paid trial.
2. **Assumption:** ReAuthRx's improvement-vs-maintenance judgment matches payer outcomes well enough to be trusted. **How to test:** run 100 historical reauths (known approved/denied) through it; require ≥80% agreement with the actual outcome before launch.
3. **Assumption:** SOAP-note ingestion works across messy real-world PDFs and at least one EMR export. **How to test:** collect 50 real de-identified note sets from 5 clinics; measure objective-measure extraction accuracy.
4. **Assumption:** UHC and peers keep the milestone-review model in place through the build window. **How to test:** monitor UHC's 2026 PA-reduction rollout monthly — outpatient therapy must stay in scope.

### Risk flags

1. **Regulatory risk:** UnitedHealthcare announced it will cut prior authorization for ~30% of services by end of 2026. If outpatient therapy ends up in the cut, the core pain shrinks. Mitigation: therapy has consistently been *named as staying* in PA, and Medicaid MCOs and other commercial payers still require it — but this is the single biggest threat and must be watched monthly.
2. **Platform dependency:** Reauth submission lives inside payer portals and EMRs ReAuthRx doesn't control. A portal redesign or EMR API change can break the export. Mitigation: PDF/copy-paste fallback always available; don't over-index on any one integration early.
3. **Trust / liability:** If the tool's narrative ever reads as coaching clinics to overstate medical necessity, that's a fraud-exposure problem for the clinic and a reputation problem for ReAuthRx. The product must stay strictly truthful to the underlying notes and frame itself as "surface what's already there," never "make the case stronger than the facts."

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder fluent in LLM apps, paired with a practicing PT or PT-billing veteran as domain advisor
Time to revenue:        First paying clinic 6–8 weeks post-launch; launch ~14–18 weeks from start
Capital to launch:      $15–30K (mostly founder time; inference + HIPAA-covered infra modest)
Top 3 assumptions to validate first:
  1. Willingness to pay $149/mo for a reauth-only tool — 25 owner interviews + pre-sell checkout, target 8% trial start
  2. Judgment accuracy — 100 historical reauths backtested, require 80% agreement with real approve/deny outcome
  3. UHC keeps outpatient therapy inside prior-auth through 2026 — monthly monitoring of the PA-reduction rollout
Kill criteria:
  - Abandon if <10% of 25 interviewed clinic owners will commit to a paid trial
  - Abandon if backtested judgment accuracy stays below 75% after two tuning passes
  - Abandon if UHC + a second major payer drop outpatient therapy from prior authorization before launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page site — "Stop treating UHC patients for free." Pricing visible, "start trial" checkout wired (Stripe, no product behind it yet). Write the cold Loom script.
- **Day 3–4:** Book and run 12–15 calls with independent PT clinic owners (pull from state chapter directories and r/physicaltherapy). Ask: how many reauth-related write-offs last quarter, who owns the threshold-tracking today, what they'd pay. Get 10 real de-identified reauth examples (5 approved, 5 denied) for backtesting.
- **Day 5:** Decide. **Go** if ≥4 of 15 owners verbally commit to a paid trial *and* at least 2 hit the checkout, *and* the 10 collected reauths show a clear, consistent gap between approved and denied documentation patterns. **No-go** if owners shrug at the threshold problem or already feel their EMR/scribe handles it.

The falsifiable result: real checkout starts from real clinic owners inside one week, plus a documentation-pattern gap concrete enough to train against. If neither shows up, the pain is real but not buyable — kill it.
