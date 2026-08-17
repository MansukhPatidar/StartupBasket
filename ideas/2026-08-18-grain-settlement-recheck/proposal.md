---
title: "ShrinkRef — settlement referee for US grain farmers"
slug: grain-settlement-recheck
date: 2026-08-18
category: AgriTech / US-Midwest — Row-Crop Farms (500–3,000 Acres) Who Sign Off on Elevator Settlement Sheets They Have Never Once Recomputed
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Recomputes every elevator settlement against that elevator's own discount schedule and flags the loads that came up short."
tags:
  vertical: AgriTech
  model: SaaS
  geography: US
  secondary: [SMB, AI-agent, Solo-builder, Document-parsing, Seasonal]
axes:
  problem: 15
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, content-heavy]
featured: false
---

# ShrinkRef

## 1. One-liner

Recomputes every elevator settlement against that elevator's own discount schedule and flags the loads that came up short.

## 2. Trend signal — why now?

Three things moved at once.

**The math got auditable by machine.** A scale ticket and a settlement sheet are dense, low-contrast, badly-scanned documents full of numbers in inconsistent layouts — exactly the artifact that was unparseable in 2022 and is routine for a vision model in 2026. The industry itself has noticed: a 2026 trade write-up describes AI assistants that "flag mismatches between settlement sheets and original tickets — auditing shrink calculations and damage discounts that bookkeepers *never had time to do at all*." That last clause is the whole business. The audit isn't being done badly today. It isn't being done.

**The keying burden is now quantified.** Same source: a 3,200-acre operation runs ~1,230 truckloads in a six-week harvest, and "at three minutes a ticket that is sixty-one hours of typing, in the exact six weeks when nobody has an hour." At a 2% hand-keying error rate, ~25 loads get misapplied; 6,150 bushels landing on the wrong contract at a 34-cent price difference is ~$2,091 gone, on top of $1,708 of labor. The farm's system of record is one person's spreadsheet that runs "between four days and four weeks out of date."

**The dollars in dispute are not rounding errors.** Penn State Extension's discount-schedule teardown runs the *identical* 500-bushel soybean load through two mills and gets $4,087.00 versus $4,040.00 — a $50 swing on one load, purely from methodology. Scale that across 1,200 loads and the methodology delta alone is real money. Moisture discounts hit $0.91/bushel at 16.1–16.5% on beans in the same example. And elevators are only required to be accurate to ±0.5% on moisture, which means the same corn legitimately reads 16% at one scale and 17% at another.

The kicker: every piece of software in this workflow is bought by the elevator. Bushel powers ~2,600 grain facilities. Grainsbook, Vertical Software and Horizon Grain all run *inside the scale house*. Grainsbook even advertises a "Show Math" button with a full audit trail — for the elevator's staff. The farmer gets a free app, paid for by his counterparty, that shows him the counterparty's numbers. Nobody sells the farmer an independent second opinion.

```
Provenance:
  - Signal 1 (demand): Farmers publicly disputing elevator moisture/shrink math with no way to check it — "I took a sample of the same 'dry' corn and had another elevator test it and they came up with 15.9"; "Isn't the moisture entered into the computer manually at many locations? Makes ya wonder." — https://talk.newagtalk.com/forums/thread-view.asp?tid=511554 and https://talk.newagtalk.com/forums/thread-view.asp?tid=672228 — observed 2026-08-18
  - Signal 2 (feasibility): Scale-ticket/settlement OCR + reconciliation now practical; industry describes AI flagging settlement-vs-ticket mismatches and auditing shrink/damage discounts "bookkeepers never had time to do at all"; 61 hours of manual keying per harvest on a 3,200-acre farm — https://callsphere.ai/blog/a-scale-ticket-gets-keyed-in-three-times-before-it-reaches-your-grain- — observed 2026-08-18
  - Signal 3 (economic): Identical 500-bu soybean load nets $4,087.00 at one mill vs $4,040.00 at another purely on discount methodology; moisture discounts to $0.91/bu; elevator moisture tolerance ±0.5% — https://extension.psu.edu/understanding-grain-discount-schedules — observed 2026-08-18
  - Supporting (economic): Counterparty risk is live — Hansen-Mueller Chapter 11 left 1,000+ farmers across 34 states with claims; Kansas farmers excluded from the state indemnity fund on a licensing technicality — https://elevenflo.com/blog/hansen-mueller-chapter-11-grain-dealer-bankruptcy — observed 2026-08-18
  Category: Workflow automation
```

## 3. The opportunity

Grain settlement is a two-party transaction where one party owns all the instruments, all the software, and all the arithmetic.

