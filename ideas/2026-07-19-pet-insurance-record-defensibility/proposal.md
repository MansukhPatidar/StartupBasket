---
title: "PriorProof — records defensibility desk for vet clinics"
slug: pet-insurance-record-defensibility
date: 2026-07-19
category: HealthTech / US — Independent Companion-Animal Practices Whose Medical Records Decide Whether a Client's Pet Insurance Claim Gets Paid
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the vague line in a vet's note that lets an insurer call a condition pre-existing."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [AI-agent, SMB, Compliance-driven, Solo-builder, Workflow-automation]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PriorProof

## 1. One-liner

Catches the vague line in a vet's note that lets an insurer call a condition pre-existing.

## 2. Trend signal — why now?

Three things moved at once, and they move in the same direction.

**The legal burden flipped.** The NAIC Pet Insurance Model Act states plainly: "The pet insurer has the burden of proving that any preexisting condition exclusion applies to the condition for which a claim is being made." As of February 2026, 14 states have passed laws based on the Model Act — Florida effective 1 Jan 2026, New Jersey effective 1 Jan 2027. For a decade, ambiguity in a vet's chart defaulted to the insurer. In these states it now defaults to the pet owner — **but only if the record is specific enough to make the insurer's evidence look thin.** A vague record still loses, because vague gives the carrier something to point at. Specificity is now worth actual money, and nobody has retooled documentation around that.

**The money got big enough to fight over.** NAPHIA's 2026 State of the Industry report: 7.6 million pets insured across North America, US gross written premium up 20.8% to $5.2 billion, insured-pet count up 9% YoY in the US. Penetration is still only 4.27% of US pets — this is a market compounding, not plateauing.

**The documentation tooling arrived — pointed the wrong way.** Twelve-plus veterinary AI scribes now ship at $40–450/mo (ScribbleVet $40–200, Talkatoo $126, HappyDoc ~$119, Scribenote free–$79). Every one of them optimizes for *clinical completeness and speed*. None score a note against the specific language patterns an insurance adjuster uses to deny. The transcription problem is solved and commoditized; the adjudication-defensibility problem is untouched.

The gap is documented in the insurers' own guidance. Lemonade's vet-facing guide states: "A clear line like 'first noticed on [date]' is priceless. Vague or missing records create doubt, and doubt usually favors the insurer" — and warns that phrases like "intermittent limp for some time" give the carrier room to deny. That's a published, deterministic rule set for how notes get attacked. It just isn't wired into anything at the moment the note is written.

Provenance:
  - Signal 1 (demand): 78% of dental practices report rising denials driven by payer reinterpretation, not billing error — the same payer-scrutiny dynamic now hitting vet-adjacent claims; pet-side, "claims are commonly denied if sufficient medical records aren't provided" per NAPHIA president Sammi-Jo Nevin — https://money.com/pet-insurance-claim-denied-what-to-do/ — 2026-07-19
  - Signal 2 (feasibility): 12+ veterinary AI scribes shipping at $40–450/mo, proving clinics will install AI in the note-writing workflow and that ambient capture is off-the-shelf — https://www.vetsoftwarehub.com/article/veterinary-ai-scribe-pricing-comparison-2026 — 2026-07-19
  - Signal 3 (economic + regulatory): NAIC Model Act shifts burden of proof to the insurer; 14 states adopted as of Feb 2026; US GWP $5.2B, +20.8% YoY, 7.6M pets insured — https://content.naic.org/sites/default/files/model-law-633.pdf + https://naphia.org/industry-data/ — 2026-07-19
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents are AI scribes, and they're solving the wrong half of the problem.

A scribe listens to the exam and produces a clean SOAP note. Good note — clinically. Then it writes "intermittent limp for some time," because that's what the vet said, and it's an accurate transcription. Six months later the client files a cruciate claim and the carrier quotes that exact phrase back as evidence of a pre-existing condition. Claim denied. The client is out $4,000, furious, and the clinic's front desk absorbs three weeks of phone calls, records re-pulls, and appeal support — unbilled.

