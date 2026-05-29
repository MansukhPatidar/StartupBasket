---
title: "LotProof — DDS preflight for Vietnamese coffee exporters"
slug: vietnam-coffee-eudr-dds
date: 2026-05-29
category: TradeTech / Vietnam Coffee Exporters
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Catches the bad polygon or missing land doc that blocks a Vietnamese coffee container at the EU border."
tags:
  vertical: TradeTech
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, AI-agent, Geographic-arbitrage, SMB, Multilingual]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# LotProof — DDS preflight for Vietnamese coffee exporters

## 1. One-liner

Catches the one bad polygon, missing land doc, or wrong HS code that blocks a Vietnamese coffee container at the EU border — before the exporter files the DDS.

## 2. Trend signal — why now?

EUDR (EU Deforestation Regulation) is now real and dated. From **30 December 2026** for large/medium operators (and **30 June 2027** for small/micro), every coffee shipment into the EU must carry a valid Due Diligence Statement (DDS) submitted to the EU's TRACES NT system, with plot-level geolocation proving the beans weren't grown on land deforested after December 2020. No valid DDS reference number = no legal entry. The EU is **~40% of Vietnam's coffee exports** — the largest single market for a US$8B sector.

The failure mode is brutal and specific: *"One missing field, a single invalid polygon, an incorrect HS code, or an unsupported geolocation format can trigger a TRACES rejection, blocking your shipment at customs."* Geolocation in GeoJSON (single point for plots <4ha, full polygon for plots >4ha) is the part operators fumble most.

And the readiness gap is documented and uneven. As of Q2 2026, GPS coverage across Vietnam's top exporters runs **60–80% at Volcafe Vietnam and Olam ofi but only 30–50% at Intimex Group, Simexco Daklak, and Tin Nghia Corp** — exactly the mid-tier names. Koltiva's Lily Tran: *"The main challenge is plot-level traceability and land legality verification across fragmented smallholder networks. Vietnam's coffee sector is characterised by small, dispersed farms where record-keeping practices are often inconsistent."*

Provenance:
  - Signal 1 (Demand): "One missing field, a single invalid polygon, an incorrect HS code, or an unsupported geolocation format can trigger a TRACES rejection, blocking your shipment at customs"; 30–50% GPS coverage at Intimex/Simexco/Tin Nghia — https://tracextech.com/eu-traces-eudr-compliance-dds-submission/ , https://virfq.com/en/blog/top-vietnamese-coffee-exporters-2026 — 2026-05
  - Signal 2 (Feasibility): 2026 multimodal LLMs read land-use certificates, CoAs, and supplier spreadsheets and validate GeoJSON polygons against TRACES schema — vision+document AI matured in last 12 months — https://www.coolset.com/academy/what-is-an-eudr-due-diligence-statement — 2026-05
  - Signal 3 (Economic): EUDR fully enforced end-2026; EU = ~40% of Vietnam's US$8B coffee exports; incumbents priced for big players (Coolset ~€12k/yr; EUDRReady's €29–79/mo serves downstream traders, not upstream exporters who must self-file DDS) — https://www.koltiva.com/post/winning-in-the-eu-market-how-vietnam-s-us-8b-coffee-sector-can-transition-from-volume-to-verified , https://eudrready.eu/eudr-software-small-business/ — 2026-05
  Category: Regulatory arbitrage (geography-specific)

## 3. The opportunity

The EUDR software market split into two camps, and the middle is empty.

**Camp A — enterprise traceability platforms** (Koltiva, TracexTech, LiveEO, osapiens, OPTEL). They build full farm-to-export data infrastructure: register hundreds of thousands of farmers, run field-agent armies to map polygons, manage risk dashboards. Koltiva has digitally managed 1.26M plots. These are six-figure, multi-month deployments aimed at Olam-scale traders. Overkill and unaffordable for a 50–100k-tonne mid-tier exporter.

