---
title: "CaseGate — intake screen for independent dental labs"
slug: dental-lab-case-intake-qc
date: 2026-06-15
category: HealthTech / US Independent Dental Laboratories (3–40 staff)
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Catches missing shade, margin and material specs on every incoming case and drafts the dentist clarification before production starts."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Workflow-automation, SMB, Vision-AI, Compliance-driven]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CaseGate — intake screen for independent dental labs

## 1. One-liner

Catches missing shade, margin and material specs on every incoming case and drafts the dentist clarification before production starts.

## 2. Trend signal — why now?

The dental-lab industry has a documented, expensive, pre-production data-quality problem, and the tech to fix it only became reliable in the last 12 months.

- **82% of remakes come from errors that happen *before* the case enters the lab** — bad scans, incomplete Rxs, unclear margins — not from the bench (evismart, "True Remake Rate", 2026).
- **80% of dentists do not complete the information legally required on the prescription form** (Spear Education, "The Cost of Laboratory Remakes"). Labs then call the office, the case sits 1–3 days, or a tech guesses and it comes back as a remake.
- National remake rate averages ~4% but the *true* rate is closer to 8% once you count adjustments and chairside fixes; one lab cited a **$20K/month loss** to remakes (evismart, 2026).
- **58% of dentists report losing a patient over a poor-fitting prosthetic** (GlobeNewswire survey, Mar 2026) — the downstream cost that makes dentists actually answer a well-framed clarification.
- **Evident shipped "evismart CaseEntry" in June 2025** — auto-parses Rx forms and scans into the lab's LMS. Proof labs will plug AI into the intake step. But CaseEntry does *data entry*, not *completeness/risk QC + the clarification loop*. The gate is still open.

Why the timing is right: vision + document models now read messy intraoral scans, handwritten/photo Rx forms, and PDF lab slips reliably enough to flag "shade missing, margin ambiguous, no antagonist" — a year ago that was a coin flip.

Provenance:
  - Signal 1 (demand): 82% of remakes originate pre-lab; 80% of dentists submit incomplete Rx forms — evismart.com/post/your-true-remake-rate-trr--the-hidden-cost-of-your-fear ; speareducation.com/resources/spear-digest/the-cost-of-laboratory-remakes — observed 2026-06-15
  - Signal 2 (feasibility): Evident "evismart CaseEntry" auto-parses Rx + scans into LMS — einpresswire.com/article/825645103 — launched June 2025, observed 2026-06-15
  - Signal 3 (economic): US dental-lab market $7.96B (2025), 4,216 formal labs (IBISWorld), DSO consolidation squeezing independents on remake cost; $20K/mo remake losses cited — precedenceresearch.com/dental-laboratories-market ; ibisworld.com/united-states/industry/dental-laboratories/4087 — observed 2026-06-15
  Category: Workflow automation

## 3. The opportunity

The remake is the lab's worst unit of work: it eats a tech's hours, the material, the shipping, and often the lab eats the fee too. **82% of that pain is set in motion before a human at the lab even opens the case** — a missing shade, an ambiguous margin, no opposing-arch scan, wrong material box checked.

Labs *know* this. They don't fix it because the fix is a confrontation: telling a paying dentist "your Rx is incomplete, fix it" risks the account. So the case manager either plays phone tag (case sits, turnaround slips) or the tech proceeds on a guess (remake). The industry's own framing is "fear-based" — labs accept substandard submissions to avoid client friction, then blame the bench when it bounces.

CaseGate is the neutral third party. It inspects every inbound case the second it lands, flags exactly what's missing or risky, and **drafts the polite, specific clarification message to the office** ("Hi — case #4471 for Dr. Lee, we're ready to start but need the shade and a scan of the opposing arch to guarantee fit"). The lab clicks send. No confrontation, no guessing, no case sitting for three days.

Incumbent to beat: **Evident CaseEntry** automates pushing case data *into* the LMS. It does not judge whether the case is *complete enough to start*, and it does not own the clarification loop back to the dentist. That judgment + that loop is the wedge — and it's the part that actually kills remakes.

## 4. Target market

- **Primary customer:** Owner or production/QC manager at independent US dental labs, 3–40 employees, ~200–2,000 cases/month. The fragmented mid-market — too big to eyeball every case, too small to have a dedicated case-acceptance team — and the segment getting squeezed hardest by DSO consolidation on price.
- **Why they buy (their words, paraphrased from industry sources):** "82% of my remakes are baked in before the case hits my bench." "I lose $20K a month to remakes." "My case manager spends half her day chasing offices for shades." A remake costs the lab the redo *plus* the dentist's trust; one cited survey says 58% of dentists have walked over a bad-fitting unit.
- **Rough TAM reasoning:** IBISWorld counts 4,216 formal US dental labs; broader databases count ~14,769 incl. micro-studios. Target the ~3,000 independents with 3–40 staff that have enough volume to feel remake pain but no QC team. At $300–600/mo that's a ~$15–25M ARR ceiling in the US independent segment alone, before DSO labs and export to UK/AU.
- **Why now for them:** DSOs are consolidating their lab-side spend and benchmarking turnaround + remake rates ruthlessly. An independent that drops its remake rate from 8% to 5% and turns cases 2 days faster has a survival story. The data-quality fix just became buildable.

