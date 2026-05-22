---
title: "OriginProof — DDS filer for small coffee & cocoa importers"
slug: eudr-importer-dds-filer
date: 2026-05-22
category: Compliance / EU Coffee & Cocoa SME Importers
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "OriginProof chases messy supplier data and packages a TRACES-ready EUDR due diligence statement for small coffee and cocoa importers."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, AI-agent, SMB, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# OriginProof — DDS filer for small coffee & cocoa importers

## 1. One-liner

OriginProof chases messy supplier data and packages a TRACES-ready EUDR due diligence statement for small coffee and cocoa importers.

## 2. Trend signal — why now?

The EU Deforestation Regulation (EUDR) has a hard date. Large and medium operators must comply by **30 December 2026**; SMEs by **30 June 2027**. That clock is now ticking loudly enough that small coffee roasters and cocoa importers can no longer wait it out — a year ago "delay" was a plausible bet, today it isn't.

The compliance market has split into two unserved halves. Enterprise EUDR platforms — osapiens, TraceX, IntegrityNext, Coolset — are built for sustainability teams and direct-farm sourcing. Coolset's entry point is "from approximately €12,000 per year." A reviewer flatly calls that "excessive for small food brands managing a few vendor relationships." osapiens "emphasizes complex multi-tier supply chains, making it overkill for artisans with just a handful of suppliers." The cheap end (EUDRReady, ~€29–79/mo) exists but is a thin form-filler — it doesn't solve the hard part.

And the hard part is well-documented. "Incomplete or incorrect location data is the number one reason Due Diligence Statements are rejected." Industry copy describes the daily reality bluntly: compliance teams are "stuck exporting spreadsheets, chasing supplier documents by email, and manually re-entering data into TRACES right when shipments are on the line." Geolocation arrives in KML, SHP, CSV, GeoJSON — or as a WhatsApp photo of a hand-drawn farm map from a cooperative in Honduras. TRACES wants clean GeoJSON. Somebody has to bridge that gap, and for a 6-person importer that somebody is the founder, on a Sunday.

The May 2026 simplification package actually *helps* this idea: micro and small operators now file a one-off simplified declaration and can use postal codes instead of precise coordinates for some flows. That makes the SME job smaller and more templatable — exactly the shape a focused tool can own.

Provenance:
  - Signal 1 (demand): "Incomplete location data is the #1 reason DDS are rejected"; importers "chasing supplier documents by email, manually re-entering data into TRACES" — https://tracextech.com/eudr-reporting/ — observed 2026-05-22
  - Signal 2 (feasibility): Cheap inference now reliably parses messy multi-format files (KML/SHP/CSV/photos of maps) into normalized GeoJSON; TRACES has an API for DDS submission — https://tracextech.com/eudr-apis/ — observed 2026-05-22
  - Signal 3 (economic): Enterprise EUDR software starts "approximately €12,000 per year," explicitly "excessive for small food brands"; hard EUDR deadlines 30 Dec 2026 / 30 Jun 2027 force spend — https://eudrready.eu/eudr-software-small-business/ — observed 2026-05-22
  Category: Regulatory arbitrage

## 3. The opportunity

Two gaps stacked on top of each other.

**Gap one — price.** The capable EUDR platforms cost €12K+/year and onboard over weeks. A specialty coffee importer doing €2–8M revenue with 5–25 supplier relationships will not pay that, and shouldn't have to.

**Gap two — the actual work.** The cheap tools are forms. They assume you already have clean GeoJSON, validated risk data, and supplier DDS reference numbers sitting in a folder. You don't. The job that eats the importer's time is *upstream of the form*: emailing a cooperative six times to get plot coordinates, receiving a corrupt Excel or a PDF map, figuring out whether the postal-code shortcut applies, and converting all of it into something TRACES won't reject.

