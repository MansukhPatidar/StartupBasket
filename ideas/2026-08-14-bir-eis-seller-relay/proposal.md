---
title: "SariRelay — e-invoice relay for Philippine online sellers"
slug: bir-eis-seller-relay
date: 2026-08-14
category: Compliance / Philippines — Shopee, Lazada and TikTok Shop Sellers (₱3M–₱150M Annual Gross) Who Must Transmit a Structured e-Invoice for Every Completed Order by 31 December 2026 and Whose Marketplace Refuses to Do It for Them
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Turns every marketplace order into a BIR-ready structured invoice and transmits it inside the three-day window."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Compliance-driven, SMB, E-commerce, Marketplace-integrated, Solo-builder]
axes:
  problem: 17
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# SariRelay

## 1. One-liner

Turns every marketplace order into a BIR-ready structured invoice and transmits it inside the three-day window.

## 2. Trend signal — why now?

Three things landed on Philippine online sellers inside eighteen months, and they compound.

**The mandate is real and dated.** Revenue Regulations No. 11-2025 (effective 25 February 2025), reinforced by RR No. 26-2025, put "e-commerce and internet businesses" in Group 1 of the BIR's Electronic Invoicing System rollout. Group 1 must issue structured electronic invoices by **31 December 2026**. Not paper. Not a PDF. JSON, with roughly 20 mandatory fields, JWS-signed, transmitted to the BIR EIS **within three calendar days of each transaction**. Stage 1 of the system went live in March 2026, so the plumbing exists and the clock is running.

**The penalties are per-invoice, which is the part sellers haven't priced in.** Failure to issue a structured e-invoice runs ₱1,000 to ₱50,000 *per offence* — and the offence unit is the invoice, not the month. Failure to transmit or late reporting carries ₱10,000 or 1/10 of 1% of annual net income daily, whichever is higher. Violations running past 180 days let the BIR order the business closed. A seller doing 400 orders a month who ignores this isn't facing a fine, they're facing an arithmetic problem.

**And the marketplaces have publicly refused to solve it.** Shopee Philippines told sellers that under RR 11-2025 they must upload e-invoices for all completed orders by 31 December 2026, and warned of fines up to ₱50,000 per violation — while stating plainly that **Shopee does not generate or issue sales invoices to buyers on behalf of sellers**. The platform pushed the obligation down and kept the data. That's the gap.

The current alternative is manual: enroll on the EIS Taxpayer Portal, then key in each invoice by hand — customer name and TIN, line items, prices, VAT — one order at a time. Fine for twelve orders a month. Absurd at four hundred.

Layered on top: BIR issued RMC No. 38-2026 in May 2026 requiring online sellers to display a Registration Seal Badge on their storefronts and socials — a visible "blue check" that makes registered sellers publicly identifiable, and by extension makes non-filers publicly identifiable too. Enforcement attention on this segment is going up, not down.

```
Provenance:
  - Signal 1 (Demand): Shopee PH tells sellers they must upload e-invoices for all completed orders by 31 Dec 2026 with fines up to ₱50,000 per violation, while stating Shopee does not issue invoices on sellers' behalf; the documented fallback is manual per-order key-entry in the EIS Taxpayer Portal — https://www.bigseller.com/blog/articleDetails/4285/how-can-shopee-philippines-sellers-print-and-upload-einvoice.htm — accessed 2026-08-14
  - Signal 2 (Feasibility/Regulatory): RR No. 11-2025 and RR No. 26-2025 put e-commerce businesses in Group 1 with a 31 Dec 2026 deadline; JSON format, ~20 mandatory fields, JWS signing, three-calendar-day transmission via system-to-system API to BIR EIS; Stage 1 live March 2026; per-invoice penalties ₱1,000–₱50,000 and closure past 180 days — https://www.cleartax.com/ph/philippines-e-invoicing and https://rtcsuite.com/bir-e-invoicing-philippines-eis-by-2026-a-comprehensive-guide-to-scope-stages-and-technical-compliance/ — accessed 2026-08-14
  - Signal 3 (Economic): Combined Shopee/Lazada/TikTok Shop GMV in the Philippines reached USD 22B in FY2025, up 15% YoY; sellers already pay ₱5,000–₱30,000/month for bookkeeping and are already subject to the 1% creditable withholding tax on marketplace remittances above ₱500,000/year, proving both spend and an existing reconciliation habit — https://cube.asia/e-commerce-in-philippines/ and https://www.davaoaccountants.com/2025/10/06/the-cost-of-bookkeeping-in-the-philippines-what-startups-and-smes-need-to-know/ and https://www.pna.gov.ph/articles/1216099 — accessed 2026-08-14
  Category: Regulatory arbitrage
```

