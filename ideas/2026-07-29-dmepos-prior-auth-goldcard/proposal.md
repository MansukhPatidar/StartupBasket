---
title: "AffirmRate — gold-card scorekeeper for DME suppliers"
slug: dmepos-prior-auth-goldcard
date: 2026-07-29
category: HealthTech / US-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Scores every prior-auth packet before you send it, because only first-try approvals count toward Medicare's 90% exemption."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [Compliance-driven, SMB, AI-agent, Workflow-automation, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# AffirmRate

## 1. One-liner

Scores every prior-auth packet before you send it, because only first-try approvals count toward Medicare's 90% exemption.

## 2. Trend signal — why now?

Three things landed in the last eight months, and together they turned a boring back-office metric into a number that decides whether a DME supplier's year is easy or miserable.

**One — CMS invented a scoreboard.** On December 2, 2025, CMS issued CMS-1828-F, creating a prior-authorization exemption process for DMEPOS suppliers. Hit a **90% provisional affirmation rate** and you're exempt from prior authorization entirely for a year. The first cycle ran from June 1, 2026 through May 31, 2027. Qualifying suppliers were notified by the DME MACs in early March 2026, with the opt-out window extended to May 26, 2026.

The eligibility mechanic is the whole ballgame: suppliers who submitted **at least 10 initial PA requests** in the measurement window and reached **90% affirmation** qualify. *Initial* requests. Your resubmission that finally got approved does not rescue your score. Every existing tool in this category optimizes for eventually getting paid. The exemption gate only counts the first swing. Those are different products.

**Two — the failure mode is clerical, not clinical.** The documented non-affirmation reasons are things like: the face-to-face encounter is missing the beneficiary's name; the encounter doesn't indicate a date of visit; the documentation doesn't include a Standard Written Order per 42 CFR 410.38(d)(1); missing MBI number. This is not medical-necessity judgment. These are empty fields and out-of-order dates. Corroborating evidence: **63.9% of DMEPOS appeals succeed** — meaning most non-affirmations were never substantively wrong, just wrongly assembled.

**Three — the paperwork surface just got bigger.** On April 13, 2026, CMS expanded the Required List by **83 new HCPCS codes** across orthotics, mobility equipment accessories, and respiratory items, triggering face-to-face plus Written Order Prior to Delivery. The sequencing is unforgiving: if the SWO is dated before the medical-record entry for the exam, the claim fails. More codes in scope, same thin staff, and a scoreboard now watching.

And the sting in the tail nobody markets to: exemption is **all or nothing**. Exempt suppliers "forfeit the ability to obtain reimbursement decisions before delivering equipment," and the MACs police them with an **annual post-payment review**. You win the gold card and immediately start shipping five-figure power mobility gear with no advance approval, exposed to retroactive recoupment. Winning creates a new problem. Nobody is selling into either half of this.

The next evaluation cycle is **January 2027**. The claims being submitted this week are the ones being scored for it. That is the timing.

Provenance:
  - Signal 1 (Demand): DMEPOS prior-auth non-affirmations driven by clerical defects — missing beneficiary name, missing visit date, missing SWO, missing MBI — while 63.9% of DMEPOS appeals succeed on review — https://datamatrixmedical.com/common-reasons-for-dme-prior-authorization-denials/ and https://www.kff.org/medicare/medicare-advantage-insurers-made-nearly-53-million-prior-authorization-determinations-in-2024/ — observed 2026-07-29
  - Signal 2 (Feasibility): Industry vendor-evaluation guidance states automation can "scan incoming physician orders and documentation against the CMS criteria for a given code" and flag gaps pre-submission — and that most vendors do not track first-pass approval rates — https://www.clustox.com/blog/prior-authorization-companies-dme-evaluation/ — observed 2026-07-29
  - Signal 3 (Economic): CMS-1828-F (issued 2025-12-02) ties a 90% initial-affirmation rate to a full-year prior-auth exemption; first cycle 2026-06-01 to 2027-05-31; opt-out extended to 2026-05-26; outsourced PA runs $5–15 per request against ~8,078 supplier locations — https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2026-home-health-prospective-payment-system-final-rule-cms-1828-f and https://www.hmenews.com/article/cms-extends-prior-authorization-exemption-deadline — observed 2026-07-29
  Category: Regulatory arbitrage

## 3. The opportunity