**Camp B — downstream trader trackers** (EUDRReady €29–79/mo, Coolset). These serve EU-side operators who only need to *collect and store* DDS reference numbers from their suppliers — a clerical job. They do not help the *upstream operator who must actually file the DDS*.

The Vietnamese exporter sits in the gap. They already have *some* polygon data (30–50% coverage) sitting in messy spreadsheets, scanned land-use right certificates (Giấy chứng nhận quyền sử dụng đất), and supplier WhatsApp threads. What they don't have is a cheap way to (a) assemble that into a TRACES-valid DDS per shipment and (b) **pre-flight it** — catch the invalid polygon, the plot with no land doc, the missing HS code — *before* submission, when a rejection means a container stuck at Rotterdam and a buyer relationship at risk. That preflight gap is what an AI-first tool does 10× cheaper and faster than a consultant or a field-agent platform.

## 4. Target market

- **Primary customer:** Export manager / compliance lead at a **Tier-2 Vietnamese coffee exporter or large cooperative** — 20–300 staff, exporting 5,000–100,000 tonnes/yr to the EU, often Robusta out of Dak Lak / Gia Lai / Lam Dong. Named archetypes: the Intimex/Simexco/Tin Nghia tier and the dozens of smaller exporters below them.
- **Why they buy:** "If even one of my hundreds of supplier plots has a bad polygon, TRACES rejects the DDS and my container doesn't clear EU customs. I cannot afford to find that out at the border." Their current workaround is a junior staffer manually cross-checking spreadsheets, or paying a consultant €2–5k per shipment season.
- **Rough TAM reasoning:** Vietnam has a handful of giants but **dozens to low-hundreds of mid-tier exporters + cooperatives** with direct EU exposure (VICOFA membership runs to the hundreds). Add adjacent EUDR commodities later (rubber, cocoa, wood from Vietnam; coffee from Indonesia/Lao). Few thousand addressable accounts regionally.
- **Why now for them:** Hard deadline Dec 2026 / Jun 2027. The first rejected container in late 2026 will create panic buying of any tool that prevents the second one.

## 5. Product sketch (MVP)

- Upload a shipment lot list (Excel/CSV) + the supplier plot data you already have (coordinates, GeoJSON, scanned land certificates).
- AI reads scanned land-use certificates and supplier docs (incl. Vietnamese) and extracts plot owner, area, and coordinates.
- **Polygon validator:** flags invalid/self-intersecting polygons, points where a >4ha plot needs a polygon, and out-of-range / decimal-swapped coordinates — the formatting errors that TRACES silently rejects.
- **Gap report per shipment:** "Lot DL-2271: 3 of 142 plots have no land-legality doc; 1 polygon invalid; HS code missing." Red/amber/green, ranked by what blocks submission.
- Generates a **TRACES-ready DDS draft** (operator details, HS code, commodity, GeoJSON geolocation) for review before the exporter pastes/submits.
- Deforestation pre-screen: overlays plot coordinates on public global forest-change layers to flag plots at risk *before* the buyer's auditor does.
- WhatsApp/Zalo follow-up prompts in Vietnamese to chase the specific missing plot doc from the specific middleman.

## 6. AI angle — what's load-bearing

Remove the AI and this is a glorified spreadsheet linter. The AI does three jobs no rules engine does cheaply: (1) **reads messy, scanned, Vietnamese-language land certificates and supplier docs** and pulls structured plot data out of them (vision + document understanding); (2) **reconciles fuzzy supplier records** — the same farmer spelled three ways, a plot referenced by hamlet name in one file and coordinates in another — into one plot identity; (3) **explains each failure in plain Vietnamese** so a non-specialist export clerk knows exactly which middleman to call. The deterministic polygon/schema checks are the easy 20%; the document chaos is the 80% that AI collapses from days to minutes.

## 7. Localization angle

