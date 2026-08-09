---
title: "RefChain — DDS reference reconciler for EU food importers"
slug: eudr-reference-number-reconciler
date: 2026-08-09
category: Compliance / EU — Small and Mid-Size Food, Coffee, Cocoa and Timber Importers (€2M–€60M) Who Must Collect a Valid DDS Reference for Every Inbound Shipment Before 30 December 2026
complexity: Low
score: 73
verdict: GO
confidence: Medium
oneLiner: "Chases and validates the deforestation reference number your supplier still hasn't sent, before customs holds the container."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder, Supply-chain]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RefChain

## 1. One-liner

Chases and validates the deforestation reference number your supplier still hasn't sent, before customs holds the container.

## 2. Trend signal — why now?

The EU Deforestation Regulation goes live for large and medium operators on **30 December 2026** — four and a half months from today. Micro and small operators follow on **30 June 2027**. These dates are now legally binding under Regulation (EU) 2025/2650, after two delays that trained the whole market to assume a third one was coming. It isn't.

What makes this a product and not a press release is the mechanics of the thing:

**Without a valid DDS reference number, the shipment is legally blocked at EU customs.** Not fined later — blocked. No number, no entry. Penalties run to at least 4% of EU annual turnover on top.

**The Commission's May 2026 simplification package didn't reduce the work, it relocated it.** The 4 May 2026 package created a new "downstream operator" category. Downstream operators no longer submit their own DDS. Instead, the **first** downstream operator must collect and retain the reference numbers their upstream supplier hands them. The paperwork obligation was converted into a **supplier-chasing obligation**. That is a worse job, because you can complete paperwork yourself and you cannot complete a supplier's email for them.

**TRACES — the EU system where these numbers live — has no export function.** Verification is manual copy-paste, one lookup at a time. You get supplier name, HS code, place of production, and pointers to further upstream DDS records. You do not get chain visibility: "even if a Tier 1 supplier's Reference Number links back to upstream records, you will need to manually look up the Tier 2+ records." A reference number alone is meaningless — it only validates when paired with its verification number.

**Every existing tool is aimed at the wrong buyer.** The vendor landscape is built for operators doing farm-level polygon mapping and satellite risk analysis. Coolset starts around €12,000/year. osapiens and TraceX are quote-only enterprise sales. As one comparison put it: *"most EUDR software was built for operators, not traders. This means most tools are far more complex and expensive than small businesses actually need."*

Meanwhile the volume problem is documented from the supplier side too: requests arrive "via an online portal, an Excel template, a PDF form, or a direct email," and the biggest time sink is "reformatting and repackaging the same information into different templates over and over," with records "scattered across email threads, shared drives, and individual laptops."

The cost is real money at small scale. Coffee compliance is estimated at €0.10–€0.50 per kilo of green coffee. A craft roaster importing 50 tons a year is looking at a five-figure annual hit for geo-data, audits and tech setup — against a €12K software floor. The arithmetic doesn't close.

Provenance:
  - Signal 1 (demand): EUDR binding for large/medium operators 30 Dec 2026, small/micro 30 Jun 2027; missing DDS reference = shipment legally blocked at customs, penalties ≥4% of EU turnover — https://www.coolset.com/academy/eudr-downstream-operator-what-the-new-category-means-and-what-you-need-to-do — 2026-08-09
  - Signal 2 (feasibility): 4 May 2026 simplification package created the downstream-operator role and limited DDS/reference communication to the first downstream operator; the Information System reopened June 2026 with **full API support** including simplified declarations and voluntary grouping of DDS reference numbers — https://www.tract.eco/news/eudr-simplification-package-2026 — 2026-08-09
  - Signal 3 (economic): EUDR software market priced for enterprise — Coolset ~€12,000/yr, osapiens/TraceX quote-only; explicit gap that "most EUDR software was built for operators, not traders" and is "far more complex and expensive than small businesses actually need" — https://eudrready.eu/eudr-software-small-business/ — 2026-08-09
  - Supporting: TRACES has no download/export function, forcing manual copy-paste; no automatic Tier 2+ chain visibility; reference number meaningless without its paired verification number — https://www.interu.io/blog/eudr-traces-explained — 2026-08-09
  - Supporting: Coffee compliance cost €0.10–€0.50/kg green coffee; ~60% of EU coffee from smallholders under 5ha; a single container may hold beans from hundreds of farmers — https://tracextech.com/eudr-coffee-compliance-importers/ — 2026-08-09
  Category: Regulatory arbitrage

## 3. The opportunity

The EUDR market has split into two jobs and the software industry only built for one of them.

