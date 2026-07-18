---
title: "PlanB — second-option generator for veterinary clinics"
slug: vet-tiered-estimate-options
date: 2026-07-18
category: HealthTech / US — Independent Companion-Animal General Practices Losing Revenue to Declined Estimates
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Turns a declined vet estimate into a clinically-defensible cheaper plan before the client leaves the exam room."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Workflow-automation, Vertical-SaaS, Solo-builder]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlanB

## 1. One-liner

Turns a declined vet estimate into a clinically-defensible cheaper plan before the client leaves the exam room.

## 2. Trend signal — why now?

There is a measurable, well-sourced gap between what veterinarians *think* they offer and what pet owners *report* receiving. That gap is the product.

Gallup surveyed 933 practicing U.S. veterinarians (fieldwork 9 Sep – 5 Oct 2025, published 20 Jan 2026, ±3.3pp). The findings:

- **94%** say client finances often (38%) or sometimes (56%) prevent them from providing recommended treatment.
- **81%** say they always (37%) or often (44%) recommend an alternative treatment plan when cost causes a decline.
- But in the companion pet-owner study, **73% of pet owners who declined care due to cost said they were not offered a lower-priced option.**
- **98%** are concerned the patient's condition worsens or becomes chronic as a result.

Vets believe they offer a Plan B four times out of five. Owners say they heard one roughly one time in four. Somebody's wrong, and the peer-reviewed literature says it's the vets.

Dolan & Slater surveyed 1,160 veterinarians (*Animals*, May 2024). When financial limits were **known**, 91% offered a spectrum of care. When financial limits were **not known** — i.e. the ordinary case, before anyone says the word "money" — that collapses to **61%**. Only about half reported offering simpler diagnostic options first. The single significant predictor in both statistical models was *veterinarian comfort*, not knowledge.

A separate U.S. survey found **88% of veterinarians are familiar with "spectrum of care" but only 45% say they always offer a full range of options.** The barrier cited repeatedly is time: these conversations take minutes nobody has in a packed appointment block.

Meanwhile the economics turned hostile. Per iVet360 reporting covered by Today's Veterinary Business, **client visits dropped 4% in 2024** while average transaction charge rose 6.1%. Practices are covering falling volume with higher prices — which is exactly the condition under which a sticker-shocked owner walks out. Industry accounting estimates practices miss **5–10% of all charges**, worth up to $150K/yr at a $1.5M practice.

The build got cheap in the last 18 months. Veterinary AI scribes went from novelty to installed base: Scribenote raised **$8.2M seed led by a16z** and serves 6,000+ vets; VetRec is YC-backed with 10+ PIMS integrations at $99/vet/mo. Search volume for "veterinary AI" grew **over 1,680% YoY** between 2024 and 2025 to ~335K monthly searches. The integration rails and the buying appetite both exist now and did not in 2023.

Provenance:
  - Signal 1 (demand): Gallup — 94% of vets say cost blocks treatment; 81% claim to offer alternatives, but 73% of owners who declined say they were never offered a cheaper option — https://news.gallup.com/poll/700115/veterinarians-say-cost-main-driver-declined-care.aspx — 20 Jan 2026
  - Signal 2 (feasibility): Veterinary AI scribes hit mainstream with mature PIMS integration rails — Scribenote $8.2M seed led by a16z, 6,000+ vets; VetRec YC-backed with 10+ PIMS integrations — https://www.scribenote.com/blog/scribenote-pioneers-ai-scribe-to-combat-burnout-among-veterinarians-as-it-secures-8-2m-seed-round-led-by-a16z — 2025/2026
  - Signal 3 (economic): Client visits fell 4% in 2024 while transaction charges rose 6.1%; practices miss 5–10% of all charges (~$150K/yr at a $1.5M practice) — https://todaysveterinarybusiness.com/ivet360-report-042625/ — 25 Apr 2025
  - Signal 4 (clinical validation): Dolan & Slater, n=1,160 — spectrum-of-care offering drops from 91% to 61% when client financial limits are unknown; vet *comfort* is the only significant predictor — https://pmc.ncbi.nlm.nih.gov/articles/PMC11117253/ — May 2024
  Category: Tech-unlock

## 3. The opportunity

The declined estimate is the single worst moment in a veterinary practice's day. The pet doesn't get treated, the vet feels moral injury, the client feels judged, and the clinic books zero revenue on a full appointment slot. Then everyone pretends it didn't happen.