## 3. The opportunity

The e-invoicing vendor market in the Philippines has organised itself around the wrong customer. Taxilla, EDICOM, Comarch, Basware, RTC Suite, ClearTax — these are enterprise middleware players selling ERP integration to large taxpayers with a finance department and a six-figure software budget. Taxumo and Sprout serve the freelancer-and-SME tax-filing market well, and Taxumo has shipped EIS-ready invoice generation, but that generation is oriented around a business that *creates* invoices in a system it controls.

A Shopee seller does not create invoices. Orders happen to them, in a marketplace back-end, at a rate of hundreds per month, and each one needs to become a signed JSON document with a buyer TIN inside three days.

The specific thing nobody has built for this segment is the **join**. Three problems have to be solved together or none of them is solved:

1. **Order ingestion at volume** — pulling completed orders out of Shopee, Lazada and TikTok Shop and turning each into a compliant invoice without human keystrokes.
2. **Gross-versus-payout truth** — the single most common tax error in this segment. Sellers report what hits the bank, not gross sales. The platform nets out commissions, shipping subsidies, campaign fees and the 1% withholding before remitting. The invoice must carry gross; the books must reconcile to net. Getting this wrong is exactly what triggers a BIR assessment.
3. **Transmission and proof** — JWS-signed JSON, over API, inside three calendar days, with a durable receipt that survives the ten-year retention requirement.

The enterprise vendors solve (3) and assume you have an ERP for (1) and (2). The SME tax apps solve pieces of (2) and assume you type in (1). The gap in the middle is a real business, and the deadline gives it a date.

There's also a structural reason this stays open a while: the BIR does not certify software vendors. Certification and the Permit to Transmit attach to the *taxpayer*, via the EIS Certification Portal. So there is no accreditation gate a well-capitalised incumbent can slam shut — but there *is* an onboarding chore (getting each seller through certification and PTT) that becomes the product's stickiest feature.

## 4. Target market

- **Primary customer:** Owner-operator of a Philippine marketplace-native business doing roughly ₱3M–₱150M in annual gross sales across Shopee, Lazada and/or TikTok Shop. Typically 150–2,000 orders a month, one to fifteen staff, no in-house accountant — an outsourced bookkeeper on a ₱5,000–₱30,000/month retainer. Concentrated in Metro Manila, Cebu and Davao, but the business is location-independent.

- **Why they buy:** Because on 31 December 2026 their compliance exposure becomes per-invoice. Ignoring 400 orders a month is not a ₱50,000 problem, it's a multiple of that, and past 180 days it becomes a closure risk. They also buy because the manual alternative — hand-keying every order into the EIS Taxpayer Portal — is not a workflow any seller above 100 orders/month will actually perform. The BIR's own documented fallback is the sales pitch.

- **Rough TAM reasoning:** Combined Shopee/Lazada/TikTok Shop Philippine GMV was USD 22B in FY2025 (Cube, 2026). Published counts of BIR-registered Philippine e-commerce sellers don't exist in public sources, so I won't invent one. Reason from the bottom instead: a business needs roughly ₱3M+ gross before this software is worth ₱2,000/month to it, and the VAT registration threshold sits at ₱3M. If the serviceable segment is even 20,000–40,000 sellers nationally at that scale, ₱2,500/month average gets you a ₱600M–₱1.2B (USD 10–20M) addressable line. I need to validate the seller count before believing the top end — see assumptions.