The elevator weighs the truck, probes the sample, reads the moisture, applies its own discount schedule, computes shrink, deducts drying and handling, matches the load to a contract, and mails a check. The farmer's entire ability to verify any of that consists of a paper ticket in a truck cab and a memory of what he was quoted. When the settlement sheet arrives a week later, the loads have been aggregated, the discounts are summarized, and the underlying per-load math is gone.

This is not a fraud story. Most elevators are honest and most errors are clerical — a misapplied contract, a moisture reading keyed by hand, a shrink factor applied at the storage rate instead of the delivery rate. But "mostly honest with clerical errors" describes a system that leaks in exactly one direction, because only one side has the staff and software to catch a mistake, and that side has no incentive to catch the ones in its favor.

The incumbent to name is **Bushel**, and the criticism is structural, not qualitative. Bushel's farmer app is excellent and free — because 2,600 grain facilities pay for it. It is a window into the elevator's ledger. It renders the elevator's numbers beautifully. It will never tell a farmer "this elevator applied a 3.5%/point shrink on a load your contract says should have been 1.4%/point." A vendor cannot audit its own customer on behalf of that customer's counterparty. That's not a product gap Bushel is neglecting; it's one they're prohibited from entering by who signs their checks.

An independent tool has the opposite constraint and the opposite freedom: it is paid by the farmer, it works across every elevator he delivers to, and its only job is to recompute.

## 4. Target market

- **Primary customer:** The owner-operator or farm business manager of a US Midwest row-crop operation, 500–3,000 acres, corn and soybeans, delivering to 2–4 different buyers (a co-op, a processor, maybe a river terminal). Runs 300–1,200 loads a harvest. Has a spouse, a bookkeeper, or himself doing the grain paperwork on a spreadsheet. Iowa, Illinois, Indiana, Nebraska, Minnesota, Ohio first.

- **Why they buy, in their words:** *"I just found it interesting that there was a short $10k that vanished into the elevator complex based on nothing other than water content."* *"Either they will screw you on moisture as in this case or they will dock for quality."* *"When I mentioned it to the elevator manager he became rather defensive."* *"Sometimes it goes for you...sometimes it goes against you."* That last quote is the one that matters — it's a farmer describing statistical resignation. He believes it evens out. He has no evidence either way, and no way to get any.

- **Rough TAM reasoning:** The 2022 USDA Census counts ~120,000 farms at 500–999 acres and ~76,000 at 1,000–1,999 acres — ~196,000 in the core band, before counting the 2,000–3,000 tier. Not all are grain; call the realistic corn/soy Midwest slice 60,000–90,000 operations. At $600/year that's a $36M–$54M ceiling. Too small for venture, correctly sized for this repo.

- **Why now for them:** Margins are compressed, the ag lending environment is tight, and counterparty failure is no longer theoretical — the Hansen-Mueller Chapter 11 left over a thousand farmers across 34 states filing claims, with Kansas growers locked out of their own state indemnity fund on a licensing technicality. A farmer who just watched that happen is unusually receptive to "know exactly what you're owed, by load, in writing."

## 5. Product sketch (MVP)

- **Snap a ticket, get a parsed load.** Photograph the scale ticket in the truck. Gross, tare, net, moisture, test weight, FM, damage, buyer, date, ticket number — extracted and filed in seconds. This is the hook: it kills the 61 hours of keying whether or not the farmer cares about auditing.
- **Elevator discount schedules on file.** The farmer's buyers' published shrink factors, moisture discount tables, drying and handling fees, and test-weight deductions — stored per elevator, per crop, per delivered-vs-stored.
- **The recheck.** When the settlement sheet arrives, photograph it. ShrinkRef recomputes every load from the original ticket data against that elevator's own schedule and produces a line-by-line agree/disagree.
- **Variance report in plain language.** "Load #4471: settlement applied 3.5%/point shrink. Your delivery contract specifies 1.4%/point. Difference: 187 bushels, $842.00." Not a red flag icon — a sentence a farmer can read aloud on the phone.
- **Contract application check.** Flags loads applied to the wrong contract, unpriced bushels approaching a pricing deadline, and bushels sitting in open storage nobody is tracking.
- **Elevator comparison.** Same crop, same moisture, run against each buyer's schedule — what would this load have netted at each of your three buyers? Answers the delivery-decision question before the truck leaves.
- **The dispute packet.** One PDF: the original ticket image, the settlement line, the recomputation, the schedule clause it violates, and the dollar delta. Something to hand across the counter that isn't an accusation, it's arithmetic.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, for one unglamorous reason: **the input is a photograph of a bad piece of paper.**

