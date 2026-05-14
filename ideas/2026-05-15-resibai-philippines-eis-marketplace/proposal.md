---
title: "ResibAI — EIS transmitter for PH marketplace sellers"
slug: resibai-philippines-eis-marketplace
date: 2026-05-15
category: Compliance SaaS / Philippines Online Marketplace Sellers (Shopee, Lazada, TikTok Shop)
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: Pulls every Shopee, Lazada and TikTok Shop order and files a BIR e-invoice before the 3-day clock runs out.
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Philippines, BIR-EIS, Marketplace-native, SMB, AI-agent, Tagalog, GCash-native]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 9
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: true
---

# ResibAI — EIS transmitter for PH marketplace sellers

## 1. One-liner

Pulls every Shopee, Lazada and TikTok Shop order and files a BIR e-invoice before the 3-day clock runs out.

## 2. Trend signal — why now?

Philippines' BIR went hard on online sellers. Revenue Regulation 11-2025 (Feb 2025) plus RR 26-2025 set up the Electronic Invoicing System (EIS). Stage 1 started March 2026 and locks in by **31 December 2026** — every covered taxpayer must transmit a structured JSON sales invoice to BIR via the EIS gateway **within three calendar days of the sale**. CREATE MORE Act (RA 12066) is the parent statute.

Stage 1 explicitly names **online/digital sellers** alongside Large Taxpayer Service registrants and PHP 1B+ corporations. Microenterprises are excluded — but the band above micro (PHP 3M–PHP 50M sales/yr, which is essentially every grown-up Shopee/Lazada/TikTok Shop seller) is squarely in scope.

The marketplaces themselves already started withholding 1% under RMC 55-2024. Sellers now have to (a) account for the WHT credit, (b) issue BIR-compliant invoices for sales the marketplace already reported to BIR. The mismatch is auditable. Every seller currently doing this in Excel is sitting on a ticking BIR receivables timebomb.

Enterprise EIS players (Sovos, Comarch, EDICOM, Taxilla) sell to conglomerates at PHP 50K+/mo. Local SMB players (JuanTax/Juan, Sprout, Taxumo) sell desktop accounting suites that assume a brick-and-mortar POS, not a marketplace API feed. The marketplace-native online seller — who lives inside Seller Center, never touched a POS — has no fitting solution.

Provenance:
  - Signal 1: BIR RR 11-2025 + RR 26-2025 mandate structured JSON e-invoicing for Stage 1 taxpayers by Dec 31 2026, online sellers explicitly named — https://kpmg.com/us/en/taxnewsflash/news/2025/10/philippines-e-invoicing-compliance-deadline-extended.html — 2025-10
  - Signal 2: BIR opened EIS certification portal at eis-cert.bir.gov.ph; JSON schema + JWS signing API public; certified solution provider track active — https://eis-cert.bir.gov.ph/ — 2026-03
  - Signal 3: Existing PH SMB stack (Juan PHP 2K/mo for invoicing, Growth tier PHP 10K/mo for BIR CAS) and enterprise EIS vendors leave marketplace-native sellers uncovered; RMC 55-2024 already forces 1% WHT reconciliation — https://www.juan.ac/pricing + https://www.upcloudaccounting.com/new-bir-regulation-online-store-compliance — 2025/2026
  Category: Regulatory arbitrage

## 3. The opportunity

A hard regulatory deadline + a structurally underserved buyer = wedge.

The buyer is a PHP-300K-to-PHP-5M-monthly-GMV solo or 2-3 person online retail business. Their entire operation lives in Shopee Seller Center, Lazada Seller Center and TikTok Shop. They've never had a POS. They issue paper "official receipts" only when a customer asks (which is almost never on a marketplace order). From Dec 31 2026 they need every order in BIR's EIS within 72 hours — or BIR can disallow the input VAT of their B2B buyers, fine them, and freeze their TIN.

Incumbents do badly:

- **Juan/JuanTax** — invoice-creation UX. You still type the invoice. Not marketplace-aware. No EIS auto-transmit at SMB tier (Growth PHP 10K/mo only).
- **Sprout** — HR/payroll-first. Tax module bolted on. Enterprise sales cycle.
- **Sovos/Comarch/EDICOM/Taxilla** — enterprise EIS middleware. PHP 50K+/mo. No marketplace connectors. Indian/EU companies that don't know Shopee.
- **Spreadsheet-by-hand bookkeepers** — currently the modal answer. Will not scale to 3-day clock + JSON + JWS signing.

