---
title: "FloorClaim — appeal filer for independent pharmacies"
slug: underwater-claim-appeal-filer
date: 2026-08-03
category: HealthTech / US-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Finds every underwater prescription your pharmacy filled below cost and files the state-law appeal that recovers it."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Workflow-automation]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FloorClaim

## 1. One-liner

Finds every underwater prescription your pharmacy filled below cost and files the state-law appeal that recovers it.

## 2. Trend signal — why now?

Three things happened in the last 18 months that turn a chronic complaint into a fileable, monetizable workflow.

**One — the losses got quantified and public.** More than half of independent pharmacy owners are now losing money on over 60% of the Part D prescriptions they fill, per NCPA. The concrete cases are ugly and specific: a rural Mississippi pharmacist filled a branded prescription that cost her $929.07 to acquire and was reimbursed $804.19 — a $125 loss on one transaction she had no ability to refuse. NCPA's 2025 Digest recorded a 10-year high in cost of goods against a 10-year low in gross profits. Over 600 independent pharmacies closed in the first nine months of 2025.

**Two — states passed actual reimbursement floors with dates on them.** This is the part that changed. Until recently, "PBM reimburses below cost" was an economic grievance with no legal hook. Now it's a statutory violation in a growing list of states, each with a hard number:

- **Kentucky** (eff. Jan 1, 2025): NADAC + $10.64 dispensing fee for independents
- **California** SB 41 (eff. Oct 2025): NADAC + Medi-Cal dispensing fee ($10.05), plus 100% rebate pass-through
- **Iowa** (contracts Jul 1, 2025; benefits Jan 1, 2026): NADAC + dispensing fee; also bans spread pricing
- **Nebraska**: Medicaid FFS NADAC methodology floor + $10.38 dispensing fee, for independents with ≤6 locations
- **Alabama** SB 252, **Louisiana** HB 264, **Montana** HB 740: minimum reimbursement rates and transparency mandates
- **New York** S5939 and **South Carolina** S.B. 342 (104% of NADAC) pending

36 states now have some form of MAC pricing law, and many carry a statutory appeal right. Georgia's is representative of the payoff: a successful appeal forces the PBM to adjust the MAC price, **apply it to all similarly situated pharmacies in the state**, and let the appealing pharmacy reverse and rebill the original claim.

**Three — nobody is actually filing.** This is the gap. Buchanan Ingersoll's 2026 analysis is blunt: even where appeal processes are mandated by statute, they are "frequently inadequate or ignored entirely," and pharmacies must step up their own documentation. Owners openly question whether their PSAO is filing MAC appeals on their behalf at all, or whether they're "leaving thousands of dollars on the table every month." One owner, quoted by Pharmacy Marketplace: *"I've owned my pharmacy for 6 years and gave up on appeals 5 years ago."* The same source reports a pharmacy that submitted **over 250 claims with almost 100% success rate in three weeks** once the filing was organized and automated.

That is the whole thesis. The law now says you're owed the money. The evidence to prove it (NADAC, weekly, free, public) is a CSV download. The reason the money stays unclaimed is that filing store-level appeals with invoice proof attached, per-PBM, per-state, within deadline, is tedious clerical work no one in a 3-person pharmacy has time for.

```
Provenance:
  - Signal 1 (Demand): >50% of independent pharmacy owners lose money on >60% of Part D scripts; 600+ closures in 9 months of 2025; documented $125 loss on a single $929.07 branded fill — https://www.ecopharma.io/blog/pbm-reimbursement-survival-guide-pharmacies — observed 2026-08-03
  - Signal 2 (Feasibility): NADAC national acquisition-cost benchmark published free and public-domain, updated weekly as CSV by CMS/Medicaid — https://catalog.data.gov/dataset/nadac-national-average-drug-acquisition-cost-2026 — observed 2026-08-03
  - Signal 3 (Economic/Regulatory): 2026 state PBM reform wave sets NADAC-based reimbursement floors with statutory appeal rights in KY, CA, IA, NE, AL, LA, MT; 36 states have MAC laws; successful appeals force retroactive adjustment + reverse-and-rebill — https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ — observed 2026-08-03
  - Signal 4 (Enforcement gap): State PBM oversight growing but enforcement falls short; statutory appeal processes "frequently inadequate or ignored"; pharmacies must self-document — https://www.frierlevitt.com/articles/legal-protections-pharmacies-pbm-practices-50-state-overview/ — observed 2026-08-03
  Category: Regulatory arbitrage
```

