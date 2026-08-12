---
title: "PerDiem — per-diem defender for drayage fleets"
slug: drayage-per-diem-defence
date: 2026-08-12
category: Logistics / US-SMB — Port Drayage Carriers (5–50 Trucks) Who Lost Their Categorical Billing Shield on 2 January 2026 and Now Pay Container Per-Diem Invoices Nobody Checks
complexity: Low
score: 77
verdict: GO
confidence: Medium
oneLiner: "Checks every container per-diem invoice against the 20 elements the law requires, before the 30-day clock expires."
tags:
  vertical: Logistics
  model: SaaS
  geography: US
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Workflow-automation]
axes:
  problem: 17
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# PerDiem

## 1. One-liner

Checks every container per-diem invoice against the 20 elements the law requires, before the 30-day clock expires.

## 2. Trend signal — why now?

Something specific broke on **2 January 2026** and nobody built the tool for it.

Here is the chain. In February 2024 the FMC issued its final rule on detention and demurrage billing. That rule did two things: it set out a list of data elements every D&D invoice must carry, and — in § 541.4 — it said carriers could bill **only** the contracting shipper or the consignee. Motor carriers were explicitly carved out. Drayage truckers could not be billed for per diem at all.

Then on **23 September 2025**, the D.C. Circuit in *World Shipping Council v. FMC* set § 541.4 aside as arbitrary and capricious. The court's reasoning was that a blanket ban on billing motor carriers sat inconsistently with the rest of the rule's contract-privity logic. And on **2 January 2026**, the FMC issued a final rule formally removing the vacated provision from the regulation.

Net effect as of this year: **the categorical shield is gone.** Ocean carriers can once again push per-diem onto drayage operators wherever a contractual relationship exists. There is currently no bright-line federal rule dictating who a carrier may or may not invoice. Motor carriers are back in the gray zone.

But — and this is the whole business — **the rest of the rule survived.** The 20 required invoice data elements still stand. The 30-day issuance window still stands. The 30-day dispute window still stands. And the enforcement teeth are brutal: if the invoice fails to include the required data elements under 46 CFR 541.6, *the billed party has no obligation to pay the charge as billed in the first place.*

So a 12-truck drayage outfit in Long Beach now receives per-diem invoices it never used to receive, each one legally voidable if it's missing a field, with a 30-day forfeit clock — and it is checking exactly none of them. The trade press already flags this: detention disputes rank among the top concerns for dispatchers at small 5- to 25-truck carriers. The National Industrial Transportation League saw it coming in 2024: *"They're going to have to pay even when they're not at fault for delays in picking up or returning containers."*

The money is not small. Nine ocean carriers collected **$15.4 billion** in D&D between April 2020 and March 2025.

Provenance:
  - Signal 1 (demand): "Detention disputes rank among the top concerns for dispatchers at small 5- to 25-truck carriers"; hidden chassis fees and back-billed accessorials named the most common drayage-cost surprises — https://blog.gettransport.com/logistics-guide/fmc-demurrage-detention-2026-shipper-guide/ and https://www.blackbridgelogistics.com/port-drayage-fees/ — observed 2026-08-12
  - Signal 2 (feasibility/regulatory): D.C. Circuit vacated FMC rule § 541.4 on 2025-09-23; FMC formally removed the provision by final rule on 2026-01-02, ending the categorical bar on billing motor carriers while leaving the 20-element invoice content rule and the 30/30/30 dispute clock intact — https://www.hklaw.com/en/insights/publications/2025/10/dc-circuit-vacates-key-provision-of-fmcs-demurrage-and-detention and https://www.federalregister.gov/public-inspection/2025-23920/demurrage-and-detention-billing-requirements-properly-issued-invoices-provision-set-aside-by-court — observed 2026-08-12
  - Signal 3 (economic): Nine largest ocean carriers collected $15.4B in D&D charges April 2020–March 2025; a 400-container/month forwarder pays ~$105,000/month in avoidable D&D ($1.26M/yr), a figure that "can exceed net profit on many trade lanes" — https://www.freightwaves.com/news/fmc-breaks-down-questions-on-new-detention-demurrage-rule and https://tier2systems.com/en/blog/demurrage-detention-management/ — observed 2026-08-12
  Category: Regulatory arbitrage

## 3. The opportunity

Six vendors sell D&D software. I checked all of them. BuyCo, Windward, Cargoo, GoComet, TradeTech, BlueCargo. Read their own positioning and the pattern is embarrassing: **every one of them is built for the party that was never in danger.**

