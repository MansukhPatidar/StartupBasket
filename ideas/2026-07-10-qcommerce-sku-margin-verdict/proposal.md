---
title: "TrueShelf — margin verdict for D2C brands on quick commerce"
slug: qcommerce-sku-margin-verdict
date: 2026-07-10
category: Retail / India
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Tells a D2C brand which SKUs on Blinkit, Zepto and Instamart are actually losing money — before the next PO."
tags:
  vertical: Retail
  model: SaaS
  geography: India
  secondary: [D2C, Quick-commerce, AI-agent, SMB, Solo-builder, Unit-economics]
axes:
  problem: 16
  demand: 12
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TrueShelf

## 1. One-liner

Tells a D2C brand which SKUs on Blinkit, Zepto and Instamart are actually losing money — before the next PO.

## 2. Trend signal — why now?

Indian quick commerce is a $5.58B market in 2026, growing 12.8% CAGR to a projected $10.2B by 2031 ([Statista](https://www.statista.com/outlook/emo/online-food-delivery/grocery-delivery/quick-commerce/india/)). Blinkit alone runs ~1,816 dark stores as of Q2 FY26, up from 791 a year prior. Every D2C brand in the country is being told it must be on q-commerce.

The bill for being there is now visible, and it's brutal. Storyboard18's July 2025 investigation into platform fees quotes real founders. Sonalika Sabharwal of SouLilly Toys: *"The ROAS rarely goes beyond 1.2x to 1.5x for small brands, and sometimes even lower, making it difficult for a self-funded company to grow further."* An unnamed entrepreneur in the same piece: *"We have spent over a million capital on these platforms within a span of three months, but have not even clocked 10% of sales."* Another, on the fee structure: *"It's like we are charging ourselves only to cover their expenses."*

The costs don't arrive in one place. A brand pays a listing fee per SKU per state, a monthly minimum marketing spend, an ad wallet, a commission that varies by category and changes week to week, an inwarding fee per unit, storage per unit per day, a removal fee for unsold stock, and settlement deductions for damages and pick errors that land in the *wrong accounting period*. Saurabh Goel of Agro Mantra on Instamart returning unsold inventory: *"They return the stock if it does not get sold."* Zepto sellers on exiting: *"It's a big pain point to get back our unsold inventory from the platform when we want to exit, citing system issues, etc."*

And the industry commentary has converged on the diagnosis without anyone building the cure. From a 2026 analysis of q-commerce D2C margins: *"Many brands celebrating revenue growth on quick commerce platforms without knowing their contribution margin per SKU"* — and the fix requires brands to *"build the P&L from scratch for each platform and each SKU."* Nobody is selling that P&L.

Meanwhile the regulator is circling. The CCI has sought clarifications from Blinkit, Instamart and Zepto on deep discounting and preferential seller treatment, following a March 2025 petition by the All India Consumer Products Distributors Federation. Fee opacity is about to become a public conversation.

```
Provenance:
  - Signal 1 (Demand): Named D2C founders on record about ROAS of 1.2–1.5x, ₹8–10 lakh/quarter Instamart ad wallets, ₹25,000/SKU/state Blinkit listing fees, and capital sunk with <10% of expected sales — https://www.storyboard18.com/brand-marketing/quick-commerces-ad-fee-toll-are-platforms-squeezing-out-small-d2c-brands-73952.htm — 2025-07-15
  - Signal 2 (Feasibility): Existing q-commerce data infrastructure (MetricsCart real-time shelf scraping across all three platforms; ForceSight settlement-file parsing with auto-claims; Unicommerce/Odoo seller-panel integrations) proves the seller-side data is machine-reachable, and LLM parsing of heterogeneous settlement statements is now commodity — https://metricscart.com/insights/quick-commerce-monitoring-tools-india/ and https://forcesight.ai/payment-reconciliation-zepto/ — 2026-07-10
  - Signal 3 (Economic): India q-commerce = US$5.58B in 2026, 12.82% CAGR to US$10.2B by 2031; Blinkit at ~1,816 dark stores (Q2 FY26); CCI antitrust review of platform pricing and seller treatment underway following AICPDF's March 2025 CCI petition — https://www.statista.com/outlook/emo/online-food-delivery/grocery-delivery/quick-commerce/india/ and https://inc42.com/buzz/cci-seeks-additional-details-in-antitrust-review-of-zepto-blinkit-instamart-report/ — 2026-07-10
  Category: Underserved niche
```

## 3. The opportunity

There are two kinds of q-commerce software in India today and neither answers the question the brand is actually asking.

**Digital-shelf analytics** — MetricsCart, DataWeave, Paxcom, GobbleCube. These look *outward*: share of search, price compliance, competitor pricing, availability, ratings. They tell you how you're doing versus the shelf. They do not know what you paid to be on it.

**Payment reconciliation** — ForceSight and the reconciliation modules bolted onto Unicommerce-class order management. These look *backward*: match settlements against orders, find leaks, auto-raise claims. Useful. But a recovered ₹40,000 deduction doesn't tell you that SKU #7 in Bengaluru has been contribution-negative for four months.

Neither builds the per-SKU, per-city, all-in P&L. Because it's tedious: you have to attribute a ₹25,000-per-state listing fee across the SKU's actual sales in that state, amortise the ad wallet against the SKUs the ads actually promoted, apply a real expiry provision from the last six months of RTV write-offs, land settlement deductions in the period the *order* happened rather than the period the incident got recorded, and do this across three platforms with three different file formats and three different settlement cadences (Blinkit weekly, Zepto twice-monthly with a 15–20 day lag, Instamart bi-weekly).

Every agency blog in the country tells brands to do exactly this. Every brand does it in a spreadsheet, badly, quarterly, if at all. The enterprise OMS platforms that could do it price at ₹75,000–₹3,00,000/month and are built for multi-warehouse operations, not for a ₹2Cr/year skincare brand trying to decide whether Instamart is a growth channel or a slow bleed.

The 10× is not analytics. It's a **verdict**. Every Monday, per SKU per city: keep, fix, or cut — with the number that justifies it.

## 4. Target market

- **Primary customer:** The founder or the single "e-commerce/marketplace manager" at an Indian D2C brand doing ₹3Cr–₹50Cr annual revenue, live on 2–3 quick-commerce platforms with 10–40 SKUs. Categories: packaged food, snacks, beverages, personal care, home care, supplements, pet. Team of 5–60. Usually in Bengaluru, Mumbai, Delhi NCR, Pune.

- **Why they buy:** In their own words — *"We have spent over a million capital on these platforms within a span of three months, but have not even clocked 10% of sales."* They know the channel is expensive. They cannot prove which part of it is expensive. Every month the platform's category manager asks for a bigger ad commitment and a wider SKU list, and the brand has no counter-argument because it has no number. This is a weekly pain that becomes an acute pain at PO time and a fatal one at fundraising, when an investor asks for channel contribution margin and the founder has a Google Sheet with three tabs and no confidence.

- **Rough TAM reasoning:** Blinkit lists 4,000–6,000 SKUs per dark store, Zepto 2,000–3,000, Instamart 3,000–5,000, and only the top 10–20 SKUs per brand typically get listed. Working backwards from platform catalogues and the size of the Indian D2C brand universe, a realistic addressable base is 6,000–12,000 brands with meaningful q-commerce revenue and enough SKUs for the question to matter. At ₹15,000/month that's a ₹110–220Cr ($13–26M) Indian addressable market — too small for a growth-stage VC, precisely right for a bootstrapper aiming at $2–3M ARR. Modern trade and general trade are the obvious ACV expansions later.

- **Why now for them:** The land-grab phase is ending. Zepto is publicly cutting loss-making dark stores and optimising contribution margin; that discipline is being pushed down onto brands as higher fees and forced POs. Instamart has introduced fixed weekly purchase orders of ₹2,000–₹5,000 per the Storyboard18 reporting — inventory pushed at the brand whether it sells or not. Brands that grew on q-commerce in 2024–25 are now being asked to fund the platform's path to profitability, and 2026 is the year they find out whether the channel ever made them money.

## 5. Product sketch (MVP)

- **Connect once.** Seller-panel credentials for Blinkit, Zepto and Instamart; drop settlement statements, invoices and credit notes in as files if a panel doesn't expose them cleanly.
- **The true landed cost of every unit.** Commission, GST on commission, inwarding fee, storage per day held, return/damage deduction, removal fee, listing fee amortised across that SKU's real sales in that state, ad spend attributed to the SKUs it actually promoted.
- **The expiry provision nobody calculates.** Reads six months of RTV and write-off data and applies a per-SKU provision to every unit — the cost that quietly turns a "profitable" SKU negative.
- **Deduction time-travel.** Re-anchors every deduction to the period the order happened, not the period the incident was recorded, so a month's P&L is actually that month's P&L.
- **The Monday verdict.** Per SKU, per platform, per city: KEEP, FIX or CUT — with the contribution rupees per unit and the one line explaining what's killing it.
- **The pre-PO check.** Before you accept a PO, tells you what that PO is worth to you after all-in cost — including the storage you'll pay on whatever doesn't sell.
- **The category-manager memo.** A one-page, numbers-backed PDF the brand takes into the platform meeting when asked to raise its ad commitment.
- **Deduction disputes as a by-product.** Anything that looks like a mis-billed deduction gets flagged with the evidence attached. Recovery is the receipt that the tool paid for itself in month one.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not exist, because the input is not structured data — it is a mess.

Three platforms, three settlement file formats, three cadences, columns that get renamed without notice, commission slabs that shift from fixed to variable mid-quarter, deduction line items described in free text ("DS pick error – 4 units – BLR-KOR-02"), credit notes as PDFs, and ad invoices that name campaigns, not SKUs. The hard work is **normalisation and attribution**: reading a free-text deduction line and mapping it to a SKU, a dark store, a city and an original order date; reading an ad invoice and splitting spend across the SKUs a campaign actually promoted; reading an RTV report and inferring a write-off provision.

A deterministic parser breaks the first time Blinkit renames a column. An LLM-backed extraction layer with a schema and a confidence score does not — and when it isn't sure, it says so and asks. That's the whole product. The dashboard on top is the easy part, and it's the part everyone mistook for the product.

Second load-bearing use: the verdict itself is an argument, not a number. "CUT this SKU in Hyderabad — you're losing ₹4.20 per unit because storage on 38 days of held stock exceeds your ₹3.10 contribution, and 11% of last quarter's units came back as RTV." Generating that sentence from the ledger, at SKU × city granularity, weekly, across 40 SKUs and 3 platforms, is a language task.

## 7. Localization angle

This is an India-first play and the localization *is* the moat. Blinkit, Zepto and Instamart do not exist anywhere else. Their fee structures, settlement cadences, GST-on-commission treatment, RTV mechanics and dark-store geography are specific to India. GST input credit on platform commission has to be handled correctly or the contribution number is wrong by 18%.

A US equivalent (Gopuff, Getir's corpse) never reached the density that makes SKU × city analysis meaningful. The knowledge required — what Blinkit's inwarding fee is, why an Instamart deduction lands two weeks late, how a category manager negotiates an ad wallet — is exactly the sort of thing a Bengaluru operator has and a global SaaS vendor will never bother to learn.

Pricing is local too: ₹15,000/month works where $500/month would be laughed out of the room, and it works because the tool routinely finds more than ₹15,000 of mispriced SKU in month one.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₹12,000/month (Starter — one platform, up to 15 SKUs), ₹25,000/month (Growth — three platforms, up to 50 SKUs), ₹45,000/month (Scale — unlimited SKUs, modern trade + marketplace P&L, multi-user). Anchored well below the ₹75,000–₹3,00,000/month enterprise OMS tier and well above the ₹0 spreadsheet.
- **ACV:** ₹2.4L–₹3L (~$2,900–$3,600) blended, assuming most land on Growth.
- **Rough math to $1M ARR:** ~290 brands × ₹25,000/mo × 12 = ₹8.7Cr ≈ $1.04M. Out of a 6,000–12,000 brand base, that's a 2.4–4.8% penetration. Achievable.
- **Rough math to $5M ARR:** ~1,000 brands at a blended ₹35,000/mo, which requires (a) the Scale tier landing with brands above ₹25Cr revenue, (b) modern trade and Amazon/Flipkart P&L bolted on so the tool becomes the brand's single channel-margin ledger, and (c) an agency/reseller channel — the D2C growth agencies who already manage q-commerce for 20–50 brands each.
- **Expansion path:** SKUs → platforms → channels (marketplace, modern trade, own D2C) → a success fee on recovered deductions (benchmark: Amazon reimbursement services take ~15% of recoveries, so the willingness-to-pay for success fees is established) → eventually a benchmark data product (anonymised: "your ₹4.20/unit storage cost in Hyderabad is 2.1× the category median") which is the only thing here that compounds.

## 9. Go-to-market wedge — first 100 customers

- **The free audit, run backwards.** Ask a brand for one month of settlement statements from one platform. Return, in 48 hours, a one-page PDF naming the three SKU × city combinations that are contribution-negative and the rupee number. This is the entire sales motion. It converts because the brand has never seen the number and cannot un-see it. ForceSight already validates the "claim your free audit" motion in this exact market; the difference is our audit ends in a verdict, not a claim.

- **Scrape the shelf, then cold-email the loser.** MetricsCart-style shelf data is available (or scrapable) across all three platforms. Identify brands whose SKUs are listed in many cities but out of stock or unranked in most — the signature of a brand spending on breadth it cannot afford. That's a targeted list of a few hundred, not a spray. Email the founder directly with a screenshot of their own footprint and the sentence: "you are paying a listing fee per state for 9 states where you sold 40 units last month."

- **Go through the agencies.** The D2C growth agencies who run q-commerce accounts (the ones publishing every one of the blog posts cited above) each manage 20–50 brands and are currently doing this analysis by hand in spreadsheets for free, badly, because their client asks. Give them a white-labelled version at ₹8,000/brand/month. Ten agencies at 20 brands each is 200 accounts. This is the fastest 100.

- **Be the loudest voice on fee opacity.** The CCI review is live. Publish a monthly "Q-Commerce Fee Index" — the real all-in take rate by category, computed from anonymised customer data. Trade press (Storyboard18, Entrackr, Inc42) will run it because it is the only primary-source number on a story they are already covering. Every brand founder in the country reads those. This is content marketing that produces a proprietary dataset instead of blog posts.

- **The founder communities.** Not "post on Reddit." The D2C founder WhatsApp and Slack groups run by the Indian consumer-brand accelerators and the CPG angel syndicates. Warm-intro one brand per group, deliver the free audit, and let the number travel. A contribution-negative SKU is a screenshot people forward.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: the web app, auth, storage, charts, PDF generation. The genuine work is the ingestion layer — seller-panel access (some via API, some via authenticated session, some via "the client emails us the file"), and an LLM extraction pipeline that turns heterogeneous settlement statements, credit notes, ad invoices and RTV reports into a normalised ledger with SKU × store × date × cost-type keys, with confidence scoring and a human-in-the-loop queue for the lines it can't resolve.

Getting the attribution rules *right* (listing fee amortisation, ad-spend allocation, expiry provisioning, deduction re-anchoring) is domain work, not engineering work, and it's what makes the number defensible. Two people, 14–18 weeks to a v1 that can onboard a brand on all three platforms without hand-holding. Add 4 weeks if any platform's panel requires a partner agreement rather than a session.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Brand's own data, brand's own credentials, brand's own consent. Shelf data is public. No scraping of platform-internal systems. |
| Ethical — no harm / dark patterns | ✅ | Tool argues for the SMB against an opaque counterparty. If anything it's on the right side of the CCI's own concerns. |
| Market exists (evidence above) | ✅ | Named founders on record about the pain; four analytics vendors and one reconciliation vendor already selling adjacent products. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~₹12–18L to a paying v1: two salaries for four months, LLM inference, hosting. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Real money, felt weekly, acute at PO time. Not quite hair-on-fire — a brand can survive not knowing, and many have for two years. That "survivable ignorance" is exactly why it isn't an 18. |
| Demand evidence | 15 | 12/15 | Named founders on record about the cost pain; four vendors selling adjacent analytics; one selling adjacent reconciliation. But nobody yet paying for *this* number, so demand for the specific product is inferred, not observed. |
| Build feasibility | 15 | 10/15 | The ingestion layer is genuinely fiddly and partly outside our control (panel access, format churn). 14–18 weeks, two people. |
| Distribution clarity | 15 | 12/15 | The free audit is a strong, cheap, self-demonstrating wedge, and the agency channel is a real 200-account shortcut. Docked for the cold-email leg being unproven. |
| Revenue mechanics | 15 | 12/15 | ₹25K/mo is defensible against a ₹75K+ enterprise floor and a ₹0 spreadsheet. 290 customers to $1M ARR is real. The $5M path needs channel expansion that isn't proven. |
| Time to first revenue | 10 | 7/10 | The free audit can be delivered semi-manually before the product exists, so a paid pilot in 6–8 weeks is plausible. Not 4 weeks — you need one full settlement cycle to show a number. |
| Defensibility | 10 | 4/10 | Honest score. The attribution rulebook is a 6–12 month head start, not a moat. Anyone can copy the dashboard. The only compounding asset is the benchmark dataset, and that arrives at ~200 customers. ForceSight or Unicommerce could ship an inferior version of this next quarter. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

You need someone who has personally reconciled a Blinkit settlement statement, or who can hire the ex-marketplace-manager who has. The extraction pipeline is engineering; the attribution rules are scar tissue. A pure engineer will build a beautiful tool that computes the wrong number.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of brands have SKU × city combinations that are contribution-negative and don't know it. **How to test:** Run the free audit manually — by hand, in a spreadsheet — for 10 brands. If fewer than 6 have a contribution-negative SKU they were unaware of, the wedge doesn't exist and this becomes a reporting tool nobody needs.

2. **Assumption:** Seller-panel data (settlements, deductions, ad invoices, RTV) is reliably obtainable, either via panel access or as files the brand can export without friction. **How to test:** Onboard 3 brands across all 3 platforms and time how long it takes to get 6 months of data. If it takes more than 2 hours per brand-platform, onboarding kills the funnel.

3. **Assumption:** Brands will pay ₹25,000/month for a number rather than a workflow. **How to test:** After delivering 10 free audits, ask for a card. Measure conversion. Below 20% and the product needs to *do* something — auto-file the deduction disputes, auto-respond to the PO — not just tell.

4. **Assumption:** The D2C growth agencies will resell rather than build it themselves. **How to test:** Pitch 5 agencies. If three say "we'd just build this," the channel is a trap and you've handed them the spec.

### Risk flags

1. **Platform dependency (severe).** Everything depends on continued access to three seller panels owned by companies who benefit from fee opacity. A panel format change is a Tuesday. A panel access policy change is an extinction event. Mitigate by supporting file-upload as a first-class path from day one, never as a fallback.

2. **Fast-follower risk.** ForceSight is already inside the settlement file with an auto-claim engine. Adding contribution margin is a quarter of work for them. Unicommerce has 10,000+ brands and could bundle it. The 73 assumes you get 9–12 months of clear air; if a well-funded incumbent ships first, the defensibility score of 4 becomes the whole story.

3. **The number is only as good as the rulebook.** Get expiry provisioning or ad attribution subtly wrong and you'll tell a brand to cut a profitable SKU. One public instance of that and the product is dead, because the entire value proposition is *trust in a number the customer cannot independently verify*. Ship with the workings visible and every input traceable to a source document.

4. **Market timing (mild, in your favour).** The CCI review could force fee transparency, which would slightly reduce the pain. More likely it raises the salience of the problem for two years and hands you the content strategy. This is a risk worth having.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + an ex-marketplace/e-commerce manager who has
                        personally reconciled a q-commerce settlement statement
Time to revenue:        6–8 weeks (manual free audits sold as paid pilots before v1 ships)
Capital to launch:      ₹12–18 lakh ($14–21K)
Top 3 assumptions to validate first:
  1. ≥6 of 10 hand-run audits surface a contribution-negative SKU the brand didn't know about
  2. Six months of settlement/ad/RTV data obtainable in <2 hours per brand-platform
  3. ≥20% of brands receiving a free audit convert to a paid ₹25K/mo plan
Kill criteria:
  - Abandon if fewer than 6 of the first 10 hand-run audits find a contribution-negative
    SKU the brand was unaware of — the pain is imaginary
  - Abandon if ForceSight, Unicommerce or a funded competitor ships per-SKU contribution
    margin across all three platforms before your v1
  - Abandon if free-audit → paid conversion is below 15% after 20 audits
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Get 3 brands to send one month of settlement statements, ad invoices and an RTV report from one platform each. Use founder networks and the D2C WhatsApp groups. Offer nothing but a free analysis and confidentiality. If you cannot get 3 files in 2 days, the trust barrier is higher than you think and that is itself the finding.

- **Day 3–4:** Build the P&L by hand, in a spreadsheet, for every SKU × city in those files. Amortise the listing fee. Attribute the ad spend. Apply an expiry provision from the RTV data. Re-anchor the deductions. Take as long as it takes and *time yourself* — that number is your future unit cost of service.

- **Day 5:** Show each founder the sheet. Say nothing. Watch their face. Then ask one question: *"Would you pay ₹25,000 a month to see this every Monday?"* Then ask for a ₹25,000 deposit against the first three months.

**Falsifiable outcome:** Of 3 brands, at least 2 must have a SKU × city combination that is contribution-negative and that they did not know about, **and** at least 1 must hand over money on Day 5. Nods, enthusiasm and "definitely, send me the deck" are all failures. One card charged is a pass.
