---
title: "PartPost — repair-price registry for EU appliance importers"
slug: eu-repair-price-publication
date: 2026-07-13
category: Compliance / EU — Appliance & Electronics Importers and Mid-Market Brands (Art. 5(5) indicative repair price publication)
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Publishes the repair-price page EU law demands on 31 July, and proves your parts prices aren't deterrent."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Regulatory-driven, SMB, AI-agent, Solo-builder, Data-product]
axes:
  problem: 15
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PartPost

## 1. One-liner

Publishes the repair-price page EU law demands on 31 July, and proves your parts prices aren't deterrent.

## 2. Trend signal — why now?

On **31 July 2026 — 18 days from today** — Directive (EU) 2024/1799 (Right to Repair) becomes applicable across the EU. Buried in Article 5 is an obligation almost nobody is tooled for. Verbatim from the directive:

> **Art. 5(5):** "Manufacturers, or, where applicable, authorised representatives, importers or distributors who have an obligation to repair pursuant to this Article shall ensure that consumers can access, **via a free access website, information on the indicative prices that are charged for the typical repair** of goods covered by Union legal acts listed in Annex II."

> **Art. 5(4):** "Manufacturers that make spare parts and tools available for goods covered by Union legal acts listed in Annex II shall offer these spare parts and tools **at a reasonable price that does not deter repair**."

Two things make this a business rather than a memo.

**First: the obligation cascades onto importers.** Art. 5(3): where the manufacturer is outside the Union, the duty falls to its authorised representative; failing that, **the importer**; failing that, the distributor. Every EU importer of a Chinese, Turkish or Korean appliance brand just inherited a public price-publication duty they have never performed.

