---
title: "InvoicePH — AI e-invoice copilot for Filipino online sellers"
slug: invoiceph-ai-seller-einvoice
date: 2026-04-28
category: Compliance SaaS / Philippines E-commerce
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: "Auto-generates BIR-compliant structured e-invoices from Shopee, Lazada, and TikTok Shop sales data for Filipino sellers."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [AI-agent, SMB, Compliance-driven, Mobile-first, E-commerce, Marketplace-native]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 13
  revenue: 12
  time: 7
  defensibility: 7
founderFit: [technical-heavy]
featured: true
---

# InvoicePH

## 1. One-liner

Auto-generates BIR-compliant structured e-invoices from Shopee, Lazada, and TikTok Shop sales data for Filipino online sellers.

## 2. Trend signal — why now?

Three forces converging in the Philippines right now make this inevitable:

**1. BIR is forcing e-commerce into structured e-invoicing.** Revenue Regulation 11-2025 (February 2025) mandates that all e-commerce sellers issue structured e-invoices in JSON format, transmitted to BIR's Electronic Invoicing System (EIS) via API. The compliance deadline — extended to December 31, 2026, via RR 26-2025 — specifically names "taxpayers engaged in e-commerce or internet transactions, including social commerce." This isn't a vague future threat. The regulation is published, the API is live, and penalties include fines up to ₱50,000 per violation, suspension of operations, and disallowance of VAT input claims.

**2. The seller base is massive and growing.** Shopee Philippines alone reported 350,000+ active sellers by end of 2024. DTI's Negosyo Centers onboarded 200,000+ new digital entrepreneurs in 2024, 70% of them solo-run. TikTok Shop Philippines drove a 200% increase in local seller sales in 2025. The Philippines e-commerce market hit $28B in 2025. These aren't tech-savvy enterprises — they're sari-sari store owners, home bakers, resellers, and live sellers who have never heard of JSON.

**3. The withholding tax squeeze is already biting.** Since July 2024, Shopee and Lazada have been deducting 1% withholding tax (effectively 0.5% of gross remittances) from seller payouts under RR 16-2023. Sellers who can't reconcile these deductions against proper invoices are losing money they can't claim back. The BIR is offering a 100% tax deduction on e-invoicing system costs for micro and small enterprises — a direct subsidy for adoption.

Provenance:
  - Signal 1: BIR RR 11-2025 mandating structured e-invoicing for e-commerce sellers by Dec 2026 — https://sovos.com/regulatory-updates/vat/philippines-deadline-for-mandatory-structured-e-invoicing-extended/ — Feb 2025
  - Signal 2: Shopee Philippines 350K+ active sellers, DTI onboarded 200K+ digital entrepreneurs in 2024 — https://www.trade.gov/country-commercial-guides/philippines-ecommerce — 2025
  - Signal 3: BIR withholding tax on marketplace sellers since Jul 2024, plus 100% tax deduction incentive for e-invoice adoption — https://taxumo.com/blog/online-seller-tax/ — 2024
  Category: Regulatory arbitrage

## 3. The opportunity

The gap is embarrassingly obvious: BIR is mandating that hundreds of thousands of online sellers generate JSON-structured e-invoices with digital signatures and transmit them via API — and the vast majority of these sellers currently track their sales in a Google Sheet, a notebook, or not at all.

The existing tools don't fit:

- **Taxumo** (₱2,499–4,248/quarter): Built for freelancer quarterly tax filing. No marketplace integration. No structured e-invoice generation. No withholding tax reconciliation.
- **JuanTax/Juan**: General-purpose accounting software. Free tier exists but no Shopee/Lazada data sync. E-invoicing support is for CAS users, not marketplace sellers.
- **QNE Cloud**: Proper accounting software at enterprise pricing. Overkill and overpriced for a seller doing ₱50K/month on Shopee.
- **BigSeller**: Marketplace management tool with profit/loss tracking. No BIR e-invoice generation.
- **Zetpy**: Syncs marketplace orders to Xero/QuickBooks. Requires the seller to already have and pay for accounting software.

Nobody is building the thing these sellers actually need: a tool that inhales their Shopee/Lazada/TikTok Shop order data via official APIs, auto-generates BIR-compliant structured e-invoices in JSON, digitally signs them, transmits them to the EIS, and reconciles the withholding tax deductions. All from a mobile app, in Tagalog, for ₱499/month.

## 4. Target market

