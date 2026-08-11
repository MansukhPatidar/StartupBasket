---
title: "UnderCost — claim recovery desk for independent pharmacies"
slug: underwater-claim-recovery
date: 2026-08-11
category: HealthTech / US-SMB — Independent Community Pharmacies (1–8 Stores) Losing Money on More Than Half Their Part D Prescriptions and Appealing Almost None of It
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Finds every prescription filled below acquisition cost and files the MAC appeal the pharmacist gave up on years ago."
tags:
  vertical: HealthTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Workflow-automation, Solo-builder, Revenue-recovery]
axes:
  problem: 18
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# UnderCost

## 1. One-liner

Finds every prescription filled below acquisition cost and files the MAC appeal the pharmacist gave up on years ago.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the pharmacy owner's favour for the first time in a decade.

**The bleeding got measurable and public.** More than 600 independent pharmacies closed in the first nine months of 2025. Independent pharmacies are losing money on over 60% of Part D prescriptions. Michigan owners told Crain's in July 2026 they are being paid less than what it costs them to buy the drug and fill it. This is no longer a grumble at a trade show — it is the stated cause of store closures in regional business press.

**The legal lever appeared.** MAC appeal rights have existed on paper for years, but 2026 is when states started putting a floor under the price rather than just a complaint box. Mississippi's House passed a PBM reform bill in early 2026 requiring PBMs to reimburse pharmacists at least their drug acquisition cost. Oklahoma already lets a pharmacy decline to dispense when PBM reimbursement falls below acquisition cost. An appeal backed by a state floor is a different instrument from an appeal backed by nothing.

**Somebody proved pharmacists will actually use this.** Pharmacy Marketplace's appeals feature produced this owner testimonial: *"I've owned my pharmacy for 6 years and gave up on appeals 5 years ago. I have used the Pharmacy Marketplace Appeals feature for 3 weeks and have submitted over 250 claims with almost 100% success rate."* Read that twice. Six years of ownership, five of them not appealing, then 250 claims in three weeks once the friction was removed. The demand was always there. The workflow was the blocker.

That last quote is the whole thesis. The money is sitting on the table, the pharmacist knows it's sitting there, and they still don't pick it up — because picking it up means matching claim-level reimbursement against invoice-level acquisition cost, one NDC at a time, then filling a different web form for every PBM.

Provenance:
  - Signal 1 (Demand): Independent pharmacies losing money on 60%+ of Part D prescriptions; 600+ closures in nine months of 2025; Michigan owners naming below-cost reimbursement as the cause of closure — https://www.crainsgrandrapids.com/health-care/cgr-independent-michigan-pharmacies-low-reimbursements-closures-20260721/ and https://www.ecopharma.io/blog/pbm-reimbursement-survival-guide-pharmacies — 2026-07-21
  - Signal 2 (Feasibility): MAC appeals are a defined, documented, per-PBM process with fixed review windows (Optum: reviewed within 7 business days, adjustment effective from filing date) and a known evidence requirement (invoices showing actual acquisition cost) — https://business.optum.com/en/support/professionalrx-resources/appeals-submission-guide.html — accessed 2026-08-11
  - Signal 3 (Economic): Verified owner testimonial of 250 appeals in 3 weeks at near-100% success once friction removed; one Mississippi pharmacy reported DIR fees exceeding $100,000 in 2025 — https://pharmacymarketplace.com/blog/the-best-kept-secret-in-pharmacy-how-to-actually-recover-your-underwater-claims/ — accessed 2026-08-11
  Category: Underserved niche

## 3. The opportunity

The gap is not "pharmacies don't know they're underwater." They know. The gap is that **knowing is claim-by-claim work and appealing is PBM-by-PBM work**, and no independent has a person to spare for either.

Here is the actual mechanic. When a pharmacy submits a claim, it finds out the reimbursement only after adjudication. As Benjamin Jolley, a pharmacist writing on this in detail, put it: *"The frustration from most pharmacy owners and independent pharmacists is that they have no idea what the MAC is for any item until they submit a claim."* So the loss is discovered after the fact, buried in a remittance file, mixed in with the claims that were fine.

