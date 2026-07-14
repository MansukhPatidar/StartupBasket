---
title: "UpgradeGate — grid upgrade cost gate for solar developers"
slug: interconnection-cost-prescreen
date: 2026-07-15
category: CleanTech / US
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Prices the grid upgrade that kills your solar project — before you sink the deposit, not after the study."
tags:
  vertical: CleanTech
  model: SaaS
  geography: US
  secondary: [AI-agent, Solo-builder, SMB, Geospatial, Energy]
axes:
  problem: 18
  demand: 13
  build: 9
  distribution: 12
  revenue: 12
  time: 6
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# UpgradeGate

## 1. One-liner

Prices the grid upgrade that kills your solar project — before you sink the deposit, not after the study.

## 2. Trend signal — why now?

The US interconnection queue is now the single biggest killer of clean energy projects, and the thing that kills them is a number nobody can see until it's too late.

- **The queue is a graveyard.** 77% of projects that entered the interconnection queue between 2000 and 2023 ultimately withdrew. In 2024, a record 112 GW of capacity withdrew nationwide. Withdrawal rates for projects entering the queue in the current environment approach 80%.
- **The cause is cost, not engineering.** In a survey of wind and solar developers, more than 60% said grid interconnection was a primary cause of project cancellation. Network upgrades are ~75% of total interconnection cost. Solar pays a median **$253/kW** in network upgrades; gas pays **$24/kW** — a 10× penalty. Average interconnection cost for completed projects rose from $25/kW in the 2000s to $110/kW in 2022–23, and PJM solar costs spiked from $29/kW to $240/kW in two years.
- **And the number is structurally invisible.** This is the whole opportunity, and Lawrence Berkeley National Lab says it plainly: *"Interconnection cost estimates are not available as pre-request information but require a lengthy interconnection study process."* You cannot learn what the grid will charge you until you have already paid to stand in line for 18–36 months.
- **Meanwhile the developer has already spent real money.** Non-refundable land option payments run $10K–$25K/year; non-refundable interconnection deposits run $15K–$25K. Both are committed *before* the project is proven viable. As Paces' own pre-development whitepaper puts it: developers make "high-stakes decisions without a full picture," spending "time and capital just to acquire the information required to determine if it is worth continuing." 70–90% of renewable projects fail, and "most development time and capital are spent on projects that never get built."
- **Feasibility unlock:** every input needed to *estimate* the upgrade is now public and machine-readable — utility hosting-capacity maps (mandated in NY, CA, IL and a growing list of states, several with REST APIs), ISO/RTO and DG queue data (interconnection.fyi covers 7 ISOs + 50 non-ISO utilities, daily updates), LBNL's published per-kW upgrade cost distributions by region and technology, and utility pre-application reports. Nobody has stitched them into a single "what will this cost me" verdict.

**Provenance:**
  - Signal 1 (demand): 77% queue withdrawal rate 2000–2023; >60% of developers name interconnection as primary cause of project cancellation; solar network upgrades at $253/kW vs $24/kW for gas — https://zonevex.com/blog/network-upgrade-costs-solar-interconnection — 2026-07-15
  - Signal 2 (feasibility): LBNL — "Interconnection cost estimates are not available as pre-request information but require a lengthy interconnection study process"; upstream inputs (hosting-capacity maps, ISO/DG queue feeds, published per-kW cost distributions) are now public and machine-readable — https://emp.lbl.gov/interconnection_costs and https://www.interconnection.fyi/ — 2026-07-15
  - Signal 3 (economic): Non-refundable land options ($10K–$25K/yr) and interconnection deposits ($15K–$25K) are committed before viability is known, against a 70–90% project failure rate; "most development time and capital are spent on projects that never get built" — https://www.paces.com/white-papers/pre-development-at-scale-modeling-risk-in-early-stage-solar-development — 2026-07-15
  Category: Underserved niche

## 3. The opportunity