OriginProof owns gap two at a gap-one price. It is not a compliance database — it's an agent that runs the supplier-chasing workflow end to end: requests data in the supplier's language, ingests whatever format comes back, normalizes it, runs the deforestation-risk check against the EU's own benchmarking, flags what's missing, and hands the importer a submission-ready DDS plus the supplier reference numbers to retain. The incumbent weakness it exploits is real: enterprise tools assume suppliers cooperate through a portal; in specialty coffee and craft chocolate, suppliers send a WhatsApp message.

## 4. Target market

- **Primary customer:** Owner or operations lead at an EU-based specialty coffee importer/roaster or craft chocolate maker — €1–10M revenue, 3–30 staff, importing green coffee or cocoa from 5–40 supplier relationships (cooperatives, exporters, estates). Germany, Netherlands, Italy, Belgium, France first — the EU's coffee and cocoa trade hubs.
- **Why they buy:** In their words — "tracking coffee beans back to hundreds of small farms scattered across remote hills is overwhelming if you're stuck with spreadsheets and emails." They are not deforestation experts, they have no compliance hire, and a rejected DDS can mean a container stuck at port. They want the regulation to become a checklist somebody else owns.
- **Rough TAM reasoning:** The EU imports ~3M tonnes of coffee a year plus large cocoa volumes; the long tail of importers, roasters, and chocolate makers touching EUDR commodities runs to tens of thousands of small operators across the bloc. Capture a few thousand at €150–400/mo and the $5M ARR math closes. This is a niche too small for the €12K-ACV vendors to chase down — which is the point.
- **Why now for them:** The deadline stopped being theoretical. SMEs that assumed another delay watched the May 2026 package *confirm* dates rather than scrap them. Procurement and roasting decisions for 2027 stock are being made now, and a non-compliant supply line is a 2027 revenue line they can't book.

## 5. Product sketch (MVP)

- **Supplier data requests** — generate and send per-supplier data requests (email + WhatsApp link) in the supplier's language, with a plain-language explainer of exactly what coordinates/documents EUDR needs.
- **Garbage-in ingestion** — accept KML, SHP, CSV, GeoJSON, Excel, PDF maps, or a phone photo of a hand-drawn plot, and extract usable geolocation from it.
- **GeoJSON normalizer** — convert everything into the clean, TRACES-preferred GeoJSON format, with validation against the format errors that get DDS rejected.
- **Risk check** — run each plot against the EU country-benchmarking and deforestation-risk layers, flag standard vs. simplified declaration eligibility (incl. the postal-code shortcut for micro/small operators).
- **Missing-data tracker** — a live "what's still blocking this shipment" view: which suppliers haven't responded, which plots failed validation, what to chase next.
- **DDS assembly** — produce a submission-ready Due Diligence Statement and, where the importer is a trader, organize the upstream DDS reference numbers they're legally required to retain and present.
- **Audit folder** — keep a dated, exportable evidence pack per shipment so an enforcement query can be answered in minutes, not days.

## 6. AI angle — what's load-bearing

Remove the AI and this product collapses into the €79/mo form-filler that already exists. The AI does the work no form can:

- **Format chaos → structure.** A vision-and-document model reads a corrupt Excel, a SHP dump, or a photographed farm sketch and extracts coordinates and plot boundaries. There is no deterministic parser for "photo of a hand-drawn map" — this is the core unlock.
- **Multilingual supplier chasing.** The agent drafts and follows up data requests in Spanish, Portuguese, Vietnamese, Amharic, French — and interprets the messy replies — so a small importer isn't translating cooperative emails by hand.
- **Eligibility reasoning.** Deciding whether a given flow qualifies for the simplified declaration or the postal-code shortcut is a rules-plus-judgment call; the model applies the current regulation text per shipment instead of making the importer learn it.

The deterministic parts — TRACES submission, GeoJSON schema validation — are plumbing. The AI is what turns a week of email tag into a reviewed draft.

## 7. Localization angle (if any)

