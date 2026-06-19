---
title: "PlotProof — EUDR clearance checker for coffee exporters"
slug: eudr-plot-clearance-checker
date: 2026-06-19
category: AgriTech / Origin-Country Coffee, Cocoa & Rubber Exporters (LATAM, Africa, SEA)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Screens every farm-plot polygon and satellite flag that would get your EU shipment rejected, before you ship."
tags:
  vertical: AgriTech
  model: SaaS
  geography: Global
  secondary: [Compliance-driven, AI-agent, SMB, Geospatial, Export]
axes:
  problem: 16
  demand: 10
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PlotProof — EUDR clearance checker for coffee & cocoa exporters

## 1. One-liner

Screens every farm-plot polygon and satellite flag that would get your EU shipment rejected, before you ship.

## 2. Trend signal — why now?

EUDR (EU Deforestation Regulation) enforcement is now real and dated. Large/medium operators must comply by **30 December 2026**; micro/small by **30 June 2027**. From those dates, any coffee, cocoa, rubber, soy, palm, cattle or wood product placed on or exported from the EU must carry a Due Diligence Statement (DDS) with **per-plot geolocation** proving the land wasn't deforested after 31 Dec 2020 — submitted through the EU's TRACES NT portal.

The thing that makes this a *product* and not a feature: **a single bad polygon kills a whole shipment.** Industry guidance is blunt — "one missing field, a single invalid polygon, an incorrect HS code, or an unsupported geolocation format can trigger a TRACES rejection, blocking your shipment at customs." Top rejection causes cited repeatedly: invalid GeoJSON geometry (self-intersections from GPS drift, unclosed rings), wrong projection (data arrives in UTM, EUDR wants WGS84/EPSG:4326), under-precision coordinates (<6 decimals), single points on plots >4 ha, and **satellite over-flagging** — seasonal regrowth in agroforestry systems "looks like loss in one season and regrowth in another, leading to false positives" and unnecessary exclusions.

Two things changed in the last 12 months that make a cheap origin-side tool buildable and saleable:
1. **FAO's Whisp ("What's in that plot?") is a free, open API** that runs the exact convergence-of-evidence deforestation check against the 2020 baseline — the same satellite logic the compliance ecosystem relies on. I don't need to build satellite ML.
2. **The first containers are being held at port as TRACES comes online** (2026). The pain stopped being hypothetical.

Provenance:
  - Signal 1 (Demand): "One missing field, a single invalid polygon… can trigger a TRACES rejection, blocking your shipment at customs"; top rejection reasons = invalid geometry, wrong projection, low precision, single points on large plots — https://tracextech.com/geojson-file-errors/ , https://tracextech.com/eudr-geolocation-requirements/ — 2026-02
  - Signal 2 (Feasibility): FAO Open Foris **Whisp** — free open API + QGIS plugin runs plot-level deforestation-risk check against the EUDR 31-Dec-2020 cut-off — https://www.openforis.org/whisp/ , https://github.com/forestdatapartnership/whisp — 2026
  - Signal 3 (Economic): "Cost of failure includes rejected shipments and fines of up to 4% of EU turnover, making buyers essentially price-insensitive to compliance service costs within reason. The first containers are being held back as systems come online." — https://www.worldcoffeeportal.com/interview/how-eudr-got-lost-in-the-woods/ , https://santocafe.co/en/blogs/news/eudr-coffee-regulation-2026 — 2026-03
  Category: Regulatory arbitrage

## 3. The opportunity

The EUDR software market has stampeded toward the **EU-importer side**: osapiens, TraceX, Koltiva, Trusty, Meridia — heavy, end-to-end traceability + DDS-submission platforms sold on annual licenses to operators and traders. Fairtrade even shipped a **free** geolocation collection tool (Fairtrace) for coffee cooperatives in June 2026. So both "collect the data" and "submit the DDS" are crowded or free.

The gap sits **between** those two: the origin-country exporter has *some* polygon data (their own field team, a cooperative export, the free Fairtrade tool) but **no cheap way to know whether it will actually clear TRACES** — until the buyer's DDS bounces and the container is already on the water or stuck at port. The incumbents that do "shipment-level screening" (Koltiva) bundle it inside enterprise platforms aimed at 19,000-business networks; you don't buy that to check one harvest's worth of plots.

