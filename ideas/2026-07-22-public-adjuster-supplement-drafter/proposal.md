---
title: "ClaimCounter — supplement drafter for solo public adjusters"
slug: public-adjuster-supplement-drafter
date: 2026-07-22
category: InsurTech / US-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a carrier's lowball estimate and your damage photos into a line-item supplement that recovers the shortpay."
tags:
  vertical: ProfessionalServices
  model: SaaS
  geography: US
  secondary: [AI-agent, Solo-builder, SMB, Compliance-driven, Vision-AI]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ClaimCounter — supplement drafter for solo public adjusters

## 1. One-liner

Turns a carrier's lowball estimate and your damage photos into a line-item supplement that recovers the shortpay — for solo and small public adjusters.

## 2. Trend signal — why now?

Three things converged in the last twelve months. First, the carriers went AI: Verisk shipped **XactAI** in September 2025 — generative AI baked into Xactimate that lets carrier-side adjusters build structured line-item estimates from plain language and photos. The people who *pay less* now have AI. The people who *fight for more* — public adjusters — don't. Second, multimodal vision models got good enough to read a claim: they can parse a carrier's Xactimate PDF and look at damage photos and map both to line-item codes, which was not reliably possible 18 months ago. Third, the money's moving — the US claims-adjusting industry hit $14.6B in 2024, growing ~9.6%/yr, and public adjusters are paid **5–20% of what they recover**, so every line item they add to a supplement is direct income.

Right now the PA-side workflow is either "write it yourself at 11pm" or "outsource it to a shop like Empire Estimators / ReadyAdjuster for a per-estimate fee and wait 1–2 days." One adjuster: *"I spent many evenings researching the basics and would eventually piece together an estimate, but it was incredibly time-consuming."* That's the wedge.

Provenance:
  - Signal 1 (demand): Public adjusters outsource Xactimate estimate writing because it's "one of the most time-consuming steps" with "a steep learning curve"; solo PAs report cash-flow issues waiting on estimates — https://www.empireestimators.com/xactimate-estimate-writers-for-public-adjusters/ — 2026-07-22
  - Signal 2 (feasibility): Verisk launched XactAI (Sept 2025) — genAI that builds structured Xactimate estimates from plain language + photos, proving vision/LLM parsing of claims is now production-grade — https://www.verisk.com/company/newsroom/verisk-introduces-new-ai-tools-to-streamline-the-property-claims-experience/ — 2026-07-22
  - Signal 3 (economic): US claims-adjusting industry $14.6B in 2024 (~9.6%/yr growth); public adjusters paid 5–20% of claim recovery (FL 3,400+ licensees; 48 states license PAs) — https://www.ibisworld.com/united-states/industry/claims-adjusting/4788/ — 2026-07-22
  Category: Underserved niche

## 3. The opportunity

Xactimate is a monopoly (80%+ of carriers) and Verisk owns it. Verisk's AI serves the **carrier** — its job is to settle claims consistently and, functionally, *lower loss-adjustment expense*. Verisk will never build the tool that arms public adjusters to beat carriers on line items, because carriers are the customer. That structural conflict is the whole opening.

The incumbents on the PA side are **human outsourcing shops** — Empire Estimators, ReadyAdjuster, Xactimators. They're slow (next-business-day standard, "large complex estimates longer"), priced per-estimate, and gate their best rates behind memberships. They don't scale for a solo PA doing 6–15 claims/week. Nobody has built an AI-native tool that reads the carrier's estimate + the PA's photos and drafts the *supplement* — the specific omitted and underpriced line items, with justification language — in minutes instead of a day.

10× better = the same supplement in 5 minutes instead of an evening, at a subscription price instead of a per-job fee, with the PA still holding the final Xactimate seat to review and sign.

## 4. Target market

- **Primary customer:** Solo and small (1–5 person) **licensed public adjusters** and PA firms working residential property claims, concentrated in CAT-exposure states — Florida, Texas, Louisiana, California, New Jersey. Secondary: restoration contractors who write their own supplements.
- **Why they buy:** In their words — writing the estimate is "incredibly time-consuming," the Xactimate "verbiage" and "construction lingo" is a steep learning curve, and outsourcing it costs money and a day of turnaround they can't afford when a client is waiting. They're paid on recovery; a faster, more complete supplement is literally more money in their pocket.
- **Rough TAM reasoning:** 48 states license PAs; Florida alone reports 3,400+ active licensees, and FL/TX/LA/NJ/CA hold the bulk. A conservative national figure of ~25,000–40,000 licensed PAs plus tens of thousands of supplement-writing restoration contractors. Even 1,500 paying PAs is a real business.
- **Why now for them:** The carrier side just got AI (XactAI). PAs feel the asymmetry immediately — and CAT seasons (hurricane, hail, wildfire) mean claim volume is spiky, so the "outsource shop is backed up for 3 days" pain peaks exactly when it hurts most.