The scribes are optimized for the vet's time. Nobody is optimized for the note's **survivability under adversarial review**. That's a different objective function, and it's a narrow, learnable one: insurers deny on a small, published set of patterns — undated onset, unresolved symptom language, "chronic"/"recurrent"/"ongoing" without a first-observed date, missing differentials, absent resolution notes on prior episodes.

The wedge: **catch the denial-bait phrase while the vet is still in the room and the correction is free.** After the fact, fixing a record is either impossible or looks like tampering. At the moment of writing, it's a ten-second edit that costs nothing and changes the outcome of a claim nobody has filed yet.

The regulatory shift is what makes this newly winnable rather than merely nice. Pre-Model-Act, a well-documented record and a vague one both lost to a determined carrier. Post-Model-Act in 14 states, the carrier must affirmatively prove the exclusion — so a record that is specific, dated, and closes out prior episodes doesn't just help, it strips the carrier of its evidence. Documentation quality converts directly into claim outcomes for the first time.

Why hasn't it been built? Three reasons, all structural. The scribe vendors are in a land-grab on transcription accuracy and PIMS integrations; denial-defensibility is an orthogonal feature they'd have to build domain expertise for. The pet insurers won't build it — a tool that makes records harder to deny against is directly adverse to their loss ratio. And the natural buyer, the clinic, didn't feel the pain sharply until insured-pet volume crossed the threshold where a few insured claims a week became a few a day.

## 4. Target market

- **Primary customer:** Practice owner or practice manager at independent US companion-animal clinics, 1–4 DVMs, in the 14 Model-Act states (Florida first — effective Jan 2026). Practices with a meaningfully insured client base: roughly 10%+ of visits involving a claim.
- **Why they buy:** Not altruism — front-desk labor and client retention. A denied claim generates a records request, a client phone call, an appeal support burden, and a client who blames the clinic for "writing it wrong." Front-desk staff at solo-doctor practices already spend 30–45% of their time on administrative work including records processing and insurance paperwork; medical records consume 30–40% of a veterinarian's workday. Every prevented denial is hours of unbilled admin that never happens.
- **Rough TAM reasoning:** 30,000+ US veterinary practices, majority small-to-mid companion-animal clinics with 1–3 DVMs. Filter to companion-animal, independent (non-corporate), in Model-Act states with sufficient insured volume: a realistic serviceable base of 6,000–9,000 clinics. At $200/mo that's a $14–21M ceiling — comfortably above the $5M target, small enough that VC-backed players won't crowd it early.
- **Why now for them:** Insured-pet count up 9% YoY means the insured share of any given clinic's caseload is visibly rising. Florida clinics hit the Model Act in January 2026. And their staffing situation is dire — over 60% of veterinarians report high exhaustion, with administrative overload a named top driver. They are actively buying admin-reduction tools right now; the scribe adoption wave proves the budget line exists and the install path is open.

## 5. Product sketch (MVP)

- **Denial-risk scoring on every note.** Each finalized SOAP note gets a score and a flagged-phrase list — "intermittent limp for some time" highlighted, with the reason: *undated onset, carrier will read as pre-existing.*
- **Inline rewrite suggestions.** One-click replacement with defensible language: "first observed by owner 14 July 2026; no prior lameness documented in this limb." Vet accepts, edits, or dismisses.
- **Onset-date enforcement.** Any symptom mention without a first-observed date gets flagged before the note can be signed. This single rule is the highest-value check in the product.
- **Resolution close-out prompts.** When a prior episode exists in the patient's history and the current note doesn't address it, prompt the vet to explicitly document resolution — the "different ear, different cause, resolved condition" note that is the strongest appeal evidence.
- **Pre-submission claim packet review.** Before records go to a carrier, run the full history and surface which phrases across *all* notes the adjuster is most likely to cite, and what supporting documentation to attach alongside.
- **State-aware rule profiles.** Model-Act state vs. non-Model-Act state changes what matters; Florida and New Jersey ship as distinct profiles with effective dates.
- **Denial post-mortem loop.** When a claim is denied anyway, the clinic logs the carrier's stated reason. That feedback trains the rule set and produces the clinic's own denial-pattern report by carrier.
- **Works alongside the existing scribe.** Ingests the note the clinic's current scribe or PIMS already produces. We are not asking anyone to switch transcription vendors.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist.

