---
title: "PlotScreen — polygon defect screen for EU coffee importers"
slug: eudr-polygon-prescreen
date: 2026-08-14
category: AgriTech / EU
complexity: Low
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches the broken farm-plot coordinates in your supplier's file before EU customs holds the container."
tags:
  vertical: AgriTech
  model: SaaS
  geography: EU
  secondary: [SMB, Compliance-driven, AI-agent, Solo-builder, Geospatial]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlotScreen

## 1. One-liner

Catches the broken farm-plot coordinates in your supplier's file before EU customs holds the container.

## 2. Trend signal — why now?

EUDR is live for coffee. Large and medium operators must comply from **30 December 2026**; micro and small enterprises get until **30 June 2027**. That means right now — August 2026 — every EU green-coffee importer is in the four-month window where they discover whether the data their origin suppliers sent them is actually filable.

Three things converged in the last twelve months:

**The data is the bottleneck, and it fails on format, not on deforestation.** Reporting on EUDR rejections is consistent: missing or invalid geolocation data is the leading cause of DDS rejection, and the failure modes are mundane geometry problems — self-intersecting polygons, overlapping plots, unclosed shapes, invalid coordinates, missing plot IDs linking the GeoJSON back to a specific farmer and batch. A single error means the DDS fails. A container arriving in Rotterdam or Hamburg with an incomplete or missing DDS is held at customs.

**Liability sits with the importer, who did not collect the data.** Operators bear full legal liability even if a supplier's data fails. The importer is the first placer on the EU market, so full operator obligations apply — but the polygons were drawn by a cooperative field agent 8,000 km away on someone else's phone. The person holding the risk is not the person who created the defect.

**The free help is gated and the paid help is priced for enterprises.** Fairtrade launched Plot Insights in June 2026 giving cooperatives polygon quality feedback and deforestation analysis via Satelligence — but it is for **Fairtrade-certified producer organizations only**, with buyer access only in later phases. Meanwhile the SME tool market splits badly: cheap tools (EUDRReady, €29–€79/mo) scan supplier PDFs to extract DDS reference numbers; serious geospatial tools are enterprise-priced, with Coolset at roughly €12,000/year — explicitly described as not appropriate for a small coffee roaster. Nobody screens polygon quality at a small importer's price point.

Harry Marshall, founder of OpenAtlas, named the structural problem directly: *"The main concern is fragmentation. If the legislation formally requires only part of the supply chain to comply, data consistency breaks down."* And: *"The larger companies will still need full traceability to comply, and that requirement will cascade down."*

Héctor González, Head of Quality and Sustainability at Xorxios, confirmed where the weight lands: *"The main responsibility shifts to the importers placing green coffee on the EU market."*

The scale of the underlying mess is not disputed. Koltiva, writing on procurement-grade polygon quality, notes that traceability programs contain *"inaccurate boundaries, overlapping plots, duplicate records, misplaced coordinates, and inconsistent mapping methodologies,"* and that *"much of this raw data struggles under satellite verification and regulatory audits"* — against a base of roughly 25 million coffee farmers, 80% of them smallholders on plots often under two hectares.

```
Provenance:
  - Signal 1 (Demand): Invalid geolocation is the leading cause of DDS rejection; self-intersecting/overlapping/unclosed polygons and missing plot IDs fail TRACES validation; one error holds the container — https://tracextech.com/geojson-file-errors/ + https://tracextech.com/due-diligence-statement-for-eudr/ — observed 2026-08-14
  - Signal 2 (Feasibility/Economic): Fairtrade's free Plot Insights polygon-QA tool launched June 2026 but is restricted to Fairtrade-certified cooperatives, with buyer access only in later phases — https://dailycoffeenews.com/2026/06/16/fairtrade-launches-free-eudr-geolocation-tool-for-coffee-cooperatives/ — observed 2026-08-14
  - Signal 3 (Economic): SME EUDR tooling is barbelled — €29–79/mo tools only scan PDFs for DDS reference numbers, while geospatial-capable tools run ~€12,000/yr and are "not appropriate for a small coffee roaster" — https://eudrready.eu/eudr-software-small-business/ — observed 2026-08-14
  - Signal 4 (Liability): Operators bear full legal liability even if a supplier's data fails; first placer on EU market carries full obligations even as an SME — https://tracextech.com/eudr-compliance-for-upstream-operators/ — observed 2026-08-14
  Category: Regulatory arbitrage
```

