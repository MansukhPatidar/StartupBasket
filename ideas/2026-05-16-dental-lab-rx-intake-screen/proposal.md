---
title: "RxCatch — incomplete-prescription intake screen for dental labs"
slug: dental-lab-rx-intake-screen
date: 2026-05-16
category: HealthTech / US-SMB
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Flags every incomplete, illegible or scan-mismatched dental Rx the moment it lands — before the case enters production."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Workflow-automation, AI-agent, Vision-AI, Dental-lab]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 13
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RxCatch — incomplete-prescription intake screen for dental labs

## 1. One-liner

Flags every incomplete, illegible or scan-mismatched dental Rx the moment it lands — before the case enters production.

## 2. Trend signal — why now?

This is not a hunch. The dental-lab remake problem is quantified to death in the trade press, and the cause is upstream of the lab — exactly where software can intervene.

- **82% of remakes originate before the case enters the lab** — bad scans, incomplete Rxs, unclear margins. Of early remakes, **42% correlate with missing or unclear Rx data**, 28% with uncalibrated shade photos shot under non-dental lighting, 19% with late design feedback ([Spear Education / VCAD analysis](https://vcaddental.com/dental-case-study-reducing-remakes), 2025).
- **80% of dentists do not complete the information legally required on the Rx form** — and most of that missing data is what the lab needs to make the case ([Keating Dental Lab](http://www.keatingdentallab.com/news/streamline-dental-lab-efficiency-by-getting-the-prescription-right-the-first-time/), 2025).
- **8–15% of a dental lab's annual revenue disappears into remakes** — $24K–$45K/yr for a lab billing $300K. **Up to 65% of remakes trace to communication failures, not technical errors** ([DDS Lab](https://blog.ddslab.com/the-hidden-costs-of-remakes-and-how-to-avoid-them), 2026).
- Incumbent Rx portals (EasyRx ~$68/mo, LabStar) **move** the prescription digitally but don't **validate** it. One vendor concedes labs are only now "moving toward" automated intake QC with scan analysis and Rx-to-scan matching ([eviSmart](https://evismart.com/post/the-remake-that-shouldnt-have-shipped), 2026) — i.e. nobody ships it yet.
- Vision + LLM cross-checking of a photo'd paper Rx, a shade image, and an STL scan is now a cheap API call, not a research project. The unlock is 12 months old.

This is a workflow-automation play sitting on a tech-unlock, in a market that bleeds a measurable five figures per shop per year.

Provenance:
  - Signal 1 (demand): 80% of dentists submit incomplete Rx; 42% of early remakes = missing/unclear Rx data — http://www.keatingdentallab.com/news/streamline-dental-lab-efficiency-by-getting-the-prescription-right-the-first-time/ , https://vcaddental.com/dental-case-study-reducing-remakes — 2025
  - Signal 2 (economic): 8–15% of lab annual revenue lost to remakes ($24K–$45K for a $300K lab); 65% trace to communication failure — https://blog.ddslab.com/the-hidden-costs-of-remakes-and-how-to-avoid-them — 2026
  - Signal 3 (feasibility): incumbents (EasyRx, LabStar) only move the Rx, don't validate it; vendors admit automated intake QC is still aspirational — https://evismart.com/post/the-remake-that-shouldnt-have-shipped — 2026
  Category: Workflow automation

## 3. The opportunity

Every restoration that fails because of a bad Rx costs the lab twice: the direct remake ($50–$150 in materials/labor/shipping) and the relationship damage with a dentist who now blames the lab for *their own* incomplete form. The lab eats it because "the customer is the dentist" — they almost never push the cost back.

The incumbents (EasyRx, LabStar, Open Dental's lab module) are **transport pipes**. They digitize the Rx and route it. None of them stop a case at the door and say *"this Rx is missing the margin design, the shade photo is shot under operatory light not daylight, and the tooth number on the form doesn't match the prep in the scan — fix before we start."* That single intervention kills the 42% of early remakes that come from Rx data, and a chunk of the 28% from bad shade photos.

The 10× isn't a prettier portal. It's that RxCatch is the only thing in the workflow whose entire job is to *refuse a bad case before money is spent on it*. It's a quality gate, not a CRM.

## 4. Target market

- **Primary customer:** Owner-operators of small-to-mid US commercial dental labs — 3 to 25 technicians, $300K–$3M annual billing, doing crown & bridge / implant / removable work for 20–150 dentist accounts.
- **Why they buy:** In their words (paraphrased from trade-press practitioner reporting, not invented quotes): "A week doesn't disappear all at once — it goes in five-minute clarification calls, missing attachments, conflicting shades and seat dates nobody shared." They feel the bleed every Friday when they tally redos.
- **Rough TAM reasoning:** ~7,000 commercial dental labs in the US (NADL figures historically ~7–8K). Target the ~5,000 small/mid independents (the big national labs build their own tooling). At $300–$600/mo that's a $20M–$35M serviceable revenue ceiling in the US alone — comfortably a sub-$5M ARR bootstrap with room above.
- **Why now for them:** Remakes are being openly benchmarked in the trade press (weekly KPI dashboards, "True Remake Rate"), so owners now have a number they're ashamed of and a vendor narrative pushing intake QC — but no tool actually does it.

## 5. Product sketch (MVP)

- **Drop-in Rx inbox.** Dentist offices keep emailing/uploading exactly as they do today (PDF, photo of paper slip, portal export). RxCatch sits on the lab's intake email/folder — zero behavior change for the dentist.
- **Completeness check.** Extracts tooth number(s), restoration type, material, shade system + value, margin design, occlusal scheme, due date, contact. Flags every required-but-missing field against a per-lab template.
- **Legibility + contradiction check.** Reads handwritten/scanned slips; flags illegible fields and internal contradictions (e.g. "implant crown" but no implant system specified; tooth #8 on form, #9 prepped in scan).
- **Shade-photo sanity check.** Flags shade images shot under non-dental lighting / no shade tab in frame / blown-out white balance — the 28% remake bucket.
- **Scan-vs-Rx match.** When an STL/PLY accompanies the case, checks the prepped tooth and arch against what the Rx claims.
- **One-click clarification.** Generates a pre-filled "we need 3 things before we start your case" message back to the dentist office, with the case held in a "waiting on doctor" state and an aging clock.
- **Remake-cause ledger.** Every caught issue is logged by dentist account, so the lab owner can show a chronically sloppy account exactly why their cases are slow.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is vision + reasoning over messy, unstructured, multi-format inputs: a phone photo of a coffee-stained handwritten slip, a PDF export from one of 15 practice-management systems, a shade JPEG, and a binary STL — and a judgement about whether, together, they are sufficient to make the restoration without guessing. That's not an OCR form-filler; it's cross-modal consistency reasoning that was genuinely impractical 18 months ago. The "is this shade photo usable" and "does this scan match this Rx" calls are pure model leverage.

## 7. Localization angle (if any)

N/A — this is a US-first play. The wedge is the US commercial-lab cost structure (chairtime $500–600/hr, lab-eats-the-remake norm, NADL-style independent market) and US-format Rx slips/PMS exports. International labs have the same problem but smaller per-remake economics and more fragmented Rx conventions; expand later, don't lead there.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo (≤8 techs) / $599/mo (mid) / $999/mo (multi-site), flat per-lab — priced as a fraction of one month's remake bleed, not per-seat. A lab losing $30K/yr to remakes recovers the subscription if it prevents ~2 remakes a month.
- **ACV:** ~$5,000 blended.
- **Rough math to $1M ARR:** ~200 labs at $5K ACV. ~4% of the 5,000-lab target.
- **Rough math to $5M ARR:** ~1,000 labs (20% of target) — or hold ~500 labs and add a per-case overage / scanner-vendor referral / dentist-side "submit-it-right" companion. The dentist-side upsell (offices pay to never get a "your Rx is incomplete" callback) is the real expansion lever.
- **Expansion path:** flat fee → multi-site tiers → dentist-side companion seat → benchmark data product (anonymized remake-cause analytics labs use to renegotiate with bad accounts).

## 9. Go-to-market wedge — first 100 customers

- **NADL + state lab associations.** The National Association of Dental Laboratories and ~30 state affiliates have member directories and newsletters. Sponsor/speak on "the 82% of remakes that never had to happen." Warm, concentrated, ~5,000-lab universe.
- **Trade press the owners already read.** LMT Magazine, Inside Dental Technology, eviSmart/Associated/DDS Lab blogs are *already publishing the remake-cost narrative* — co-author a "screen your intake" piece and ride existing demand.
- **Free Remake-Cause Audit.** Lab forwards 50 recent rejected/redone cases; RxCatch returns a one-page "here's which dentists and which missing fields cost you $X this quarter." That report sells itself — it's a number the owner already fears, now itemized. Target 30 audits → 15 paid in the first quarter.
- **Scanner / PMS channel.** iTero, Medit, 3Shape resellers and lab-mgmt vendors (EasyRx, LabStar) want lower remakes too — integration/referral partnerships once there's traction.
- **Direct list build.** NADL directory + Google Maps scrape of "dental laboratory" → ~5,000 owners, named, emailable with the audit hook.

## 10. Build complexity — justification

**Medium.** The hard parts are off-the-shelf: document/vision models for Rx extraction and shade-photo QC, standard web stack, email-intake plumbing. The genuinely custom work is (a) a robust per-lab required-fields template engine and (b) reliable STL-vs-Rx matching (mesh tooth/arch identification) — non-trivial but not research-grade. A 2–3 person team ships a credible v1 in ~3–4 months; the scan-match feature can be a fast-follow so the completeness/legibility/shade gate ships first.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | B2B QC tool; reads Rx the lab already receives. No PHI beyond what the lab lawfully holds; BAA-able. |
| Ethical — no harm / dark patterns | ✅ | Reduces remakes and miscommunication; net patient benefit. |
| Market exists (evidence above) | ✅ | Quantified remake bleed, incumbent gap, trade-press demand. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Mostly API + dev time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt weekly, costs 8–15% of revenue, owners ashamed of the number. Not quite hair-on-fire daily — labs have lived with it for decades. |
| Demand evidence | 15 | 13/15 | Multiple independent quantified sources, paid incumbents exist, trade press actively pushing the narrative. Skeptic nods. |
| Build feasibility | 15 | 11/15 | Vision/extraction off-the-shelf; STL-vs-Rx matching and per-lab template engine are the real work. ~3–4 months. |
| Distribution clarity | 15 | 12/15 | Named, concentrated channel (NADL + ~5K-lab list + a self-selling audit). Conversion still to prove. |
| Revenue mechanics | 15 | 13/15 | Flat fee benchmarked against a known $24K–45K bleed; ROI math is one prevented remake/week. |
| Time to first revenue | 10 | 7/10 | Audit→paid funnel can close in weeks, but the gate must work well enough to trust before a lab pays. 4–8 weeks post-launch. |
| Defensibility | 10 | 5/10 | Copyable feature; moat is accumulating per-lab/per-dentist remake-cause data + workflow lock-in once it sits in intake. Execution + head start. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs solid vision/LLM engineering and a dental-lab insider (or design partner) to nail the required-fields templates and earn trust with owners.

### Key assumptions to validate (3–5)

1. **Assumption:** Labs will pay $300–$999/mo flat for an intake gate (vs. seeing it as the dentist's problem). **How to test:** 20 owner interviews with the Remake-Cause Audit report in hand; measure willingness-to-pay against their own itemized bleed.
2. **Assumption:** The model catches enough real Rx defects (high recall) without crying wolf (low false-positive) to be trusted at intake. **How to test:** Run 500 historical real cases from 3 design-partner labs; measure caught-defect recall and false-flag rate vs. their actual remake log.
3. **Assumption:** Dentist offices tolerate a "fix 3 things before we start" gate without taking their business to a less strict lab. **How to test:** Pilot with 2 labs for 8 weeks; track account churn and clarification-cycle time vs. baseline.
4. **Assumption:** STL-vs-Rx matching is reliable enough to ship (or deferrable). **How to test:** Benchmark mesh tooth/arch identification on 200 mixed scans before committing it to v1 scope.

### Risk flags

1. **Trust/false-positive risk:** A gate that wrongly holds good cases will get switched off in a week. Recall/precision must be proven before billing.
2. **Buyer-incentive mismatch:** The lab pays but the dentist causes the defect — if labs fear annoying dentists more than they hate remakes, adoption stalls. The dentist-side companion mitigates but adds scope.
3. **Platform dependency:** Incumbents (EasyRx, LabStar, Open Dental) could bolt on "intake QC" as a checkbox. Defensibility is thin — speed and the data ledger are the only edge.
4. **Market timing:** Industry is *just* starting to talk about automated intake QC — slightly early; education cost is real but the trade press is doing it for you.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (vision/LLM) + dental-lab domain advisor or design-partner lab
Time to revenue:        4–8 weeks post-launch (audit → paid funnel)
Capital to launch:      $15–30K (API + 3–4 months of 2–3 person build)
Top 3 assumptions to validate first:
  1. Owners pay flat $300–999/mo against itemized bleed — 20 interviews with Remake-Cause Audit in hand
  2. Defect recall high / false-positive low — backtest 500 real historical cases from 3 design-partner labs
  3. Dentist accounts tolerate the gate — 8-week 2-lab pilot tracking account churn + cycle time
Kill criteria:
  - Abandon if <20% of 30 audited labs convert to paid within one quarter
  - Abandon if false-positive (good case wrongly held) rate stays >5% after model tuning on real data
  - Abandon if an incumbent ships a comparable, trusted intake-QC gate bundled free before v1 traction
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull NADL directory + scrape ~300 small-lab owners. Recruit 3 design-partner labs willing to share 50+ historical rejected/redone cases each.
- **Day 3–4:** Run those real cases through a thin extraction+rules+vision prototype. Produce one Remake-Cause Audit per lab: "these dentists, these missing fields, cost you $X last quarter."
- **Day 5:** Walk each owner through their own audit and ask for a signed LOI / pre-pay at $399/mo.

Falsifiable outcome: **≥2 of 3 design-partner labs sign an LOI or pre-pay after seeing their own itemized bleed.** If zero do — even with the number in front of them — the lab does not perceive this as their cost to own, and the idea is a PASS.