- **Why now for them:** Two dates. March 2026, when EIS Stage 1 went live and the mechanism became real. December 31, 2026, when it becomes mandatory. Between August and December is exactly the window where a seller goes from "I'll deal with it" to "I need this working next week." That's a four-month selling season with a hard forcing function at the end, and a long tail of late adopters and penalty-remediation work in 2027.

## 5. Product sketch (MVP)

- **Marketplace connect** — link Shopee, Lazada and TikTok Shop seller accounts; completed orders flow in automatically, no CSV babysitting.
- **Per-order invoice generation** — each completed order becomes a structured JSON invoice with the BIR's mandatory field set, VAT computed correctly, ready to transmit.
- **Buyer TIN handling** — most marketplace buyers are end consumers without a TIN on file. The product applies the correct treatment for consumer sales and captures TINs where a B2B buyer requires an input-VAT-creditable invoice, rather than silently emitting invalid documents.
- **Three-day transmission clock** — a live queue showing what's transmitted, what's pending, and what's about to breach the three-calendar-day window, with alerts before the breach, not after.
- **Gross-to-payout reconciliation** — for every payout the marketplace deposits, show the bridge: gross sales, commissions, shipping fees, campaign costs, 1% withholding. Export it in the shape a bookkeeper actually files from, and surface the withholding total the seller can credit back against income tax.
- **Certification and PTT concierge** — guided onboarding through the EIS Certification Portal to obtain the seller's own Permit to Transmit, because that's the step where most sellers stall out.
- **Ten-year archive** — every transmitted invoice, its signature, and its BIR acknowledgement, retrievable on demand for the retention period.
- **Exception desk** — orders that can't be invoiced cleanly (cancellations, returns, partial refunds, disputed amounts) surface in one place instead of failing silently.

## 6. AI angle — what's load-bearing

Honest answer: **AI is the smaller half of this product, and I'd rather say so than oversell it.** The core is a compliance pipeline — API integration, schema mapping, signing, transmission, an audit trail. That's engineering, not intelligence, and if I removed the AI the product would still exist.

Where AI does real work:

- **Reconciliation matching.** Marketplace payout statements do not line up cleanly with order-level data — fee names change, campaign deductions appear mid-cycle, adjustments arrive out of band, and formats differ across three platforms and shift without notice. Deterministic matching handles the happy path; the tail is messy, and an LLM classifying unmatched line items into the right ledger bucket is what turns a 70%-automated reconciliation into a 95%-automated one. That last 25% is the difference between a bookkeeper trusting the export and re-doing it by hand.
- **Schema drift absorption.** When Shopee changes a report column or the BIR revises the JSON field set, a model-assisted mapping layer flags and proposes the fix rather than silently emitting invalid invoices for a week.
- **Plain-language exception explanation.** "This order can't be invoiced because the buyer TIN is malformed and the amount doesn't match the payout line" — in Taglish, for a seller who is not an accountant.

That's a genuine cost-structure argument, not a chatbot bolted to a form. But the moat here is regulatory plumbing and integration maintenance, not model quality, and the score reflects that.

## 7. Localization angle

This is a Philippines-only product by construction, and that's the point rather than a limitation.

- **Regulatory specificity** — RR 11-2025, the EIS JSON schema, JWS signing, the EIS Certification Portal and PTT flow, the three-calendar-day rule. None of it ports.
- **The 1% withholding interaction** — Philippine marketplaces withhold 1% on one-half of gross remittances (effective ~0.5%) for sellers above ₱500,000/year, creditable against income tax. Sellers routinely fail to claim it back. Surfacing that number is a concrete peso benefit that partially offsets the subscription — a useful thing to lead with when the rest of the pitch is "avoid a fine."
- **Pricing** — ₱1,500–₱4,000/month works here where $99/month does not. Bookkeeping at ₱5,000–₱30,000/month is the anchor; this lands well under it.
- **Payment rails and language** — GCash and Maya alongside cards; support in English and Taglish, which is how these sellers actually communicate.
- **Distribution** — Facebook seller groups and Viber communities are where Philippine online sellers organise, not LinkedIn or Twitter.

