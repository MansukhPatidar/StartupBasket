---
title: "PolyClear — EUDR DDS clearer for EU coffee importers"
slug: eu-coffee-deforestation-dds
date: 2026-05-26
category: Compliance / EU
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Validates farm polygons and files per-shipment DDS to TRACES NT for EU coffee and cocoa importers."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Vertical-SaaS, Importer-side]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 9
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# PolyClear

## 1. One-liner

Validates farm polygons and files per-shipment DDS to TRACES NT for EU coffee and cocoa importers.

## 2. Trend signal — why now?

The EU Deforestation Regulation (EUDR) lands on **30 December 2026** for all "non-SME" operators — meaning every coffee, cocoa, rubber, palm-oil, soy, beef and wood importer with >50 employees OR >€10M turnover. After the Dec 2025 Council/Parliament revision the calendar is finally legally fixed (no more delays expected — Parliament voted Dec 1 2025; Council signed Dec 18 2025). Micro/small primary operators get to June 2027 with simplified declarations; **medium-sized EU importers do not** — they must file a full Due Diligence Statement per shipment via TRACES NT.

The specialty coffee + cocoa segments are the loudest tail of this. The Specialty Coffee Association's own June 2025 white paper called the regulation "an unprecedented challenge" and cited >10% farm-polygon rejection rates from boundary/topology errors in industry pilots. 150,000 20-foot containers of green coffee enter the EU annually; every one needs a DDS reference number before customs clears it. Roasters and importers today track this in spreadsheets and email — the Specialty Coffee Association report is explicit on that.

What sellers actually face on Dec 30 2026:

- DDS submitted before each shipment via TRACES NT API
- GeoJSON polygons (WGS84, EPSG:4326, ≥6 decimal precision) for every plot >4 ha
- Satellite cross-check against the Dec 31 2020 deforestation cutoff
- HS-code mapping per batch (one of the top-3 rejection causes)
- 5-year document retention
- Fines: up to 4% of EU turnover, shipment confiscation, public listing

Existing players are split between (a) enterprise multi-commodity ESG suites at €12K+/yr (osapiens, Coolset, Source Intelligence — Coolset confirmed "from approximately €12,000 per year" entry; osapiens "Easy Start" is sales-call gated) and (b) EUDRReady at €29–79/mo, which targets *downstream traders relying on supplier DDS* and explicitly states TRACES NT submission "is not yet built." The medium specialty importer — who is the *operator* on the hook, not a downstream trader — has no priced, vertical, per-shipment tool.

Direct customer voice:

- Raf Van den Bruel, owner of CoffeeLab Independent (BE): *"Coffee importers are facing high uncertainty and a future where it will be difficult to manage risk — for many reasons."* (Coffee Intelligence, May 2024)
- Van den Bruel & Adeline Vandorpe: *"The potential huge fines of up to 4% of an EU company's coffee trade turnover, where margins are narrow, is a daunting prospect."*
- Héctor González, Head of Quality & Sustainability at Xorxios (ES): *"These exemptions are logical and fair … smaller roasters can focus on traceability and sustainability rather than bureaucracy."* — i.e. small roasters get relief; medium importers like Xorxios don't.
- Harry Marshall, founder of OpenAtlas: *"The larger companies will still need full traceability to comply, and that requirement will cascade down."*
- Vanusia Nogueira, ICO Executive Director: *"There will be no space for non-EUDR compliant coffee in the EU."*
- Specialty Coffee Association (Issue 22, 2025): *"Roasters typically track supplier information on spreadsheets or basic software not built for EUDR's complex reporting. Compliance becomes a resource drain, pulling staff away from core operations."*

```
Provenance:
  - Signal 1 (Demand): SCA Issue 22 + Perfect Daily Grind Oct 2025 — specialty roasters/importers on spreadsheets; >10% polygon rejection rate; smaller roasters explicitly cite tech-platform cost worry — https://sca.coffee/sca-news/25/issue-22/cracking-coffee-regulation — 2025-08
  - Signal 2 (Feasibility): TRACES NT public API + GeoJSON/WGS84 schema fixed; Global Forest Watch / EU JRC GFC2020 deforestation tiles free; OCR/vision models cheap — https://green-forum.ec.europa.eu/deforestation-regulation-implementation/traceability-and-geolocation-commodities-subject-eudr_en — 2026-01
  - Signal 3 (Economic): Coolset entry ~€12K/yr; osapiens Easy Start sales-gated; EUDRReady €29–79/mo for downstream traders (no TRACES submission); Dec 30 2026 enforcement legally fixed Dec 18 2025; 4% EU-turnover fines — https://www.consilium.europa.eu/en/press/press-releases/2025/12/18/deforestation-council-signs-off-targeted-revision-to-simplify-and-postpone-the-regulation/ — 2025-12-18
  Category: Regulatory arbitrage
```