## 3. The opportunity

Everyone in EUDR tooling is selling either **collection** (map the farms) or **submission** (file the DDS). The expensive middle step — *is this file actually going to survive validation?* — is unserved for anyone who isn't an enterprise.

That gap exists because of who each vendor sells to. Koltiva, Satelligence, TraceX and Fairtrade all sell upstream, to cooperatives and certifiers, because that's where the polygons are drawn. Osapiens and Coolset sell downstream to operators with sustainability teams and budgets. The small EU importer — 3 to 40 people, buying containers from a dozen origins — is upstream of nobody and too small for the enterprise vendors. They receive a GeoJSON or a spreadsheet of coordinates over email from an exporter, and they have no way to know if it's good until TRACES tells them it isn't.

The specific 10× is this: a geometry validator plus a plot-to-batch reconciliation check runs in seconds and costs almost nothing to operate. What it replaces is either (a) nothing — importer submits and prays — or (b) a consultant charging day rates to eyeball files, or (c) a €12K/year platform bought entirely for one feature. The regulation manufactures the demand and sets a hard deadline; the technical work is ordinary computational geometry, not a research problem.

Critically, this is a *pre-submission* product. It sits before TRACES, not inside it. That avoids integration dependency on a government system and avoids the regulated activity of filing on someone's behalf.

## 4. Target market

- **Primary customer:** Green coffee importers and importing roasters in the EU — Germany, Netherlands, Belgium, Italy, Spain, Nordics. 3–40 employees, importing 5–150 containers/year, sourcing from 5–30 origin suppliers. The buyer is the owner, the quality/sustainability lead, or the ops manager who was handed "the EUDR thing."
- **Why they buy:** Because the liability is theirs and the data isn't. In their words, the problem is a German roaster buying Colombian beans needing precise farm GPS coordinates — not "Colombia" or "Antioquia" but the actual plot — from a cooperative that doesn't have digital farm records, leaving the roaster backtracking supply chain records they have never seen. They buy to avoid a held container, which costs demurrage, delayed roasting schedules, and an angry downstream customer.
- **Rough TAM reasoning:** The EU imports coffee through several thousand registered green coffee importers and importing roasters; Germany, Italy, Belgium and the Netherlands alone host the bulk of them. Add cocoa importers, who face identical geometry requirements and the same deadline, and the addressable set of small EU operators handling plot-level data is comfortably in the low tens of thousands. Capturing 600 of them at €200/mo is a €1.4M business. This idea does not need a large share of anything.
- **Why now for them:** The December 2026 deadline is four months out and the June 2027 SME deadline is the wave behind it. Importers are receiving their first real polygon files from origin *this season*. The pain is arriving on a schedule, not a hope.

## 5. Product sketch (MVP)

- **Drop-in file screen** — upload the GeoJSON, KML, CSV or spreadsheet of coordinates your exporter emailed you; get a pass/fail report in under a minute.
- **Geometry defect report** — self-intersections, unclosed rings, overlapping plots between farmers, duplicate polygons submitted under two farmer IDs, coordinates outside the declared country, plots implausibly large or small for the declared crop.
- **Plot-to-batch reconciliation** — checks that every plot has a unique ID, that IDs map to the farmers on your contract, and that claimed volume is plausible against total mapped hectares. Volume-implausibility is the check that catches laundered or padded supply.
- **Plain-language supplier callback** — generates a short, specific message to send back to the exporter naming exactly which plot IDs are broken and why, in Spanish, Portuguese, Vietnamese or English. This is the feature that gets the file *fixed*, not just judged.
- **Fix-and-resubmit tracking** — a per-shipment view of which suppliers have clean files and which are still outstanding, so the ops person knows what's blocking which container.
- **Pre-submission evidence pack** — a timestamped record of the checks run and defects resolved, retained for the five-year record-keeping obligation. This is what you show an auditor to demonstrate you exercised due diligence on supplier data.
- **Deforestation cross-check (v1.5)** — flag plots intersecting known post-2020 forest-loss tiles from public satellite datasets, as a risk indicator rather than a legal determination.

## 6. AI angle — what's load-bearing

Honest answer: **the geometry validation is not AI, and shouldn't be.** Topology checks are deterministic. Pretending otherwise would be the "chatbot sticker" failure. If a claim about a polygon can be computed exactly, computing it exactly is the correct product decision.

AI is load-bearing in two narrower places:

**Ingest normalisation.** The killer operational reality is that supplier data does not arrive as clean GeoJSON. It arrives as a WhatsApp-forwarded spreadsheet with coordinates in three different formats, decimal-comma versus decimal-point, DMS mixed with decimal degrees, farmer names in inconsistent transliteration, headers in Spanish or Vietnamese, and lat/long silently swapped. Parsing that mess into structured plots is exactly what LLMs are now reliable at and what rules-based parsers have always failed at. Without this, the product is a developer tool that importers can't use; with it, the product accepts whatever the exporter sends.

**Supplier callback drafting.** Turning "plot 44 self-intersects, plots 12 and 19 overlap by 0.4ha" into a courteous, specific, correctly-localised message an exporter will act on rather than ignore. Tone matters here — these are long-standing trade relationships and the importer does not want to sound like they're accusing a cooperative of fraud.

Remove the AI and the product still technically exists, but it only serves customers who can already produce clean GeoJSON — which is precisely the enterprise segment already served. The AI is what makes it usable by the messy small-importer segment that is the entire opportunity.

## 7. Localization angle

This is EU-first by regulation, but the localization that matters points *outward* to origin:

- **Supplier-facing output in Spanish, Portuguese, Vietnamese, Bahasa and Amharic** — the defect callback is read by an exporter or cooperative agronomist at origin, not by the importer. Getting this right is the difference between a fixed file and a shrug.
- **EU-side interface in German and Italian** — Germany and Italy hold a large share of small importing roasters, and the German mid-market in particular does not buy English-only compliance tooling.
- **Pricing in EUR with SEPA direct debit**, invoiced annually with a proper VAT invoice. Small EU importers expect an invoice, not a credit-card receipt.
- **No India/LatAm consumer angle** — the payer is European. Origin-side users touch the product for free, as recipients of callbacks.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €149/mo Starter (up to 10 suppliers, 25 file screens/mo), €299/mo Standard (unlimited suppliers, 150 screens, multi-user, evidence pack export), €599/mo Trader (multi-entity, cocoa + coffee, API, priority support). Annual billing at 10 months' price.
- **ACV:** ~€2,800 blended.
- **Math to $1M ARR:** ~330 customers at €2,800. Against a base of low tens of thousands of small EU operators facing a hard deadline, that is a low-single-digit-percent penetration.
- **Math to $5M ARR:** ~1,300 customers plus expansion into cocoa, rubber, palm and soy importers — identical geometry requirements, identical deadline, zero product rework beyond crop-specific plausibility thresholds. Realistically this also requires landing 20–30 mid-size traders on Trader tier and a partner channel through origin exporters.
- **Expansion path:** Seats → additional commodities → additional legal entities → the evidence-pack/audit-retention tier, which grows in value every year the record-keeping obligation accumulates. Natural upsell to an annual "audit readiness review."

The margin structure is friendly: geometry validation is CPU-cheap, LLM calls happen once per file at ingest, and satellite tiles come from public datasets. Gross margin should sit above 85% at any scale this business reaches.

## 9. Go-to-market wedge — first 100 customers

- **The free "will my file pass?" screen, seeded where importers already panic.** A no-signup single-file check that returns a real defect report. This is the entire top of funnel — the product demonstrates the problem exists on the customer's own data, which no amount of copy can do. Gate the *fix workflow* and evidence pack, not the diagnosis.
- **Scrape the named list.** EU coffee importers are enumerable in a way most markets aren't: national coffee association member directories (Deutscher Kaffeeverband, Italy's coffee associations, Dutch and Belgian trade bodies), SCA member lists, and exhibitor lists from World of Coffee and the Amsterdam/Milan trade shows. That's a concrete list of a few thousand named companies with named contacts. Personalised outreach naming their origin countries and the specific failure modes common to those origins should clear a 3–5% trial rate — roughly 60–100 trials per 2,000 contacts.
- **Go through origin exporters, not just EU buyers.** A Colombian or Vietnamese exporter serving 30 EU buyers has a strong incentive to send clean files — every rejection is their problem too. Give exporters the screening tool free, branded, so they pre-clean before sending. Each cooperated exporter introduces the product to their whole EU buyer list. This is the highest-leverage channel and the cheapest.
- **Ride the deadline calendar with content that ranks on failure modes.** Not generic "what is EUDR" content — that's saturated. Target the specific searches a panicking ops person makes at 6pm: "GeoJSON self-intersecting polygon EUDR", "TRACES DDS rejected geolocation", "supplier sent coordinates spreadsheet EUDR". Low volume, near-zero competition, extremely high intent.
- **Partner with the customs brokers and freight forwarders** handling coffee into Hamburg, Antwerp and Trieste. They are the ones who eat the phone call when a container is held, and they already have the trust relationship. Referral fee or white-label.