This is an EU-regulation play, but localization is a live wedge on the *supplier* side. The importer is in Hamburg; the data lives with a cooperative in Ethiopia or Vietnam. Multilingual outreach (Amharic, Vietnamese, Spanish, Portuguese) and WhatsApp-first supplier contact — because that's how smallholder cooperatives actually communicate — are the difference between a 20% and a 70% supplier response rate. Enterprise tools that assume an English-language web portal lose here. On the buyer side, German- and Dutch-language UI plus invoicing in EUR matters for trust with conservative SME owners.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers by supplier-relationship count and shipment volume — Starter €149/mo (up to 10 suppliers), Growth €299/mo (up to 40), Trade €499/mo (40+, multi-commodity). Annual billing standard in EU SME software.
- **ACV:** ~€3,000 blended (€250/mo average).
- **Rough math to $1M ARR:** ~310 customers × €250/mo × 12 ≈ €930K (~$1M). Reachable from the German/Dutch/Italian coffee-importer base alone.
- **Rough math to $5M ARR:** ~1,650 customers, or fewer at higher ACV once cocoa, rubber, and timber SME importers are added and per-shipment overage pricing kicks in. The simplification carve-outs keep the SME job small enough that one tool can serve all seven commodities.
- **Expansion path:** Start single-commodity (coffee), expand to cocoa/timber/rubber within the same account; add per-shipment overage; add a "supplier health" upsell — continuous monitoring of which cooperatives' data is going stale before next season's DDS is due.

## 9. Go-to-market wedge — first 100 customers

- **Roaster and importer directories.** The EU specialty coffee scene is mapped — national roaster associations, SCA (Specialty Coffee Association) member lists, trade-fair exhibitor lists (World of Coffee, Anuga). Scrape ~2,000 small importers/roasters, send a personalized 90-second Loom showing their *actual* likely supplier countries and EUDR exposure. Expect 4–6% reply.
- **Customs brokers and freight forwarders as channel.** Brokers handling green-coffee containers feel EUDR pain directly — a rejected DDS stalls their client's shipment. Partner with 5–10 forwarders in Hamburg/Antwerp/Rotterdam to refer SME clients; revenue share.
- **Trade-fair and association webinars.** Run "EUDR in 45 minutes for small importers" webinars with national coffee/cocoa associations ahead of the June 2027 SME deadline. Deadline-driven compliance topics convert: the audience is self-selected and scared.
- **Content on the exact rejection failure modes.** Rank for "DDS rejected incomplete geolocation" and "EUDR simplified declaration coffee" — narrow, high-intent, low-competition queries the enterprise vendors ignore.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: the document/vision model for parsing files, standard web stack, the TRACES API for submission. Custom work: the GeoJSON normalization-and-validation layer (the regulation has specific format rules and the EU validator is unforgiving), the multilingual supplier-chasing agent with reliable follow-up state, and keeping the eligibility logic current as the Commission tweaks simplification rules. A two-person team — one builder, one with coffee-trade or EU-compliance domain knowledge — ships a credible v1 in 12–16 weeks. Not a 6-week solo project, because getting GeoJSON wrong means rejected filings and dead trust.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps importers comply with EUDR; no regulated activity performed by us. |
| Ethical — no harm / dark patterns | ✅ | Reduces compliance cost for small operators; pro-transparency. |
| Market exists (evidence above) | ✅ | Hard deadlines, funded incumbents, documented SME price gap. |
| 1–5 person team can build this | ✅ | 2-person team, 12–16 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | API + hosting costs only; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard regulatory deadline, rejected DDS stalls containers — real money and a clock. Not 17+ because SME deadline is mid-2027, so urgency is high but not yet hair-on-fire for all. |
| Demand evidence | 15 | 12/15 | Funded incumbents, documented price gap, verbatim industry pain. Slightly short of top band — direct SME-buyer quotes (vs. trade-press) are thinner. |
| Build feasibility | 15 | 10/15 | Medium build; GeoJSON validation and TRACES integration must be exact. Not a 6-week MVP. |
| Distribution clarity | 15 | 11/15 | Named directories, broker channel, deadline-driven webinars. Conversion math is estimated, not yet tested. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked between €79/mo forms and €12K platforms; ACV realistic. Churn after the deadline passes is the open question. |
| Time to first revenue | 10 | 7/10 | Deadline pressure shortens the sales cycle; still needs a built product before pilots. 6–10 weeks post-launch to first paid. |
| Defensibility | 10 | 5/10 | Execution moat plus accumulating supplier-data relationships. Incumbents could move down-market; the SME niche and supplier-side UX are the buffer. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

