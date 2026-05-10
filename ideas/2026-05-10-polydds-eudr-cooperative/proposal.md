---
title: "PolyDDS — EUDR DDS cockpit for cooperatives"
slug: polydds-eudr-cooperative
date: 2026-05-10
category: Compliance SaaS / Smallholder Cooperatives in Coffee + Cocoa Producing Countries (Vietnam, Côte d'Ivoire, Ghana, Honduras, Colombia, Indonesia)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: PolyDDS turns a cooperative's messy farm-mapping data into clean EUDR DDS submissions and buyer audit packs in one click.
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [EUDR, Smallholder, Cooperative, Geospatial, Offline-first, Multilingual, AI-agent, B2B]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 9
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# PolyDDS — EUDR DDS-pipeline cockpit for smallholder cooperatives

## 1. One-liner

PolyDDS turns a cooperative's messy farm-mapping data into clean EUDR DDS submissions and buyer audit packs in one click.

## 2. Trend signal — why now?

The EU Deforestation Regulation (EUDR) hits the wall in **December 2026** for medium/large operators and **June 2027** for SMEs. Every coffee, cocoa, palm, soy, rubber, cattle and timber shipment into the EU must carry a Due Diligence Statement (DDS) with farm-level GPS polygons (>4ha) or coordinates (<4ha), submitted to the EU's TRACES NT platform. No DDS reference number = customs blocks the shipment.

The May 2026 Commission simplification quietly opened the wedge: **cooperatives can now file ONE consolidated DDS for all member-farms** instead of N individual statements. So the cooperative — not the field officer, not the EU buyer — is the new compliance buyer. And nothing on the market is built for that buyer.

What's there today:
- **Free field apps** (TerraTrac by TechnoServe, AgUnity Co-op Manager, KoboToolbox/ODK) — collect polygons, no DDS export, no JRC cross-check, no audit pack.
- **Enterprise traceability** (Sourcemap, Tracex, Agridence, Koltiva, Meridia) — built for EU roasters/traders/large exporters at $30K–$100K+/yr. Co-ops can't afford it and aren't the user.
- **Cooperative ops manager** in Lam Dong / Daloa / Marcala / Huila is stitching it together with Excel + QGIS + a Python script someone's nephew wrote. The May 2026 ODK forum [thread](https://forum.getodk.org/t/using-odk-to-manage-eudr-compliant-agricultural-supply-chains/53976) literally describes this: "ODK isn't capable yet to resolve [polygon errors]… we developed two scripts for QGIS to clean up geometric errors." This is what every co-op manager in the world is going to be doing the night before harvest.

Three converging signals:

```
Provenance:
  - Signal 1: EUDR enforcement starts Dec 30 2026 (large ops) / Jun 30 2027 (SMEs); Vietnam coffee sector alone has 220K smallholder households in Lam Dong, 90% smallholder in Dak Lak, with ~60% lacking plot records and only ~10% with plot-level data — agtechnavigator.com/Article/2026/02/12/land-legality-and-plot-level-traceability-challenge-vietnams-coffee-sector-under-eudr — 2026-02-12
  - Signal 2: May 2026 Commission simplification permits cooperative consolidated DDS = unit of sale flips from per-farmer to per-cooperative; existing tools were not designed for this — tract.eco/news/eudr-simplification-package-2026 + environment.ec.europa.eu/document/download/a3c5c3a0-232e-43c4-b0b8-1eecb1df45c7_en — 2026-05-08
  - Signal 3: ODK forum confirms cooperatives stitching QGIS scripts to fix self-intersecting polygons + duplicates because field tools (KoboToolbox/ODK/TerraTrac) collect data but cannot validate or submit to TRACES NT (SOAP/XML, "very poorly documented") — forum.getodk.org/t/using-odk-to-manage-eudr-compliant-agricultural-supply-chains/53976 + tanso.de/en/blog/integrating-your-erp-with-the-eudr-traces-api — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The whole EUDR vendor landscape skipped the cooperative. Vendors went up-market (sell to roasters, ADM, Cargill, Olam at six-figure ACV) or down-market (free field-app to look good in donor decks). The cooperative ops manager — the person who has to actually file the DDS that lets the container leave the port — has nothing.

Wedge: PolyDDS doesn't try to replace the field app. It **ingests** GeoJSON / CSV / Excel from whatever the co-op already uses (TerraTrac, AgUnity, KoboToolbox, Farmforce, raw GPX), runs the validation + JRC GFC2020 deforestation cross-check + risk classification, generates the TRACES-ready DDS submission, and produces a buyer-ready audit-pack PDF with embedded evidence. One click. Subscription priced for a co-op, not for Cargill.

What incumbents do badly:
- **TRACES NT integration is brutal** — SOAP envelope, undocumented schema. Co-ops won't write that.
- **Polygon validation** — self-intersections, overlaps, duplicates, decimal precision. Field apps just dump data. Audit will reject.
- **JRC cross-check** is the only EU-defensible deforestation source (Hansen overcounts by up to 347% in Indonesia, gets rejected). Free apps don't run it.
- **Buyer audit pack** — the buyer needs to "double-check everything, and if anything is wrong, the buyer is on the hook." A clean PDF with maps, satellite snapshots, signed land-tenure docs, polygon coverage stats is what the roaster's compliance team will pay the co-op for through premium pricing.

## 4. Target market

- **Primary customer:** Cooperative ops/sustainability/exports manager at a producer cooperative (50–5,000 farmer-members, 100–10,000 ha collective) in EUDR-exposed commodities — coffee, cocoa, rubber, palm, soy. First beachhead: Vietnam coffee (220K Lam Dong households + ~80K Dak Lak), Côte d'Ivoire + Ghana cocoa (2.2M farms mapped, ~3,000 cooperatives), Honduras coffee (135 cooperatives), Indonesia palm/rubber smallholder groups.
- **Why they buy:** Their EU buyer (roaster, trader, importer) just told them that from harvest 2026/27, no DDS = no purchase order. The co-op is staring at the cost of building this in-house (no engineering capacity) vs. paying Cargill-priced enterprise SaaS (no budget) vs. losing access to the EU premium market (existential).
- **Rough TAM reasoning:** ~10K coffee/cocoa/palm/rubber cooperatives globally ship to EU. Even half adopting at $80/mo = $4.8M ARR. Add in-country exporter SMEs (~5K) at $200/mo = +$12M. Add donor/programme licenses (Fairtrade, IDH, GIZ, Solidaridad have line items for this) at $5K-$25K/yr per programme. Realistic addressable: $20–40M ARR at maturity.
- **Why now for them:** Every buyer letter from Q1 2026 forward says "your shipment requires a DDS reference number." It's the one operational thing standing between them and revenue.

## 5. Product sketch (MVP)

- One-click import of farm polygons + farmer rosters from TerraTrac (CSV/GeoJSON), KoboToolbox (XLSForm submissions API), AgUnity export, Excel template, raw GPX
- Polygon validator: auto-fix self-intersections, flag overlaps, dedupe, enforce 6-decimal precision (the exact rules TRACES rejects on)
- JRC GFC2020 deforestation cross-check with red/yellow/green per-plot risk classification + satellite snapshot evidence per flagged plot
- One-click DDS submission to TRACES NT (handles the SOAP/XML envelope) with auto-retry, error-mapping, DDS reference number capture
- Cooperative consolidated DDS (May 2026 grouping) — single submission for N farmer-members
- Buyer audit pack PDF: cooperative profile, polygon coverage map, plot-by-plot evidence appendix, land-tenure document store, JRC date-stamped check log
- Multilingual operator UI (Vietnamese, French, Portuguese, Spanish, Bahasa, English) — co-op manager isn't fluent in EU regulatory English
- Offline-first PWA for the co-op office (rural broadband is unreliable; Sub-Saharan Africa is at ~29% internet penetration)

## 6. AI angle — what's load-bearing

Three places AI does real work, not decoration:

1. **Polygon repair** — vision-LLM + classical geometry (Shapely) to auto-fix the "user drew an overlapping farm boundary on the satellite picture" cases without manual QGIS babysitting.
2. **Land-tenure document parsing** — Vietnamese Sổ Đỏ (red book), Ivorian foncier rural certificates, Ghanaian customary land docs scanned on a phone. LLM-OCR extracts owner name, parcel ID, area, GPS hint and matches it to the polygon. Without this the co-op manager hand-types from PDFs for a week.
3. **Risk explainer in operator's language** — "Plot #4127 of farmer Nguyễn Văn Hùng overlaps with 0.3 ha of forest cleared in 2022 per JRC GFC2020. Recommended: re-survey boundary or exclude." Auto-translated into Vietnamese for the meeting with the farmer.

Strip the AI out and you have a Python script. With it you have a tool a Spanish-speaking ops manager in Marcala uses without an engineering hire.

## 7. Localization angle (if any)

This is fundamentally a localization play wearing a compliance jersey. EUDR is the trigger but the product lives or dies on:
- **Languages:** Vietnamese, French (Côte d'Ivoire, Cameroon), Portuguese (Brazil), Spanish (LatAm), Bahasa, English, Twi.
- **Land-tenure document formats:** Each country has its own. Hard-coded parsers per country = moat.
- **Local payment:** UPI for India pilots, M-Pesa for Kenya/Uganda coffee, Vietnamese bank transfer + USD invoices for international cooperatives. Stripe-only loses 60% of the market.
- **Donor co-funding:** Fairtrade, IDH, GIZ, AFD, Solidaridad will subsidize the first year for their cooperative networks. That's a distribution channel and a revenue line.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Co-op Starter $49/mo (≤300 member farms, single commodity)
  - Co-op Pro $149/mo (≤2,000 member farms, multi-commodity, audit-pack branding)
  - Exporter $499/mo (≤50K farms, multi-cooperative, API, white-label DDS submission)
  - Programme/Donor license $10K–$50K/yr (Fairtrade-style network rollout)
- **ACV:** ~$1,200 average (mix of $588 starter + $1,788 pro + $5,988 exporter + $20K programme licenses)
- **$1M ARR math:** 800 cooperatives at $1,200 avg = $960K. Add 5 programme licenses at $20K = $1.06M. Doable in Year 1 with one Fairtrade-style anchor deal.
- **$5M ARR math:** ~3,000 cooperatives + 30 programme licenses + 200 exporter accounts. Plausible by Year 3 if EUDR enforcement actually bites (the political risk axis).
- **Expansion path:** Per-extra-farm overage above tier cap; payment-on-DDS-volume add-on (à la Stripe per transaction); add EUDR-adjacent regs as they hit (UK Forest Risk Commodities Regulation, US FOREST Act if it ever passes); upsell same buyer base to Scope 3 emissions reporting on the same farm dataset.

## 9. Go-to-market wedge — first 100 customers

Concrete:
1. **Pre-sell via three Fairtrade Producer Networks** (CLAC-LatAm, Fairtrade Africa, NAPP-Asia/Pacific). Each has 100–600 cooperatives. One signed pilot with CLAC = 30 logos overnight. Lead with "we file your DDS for you" not "we're a SaaS." Outreach: warm-intro through Fairtrade certification managers — they're in every cooperative's address book.
2. **Cocoa cooperative bulk capture in Côte d'Ivoire / Ghana via in-country agronomy NGOs** — TechnoServe, Solidaridad, Rainforest Alliance country teams already onboard cooperatives onto TerraTrac. Become the "what happens after TerraTrac" partner. Co-funded pilot with 50 cooperatives in 2 months.
3. **EU buyer push-down** — list of every coffee importer with public sustainability reports (Volcafe, ECOM, Sucafina, Olam Coffee, Neumann, Touton). When their compliance team realizes they have 200 supplier cooperatives that won't be ready by Q3 2026, they'll pay PolyDDS subscriptions ON BEHALF of those cooperatives just to derisk supply. Cold email to head of sustainability + LinkedIn DM.
4. **Vietnam Central Highlands direct** — go to Buon Ma Thuot during harvest season, partner with VICOFA (Vietnam Coffee-Cocoa Association) and MARD's regional monitoring office. 30 in-person cooperative demos, expect 30% close because the deadline is concrete and there's no Vietnamese-language alternative.
5. **Donor RFPs** — IDH, GIZ, AFD, USAID-funded EUDR readiness programmes will issue 2026/2027 vendor RFPs. Pre-position with one reference customer per region; win 3 of 10.

## 10. Build complexity — justification

Medium. Off-the-shelf: Mapbox/MapLibre, Shapely, Google Earth Engine free tier for JRC GFC2020, Postgres+PostGIS, Whisper for voice notes, Claude/GPT for OCR + translation. Custom work: TRACES NT SOAP envelope (one-time pain, two weeks), polygon-repair pipeline, country-specific land-tenure document parsers (one country per fortnight), offline-first PWA with sync. A 2-person team (1 backend/geo, 1 product/full-stack) ships v1 in 12–14 weeks. The country-by-country expansion is the long tail, not the v1.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance facilitator, not regulator. No license needed. |
| Ethical — no harm / dark patterns | ✅ | Helps smallholders keep EU market access; opposite of dark pattern. |
| Market exists (evidence above) | ✅ | EUDR enforcement + 10K+ cooperatives + buyer letters in flight. |
| 1–5 person team can build this | ✅ | 2 builders, 12–14 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Bulk of cost is two engineer-months + map tiles + Earth Engine credits. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire. No DDS = container blocked at EU port = co-op loses harvest revenue. Co-op manager will pay this week if it works. |
| Demand evidence | 15 | 13/15 | Hard signals: regulatory deadline, Fern report on cocoa cooperative cost pain, ODK forum threads, multiple enterprise vendors funded ($30K+/yr means market exists), Fairtrade extending their own deadline because cooperatives can't keep up. |
| Build feasibility | 15 | 11/15 | TRACES SOAP API + country-specific land docs + JRC integration are real engineering, not weekend project. 12–14 wk v1 is honest. |
| Distribution clarity | 15 | 11/15 | Three named warm channels (Fairtrade producer networks, country agronomy NGOs, EU buyer push-down). All have to be worked, not bought with ad spend. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against TerraTrac ($0.30/farm one-shot) + enterprise ($30K+/yr). $49–$499 mid-tier is empty. ACV mix realistic. |
| Time to first revenue | 10 | 8/10 | 60–90 days to first paying co-op via warm intro + pilot. Programme licenses 4–6 months (slower but bigger). |
| Defensibility | 10 | 9/10 | TRACES integration depth + country-by-country land-doc parsers + Fairtrade/donor channel relationships compound. Hard for a US-only SaaS to copy in 6 months. JRC dataset advantage shrinks vs. Hansen if you don't lean into it. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (geospatial + SOAP + offline-first PWA); `domain-expertise-required` (advisor with cooperative operations or EUDR consultancy background non-negotiable; hire a Fairtrade alum or ex-Solidaridad as advisor or part-time co-founder before launch).

### Key assumptions to validate (3–5)

1. **Assumption:** Cooperative ops managers (not EU buyers) will be the buyer of the SaaS subscription. **How to test:** 30 phone interviews across Vietnam, Côte d'Ivoire, Honduras coops in 2 weeks. If the answer is "the buyer pays for our compliance" — pivot to selling to buyers and giving cooperatives free seats.
2. **Assumption:** $49–$499/mo is in budget range. **How to test:** show landing page with pricing to those 30 coops; track who enters card info on a $1 deposit pre-order. Goal: 5 deposits.
3. **Assumption:** Auto-DDS submission via TRACES SOAP API actually works at production volumes for non-EU operators. **How to test:** spend week 1 building a TRACES NT sandbox client and successfully submit one test DDS end-to-end. If blocked, redesign to "guided manual upload" mode and validate that's still valuable enough to charge.
4. **Assumption:** The May 2026 cooperative grouping provision survives political backlash and isn't watered down by Q4 2026 implementing acts. **How to test:** weekly tracking of EU Council + DG ENV statements; EUDR-track Linkedin/policy newsletters; build product to handle both modes.
5. **Assumption:** Donor/programme channel will pay for cooperative seats. **How to test:** book 5 calls with IDH, Fairtrade, Solidaridad, GIZ, AFD program managers in month 1; ask "would you fund 50 of your network coops on this for a year?" Need 1 verbal LOI to validate.

### Risk flags

1. **Regulatory risk (asymmetric):** EUDR delay #3 (it's already been delayed twice) would gut urgency. Mitigation: position as EUDR + UK FRC + ISO 14001 + Scope 3 multi-framework — if EUDR slips, the same data feeds adjacent regulations.
2. **Free competitor expansion:** TerraTrac (TechnoServe) or AgUnity could add DDS submission to their free product. Mitigation: out-execute on the country-specific land-doc parsing + buyer audit pack + TRACES integration; partner with rather than fight free field apps (be the "what happens next" layer).
3. **Donor-funded competitor:** Forest Data Partnership (TechnoServe + WRI + Google + others) is building open-source EUDR infra. Mitigation: build on top of FDP open standards; compete on operator UX + buyer audit pack quality + TRACES API ergonomics, not on raw data plumbing.
4. **Channel access:** Selling cooperatives requires either Fairtrade-style intros, country agronomy NGO partnerships, or in-person sales trips. A pure remote SaaS founder will struggle. Mitigation: hire 1 in-region GTM partner per anchor country (Vietnam first, Côte d'Ivoire second).

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical co-founder (geospatial + SOAP) paired with operator-side co-founder who has Fairtrade/Solidaridad/co-op background. Vietnamese or French language is a force-multiplier.
Time to revenue:        8–12 weeks to first $49 paying coop; 4–6 months to first $20K programme license
Capital to launch:      $25K–$40K (2 engineer-months + map tiles + Earth Engine + 2 in-region trips to Buon Ma Thuot and Daloa)
Top 3 assumptions to validate first:
  1. Co-op ops manager is the actual subscription buyer — 30-call validation sprint with payment-intent pre-orders
  2. TRACES NT SOAP integration is production-viable for a 2-person team — week-1 sandbox spike
  3. At least one programme partner (Fairtrade, IDH, Solidaridad, GIZ) will subsidize cooperative seats — 5 partner calls, target 1 verbal LOI
Kill criteria:
  - Abandon if <3/30 cooperative interviews convert to a $1 paid pre-order in validation week
  - Abandon if EUDR enforcement is delayed to 2028 or beyond before product hits 50 paying cooperatives
  - Abandon if TerraTrac or AgUnity ships native DDS submission + JRC cross-check before our v1 launches and proves comparable quality
  - Abandon if no programme partner signals willingness to co-fund within 90 days
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Build a one-page landing in Vietnamese, French, Spanish + TRACES NT sandbox client spike (does the SOAP submission round-trip work?). Pull list of 30 cooperatives across Vietnam, Côte d'Ivoire, Honduras from public Fairtrade + 4C + Rainforest Alliance directories.
- **Day 2–3:** WhatsApp + email + LinkedIn outreach to all 30. Goal: 15 booked calls.
- **Day 3–5:** Run the 15 calls. Script: walk through current EUDR readiness; ask "what do you do today, what costs you the most time, would you pay $49/mo to remove this." Collect $1 pre-order via Stripe at end of call.
- **Day 5:** Decide go / no-go.
  - **Go signal:** ≥5 of 15 enter card info on $1 pre-order AND TRACES sandbox submission succeeded AND at least 1 mentioned a buyer/donor who'd pay on their behalf.
  - **No-go:** <3 conversions OR TRACES API is genuinely unworkable AND no manual-mode workaround exists OR every co-op says "our buyer handles this."