This is a localization play by construction. Vietnamese-language document OCR and UI. Zalo as the primary chase/notify channel (WhatsApp secondary). Pricing in VND with a tier that works on a Vietnamese exporter's wallet, not a €12k/yr enterprise budget. Knowledge of Vietnamese land-use-right certificate formats and the Dak Lak/Central Highlands smallholder-via-middleman supply structure is itself part of the moat — generic EU EUDR tools don't read these documents or understand this supply chain. Expansion replicates the same localization for Indonesia (coffee/cocoa/palm) and Côte d'Ivoire/Ghana (cocoa).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered SaaS in VND, framed ~$/mo. Starter ~$149/mo (small cooperative, low shipment volume), Growth ~$399/mo, Pro ~$899/mo (high shipment volume, multi-commodity, priority support). Optional per-shipment "audit pack" add-on.
- **ACV:** ~$4,800 blended (mix skewed to Growth/Pro for active EU exporters).
- **Rough math to $1M ARR:** ~210 exporters/cooperatives × ~$400/mo × 12 = $1.0M. Plausible against a few-hundred-account Vietnam coffee base plus early adjacent commodities.
- **Rough math to $5M ARR:** ~870 accounts at ~$480 ACV — requires expanding beyond Vietnam coffee into Indonesia + cocoa/rubber and moving upmarket to ~$899 Pro. Believable only as a multi-commodity, multi-country EUDR-exporter platform.
- **Expansion path:** more commodities (rubber, cocoa, wood), more origins, then a "buyer view" the EU importer pays for to receive pre-validated DDS packets from their Vietnamese suppliers — a second wallet.

## 9. Go-to-market wedge — first 100 customers

- **VICOFA + provincial co-sell:** the Vietnam Coffee-Cocoa Association and Dak Lak/Lam Dong provincial agriculture departments are running EUDR-readiness programs *right now*. Get on the workshop circuit; offer a free "DDS readiness scan" of one real shipment as the demo. The scan that finds 3 unmapped plots sells itself.
- **Scrape the exporter directory:** VICOFA member list + Vietnam export directories + virfq/K-Agriculture "top exporters" lists give a named, finite target list (low hundreds). Personalized outreach in Vietnamese to the named compliance/export lead, leading with their *own* documented GPS-coverage gap.
- **Buyer-pull:** EU importers/roasters are already consolidating toward suppliers who can prove compliance fast. Partner with 3–5 EU green-coffee importers to *recommend* LotProof to their Vietnamese suppliers — the importer wants clean DDS packets, so they'll push the tool down the chain for free.
- **Freight-forwarder / customs-broker referral:** the brokers who handle Vietnam→EU coffee containers feel the rejection pain directly; small referral fee, warm intro.

## 10. Build complexity — justification

