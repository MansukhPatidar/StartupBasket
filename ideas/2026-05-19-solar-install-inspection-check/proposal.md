---
title: "RoofProof — install-inspection sentry for residential solar crews"
slug: solar-install-inspection-check
date: 2026-05-19
category: CleanTech / US Residential & Light-C&I Solar Installers
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Walk the finished array with your phone; we flag every label, conduit and grounding miss before the crew leaves the roof."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [Mobile-first, AI-agent, Computer-vision, Offline-capable, SMB, Field-ops]
axes:
  problem: 16
  demand: 13
  build: 10
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RoofProof — install-inspection sentry for residential solar crews

## 1. One-liner

Walk the finished array with your phone; we flag every label, conduit and grounding miss before the crew leaves the roof.

## 2. Trend signal — why now?

Three things landed in the same window:

- **The failure rate is quantified and ugly.** NREL's own SolarAPP+ review puts first-time AHJ inspection failure at **~1 in 4 residential installs** (23–26%). NEC 690.8 violations alone are 30–40% of rejections; wire-management deficiencies show on **38% of PV projects nationwide**. Each resubmission cycle runs **$200–$600** in AHJ fees + internal rework labor, adds **1–4 weeks**, and every week of delay raises cancellation risk ~10%.
- **The expensive part is the truck roll, not the fix.** Industry guidance is explicit: a defect found on-site is a minutes-to-fix event; the *same* defect found after the crew leaves becomes a second truck roll, a reschedule, and a customer-friction event. Labels, conduit ID, disconnect placement, grounding — almost all of it is "documentation and formatting," fixable on the spot if anyone catches it before the ladder comes down.
- **The enabling tech got cheap enough to put on a roof.** 2026 brought ~10× cheaper multimodal/vision inference, sub-10ms edge latency, and models that run on-device — which matters because roofs have terrible cell signal and you can't stream 4K to a cloud API mid-install. Meanwhile 2023 NEC rapid-shutdown rules + tightened 2025–26 PE-stamp/label enforcement *raised* the stakes of getting it wrong.

Solar management software is a $1.28B market in 2026 growing 12.9%; solar O&M is $17B. Money is clearly moving — but it's flowing to design tools and utility-scale predictive O&M, not to the small installer's inspection-day problem.

Provenance:
  - Signal 1 (demand): ~1-in-4 residential installs fail first AHJ inspection; NEC 690.8 = 30–40% of rejections; $200–600 + 1–4 wk per resubmission — energyscaperenewables.com / anernstore.com — 2026-05-19
  - Signal 2 (feasibility): ~10× cheaper edge/multimodal vision inference in 2026, sub-10ms, on-device, offline-capable — nvidia.com blog / siliconflow.com — 2026-05-19
  - Signal 3 (economic): Solar management software $1.28B 2026 @ 12.9% CAGR; O&M $17B; AI-O&M platforms drawing VC + incumbent launches (First Solar) — statsmarketresearch.com / businessresearchinsights.com — 2026-05-19
  - Supporting (customer voice): Verbatim installer failures — liquid-tight conduit forced to metal, missing V/I label, disconnect >2 ft from main panel — diysolarforum.com — 2026-05-19
  Category: Tech-unlock

## 3. The opportunity

There's a clear seam in the solar tool stack:

- **Pre-build, paper:** Aurora, Scanifly, OpenSolar, PVComplete (design), PermitFlow/GreenLancer (permit-as-a-service), and the recently-cataloged plan-set redline tools — all of these check the *drawing* before submit.
- **Post-build, physical, on the roof, before the crew leaves:** nobody.

That last box is where the 1-in-4 failure actually happens. The plan set can be perfect and the crew still hangs a low conductor, forgets the rapid-shutdown label, mounts the disconnect 10 feet from the main panel, or uses the wrong conduit. The inspector catches it days later; the crew is on another job; it's a truck roll.

Incumbents don't own this because (a) drone/AI O&M players (First Solar) aim at utility-scale fleets, not a 12-panel residential rooftop, and (b) doing it well needs cheap offline multimodal vision *plus* the AHJ-specific rule set encoded — both of which only became practical in the last ~12 months. RoofProof is a focused wedge into the most painful, most preventable moment in the residential solar workflow: the 30 minutes before the ladder comes down.

## 4. Target market

- **Primary customer:** Owner/ops-manager at small-to-mid US residential & light-C&I solar installers (5–50 installs/month) with no dedicated in-house QA inspector. Buyer is the person who eats the truck-roll cost; user is the crew lead on the roof.
- **Why they buy (their words, paraphrased from forums):** "Failed inspection because the disconnect wasn't within 2 feet of the main panel — had to send a crew back." "Inspector wanted a label stating current and voltage; we didn't have it; reschedule." "Used liquid-tight everywhere, all of it had to be replaced with metal." These are not engineering disputes — they're catchable misses that nobody checked on-site.
- **Rough TAM reasoning:** ~10,000+ active US residential solar installers; even the ~3,000–5,000 doing real volume without a QA function is a serviceable base. At a few hundred dollars/month, a low-thousands customer count clears $5M ARR — comfortably inside the bootstrap zone, too small to interest the utility-scale O&M VCs.
- **Why now for them:** Margins compressed post-ITC-step-down; a $400 truck roll + a delayed job + cancellation risk is now the difference between a profitable and a break-even install. Tightened 2025–26 label/PE enforcement means more redlines, not fewer.

