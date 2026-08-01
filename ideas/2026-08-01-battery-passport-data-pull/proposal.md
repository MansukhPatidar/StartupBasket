---
title: "CellPull — supplier data extractor for battery passports"
slug: battery-passport-data-pull
date: 2026-08-01
category: Compliance / EU-SMB — E-Bike, E-Scooter & LEV Brands Importing LMT Batteries Into the EU
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Pulls the Annex XIII values out of your cell supplier's documents, and shows exactly which ones are still missing."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Supply-chain, Solo-builder]
axes:
  problem: 16
  demand: 10
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CellPull

## 1. One-liner

Pulls the Annex XIII values out of your cell supplier's documents, and shows exactly which ones are still missing.

## 2. Trend signal — why now?

Three things happened in the last ninety days that did not exist when anyone last looked at this market.

**The registry went live twelve days ago.** The European Commission announced the Digital Product Passport Registry is live as of [20 July 2026](https://single-market-economy.ec.europa.eu/news/digital-product-passport-registry-now-live-2026-07-20_en). This is no longer a consultation document. There is a running system with an address to submit to.

**The standards landed in May 2026.** Six CEN/CENELEC JTC 24 standards were published and formally cited as harmonised — EN 18216 (data exchange protocols), EN 18219 (unique identifiers), EN 18220 (data carriers), EN 18221 (storage and persistence), EN 18222 (lifecycle APIs), EN 18223 (interoperability). Implementing Regulation EU 2026/1778 specifies registry submission requires a product identifier, passport identifier, economic-operator identifier and a hosting address. The target stopped moving. You can now build against a fixed schema — which you could not do in 2025.

**The deadline is inside the build window.** From **18 February 2027**, EV, LMT and industrial batteries above 2 kWh cannot be placed on the EU market without a battery passport. LMT means light means of transport — e-bikes, e-scooters, e-cargo. That is 200 days from today. A brand that has not started collecting supplier data by autumn will not finish.

And the load falls on the wrong shoulders. Responsibility "sits with the economic operator placing the battery on the EU market — normally the EU-based manufacturer or the importer. That accountability cannot be outsourced." For a European e-bike brand buying packs from Shenzhen, that is *you*, not the factory. VeloPIM puts it plainly for the bike trade: "For e-bike brands, this often means depending on suppliers to provide necessary information, creating a shared accountability challenge."

Meanwhile the supply side is actively resisting. Reporting on Chinese battery manufacturers describes firms refusing to share DPP data such as cell chemistry ratios, fearing IP leakage to EU rivals — and China's Data Security Law and Cybersecurity Law can require security assessments before certain categories of "Important Data" leave the country. The CATL–BMW Lin'gang pilot, held up as the success case, covered roughly 80% of static passport requirements. That is the *best-resourced pair in the industry* falling short of complete.

Crucially: **there are no SME exemptions.** A brand shipping 4,000 e-bikes a year owes the same passport as Pon.

Provenance:
  - Signal 1 (demand): EU battery passport mandatory 18 Feb 2027 for LMT batteries incl. e-bikes, with no SME exemption; responsibility falls on the EU importer who does not hold the data — https://www.minespider.com/blog/eu-battery-passport-what-the-february-2027-deadline-means-after-the-commissions-may-2026-implementation-update and https://www.velopim.com/en-en/articles/battery-passport-bikes — observed 2026-08-01
  - Signal 2 (feasibility): Six CEN/CENELEC JTC 24 standards published and cited May 2026 (EN 18216/18219/18220/18221/18222/18223), Implementing Reg. EU 2026/1778, DPP Registry live 20 July 2026, BatteryPass-Ready test environment with 11 validation scenarios — https://passportcraft.com/insights/eu-battery-passport-test-environment and https://single-market-economy.ec.europa.eu/news/digital-product-passport-registry-now-live-2026-07-20_en — observed 2026-08-01
  - Signal 3 (economic): Funded vendor category exists (Circulor, Minespider, Narravero, Circularise, Spherity) selling enterprise battery-passport platforms at custom/enterprise pricing, while cheap self-service tools (DPP-Tool €9/mo, DPP Hero €49/mo) publish data but collect none of it — https://dpp-tool.com/en/guide/dpp-software-comparison/ — observed 2026-08-01
  Category: Regulatory arbitrage

## 3. The opportunity

The battery passport market has split into two camps and both miss the same customer.

**Enterprise traceability platforms** — Circulor, Minespider, Narravero, Circularise, Spherity — sell multi-tier supply chain traceability to automotive OEMs. Custom pricing, no public rate card, implementation projects measured in quarters. Built for a company with a supply-chain data team. An e-bike brand with 30 employees cannot buy this and would not know what to do with it.

**Cheap passport publishers** — DPP-Tool from €9/mo, DPP Hero from €49/mo for 100 products, PicoNext and Tappr around €520/mo. These are genuinely affordable and they work. But look at what they actually are: **hosting**. You type values into a form, they mint a QR code, a JSON-LD payload and a permanent URL, and they keep it online. A comparison of seven DPP platforms found that none offer built-in supplier questionnaire, data collection or verification features — the platforms assume brands will gather supplier data themselves and enter it.

That assumption is the whole problem. The passport is not the hard part. **Getting the numbers is the hard part.**

The gap is unglamorous and specific: a European brand has a folder of supplier PDFs — cell datasheets, UN38.3 test reports, IEC 62133 certificates, BMS spec sheets, a Declaration of Conformity, WeChat screenshots of a factory engineer answering questions in broken English. Somewhere across those documents sit maybe half the Annex XIII values. The other half nobody has asked for yet. Today a compliance manager reads all of it by hand and re-types it into a spreadsheet, per SKU, per pack variant.

An account of the current state of practice describes the manual process well: procurement teams maintaining supplier lists with batch numbers and origin codes and making phone calls to trace critical minerals — one procurement lead spent twenty minutes on calls during a meeting trying to locate cobalt refinery information despite holding three years of attestation files. The same piece notes the core failure: "What he lacked was a way to know whether any of that data could survive a cross-check."

CellPull sits upstream of the publishers, not against them. Read the documents the brand already has, extract every field that maps to the schema, score each one by how well-evidenced it is, and generate the exact supplier chase list for what's still missing — in the supplier's language, as a form they can fill without understanding EU law.

## 4. Target market

**Primary customer:** Compliance/product manager or operations director at a European e-bike, e-cargo, e-scooter or LEV brand — 10–150 employees, €3M–€80M revenue, importing packs or complete bikes from Chinese or Taiwanese suppliers. Also: the EU importer-of-record and the small consultancies doing CE marking for these brands. Germany, Netherlands, Denmark, France, Italy, Poland first.

**Why they buy:** Because on 18 February 2027 a customs officer or a market surveillance authority can stop their container. Enforcement teeth are real — member state authorities can halt sales of non-compliant goods, impound shipments at the border, or order recalls, with a sanctions regime including fines and immediate market withdrawal. For a brand doing one big spring container, a held shipment is the season.

The pain is not "we want better sustainability data." The pain is: *the factory answers one in four emails, we don't know which fields we're missing, and the deadline is a date not a range.*

**Rough TAM reasoning:** The European e-bike market is highly fragmented — the top five players (Accell, Giant, Pon, Trek, Yamaha) held a combined 28% share in 2025, meaning roughly 72% sits with a long tail of hundreds of smaller brands and importers. Add e-scooter, e-cargo, e-moped and LEV brands, plus the pack assemblers and CE consultancies serving them. Call it 1,500–4,000 addressable EU entities that must produce an LMT passport. I am not going to pretend to a precise count — no association publishes one.

**Why now for them:** 200 days. And the fields they cannot get — carbon footprint (LMT from Aug 2028) and recycled content (LMT from Aug 2033) — are *not* due in Feb 2027. That is good news the market has not internalised: the Feb 2027 LMT scope is narrower than the panic content implies. Telling a brand precisely which fields they owe *this* deadline versus later is itself worth the subscription.

## 5. Product sketch (MVP)

- **Drop the folder in.** Upload cell datasheets, UN38.3 reports, IEC 62133 certificates, DoCs, BMS specs, supplier emails — PDF, image, spreadsheet, any language. No structure required.
- **Field extraction against the live schema.** Every value that maps to a battery passport attribute is pulled out, with a click-through to the page and line it came from. No value appears without its source.
- **Deadline-aware gap list.** A per-SKU view splitting fields into "due 18 Feb 2027", "due Aug 2028", "due 2033" and "not applicable to LMT" — so nobody wastes a month chasing a carbon footprint number they don't owe for two years.
- **Evidence grading.** Each field scored: verified from a test report, asserted in an email, inferred from a datasheet, or absent. The compliance manager sees exactly where they're exposed before an auditor does.
- **Supplier chase packs.** Generates a per-supplier request — in Simplified Chinese, Traditional Chinese, or English — listing only the missing fields, phrased as plain product questions rather than regulation citations, with a fill-in link. Chase reminders track who has responded.
- **Cross-check flags.** Contradictions surfaced automatically: nominal voltage on the datasheet disagreeing with the DoC, a cell manufacturer named differently across two documents, a test report predating the current pack revision.
- **Export to whatever you publish with.** Clean, schema-shaped output to hand to DPP-Tool, DPP Hero, or the brand's own registry submission. We do not want to be the hosting layer.

## 6. AI angle — what's load-bearing

Remove the AI and this product is a spreadsheet template. That's the test and it passes.

The load-bearing work is document understanding across genuinely messy inputs: a scanned Chinese test report, a datasheet where the value sits in a table cell with a merged header, an email thread where the factory engineer gives the cathode chemistry in passing. Extracting ~100 typed attributes from that, with provenance back to the source page, and flagging cross-document contradictions — that is exactly the shape of work that got reliable in the last eighteen months and was not before. Translation of chase packs into supplier-native Chinese is the same engine.

The judgement layer matters as much as the extraction: deciding that a UN38.3 report satisfies one field but only *implies* another is domain reasoning, and it's what separates this from OCR.

What is **not** AI-dependent, and should not be faked: the schema itself, the deadline mapping, and the registry format. Those are hard-coded from the published standards. If the model is unsure about a field, the correct output is "absent" — never a plausible-looking number. In a compliance product a confident wrong value is worse than a blank.

## 7. Localization angle

N/A as a geographic play — this is EU-regulation-specific by construction. But there is a **linguistic** wedge that functions like localization and is probably the sharpest edge in the product.

The data lives in Chinese factories and the obligation lives in European law, and neither side speaks the other's language. The brand's compliance manager cannot phrase the request in terms a Shenzhen production engineer will act on. The factory reads "Annex XIII due diligence attribute" and ignores the email. Generating the chase pack in Simplified Chinese as a short list of concrete product questions — not legal citations — is the difference between a 20% and a 60% response rate. Any competitor building this from a European enterprise-software mindset will ship an English supplier portal and get silence.

Secondary: the compliance UI in German, Dutch and French, since that's where the buyers are.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €149/mo Starter (up to 10 battery SKUs, 1 seat), €399/mo Pro (up to 50 SKUs, supplier chase packs, multi-seat), €899/mo Agency for CE consultancies managing multiple client brands. Annual billing at 10 months.
- **ACV:** ~€4,800 blended.
- **To $1M ARR:** ~210 customers at €4,800. Against 1,500–4,000 addressable EU entities, that's roughly 5–14% penetration. Reachable, not trivial.
- **To $5M ARR:** needs the category to widen beyond LMT — industrial batteries above 2 kWh (energy storage, forklifts, floor cleaners, marine), then the same extract-and-chase engine pointed at the next ESPR wave: textiles (delegated act expected late 2027, ~18 months to comply), steel and aluminium 2027, furniture 2028, ICT 2029. The document-to-schema machine is the asset; battery is the beachhead because it has the earliest hard date.
- **Expansion path:** SKU count, then supplier seats, then the annual re-verification cycle when pack revisions change and the passport must be updated. Note the recurring hook: passports must be kept current, not filed once.

The honest note on pricing: I have not validated €399. It sits deliberately between the €49 publishers and the €520+ mid-market, and it has to clear the "cheaper than the consultant-hours it replaces" bar. That's the first thing to test.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the exhibitor lists.** Eurobike, Taipei Cycle, Micromobility Expo and the CE-marking consultancy directories give a named, enumerable list of European LEV brands and importers — a few thousand companies with websites, product pages and named compliance or ops staff on LinkedIn. This is a real list, not a persona.
- **Lead with a free gap audit, not a demo.** Cold email offering: send us your cell datasheet and DoC for one battery SKU, get back a one-page report showing exactly which Feb 2027 fields you have, which you're missing, and which you don't owe until 2028. That report *is* the product demo and it costs us cents to produce. Deliverable-first outreach converts far better than "book a call" in this segment.
- **Sell through CE consultancies as the channel.** Small firms already doing EN 15194 / EN 17860 conformity work for these brands have the relationships and are about to get asked "what about the battery passport?" by every client. Agency tier at €899/mo with white-label reports. Ten consultancies each bringing eight brands is 80 customers without direct sales.
- **Own the "what do I actually owe in Feb 2027" question.** Nobody has published a clean, correct LMT-specific field-and-date table — the content out there blurs the 2027/2028/2033 phase-in badly. A single authoritative page plus a free field checker is the SEO and credibility asset, and it's genuinely useful.
- **Trade press.** Bike Europe and the micromobility trade outlets are already running battery-passport coverage. A vendor with a concrete free tool and a correct timeline is an easy story for them in the run-up to a deadline.

## 10. Build complexity — justification

**Medium.** The schema, deadline mapping and registry format are published and fixed as of May–July 2026, so there's no research risk — it's careful reading. Document extraction runs on off-the-shelf vision-language APIs. The custom work is the field-mapping and evidence-grading layer, the chase-pack generator with translation, and the cross-document contradiction checks. A technical founder plus a compliance-literate collaborator ships a credible v1 in 10–14 weeks. The pacing risk is domain accuracy, not engineering: getting the LMT field-and-date mapping wrong destroys trust permanently, so that table needs a regulatory consultant's review before launch.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping companies comply with EU 2023/1542. We produce and organise data; the economic operator remains legally responsible, and the product must say so plainly. |
| Ethical — no harm / dark patterns | ✅ | The one real ethical line: never invent a value to fill a gap. "Absent" must be a first-class output. |
| Market exists (evidence above) | ✅ | Funded enterprise vendors, cheap publishers, a hard statutory date, and no SME exemption. |
| 1–5 person team can build this | ✅ | 10–14 weeks for two people. |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, one regulatory review engagement. Well under $25K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Statutory date, border enforcement, liability on a party that doesn't hold the data. Not 18+ because for many brands the pack supplier will eventually hand over a passport-ready file and the pain evaporates — see risk 1. |
| Demand evidence | 15 | 10/15 | Strong regulatory and vendor-market evidence; funded competitors and cheap publishers both exist. Docked because I could not find verbatim complaints from small LEV brands — the trade press carries the substance, the forums are quiet. Unvalidated willingness-to-pay. |
| Build feasibility | 15 | 11/15 | Fixed published schema, off-the-shelf extraction. Domain-accuracy work and multilingual chase packs keep it out of the 13+ band. |
| Distribution clarity | 15 | 12/15 | Enumerable list from trade-show exhibitor directories, a free-audit wedge that doubles as the demo, and a real consultancy channel. Not 13+ because cold email into EU SMB compliance roles is unproven here. |
| Revenue mechanics | 15 | 11/15 | ~210 customers to $1M is credible against the segment size. Price point is a reasoned guess, not benchmarked against a directly comparable product. |
| Time to first revenue | 10 | 8/10 | Deadline-driven urgency and a sub-€500 price mean no procurement cycle. Paid pilots plausible within 6–8 weeks of a working extractor. |
| Defensibility | 10 | 5/10 | Execution and domain accuracy only. The schema is public and extraction is commoditising. Real moat would be accumulated supplier-response data — which factory answers what — and that takes a year to build. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who will read EU 2023/1542 Annex XIII and the JTC 24 standards properly, or partner with a CE-marking consultant who already has. Get the field-date mapping wrong and the product is worse than useless.

### Key assumptions to validate (3–5)

1. **Assumption:** European LEV brands genuinely hold documents containing a meaningful share of the Feb 2027 fields — i.e. there is something to extract. **How to test:** Get real document folders from 10 brands and measure actual extraction coverage. If it's under 30%, this is a chase-and-collect product, not an extraction product, and the value proposition changes shape.
2. **Assumption:** The pack supplier will not simply hand over a complete passport, cutting the brand out of the problem. **How to test:** Interview 15 brands about what their Chinese supplier has already committed to. Watch whether Bosch, Shimano, Bafang and the big pack makers announce passport-ready delivery — that is the single biggest threat.
3. **Assumption:** A compliance manager at a 40-person e-bike brand will pay €399/mo. **How to test:** Free gap audits for 30 brands, then ask for a paid pilot. Measure conversion, not enthusiasm.
4. **Assumption:** Chinese-language chase packs materially lift supplier response rates. **How to test:** A/B the same request in English vs Simplified Chinese across 50 supplier contacts, measure reply rate at 14 days.
5. **Assumption:** CE consultancies will resell rather than build it themselves. **How to test:** Pitch 10 firms on the agency tier and count signed LOIs.

### Risk flags

1. **Disintermediation risk — the big one.** If Bosch, Bafang, Shimano and the major cell suppliers ship passport-ready data files with every pack, the brand's problem largely disappears and so does this product. This is a plausible 2027 outcome for the branded-drive-system tier. Mitigation: target brands using long-tail Chinese suppliers, who will be last to get served, and move early into industrial batteries and the next ESPR waves.
2. **Regulatory timing risk.** The Commission has already shown willingness to extend — the DPP guidelines deadline slipped by a year. If Feb 2027 slips for LMT, urgency collapses and so does the sales cycle. The product survives; the 200-day panic does not.
3. **Deadline-shaped demand.** Compliance products with one hard date can see a rush then a cliff. The counter is that passports must be maintained as pack revisions ship, plus the ESPR pipeline behind it — but that's a thesis, not yet a proven renewal pattern.
4. **Commoditisation.** The €9/mo publishers can bolt on extraction. Their disadvantage is that they're built as hosting and have no supplier-chase workflow — but that's a 6–12 month lead, not a moat.
5. **Accuracy liability.** The economic operator is legally responsible and cannot outsource it. Contracts and UI must make clear we organise and evidence data, not certify it.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a CE-marking / EU product-compliance consultant
Time to revenue:        6–10 weeks (paid pilots ahead of full launch)
Capital to launch:      $15–25K (₹13–21L)
Top 3 assumptions to validate first:
  1. Extraction coverage — pull real document folders from 10 LEV brands, measure what
     share of Feb 2027 fields are actually present. Under 30% and the product changes shape.
  2. Disintermediation — interview 15 brands and watch the major pack suppliers.
     If Bosch/Bafang ship passport-ready data, the beachhead is gone.
  3. Price — 30 free gap audits, then ask for €399/mo pilots. Count conversions.
Kill criteria:
  - Abandon if extraction coverage across 10 real brand document sets is under 30%
    of Feb 2027 fields — there is nothing to extract, only to chase.
  - Abandon if two or more major pack suppliers publicly commit to delivering
    complete LMT passports to their OEM customers before Q1 2027.
  - Abandon if fewer than 4 of 30 free gap audits convert to a paid pilot.
  - Abandon if the Feb 2027 LMT date is formally postponed by 12+ months.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the correct LMT field-and-date table from EU 2023/1542 Annex XIII and the JTC 24 standards — exactly what is owed 18 Feb 2027 versus Aug 2028 versus 2033. Have a CE consultant review it. This artefact is needed regardless of whether the product gets built, and nobody has published it cleanly.
- **Day 3–4:** Collect real battery document folders from 10 European LEV brands, offering a free gap report in exchange. Run manual extraction against the table and measure the coverage number. This is the single most important fact in the whole idea.
- **Day 5:** Send the 10 reports and ask one question: *"If this were automated across all your SKUs and chased your suppliers for the gaps in Chinese, would you pay €399/month?"*

**Go if:** extraction coverage ≥30% of Feb 2027 fields, ≥4 of 10 brands say yes to €399, and no major pack supplier has announced passport-ready delivery. **No-go** on any one of those failing.
