---
title: "PlotProof — EUDR clearance prover for cocoa exporters"
slug: eudr-exporter-dds-packet
date: 2026-05-18
category: Compliance / Origin-Country Agri-Exporters
complexity: Medium
score: 71
verdict: GO
confidence: Medium
oneLiner: "Turns a cooperative's messy plot data into the audit-ready DDS bundle the EU importer demands before the shipment is rejected."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [AgriTech, Compliance-driven, Offline-first, SMB, AI-agent, EUDR]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [domain-expertise-required, operations-heavy]
featured: false
---

# PlotProof — EUDR clearance prover for origin-country coffee & cocoa exporters

## 1. One-liner

Turns a cooperative's messy plot data into the audit-ready DDS bundle the EU importer demands before the shipment is rejected.

## 2. Trend signal — why now?

The EU Deforestation Regulation (EUDR) is no longer a someday problem. After the December 2025 targeted revision, the deadline is fixed: **30 December 2026** for large/medium operators, **30 June 2027** for small/micro. From those dates, coffee, cocoa, rubber, soy, palm, wood and cattle can only enter the EU with a valid Due Diligence Statement (DDS) carrying plot-level geolocation and proof the land is legal and deforestation-free.

The origin-country data gap is real and measured, not hypothetical:

- Vietnam: "Nearly 60 per cent of smallholders surveyed did not maintain consistent harvest records, while only around 10 per cent kept plot-level data." Exporters "lacking plot-level verification could face challenges in maintaining or expanding EU contracts." (agtechnavigator, 2026-02-12)
- Ivory Coast: "Only 48% of Ivory Coast's 2024 cocoa exports can be traced back to the farming cooperatives that grew the beans." (CNBC Africa, 2026)
- "Incomplete or incorrect location data is one of the top reasons Due Diligence Statements (DDS) are rejected"; non-compliant exporters face "quiet exclusion from EU supply chains through rejected orders, lost contracts, and buyer disengagement." (tracextech, 2026)

Money is already moving — but on the wrong side. osapiens reports "700+ industry leaders" on its EUDR platform; IntegrityNext and Carbmee are funded and selling AI plot-verification. Every one of them sells to the **EU importer**, in English, integrated to SAP, at importer prices. The cooperative in Dak Lak or the exporter in Abidjan who actually has to *produce* the data has no affordable tool built for them.

Provenance:
  - Signal 1: Vietnam coffee — 60% of smallholders keep no harvest records, 10% plot-level; exporters risk losing EU contracts — https://www.agtechnavigator.com/Article/2026/02/12/land-legality-and-plot-level-traceability-challenge-vietnams-coffee-sector-under-eudr/ — 2026-02-12
  - Signal 2: Ivory Coast cocoa only 48% traceable to cooperative as EUDR looms — https://www.cnbcafrica.com/2026/ivory-coast-cocoa-traceability-rates-fail-to-improve-as-eu-anti-deforestation-law-looms — 2026-01
  - Signal 3: Incomplete location data is a top DDS rejection cause; funded incumbents (osapiens 700+ customers) all sell importer-side — https://tracextech.com/eudr-compliance/ , https://osapiens.com/solutions/eudr/ — 2026-03
  Category: Regulatory arbitrage

## 3. The opportunity

Every EUDR vendor sells the EU side of the river. They onboard the German roaster or the Belgian chocolatier, hand them a dashboard, and tell them to "collect verified data from your supply base." The supply base is a cooperative aggregating 1,200 farmers in Dak Lak or 4,000 cocoa plots in Ghana. That cooperative is itself a regulated operator (an MSPO with direct obligations) — and it gets a spreadsheet template and a deadline, not software.

The incumbents do badly, specifically:
- **Wrong buyer, wrong price.** €€€/year ESG platforms priced for EU enterprises. An origin exporter on thin margins won't and can't pay that.
- **Wrong assumptions.** They assume clean ERP data, reliable connectivity, English-literate users. Origin reality: paper ledgers, intermittent 3G, Vietnamese/French/Akan-speaking field agents on ₹8,000 Androids.
- **They skip the hard part.** Capturing a GPS polygon is now free (TechnoServe ships an open-source Android app; Mergin Maps, Farmforce exist). The unsolved pain isn't the polygon — it's **land-legality documents, reconciling fragmented and contradictory records, and assembling the per-lot DDS bundle that survives the importer's audit.** That is manual, lawyerly, repeated every shipment, and nobody has automated it for the origin operator.