## 5. Product sketch (MVP)

- Upload the carrier's Xactimate estimate PDF and a folder of damage photos.
- AI reads the carrier estimate, identifies **missing line items** (e.g. no detach-and-reset, no code-upgrade items, no debris haul) and **underpriced items** vs. the applicable regional price list.
- Cross-references the photos to flag damage the carrier's scope didn't cover ("photo 7 shows valley damage — no valley line item in carrier scope").
- Outputs a clean **supplement worksheet**: line-item code, quantity, unit, price-list reference, and a plain-English justification paragraph for each add — ready to paste or hand to the PA's Xactimate seat.
- Optional structured export (ESX-compatible worksheet) so the PA imports and finalizes in their own Xactimate rather than trusting a black box.
- A running "recovery estimate" total — how much this supplement is worth — because that's the number that sells the subscription every month.
- Template library of justification language proven to survive carrier pushback (the accumulating asset).

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet — dead. The AI does three jobs a human currently spends an evening on: (1) **parse** the carrier's Xactimate PDF into structured line items, (2) **reason** about what a complete scope for that damage type should contain and diff it against what the carrier included, and (3) **ground** each addition in the photos and the regional price list with justification language. That's document understanding + vision + domain reasoning — exactly what got reliable in the last 12 months and exactly what XactAI proved works on the carrier side. The AI is the product.

## 7. Localization angle (if any)

N/A — this is a US play. The moat is US-specific: Xactimate/Symbility dominance, state PA licensing regimes, and regional price lists. That specificity *is* the wedge, not a limitation. No India/SEA angle — those markets don't run on Xactimate.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $149/mo solo tier (unlimited supplements, fair-use), $399/mo firm tier (up to 5 seats). Compare to Xactimate's own ~$180+/mo seat and per-estimate outsourcing fees — this slots in as an obvious line item.
- **ACV:** ~$2,200 blended (mix of solo and firm).
- **Rough math to $1M ARR:** ~450 paying accounts × ~$185/mo avg × 12 ≈ $1M. That's a single-digit fraction of licensed PAs.
- **Rough math to $5M ARR:** ~2,000 accounts, plus a usage/overage tier for high-volume CAT-season firms and expansion into the restoration-contractor supplement segment (larger population, same product).
- **Expansion path:** seats (firm growth), a per-supplement overage tier for CAT surges, and a "carrier-rebuttal pack" upsell (auto-drafted response letters when the carrier denies a supplement line).

## 9. Go-to-market wedge — first 100 customers

- **PA Facebook groups + subreddits:** The public-adjuster world lives in closed FB groups and r/publicadjuster / r/insurance. Post a real before/after: "carrier scoped $18K, ClaimCounter found $6.2K in missing line items in 4 minutes — here's the supplement." That screenshot sells itself in a paid-on-recovery audience.
- **State PA associations (FAPIA in Florida, TAPIA in Texas, etc.):** Sponsor/present at their CE and conference events. These are small, tight, referral-driven communities — 3 endorsements move the market.
- **Poach the outsourcing shops' customers:** The PAs paying Empire/ReadyAdjuster per estimate are the exact warm list — they've already declared WTP. Target them directly with a "stop waiting 2 days, stop paying per job" message.
- **CAT-season landings:** After a named hurricane/hail event, PAs are drowning. Run a "we'll clear your supplement backlog this week" campaign timed to the event.

## 10. Build complexity — justification