The core task is adversarial reading: take a free-text clinical note and predict how a specific insurance adjuster will attack it. That's semantic, not keyword-matching. "Intermittent limp for some time," "owner reports this has been going on a while," "chronic ear issues" and "has had this before" are lexically unrelated and all fail for the same reason — undated, unresolved symptom history. A regex list would miss most of them and produce false positives that get the tool uninstalled in week two.

Second load-bearing job: generating the *replacement* language. It has to stay clinically accurate, preserve the vet's actual finding, and remain honest — the whole product dies if it ever nudges a vet toward writing something untrue. It's a constrained rewrite conditioned on the clinical facts, which is exactly a language-model task and nothing else.

Third: cross-note reasoning over patient history to spot the unclosed prior episode. That's retrieval plus inference across an unstructured longitudinal record.

The rule set is AI-assisted but human-curated — extracted from published carrier guidance, Model Act text, and the clinic's own denial post-mortems. That curation is the moat; the model is the engine.

## 7. Localization angle

N/A — this is a US-first play, and deliberately so. The wedge *is* a US regulatory artifact: the NAIC Model Act's burden-of-proof inversion, adopted state-by-state. There's no version of this that ports to India or SEA, where pet insurance penetration and the underlying legal framework don't exist yet.

The one geographic expansion that makes sense is the UK, where pet insurance penetration is far higher than the US and pre-existing exclusions are similarly contested — but that's a v2 market with a different rule set, not a launch consideration. Within the US, the "localization" that matters is state-by-state: which of the 14 Model-Act states a clinic sits in changes the rules, and that's a shipped product feature, not a marketing angle.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo per clinic (not per DVM — deliberately undercutting the per-seat scribe pricing model and removing the objection that this is "a second scribe fee"). $349/mo tier for multi-location or high-insured-volume practices, adding the denial post-mortem analytics and carrier-specific reporting.
- **ACV:** ~$2,400 base, ~$2,900 blended with tier mix.
- **Rough math to $1M ARR:** 350 clinics × $199/mo × 12 = $836K; with 25% on the $349 tier, ~$1.02M. That's 350 clinics out of a 6,000–9,000 serviceable base — under 5% penetration. Achievable.
- **Rough math to $5M ARR:** ~1,700 clinics, or ~1,200 clinics plus expansion into corporate groups (NVA, Mars-owned locations) where one contract lands dozens of hospitals. The corporate path is real but slow — it's the year-3 story, not the plan.
- **Expansion path:** Per-claim-packet review as usage-based upsell for high-volume practices. Carrier-specific denial benchmarking ("your Trupanion denial rate vs. peers") as a premium analytics tier. Longer-term, the aggregate denial-pattern dataset across hundreds of clinics is independently valuable — though selling it back to insurers is adverse to the customer and I'd rule it out on principle.
- **Margin note:** Inference cost per note is cents; at $199/mo per clinic running perhaps 400 notes/month, gross margin sits comfortably above 85%.

## 9. Go-to-market wedge — first 100 customers

- **Florida first, for a reason.** The Model Act took effect there 1 Jan 2026. Build a list of independent companion-animal practices in FL metro areas (Tampa, Orlando, Jacksonville, Miami-Dade) from state veterinary licensing records and Google Maps — filter out corporate-owned by cross-referencing NVA/Mars/VCA location lists. Target ~1,200 clinics. Cold email the practice manager with a specific hook: "Florida's new pet insurance law shifted the burden of proof to the carrier. Your notes now decide claims. Here's a free audit of 10 of yours." Expect 3–5% to take the free audit.
- **The free audit IS the demo.** Clinic sends 10 recent de-identified notes; we return a scored report showing exactly which phrases a carrier would cite. This is the entire sales motion — it's self-evidently valuable, takes us near-zero marginal effort, and converts because the vet sees their own words turned against them. Target 25–35% audit-to-paid conversion.
- **Practice manager communities.** The Veterinary Hospital Managers Association (VHMA) and the large practice-manager Facebook groups are where this buyer actually talks. Not ads — publish the denial-phrase research as a free resource ("the 20 phrases that get pet insurance claims denied"), which is genuinely useful standalone content and directly demonstrates the product's thesis.
- **Scribe-adjacent partnership.** The scribe vendors are not competitors — we consume their output. A referral or integration arrangement with a mid-tier scribe (Scribenote, ScribbleVet) puts us in front of an already-installed, already-AI-comfortable customer base. They get a differentiating feature they don't have to build; we get distribution.
- **Conference presence.** VMX and AVMA Convention (Anaheim, 2026) — but as a talk on documentation and claim denials, not a booth. This audience buys from perceived domain authority, not from swag.