PlotProof is the origin exporter's clearance layer: ingest whatever data exists (free-app exports, spreadsheets, photos of paper land docs), find the plots that will get the shipment rejected, fix them, and emit the importer-ready DDS packet.

## 4. Target market

- **Primary customer:** Export/processing companies and producer cooperatives in origin countries that ship coffee or cocoa into the EU — 1,000–10,000 smallholder plots in their supply base, $5M–$80M annual export revenue, a 2–10 person sustainability/compliance team. Beachhead: Vietnamese robusta exporters (Dak Lak/Gia Lai) and Ivorian/Ghanaian cocoa cooperatives.
- **Why they buy:** "If our DDS gets rejected the container sits at Antwerp and the buyer walks. We have the polygons from the NGO app but we can't prove half these plots are legally held and we're rebuilding the bundle by hand for every lot." Their pain is a rejected shipment and a lost multi-year EU contract — measured in hundreds of thousands of dollars, not a subscription fee.
- **Rough TAM reasoning:** EU imports coffee from ~25 origin countries and cocoa from ~15. Vietnam alone has hundreds of licensed coffee exporters; Ivory Coast + Ghana have hundreds of cooperatives and dozens of major exporters. Add rubber, soy, palm and the addressable set is several thousand origin operators that *must* produce a DDS chain. Capturing 300–600 of them at $6–15K ACV is a $2–9M ARR business.
- **Why now for them:** The deadline stopped moving in December 2025. Importers are already running 2026 contract renewals contingent on demonstrated DDS capability. This is the budget-unlock quarter: exporters who used to deflect with "we'll deal with it later" now have EU buyers writing compliance clauses into contracts.

## 5. Product sketch (MVP)

- **Import anything:** GeoJSON/CSV exports from the free TechnoServe/Farmforce apps, exporter spreadsheets, and phone photos of paper land-tenure documents and farmer ledgers.
- **Gap finder:** a per-plot readiness board — which plots are missing a polygon, missing a land-legality document, failing the satellite deforestation check, or have coordinates that don't resolve to land.
- **Land-legality extraction:** AI reads photographed land-use certificates / customary-tenure attestations and structures owner, plot, area, validity — flags expired or mismatched documents.
- **Satellite cross-check:** each plot run against public forest-change data (Global Forest Watch / Sentinel-derived) with a pass/flag and the cutoff-date evidence attached.
- **Lot builder:** map a shipment lot to its contributing plots; block the lot if any contributing plot is unresolved (the mixing/segregation failure that gets DDS rejected).
- **DDS packet export:** generate the structured DDS payload + the supporting evidence dossier in the format the importer and EU TRACES expect, ready to hand up the chain.
- **Field-agent mode:** offline-first capture so an agent in a no-signal village fills the gaps PlotProof flagged, syncs later.
- **Multilingual:** Vietnamese, French, Portuguese, Bahasa, English at launch — UI and document extraction.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into yet another spreadsheet. The load-bearing work is **unstructured-to-structured at origin scale**: reading thousands of photographed land documents in mixed languages and handwriting, reconciling a farmer's paper ledger against the cooperative's roster against the polygon file, and reasoning about *why* a given plot will fail an importer audit (expired tenure doc vs. polygon over forest vs. unresolved coordinate). That judgment — "this lot is 96% clean but plot 412's land cert lapsed in 2024, pull it or the DDS bounces" — is the product. It's the difference between a $50 mapping app and a $10K clearance system.

## 7. Localization angle