## 5. Product sketch (MVP)

- Crew lead opens the job on a phone, walks the array/equipment, films a guided sequence (array, conduit runs, combiner, disconnect, main panel, labels, grounding points).
- AHJ-aware rule check: pick the jurisdiction + NEC cycle; RoofProof checks the captured install against that AHJ's known hot buttons (rapid-shutdown labels, conduit ID spacing, disconnect proximity, grounding/bonding, wire management, directory placard).
- On-roof punch list: pass / fix-now / verify, item by item, with the specific NEC/label citation and a reference photo of "what right looks like."
- Works offline on the roof; syncs the report + annotated photos when signal returns.
- One-tap inspection packet: a clean, dated, photo-backed self-inspection record the office and the homeowner can see, and that doubles as as-built evidence.
- Re-check loop: crew fixes the flagged item, re-films just that item, gets a green check before leaving.
- Office dashboard: which jobs are inspection-ready, which have open punch items, recurring failure patterns by crew and by AHJ.

## 6. AI angle — what's load-bearing

Remove the AI and this is a paper checklist — which already exists and demonstrably isn't enough (1-in-4 still fail). The load-bearing work is multimodal vision interpreting messy real-world rooftop photos/video: *is that label present and legible, is that the right conduit type, is the disconnect within the required distance, is the grounding conductor run with the source conductors, is that bend radius out of spec.* That's perception + spatial judgment on uncontrolled imagery, not form-filling. The 2026 cost/latency/on-device unlock is exactly what makes running this on a no-signal roof economically viable instead of a research demo.

## 7. Localization angle (if any)

N/A — this is a US-first play and that's the point. The wedge *is* the locality: NEC cycles, AHJ-specific quirks, and US utility/permit norms. The "localization" here is per-AHJ rule encoding, not country/language. International solar markets have different codes and weaker per-jurisdiction inspection friction; expanding there later would be a separate rule library, not a translation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Per-crew or per-installer SaaS, ~$199–$399/mo for small installers (1–3 crews), scaling to ~$799–$1,499/mo for mid-size (multi-crew, multi-AHJ, dashboard). Optional per-job overage above plan.
- **ACV:** ~$3,500–$6,000 blended.
- **Rough math to $1M ARR:** ~220 installers × ~$380/mo avg ≈ $1M. Anchored against one avoided truck roll/month ($200–$600 + delay) — the tool pays for itself on a single catch.
- **Rough math to $5M ARR:** ~1,100 installers, or fewer if mid-size multi-crew accounts dominate the mix. Realistic within the serviceable base; no need to win the whole market.
- **Expansion path:** more crews/AHJs per account; add C&I rule packs; attach the inspection packet to warranty/O&M handoff; sell aggregate failure-pattern benchmarking back to multi-branch installers.

## 9. Go-to-market wedge — first 100 customers

- **Forum + complaint mining:** DIY Solar Forum, r/solar, Mike Holt forums, solarpaneltalk are full of dated "failed my inspection because X" threads. Reply with value, DM the installer accounts, offer a free first-10-jobs pilot. The complaint volume is the lead list.
- **Reinspection-fee proxy targeting:** NABCEP-certified installer directories + state contractor license lists, filtered to small/mid shops. Cold outreach with a one-pager: "1 in 4 of your inspections fail — here's the one you'd have caught last week," using their state's known AHJ hot buttons.
- **Distributor / training channel:** solar equipment distributors and NABCEP CE providers want to reduce their installers' failure rates. Co-branded "pass your inspection first time" workshop → funnel.
- **Inspector-side credibility:** get 3–5 cooperative AHJ inspectors to confirm the rule checks match what they actually redline; use that as the trust anchor in sales ("built with the people who fail you").
- **Land on a single catch:** the close is a 2-week pilot where one prevented truck roll covers a year of subscription. Concrete, falsifiable, fast.

## 10. Build complexity — justification

