---
title: "PlotAssay — supplier-data assay for EU commodity importers"
slug: eudr-supplier-data-assay
date: 2026-07-12
category: Compliance / EU — Mid-Market Coffee, Cocoa & Rubber Importers and Roasters (EUDR upstream data verification)
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Tests a supplier's deforestation data before you sign, so you never discover it's junk at customs."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [SMB, AI-agent, Compliance-driven, Geospatial, Supply-chain, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlotAssay

## 1. One-liner

Tests a supplier's deforestation data before you sign, so you never discover it's junk at customs.

## 2. Trend signal — why now?

Three things converged in the last eight months, and the third one is a clock.

**The deadline is finally real.** EUDR has been delayed twice, and the entire market learned to treat it as a bluff. That ended. On 4 May 2026 the Commission published its simplification package and made the political signal explicit: **there will be no third extension.** Large and medium operators comply from **30 December 2026**; micro and small operators from **30 June 2027** ([Hogan Lovells](https://www.hoganlovells.com/en/publications/eu-deforestation-regulation-commission-publishes-simplification-package-ahead-of-december-2026), [Council of the EU](https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/)). It is July 2026. Medium operators have **under six months**, and the people who believed the bluff have done nothing.

**The data underneath is bad, and it's measurable.** In Côte d'Ivoire's Cavally region, roughly **30% of farm plot data collected on the ground was insufficiently reliable to meet EUDR standards** ([Meridia](https://www.meridia.land/blog/eudr-cocoa-compliance-a-comprehensive-guide)). In Vietnam, only about **10% of surveyed smallholders kept plot-level data at all**, and nearly 60% kept no consistent harvest records — in a country sourcing ~95% of coffee from smallholders ([AgTechNavigator](https://www.agtechnavigator.com/Article/2026/02/12/land-legality-and-plot-level-traceability-challenge-vietnams-coffee-sector-under-eudr/)). Rainforest Alliance puts EUDR-aligned coffee supply chains at **65%** — which is another way of saying a third of it isn't ([FoodNavigator](https://www.foodnavigator.com/Article/2026/04/17/eudr-how-ready-is-coffee/)). Bad polygons are the leading cause of DDS rejection, and **one bad coordinate holds a container** ([TraceX](https://tracextech.com/eudr-dds-best-practices/)).

**And the law tells you to verify something it won't show you.** This is the crux. A downstream operator may reference an upstream supplier's DDS by reference number — but **legal liability stays with the downstream operator**, and they are required to "independently verify that the upstream due diligence is trustworthy" ([TraceX](https://tracextech.com/downstream-operators-eudr-compliance/)). Now look at what TRACES actually gives you when you punch in that reference number: supplier name, HS code, place of production, and geolocation **only if the supplier opted into sharing it**. Not the due diligence information. Not anything past your Tier 1 supplier. And there is **no export button — you copy-paste it into your own records by hand** ([Interu](https://www.interu.io/blog/eudr-traces-explained)).

So the regulation hands you full liability, orders you to independently verify, and hands you a filing box with no window. Penalties run to **4% of EU turnover** plus confiscation and market bans, with inspections risk-tiered at 1% / 3% / 9% of shipments by country risk ([Coolset](https://www.coolset.com/academy/eudr-penalties-what-non-compliance-actually-costs-fines-bans-criminal-liability)).

Everyone is selling importers a box to *collect* supplier data. Nobody is selling them a way to find out whether the data is **worth the liability they're about to accept for it.**

```
Provenance:
  - Signal 1 (Demand): Downstream operators hold full legal liability for upstream DDS and are required to "independently verify that the upstream due diligence is trustworthy" — but TRACES exposes only Tier-1 fields, hides geolocation unless the supplier opts in, and has no export function — https://tracextech.com/downstream-operators-eudr-compliance/ + https://www.interu.io/blog/eudr-traces-explained — July 2026
  - Signal 2 (Feasibility): Origin plot data is measurably unreliable at scale — ~30% of Cavally (Côte d'Ivoire) ground-collected plot data failed EUDR reliability standards; only ~10% of Vietnamese smallholders keep plot-level records — and public forest-loss baselines plus commodity geospatial APIs now make third-party polygon assaying cheap — https://www.meridia.land/blog/eudr-cocoa-compliance-a-comprehensive-guide + https://www.agtechnavigator.com/Article/2026/02/12/land-legality-and-plot-level-traceability-challenge-vietnams-coffee-sector-under-eudr/ — Feb–July 2026
  - Signal 3 (Economic): Commission confirmed no third extension — 30 Dec 2026 for medium/large operators, 30 Jun 2027 for small; penalties up to 4% of EU turnover; incumbents price at €12K/yr (Coolset) or require sales calls (osapiens), leaving a mid-market gap — https://www.hoganlovells.com/en/publications/eu-deforestation-regulation-commission-publishes-simplification-package-ahead-of-december-2026 + https://www.coolset.com/academy/eudr-penalties-what-non-compliance-actually-costs-fines-bans-criminal-liability — May–July 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Every EUDR tool on the market is built around the same verb: **collect**. Collect the supplier's polygons, collect the DDS reference, file it into TRACES. osapiens, TraceX, Coolset, EUDRReady — different price points, same verb.

The verb the importer actually needs is **assay**. Not "store this data" — *"is this data going to hold?"*

Here's the failure mode, and it is not hypothetical. A mid-sized German roaster placed a **€180,000 order** with an Ethiopian supplier they'd bought from for eight years. Customs asked for EUDR documentation. The roaster called the supplier and asked for farm geolocations. The supplier didn't have systems to track individual plots. The roaster sat there paying **€450/day in storage** while trying to retroactively conjure farm coordinates that never existed ([Fiegenbaum Solutions](https://www.fiegenbaum.solutions/en/blog/eu-deforestation-regulation-eudr-coffee-industry-challenges-strategies)).

Every euro of that was avoidable. The data was bad in September, when the contract was signed. He found out in December, at the port. **The entire product is moving that discovery from the port to the contract.**

The incumbents can't do this, and it's not because they're stupid — it's structural. Their customer relationship is "we are your compliance filing system," which means the supplier's data is an **input** they ingest, not a **claim** they attack. A system built to file your data cannot also be the system that tells you your data is worthless; it has an institutional incentive to accept what it's given and mark the checkbox green. PlotAssay is adversarial by design. It exists to find the crack before the competent authority does.

And there's a second, meaner reason this stays open: the assay only has value if it's **independent of the party that produced the data.** A traceability platform that maps your supplier's farms cannot then credibly grade its own mapping. The conflict of interest is the moat.

## 4. Target market

**Primary customer:** EU-based **medium operators** in coffee, cocoa, and natural rubber — importers, green-coffee traders, roasters, and chocolate makers with roughly **€10M–€150M turnover, 50–250 employees**, buying through brokers and cooperatives rather than owning origin infrastructure. Germany, Netherlands, Belgium, Italy, France. The buyer is the **Head of Procurement / Supply Chain Director / Quality & Compliance Manager** — one person, usually wearing all three hats, personally holding the bag if a container is stopped.

**Why they buy — in their words:** *"Mid-size roasters buying through brokers without farm-level traceability are scrambling to either switch suppliers or pay for retroactive mapping"* ([Perfect Daily Grind](https://perfectdailygrind.com/2025/10/more-changes-to-eudr-smaller-coffee-roasters/)). Scrambling. Five months out. And the cost is already flowing through the price: *"Our Colombian supplier quoted us €9.80/kg for the same coffee we paid €7.20/kg for last year. When I asked why, they said 'EUDR compliance costs.'"* — roaster in Lyon ([Fiegenbaum Solutions](https://www.fiegenbaum.solutions/en/blog/eu-deforestation-regulation-eudr-coffee-industry-challenges-strategies)). They are being charged a **36% premium** for compliance they cannot verify they're receiving. That's the pitch in one line.

**TAM reasoning:** I couldn't find a clean public count of EU operators in scope, and I won't invent one. What I can anchor on: EU coffee imports alone run in the billions of euros annually across thousands of importing entities, and EUDR covers coffee, cocoa, palm oil, soy, rubber, cattle and timber plus derived products including chocolate and spreads. Conservatively, the addressable slice — EU medium operators in coffee/cocoa/rubber who buy through intermediaries — is in the **low thousands**. At €600/mo average, capturing 300 of them is $2.5M ARR. That is a real business and it does not require me to be right about the total.

**Why now for them:** 30 December 2026. Five and a half months. The Commission has said there is no third extension, and unlike the last two times, the market now believes it.

## 5. Product sketch (MVP)

- **Supplier data assay** — upload the polygon pack a supplier sent you (GeoJSON, shapefile, or the spreadsheet-of-coordinates they'll actually send). Get back a graded verdict per plot: pass, weak, fail — and *why*.
- **The three killers, checked automatically** — geometry that won't survive TRACES (self-intersections, unclosed rings, wrong datum, coordinates in the sea), plots overlapping protected areas, and plots showing forest loss after the **31 December 2020** cutoff against public satellite baselines.
- **Plausibility grading** — the check nobody runs: does a 40-hectare "smallholder" plot in a region where the median is 1.2 ha make sense? Are 200 farms reporting suspiciously identical polygon shapes (a strong tell for desk-drawn data)? Does the plot's claimed yield match its area?
- **Liability brief** — a one-page PDF, in plain language, that says *"If you accept this shipment, here is what you are personally signing for, and here are the three plots that will get it stopped."* This is the artifact the procurement manager forwards to their MD.
- **Supplier scorecard + chase email** — a shareable grade per supplier, and a generated email in the supplier's language telling them exactly which plots to fix and how. Turns a blame fight into a task list.
- **Pre-contract check** — run the assay on a prospective supplier's sample data *before* the purchase agreement, not after the container ships.
- **Re-assay on refresh** — plot data rots. Re-run every consignment against updated forest-loss layers, flag any plot that has newly gone red since you last cleared it.

## 6. AI angle — what's load-bearing

Be honest about where AI matters here, because half of this is geospatial computation, not AI, and I'd rather say so.

**Not AI:** polygon geometry validation and forest-loss intersection are deterministic GIS operations. Free validators already do the geometry half (Silvatrace, GeoRoots, the EC's own test-bed tool). If that were the whole product, this would be a PASS — it's a commodity.

**Load-bearing AI, part one — ingestion.** Suppliers do not send you clean GeoJSON. They send a WhatsApp photo of a handwritten plot register, a PDF land certificate in Vietnamese or Amharic, a CSV with coordinates in three different formats in the same column, and an email saying "the rest is coming." Turning that swamp into structured, validated plots is a document-and-language problem that vision models finally handle well enough to trust with human review on the low-confidence rows. **This is the actual bottleneck**, and it's why the free validators don't help — they assume you already have a clean file. Getting to the clean file *is* the job.

**Load-bearing AI, part two — the plausibility layer.** Geometry validation catches *malformed* data. It does not catch **plausible-looking fiction** — the desk-drawn polygon, the copy-pasted farm boundary, the 40-hectare "smallholder." Grading whether a claimed plot is *credible* against regional norms, satellite land-cover, and internal consistency is exactly the fuzzy-judgment task a rules engine can't express and a model can. This is the layer that finds the 30%.

Strip the AI out and you have a free GeoJSON validator. The AI is what turns "your file is malformed" into **"your supplier is lying to you and here's the plot that proves it."**

## 7. Localization angle

N/A as a *market* play — the buyer is European and pays in euros. But localization is load-bearing on the **supplier-facing surface**: the chase emails and data-request templates must go out in Vietnamese, Bahasa Indonesia, Portuguese, Spanish, Amharic and French, because the person who has to go find the missing polygon is a co-op manager in Đắk Lắk or Cavally, not a compliance officer in Hamburg. Every incumbent treats the supplier as a data source. Treating the supplier as a **user you must actually help** is a wedge — a fixed plot is worth more to the importer than a flagged one.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers, benchmarked against a market where Coolset starts at **~€12,000/yr** and osapiens won't quote without a sales call.
  - **Assay** — €199/mo. Up to 10 suppliers, 500 plots. The scrambling small roaster.
  - **Operator** — €599/mo. Up to 50 suppliers, 5,000 plots, liability briefs, re-assay on refresh. **The core SKU.**
  - **Trader** — €1,500/mo. Unlimited, multi-entity, API, audit-pack export for competent-authority requests.
- **Plus a wedge product:** **€450 one-off pre-contract assay.** Priced deliberately at one day of the German roaster's demurrage. This is the land motion — nobody argues about €450 to de-risk a €180K container, and it drops them into the funnel with their data already loaded.
- **ACV:** ~€7,200 blended (Operator tier annualized).
- **To $1M ARR:** 140 Operator customers × €599 × 12 ≈ €1.0M. **140 customers.** In a market of thousands of EU operators facing a hard December deadline, that is not a heroic number.
- **To $5M ARR:** ~600 mixed customers, weighted toward Trader tier, plus expansion into the commodities I'm not touching in v1 (palm oil, soy, timber, cattle) and the June 2027 wave of micro/small operators — a second, larger cohort hitting the same wall six months later. The 2027 deadline is a built-in second act.
- **Expansion path:** priced per supplier and per plot, so ACV grows mechanically as the customer's supply base grows or as they extend the assay across more commodities. The audit-pack export is the natural upsell the first time a competent authority actually knocks.

## 9. Go-to-market wedge — first 100 customers

The deadline does the selling. I just have to be standing where they're panicking.

1. **The customs-hold list is a target list.** EUDR-driven port holds are already happening and they are *events* — the affected importer is, that week, the most motivated buyer in Europe. Freight forwarders and customs brokers in Rotterdam, Hamburg, Antwerp and Genoa see every one of them. **Partner with 5–10 mid-size customs brokerages**: they refer the importer whose container just got stopped, I pay a referral fee. The broker looks like a hero, I get a customer whose alternative is €450/day. This is the highest-intent channel that exists in this market.

2. **Scrape the trade-show exhibitor lists.** The EU coffee/cocoa trade runs on a small number of events with **public exhibitor directories** — World of Coffee, ProSweets/ISM, Anuga, the SCA events. Pull the EU-based importer/roaster/trader exhibitors, filter to 50–250 employees, and there's the medium-operator list — a few thousand named companies with named commercial contacts. Cold outreach with a **free assay of one real consignment's data**: "send me the polygon file your Ethiopian supplier gave you, I'll tell you in 24 hours which plots will stop your container." The demo *is* the product, and it costs me nothing but compute. Expect 3–5% to send a file; a large share of those will find something broken, because ~30% of the underlying data is broken.

3. **Publish the failure rate.** Run the assay across every public and shareable polygon set I can legally obtain and publish an origin-by-origin **EUDR Data Readiness Index** — "% of coffee plots from Vietnam / Ethiopia / Côte d'Ivoire that would fail a DDS today." That number is genuinely newsworthy, the trade press (Perfect Daily Grind, FoodNavigator, Global Coffee Report) is actively covering EUDR readiness right now, and it is a rare piece of content that is simultaneously a marketing asset and a live demonstration of the product's only real claim. Every journalist who cites it links to the tool.

4. **Sell to the certifier's blind spot.** Rainforest Alliance says 65% of its certified coffee chains align with EUDR. The importers reading that are asking the obvious follow-up: *which 35% of mine don't?* Target the compliance managers at certified-sourcing importers with exactly that question.

5. **Sit in the LinkedIn EUDR panic.** There is a dense, active professional community of EU sustainability and procurement managers posting daily about EUDR readiness — this is where the buyer is *already talking about the problem in public*. Not content marketing: direct, targeted engagement with the people who post "how is anyone actually verifying supplier polygons?" — a question that gets asked weekly and currently has no good answer.

## 10. Build complexity — justification

**Medium.** Roughly 10–14 weeks for a strong technical pair.

Off-the-shelf: the geospatial stack is mature and mostly free — polygon geometry validation, protected-area layers (WDPA), and public forest-loss baselines are all available, and the EU's own GeoJSON spec is published. Document and language extraction rides on off-the-shelf vision models. Standard web stack, no exotic infra.

The custom work is the **plausibility layer** — building regional norm baselines (median plot size by district, typical yield-per-hectare) so the model can grade whether a claimed plot is *credible*, not just *well-formed*. That's a data-assembly problem, not a research problem, and it's the part that takes real weeks. There's also honest grind in the ingestion surface: supplier data arrives in a genuinely awful variety of formats and getting that to "reliable" is iteration, not cleverness.

What it is **not**: no origin fieldwork, no farm visits, no hardware, no regulatory approval, no proprietary satellite. I am not mapping farms. I am **grading maps other people made** — which is precisely why one small team can do it.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Analyzing customer-supplied supply-chain data against public geospatial baselines. No regulated activity, no license needed. Not a certification body and must never claim to be. |
| Ethical — no harm / dark patterns | ✅ | Genuinely aligned: the tool's incentive is to find bad deforestation data, not to launder it. The supplier-fix workflow actively helps smallholders stay in the EU market rather than get dropped. |
| Market exists (evidence above) | ✅ | Hard December 2026 deadline, 4%-of-turnover penalties, incumbents charging €12K/yr, documented importers already paying demurrage over exactly this. |
| 1–5 person team can build this | ✅ | Technical pair, 10–14 weeks. Mature geospatial stack, no fieldwork. |
| Launchable with <$50K / ₹40L | ✅ | Two people, compute, public data layers. Well under. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Hair-on-fire with a date on it. 4% of EU turnover, containers held at €450/day, and a legal obligation to "independently verify" something the official system structurally will not show them. Not 18+ only because a chunk of the market will discover the pain *at* the border rather than before it — some of them buy from me in January, not October. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: sourced demurrage case, 36% supplier price hikes attributed to EUDR, incumbents charging €12K/yr (money is already moving), trade press documenting mid-size roasters "scrambling," measured 30% data failure rate. A skeptic nods. Docked for having no direct evidence anyone has yet paid specifically for *verification-of-supplier-data* as a separate product. |
| Build feasibility | 15 | **10**/15 | Pair ships in 10–14 weeks. Geospatial stack is mature and public; the plausibility baselines and the messy-ingestion surface are real engineering, not a weekend. Honestly a notch harder than most SaaS on this list. |
| Distribution clarity | 15 | **12**/15 | The customs-broker referral channel is genuinely excellent — event-triggered, maximum-intent. Trade-show exhibitor lists give a real named list. Docked because the broker partnerships have to be built one relationship at a time, and that's slower than a scrape-and-email sprint. |
| Revenue mechanics | 15 | **12**/15 | 140 customers to $1M is very achievable against thousands of in-scope operators. Pricing sits comfortably under a €12K/yr incumbent floor while being 3–6× a €79/mo collector — defensible because the value is liability, not storage. Docked: churn risk after the deadline passes (see risks). |
| Time to first revenue | 10 | **8**/10 | The €450 pre-contract assay can sell before the full platform exists — arguably before it's built. Revenue in 4–8 weeks is realistic. Not 9–10 because a procurement manager still needs a week or two to get sign-off on even a small spend. |
| Defensibility | 10 | **5**/10 | Honest score. The geometry checks are commodity — free validators exist today. The moats are real but soft: accumulated regional plausibility baselines that compound with every plot assayed, the structural conflict-of-interest that stops traceability platforms from credibly grading their own data, and the broker referral relationships. A well-funded incumbent could bolt on a "data quality score" in a quarter. Speed and focus, not a fortress. |
| **Total** | **100** | **77**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone comfortable with geospatial data and document-extraction models, paired with someone who can talk credibly to a coffee trader. The domain half is not optional — this market smells a tourist instantly, and the trade is relationship-dense.

### Key assumptions to validate (3–5)

1. **Assumption:** EU medium operators will pay for *verification* of supplier data as a product distinct from *collection* of it — i.e. they perceive "is this data good?" as a separate purchase from "where do I store this data?"
   **How to test:** Take 20 real supplier polygon packs from 20 different importers, assay them free, and show each importer their failures. Measure how many convert to paid **without** being asked to switch off their existing filing tool. If they say "my compliance platform already handles this," the thesis is wrong.

2. **Assumption:** The plausibility layer actually catches things the free validators miss — that there is real signal in "well-formed but fictitious."
   **How to test:** Run both the free validators and the plausibility layer across the same 20 packs. Count the plots that pass geometry validation but fail plausibility, then **ground-truth a sample** against known regional plot statistics. If the delta is near zero, the product is a commodity and this is a PASS.

3. **Assumption:** Customs brokers and freight forwarders will refer held shipments.
   **How to test:** Pitch 10 mid-size brokerages in Rotterdam/Hamburg/Antwerp. Land 3 referral agreements within 30 days. If brokers won't play, distribution loses its best channel and the score drops several points.

4. **Assumption:** Willingness to pay is ~€599/mo, not ~€79/mo — that the liability framing lifts this out of the cheap-collector price band.
   **How to test:** Price-test both against the same cold list. If Operator-tier conversion collapses versus a €99 tier, the market has commoditized this in its head and margins compress badly.

### Risk flags

1. **Regulatory risk (the big one, and it cuts both ways):** the entire product is a bet on the December 2026 date holding. EUDR has been delayed **twice already**, and this market has been repeatedly burned by believing it. The Commission says no third extension — but a fourth delay, or a "simplification" that waters down verification obligations, guts the urgency overnight. **Mitigation:** the demurrage and 4%-penalty exposure exists the day enforcement starts regardless of *when* that day is, and the June 2027 small-operator wave is a second shot. But make no mistake: a delay announcement is a bad quarter.

2. **Post-deadline churn:** compliance tools bought in a panic get cancelled once the panic subsides and the first audit doesn't come. If PlotAssay is a one-time cleanup rather than an ongoing operation, retention is brutal. **Mitigation is the whole product roadmap:** re-assay on refresh, per-consignment checks, and the newly-red-plot alerting are what convert this from a project into a subscription. If that doesn't stick, this is a consultancy with a login screen.

3. **Platform dependency (TRACES):** if the Commission upgrades TRACES to expose upstream due-diligence data properly and add an export function, half the pain evaporates. The 30%-bad-data problem survives that — a better window doesn't clean the data behind it — but the "I can't even see it" wedge would close.

4. **Incumbent bolt-on:** osapiens, TraceX and Coolset all sit on the customer relationship and could ship a "supplier data quality score" as a feature. They're structurally conflicted about grading data they helped collect, which is a genuine defense — but it's a strategic argument, not a technical barrier, and strategic arguments lose to shipped features.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair — one geospatial/ML engineer, one with real
                        commodity-trade or supply-chain-compliance domain access
Time to revenue:        4–8 weeks (€450 pre-contract assay sells before the platform ships)
Capital to launch:      €15–25K ($17–28K)
Top 3 assumptions to validate first:
  1. Verification is a separate purchase from collection — free-assay 20 real supplier
     packs, measure paid conversion without asking anyone to switch filing tools
  2. The plausibility layer beats free validators — count plots that pass geometry
     but fail credibility, ground-truth the delta against regional plot statistics
  3. Customs brokers will refer held shipments — pitch 10, land 3 referral deals in 30 days
Kill criteria:
  - Abandon if, across 20 real supplier data packs, the plausibility layer finds
    fewer than 15% additional failures beyond what free geometry validators catch
    — that means the product is a commodity wrapper
  - Abandon if >70% of the 20 importers say their existing compliance platform
    already covers supplier data verification and they see no separate need
  - Abandon if the Commission announces a third delay or materially weakens the
    upstream verification obligation before v1 ships
```

## 15. Next step — 1-week validation sprint

The whole week is designed to answer one question: **does bad supplier data actually show up when you look for it, and does showing it to an importer make them reach for a card?**

- **Day 1–2:** Build the assay as a throwaway script — nothing productized. Geometry validation plus protected-area overlap plus post-2020 forest-loss intersection, plus a crude plausibility check (plot size versus regional median). This is a two-day job with public data layers.

- **Day 3–4:** Get **20 real supplier polygon packs.** This is the hard part and it's the point of the sprint. Pull EU coffee/cocoa importers from trade-show exhibitor directories, cold-email the procurement contact with one line: *"Send me the polygon file your supplier gave you. In 24 hours I'll tell you free which plots would stop your container. No signup."* The free-work offer is what gets past the gatekeeper.

- **Day 5:** Assay all 20. Compute the number that decides everything: **what percentage of plots pass a free geometry validator but fail on plausibility or forest-loss?** Then send each importer their own failure report and ask for €450 to assay their next consignment properly.

**Go / no-go — falsifiable:**
- **GO** if ≥15% of plots show failures that free validators miss, **and** ≥3 of 20 importers pay €450 on the spot.
- **NO-GO** if the delta over free validators is under 15% (product is a commodity — the free tools already do the job) **or** if zero importers pay despite being shown broken data in their own supply chain (the pain is real but not yet *purchased*, which means I'm early and should wait for the first enforcement headlines).

The beauty of this sprint is that failure is informative and cheap: if I show twenty importers concrete evidence that their own suppliers sent them junk and **not one of them will pay €450 to fix it**, the market has told me something true, and it told me in a week for the price of some compute.
