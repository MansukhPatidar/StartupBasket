---
title: "ChargeBack — debit-note contest desk for India's D2C brands"
slug: quick-commerce-debit-note-defence
date: 2026-08-11
category: Retail / India — D2C and Emerging FMCG Brands (₹5Cr–₹150Cr) Whose Quick-Commerce Payouts Are Cut by Debit Notes With No SKU-Level Backup
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Rebuilds the SKU-level proof behind every unexplained quick-commerce deduction, so brands can contest it instead of absorbing it."
tags:
  vertical: Retail
  model: SaaS
  geography: India
  secondary: [SMB, AI-agent, Compliance-driven, D2C, Quick-commerce, Finance-ops]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ChargeBack

## 1. One-liner

Rebuilds the SKU-level proof behind every unexplained quick-commerce deduction, so brands can contest it instead of absorbing it.

## 2. Trend signal — why now?

Three things moved at once, and they moved this year.

**The deductions became the business model.** Quick commerce in India is no longer a side channel — it crossed ₹25,000 Cr GMV in 2025 growing 40%+ YoY, and hit roughly ₹11,000 Cr in January 2026 alone, roughly doubling year on year. Blinkit runs 700+ dark stores across 40+ cities, Zepto has crossed 400, and the three platforms hold 90%+ of consolidated market share. For a whole generation of beauty, nutraceutical, petcare and premium-FMCG brands, this is now 40–70% of revenue. ZOFF Foods co-founder Akash Agrawalla has said quick commerce accounts for 65–70% of their business while margins keep compressing.

**The billing got adversarial and it's documented.** The single best signal here isn't a survey, it's an investigation. A brand doing ₹50 Cr revenue received a ₹3 lakh debit note labelled only "Brand Funded Discount" — no SKU-wise breakdown, no order-level mapping, no calculation. The same brand sent **132+ emails** requesting reconciliation of its account and got a legal threat from the platform's lawyer in reply. The threatened suit never materialised. That's not a billing dispute, that's a brand with no ability to audit a number that lands on its P&L. Another founder documented running ₹15L of ads in December for ₹38L in sales, then ₹0 of ads in January for the same ₹38L in sales — "The portal doesn't work at all!" — while alleging the platform pushed the ad commitment hard.

**The GST law changed underneath all of it.** Budget 2026 amended Section 15(3)(b) of the CGST Act to drop the requirement that a discount be "known and agreed upon before or at the time of supply." Post-sale discounts can now flow through GST credit notes provided the recipient reverses the attributable ITC. Separately, a January 2026 Gujarat High Court ruling held there is no statutory provision mandatorily requiring a buyer to reduce ITC on the basis of credit notes issued by the seller. Translation for a brand: whether a platform's deduction arrives as a GST-compliant credit note or a bare commercial debit note now has direct, quantifiable tax consequences — and most brands cannot tell which one they just received, let alone whether it was computed correctly.

There is reconciliation software in this market. eVanik serves 2,000+ sellers on payment reconciliation. Omnivio explicitly covers Blinkit, Zepto, Instamart and Flipkart Minutes, comparing "what the channel owes you against what it actually paid." But read what they actually promise: they flag short-payments, delays and missing settlements against a rate card. That catches arithmetic. It does not touch the debit note — the discretionary, narrative-labelled charge with no backup, which is exactly where the disputed money and the new GST exposure live.