To appeal, the pharmacy must produce, per claim: the NDC, the reimbursed amount, and **the invoice proving actual acquisition cost** — because the PBM requires "all invoices or other records demonstrating its actual cost for the drug." That means joining two systems that don't talk: the pharmacy management system's claim data and the wholesaler's invoice history. Then filing on the right PBM's portal in the right format.

Doing that by hand for 10–20 underwater claims a day is a part-time job nobody has. So it doesn't get done. Jolley again on the workaround of just requesting the MAC lists: *"the process to send and receive these lists (let alone use them) is far too labor-intensive today."*

The incumbents worth naming:

- **Pharmacy Marketplace** — has an appeals feature and, credit where due, proved the demand. But it's bundled inside a broader marketplace/purchasing product; appeals are a feature there, not the product. Their own marketing calls store-level appeals "a blind spot for years," which is an odd thing to say if you consider it solved.
- **PDC Rx and similar PSAOs** — offer MAC appeals as a member service. PSAO appeal support is real but generic, batch-oriented, and slow; the pharmacy has limited visibility into what was filed and what came back.
- **The pharmacy management systems themselves** (the incumbent system of record) — surface reimbursement data but treat below-cost detection as a report you can run, not a queue that works itself. A report that shows "10-20 such claims daily, sometimes representing losses of $10 or more per claim" is a report that makes you feel bad without recovering a dollar.

The 10× move: stop shipping a report, ship a **worked queue**. Ingest claim data and wholesaler invoices, compute the true underwater delta per claim automatically, draft the appeal with the invoice evidence attached, and file it. The pharmacist's job shrinks from "do reconciliation and paperwork" to "approve this batch."

## 4. Target market

- **Primary customer:** Owner-pharmacist of an independent community pharmacy, 1–8 stores, US. The buyer is the owner — usually also a working pharmacist behind the counter — not a procurement committee. There is no CFO. The person who feels the pain signs the cheque, which is exactly the profile a bootstrapper wants.

- **Why they buy:** In their own words. Jolley on the economics: *"pharmacy reimbursement is disturbingly similar to playing the slots at a casino - you lose most of the time, and win big sometimes."* And on why the losses can't simply be absorbed: *"you still have all of the losses and below cost of dispensing prescriptions to make up - which is not possible."* They buy because the alternative is the closure list.

- **Rough TAM reasoning:** 18,960 independent pharmacy locations as of July 2025. The average independent dispensed 67,601 prescriptions per year (~217/day) in 2024. Even if only the top third are organised enough to buy software, that's ~6,000 buyers. At $299/mo that's a ~$21M/yr ceiling on the core product alone — comfortably past a $5M ARR target without needing to win the whole market. This is precisely the size that bores VCs and pays a small team very well.

- **Why now for them:** Reimbursement pressure crossed from "annoying" to "existential" — 600+ closures in nine months. And the state-level acquisition-cost floors emerging in 2026 mean an appeal now has statutory backing in a growing number of states rather than being a polite request.

## 5. Product sketch (MVP)