Scale tickets are thermal-printed, oil-smudged, folded in a pocket, photographed on a truck seat in bad light, and formatted differently by every elevator and every scale software vendor in the country. There is no API. There is no standard. Bushel's data is Bushel's, behind the elevator's credentials. The only universally available source of truth on the farmer's side is the paper he was handed. Extracting structured, arithmetic-grade numbers from that image across hundreds of layout variants is the entire technical problem, and it is a vision-model problem that became reliable very recently.

The second load-bearing piece is schedule interpretation. Discount schedules are prose PDFs and posted signs — "$0.01 discount per point under minimum," "4% deduction from gross weight for FM between 3.1–4.0%," tiered moisture bands with different rates above 15%. Turning that prose into an executable formula, per elevator, per crop, is language work.

The arithmetic itself is deliberately *not* AI. Once the numbers are extracted and the schedule is parsed, the recomputation is deterministic code. That matters: a farmer confronting his co-op cannot be told "the model thinks you were underpaid." He needs a number that reproduces exactly, every time, and that he can defend line by line. AI does the reading. Code does the math.

## 7. Localization angle (if any)

`N/A — this is a US-first play.` The wedge is specifically the American country-elevator structure: farmer-owned co-ops and private grain dealers publishing per-facility discount schedules, state-by-state grain indemnity funds and warehouse licensing, and a settlement culture built on paper tickets. Canada's prairie system is the natural second market (similar tickets, different grading regime under the Canada Grain Act). Brazil and Argentina have genuinely different structures — trader-dominated, different quality standards — and are not a copy-paste. Don't force it.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $49/month billed annually ($588/yr) for up to 1,500 loads a year. A $99/month tier for multi-entity operations and farms running 3,000+ acres. Seasonal-honest: farmers use this hard for ten weeks and lightly for forty, so annual billing is the only structure that works — monthly billing gets cancelled in December every single year.
- **ACV:** ~$600. Deliberately benchmarked below the pain: if the tool surfaces one $842 variance in a season it has paid for itself, and the Penn State methodology-delta math says variances of that size are ordinary, not exceptional.
- **Rough math to $1M ARR:** 1,700 farms × $588. Against ~60,000–90,000 addressable Midwest grain operations, that's 2–3% penetration. Achievable but not trivial — this is the number to be honest about.
- **Rough math to $5M ARR:** 8,500 farms at $588, or ~5,000 farms at a blended $1,000 ACV once the higher tier and add-ons land. Requires either meaningfully deeper penetration (~10%) or expansion revenue. Realistically: 4,000 core subscribers plus expansion.
- **Expansion path:** (1) Acreage-tiered pricing as farms grow. (2) A grain-accounting export that replaces the spreadsheet entirely and syncs to QuickBooks/Ag accounting — raises switching cost and ACV. (3) Contract-position tracking across buyers — unpriced bushels, expiring basis contracts, open storage — which is adjacent, higher-value, and something farmers currently track badly or not at all. (4) A per-dispute success fee is tempting and should be resisted: it reframes the product as adversarial and will get it banned from co-op parking lots.

## 9. Go-to-market wedge — first 100 customers

The distribution insight: **farmers do not buy software, they buy what a farmer they respect is using.** Every channel below is built on that.

- **AgTalk and the ag forums, as a participant not an advertiser.** The moisture/shrink threads cited in this proposal are years old and still get replies. Show up with the actual arithmetic — post a free teardown of a real discount schedule, show the two-elevator delta on the same load. This is where the customer already argues about this exact topic, unprompted, for free. Target: 30 customers from forum presence, ~9 months of consistent posting. Slow, high-trust, and the source of the anecdotes everything else runs on.
- **The harvest-season Facebook Group blitz.** State-level and equipment-brand farming groups run 10k–80k members and go feral in October. A short video — photograph a ticket, photograph a settlement, watch it find a $400 discrepancy — is a native-format post, not an ad. Run it across 15 groups in the first two weeks of harvest. Target: 40 customers in one season.
- **Farm accountants and ag CPAs as a referral wedge.** A few hundred Midwest CPA firms do farm books and already hate the shoebox of scale tickets. They aren't resellers; they're the person the farmer asks "should I use this." Sign 10 firms with a free practitioner account and a revenue share. Target: 20 customers.
- **Cold outreach to a scraped list, with the demo pre-built.** County-level grain producer lists and co-op member directories are largely public. The differentiated move: don't send a generic Loom. Send a teardown of *their* elevator's published discount schedule — which is public — showing what a 17%-moisture corn load nets there versus the elevator 20 miles away. That email is specific, verifiable, and useful even if they never buy. 800 emails, ~3% conversion. Target: 25 customers.
- **The seed and chemical retail counter.** Independent ag retailers spend the winter looking for reasons to talk to customers. A one-page flyer and a $50 referral bounty at 20 counters across three states.

