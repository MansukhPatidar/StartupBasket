---
title: "WattVeer — generation referee for Indian solar installers"
slug: solar-shortfall-referee
date: 2026-07-23
category: CleanTech / India
complexity: Medium
score: 71
verdict: GO
confidence: Medium
oneLiner: "Compares each rooftop system to its promised output and hands the installer WhatsApp-ready proof before homeowners complain."
tags:
  vertical: CleanTech
  model: SaaS
  geography: India
  secondary: [WhatsApp-first, AI-agent, Compliance-driven, SMB, Solo-builder, UPI-native]
axes:
  problem: 15
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 6
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# WattVeer — generation referee for Indian solar installers

## 1. One-liner

Compares each rooftop system to its promised output and hands the installer WhatsApp-ready proof before homeowners complain.

## 2. Trend signal — why now?

PM Suryaghar dumped a wave of residential rooftop onto India — 5.79M applications as of July 2025, 6,000+ empanelled vendors, many of them repackaged electrical contractors with no service discipline. Now the bill is coming due. Consumer courts have started *awarding damages*: a Vizianagaram commission ordered a solar firm to pay ₹25,265 in July 2026 for "failure to deliver promised savings," and the government floated an AI-based Solar Consumer Smart Dispute Redressal Portal for exactly this class of complaint. Meanwhile 98% of owners never track their own generation — so shortfall festers silently until it detonates as a legal complaint. Two things changed the build math in the last 12 months: inverter clouds (Growatt, Solis, Deye, GoodWe) shipped stable public APIs, and cheap LLMs can turn raw 15-minute kWh data into a homeowner-readable verdict.

The gap: existing tools (SurgePV, Scoop, FieldEx) are fleet O&M dashboards priced per-user for large IPPs managing 50+ commercial sites. Nobody serves the residential installer who has 40–300 homes under an AMC and needs a *customer-facing referee*, not an ops console.

Provenance:
  - Signal 1 (demand): Consumer court awards ₹25,265 for solar under-delivery; govt building dispute portal; "98% of owners never track performance" — https://www.businesstoday.in/latest/trends/story/rooftop-solar-failed-to-deliver-promised-savings-court-orders-renewable-energy-firm-to-pay-rs25265-541205-2026-07-06 / https://solsetu.com/news/solar-news/solar-consumer-dispute-redressal-portal-2026/ — 2026-07-06
  - Signal 2 (feasibility): Growatt/Solis/Deye/GoodWe public inverter APIs now stable; 15-min data pullable by a third party — https://batterystoragehq.com/smart-inverter-monitoring/ — 2026-06-07
  - Signal 3 (economic): 6,000+ PM Suryaghar vendors, 5.79M applications; O&M software market real but priced per-user for fleets (SurgePV ₹1.07L/user/yr) — https://www.deccanherald.com/amp/story/india%2Fpm-surya-ghar-yojana-accelerates-residential-rooftop-solar-supply-still-an-issue-3763543 / https://www.surgepv.com/best-solar-software/monitoring — 2026-07
  Category: Tech-unlock

## 3. The opportunity

The whole Suryaghar cohort is a legal liability waiting to trigger. A homeowner was promised "X units/month, ₹Y saved." When the bill doesn't drop — because of soiling, a wrong-facing panel, a tripped string, or an installer who oversold — the owner has no data, gets angry, and files a consumer complaint. The installer has no cheap way to (a) *know* a site is under-delivering before the customer does, (b) *prove* the shortfall is dust or a grid outage, not their fault, and (c) turn that proof into an AMC renewal.

Incumbents get this wrong two ways. Fleet O&M tools (SurgePV, Scoop) are built for a solar-engineer persona staring at a dashboard every morning — priced per-seat, English-only, and they output alerts, not homeowner-facing evidence. The inverter brands' own apps show a graph the homeowner can't interpret and don't compare against what was *promised at sale*. Nobody closes the loop between the sales promise and the actual meter. WattVeer is that referee: it holds the contracted generation number, watches the real one, and emits a signed, plain-Hindi/regional "your system delivered 91% of promise this month, here's why" statement the installer sends on WhatsApp — pre-empting the fight.

## 4. Target market

- **Primary customer:** Residential/small-commercial solar installers and AMC providers in India with a book of 40–500 systems under contract — the mid-tier Suryaghar vendors, not the top-10 nationals. Owner-operator or a 3–15 person firm. Concentrated in Gujarat, Maharashtra, UP, Kerala, Rajasthan (77% of installed capacity).
- **Why they buy:** In their words — "customers call me screaming their bill didn't go down and I have no way to prove it's not my fault"; "consumer court notices are the new normal and I have zero paper trail"; "I want AMC renewals but I have no reason to give them to re-sign." A single lost consumer-court case costs more than a year of the tool.
- **Rough TAM reasoning:** 6,000+ empanelled vendors; realistically 1,500–2,500 have a book big enough to justify software. At ₹15–40/site/month across books averaging 150 sites, that's a ₹40–100 crore/yr Indian SAM before any overseas or C&I expansion — comfortably a sub-$5M-ARR business without needing the whole market.
- **Why now for them:** The complaint wave and consumer-court precedent just turned "nice to have" into "cover my legal exposure." And the inverter APIs that make it buildable only stabilized in the last year.

