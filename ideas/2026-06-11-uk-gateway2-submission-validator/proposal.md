---
title: "GateProof — Gateway 2 validator for HRB architects"
slug: uk-gateway2-submission-validator
date: 2026-06-11
category: PropTech / UK Architecture Practices & Principal Designers (HRB work)
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Pre-flights your Gateway 2 evidence pack against the BSR's rejection criteria so it clears validation first time."
tags:
  vertical: PropTech
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, SMB, UK, Construction]
axes:
  problem: 16
  demand: 13
  build: 11
  distribution: 12
  revenue: 10
  time: 7
  defensibility: 6
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# GateProof — Gateway 2 submission validator for HRB architects

## 1. One-liner

Pre-flights your Gateway 2 evidence pack against the BSR's rejection criteria so it clears validation first time.

## 2. Trend signal — why now?

The UK's Building Safety Regulator (BSR) moved to a **validation-led model in early 2026**: a Gateway 2 application for a higher-risk building (HRB) is now screened for completeness, clarity, and coordination *before* anyone reviews the actual design. Fail that screen and you're bounced — not for bad design, for bad paperwork.

The numbers are brutal and well-documented:

- **29% of Gateway 2 applications are failing** — and analysis shows the majority of failures are driven by "evidence architecture" (fragmented, uncoordinated, incomplete evidence), *not* design inadequacy. ([London Construction Magazine, May 2026](https://www.constructionmagazine.uk/2026/05/gateway-2-rejection-rate-evidence-failures-london.html))
- The single biggest rejection category is **Principal Designer (Building Regs) competence evidence** — applications confirm the appointment but don't evidence active engagement, competence, or outputs. ([London Construction Magazine, May 2026](https://www.constructionmagazine.uk/2026/05/br-principal-designer-integrated-appointment-gateway-2.html))
- A rejection isn't a slap on the wrist: **"resubmission can add months to your programme, invalidate procurement processes and trigger significant commercial penalties."** ([Construction Management, 2026](https://constructionmanagement.co.uk/gateway-2-building-safety-delay-risk/))
- **18,000 homes have been stalled by Gateway 2**, with architects named as the most affected discipline. ([Architects' Journal, 2026](https://www.architectsjournal.co.uk/news/revealed-architects-most-affected-as-18000-homes-stalled-by-gateway-2))
- Volume is real and recurring: **~740 building-control approval applications in the 12 weeks to 1 May 2026** (~247/month), **1,367 live applications**, and **36,984 residential units sitting in live cases.** ([BSR / BCIS application data, May 2026](https://www.bcis.co.uk/news/latest-building-control-approval-application-data/))

What changed in the last 12 months: (a) the BSR flipped to validation-led screening, turning "evidence architecture" into the gating risk; (b) LLMs got good enough to read a multi-document submission and cross-check it against a published rubric; (c) the BSR and RIBA published explicit guidance on what a compliant submission looks like — a public spec a tool can encode.

Existing software in this space (SymTerra, BlockPro, Multivista, Matterport, Egnyte, Trimble) is about **storing and capturing** the golden thread for occupied buildings (Gateway 3 / in-life). **Nobody is attacking the pre-submission validation gap that causes the 29% bounce.**

```
Provenance:
  - Signal 1 (Demand): 29% Gateway 2 rejection rate, driven by evidence quality not design; PD competence evidence is the #1 failure category; rejection = months of delay + commercial penalties — https://www.constructionmagazine.uk/2026/05/gateway-2-rejection-rate-evidence-failures-london.html — 2026-05
  - Signal 2 (Feasibility): BSR operates a validation-led completeness/clarity/coordination screen since early 2026; RIBA + BSR published explicit submission guidance an LLM can encode and check against — https://www.riba.org/work/insights-and-resources/professional-features/what-can-the-latest-building-safety-regulator-figures-for-gateway-2-applications-tell-architects/ — 2026
  - Signal 3 (Economic): ~247 Gateway 2 applications/month, 1,367 live cases, 36,984 units in pipeline; 18,000 homes stalled; every stalled programme carries financing + penalty exposure — https://www.bcis.co.uk/news/latest-building-control-approval-application-data/ — 2026-05
  Category: Regulatory arbitrage
```

## 3. The opportunity

The BSR turned a design-quality regime into, functionally, a **document-coordination exam** — and 29% of professional applicants are failing the exam on a technicality. The incumbents sell filing cabinets (golden-thread record-keeping for buildings already approved). The gap is a **pre-flight check**: before you hit "submit" on the BSR portal, run your evidence pack through a tool that knows exactly what BSR validators bounce applications for and tells you the specific gaps — missing PD competence outputs, an uncross-referenced fire strategy, a design-decision log that doesn't trace to the safety case.

This is not a disruption-of-incumbent play; it's a **white-space wedge**. The "competitor" is the status quo: a £5,000–£15,000 specialist consultant doing a manual completeness review, or an architect crossing their fingers and eating a multi-month resubmission. AI does the cross-referencing in minutes that a senior consultant does in days.

## 4. Target market

- **Primary customer:** Architecture practices and Principal Designer (Building Regulations) consultancies in England that submit Gateway 2 applications — typically 5–50-person practices with an HRB pipeline, plus the boutique "Gateway 2 specialist" firms now emerging (e.g. Folly Architects, Urbanist). The buyer is the practice director / lead PD who personally carries the rejection risk.
- **Why they buy:** In their words — "incomplete, uncertain or poorly coordinated submissions are not just delayed; they are routinely rejected." A bounce burns the practice's fee margin, blows the client's programme, and damages the relationship. They will pay to not be in the 29%.
- **Rough TAM reasoning:** ~3,000 Gateway 2 applications/year flow through the BSR, concentrated among a few hundred active HRB practices and PD consultancies, plus the wider pool of fire engineers and contractors who assemble the same evidence. Add Gateway 3 and the swelling remediation pipeline. It's a *niche* — hundreds-to-low-thousands of accounts, not tens of thousands — which is exactly the bootstrapped-operator sweet spot and far too small for a VC-scale player to bother with.
- **Why now for them:** The validation-led screen is new (early 2026), the rejection data is now public and frightening, and 36,984 units are stuck. The pain is at its peak *this year*.

## 5. Product sketch (MVP)

- **Submission pre-flight:** Upload the Gateway 2 evidence pack (drawings, design-decision log, fire strategy, structural rationale, PD/PC appointment + competence evidence, building regs compliance statements). GateProof returns a pass/fail-style readiness report.
- **Rejection-risk flags:** Each flag maps to a known BSR validation failure mode — e.g. "PD competence: appointment confirmed but no evidence of active design-safety engagement or outputs" — with the exact criterion cited.
- **Cross-reference checker:** Confirms the fire strategy, structural design, and design-decision log actually reference each other and the safety case (the "coordination" the BSR screens for).
- **Completeness matrix:** A live checklist of every document and data element the BSR validation stage expects, with what's present, missing, or weak.
- **PD competence pack builder:** Guided assembly of the Principal Designer competence evidence — the #1 rejection category — into the format BSR validators expect.
- **Resubmission diff:** If you've already been bounced, paste the BSR's clarification request; GateProof maps each point to the document that must change.
- **Audit-ready export:** A coordinated, indexed evidence bundle plus a readiness certificate the practice can show the client before submission.

## 6. AI angle — what's load-bearing

Remove the AI and this is a static PDF checklist — useless against a 500-page, multi-document, cross-referenced submission. The load-bearing work is an LLM **reading the actual contents** of a heterogeneous evidence pack and judging it against the BSR's validation rubric: does the design-decision log *actually* trace fire-safety choices to the strategy? Does the PD competence evidence *demonstrate engagement* or just *assert appointment*? That's semantic comprehension and cross-document reasoning — exactly what got good enough in the last 12 months and exactly what a checkbox app can't do. The AI is the product.

## 7. Localization angle (if any)

This **is** the localization play — England-specific regulatory arbitrage. The BSR, the three-gateway regime, the Principal Designer (Building Regs) role, and the validation criteria are unique to England's Building Safety Act 2022. A generic global "construction document management" tool cannot compete because it doesn't encode the BSR rubric. The moat is regulatory specificity. Adjacent expansion later: Scotland/Wales building-safety regimes, then the EU's parallel building-safety directives.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Hybrid. A practice subscription (£300–£600/mo) for unlimited pre-flights + a per-submission "certified readiness review" at £750–£1,500 per application (anchored well below the £5,000–£15,000 a human consultant charges for the same completeness review).
- **ACV:** A modestly active HRB practice runs 5–15 Gateway 2/3 submissions a year. At £450/mo base + ~8 certified reviews × £1,000, ACV ≈ £13,400 (~$17K).
- **Rough math to $1M ARR (~£790K):** ~60 active practices at ~£13K ACV. Plausible within the few-hundred-account market.
- **Rough math to $5M ARR (~£3.9M):** ~290 practices, OR broaden the unit to every evidence-assembling discipline (fire engineers, contractors, PD consultants) and add Gateway 3 / remediation submissions, which dwarf new-build volume. Requires capturing a meaningful slice of the active HRB ecosystem and expanding the document types covered.
- **Expansion path:** land on Gateway 2 pre-flight → expand to Gateway 3 (completion) and the golden-thread handover → sell per-seat across the practice → upsell remediation submissions (the larger, longer-tail pipeline).

## 9. Go-to-market wedge — first 100 customers

- **Scrape the failure list.** The BSR/BCIS data and trade-press name affected projects and practices. Build a list of the few hundred practices and PD consultancies with live or rejected Gateway 2 applications. Cold email the director: "29% are getting bounced on evidence, not design. Send us your next pack — we'll show you the flags free before you submit." A free pre-flight on a real, live submission is an irresistible, zero-risk demo.
- **RIBA / CIAT / FIA channels.** RIBA, CIAT (Principal Designer Register), and the Fire Industry Association are all publishing anxious Gateway 2 guidance right now. Run a co-branded "Why 29% fail and how to pass" webinar; the audience is pre-qualified and terrified.
- **Partner with the Gateway 2 specialist boutiques.** Firms like Folly and Urbanist market themselves as HRB/Gateway 2 specialists — sell GateProof as their white-label QA layer so they scale beyond billable hours.
- **LinkedIn + trade press.** The 29% stat is doing the rounds in Construction Management, Architects' Journal, RIBAJ. Publish a teardown of an anonymised rejected submission with the flags GateProof would have caught. The community shares it.
- **Conversion math:** A list of ~400 active practices, a free-pre-flight offer with a genuine "we found 6 things that'd get you bounced" payload, should convert far above cold-SaaS norms because the cost of *not* trying it is a six-figure programme delay. 100 paying accounts is a realistic 6–9 month target.

## 10. Build complexity — justification

**Medium.** The hard part is not engineering — it's encoding the BSR validation rubric and rejection taxonomy accurately, which needs a domain expert (an architect or building-safety consultant who's been through Gateway 2). Document ingestion (PDFs, drawings, mixed formats) plus LLM cross-document reasoning over long context is standard-but-non-trivial. No regulatory approval to build — it's a private prep tool, not a submission gateway. A pair (one technical, one domain) ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | A private completeness-check tool; doesn't submit to or impersonate the BSR. |
| Ethical — no harm / dark patterns | ✅ | Improves safety-case quality; aligned with regulator intent. Must be clear it's an aid, not a guarantee. |
| Market exists (evidence above) | ✅ | 29% rejection, 18,000 homes stalled, ~247 apps/month, public data. |
| 1–5 person team can build this | ✅ | Pair (technical + domain) in 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf LLM APIs, standard web stack, no capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for the affected practice — a bounce is months of delay and a margin-eating penalty. Not *daily* pain (submissions are episodic), which caps it below 17. |
| Demand evidence | 15 | 13/15 | Multiple independent, dated 2026 signals: hard rejection %, named affected discipline, public volume data, trade-press alarm. A skeptic nods. |
| Build feasibility | 15 | 11/15 | Standard stack + long-context LLM reasoning over messy multi-doc packs; real work to encode the rubric accurately. Pair in 3–4 months. |
| Distribution clarity | 15 | 12/15 | Named, finite, reachable buyer list; warm pro-body channels; irresistible free-pre-flight wedge. Slight uncertainty on conversion. |
| Revenue mechanics | 15 | 10/15 | Pricing anchors cleanly below human consultants; ACV healthy. But the account universe is genuinely small — $5M ARR needs ecosystem expansion, not just new-build practices. |
| Time to first revenue | 10 | 7/10 | A free pre-flight that finds real flaws converts fast; episodic buying cadence and trust-building on a high-stakes deliverable add some lag. 6–10 weeks to first paid. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating rejection-pattern data + rubric encoding + pro-body relationships + workflow lock-in. Copyable in ~12 months by a determined competitor; the data flywheel and brand-in-niche are the defense. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

This needs a co-founder or close advisor who has *personally* survived a Gateway 2 submission. Without that, the rubric encoding will be wrong and the tool will lose trust on its first false-negative.

### Key assumptions to validate (3–5)

1. **Assumption:** Practices will trust an AI pre-flight enough to act on its flags before a high-stakes submission. **How to test:** Run free pre-flights on 10 real, live packs; measure how many flags the practice agrees are genuine and would fix.
2. **Assumption:** The BSR validation rubric is stable and encodable enough that GateProof's flags correlate with actual rejection reasons. **How to test:** Back-test against a set of already-rejected applications — does GateProof catch the same gaps the BSR cited?
3. **Assumption:** Willingness to pay ~£1,000/submission + a monthly base. **How to test:** Offer paid certified reviews to 15 practices after the free pre-flight; measure close rate at the price.
4. **Assumption:** The account universe (hundreds of practices) supports a $1M+ business at this ACV. **How to test:** Build the actual named list from BSR/BCIS data and pro-body directories; count reachable, qualified accounts.

### Risk flags

1. **Regulatory risk (timing):** The BSR is actively reforming — a "batching pilot" already cut London approval times from ~48 to ~12–14 weeks, and the 29% rate may fall as the regime matures. If validation gets easy, the pain shrinks. Mitigate by expanding into Gateway 3 / remediation, where the backlog is larger and longer-lived.
2. **Liability / trust:** A false "you're ready" that precedes a real rejection destroys credibility. Position firmly as a decision aid, cap claims, and let the human PD sign off — never imply a guarantee.
3. **Small TAM:** This is a niche by design. $1M–$3M ARR is very achievable; $5M needs disciplined expansion across disciplines and gateways. Wrong idea for someone chasing scale; right idea for a bootstrapper.
4. **Platform dependency:** Relies on the BSR's published criteria and the practice's willingness to share sensitive packs — handle data security as a first-class feature, not an afterthought.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a building-safety / architecture domain expert who has run a Gateway 2 submission
Time to revenue:        6–10 weeks (free pre-flight → paid certified review)
Capital to launch:      £15–30K ($20–40K) — LLM API spend, a domain advisor, standard web stack
Top 3 assumptions to validate first:
  1. GateProof's flags match real BSR rejection reasons — back-test against already-rejected applications
  2. Practices trust and act on AI flags before submitting — run 10 free live pre-flights, measure agreement
  3. WTP at ~£1,000/submission + monthly base — convert 15 free pre-flights to paid reviews
Kill criteria:
  - Abandon if <40% of flags on back-tested rejected applications match the BSR's actual cited reasons
  - Abandon if <3 of 15 free-pre-flight practices convert to a paid review
  - Abandon if BSR reforms push the rejection rate below ~10% before launch and the Gateway 3 / remediation pivot shows no equivalent pain
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the BSR/BCIS application data and trade-press coverage; build the named list of practices with live or rejected Gateway 2 applications. Collect every public BSR + RIBA validation-guidance document into a single rubric draft.
- **Day 3–4:** Get 3–5 real Gateway 2 packs (anonymised) — at least one already rejected. Hand-run them against the rubric (no product yet, just a checklist + an LLM in a chat window) and see whether the flags would have predicted the actual rejections.
- **Day 5:** Email 30 directors offering a free pre-flight on their next submission. **Go/no-go:** proceed only if (a) the manual back-test catches ≥40% of the real cited rejection reasons on the rejected pack, AND (b) ≥5 practices say yes to a free pre-flight. Falsifiable: if the rubric can't predict real rejections, the core premise is dead — stop.