The DME software market sells **submission** — get the packet to the MAC, track the UTN, chase the doctor. Brightree, WellSky, NikoHealth, Bonafide all do this competently. What none of them sell is **the score**.

The gap is a definitional one. Existing prior-auth tooling treats a non-affirmation as a speed bump: resubmit, get affirmed, collect the money, move on. Under the old regime that was the correct model — the only thing that mattered was eventual payment. CMS-1828-F broke that model. Now the first submission is a graded exam, and a resubmission-heavy workflow that gets you paid can still cost you the exemption. A supplier can have a 97% eventual approval rate and an 80% initial affirmation rate, and under the new rule those are wildly different outcomes. Almost nobody in the field knows which number they have.

That is the wedge: **the metric that now governs a supplier's operating privilege is one that their existing software does not compute.** The industry's own vendor-evaluation advice makes the point — "if they do not track first-pass approval rates, they are not tracking it closely enough." That is a category-wide admission of a blind spot.

Ten-x claim, stated plainly: incumbents help you submit and resubmit. AffirmRate tells you, before you hit send, whether this specific packet will clear on the first pass — and what exactly is missing if it won't. Then it keeps a running scoreboard against the 90% line so the supplier knows in October where they'll land in January, while there's still time to change the outcome.

Second act, which is where this gets durable: for suppliers who *win* exemption, the product flips. No more prepayment safety net, annual post-payment review coming. The same document-integrity engine now runs continuously against delivered claims and builds the defense file. Same engine, opposite half of the cycle, and the customer never churns because they've moved from one problem to the other.

## 4. Target market

- **Primary customer:** Billing manager / compliance lead / owner-operator at an independent DMEPOS supplier in the US — one to eight locations, roughly $2M–$25M annual Medicare-heavy revenue. Concentrated in mobility (power wheelchairs, CRT), orthotics/prosthetics, and respiratory. These are shops where two or three people handle all prior auth and the owner still knows every denial by name.
- **Why they buy:** Because a number they can't see determines whether they spend next year doing prior auths or not, and because the April 2026 expansion added 83 codes to a workload they were already behind on. When the exemption letters hit in March 2026 the trade associations fielded calls — one industry representative described it simply: *"I got calls from members: What do I do?"* That confusion is unresolved and recurs every cycle.
- **Rough TAM reasoning:** ~**8,078 traditional Medicare DMEPOS supplier locations** nationwide as of January 2026 (AAHomecare tracking of CMS data), down ~37.4% since competitive bidding took hold in 2013. Consolidating into perhaps 4,000–5,000 distinct billing entities. Small, well-defined, reachable — and explicitly too small to interest a VC-backed entrant, which is exactly why it's available. Serviceable target: the 2,000–3,000 entities with meaningful PA volume in the affected code families.
- **Why now for them:** The January 2027 evaluation cycle scores claims being submitted right now. Suppliers who already hold exemption (June 2026–May 2027) are simultaneously exposed to the annual post-payment review with no prepayment protection. Both cohorts have a live, dated reason to act this quarter.

## 5. Product sketch (MVP)

- **Pre-submission packet score.** Drop in the face-to-face notes, the SWO, and the order. Get a first-pass affirmation probability plus a specific, itemized list of what's missing or misdated — before it goes to the MAC.
- **Sequence checker.** Validates that the F2F encounter date precedes the SWO signature date which precedes delivery, per the WOPD rule — the single most mechanical way to fail one of the 83 newly-added codes.
- **Field-completeness sweep.** Beneficiary name, date of visit, MBI, NPI, credentials, SWO elements per 42 CFR 410.38(d)(1). The boring stuff that actually causes non-affirmations.
- **Live affirmation scoreboard.** Running initial-affirmation rate against the 90% line, by code family, with a projection of where the supplier lands at the next evaluation and how many clean first-passes it takes to get back above the line.
- **Code-family risk view.** Which HCPCS codes are dragging the score down, so the supplier knows where to tighten documentation rather than guessing.
- **Exemption-mode monitor.** For exempt suppliers: continuous document-integrity checks on delivered claims plus an assembled defense file, ahead of the annual post-payment review.
- **Prescriber scorecard.** Which referring physicians reliably send complete documentation and which ones require three phone calls — usable in actual referral conversations.
- **Cycle calendar.** Measurement windows, notification dates, opt-out deadlines. The dates that cost people money when missed.

## 6. AI angle — what's load-bearing