## 5. Product sketch (MVP)

- Connect an installer's fleet by pulling from Growatt/Solis/Deye/GoodWe clouds via API keys — no site visit, no new hardware.
- At onboarding, capture the *promised* generation per site (from the sales proposal / kW size / location) as the contractual baseline.
- Daily comparison of actual vs. weather-adjusted expected output; flag any site trending toward monthly shortfall early.
- Auto-attribution: is the gap soiling, a dead string, grid outage, or genuine under-sizing? (LLM over the time-series + local irradiance.)
- One-tap "Generation Statement" — a signed, plain-language WhatsApp message to the homeowner: "You got 412 of 450 promised units (91%). 28 units lost to dust — cleaning scheduled. 10 units to a 2-day grid outage (not our system)."
- AMC-renewal nudge: surfaces sites where a cleaning/repair upsell recovers the most units, with the ROI pitch pre-written.
- Dispute pack: on demand, export a dated evidence bundle (monthly generation, weather, service log) formatted for a consumer-court response.
- Installer dashboard showing which sites are "at legal risk" (large unexplained shortfall + no recent contact).

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration. First, **attribution**: turning a raw 15-minute kWh curve plus local irradiance into a defensible cause ("this dip is soiling, not a fault") is a reasoning task over noisy multi-signal data — the thing that lets the installer say "not my fault" with evidence. Second, **translation of data into a homeowner-trustable verdict** in the owner's language, tuned to defuse rather than inflame. Strip the AI out and you're left with a generic multi-brand dashboard that already exists and that installers ignore — the product *is* the automated referee judgment and the plain-language proof, both of which are the AI.

## 7. Localization angle

