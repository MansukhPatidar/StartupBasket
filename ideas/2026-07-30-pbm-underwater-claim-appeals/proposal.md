---
title: "UnderwaterRx — appeal docket for independent pharmacies"
slug: pbm-underwater-claim-appeals
date: 2026-07-30
category: HealthTech / US-SMB — Independent Community Pharmacies (1–5 locations) Filing Store-Level PBM Reimbursement Appeals
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Finds every prescription you filled below cost, attaches the invoice proving it, and files before the deadline."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Workflow-automation, Solo-builder]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 13
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# UnderwaterRx

## 1. One-liner

Finds every prescription you filled below cost, attaches the invoice proving it, and files before the deadline.

## 2. Trend signal — why now?

Three things moved at once, and they moved in a direction that turns a complaint into a collectible.

**The right to be paid became statutory.** Through 2025–2026 a wave of states put a hard floor under pharmacy reimbursement. Iowa's law reimburses retail pharmacies at NADAC plus a dispensing fee, effective for contracts beginning July 1, 2025 and applying to prescription drug benefits from January 1, 2026. Kansas SB 20 sets a commercial floor of NADAC plus the greater of $10.50 or the state Medicaid professional dispensing fee for non-ERISA plans. Colorado requires PBMs to reimburse rural independent pharmacies at no less than NADAC plus a professional dispensing fee beginning January 1, 2026. New Jersey's A.1502 creates the same shape of floor. Arkansas, Georgia, Kentucky, Tennessee and West Virginia have NADAC-plus-dispensing-fee requirements on the books. Florida HB 697 goes further and lets a pharmacist *decline to dispense* a prescription that would be reimbursed below cost.

This matters because the pharmacy's position changed from "PBM pays what it pays" to "PBM owes a number defined in statute." That is an enforceable claim. But an enforceable claim you never file is worth zero.

**The filing mechanics are brutal and time-boxed.** Appeal windows are short and vary wildly by state: Tennessee requires initial appeals within seven business days of the initial claim submission; New Mexico allows 21 business days; Mississippi 30 business days; South Carolina at least 30 business days. Miss the window and the money is gone permanently — there is no retroactive sweep. Worse, the evidentiary bar is per-claim: the actual invoice proving negative margin must be attached to each individual appeal in the PBM portal, and if cost is approximated or the state's procedure isn't followed to the letter, PBMs won't comply.

**The pain is now existential, not annoying.** Independent pharmacies are losing money on over 60% of Part D prescriptions. NCPA's data puts roughly 18,960 independent pharmacy locations in the US as of July 2025, down from 18,984 in June 2024, closing at a rate of more than one per day. The 2024 Digest describes a $103 billion marketplace hitting a 10-year high in cost of goods and a 10-year low in gross profits. 95% of pharmacies dispensing GLP-1s report losing money on them.

And here's the signal that turns this from a thesis into a business: appeals filed correctly actually win. A pharmacy using an existing appeals tool reported *"I have used the Pharmacy Marketplace Appeals feature for 3 weeks and have submitted over 250 claims with almost 100% success rate."* The mechanism works. Almost nobody is running it at volume, because running it means matching every underwater claim to the specific wholesaler invoice line that proves it — by hand, inside a one-to-four-week window, for hundreds of claims a month.

That matching step is the entire business.

