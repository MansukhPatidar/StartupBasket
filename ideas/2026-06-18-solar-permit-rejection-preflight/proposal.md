---
title: "BounceBlock — rejection screen for solar permit packages"
slug: solar-permit-rejection-preflight
date: 2026-06-18
category: CleanTech / US Residential & Small-Commercial Solar Installers (EPCs, 1–50 crew)
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Reads a finished solar plan set and interconnection app, then flags every line an AHJ or utility will reject — before you submit."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Compliance-driven, SMB, Workflow-automation, Document-AI]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# BounceBlock — rejection screen for solar permit packages

## 1. One-liner

Reads a finished solar plan set and interconnection app, then flags every line an AHJ or utility will reject — before you submit.

## 2. Trend signal — why now?

Solar permitting is where small installers bleed time and cash right now, and three things converged in the last 12 months to make a software fix both needed and buildable.

First, the rejection tax is brutal and well-documented. Industry trade content puts the cost of a single permit rejection at **$2,000–$5,000** in revision fees, admin time, and crew rescheduling, with each resubmission adding **2–4 weeks** to the schedule. Roughly **20% of installations** nationwide hit costly permit delays. NEC code mismatches alone account for **30–40%** of rejections — and NEC 2026 adoption is wildly uneven (California enforces statewide; much of North Carolina still references NEC 2020), so "code-compliant" is a moving, jurisdiction-specific target.

Second, the interconnection side bounces for dumb, preventable reasons: "customer-of-record mismatches, missing fields, unlisted equipment, and single-line diagram issues" trigger most deficiency notices, and utilities like PG&E, National Grid, and Duke are sitting on **60–90 day** queues where one deficiency notice resets the clock.

Third, the deadline gun is to everyone's head: the commercial ITC safe-harbor "begin construction" deadline of **July 4, 2026** means a three-week rejection can be the difference between locking the 30% credit and missing it. Demand for anything that speeds permitting is at a peak.

Provenance:
  - Signal 1 (demand): Permit rejections cost solar installers $2,000–$5,000 and add 2–4 weeks each; ~20% of installs delayed; NEC mismatches = 30–40% of rejections, NEC 2026 adoption uneven — https://energyscaperenewables.com/post/solar-permit-rejected-incomplete-electrical-diagrams/ — 2026-06-18
  - Signal 2 (feasibility): Interconnection deficiency notices driven by "customer-of-record mismatches, missing fields, unlisted equipment, single-line diagram issues"; complete docs clear AHJ/utility ~40% faster — https://energyscaperenewables.com/post/solar-permitting-timelines-guide/ — 2026-06-18
  - Signal 3 (economic): Enact Solar acquires PVComplete to build an "AI-enabled" end-to-end solar software platform; GreenLancer raising on-demand engineering capacity for the ITC deadline; >4,000 installers already pay per-project for plan sets — https://solarbuildermag.com/products/enact-solar-buys-pvcomplete-creating-industry-first-ai-solar-software-platform/ — 2026-06-18
  Category: Workflow automation

## 3. The opportunity

Every dollar of solar permitting software today sells **production**: design tools and plan-set services (Aurora, OpenSolar, GreenLancer, PVComplete/Enact, Energyscape) that *make* the drawing. Nobody sells **rejection prevention** — the cheap, fast layer that takes a finished package, simulates the specific reviewer who will see it, and hands back a punch list of what bounces.

That's the gap. The design tools are incentivized to ship you a plan set, not to tell you their own output will fail in Maricopa County's third-party review or Con Ed's interconnection portal. SolarAPP+ instant-approves residential systems — but only in ~160 communities, only under 25 kW, and only if your set already meets *its* spec; it's a gate, not a coach. The actual knowledge that prevents rejections — "this AHJ wants the rapid-shutdown label worded *this* way, this utility rejects single-lines without the AC disconnect callout" — lives in the heads of a few senior permit coordinators and in scattered redline PDFs. That tribal knowledge is exactly what an AI can ingest, structure, and replay at submission time.

The 10× claim is narrow and honest: take the 20% of jobs that bounce and cut that in half by catching the dumb, repeat-offender errors before a human reviewer ever sees them. On a 200-job installer, that's ~20 stalled jobs recovered a year — each worth thousands in rescheduling and ITC-window risk.

## 4. Target market

- **Primary customer:** Owner or permitting coordinator at a US residential / small-commercial solar installer (EPC), roughly 5–50 employees, doing 100–1,500 installs/year, operating across multiple AHJs and utilities. The person who owns "did the permit clear?" — often one harried coordinator juggling 30+ active jobs.
- **Why they buy:** In their words from the trade: "one bad PE-stamp workflow can stall three or four downstream jobs," reviewers across the same AHJ "interpret the NEC differently," and "thousands of distinct AHJs" each have quirks. They eat $2–5K and weeks per rejection, and right now the only defense is a senior person's memory.
- **Rough TAM reasoning:** ~10,000+ active solar installation firms in the US; even the SMB slice (firms too small for in-house engineering departments, too big to wing it) is several thousand. At $200–600/mo that's a comfortable $5M+ ceiling without needing the majors.
- **Why now for them:** NEC 2026's uneven rollout makes last year's "known-good" plan set newly rejectable, and the July 2026 ITC deadline turns every avoidable 3-week slip into existential margin risk. The pain spiked in the last 6 months.