Provenance:
  - Signal 1 (demand): Documented Zepto/D2C dispute — ₹3L debit note labelled only "Brand Funded Discount" with no SKU breakdown or order-level mapping; brand sent 132+ reconciliation emails and received a legal threat in response; separate ad-spend efficacy dispute (₹15L ads → ₹38L sales in Dec; ₹0 ads → ₹38L sales in Jan) — https://nishantmittal.substack.com/p/zepto-vs-d2c-brands-contentious-ad — observed 2026-08-11
  - Signal 2 (feasibility/regulatory): Budget 2026 amendment to CGST §15(3)(b) removing the pre-agreement condition for post-sale discounts, cross-referenced to §34 credit notes with mandatory recipient ITC reversal; plus Gujarat HC (Jan 2026) on debit notes and ITC reduction — https://www.mondaq.com/india/sales-taxes-vat-gst/1758210/gst-discount-schemes-and-credit-notes-changes-by-budget-2026 and https://a2ztaxcorp.net/no-mandatory-itc-reversal-on-post-sale-discounts-by-the-buyer-if-gst-liability-paid-by-raising-debit-note/ — observed 2026-08-11
  - Signal 3 (economic): Quick commerce GMV ~₹11,000 Cr in January 2026 alone, roughly doubling YoY; Blinkit 700+ dark stores, Zepto 400+; three platforms >90% share; documented cost stack of 35–50% commissions, ₹25,000/SKU/state listing fees, ₹2–3L/month minimum marketing — https://digitalinasia.com/india-quick-commerce-blinkit-zepto-instamart/ and https://ecomdigest.in/marketplaces/quick-commerce-d2c-brands-cost-traps — observed 2026-08-11
  Category: Regulatory arbitrage

## 3. The opportunity

Every existing reconciliation tool in India is built around a question the platform is happy to answer: *did the settlement match the rate card?* That's a solved, mechanical comparison. Order value minus known commission minus known logistics fee equals expected payout. Flag the delta. Fine.

The money that's actually leaking is in the charges that have no rate card. Brand-funded discounts. Ad spends the brand didn't approve or can't verify delivered anything. Damage and pick-error pass-throughs where the burden of proof sits on the seller. Expiry rejects. Fill-rate penalties. These arrive as debit notes with a two-word label and a rupee number. There is no line item to compare against, so reconciliation software declares the settlement "matched" and moves on — the brand accepts a charge it structurally cannot audit.

The gap is that nobody rebuilds the *counter-case*. To contest a ₹3 lakh "Brand Funded Discount" you need to reconstruct, from data the brand already possesses, which SKUs at which dark stores were discounted by how much on which dates, sum it, and show the platform its own number is wrong or unsupported — in a format their category manager can't wave away. That's a document-and-evidence assembly problem, and it's the sort of thing that used to require a finance analyst per platform per month. That's what changed: parsing heterogeneous settlement PDFs, debit notes, ad reports and PO/GRN files well enough to reassemble a defensible claim is now cheap.

Incumbent weakness, named plainly: eVanik and Omnivio sell *visibility*. A brand that buys them learns it is being charged ₹3 lakh it doesn't understand. It still has no idea what to do next. ChargeBack sells the next step — the challenge letter with the arithmetic attached, and the GST classification of the note so the CA knows whether ITC was just silently lost.

## 4. Target market

- **Primary customer:** The finance lead, ops head, or founder at an Indian D2C/emerging-FMCG brand doing ₹5 Cr–₹150 Cr annual revenue, live on 2–3 of Blinkit / Zepto / Instamart / Flipkart Minutes, where quick commerce is 30%+ of revenue. Beauty, nutraceuticals, packaged foods, petcare, babycare, home care. Typically 1–3 people in finance, no dedicated marketplace analyst, running reconciliation partly in Excel.

- **Why they buy:** They are watching gross margin get eaten by charges they cannot itemise. Agro Mantra founder Saurabh Goel has described platforms having "zero accountability for sellers' stock, returning unsold inventory," creating hidden costs beyond the visible fees. Decision Pinnacle founder Deepti Karthik has been blunt that quick commerce is "viable only for brands with 70%+ gross margins... for others, it remains a loss-making customer acquisition channel." When you're operating on that knife-edge, a ₹3 lakh unexplained debit note is not an accounting annoyance — it's a meaningful fraction of the quarter's profit. And the brand that sent 132 emails demonstrates the current workaround: manual, exhausting, and it loses.