**Job A — the operator's job:** map farms, collect GPS polygons, run satellite deforestation analysis, file the DDS. Genuinely hard, genuinely expensive, and correctly served by osapiens, TraceX, Coolset and a dozen others. If you're Nestlé sourcing direct from West African co-ops, you buy one of these.

**Job B — the downstream buyer's job:** for every inbound shipment, get a reference number *and* its verification number out of your supplier, confirm the number is real and actually describes the goods in front of you, tie it to the right purchase order and SKU, and keep the whole thing retrievable for five years.

Job B is not intellectually hard. It is *operationally* hard, in the specific way that dunning and document-chasing are hard: it is a hundred small unglamorous follow-ups against counterparties who are slow, confused, in another timezone, and often working in a language your buyer doesn't read. Nobody's job title contains it. It lands on a procurement manager or an ops generalist who already has a full week.

And the failure mode is brutal and immediate. Not a fine in eighteen months — a container sitting at Rotterdam accruing demurrage because a reference number never arrived, or arrived with a transposed digit, or was reused from a shipment with a different declared quantity.

The gap: **the enterprise tools solve Job A and treat Job B as a data-entry screen inside a €12K platform. Nobody sells Job B on its own for €200 a month.** There is one self-serve entrant (EUDRReady, €29–79/mo) doing the passive half — a place to store numbers you've already received. That validates the price point and the segment. It does not do the hard half, which is *getting* the numbers and *proving* they're good.

The 10× is not a better form. It's that a small importer stops chasing suppliers manually and stops copy-pasting into TRACES one record at a time.

## 4. Target market

**Primary customer:** Operations, procurement or quality lead at an EU-based importer or first-stage processor of EUDR commodities — coffee, cocoa, palm oil, soy, rubber, timber, cattle products — turning over roughly €2M–€60M, importing somewhere between 30 and 800 shipments a year, with 2–25 direct suppliers. Green coffee importers, specialty roasters who import their own, bean-to-bar chocolate makers, timber and plywood traders, spice and commodity brokers. Think a 15-person company in Hamburg, Trieste, Antwerp, Rotterdam or Barcelona where the same person owns supplier relationships, shipping documents and compliance.

**Why they buy:** Because on 30 December the reference number becomes a condition of entry, and their current system for obtaining it is "email Marco and hope." The documented pain is exactly this: records "scattered across email threads, shared drives, and individual laptops," requests arriving as portals, Excel templates, PDF forms and direct emails, and the real time sink being "reformatting and repackaging the same information into different templates over and over." The Villanova ESG framing is the sharpest version of it — the risk isn't that the supplier is non-compliant, it's that *"its evidence is not usable"* by the buyer.

**Rough TAM reasoning:** I'm not going to invent a company count I can't source — EU customs data doesn't publish a clean "EUDR-commodity SME importer" figure. What I can anchor on: Europe is the world's largest cocoa importer and processed ~1.75M metric tons of beans in 2023/24; the EU imports roughly 40% of the world's coffee. France alone has ~100 SME chocolate companies plus ~400 artisan chocolatiers and confectioners. Across seven commodities and 27 member states, the population of importers and first processors in the €2M–€60M band is plausibly in the low tens of thousands. At €2,400 ACV, capturing 400 of them is ~€1M ARR. That's the number that matters, and it's a small single-digit percentage of a conservatively-read market.

**Why now for them:** Four months to a hard date, after two delays that taught everyone to wait. The scramble starts in September when the first large buyers send contract clauses down the chain — and the Villanova analysis is explicit that the highest-risk window is *"the buyer transition period before formal enforcement, not the enforcement date itself."*

## 5. Product sketch (MVP)

- **Shipment register.** Every inbound consignment with supplier, commodity, HS code, quantity, expected arrival, and a live status: reference number missing / received / validated / mismatched.
- **Automated supplier chase.** The system emails each supplier a one-click request for the reference + verification number pair, in their language, escalating on a schedule tied to vessel ETA. No portal login for the supplier — reply to the email or click a link and paste.
- **TRACES lookup and validation.** For every number pair received, pull the TRACES record and check it actually matches: right supplier, right HS code, plausible quantity, right place of production. Flag mismatches instead of filing them.
- **Mismatch triage queue.** The daily worklist: three numbers unverifiable, one quantity that doesn't cover the consignment, one supplier who's gone quiet with a container leaving Santos on Thursday.
- **Upstream chain walker.** Where a reference points to further upstream DDS records, follow the pointers and assemble the visible chain automatically instead of manual lookup per tier.
- **Five-year evidence file.** Every number, every supplier email, every validation result, timestamped and exportable as an inspection-ready pack per shipment or per period.
- **Customer response mode.** When *your* downstream customer sends you their own EUDR questionnaire, generate the answer from the register instead of rebuilding it in their Excel template.