The incumbent isn't a competitor — it's the blank space after "I'm sorry, I can't afford that." Today the alternative plan gets improvised, if at all, by a tired associate at 6pm who is not confident about which diagnostics are safely droppable. Dolan & Slater identified precisely this: it's a *comfort* problem, not a knowledge problem. Vets don't downgrade a plan because they're afraid of practicing below standard of care and of the liability that implies.

The existing tools miss it from both sides. **Instinct Standards** publishes excellent evidence-based monographs with a spectrum-of-care lens — but it's a reference library you consult, not something that reads *this* estimate for *this* patient and produces a costed Plan B in fifteen seconds. **PIMS estimate builders** (AVImark, Cornerstone, ezyVet) let you hand-build line items; they have no clinical opinion about what to remove. **AI scribes** (Scribenote, VetRec, HappyDoc) capture what was said after the fact and stop at the SOAP note. Nobody sits at the decision point.

The 10× isn't "cheaper software." It's converting a walk-out into a $180 transaction while producing the medical-record documentation that makes the vet legally and psychologically safe doing it.

Important design constraint, learned from disconfirming research: Today's Veterinary Business explicitly warns against naive tiering — *"I'm not a fan of that approach because pet owners might think they should pick the services they want and that all the recommendations are somewhat equal."* A dumb good/better/best menu is a known anti-pattern in this profession. The product must present a **clinically sequenced** alternative — "here is what we defer and what we monitor instead, and here is the trigger that brings us back" — not a pricing tier list.

## 4. Target market

- **Primary customer:** Practice owner or hospital manager at an independent 1–4 DVM companion-animal general practice in the US, $800K–$3M annual revenue, running AVImark, Cornerstone, ezyVet, Shepherd, or Digitail.
- **Why they buy:** They watch estimates get declined weekly and book nothing. Gallup: 94% report cost blocking treatment. Their associates are burning out over it — 98% are concerned about patients deteriorating after a decline. A tool that recovers even two declined estimates a week at $150 each pays for itself six times over.
- **Rough TAM reasoning:** AVMA counts **30,000+ US veterinary practices**; **82.6%** are primarily general medicine and surgery. Corporates own 22% and are largely unreachable for a bootstrapper, leaving roughly **19,000–20,000 independent GP clinics** as the serviceable base. At $199/mo, capturing 2.5% of that base is ~$1.15M ARR.
- **Why now for them:** Visits fell 4% in 2024 while they raised prices 6.1%. They cannot price their way out any further, and every declined estimate is now a bigger share of a shrinking book.

## 5. Product sketch (MVP)

- **Plan B in one click** — from an existing estimate in the PIMS, generate a clinically-sequenced lower-cost alternative with what's deferred, what's substituted, what's monitored instead, and the trigger that escalates back to the full plan.
- **Deferral rationale, written for the record** — each omitted item carries a one-line clinical justification, so the medical record shows a reasoned decision rather than a discount.
- **Practice-priced, not list-priced** — pulls the clinic's own fee schedule so the alternative reflects real local pricing, not a generic benchmark.
- **Client-facing handout** — plain-language summary the owner takes home explaining what's being done, what's being watched, and what symptoms mean "call us now."
- **Declined-estimate log** — tracks what was declined, what Plan B was offered, and whether it was accepted. Gives the owner the first real price-elasticity data they've ever had.
- **Recheck trigger queue** — surfaces patients on a deferred plan whose recheck window is closing, so a downgraded plan doesn't become an abandoned patient.
- **Evidence citation per recommendation** — links each substitution to published spectrum-of-care guidance, which is what makes the associate comfortable enough to actually use it.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody opens.

The load-bearing work is clinical reasoning under a cost constraint, executed in under thirty seconds: read a specific estimate for a specific signalment and presenting complaint, decide which diagnostics are safely deferrable versus which are load-bearing for the differential, propose substitutions (in-house chemistry instead of a send-out panel; empirical therapy with a defined recheck instead of imaging first), and write a defensible justification for each in medical-record language.

That's a judgment task over a long tail of presentations. No rules engine covers it — the combinatorics of species × complaint × comorbidity × owner constraint are exactly why practices don't have a playbook today. It's also why the 2024 study found *comfort* was the binding constraint: the vet needs to see reasoning they'd endorse, with a citation, fast enough to use mid-appointment.