BuyCo is "best overall option for large-volume shippers" and by its own reviewers "may be more advanced than what a very small shipper needs." Windward is for "freight forwarders and operators" wanting AI-based D&D automation. GoComet buries D&D inside a broad freight-visibility and procurement platform. TradeTech targets forwarders and NVOCCs. Only BlueCargo comes near the port floor — and it is a drayage and port *operations* platform, container pickup and empty-return coordination, sold as a system of record. It claims recovery of up to 75% of disputable per-diem invoices, which tells you the recovery rate is real; it does not tell you a 12-truck carrier can buy it.

The gap is not a feature gap. It is a **wallet and posture gap.** These are all platforms — implementations, integrations, annual contracts, volume minimums, sold to people with a logistics IT budget. The drayage operator who just started receiving per-diem invoices for the first time in two years does not want a platform. He wants somebody to read the invoice.

And reading the invoice is where the leverage is, because the rule is unusually generous to the defendant. Twenty required elements. Miss one and there is no payment obligation. The known defect list is long and mechanical:

- Wrong vessel discharge date used to calculate free time
- Detention continuing to accrue after a documented empty return
- Demurrage billed during terminal closures or when no appointments were available
- Missing or vague rate reference — you cannot verify it against tariff or contract
- Invoice issued more than 30 days after the triggering event
- Rate on the invoice not matching the published tariff or service contract
- Generic dispute inbox instead of a named dispute contact

Systematic audits at high-volume importers "routinely find a meaningful share" of D&D invoices with at least one missing or incorrect required element. That finding has never been operationalised for someone running 12 trucks, because paying an analyst to check a $340 invoice does not pencil. An AI that reads the PDF, cross-checks the gate timestamps, and drafts the dispute letter does pencil — at $0.02 an invoice.

Second leverage point, which the incumbents ignore entirely because their customers never needed it: **the "just and reasonable" defence survived the vacatur.** 46 U.S.C. § 41102(c) still requires carriers to observe just and reasonable practices. A detention charge is disputable as unjust where the motor carrier could not return the empty because the port was closed. That is not a documents check — that's a fact pattern, and the facts live in the driver's day: appointment records, gate in/out times, terminal closure notices, empty-return rejections. The drayage operator is the only party who *has* that data and the only party with nobody selling him software to use it.

Third: the 30-day dispute window is a forfeit clock. Miss it and you have generally lost that avenue. A carrier with no tracking system misses it by default. That alone justifies the subscription.

## 4. Target market

- **Primary customer:** Owner or dispatch manager at a US port drayage carrier running **5–50 trucks**, hauling out of a single port complex (LA/Long Beach, NY/NJ, Savannah, Houston, Norfolk, Seattle-Tacoma). Typically 1–3 people in the office. Revenue $1.5M–$15M. No logistics IT budget, no analyst, QuickBooks and a TMS at best.

- **Why they buy:** Because as of January this year they are getting per-diem invoices they did not get in 2024 and 2025, they have no contractual reimbursement path worked out with the shipper, and their instinct — pay it and move on — is now costing them four figures a month. NITL's executive director described the mood in the segment plainly: *"I think they're very distressed about this. And their costs are going to go up, because they're going to have to pay the invoice and then try and get reimbursed."*

- **Rough TAM reasoning:** Detention runs about **$85/hour** and occurs on roughly **1 in every 10 stops with average duration 1.4 hours** (FMCSA). Container per-diem runs **$150–$300 per container per day** with escalation tiers. A 20-truck drayage carrier turning ~1,200 container moves a year that gets per-diem on even 8% of them at an average of 2.5 days is looking at $70K–$150K of annual exposure. There are thousands of small drayage carriers across the major US port complexes; I do not have a defensible count and will not invent one. I need 400 paying accounts to hit $1M ARR — that is a rounding error against the population of FMC-registered intermediaries and port drayage operators, and it is the number the whole plan turns on.

- **Why now for them:** The shield disappeared seven months ago. Most of them have not yet understood that the invoices are legally defective at a meaningful rate, and every month they don't, another cohort of 30-day windows expires.

## 5. Product sketch (MVP)