That's ~115 against a 100 target with realistic conversion, and it's front-loaded into a single harvest. The honest caveat: this is a 9-month build to 100 customers, not a 2-week sprint, because the buying window is seasonal and largely opens in the fall.

## 10. Build complexity — justification

**Low.** The stack is off-the-shelf: a mobile capture app, a vision model for ticket and settlement extraction, a rules engine for discount schedules, and deterministic recomputation. No hardware, no scale integration, no elevator cooperation required — the product deliberately never touches the elevator's systems, which is what makes it independent and also what makes it buildable.

The real work is not engineering, it's **schedule coverage**: hand-encoding the discount schedules of the top few hundred Midwest elevators and validating extraction accuracy against a corpus of real tickets from many different scale-software vendors. That's grinding, unglamorous data work, and it's also the moat. Call it 10–12 weeks to a usable v1 for a technical founder plus a part-time ag-savvy data person, timed to be in-market before September.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Recomputing a settlement from documents the farmer legally owns. No scraping of elevator systems, no data the customer isn't entitled to. Avoid framing output as legal or accounting advice. |
| Ethical — no harm / dark patterns | ✅ | Gives the weaker party in a transaction the arithmetic the stronger party already has. Present variances as discrepancies to discuss, never as accusations of fraud. |
| Market exists (evidence above) | ✅ | Documented dollar deltas, active farmer complaints, and a full software category — all of it sold to the other side of the table. |
| 1–5 person team can build this | ✅ | Two people. One engineer, one with grain-trade fluency. |
| Launchable with <$50K / ₹40L | ✅ | Inference costs, a developer account, and a lot of driving to county co-ops. Well under $25K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, dollar-denominated — a documented $50 delta on a single 500-bu load, $0.91/bu moisture discounts, a farmer describing "$10k that vanished into the elevator complex." Held below 17 because it's a *suspicion*, not a hair-on-fire emergency: farmers have lived with this for generations and mostly shrug ("sometimes it goes for you, sometimes against you"). Converting resignation into urgency is a marketing job, and that's harder than selling to someone already bleeding. |
| Demand evidence | 15 | 11/15 | Multiple independent signals: sourced farmer complaints across several forum threads, a mature elevator-side software category proving the workflow is worth paying for, quantified methodology deltas from extension research. Not 13+ because every dollar in this category currently flows from *elevators*, not farmers — nobody has yet proven a farmer will pay for this specific thing. That's the central unvalidated assumption. |
| Build feasibility | 15 | 13/15 | Off-the-shelf vision + deterministic rules. No integrations, no hardware, no counterparty cooperation. The constraint is schedule-encoding grind, not engineering risk. |
| Distribution clarity | 15 | 11/15 | Named channels with named lists — AgTalk, state Facebook groups, ag CPAs, public co-op directories — and a genuinely differentiated cold email (their elevator's real schedule, torn down). Docked because farmers are a slow-trust, seasonal audience: the buying window is essentially September–December, so a mistimed launch costs a full year. |
| Revenue mechanics | 15 | 11/15 | $588 ACV against a self-evident ROI (one caught variance pays for two years). Pricing is benchmarked near existing farm software norms. $1M needs 1,700 farms — fine. $5M needs ~10% penetration of the addressable band, which is aggressive for a single-purpose tool and depends on the expansion products landing. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to forum contacts before harvest; annual billing means the first customer is $588 not $49. But the seasonality is real — launch in March and you wait until September for volume. |
| Defensibility | 10 | 5/10 | Honestly weak, and it should be scored that way. The encoded schedule library and the accumulated per-elevator variance dataset compound into something useful — "this facility's settlements disagree with its own posted schedule 8% of the time" is data nobody else has and it gets better every harvest. But the core product is copyable, and the real risk isn't a clone: it's an elevator-side incumbent shipping "Show Math" to farmers as a free feature. Execution-plus-trust moat, not a structural one. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `content-heavy`

Technical because document extraction accuracy is the product — a tool that misreads a moisture figure is worse than no tool, since it manufactures false accusations. Content-heavy because the distribution model is credibility: the founder has to be the person who publicly explains discount schedules better than anyone else, for a year, before this compounds. A founder who grew up on a grain farm has an enormous unfair advantage here and should probably just build it.

### Key assumptions to validate (3–5)

1. **Assumption:** Real settlements contain recoverable discrepancies at a rate high enough to justify $588/year. **How to test:** Collect 200 real ticket+settlement pairs from 20 farms across 3 states, recompute by hand, and measure the distribution of variance. If the median farm's annual recoverable variance is under $600, the ROI pitch collapses and the product must reposition as a bookkeeping time-saver instead.
2. **Assumption:** Farmers will pay out of pocket for something their elevator hands them a free app for. **How to test:** Put up a landing page with real pricing and a checkout, drive 500 forum and Facebook clicks pre-harvest, and measure card-entry rate — not email signups, which lie.
3. **Assumption:** Ticket extraction works across the messy real-world corpus. **How to test:** Gather 300 photographed tickets from as many different elevators and scale vendors as possible; require >98% field-level accuracy on the six numbers that drive the math before shipping to anyone.
4. **Assumption:** Farmers will actually use the variance report rather than avoid the confrontation. **How to test:** Interview 25 farmers with a mocked-up dispute packet. Ask directly: would you take this to your co-op manager? The relationship-preservation instinct is strong and may be the real killer.

### Risk flags

1. **Relationship risk — the one that kills it.** A farmer's elevator is often his neighbor, his co-op where he's a member-owner, and his counterparty for the next thirty years. Handing him a document that says "they underpaid you $842" may produce a customer who quietly cancels rather than a customer who disputes. The product framing has to be "verify, then decide" rather than "catch them," and even then this instinct is the biggest single threat to retention.
2. **Incumbent response.** Bushel or a scale-software vendor ships farmer-facing settlement transparency as a free feature. They can't audit *across* competing elevators, which is the durable defense, but a good-enough free feature from a trusted brand takes most of the market.
3. **Seasonality.** Revenue, usage, churn decisions, and word-of-mouth all cluster into ten weeks. Miss a harvest window and lose a year. Annual billing is a partial hedge; a mistimed launch is not recoverable.
4. **False positives.** A variance flagged in error damages a farmer's relationship with his buyer and the product's credibility simultaneously. Extraction accuracy is not a quality metric here, it's an existential one. The system should refuse to flag when confidence is low rather than guess.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a grain-farming background, or paired
                        with someone who has worked a scale house. Domain fluency is
                        not optional — the schedule encoding and the customer trust
                        both depend on it.
Time to revenue:        8-10 weeks to first paid annual subscription if timed to
                        pre-harvest; meaningful volume only in the fall window.
Capital to launch:      $20-25K (inference, mobile dev account, travel to co-ops,
                        the data grind on schedule encoding)
Top 3 assumptions to validate first:
  1. Median recoverable variance per farm per season exceeds $600 — hand-recompute
     200 real ticket/settlement pairs from 20 farms before writing product code.
  2. Farmers enter a card for this — real-pricing landing page, 500 targeted clicks,
     measure checkout starts not email signups.
  3. Farmers will actually confront their buyer with the output — 25 interviews
     using a mocked dispute packet, asked as a direct yes/no.
Kill criteria:
  - Abandon if hand-recomputation of 200 real settlements finds median annual
    recoverable variance below $600 per farm — the ROI story is the entire pitch.
  - Abandon if fewer than 3% of 500 targeted pre-harvest landing page visitors
    begin checkout at real pricing.
  - Abandon if ticket extraction cannot reach 98% field-level accuracy on the six
    driving numbers across a 300-ticket multi-vendor corpus — below that the tool
    generates false accusations and is actively harmful.
  - Abandon if Bushel or an equivalent ships free cross-elevator settlement
    verification to farmers before v1 launches.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2: Get the paper.** Post in two AgTalk threads and three state farming Facebook groups asking for a scale ticket plus its matching settlement sheet, offering a free hand-audit in return. Target 40 pairs from at least 12 different elevators. The ask is easy to say yes to and immediately reveals whether the topic has energy — if nobody sends paper, that's a finding.
- **Day 3–4: Do the arithmetic by hand.** Pull each elevator's published discount schedule, recompute every load manually in a spreadsheet, and record the variance per load and per farm. No product, no code — just the founder and the math. This produces the single number the entire business rests on: the median recoverable variance per farm per season.
- **Day 5: Confront the finding.** Call back every farmer who sent paper, report what was found on *their* settlements, and ask two questions: would you pay $588 a year for this, and would you take this sheet to your elevator?

**Falsifiable outcome:** Go if median recoverable variance across the sample exceeds $600/farm/season AND at least 8 of the ~20 farmers who get a real finding say yes to both questions. Anything less and this is a bookkeeping time-saver competing with free elevator apps — a materially worse business, and one worth walking away from.