A marketplace-native, $25-$50/mo SaaS that polls Shopee/Lazada/TikTok APIs every hour, maps each order to a BIR-EIS JSON invoice, runs the JWS signing, hits the EIS gateway, and surfaces a clean BIR dashboard wins by being the only thing that fits the actual buyer.

## 4. Target market

- **Primary customer:** Owner-operator of a Philippine online retail business doing PHP 300K–PHP 5M GMV/month across one or more of Shopee, Lazada, TikTok Shop. Typically 1–3 staff, VAT-registered (PHP 3M annual threshold) or about to cross it. Sells anything: skincare, baby gear, electronics, RTW. Sits in Metro Manila, Cebu, Davao, Cagayan de Oro.
- **Why they buy:** Dec 31 2026 deadline. They've already had to upload BIR Form 2303 to Shopee, register at DTI, file 2551Q quarterly. They know BIR is watching the marketplaces. Their bookkeeper costs PHP 5–15K/mo and visibly cannot keep up with 200+ orders/day. They want to **survive the audit**, not optimize accounting.
- **Rough TAM:** DTI registered ~1.6M online businesses in PH (2024). Shopee PH alone reports >700K active sellers. Roughly 250K–500K sit in the PHP 3M–PHP 50M revenue band (above the micro carve-out, below the LTS line). Even 10% conversion = 25K-50K paying SaaS seats.
- **Why now for them:** Stage 1 enforcement starts in earnest after Dec 31 2026. Marketplaces are already remitting 1% WHT and providing BIR Form 2307. The audit data trail already exists on BIR's side. The seller side has no matching record. Pain becomes acute as the year closes.

## 5. Product sketch (MVP)

- One-tap connect Shopee Seller Center, Lazada Seller Center, TikTok Shop Seller Center via official APIs
- Every settled order auto-converts to a BIR EIS-format JSON sales invoice (item lines, VAT-inclusive/exclusive split, buyer TIN if present, seller TIN, ATP reference)
- JWS-signed invoice transmitted to BIR EIS gateway within minutes; status (Submitted / Validated / Rejected) shown per order
- 1% withholding tax credit reconciliation: pulls marketplace 2307 forms, matches to invoices, tracks credit balance
- VAT 12% liability dashboard — running monthly liability vs. WHT credit so seller never gets a surprise on the 25th of next month
- Compliant audit binder export: all transmitted invoices, status logs, 2307s, monthly summaries — downloadable for BIR field audit
- Tagalog + English UX, GCash + Maya autopay for the subscription
- Mobile app to view daily filing status (most owners run the business from their phone)

## 6. AI angle — what's load-bearing

Two real AI jobs, not decoration:

1. **Order → invoice classification.** Marketplace orders come with messy product names ("[SALE!!!] Korean 24k Gold Serum 30ml PROMO HOT"). BIR EIS requires clean item descriptions, BIR-aligned product categories for VAT classification, and proper unit measure. LLM extracts the canonical product name, classifies VAT treatment (12% vs zero-rated vs VAT-exempt — e.g. agri produce), computes the VAT split. Without this, a human bookkeeper has to touch every order. The whole pitch dies.

2. **Rejection-loop fixer.** EIS validation rejects invoices for fixable reasons (TIN format, item code mismatch, signature scope). An agent reads the rejection JSON, patches the invoice, re-signs, re-transmits. Without auto-fix, a non-technical seller chokes on the first rejection batch and churns.

If we ripped the AI out, every order becomes 90 seconds of manual data entry. At 200 orders/day, that's a 5-hour job no SMB owner will do. The product doesn't exist without AI.

## 7. Localization angle (if any)

This **is** the localization. Plays only work because they're PH-native:

- **Language:** Tagalog UX, Bisaya / Ilocano support for help docs. Owner doesn't speak corporate English.
- **Payment rails:** GCash + Maya autopay (not Stripe). PHP 1,499/mo billed monthly via GCash QR.
- **Pricing:** PHP 1,499 / 2,999 / 5,999 tiers — anchored to the existing JuanTax / Sprout price points, deliberately undercuts Juan Growth (PHP 10K/mo).
- **Regulatory:** BIR EIS Certified Solution Provider status (eis-cert.bir.gov.ph) is the moat. Foreign vendor has to fly to BIR Quezon City to get this.
- **Distribution:** Facebook Groups ("Online Sellers PH", "Shopee Sellers Philippines") and FB Live demos with seller influencers are how PH SMB software sells. Not Google Ads.

## 8. Business model — path to $1M–$5M ARR