- **Forward the invoice, get a verdict.** Email any per-diem, detention, or demurrage invoice to a dedicated address. Within minutes you get back a plain-English verdict: pay it, or dispute it — and if dispute, exactly which of the 20 required elements is missing or wrong.
- **The 20-element compliance check.** Every invoice scored field-by-field against 46 CFR 541.6. Container number, discharge date, availability date, last free day, charge date range, per-diem rate, tariff or contract reference, named dispute contact, notice of dispute rights. Any one missing and the tool says so in writing.
- **The forfeit clock.** A dashboard of every open invoice with days remaining in its 30-day dispute window, sorted by deadline. Red at seven days. This is the feature that sells the subscription even in a month when nothing is defective.
- **Draft dispute letter, ready to send.** Cites the specific CFR element, attaches your own evidence, addressed to the named dispute contact the invoice was required to provide. One click to send, logged with a timestamp.
- **The "unjust and unreasonable" builder.** For invoices that are technically compliant but factually wrong — port closed, no appointments available, empty return rejected, chassis unavailable — assemble the § 41102(c) argument from your own gate timestamps and appointment records.
- **Carrier response tracking.** The billing party owes a substantive response within 30 days of your dispute. The tool tracks that clock too, and escalates when it lapses.
- **Recovery ledger.** Monthly total of what was billed, what was disputed, what was waived or refunded. This is what justifies renewal and what the owner shows his shipper customers.

## 6. AI angle — what's load-bearing

Remove the AI and this is a spreadsheet nobody fills in. That is not a rhetorical flourish — it is exactly what exists today, and exactly why the problem is unsolved at this end of the market.

Three places the model does real work:

**Reading the invoice.** Per-diem invoices arrive as PDFs, and every ocean carrier and terminal formats them differently. There is no standard. A rules-based parser would need per-carrier templates maintained forever. Multimodal document extraction handles heterogeneous layouts natively and is now cheap enough that reading a $340 invoice costs a fraction of a cent. This is the specific unlock: GPT-4-quality output fell from roughly $30 per million input tokens in 2023 to under $0.50 in 2026. The economics of checking a small invoice inverted.

**Judging compliance, not just extracting.** "Is the tariff reference traceable by the billed party?" is a judgement, not a field check. A rate figure can be present and still non-compliant if it doesn't match the published tariff. The model has to reason about whether an element is *satisfied*, which is why this didn't get built as a regex five years ago.

**Building the reasonableness argument.** Correlating a detention charge against terminal closure notices, appointment availability, and the carrier's own gate timestamps to produce a written § 41102(c) argument is genuine drafting work — the kind a $150/hour transport lawyer does and a 12-truck carrier never buys.

What AI is *not* doing: deciding whether to dispute. The operator approves every letter before it goes. This is a relationship business and an over-eager robot that disputes everything will get a carrier's account closed. Human in the loop, always.

## 7. Localization angle

`N/A — this is a US-only play, and that is the point.`

The wedge is a specific American regulation with a specific American vacatur date. 46 CFR 541, the 30/30/30 clock, § 41102(c), and *World Shipping Council v. FMC* have no analogue elsewhere. The EU has its own demurrage practices and no equivalent invoice-content mandate with a no-payment-obligation penalty. Attempting a global version dilutes the only thing that makes this defensible. Ports first: LA/Long Beach, then NY/NJ, then Savannah and Houston.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, priced against exposure not seats.
  - **Solo/small (5–15 trucks):** $199/month — up to 60 invoices checked/month
  - **Standard (15–40 trucks):** $399/month — up to 200 invoices, unlimited dispute drafting
  - **Fleet (40+ trucks / small NVOCC):** $899/month — unlimited, plus multi-user and API-in from their TMS

- **ACV:** ~$2,600 blended. Most accounts land on Standard.

- **Rough math to $1M ARR:** 385 accounts at $399/mo × 12 = $1.84M — so realistically ~330 blended accounts gets you to $1M. Call it 350.

- **Rough math to $5M ARR:** ~1,600 accounts, or 900 accounts plus a success-fee line. Realistically $5M needs the second product: selling the same check to the *shipper* side (BCOs who get billed by the forwarder) and to small NVOCCs, where the volumes and the wallet are both larger. Not a v1 problem.

- **Expansion path:** Volume tiers are the natural ladder. Then a **success fee** — 15% of confirmed waivers and refunds above a threshold — which is how you capture the customer who recovers $40K in a quarter without pricing out the one who recovers $2K. Then chassis per-diem, which is a separate charge from a separate provider and has all the same defects. Then the same engine sold to the shippers who are being back-billed by their drayage providers.

A note on honesty: I am not scoring revenue mechanics highly. $199–$899/mo into a segment with 5–9% operating margins is a real ask, and I have not seen anyone charging this specific thing at this specific price. The ROI story is strong — one waived $900 invoice pays for three months — but ROI stories are easy to write and hard to collect on.