The honest risk: this is clinical decision support in a licensed profession. The product must be framed and built as a drafting aid the veterinarian reviews, edits, and approves — never as autonomous recommendation. That's both an ethics requirement and a liability requirement, and it shapes the whole UX.

## 7. Localization angle

N/A — this is a US-first play. The wedge is the specific US structure of private-pay companion-animal medicine: no third-party payer for most visits, so the cost conversation happens directly between vet and owner in the exam room, and the practice eats 100% of a decline. In markets with high pet-insurance penetration (Sweden ~90%, UK ~25%) the decline dynamic is materially weaker. The UK is the obvious second market — its "contextualized care" movement is the same idea under a different name, and the CMA's ongoing scrutiny of veterinary pricing transparency creates a parallel pull — but it's a phase-two expansion, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo per practice for 1–2 DVMs; $349/mo for 3–5 DVMs. Practice-level, not per-seat — techs and front desk need access for the log and handouts, and per-seat pricing would suppress exactly the usage that creates value.
- **Benchmark sanity check:** PIMS themselves run $290–$549/mo (Shepherd $299 for one doctor, Neo $290, Cornerstone $549). AI scribes run $79–$150/vet/mo. A $199 practice-wide add-on sits comfortably inside an established software budget.
- **ACV:** ~$2,600 blended.
- **Math to $1M ARR:** 385 practices × $199/mo × 12 = $920K; with ~20% on the $349 tier, ~$1.02M. That's **2% of the ~19,000 independent GP base.**
- **Math to $5M ARR:** ~1,600 practices (8% of the independent base) plus expansion into corporate groups — a single mid-size consolidator with 200 hospitals at negotiated rates is worth $400–500K ARR alone. Realistically $5M requires winning 2–3 corporate accounts, which means the timeline stretches past 24 months.
- **Expansion path:** per-DVM tiers as practices grow → declined-estimate benchmarking across the customer base (what do comparable clinics recover?) → a payment-plan/financing referral cut, since Gallup shows only 41% of vets regularly offer payment options and that's an obvious adjacent monetization.
- **Margin note:** inference is the main variable cost. A Plan B generation is a bounded reasoning task; at realistic volumes (30–80/mo per practice) this is single-digit dollars per account per month. Gross margin holds above 85%.

## 9. Go-to-market wedge — first 100 customers

- **The VMA state-conference circuit.** There are ~50 state veterinary medical associations running annual CE conferences with exhibit halls. Booths at mid-size state VMAs run $1,200–$2,500. Practice owners attend specifically to shop tools. Work 6–8 conferences in year one; a working demo that takes a real estimate and produces a real Plan B in thirty seconds is a hallway-stopping demo. Target 15–25 trials per conference.
- **Ride the spectrum-of-care movement, don't invent a category.** AVMA published a JAVMA spectrum-of-care supplement; AAVMC runs a Spectrum of Care Initiative across veterinary colleges; AAHA publishes on it actively. This is an organized professional movement actively looking for implementation tooling and finding only reference material. Sponsor/co-present CE webinars with the educators already evangelizing it — they have the audience and no product.
- **Target new graduates and their employers.** Dolan & Slater found vets with 20+ years' experience were 3–4× *less* likely to offer spectrum of care than newer practitioners. New grads want this and are the least comfortable improvising it. MentorVet and similar early-career wellbeing programs are a direct channel to exactly the cohort with the pain and the least entrenched habits.
- **The declined-estimate audit as a free wedge.** Offer any practice a free one-time analysis: export last 90 days of declined estimates from the PIMS, return a report showing total declined dollars and what a Plan B would have plausibly recovered. This is a cheap, concrete, self-serving artifact — it quantifies their bleed in their own numbers and lands the trial. Run it on 200 clinics sourced from state licensing directories.
- **PIMS marketplace listings.** Covetrus Pulse alone lists 250+ third-party integrations, and Vetstoria/Otto/VitusVet have all proven the integration-partner path. Slower than direct sales but compounding, and it borrows the PIMS's credibility.

## 10. Build complexity — justification