- **Pricing tiers:**
  - **Starter** PHP 1,499/mo — up to 300 orders/mo, one marketplace connector
  - **Growth** PHP 2,999/mo — up to 2,000 orders/mo, three connectors, WHT reconciliation
  - **Pro** PHP 5,999/mo — unlimited orders, multi-shop, BIR audit binder, dedicated support line
- **Blended ACV:** ~PHP 32,000/yr (USD ~$575).
- **Path to $1M ARR:** ~1,750 paying sellers × PHP 32K = PHP 56M ≈ USD $1.0M. Achievable in 12-18 months if Dec 31 2026 hits and BIR enforces.
- **Path to $5M ARR:** ~9,000 paying sellers, OR layer add-ons: PHP 999/mo "BIR audit defense" insurance partner, PHP 199/order custom-invoice service for B2B buyers, expansion to Lazada/Shopee logistics-finance reconciliation. Adds ~PHP 800-1,500 to ACV. 6,000 sellers × PHP 60K = PHP 360M = $5M.
- **Expansion path:** Connect more marketplaces (Carousell PH, Zalora PH, FB Live commerce), then bookkeeping/quarterly tax filing add-on (Taxumo's lane), then payroll for staffed shops.

## 9. Go-to-market wedge — first 100 customers

Specific, not "content marketing":

1. **Facebook Groups blitz.** "Online Sellers PH" (412K members), "Shopee Sellers Philippines" (370K), "TikTok Shop Sellers PH Official", "Lazada Sellers Philippines Community". Founder posts a 90-sec Tagalog demo video weekly + answers every BIR-tagged thread by name for 60 days. Expect 3–5% group-member → trial click rate.
2. **Bookkeeper partner channel.** There are ~5,000 freelance PH bookkeepers handling 10–30 online sellers each. Offer PHP 500/seat referral + free Pro license to the bookkeeper. Sign 30 bookkeepers = effective 600-seat top-of-funnel.
3. **BIR district roadshow piggyback.** BIR is running RDO seminars on EIS through 2026. Hand out flyers + onboard sellers at the door. Local play — no ad spend.
4. **TikTok seller influencers.** Find 10 PH seller-coach creators with 50K–300K followers (e.g. coaches teaching "how to start your TikTok Shop"). Pay PHP 8K–15K per integrated video. Expected 0.3-0.5% conversion to trial.
5. **Cold DM Shopee Preferred / Mall sellers.** Scrape ~3,000 Shopee Mall and Preferred Seller storefronts (publicly listed), DM owner via marketplace messaging or LinkedIn. 4-5% reply, 1% close.

Founders should expect first 30 sellers from FB Groups in 6 weeks; next 70 from bookkeeper channel + influencer drops by month 4.

## 10. Build complexity — justification

**Medium.** Off-the-shelf parts: Shopee Open Platform API, Lazada Open Platform, TikTok Shop API, BIR EIS REST endpoints, standard JWS libraries, an LLM for product-name normalization, GCash/Maya billing SDKs. Custom work: BIR EIS Certified Solution Provider accreditation (8-12 weeks of testing with BIR, paperwork, JWS edge cases). Reasonable team is 1 senior engineer + 1 BIR-fluent ops/compliance lead + 1 PH community manager. v1 in 12-16 weeks, BIR certification in parallel.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | BIR-blessed CSP track exists |
| Ethical — no harm / dark patterns | ✅ | Helps small sellers comply, not evade |
| Market exists (evidence above) | ✅ | 250K+ sellers facing hard Dec 31 2026 deadline |
| 1–5 person team can build this | ✅ | Medium complexity, off-shelf APIs |
| Launchable with <$50K / ₹40L | ✅ | Cebu/Manila dev cost low, no inventory |

All five clear.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire: BIR penalties + 3-day clock. Felt daily across hundreds of orders. |
| Demand evidence | 15 | 13/15 | Hard deadline + multiple competitor categories (none marketplace-native at SMB price). |
| Build feasibility | 15 | 10/15 | 3 marketplace APIs + BIR JWS + CSP cert in parallel. Real but not exotic engineering. |
| Distribution clarity | 15 | 12/15 | FB groups + bookkeepers + influencer math is concrete. Conversion unproven. |
| Revenue mechanics | 15 | 12/15 | PHP 1.5K/2.9K/5.9K tiers benchmarked to Juan/Sprout. ACV math works. |
| Time to first revenue | 10 | 9/10 | Self-serve sign-up + free 14-day; first paid in 6-8 weeks of launch. |
| Defensibility | 10 | 7/10 | BIR CSP accreditation + marketplace connectors + 3-day workflow lock-in. Copyable in 12 months by a determined competitor. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs one founder who can architect a webhook-driven middleware and one who can navigate BIR's compliance bureaucracy (or contract a Philippine CPA from week 1). Doable as a 2-founder play; risky as a generalist solo.

### Key assumptions to validate (3–5)

1. **Assumption:** PHP 3M–PHP 50M sellers will pay PHP 1,500-3,000/mo for EIS compliance. **How to test:** 30 founder interviews in FB Groups + Zoom demos, ask for a deposit at PHP 1,499 within 2 weeks.
2. **Assumption:** BIR CSP accreditation is achievable in <12 weeks for a 2-person team. **How to test:** Apply on eis-cert.bir.gov.ph in week 1, schedule the testing call, document the actual path. Worst case, partner with an already-accredited entity (Beppo, Sprout, Taxilla) as a sub-vendor.
3. **Assumption:** BIR will actually enforce Dec 31 2026. **How to test:** Track RMC issuances + BIR field audit news through Q3 2026. If a deferral RR drops, urgency collapses and so does the wedge.
4. **Assumption:** Shopee/Lazada/TikTok Shop APIs expose enough order detail (buyer TIN where applicable, line items, taxes withheld) to build a compliant invoice without manual touch. **How to test:** Read each platform's order-export schema in week 1. Build a 50-order spike for a friendly seller in week 2.
5. **Assumption:** Filipino bookkeepers will actively channel-partner, not block the product. **How to test:** Pitch 15 freelance bookkeepers via PICPA & PIAB groups. Anything below 5 "yes, send me the affiliate link" is a red flag.

### Risk flags

1. **Regulatory risk:** BIR has already extended the deadline once (Mar → Dec 2026). Another extension or scope cut would crush urgency. Mitigate by selling the WHT-credit reconciliation value even without EIS pressure.
2. **Platform dependency:** Shopee/Lazada/TikTok could restrict their seller-data APIs or deprioritize CSP integrations. Hedge with at least two connected platforms before any one matters > 40% of revenue.
3. **Competitive risk:** A BIR-accredited incumbent (Sprout, Juan, Taxilla, Sovos PH partner) could ship a marketplace connector. Speed and PH-native UX are the only defenses; need to be visible before they do.
4. **Compliance liability:** If our transmission fails and seller eats a BIR fine, we get sued. Cap liability in TOS, carry CSP indemnity, run staged rollouts.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       1 senior backend eng + 1 PH-domain compliance lead + 1 community/GTM
Time to revenue:        8–12 weeks from launch
Capital to launch:      PHP 1.5–2.5M (≈ USD $27K–$45K) — covers 4 months runway + BIR CSP fees
Top 3 assumptions to validate first:
  1. Sellers will pay PHP 1,499/mo for EIS auto-filing — 30 FB Group demos + PHP 999 deposit ask
  2. BIR CSP accreditation lands in <12 weeks — start application immediately, document gating steps
  3. Marketplace APIs expose enough order detail to build a compliant invoice — 50-order spike with a friendly seller
Kill criteria:
  - Abandon if BIR issues another deadline extension >12 months past Dec 31 2026
  - Abandon if a marketplace closes seller-data API access to third-party CSPs
  - Abandon if <5 of 30 FB Group demos result in a PHP 999 deposit within 2 weeks
  - Abandon if BIR CSP accreditation isn't viable for a 2-person foreign-founded team within 4 months
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Read RR 11-2025, RR 26-2025, RMC 55-2024 end-to-end. Pull the BIR EIS JSON schema and JWS signing docs from eis-cert.bir.gov.ph. Pull Shopee/Lazada/TikTok Shop seller API order schemas.
- **Day 2:** Join the 4 biggest PH online-seller FB Groups. Read every BIR-tagged thread from the last 90 days. Tag 50 specific seller accounts complaining about BIR / 2307 / EIS.
- **Day 3–4:** Send a 6-question form + Calendly link to those 50 sellers. Target 20 short Zoom calls. Show a Loom of the proposed flow (Shopee CSV in → BIR invoice JSON out). Ask each: would you pay PHP 1,499/mo, and would you pre-deposit PHP 999 today.
- **Day 5:** Call eis-cert.bir.gov.ph and start the CSP intake. Confirm the actual gating steps and timeline. Day 5 decision: **go** if ≥8 of 20 interview sellers ask for the deposit link and CSP intake confirms <12-week path; **no-go** otherwise.

Falsifiable: deposits + a written CSP timeline, not "they seemed interested."