Remove the AI and this is a checklist, which is a thing that already exists and that nobody uses.

The load-bearing work is reading unstructured clinical documents and deciding whether they support a specific HCPCS code's coverage criteria. A face-to-face encounter note is free-text physician prose. The question "does this note establish medical necessity for K0856, and does it contain the beneficiary's name and a date of visit in a form the MAC will accept" requires actually reading it. That's document understanding over messy, scanned, dictated, inconsistently-templated clinical text — genuinely hard two years ago, reliable now.

Three specific jobs the model does that rules cannot:
1. **Extraction from unstructured prose** — pulling encounter dates, beneficiary identifiers, and clinical findings out of narrative notes and faxed scans, where nothing sits in a predictable field.
2. **Criteria matching** — mapping what the note actually says against the coverage criteria for the billed code, and flagging *"this note documents ambulation difficulty but never addresses why a cane or walker is insufficient"* — the reasoning gap that produces a non-affirmation.
3. **Rewrite guidance** — telling the supplier precisely what to ask the prescriber for, in language the prescriber can act on, rather than "documentation insufficient."

Deterministic rules handle date sequencing and field presence — and they should, because those must never be probabilistic. The model handles the judgment layer. The scoring feedback loop is what compounds: every submitted packet eventually returns an affirmation or non-affirmation with a reason code, and that outcome trains the scorer on what this MAC, for this code family, actually accepts.

## 7. Localization angle (if any)

N/A — this is a US-only play by construction. The entire product is shaped by one federal rule (CMS-1828-F), one document standard (42 CFR 410.38), and four DME MAC jurisdictions. There is no localization axis; there is only depth in a single regulatory regime. The jurisdictional nuance between MACs (Noridian, CGS, Palmetto) is the closest analog to localization and is worth exploiting — affirmation behavior differs by jurisdiction, and knowing that is a small moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $399/mo base for single-location suppliers (up to ~75 PA packets/mo), $899/mo for multi-location or high-volume mobility/CRT shops, $1,899/mo for the exemption-monitoring tier with post-payment defense file assembly. Annual billing standard in this industry.
- **Anchor:** outsourced prior auth runs **$5–15 per request**, and manual processing costs ~**$10.97 per transaction** in labor. A supplier doing 150 packets/month is already spending $1,500+/mo on this workflow. $899 that raises first-pass rate and protects the exemption is not a hard arithmetic argument.
- **ACV:** ~$8,400 blended (mix-weighted toward the $599–899 middle, annual prepay).
- **Math to $1M ARR:** 120 customers × ~$700/mo × 12 = $1.008M. Out of ~4,000–5,000 addressable entities, that's under 3% penetration.
- **Math to $5M ARR:** ~500 customers at a lifted blended ACV of ~$10K, requiring (a) meaningful adoption of the $1,899 exemption tier as more suppliers cross into exemption each cycle, and (b) expansion beyond Medicare FFS into Medicare Advantage prior auth, which is a far larger volume pool with the same document-integrity mechanics. Roughly 10–12% penetration of the serviceable base — aggressive but not fantasy in a market this well-bounded.
- **Expansion path:** base scoring → exemption monitoring → Medicare Advantage PA → prescriber-facing portal (suppliers push the documentation checklist upstream to referral sources, which is where the real leverage is and where switching cost becomes painful).

## 9. Go-to-market wedge — first 100 customers

- **The supplier list is public and finite.** CMS publishes DMEPOS supplier enrollment data, and AAHomecare tracks ~8,078 locations by state. Filter to the mobility, O&P, and respiratory specialties affected by the April 2026 code expansion. This is a known, enumerable list of a few thousand names — not a demographic guess. Target the ~2,500 with real PA volume.
- **Free Affirmation Rate Audit as the door-opener.** Offer to compute the number they don't have: take 30 recent PA submissions, return their actual *initial* affirmation rate, the gap to 90%, and the three document defects costing them the most. This is a genuinely useful free deliverable, it takes minutes to produce, and it ends with a number that either scares them or reassures them — both of which start a conversation. Expect strong reply rates on a cold email whose subject line is effectively *"do you know your initial affirmation rate?"* — because most don't.
- **Ride the cycle calendar.** The dates are fixed and public: January 2027 evaluation, ~March notification, ~May opt-out, June 1 cycle start. Run a hard campaign in the September–December window when suppliers can still move their score before evaluation. Regulatory deadlines are the best sales trigger there is — the urgency is CMS's, not yours.
- **Trade channel.** VGM and AAHomecare are the two organizations these suppliers actually listen to; both published guidance on the exemption process. Medtrade is the industry trade show. A webinar titled "Your Initial Affirmation Rate Is Not Your Approval Rate" with a state association is a room full of exactly the right buyers, and the content is legitimately educational rather than a pitch.
- **Billing-service partnerships.** Third-party DME billing companies each serve 10–50 supplier clients. Land one and you get a bundle of accounts with a single sale, plus a partner whose own service quality improves. Highest-leverage channel after the first 20 direct customers prove the pitch.

