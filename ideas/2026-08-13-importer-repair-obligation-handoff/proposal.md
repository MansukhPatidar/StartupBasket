---
title: "PartsOwed — repair-liability handoff for EU importers"
slug: importer-repair-obligation-handoff
date: 2026-08-13
category: Compliance / EU — Small Importers and Distributors (€2M–€80M) Who Silently Inherited a Manufacturer's Repair Obligation on 31 July 2026
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "Shows an EU importer which products made them the legal repairer, then extracts the parts terms from the supplier."
tags:
  vertical: Compliance
  model: SaaS
  geography: EU
  secondary: [SMB, AI-agent, Compliance-driven, Multilingual, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PartsOwed

## 1. One-liner

Shows an EU importer which products made them the legal repairer, then extracts the parts terms from the supplier.

## 2. Trend signal — why now?

On **31 July 2026 — thirteen days ago** — Directive (EU) 2024/1799 became applicable across the EU. Everyone read the headline as a consumer story: you get an extra year of guarantee if you choose repair over replacement, and manufacturers of washing machines, fridges, dishwashers, displays, phones, tablets and servers must repair them at a reasonable price.

The part nobody put on a poster is the liability cascade. From Noerr's analysis: if the manufacturer sits outside the EU, the obligation goes to its authorised representative. **If there is no authorised representative, the importer is responsible.** ADVANT Beiten's note is blunt about what that means operationally — the importer must provide repair services on request "regardless of product origin or whether damage was consumer-caused," must disclose repair information freely and comprehensibly for the full duration of the obligation, and must subcontract the repair if it has no capability of its own.

Read that against how a €10M European importer of Chinese small appliances actually operates. They have a warehouse, a three-person ops team, a customs broker, and a supplier contract that says nothing whatsoever about spare parts for the next ten years. They did not appoint themselves anything. The obligation arrived by default, by operation of the cascade, in the absence of a document they never asked their supplier to sign.

And the duration is the part that should scare them: spare parts availability runs **seven years for smartphones and ten years for washing machines**, in each case from the end of placing on the market. That is not a compliance project. That is a decade-long parts liability attached to a container that cleared customs in 2024.

Two more things make this bite right now. First, manufacturers must **publish indicative prices for typical repairs on a free-access website** — a live, per-market, per-SKU data obligation, not a PDF. Second, the transposition is a mess: at the deadline only a handful of member states had formally notified completion, with Croatia, Lithuania, Slovakia and Finland listed as having national measures while many others showed nothing in the register. Germany's Reparaturgesetz passed 26 June 2026, five weeks before the deadline. An importer selling into eight countries is now answering to eight different statutes with different penalties and procedures, and the EU's own repair platform that would have centralised any of this doesn't get a common interface until **31 July 2027** and isn't fully operational until **1 January 2028**.

So there's an eighteen-month window where the obligation is live, the official infrastructure isn't, and the party holding the liability is the least equipped to know it.

Provenance:
  - Signal 1 (demand): Repair obligation cascades to the EU importer when a non-EU manufacturer has no authorised representative; importer must repair, disclose repair info, and subcontract if incapable — https://www.noerr.com/en/insights/right-to-repair-enacted-obligations-for-manufacturers-and-importers and https://www.advant-beiten.com/en/news/new-law-directive-on-repair-of-goods-also-applies-to-importers — observed 2026-08-13
  - Signal 2 (feasibility): Obligations are EU-wide but the operative text is one of 27 national statutes; brands must hold "structured, per-SKU, per-market records" of spare-parts catalogues and repair-time commitments — https://www.cleolabs.co/en/blog/eu-right-to-repair-transposition-2026 — observed 2026-08-13
  - Signal 3 (economic): An established adjacent budget line already exists — EU authorised representative / GPSR responsible person services run €199–€5,000/year with €30–100 per-product review fees — https://responsible.eldris.ai/data-centre/eu-responsible-person-service-brands/eu-authorised-representative-cost-2026 and https://euverify.com/resource/authorised-representative-costs-guide/ — observed 2026-08-13
  - Signal 4 (timing): EU repair platform common interface not until 31 July 2027, fully operational 1 January 2028; uneven national transposition at the 31 July 2026 deadline — https://repair.eu/news/the-right-to-repair-directive/ — observed 2026-08-13
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is that the liability moved but the information didn't.

There is a real, funded, well-understood industry that sells EU market-access compliance to small importers — authorised representative services, GPSR responsible person, CE marking files, declaration of conformity. Euverify, EAS, EARP and a dozen others sell it at €199–€5,000/year. Every one of those services is built around a **point-in-time** question: is this product legal to place on the market today? They review a label, check a datasheet, hold a technical file, and put a name and address on the box.

Directive 2024/1799 asks a completely different question, and none of them are built for it: **can you still fix this thing in 2034, and at what price, and who is going to give you the part?** That's not a document review. It's a ten-year forward commitment tied to a supplier relationship that the importer has essentially zero leverage over once the goods have shipped.

The incumbent compliance firms will bolt "right to repair" onto their retainer as a line item and a memo. That memo will say "review your supply chain contracts allocating repair, spare parts and technical support duties" — which is exactly the advice ComplyMarket's ten-step roadmap gives, and it's correct and completely useless, because the importer has forty suppliers and nine hundred SKUs and no idea which of them are even in Annex II scope.

What's missing is the operational layer between the memo and reality:

1. **Scope triage.** Of my 900 SKUs, which ones are Annex II covered goods, and for each, when does the parts clock start and when does it end? This is answerable from product data the importer already has and nobody has bothered to compute.
2. **Cascade position.** For each supplier, does an EU authorised representative exist? If yes, I'm off the hook and I should have the evidence on file. If no, I am the manufacturer for legal purposes and I need to know that before a consumer does. Nobody has mapped this.
3. **Supplier extraction.** The only real fix is a signed parts-and-documentation commitment from the factory. Getting one out of a Shenzhen supplier requires the right document, in Mandarin, referencing the right article, sent at the moment of maximum leverage — the next purchase order.
4. **The public page.** The free-access website with indicative repair prices, per market, in the buyer's language, kept current for a decade.

That's the product. Not a memo — a register that computes the exposure, a workflow that closes it, and a page that discharges the disclosure duty.

The 10× isn't AI cleverness. It's that a law firm charges €8,000 to tell an importer they have a problem, and this tells them which 60 of their 900 SKUs are the problem, for €300 a month, in an afternoon.

## 4. Target market

**Primary customer:** The compliance-or-ops owner (often the COO, sometimes the founder, sometimes a "Quality & Compliance Manager" of one) at an **EU-established importer or own-brand distributor, €2M–€80M revenue, importing consumer electricals or small appliances from outside the EU**. Concretely: the company that brings in air fryers, vacuum cleaners, monitors, headphones, portable batteries, small white goods — sells them under its own label or a licensed one, through its own webshop plus Amazon/Bol/Kaufland, into five to ten member states.

Secondary, and probably the better first wedge: the **existing AR/GPSR service providers themselves** — Euverify, EAS and the long tail of smaller firms — who now need a repair-obligation answer for their existing book and would rather license one than build it. That's a channel play, covered in section 9.

**Why they buy:** Because the liability is unpriced and they can feel it. The specific fear isn't a regulator's fine on day one — it's a consumer in Germany demanding a repair on a 2025-vintage appliance in 2029, the importer discovering the Chinese supplier stopped making that model and won't answer emails, and there being no contractual recourse because nobody put a parts clause in the PO. Multiply by every SKU. The honest framing from the sources: an importer "carrying a repair obligation but has not been told this, has not planned for it, and has no spare parts access or service infrastructure" has a compliance problem.

**Rough TAM reasoning:** I'm not going to pretend to a precise count. The shape: Annex II categories cover household washing machines and dryers, dishwashers, refrigerators, electronic displays, phones, tablets, servers and related battery-containing goods. The EU importer base for consumer electricals in the €2M–€80M band is plausibly in the low tens of thousands across the 27 states, concentrated in Germany, the Netherlands, Poland, Italy and Spain. I need roughly **400 customers at ~€3,600/year** to clear €1.4M ARR. That's a low-single-digit percentage of a conservative read of the segment. The market is big enough and I don't need it to be bigger.

**Why now for them:** The obligation went live 31 July 2026. Their existing compliance vendor is sending them a memo about it this quarter. Their Q4 purchase orders to Asian suppliers are being written in September and October — which is the one moment in the year they have leverage to get a parts clause signed. If they miss this PO cycle they wait a year.

## 5. Product sketch (MVP)

- **Scope register** — upload the product catalogue (CSV, or pull from Shopify/Amazon/the ERP export they already generate); get back every SKU classified as Annex II in-scope or out, with the parts-availability clock start and end date computed per product, and a plain-language reason for each classification.
- **Cascade map** — per supplier, a determination of who actually holds the repair obligation: the non-EU manufacturer, its EU authorised representative, or you. Where an AR is claimed, store the evidence. Where none exists, flag the SKUs where you are the legal repairer.
- **Exposure summary** — one screen the COO can take to the board: how many SKUs, which markets, how many years of parts liability outstanding, and which suppliers represent the concentrated risk.
- **Supplier extraction pack** — a generated, ready-to-send parts-and-documentation commitment addressed to each supplier, in English and Mandarin (plus Turkish, Vietnamese, Hindi), citing the specific obligation, with a tracked send-and-chase workflow timed to the customer's PO cycle.
- **Repair information page** — a hosted, free-access page per market with indicative prices for typical repairs and spare-part ordering procedure, in the buyer's language, that satisfies the publication duty; versioned so you can prove what was published on any past date.
- **Per-market obligation deltas** — for the countries you actually ship to, what the national transposition requires beyond the EU floor, with the source statute cited. Starts with the five or six states that matter commercially and expands.
- **Change watch** — alerts when a member state's transposition lands or changes, when a parts clock is about to expire, and when a supplier's commitment goes unanswered past its deadline.

Deliberately **not** in v1: booking actual repairs, holding parts inventory, or being anyone's authorised representative. Those are services businesses with liability attached. This is the register and the paperwork.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a consulting engagement, which is exactly what it's displacing. Three places it does real work:

**Classification against Annex II at catalogue scale.** The importer's product data is garbage — "AIRFRYER XL 5.5L BLK V2" with a supplier SKU and a 300-word marketing description. Deciding whether that's an in-scope covered good, and which ecodesign regime sets its parts clock, is a judgement call over messy text that a human paralegal does at maybe 40 SKUs an hour. Across 900 SKUs and forty suppliers this is the entire cost of the manual alternative, and it has to be redone every time the catalogue changes. This is the load-bearing use.

**Reading the supplier contracts and ARs.** The determination of "is there an authorised representative and does the contract allocate parts duty" lives in PDFs, scanned POs, and email threads in three languages. Extracting a defensible answer from that pile is the second real use.

**Multilingual generation with legal precision.** The supplier letters and the per-market repair pages have to be correct in Mandarin and German simultaneously. Technical translation runs $0.15–0.35 per word commercially; generating and maintaining these across markets and a decade of updates is only economic if it's generated.

The honest caveat: **classification output must be reviewable, not authoritative.** Every determination shows its reasoning and its source, and the customer signs off. Selling an unreviewable legal conclusion to a small importer is how you end up owning their liability. The product's position is "here is your computed exposure and the evidence behind it" — never "you are compliant."

## 7. Localization angle

This is an EU play where localization *is* the product, which is the inverse of the usual framing.

- **Language:** The repair information must reach the buyer in the buyer's language, and the supplier letters must land in the supplier's. So the product is inherently multilingual in both directions — 24 EU languages outward, Mandarin/Vietnamese/Turkish/Hindi inward.
- **Jurisdiction:** 27 national transpositions of one directive, diverging on penalties, procedure and repairer-platform requirements, most of them finalised in the weeks around the deadline. Maintaining that delta table is the grind that makes the product hard to casually clone.
- **Sequencing:** Start with Germany and the Netherlands. Germany because the Reparaturgesetz is passed and the importer base is the largest; the Netherlands because Bol-driven own-brand importers are dense, English-comfortable, and buy SaaS without a procurement process. Poland and Italy next.

No India/LatAm angle here and I'm not going to invent one.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** €249/month entry (up to 250 in-scope SKUs, 3 markets), €499/month standard (up to 1,000 SKUs, 8 markets), €999/month for multi-brand groups. Annual billing with two months free — this buyer prefers a yearly line item because that's how the AR/GPSR retainer already sits in their budget.
- **ACV:** ~€3,600 realistic blended, given most land on standard and a chunk on entry.
- **Rough math to $1M ARR:** 260 customers × €333/mo × 12 ≈ €1.04M. At a 1.5% conversion off a well-targeted outbound list that's ~17,000 touches — achievable in 18 months with the channels in section 9, and materially faster if the AR-partner channel lands.
- **Rough math to $5M ARR:** ~1,150 customers at the same ACV, or ~600 customers with ACV pushed to €7K by adding the two obvious upsells: (a) per-market repair page hosting priced per country, and (b) the AR-partner white-label tier billed per end-client. Realistically $5M needs the partner channel to work; direct alone gets to $2–3M.
- **Expansion path:** SKU count grows, markets grow, and the same register extends naturally to the adjacent obligations landing next — ESPR/Digital Product Passport data for the same catalogue, and the European Repair Platform data feed when its interface opens in July 2027. The catalogue is the asset; each new regulation is another column.

Gross margin is high — inference on 900 SKUs is cents, and the expensive part (the national delta table) is a fixed cost amortised across all customers. That's the good structural property here.

## 9. Go-to-market wedge — first 100 customers

**1. The Annex II importer list, built from customs and marketplace data (target: 40 customers).** EU importers are identifiable — the importer's name and address is legally required on the product and in the listing. Scrape Amazon.de, Amazon.nl, Bol.com and Kaufland listings in the covered categories (air fryers, vacuums, monitors, small white goods), extract the EU importer block from the compliance section that GPSR already forces sellers to publish, and dedupe into a company list. This is a list that literally did not exist before GPSR made the field mandatory, and it maps precisely onto the people who inherited this obligation. Enrich, then send a **pre-computed exposure teaser**: "We ran your 14 listed appliance SKUs against Annex II — 9 are in scope, and for 4 of them the parts clock runs to 2035. Here's the one-pager." That's not a cold email, it's a free audit of their actual products. Expect a high reply rate because the artefact is specific to them.

**2. AR/GPSR service providers as a reseller channel (target: 35 customers, and the path to $5M).** There are dozens of firms selling EU responsible-person services at €199–€5,000/year to exactly this buyer — Euverify, EAS, EARP and a long tail of national players. Every one of them is being asked "what about right to repair?" by their existing book right now, and none of them want to build a per-SKU classification engine. Approach the top 15 with a white-label tier: they keep the client relationship and margin, we provide the register. Two signed partners with a few hundred clients each is a faster route to 100 customers than any direct motion.

**3. The German and Dutch trade associations and customs-broker networks (target: 25 customers).** Importer trade bodies and customs brokers are the trusted advisor for this segment and are actively fielding right-to-repair questions they can't answer. Offer a co-branded webinar plus a free "are you the legal repairer?" self-check tool. Brokers refer because it makes them look prepared and costs them nothing.

The reason I believe the first channel: the outreach artefact is a real computation on the prospect's real catalogue, produced for near-zero marginal cost. That's the whole unlock — the same engine that is the product is also the lead magnet.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: the web app, document generation, hosted public pages, multilingual output, and the classification pass over catalogue data — all standard LLM-plus-CRUD work. The custom effort is in three places: building the Annex II / ecodesign scope logic so the parts clocks compute correctly per category, assembling the national transposition delta table for the first five or six member states (this is research labour, not engineering — likely a paid contract lawyer for a few weeks), and the ingestion adapters for messy catalogue exports.

Realistically **14–18 weeks to a v1** a paying design partner will use, for a technical founder plus a part-time legal researcher. The delta table is the long pole and it's a grind, not a risk.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Compliance tooling. Must be positioned as a register and document generator, not as legal advice or as an authorised representative service. |
| Ethical — no harm / dark patterns | ✅ | Helps small importers meet a consumer-protection obligation. The consumer's interest and the customer's are aligned here, which is rare and pleasant. |
| Market exists (evidence above) | ✅ | Obligation live 31 July 2026; adjacent AR/GPSR market already transacting at €199–€5,000/year. |
| 1–5 person team can build this | ✅ | Technical founder + part-time legal researcher. |
| Launchable with <$50K / ₹40L | ✅ | Main cost is the legal research contract for the national delta table. Comfortably under €30K. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real, expensive, and decade-long — but it's a *latent* liability. Nobody's phone is ringing yet. It's a 19 in 2029 and a 16 today, and I'm scoring today. The urgency has to be manufactured by showing them their own exposure. |
| Demand evidence | 15 | 11/15 | Strong regulatory and adjacent-spend evidence; the AR/GPSR price points prove the budget line exists. Docked because I could not find importers complaining about *this specific* obligation in their own words — the market is thirteen days old. Legal-press volume is not the same as customer pull. |
| Build feasibility | 15 | 11/15 | Standard stack, but the scope logic and the 27-jurisdiction delta table are genuine work. 14–18 weeks, not 6. |
| Distribution clarity | 15 | 12/15 | The importer list is legally forced into public view by GPSR and the outreach artefact is a real per-prospect computation. Docked because the AR-partner channel, which carries the upside, is unproven. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored to an existing retainer the buyer already pays. €1M needs 260 customers — very reachable. $5M requires the partner channel to work. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to design partners on the exposure report alone, before the full product exists. Realistically 8–10 weeks to first euro. |
| Defensibility | 10 | 5/10 | Execution moat plus an accumulating jurisdiction table and workflow lock-in. But an incumbent AR provider with distribution could copy this in two quarters — which is precisely why channel #2 is "partner with them" rather than "compete with them." |
| **Total** | **100** | **75/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can build the classification pipeline and who either has EU product-compliance background or will buy it. Without a credible legal researcher this ships wrong answers, and wrong answers in compliance are worse than no product.

### Key assumptions to validate

1. **Assumption:** A meaningful share of EU importers of Annex II goods genuinely have no authorised representative upstream, and are therefore holding the obligation unknowingly. **How to test:** Take 50 own-brand appliance listings off Amazon.de and Bol.com, pull the published importer and manufacturer blocks, and check how many name a non-EU manufacturer with no EU AR. If it's under 20%, the addressable population is far smaller than I think and the whole thesis narrows.
2. **Assumption:** The buyer will pay for a register and paperwork rather than waiting for their existing AR provider to bundle it. **How to test:** 20 discovery calls with importers off the scraped list; offer a €1,500 paid pilot of the exposure report. Fewer than 3 conversions means it's a feature of someone else's product, not a product.
3. **Assumption:** The AR/GPSR providers will partner rather than build. **How to test:** Pitch the white-label tier to 10 of them in the first month. Two signed LOIs validates the channel that carries the $5M case.
4. **Assumption:** Classification against Annex II can hit an accuracy a customer will sign off on, from the messy catalogue data importers actually have. **How to test:** Hand-label 200 SKUs across four real catalogues, measure against the pipeline. Below ~90% with clear reasoning shown, the review burden eats the value.

### Risk flags

1. **Latency risk — the most serious one.** This obligation has almost no enforcement pressure in year one. Consumers don't know to demand it, national regulators are still standing up, and the EU platform that would make repair discoverable isn't live until 2027–28. A liability that doesn't hurt until 2029 is a hard thing to sell in 2026. The mitigation is the exposure report making it concrete and the Q4 PO cycle making it timely, but this is the axis that could make the whole thing three years early.
2. **Incumbent absorption.** The AR/GPSR firms own this customer already and this is a natural extension of their retainer. Partner-first is the strategy; if the top providers all build instead, direct sales gets a lot harder.
3. **Regulatory ambiguity.** Transposition is incomplete and uneven, penalties are unclear across most states, and guidance will shift for the next year. Building a jurisdiction table on moving text means real maintenance cost and some risk of publishing wrong deltas.
4. **Liability positioning.** Selling compliance determinations to small businesses invites "your tool said we were fine." Terms, human sign-off, and never asserting compliance — only computed exposure with sources — are non-negotiable design constraints, not fine print.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder who can ship an LLM classification pipeline over messy
                        catalogue data, paired with a contract EU product-compliance lawyer for
                        the Annex II scope logic and the national transposition table.
Time to revenue:        8–10 weeks to first paid pilot; 14–18 weeks to production v1
Capital to launch:      €25–30K (mostly the legal research contract)
Top 3 assumptions to validate first:
  1. Real population of exposed importers — audit 50 Amazon.de/Bol.com own-brand appliance
     listings for a non-EU manufacturer with no EU authorised representative. Need >20%.
  2. Willingness to pay ahead of enforcement — 20 discovery calls, offer a €1,500 paid pilot
     of the exposure report. Need 3+ conversions.
  3. Partner channel viability — pitch the white-label tier to 10 AR/GPSR providers.
     Need 2 signed LOIs.
Kill criteria:
  - Abandon if fewer than 20% of audited listings show an exposed importer — the cascade
    is rarer than the legal commentary implies and the market isn't there.
  - Abandon if 20 discovery calls produce fewer than 3 paid pilots — confirms the liability
    is too distant to sell against in 2026; revisit in 2028 when the EU repair platform is
    live and consumers start actually demanding repairs.
  - Abandon if two or more major AR/GPSR providers ship an equivalent register before v1.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Scrape 300 own-brand appliance and electronics listings from Amazon.de and Bol.com in Annex II categories. Extract the published EU importer and manufacturer blocks that GPSR forces into the listing. Determine, per listing, whether a non-EU manufacturer is named and whether any EU authorised representative appears. Produce the exposed-importer rate and a deduplicated company list. This alone tells me whether the market exists.
- **Day 3–4:** Take the 25 most clearly exposed importers. For each, hand-build the one-page exposure teaser — SKUs in scope, parts clock end dates, who holds the obligation. Send all 25. Book calls.
- **Day 5:** Run the calls. In parallel, pitch the white-label tier to 10 AR/GPSR providers by email.

**Falsifiable outcome:** Go if the audit shows **>20% exposed importers**, at least **5 of 25 book a call**, and at least **2 verbally commit to a €1,500 paid pilot** — or if 2 AR providers ask for a partnership call. Anything less and this is a 2028 idea, and I'd rather know that in five days than after four months of building a jurisdiction table nobody's ready to buy.