- **Primary customer:** Filipino online sellers earning ₱500K–₱10M annually across Shopee, Lazada, TikTok Shop, and Facebook Marketplace. Solo operators or husband-wife teams. Based anywhere in the Philippines, with heavy concentration in Metro Manila, Cebu, and Davao.
- **Why they buy:** BIR compliance deadline is December 2026. They don't know what JSON is, can't build an API integration, and can't afford a ₱15K/quarter accounting software suite. They need something that "just does it" from their phone. The 1% withholding tax is already being deducted — they want that money accounted for properly.
- **Rough TAM reasoning:** 350K+ active Shopee sellers alone, plus Lazada, TikTok Shop, and social commerce sellers. Conservative estimate: 500K–800K e-commerce sellers in the Philippines above the micro-exemption threshold. Even capturing 2% at ₱499/mo = ~₱60M ARR (~$1M USD).
- **Why now for them:** The Dec 2026 deadline is 8 months away. Phase 1 (March 2026) already hit large taxpayers and e-commerce sellers. The BIR is offering a carrot (100% tax deduction on system costs) alongside the stick (₱50K fines, suspension). Marketplace platforms are proactively deducting withholding tax. The regulatory noose is tightening in real time.

## 5. Product sketch (MVP)

- **Marketplace data sync**: Connect Shopee, Lazada, and TikTok Shop seller accounts via official APIs; auto-pull order history, payouts, commissions, and withholding tax data
- **Auto e-invoice generation**: Convert each qualifying sale into a BIR-compliant structured e-invoice (JSON format per EIS schema), with proper TIN, product descriptions, VAT breakdown, and digital signature
- **EIS submission**: Transmit e-invoices to BIR's Electronic Invoicing System via API within the 3-day window; display acceptance/rejection status per invoice
- **Withholding tax reconciliation**: Match marketplace withholding tax deductions against seller's BIR records; flag discrepancies; generate reconciliation reports for quarterly filing
- **Mobile-first dashboard**: Tagalog/English toggle. Summary of sales, invoices issued, tax withheld, and compliance status. Push notifications for filing deadlines and rejected invoices.
- **Quarterly tax pre-fill**: Auto-populate BIR Forms 2550Q (VAT) or 2551Q (Percentage Tax) from synced data — not auto-file, but pre-fill for manual submission or future auto-filing
- **BIR registration guidance**: Step-by-step wizard for sellers who haven't registered their business with BIR yet (many haven't)

## 6. AI angle — what's load-bearing

AI isn't a garnish here — it's doing three things that would otherwise require an accountant:

**1. Order-to-invoice mapping.** Marketplace order data is messy — bundled shipments, partial refunds, voucher subsidies, platform commissions, cross-border fees. An AI classifier categorizes each transaction, determines the correct VAT treatment (0%, 12%, exempt), and maps product descriptions to BIR-required item codes. Getting this wrong means rejected invoices or audit flags.

**2. Anomaly detection and withholding tax reconciliation.** The 0.5% effective withholding tax should match the gross remittance data. When it doesn't — and it frequently doesn't due to returns, voucher adjustments, and timing mismatches — the AI flags discrepancies and suggests corrections before the seller files their quarterly return.

**3. Natural-language compliance guidance.** Most of these sellers have never filed taxes. An AI chat assistant (Tagalog-capable, trained on BIR regulations) answers questions like "Do I need to charge VAT?" or "What happens if I miss the deadline?" without requiring them to parse a 47-page revenue regulation. This replaces the ₱5,000–15,000 annual cost of a bookkeeper for basic compliance questions.

Remove the AI and you have a dumb data pipe that still requires an accountant to classify transactions and reconcile taxes. The AI *is* the accountant.

## 7. Localization angle

This is a Philippines-only play by design, and that's the wedge:

- **Tagalog-first UI and AI chat**: Not English-translated-to-Tagalog — natively conversational in Filipino
- **BIR-specific compliance**: EIS JSON schema, Philippine TIN validation, ATP number management, COR integration — none of this applies outside PH
- **Marketplace-specific**: Shopee PH, Lazada PH, and TikTok Shop PH APIs have country-specific data fields, commission structures, and payout schedules
- **Local pricing**: ₱499/mo (~$9 USD) works for sellers earning ₱500K–₱10M/year. Global accounting tools charge 5–10× more.
- **GCash/Maya payment**: Accept subscription payments via the e-wallets every seller already uses, not credit cards
- **BIR's 100% tax deduction incentive**: The subscription cost is literally free for qualifying micro/small sellers because BIR subsidizes it through tax deductions