**Medium.** The generation engine is off-the-shelf frontier-model reasoning over a curated corpus of published spectrum-of-care guidance plus the practice's own fee schedule — no model training required. The real work is PIMS integration: ezyVet has a documented REST API with OAuth 2.0, but AVImark is a client-server legacy application serving 11,000+ hospitals, and reaching it means either a partner agreement or a local agent. That integration surface is what pushes this from Low to Medium.

Realistic path: 10–12 weeks to a working v1 against ezyVet plus a manual paste-in fallback (paste the estimate, get a Plan B) that works for every practice regardless of PIMS. The paste-in path is what lets you sell before integrations are done. Add AVImark and Cornerstone over the following 3–4 months. A technical founder plus a veterinarian advisor (equity, not hire) is the right shape; the clinical corpus curation genuinely requires a DVM's judgment.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Clinical decision support presented to and approved by a licensed veterinarian. No autonomous recommendation, no VCPR created, no direct-to-consumer clinical advice. Must ship with clear professional-use framing. |
| Ethical — no harm / dark patterns | ✅ | Explicitly increases access to care for financially constrained owners — the alternative today is nontreatment or economic euthanasia. Guardrail required: the product must never propose a plan below reasonable standard of care, and must always surface the escalation trigger. |
| Market exists (evidence above) | ✅ | Gallup n=933, Dolan & Slater n=1,160, 30,000+ US practices, funded adjacent category (a16z, YC). |
| 1–5 person team can build this | ✅ | Technical founder + DVM advisor; 10–12 weeks to sellable v1 via paste-in fallback. |
| Launchable with <$50K / ₹40L | ✅ | ~$25–35K: conference booths ($10–15K), DVM advisor equity/stipend, inference, incorporation and professional-liability review. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt weekly, costs real money, and carries genuine moral weight — 98% of vets worry about post-decline deterioration. Not 18+ because the practice survives without solving it; it's a recovered-revenue play, not a compliance deadline. Nobody gets fined for skipping it. |
| Demand evidence | 15 | 13/15 | Unusually strong for a fresh idea: two independent surveys (n=933, n=1,160) quantifying the exact gap, a funded adjacent category, 1,680% YoY search growth in veterinary AI. Short of 15 because no one is yet paying for *this specific* product — demand for the outcome is proven, willingness-to-pay for the tool is inferred. |
| Build feasibility | 15 | 11/15 | Core reasoning is off-the-shelf. PIMS integration — especially legacy AVImark — is the tax. The paste-in fallback rescues the timeline and de-risks the launch. |
| Distribution clarity | 15 | 12/15 | Named channels with real math: ~50 state VMA conferences, an organized professional movement with no tooling, and the free declined-estimate audit as a concrete wedge. Not higher because veterinary sales cycles run slower than the outreach math suggests and owners are notoriously software-fatigued. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked directly against PIMS ($290–549) and scribes ($79–150). 385 practices to $1M is credible. Docked for the $5M path genuinely requiring corporate deals, which is a different sales motion than the one that gets you to $1M. |
| Time to first revenue | 10 | 7/10 | Paste-in v1 can be pre-sold and generating revenue in 8–12 weeks. Slower than a pure self-serve tool because clinics buy after seeing it work on their own cases, and conference-driven pipelines are lumpy. |
| Defensibility | 10 | 5/10 | Honest score. The clinical corpus and accumulated declined-estimate/acceptance data compound into a real advantage by month 12 — knowing which Plan B variants actually get accepted is proprietary and valuable. But at month 3 it's copyable, and any funded scribe company (Scribenote has a16z money and 6,000 vets) could bolt this on as a feature. Speed and a narrow focus are the only early moat. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This does not work without a practicing veterinarian deeply involved. The clinical corpus, the deferral logic, and the credibility to sell into VMA conferences all require a DVM. A pure software founder building this alone will produce something vets won't trust — and trust *is* the product, per the comfort finding.

### Key assumptions to validate (3–5)