The interconnection software market has split into two camps, and both of them walked past the money.

**Camp one: site-finders.** PVcase Prospect (formerly Anderson Optimization), Paces, Transect. They answer *"where is there buildable land near a substation?"* — parcel search, constraint maps, buildable acreage. Enterprise pricing, no public rate card; the category tops out over $30K/year. They are very good at telling you a parcel exists. They do not tell you what the grid will charge you to connect to it.

**Camp two: queue browsers.** interconnection.fyi (free to browse, paid GridTracker tier), LoadFlow. They answer *"who else is in line?"* — status, capacity, withdrawal counts, county maps. interconnection.fyi explicitly provides **no cost estimates.** It's a telescope pointed at the queue, not a calculator.

**Camp three does not exist.** Nobody answers the only question that decides the project: *"if I put 5 MW at this point of interconnection, what is the network upgrade going to cost me, and what's the probability it comes in high enough to kill me?"*

That's the disruption. Pearl Street Technologies got closest — real power-flow simulation, SUGAR/Interconnect — and Enverus acquired them in March 2025 and pointed the product at *utilities and transmission providers*, i.e. the people running the studies, not the small developer trying to survive them. The tooling that could price your risk is now sold to your counterparty.

The wedge is that a small developer doesn't need a signed, stamped, transmission-grade load-flow study to make a go/no-go call. They need a **calibrated probabilistic estimate, delivered in an hour, for less than the cost of the coffee they'd drink waiting 18 months.** A $253/kW median with a known regional distribution, an occupied-capacity read from the queue, a hosting-capacity headroom read from the utility's own map, and an honest confidence band beats what they have today, which is nothing.

## 4. Target market

- **Primary customer:** Development lead / VP of Development at a small-to-mid community solar and C&I solar developer — 3 to 40 employees, doing 1–20 MW distribution-level projects, US, in active community-solar states (NY, IL, MD, NJ, MA, MN, ME, and growing). The Coalition for Community Solar Access alone represents 100+ community solar developers, businesses and nonprofits. The top 10 firms took 56% of the market in 2025 — meaning a long, fragmented tail of everyone else, which is exactly who cannot afford a $30K enterprise seat and cannot afford to burn a $25K deposit on a dead site.
- **Why they buy:** Because the alternative is paying $15K–$25K in non-refundable deposits and $10K–$25K/year in non-refundable land options to *discover* whether a site is viable. That is the current product for answering this question, and it costs tens of thousands of dollars and eats 18–36 months. Anything that kills a bad site in week one instead of month twenty pays for itself on the first avoided deposit.
- **Rough TAM reasoning:** US community solar crossed 10 GW cumulative in 2026 and Wood Mackenzie projects continued growth. Call it 300–600 active small/mid developers and development shops across community solar, C&I, and the independent-developer tail, plus the adjacent buyers below. At $500–$1,500/mo that's a $2M–$10M ARR band before touching adjacencies — comfortably inside the $1M–$5M target, which is the point.
- **Adjacent buyers (real, and they expand ACV):** solar land-origination shops; renewable project-finance lenders doing pre-NTP development capital (Leyline, Avana, Solriver et al. underwrite exactly this risk and currently eyeball it); landowner-side brokers; and the M&A buyers who acquire mid-stage project pipelines and need to diligence interconnection exposure fast.
- **Why now for them:** Withdrawal rates hit ~80% and the cost-reallocation cascade got vicious — when competitors withdraw from a cluster, survivors absorb their share, so a $20M allocation becomes $40M then $60M. Nexamp was quoted **$60M to interconnect a project that cost $8M to build.** Every developer in the market has now either lived this or watched a peer live it. The fear is fresh and the budget is already being spent — just spent badly, on deposits.

## 5. Product sketch (MVP)