This is India-first by construction and hard to copy generically:
- **Baseline = the Suryaghar sales promise**, which is a peculiarly Indian artifact (subsidy-driven, "units/month + ₹ saved" framing). A US tool models against PVWatts, not a WhatsApp sales pitch.
- **WhatsApp-native delivery** of the generation statement — the only channel Indian homeowners actually read. Regional-language output (Gujarati, Marathi, Hindi, Malayalam, Tamil) matches the top-5 capacity states.
- **Consumer-court format** for the dispute pack maps to Indian District Consumer Disputes Redressal Commission norms.
- **Pricing in ₹/site/month** works where a $99/user/mo fleet tool cannot.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹25/site/month (≈$0.30), billed to the installer, minimum ₹2,000/mo. Add-on: ₹199 per exported dispute pack.
- **ACV:** An installer with 150 sites = ₹45,000/yr (~$540). Bigger books (400 sites) = ₹1.2L/yr.
- **Rough math to $1M ARR (₹8.3 cr):** ~185 installers averaging 150 sites at ₹25/site/mo. Well inside a 2,000-vendor SAM.
- **Rough math to $5M ARR:** ~900 installers, or fewer with larger books + C&I sites at higher per-site pricing + expansion into SEA/LatAm markets running similar subsidy-driven residential booms. Would need to be the default referee layer for a meaningful slice of empanelled vendors.
- **Expansion path:** per-site count grows as the installer's book grows (they add ~5–20 sites/month in a boom); upsell the dispute-pack and AMC-recovery module; later, sell an aggregate "verified generation" data feed to lenders/insurers underwriting solar loans.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the empanelled vendor list.** The PM Suryaghar portal + district-wise vendor PDFs give names, locations, ranks. Filter to mid-book installers in Gujarat/Maharashtra. Cold-WhatsApp/call 500 with a specific hook: "Send me one recent customer's inverter login — I'll show you their real vs. promised generation and a WhatsApp statement you can forward today." A live, personalized shortfall report is a near-irresistible demo.
- **Piggyback the complaint wave.** Monitor consumer-court solar filings and news (they're public); the *named installers* are warm leads terrified of the next one.
- **Partner with inverter distributors.** Growatt/Solis regional distributors already have every installer's phone number and want a stickiness story — co-sell the referee as a value-add on hardware.
- **AMC-renewal wedge.** Lead with "recover the AMC revenue you're leaving on the table," not "monitoring." Installers care about renewals more than dashboards.

## 10. Build complexity — justification

Medium. The connectors (four inverter cloud APIs), the expected-generation model (weather-adjusted, off public irradiance data), and the attribution/statement LLM layer are all off-the-shelf-composable — no hardware, no on-site anything. The real work is data-normalization across brands and getting attribution trustworthy enough that an installer will stake a customer relationship on it. A technical founder with a solar-domain advisor ships a credible v1 in ~3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reading a customer's own inverter data with installer consent; no regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Increases transparency for homeowners; the incentive is honesty (over-spin backfires in court). |
| Market exists (evidence above) | ✅ | 6,000+ vendors, live consumer-court precedent, coming dispute portal. |
| 1–5 person team can build this | ✅ | Software-only, off-the-shelf APIs. |
| Launchable with <$50K / ₹40L | ✅ | API + inference costs only; no hardware, no field ops. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and rising — legal exposure + lost AMC revenue — but felt by the installer only when a complaint lands, not daily hair-on-fire yet. |
| Demand evidence | 15 | 12/15 | Court awards, dispute portal, "98% never track," big vendor base. Direct evidence installers will *pay* for this specific tool is still inferred. |
| Build feasibility | 15 | 11/15 | Off-the-shelf APIs, but multi-brand normalization + trustworthy attribution is the hard 20%. |
| Distribution clarity | 15 | 11/15 | Named list (empanelled vendors), strong personalized demo, distributor co-sell. Conversion from a busy installer uncertain. |
| Revenue mechanics | 15 | 11/15 | Per-site ₹ pricing is clean and benchmarkable; risk is low per-installer ACV needing volume. |
| Time to first revenue | 10 | 6/10 | Demo-to-paid is fast once connected, but you need the connectors built first (~weeks) before the first live demo lands. |
| Defensibility | 10 | 5/10 | Execution + the promise-baseline dataset + WhatsApp/regional workflow lock-in; a fleet incumbent could bolt this on, so speed matters. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can wrangle four inverter APIs and a founder/advisor who knows how Indian residential solar is actually sold and serviced.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-book installers will pay ₹25/site/mo to reduce legal exposure and lift AMC renewals. **How to test:** 30 installer calls with a live personalized shortfall report; ask for a ₹2,000/mo pre-commit.
2. **Assumption:** Inverter cloud APIs give reliable enough 15-min data across the top brands without per-account friction. **How to test:** Connect 10 real customer accounts across Growatt/Solis/Deye and measure data completeness.
3. **Assumption:** LLM attribution ("soiling vs. fault vs. grid") is trustworthy enough that an installer will forward it to a customer. **How to test:** Blind-check 50 attributed shortfalls against installer ground-truth; target >85% agreement.
4. **Assumption:** The WhatsApp generation statement actually defuses complaints (fewer escalations). **How to test:** A/B with 5 pilot installers over 8 weeks; compare complaint/escalation rates on stated vs. silent sites.

### Risk flags

1. **Platform dependency:** Entire product rides on inverter cloud APIs — a brand throttling or closing access is an existential dependency. Mitigate by supporting local Modbus/read paths as fallback.
2. **Low ACV / volume dependence:** Per-site pricing means you need real installer count; a slow-moving, WhatsApp-averse buyer could make CAC ugly. Distributor co-sell is the hedge.
3. **Incumbent bolt-on:** SurgePV/Scoop could add a homeowner-statement feature; the moat is India-specific workflow + speed, not tech.
4. **Market timing:** If the govt dispute portal launches strong and standardizes evidence itself, part of the value prop erodes — though that same portal also validates the problem and could become a distribution partner.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + residential-solar domain advisor
Time to revenue:        10–14 weeks
Capital to launch:      ₹4–7 lakh ($5–8K)
Top 3 assumptions to validate first:
  1. Installers pay ₹25/site/mo for legal-exposure + AMC lift — 30 calls with live shortfall demo, ask for ₹2K pre-commit
  2. Inverter APIs deliver reliable multi-brand 15-min data — connect 10 real accounts, measure completeness
  3. LLM attribution is court-forwardable — blind-check 50 shortfalls vs installer ground-truth, >85% agreement
Kill criteria:
  - Abandon if <6 of 30 installers pre-commit after seeing a live personalized shortfall report
  - Abandon if multi-brand API data is <90% complete or attribution agreement <70% after 50 checks
  - Abandon if a fleet incumbent ships a WhatsApp homeowner-statement + ₹/site residential tier before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the thinnest possible connector to one brand (Growatt) and pull real 15-min data for 3 borrowed customer accounts. Hand-generate the promised-vs-actual "generation statement" for each — no product, just the artifact.
- **Day 3–4:** Cold-WhatsApp/call 30 mid-book installers from the empanelled vendor list in Gujarat/Maharashtra. Offer: "give me one customer's inverter login, I'll send back their real vs promised generation + a statement you can forward." Deliver live for anyone who bites.
- **Day 5:** Ask each engaged installer to pre-commit ₹2,000/mo. **Go if ≥6 of 30 say yes to a pre-commit**; no-go if the personalized artifact generates polite interest but zero money.

Falsifiable outcome: money-down pre-commits, not "looks useful."