- **Rough TAM reasoning:** I can't source a clean count of brands selling on q-commerce, so I'll reason from structure rather than assert a number. Blinkit alone lists tens of thousands of SKUs across 700+ dark stores; the brands behind them run from single-SKU startups to Mondelez. The addressable slice for this product is brands large enough that deductions are material (₹5 Cr+ revenue) but small enough to lack an in-house marketplace finance team (under ~₹150 Cr). Even a conservative read of India's D2C landscape — a market estimated at USD 108.76 Bn in 2026 — puts that band in the low tens of thousands of brands. I need perhaps 400 of them. This is comfortably a niche play, which is exactly why it fits a bootstrapper and not a VC.

- **Why now for them:** Two forces. Q-commerce went from experiment to primary channel in ~18 months, so the deduction base scaled with it. And the 2026 GST changes mean the *form* of a platform's discount document now determines whether the brand keeps its input tax credit — a question that didn't have teeth before and that no brand's current process even asks.

## 5. Product sketch (MVP)

- **Debit-note inbox.** Forward or upload every debit note, credit note, settlement report and ad invoice from Blinkit, Zepto and Instamart. The product parses each one into structured line items, no matter how badly formatted.
- **Backup-gap flagging.** Every charge gets a status: *substantiated* (order-level mapping present and arithmetic checks out), *partially substantiated*, or **unsupported** (a label and a number, nothing else). The unsupported pile is the product's headline number.
- **Counter-computation.** For brand-funded discounts, the product reconstructs what the discount *should* have been from the brand's own PO, MRP, agreed-scheme and sales data, and shows the delta against what was charged.
- **Ad-spend efficacy check.** Charts committed vs. spent vs. attributable sales lift by period, so a brand can see the December-versus-January pattern in its own numbers before the next ad commitment conversation.
- **GST classification.** For each note, states whether it is a GST credit note under §34 or a bare commercial note, and what that means for ITC — the line the CA actually needs.
- **Challenge pack generator.** One click produces a dated, itemised dispute document per platform: the charge, the missing backup, the recomputed number, the delta claimed, and the supporting extracts as annexures.
- **Claim tracker.** Every raised dispute gets a status, an age, and an owner, so a brand can see it has ₹14 lakh outstanding across 23 open claims averaging 40 days old — instead of a folder of unanswered emails.
- **Recovery ledger.** Running total of contested, conceded, and recovered amounts by platform, per quarter. This is the ROI screenshot the customer sends their founder.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist. Two places carry the weight.

**Ingestion.** Every platform emits a different settlement artefact, they change formats without notice, and debit notes arrive as PDFs, portal screenshots, and email bodies with the charge described in prose. Hand-written parsers for this are a treadmill — three platforms times a format change every quarter is a full-time job forever. Document models that read a debit note the way a finance analyst does, and normalise a "Brand Funded Discount — Jul cycle" line into a structured charge with a period, a scope and an amount, are what make the ingestion cost survivable for a small team.

**Substantiation reasoning.** Deciding whether a charge is supported isn't a lookup. It means holding the brand's PO data, agreed scheme terms, MRP history and sales file against a vaguely-worded charge and determining whether the platform's number can be derived at all — and if not, articulating precisely which piece of evidence is missing. Then writing that up as an argument a category manager has to respond to. That's a judgment-and-drafting task. It is the entire product, and it's the part a spreadsheet has never been able to do.

What is *not* AI: the arithmetic reconciliation, the claim tracking, the ledger. Deliberately so — those need to be exactly right, every time, and I'd rather they be boring deterministic code.

## 7. Localization angle

This is India-first by construction, not by choice, and that's the moat's foundation.

The three platforms are Indian. The document formats are theirs. The GST treatment of credit notes, debit notes and ITC reversal under §15(3)(b) and §34 is Indian statute, freshly amended in Budget 2026 and freshly litigated in the Gujarat High Court. The commercial norms — brand-funded discounts, listing fees quoted per SKU per state, mandatory quarterly ad wallets — are specific to this market's balance of power between platforms and brands.