This *is* the localization play — that's the entire wedge. The incumbents are unlocalized by construction (built for EU importers). PlotProof wins precisely on the origin-country quirks:
- **Language:** document extraction and UI in Vietnamese, French (West Africa), Portuguese (Brazil/Angola), Bahasa — not a translation layer, the parsing has to work on local certificate formats.
- **Connectivity:** offline-first field mode is mandatory, not optional (29% internet access in Sub-Saharan Africa cited industry-wide).
- **Pricing:** denominated and tiered for origin wallets — a per-DDS / per-season model an exporter expenses against a shipment, not an EU-enterprise annual seat license.
- **Local document reality:** customary land tenure, cooperative attestations, government plot registries that differ per country — the legality engine is country-packs, and that depth is the moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** tiered by supply-base size. Cooperative/small exporter $400–600/mo (up to ~2,000 plots); mid exporter $1,000–1,800/mo; plus a per-DDS-bundle fee ($30–80) at peak shipping season. Land-legality country-pack add-ons.
- **ACV:** $6,000–15,000 blended (subscription + seasonal DDS volume).
- **Rough math to $1M ARR:** ~120 customers × ~$8,500 ACV ≈ $1.02M.
- **Rough math to $5M ARR:** ~450 customers × ~$11,000 ACV ≈ $5M — requires expanding past coffee/cocoa into rubber + palm and adding 3–4 more origin-country legality packs (Indonesia, Brazil, Côte d'Ivoire, Ghana, Vietnam).
- **Expansion path:** more commodities per exporter, more plots as supply base grows, per-DDS volume rises every harvest, importer-side "verify my supplier's packet" upsell (a paid read-only seat for the EU buyer — flips the channel).

## 9. Go-to-market wedge — first 100 customers

- **Importer referral, reversed.** EU importers are *desperate* for their origin suppliers to be compliant — a non-compliant supplier is the importer's problem too. Approach 15–20 mid-size EU coffee/cocoa importers, offer their supplier list a co-branded onboarding ("your buyer wants you EUDR-ready by Q3"). The importer does the selling for us. This is the single strongest channel — the buyer applies the pressure, we supply the tool.
- **NGO / development-program piggyback.** TechnoServe, IDH, Rainforest Alliance, GIZ run EUDR-readiness programs for exact target cooperatives and ship free capture apps. We are the *next step after* their app (capture → clear). Partner as the DDS-assembly layer; 3 program partnerships = hundreds of pre-qualified cooperatives.
- **Origin-country exporter associations.** Vietnam Coffee-Cocoa Association (VICOFA), Ivorian Conseil du Café-Cacao networks, Ghana COCOBOD licensed-buyer lists. Concrete: 200+ named Vietnamese licensed coffee exporters — sponsored workshop + per-DDS pilot at one harvest.
- **Rejected-shipment ambulance.** Monitor and outreach exporters who publicly hit DDS rejections / EU contract trouble (trade press, LinkedIn, association forums) — they buy this week, not next quarter.

## 10. Build complexity — justification

Medium. Off-the-shelf: document/vision LLMs for certificate extraction, public satellite/forest-change APIs, standard web + offline-sync mobile, DDS/TRACES output is a documented schema. Custom work that earns the "Medium": per-country land-legality logic packs (real domain depth, the moat), reliable offline field sync, and the reconciliation engine across contradictory data sources. A 2–3 person team with one agri-supply-chain/EUDR domain expert ships a single-commodity, single-country (Vietnam robusta) v1 in ~4–5 months; each additional country pack is weeks, not a rebuild.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance-enabling tool; helps operators meet EUDR. No legal barrier. |
| Ethical — no harm / dark patterns | ✅ | Helps smallholder supply chains keep EU market access; pro-transparency. |
| Market exists (evidence above) | ✅ | Hard deadline, measured data gaps, funded incumbents (importer-side only). |
| 1–5 person team can build this | ✅ | 2–3 people + domain advisor, ~4–5 months to first-country v1. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs; main cost is the domain expert's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Rejected shipment = lost multi-year EU contract worth six figures. Hair-on-fire for exporters with EU buyers, but felt per-harvest/per-shipment, not literally daily. |
| Demand evidence | 15 | 12/15 | Measured data gaps (Vietnam 10% plot-level, Ivory Coast 48% traceable), documented DDS rejections, funded incumbents prove spend — but spend is currently flowing importer-side; origin willingness-to-pay is inferred, not yet observed. |
| Build feasibility | 15 | 10/15 | Doable in ~4–5 months but the per-country legality packs and offline reconciliation are real engineering + domain work, not a weekend API wrapper. |
| Distribution clarity | 15 | 11/15 | Importer-pressure and NGO-piggyback channels are concrete and high-leverage, but require partnership cycles; not a 2-week cold-email sprint. |
| Revenue mechanics | 15 | 11/15 | Pricing tied to a six-figure pain so willingness exists; risk is origin-country budget cycles and FX, and per-DDS volume assumptions. |
| Time to first revenue | 10 | 7/10 | Deadline urgency pulls deals forward; first paid pilot realistic in 8–12 weeks of launch via an importer's supplier list. |
| Defensibility | 10 | 4/10 | Country legality packs + importer relationships compound over ~12 months, but free capture apps and well-funded incumbents could push downstream. Execution + focus moat, not structural. |
| **Total** | **100** | **71/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `operations-heavy`

You need someone who genuinely understands EUDR mechanics and origin-country agri supply chains (cooperative structure, land tenure in West Africa / SE Asia, how a DDS actually gets rejected). Without that advisor this becomes a generic data tool that loses to free apps.

### Key assumptions to validate (3–5)

1. **Assumption:** Origin exporters/cooperatives — not just EU importers — will pay $6–15K/yr for this. **How to test:** 20 structured interviews with Vietnamese coffee exporters + Ivorian/Ghanaian cooperatives; get 3 to sign a paid pilot LOI before building beyond a prototype.
2. **Assumption:** The bottleneck is land-legality + bundle assembly, not polygon capture (which free apps already solve). **How to test:** Sit with 5 exporters' current DDS workflow; measure where the manual hours actually go per shipment.
3. **Assumption:** EU importers will actively push their supplier list onto our tool. **How to test:** Pitch 10 mid-size EU importers; do ≥3 agree to co-brand onboarding to their origin suppliers?
4. **Assumption:** AI extraction is reliable enough on photographed local land documents in VN/FR. **How to test:** Collect 200 real sample documents per country; measure field-level extraction accuracy against the per-DDS rejection bar.

### Risk flags

1. **Regulatory risk:** EUDR has been delayed twice already. A further postponement or carve-out (e.g. low-risk-country simplified declaration expanded) softens urgency and slows deals. The Dec 2025 revision *added* simplifications for small/micro operators.
2. **Platform / incumbent dependency:** Free NGO capture apps and funded importer-side platforms (osapiens, IntegrityNext, Carbmee) can extend downstream into origin assembly and bundle the capability. First-mover + country-pack depth is the only defense.
3. **Channel dependency:** The strongest GTM (importer pushes suppliers) means the importer partially controls the relationship — they could mandate their own chosen platform instead.
4. **Operations intensity:** Origin-country sales, FX, fragmented buyers, slow association cycles — this is operationally heavy, not a frictionless self-serve SaaS.

## 14. Structured verdict

```
Score:                  71/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + an EUDR / origin agri-supply-chain domain advisor
Time to revenue:        8–12 weeks to first paid pilot (deadline-driven)
Capital to launch:      ₹15–30 lakh ($18–35K) — mostly domain expert + field validation travel
Top 3 assumptions to validate first:
  1. Origin operators (not just EU importers) pay $6–15K/yr — 20 interviews + 3 paid pilot LOIs
  2. Real pain is legality + bundle assembly, not polygon capture — shadow 5 exporter workflows
  3. EU importers will push suppliers onto the tool — pitch 10, need ≥3 co-brand commitments
Kill criteria:
  - Abandon if <3 of 20 interviewed origin operators will commit a paid pilot
  - Abandon if EUDR is delayed >12 months again or origin-operator obligation is materially waived
  - Abandon if a funded incumbent ships an origin-side, locally-priced DDS-assembly product before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the named target list — 30 Vietnamese licensed coffee exporters (VICOFA roster) + 15 Ivorian/Ghanaian cocoa cooperatives. Pull 8 mid-size EU importers known to source from them.
- **Day 3–4:** Run 12–15 calls. Two questions only: (a) walk me through your last DDS, where did the hours and the rejections actually go? (b) if a tool fixed exactly that for ~$X/shipment, would you pilot it this harvest — and would your EU buyer co-fund it? Separately ask 5 EU importers if they'll push their supplier list onto a co-branded tool.
- **Day 5:** Go/no-go. **Go only if:** ≥4 origin operators name land-legality/bundle-assembly (not polygon capture) as the real pain AND ≥3 will sign a paid pilot LOI AND ≥2 EU importers commit to supplier-list co-branding. Anything less = the pain or the channel isn't where the thesis says — revisit or PASS.
