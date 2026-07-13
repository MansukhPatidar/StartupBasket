---
title: "KilowattCheck — depot bill reconciler for electric fleets"
slug: ev-depot-bill-reconciler
date: 2026-07-13
category: CleanTech / US — School Districts and Small Fleets Operating EV Charging Depots (utility bill and tariff recovery)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: Reads a fleet depot's electric bills against the utility tariff and finds the demand charges they never owed.
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Energy, Fleet, Public-sector]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KilowattCheck

## 1. One-liner

Reads a fleet depot's electric bills against the utility tariff and finds the demand charges they never owed.

## 2. Trend signal — why now?

Three things happened at once, and nobody is standing where they intersect.

**Fleets electrified, and the bill arrived.** EPA's Clean School Bus Program has awarded roughly **$3B for ~8,700 bus replacements across nearly 1,300 school districts** ([EPA](https://www.epa.gov/cleanschoolbus)). Those buses are now plugged into depots. The bills are landing. Naples Central School District told reporters its electric buses run **$3.18/mile against $0.36/mile for diesel**, and that the cost is unpredictable month to month ([Fox Business](https://www.foxbusiness.com/economy/electric-school-bus-mandates-bring-new-costs-taxpayers-districts)). That is not a battery problem. That is a **demand charge** problem — the utility bills the single highest 15-minute kW draw of the month, and a depot where twelve buses plug in at 4:45pm sets that peak every single month.

