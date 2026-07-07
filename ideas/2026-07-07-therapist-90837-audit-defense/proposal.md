---
title: "CodeShield — 90837 audit defender for solo therapists"
slug: therapist-90837-audit-defense
date: 2026-07-07
category: HealthTech / US — Solo & Small-Group Private-Practice Therapists (90837 audit-risk & clawback defense)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Scores every therapy note for 90837 audit-survivability before you submit, then builds your defense packet if the clawback letter lands."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Solo-builder, Compliance-driven, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CodeShield — 90837 audit defender for solo therapists

## 1. One-liner

Scores every therapy note for 90837 audit-survivability before you submit, then builds your defense packet if the clawback letter lands.

## 2. Trend signal — why now?

Three things collided in the last 12 months.

**Payers weaponized AI on billing patterns.** Insurers now run AI across large provider populations to flag billing anomalies — and CPT 90837 (53+ minute individual psychotherapy) is the single most-audited psychotherapy code in 2026. The trigger is mechanical: bill 90837 for ~80% of your sessions and you get flagged for suspected upcoding. Under-document the time and you get downcoded to 90834 and clawed back. Therapists are stuck between two failure modes with no tooling in the middle.

**The clawback math is brutal and public.** One Oregon therapist got a $14,000 Medicare recoupment because she billed 90837 for most sessions but her notes only showed 48–50 minutes. Audits use an 80% passing threshold; score below it and the insurer can use "sampling and extrapolation" — review a handful of claims and apply your failure rate to years of prior claims. A single weak note becomes a five-figure demand.

**AI got good enough to read a note against a payer's rubric, and the AMA blessed it.** The AMA's 2026 CPT set is the first to formally recognize AI-augmented coding (AI supports, physician decides). That's the regulatory cover for a tool that reads a clinical note and says "this won't survive an Optum audit — you're missing start/stop time and a medical-necessity link for the extra minutes."

**Provenance:**
  - Signal 1 (Demand): "CPT 90837 gets audited more than any other psychotherapy code"; therapists mixing in 90834 purely to dodge Optum/UHC audit risk; $14K Oregon Medicare recoupment case — https://www.medcloudmd.com/post/cpt-codes-90832-90837-psychotherapy-billing-2026 — 2026-07-07
  - Signal 2 (Feasibility): AMA 2026 CPT set is first to formally recognize AI-augmented coding; "generic documentation tools do not know what a payer needs to see in a mental health record" — https://documentationwizard.com/documenting-mental-health-cpt-code-90837-in-the-age-of-ai/ — 2026-07-07
  - Signal 3 (Economic): Human consultant (Beth Rontal, Documentation Wizard, LICSW) runs a paid national training program teaching therapists to pass audits and "protect income" — proven willingness-to-pay for exactly this anxiety; 80% audit threshold and "sampling and extrapolation" clawback method — https://documentationwizard.com/how-to-survive-a-health-insurance-audit/ — 2026-07-07
  Category: Tech-unlock

## 3. The opportunity

Two camps of tools bracket this problem and both miss the middle.

**AI scribes (Upheal, Blueprint, Mentalyc)** write the note. Upheal even ships a "Compliance Checker" that audits notes against Aetna/Optum standards. But that checker is a *feature welded inside a full EHR* — it only helps therapists willing to rip out SimplePractice and move their entire practice (scheduling, notes, telehealth, billing) onto Upheal. Most won't. And it checks note *quality*, not the two specific things that actually get therapists clawed back: **time-code defensibility** and **billing-pattern ratio across the whole practice**.

**Underpayment/RCM tools (MD Clarity, Rivet, Cevi)** catch payer underpayments — but they're built for physician groups and hospitals, they act *after* the money moves, and no solo LCSW is buying enterprise RCM.

Nobody sits at the pre-submission moment, EHR-agnostic, and tells a solo therapist three things: (1) this specific note won't survive a 90837 audit — here's the missing line; (2) your practice is now billing 90837 for 78% of sessions, which puts you on Optum's flag list — here's your exposure; (3) the audit letter arrived — here's your assembled defense packet. That's the gap. It's a *defense* layer, not another scribe.