The global tools (Xero, QuickBooks, Zoho) can technically generate invoices, but they don't speak BIR, don't connect to PH marketplaces natively, and cost more than most sellers earn in a day.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₱499/mo (Starter, 1 marketplace, up to 500 orders/mo), ₱999/mo (Pro, 3 marketplaces, unlimited orders, withholding tax reconciliation), ₱1,999/mo (Business, multi-user, auto quarterly pre-fill, dedicated support)
- **ACV:** Blended ₱8,000/year (~$145 USD) assuming 60% Starter, 30% Pro, 10% Business
- **Rough math to $1M ARR:** 7,000 paying sellers × $145 ACV = ~$1M. That's 2% of Shopee PH's active seller base alone.
- **Rough math to $5M ARR:** 35,000 sellers × $145 ACV = ~$5M. Requires expansion to Lazada, TikTok Shop, and social commerce sellers. At 500K+ total sellers, this is 7% market penetration — ambitious but not absurd for a compliance-mandated tool.
- **Expansion path:** Upsell to quarterly auto-filing (replace Taxumo entirely). Add annual income tax return preparation. Offer bookkeeper-marketplace integration for accounting firms managing multiple seller clients. Eventually expand to other SEA markets as their e-invoice mandates roll out (Vietnam, Indonesia next).

## 9. Go-to-market wedge — first 100 customers

1. **Infiltrate seller Facebook groups.** The Philippines has massive seller communities — "Online Sellers Association of the Philippines," "Shopee Sellers Philippines," "Lazada Seller Community PH." Post educational content about the December 2026 deadline with a free compliance-readiness check tool. Convert worried sellers into paid subscribers.
2. **Partner with Shopee/Lazada seller support ecosystem.** BigSeller, Split Dragon, and Seller Center trainers already have seller audiences. Offer affiliate commissions for referrals. These platforms don't do e-invoicing — they'd benefit from recommending a complementary tool.
3. **YouTube and TikTok "BIR deadline countdown" content.** Filipino sellers consume tutorial content voraciously on these platforms. Produce Tagalog-language explainers: "BIR E-Invoice Deadline: What Shopee Sellers Must Do Before December 2026." Link to free trial. Budget: ₱0 for organic, ₱50K for boosted posts.
4. **DTI Negosyo Center partnership.** DTI onboarded 200K+ digital entrepreneurs in 2024. Position InvoicePH as a recommended compliance tool during their seller digitization programs. Government partnerships are slow but high-leverage.
5. **"Free until compliant" onboarding hook.** Let sellers connect their marketplace accounts and see their compliance gap for free. Charge only when they start generating and submitting e-invoices. Reduces friction to zero for trial.

## 10. Build complexity — justification