**Utilities responded with a thicket of EV-specific tariffs, riders and rebates — with deadlines.** PG&E's EV Fleet program is at max enrollment with a waitlist cutoff of **30 June 2026**; SCE's Charge Ready Transport ran applications to **30 June 2026** with agreements due **31 December 2026**; National Grid MA runs a **Demand Charge Alternative** rate and an off-peak charging rebate paying **$0.05/kWh in summer, $0.03/kWh otherwise** ([National Grid](https://www.nationalgridus.com/MA-Business/Commercial-and-Fleet-EV-Programs/Fleet-Programs)); several states have approved **demand-charge holiday** structures that phase the $/kW component back in at 75%/50%/25% discounts over three years ([ScottMadden](https://www.scottmadden.com/insight/taming-the-electric-vehicle-demand-charge/)). Every one of those is a thing that has to be *applied to the bill*. Nobody in a school district transportation office is checking whether it was.

**The tariff math became a commodity.** OpenEI's URDB carries machine-readable rate structures for **3,700+ US utilities**, free, via API ([OpenEI](https://openei.org/wiki/Utility_Rate_Database)); Arcadia/Genability models **25,000+ North American tariffs** commercially. Combine a tariff engine with a model that can read a PDF utility bill and you can recompute what a depot *should* have paid — line by line — for pennies. Five years ago this was a consultant with a spreadsheet.

And the money proves the pain is real: the utility bill audit industry already exists, charges **40–50% contingency on recovered savings**, and reports that **~17% of utility invoices contain errors** with commercial facilities overpaying **5–15%** on rate misclassification, ratchets and missed TOU ([P3 Cost Analysts](https://www.costanalysts.com/articles/what-is-a-utility-cost-reduction-audit-and-why-its-important-for-your-business/), [UtiliSave](https://utilisave.com/about-us/utility-bill-audits-value/)). Those firms chase million-dollar industrial accounts. A 20-bus depot spending $9K/month is beneath their floor — and their auditors don't read EV riders anyway.

Provenance:
  - Signal 1 (demand): School districts and fleets reporting demand-charge bill shock — $3.18/mi electric vs $0.36/mi diesel at Naples CSD; demand charges are 30–50% of depot electricity cost — https://www.foxbusiness.com/economy/electric-school-bus-mandates-bring-new-costs-taxpayers-districts — 2026-07-13
  - Signal 2 (feasibility): Machine-readable tariff data (OpenEI URDB, 3,700+ utilities, free API; Arcadia/Genability 25K+ tariffs) plus LLM bill parsing makes per-bill tariff recomputation cheap — https://openei.org/wiki/Utility_Rate_Database — 2026-07-13
  - Signal 3 (economic): Utility bill audit market charges 40–50% contingency; ~17% of invoices carry errors; commercial overpayment 5–15% — https://www.costanalysts.com/articles/what-is-a-utility-cost-reduction-audit-and-why-its-important-for-your-business/ — 2026-07-13
  - Signal 4 (regulatory/timing): EV-specific tariffs, demand-charge holidays and fleet rebate programs with 2026 enrollment deadlines (PG&E EV Fleet waitlist 30 Jun 2026; SCE Charge Ready Transport agreements due 31 Dec 2026; National Grid Demand Charge Alternative + off-peak rebates) — https://www.nationalgridus.com/MA-Business/Commercial-and-Fleet-EV-Programs/Fleet-Programs — 2026-07-13
  Category: Tech-unlock

## 3. The opportunity

The EV-depot software market went all-in on **prevention**: load management. Ampcontrol, AmpUp, ChargePoint, SortGrid — they all stagger the chargers so the depot never sets a big peak. Good. Necessary. Every one of them costs $20–50/port/month or $5,000+/month enterprise, and every one of them assumes the *bill itself is correct*.

Nobody audits the bill.

That's the gap. The depot operator gets a PDF from the utility with a rate code, a billed kW, a ratchet floor, a handful of riders, and a total. There are four independent ways that number is wrong, and they compound:

1. **Wrong rate schedule.** The site was put on a general commercial rate before the chargers arrived and never moved to the EV/fleet rate it now qualifies for. Utilities generally let you switch once a year — *by explicit application*. Nobody applies.
2. **The rider never got applied.** The district enrolled in the demand-charge holiday or the off-peak rebate program, and the credit isn't on the bill. The utility isn't going to call you.
3. **The ratchet is anchored to a peak that shouldn't count.** One commissioning-day test event, one afternoon when the load-management system was offline, and an 80% ratchet floor prices the next 11 months off that spike.
4. **Straight billing error.** Meter multiplier, wrong demand interval, double-counted rider. 17% of invoices.

The traditional bill-audit firm does exactly this work — but for a $3M/year industrial account, at 50% of savings for 60 months, with a human doing the reading. A school district transportation supervisor with a $110K annual depot bill and no energy analyst cannot buy that. Nor should they pay half their recovery for five years.

What's newly true: the reading is now cheap. The tariff engine is free-to-cheap. So you can serve the account the audit firms won't touch, at a price they can't match, with a product instead of a consultant.

## 4. Target market

- **Primary customer:** The person who signs off on the depot's electricity bill at (a) a US **school district** with 5–50 electric buses — title is usually Transportation Director, Director of Operations, or Business Manager; and (b) a **small commercial fleet** (last-mile delivery, municipal, transit, utility, parcel contractor) with 10–100 EVs at one or two depots. Both have a depot bill in the $5K–$40K/month range and zero energy staff.
- **Why they buy:** Their electric bill is a black box that ate the fuel savings they promised the school board. From the Fox Business reporting on Naples CSD: the cost is unpredictable "you never know from month to month what it's going to be." Load management software tells them how to charge; nobody tells them whether the utility charged them right. When the board asks why electric costs more than diesel, they have no answer and no lever.
- **Rough TAM reasoning:** ~1,300 districts have EPA Clean School Bus awards, and state programs (NY, CA, CT, NJ) add more. Add small commercial and municipal depots and the addressable base of US depot sites with meaningful demand charges is plausibly in the **low tens of thousands**, growing. Capture 500 accounts and you have a real business; capture 2,000 and you have a great one.
- **Why now for them:** The first full year of billing is landing right now for the 2024–25 delivery cohort. Year one is when the ratchet gets set and when the enrollment windows (PG&E, SCE, National Grid) close. A mistake made in 2026 prices 2027.

## 5. Product sketch (MVP)

- **Bill ingestion.** Forward the utility PDF (or connect the utility account); we parse every line — billed kW, ratchet floor, rate code, riders, meter multiplier, TOU buckets.
- **Shadow bill.** We recompute what the bill *should* have been under the tariff the site is actually on, and flag every line that doesn't reconcile. Dollar delta, per line, in plain English.
- **Rate-schedule fit check.** Given the depot's actual load shape from 12 months of bills, we test it against every other tariff the utility offers it — including EV/fleet-specific rates and demand-charge-alternative rates — and rank them by what the site *would have paid*. Output: "You're on GS-2. On EV-3B you'd have paid $31,400 less over the last 12 months. Switching requires an application by [date]."
- **Rider and rebate ledger.** Every EV program the site is enrolled in, and whether the credit actually showed up on each month's bill. Missing credits become a claim.
- **Ratchet watch.** Shows the peak currently anchoring the ratchet floor, what it's costing per month, when it rolls off, and whether it's disputable (test event, outage, one-off).
- **Recovery packet.** A utility-ready dispute or rate-switch application — the numbers, the tariff citations, the bill exhibits — that the transportation director can send without hiring anyone.
- **Board-ready summary.** One page: cost per mile, what we recovered, what's still leaking. This is the artifact that gets the tool renewed.

## 6. AI angle — what's load-bearing

Take the AI out and this is a consultant with a spreadsheet — which is precisely the $200/hr product these customers can't afford. Two places the model is doing the actual labor:

1. **Bill comprehension.** Every utility's bill PDF is a different, undocumented, mutating format, and there are thousands of them. Line items are named idiosyncratically ("Rider EVC-2 Adj," "Dist Dem Chg — Ratcheted"). A vision-capable model that maps arbitrary bill layouts onto a normalized schema is what makes coverage of 3,700 utilities tractable for a two-person team. Hand-built parsers per utility is a 30-person data-ops company.
2. **Tariff-to-bill reconciliation reasoning.** Tariff sheets are prose with math in them — eligibility clauses, ratchet definitions, seasonal windows, rider stacking rules. The URDB structures a lot of it but not all, and the edge cases are where the money is. The model reads the tariff PDF, reconciles it against the structured rate, and explains the discrepancy in the customer's language.

The dollar amounts themselves come from deterministic arithmetic, not from the model — you never let an LLM assert a recovery number. The model reads and reasons; the calculator calculates.

## 7. Localization angle (if any)

N/A — this is a US play, and deliberately so. The wedge *is* the fragmentation of US utility tariffs: 3,700 utilities, thousands of rate schedules, per-state EV rider programs, an 80% ratchet norm. That mess is the moat. Markets with a single national tariff (most of the EU) have far less to reconcile. UK/Canada/Australia are plausible year-two expansions where a similar tariff jungle exists; India is not a market for this at all.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $299/month per depot site for the standing subscription (ingestion, shadow bill, ratchet watch, board summary) — plus **20% of first-year recovered/avoided cost** on any switch or dispute we win. Half what the incumbent audit firms take, and the subscription means we're not a one-shot.
- **Why this price:** A district with a $110K annual depot bill overpaying 8% is leaving ~$8,800/year on the table. $3,588/year for the subscription is an easy yes against that. It's also small enough to land inside a transportation director's discretionary spend, which matters enormously for a public-sector buyer — no board vote, no RFP.
- **ACV:** ~$3,600 subscription + ~$1,500 average contingency in year one ≈ **$5,000**. Multi-depot fleets go higher.
- **Rough math to $1M ARR:** ~280 sites at $3,600 subscription = $1.0M, before contingency. Contingency is upside, not the plan.
- **Rough math to $5M ARR:** ~1,000 sites at a blended $5,000 ACV. That requires either (a) breaking out of school districts into commercial/municipal fleets, or (b) an expansion product — the natural one is **demand-charge forecasting** ("if you plug in the two new buses at 3pm you will add $1,900/month") and eventually a managed-charging integration that closes the loop with the load-management vendors rather than competing with them.
- **Expansion path:** More sites per customer (districts have multiple bus yards; fleets have multiple depots), then more meters per site (the school buildings themselves have demand charges — envigilance data suggests a typical high school pays $2,000–$4,800/month in demand charges), then the forecasting tier.

## 9. Go-to-market wedge — first 100 customers

The list is public. That's the whole reason this works.

- **The EPA award list is the CRM.** EPA publishes Clean School Bus Program awards by district. That's ~1,300 named school districts, each with a public transportation director, a public email, and a known bus count. Pull the list, enrich with the utility serving that county, and you know — before you ever call — which of them are in PG&E, SCE, National Grid or ConEd territory and therefore which EV rider they're probably not enrolled in.
- **Lead with a free audit of one bill.** Not a demo. Ask for a single month's utility PDF, return a two-page reconciliation with a dollar number on it within 24 hours. This is the entire sales motion. If the number is zero, we say so and we've earned the relationship; if it's $700/month, they've already justified the subscription. Target: 300 emails → 40 bills → 25 with a finding → 10 paying. A 3–4% cold-to-paid rate is realistic when the artifact is that concrete.
- **Ride the enrollment deadlines.** "PG&E EV Fleet waitlist closes 30 June" and "SCE agreements must be signed by 31 December" are the most valuable cold-email subject lines in this business. Segment the list by utility and send the deadline, not the pitch. Do this every quarter, forever — there is always a window closing somewhere.
- **The pupil transportation associations.** NAPT and the state pupil-transportation associations run conferences and listservs where transportation directors talk to each other about exactly this. One director who cut $9K off the annual bill is worth 50 cold emails. Sponsor a state conference for a few thousand dollars, present the anonymized numbers.
- **The charger installers and e-mobility consultants** who sold these depots have angry customers and no answer. They are a warm referral channel with an incentive to look competent. Revenue-share them.

## 10. Build complexity — justification

**Medium.** The tariff engine is the hard part, and it's half-solved for you: URDB is free and covers 3,700 utilities in machine-readable form; Arcadia/Genability is the paid escape hatch when URDB is stale or thin (and it will be, for municipal and co-op utilities). Bill parsing is a vision-model problem, not a parser-per-utility problem, but getting it to *reliable* on the messy 20% of formats is where the weeks go. The shadow-bill calculator itself is deterministic arithmetic — no ML, just careful implementation of ratchets, seasonal windows and rider stacking.

Realistically: **12–16 weeks to a v1** a pair can sell — narrow it to the 8–10 investor-owned utilities that cover most of the EPA award list, get those tariffs exactly right, and expand utility coverage as customers arrive. Don't try to cover 3,700 utilities on day one; cover the six that your first 50 leads sit behind.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading a customer's own bill against a public tariff. Rate-switch applications and billing disputes are a customer right in every US jurisdiction. |
| Ethical — no harm / dark patterns | ✅ | We tell customers when we find nothing. The contingency is disclosed and capped at first-year value, not the 60-month grabs the incumbents run. |
| Market exists (evidence above) | ✅ | A 40–50%-contingency bill-audit industry already exists; ~1,300 districts have new depots. |
| 1–5 person team can build this | ✅ | Two people, 12–16 weeks. Tariff engine is the only real depth. |
| Launchable with <$50K / ₹40L | ✅ | URDB is free; Genability only if needed. Main cost is time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt monthly, and politically painful — a transportation director defending a bill to a school board is motivated. Not quite hair-on-fire because the pain is diffuse (it's "the electric bill went up," not "we got sued"), and many still don't know it's *recoverable*. |
| Demand evidence | 15 | 12/15 | Strong indirect evidence: an entire contingency-fee audit industry, documented bill shock, 1,300 named districts. Docked because I found no direct verbatim of a district saying "I would pay for a bill audit." That's the thing to test first. |
| Build feasibility | 15 | 11/15 | Pair, 12–16 weeks. URDB removes the worst of it. The messy-bill tail and municipal-utility tariff coverage are the honest drags. |
| Distribution clarity | 15 | 12/15 | A named, public, ~1,300-row list with a free-audit hook and quarterly deadline hooks. Docked because public-sector procurement is slow even under the discretionary threshold, and summer (when buses stop) is a dead quarter. |
| Revenue mechanics | 15 | 11/15 | $299/mo is well within discretionary spend and benchmarked below the audit firms. Docked because the contingency upside is unproven and the subscription alone needs ~280 sites for $1M — reachable, but it's a lot of small public-sector logos. |
| Time to first revenue | 10 | 7/10 | The free-bill-audit hook can convert inside 6–8 weeks of having a working parser for one utility. But school-district procurement, even small, adds friction diesel-fleet customers wouldn't. |
| Defensibility | 10 | 5/10 | Execution moat plus accumulating tariff/bill-format coverage, which does compound. But nothing stops Arcadia, EnergyCAP or a load-management incumbent from bolting this on. The head start is the moat, and it is a real one for 12–18 months. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can read a utility tariff sheet and not flinch. That's a learnable skill in about three weeks of pain, but it is not optional — get it wrong and you send a district an incorrect recovery number, which is the one mistake that kills this business.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share (>40%) of EV-depot bills contain a recoverable error, a suboptimal rate schedule, or a missing rider credit. **How to test:** Get 15 real depot bills — from districts, from charger installers, from a state pupil-transportation listserv — and hand-audit them against the tariff. If fewer than 6 have a finding, the product has no story.
2. **Assumption:** A school-district transportation director can approve $299/month without a board vote or an RFP. **How to test:** Ask 20 of them directly. This single answer decides whether the sales cycle is 4 weeks or 9 months, and therefore whether the whole thing works.
3. **Assumption:** URDB tariff data is accurate enough to compute a defensible shadow bill for the top 10 IOUs. **How to test:** Recompute three known-correct bills from three utilities against URDB and see if the totals tie to the penny. If they don't, you're buying Genability, and your COGS story changes.
4. **Assumption:** The contingency fee is acceptable to a public buyer. **How to test:** Public procurement often hates contingency. Ask five business managers whether a 20%-of-savings fee is a procurement problem — if it is, drop it and price the subscription higher.

### Risk flags

1. **Incumbent bolt-on:** Arcadia already owns the tariff engine. EnergyCAP already owns utility bill management for the public sector. Either could ship this feature. Your defense is that neither of them cares about a 20-bus depot — but that's a bet on their attention, not on a moat.
2. **Data-access friction:** Getting bills is easy (customer forwards a PDF). Getting *utility account access* to automate ingestion is not, and without it the product stays semi-manual longer than you'd like.
3. **Policy whiplash:** Federal support for the Clean School Bus Program is politically contested — the 2024 rebate round was not awarded. If federal electrification funding stalls, the school-district segment stops growing (though the ~8,700 buses already funded still have bills). Mitigation: don't build a school-bus-only company. Build a depot company; districts are the beachhead.
4. **Accuracy is existential:** One wrong recovery number sent to a utility and the district's credibility (and yours) is gone. This constrains how fast you can trust the model and forces a human-in-the-loop review on every claim for the first year. That's a real drag on margin.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will personally learn to read utility tariff
                        sheets, paired with someone who can work a public-sector list without
                        losing patience. No energy-industry pedigree required.
Time to revenue:        8–12 weeks (free-audit hook converts fast once one utility is modeled)
Capital to launch:      $10–20K (URDB is free; Genability only if URDB proves too thin)
Top 3 assumptions to validate first:
  1. >40% of real depot bills have a finding — hand-audit 15 bills before writing code
  2. $299/mo clears the discretionary threshold for a transportation director — ask 20
  3. URDB shadow bills tie to the penny for the top IOUs — reconcile 3 known bills
Kill criteria:
  - Abandon if fewer than 6 of 15 hand-audited depot bills contain a recoverable finding
  - Abandon if the median sales cycle exceeds 90 days across the first 20 opportunities
    (public-sector procurement would have eaten the business)
  - Abandon if a load-management incumbent (Ampcontrol, ChargePoint) ships bill
    reconciliation before your v1 — they own the customer already
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the EPA Clean School Bus award list. Build a 200-district sheet with transportation director name, email, bus count, and serving utility. This costs a day and it is the asset the whole business sits on.
- **Day 2–3:** Email 60 of them one line: *"You have N electric buses. I'll audit one month of your depot's electric bill against your utility's tariff for free and tell you if you're overpaying. Send me the PDF."* No product, no deck, no call.
- **Day 3–5:** Hand-audit every bill that comes back — you, a tariff sheet, and a spreadsheet. No code. Count how many have a finding and what the average dollar value is.
- **Day 5:** Decide.

**Falsifiable outcome:** Send 60 emails. **Go if ≥12 bills come back AND ≥5 of them contain a recoverable finding worth >$300/month.** That is a 20% bill-share rate and a 40% hit rate — if the real numbers are meaningfully below either, the pain isn't sharp enough or the errors aren't there, and no amount of good software fixes that. Kill it and move on.