Medium. The web app, PDF parsing, and vision pipeline are off-the-shelf (multimodal LLM + document parsing). The custom work is the **domain layer**: encoding Xactimate line-item logic, regional price-list mapping, and the "what should a complete scope contain for this damage type" reasoning — that needs a PA/estimator advisor and iteration on real claims. ESX-compatible export is the trickiest integration and is deferrable to v1.1 (v1 can ship a paste-ready worksheet). A technical founder plus a domain advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | PA is a licensed profession; tool assists a licensed human who signs off. Not practicing adjusting itself. |
| Ethical — no harm / dark patterns | ✅ | Helps policyholders recover legitimate covered damage. PA reviews every line before submission. |
| Market exists (evidence above) | ✅ | Outsourcing shops already sell this manually; verbatim time-cost complaints. |
| 1–5 person team can build this | ✅ | Technical founder + domain advisor, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf AI + web stack; main cost is advisor time and inference. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire during CAT season; high-frequency; paid-on-recovery means direct $ link. Not quite daily-lose-money for every PA year-round. |
| Demand evidence | 15 | 12/15 | Multiple manual incumbents charging money + verbatim complaints. No direct SaaS competitor yet = signal is strong but slightly indirect. |
| Build feasibility | 15 | 10/15 | Off-the-shelf AI, but real domain encoding + Xactimate-format fidelity is non-trivial; ~3–4 months. |
| Distribution clarity | 15 | 12/15 | Named channels (FB groups, state associations, poach outsourcing shops' clients) with a self-selling before/after demo. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks cleanly against Xactimate seat + per-estimate fees; ACV realistic; ~450 accounts to $1M. |
| Time to first revenue | 10 | 8/10 | Warm, WTP-proven audience; trial-to-paid should close in 4–8 weeks. Gated by v1 build time. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating justification-language library + domain tuning + niche brand. Verisk platform risk caps it. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

### Key assumptions to validate (3–5)

1. **Assumption:** AI can identify missing/underpriced line items accurately enough that PAs trust the output. **How to test:** Run 20 real closed claims (carrier estimate + photos + the final approved supplement) through a prototype and measure recall of the line items the PA actually added.
2. **Assumption:** Solo PAs will pay ~$149/mo for a subscription vs. paying per-estimate to a shop. **How to test:** Pre-sell to 30 PAs from the outsourcing-shop customer pool; target 5+ paid pilots.
3. **Assumption:** A paste-ready worksheet (no ESX import) is enough value for v1. **How to test:** Ship worksheet-only to pilots; measure whether they finalize in Xactimate without complaint.
4. **Assumption:** Verisk won't cut off the PDF/format path that makes this work. **How to test:** Design to parse the PDF (a document the PA already possesses), not to hook Xactimate's API — reduces platform exposure.

### Risk flags

1. **Platform dependency (Verisk):** The whole workflow orbits Xactimate. If Verisk builds a PA-facing supplement tool or restricts formats, the moat shrinks. Counter: Verisk's carrier conflict makes a PA-favoring tool unlikely, and PDF-parsing sidesteps API access.
2. **Accuracy / liability:** A hallucinated line item that gets a claim denied burns trust fast. Counter: position as a drafter the licensed PA reviews and signs — never auto-submit.
3. **Market timing:** If a well-funded InsurTech pivots the carrier-side AI to PAs, first-mover niche brand is the defense — move fast in FL/TX.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + public-adjuster/estimator domain advisor
Time to revenue:        8–12 weeks (after ~3–4 month v1 build)
Capital to launch:      ₹8–15 lakh / $10–18K (mostly advisor time + inference)
Top 3 assumptions to validate first:
  1. AI line-item recall on 20 real closed claims vs. the supplement the PA actually filed
  2. 5+ paid pilots pre-sold from the outsourcing-shop customer pool at ~$149/mo
  3. Worksheet-only v1 is enough value without ESX import
Kill criteria:
  - Abandon if AI recall of actually-added line items is <60% on the 20-claim test set
  - Abandon if <5 of 30 pre-sell targets convert to paid pilots
  - Abandon if Verisk ships a PA-facing supplement writer before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 15–20 real closed residential claims from 2–3 friendly PAs — each with the carrier estimate PDF, the damage photos, and the final approved supplement (the ground truth of what got added).
- **Day 3–4:** Wire a rough prototype (multimodal LLM + PDF parse) that ingests carrier estimate + photos and outputs proposed supplement line items. Score its output against the known-added items — measure recall and false-positive rate.
- **Day 5:** Decide go / no-go. **Go if recall of the actually-added line items ≥60% with a tolerable false-positive rate**, and if ≥5 of 30 PAs contacted commit to a paid pilot. Both are falsifiable numbers, not vibes.