PlotProof is the narrow, un-bundled answer: a **pre-shipment validator**. Drag in your GeoJSON (any format, any projection), and it (a) repairs and flags every geometry/projection/precision error that TRACES will bounce, (b) runs each plot through the free Whisp deforestation check and tells you *which specific plots will be flagged*, and (c) for borderline plots, assembles a ground-truth evidence pack (field photos, dated satellite chips, the seasonal-regrowth argument) so a real shipment isn't killed by a false positive. It's a fire alarm and a fixer, not a traceability suite.

## 4. Target market

- **Primary customer:** Export managers / compliance leads at **origin-country green-coffee and cocoa exporters and producer cooperatives** — Colombia, Honduras, Ethiopia, Uganda, Vietnam, Indonesia, Côte d'Ivoire, Peru. 5–50 staff, shipping containers to EU roasters/importers. Also the **EUDR consultants and certifiers** who prep DDS data on their behalf.
- **Why they buy:** "If my polygons bounce, my container sits, I eat demurrage, and my EU buyer questions whether to keep sourcing from me." Losing EU market access is existential — the EU takes a huge share of these exporters' volume. They will pay to *de-risk the shipment*, not to admire a dashboard.
- **Rough TAM reasoning:** Coffee alone — ~60% of the EU's supply (and the EU buys ~40% of world coffee) comes from smallholders under 5 ha, aggregated by thousands of cooperatives and hundreds of exporters per origin. Add cocoa (Côte d'Ivoire, Ghana, Ecuador) and natural rubber (Indonesia has only ~10,000 ha of 3.2M smallholder ha registered). Even a few thousand exporter/cooperative/consultant accounts paying per-shipment is a healthy sub-$5M business.
- **Why now for them:** Hard deadline Dec 2026 / Jun 2027, first containers already being held, fines up to 4% of EU turnover. The deadline is the alarm clock.

## 5. Product sketch (MVP)

- **Drop-in import:** upload GeoJSON, Shapefile, KML, or CSV of lat/longs in any projection; auto-detect and reproject to WGS84/EPSG:4326.
- **Geometry doctor:** detect and fix self-intersections, unclosed rings, duplicate/rounded vertices, excessive vertices; flag single points used on plots >4 ha (must be polygons) and coordinates under 6-decimal precision.
- **TRACES pre-flight report:** a plain-language pass/fail list — "47 plots clean, 6 will be rejected, here's why and here's the fix" — mirroring the actual rejection rules.
- **Deforestation screen via Whisp:** run every plot against the free FAO Whisp API; show which plots trip the post-2020 deforestation check, with the underlying evidence layer.
- **False-positive defense pack:** for flagged-but-legit plots (seasonal agroforestry regrowth), auto-assemble a ground-truth dossier — dated satellite chips, a regrowth-vs-loss narrative, slots for field photos/farmer attestation.
- **Export-ready output:** a clean, TRACES-aligned GeoJSON plus a PDF clearance summary the exporter hands to their EU buyer for the buyer's DDS.
- **Batch + harvest tracking:** group plots by shipment/lot so each container has its own clearance record.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration:

1. **Messy-geometry repair and reasoning.** Field-collected polygons are a swamp — wrong projections, drifted GPS, points where polygons are required, half a dozen file formats. A vision/geo-reasoning layer that classifies the error, explains it in the exporter's language, and proposes the corrected geometry replaces a GIS specialist most exporters don't have on staff.
2. **False-positive adjudication.** This is the differentiator. A satellite flag is not a verdict. The model fuses multi-season satellite chips + plot context to argue *"this is seasonal canopy regrowth in an agroforestry system, not post-2020 clearing,"* and drafts the defensible evidence narrative. That judgment — distinguishing real risk from non-critical change — is exactly what the industry says still requires expensive human ground-truthing.

Remove the AI and you're left with a raw GeoJSON linter plus a free FAO API — useful, but a script, not a product anyone pays a recurring fee for.

## 7. Localization angle (if any)