```
Provenance:
  - Signal 1 (Demand): Independent pharmacies losing money on >60% of Part D prescriptions; industry guidance explicitly tells owners to "track every underwater claim and maintain a detailed log... powerful when filing complaints" — https://www.ecopharma.io/blog/pbm-reimbursement-survival-guide-pharmacies — accessed 2026-07-30
  - Signal 2 (Feasibility): CMS publishes NADAC weekly as a free public dataset (last updated 2026-07-14), giving any builder an authoritative per-NDC acquisition-cost benchmark to compute negative margin against — https://www.medicaid.gov/medicaid/nadac and https://catalog.data.gov/dataset/nadac-national-average-drug-acquisition-cost-2026 — accessed 2026-07-30
  - Signal 3 (Economic): 2025–2026 state PBM reform wave (IA, KS, CO, NJ, AR, GA, KY, TN, WV, FL HB 697) created statutory NADAC-plus reimbursement floors and decline-to-dispense rights, converting below-cost fills into recoverable claims — https://www.frierlevitt.com/articles/2026-state-pbm-reform-nadac-reimbursement-spread-pricing-bans/ — accessed 2026-07-30
  - Supporting: Per-claim invoice attachment requirement and PSAO blanket-appeal inadequacy — https://pharmacymarketplace.com/blog/the-best-kept-secret-in-pharmacy-how-to-actually-recover-your-underwater-claims/ — accessed 2026-07-30
  - Supporting: State-by-state appeal deadlines (TN 7 business days, NM 21, MS 30, SC 30) — https://www.frierlevitt.com/articles/legal-protections-pharmacies-pbm-practices-50-state-overview/ — accessed 2026-07-30
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is between a right and its exercise.

Every independent pharmacy already has the two datasets needed to prove an underwater claim. The PMS (PioneerRx, Liberty, QS/1, Rx30, BestRx) holds every adjudicated claim: NDC, quantity dispensed, date, plan, and what the PBM actually paid. The wholesaler portal (McKesson, Cardinal, ABC/Cencora, or a secondary like Kinray) holds every invoice line: NDC, pack size, unit cost, invoice number, invoice date. A claim is appealable when payment minus true acquisition cost for *that* NDC at *that* pack size is negative, and it's *provable* when you can name the invoice line.

Nobody joins those two tables. Not because it's hard conceptually — because NDC-to-invoice matching is genuinely messy. Pack sizes differ from dispensed quantity. The same molecule arrives from three labelers with different NDCs across a month. Invoices come as PDFs or fixed-width text with inconsistent NDC formatting (10-digit vs 11-digit, hyphenated vs not). Generic substitution means the NDC on the claim may not be the NDC on the shelf. Doing this by hand for 400 claims a month is a part-time job nobody has.

**Who I'm displacing, specifically:**

- **PSAOs.** They file blanket appeals on behalf of member pharmacies. The problem is structural, not effort: blanket-level appeals don't align with the specific language in state laws, which require the actual invoice attached to each individual appeal. The PSAO doesn't have your invoices. It cannot, by construction, file the appeal that wins.
- **Reconciliation incumbents (Net-Rx, ReconRx, FlipRx, EnlivenHealth).** These answer a different question: *did the PBM pay what it promised at adjudication?* That's underpayment vs. contract. My question is *was what it promised below what the drug cost me, and does state law say that's illegal?* A claim can reconcile perfectly and still be underwater. These tools track payment at the transaction level against the adjudicated amount — they do not ingest wholesaler invoices, so they structurally cannot produce the evidence the appeal requires.
- **Pharmacy Marketplace's PBM Appeals tool.** The closest real competitor and proof the wedge is live. It gives you a workflow to file compliant store-level appeals. What I'm betting on is that the binding constraint isn't the filing UI — it's the *finding and evidencing*. Handing an owner a compliant form still leaves them to identify which 300 of last month's 3,000 claims were underwater and dig up each invoice.

The 10× is not a better form. It's that the pharmacy wakes up to a ranked queue of appealable claims, each pre-matched to its invoice line and dollar delta, sorted by days-to-deadline — instead of a blank portal and a hunch.

## 4. Target market

- **Primary customer:** Owner-pharmacist of an independent community pharmacy, 1–5 locations, $2–8M annual revenue, filling 250–800 scripts/day, located in a state with a NADAC-floor or MAC-appeal statute (IA, KS, CO, NJ, AR, GA, KY, TN, WV, FL, MS, NM, SC, WA, RI to start). Usually the owner is also the pharmacist-in-charge and does the books at night.

- **Why they buy:** They already know they're bleeding. The industry framing is blunt — pharmacies face "the impossible choice of losing money on a prescription or turning a patient away." One documented case: a specialty drug with a $20,000 acquisition cost produced a net $200 loss on a single claim, and the owner's reaction was "this is not sustainable." Another owner describes margins falling from 36% twenty years ago to 3–5% today. Common maintenance drugs reimburse only 2–5 cents above acquisition. They don't need to be convinced there's a problem; they need the claim list and the proof.

- **Rough TAM reasoning:** ~18,960 independent locations. Filter to multi-payer retail in appeal-statute states with enough volume to matter — call it 8,000–10,000 realistic targets. At $349/mo that's a $33–42M ceiling. I don't need the ceiling. 250 pharmacies is $1M ARR. That's 1.3% of the addressable set.

- **Why now for them:** Two clocks. The statutes just turned on (Colorado and Iowa's floors both bite from January 1, 2026), so the recoverable amount per store is at its historical maximum. And the appeal windows are short — every month of delay is a month of permanently expired claims. This is the rare product where "start next quarter" has a quantifiable cost the buyer can compute.

## 5. Product sketch (MVP)

- **Nightly claim sweep.** Pulls the day's adjudicated claims from the PMS (report export, SFTP drop, or scheduled file — no deep integration required for v1) and flags every claim where reimbursement fell below acquisition cost.
- **Invoice matching.** Ingests wholesaler invoices (PDF, CSV, or portal export) and matches each underwater claim to the specific invoice line — NDC, pack size, unit cost, invoice number, date — that proves the negative margin.
- **Deadline docket.** Every appealable claim shows days remaining under *that state's* statute (7 business days in Tennessee, 21 in New Mexico, 30 in Mississippi). Sorted by expiry, not by dollar value, so nothing dies silently.
- **Per-PBM appeal packets.** Generates the filled appeal in the format each PBM's portal expects, with the proving invoice attached as the statute requires — not a blanket template.
- **NADAC delta view.** Shows payment vs. NADAC-plus-dispensing-fee for states with a statutory floor, which is the argument that wins in floor states regardless of the PBM's MAC list.
- **Recovery ledger.** Tracks appeal filed → PBM response → deemed-granted deadlines (New Mexico deems an appeal granted if the PBM doesn't respond within 14 business days) → dollars actually recovered. This is the ROI screen the owner shows their spouse.
- **Monthly leverage export.** A clean log of underwater claims formatted for the state board of pharmacy, insurance commissioner, or legislator — the documented advocacy use case.

## 6. AI angle — what's load-bearing

Remove the AI and the product genuinely does not exist, because the matching step is where all the labor is.

**Invoice extraction across an unbounded format space.** Every wholesaler and secondary supplier emits a different invoice. McKesson's PDF is not Cardinal's, is not a small secondary's fixed-width text dump. Vision-model extraction handles the long tail that hand-built parsers can't — and the long tail matters, because secondaries are exactly where independents buy generics, which is exactly where they go underwater. A rules-based parser covers the big three and then breaks on the supplier that actually drives the losses.

**Fuzzy NDC and pack-size reconciliation.** This is the real technical meat. Matching a dispensed claim to a purchase line means normalizing 10- vs 11-digit NDCs, reasoning across labeler substitutions for the same molecule, and converting dispensed quantity to the purchased pack unit to get true per-unit cost. Ambiguity is the norm: three invoice lines from two labelers could plausibly back one claim. The model ranks candidates and — critically — reports confidence, because a wrong invoice attached to an appeal is worse than no appeal.

**Statute-to-deadline mapping.** Encoding 15+ state appeal regimes with different clocks, triggers (from adjudication vs. from MAC update), and evidence rules is a text-comprehension problem over statutes and administrative code that keeps changing as the reform wave continues.

The honest test: if AI vanished, could you ship this? You'd get a rules parser for three wholesalers and exact-NDC matching, which would find maybe 40% of underwater claims and mis-evidence a chunk of them. That product doesn't sell, because a 40% recall appeal tool is a tool the owner still has to double-check by hand — which is the job they were paying to avoid.

## 7. Localization angle (if any)

N/A — this is a US-only play, and deliberately so. The entire product is a function of US state PBM statutes, the CMS NADAC dataset, and the US wholesaler/PMS landscape. There is a structurally similar pain in the UK (the Norfolk pharmacist losing £1,500/month on medication surfaced in the research), but the mechanism is completely different — that's a national reimbursement tariff dispute, not a per-claim appeal right against a private PBM. No shared product.

The meaningful "localization" here is *per-state*, and it's the moat rather than a nice-to-have: each state's appeal window, evidence standard, and reimbursement floor is a distinct ruleset. Launch in 5 states, expand state by state as the reform wave continues.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $349/mo per pharmacy location, flat. Deliberately *not* contingency-based — a percentage-of-recovery model in healthcare reimbursement invites scrutiny about whether you're a claims agent, and it makes revenue lumpy and hard to forecast. Flat SaaS also survives the month a PBM tightens up and recoveries dip. Multi-location: $349 first store, $249 each additional.
- **ACV:** ~$4,200 single-store. Blended ~$5,500 accounting for 2–3 store groups.
- **Justifying the price:** The tool needs to clear its own cost by a wide margin to be a no-brainer. At 400 scripts/day and >60% of Part D claims underwater, even recovering $8–15 on a few hundred claims a month puts recovery in the low thousands. The existing-tool anecdote — 250 claims in 3 weeks at near-100% success — is the benchmark. If the product returns $2,000/mo against a $349 bill, the decision is trivial and churn is low. If it can't clear ~$1,000/mo recovered for a typical store, the price has to drop and the whole thesis weakens.
- **Rough math to $1M ARR:** 240 locations × $349/mo × 12 ≈ $1.0M. That's ~1.3% of independents, concentrated in 10–15 statute states.
- **Rough math to $5M ARR:** ~1,100 locations, which means covering all 50 states' appeal regimes (many states have MAC appeal statutes even without a NADAC floor), plus expansion revenue. Realistically $5M also wants a second product line — audit defense (DIR/pharmacy audit response) is the natural adjacency using the same claim+invoice corpus.
- **Expansion path:** Per-location growth as customers acquire stores (consolidation is happening as chains close). Then upsell: audit-response module, purchasing intelligence ("you're buying this generic at 40% over NADAC — switch supplier"), and 340B/contract-rate analysis. The invoice corpus makes the purchasing-intelligence upsell nearly free to build and it's arguably worth more than the appeals product.

## 9. Go-to-market wedge — first 100 customers

This is a rare market with a *named, enumerable, reachable* buyer set, which is why I like it.

- **The free underwater audit — the core wedge.** Owner uploads last 90 days of claim data plus a month of invoices. Product returns a one-page number: "you filled 312 prescriptions below acquisition cost last quarter; 47 are still inside your state's appeal window; here's $4,100 you can still file for." That report *is* the sales pitch, it's generated in minutes, and it's falsifiable in the buyer's own data. Target: run 300 free audits in the first 6 months, convert 25–30%.

- **State pharmacy associations, one at a time.** Every state has one (PSSNY in New York, and equivalents in each state), they run annual conventions, they publish member newsletters, and they are *actively lobbying on this exact issue* — the reform statutes exist because these associations pushed them. Sponsor 4–5 conventions in floor states (Iowa, Colorado, Tennessee, Kansas, New Jersey). Present the free-audit results in aggregate: "here's what 40 pharmacies in this state left on the table last quarter." Associations want this data for advocacy; that alignment gets you the podium cheaply.

- **NCPA channel.** NCPA is the trade body, publishes the Digest, runs the annual convention, and its members are precisely the target. The monthly advocacy export (formatted for boards of pharmacy and legislators) is a genuine gift to NCPA's federal and state advocacy work — that's a partnership conversation, not a booth rental.

- **Buying groups and secondary wholesalers.** Groups like GNP and independent-focused suppliers already sell margin-improvement services to exactly this list and have distribution into thousands of stores. Revenue-share referral. They win because a solvent pharmacy keeps buying from them.

- **Direct outreach on the closure signal.** More than one independent closes per day. State board licensure files are public and enumerable, so the target list is buildable rather than bought. Cold outreach with a state-specific hook — "Colorado's NADAC floor took effect January 1; here's how to check if your PBM is honoring it" — is timely, specific, and legitimately useful.

The conversion asymmetry is what makes this work: I'm not persuading anyone that a problem exists. I'm showing them a number they can verify in their own PMS.

## 10. Build complexity — justification

**Medium.** Roughly 14–18 weeks to a sellable v1 for a strong pair.

Off-the-shelf: NADAC is a free public CMS dataset. Document extraction is a vision-model API call. The web app, auth, and billing are standard. State statute encoding is research work, not engineering, and 5 states is enough to launch.

The custom work is the NDC-to-invoice matching engine and the per-PBM appeal packet generation. Matching is where the schedule risk lives — pack-size normalization, labeler substitution, and confidence scoring need real iteration against real pharmacy data, and you cannot build it well without a design partner's actual invoices in week 2. PMS data egress is the other friction: PioneerRx/Liberty/QS/1/Rx30 each export differently, and v1 should deliberately punt on deep integration in favor of scheduled report exports and SFTP drops. That's less elegant and completely sufficient — pharmacy owners will happily set up a nightly report export if the output is money.

What keeps it out of High: no custom models, no novel infrastructure, no regulatory approval to launch, and the hardest sub-problem (fuzzy entity matching over messy documents) is a well-understood shape of work.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping a pharmacy exercise an appeal right explicitly granted by state statute, using its own data. Not practicing law; not a claims-agent contingency model. |
| Ethical — no harm / dark patterns | ✅ | Recovers money legally owed to small businesses under laws written to protect them. Patient care is unaffected — arguably improved, since below-cost dispensing is what drives stores to stop stocking drugs. |
| Market exists (evidence above) | ✅ | ~18,960 independents, >60% of Part D claims underwater, existing paid tools with documented wins, statutes actively expanding. |
| 1–5 person team can build this | ✅ | Pair for 14–18 weeks. Needs a pharmacy design partner, not headcount. |
| Launchable with <$50K / ₹40L | ✅ | Two founders' time, API costs, 4–5 association convention sponsorships. Comfortably under $50K. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire and quantified. Losing money on >60% of Part D scripts, one independent closing per day, 10-year low in gross profits. The pain is felt on every single fill and the money expires on a statutory clock. Not a 19–20 only because owners have normalized it as a cost of doing business, which is itself a sales obstacle. |
| Demand evidence | 15 | 13/15 | Multiple independent hard signals: statutory reform across 10+ states, a competitor tool with a documented near-100% appeal success anecdote, explicit industry guidance telling owners to track underwater claims, NCPA closure data. Short of 15 because I found no direct verbatim from an owner saying "I'd pay for the matching step specifically" — that's assumption #1. |
| Build feasibility | 15 | 11/15 | Standard stack plus off-the-shelf vision extraction, but the NDC/pack-size matching engine needs real iteration on real data, and PMS egress varies by vendor. 14–18 weeks for a pair, not 6. |
| Distribution clarity | 15 | 13/15 | Enumerable buyer list from public licensure files, aligned trade bodies actively lobbying on this issue, existing buying-group channels, and a free audit that self-demonstrates in the buyer's own numbers. Held below 14 because association-led sales moves at convention pace. |
| Revenue mechanics | 15 | 12/15 | $349/mo is defensible against documented recovery amounts, and 240 locations to $1M is plainly achievable. One real assumption remains: typical monthly recovery per store. If it lands under ~$1,000, pricing power erodes. |
| Time to first revenue | 8 | 8/10 | The free audit produces a signed customer fast — a design partner can be paying inside 4–8 weeks of a working matcher. Not 9–10 because the matcher must actually work before anyone pays; there's no credible pre-sale of a broken match. |
| Defensibility | 10 | 3/10 | The weakest axis by a distance, and I won't dress it up. No structural moat. Pharmacy Marketplace is already adjacent and could add matching. Reconciliation incumbents have the PMS integrations and could extend into invoices. What you get is workflow lock-in (once your appeal history lives here you don't move), accumulating matching accuracy, and per-state statute knowledge that's tedious to replicate. That's a 6–18 month head start, not a moat. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The matching engine is the product, so this needs a real builder. And it needs pharmacy domain access — ideally a co-founder or first advisor who is a pharmacy owner or a PSAO/reimbursement veteran. Without someone who has personally filed a MAC appeal, you will build the wrong evidence packet and lose appeals for your customers, which is worse than not launching.

### Key assumptions to validate (3–5)

1. **Assumption:** A typical 400-script/day independent has $1,500–3,000/mo in recoverable underwater claims still inside the appeal window. **How to test:** Run the free audit manually — no product — on 90 days of real data from 10 pharmacies across 3 states. Compute recoverable dollars by hand. This single number determines whether the price is $349 or $99.
2. **Assumption:** Claim-to-invoice matching can hit ≥90% accuracy with confidence scoring good enough that low-confidence matches can be safely suppressed rather than mis-filed. **How to test:** Take one pharmacy's month of invoices and claims, match by hand to build ground truth, then measure the model against it. Below 90%, the owner has to check every appeal and the value proposition collapses.
3. **Assumption:** Owners will set up a nightly PMS report export rather than demanding a native integration. **How to test:** Ask 15 owners directly during the free-audit conversation. If they won't, build time increases materially and per-vendor integration becomes the roadmap.
4. **Assumption:** PBMs honor correctly-evidenced store-level appeals at a high rate, and don't respond to volume by tightening acceptance criteria. **How to test:** File 100 real appeals for 3 design partners across 2 PBMs and measure the actual grant rate over 60 days.
5. **Assumption:** State pharmacy associations will provide channel access rather than treating this as a vendor pitch. **How to test:** Approach 3 association directors with the aggregate-advocacy-data offer and see if it gets you a speaking slot.

### Risk flags

1. **Competitive encroachment (the big one):** Pharmacy Marketplace already sells a compliant appeals workflow, and the reconciliation incumbents already hold the PMS integrations. Either could add invoice matching. Defensibility scored 3/10 for exactly this reason — the bet is speed and focus, not protection.
2. **Regulatory reversal / ERISA preemption:** Several state floors explicitly apply only to non-ERISA plans, which carves out a large share of commercial lives. A federal preemption ruling against state PBM reimbursement mandates would shrink the appealable claim pool materially. The MAC appeal statutes are older and more durable than the new NADAC floors, so the floor-state pitch is the more fragile half.
3. **PBM counter-adaptation:** If store-level appeals scale, PBMs can respond by making portals more hostile, tightening evidence standards, or adjusting contracts at renewal. The statutes constrain this, but PBMs have historically been creative.
4. **Data access dependency:** No PMS vendor is obligated to keep report exports convenient. A vendor that views this as competitive (several PMS vendors sell their own reconciliation add-ons) could make egress harder.
5. **Buyer distraction:** The target customer is a working pharmacist running a store that is losing money. They are busy and capital-constrained, and a $349/mo line item competes with payroll. The free audit exists specifically to defuse this, but sales cycles will be slower than the deadline urgency suggests.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document extraction / entity matching) paired with a
                        pharmacy-reimbursement domain expert — ideally an owner-pharmacist or
                        ex-PSAO reimbursement analyst as co-founder or first advisor.
Time to revenue:        8–12 weeks to first paying design partner; 14–18 weeks to general v1.
Capital to launch:      $15–25K (API costs, 4–5 state association sponsorships, incorporation)
Top 3 assumptions to validate first:
  1. Recoverable dollars per store per month — hand-audit 90 days of real data for 10
     pharmacies across 3 states. If median recoverable is under $1,000/mo, reprice or kill.
  2. Matching accuracy — build hand-labeled ground truth from one pharmacy-month, measure
     model recall/precision. Must clear 90% with usable confidence scores.
  3. Real-world appeal grant rate — file 100 evidenced appeals for 3 design partners across
     2 PBMs, measure grants over 60 days.
Kill criteria:
  - Abandon if median recoverable-and-still-in-window claims are under $1,000/mo per store
    across the 10-pharmacy hand audit (price can't clear the value bar).
  - Abandon if matching accuracy stalls below 85% after 6 weeks of iteration on real invoice
    data (owner must re-verify everything; no labor saved).
  - Abandon if the 100-appeal test returns a grant rate below 50% despite correct evidence
    (means PBM discretion, not evidence quality, is the binding constraint).
  - Abandon if Pharmacy Marketplace or a reconciliation incumbent ships invoice-matched
    appeal generation before your v1 and bundles it into an existing contract.
```