## 3. The opportunity

A law exists that says a PBM must pay you at least NADAC plus a dispensing fee. Your claims data says they didn't. Nobody is connecting those two facts at scale, per store, inside the appeal window.

The incumbents each own one piece and none own the join:

- **Pharmacy management systems (PioneerRx, FrameworkLTC, RedSail):** hold the claim data and the acquisition cost. They report gross margin. They do not track state statutory floors, do not know the appeal deadline per PBM per state, and do not file anything. Margin reporting is a rear-view mirror, not a recovery action.
- **PSAOs (Cardinal's Automated MAC Advantage and peers):** file blanket appeals on behalf of thousands of pharmacies. Blanket filings are exactly the ones that get denied — several state rules require store-level submission with actual invoice proof of negative margin. Worse, the pharmacy can't see whether their claims were included. The structural conflict is real: PSAOs are often owned by the wholesalers whose contracts are part of the equation.
- **Reconciliation vendors (FDS eConcile and similar):** find *unpaid* and *underpaid* claims — a payment-integrity problem. They answer "did the PBM pay what the contract said?" Not "did the contract itself fall below what state law requires?" Different question, different data source, different remedy.
- **Healthcare attorneys (Frier Levitt et al.):** do the legal escalation brilliantly, at legal rates, for aggregate disputes worth six figures. They are not filing your $23 appeal on a generic metformin claim.

The gap is the $8-to-$140 per-claim recovery, filed store-level, at volume, on a deadline. Too small for a lawyer, too specific for a PMS, too store-level for a PSAO. That's a software job, and the qualifying evidence is a free weekly CSV joined against claims the pharmacy already owns.

The 10× is not intelligence, it's throughput. A pharmacy owner might file three appeals a month by hand when a claim stings badly enough. FloorClaim files 250.

## 4. Target market

- **Primary customer:** Owner-operator of 1–5 store independent community pharmacy in a state with a NADAC-floor or MAC-appeal statute (start: KY, CA, IA, NE, AL, LA, MT, then the broader 36 MAC states). Typically 200–1,200 scripts/week, 3–12 staff, owner is also the pharmacist-in-charge. Annual revenue $2M–$8M with gross profit at a 10-year low.
- **Why they buy:** In their words — *"I've owned my pharmacy for 6 years and gave up on appeals 5 years ago."* The pain isn't ignorance that they're being underpaid; every owner knows. The pain is that the remedy costs more labor than it returns when done by hand, so they've rationally quit. FloorClaim changes that arithmetic. Second driver: the paper trail itself. Frier Levitt's guidance is explicit that pharmacies should log every below-cost claim because "volume of appeals creates a paper trail that regulators notice" — and that trail is what makes a future state board complaint or class action viable.
- **Rough TAM reasoning:** 18,960 independent community pharmacy locations in the US as of July 2025 (NCPA), ~36% of all retail pharmacies. Serviceable beachhead: the NADAC-floor states plus high-appeal-rights states — conservatively 6,000–8,000 locations. At $299/mo that's a $21M–$28M ceiling on subscription alone before any success-fee model. Ample headroom for a $5M target.
- **Why now for them:** Two clocks. The statutory floors in CA/IA/KY/NE only recently took effect, so 2026 is the first year with a large volume of *appealable-under-new-law* claims. And appeal windows are short — typically 7 to 30 business days from adjudication depending on state and PBM. Every week a pharmacy doesn't file, claims expire permanently. The money is perishable.

## 5. Product sketch (MVP)

- **Nightly claims sweep.** Pulls the pharmacy's adjudicated claims (via PMS report export or claims-switch feed) and joins each NDC against that week's NADAC file plus the pharmacy's own invoice cost from their wholesaler statement.
- **Underwater flagging with the legal test applied.** Not just "this claim lost money" — "this claim was reimbursed $4.12 below the Kentucky statutory floor of NADAC + $10.64, and is appealable to CVS Caremark until August 19."
- **Appeal packet auto-assembly.** Generates the per-claim submission each PBM's portal actually requires: claim identifiers, NDC, acquisition invoice as proof of negative margin, statutory citation for the state, and the requested adjustment amount.
- **Submission and tracking.** Files into each PBM's appeal channel (portal or structured email), then tracks status, deadline, decision, and — critically — whether an approved adjustment actually showed up in a subsequent remittance.
- **Denial handling.** When a PBM denies and names an NDC "purchasable at or below MAC" (which several state laws require them to do), FloorClaim checks that claim against real wholesaler availability and flags the ones that are fiction — the strongest material for regulator escalation.
- **Regulator complaint export.** One click produces the evidence bundle for a state board of pharmacy or insurance commissioner complaint: every below-cost claim, every appeal, every denial, with dates.
- **Recovery ledger.** Dollars appealed, dollars recovered, dollars expired unfiled. The number the owner shows their accountant, and the number that justifies the subscription.

## 6. AI angle — what's load-bearing

Remove the AI and this product genuinely does not ship. Three places it does real work:

**Document extraction at the messy edge.** The join requires acquisition cost, and acquisition cost lives in wholesaler invoices and statements that arrive as PDFs in a dozen formats from McKesson, Cencora, Cardinal, and a long tail of secondaries. Same for PMS reports, which vary by vendor and version. Deterministic parsers for that surface area would take a year and break monthly. Vision-model extraction handles it in weeks and degrades gracefully.

**Statute-to-rule translation, maintained continuously.** Every state's floor is worded differently — NADAC vs. 104% of NADAC vs. "acquisition cost," different dispensing fees, different pharmacy eligibility carve-outs (Nebraska: ≤6 locations; Louisiana: pharmacies not holding >5% in a wholesale purchasing group), different appeal deadlines and evidentiary requirements. Bills pass continuously. LLMs reading statutory text and diffing it into the rules engine is what makes 36-state coverage tractable for a two-person team instead of a compliance department.

**Denial-response reasoning.** When a PBM denies with a boilerplate reason or names a supposedly-available NDC, deciding whether that response is legally deficient and drafting the escalation is language work over statute and correspondence.

What is deliberately *not* AI: the arithmetic of whether a claim is underwater. That's a deterministic join against a published number, and it must be exact, auditable, and defensible — because the pharmacy is submitting it to a PBM that will look for any reason to reject. Hallucinating a dollar figure into a legal filing is the one unrecoverable failure mode. AI does extraction and interpretation; arithmetic stays in code.

## 7. Localization angle (if any)

N/A — this is a US-only play by construction, and deliberately so. The entire product is a function of US state PBM statutes, the CMS NADAC benchmark, and NCPDP claim formats. There is no international version; the analogous problem in other markets has a different legal shape entirely.

The meaningful "localization" here is *interstate*: each state is effectively its own micro-market with its own floor formula, appeal deadline, and evidentiary standard. Sequencing matters — win Kentucky and Iowa (clean NADAC + fixed dispensing fee, unambiguous) before touching states where the floor is vaguer. Depth per state is the product; breadth is the roadmap.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo per store for the core tier (up to ~800 claims/week screened, unlimited appeals filed). $499/mo multi-store tier for 2–5 locations. Deliberately **flat subscription, not contingency.** A percentage-of-recovery model invites a fight over attribution with the PSAO and smells like the fee-extraction the customer already resents. Flat pricing also keeps the product clear of anything resembling fee-splitting on a quasi-legal remedy.
- **ACV:** $3,600 single store; realistic blended ~$4,200 accounting for multi-store mix.
- **Rough math to $1M ARR:** 280 stores × $299/mo × 12 = $1.0M. That's under 4% of the ~7,000-store beachhead in floor-and-appeal states. Reachable.
- **Rough math to $5M ARR:** ~1,200 stores at blended $4,200 ACV. Requires national coverage across all 36 MAC states, plus at least one expansion product — realistically the LTC pharmacy segment (higher claim volume, more sophisticated buyer) or a PSAO-audit module. Not a stretch of the same wedge; it's the same wedge with more states and a second buyer type.
- **ROI framing that makes the sale trivial:** the product only has to recover ~$300/mo to be free. A pharmacy running 400 scripts/week with even 3% appealable-and-recoverable at an average $12 recovery clears $600/mo. The Pharmacy Marketplace data point — 250 claims filed in three weeks at near-100% success — suggests the real number is well above that. If the pilot data holds, this is a product that argues for itself with a spreadsheet.
- **Expansion path:** per-store seat growth as customers add locations → LTC/specialty pharmacy tier at $799/mo → contract-analysis module (which PBM contracts to sign at renewal, priced $1,500/yr) → aggregated anonymized benchmarking data, which is the asset that eventually has value to state regulators and plaintiff-side attorneys.

## 9. Go-to-market wedge — first 100 customers

- **State pharmacy association channel, one state at a time.** Kentucky, Iowa, and Nebraska pharmacy associations are small, activist, and their members are the exact people who lobbied for these floor laws. Sponsor the state convention (typically $2K–5K), present a session titled with a real number: "What your store was underpaid under KY's NADAC floor in Q2." Bring pre-run analysis for attendees who hand over a claims export at the booth. These associations have 300–800 member stores each; converting 5% of one state's membership is 20–40 customers from a single event.
- **The free underwater audit as the entire top of funnel.** Ask for one thing: a 90-day claims export from their PMS. Return a PDF: dollars below statutory floor, count of still-appealable claims, count already expired. This is not a demo, it's an invoice they didn't know they were owed. Nothing else needs to be said. Run it via a landing page and at conventions. Target: 300 audits in the first six months, 25–30% conversion.
- **NCPA and the trade press.** NCPA is loudly campaigning on exactly this issue and publishes the survey data underpinning it. NCPA Annual Convention plus placed pieces in Drug Topics / Pharmacy Times reach the owner demographic directly. Warm channel, because the product advances the association's own advocacy — every filed appeal generates the enforcement record NCPA wants to wave at legislators.
- **Attorney referral loop.** Firms like Frier Levitt handle the six-figure PBM disputes and have no economics on the $23 appeal. FloorClaim is their perfect downstream referral — and it manufactures the documented paper trail that makes their bigger cases winnable. Bidirectional, no fee-sharing required, ~10 firms nationally worth cultivating.
- **Cold outreach with the loss precomputed.** State pharmacy license registries are public and list every independent by name and address. NADAC is public. For any given state, you can estimate a store's underwater exposure from public script-volume proxies before you ever speak to them. Email subject line is a dollar figure. 2,000 stores contacted, 15% audit request, 25% of those convert = 75 customers.

## 10. Build complexity — justification

**Medium.** Roughly 14–18 weeks to v1 for two people.

Off-the-shelf: NADAC ingestion (free weekly CSV), document extraction (vision models), the entire web app, standard payments. The state-rules engine is a maintained config, not novel engineering.

The genuine work is in three places. **Claims ingestion** — the PMS vendors don't offer friendly APIs to third parties, so v1 rides on scheduled report exports and a lightweight agent on the pharmacy's machine. This is unglamorous integration work across PioneerRx, FrameworkLTC, and RedSail, and it is the critical path. **Appeal submission** — each PBM has its own portal with no API; expect a mix of structured email, form automation, and human-in-the-loop for the stubborn ones. Ship v1 semi-automated (generate the packet, one-click submit where possible, queue the rest) rather than blocking on full automation. **State rules** — correctness matters more than coverage. Two states done exactly right beats twelve done approximately.

Not research-grade, no novel models, no hardware. But it is not a six-week solo build either — the integration surface and the correctness bar are real.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Filing appeals a statute explicitly grants the pharmacy. Software assisting a business with its own commercial filings — no legal advice, no representation. Keep the line clean: FloorClaim assembles and submits the pharmacy's own data on the pharmacy's own behalf. |
| Ethical — no harm / dark patterns | ✅ | Helps small businesses collect money state law says they're owed, from counterparties with vastly greater resources. Flat pricing avoids contingency-fee dynamics. |
| Market exists (evidence above) | ✅ | 18,960 stores, documented losses, existing paid tooling in adjacent slots, quoted owner demand. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. Domain advisor (pharmacy owner or PBM-side attorney) strongly recommended. |
| Launchable with <$50K / ₹40L | ✅ | ~$25–35K: one state convention sponsorship, model inference, legal review of positioning, incorporation. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18**/20 | Hair-on-fire. Owners losing money on 60%+ of Part D scripts, 600+ closures in nine months, survival-level stakes. Docked 2 only because they've endured it long enough to have gone numb — "gave up on appeals 5 years ago" is resignation, and resignation needs to be un-taught before it converts. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: NCPA survey data, documented per-claim losses, 36 states legislating, existing vendors selling adjacent tools, a real owner quote plus a 250-claim/near-100%-success data point. Docked 2 because no one has published what an *automated* appeal tool sells for or retains at. |
| Build feasibility | 15 | **11**/15 | Standard stack, free reference data, but PMS ingestion and per-PBM submission are genuinely fiddly integration work. 14–18 weeks for a pair, not 6. |
| Distribution clarity | 15 | **12**/15 | Named channels with real math: state associations, public license registries, NCPA, attorney referrals. The free audit is an unusually strong wedge because it delivers a dollar figure, not a demo. Docked 3 because pharmacy owners are famously hard to reach by email and the convention circuit is slow. |
| Revenue mechanics | 15 | **11**/15 | $299/mo against a several-hundred-to-few-thousand-dollar monthly recovery is easy to justify. 280 stores to $1M is credible. Docked 4 because recovery-per-store varies enormously by state, payer mix, and generic share — some stores will find the ROI thin and churn. |
| Time to first revenue | 10 | **7**/10 | Free audit → paid can close in weeks once the product runs, and audits can be sold before full automation exists. But you need working ingestion for at least one PMS before the first audit is possible. Realistic first dollar: 4–5 months from start. |
| Defensibility | 10 | **3**/10 | Honest assessment: this is an execution moat. The data is public, the statutes are public, and a PMS vendor could bolt this on. What you accumulate — per-PBM submission quirks, denial-pattern data, association relationships, and a recovery track record — is real but takes 12+ months to matter. First 6 months you are defended by focus alone. |
| **Total** | **100** | **75**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The integration and extraction work needs a real engineer. The statutory interpretation and PBM-submission mechanics need someone who has lived it — a pharmacy owner co-founder or an advisor from the PBM-litigation bar is close to mandatory. Building this from pure outside reading will produce appeals that get denied on technicalities.

### Key assumptions to validate (3–5)

1. **Assumption:** A typical 400-script/week independent in a NADAC-floor state has ≥$500/mo in claims that are both below the statutory floor and still within the appeal window. **How to test:** Get 90-day claims exports from 10 pharmacies across KY, IA, and CA. Run the join by hand against NADAC. Count dollars and check deadlines. This is a two-week exercise requiring zero code and it either validates or kills the entire idea.
2. **Assumption:** Store-level appeals with invoice proof are actually approved at a meaningful rate — the 250-claims/near-100% figure is one vendor's marketing, not independent data. **How to test:** Manually file 30 appeals across 3 PBMs and 2 states on behalf of two pilot pharmacies. Measure approval rate and, separately, whether approved adjustments actually appear in remittance.
3. **Assumption:** Pharmacy owners will grant claims-data access to an unknown vendor. **How to test:** In the first 40 free-audit offers, track how many complete the export versus stall. If under 30% complete, the funnel is broken regardless of product quality.
4. **Assumption:** PSAOs won't simply absorb this — either by improving their own blanket filings or by pressuring members not to use a third party. **How to test:** Interview 15 owners about what their PSAO currently reports on appeals, and read three actual PSAO contracts for exclusivity or data-sharing restrictions.
5. **Assumption:** PMS report exports are consistent enough to build reliable ingestion for the top three vendors. **How to test:** Collect sample exports from 5 pharmacies per PMS vendor and check field stability across versions.

### Risk flags

1. **Platform dependency (high):** The product needs claims data out of PMS vendors who have no incentive to help and may add contractual friction. Mitigate by supporting user-initiated exports the pharmacy is entitled to, never scraping, and never depending on a single vendor.
2. **Regulatory whiplash (medium):** Arkansas's PBM-ownership ban is already under preliminary injunction as of July 2025. State PBM laws are being actively litigated, and ERISA preemption arguments have repeatedly been used against them. If a major floor statute gets struck, the appeal hook in that state evaporates. Mitigate by breadth across states and by keeping the underlying margin-analytics value proposition intact even where the legal hook weakens.
3. **Counterparty stonewalling (medium-high):** PBMs are structurally motivated to make appeals slow and denials cheap. A tool that files 250 appeals per store per month is exactly what they'll build friction against — portal rate limits, new evidentiary demands, format changes. Assume an adversarial integration surface permanently.
4. **Competitive encroachment (medium):** Pharmacy Marketplace already ships a PBM Appeals tool bundled free into a purchasing platform, which is a hard price to beat. Differentiation must be depth — statutory floor logic per state, deadline tracking, denial escalation, regulator export — not the mere existence of appeal filing.
5. **Churn from thin ROI (medium):** Stores in states with weak floors or favorable payer mix will recover little and leave. Qualify hard at the audit stage and decline customers the data says won't benefit; a low-recovery customer is a refund request in 90 days.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a pharmacy owner or PBM-litigation
                        advisor. Integration-heavy engineering plus real statutory fluency.
Time to revenue:        4–5 months (audits can be sold manually before automation ships)
Capital to launch:      $25–35K
Top 3 assumptions to validate first:
  1. Real recoverable dollars per store — hand-run the NADAC join on 10 pharmacies'
     90-day claims exports across KY/IA/CA before writing any code.
  2. Appeal approval rate — manually file 30 store-level appeals across 3 PBMs,
     measure both approval AND whether money actually lands in remittance.
  3. Data-access willingness — track export completion rate on the first 40 free
     audit offers; under 30% means the funnel is broken.
Kill criteria:
  - Abandon if median recoverable-and-in-window dollars is under $250/mo across
    the 10-pharmacy manual sample. The subscription cannot be justified below this.
  - Abandon if manual appeal approval rate is under 40%, or if approved adjustments
    fail to appear in remittance more than half the time — a win on paper that
    doesn't pay is not a product.
  - Abandon if fewer than 30% of pharmacies offered a free audit will complete a
    claims export within two weeks.
  - Abandon if a PMS vendor ships equivalent statutory-floor appeal filing natively
    before v1 launches.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the current NADAC file and build the join by hand in a spreadsheet. Recruit 5 independent pharmacies in Kentucky and Iowa through state association contacts; ask each for a 90-day claims export. Offer the analysis free with no strings.
- **Day 3–4:** Run the join. For each store produce three numbers: dollars reimbursed below the statutory floor, dollars still inside the appeal window, and dollars already expired. Read the actual KY and IA statutes and the appeal terms in two real PBM provider manuals to confirm deadline and evidence requirements — don't rely on secondary summaries.
- **Day 5:** Present each pharmacy their number and ask one question: *"If software found this every week and filed the appeals for you, would you pay $299/month?"* Then ask for a card on a founding-customer pilot.

**Falsifiable outcome:** Go only if median in-window recoverable dollars across the 5 stores exceeds **$500/mo** AND at least **2 of 5** owners commit payment on the spot. Median under $250/mo, or zero commitments, kills it — no amount of product polish fixes an ROI that isn't in the data. Anything between is a signal to widen the sample to 15 stores before deciding, not to proceed on hope.