## 6. AI angle — what's load-bearing

Remove the AI and this becomes a spreadsheet with reminders. Three places it does real work:

**Extracting numbers from whatever the supplier actually sends.** Nobody sends a clean JSON payload. They send a PDF invoice with the reference in a footer, a photo of a screen, a WhatsApp forward, an Italian email with the number in the body, a scanned certificate. Parsing that variety into a validated reference/verification pair is the single highest-volume task in the product and it's exactly what current models are good at.

**Deciding whether a supplier's answer is actually an answer.** "We are fully EUDR compliant, all our farms are certified" is not a reference number. Classifying supplier replies into *number supplied / partial / deflection / doesn't understand the request / needs a different contact* is what drives the escalation ladder — and getting it wrong means either nagging a compliant supplier or letting a silent one slide until the ship arrives.

**Coherence checking.** The number is syntactically valid and the TRACES record exists — but does it describe *these* goods? Comparing declared quantity against consignment volume, HS code against product description, place of production against the origin on the bill of lading. Rule-based checks catch the obvious cases; the judgment calls — is "roasted coffee, various origins" consistent with this DDS — need a model.

**Multilingual chase.** Suppliers are in Brazil, Vietnam, Côte d'Ivoire, Indonesia, Peru. The documented problem is that "language barriers make explaining EUDR and gathering consent harder." Generating the request, and reading the reply, in Portuguese, Vietnamese, French and Spanish is table stakes and is only cheap because of models.

## 7. Localization angle (if any)

This is an EU-first play by construction — the regulation defines the market. But the *interesting* localization is on the far side of the transaction. The buyer is in Rotterdam; the person who has to produce the number is in Santos or Buon Ma Thuot. Every outbound chase, reminder and clarification should be in the supplier's working language, and every reply parsed in it.

Second-order: an origin-side version selling to exporters and co-ops in Brazil, Vietnam and Côte d'Ivoire who are drowning in incoming buyer questionnaires. Villanova's framing — the supplier loses buyer confidence "because its evidence is not usable" — describes a second product with the same data model pointed the other way. That's expansion, not v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €149/mo for up to 50 shipments/year and 5 suppliers. €349/mo for up to 300 shipments and 25 suppliers. €799/mo above that, or where the customer wants the customer-questionnaire response module and multi-entity. Annual billing at 10 months.
- **ACV:** ~€2,400 blended. Deliberately positioned an order of magnitude under Coolset's ~€12,000 entry and priced so a procurement manager can expense it without a board conversation.
- **Rough math to $1M ARR:** 400 customers × €200/mo average × 12 = €960K. In a segment spanning seven commodities and 27 member states, 400 companies is a niche newsletter's mailing list, not a market conquest.
- **Rough math to $5M ARR:** ~1,600 customers at a slightly higher blended ACV (~€260/mo) as shipment volumes push accounts up tiers. Realistically this needs two more things: the origin-side product from §7, and expansion into adjacent EU supply-chain evidence regimes (CSDDD/CBAM-style obligations landing on the same buyer with the same "chase your supplier for a document" shape). The register and the chase engine are the reusable assets.
- **Expansion path:** shipment count and supplier count are the natural meters, and both grow with the customer. Then the customer-response module, then multi-entity for groups, then the second regulation.

## 9. Go-to-market wedge — first 100 customers

1. **Freight forwarders and customs brokers are the distribution channel, not a partner nice-to-have.** A broker clearing goods for 200 SME importers eats the cost of every held container. They already know exactly which clients have no EUDR process. Sign 10 brokers in NL/BE/DE/IT on a revenue share, hand each a co-branded page. This is the single highest-leverage move and it's why this idea is worth doing — the pain is *concentrated* in a small number of intermediaries who feel it too.

2. **Scrape the trade-fair exhibitor lists and email a pre-filled register.** World of Coffee, Anuga, ISM Cologne, SIAL, Fastmarkets timber events, the national coffee and cocoa associations. These publish exhibitor directories with company, commodity and country. Pull 2,000 EU-based importers/processors in the target band, and send each an email whose subject line is their own commodity and the December date, with a demo showing *their* likely shipment pattern already loaded. Compliance deadline outreach converts well precisely because the deadline is doing the persuading. 2,000 emails at a 4% reply and a third of replies to trial is ~25 trials.