## 5. Product sketch (MVP)

- Upload a finished plan set (PDF) + interconnection application + the target AHJ and utility.
- BounceBlock returns a ranked **rejection punch list**: each flagged item with the page/line, the specific rule it likely violates, and the fix ("AC disconnect not labeled on single-line — Con Ed rejects without it").
- A maintained, jurisdiction-aware rule library: which NEC cycle each AHJ enforces, known third-party reviewer quirks, utility-portal field requirements.
- "Completeness" pass for interconnection apps — catches the boring killers: customer-of-record mismatch, blank fields, equipment not on the utility's approved list, missing single-line elements.
- Confidence flag on each finding (hard rule vs. "this reviewer has bounced this before") so the coordinator knows what's mandatory vs. judgment.
- A simple log: per-AHJ first-pass approval rate over time, so the owner can see the rejection rate fall.
- Learns from outcomes: when a user marks "submitted → approved" or pastes the actual redline, the rule library for that jurisdiction sharpens.

## 6. AI angle — what's load-bearing

Remove the AI and there is no product. The core is document understanding over messy, inconsistent plan-set PDFs and single-line diagrams — extracting equipment, labels, conductor callouts, and layout, then reasoning about them against a structured but fuzzy body of rules (NEC by jurisdiction + AHJ/utility idiosyncrasies). This is exactly the vision + reasoning workload that became cheap and good enough only recently. A deterministic rules engine alone can't read a contractor's hand-marked PDF or interpret a reviewer's prose redline; that's the AI's job. The rule library is the asset, but the AI is what reads the document and the redline to *grow* it.

## 7. Localization angle (if any)

N/A — this is a US-only play, and that's the point. The entire moat *is* US-specific jurisdiction knowledge (NEC cycles, AHJ behavior, utility interconnection rules). It does not translate to other markets, and that non-portability is a feature: a generic global competitor can't parachute in without rebuilding the rule library from scratch.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS by volume — Solo $99/mo (a few checks), Shop $349/mo (unlimited, single state), Multi-state $699/mo. Optional per-check overage / pay-as-you-go at ~$40/check for occasional users.
- **ACV:** ~$4,200 blended ($350/mo average).
- **Rough math to $1M ARR:** ~240 installers × $350/mo × 12 ≈ $1.0M. Roughly 240 of several thousand SMB installers — low single-digit penetration.
- **Rough math to $5M ARR:** ~1,000 paying installers averaging ~$420/mo, plus a per-check overage line and a "redline-to-rule" data feedback loop that lifts the multi-state tier. Requires expanding rule coverage from the top ~20 states to national.
- **Expansion path:** seats and volume tiers as the installer grows; add-on modules (storage/battery rules, commercial-scale checks, AHJ submission-portal autofill); eventually sell anonymized "this AHJ's top rejection reasons this quarter" benchmarks back to the industry.

## 9. Go-to-market wedge — first 100 customers

- **Mine the public AHJ pain trail.** Installers complain by name on the Mike Holt forums, r/solar, r/solarDIY, and the DIY Solar Power Forum about specific rejections. Reply / DM with a free teardown: "send me the set you got bounced, I'll show you what we'd have flagged." Each free teardown is a warm demo.
- **Free "Why did my permit bounce?" teardown as the top-of-funnel.** A landing page where an installer uploads a rejected set and gets the punch list free, once. Converts the exact moment of pain into a trial. Seed it in the forums above and in solar installer Facebook groups (several are 10–30k members).
- **Ride the ITC deadline.** Through mid-2026, lead with "don't let a 3-week rejection cost you the ITC." Time-boxed urgency is the best closer this category will ever have.
- **Partner with PE-stamp / plan-set shops.** GreenLancer-style services and independent PE stampers eat rejections too; a white-label pre-flight that raises their first-pass rate is a referral channel and a wedge into their installer base.
- **State-association angle.** Regional solar trade groups (e.g. state SEIA chapters) run installer member lists and webinars; a "cut your rejection rate" talk is an easy 50-installer room.

## 10. Build complexity — justification