## 4. Target market

- **Primary customer:** US solo and micro-group (1–4 clinician) private-practice therapists — LCSW, LMFT, LPC, LMHC, psychologists — who take insurance (Optum/UHC, Aetna, Medicare, BCBS) and bill 90837/90834 heavily. They document in SimplePractice, TherapyNotes, or a scribe, and have no billing staff or in-house compliance person.
- **Why they buy:** In their words — the fear is visceral. "A $14,000 recoupment would end my practice." They already ration 90837 out of pure audit terror (deliberately downcoding their own real 53-minute sessions to 90834 to stay off the radar), which means they're *leaving legitimate money on the table to buy peace of mind*. CodeShield sells them back both the money and the peace of mind: bill the code you earned, with a note that survives.
- **Rough TAM reasoning:** ~half of US outpatient mental-health providers work in private practice; the insured solo/micro-group slice that bills 90837 regularly is comfortably in the low hundreds of thousands of clinicians. At even 3,000–8,000 paying seats this is a $1M–$5M business — no need to win the category.
- **Why now for them:** 2026 is the year payers turned AI loose on billing patterns and 90837 became the most-audited code. The threat moved from "rare bad luck" to "algorithmic and constant." Anxiety is peaking exactly as the tech to answer it matured.

## 5. Product sketch (MVP)

- **Pre-submission audit score.** Paste or sync a note; get a 0–100 "will this survive a 90837 audit?" score with the exact missing elements flagged (start/stop time, medical-necessity link for the extra minutes, non-cloned language).
- **The one-line fix.** For every gap, a specific suggested sentence the clinician can accept/edit — not a generic "add more detail."
- **Cloning detector.** Flags when a note is near-identical to prior sessions (the top clawback trigger after missing time) — cross-session, which single-note tools can't see.
- **Practice ratio watchtower.** Tracks your 90837:90834 mix per payer and warns before you cross the ~80% line that flags Optum/UHC/Medicare — with your dollar exposure if extrapolated.
- **Downcode recovery flag.** Detects when a paid claim came back as 90834 on a 90837 submission and drafts the appeal with the appeal-window clock.
- **Audit-letter mode.** Upload the audit request; it assembles a defense packet — pulls the sampled notes, scores each, highlights weak spots, and drafts the response narrative.
- **EHR-agnostic.** Works alongside SimplePractice/TherapyNotes; no migration. Import via copy-paste, CSV, or note upload on day one.

## 6. AI angle — what's load-bearing