- **Underwater detection** — pulls claim-level reimbursement and matches each NDC against actual acquisition cost from wholesaler invoices; flags every claim filled below cost, with the exact dollar delta.
- **Daily recovery queue** — the flagged claims arrive as a worklist, ranked by recoverable dollars, not as a PDF report.
- **Auto-drafted appeals** — each appeal pre-filled with NDC, claim ID, reimbursed amount, and the matching invoice line as evidence, formatted to the destination PBM's requirements.
- **One-click batch filing** — approve a day's queue and file across PBMs; no re-keying the same claim into four portals.
- **Appeal outcome tracking** — logs what was filed, when the response window closes (e.g. Optum's 7 business days), what came back, and what was actually repriced.
- **Recovered-dollars dashboard** — the single number the owner shows their spouse: dollars clawed back this month.
- **Repeat-offender NDC list** — which drugs go underwater over and over, so the owner can change purchasing or decline to stock.
- **State floor awareness** — flags claims in states with acquisition-cost floor laws, where the appeal carries statutory weight.

## 6. AI angle — what's load-bearing

Remove the AI and this product genuinely does not work at the price point. That's the test, and it passes.

The load-bearing work is **messy entity resolution across two systems that were never designed to reconcile.** A wholesaler invoice line and a pharmacy claim line describe the same physical bottle in different vocabularies — different NDC formatting, package-size versus dispensed-quantity mismatches, repackagers, generic substitutions, partial fills. Computing "was this claim below my actual cost" means resolving that join correctly across hundreds of daily lines and thousands of NDCs, per store, with wholesaler invoice formats that differ per vendor and change without notice.

Second load-bearing piece: **appeal document assembly per PBM.** Each PBM wants different fields, different evidence framing, different portal formats. Generating a correct, evidence-attached appeal per destination is document generation over semi-structured, drifting inputs.

A deterministic rules engine can do maybe the clean 60% of the join. The remaining 40% is where the recoverable dollars hide, and it's precisely the fuzzy-matching-plus-document-generation work that got cheap in the last two years. That's why this is buildable by two people now and wasn't in 2021.

## 7. Localization angle

`N/A — this is a US-only play.` MAC pricing, PBM appeal rights, Part D, NADAC and the state acquisition-cost floor laws are all artefacts of American pharmacy benefit structure. There is no equivalent workflow to localise into India or SEA, where the reimbursement architecture is entirely different. The geographic specificity is the moat, not a limitation — but it does mean this idea has exactly one market.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/mo per store, flat. Deliberately *not* contingency-based on recovered dollars — contingency pricing on healthcare claims invites scrutiny and complicates the sale. Flat pricing also makes the ROI story trivial: recover more than $299 and you're up.
- **ACV:** ~$3,600 per single-store pharmacy. Multi-store owners (2–8 locations) land at $7,200–$28,800 with volume discounting.
- **Rough math to $1M ARR:** 280 stores × $299/mo × 12 ≈ $1.0M. Given ~18,960 locations, that's 1.5% penetration. Modest.
- **Rough math to $5M ARR:** ~1,400 stores, ~7.4% of the market — plus ACV expansion via multi-store accounts. Realistic but requires moving beyond founder-led sales into PSAO and buying-group channel partnerships (see §9).
- **Expansion path:** Per-store seat growth as customers acquire locations; a higher tier adding audit defence (pharmacy audits are an adjacent, equally painful evidence-assembly problem using the same invoice/claim join); and eventually purchasing intelligence — "you're buying this NDC from the wrong wholesaler" — which falls out of the data already ingested.

The ROI pitch is arithmetic, not vibes: at 10–20 underwater claims a day averaging $10+ of loss, a store is bleeding roughly $2,000–$4,000 a month. Recovering even a third of that pays for the product several times over.

## 9. Go-to-market wedge — first 100 customers

This is the part most healthcare ideas fail, and it's the reason I'm scoring this a GO rather than a VALIDATE — the first 100 are addressable by name.

- **The closure-adjacent list.** State pharmacy boards publish licensed pharmacy registries; NCPA membership and state pharmacy association directories are enumerable. Build a list of ~3,000 independent locations, prioritising the states that passed or are debating acquisition-cost floors (Mississippi, Oklahoma first — the appeal is strongest there and the local news coverage means owners are already primed). Personalised outreach with a state-specific hook. At a 3% conversion that's 90 customers.
- **The free underwater audit as the wedge.** Offer a one-time free analysis: send us last month's claim and invoice exports, get back a dollar figure of what you're losing and what's recoverable. This converts because the deliverable *is* the pain quantified. Nobody argues with their own numbers. Expect this to be the single highest-converting motion.
- **State pharmacy association meetings and NCPA events.** Independent pharmacy is an unusually convention-driven, word-of-mouth trade. Owners talk to each other constantly. A booth plus a live audit of an attendee's real data in front of a room is worth more than a quarter of ad spend.
- **PSAOs and buying groups as channel.** PSAOs already offer appeals as a weak member benefit. Rather than fight them, white-label into two or three mid-size PSAOs — they get a better member service, you get distribution to hundreds of stores per deal. This is the lever that gets from $1M to $5M.
- **Benjamin Jolley and the pharmacy-owner writer circuit.** There's a small, high-trust set of pharmacist-writers and podcasters (Jolley's Substack, tl;dr pharmacy, The Thriving Pharmacist) whose audience is exactly this buyer and who have been writing about MAC pain for years. Sponsorship and guest analysis, not cold ads.

