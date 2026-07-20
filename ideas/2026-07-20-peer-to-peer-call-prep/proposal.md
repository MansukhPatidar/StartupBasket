---
title: "PeerBrief — 5-minute call prep for specialty practices"
slug: peer-to-peer-call-prep
date: 2026-07-20
category: HealthTech / US — Independent Rheumatology, Dermatology & GI Practices Fighting Biologic Prior-Auth Denials by Phone
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Hands a specialist the argument that wins the insurer phone call, in the 24 hours before the window shuts."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Solo-builder, Specialty-care]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PeerBrief

## 1. One-liner

Hands a specialist the argument that wins the insurer phone call, in the 24 hours before the window shuts.

## 2. Trend signal — why now?

Three things moved in the last 18 months, and they moved in the same direction.

**The appeal math is absurd and publicly documented.** KFF's analysis of Medicare Advantage data found that **83.2% of appealed prior-auth denials were partially or fully overturned in 2022** — but **only 1 in 10 denials was ever appealed**. That is not a clinical failure. That is a staffing failure. The AMA's own write-up of this data asks the question directly in its headline: over 80% of prior auth appeals succeed, why aren't there more?

**The AMA's December 2025 survey (1,000 practicing physicians) says why.** Practices don't appeal because **62% believe appeals won't succeed based on past experience**, **48% say patient care can't wait**, and **48% cite insufficient staff time or practice resources**. Physicians report ~40 prior authorizations per week consuming ~13 hours of physician and staff time; 40% of practices employ staff working exclusively on PA; 94% say PA contributes to burnout. Denials are rising — 74% report denials increased over the past five years.

**And on January 1, 2026, CMS-0057-F changed the input data.** Medicare Advantage and Medicaid managed-care denials must now **state the specific clinical criterion applied and explain precisely why the patient did not meet it**. Before this, the standard denial said "not medically necessary" and nothing more — you cannot automate a rebuttal to a sentence with no content. Now the denial names the policy and the failed criterion. That is a structured target. This is the unlock.

The peer-to-peer call is where this collides. It's a **5–10 minute phone conversation** with the payer's medical director, **required within 72, 48, or even 24 hours** of the request or the case closes. Published research puts P2P overturn above 50%, higher in imaging and oncology. It is the single highest-yield, lowest-time-cost move in the entire denial stack — and nobody sells the preparation for it.

Provenance:
  - Signal 1 (demand): KFF/AMA — 83.2% of appealed MA prior-auth denials overturned (2022), but only 1 in 10 denials appealed; 48% of physicians cite insufficient staff time as the reason — https://www.ama-assn.org/practice-management/prior-authorization/over-80-prior-auth-appeals-succeed-why-aren-t-there-more — observed 2026-07-20
  - Signal 2 (feasibility): CMS-0057-F effective 2026-01-01 requires payers to state the specific clinical criterion and why it wasn't met, converting free-text denials into structured, rebuttable inputs — https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-prior-authorization-final-rule-cms-0057-f — observed 2026-07-20
  - Signal 3 (economic): Cohere Health raised a $90M Series C (May 2025, ~$236M total) automating prior auth — but sells to health plans, not practices; provider-side small-practice tooling remains priced at $500–2,500/mo — https://medcitynews.com/2025/05/healthcare-hospital-insurance-tech-ai/ — observed 2026-07-20
  Category: Regulatory arbitrage

## 3. The opportunity

Every dollar of venture money in prior authorization has gone to the **payer side**. Cohere Health has ~$236M and processes 12M+ requests annually — for health plans, auto-approving to reduce their admin cost. The provider-side tools that exist (Waystar, Rivet, EZAppeal, CombineHealth) are **denial-management/RCM platforms**: they work the written appeal queue, they integrate with your practice management system, they cost $500–$2,500/mo, and they're built around *claims already denied and billed*.

Nobody is serving the specific moment that actually decides the case: **a specialist has 24 hours to get on the phone and argue clinical nuance to a medical director who may not share their specialty.**

What makes that moment losable isn't clinical knowledge — the specialist has that. It's that:

- The denial letter names a payer policy (now, post-CMS-0057-F, with a specific criterion). Finding that policy, reading it, and mapping the patient's chart to its exact language is 30–45 minutes of work the physician does not have.
- The chart evidence that satisfies the criterion is scattered across notes, labs, and prior therapy history. Step-therapy failures — the single most common biologic denial basis — are especially painful to reconstruct.
- The window is 24–72 hours and the scheduling is hostile. Kimball describes waiting on hold **three times, each over 40 minutes**, and never reaching the reviewer.