3. **Own the search term nobody has monetised.** "EUDR reference number," "DDS verification number," "how to check a DDS in TRACES" — these are high-intent, low-competition queries being answered right now by enterprise vendors' top-of-funnel blog posts that all end in "book a demo." Publish the genuinely useful version: a free single-reference TRACES validator, no signup. It's the product's smallest atom, it's the exact thing someone Googles at 4pm with a container inbound, and it's a natural top of funnel into the register.

4. **National association webinars.** The Deutscher Kaffeeverband, the Italian and Belgian cocoa and chocolate associations, national timber federations. Every one of them is running EUDR member education right now because their members are asking. Offer to run the "what downstream operators actually have to do" session — the associations need the content and the audience is 100% qualified.

5. **Intercept the questionnaire wave.** Starting September, large operators will push EUDR clauses and questionnaires down to their suppliers. Anyone posting on LinkedIn about receiving one is a buyer with a date on their calendar. Monitor and reply with the free validator.

## 10. Build complexity — justification

**Low.** The v1 is a shipment register, a scheduled multilingual email sequence, document parsing over supplier replies, and a TRACES lookup layer. The one genuine unlock is that the EU Information System **reopened in June 2026 with full API support** — which is what turns "manual copy-paste, no export function" from a permanent constraint into a competitive advantage for whoever wires it up. No GPS polygons, no satellite imagery, no deforestation risk modelling — all of that is Job A and deliberately out of scope. A competent pair ships a credible v1 in 8–10 weeks. The riskiest technical item is TRACES API access and behaviour, which needs verifying in week 1, not week 8 (see §15).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps companies comply with EU law; no regulated activity, no advice licence needed. Positioned as record-keeping and verification, not legal opinion. |
| Ethical — no harm / dark patterns | ✅ | The failure mode to avoid is a false "verified" badge. Product must show what TRACES actually returned, not a green tick that manufactures confidence. |
| Market exists (evidence above) | ✅ | Hard deadline, blocked-shipment consequence, ≥4% turnover penalty, existing vendors charging €12K+ for an adjacent job. |
| 1–5 person team can build this | ✅ | Two people, 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically €15–25K including a domain expert on retainer and trade-fair list acquisition. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Held container plus ≥4% turnover exposure is genuine hair-on-fire — but seasonally. It spikes hard around 30 Dec 2026 and again 30 Jun 2027, then normalises into routine ops. Not a daily bleed the rest of the year, which caps it below 17. |
| Demand evidence | 15 | 11/15 | Strong indirect evidence: binding deadline, incumbents charging €12K+, a self-serve entrant already at €29–79/mo proving the segment. What's missing is direct customer voice — I could not source verbatim SME importer complaints, only vendor and analyst descriptions of the pain. That's a real gap and it's why this is 11 not 14. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything, no ML training, tight scope. Docked for TRACES API dependency being unverified from the outside. |
| Distribution clarity | 15 | 11/15 | The broker channel is specific and the pain is concentrated there, which is the strongest asset. Trade-fair lists are real and scrapeable. Docked because broker revenue-share deals take longer to land than the math implies and none of this is tested. |
| Revenue mechanics | 15 | 11/15 | Pricing anchored to a visible competitor 10× above and a visible entrant below, so the band is well-triangulated. $1M needs 400 customers, which is credible. $5M needs a second product or a second regulation — honest about that. |
| Time to first revenue | 10 | 8/10 | Deadline urgency means pre-selling during the build is plausible; 6–10 weeks to first euro. Not 9–10 because Q4 is also when the target buyer is busiest. |
| Defensibility | 10 | 3/10 | **The weak axis.** Nothing here is hard to copy — the enterprise vendors could ship a cut-down tier in a quarter if they cared, and EUDRReady is already adjacent. What you accumulate is a supplier-response graph (who answers, how fast, in what format) and broker relationships. That's a head start, not a moat. Execution-only. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who can wire an API and parse messy documents, and someone who actually understands EUDR mechanics well enough to not ship wrong validation logic. A trade-compliance consultant as a co-founder or heavily-incentivised advisor is close to mandatory — get the regulation wrong in this product and you don't get a bug report, you get a customer with a seized container.

### Key assumptions to validate (3–5)

1. **Assumption:** The TRACES / EU Information System API actually permits programmatic lookup of a third party's DDS by reference + verification number at usable rate limits. **How to test:** Register for Information System access in week 1 and attempt a live lookup against a real number pair borrowed from a friendly importer. This is a binary — if third-party lookup is closed off, the validation feature dies and the product shrinks to chase-and-store, where EUDRReady already sits.

