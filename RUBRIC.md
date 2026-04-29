# Startup Idea Rubric Framework

A multi-layered framework for scoring and evaluating startup ideas — optimized for bootstrapped / SMB builders (1–5 person teams, path to $1M–$5M ARR).

## Meta-Principles

1. **Predictive over descriptive** — The rubric predicts success/failure, not just describes the idea. Every axis correlates with real startup outcomes.
2. **Decision-forcing** — The output drives a clear action (Build / Validate / Skip), not just a vibe.
3. **Auditable** — A reader can disagree with a score and see exactly where the reasoning went wrong. No black boxes.
4. **Context-aware** — Optimized for bootstrapped SMB plays, not VC moonshots.
5. **Falsifiable** — The rubric should be wrong sometimes, visibly. If every idea scores 70–85, the rubric is broken.

---

## Layer 1: Gating Criteria (Pass/Fail)

Applied **before** scoring. If an idea fails any gate, it gets rejected — not scored. This filters out structurally broken ideas before wasting effort.

| Gate | Question |
|---|---|
| **Legality** | Is this legal in target markets? |
| **Ethics floor** | Does this harm users, exploit vulnerable groups, or rely on dark patterns? |
| **Market existence** | Is there evidence anyone wants this, or is it purely hypothetical? |
| **Builder fit** | Can a 1–5 person team realistically build and ship this? |
| **Capital feasibility** | Can it be started with sub-$50K (₹40L), or does it require VC from day one? |

An idea must clear **all five** gates to enter scoring.

---

## Layer 2: Weighted Scoring (7 Axes, 100 Points)

| Axis | Weight | What It Measures |
|---|---|---|
| **Problem intensity** | 20 | How painful is this problem? How often is it felt? Would users pay to solve it today? |
| **Demand evidence** | 15 | Hard signals — existing spend, competitor traction, search volume, forum complaints. Not "I think people would want this." |
| **Build feasibility** | 15 | Can the target team ship v1 in 90 days with available tools? |
| **Distribution clarity** | 15 | Is there a concrete, cheap path to first 100 customers? Not "we'll do SEO and content." |
| **Revenue mechanics** | 15 | Clear pricing, clear willingness to pay, unit economics that work below $5M ARR. |
| **Time to first revenue** | 10 | Weeks to first paying customer. For bootstrappers, this matters more than TAM. |
| **Defensibility** | 10 | Soft moats — workflow lock-in, data advantage, community, regulatory knowledge. Not patents. |
| **Total** | **100** | |

### Why these axes

- **Problem intensity vs. Demand evidence** are split because they measure different things. Many people feel a pain but nobody's paying to solve it — meaning they won't pay you either.
- **Time to first revenue** is explicit because it's the #1 predictor of whether a bootstrapper survives.
- **Defensibility** is weighted lightly because for sub-$5M ARR, speed and execution matter far more than moats.

### Scoring bands per axis

#### Problem intensity — 20 points

| Points | Meaning |
|---|---|
| 17–20 | Hair-on-fire problem. Users lose money, time, or compliance standing daily. They'd pay this week to make it stop. |
| 13–16 | Real pain, felt regularly (weekly+), but they've built workarounds. Switching cost to your solution needs to be low. |
| 8–12 | Acknowledged inconvenience. Users nod when you describe it but aren't actively looking for a fix. |
| 4–7 | Mild irritation. "Yeah that's annoying" but they forget about it 5 minutes later. |
| 0–3 | Solution looking for a problem. You're the only one who thinks this matters. |

#### Demand evidence — 15 points

| Points | Meaning |
|---|---|
| 13–15 | Multiple independent signals: growing search volume, incumbents charging money, viral organic complaints, public competitor revenue. A skeptic would nod. |
| 9–12 | One strong signal (subreddit full of complaints, Google Trends uptick, incumbents exist) plus anecdotal validation. |
| 5–8 | Plausible demand from adjacent markets but no direct evidence this specific product is wanted. |
| 2–4 | Thesis-driven. "AI will eat X, therefore Y." No actual signal. |
| 0–1 | Pure imagination. |

#### Build feasibility — 15 points

| Points | Meaning |
|---|---|
| 13–15 | Solo founder ships in 4–6 weeks on off-the-shelf APIs. Almost no custom infra. |
| 9–12 | Pair ships in 8–12 weeks. A few external integrations, standard web stack. |
| 5–8 | Doable in 12 weeks but requires engineering discipline — non-trivial data flows or gnarly integrations. |
| 2–4 | Needs 4+ months before first user can try it. |
| 0–1 | Research-grade. Custom models, novel hardware, or regulatory approval needed. |

#### Distribution clarity — 15 points

| Points | Meaning |
|---|---|
| 13–15 | Named channel, named list, realistic conversion math. First 100 customers is a 2-week sprint. |
| 9–12 | Known channel (specific subreddit, directory, influencer tier) but conversion is uncertain. |
| 5–8 | Plausible channel but slow (content marketing, SEO that takes 3–6 months). |
| 2–4 | No clear channel. "We'll figure out marketing later." |
| 0–1 | Needs paid ads at scale to work. Wrong game for a bootstrap. |