A builder who can ship the parsing/normalization core, paired with someone who knows the green-coffee or EU-compliance world well enough to get GeoJSON and eligibility rules exactly right. Domain credibility also sells — SME importers buy compliance tools from people who clearly understand the trade.

### Key assumptions to validate (3–5)

1. **Assumption:** Small importers will pay €150–500/mo to offload supplier-chasing and DDS assembly. **How to test:** 25 structured calls with EU coffee/cocoa importers; pre-sell 5 annual pilots before building.
2. **Assumption:** The AI can reliably extract usable geolocation from genuinely messy inputs (photographed maps, corrupt Excel). **How to test:** Collect 50 real supplier files from cooperative contacts and run extraction accuracy against a hand-checked baseline.
3. **Assumption:** Churn won't collapse after a customer files their one-off simplified declaration. **How to test:** Confirm the recurring job — new shipments, new seasons, supplier-data refresh, multi-commodity expansion — is large enough that customers stay.
4. **Assumption:** Customs brokers will refer clients. **How to test:** Sign 2 referral pilots with Hamburg/Antwerp forwarders and measure inbound.

### Risk flags

1. **Regulatory risk:** The Commission keeps amending EUDR — scope, deadlines, simplification rules. A delay deflates urgency; a scope change forces rework. The deadline being repeatedly pushed is the single biggest threat to the sales cycle.
2. **Platform dependency:** Hard reliance on the EU TRACES system and its API; changes there are non-negotiable and uncompensated.
3. **Incumbent down-market move:** A funded EUDR platform could launch a stripped €99/mo SME tier. The defense is supplier-side UX and niche focus, not technology.
4. **Market timing — churn cliff:** Some buyers may treat EUDR as a one-time filing. If the recurring job proves thin, this is a project tool, not a SaaS.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a green-coffee trade or EU-compliance domain expert
Time to revenue:        6–10 weeks after a 12–16 week build; pre-sold pilots can pull revenue earlier
Capital to launch:      ₹8–16 lakh ($10–20K)
Top 3 assumptions to validate first:
  1. SME importers pay €150–500/mo for chasing+assembly — 25 calls, pre-sell 5 annual pilots
  2. AI extracts usable geolocation from messy real-world files — 50-file accuracy test vs. hand-checked baseline
  3. The job is recurring, not one-and-done — confirm season/shipment/multi-commodity volume keeps customers paying
Kill criteria:
  - Abandon if <5 of 25 importer interviews will commit to a paid pilot
  - Abandon if geolocation extraction accuracy on real messy files stays below ~85% after tuning
  - Abandon if the EUDR SME deadline is pushed past 2028, collapsing urgency
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list — 200 small EU coffee/cocoa importers and roasters from SCA member lists and trade-fair exhibitor directories. Draft the personalized outreach.
- **Day 3–4:** Run 25 calls. One question set: how do you collect supplier geolocation today, how many hours did your last DDS cost, would you pay €X/mo to make it disappear. Simultaneously collect 30–50 real supplier data files and run them through an off-the-shelf vision/document model to measure extraction accuracy.
- **Day 5:** Decide go / no-go. **Go** if ≥5 importers verbally commit to a paid pilot **and** extraction accuracy on real files clears ~85%. **No-go** if either fails — the idea depends on both the willingness to pay and the AI actually handling the mess.

The result is falsifiable: pilot commitments are counted, and extraction accuracy is a measured number against a hand-checked baseline — not a vibe.
