---
title: "CellChase — supplier-data chaser for EU battery passports"
slug: battery-passport-supplier-data
date: 2026-07-20
category: Compliance / EU-SMB
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Chases Asian cell suppliers for the carbon and material data small EU battery importers need before February 2027."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Multilingual, AI-agent, Compliance-driven, SMB, Solo-builder, Supply-chain]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 11
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CellChase

## 1. One-liner

Chases Asian cell suppliers for the carbon and material data small EU battery importers need before February 2027.

## 2. Trend signal — why now?

A hard legal deadline with a countdown clock on it. From **18 February 2027**, no EV or LMT battery — that's e-bikes, e-scooters, e-cargo bikes — may be placed on the EU market without a digital battery passport. That is seven months from today. Not a consultation, not a phase-in: a market-access cutoff.

What makes this interesting isn't the deadline, it's *where the work actually sits*. Industry cost analysis puts **data management at 55% of total passport effort**, operational process at 25%, and IT integration at only 20%. Everyone is selling the 20%. The passport-hosting vendors — Circulor, Circularise, T-Systems, Siemens, Minespider — have built platforms that will happily store and serve a passport. None of them will get a Shenzhen cell vendor to email you a site-specific carbon figure, which is the thing actually blocking the small importer.

And the pricing tells you who they're for. T-Systems entry is **€1,499/month** for up to 5,000 passports/year. Circularise custom enterprise starts **€15,000+ annually**. Carbon footprint tooling alone runs **€5,000–€15,000/year**. Meanwhile **over 90% of implementation tasks are fixed costs**, which means the burden falls hardest on exactly the companies least able to carry it — the brand importing 4 battery SKUs, not the OEM shipping 400.

The legal trap: the obligation attaches to *placing on the market*, not manufacturing. Whoever first offers the battery in the EU — typically the European importer — carries it. If the Chinese manufacturer hasn't produced a passport, the importer becomes responsible for creating one. A 12-person e-bike brand in Utrecht is now legally accountable for cathode-material provenance it has never once asked about.

Meanwhile China hit **47% of all EU e-bike imports in Q1**, up from 31% a year earlier and 17% the year before. The supplier base this data has to be extracted *from* is getting more distant and more concentrated at exactly the wrong moment.

Provenance:
  - Signal 1 (demand): Legal obligation lands on EU importer if manufacturer hasn't produced a passport; "first European buyers already ask about passport readiness in tenders" — https://evreporter.com/battery-passport-2027-what-makers-exporting-to-the-eu-actually-have-to-do/ — 2026-07-20
  - Signal 2 (feasibility): Data management = 55% of passport effort; >90% of implementation tasks are fixed costs, disproportionately burdening SMEs — https://www.batterydesign.net/the-cost-of-producing-a-battery-passport/ — 2026-07-20
  - Signal 3 (economic): Incumbent floor pricing — T-Systems €1,499/mo entry, Circularise €15,000+/yr, carbon tooling €5–15K/yr; vendor field includes Circulor, Minespider, Siemens, AVL, BASF — https://www.circularise.com/battery-passport — 2026-07-20
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents solved the wrong half of the problem.

Every battery passport vendor on the market is a *destination* — a place where compliant data goes to live. They assume you have the data. The entire painful part, for a company under 50 people, is that you don't have the data and the people who do are in a different country, a different language, a different timezone, and have zero contractual obligation to help you.

Carbon footprint is "almost always the largest gap." The regulation requires it calculated **per battery model, per manufacturing plant, on site-specific primary data**. You cannot estimate your way out of it with an industry average. That means someone has to go to the cell supplier — and often the supplier's cathode active material supplier behind them — and extract plant-specific energy and material consumption figures, in a form that survives audit. Large cell producers have sustainability teams and connected data rooms. Mid-sized makers "carry the same obligation without such structures."

That is a chasing problem, a translation problem, and a data-normalization problem. It's three problems that AI is genuinely good at and that enterprise platform vendors find beneath them. The gap between "€18K/year platform that assumes you have data" and "nothing" is where a 4-SKU e-bike brand is standing right now with seven months on the clock.

The 10× claim is narrow and defensible: not a better passport platform — a system that turns a 6-month unanswered-email slog into a structured, audit-ready supplier data file in weeks.

## 4. Target market