## 9. Go-to-market wedge — first 100 customers

- **The FMC's own list, filtered by port.** The FMC publishes a downloadable database of all active licensed OTIs and NVOCCs, and drayage carriers are findable through port-specific truck registries (the LA/LB Port Truck Registry lists licensed motor carriers by name and fleet size). Pull the operators at LA/Long Beach with 5–50 trucks. That's your first list, and it's public.

- **The free invoice teardown as the entire pitch.** Cold email one line: *"Forward me your last three per-diem invoices. I'll tell you free which ones you didn't have to pay."* Return a marked-up PDF showing exactly which of the 20 elements is missing. This is not a demo — it is the product, delivered manually, and it converts because the answer is a dollar figure. Budget 300 emails a week; a 6% reply rate on an offer this concrete is not heroic, and the teardown itself closes most repliers who have a defective invoice sitting in the pile.

- **Ride the January rule change with a hard-news hook.** Most of this segment does not know § 541.4 was vacated or what survived it. A one-page explainer — "Ocean carriers can bill you again as of January. Here's the part of the rule that still protects you" — placed with the Intermodal Motor Carriers Conference, state trucking associations at the port states, and the drayage-focused trade press. This is the cheapest distribution in the plan because the news is real and nobody has explained it to the truck-level operator.

- **Dispatchers on the phone at 4pm.** Small drayage dispatch is a phone culture, not a SaaS culture. The first 30 customers get closed by calling the dispatch line, not by a signup flow. Sales-heavy on purpose for the first quarter — that is how you learn the defect taxonomy well enough to automate it.

- **Sideways through the drayage brokers.** Brokers who tender to 40 small carriers have a reason to help those carriers not bleed: it's the same money in the end. One broker introduction is worth 40 cold emails.

## 10. Build complexity — justification

**Low.** The v1 is document ingestion, a rules-and-model compliance check against a fixed 20-element list published in the CFR, a deadline tracker, and letter generation. Every piece is off-the-shelf: email intake, multimodal PDF extraction, a scheduler, a document template. There is no marketplace, no network effect, no integration required for v1 — invoices arrive by email forward, which is deliberate, because it means zero implementation.

The genuinely hard part is not code, it's **the defect taxonomy**: knowing which invoice formats from which carriers fail which elements, and building the evidence-matching logic for the reasonableness arguments. That is earned by processing a few hundred real invoices by hand in month one. Budget **8–10 weeks to a v1** a real carrier can use, for one or two people, with the founder personally reading every invoice for the first 60 days.

TMS integrations for gate timestamps come later and are the only place complexity spikes.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Assisting a billed party to exercise a statutory dispute right. No legal advice given — the operator sends the letter, tool drafts it. Keep a clean UPL line: no representation, no appearance before the FMC. |
| Ethical — no harm / dark patterns | ✅ | Disputing legally defective invoices is exactly what the rule contemplates. Human approves every letter; no auto-dispute-everything mode. |
| Market exists (evidence above) | ✅ | $15.4B collected 2020–25; detention disputes named a top concern for 5–25 truck dispatchers; six funded vendors serving the enterprise end of the same problem. |
| 1–5 person team can build this | ✅ | 8–10 weeks, 1–2 people. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs are pennies per invoice; the real spend is the founder's time doing manual teardowns. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Direct cash loss, monthly, with a statutory forfeit clock. Not 18+ because per-diem is lumpy — a carrier can go two quiet months and forget the tool exists. |
| Demand evidence | 15 | **12**/15 | Strong: $15.4B collected, six funded competitors at the enterprise end, trade press naming detention disputes a top small-carrier concern, BlueCargo's own 75%-recovery claim. Held under 13 because I could not source a single verbatim quote from a drayage operator himself — everything is trade press and association counsel speaking on their behalf. That's a real gap. |
| Build feasibility | 15 | **13**/15 | Off-the-shelf document AI, fixed CFR checklist, no integrations in v1. 8–10 weeks. |
| Distribution clarity | 15 | **12**/15 | Public FMC and port-registry lists, a free teardown offer that is genuinely compelling, and a live news hook. Not higher because this segment does not buy software over the internet — the first 30 close on the phone, which caps speed. |
| Revenue mechanics | 15 | **11**/15 | ROI math is clean and the tiers are sane, but $199–$899/mo is untested in a thin-margin segment and 350 accounts of hand-sold SMB is a grind. One assumption — that they'll pay a subscription rather than demand contingency — is a guess. |
| Time to first revenue | 10 | **8**/10 | The teardown *is* the product; you can pre-sell during the manual phase. 4–8 weeks to first dollar, not 4. |
| Defensibility | 10 | **4**/10 | Honest score. Any of the six incumbents could ship a downmarket tier in a quarter. The moat is the defect taxonomy, port-level relationships, and being the only one who bothered — a 6–12 month head start, not a fortress. |
| **Total** | **100** | **77**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Technical enough to build reliable document extraction and a legal-checklist engine; sales-heavy because the first 30 customers close over the phone with dispatchers, not through a signup funnel. A founder who will not make cold calls to a Long Beach dispatch office should not build this.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share — call it 15%+ — of real per-diem invoices hitting small drayage carriers fail at least one of the 20 required CFR elements. **How to test:** Collect 100 real invoices from 15 carriers and hand-audit them. This is the single number the business lives or dies on. If it's 3%, there's no product.
2. **Assumption:** Drayage operators will pay a monthly subscription rather than insisting on pure contingency. **How to test:** Offer 20 prospects a straight choice — $399/mo flat vs. 25% of recoveries — and count. If more than 15 pick contingency, the model is wrong and you're running a recovery service, not SaaS.
3. **Assumption:** Carriers actually honour disputes filed by motor carriers post-vacatur, rather than stonewalling a party they now consider fair game. **How to test:** File 25 real disputes and measure the waiver rate and response time. Below a 30% waiver rate, the value prop collapses.
4. **Assumption:** The 5–50 truck operator, not his shipper customer, is the one holding the bag. **How to test:** 20 interviews on who ends up eating the charge after reimbursement chasing. If shippers reimburse smoothly, the buyer is wrong and you should be selling to the BCO.