## 10. Build complexity — justification

**Medium.** The document-understanding core is off-the-shelf frontier-model work — extraction and criteria-matching over clinical PDFs and scans — plus a deterministic rules layer for date sequencing and field presence. Neither needs custom model training. What makes it Medium rather than Low is threefold: the coverage-criteria knowledge base has to be built code-family by code-family and kept current with CMS updates; HIPAA compliance means BAAs, encryption, audit logging, and access controls from day one rather than bolted on; and the outcome-tracking loop needs enough plumbing to attribute affirmations and non-affirmations back to submitted packets. Realistically **14–18 weeks to a credible v1** for a two-person team, scoped to a single high-value code family — power mobility — before broadening. Starting narrow is correct here: mobility has the highest dollar exposure and the most acute pain.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Administrative documentation tooling. No clinical decision-making, no claims submitted on the supplier's behalf. HIPAA BAA required — standard, not a barrier. |
| Ethical — no harm / dark patterns | ✅ | Improves documentation accuracy and completeness. Aligned with CMS's stated intent. Does not help anyone bill for things they shouldn't — a correctness tool, and it should refuse to be anything else. |
| Market exists (evidence above) | ✅ | ~8,078 supplier locations, $5–15/request outsourcing spend, a federal rule with dated deadlines, documented supplier confusion. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks to v1 on one code family. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, HIPAA-compliant infra, compliance review. Comfortably under $50K to first revenue. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt regularly, with a hard federal deadline attached. Not full hair-on-fire: a supplier that misses 90% is inconvenienced for a year, not shut down. Docked for that — the pain is expensive, not existential. |
| Demand evidence | 15 | 12/15 | Strong regulatory signal, hard supplier counts, established $5–15/request spend, documented confusion. Held back because I found no supplier saying "I would pay for a tool that scores my initial affirmation rate" — the spend is proven, the appetite for *this specific framing* is inferred. |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI plus rules. Real weight from HIPAA infra and the code-by-code criteria knowledge base. 14–18 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | Enumerable public list, a free audit with a genuine hook, fixed regulatory calendar, two trade bodies, billing-service partners. Docked because these are small conservative businesses with slow buying reflexes and real switching inertia. |
| Revenue mechanics | 15 | 11/15 | $1M path needs ~120 customers — very reachable. $5M requires the MA expansion and strong exemption-tier uptake, which is a genuine assumption rather than a certainty. |
| Time to first revenue | 10 | 8/10 | The free audit can be delivered semi-manually before the product is finished, which pulls revenue forward. Paid pilots plausible inside 8 weeks. Not a 4-week self-serve signup. |
| Defensibility | 10 | 5/10 | Honest assessment: an incumbent DME platform could ship affirmation-rate tracking in a quarter if they noticed. What accumulates is the outcome dataset — which packet shapes get affirmed first-try, by MAC jurisdiction, by code family — plus prescriber-level documentation intelligence. That's a real 12-month moat and no month-3 moat at all. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can read a CMS final rule and correctly extract the operative mechanic, or a DME billing veteran co-founder who already knows why claims get non-affirmed. Building this without domain access means guessing at coverage criteria, and guessing produces a tool that confidently tells suppliers the wrong thing — which in this market kills you on the first bad recommendation.

### Key assumptions to validate (3–5)