- **Primary customer:** Compliance/operations lead (often the COO or a product manager wearing the hat) at EU e-bike, e-scooter, e-cargo and light-industrial battery brands and importers. 10–150 employees, €3M–€80M revenue, importing 2–20 battery SKUs from 1–5 Asian cell/pack suppliers. Concentrated in NL, DE, IT, PL, DK.
- **Why they buy:** Their buyers are already asking. Tender questionnaires now include passport readiness, and a "no" loses the account before the regulation even bites. Layered on top: from 18 Feb 2027 a non-compliant battery cannot legally be placed on the market at all. This isn't a fine risk — it's an inventory-becomes-worthless risk.
- **Rough TAM reasoning:** The European e-bike market is ~$22B in 2026, and the top 7 players hold only ~29% — the long tail is the majority of the market. Add e-scooter, e-cargo, light industrial, and stationary >2kWh. A conservative addressable set is 1,500–4,000 EU entities that must produce passports and are too small for a €18K enterprise contract. At €500/mo blended that's a €9M–€24M ceiling — comfortably above a $5M ARR target without needing to win the whole field.
- **Why now for them:** Seven months. Suppliers answer slowly, and industry guidance is explicit that requests sent close to the deadline compete with every other maker asking the same cell vendor for the same figures. The cost of starting in November is not "later" — it's "your supplier is now triaging 200 identical requests and yours is not first."

## 5. Product sketch (MVP)

- **SKU intake** — describe each battery model (chemistry, cells, pack assembler, plant) and get back a gap map: what the regulation demands vs. what you actually hold.
- **Supplier request generator** — produces the exact data request per supplier, in Simplified Chinese / Korean / Japanese / English, citing the specific regulatory article so the request reads as an obligation rather than a favour.
- **Chase sequencing** — schedules and escalates follow-ups, tracks who answered what, and flags the supplier who has gone dark for three weeks. This is the actual product.
- **Response normalizer** — ingests whatever comes back (PDF, WeChat screenshot, badly-merged Excel, scanned mill certificate) and maps it to the regulation's required fields, flagging unit mismatches and implausible values.
- **Audit trail** — timestamped record of every request, reminder, and response, so an importer who genuinely cannot get data from a supplier can evidence due diligence rather than silence.
- **Readiness scorecard** — per-SKU percentage complete, ranked by what's blocking market access, exportable as the one-page answer to a customer's tender questionnaire.
- **Handoff export** — clean structured file that drops into whichever passport host the customer eventually picks. Deliberately not competing with the platforms.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a spreadsheet and a calendar reminder, which is precisely what these companies already fail with.

Three places it does real work. **Multilingual regulatory drafting** — writing a technically precise, correctly-cited data request in Mandarin that a supplier's engineering contact will act on is not a translation task, it's a register-and-framing task, and it's the difference between a reply and silence. **Unstructured response normalization** — supplier answers arrive as photographs of documents, PDFs in inconsistent templates, and spreadsheets with merged cells and mixed units; extracting kgCO2e-per-kWh from that mess and knowing when a figure is implausible is the 55%-of-effort data work, done by a model instead of a consultant. **Gap reasoning** — mapping a specific battery's bill of materials to which regulatory fields are outstanding, and which upstream tier holds the answer.

The chasing workflow is the wrapper. The extraction and drafting are the product.

## 7. Localization angle

This is an EU-regulation play with an Asia-facing surface — the localization is the wedge, not a bolt-on.

The buyer is European and pays in euros. The *counterparty* is in Shenzhen, Ningde, Busan, or Osaka. The product has to be bilingual in an asymmetric way: European compliance vocabulary in, Chinese/Korean/Japanese manufacturing and supply-chain vocabulary out. Generic global SaaS gets this wrong by translating literally and producing requests that read as optional.

Second-order angle worth watching: Indian and Vietnamese battery makers exporting into the EU face the mirror-image version of the same problem, and would buy a supplier-facing version of this to get ahead of European customers' questions rather than react to them. That's an expansion market, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €249/mo (up to 3 SKUs, 2 suppliers) · €599/mo (up to 10 SKUs, unlimited suppliers) · €1,200/mo (unlimited + verification-package prep). Deliberately priced below the €1,499/mo incumbent entry so the buying decision doesn't need board approval.
- **ACV:** ~€6,000 blended.
- **Rough math to $1M ARR:** ~150 customers at €599/mo ≈ €1.08M. 150 companies out of a 1,500–4,000 addressable set is a 4–10% penetration — achievable with direct outreach, not a marketing miracle.
- **Rough math to $5M ARR:** ~700 customers at blended €600/mo, requiring expansion beyond e-mobility into light industrial and stationary storage >2kWh, plus the Asian supplier-side product, plus riding ESPR as it extends passports to textiles and electronics from 2027–2030.
- **Expansion path:** SKU count grows naturally with product lines. Real expansion is regulatory scope creep in the customer's favour — the battery passport is explicitly the *first* Digital Product Passport. Every subsequent ESPR category is the same supplier-chasing motion against a different field list. Land on batteries, expand on everything the EU passports next.