## 10. Build complexity — justification

**Medium.** The AI layer is off-the-shelf — note ingestion, semantic flagging, and constrained rewriting are standard LLM work with no custom model training required. The real work is threefold: curating a defensible, accurate rule set from carrier guidance and Model Act text (this needs a domain advisor — a veterinary billing specialist or a claims adjuster, on contract); integrating with the PIMS layer to read notes and patient history (ezyVet, Cornerstone, AVImark — each a separate, tedious integration); and getting false-positive rates low enough that vets don't disable it. A pair could ship a credible v1 in 10–14 weeks, starting with file/copy-paste ingestion and a single PIMS integration, deferring the rest.

The PIMS integration work is what pushes this from Low to Medium. It's tedious but not novel, and the manual-ingestion fallback means it doesn't block first revenue.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Improving documentation accuracy and specificity is squarely legal. Product must never suggest a clinically untrue statement — that's a hard design constraint, enforced in prompt design and reviewed in QA. |
| Ethical — no harm / dark patterns | ✅ | The product makes records *more* specific and accurate, which serves the patient, the client, and honest adjudication. It doesn't help anyone lie. A carrier with a genuine pre-existing case still wins. |
| Market exists (evidence above) | ✅ | 7.6M insured pets, $5.2B GWP +20.8%, 30K+ clinics, proven willingness to pay $40–450/mo for adjacent AI documentation tooling. |
| 1–5 person team can build this | ✅ | Two builders plus a contract domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs are trivial at pilot scale; the meaningful spend is the domain advisor and a Florida outbound list. Well under $25K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money and real unbilled labor per denial, felt weekly at a clinic with decent insured volume. Docked because the clinic is not the party losing the reimbursement — the client is. That indirection is the single biggest weakness in this idea and I'm scoring it honestly. |
| Demand evidence | 15 | 12/15 | Strong adjacent evidence: proven spend on vet AI documentation tools, documented denial-from-vague-records problem in carriers' own published guidance, hard NAPHIA market data. Docked because I could not source direct verbatim vet complaints about *this specific* framing — that's the first thing to validate. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI, standard stack, manual-ingestion fallback for v1. PIMS integrations and false-positive tuning are the real work. 10–14 weeks for a pair. |
| Distribution clarity | 15 | 12/15 | Named state, named list, named buyer, and a free-audit motion that is genuinely compelling and near-zero marginal cost. Docked because audit-to-paid conversion is an estimate, not an observed number. |
| Revenue mechanics | 15 | 11/15 | $199/mo is benchmarked directly against scribe pricing the same buyer already pays. 350 clinics to $1M is credible. Docked because clinic-level (not per-seat) pricing caps expansion revenue, and ROI is prevention-based — harder to prove than a recovered-dollars pitch. |
| Time to first revenue | 10 | 8/10 | The free audit can run manually before the product is fully built — pre-sales are possible inside 6–8 weeks. |
| Defensibility | 10 | 6/10 | Soft moat, honestly assessed. The curated denial rule set plus the accumulating denial post-mortem feedback loop compounds and is genuinely hard to replicate at month 12. But a well-funded scribe vendor could bolt on a version of this. The bet is on the 12-month head start and the depth of the rule set. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can ship LLM product *and* access to real veterinary billing/claims expertise. Don't attempt it without the second half — the rule set is the product, and getting it wrong produces false positives that kill adoption in week two.

### Key assumptions to validate (3–5)