## 5. Product sketch (MVP)

- **Intake gate:** every new case (scan file + Rx form, however it arrives — portal, email, LMS) gets auto-checked against a per-dentist, per-restoration-type completeness checklist (shade, margin clarity, material, antagonist scan, due date, contacts, design notes).
- **Risk flags, not diagnoses:** flags "shade field blank," "margin ambiguous in distal," "no opposing-arch scan attached," "material box conflicts with tooth #." It surfaces *missing/ambiguous data* — it does not make a clinical call (this keeps it clear of FDA device territory; see §11).
- **One-click clarification draft:** for every flagged case, a ready-to-send, polite, specific message to the office, addressed to the right contact, listing exactly what's needed. Lab edits/sends in 10 seconds.
- **Case status board:** "ready to start / waiting on office / clarified — go," so the production manager sees at a glance which cases are clean and which are stuck and why.
- **Per-dentist scorecard:** which offices send incomplete cases most often — the data the lab needs for a calm, evidence-based conversation instead of a fearful one.
- **Remake-cause logging:** tag bounced cases by root cause, building the lab's own "true remake rate" dashboard over time.
- **LMS-adjacent, not LMS-replacing:** reads from the lab's existing system / email; never asks the lab to switch its LMS.

## 6. AI angle — what's load-bearing

Remove the AI and this is a paper checklist nobody fills in. The AI is doing three jobs no rules engine can:

1. **Reading messy inputs** — handwritten Rx, photographed lab slips, PDF prescriptions, and intraoral scan files — and extracting which required fields are actually present.
2. **Judging ambiguity** — "is this margin clearly captured?", "is the shade actually specified or just implied?" — vision/document reasoning, not regex.
3. **Drafting the human-grade clarification message** in the lab's voice, addressed correctly, specific to what's missing — the part that defuses the confrontation problem.

The whole product is "AI reads the case and decides if it's safe to start, then writes the email." That is the product.

## 7. Localization angle (if any)

N/A for v1 — this is a US-first play. The remake economics, the LMS landscape (LabStar, Evident, magicTouch), and the dentist-lab Rx convention are US-shaped, and the US is the largest single dental-lab market ($7.96B, 2025). Natural expansion is UK/AU/Canada (same English Rx conventions, same digital-scan workflow) rather than a vernacular localization. India/SEA labs exist but run on lower remake-cost-tolerance and thinner software budgets — not the first wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $300/mo (Solo, <400 cases/mo) → $600/mo (Pro, <1,200 cases/mo) → $1,000+/mo (Multi, higher volume / multi-location). Anchored well below a single $20K/mo remake bill and below a part-time case-acceptance hire.
- **ACV:** ~$5,400 blended (mix landing around $450/mo).
- **Rough math to $1M ARR:** ~185 labs × $450/mo × 12 ≈ $1.0M. That's ~6% of the ~3,000-lab target segment.
- **Rough math to $5M ARR:** ~770 labs (~25% of segment) at a slightly richer blended ACV (~$540/mo) as Multi-location and DSO-lab tiers come in. Plausible without leaving the US.
- **Expansion path:** seats/locations, then *outcome features* — per-dentist scorecards become a paid "lab–client analytics" tier; remake-cause data becomes a benchmark report; eventually a portal the dentist's office fills in, flipping the relationship.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the LMS user bases + lab directories.** NADL (National Association of Dental Laboratories) member list, LabStar/Evident customer footprints, and state dental-lab registries give a clean list of ~3,000 named independent labs with owner names. This is a finite, enumerable market — not a vague TAM.
- **Lead with the lab's own number.** Cold email/Loom: "Want to see your true remake rate? Send us last month's bounced cases and we'll show you how many were incomplete-Rx, not your bench." The hook is their pain, quantified, for free. Expect 5–8% reply on a named, personalized list of 2,000.
- **Free 30-case audit as the demo.** Run their last 30 inbound cases through CaseGate, hand back "9 of these were missing a required field — here are the 9 emails you should have sent." That audit *is* the sales pitch and produces the falsifiable proof.
- **NADL + regional lab association channels.** Vibe Conference / LMT Lab Day exhibit floor and association newsletters — this industry buys at trade shows and trusts peer word-of-mouth. 200–300 owners in a room who all feel this exact pain.
- **Consultant/teacher partners.** Lab-management consultants (the people writing the remake-cost articles) already have the owners' ears — rev-share referral.

## 10. Build complexity — justification