**Second: we already know they will fail it, because they are failing the narrow version today.** Regulation (EU) 2023/1670 has required smartphone and tablet makers to publish indicative pre-tax spare-part prices since June 2025, and EPREL (the Commission's own product database) has a field for it: `webLinkPretaxPrices`. I pulled the public EPREL API directly. The category holds **2,311 registered models**. Of the 25 the endpoint returns, **18 (72%) carry a junk value instead of a working price link** — a literal `/` (Apex CE Specialists, across a dozen models), `"See Manual"` (Donghuababa), and bare non-URLs like `www.majstra.com` and `spare-parts.mi.com`. That last one is **Xiaomi**. This is a live, machine-measurable compliance failure in the Commission's own database, on the exact duty Art. 5(5) is about to generalise from 2 product categories to 10.

Honest caveat, stated up front: 25 of 2,311 is a sample, not an audit — the API caps its response and ignores paging. The full audit is a day of work with a headless browser and is itself the launch asset (see §9).

The "reasonable price that does not deter repair" test in Art. 5(4) is **legally undefined**. There is no threshold, no formula, no Commission guidance. Right to Repair Europe says so in terms: the criteria "lack clear criteria for implementation." An undefined standard that carries a penalty is the exact condition that creates demand for defensible third-party evidence.

And the underlying pricing abuse is documented. Right to Repair Europe, *The Price Is Not Right* (7 Nov 2023): a Gardena grass-trimmer motor sells for **€60 against a €37 trimmer** — over 160% of the product's price. A Samsung LCD panel costs "nearly 25% more than the TV it's used in." Washing-machine circuit boards run **€299–€1,073**. The Commission's own Impact Assessment (SWD(2023) 59) puts the acceptable repair price at "on average around 20% of the purchase price." Germany's vzbv found dishwasher part baskets ranging **10–61% of the median new machine price**.

```
Provenance:
  - Signal 1 (DEMAND — regulatory): Directive (EU) 2024/1799 Art. 5(5) makes a free-access indicative-repair-price website mandatory from 31 July 2026 across 10 Annex II product categories; Art. 5(3) cascades the duty to EU importers/distributors of non-EU brands — https://eur-lex.europa.eu/eli/dir/2024/1799/oj/eng — applies 2026-07-31
  - Signal 2 (FEASIBILITY — tech-unlock): Retailer parts catalogues (Partmaster, FixPart across ~30 EU country domains) expose SKU + price + OEM part number as structured JSON-LD, giving a joinable key manufacturers themselves do not publish; MARKT-PILOT raised a $43M Series A led by Insight Partners (23 Apr 2024) proving the parts-price crawler is a solved, fundable technology — https://repair.eu/news/fixing-the-unfair-reality-of-spare-parts-prices/ — 2024-04-23 / 2025-07-17
  - Signal 3 (ECONOMIC — measurable failure): 72% of retrievable EPREL smartphone/tablet models (18/25, category size 2,311) publish a junk value in the mandatory `webLinkPretaxPrices` field — including Xiaomi — proving the narrow version of this same duty is already ignored at scale; Commission IA SWD(2023) 59 sizes the repair market failure at €5.1bn/yr — https://eprel.ec.europa.eu/api/products/smartphonestablets20231669 — verified 2026-07-13
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is the shape of the obligation versus the shape of the buyer.

Art. 5(5) is not a document-generation problem — that's the Repair Information Form, and it's *voluntary* (Art. 4(1): repairers "**may** provide"). Art. 5(5) is a **data publication problem**: you must stand up a public, free-access, permanently-maintained page listing the indicative price of a typical repair for every in-scope SKU you place on the EU market. To produce that number you need your parts costs, your labour assumptions, and a defensible view of what a "typical repair" is per model. Most importers have none of this in one place; they have a parts spreadsheet from the factory in the factory's currency, and a distributor who quotes ad hoc.

And Art. 5(4) hangs a second, sharper question off the same data: *is that price deterrent?* Nobody can answer it, because there is no test. So the honest product answer is not a legal opinion — it's a **comparison**. Show the importer where each of their part prices sits against the observable retailer market for the same OEM part number, and against the Commission's own 20%-of-purchase-price benchmark. That is a number they can put in a file and hand to a regulator.

The incumbent to disrupt isn't a software vendor — **it's the €400/hour Brussels law firm**. Every major firm (Noerr, Fieldfisher, Lewis Silkin, SZA) has published a "are you ready?" client alert on this directive. Every one of them ends at *"you should establish a repair-pricing page."* None of them build it. A mid-market importer gets a memo telling them what to do and a bill, and still has no page on 31 July.

## 4. Target market

- **Primary customer:** The compliance / product-regulatory lead (often a one-person function, sometimes the ops director wearing a second hat) at an **EU importer or mid-market brand of Annex II goods** — white goods, vacuums, electronic displays, phones/tablets — typically €10M–€250M EU revenue, 20–400 staff, importing 30–500 in-scope SKUs from non-EU factories. These are exactly the firms Art. 5(3) turns into the responsible party.
- **Why they buy:** They have a hard date, a public-facing artefact they must produce, a penalty regime set nationally (Art. 15: "effective, proportionate and dissuasive"), and no internal capability to produce a per-SKU repair price. They are not trying to be virtuous; they are trying to have a URL that exists when someone asks for it.
- **Rough TAM reasoning:** I will not invent a manufacturer count — I could not source one, and EPREL's "7,000+ suppliers" spans all energy-labelled products and structurally undercounts (no vacuums, no welding equipment). What I *can* anchor on: the EPREL smartphone/tablet category alone holds **2,311 registered models** across hundreds of suppliers, and that is **one** of ten in-scope categories. A serviceable target of a few thousand obligated EU entities is defensible; I need 300 of them to hit $1M ARR.
- **Why now for them:** The date is fixed and 18 days out, and 25 of 27 member states have notified **zero** transposition measures (EUR-Lex national transposition register, checked 2026-07-13 — only Croatia and Slovakia have filed). The obligation lands regardless of whether the member state is ready. That's a customer who knows they're exposed and doesn't yet know what the national rule looks like — which is precisely when they buy a tool rather than build one.

## 5. Product sketch (MVP)

- **Import your parts list** — upload the factory's parts spreadsheet (any format, any currency, any language). Get back a normalised catalogue mapped to OEM part numbers.
- **Typical-repair builder** — for each in-scope model, define the 3–5 repairs that actually happen (drum bearing, pump, control board, screen, battery) as a parts + labour bundle. Produces the "indicative price of a typical repair" the directive asks for.
- **The public page** — a hosted, free-access, no-login repair-price page per brand, at your own domain, that satisfies Art. 5(5). Multilingual. Versioned, with a timestamped history of what was published when.
- **Deterrence check** — every part price scored against (a) observable retailer prices for the same OEM part number and (b) the Commission's ~20%-of-purchase-price benchmark. Red / amber / green per part.
- **Evidence file** — a dated PDF showing the basis of every published price and where it sits versus market. This is the artefact you hand a national enforcement authority.
- **Change alerts** — the factory raises a part price, the page updates and the deterrence score re-runs. Flags anything that crosses into red.
- **EPREL cross-check** — for phone/tablet SKUs, tells you whether your existing EPREL price link is actually a working URL. (Most aren't.)

## 6. AI angle — what's load-bearing

Two places, and the product does not exist without either.

**Parts-list normalisation.** The input is a factory spreadsheet: mixed Chinese/Turkish/English column headers, part descriptions as free text, inconsistent part numbering, prices in RMB or USD. The job is to resolve each row to a canonical part, a category, and an OEM part number that can be joined against retailer catalogues. This is exactly the messy-entity-resolution task that LLMs made economic in the last 18 months and that was a data-entry project before. Strip the AI and you are shipping a spreadsheet template — which is to say, nothing.

**Typical-repair inference.** "The indicative price of a *typical* repair" requires knowing which repairs are typical for a given model — a drum bearing on a washing machine, not a cosmetic fascia. Inferring that from service manuals, parts-failure patterns and retailer part-sales prominence is the second load-bearing job. A human product-compliance manager cannot do this across 400 SKUs in 18 days. A model can do it in an afternoon and have a human approve the list.

The deterrence benchmark itself is not AI — it's a crawler and a join. That's fine. AI does the two jobs that are otherwise impossible; the rest is honest plumbing.

## 7. Localization angle

`EU-native by construction.` This isn't a global product with a European skin — the product *is* a European regulation. Three localisation facts matter:

- **Language:** the public page must be usable by consumers in the member states where the goods are sold. Multilingual output is a feature, not a nicety.
- **Fragmentation is the moat and the risk:** the directive is transposed into 27 national laws, and with "reasonable price" undefined, Right to Repair Europe explicitly warns that "risks of fragmentation of the EU market are significant." Tracking 27 national interpretations of a deliberately vague standard is a job no importer wants and a knowledge asset that compounds.
- **Enforcement is national.** France's DGCCRF is the only authority with any track record here and it issued warnings, not fines. Knowing *which* member states actually enforce, and how, is the domain expertise that lets you sell urgency honestly instead of dishonestly.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €199/mo (Starter — up to 25 in-scope SKUs, one brand, hosted page) · €499/mo (Growth — up to 200 SKUs, deterrence benchmarking, evidence file) · €1,200/mo (Multi-brand — importers/distributors carrying several brands, 500+ SKUs, API). Annual billing standard in EU compliance procurement.
- **ACV:** ~€3,600 realistic blended (most land on Growth; multi-brand distributors pull the average up).
- **Rough math to $1M ARR:** ~280 customers at €3,600 ACV = €1.0M. Against a category where the smartphone/tablet slice alone has 2,311 registered models, 280 obligated entities across ten categories is not a heroic number.
- **Rough math to $5M ARR:** needs ~1,000 customers at a rising ACV (~€4,800 as multi-brand distributors and the €50M+ brands land), *or* — more likely — the second revenue line below.
- **Expansion path:** ACV grows with SKU count as importers add lines. But the real expansion is the **data asset**: once you have crawled and normalised retailer parts prices across the EU to build the deterrence benchmark, you own the only spare-parts price index in Europe. That index sells twice — to manufacturers who need to prove non-deterrence, and to consumer organisations, who were just granted **collective-action standing** for repair violations (the directive amends Dir. 2020/1828) and have **no evidence infrastructure whatsoever**. Selling the same index to both sides is not a conflict; it's a benchmark, and benchmarks are only credible when both sides use them.

## 9. Go-to-market wedge — first 100 customers

The launch asset writes itself, and it costs one day.

1. **Ship the EPREL non-compliance scorecard, publicly, this month.** Complete the audit I started: all 2,311 smartphone/tablet models, every `webLinkPretaxPrices` value, classified as working URL / junk / missing. My 25-model sample says ~72% fail. Publish it as a live, named, brand-by-brand league table — *"These 400 brands are already breaking the EU spare-parts price rule, and the rule gets ten times bigger on 31 July."* Xiaomi is in the failing set. This is a free, verifiable, adversarial data story with a named deadline, and it lands in trade press (ENDS Europe, Euractiv, appliance trade titles) and on Right to Repair Europe's channels without a PR budget.

2. **The scorecard IS the lead list.** Every brand with a broken price link is a named, qualified, provably non-compliant prospect — and EPREL gives me the registering **organisation name** for each (TCT Mobile Europe SAS, Apex CE Specialists GmbH, ERP Europe Ltd…). That is the importer, i.e. the Art. 5(3) responsible party, i.e. the exact buyer. Cold email: *"Your model WP36 publishes '/' where EU law requires a spare-parts price link. On 31 July that obligation extends to every appliance you import. Here's your page, live, in 48 hours."* Expect a brutal reply rate on a mail that quotes the recipient's own broken data back at them.

3. **Ride the law firms instead of fighting them.** Noerr, Fieldfisher, Lewis Silkin and SZA have all published R2R client alerts and all of them stop at *"you should build a repair-pricing page."* They have the clients and no product; I have the product and no clients. Referral partnership: they keep the advisory fee, I take the SaaS. Ten firms with a mid-market manufacturing book is a channel to hundreds of obligated entities.

4. **Trade bodies with a deadline problem.** APPLiA (home appliances) and the national importer associations are fielding member questions about a directive their member states haven't transposed. A free "are you Art. 5(5) ready?" checker offered through the association is a warm-intro machine.

5. **Right to Repair Europe as the adversarial channel.** They *want* this measured — they published the pricing abuse data and are asking for binding prices with penalties. Giving them the index is free distribution to exactly the audience that generates the enforcement pressure that makes manufacturers buy.

## 10. Build complexity — justification

**Low.** The hosted public page is a static-site generator with a CMS behind it. Parts normalisation is off-the-shelf LLM calls against uploaded spreadsheets. The deterrence benchmark is a scheduled crawler over retailer catalogues (Partmaster exposes schema.org JSON-LD with SKU + price + OEM part number; FixPart runs ~30 EU country domains without login) joined on OEM part number — the manufacturers' own sites are hostile (Bosch's robots.txt disallows its parts list, Miele sits behind a WAF), which is precisely why you go at the retailers. The EPREL scorecard is a public API and a headless browser. Solo builder, **6–8 weeks to a page you can sell**, with the scorecard shippable in week one as marketing while the product is built.

The genuinely hard part isn't engineering — it's knowing what a "typical repair" is per appliance class, and tracking 27 transpositions of an undefined standard. That's domain work, not build work, and it's also the moat.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps firms *comply* with an EU directive. Benchmark data is drawn from public retailer listings. |
| Ethical — no harm / dark patterns | ✅ | The directive's purpose is consumer repairability; publishing honest repair prices serves it. No dark pattern is available even in principle — the output is a public price list. |
| Market exists (evidence above) | ✅ | Mandatory obligation, fixed date, 72% failure rate on the existing narrow version, zero vendors. |
| 1–5 person team can build this | ✅ | Solo builder, 6–8 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Crawler + LLM calls + hosting. Well under $10K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **15**/20 | Hard legal date, public artefact, national penalties. Docked 5: enforcement is weak and unproven — France issued 76 warnings and **zero** fines on the analogous spare-parts duty. A rational importer might publish a junk link and wait, exactly as 72% of EPREL registrants already do. The pain is real but it is *compliance-theatre* pain, not lose-money-daily pain. |
| Demand evidence | 15 | **12**/15 | Directive text is unambiguous; the 72% EPREL failure is measured, not asserted; law firms are publishing alerts. Docked 3 honestly: **no manufacturer-readiness survey exists and no trade body has complained.** I verified the obligation; I did **not** verify panic. Do not confuse the two. |
| Build feasibility | 15 | **13**/15 | Off-the-shelf LLM + crawler + static hosting. Solo, 6–8 weeks. |
| Distribution clarity | 15 | **12**/15 | The EPREL scorecard is simultaneously the PR asset and the named lead list, with the registering organisation (= the obligated importer) attached to every failing row. That's rare. Docked 3: cold-emailing EU compliance leads is a slower, more procurement-bound motion than the scorecard's virality suggests. |
| Revenue mechanics | 15 | **11**/15 | €199–1,200/mo is squarely in EU compliance-tool norms; 280 customers to $1M is achievable. Docked 4: ACV is a *guess* — there is no comparable product to benchmark against, because nobody sells this. |
| Time to first revenue | 10 | **8**/10 | Deadline in 18 days means the first sale can precede the finished product — pre-sell the page. But EU B2B procurement adds weeks even at €500/mo. 6–10 weeks to first euro. |
| Defensibility | 10 | **5**/10 | Execution-and-data moat, not a real one. The page generator is copyable in a month. The *parts-price index* compounds and gets harder to replicate with every crawl, and the 27-transposition knowledge is genuine domain depth — but a funded incumbent (MARKT-PILOT already has the crawler and $43M) could turn and take this. Scored honestly, not aspirationally. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Crawler and LLM plumbing is straightforward; the moat is in reading 27 national transpositions of an undefined standard and knowing what a typical washing-machine repair actually is. A technical founder with a regulatory advisor, or a product-compliance person who can code.

### Key assumptions to validate (3–5)

1. **Assumption:** EU importers of non-EU appliance brands know Art. 5(3) makes *them* the responsible party. **How to test:** call 25 importers off the EPREL organisation list and ask, unprompted, "who at your company owns the repair-price publication duty on 31 July?" If most say "the factory does," the pain is real but the *buyer* is confused — and the sales motion has to start with education, which lengthens everything. This is the single most important call to make.
2. **Assumption:** they will pay for a page rather than get their web team to hand-roll a static table. **How to test:** pre-sell. Offer 20 prospects the page live in 48 hours at €499/mo, annual, before writing the product. Fewer than 3 conversions and the answer is "they'll just publish a table."
3. **Assumption:** the deterrence benchmark is the thing they actually value (not the page). **How to test:** split the pitch. Half get "we publish your page," half get "we prove your prices aren't deterrent." Whichever books more meetings is the product.
4. **Assumption:** retailer catalogues give sufficient OEM-part-number coverage to benchmark real SKUs. **How to test:** take one washing-machine brand's 50-part list and try to price-match it against Partmaster/FixPart. Below ~50% match rate, the deterrence feature is decoration.

### Risk flags

1. **Enforcement risk (the big one).** The whole thesis rests on someone eventually enforcing Art. 5(5). The evidence says enforcement is feeble: 38 years of EU case law contains **zero** fines for excessive spare-parts pricing; France's DGCCRF found 74% of firms non-compliant on the analogous parts duty and issued **76 warnings and no fines**. If no member state enforces in year one, this becomes a vitamin. Mitigation: sell the *page* (a binary, visible, "do you have a URL" artefact that a procurement or retail-partner audit will ask for) rather than the *penalty*.
2. **Regulatory risk — 25/27 states haven't transposed.** The national rules that define the penalty don't exist yet in most of the EU. That cuts both ways: it's why buyers are anxious, and it's why they might defer.
3. **Platform dependency.** The deterrence index depends on scraping retailer catalogues that can block me tomorrow. eSpares/BuySpares/4ourhouse already hard-block. Mitigation: the index is a *nice-to-have* layered on a page product that stands alone.
4. **Incumbent turn.** MARKT-PILOT has the exact crawler and $43M from Insight Partners, pointed at the opposite use case (helping OEMs raise parts prices). If they read the directive, they can point it here. My head start is regulatory framing, not technology.
5. **The market may just publish junk.** 72% of EPREL registrants publish `/` and face no consequence. The honest bear case for this entire idea is that Art. 5(5) compliance converges on the same worthless-link equilibrium, and nobody pays for anything.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical solo founder with an EU product-compliance advisor
Time to revenue:        6–10 weeks (deadline is 18 days out — pre-sell before building)
Capital to launch:      <$10K (crawler, LLM calls, hosting)
Top 3 assumptions to validate first:
  1. EU importers know Art. 5(3) makes THEM the obligated party — call 25 off the EPREL organisation list and ask who owns it
  2. They'll pay rather than hand-roll a static table — pre-sell 20 prospects at €499/mo before writing code
  3. Retailer catalogues give real OEM-part-number coverage — try to price-match one brand's 50-part list against Partmaster/FixPart
Kill criteria:
  - Abandon if fewer than 3 of 20 pre-sell prospects convert at €499/mo before the product exists
  - Abandon if OEM-part-number match rate against retailer catalogues comes in below 50% AND the page-only pitch also fails to book meetings
  - Abandon if, by Q1 2027, no member state has issued a single penalty under Art. 5(5) and renewal intent among pilot customers is below 50% — that's the junk-link equilibrium, and it means the market cleared at zero
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Finish the EPREL audit properly. All 2,311 smartphone/tablet models, headless browser, every `webLinkPretaxPrices` value classified. Produce the real non-compliance percentage — not my 25-model sample. If the true failure rate collapses to something like 15% once you see the full set, the central signal is weaker than I think and the story loses its teeth. **This is a falsifiable test of my own headline claim, and it comes first for exactly that reason.**
- **Day 2–3:** Publish the scorecard as a live league table with brands named. Push it to Right to Repair Europe, ENDS Europe, and two appliance trade titles. Measure: does it get picked up, and do inbound enquiries arrive from named importers?
- **Day 4–5:** Call 25 importers pulled from the EPREL organisation field. One question first: *"Who at your company owns the 31 July repair-price publication duty?"* Then pre-sell the page at €499/mo, annual, delivered in 48 hours.
- **Day 5 — decide:** Go if **≥3 of 20 pre-sell prospects commit money** before the product exists **and** the full EPREL audit confirms a failure rate above 50%. Both conditions, not either. If the audit deflates but the pre-sells land, the product is real and the marketing story isn't — rebuild the pitch. If the pre-sells fail, walk, regardless of how good the scorecard looks in the press.