#### Revenue mechanics — 15 points

| Points | Meaning |
|---|---|
| 13–15 | Pricing benchmarked against existing products, ACV realistic, customer count for $1M ARR clearly achievable. |
| 9–12 | Pricing and ACV reasonable but one assumption (conversion, retention) is a guess. |
| 5–8 | Math works but requires aggressive assumptions — high conversion, low churn, fast expansion. |
| 2–4 | Shaky math. Requires 10× more customers than the channel can deliver, or pricing above category norms. |
| 0–1 | No credible path to $1M ARR. |

#### Time to first revenue — 10 points

| Points | Meaning |
|---|---|
| 9–10 | Revenue in ≤4 weeks of launch. Pre-sold or clear trial-to-paid funnel. |
| 7–8 | Revenue in 4–8 weeks. Needs a brief free trial or pilot period. |
| 4–6 | Revenue in 2–4 months. Longer sales cycle or marketplace chicken-and-egg to solve. |
| 1–3 | 6+ months to first dollar. Consulting bridge or runway required. |
| 0 | No clear path to revenue in year one. |

#### Defensibility — 10 points

| Points | Meaning |
|---|---|
| 9–10 | Real moat: proprietary data, network effects, hard-won integrations, regulatory advantage. |
| 6–8 | Soft moat: brand in a niche, workflow lock-in, accumulating user data that compounds. |
| 3–5 | Execution-only moat. Copyable, but a 6-month head start plus focus can produce a profitable business. |
| 0–2 | No moat. First cheap clone wins on price. |

---

## Layer 3: Qualitative Modifiers

Numbers alone mislead. After scoring, add three qualitative layers.

### A. Founder-Fit Tags

Tag ideas by the builder profile required:

- `technical-heavy` — needs strong engineering (AI/ML, complex integrations)
- `sales-heavy` — needs high-touch sales or relationship-building
- `content-heavy` — needs consistent content production for distribution
- `operations-heavy` — needs on-the-ground ops, vendor management, physical logistics
- `domain-expertise-required` — needs deep industry knowledge (legal, medical, finance, etc.)

An 85-scored idea is only a GO if the builder matches the profile.

### B. Key Assumptions (3–5)

Every idea lists the specific assumptions the score depends on, with validation methods.

> Example: "Assumes FPO CEOs will pay ₹1,999/mo — validate with 30 in-person interviews in 3 NABARD districts."

### C. Risk Flags

Surface deal-breakers not fully captured in scoring:

- **Regulatory risk** — rules could change or block the product
- **Platform dependency** — reliance on a single API, marketplace, or channel
- **Market timing** — too early or too late
- **Capital intensity at scale** — unit economics break past a threshold

These don't reduce the score but warn the builder.

---

## Layer 4: Meta-Scoring

### Confidence Level

How confident is the scorer in the score itself?

| Level | Meaning |
|---|---|
| **High** | Deep research, multiple verified sources, similar ideas with known outcomes. The score reflects reality. |
| **Medium** | Reasonable research, some assumptions untested. The score could shift ±10 with more data. |
| **Low** | Early-stage thesis, limited data. The score is directional, not definitive. ±15 swing possible. |

### Freshness

Every scored idea is timestamped. Markets change. An idea that scored 80 six months ago might be 55 today because a well-funded competitor launched.

---

## Decision Output

Every proposal ends with a structured verdict:

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with domain advisor
Time to revenue:        8–12 weeks
Capital to launch:      ₹3–5 lakh ($4–6K)
Top 3 assumptions to validate first:
  1. [assumption + validation method]
  2. [assumption + validation method]
  3. [assumption + validation method]
Kill criteria:
  - Abandon if [specific measurable condition]
  - Abandon if [specific measurable condition]
```

### Verdict Thresholds

| Score Range | Verdict | Meaning |
|---|---|---|
| 80–100 | **STRONG GO** | Build now. The signals are strong. |
| 70–79 | **GO** | Build with conditions. Validate the weakest axis first. |
| 55–69 | **VALIDATE** | Interesting but unproven. Run the 1-week sprint before committing. |
| 0–54 | **PASS** | Structural issues. Skip or revisit when conditions change. |

### Kill Criteria

Pre-defined kill criteria tell the builder exactly when to quit — arguably more valuable than telling them when to start.

Examples:
- "Abandon if <10% of 50 cold outreach calls show interest"
- "Abandon if CAC exceeds ₹X after 3 months"
- "Abandon if a well-funded competitor launches identical product before your v1"

---

## Scoring Discipline

- Be honest. A 78 that turns out to be a dud hurts less than a 92 you weren't willing to ship.
- If two axes score below 5, the idea is probably a PASS regardless of the total.
- If you can't score an axis because you don't know enough, that's not a 10 by default — it's information that this idea needs more research.
- **Publish the full distribution.** If every idea scores 70–85, the rubric loses meaning. Include PASSes and VALIDATEs — they build credibility.
- **Show the work.** The notes column is the secret weapon. Convert abstract scores into concrete reasoning.
