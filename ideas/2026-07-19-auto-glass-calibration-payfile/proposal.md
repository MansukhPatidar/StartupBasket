---
title: "PaneClaim — calibration short-pay recovery for glass shops"
slug: auto-glass-calibration-payfile
date: 2026-07-19
category: TradeTech / US — Independent Auto Glass Shops Billing ADAS Recalibration to Insurers and TPAs
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: Turns every windshield recalibration into a pre-justified invoice insurers and TPAs can't quietly short-pay.
tags:
  vertical: TradeTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Compliance-driven, Workflow-automation, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [sales-heavy, domain-expertise-required]
featured: false
---

# PaneClaim

## 1. One-liner

Turns every windshield recalibration into a pre-justified invoice insurers and TPAs can't quietly short-pay.

## 2. Trend signal — why now?

Three things moved at once, and they moved in the shop's favor for the first time.

**Recalibration became near-universal, and it became the disputed line item.** Almost every car with a windshield-mounted camera requires recalibration after glass replacement, and that recalibration adds $150–$300+ to a claim ([glassBYTEs](https://glassbytes.com/2025/02/auto-glass-companies-fight-for-insurance-approval-of-recalibrations/), [National Auto Glass Authority](https://nationalautoglassauthority.com/auto-glass-insurance-claims/)). That's not a rounding error on a $400 glass job — it's the margin. And it's the line insurers and TPAs argue about.

**The states started legislating.** A wave of auto glass bills hit statehouses in a single 60-day window: Washington SB 5871 (Dec. 12, 2025) and HB 2109 (Dec. 8, 2025), Virginia HB 312 (pre-filed Jan. 9, 2026), Illinois HB 4373 (Jan. 12, 2026), South Carolina S. 767 (Jan. 13, 2026) ([glassBYTEs](https://glassbytes.com/2026/01/the-bills-keep-coming-state-auto-glass-legislation-wave-continues/)). South Carolina's bill uniquely requires reimbursement at **"prevailing competitive market rates"** rather than TPA-set rates. Illinois requires a good-faith estimate and bars "false, misleading or incomplete documentation." Read that from the shop's side: the states are simultaneously handing shops a rate argument *and* raising the evidentiary bar on their paperwork. Both halves reward the shop with the better file.

**Shops are losing the fight on man-hours, not on merits.** The complaint is never "the insurer proved me wrong." It's "I eventually got paid, after burning a week." That's an automatable problem.

> "We all know that recalibration is required, so I don't understand why we have to ask for approval… It wastes a lot of time and money doing that." — Dylan Muscutt, Premier Glass, New Orleans
>
> "Eventually, I get payment, but it takes way more man-hours than it should." — Sean Fagan, Appalachian Auto Glass, Boone, NC
>
> "My biggest frustration in dealing with insurance is getting paid. I'm still waiting on payment for a lot of the insurance jobs." — Jasper Raynor, Raynor Auto Glass, Helena, AL
>
> "We're not getting paid for the labor of installing glass more than once [per job]." — Patricia Smiley, Quackt Glass, SC
>
> "No customer wants to wait a week or more [for their car]." — Dylan Muscutt, Premier Glass
>
> — all via [glassBYTEs](https://glassbytes.com/2025/02/auto-glass-companies-fight-for-insurance-approval-of-recalibrations/)

Market context: US auto windshield repair services is a **$8.9B** industry growing at a 4.0% CAGR through 2026 ([IBISWorld](https://www.ibisworld.com/united-states/industry/auto-windshield-repair-services/5629/)).

```
Provenance:
  - Signal 1 (Demand): Named shop owners in five states describing calibration approval delays, short-pays, and excess man-hours chasing payment — https://glassbytes.com/2025/02/auto-glass-companies-fight-for-insurance-approval-of-recalibrations/ — Feb 2025, still-live complaint pattern confirmed in 2026 coverage
  - Signal 2 (Economic): Five-state auto glass billing legislation wave in 60 days (WA SB 5871/HB 2109, VA HB 312, IL HB 4373, SC S.767), incl. "prevailing competitive market rates" reimbursement standard — https://glassbytes.com/2026/01/the-bills-keep-coming-state-auto-glass-legislation-wave-continues/ — Jan 2026
  - Signal 3 (Feasibility): Incumbent auto glass software (Omega EDI) ships a claim-field validation engine catching VINs/deductibles/claim numbers — proving the "validate before submit" pattern is accepted — but stops short of calibration justification — https://www.omegaedi.com/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The auto glass software stack is mature and it solves the wrong half of the problem.

GlasPacLX, Glas-Avenue (Mainstreet), and Omega EDI all do quoting, NAGS parts lookup, scheduling, and EDI invoice transmission well. Omega EDI even ships an "advanced validation engine" that catches incorrect deductibles, invalid VINs, and mismatched claim numbers before submission. That's a **claim-hygiene** engine — it stops the claim from bouncing on a technicality.

Nobody validates the **calibration justification**. That's the part that gets denied on the merits or silently short-paid: was calibration actually required for this VIN, per which OEM position statement, documented with which pre-scan and post-scan evidence, billed at what defensible rate?

So the shop's workflow today is: do the job, send the invoice, get short-paid or ghosted, then have the owner (not an admin — usually the owner) manually reconstruct the justification weeks later from memory, photos on a tech's phone, and a scan tool printout. Fagan's "way more man-hours than it should" *is* this reconstruction.

The 10× move is to build the defense file **at the moment of the job, automatically**, and price the line at a rate the shop can defend under the new state statutes. Flip it from post-hoc argument to pre-built evidence.

## 4. Target market

- **Primary customer:** Owner-operator and small-chain independent auto glass shops in the US — 1–15 technicians, 20–250 glass jobs/month, performing their own in-house ADAS calibrations (static, dynamic, or both). The buyer is the owner or the single office manager who handles insurance billing. Concentrated in FL, TX, AZ, CA, SC, and the Southeast where glass claim volume is highest.
- **Why they buy:** In their words — *"My biggest frustration in dealing with insurance is getting paid"* (Raynor). *"Eventually, I get payment, but it takes way more man-hours than it should"* (Fagan). They are not buying software. They are buying back the owner's Friday afternoon and recovering $150–$300 per disputed calibration.
- **Rough TAM reasoning:** NAICS 811122 (Automotive Glass Replacement Shops) covers the US auto glass replacement industry; the broader windshield repair services category is $8.9B ([IBISWorld](https://www.ibisworld.com/united-states/industry/auto-windshield-repair-services/5629/)). Independent shops — excluding Safelite and the large consolidators, which have in-house billing departments and are not the customer — number in the several thousands. A realistic serviceable base is 3,000–6,000 shops that do in-house calibration and bill insurers directly. At $249/mo blended that's a $9M–$18M ceiling — comfortably above the $5M target, which is what I need, not a unicorn TAM.
- **Why now for them:** The state bills give them a rate argument they've never had, and simultaneously punish sloppy documentation. A shop that shows up with a clean, OEM-cited file in a "prevailing competitive market rates" state has leverage. One that shows up with a scan printout and a grudge does not.

## 5. Product sketch (MVP)

- **VIN → calibration requirement lookup.** Enter or scan the VIN; get back whether this vehicle requires static, dynamic, or dual recalibration after windshield replacement, with the OEM position statement cited by name and date.
- **Guided evidence capture on the tech's phone.** A short shot-list per job — pre-scan result, target setup, post-scan result, windshield part number, calibration completion screen. Techs shoot photos; the app labels, timestamps, and files them against the RO. No more photos scattered across three phones.
- **Auto-assembled pay file.** One PDF per job: requirement citation, evidence photos, pre/post scan codes, procedure performed, time on target, and the itemized charge. Generated on job close, not on denial.
- **Rate defensibility line.** Shows the shop what comparable calibration rates look like in their state and flags when a proposed charge sits outside a defensible band — so the invoice is written to survive review, not to start a fight.
- **Short-pay detector.** Reconcile the EOB/remittance against the submitted invoice; automatically flag when a calibration line was paid at less than billed or dropped entirely. This is the feature owners will actually notice — most short-pays currently go uncaught.
- **One-click appeal packet.** When a line is denied or short-paid, generate the rebuttal letter with the OEM citation, evidence exhibits, and the applicable state statute language pre-inserted.
- **Aging dashboard.** Every open calibration line by insurer/TPA and days outstanding. Answers Raynor's *"I'm still waiting on payment for a lot of the insurance jobs."*

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a filing cabinet. Three places it does real work:

1. **OEM position statement interpretation.** OEM calibration requirements are scattered across hundreds of PDFs, differ by trim/year/camera supplier, and get revised. An LLM over a maintained corpus turns "2023 RAV4 XLE with front camera" into "dual calibration required, per Toyota position statement X dated Y" — the lookup a shop currently does by phoning a friend or guessing.
2. **Remittance parsing.** EOBs and TPA remittance advices arrive as PDFs, faxes, and portal screenshots in wildly inconsistent formats. Vision models reading these and matching line-by-line against the submitted invoice is what makes short-pay detection possible at all. This is the highest-value, most-defensible piece — and it's exactly the work no shop owner does consistently by hand.
3. **Appeal drafting.** Generating a rebuttal that cites the right OEM statement, the right evidence exhibit, and the right state statute clause is a genuine drafting task with a real quality gradient.

Note what is *not* AI: the calibration requirement data itself must be curated and verified. I would not trust a raw model to assert whether a safety recalibration is required. The model retrieves and explains from a maintained corpus; it does not freelance. Getting this wrong is a safety and liability issue, not a UX bug.

## 7. Localization angle

`N/A — this is a US-only play.` The wedge *is* the US insurance claim structure: NAGS pricing, the TPA layer (Safelite Solutions, Lynx, Harmon, Gerber), EDI invoice transmission, and state-by-state glass statutes. Nothing here transfers — the UK, EU, and India settle glass claims through entirely different mechanisms without an equivalent TPA intermediary. Deliberately narrow. A shop in Alabama and a shop in Washington are already different enough products at the statute layer.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $199/mo (single location, ≤100 jobs/mo) · $399/mo (multi-bay or 100–250 jobs/mo) · $799/mo (small chain, 3+ locations). Blended ACV target **$249/mo → ~$3,000/yr**.
- **The ROI story is trivially easy.** One recovered calibration short-pay at $150–$300 pays for most of a month. Two per month and the product is free. A shop doing 80 glass jobs/month with even a modest share of calibration lines disputed is leaving four figures a month on the table.
- **Rough math to $1M ARR:** 335 shops × $249/mo × 12 = **$1.0M**. Roughly 6–11% of the realistic 3,000–6,000 shop serviceable base. Believable.
- **Rough math to $5M ARR:** ~1,670 shops, or ~28–55% of the base — too aggressive on shops alone. The honest path to $5M adds (a) the collision and mechanical shops that also do in-house calibration, a strictly larger pool, and (b) a per-appeal success fee or a calibration-volume usage tier on high-throughput accounts. I'd underwrite this as a **$1–2M ARR business with a credible $3M+ extension**, not a guaranteed $5M.
- **Expansion path:** Seats → locations → adjacent claim types (ADAS after collision, not just glass) → a benchmark data product on insurer/TPA payment behavior, which is the most interesting long-term asset here.

## 9. Go-to-market wedge — first 100 customers

This industry has an unusually well-defined watering hole, which is most of why I like it.

- **The glassBYTEs / AGRR readership is the entire market in one place.** glassBYTEs is where these owners already read about exactly this problem — the recalibration-reimbursement article is theirs. Sponsored content plus a co-authored piece on the five-state legislation wave and what it means for your invoice. This is a trade press with a small, precisely-targeted list, not a general audience.
- **Auto Glass Week 2026 — competitions and floor.** The industry's annual gathering, including live repair/replacement/**calibration** competitions ([glassBYTEs](https://glassbytes.com/2026/06/registration-deadline-nears-for-auto-glass-week-2026-repair-replacement-and-calibration-competitions/)). The people entering a calibration competition are precisely the shops doing in-house calibration and billing it. Work the floor; the entrant list is the prospect list.
- **Named-quote outreach, then their state associations.** Start with the shops already on record complaining — Premier Glass, Appalachian Auto Glass, Raynor Auto Glass, Quackt Glass. These are people who publicly said this hurts. Offer a free short-pay audit: send the last 20 remittances, get back a report of what was short-paid. That audit *is* the demo, it's the sales call, and it produces a dollar figure. Then go through the state auto glass associations actively lobbying these bills — they have member lists and an active grievance.
- **The short-pay audit as a standalone lead magnet.** Free, asynchronous, quantified, and it costs almost nothing to run. A shop that gets back "you were short-paid $2,400 across 20 jobs" converts itself.
- **glassBuzz / AGRR forums.** Smaller, but the TPA-billing subforum is where these arguments happen in public.

## 10. Build complexity — justification

**Medium.** The app itself is unremarkable — mobile evidence capture, PDF assembly, a dashboard. Standard stack, off-the-shelf. Two things make it Medium rather than Low: (1) building and *maintaining* a verified OEM calibration-requirement corpus is real, ongoing, non-glamorous work, and it must be accurate because it touches vehicle safety; (2) remittance/EOB parsing across inconsistent TPA formats needs iteration against real documents before it's reliable. Assume **14–18 weeks to a credible v1** for a pair, with the first 4 weeks spent on the calibration corpus for the top 20 vehicle platforms rather than on code. Deliberately skip EDI integration in v1 — shops keep their existing system; PaneClaim sits alongside it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Documentation and billing-support tooling. Not practicing law, not adjusting claims, not certifying safety. Appeal letters are shop-authored and shop-sent. |
| Ethical — no harm / dark patterns | ✅ | Helps shops get paid for work genuinely performed. Explicit guardrail: the product must never encourage billing for calibration not actually required or performed — the padded "mobile calibration device fee" fraud pattern documented in the industry is exactly what a rate-defensibility band should flag, not enable. |
| Market exists (evidence above) | ✅ | $8.9B industry, named owners on record, five state bills, incumbent software adjacent but not overlapping. |
| 1–5 person team can build this | ✅ | Two people. One builder, one with glass/collision domain knowledge. |
| Launchable with <$50K / ₹40L | ✅ | Corpus curation labor plus a trade show booth is the bulk of it. Well under $50K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Direct money, felt weekly, on the record by name. Not 18+ because it's a margin-recovery pain, not an existential one — shops are surviving today, just poorer and more annoyed. |
| Demand evidence | 15 | **12**/15 | Multiple named verbatim complaints, five legislative bills, real market size. Held back because there's no survey quantifying calibration denial/short-pay *rates* — I looked, it doesn't exist publicly. That's the single biggest unmeasured number in this proposal. |
| Build feasibility | 15 | **11**/15 | Standard stack, but the OEM corpus and remittance parsing are genuine work. 14–18 weeks, not 6. |
| Distribution clarity | 15 | **12**/15 | Unusually good: one trade publication, one annual event with a calibration competition, named prospects, and a free-audit lead magnet with built-in ROI math. Not 13+ because trade-press conversion is unproven here. |
| Revenue mechanics | 15 | **11**/15 | Pricing is easy to justify against a $150–$300 recovered line. $1M ARR math is sound at 335 shops; $5M requires expansion beyond glass, which I've flagged honestly rather than hand-waved. |
| Time to first revenue | 10 | **8**/10 | The free short-pay audit can pre-sell before v1 ships. Realistically 6–8 weeks post-launch to first paying shops. |
| Defensibility | 10 | **5**/10 | The curated OEM corpus and accumulated insurer/TPA payment-behavior data compound. But an incumbent — Omega EDI especially, which already has the validation-engine pattern and the shops — could bolt this on. Execution-and-focus moat with a data kicker. Realistic, not flattering. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`sales-heavy` · `domain-expertise-required`

This is not a build-it-and-they-come product. It needs someone who can walk an Auto Glass Week floor and speak credibly about static vs. dynamic calibration. A pure technical founder will build the wrong thing and get the OEM corpus dangerously wrong. Find a glass or collision domain partner before writing code.

### Key assumptions to validate (3–5)

1. **Assumption:** Calibration lines are short-paid or denied often enough to matter — my guess is a meaningful fraction of billed lines, but I could not source a real number. **How to test:** Run the free short-pay audit on 20 shops' last 50 remittances each. This produces the industry's first real denial-rate dataset and validates the core premise in one move. If short-pays are rare, the product is dead — do this first.
2. **Assumption:** Owners will pay $199–$399/mo for recovery rather than treat short-pays as cost of doing business. **How to test:** Present each audited shop their recovered-dollar figure and ask for a card on a founding-member rate. Watch what happens when the number is real and specific.
3. **Assumption:** Shops will tolerate a second app alongside their existing GlasPacLX/Omega workflow. **How to test:** Two-week evidence-capture pilot with 5 shops; measure whether techs actually complete the shot-list unprompted on ≥80% of jobs. Tech adoption is the silent killer here.
4. **Assumption:** An OEM calibration corpus can be built and kept accurate by a 2-person team. **How to test:** Build it for the top 20 vehicle platforms and have a working calibration tech audit it for errors. Anything above a trivial error rate means this needs a data partner.

### Risk flags

1. **Incumbent bolt-on:** Omega EDI already ships a pre-submission validation engine and owns the customer relationship. Calibration justification is a natural extension for them. The defense is speed and depth — be meaningfully better before they notice.
2. **Legislative risk cuts both ways:** These are *bills*, not laws. Several will die in committee. If the "prevailing competitive market rates" standard fails everywhere, the rate-defensibility feature loses its teeth — though the short-pay detection and evidence file remain valuable regardless. The product should not be architected to depend on any single bill passing.
3. **Safety and liability adjacency:** Anything touching ADAS calibration touches vehicle safety. The product must stay firmly on the *documentation and billing* side and never imply certification that calibration was correctly performed. Get this boundary in writing, in the ToS, before the first customer.
4. **Unmeasured core metric:** The entire thesis rests on short-pay frequency, which is anecdotally strong but statistically unsourced. This is why confidence is Medium and not High.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with an auto glass / collision domain partner
                        who can sell on a trade show floor
Time to revenue:        6-8 weeks post-launch; pre-sales possible immediately via the audit
Capital to launch:      $15-25K (corpus curation labor, trade show booth, tooling)
Top 3 assumptions to validate first:
  1. Calibration short-pay frequency is material — run free remittance audits on 20 shops
     and build the number the industry doesn't have
  2. Owners convert on recovered-dollar evidence — ask for the card at audit delivery
  3. Techs actually complete photo capture in the bay — 5-shop, 2-week field pilot at >=80%
Kill criteria:
  - Abandon if the 20-shop remittance audit shows calibration short-pay on <10% of lines
    at <$100 average — the ROI story collapses and nothing else here matters
  - Abandon if <80% tech photo-capture compliance in the field pilot, since the evidence
    file is worthless when incomplete
  - Abandon if Omega EDI or GTS ships calibration justification before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Cold-call 25 independent glass shops, opening with the Fagan quote — *"eventually I get payment, but it takes way more man-hours than it should"* — and ask one question: how much did you get short-paid on calibration last month, and do you actually know? The "do you know" answer is as informative as the number. Offer the free audit.
- **Day 3–4:** Collect real remittances from whoever says yes. Manually reconcile them against submitted invoices — by hand, no product. Count short-paid and dropped calibration lines and total the dollars. This is the dataset that does not currently exist anywhere.
- **Day 5:** Take each audited shop their number and ask for a founding-member commitment at $199/mo.

**Falsifiable outcome:** Of shops audited, what fraction had ≥$500 in unrecovered calibration short-pays in the sampled period, and what fraction of *those* put down a card? **Go if ≥50% show ≥$500 unrecovered AND ≥3 shops commit money. No-go otherwise** — if owners see a real dollar figure and still won't pay, they've priced this as cost of doing business and no amount of product fixes that.