This is global-by-design but origin-localized in distribution and language: Spanish (Colombia, Honduras, Peru), Portuguese (Brazil), Amharic/English (Ethiopia), Vietnamese, Bahasa Indonesia, French (Côte d'Ivoire). Pricing must work in origin-country wallets — a per-shipment or per-100-plots fee, not a $20k/yr EU enterprise license. The regulation is European but **the pain and the payer sit in the Global South**, which is precisely why the EU-side incumbents under-serve them. Local distribution rides existing rails: exporter associations, national coffee/cocoa boards, certifier networks (Fairtrade/Rainforest Alliance auditors already in the field).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Usage-based. **$0.10–0.30 per plot screened** (benchmarks against the cited €0.10–0.50/kg green-coffee compliance cost — this is a fraction of that), with prepaid bundles: e.g. **$49 / 250 plots**, **$199 / 1,500 plots**, plus a **$299/mo "harvest season" plan** for active exporters running thousands of plots across many shipments. Consultants/certifiers buy multi-client seats at $499–999/mo.
- **ACV:** A mid-size exporter screens tens of thousands of plots a season → ~$1,500–4,000/yr. A consultant managing 15 exporter clients → ~$8,000–12,000/yr.
- **Math to $1M ARR:** ~400 exporter/cooperative accounts at ~$2,000 ACV + ~30 consultant accounts at ~$8,000 = ~$1.04M.
- **Math to $5M ARR:** Expand commodities (cocoa, rubber, soy), become the de-facto "will this clear?" check across 3–4 origin regions, and add a verified-clearance certificate buyers start *requiring* of suppliers (~2,000 exporter accounts + ~150 consultant/board accounts). Requires winning a reference origin (e.g. Colombian or Honduran coffee) and a board/association endorsement.
- **Expansion path:** plots/season → more commodities → buyer-facing "PlotProof Cleared" badge → become the data layer feeding the buyer's DDS directly via TRACES integration.

## 9. Go-to-market wedge — first 100 customers

- **Certifier/consultant channel (fastest):** EUDR consultants and Fairtrade/Rainforest Alliance auditors already sit between exporters and the rule. Sign 10–15 as resellers/power-users — each carries 10–30 exporter clients. This is the single highest-leverage move.
- **Origin association outreach:** national coffee/cocoa federations (e.g. Colombia's FNC-adjacent exporters, Honduran IHCAFE-linked exporters, Ethiopian Coffee Association, Côte d'Ivoire cocoa cooperatives). Offer a free "shipment readiness audit" webinar + screen the first 500 plots free. Boards have the membership lists; the deadline does the selling.
- **"Free rejection check" lead magnet:** scrape exporter directories (e.g. ICO/origin chamber lists, EU import partner lists); cold-email "Upload one shipment's polygons, we'll show you what TRACES will reject — free." A bounced shipment costs five figures in demurrage; the free preview converts on fear.
- **Cooperatives using free collection tools:** Fairtrace/Whisp give cooperatives *raw* data but no clearance verdict. Meet them where they already collected polygons and sell the "will it pass?" layer on top.
- **LinkedIn + WhatsApp direct** to named export/compliance managers in target origins; this is a job-title-specific audience that's actively panicking about Dec 2026.

If 15 consultants × 15 clients converting at even 30% = ~70 accounts, plus board-webinar inbound, the first 100 is a one-quarter sprint.

## 10. Build complexity — justification

**Medium.** Off-the-shelf does the heavy lifting: FAO Whisp (free) for the deforestation verdict, standard geospatial libraries for projection/geometry repair, an LLM with geo-reasoning for error explanation and false-positive narratives. The custom work is (1) a robust ingest pipeline that swallows every messy field format, (2) faithfully mirroring TRACES' actual rejection rules so the pre-flight is *accurate* (get this wrong and you've sold false confidence — the core risk), and (3) the evidence-pack assembly. A 2-person team ships a credible v1 in ~3–4 months. No custom satellite models, no hardware, no regulatory approval.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping exporters comply with EUDR; uses public/free FAO data. |
| Ethical — no harm / dark patterns | ✅ | Reduces false rejections of legitimate smallholder produce; pro-smallholder. |
| Market exists (evidence above) | ✅ | Hard deadline, shipments held, incumbents charging, 4%-turnover fines. |
| 1–5 person team can build this | ✅ | 2 people, ~3–4 months, off-the-shelf geo + free Whisp API. |
| Launchable with <$50K / ₹40L | ✅ | Mostly free/low-cost APIs; cost is dev time + light cloud. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Existential at the margin — a bounced shipment means demurrage and a shaken EU buyer relationship. But it's acute around the deadline and per-shipment, not literally daily hair-on-fire all year. |
| Demand evidence | 15 | 10/15 | Strong structural signals (deadline, held containers, 4% fines, incumbents charging, Koltiva already doing shipment screening). Weaker on *verbatim origin-exporter complaints* — vendor blogs dominate the search results; couldn't source raw customer quotes. That's the honest gap. |
| Build feasibility | 15 | 11/15 | Free Whisp + standard geo libs make it tractable, but faithfully replicating TRACES rejection logic and earning trust in the false-positive engine is non-trivial. ~3–4 months. |
| Distribution clarity | 15 | 11/15 | Excellent leverage via consultants/certifiers and origin boards; the "free rejection check" magnet is sharp. Conversion math is estimated, not yet tested. |
| Revenue mechanics | 15 | 12/15 | Per-plot pricing is far cheaper than the cited compliance cost and buyers are "price-insensitive within reason." Risk: usage-based revenue is seasonal/spiky. |
| Time to first revenue | 10 | 8/10 | A consultant or a single panicked exporter can pay within weeks of a working pre-flight; deadline urgency compresses the cycle. |
| Defensibility | 10 | 6/10 | Soft moat: accuracy reputation, accumulating false-positive adjudication data, consultant/board relationships, and a buyer-recognized "Cleared" badge. But the raw concept (Whisp + linter) is copyable, and incumbents could un-bundle a cheap tier. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (geospatial + LLM pipeline), `domain-expertise-required` (EUDR/TRACES rules + agronomy of agroforestry false positives). A founder with a geo/GIS or commodity-compliance background, or a strong domain advisor, is the right fit.