So the physician walks into a 5-minute call under-armed, loses, and the practice writes it off. The 90% never-appealed number is the aggregate of that.

**The 10× claim:** turn 40 minutes of chart-and-policy archaeology into a 2-minute read. Not "AI does prior auth" — a one-page brief the physician glances at while the hold music plays.

## 4. Target market

- **Primary customer:** Practice manager or lead physician at an **independent US rheumatology, dermatology, or GI practice, 2–15 providers**, heavy biologic prescriber. These specialties are the epicenter: virtually all biologics require PA from commercial, MA, and Medicaid managed-care plans, and they carry both high denial volume and high per-case revenue.
- **Why they buy:** In their words — physicians describe the process as *"a black box"* and say the requirements *"are a way to take advantage of physicians' busy schedules"* (Kimball, STAT, Nov 2025). One insurer gives 30 days to appeal while another closes the case in 24 hours. Staff turnover makes it worse: medical groups report ~40% annual turnover for front-office and 33% for billing staff — institutional knowledge of "how you beat Aetna on this policy" walks out the door every year.
- **Rough TAM reasoning:** The US has roughly 5,000+ rheumatologists, ~13,000 dermatologists, and ~15,000 gastroenterologists, a large share in independent groups of 2–15. Call it **6,000–9,000 target practices** across the three specialties. At $400/mo, 2,000 practices is ~$9.6M ARR — well past the $5M target, so the plan doesn't need heroic penetration.
- **Why now for them:** Denials are up (74% report a five-year increase), the CMS-0057-F criterion disclosure just made denials rebuttable in a structured way, and the 2025 insurer reform pledge is widely distrusted — only 33% of physicians think it changes anything. They've stopped waiting for the system to fix itself.

## 5. Product sketch (MVP)

- **Drop the denial in.** Upload or forward the denial letter (PDF/fax/portal screenshot). It extracts payer, policy number, cited clinical criterion, deadline, and the P2P scheduling instructions.
- **The countdown.** A live clock on the P2P window — 24/48/72hr — with escalating alerts. Missing the window is the most common silent loss; this alone justifies the subscription.
- **Policy pull.** Retrieves the payer's current published medical policy for that number and highlights the exact criterion language being applied.
- **The one-page brief.** Chart facts mapped to each criterion the payer cited: which are met, which are contested, which need a fact the physician has to supply from memory. Written to be read in 2 minutes.
- **Step-therapy timeline.** Auto-assembles prior drug trials, dates, doses, and documented failures/intolerances — the evidence that wins biologic denials and is the most tedious to reconstruct.
- **Objection prep.** The 3–5 pushbacks this payer's medical directors actually use on this policy, each with a prepared response.
- **Post-call log.** Record outcome, reviewer name, argument that worked. Feeds the next brief.
- **Win/loss ledger.** Per payer, per policy, per drug — what your practice actually recovers, so the ROI is visible at renewal.

## 6. AI angle — what's load-bearing

Remove the AI and this is a folder of blank forms. Three jobs are genuinely model-work:

1. **Reading unstructured denials.** Denial letters arrive as faxes, portal PDFs, and scans, in every payer's idiosyncratic layout. Extracting policy number, criterion, and deadline reliably across hundreds of formats is exactly what vision-capable models became good enough for in the last ~18 months, and was impractical before.
2. **Criterion-to-chart mapping.** The hard, valuable step: take "patient must have documented inadequate response to two conventional systemic agents over ≥3 months" and find, in a messy longitudinal chart, whether that's true and where it's written. This is retrieval plus clinical-language reasoning. A rules engine cannot do it; a human takes 40 minutes.
3. **Argument generation grounded in the cited policy.** Not a generic appeal template — a rebuttal that quotes the payer's own criterion language back at them with the specific chart facts that satisfy it.

Note the guardrail: **the product never talks to the payer and never makes a clinical claim on its own authority.** It prepares a physician who then makes the argument. That keeps it out of clinical-decision-support regulatory territory and keeps the physician accountable — which is also what makes it defensible to sell.

## 7. Localization angle