The same shape exists in Malaysia (LHDN MyInvois) and Indonesia, so there's a template to reuse later. But the wedge is one country, one deadline.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on monthly transmitted invoice volume.
  - Starter — ₱1,500/mo, up to 300 invoices/month
  - Growth — ₱3,500/mo, up to 1,500 invoices/month
  - Scale — ₱7,500/mo, up to 6,000 invoices/month
  - Plus a one-time ₱5,000 certification-and-PTT onboarding fee, which prices the highest-touch part of the funnel and filters tyre-kickers.

- **ACV:** Blended ₱3,000/mo → **₱36,000/year (~USD 620)**.

- **Rough math to $1M ARR:** ~₱58M ARR ≈ **1,600 sellers at ₱3,000/mo**. Against a serviceable segment I'm estimating at 20,000–40,000 sellers, that's 4–8% penetration. Reachable, not trivial.

- **Rough math to $5M ARR:** ~₱290M ARR needs either ~8,000 Philippine sellers (pushing 20–40% share of the serviceable segment — hard), or the more plausible mix: ~4,000 sellers at a higher blended ACV once bookkeeping-adjacent modules land, plus a second country on the same architecture (Malaysia MyInvois, Indonesia). I'd treat $5M as the second-country number, not the Philippines-only number, and I'd rather state that than pretend one market carries it.

- **Expansion path:** Volume tiers escalate naturally as sellers grow. Then: multi-storefront seats, the reconciliation export sold as a bookkeeper-facing seat, VAT return preparation, and a partner tier for accounting firms managing 20–200 seller clients — that last one is where ACV compounds fastest and churn drops.

- **Margin note:** Transmission volume costs are trivial. The real cost line is integration maintenance across three marketplaces plus BIR schema changes — an engineering salary, not a per-customer cost. Gross margin should sit north of 85% once onboarding is productised.

## 9. Go-to-market wedge — first 100 customers

The deadline does the persuading. I just have to be in the room.

1. **Mine the Registration Seal Badge.** RMC 38-2026 requires online sellers to publicly display a BIR Registration Seal Badge on their storefronts and social accounts. That is a public, self-identifying list of exactly the sellers who are (a) registered, therefore in scope, and (b) compliance-conscious enough to have done it. Scrape badge-displaying storefronts across Shopee and Lazada, filter to those with review volumes implying 150+ orders/month, and you have a targeted list of several thousand qualified prospects. Personalised outreach: "You post ~400 orders a month. From 31 December that's ~400 structured invoices, each carrying ₱1,000–₱50,000 of exposure. Here's what the manual portal flow looks like — here's ours."

2. **Facebook and Viber seller groups.** Philippine online sellers organise in large Facebook groups ("Shopee Sellers Philippines" and equivalents for Lazada and TikTok Shop) and Viber communities. These are the highest-density channels in this market. Don't pitch — publish. A free "EIS readiness check" (paste your monthly order count, see your penalty exposure and your three-day transmission load) posted into ten groups is the single highest-yield asset here. Convert the check's users into the paid product.

3. **Bookkeepers as the channel, not the customer.** Sellers at this scale use outsourced bookkeepers on ₱5,000–₱30,000/month retainers, and those bookkeepers are about to inherit an unmanageable manual workload from every marketplace client they serve. Recruit 20–30 firms with a revenue share and a firm-level dashboard. One firm signing brings 10–50 sellers. This is the channel that gets you from 40 customers to 400.

4. **Deadline content that ranks in Q4.** "BIR e-invoicing for Shopee sellers," "EIS Permit to Transmit how-to," "RR 11-2025 deadline" — search demand in this segment will spike hard from October through December as the deadline closes. Not a first-100 channel, but if the content is live by September it compounds exactly when panic peaks.

5. **Free penalty-exposure calculator as the top of funnel.** Order volume in, peso exposure out, with the regulation cited. Cheap to build, endlessly shareable in the groups above, and it qualifies leads by volume automatically.

Realistic math on channel 1: 3,000 scraped and filtered sellers, 25% open, 6% reply, 30% of repliers take a demo, 40% of demos close at a ₱1,500–₱3,500 price point with a hard deadline behind it ≈ 20-25 customers from cold outreach alone. Groups and bookkeepers carry the rest.

## 10. Build complexity — justification