### Key assumptions to validate (3–5)

1. **Assumption:** Origin exporters/cooperatives will pay a per-shipment fee for a *clearance verdict* even though collection tools (Fairtrace/Whisp) are free. **How to test:** Take a real exporter's polygon set, run a free pre-flight, show them the would-be-rejected plots, and ask for a paid commitment for the next shipment. 20 conversations across 2 origins.
2. **Assumption:** We can replicate TRACES rejection logic accurately enough that a "clean" verdict is trusted (false confidence is fatal). **How to test:** Submit a sample of "PlotProof-cleared" polygons through an actual DDS and confirm zero geometry/format rejections.
3. **Assumption:** Consultants/certifiers will resell rather than build it themselves. **How to test:** Pitch 10 EUDR consultants; measure reseller LOIs vs. "we'll DIY."
4. **Assumption:** The false-positive defense pack is good enough to actually reverse/avoid an exclusion. **How to test:** Run 30 flagged plots, have an agronomist or competent authority rate the dossier's defensibility.

### Risk flags

1. **Platform/data dependency:** Hard reliance on FAO Whisp and TRACES' published rules. If Whisp changes terms or TRACES alters its logic without notice, accuracy degrades. Mitigate with multiple deforestation-layer fallbacks.
2. **Regulatory timing:** EUDR has already been delayed twice and "simplified." Another delay softens urgency; a different simplification could erode the per-plot pain. Watch the EU's review cycle.
3. **Accuracy liability:** Telling an exporter "you're clear" and then the DDS bounces destroys trust instantly. The product lives or dies on the precision of its rejection-rule mirror — this is the central execution risk.
4. **Incumbent un-bundling:** osapiens/Koltiva/TraceX could add a cheap self-serve screen. Speed, origin-language distribution, and the consultant channel are the defense.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with geospatial/GIS chops + a commodity-export or EUDR-compliance domain advisor
Time to revenue:        6–10 weeks (consultant or single panicked exporter pays first)
Capital to launch:      $5–10K (dev time + light cloud; Whisp is free)
Top 3 assumptions to validate first:
  1. Exporters pay for a clearance VERDICT despite free collection tools — 20 exporter conversations, ask for paid next-shipment commitment
  2. Pre-flight accurately mirrors TRACES rejection — submit "cleared" polygons via a real DDS, confirm zero format rejections
  3. Consultants resell rather than DIY — pitch 10 EUDR consultants, count reseller LOIs
Kill criteria:
  - Abandon if <3 of 20 exporters will pay for a per-shipment clearance verdict
  - Abandon if "PlotProof-cleared" polygons still get rejected by TRACES on format grounds in testing
  - Abandon if EUDR is delayed beyond 2028 or simplified to drop the per-plot geolocation requirement
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a throwaway pre-flight — ingest a real public sample of coffee plot polygons, reproject, run the geometry/precision/single-point checks, and pipe each plot through the free Whisp API. Produce one ugly "X plots will be rejected, here's why" report.
- **Day 3–4:** Take that report to **15–20 origin exporters / cooperatives / EUDR consultants** (Colombia, Honduras, Ethiopia, Vietnam) via LinkedIn + association contacts. Show the real flagged plots; ask the falsifiable question: *"Would you pay $X per shipment for this verdict before you ship?"*
- **Day 5:** Decide. **Go** if ≥5 of ~20 give a concrete paid-commitment signal (prepay, LOI, "invoice me next shipment") **and** the Whisp-based screen agreed with a known reference plot's status. **No-go** if it's all "interesting" and no wallet.

The result is falsifiable: paid commitments, not nods.