## 15. Next step — 1-week validation sprint

The whole week aims at one falsifiable number: **how many dollars can a typical store still legally claim, and can a machine find them?**

- **Day 1–2 — Get real data.** Recruit 3 pharmacy owners (state association Facebook groups, NCPA member directory, local cold visits) willing to share 90 days of claim exports and one month of wholesaler invoices under NDA. Offer the audit free and unconditional. If three owners won't share data for a free audit that finds them money, that itself is a strong negative signal about buyer engagement.

- **Day 3–4 — Match by hand.** No product. Spreadsheet only. For each store: identify every claim paid below acquisition cost, match it to its proving invoice line, and split into "still inside the state appeal window" vs. "expired." Simultaneously, run a vision model over the same invoices and measure extraction accuracy against your hand-built ground truth.

- **Day 5 — Decide.** Two gates, both must clear:
  - **Money gate:** median recoverable-and-still-in-window ≥ $1,000/mo per store.
  - **Machine gate:** vision extraction of NDC + unit cost + invoice number ≥ 90% accurate on the sample, and hand-matching feels like an algorithm rather than a judgment call.

Clear both → build, with those three owners as design partners. Money gate fails → the appeal window is too tight or losses too small; kill or pivot to purchasing intelligence (same invoice corpus, "you're overpaying vs. NADAC on these 40 generics"), which needs no statute and no deadline. Machine gate fails → the matching problem is harder than it looks, and that *is* the product, so stop.