1. **Assumption:** Clinics feel enough pain from client claim denials to pay $199/mo, despite not being the party losing the reimbursement. **How to test:** 30 structured calls with FL practice managers. Ask what happens operationally after a denial — count the hours, the calls, the re-pulls. If they can't quantify it, this idea's core weakness is fatal.
2. **Assumption:** Real vet notes contain denial-bait phrases at a high enough rate to make the product visibly valuable. **How to test:** Run the free audit manually on 200 de-identified notes from 10 clinics. Need ≥30% of notes carrying at least one flaggable phrase for the demo to land.
3. **Assumption:** Vets will accept inline documentation suggestions rather than experiencing them as second-guessing of clinical judgment. **How to test:** Ship a manual-review pilot to 5 clinics; measure suggestion accept rate. Below 40% acceptance means the framing or accuracy is wrong.
4. **Assumption:** The Model Act's burden-of-proof shift actually changes claim outcomes in practice, not just on paper. **How to test:** Interview 5 pet insurance claims adjusters or appeals specialists (Paws & Appeals charges $149/appeal and would have data). If carriers are behaving identically post-Act, the "why now" weakens substantially.

### Risk flags

1. **Buyer-beneficiary mismatch:** The clinic pays; the client receives the financial benefit. This is the structural weak point. Mitigation is to sell on front-desk labor savings and client retention, not on the client's reimbursement — but if practice managers don't feel the admin burden acutely, pricing collapses toward $99.
2. **Platform dependency:** PIMS vendors (IDEXX/ezyVet, Covetrus) control note access. If they close APIs or ship a competing feature, the integration path narrows. Mitigation: manual and file-based ingestion always remains a supported path.
3. **Competitive encroachment:** Any of 12+ funded scribe vendors could add denial-scoring as a feature. This is the most likely way the idea dies. The defense is rule-set depth and the denial post-mortem feedback loop — get to a few hundred clinics before anyone notices the category.
4. **Ethical boundary drift:** Under commercial pressure to show results, there's a real pull toward suggesting language that shades the truth. That would be both wrong and eventually fatal — a carrier or state regulator noticing systematic record-shaping would end the company. The constraint has to be architectural and non-negotiable from day one.
5. **Regulatory reversal:** Insurer lobbying could soften Model Act adoption in remaining states. The 14 already-adopted states are the floor, not a guarantee of expansion.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder shipping LLM product, paired with a
                        contract veterinary billing / claims-adjuster advisor.
                        Do not build this without the domain half.
Time to revenue:        6–10 weeks (manual free-audit pre-sales precede full product)
Capital to launch:      $20–25K (domain advisor retainer, outbound list, inference)
Top 3 assumptions to validate first:
  1. Clinics quantify real admin pain from client denials — 30 FL practice-manager calls
  2. Denial-bait phrases appear in ≥30% of real notes — manual audit of 200 de-identified notes
  3. Vets accept inline suggestions ≥40% of the time — 5-clinic manual pilot
Kill criteria:
  - Abandon if fewer than 8 of 30 practice managers can name a concrete cost
    (hours or lost clients) from a client's denied claim
  - Abandon if flaggable-phrase rate in real notes is below 15% — the demo won't land
  - Abandon if suggestion accept rate stays below 40% after two prompt iterations
  - Abandon if a major scribe vendor ships equivalent denial-scoring before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the denial-phrase rule set v0 by hand. Pull published carrier documentation guidance (Lemonade's vet guide, ASPCA's SOAP-notes resource, Figo's medical-records FAQ) and the NAIC Model Act text. Produce a concrete list of 20 flaggable patterns with the reasoning for each. This is a day of reading, and it is the whole foundation.
- **Day 3–4:** Source 200 de-identified veterinary notes — via 10 friendly clinics, or veterinary education case repositories. Run the rule set manually plus LLM-assisted. Compute the flaggable-phrase rate. **This is the falsifiable number: if under 15%, stop.**
- **Day 4–5:** 30 cold calls to Florida practice managers. Single question framing: "When a client's pet insurance claim gets denied, what happens in your clinic over the next two weeks?" Do not pitch. Count how many independently name records, phone-call burden, or a lost client. **Need 8+ of 30 to name a concrete cost.**
- **Day 5:** Go/no-go on two hard numbers — flaggable-phrase rate ≥15%, and ≥8/30 managers naming a concrete cost. Both must clear. Either one failing means the buyer-beneficiary mismatch is fatal and the idea goes in the drawer.