## 9. Go-to-market wedge — first 100 customers

- **Eurostat + trade-show list intersection.** Exhibitor lists from Eurobike and Micromobility Europe are public and enumerate essentially every EU e-mobility brand. Cross-reference against EU customs import records for battery HS codes to identify who is *importing* — i.e. who carries the legal obligation. This produces a named list of a few thousand companies, and the ones importing from China are pre-qualified as having the data-gap problem.
- **The readiness audit as the opener.** For each target, run a free per-SKU gap analysis using their public product specs and send it cold: "here are the 9 fields the regulation demands for your 4 battery models, here are the 6 you almost certainly can't answer today, here's how many days until Feb 18." A specific, correct, slightly alarming document beats any demo video. Expect 8–12% reply rates on regulatory deadline outreach with a personalized artifact attached — and every reply is a qualified conversation.
- **The tender-question backdoor.** Large European retailers and fleet buyers are already putting passport readiness into tenders. Get the questionnaire language from 2–3 buyers, then approach every supplier who just received it. These companies have a deadline *and* a specific deal at risk, which collapses the sales cycle.
- **Trade associations and consultants.** CONEBI, national bicycle industry bodies, and the small compliance consultancies already advising these brands. Consultants are the highest-leverage channel: they have the relationships, they don't want to do supplier-chasing manually, and they'll white-label or refer. Revenue-share with 5 consultancies is worth more than 500 cold emails.
- **Deadline content that ranks.** "Battery passport" search interest climbs monotonically to February 2027 and the current results are all vendor marketing. A genuinely useful public field-by-field checklist and countdown captures buyers actively searching in panic mode. Slower channel, but the compounding one.

## 10. Build complexity — justification

**Medium.** Everything is off-the-shelf: document extraction, multilingual generation, email sequencing, a normal web stack. There's no novel infrastructure and no model training. The honest complexity is domain encoding — you must correctly represent what Regulation (EU) 2023/1542 demands per battery category, and get the carbon footprint methodology right per the delegated acts. Get that wrong and you're confidently generating incomplete requests, which is worse than no product.

Realistic estimate: 10–14 weeks to a v1 a design partner can use, for a technical founder paired with (or paying for) a compliance advisor. The regulatory research is a meaningful chunk of it and cannot be skipped.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps companies comply with regulation; no regulated activity performed. Not offering notified-body verification. |
| Ethical — no harm / dark patterns | ✅ | Improves supply-chain transparency. Aligned with the regulation's intent. |
| Market exists (evidence above) | ✅ | Hard Feb 2027 deadline, priced incumbents, documented SME cost burden. |
| 1–5 person team can build this | ✅ | Technical founder + compliance advisor. |
| Launchable with <$50K / ₹40L | ✅ | Main costs are inference, a compliance consultant, and outreach tooling. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hard market-access cutoff, not a fine. Non-compliant inventory is unsellable. Buyers already asking in tenders. Held back from 19 only because the pain peaks around a date rather than being felt daily. |
| Demand evidence | 15 | 12/15 | Strong structural evidence: dated regulation, priced incumbents, documented cost burden, import concentration. Docked for thin *verbatim* customer voice — trade forums for this segment are largely private, and I won't invent quotes. |
| Build feasibility | 15 | 11/15 | Off-the-shelf stack, but real regulatory-domain encoding. 10–14 weeks, not 4. |
| Distribution clarity | 15 | 12/15 | Enumerable named list via exhibitor rosters and customs data, plus a genuinely strong cold-open artifact and a consultant channel. Not a 2-week sprint though. |
| Revenue mechanics | 15 | 11/15 | Priced below a known incumbent floor; 150 customers to $1M is credible. $5M requires the ESPR expansion thesis to land. |
| Time to first revenue | 10 | 7/10 | Deadline urgency compresses the cycle, but these are cautious European SMBs — 6–10 weeks to first paid pilot. |
| Defensibility | 10 | 5/10 | Execution moat plus accumulating supplier-response data (knowing which suppliers answer, how fast, in what format) that compounds genuinely. But a passport platform could bolt this on. Honest 5. |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