**Medium.** The core challenge is integrating with three marketplace APIs (Shopee, Lazada, TikTok Shop — all have documented seller APIs) and BIR's EIS API (JSON submission with digital signatures). The AI layer uses off-the-shelf LLMs for transaction classification and chat — no custom model training needed. The JSON invoice schema is well-defined by BIR. Digital signature implementation requires attention but isn't novel. A team of 2–3 engineers can ship a credible MVP in 12–14 weeks, starting with Shopee integration only and adding Lazada and TikTok Shop in the following 4–6 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | E-invoicing is government-mandated; this tool helps sellers comply with existing law |
| Ethical — no harm / dark patterns | ✅ | Helps micro-entrepreneurs avoid fines and stay in business |
| Market exists (evidence above) | ✅ | 350K+ Shopee sellers, ₱500K+ threshold for withholding tax, Dec 2026 deadline |
| 1–5 person team can build this | ✅ | 2–3 engineers, marketplace APIs are documented, BIR EIS API is public |
| Launchable with <$50K / ₹40L | ✅ | Cloud infra + API costs minimal at launch scale; main cost is dev time |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Government mandate with real penalties (₱50K/violation, suspension). Sellers can't ignore this. Withholding tax already being deducted. Hair-on-fire for any seller above ₱500K annual revenue. |
| Demand evidence | 15 | 13/15 | 350K+ active Shopee sellers, BIR regulation published and effective, Taxumo has 100K+ users proving willingness to pay for tax tools, 100% tax deduction incentive. |
| Build feasibility | 15 | 11/15 | Marketplace APIs documented but integration work is non-trivial. BIR EIS API requires digital signature handling. Tagalog NLP is available but needs tuning. 12–14 week MVP realistic for 2–3 devs. |
| Distribution clarity | 15 | 13/15 | Facebook seller groups are massive and free to access. Deadline creates urgency. YouTube/TikTok tutorial content is proven distribution for PH sellers. DTI partnership is bonus. |
| Revenue mechanics | 15 | 12/15 | ₱499/mo is well within seller budgets (Taxumo charges more for less). ACV of $145 is low but volume is massive. Path to $1M at 7K sellers is clear. Retention should be high — compliance is ongoing, not one-time. |
| Time to first revenue | 10 | 7/10 | Need 12–14 weeks to build MVP with at least one marketplace integration. Then 2–4 weeks of seller onboarding and free trial conversion. Revenue in ~4 months post-start. |
| Defensibility | 10 | 7/10 | First-mover on marketplace-to-BIR e-invoice pipeline creates data moat. Seller switching cost rises with historical invoice data stored. BIR compliance certification (if offered) creates trust barrier. Not defensible long-term against Shopee building it in-house, but 12–18 month head start is valuable. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` — API integration, digital signatures, and AI classification require strong engineering. No sales-heavy motion needed; the regulatory deadline does the selling.

### Key assumptions to validate (3–5)

1. **Assumption:** Filipino e-commerce sellers above ₱500K annual revenue will pay ₱499/mo for e-invoice compliance. **How to test:** Run Facebook ads in top 3 PH seller groups with a "BIR e-invoice readiness check" landing page. Measure sign-ups and willingness-to-pay survey responses from 200+ sellers.
2. **Assumption:** Shopee/Lazada/TikTok Shop seller APIs provide sufficient order data to auto-generate BIR-compliant e-invoices. **How to test:** Build a prototype integration with one marketplace (Shopee) and map 100 real orders to the EIS JSON schema. Identify data gaps.
3. **Assumption:** BIR's EIS API will be stable and accessible for third-party submissions by Q3 2026. **How to test:** Apply for EIS certification early, test submission of sample invoices, document any reliability issues.
4. **Assumption:** The Dec 2026 deadline won't be extended again (already extended once from March 2026). **How to test:** Monitor BIR announcements. Even if extended, the 1% withholding tax reconciliation need exists now regardless of e-invoice timing.

### Risk flags

1. **[Regulatory timing risk]:** BIR has already extended the deadline once. Another extension could reduce urgency. However, the withholding tax is already being deducted — sellers need reconciliation tools regardless.
2. **[Platform dependency]:** Heavy reliance on Shopee/Lazada/TikTok Shop APIs. If a marketplace restricts API access or builds e-invoicing in-house, the business model weakens. Mitigated by multi-platform support and the value-add of cross-platform consolidation.
3. **[Government API reliability]:** BIR's EIS system is new. Downtime, bugs, or schema changes could cause integration headaches. Need to build robust error handling and retry logic.
4. **[Competition from incumbents]:** Taxumo (100K+ users) or JuanTax could add marketplace integration. But their architecture is accounting-first, not seller-first — bolting on marketplace sync is harder than building seller-first with compliance built in.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       Technical founder(s) in or connected to the Philippines, comfortable with API integrations and fintech compliance
Time to revenue:        ~4 months (12–14 weeks build + 2–4 weeks onboarding)
Capital to launch:      ₱1.5–2.5M ($27–45K USD) — primarily dev time for 2–3 person team
Top 3 assumptions to validate first:
  1. Filipino sellers will pay ₱499/mo for e-invoice compliance (test: FB group ads + landing page + WTP survey, target 200 responses)
  2. Marketplace APIs provide sufficient data for BIR e-invoice generation (test: prototype Shopee integration, map 100 orders to EIS schema)
  3. BIR EIS API is stable enough for production use by Q3 2026 (test: early certification application + test submissions)
Kill criteria:
  - Abandon if <5% of 200 surveyed sellers express willingness to pay ₱499/mo
  - Abandon if marketplace APIs lack critical data fields (buyer TIN, VAT breakdown) with no workaround
  - Abandon if BIR extends the e-invoice deadline beyond 2027 AND removes the withholding tax requirement
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Join the 5 largest Filipino online seller Facebook groups. Post a Tagalog-language explainer about the BIR e-invoice deadline with a Google Form survey: "Are you ready for BIR's e-invoice mandate? Take this 2-minute check." Collect responses on current revenue, marketplace used, current tax filing method, and willingness to pay for an automated tool. Target: 200+ responses.
- **Day 3:** Register for BIR EIS certification access. Download the EIS API documentation and JSON schema. Attempt a test submission with sample invoice data. Document the integration complexity and any blockers.
- **Day 4:** Build a prototype that connects to one Shopee seller's account (use a test/sandbox account), pulls order data, and generates a sample BIR-compliant JSON invoice. Verify the mapping is complete or identify missing fields.
- **Day 5:** Analyze survey results. Decide go / no-go based on: (a) ≥15% of respondents say they'd pay ₱499/mo for automated e-invoicing, (b) BIR EIS API is accessible and functional, (c) Shopee API provides the minimum data needed. If all three hold, proceed to MVP build. If any fails, investigate whether the blocker is solvable before committing.