## 3. The opportunity

Vertical, operator-side, per-shipment DDS workflow priced for the 50–250 employee specialty coffee + cocoa importer that has been quietly left in the gap between enterprise ESG suites and trader-side document parsers.

What the incumbents do badly:

- **Coolset / osapiens / Source Intelligence** — multi-commodity ESG suites. Onboarding measured in weeks ("4-week EUDR accelerator program"). €12K+/yr. A specialty coffee importer paying €12K to submit DDS for ~30 containers a year is being upsold ESG capabilities they don't need (CSRD reporting, GHG accounting, etc.).
- **TraceX / Banqu** — upstream supply-chain platforms aimed at origin co-ops, not EU importers. Don't solve the EU-side TRACES filing.
- **EUDRReady** — €29–79/mo but targets downstream *traders* who rely on supplier DDS; **does not submit to TRACES NT**, doesn't validate polygons against satellite deforestation tiles. AI document parser plus a 5-year vault. Different ICP.
- **Freight forwarders + customs brokers** — quoting EUDR surcharges of €30–150 per DDS to manually file. Doesn't scale.
- **Consultants** — €5–15K per audit. One-time, not workflow.

PolyClear sits in the middle: **operator-tier, TRACES-submitting, polygon-validating, satellite-cross-checking, vertical to coffee+cocoa+rubber, €299–699/mo**. The wedge is exactly the volume zone where Coolset is too expensive and EUDRReady is too thin.

## 4. Target market

- **Primary customer:** EU specialty coffee + cocoa **operators** (importers, roaster-importers, single-origin chocolate makers) — 50–250 employees, €10M–€100M annual turnover in EUDR-scope goods, 10–200 containers/yr. Buyer: Operations Manager / QC Lead / Sustainability Lead (the person who already owns supplier compliance).
- **Why they buy:** Dec 30 2026 cliff with 4% turnover fines + shipment confiscation. They have 7 months from today (May 26 2026). Spreadsheets won't survive Q1 2027 audits. Consultants are one-shot. Coolset is overkill. EUDRReady doesn't file. They need a tool that takes their actual workflow (incoming container → supplier sends GeoJSON + cert pack → DDS to TRACES → reference number returned to freight forwarder) and runs it on rails.
- **Rough TAM reasoning:** European Coffee Federation lists ~500 named importers across DE/NL/BE/IT/FR/ES/Nordics; CBI tracks ~120 specialty importers EU-wide. Add ~150 cocoa importers (NL/BE alone handle 20–25% of global cocoa trade per CBI). Add palm-oil refiners and rubber processors (smaller but adjacent). Conservative SAM: ~800 EU operators in the 50–250 employee bracket. At €5K ACV that's a €4M ceiling on coffee+cocoa alone; expand to wood/soy/rubber and the realistic ceiling is €15–25M ARR. Plenty of room for a 1–3 person team to land €1–3M.
- **Why now for them:** Calendar is now legally fixed (Dec 18 2025 Council revision). TRACES NT API matured. Q3 2026 is when freight forwarders start refusing shipments without DDS-reference-ready customers. Buying-window opens June 2026, closes around Q4 2026.

## 5. Product sketch (MVP)