- **Drop a pin, get a verdict.** Enter a parcel or point of interconnection and a target MW. Get back a network-upgrade cost estimate as a *range with a confidence band*, not a fake point estimate — plus a red/amber/green kill verdict and the top three drivers behind it.
- **Feeder headroom read.** Pulls the utility's own hosting-capacity map for that feeder/node and reports remaining headroom, plus how stale the underlying data is — because hosting-capacity data goes stale fast and stale data is how you get false confidence.
- **Queue crowding read.** Shows what else is already queued on and upstream of that interconnection point, how much capacity those projects claim, and what happens to your cost allocation if they survive vs withdraw.
- **Cost-cascade stress test.** Model the survivor penalty explicitly: "if 60% of your cluster withdraws, your allocation goes from $X to $Y." This is the number that actually kills projects and nobody shows it.
- **Site ranking.** Feed it 40 candidate parcels, get them ranked by interconnection risk, so scarce option money goes to the survivors. This is where a developer's whole pre-development budget is won or lost.
- **Pre-application report parser.** Upload the utility's pre-application report PDF (optional, ~$300–$750, returned in ~10 business days) and the product reconciles it against its own estimate, tightening the band and learning from the delta.
- **Watch list.** Alert when the feeder's hosting capacity, the queue around your point of interconnection, or the relevant utility tariff materially changes. Roughly 11 material queue changes per month means a snapshot is a lie by the time you act on it.

## 6. AI angle — what's load-bearing

Strip the AI out and this product does not exist, because the inputs are a swamp.

Hosting-capacity data is published by dozens of utilities in mutually incompatible formats — some REST APIs, some ArcGIS layers, some PDFs, some literal map images with a legend. Queue data spans 7 ISOs plus 50+ non-ISO utilities with no common schema, no common status vocabulary, and no common definition of "active." Pre-application reports and interconnection study results are unstructured PDFs written by a different engineer at every utility. Tariffs and cost-allocation rules differ per jurisdiction and change.

Three places AI carries structural weight:

1. **Ingestion and normalization at the edge of chaos.** Vision + LLM extraction turning heterogeneous utility maps, PDFs, GIS layers and study documents into one comparable schema. This is the moat-building grind and it is exactly what models are now good enough to do at acceptable cost — which is *why this wasn't buildable three years ago.*
2. **Estimation under sparsity.** No small developer will ever have enough local data. The model has to reason from LBNL's published per-kW distributions by region/technology/voltage, conditioned on the specific feeder's headroom, the queue crowding, and the observed cost outcomes the product accumulates — and it has to output an honest confidence band, not a confident lie. Calibration is the product; a wrong-but-confident number is worse than nothing here.
3. **Study-document mining.** Every completed interconnection study that a customer uploads is training signal on what the utility actually charged versus what the map implied. That flywheel is the defensibility (see §12 — it's thin at month 3, real at month 18).

## 7. Localization angle

N/A — this is a US play, and deliberately so. The product's value comes from modeling *specific* US utility tariffs, FERC Order 2023 cluster-study mechanics, state hosting-capacity mandates, and LBNL's US cost datasets. That regulatory specificity is the moat, not an obstacle, and it doesn't travel. The natural second market is not another country — it's the adjacent US asset classes that hit the same queue (storage at $335/kW network upgrades, and the data-center interconnection scramble where waits stretch toward 12 years and the buyers have far deeper pockets).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $500/mo (Solo — single developer, 10 site screens/mo) · $1,200/mo (Team — unlimited screens, watch lists, portfolio ranking) · $2,500/mo (Pipeline — API, study-doc ingestion, multi-territory, lender-grade export). Land it against a $30K/yr incumbent seat that doesn't even answer this question.
- **ACV:** ~$14K blended.
- **Math to $1M ARR:** 72 customers at $14K. Out of 300–600 addressable small/mid developers, that's a low-teens percentage of the market — achievable without heroics.
- **Math to $5M ARR:** ~360 customers, or ~200 customers plus the lender/diligence tier at a much higher ACV. Realistically $5M requires cracking project-finance underwriters, who will pay $25K–$50K/yr for portfolio-wide interconnection risk scoring because they are currently underwriting that risk on vibes. That's the expansion thesis and it should be tested early, not at year three.
- **Expansion path:** screens/mo → territories → storage and data-center interconnection → lender/M&A diligence seats. ACV grows because the same engine gets pointed at bigger balance sheets.
- **Honest note on the model:** this is a *tool that prevents spend*, not one that produces revenue. That's a harder sell than a revenue-producing tool and it means churn risk is real when a developer's pipeline goes quiet. Watch-list and portfolio-monitoring features exist partly to make the product a standing subscription rather than a per-deal purchase.

## 9. Go-to-market wedge — first 100 customers

1. **Mine the queue for the dead and the dying — it's a public list of the wounded.** Interconnection queue data is public and includes withdrawn projects with names attached. Pull every withdrawal from the last 24 months in PJM, NYISO, MISO and ISO-NE, resolve them to their developers, and send each one a free retrospective: *"Here's what our model would have told you about this point of interconnection before you filed. Here's the same read on the three sites you have queued right now."* That is a cold email that gets opened, because it names their own dead project. There are hundreds of these — 112 GW withdrew in 2024 alone.
2. **CCSA — the trade association is a pre-assembled list of the buyer.** The Coalition for Community Solar Access represents 100+ community solar developers. Sponsor, attend, and run a session on interconnection cost risk with real numbers from the model. This is a small enough industry that 100 customers is a room, not a funnel.
3. **Partner with the pre-NTP lenders, who have the same enemy.** Leyline, Avana, Solriver and the rest underwrite development capital against exactly this risk and currently assess it manually. They have every incentive to push a risk-screening tool onto the developers they fund — it protects their book. One lender partnership can put the product in front of dozens of developers with an implicit endorsement.
4. **Publish the number nobody publishes.** A free public "interconnection cost heat map" by county/feeder — the LBNL data made visual and searchable. This is the SEO and credibility asset, it's genuinely useful, and it's the top of the funnel for the paid verdict. Every developer in the country will look at it; a slice will pay to point it at their own site.
5. **Land-origination shops as a channel.** They bring parcels to developers and currently get rejected late for interconnection reasons. Give them the screen free so they stop wasting their own time — they'll route their developer relationships to it.

## 10. Build complexity — justification

**Medium**, honestly — and this is the weakest axis, so I'm not going to pretend otherwise.

Off-the-shelf: the web app, geospatial stack (PostGIS), LLM/vision extraction for the document and map ingestion, the published LBNL cost datasets, the queue feeds. Custom: the ingestion layer for dozens of utility hosting-capacity sources in incompatible formats, and — the real work — the estimation model that has to be *calibrated* rather than merely plausible. A confident wrong number in this product loses the customer their deposit and loses you the account.

Call it 4–5 months to a credible v1 for two people, one of whom needs genuine power-systems literacy. That's slower than I like and the domain-expertise requirement is a real constraint on who can build it. The mitigating move: **launch narrow.** Ship for one utility territory with a good hosting-capacity API and a dense community-solar market — Con Edison or a NY joint-utility territory, where the state mandated the maps and the DG market is deep — prove calibration there, then expand territory by territory. Territory-by-territory expansion is also the moat.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Public data (utility hosting-capacity maps, ISO/DG queue feeds, LBNL datasets) plus customer-supplied documents. No scraping of anything gated. |
| Ethical — no harm / dark patterns | ✅ | Prevents wasted capital and accelerates clean energy deployment. The only ethical duty is calibration honesty — ship confidence bands, never fake precision. |
| Market exists (evidence above) | ✅ | 77% withdrawal rate; >60% of developers name interconnection as the top cancellation cause; $15K–$25K non-refundable deposits already being spent to answer this question badly. |
| 1–5 person team can build this | ✅ | 2 people, ~4–5 months, one with power-systems domain literacy. |
| Launchable with <$50K / ₹40L | ✅ | Data is public; costs are inference, geospatial hosting, and one domain advisor. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Developers burn $15K–$25K non-refundable deposits plus $10K–$25K/yr land options to answer a question they currently cannot answer, against a 70–90% failure rate. Nexamp got quoted $60M to interconnect an $8M project. Not an inconvenience — this is the thing that kills the company. |
| Demand evidence | 15 | 13/15 | Multiple hard, independent signals: LBNL cost datasets, 77% withdrawal rate, >60% of surveyed developers naming interconnection as primary cancellation cause, an enterprise software category already charging $30K+/yr for the *adjacent* problem. Docked 2 because I could not source verbatim developer quotes on cost surprise — the evidence is quantitative and institutional, not voice-of-customer. That gap is the first thing to close (see §15). |
| Build feasibility | 15 | 9/15 | The honest weak spot. Heterogeneous utility data ingestion is a grind, and the estimation model must be *calibrated*, not merely plausible. 4–5 months for a domain-literate pair. Not a weekend API wrapper. |
| Distribution clarity | 15 | 12/15 | Excellent: the queue is a public list of wounded prospects with names attached, the trade association pre-assembles the buyer, and the pre-NTP lenders are a warm channel with aligned incentives. Docked because the buyer is a small, slow-moving industry and deal cycles won't be instant. |
| Revenue mechanics | 15 | 12/15 | Pricing anchors cleanly below a $30K incumbent seat and against a $25K avoidable deposit — the ROI argument writes itself. Docked because it's a cost-*prevention* tool (harder sell than revenue-generation) and the $5M path leans on cracking lenders, which is unproven. |
| Time to first revenue | 10 | 6/10 | 4–5 months to credible v1, then a real (if short) B2B cycle. Realistically 5–7 months to first dollar. Mitigable by pre-selling design partners during the build — do this. |
| Defensibility | 10 | 4/10 | Thin at month 3: a competent team could copy the ingestion. Real by month 18: accumulated study-outcome data (predicted vs actual utility charge) compounds into calibration nobody can shortcut, and territory-by-territory coverage is a grind that punishes fast followers. But Enverus/Pearl Street could point their existing simulation engine downmarket at any time, and that is the standing threat. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This one has a hard gate on the builder: **you need real power-systems literacy on the founding team.** Not "we'll hire an advisor" — someone who can look at a hosting-capacity map and a queue and know when the model is lying. Without that, the calibration will be garbage, and garbage calibration in this product actively costs the customer money. If you can't get that person, don't build this.

### Key assumptions to validate (3–5)

1. **Assumption:** A calibrated *range* (not a point estimate) is decision-useful enough that developers will pay for it. **How to test:** Take 20 historical projects with known interconnection study outcomes, back-test the model blind, and show developers the predicted range vs actual. If the range is too wide to change a go/no-go decision, the product is a toy.
2. **Assumption:** Public hosting-capacity + queue data is sufficient to get within a decision-useful band. **How to test:** Build the estimator for one territory (Con Edison / NY joint utilities) and back-test against published study results before writing a line of product UI. This is the technical kill switch and it comes first.
3. **Assumption:** Small developers will pay $500–$1,200/mo for a tool that prevents spend rather than generates revenue. **How to test:** 30 discovery calls sourced from the withdrawn-project list. Pre-sell design-partner slots at half price. If fewer than 5 of 30 will put money down against a described product, the pricing thesis is wrong.
4. **Assumption:** The pre-NTP lender channel is real and reachable. **How to test:** 5 conversations with development-capital lenders. Ask directly how they currently underwrite interconnection risk and whether they'd push a tool to their portfolio.

### Risk flags

1. **Incumbent-downmarket risk (the big one):** Enverus owns Pearl Street's SUGAR/Interconnect simulation engine. They can point it downmarket at small developers whenever they choose, and they'd start with better tech than yours. Your only defense is speed, an SMB price point they don't want to defend, and accumulated calibration data.
2. **Data-source dependency:** The product depends on utility hosting-capacity maps and public queue feeds staying published, accessible, and free. Regulatory mandates make this durable-ish (states *require* the maps), but a format change or an access restriction at a major utility is a fire drill. Diversify territories early.
3. **Calibration risk = liability risk:** If the model is confidently wrong and a developer skips a viable site or commits to a dead one, you've cost them real money. This demands conservative confidence bands, explicit "insufficient data" verdicts, and clear terms. Resist every commercial temptation to fake precision.
4. **Market timing / policy risk:** FERC Order 2023 cluster reform and any move toward upfront average-cost interconnection fees (the UK model, proposed in SPP) would compress the very uncertainty this product monetizes. LBNL explicitly floats this reform. It won't arrive fast — implementation of Order 2023 is already uneven and slow — but a multi-year structural fix to cost uncertainty is the long-run existential threat. Build for the 5-year window, not the 15-year one.
5. **Small, slow market:** A few hundred addressable developers is thin. Every logo matters, churn hurts disproportionately, and the $5M path genuinely requires the lender/storage/data-center adjacency to work.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder WITH power-systems domain literacy on the
                        founding team (non-negotiable), plus a geospatial/AI engineer.
                        Prior time at a solar developer, a utility interconnection desk,
                        or an ISO planning group is close to a prerequisite.
Time to revenue:        5–7 months (4–5 to credible v1; pre-sell design partners during build)
Capital to launch:      $25–40K (inference, geospatial hosting, domain advisor)
Top 3 assumptions to validate first:
  1. Public hosting-capacity + queue data gets within a decision-useful band —
     back-test one territory against published study outcomes BEFORE building product.
  2. A calibrated range (not a point estimate) actually changes a go/no-go decision —
     blind back-test on 20 historical projects, shown to 10 real developers.
  3. Developers pay $500–$1,200/mo to prevent spend — pre-sell design partners
     from the public list of withdrawn projects.
Kill criteria:
  - Abandon if the back-test on one territory can't beat a naive regional-average
    baseline by a decision-useful margin. If public data can't price the upgrade,
    there is no product — and this is knowable in ~6 weeks, before you build anything.
  - Abandon if fewer than 5 of 30 developers sourced from the withdrawn-project list
    will put money down against a described product.
  - Abandon if Enverus/Pearl Street launches an SMB-priced interconnection screening
    product before your v1 ships.
```

## 15. Next step — 1-week validation sprint

The good news about this idea is that the riskiest assumption is *technical*, and technical assumptions can be killed cheaply and fast without building a product.

- **Day 1–2 — Assemble the ground truth.** Pull published interconnection study results (network upgrade costs, actual, in dollars) for 20–30 completed distribution-level solar projects in one territory with a good hosting-capacity map — NY joint utilities is the target. These exist in public dockets and utility filings. This is the answer key.
- **Day 3–4 — Build the crudest possible estimator and back-test it blind.** Feeder headroom from the hosting-capacity map, queue crowding from the public queue, LBNL's regional $/kW distribution as the prior. No UI, no product, just a script and a spreadsheet. Predict the 20–30 known outcomes. Compare against a naive baseline of "just use the regional average $/kW."
- **Day 5 — Show 10 developers the back-test and ask for money.** Sourced from the withdrawn-project list, which is public. Not "would you use this" — show them the predicted range vs the actual outcome on real projects, then ask them to pre-pay for a design-partner slot.

**Falsifiable outcome:** the estimator must (a) beat the naive regional-average baseline by a margin wide enough to flip at least a few go/no-go decisions, and (b) produce ≥3 of 10 developers willing to put money down. Miss either and this is a PASS — and you'll have spent one week and zero dollars to find that out, instead of five months.