Remove the AI and this is a static checklist PDF — which already exists (that's literally what the Documentation Wizard sells as human training). The product only works because a model can *read an unstructured clinical narrative and judge it against a specific payer's audit rubric*: does the note actually justify 53+ minutes, is the medical-necessity language present and specific (symptom severity → functional impairment → intervention → progress), is it cloned from last week, does the intervention match the time billed. That's semantic judgment on free text against a moving, payer-specific standard. It's exactly the "AI supports, clinician decides" pattern the AMA's 2026 CPT framework now sanctions. No AI, no product.

## 7. Localization angle (if any)

N/A — this is a US-only play by design. The entire moat is fluency in US payer audit behavior (Optum/UHC/Aetna/Medicare rubrics, the 80% threshold, sampling-and-extrapolation, CPT time rules). That specificity is a feature, not a limit — it's what makes the tool defensible against a generic global scribe. No India/LatAm cut; other countries don't have this exact CPT-audit dynamic.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $39/month per clinician (solo), or $29/seat for micro-groups. Positioned as "one avoided downcode pays for a year" — a single clawed-back 90837 is ~$40–60 of underpayment per session, and a real audit is four to five figures.
- **ACV:** ~$400–450/clinician/year.
- **Rough math to $1M ARR:** ~2,300 clinicians × $39/mo × 12 ≈ $1.08M. Achievable within the solo-therapist niche without touching groups.
- **Rough math to $5M ARR:** ~11,000 clinicians, or fewer seats plus a $99/mo "audit-letter response" add-on and a done-for-you appeal-packet upsell (a therapist facing a real audit will pay a lot, once). Mixing per-seat SaaS with pay-per-audit-event gets there faster than seats alone.
- **Expansion path:** solo → micro-group seats → per-audit-event revenue → adjacent high-audit code families (90847 family therapy, testing codes, PT/OT time-based codes which share the identical "prove the minutes" structure).

## 9. Go-to-market wedge — first 100 customers

- **r/therapists and r/psychotherapy** — tens of thousands of members, and audit/clawback panic is a recurring, high-engagement thread genre. Post a genuinely useful free "Is your 90837 note audit-safe? 8-point check" tool (ungated), let it circulate, convert to paid ratio-watchtower + audit-letter mode.
- **Ride the existing anxiety merchants.** Beth Rontal (Documentation Wizard) and similar consultants already have the exact audience paying for this fear. Affiliate/partner: her training teaches the rules, CodeShield enforces them continuously. Their students are pre-qualified, pre-scared, pre-paying buyers.
- **Facebook groups for private-practice therapists** (there are large, active "private practice building" groups) — these are where solo clinicians ask "I got an audit letter, what do I do??" in real time. Be the answer in the thread.
- **Cold outreach to therapists who publicly list Optum/UHC/Aetna** on Psychology Today / directories — the payers most aggressive on 90837 — with a personalized "your payer mix puts you in the most-audited bucket" note.
- **Alma / Headway / Grow Therapy adjacency** — these platforms onboard thousands of insurance-taking therapists; a "audit-defense" integration or referral partnership reaches the exact wallet at the moment they start billing insurance.

## 10. Build complexity — justification

Medium. The stack is off-the-shelf: LLM reading notes against payer-rubric prompts, standard web app, HIPAA-grade hosting + BAA (the real gate — PHI handling must be right from day one, but it's well-trodden, not novel). The genuine work is encoding accurate, current, payer-specific audit rubrics and keeping them updated as payers shift — that's domain research, not R&D. No custom models, no new data collection (payer rules and CPT time rules are documented). A technical founder with a therapist/biller advisor ships a credible v1 in ~10–14 weeks; the HIPAA/BAA setup and rubric accuracy are what push it past the 6-week Low band.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation-support tool; AMA 2026 explicitly sanctions AI-augmented coding with clinician as decider. Not practicing medicine, not filing claims. |
| Ethical — no harm / dark patterns | ✅ | Helps therapists document real sessions accurately and bill the code they earned. Must guardrail hard against enabling upcoding of sessions that didn't happen — the tool defends truthful notes, it does not manufacture minutes. |
| Market exists (evidence above) | ✅ | Most-audited code, public five-figure clawback cases, an existing paid human consultant, and an EHR already shipping a partial feature. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | SaaS + LLM API + HIPAA hosting; no capital-intensive components. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for the audited; five-figure existential risk. Docked because it's episodic panic more than daily pain — many go years without an audit, which softens urgency-to-buy until they're scared. |
| Demand evidence | 15 | 12/15 | Multiple independent signals: most-audited code, public clawback cases, a paying-customer consultant, an EHR shipping a partial version. Strong, but "would pay preventively" is less proven than "would pay after the letter." |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + web stack; HIPAA/BAA and rubric-accuracy are the real work. Solidly Medium, not a 6-week Low. |
| Distribution clarity | 15 | 11/15 | Named subreddits, named consultant-partners, named platforms (Alma/Headway/Grow), directory-scrape by payer mix. Conversion of "preventive" buyers is the uncertainty. |
| Revenue mechanics | 15 | 11/15 | $39/mo is benchmarked and easy to justify; per-audit-event upsell is real. Path to $1M is clean; $5M needs the event-revenue and adjacent-code expansion to fire. |
| Time to first revenue | 10 | 7/10 | Self-serve solo buyers, free-tool wedge → paid in weeks, but HIPAA setup and rubric trust-building slow the very first dollar vs a toy SaaS. |
| Defensibility | 10 | 5/10 | Moat is rubric accuracy + niche brand + workflow habit, plus incumbents' switching inertia. But Upheal (EHR distribution) and any scribe could bolt this on; execution-and-focus moat, not structural. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs an LLM-competent builder and a therapist/behavioral-health biller who has personally survived (or coached) a 90837 audit. Get the rubric wrong and you actively harm customers.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo therapists will pay ~$39/mo *preventively*, not just after an audit letter. **How to test:** Put up a landing page with the free 8-point checker gating a paid "watchtower + fix" tier; measure free→paid conversion across 300 r/therapists visitors. Target ≥4%.
2. **Assumption:** A model can score note audit-survivability accurately enough that therapists trust it. **How to test:** Have a behavioral-health auditor blind-grade 50 real (de-identified) notes; compare CodeShield's pass/fail to the human. Target ≥85% agreement.
3. **Assumption:** The wedge is EHR-agnostic value, i.e. therapists want this *without* switching off SimplePractice. **How to test:** 25 discovery calls — ask directly "would you use a checker that lives outside your EHR, or only if it's built in?" Kill the standalone thesis if most say built-in-only.
4. **Assumption:** Payer-specific rubrics can be kept current with reasonable effort. **How to test:** Track Optum/Aetna/Medicare 90837 guidance changes over one quarter; estimate maintenance load.

### Risk flags

1. **Platform dependency / incumbent bolt-on:** Upheal already ships a compliance checker; SimplePractice or a scribe could add "audit score" as a feature and erase the standalone wedge. Mitigation: go deeper on the audit-letter-response and cross-EHR ratio-watchtower that a single-EHR feature structurally can't match.
2. **Ethics / liability:** The line between "defend a truthful 53-minute note" and "help a therapist upcode" is thin and dangerous. The product must refuse to manufacture justification for sessions that didn't run long. Mis-position this and it's a fraud-enablement tool — reputationally and legally fatal.
3. **Episodic urgency:** Audits are periodic, so preventive-purchase intent may be weaker than the fear implies. Revenue may lean on the after-the-letter event tier, which is lumpier and harder to forecast.
4. **PHI/HIPAA burden:** Handling clinical notes means BAAs and airtight PHI hygiene from customer #1 — non-negotiable overhead a generic SaaS skips.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + behavioral-health biller/auditor advisor
Time to revenue:        8–12 weeks
Capital to launch:      $8–15K (LLM API, HIPAA-grade hosting, BAA, landing/free-tool build)
Top 3 assumptions to validate first:
  1. Preventive willingness-to-pay at $39/mo — free-checker landing page, target ≥4% free→paid
  2. Model scoring accuracy vs human auditor on 50 de-identified notes, target ≥85% agreement
  3. Standalone (EHR-agnostic) demand vs "only if built into my EHR" — 25 discovery calls
Kill criteria:
  - Abandon if free→paid conversion <2% after 500 qualified r/therapists visitors
  - Abandon if blind auditor agreement <70% (the model can't be trusted, and a wrong "pass" actively harms the customer)
  - Abandon if discovery calls show therapists will only adopt an in-EHR feature — then it's a partnership, not a company
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free "Is your 90837 note audit-safe? 8-point check" as a single ungated web tool (paste note → score + flags). Ship the rubric from the sourced payer/CPT rules above.
- **Day 3–4:** Post it in r/therapists and two large private-practice Facebook groups, framed around the $14K Oregon clawback. Instrument every session; put a "want the practice-ratio watchtower + auto-fix?" waitlist CTA behind it.
- **Day 5:** Run 8–10 discovery calls with therapists who used the tool. **Go/no-go:** ≥4% of visitors join the paid waitlist AND ≥6 of 10 callers say they'd pay $39/mo preventively (not just after an audit). Anything less → the value is real but the purchase trigger is the audit letter, not prevention — re-shape around per-event pricing before building.

The result is falsifiable: a hard conversion number and a hard "would-pay-preventively" count, not "therapists seemed to like it."