## 10. Build complexity — justification

**Medium.** The AI work is off-the-shelf — no custom models, no training. What makes it Medium rather than Low is the integration surface: pulling claim data out of pharmacy management systems and invoice data out of wholesaler portals, neither of which is a clean public API. Expect the first version to lean on file exports (CSV/EDI) that the pharmacist uploads or drops into a watched folder, rather than live integrations — which is fine, and honestly faster to sell because it doesn't require touching the PMS vendor. Two people, 3–4 months to a v1 that produces a real filed appeal. The PBM portal filing step may start semi-manual (generate the packet, human submits) and automate per-PBM over time.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | MAC appeals are an explicitly provided-for right; several states mandate PBMs offer the process. Filing them on a pharmacy's behalf with its own data is routine. |
| Ethical — no harm / dark patterns | ✅ | Recovers money the pharmacy is contractually and increasingly statutorily owed. No patient impact, no PHI required for the core loop — this runs on NDC, price and invoice data. |
| Market exists (evidence above) | ✅ | 18,960 locations, documented below-cost losses, a named incumbent with a testimonial proving willingness to use. |
| 1–5 person team can build this | ✅ | Two people, 3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | No capital requirement beyond founder time and modest inference/hosting cost. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Owners are closing stores over this. Losses are daily, quantified, and the owner already knows about them. Held back from 19–20 only because it's a margin-recovery problem rather than a keep-your-licence problem — some owners have emotionally written the money off. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: closure counts, regional press naming the cause, state legislation, and a competitor testimonial showing 250 appeals in 3 weeks. A skeptic nods. Not 15 because I have testimonial-grade evidence rather than my own customer interviews. |
| Build feasibility | 15 | 10/15 | Doable in 12–16 weeks but the claim/invoice join is genuinely gnarly and wholesaler formats drift. Not a weekend project. |
| Distribution clarity | 15 | 12/15 | Enumerable list, a free-audit motion with an obvious conversion mechanic, and a convention-driven trade. Docked for the PSAO channel being unproven and slower than the direct motion. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against category norms ($135/mo Osiris, $49/mo entry tiers exist — $299 is above those but justified by direct ROI). $1M ARR needs only 1.5% penetration. Docked because churn is a real unknown: if a store recovers its money and the underwater rate drops, does it keep paying? |
| Time to first revenue | 10 | 7/10 | The free-audit wedge can pre-sell before the product is finished, but the join work means 4–8 weeks minimum to a credible paid deployment. |
| Defensibility | 10 | 4/10 | Honest assessment: this is largely an execution moat. Accumulated per-PBM appeal-format knowledge and per-wholesaler parsing become real assets by month 12, and outcome data on which appeals win is compounding. But a determined competitor — or Pharmacy Marketplace deciding to unbundle appeals — could follow. This is the weakest axis and I'm not dressing it up. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The data engineering is the product, so you need a real builder. And you need a pharmacist co-founder or a very engaged design partner — not as a nicety, but because the claim/invoice join has a hundred domain-specific edge cases (repackagers, partial fills, 340B, DIR clawbacks) that you will get silently wrong without someone who has stood behind the counter.

### Key assumptions to validate (3–5)