A US chargeback-recovery tool built for Amazon vendor deductions cannot be pointed at this. Different documents, different law, different disputes. Conversely, once the GST logic and the three platform parsers are right, that is exactly the sort of unglamorous local knowledge that a foreign entrant will not bother to acquire for a market this size.

Pricing is local too: ₹8,000–₹40,000/month works here where a $500–2,000/mo US-style tag would kill the deal at the ₹5 Cr end of the range.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers, priced per platform connected and by GMV band.
  - **Starter — ₹8,000/mo:** 1 platform, up to ₹1 Cr/mo q-commerce GMV.
  - **Growth — ₹20,000/mo:** 3 platforms, up to ₹5 Cr/mo GMV, challenge pack generation, GST classification.
  - **Scale — ₹40,000/mo:** unlimited platforms, multi-entity, CA seat, priority claim support.

  I've deliberately avoided contingency pricing (a % of recovered amount). It's tempting and it converts better, but it makes revenue lumpy, disputes about attribution inevitable, and the business much harder to run with three people. Flat SaaS, with the recovery ledger doing the ROI arguing.

- **ACV:** Blended ₹2.4L/year (~$2,900). Realistic mix: 55% Growth, 25% Starter, 20% Scale.

- **Rough math to $1M ARR:** ₹8.7 Cr ARR ÷ ₹2.4L = **~360 brands.** At an average ₹20,000/mo, a brand needs to believe the product finds it ₹60,000+/month in contestable charges to feel obviously worth it. Against documented single debit notes of ₹3 lakh, that's not a stretch — but note it's the assumption the whole model rests on, and it's assumption #1 in section 13.

- **Rough math to $5M ARR:** ₹43 Cr ARR needs ~1,300 brands at current ACV, or ~700 brands if ACV roughly doubles. Getting there needs one of: (a) the marketplace expansion below, taking the same engine to Amazon/Flipkart/Nykaa deductions, which is the same problem with different documents; (b) selling through CA firms and D2C-focused accounting practices as a multi-client console; or (c) moving upmarket into ₹150 Cr+ brands with multi-entity needs. I'd bet on (a) and (b). $5M is a stretch case here, not the base case — the base case is a very good ₹10–15 Cr ARR business, which is precisely the size I want.

- **Expansion path:** Start with one platform, expand to three (2.5× ACV). Add marketplaces beyond q-commerce. Add the CA seat, then the multi-entity rollup. Charges scale with the brand's GMV, so ACV drifts up with customer growth without a price increase conversation.

## 9. Go-to-market wedge — first 100 customers

The nice thing about this market is that the customers are enumerable and the pain is provable in a single screenshot.

- **The audit-first cold open (customers 1–40).** Every brand on Blinkit/Zepto/Instamart is publicly listed on those apps, by category and by city. Scrape the brand list per category, match to company records and founder/finance-lead LinkedIn profiles. Cold outreach offers one thing: *send us last quarter's debit notes and settlement files, we'll return a free audit naming every charge that has no backup and what it's worth.* No demo, no trial signup — a number. This is high-effort and doesn't scale past a few hundred, which is exactly why it works for the first 40 and why an incumbent won't copy it. Realistic: 300 targeted brands → ~60 audits delivered → 20–25% convert.

- **CA firms and D2C accounting practices (customers 40–80).** The GST angle is the door. Firms specialising in e-commerce/D2C clients are the ones who'll get asked "why did our ITC not match" once the 2026 §15(3)(b) changes bite. Recruit 15–20 such practices with a revenue share or a free multi-client console seat; each brings 3–8 clients. This channel is slower to start and much better compounding — the CA becomes the one telling the brand it has a problem.

- **The public-dispute list (customers 1–20, parallel).** There is an existing, visible cohort of brands who have already complained publicly about platform deductions, ad-spend disputes and unanswered reconciliation emails — on LinkedIn, in Substack investigations, in founder communities. These people are pre-sold on the problem and angry about it. Direct outreach referencing their specific complaint, offering the audit. Small list, absurdly high conversion.