- **Supplier polygon intake** — One-link mobile-friendly form that origin exporters/co-ops fill in. Accepts pasted lat/long, GeoJSON upload, or KML from a smartphone walk; auto-converts to EUDR-compliant GeoJSON polygons.
- **Polygon linter** — Topology check (no self-intersection, no overlaps within a batch), WGS84/EPSG:4326 enforcement, ≥6-decimal precision, 4-ha point-vs-polygon rule, "single point under 0.5 ha" optimization. Catches the >10% rejection causes before TRACES does.
- **Deforestation cross-check** — Overlays each polygon against EU JRC GFC2020 + Global Forest Watch tiles since Dec 31 2020. Returns red/amber/green per plot with screenshot for the audit file.
- **HS-code & batch mapper** — Per shipment: green beans 0901.11 vs roasted 0901.21 vs cocoa beans 1801 etc. Flags the top-3 mis-mappings TRACES rejects on.
- **DDS pack builder + TRACES filer** — Generates the full DDS payload, files via TRACES NT API once goods are at port, captures the reference number, pushes it back to the customer's freight forwarder / customs broker email + Slack.
- **Reference-passthrough** — Handles the "one container splits to 3 buyers" case (DDS reference inherited across child shipments) automatically.
- **5-year audit vault** — Per-shipment PDF pack (DDS submission proof, polygon raster, satellite check, supplier attestation) stored 5+ years with read-only auditor share links.
- **Renewals + change watch** — Notifies when an existing farm boundary changes, when a new sourcing country gets risk-reclassified, when TRACES schema bumps.

## 6. AI angle — what's load-bearing

Three places AI does real work, not decoration:

1. **Supplier doc → polygon extraction.** Co-ops in Brazil/Colombia/Honduras/Ethiopia/Ghana/Côte d'Ivoire send a chaotic mix: PDF certifications, smartphone photos of farm walks, hand-drawn paper maps, KML files from old projects, WhatsApp-shared lat-long pairs. Vision models (Gemini 2.x / Claude 4.7 vision) turn the heterogeneous mess into normalized GeoJSON. Without AI, this is a human-data-entry shop.
2. **Polygon topology & validity reasoning.** Detecting that two adjacent farms overlap by 0.3 ha or that a polygon is self-intersecting near a creek isn't a one-shot rule — it's the kind of "look at this, what's wrong" task LLMs paired with deterministic GIS libs solve well. The output is a plain-language fix instruction sent to the exporter ("Plot 4 corner 7 sits 14m inside Plot 3; redraw or merge").
3. **HS-code + audit narrative draft.** Each DDS needs a written risk-assessment narrative. AI drafts it from the satellite results + supplier cert pack + origin risk tier. The QC lead edits and signs.

Strip AI out and you're a manual GIS shop or a SaaS form. Not a product.

## 7. Localization angle (if any)

EU-first by definition — the regulation is EU. Multilingual supplier-facing forms (Portuguese, Spanish, Vietnamese, French, English, Bahasa, Amharic) are table stakes because the supplier side is global. Customer-facing UI in EN/DE/NL/IT/FR/ES.

Not WhatsApp-first on the customer side (EU specialty importers live in email), but **WhatsApp-first on the supplier side** — sending a co-op manager in Honduras a WhatsApp link to drop GeoJSON beats asking them to log into a portal. That asymmetry is the local insight.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers
  - **Starter** €299/mo — up to 50 DDS submissions/yr, 25 suppliers, polygon validator, TRACES filer
  - **Growth** €599/mo — up to 200 DDS submissions/yr, unlimited suppliers, satellite cross-check, audit vault
  - **Scale** €1,299/mo — unlimited DDS, multi-commodity (coffee + cocoa + rubber + soy + wood), SSO, multi-entity, API
- **ACV target:** €7K (Growth tier average), +€1.5K avg add-ons (extra commodity, audit packs, single-sign-on)
- **Math to $1M ARR:** ~120 paying customers at €7K = €840K + 20% expansion = $1M (€920K). Achievable inside 18 months given a focused 800-operator SAM in coffee+cocoa alone.
- **Math to $5M ARR:** ~600 customers at €8K blended ACV — requires expanding from coffee+cocoa into rubber, soy, palm-oil derivatives, and timber. Realistic ceiling without going enterprise.
- **Expansion path:** (a) more commodities per customer (coffee importer adds cocoa for their own chocolate line), (b) volume tier upgrades, (c) freight-forwarder white-label (forwarders bill end-customers per DDS, white-label the engine), (d) annual audit-pack add-on at €1,200/yr.

## 9. Go-to-market wedge — first 100 customers