**Medium.** Off-the-shelf vision/document models handle Rx parsing and scan-quality flags; the web app, case board, and email drafting are standard stack. The custom work is (a) a robust per-restoration-type completeness ruleset built with a domain expert, (b) reliable ingestion from messy real-world inputs (email attachments, scan file formats, portal exports), and (c) light, read-only hooks into 2–3 major LMSs. No model training, no novel infra. A technical founder + a dental-lab domain advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Workflow/QC tool. Flags *missing data*, never makes a clinical determination — deliberately stays out of FDA medical-device scope (no diagnosis, no treatment recommendation). |
| Ethical — no harm / dark patterns | ✅ | Reduces patient harm (poor-fitting prosthetics) by catching gaps; no dark patterns. |
| Market exists (evidence above) | ✅ | 82%-pre-lab-error and 80%-incomplete-Rx stats; Evident already monetizing the adjacent intake step. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Inference + hosting + one advisor. Well under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire-adjacent: real money lost weekly, but labs have a (bad) workaround — phone tag — so not a daily 5-alarm fire. |
| Demand evidence | 15 | 12/15 | Strong, multi-source, quantified stats + an incumbent already monetizing the adjacent step. Docked for lack of verbatim "I'd pay for this" quotes (forum sources blocked). |
| Build feasibility | 15 | 10/15 | Vision/doc parsing is solved enough; messy ingestion + per-type rulesets + LMS hooks are real work. ~3–4 months, not 6 weeks. |
| Distribution clarity | 15 | 11/15 | Enumerable ~3,000-lab list, NADL + trade-show channels, free-audit demo. Cold outbound to non-technical owners is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing anchors cleanly below remake cost and below a hire; $1M needs only ~185 labs. ACV is the assumption. |
| Time to first revenue | 10 | 7/10 | Free 30-case audit → paid pilot in 4–8 weeks is realistic, but the build precedes it. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-dentist/per-lab data + LMS integrations. Evident could extend CaseEntry into this — the real competitive risk. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can ship vision/document pipelines AND a dental-lab insider who knows exactly which fields, per restoration type, actually cause remakes.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of a lab's remakes are traceable to *detectable* incomplete/ambiguous Rx + scan data (not subjective bench judgment). **How to test:** run the free 30-case audit on 10 labs; measure what % of their actual bounced cases CaseGate would have flagged.
2. **Assumption:** Lab owners will pay $300–600/mo for prevention (not just measurement). **How to test:** convert ≥3 of the first 10 audited labs to a paid 60-day pilot.
3. **Assumption:** The auto-drafted clarification message actually defuses the confrontation problem — labs send it and dentists respond. **How to test:** track send-rate and office response-rate on flagged cases during pilots.
4. **Assumption:** Read-level integration with the top 2–3 LMSs is feasible without partnership gatekeeping. **How to test:** build email/portal ingestion first; attempt LabStar/Evident hooks in pilot.

### Risk flags

1. **Incumbent extension:** Evident already owns the intake step (CaseEntry) and could bolt on completeness QC. Mitigation: move fast, own the clarification loop + per-dentist analytics they don't.
2. **Platform dependency:** Reliance on LMS data access; an LMS could close its API or copy the feature. Email/portal ingestion as the independent fallback de-risks this.
3. **Regulatory drift:** If the product ever starts making clinical calls (e.g., "this margin is clinically inadequate"), it risks FDA device scope. Stay strictly on *data-presence/ambiguity*, not clinical adequacy.
4. **Sales friction:** Non-technical lab owners, trade-show-paced buying — could stretch CAC and time-to-revenue beyond plan.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/document pipelines) + dental-lab domain advisor
Time to revenue:        8–12 weeks after a ~3–4 month build
Capital to launch:      $15–40K (inference, hosting, one part-time advisor)
Top 3 assumptions to validate first:
  1. % of a lab's real remakes that CaseGate would have caught — free 30-case audit on 10 labs
  2. Willingness to pay $300–600/mo for prevention — convert ≥3 audited labs to paid pilot
  3. Clarification loop works — measure flagged-case send-rate and office response-rate
Kill criteria:
  - Abandon if <40% of audited labs' actual bounced cases are traceable to detectable incomplete data
  - Abandon if <2 of the first 10 audited labs convert to a paid pilot
  - Abandon if Evident/Evident-class incumbent ships a completeness-QC + clarification loop before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the NADL/state-registry list; hand-build a clean list of 150 named independent labs (3–40 staff) with owner emails. Draft the "see your true remake rate" cold email + a 60-second Loom.
- **Day 3–4:** Send to 100 labs. In parallel, manually run a fake "audit" on 2 friendly labs' last 30 cases (eyeball it yourself, no product) to confirm the flag-rate is real and the emails are sendable.
- **Day 5:** Decide on a falsifiable bar — **≥6 replies from 100 cold emails AND ≥2 labs agreeing to a free audit.** Below that, the pain isn't urgent enough to sell into; reshape or pass.

The result is falsifiable: either named lab owners reply and book the audit, or they don't.