1. **Assumption:** Suppliers don't currently know their initial (as opposed to eventual) affirmation rate. **How to test:** Ask 25 billing managers directly: "what was your initial affirmation rate last cycle?" If most answer instantly and accurately, the core wedge is gone. I expect blank stares, but that's a belief, not a finding.
2. **Assumption:** A pre-submission score materially lifts first-pass affirmation. **How to test:** Run 100 real historical packets through the scorer, compare predicted vs. actual outcomes. Need meaningful predictive separation — if the scorer can't distinguish affirmed from non-affirmed retrospectively, it can't help prospectively.
3. **Assumption:** $399–899/mo clears the bar for a shop with 150 packets/month. **How to test:** Price-test in 20 discovery calls. The $10.97/transaction labor benchmark says yes; conservative owners in a shrinking market may say otherwise.
4. **Assumption:** Suppliers who won exemption feel the post-payment exposure as a real problem worth paying to manage. **How to test:** Interview 15 currently-exempt suppliers. If they're relaxed about it, the $1,899 tier and the churn-proofing story both collapse.
5. **Assumption:** The exemption program survives. **How to test:** Track CMS rulemaking. Programs get modified; this one is young.

### Risk flags

1. **Regulatory dependency:** The entire product is downstream of one CMS rule. If CMS abolishes or restructures the exemption, the scoreboard framing evaporates overnight. Mitigation: the document-integrity engine retains standalone value for denial prevention and audit defense regardless — build so that the scoring layer is a feature of a document engine, not the other way round.
2. **Incumbent fast-follow:** Brightree, WellSky, and NikoHealth already own the workflow and the data. Any of them could add affirmation-rate tracking as a feature. The counter is depth and speed — a point solution that does this exceptionally, integrated with their platforms, before they treat it as a priority. This is the single biggest threat and the reason defensibility scored 5.
3. **Market contraction:** Supplier locations have fallen ~37.4% since 2013 and continue to decline ~1.6% per half-year. You are selling into a shrinking base. Fine for $1–3M ARR; it caps the ceiling and it means every year of delay costs you addressable customers.
4. **Liability exposure:** If the tool says a packet is clean and the MAC non-affirms it, the supplier blames you — and at scale a systematic scoring error could damage many customers' rates at once. Positioning must be advisory, never guarantee, and the product should be visibly conservative about flagging uncertainty.
5. **HIPAA overhead:** PHI from day one. BAAs, encryption, audit trails, breach protocol. Not fatal, but it slows the first 90 days and is a real cost line for a two-person team.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + DME billing domain expert (co-founder or
                        first hire). Solo technical founder without domain access
                        should not attempt this.
Time to revenue:        8–12 weeks (manual audits sold ahead of full product)
Capital to launch:      $25–40K (HIPAA infra, inference, compliance review)
Top 3 assumptions to validate first:
  1. Suppliers can't state their initial affirmation rate — ask 25 billing managers directly
  2. Scorer predicts real outcomes — backtest 100 historical packets for predictive separation
  3. $399–899/mo clears the bar at 150 packets/month — price-test across 20 discovery calls
Kill criteria:
  - Abandon if >60% of 25 surveyed suppliers already track initial affirmation rate accurately
  - Abandon if the scorer cannot separate affirmed from non-affirmed on historical packets
  - Abandon if a major DME platform ships native affirmation-rate tracking before v1 launches
  - Abandon if <5 of the first 40 free audits convert to paid within 60 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the supplier list. Pull CMS DMEPOS enrollment data, filter to mobility/O&P/respiratory, and get to ~400 named entities with contact paths. In parallel, hand-assemble the coverage-criteria checklist for one power-mobility code (K0856) from CMS and MAC policy documents — this is the seed of the knowledge base and it tells you fast how hard the rest will be.
- **Day 3–4:** Get 25 billing managers on the phone. One question first, before anything else: *"What was your initial affirmation rate last cycle?"* Record whether they know, whether they can find it, and how long it takes. Then ask what they'd pay to see it tracked continuously. Do not pitch until after they've answered — the whole thesis is that the question lands as a surprise.
- **Day 5:** Manually score 20 real PA packets from two friendly suppliers using the K0856 checklist and a frontier model. Compare predictions against known outcomes.
- **Decision:** Go if (a) fewer than 10 of 25 suppliers can state their initial affirmation rate, **and** (b) manual scoring correctly identifies at least 15 of 20 packet outcomes, **and** (c) at least 6 suppliers verbally commit to a paid pilot at $399+/mo. Miss any of the three and the idea needs reshaping — most likely toward pure denial-prevention, dropping the exemption framing entirely.

Falsifiable, and cheap to falsify. The single most informative thing in the whole sprint is watching what happens when you ask a billing manager for a number they've never been asked for. If they rattle it off, I'm wrong about the wedge and I'd rather learn that in week one than month six.