- **D2C founder communities and the reconciliation content wedge (customers 80–100+).** Inc42's D2C ecosystem, ecommerce founder WhatsApp/Slack groups, and the Indian D2C conference circuit. The content that works is not thought leadership — it's *"here is a real ₹3L debit note, here's how we proved ₹1.8L of it was unsupported."* Anonymised teardowns. That format travels in this community and it demonstrates the product instead of describing it.

- **Category-manager pressure as a flywheel.** Once 30+ brands in one category are all sending structured, itemised challenge packs instead of angry emails, the platforms' own category teams start treating documented disputes as the normal path. That makes the product more effective for every user, and it's earned, not bought.

## 10. Build complexity — justification

**Medium.** The web app, claim tracker and ledger are standard off-the-shelf work. The real cost sits in two places: building reliable ingestion for three platforms' settlement, debit-note and ad-report formats — including the badly-formatted ones — and encoding the GST credit-note/debit-note/ITC logic correctly enough that a CA trusts it. Neither is research-grade, but both need real care and access to genuine documents, which means design partners from week one. Call it **14–18 weeks to a credible v1** for two people, one of whom needs GST fluency or a CA on retainer. Ingestion is an ongoing tax, not a one-time build — platforms change formats and the parsers must follow.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Brand's own data, brand's own documents, brand's own commercial dispute. Helping a company audit charges levied against it is unambiguously legal. No platform API scraping required for v1 — customers supply their files. |
| Ethical — no harm / dark patterns | ✅ | Product argues for accuracy and documentation, not for filing spurious claims. Substantiated charges are marked substantiated. Correcting an information asymmetry between a funded platform and a small brand is the good version of this. |
| Market exists (evidence above) | ✅ | Documented disputes, named founder quotes on margin compression, existing paid reconciliation vendors (eVanik 2,000+ sellers), ₹11,000 Cr/month channel. |
| 1–5 person team can build this | ✅ | Two builders plus GST expertise. 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically ₹12–18L: two people for four months, document-AI inference, hosting, and a CA retainer. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Direct, recurring, quantified P&L damage on a channel that is 40–70% of revenue for the target brand. Documented case of a ₹3L unexplained note and 132 unanswered emails. Felt monthly, at settlement. Not 18–20 because most brands have grimly normalised it as a cost of the channel — the pain is severe but partly anaesthetised, which is a real sales obstacle. |
| Demand evidence | 15 | **12**/15 | Strong: paid incumbents with thousands of customers prove willingness to pay for adjacent reconciliation; multiple named founders on record about margin compression; a documented, specific dispute. Held back from 13–15 because I could not source direct evidence of brands *paying specifically* to contest debit notes — that's the inference, and it's the one the audit-first GTM is designed to test cheaply. |
| Build feasibility | 15 | **11**/15 | Standard stack, no novel infra. Two real costs: heterogeneous document ingestion across three platforms, and GST logic that has to be right. 14–18 weeks with a pair. Ongoing parser maintenance is a permanent tax. |
| Distribution clarity | 15 | **12**/15 | Enumerable customers (visible on the apps), a free-audit opener that proves value pre-sale, a pre-angry cohort with public complaints, and a CA channel with structural pull from the GST change. Not higher because the CA channel is unproven and the audit motion is labour-intensive. |
| Revenue mechanics | 15 | **12**/15 | Pricing benchmarked against a market already paying for reconciliation SaaS. ₹2.4L ACV × 360 brands = $1M is a credible, non-heroic number. Docked because $5M requires a second act (marketplace expansion or the CA channel), not just more of the same. |
| Time to first revenue | 10 | **7**/10 | The free audit shortens the sales cycle materially — a brand shown ₹4L of unsupported charges in its own data converts fast. But v1 needs 14–18 weeks first, and finance buyers in this band take a few weeks to sign. Realistically 4–6 months to first paying customer from a standing start. |
| Defensibility | 10 | **5**/10 | Honest score. Parser libraries and GST logic are a genuine 6–12 month head start, and accumulated dispute-outcome data ("challenges phrased this way get conceded") compounds nicely. But eVanik or Omnivio could bolt this on — they have the customers and the ingestion already. This is an execution-and-focus moat, and it wins only if it's a wedge to somewhere, or if it moves fast enough to own the category name. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Document ingestion at this level of messiness is real engineering. GST treatment of credit/debit notes and ITC is real domain knowledge — get it wrong and a CA kills your credibility with one look. If the founding pair isn't one strong builder plus one person with genuine Indian indirect-tax fluency, hire the second before writing code.