### Risk flags

1. **Regulatory whiplash:** The FMC signalled it may issue new guidance on who can be billed. If it reinstates a motor-carrier carve-out, the urgency evaporates overnight — though the invoice-defect business survives, just with a different buyer. This is the biggest single risk and it is outside your control.
2. **Incumbent downmarket move:** BlueCargo already serves small-to-mid drayage and already claims 75% per-diem recovery. If they launch a $199 self-serve tier, the window closes. Speed is the only answer.
3. **Channel conflict:** Disputing a carrier's invoices too aggressively can cost a drayage operator his relationship with that carrier. If even a handful of customers get punished for using the tool, word travels fast in a port community and the product becomes radioactive. Mitigate by keeping every letter human-approved and defensible.
4. **Lumpy value:** In a quiet month the customer gets no disputes and sees no value. Churn risk is real. The deadline dashboard exists partly to keep the tool visible in quiet months.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who will cold-call dispatch offices; no logistics background required but a
                        transport-law advisor on retainer is close to mandatory
Time to revenue:        4–8 weeks (pre-sell during the manual teardown phase)
Capital to launch:      $8–15K (₹7–13 lakh) — inference is pennies; the cost is founder time
Top 3 assumptions to validate first:
  1. Defect rate — hand-audit 100 real per-diem invoices from 15 carriers; need 15%+ failing an element
  2. Willingness to pay subscription vs. contingency — offer 20 prospects the choice, count the split
  3. Carrier honour rate — file 25 real disputes, measure waiver rate; need 30%+
Kill criteria:
  - Abandon if fewer than 10% of 100 audited invoices fail a required CFR element
  - Abandon if fewer than 30% of 25 filed disputes result in waiver, refund, or mitigation
  - Abandon if the FMC reinstates a categorical motor-carrier billing carve-out before v1 ships
  - Abandon if fewer than 5 of the first 40 phoned dispatch offices agree to a free teardown
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the LA/Long Beach port truck registry and the FMC OTI list. Filter to 5–50 truck drayage operators. Build a call list of 60. Write the one-line teardown offer.
- **Day 3–4:** Call all 60. Goal is not a sale — the goal is **100 real per-diem invoices** in hand. Offer the audit free, no strings, results in 48 hours.
- **Day 5:** Hand-audit every invoice against the 20 CFR elements. Produce one number: the percentage failing at least one element. Simultaneously, run the pricing fork on the 20 warmest prospects — flat $399/mo or 25% contingency, pick one.
- **Decide go / no-go on:** the defect rate. **≥15% of invoices failing an element → build.** 10–15% → build but reprice toward contingency, because the volume won't carry a subscription. **<10% → kill it**, the invoices are clean and there is no business here regardless of how good the story sounds.

The falsifiable result is a single percentage, measured on real documents, in five days. Either the invoices are broken or they aren't.