1. **European Coffee Federation directory + CBI specialty coffee importer list.** ~250 named EU specialty importers between 50–250 employees. Scrape; enrich Operations Manager / QC Lead via LinkedIn Sales Nav. Personalized 90-second Loom showing their *actual* sourcing country's GFC2020 layer rendered live with a sample polygon validator. Expect 4–6% reply, ~12 demos from a 500-list cold sequence.
2. **SCA World of Coffee (Geneva, June 2026) + Anuga FoodTec.** SCA is the room. €5K booth in the EUDR pavilion. Walk with the demo on an iPad. 200+ qualified conversations in 3 days. Realistic: 8–15 paid pilots out of that single show.
3. **Freight forwarder partnership channel.** 5–8 specialty-coffee-focused forwarders (Geodis, Sevenstar, Bolloré coffee desks). They're already quoting EUDR surcharges — give them a 20% rev-share on white-labeled DDS filings to recommend PolyClear instead of building it themselves. One forwarder relationship can refer 20–50 customers.
4. **Daily Coffee News + Perfect Daily Grind sponsored deep-dive.** Two ~€8K paid editorial slots writing the actual EUDR Dec 30 deadline playbook (sponsored) with a discount code. Each historically delivers 30–60 qualified leads in a B2B niche this concentrated.
5. **Cocoa parallel track.** Same playbook against the Federation of Cocoa Commerce member list (~120 firms; NL/BE-heavy). Add CAOBISCO trade days. Cocoa importers feel the same pain — different show, same product.

If those five channels combined can't push 100 paying customers by Q1 2027, the idea is broken.

## 10. Build complexity — justification

**Medium.** v1 = supplier portal + polygon linter (Turf.js / Shapely deterministic GIS) + GFC2020 tile cross-check (already-public WMS/COG tiles, no model training) + TRACES NT API client + audit-pack PDF generation. No proprietary data, no custom ML. AI is API calls (Gemini Vision / Claude 4.7) for doc parsing.

Realistic timeline: 4 months to a TRACES-submitting MVP with 3 sample customers; 6 months to GA. Risk concentrated in (a) TRACES NT API reopening on schedule (EU has missed dates before) — mitigate by manual-CSV-fallback while API is offline; (b) polygon edge-cases (smallholder aggregations) — mitigate by limiting v1 to plot-level inputs and adding aggregator-mode in v2.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | EUDR is the customer's regulation; we are a compliance tool. No barrier. |
| Ethical — no harm / dark patterns | ✅ | Helps importers ship compliantly; helps origin farmers stay in market. |
| Market exists (evidence above) | ✅ | 800+ EU operators in scope, hard Dec 30 2026 deadline, paying alternatives exist at 2–10× our price. |
| 1–5 person team can build this | ✅ | Off-the-shelf GIS + LLM APIs + EU TRACES API. No moonshot. |
| Launchable with <$50K / ₹40L | ✅ | API costs + dev tooling + one trade-show booth fit inside €40K seed. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire for medium operators after Q3 2026; less urgent for downstream traders (who can rely on supplier DDS). |
| Demand evidence | 15 | 12/15 | SCA white paper, named importer quotes, paid incumbents at 2–10× our price, EUDRReady proves SMB tier exists. Subtract for: the audience doesn't yet *know* they want a vertical tool. |
| Build feasibility | 15 | 10/15 | TRACES API, JRC tiles, Turf/Shapely, OCR APIs — all off-the-shelf. Subtract for TRACES API reliability risk and polygon edge-cases at smallholder aggregations. |
| Distribution clarity | 15 | 12/15 | Named directories, SCA show, freight-forwarder partnerships, two niche trade media outlets. Solid playbook; conversion math depends on Q3 panic. |
| Revenue mechanics | 15 | 11/15 | Pricing 2–10× cheaper than Coolset, 5–10× more capable than EUDRReady. ACV €7K is in the right zone. Subtract for: importer wallets compressed by green-coffee price volatility 2024–26. |
| Time to first revenue | 10 | 8/10 | First paid pilot inside 8 weeks of MVP (importers are pre-paying for relief). Real volume from Q3 2026 onwards. |
| Defensibility | 10 | 9/10 | Once a customer's 5-year audit vault lives in PolyClear, switching cost is concrete. Add: regulatory expertise compounds across schema bumps. Add: freight-forwarder integrations create channel lock-in. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

Domain knowledge is heavy: somebody on the team needs to read the EUDR FAQ updates as they ship (April 2026 FAQ v4 is already out) and know what a coffee co-op's documentation actually looks like. Technical lift is moderate but unforgiving — TRACES NT API rejection ≠ helpful error messages.

### Key assumptions to validate (3–5)