1. **Assumption:** Practices will pay $199/mo for recovered revenue rather than treating declined estimates as an unavoidable cost of business. **How to test:** Run the free declined-estimate audit on 25 clinics; measure how many, on seeing their own quantified bleed, agree to a paid pilot. Need ≥6.
2. **Assumption:** Veterinarians will trust and actually use an AI-drafted alternative plan mid-appointment, given the comfort barrier is psychological rather than informational. **How to test:** Put a working prototype in front of 15 DVMs with real anonymized declined estimates. Measure: would they present this to a client as-is, with edits, or not at all? Need ≥60% "as-is or light edits."
3. **Assumption:** Plan B acceptance is materially better than zero — that a downgraded plan converts a meaningful share of walk-outs. **How to test:** 8-week pilot in 5 clinics logging declined estimates and Plan B outcomes. Need ≥25% acceptance to justify the pricing.
4. **Assumption:** PIMS integration is achievable without a blocking partner agreement. **How to test:** Build against the ezyVet public API in 2 weeks; separately, get a straight answer from Covetrus on AVImark third-party access terms.
5. **Assumption:** Liability framing holds — that professional-liability carriers and state boards view this as acceptable decision support. **How to test:** One consultation with a veterinary practice attorney and an AVMA PLIT conversation, before writing marketing copy.

### Risk flags

1. **Regulatory / liability risk:** Clinical decision support in a licensed profession. If a deferred diagnostic is later implicated in a bad outcome, the product's role will be scrutinized. Mitigated by human-in-the-loop approval and thorough record documentation — but this must be designed in from day one, not retrofitted.
2. **Incumbent absorption:** Scribenote (a16z, 6,000+ vets) or VetRec (YC) already sit in the exam room capturing the conversation. Adding "generate an alternative plan" is a natural adjacent feature for them and they have the distribution. The window is real but not indefinite.
3. **Professional resistance to tiering:** Today's Veterinary Business has published directly against good/better/best presentation. If the profession reads this as "discount software" or as pressure to practice below standard of care, adoption stalls regardless of the economics. The clinical-sequencing framing is not marketing polish — it's survival.
4. **Platform dependency:** Value is much higher with PIMS integration, and the major PIMS vendors (Covetrus, IDEXX) are large companies with their own software ambitions who control that access.
5. **Measurement difficulty:** Proving incremental revenue requires a counterfactual — you can't easily show what the client would have done without Plan B. Churn risk at renewal if the owner can't see the ROI in their own numbers.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a practicing DVM co-founder or
                        heavily-committed clinical advisor. Comfort with slow, trust-driven
                        professional sales is mandatory.
Time to revenue:        8–12 weeks (paste-in v1, pre-sold via declined-estimate audits)
Capital to launch:      $25–35K
Top 3 assumptions to validate first:
  1. Vets will present an AI-drafted alternative plan to a client — 15 DVM prototype
     sessions on real declined estimates, need ≥60% "would use as-is or lightly edited"
  2. Plan B converts declines — 8-week, 5-clinic pilot, need ≥25% acceptance rate
  3. Owners pay for recovered revenue — free declined-estimate audit on 25 clinics,
     need ≥6 converting to paid pilot
Kill criteria:
  - Abandon if <25% of declined estimates convert on a Plan B across a 5-clinic,
    8-week pilot — the core economic premise fails and no pricing fixes it
  - Abandon if <40% of DVMs in prototype testing would present the output to a client
    without heavy rewriting — the comfort barrier is not actually addressable by software
  - Abandon if a funded scribe incumbent (Scribenote, VetRec, HappyDoc) ships an
    equivalent alternative-plan generator before your v1 reaches 25 paying practices
  - Abandon if veterinary practice counsel or PLIT flags unacceptable liability exposure
    that human-in-the-loop approval does not resolve
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the paste-in prototype only — no integration, no auth, no billing. Paste an estimate plus signalment and presenting complaint, get a clinically-sequenced Plan B with per-item deferral rationale and citations. Assemble 12 realistic declined-estimate scenarios with a DVM advisor.
- **Day 3–4:** Recruit 15 practicing DVMs through veterinary Facebook groups, VIN, and early-career networks like MentorVet. Offer $75 for a 30-minute session. Show each 4 scenarios. Ask the single decisive question: *"Would you hand this to a client right now?"* Force a three-way answer — as-is / with edits / no. Capture verbatim objections; the objections matter more than the score.
- **Day 5:** Cold-email 40 independent practice owners from state licensing directories offering the free declined-estimate audit. Measure reply rate and how many will actually export the data.

**Falsifiable decision rule:** Proceed only if **≥9 of 15 DVMs** say they'd present the output as-is or with light edits, **and ≥6 of 40** practice owners agree to the audit. Below either threshold, the binding constraint is trust rather than tooling — and that is not something a solo builder fixes with more software.