The domain half is not optional. A builder who can't read the regulation and its delegated acts carefully will ship something that looks right and is wrong in ways customers discover during audit.

### Key assumptions to validate (3–5)

1. **Assumption:** Small EU importers see supplier data extraction — not passport hosting — as their blocking problem. **How to test:** 20 interviews with e-bike brands under 150 employees. Ask what specifically is stopping them today. If they say "we haven't picked a platform," the thesis is wrong; if they say "our supplier won't reply," it's right.
2. **Assumption:** A well-drafted, correctly-cited multilingual request materially improves supplier response rates over what the importer sends today. **How to test:** Run it live for 3 design partners across 10 suppliers. Measure reply rate and time-to-reply against their historical baseline. This is the whole product — test it before building the rest.
3. **Assumption:** €599/mo clears the bar without procurement drama. **How to test:** Price the readiness audit as a €500 paid engagement during validation. Anyone who pays €500 for the diagnosis will pay €599/mo for the fix.
4. **Assumption:** The Feb 2027 deadline holds and isn't softened for SMEs. **How to test:** Track Commission communications and CONEBI lobbying. Industry has actively advocated "a lower-barrier, staged approach for smaller companies" — this is a live risk, not a hypothetical.

### Risk flags

1. **Regulatory risk (the big one):** Industry is openly lobbying for staged adoption for smaller companies. A delay or SME carve-out removes the urgency that drives the entire sales motion. The business survives — the deadline only moves — but a 12-month slip badly hurts a bootstrapper's timing.
2. **Deadline-shaped demand:** Urgency peaks in Feb 2027 and could fall off a cliff afterward. Mitigation is real and must be built in from the start: passports are recurring obligations per new model, and ESPR extends to more categories. But a founder who sells this purely as deadline panic has a one-season business.
3. **Incumbent encroachment:** Circulor or T-Systems could add supplier-chasing to their platform. Their disincentive is that the low end isn't worth their sales motion — a real but temporary shield. Speed matters.
4. **Supplier non-cooperation ceiling:** Some Chinese cell vendors simply will not release plant-level carbon data at any price. The product can't manufacture data that doesn't exist. The honest fallback — evidencing documented due diligence — is genuinely valuable but is a weaker sale than "we got you compliant." Be straight with customers about this or you'll churn them at renewal.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with EU product-compliance experience,
                        or paired with a battery-regulation consultant as advisor.
                        Asia supply-chain familiarity is a strong plus.
Time to revenue:        6–10 weeks to first paid pilot
Capital to launch:      €15–25K (compliance advisor, inference, outreach tooling)
Top 3 assumptions to validate first:
  1. Supplier data extraction is the blocker, not passport hosting — 20 customer interviews
  2. Generated multilingual requests beat the customer's own baseline reply rate — live test, 3 design partners, 10 suppliers
  3. €500 paid readiness audit converts — sell 5 before building anything
Kill criteria:
  - Abandon if <6 of 20 interviewed importers name supplier data as their top blocker
  - Abandon if generated requests fail to beat baseline supplier reply rate in live testing
  - Abandon if the Commission grants a broad SME exemption or delays past 2028
  - Abandon if a passport incumbent ships self-serve supplier chasing under €600/mo before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the target list. Pull Eurobike and Micromobility Europe exhibitor rosters, filter to EU-domiciled brands importing battery packs, land on 200 named companies with a named compliance or ops contact.
- **Day 3:** Hand-build 5 readiness audits. Real ones, from public product specs — the exact regulatory fields required per SKU, and which ones the company demonstrably cannot answer today. No software, just careful work.
- **Day 4–5:** Send all 5 cold with a €500 offer for a full audit across their whole range. In parallel, book interviews with 20 importers and ask one question above all others: *what is actually stopping you from being passport-ready today?*
- **Day 5 decision, falsifiable:** Go if ≥2 of 5 audit recipients pay €500, **and** ≥12 of 20 interviewees name supplier data extraction rather than platform selection as their primary blocker. Anything less and either the pain is elsewhere or it isn't urgent enough to open a wallet seven months out — in which case it won't be a business in three months either.