**Medium.** The compliance core is well-specified — the BIR publishes the JSON schema, the field set, the signing requirement and the API. That's implementable, not researchy. JWS signing is a solved library problem.

The real work is threefold: three marketplace integrations (each with its own auth model, rate limits, order semantics and payout report format), the reconciliation engine that bridges gross to payout across those three, and the certification/PTT onboarding flow which is partly software and partly a documented human process. Add a durable ten-year archive with retrievable BIR acknowledgements.

Two people, 14–18 weeks to a credible v1 — realistically shipping Shopee first, then Lazada, then TikTok Shop, because a single-marketplace product is already sellable to a large slice of the market. A solo technical founder could do it in about five months if they sequence marketplaces rather than parallelising. The deadline is the schedule risk: shipping in November instead of September costs a meaningful share of the selling season.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping taxpayers comply with RR 11-2025. Certification and PTT attach to the taxpayer, not the vendor, so no vendor licence is required to operate. |
| Ethical — no harm / dark patterns | ✅ | Helps small sellers meet an obligation they cannot practically meet by hand, and surfaces withholding tax they're entitled to reclaim. |
| Market exists (evidence above) | ✅ | Dated statutory mandate, per-invoice penalties, marketplaces publicly declining to solve it, existing bookkeeping spend. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. Integration-heavy but not research-grade. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Two salaries for a quarter plus trivial infra. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Statutory, dated, per-invoice penalties escalating to business closure past 180 days. Not 18+ because the pain is anticipatory until Q4 — some sellers will procrastinate past the deadline and gamble on lax early enforcement. |
| Demand evidence | 15 | 12/15 | Very strong regulatory and platform-behaviour evidence, plus proven adjacent spend on bookkeeping. Held back because I could not source verbatim seller complaints or a published count of in-scope sellers — the demand is inferred from the mandate, not yet heard from customers directly. |
| Build feasibility | 15 | 10/15 | Published schema and API, solved crypto. But three marketplace integrations plus a reconciliation engine plus a certification flow is 14–18 weeks for a pair, not a 6-week solo sprint. |
| Distribution clarity | 15 | 12/15 | Named, scrapeable list (Seal Badge storefronts), named channels (FB/Viber seller groups), and a bookkeeper channel with real leverage. Not higher because cold outreach conversion in this market is unproven by me. |
| Revenue mechanics | 15 | 12/15 | Pricing anchored well below existing bookkeeping spend; $1M ARR needs ~1,600 sellers, which is credible. Docked because $5M realistically requires a second country, and the seller-count denominator is still an estimate. |
| Time to first revenue | 10 | 8/10 | Deadline-driven urgency and pre-selling are plausible before v1 is complete; first cash in 6–10 weeks. Not 9–10 because certification onboarding adds friction to the first close. |
| Defensibility | 10 | 6/10 | Soft moat: workflow lock-in via the ten-year archive and PTT onboarding, plus accumulating integration/schema knowledge. But no accreditation gate protects it, and a funded incumbent (Taxumo) could extend into marketplace ingestion. Execution speed is the real defence. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs someone who can build and maintain three marketplace integrations and a signing/transmission pipeline, paired with real BIR fluency — ideally a Philippine accountant or ex-BIR-adjacent advisor as co-founder or first hire. A foreign builder without local tax counsel will get the VAT and buyer-TIN treatment wrong and burn trust on the first audit.

### Key assumptions to validate (3–5)

1. **Assumption:** There are ≥15,000 Philippine marketplace sellers above ₱3M annual gross who are BIR-registered and therefore in scope. **How to test:** Sample-scrape Shopee/Lazada storefronts displaying the RMC 38-2026 Seal Badge, estimate order volume from review velocity, and extrapolate. Cross-check with two Philippine accounting firms' client books.
2. **Assumption:** Sellers at 150+ orders/month will pay ₱1,500–₱3,500/month rather than absorb manual portal entry or gamble on non-enforcement. **How to test:** 40 structured interviews sourced from Facebook seller groups. Ask for a ₱1,000 deposit against a September launch — deposits, not nods.
3. **Assumption:** Shopee, Lazada and TikTok Shop seller APIs expose completed-order and payout data at sufficient granularity, with terms that permit a third-party compliance tool. **How to test:** Read each platform's open-platform developer terms and build a read-only prototype against one seller account in week one. This is the assumption that can kill the product outright — test it first.
4. **Assumption:** The certification/PTT flow can be walked by a non-technical seller with guided onboarding in under two hours. **How to test:** Run three real sellers through it end to end and time it.
5. **Assumption:** Bookkeeping firms will resell rather than build their own. **How to test:** Pitch 10 firms on a revenue-share partner tier; look for 3 signed LOIs.