N/A — this is a US-only play. The product is a direct function of US payer structure, CMS-0057-F, and the peer-to-peer institution. Neither the regulation nor the P2P call exists in this form elsewhere; there is no localization wedge, and attempting one would dilute the thing that makes it work.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo for 1–3 providers, $499/mo for 4–8, $899/mo for 9–15. Flat, published, self-serve, no sales call. This is deliberate positioning against a category where Myndshft, Waystar and Cohere all require a demo call and won't publish a number.
- **ACV:** ~$4,800 average.
- **Why they'll pay it:** a single overturned biologic authorization is worth thousands in retained revenue and one retained patient. Dermatology PA processing alone was measured at **$15.80 per request** in administrative cost across 11 clinics. A practice running 40 PAs/week with a rising denial rate clears the subscription on one or two saved cases a month.
- **Math to $1M ARR:** 210 practices × ~$400/mo × 12 = ~$1.0M.
- **Math to $5M ARR:** ~1,050 practices — roughly 12–15% of the ~7,000-practice core target across three specialties. Reachable without leaving the beachhead, which is the test of whether a niche is big enough.
- **Expansion path:** more providers per practice → add specialties (oncology, neurology, GI infusion) → written-appeal generation as a tier-two module → the accumulated payer/policy/outcome ledger sold as benchmarking ("your Aetna overturn rate vs. peers").

## 9. Go-to-market wedge — first 100 customers

1. **Mine the specialty society advocacy channels.** The ACR (rheumatology) and AAD (dermatology) run active, loud prior-auth advocacy campaigns and collect member horror stories. These are pre-assembled lists of exactly the physicians who are angry enough to buy. Sponsor/present at ACR and AAD regional meetings — a few hundred target practices per room, and PA is the session everyone attends.
2. **The denial-letter teardown as content.** Post anonymized, specific teardowns: "Here's the exact UHC policy criterion behind this Skyrizi denial and the four chart facts that beat it." Physicians share these compulsively because they're immediately useful. This is content marketing that doubles as product demo — and it's defensible SEO on long-tail queries like "Aetna policy [number] denial biologic."
3. **Free countdown tool as the top of funnel.** Ship the P2P deadline tracker free and standalone. It solves a real, sharp problem (missed windows) with zero PHI risk in the free tier, and it puts the brand in the workflow at the exact moment of pain. Convert to paid when they want the brief.
4. **Direct outreach to practice managers via MGMA and specialty billing groups.** Practice managers — not physicians — hold the budget and feel the staffing pain. ~150 targeted outreaches with a teardown of a real denial from their specialty; expect 10–15% to take a call given how acute this is.
5. **Biologic manufacturer field-access teams.** Pharma field reimbursement managers are measured on getting their drug approved and already sit in these practices. They can't sell software, but they route practices to tools that unstick their prescriptions. Warm, free, repeatable channel — with an explicit boundary that the product never favors a manufacturer's drug.

## 10. Build complexity — justification

**Low.** Denial ingestion is off-the-shelf document AI. Policy retrieval is scraping and indexing published payer medical policies — tedious, not hard. Brief generation is retrieval + generation. No EHR integration required for v1: the practice uploads the denial and the relevant chart excerpts, which sidesteps the single biggest thing that slows down health-tech MVPs. **8–10 weeks to a usable v1 for one or two people.** The real work is HIPAA posture (BAA, encryption, audit logging, a compliant vendor stack) and the unglamorous grind of building the payer-policy corpus — neither is technically deep, both take calendar time.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Administrative support tooling. Prepares a physician; makes no clinical determination and never contacts the payer directly. HIPAA BAA required — standard, not a barrier. |
| Ethical — no harm / dark patterns | ✅ | Helps patients get treatment they're clinically entitled to. The ethical risk to manage is fabricated clinical claims — mitigated by grounding every assertion in a chart citation the physician verifies. |
| Market exists (evidence above) | ✅ | KFF overturn data, AMA survey of 1,000 physicians, $236M into the payer side of the same problem. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | ~$25–35K covering HIPAA-compliant infra, legal/BAA setup, inference, and a clinical advisor. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire and recurring — 40 PAs/week, 13 hours, 94% cite it as a burnout driver. Not a 19–20 because the practice can (and does) absorb the loss by simply not appealing; the pain is chronic rather than existential. |
| Demand evidence | 15 | 13/15 | KFF overturn data, AMA 1,000-physician survey, $236M into the payer side, existing $500–2,500/mo provider tools proving budget exists. Short of 15 because no one is yet selling *this specific product* — the demand is inferred from an adjacent, well-evidenced pain. |
| Build feasibility | 15 | 12/15 | Off-the-shelf AI, no EHR integration in v1. Docked for HIPAA overhead and the payer-policy corpus grind. |
| Distribution clarity | 15 | 11/15 | Named channels with real lists (ACR, AAD, MGMA) and a free-tool funnel. Docked because physicians are famously hard to reach and slow to adopt; conversion math is estimated, not tested. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked below incumbents, ROI provable in one saved case. Docked because willingness to pay at $299–899 self-serve is the central untested assumption. |
| Time to first revenue | 10 | 7/10 | 8–10 weeks to v1, then a pilot period. Practices buy on a quarterly rhythm; realistic first dollar is ~3–4 months. |
| Defensibility | 10 | 4/10 | **The weak axis, honestly scored.** The payer-policy corpus and the accumulated win/loss ledger compound, but a funded RCM incumbent could bolt this on. Execution-and-focus moat with a 6–12 month head start, nothing more. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can build careful document-AI pipelines under HIPAA, and you need real access to a practicing specialist or a senior PA coordinator. Without the second, you will build a brief that reads well and loses calls. Get a rheumatologist or derm practice manager as an advisor with equity before writing code.