### Key assumptions to validate

1. **Assumption:** A meaningful share of q-commerce debit notes are genuinely unsupported — not merely opaque to the brand, but actually lacking derivable backup. **How to test:** Get 15 brands to hand over one quarter of debit notes and settlement files under NDA. Manually attempt substantiation on every charge. If under 20% of rupee value comes back unsupported or mis-computed, the product's core claim is too thin and the pricing collapses. This is the make-or-break test and it costs two weeks and zero code.

2. **Assumption:** Platforms actually concede when presented with a structured, itemised challenge. **How to test:** With 5 design-partner brands, manually produce and submit challenge packs on ~₹20L of disputed charges. Track concession rate and cycle time over 8 weeks. If nothing gets conceded regardless of evidence quality, the product produces beautiful documents and no money — and the value prop has to retreat to "know your true margin," which is a much weaker sale and a much lower price.

3. **Assumption:** Brands will pay flat SaaS rather than demanding contingency. **How to test:** Quote both structures to 20 prospects in the audit motion. If they overwhelmingly refuse flat pricing, the business model changes shape — and so does its attractiveness.

4. **Assumption:** The 2026 GST changes create real, felt ITC exposure that a CA will act on. **How to test:** Interview 10 CAs serving D2C clients. Ask directly whether the credit-note-vs-debit-note distinction on marketplace deductions has come up with clients since the Budget 2026 amendments. If it hasn't yet, the GST wedge is early — still valid, but it can't be the lead message this year.

### Risk flags

1. **Platform retaliation.** The most serious risk, and it's evidenced, not hypothetical: the brand that pushed hardest for reconciliation received a lawyer's letter. Platforms control listing visibility, ad placement and fill-rate priority. A brand may rationally decide that contesting ₹3L isn't worth being deprioritised on a channel that is 60% of its revenue. Mitigation is product design — tiered challenge intensity, letting the brand pick its battles, framing packs as clarification requests rather than accusations — but this is a genuine ceiling on adoption and I won't pretend otherwise.

2. **Incumbent bolt-on.** eVanik and Omnivio already ingest these settlement files and already have the customers. Debit-note substantiation is a feature they could ship. The defence is speed, depth of GST logic, and owning the dispute-outcome dataset — none of which are permanent.

3. **Platform hygiene improves.** If regulatory or IPO pressure pushes Blinkit/Zepto/Instamart into issuing properly itemised, GST-compliant notes as standard, the unsupported-charge pile shrinks and the product's headline number deflates. Zepto has already stated debit notes would be "GST-compliant going forward" — though subsequent notes reportedly still lacked GST. Watch this closely; it's the clearest kill signal.

4. **Normalised pain.** Brands have absorbed these deductions for years. "That's just the cost of q-commerce" is the objection that loses deals even when the product works. The free-audit motion exists precisely to convert a vague resignation into a specific rupee number.

5. **Ingestion treadmill.** Three platforms changing document formats without notice is a permanent maintenance cost on a small team. Underestimate it and support quality degrades exactly as the customer base grows.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical pair — one strong builder for document ingestion,
                        one with genuine Indian GST/indirect-tax fluency (or a CA
                        co-founder). Prior D2C or marketplace-ops experience is a
                        large unfair advantage for the audit-first GTM.