### Risk flags

1. **Platform dependency (highest).** The entire product sits on three marketplace APIs. Any of them can restrict access, change terms, or — worst case — ship native e-invoice transmission and vaporise the wedge. Shopee has explicitly declined to issue invoices on sellers' behalf, which is the current opening, but that is a policy position, not a permanent one. Mitigate with CSV/report-upload fallback ingestion so the product degrades rather than dies.
2. **Regulatory timing.** The BIR has already extended this deadline once. Another extension into 2027 doesn't kill the idea but stretches the sales cycle and blunts urgency — the thing currently doing most of the selling.
3. **Incumbent extension.** Taxumo already ships EIS-ready invoice generation and owns brand trust with Philippine SMEs. Marketplace ingestion plus reconciliation is a plausible roadmap item for them. The defence is being live and specialised before Q4.
4. **Enforcement softness.** If the BIR doesn't visibly penalise anyone in early 2027, the fear that drives conversion evaporates and this becomes a nice-to-have. Watch the first enforcement actions closely.
5. **Unverified demand voice.** I could not source direct seller complaints. The demand case rests on the mandate, the penalty schedule, and Shopee's own notice — strong, but it is inference. The interviews in assumption 2 are not optional.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (integrations + compliance plumbing) paired with a
                        Philippine accountant or tax advisor with BIR/EIS fluency
Time to revenue:        6–10 weeks (pre-sell against the 31 Dec 2026 deadline)
Capital to launch:      ₱1.5–2.5M / USD 25–45K (two people for a quarter plus infra)
Top 3 assumptions to validate first:
  1. Marketplace API access permits third-party compliance ingestion of completed-order and
     payout data — read the developer terms and build a read-only prototype in week 1.
     If this fails, the product fails.
  2. ≥15,000 in-scope sellers above ₱3M gross exist — scrape Seal Badge storefronts, estimate
     volume from review velocity, cross-check with two accounting firms.
  3. Sellers pay ₱1,500–₱3,500/mo — 40 interviews from Facebook seller groups, closed with a
     ₱1,000 deposit request against a September launch.
Kill criteria:
  - Abandon if marketplace developer terms prohibit third-party order/payout ingestion and no
    CSV fallback produces a workable product.
  - Abandon if <8 of 40 interviewed sellers will place a ₱1,000 deposit.
  - Abandon if BIR extends the Group 1 deadline beyond 2027, or if Shopee or Lazada announce
    native EIS transmission on sellers' behalf before v1 ships.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read the Shopee, Lazada and TikTok Shop open-platform developer terms end to end. Register a developer account and pull completed orders plus one payout report for a single real seller account. The question to answer: can a third-party tool legitimately ingest order and payout data at the granularity a compliant invoice requires? This is the binary one — if it's no, stop here and salvage the CSV-ingestion version or nothing.
- **Day 3–4:** Recruit 40 sellers from Facebook and Viber seller groups doing 150+ orders/month. Fifteen-minute calls. Three questions: what's your plan for 31 December, what do you pay your bookkeeper, and would you place a ₱1,000 deposit for a September launch at ₱2,500/month? Separately, pitch 10 bookkeeping firms on a revenue-share partner tier.
- **Day 5:** Decide. **Go** if the marketplace APIs permit ingestion AND ≥8 of 40 sellers place a real ₱1,000 deposit AND ≥3 bookkeeping firms sign a partner LOI. Anything less is a no — deposits and signatures only. Verbal enthusiasm about a tax deadline is free, and it is worth exactly what it costs.