### Key assumptions to validate (3–5)

1. **Assumption:** Practices will pay $299–899/mo self-serve, without a procurement cycle. **How to test:** Stripe checkout behind a real landing page; 40 practice-manager outreaches; measure clicks-to-pricing and actual card entries, not verbal interest.
2. **Assumption:** The brief measurably changes P2P outcomes. **How to test:** 15 practices, 30 days, log P2P outcomes with and without briefs. Need overturn on prepped calls to beat their baseline by a visible margin.
3. **Assumption:** Post-CMS-0057-F denial letters actually contain the specific criterion, reliably enough to parse. **How to test:** Collect 100 real 2026 denial letters across the top 6 payers and measure what fraction name a policy and criterion. **This is the load-bearing one** — if payers are complying loosely, the automation premise weakens.
4. **Assumption:** Practices will upload chart excerpts without EHR integration. **How to test:** Watch 10 practices do it unassisted. If it takes more than 3 minutes, the workflow dies and v1 needs integration after all.

### Risk flags

1. **Regulatory tailwind reversal:** The entire feasibility edge rests on CMS-0057-F disclosure. Weak enforcement, or an administration that softens it, and denials revert to "not medically necessary" — parsing gets much harder. Watch enforcement through 2026–27.
2. **Incumbent bolt-on:** Waystar, Rivet, or an EHR vendor ships "P2P prep" as a feature. Low technical barrier. The defense is depth in three specialties and the outcome ledger, not the feature itself.
3. **Clinical-accuracy liability:** A brief that misstates a chart fact and a physician repeats it on a recorded call. Requires hard citation-to-source discipline, visible confidence flags, and clear "verify before you speak" framing. This is the risk that could actually kill the company.
4. **Payer countermeasure:** Payers make P2P harder to schedule, or route around the specialty-matched reviewer. The product's value survives but the win rate compresses.
5. **Physician adoption inertia:** Doctors are the hardest SMB buyer in the world. The 90%-never-appealed statistic that defines the opportunity is *also* evidence of learned helplessness — 62% already believe appeals don't work. You're selling against a belief, not just a workflow.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with document-AI capability, paired with a
                        rheumatology/dermatology practice manager or specialist as advisor
Time to revenue:        3–4 months
Capital to launch:      $25–35K
Top 3 assumptions to validate first:
  1. Post-CMS-0057-F denial letters name a specific policy + criterion — audit 100 real
     2026 letters across the top 6 payers before building anything
  2. Prepped P2P calls beat the practice's baseline overturn rate — 15-practice, 30-day
     logged comparison
  3. Practice managers self-serve at $299–899/mo — live Stripe checkout, count cards
     entered, ignore verbal enthusiasm
Kill criteria:
  - Abandon if <60% of sampled 2026 denial letters state a parseable policy criterion
  - Abandon if prepped calls show no measurable overturn lift over baseline in 30 days
  - Abandon if <3 of 40 targeted practice managers enter payment details after seeing
    a brief built from their own real denial
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 100 real denial letters dated after 2026-01-01 across UnitedHealthcare, Aetna, Cigna, Humana, Elevance and a Blues plan — through practice-manager contacts and specialty society advocacy channels. Measure precisely: what share name a policy number, and what share name the specific unmet criterion. This is the foundation; everything else is downstream of it.
- **Day 3–4:** Hand-build 10 briefs — no software, just a person doing the work — for 5 real pending P2P calls in rheumatology and derm. Sit in on or debrief every call. Ask one question afterward: *did this change what you said?*
- **Day 5:** Put the pricing page live with real Stripe checkout. Send 40 practice managers a brief built from a real denial in their specialty.
- **Decision:** Go if **≥60% of letters are parseable**, **≥3 of 5 physicians say the brief changed their argument**, and **≥3 of 40 enter payment details**. Any one of those missing means the idea needs reshaping, not building. The middle test is the honest one — if physicians read the brief and say "I already knew all this," the product is a vitamin and the 76 was too generous.