Medium. The document-AI pipeline (read plan-set PDFs and single-lines, extract structured facts) is off-the-shelf vision-LLM work, and the SaaS shell is standard. The genuinely hard, non-trivial part is the **rule library**: seeding NEC-by-jurisdiction coverage and per-AHJ/utility quirks for the first ~15–20 high-volume states, and building the feedback loop that turns user-submitted redlines into rules. That's why it's not Low — but it's bounded, incremental, and gets more valuable as it grows. A 2–3 person team (one strong on document-AI, one with real solar permitting domain knowledge) ships a credible single-state v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Advisory tool; the installer still submits and is responsible. No regulated practice of engineering — see risk flags. |
| Ethical — no harm / dark patterns | ✅ | Reduces rework and waste; aligned with customer interest. |
| Market exists (evidence above) | ✅ | Documented $2–5K/rejection, 20% of installs delayed, existing per-project spend. |
| 1–5 person team can build this | ✅ | 2–3 people, ~3–4 months to single-state v1. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf AI + web stack; main cost is domain time and inference. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire under the ITC clock; quantified $2–5K + 2–4 weeks per rejection, felt on ~20% of jobs. |
| Demand evidence | 15 | 13/15 | Trade content, forum complaints by name, existing per-project permitting spend, and incumbent M&A (Enact/PVComplete) all point the same way. |
| Build feasibility | 15 | 11/15 | Document-AI is solved; rule library is the real lift, hence Medium not Low. |
| Distribution clarity | 15 | 12/15 | Named forums/groups + free-teardown wedge + ITC urgency; conversion math still partly assumed. |
| Revenue mechanics | 15 | 12/15 | Clear WTP anchored to existing $100–360/project spend; ARR math needs only low penetration. |
| Time to first revenue | 10 | 8/10 | Free teardown → paid trial can close in weeks; deadline pressure shortens it. |
| Defensibility | 10 | 6/10 | Rule library + outcome data is a soft, compounding moat; design incumbents could bolt this on (see risks). |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs one builder fluent in document-AI and one who has actually shepherded solar permits through hostile AHJs. Without the domain half, the rule library will be wrong and the product will lose trust on its first false-confident flag.

### Key assumptions to validate (3–5)

1. **Assumption:** Installers will pay $300–700/mo for prevention, not just per-project production. **How to test:** Pre-sell to 15 installers off free teardowns; require a card on file for the trial.
2. **Assumption:** A small team can cover one high-volume state's AHJ/NEC quirks well enough to beat a senior coordinator's memory on first-pass rate. **How to test:** Backtest against 50 real rejected sets from one state; measure how many rejection reasons BounceBlock would have caught.
3. **Assumption:** Rejection reasons are repetitive and pattern-able enough to encode (vs. genuinely random reviewer whim). **How to test:** Cluster 100 collected redlines; if >60% fall into a few dozen recurring causes, the thesis holds.
4. **Assumption:** The free-teardown wedge actually converts pain into trials. **How to test:** Ship the teardown page, seed 3 forums, measure upload→trial→paid funnel over 30 days.

### Risk flags

1. **Platform / incumbent risk:** Enact+PVComplete or OpenSolar could add a "pre-flight" tab to a tool installers already use. Counter: stay design-tool-agnostic (works on *any* PDF, including their output) and win on rule-library depth and the redline feedback loop they won't bother to maintain per-AHJ.
2. **Liability / trust risk:** A false "all clear" that still gets rejected erodes trust fast; over-flagging creates alert fatigue. Counter: confidence-tiered findings, never claim to replace the stamping PE, and frame as advisory.
3. **Moving-target risk:** NEC cycles and AHJ rules change; a stale library gives wrong answers. Counter: the redline feedback loop and per-AHJ approval tracking are the maintenance engine — but it's real ongoing operational cost, not set-and-forget.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document-AI) + co-founder/advisor with hands-on solar permitting domain expertise
Time to revenue:        6–10 weeks (free teardown → paid trial)
Capital to launch:      $15–30K (₹13–25L) — mostly inference + domain time
Top 3 assumptions to validate first:
  1. Installers pay for prevention, not just production — pre-sell 15 off free teardowns, card on file
  2. One state's AHJ/NEC quirks are coverable well enough to beat a coordinator's memory — backtest 50 real rejected sets
  3. Rejection reasons are pattern-able, not random whim — cluster 100 redlines, need >60% in recurring causes
Kill criteria:
  - Abandon if backtest catches <50% of rejection reasons on 50 real rejected sets in the launch state
  - Abandon if a major design tool (Enact, OpenSolar) ships an equivalent free pre-flight before your paid v1
  - Abandon if <3 of 15 teardown recipients put a card down for a trial
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 30–50 *real* rejected plan sets + their redlines from one high-volume state (PG&E/California is ideal — most public pain). Pull from forum posters, two friendly installers, and public AHJ correction notices.
- **Day 3–4:** Hand-run the redlines through a prototype: vision-LLM reads the set, you check whether it would have flagged each actual rejection reason. Tally the catch rate by cause.
- **Day 5:** Decide. **Go** if BounceBlock would have caught **≥50% of real rejection reasons** *and* ≥3 of 5 installers shown the punch list say "I'd pay for that." Otherwise narrow the scope (e.g. interconnection-completeness only) or kill.

The result is falsifiable: a measured catch-rate against real rejections, not "installers seemed interested."