2. **Assumption:** SME importers will pay €149–349/mo for chase-and-verify rather than assigning it to an existing employee for free. **How to test:** 30 interviews with importers in the target band; ask what they're doing today and price-test at €149 and €349. Kill signal is "our forwarder handles it" appearing repeatedly — that would mean the broker is the customer, not the channel.

3. **Assumption:** Freight forwarders and customs brokers will actively distribute rather than politely decline. **How to test:** Pitch 10 brokers in NL/BE/DE before writing code. Two signed revenue-share LOIs is the bar.

4. **Assumption:** Suppliers in origin countries respond to an automated multilingual chase at a materially better rate than the buyer's own manual emails. **How to test:** Run the chase sequence by hand for one design-partner importer across 20 suppliers and measure response rate and time-to-number against their historical baseline. If it doesn't beat manual, the core value prop is a filing cabinet.

5. **Assumption:** The December 2026 date holds. **How to test:** Monitor Commission communications monthly. Two delays already happened; a third would gut the urgency wedge for a year.

### Risk flags

1. **Regulatory risk (severe, and it cuts both ways):** This regulation has been delayed twice and simplified once. A third delay announced in October 2026 would remove the entire GTM wedge overnight. Conversely, further simplification could reduce downstream obligations to near-nothing. The whole business is a bet on a specific regulatory text staying put — build so the register and chase engine survive a pivot to the next EU supply-chain evidence regime.

2. **Platform dependency:** Total reliance on TRACES / the EU Information System API. If access is restricted to registered operators looking up only their own records, the validation half of the product is impossible and only the chase half survives.

3. **Competitive squeeze from both sides:** osapiens explicitly markets an "Easy Start" SME program, and EUDRReady is already self-serve at €29–79/mo. You're entering between an incumbent moving down and an entrant sitting below. The defence is doing the hard half neither does well — chase and verification — not competing on being cheap.

4. **Seasonality:** Demand concentrates around two dates. A customer acquired in November churns in February if the product doesn't earn its keep during quiet months. The customer-response module and the five-year evidence file are the retention answer and need to land early, not as v3.

5. **Unsourced segment sizing:** I could not find a clean count of EU SME importers in EUDR commodities, and I've refused to invent one. The €1M-ARR math is sound at 400 customers, but the denominator is estimated, not sourced.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair (one API/parsing engineer, one ops-and-sales)
                        with a trade-compliance consultant as advisor or co-founder
Time to revenue:        6–10 weeks — pre-sell against the December deadline during build
Capital to launch:      €15–25K ($17–28K)
Top 3 assumptions to validate first:
  1. TRACES/EU Information System API permits third-party DDS lookup by
     reference+verification pair — register week 1, attempt a live lookup. Binary.
  2. SME importers pay €149–349/mo rather than absorb the work internally —
     30 interviews, price-test both tiers.
  3. Customs brokers will distribute — pitch 10, need 2 signed revenue-share LOIs
     before writing production code.
Kill criteria:
  - Abandon if TRACES offers no programmatic third-party lookup AND no
    reliable alternative validation path exists by end of week 2.
  - Abandon if <5 of 30 interviewed importers say they'd pay €149/mo, or if
    >15 of 30 say their freight forwarder already handles it entirely.
  - Abandon if the Commission announces a further delay of the 30 Dec 2026
    date before v1 ships — revisit when the new date is within 6 months.
  - Abandon if 0 of 10 brokers agree to a revenue-share pilot.
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Register for EU Information System access and attempt a programmatic third-party DDS lookup using a real reference + verification pair. Everything downstream depends on this answer, so it goes first and it goes alone. If it fails, spend the rest of the day establishing whether any alternative validation path exists.
- **Day 2–3:** Book and run 15 calls with EU coffee, cocoa and timber importers in the €2M–€60M band, sourced from World of Coffee and ISM exhibitor lists. Three questions only: what are you doing today about reference numbers, what happens if one doesn't arrive before the vessel, and would you pay €149/mo for this. Record who says "our forwarder handles it."
- **Day 3–4:** In parallel, pitch 10 customs brokers and freight forwarders in Rotterdam, Antwerp and Hamburg on a co-branded revenue-share. Ask directly how many of their SME importer clients have no EUDR process today.
- **Day 5:** Ship the free single-reference TRACES validator as a one-page site and put it in front of two national association member groups. Measure uses in 72 hours.

**Go / no-go:** Proceed only if (a) third-party TRACES lookup works programmatically, (b) at least 5 of 15 importers state a willingness to pay €149/mo without being led, and (c) at least 2 brokers agree to a pilot. Fewer than two of those three, and this is a feature inside someone else's compliance platform, not a company.