1. **Assumption:** A pharmacy can export claim data and wholesaler invoice data in a form that can be joined without a PMS vendor integration. **How to test:** Get 5 owners to send a month of real exports. If the join can be computed to a defensible dollar figure from files alone, the product is buildable on the fast path. If it demands PMS partnership, the timeline doubles and the score drops.
2. **Assumption:** Appeal success rates are high enough that recovered dollars visibly exceed $299/mo. **How to test:** Manually run 50 appeals for 3 pilot pharmacies and measure the recovery rate and dollars. The Pharmacy Marketplace testimonial claims near-100% success — verify that independently rather than trusting a vendor's marketing.
3. **Assumption:** Owners will pay flat monthly rather than demanding contingency. **How to test:** Offer both to 20 prospects and see which they pick. If they overwhelmingly want contingency, the revenue model needs rework.
4. **Assumption:** Recovery doesn't decay. **How to test:** Track underwater claim volume for pilot stores over 3 months. If successful appeals permanently fix the MAC for those NDCs and the queue empties, this is a one-time cleanup, not a subscription — a genuine business-model risk.

### Risk flags

1. **Competitive encroachment:** Pharmacy Marketplace already has an appeals feature and the audience. If they focus, they compress this window fast. Speed matters more than polish here.
2. **Platform dependency:** The product depends on PBM appeal portals and their formats, which the PBMs control and have no incentive to keep stable or accessible. If a major PBM makes programmatic filing hostile, a chunk of the automation reverts to manual.
3. **Business-model decay:** The best outcome for the customer — MAC prices corrected, fewer underwater claims — is the worst outcome for retention. The expansion path into audit defence exists partly to hedge this, and it should be built earlier rather than later.
4. **Regulatory whiplash:** PBM reform is moving fast and unevenly. Federal action that structurally fixes below-cost reimbursement would be excellent for pharmacies and would shrink this product's reason to exist. Low probability in the near term, but real.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a pharmacist co-founder or deeply
                        embedded design partner. Data-engineering heavy.
Time to revenue:        8–12 weeks (free-audit wedge can pre-sell earlier)
Capital to launch:      $10–15K
Top 3 assumptions to validate first:
  1. Claim + wholesaler invoice exports can be joined into a defensible
     underwater figure without PMS vendor integration — test on 5 real
     pharmacies' month of data.
  2. Appeal win rate and recovered dollars materially exceed $299/mo —
     manually run 50 appeals across 3 pilot stores and measure.
  3. Recovery is recurring, not a one-time cleanup — track underwater
     claim volume at pilot stores across 3 months.
Kill criteria:
  - Abandon if the claim/invoice join can't be computed to a defensible
    dollar figure without a PMS vendor partnership.
  - Abandon if average monthly recovered dollars across 3 pilot stores
    comes in below $600 (2× the price) — the ROI story collapses.
  - Abandon if underwater claim volume at pilot stores drops >70% after
    the first cleanup cycle — that's a consulting engagement, not SaaS.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 5 independent pharmacy owners (state association directories, NCPA member lists, the pharmacist-writer circuit). Ask for one month of claim export plus matching wholesaler invoice export. Offer the analysis free. The recruitment rate itself is signal — if five owners won't hand over data for a free money-finding audit, the pain isn't what the press says it is.
- **Day 3–4:** Hand-compute the underwater analysis for all five. No product, no automation — spreadsheets and manual matching. Record how many claims are underwater, total dollar delta, and critically, **what fraction of lines you could not confidently join.** That unjoinable fraction is the real build risk.
- **Day 5:** Present each owner their number and ask for a $299/mo pre-commitment for when it's automated.

**Falsifiable outcome:** Go if ≥3 of 5 pharmacies show >$1,500/month in recoverable underwater dollars AND ≥2 of 5 owners pre-commit at $299/mo AND the unjoinable line fraction is under 20%. Anything less and this is a VALIDATE at best — the pain is real but the wedge isn't sharp enough yet.