1. **Assumption:** A specialty coffee importer of 80–150 employees will pay €299–599/mo. **How to test:** 30 founder-led discovery calls into the CBI specialty importer list. Ask "What would you pay for a tool that files DDS for you per shipment and passes the reference number to your forwarder?" Look for ≥40% saying €300+/mo without choking.
2. **Assumption:** TRACES NT API will be open to third-party software by Q3 2026. **How to test:** Confirm against the DG ENV technical updates and the JRC TRACES NT release notes; sign up for the API sandbox immediately.
3. **Assumption:** Coffee+cocoa together is a wide-enough vertical to hit €1M ARR before going broader. **How to test:** Validate the ~500 ECF + ~250 CBI + ~120 FCC count by direct list-building in week 1; need ≥600 unique 50–250-employee operators or fold rubber/timber into v1.
4. **Assumption:** Origin-side suppliers (co-ops, exporters) will fill a one-link supplier form on a smartphone in <10 minutes. **How to test:** Show 5 origin contacts in BR/CO/ET/HN/UG the flow over WhatsApp video; measure completion time and confusion points.
5. **Assumption:** Freight forwarders are willing to white-label or recommend rather than build. **How to test:** Three discovery calls with named coffee-desk forwarders in Antwerp/Hamburg/Genoa; ask for terms.

### Risk flags

1. **Regulatory drift:** EUDR has been postponed twice already (June 2025 → June 2026 → Dec 2026). Another delay or a Commission carve-out for medium operators would compress the urgency window. Mitigate by being multi-commodity from day one so a delay just shifts revenue, doesn't kill the product.
2. **Platform dependency on TRACES NT API:** Schema bumps, downtime, or restricted third-party API access could neuter the filing step. Manual CSV upload fallback must always work.
3. **Incumbent down-pricing:** Coolset is well-funded; they could launch a €99/mo "EUDR Lite" overnight. Beat them by being vertical (coffee+cocoa workflow specifics — splits, supplier templates, audit packs) rather than feature-broad.
4. **Origin-side cooperation:** If co-ops don't fill the polygon form, the product breaks at intake. Mitigate by offering a "service mode" where PolyClear's ops team manually onboards the first 3 suppliers per customer.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with EU regulatory / supply-chain advisor (or ex-coffee/cocoa trader); 1 GIS-comfortable engineer; 1 GTM with SCA/CBI network
Time to revenue:        8–12 weeks from MVP to first paid pilot; volume from Q3 2026
Capital to launch:      €30–45K (€15K dev tools + API spend, €10K SCA booth, €10–15K founder runway 4 months)
Top 3 assumptions to validate first:
  1. 30 specialty importer discovery calls → ≥40% verbal €300+/mo willingness
  2. TRACES NT API sandbox access confirmed inside 2 weeks
  3. 5 origin-supplier WhatsApp polygon-form completion tests → median <10 min
Kill criteria:
  - Abandon if <25% of 30 importer discovery calls express paid interest at €300+/mo
  - Abandon if TRACES NT API access is gated to consultancy partners only
  - Abandon if a well-funded competitor (Coolset / osapiens) ships a sub-€500/mo vertical coffee SKU before our MVP
  - Abandon if EUDR enforcement is pushed past December 2027
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull the ECF + CBI + FCC member lists; build a single sheet of 400+ EU operators with 50–250 employees in coffee/cocoa. Enrich Ops/QC Lead emails.
- **Day 2:** Stand up a 1-page landing site explaining the product + €299–599/mo pricing + a 30-second polygon-validator demo (use a real Brazilian Cerrado plot rendered against GFC2020).
- **Day 3–4:** Send 200 personalized cold emails / 50 LinkedIn DMs to Ops Managers at the 50–250-employee coffee importers. Book 12+ discovery calls.
- **Day 5:** Sign up for TRACES NT API sandbox; check whether third-party software access is open or partner-gated. Also: send 5 WhatsApp polygon-form prototype invites to origin supplier contacts (request via SCA/CBI introductions).
- **Day 6–7:** Run as many of the 12 calls as land; verdict on price tolerance + on whether origin supplier completion is realistic.

**Falsifiable go/no-go:** at least 5 of 12 importer calls express paid interest at €300+/mo *and* 3 of 5 origin suppliers complete the polygon form in <15 minutes. Anything less → drop or pivot to a downstream-trader play (where EUDRReady already lives).