Medium. The mobile capture app, offline sync, and report generation are standard. The non-trivial work is (a) a reliable AHJ/NEC rule library that's maintained as codes change, and (b) a vision pipeline accurate enough on uncontrolled rooftop imagery to be trusted as a go/no-go gate — false "pass" is the cardinal sin. Off-the-shelf 2026 multimodal models do the heavy perception; the custom work is the domain rule layer, the capture UX that forces good footage, and a tight human-in-the-loop accuracy ramp. Small team, ~4–5 months to a credible v1 in 1–2 launch AHJs.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Self-inspection aid; not a substitute for the AHJ inspection, so no licensing/approval needed. |
| Ethical — no harm / dark patterns | ✅ | Improves install safety/compliance; aligned with homeowner & firefighter interests. |
| Market exists (evidence above) | ✅ | Quantified 1-in-4 failure, $200–600/cycle, verbatim installer pain. |
| 1–5 person team can build this | ✅ | Standard stack + off-the-shelf vision; rule library is the focused custom effort. |
| Launchable with <$50K / ₹40L | ✅ | No hardware, no capex; inference cost is per-job and small post-2026. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire-adjacent: ~25% of jobs hit it, costs real money + delay + cancellation risk every time. Not daily per crew, hence not 18+. |
| Demand evidence | 15 | 13/20→13/15 | Multiple independent hard signals + dated verbatim installer complaints + sized market. A skeptic nods. |
| Build feasibility | 15 | 10/15 | Doable in ~4–5 months but accuracy bar is high and a false-pass is reputationally fatal — real engineering discipline required. |
| Distribution clarity | 15 | 11/15 | Named lists (NABCEP, license rolls, the complaint threads themselves) with believable conversion; not a 2-week sprint, hence not 13+. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks against avoided truck roll; ACV solid; one assumption (willingness to trust an AI gate) is a guess. |
| Time to first revenue | 10 | 7/10 | Pilot-to-paid in ~4–8 weeks once 1–2 AHJ rule packs are live. |
| Defensibility | 10 | 5/10 | Execution + accumulating per-AHJ rule/failure data is a soft moat; a funded design incumbent could bolt this on. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (vision pipeline + offline mobile + accuracy ramp) · `domain-expertise-required` (NEC / AHJ inspection knowledge — needs a master electrician or ex-inspector advisor from day one).

### Key assumptions to validate (3–5)

1. **Assumption:** Crew leads will actually do a 5–10 min guided walk-through before leaving. **How to test:** Shadow/film 10 real installs with 3 pilot installers; measure completion rate without nagging.
2. **Assumption:** A phone-only vision check can hit accuracy installers trust as a go/no-go (esp. near-zero false "pass"). **How to test:** Blind-test captured footage from 50 jobs against the actual AHJ inspection outcome; measure false-pass / false-fail rates.
3. **Assumption:** "One avoided truck roll pays for a year" closes deals at $199–$399/mo. **How to test:** 20 structured pricing calls with small installers; pre-sell 5 annual pilots.
4. **Assumption:** Per-AHJ rule packs are maintainable by a small team as codes/local quirks shift. **How to test:** Build 3 diverse AHJ packs, track maintenance hours/month over a quarter.

### Risk flags

1. **Accuracy/liability risk:** A false "pass" that then fails inspection (or worse, a safety miss) destroys trust fast. Must position as an aid + keep humans final; needs a hard accuracy gate before any "pass" is shown.
2. **Platform/incumbent risk:** Scanifly/Aurora/OpenSolar own the field-app surface and could extend into post-build inspection. Speed and a deeper AHJ rule library are the only defense.
3. **Adoption-friction risk:** Field crews resist extra steps under time pressure; if the walk-through isn't faster than the truck roll it prevents, it gets skipped.
4. **Code-drift risk:** NEC cycles and AHJ interpretations change; stale rules produce wrong calls and erode trust.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + master-electrician/ex-AHJ-inspector advisor
Time to revenue:        4–8 weeks after first 1–2 AHJ rule packs live (~5–6 months from start)
Capital to launch:      $15–30K (₹12–25L) — no hardware, small per-job inference cost
Top 3 assumptions to validate first:
  1. Phone-only vision check hits near-zero false-pass on real rooftop footage — blind-test 50 jobs vs actual inspection outcome
  2. Crews will run the walk-through under time pressure — shadow 10 real installs, measure unprompted completion
  3. One avoided truck roll justifies $199–399/mo — 20 pricing calls, pre-sell 5 annual pilots
Kill criteria:
  - Abandon if false-pass rate stays >5% after the accuracy ramp on the 50-job blind test
  - Abandon if <15% of small installers in 50 cold outreaches engage with a pilot
  - Abandon if a design incumbent ships an equivalent on-roof inspection gate before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 50 dated "failed my inspection" threads from DIY Solar Forum / r/solar / Mike Holt; categorize the physical failure causes (label, conduit, disconnect, grounding, wire mgmt). Confirm the catchable-on-site fraction.
- **Day 3–4:** Get raw install photos/video for 15–20 jobs (3 cooperative small installers) with their actual inspection outcome. Run current off-the-shelf multimodal models against a hand-built rule list for one AHJ; measure how often the model would have caught the real redline — and critically, false-pass rate.
- **Day 5:** Decide go / no-go. **Go if:** model would have caught ≥60% of real redlines with ≤5% false-pass on the sample, AND ≥3 of the installers say they'd pilot at $199–$399/mo. Falsifiable, not a vibe.