Medium. Off-the-shelf: multimodal LLM for Vietnamese document extraction, standard web stack, public forest-change raster layers, GeoJSON validation libraries. Custom work: the TRACES DDS schema mapping (must be exact and will change as the EU updates it), the polygon/coordinate validation rules, and reliable Vietnamese land-certificate extraction (needs a labeled sample set). A focused pair ships a credible v1 in ~3–4 months; the long pole is getting enough real DDS-rejection examples to make the preflight rules trustworthy.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping exporters comply with EUDR; no legal barrier. |
| Ethical — no harm / dark patterns | ✅ | Reduces fraudulent/accidental non-compliance; pro-transparency. |
| Market exists (evidence above) | ✅ | Hard deadline, named readiness gaps, paid incumbents at the edges. |
| 1–5 person team can build this | ✅ | Medium complexity, off-the-shelf AI + standard stack. |
| Launchable with <$50K / ₹40L | ✅ | Solo/pair + inference costs; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | A rejected container at the EU border is hair-on-fire; quantified, dated, unavoidable for EU-exposed exporters. |
| Demand evidence | 15 | 12/15 | Strong indirect signals (named coverage gaps, paid incumbents, hard deadline) but I have no verbatim "I'd pay for this" quote from a Vietnamese exporter yet. |
| Build feasibility | 15 | 11/15 | Doable in 3–4 months; TRACES schema mapping + Vietnamese doc extraction are the real engineering. |
| Distribution clarity | 15 | 11/15 | Finite named list + VICOFA/buyer co-sell is concrete, but reaching the right person inside a Vietnamese exporter takes local feet. |
| Revenue mechanics | 15 | 11/15 | Clear pricing and ACV; $1M reachable, $5M needs multi-commodity/multi-country expansion. |
| Time to first revenue | 10 | 7/10 | Deadline-driven urgency helps; but exporter sales cycles and trust-building push first paid past 4 weeks. |
| Defensibility | 10 | 5/10 | Moat is local doc/supply-chain knowledge + workflow lock-in + accumulating rejection-pattern data; an incumbent could bolt on a preflight, and the regulation could simplify. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` (EUDR/TRACES + Vietnamese export ops) · `sales-heavy` (relationship-driven, on-the-ground SEA B2B). A solo technical founder needs a Vietnam-based commercial/domain co-founder or advisor.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-tier Vietnamese exporters will pay ~$400/mo for preflight + DDS assembly rather than absorb it into a junior staffer. **How to test:** 20 structured interviews with VICOFA-member export/compliance leads; ask what a rejected container costs them and what they'd pay to prevent it.
2. **Assumption:** The painful, frequent task is *pre-submission validation*, not the upstream polygon collection (which incumbents/field agents already do). **How to test:** shadow 3 exporters through one real DDS submission; log where time and errors actually occur.
3. **Assumption:** AI can extract plot data from Vietnamese land-use certificates reliably enough to trust. **How to test:** collect 100 real scanned certificates, measure extraction accuracy, set a human-review threshold.
4. **Assumption:** EU buyers will actively push the tool down to their Vietnamese suppliers. **How to test:** pitch 5 EU green-coffee importers on a free "clean DDS packet" referral.

### Risk flags

1. **Regulatory risk:** The EU keeps delaying and *simplifying* EUDR (the 2026/27 dates are already a postponement). A big simplification — or country "no-risk" benchmarking that removes geolocation burden for Vietnam — could shrink the pain. Highest-impact risk.
2. **Incumbent risk:** Koltiva/TracexTech already touch these exporters and could add a cheap preflight module; their data-collection footprint is a head start. Win by being the focused, affordable, Vietnamese-language tool the enterprise platforms don't bother to build.
3. **Platform dependency:** Tied to the TRACES NT schema and EU forest-data layers; both can change and force rework.
4. **Distribution friction:** Selling into Vietnamese exporters is relationship- and trust-heavy; without local presence, the cycle stretches.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Vietnam-based domain/commercial co-founder (EUDR + coffee export)
Time to revenue:        8–12 weeks (deadline-driven urgency, but trust-led B2B sales)
Capital to launch:      ₹3–6 lakh / $4–7K (inference + travel for VICOFA workshops)
Top 3 assumptions to validate first:
  1. Exporters pay ~$400/mo to prevent a rejection — 20 VICOFA-member interviews
  2. The hot task is preflight/validation, not collection — shadow 3 real DDS submissions
  3. Vietnamese land-certificate extraction is reliable enough — 100-doc accuracy test
Kill criteria:
  - Abandon if <8 of 25 interviewed exporters say they'd pay before the deadline
  - Abandon if the EU simplifies EUDR to remove plot-level geolocation for Vietnam coffee
  - Abandon if an incumbent ships an affordable Vietnamese-language DDS preflight before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the VICOFA member list + top-exporter directories into a named target list. Draft a Vietnamese outreach message leading with the published 30–50% GPS-coverage gap for the mid-tier names.
- **Day 3–4:** Book and run 8–10 calls with export/compliance leads. Two questions that decide it: "What does one rejected EU container cost you?" and "Would you pay ~$400/mo for a tool that catches the bad plot before you submit?" Collect 3–5 real scanned land certificates to gut-check extraction.
- **Day 5:** Go/no-go. **Go only if ≥8 of the interviewed exporters confirm the rejection cost is material AND at least 5 say they'd pay before the deadline.** Anything softer = VALIDATE longer or kill.