## 10. Build complexity — justification

**Low.** Geometry validation runs on mature open-source geospatial libraries — topology checks, overlap detection and area computation are solved problems, not custom work. Public forest-loss raster data is freely available. The genuinely custom work is the messy-file ingest normaliser and the per-crop plausibility heuristics, both of which are tuning problems rather than research problems. No TRACES integration in v1 (deliberately — it's a pre-submission tool), no hardware, no marketplace, no proprietary dataset required. A competent solo technical founder ships a credible v1 in 6–8 weeks; a pair with a coffee-trade advisor ships a polished one in 10–12.

The hard part of this business is not engineering. It is knowing which defects actually get files rejected in practice — which is a domain-access problem, solved by talking to importers, not by writing more code.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Pre-submission QA tool. Does not file on the customer's behalf, does not certify compliance, makes no legal determination. |
| Ethical — no harm / dark patterns | ✅ | Improves data quality in a regulation designed to reduce deforestation. Origin-side users get the tool free. Must avoid positioning as "how to pass the check" versus "how to be accurate." |
| Market exists (evidence above) | ✅ | Hard deadline, documented rejection causes, funded incumbents at both price extremes, an explicit gap in the middle. |
| 1–5 person team can build this | ✅ | Solo-buildable v1 on off-the-shelf geospatial libraries. |
| Launchable with <$50K / ₹40L | ✅ | Realistically €8–15K: infrastructure, a domain advisor, trade-show attendance. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | A held container is real money and real reputational damage, and liability is explicitly the importer's. Docked because it's periodic (per shipment/season) rather than daily, and some importers will gamble on not being checked. |
| Demand evidence | 15 | 12/15 | Strong: documented rejection causes, hard deadlines, incumbents charging €12K/yr, Fairtrade building the same QA capability and gating it. Docked because I could not source direct verbatim importer complaints about polygon defects specifically — the quotes I have are about burden generally. That's a real gap. |
| Build feasibility | 15 | 13/15 | Standard geospatial libraries plus LLM ingest. Ordinary work. |
| Distribution clarity | 15 | 11/15 | Enumerable named lists and a genuinely clever exporter-side channel. Docked because outreach conversion is unproven and small EU importers are not fast software buyers. |
| Revenue mechanics | 15 | 11/15 | €149–599/mo is well-benchmarked between the €29–79 and €12K poles. Docked on churn risk — see risk flags. |
| Time to first revenue | 10 | 8/10 | Deadline-driven urgency and a self-serve free screen should convert inside 6–8 weeks of launch. |
| Defensibility | 10 | 3/10 | This is the weak axis and I won't dress it up. Geometry validation is copyable in a month. The only real moats are the accumulated defect-pattern library per origin, the exporter relationships, and speed. Execution-only. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Geospatial competence is required but ordinary. Coffee-trade domain access is the scarcer input — a founder without a route to 20 importer conversations in month one will be guessing about which defects matter.

### Key assumptions to validate

1. **Assumption:** Small EU importers are actually receiving defective polygon files at meaningful rates — not clean ones from professionalised exporters. **How to test:** Get 15 importers to run real supplier files through a manual screen. Measure what fraction of files contain at least one blocking defect. This is the make-or-break number.
2. **Assumption:** They'll pay €149–299/mo rather than absorb it into an existing platform or have their broker handle it. **How to test:** Pre-sell annual plans at a launch discount to 10 importers before building the fix workflow. Money, not nods.
3. **Assumption:** The buyer feels the liability personally. **How to test:** In interviews, ask who gets the call when a container is held. If the answer is consistently "our broker" or "our supplier," the wedge is aimed at the wrong wallet and should move to brokers.
4. **Assumption:** Origin exporters will adopt a free screening tool and pull their EU buyers in. **How to test:** Approach 10 exporters in Colombia and Vietnam; see if 3 will run files through it for a season.

### Risk flags

1. **Regulatory risk — high and specific.** EUDR has already been delayed twice and simplified once (the May 2026 grouping provision). Further simplification, another delay, or a de-scoping of geolocation granularity would directly compress this market. The product must be valuable for supply-chain data hygiene even if the regulation softens.
2. **Feature-absorption risk.** This is a feature, not a category. Osapiens or Coolset can add polygon QA to an existing SKU; Fairtrade can open Plot Insights to non-certified cooperatives and to buyers — they have already stated buyer access is coming in later phases. That is the single most likely way this business dies.
3. **Churn / seasonality.** Coffee importing is seasonal and compliance spend is deadline-shaped. Genuine risk that customers subscribe for the December 2026 and June 2027 crunches and cancel after. Annual contracts and the accumulating five-year evidence archive are the countermeasures.
4. **Wrong-wallet risk.** If customs brokers or origin exporters emerge as the natural payer, the whole GTM needs re-pointing. Cheap to detect early, expensive to discover late.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder comfortable with geospatial data, paired with
                        a coffee-trade advisor or ex-importer for domain access
Time to revenue:        6–10 weeks from launch
Capital to launch:      €8–15K ($9–17K)
Top 3 assumptions to validate first:
  1. Real defect rate in real supplier files — screen 15 importers' actual data manually
  2. Willingness to pay €149–299/mo — pre-sell 10 annual plans before building the fix workflow
  3. Who owns the liability emotionally — importer, broker, or exporter (determines GTM target)
Kill criteria:
  - Abandon if <25% of real supplier files screened contain a blocking defect
  - Abandon if fewer than 3 of 20 importer interviews say a held or delayed
    container is a top-5 operational worry this season
  - Abandon if Fairtrade opens Plot Insights to non-certified cooperatives AND
    buyers before v1 ships
  - Abandon if EUDR geolocation granularity is materially de-scoped in a further
    simplification round
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing but the screener core — ingest a file, run topology and overlap checks, output a defect list. No UI, no auth, no billing. Simultaneously assemble a list of 150 named small EU importers from coffee association directories and SCA member lists.
- **Day 3–4:** Email those 150 with a single offer: *"Send me one supplier's coordinate file. I'll tell you free, within 24 hours, whether it will pass TRACES validation and exactly what's broken."* No product pitch. Run every file that comes back and return a real report.
- **Day 5:** Count two numbers. **(a)** How many files came in — measures whether this anxiety is live. **(b)** What percentage contained at least one blocking defect — measures whether the problem is real or imagined. Then ask every respondent one question: *"If this ran automatically on every supplier file, would you pay €199/month for it?"*

**Go/no-go:** Proceed only if ≥15 files arrive AND ≥25% contain a blocking defect AND ≥5 respondents say yes to €199/mo. Fewer files means the anxiety isn't live yet. A low defect rate means exporters are already professionalised and the product is solving a problem that has quietly fixed itself — which is the outcome I consider most likely to kill this, and the reason confidence is Medium rather than High.

---

**Sources:**
- [EUDR GeoJSON file errors — common errors and solutions, TraceX](https://tracextech.com/geojson-file-errors/)
- [Due Diligence Statement EUDR: Filing Guide 2026, TraceX](https://tracextech.com/due-diligence-statement-for-eudr/)
- [EUDR Compliance for Upstream Operators, TraceX](https://tracextech.com/eudr-compliance-for-upstream-operators/)
- [Fairtrade Launches Free EUDR Geolocation Tool for Coffee Cooperatives, Daily Coffee News](https://dailycoffeenews.com/2026/06/16/fairtrade-launches-free-eudr-geolocation-tool-for-coffee-cooperatives/)
- [EUDR Software for Small Businesses — Compared 2026, EUDRReady](https://eudrready.eu/eudr-software-small-business/)
- [Polygon Quality Matters: Why Geolocation Accuracy Will Define EUDR-Ready Coffee Procurement, Koltiva](https://www.koltiva.com/post/polygon-quality-matters-why-geolocation-accuracy-will-define-eudr-ready-coffee-procurement)
- [More potential changes to the EUDR: What small roasters need to know, Perfect Daily Grind](https://perfectdailygrind.com/2025/10/more-changes-to-eudr-smaller-coffee-roasters/)
- [EU Deforestation Regulation implementation, European Commission](https://green-forum.ec.europa.eu/nature-and-biodiversity/deforestation-regulation-implementation_en)
- [EUDR Coffee Compliance Guide, Fiegenbaum Solutions](https://www.fiegenbaum.solutions/en/blog/eu-deforestation-regulation-eudr-coffee-industry-challenges-strategies)