Time to revenue:        4–6 months (14–18 weeks to v1, then a fast audit-led close)
Capital to launch:      ₹12–18 lakh ($15–22K)
Top 3 assumptions to validate first:
  1. Real unsupported-charge rate — manually attempt substantiation on one quarter
     of debit notes from 15 brands. Need >20% of rupee value unsupported.
  2. Platform concession rate — hand-build and submit challenge packs on ~₹20L of
     charges for 5 design partners; track what actually gets reversed in 8 weeks.
  3. Flat-SaaS willingness to pay — quote flat vs contingency to 20 prospects.
Kill criteria:
  - Abandon if under 20% of audited debit-note rupee value proves unsupported or
    mis-computed across 15 brands. The premise is then false.
  - Abandon if fewer than 2 of 5 design partners recover any money within 8 weeks
    of submitting well-evidenced challenge packs — it means platforms simply don't
    concede and evidence quality is irrelevant.
  - Abandon if 3+ design partners withdraw citing fear of platform retaliation.
    That ceiling would cap the market below the point where this is worth building.
  - Abandon if all three platforms ship itemised, GST-compliant deduction reporting
    as standard before v1 launches.
```

## 15. Next step — 1-week validation sprint

The good news: the single most important question here can be answered with documents and a spreadsheet, before a line of code.

- **Day 1–2 — Get the documents.** Reach 25 brands in the ₹5–150 Cr band on Blinkit/Zepto/Instamart. Route in through the publicly-complaining cohort first — they'll talk. Ask for one quarter of debit notes, credit notes, settlement reports and ad invoices under NDA, in exchange for a free written audit. Target: files from 15 brands.

- **Day 3–4 — Attempt substantiation by hand.** For every charge, try to derive the platform's number from the brand's own PO, MRP, scheme and sales data. Classify each: substantiated, partially substantiated, unsupported. Tally rupee value in each bucket. Simultaneously classify each note as a GST §34 credit note or a bare commercial note, and compute the ITC consequence. This is tedious manual work and that is the point — it's the product, performed by hand, which is the only honest way to know whether the product has anything to sell.

- **Day 5 — Decide.** Two falsifiable numbers gate the go/no-go:
  - **Unsupported rupee share ≥ 20%** of total audited deduction value. Below that, kill it — there isn't enough contestable money to justify ₹20,000/mo.
  - **≥ 5 of 15 brands verbally commit to a paid pilot** on the spot when shown their own number. Below that, the pain is anaesthetised and the sale is harder than the score assumes.

If both clear, the immediate next move is not to build the full product — it's to hand-produce challenge packs for those 5 brands and find out whether the platforms concede. Sell the outcome manually before automating it. If nothing gets conceded, no amount of engineering fixes that.

---

Sources: [Zepto vs. D2C Brands investigation](https://nishantmittal.substack.com/p/zepto-vs-d2c-brands-contentious-ad) · [Quick commerce D2C cost traps](https://ecomdigest.in/marketplaces/quick-commerce-d2c-brands-cost-traps) · [GST discount schemes and credit note changes, Budget 2026](https://www.mondaq.com/india/sales-taxes-vat-gst/1758210/gst-discount-schemes-and-credit-notes-changes-by-budget-2026) · [Gujarat HC on debit notes and ITC](https://a2ztaxcorp.net/no-mandatory-itc-reversal-on-post-sale-discounts-by-the-buyer-if-gst-liability-paid-by-raising-debit-note/) · [India quick commerce market 2026](https://digitalinasia.com/india-quick-commerce-blinkit-zepto-instamart/) · [Omnivio reconciliation FAQ](https://www.omnivio.io/faq) · [eVanik payment reconciliation](https://www.evanik.ai/payment-reconciliation) · [CBIC clarification on post-sale discounts](https://www.ey.com/en_in/technical/alerts-hub/2025/09/cbic-clarifies-treatment-of-post-sale-and-secondary-discount-under-gst)
