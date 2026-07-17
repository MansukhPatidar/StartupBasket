---
title: "CostProof — deduction packet builder for Vietnam shops"
slug: vietnam-household-deduction-packet
date: 2026-07-17
category: Compliance / Vietnam — Household & Individual Businesses (hộ kinh doanh) forced onto the declaration method after lump-sum tax abolition
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Captures every invoiceless purchase and turns it into audit-proof expense documentation before a Vietnamese shop declares its tax."
tags:
  vertical: Compliance
  model: SaaS
  geography: SEA
  secondary: [Vietnam, Zalo-first, Multilingual, AI-agent, Compliance-driven, SMB, Mobile-first]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 11
  revenue: 11
  time: 7
  defensibility: 4
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# CostProof — deduction packet builder for Vietnam's household businesses

## 1. One-liner

Captures every invoiceless purchase and turns it into audit-proof expense documentation before a Vietnamese shop declares its tax.

## 2. Trend signal — why now?

On **1 January 2026, Vietnam abolished the presumptive ("khoán" / lump-sum) tax regime** for household businesses (hộ kinh doanh) and forced them onto self-declaration of actual revenue minus actual expenses. This is the single biggest forced-formalization event in Vietnamese SME history: **~3.83 million registered household businesses** (General Department of Taxation, end-Oct 2025; historically 5.2M), of which ~23% report VND 200M–3B/yr — the band that now must declare in earnest.

The pain that nobody's tooling for: on the revenue side, e-invoices are mandatory and clean. On the **expense side, most inputs come from wholesale markets, farmers, and informal intermediaries that don't issue invoices.** Vietnam-Briefing and EY both flag it plainly: "While output transactions must be documented, input costs frequently are not. As a result, legitimate expenses may not be recognized, **potentially inflating taxable income.**" Missing a legal document means the expense is *automatically disallowed* — the owner pays tax on money they never earned.

Real owner voices, verbatim (VnExpress, "Hộ kinh doanh lúng túng trước 'giờ G' bỏ thuế khoán," 30 Dec 2025):
- Ms. Nga, clothing shop, Hà Nội: *"Chỉ còn vài ngày chuyển sang cách tính thuế mới, tôi không rõ cần chuẩn bị sổ sách, chứng từ kê khai thế nào"* — "Days from the switch and I don't know what books and documents to prepare."
- Ms. Thái Minh, general store, Hà Nội: *"Khi chuyển sang kê khai, tôi phải liệt kê toàn bộ hay chỉ khai phần hàng không có chứng từ?"* — "Do I list everything, or only the goods that lack documentation?"

That second quote *is the product*. The law already provides the answer (a seller-identification list — bảng kê — using name, phone, ID for invoiceless goods), but owners don't know it exists and can't assemble it correctly.

Provenance:
  - Signal 1 (Demand): Millions of household businesses forced to declaration method 1 Jan 2026; input costs from invoiceless channels disallowed → tax on inflated income; owners publicly "flustered." — https://vnexpress.net/ho-kinh-doanh-lung-tung-truoc-gio-g-bo-thue-khoan-4999859.html + https://vietnamnet.vn/en/tax-compliance-costs-put-vietnam-s-small-businesses-under-pressure-2508410.html — 30 Dec 2025 / 2026
  - Signal 2 (Feasibility): Vietnamese-script OCR + cheap multilingual inference now accurate on non-Western scripts; e-invoice XML standardized under Decree 70/123 so documents are machine-readable and reconcilable. — https://www.vietnam-briefing.com/news/e-invoice-compliance-in-vietnam-regulations-requirements-and-best-practices.html/ — 2026
  - Signal 3 (Economic): VND 70.8–159.3 trillion ($2.9–6.5B) estimated annual compliance burden across 1.77M above-threshold businesses; funded invoicing incumbents (Bizzi 1,000+ businesses, MISA, Sapo) prove SMB software spend. — https://vietnamnet.vn/en/tax-compliance-costs-put-vietnam-s-small-businesses-under-pressure-2508410.html — 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The whole software market rushed to the **output** side — issuing compliant e-invoices (Bizzi, MISA meInvoice, Sapo POS, dozens of T-VAN providers). That's plumbing the government mandated and largely subsidizes; MISA and Bizzi own it.

Nobody owns the **input/expense-substantiation** side for the household segment. The declaration method only helps you if your expenses are recognized. For a shop buying rice from a wholesale market, chicken from a farmer, and packaging from an unregistered trader, *none* of that arrives with a legal document by default. Left alone, the owner either (a) declares only documented expenses and overpays tax massively, or (b) declares real expenses with no backing and gets them disallowed at audit plus a penalty.

The law gives three escape routes — a supplier sales invoice (hóa đơn bán hàng) with complete fields, a seller-identification bảng kê for invoiceless goods, and mandatory non-cash payment proof for purchases ≥VND 5M. **CostProof operationalizes all three at the point of purchase**, so the packet is already built when Q1 declaration comes due. This is not "another invoice app." It's the deduction-defense layer the output-invoice apps structurally ignore.

## 4. Target market

- **Primary customer:** Owner-operators of household/individual businesses (hộ kinh doanh) in the **VND 500M–3B/yr revenue band** — above the new VND 500M exemption, below the corporate line. Grocery/general stores, clothing shops, small F&B, building-materials counters, agri-produce traders. 1–3 staff, in Tier-1/2 Vietnamese cities. Secondary buyer: the **tax agents (đại lý thuế) and part-time accountants** who each service dozens of these shops and drown in shoebox receipts.
- **Why they buy (their words):** "I don't know what books and documents to prepare." "Do I list everything or only the goods without documentation?" The fear is concrete and dated — Q1 2026 is the first real declaration and audits follow.
- **Rough TAM reasoning:** ~23% of 3.83M ≈ **~880K businesses** in the target band. If even 3% ever pay a tool like this, that's ~26K paying customers — far past a $1–5M ARR need.
- **Why now for them:** The lump-sum method they relied on for decades vanished on 1 Jan 2026. There is no "wait and see" — the first quarterly declaration is already here, and disallowed expenses hit the very first filing.

## 5. Product sketch (MVP)

- **Snap-a-purchase capture** over Zalo (Vietnam's dominant messenger): photograph a market receipt, a handwritten note, or a supplier's paper bill; AI extracts amount, date, goods, seller.
- **Document-type classifier** that knows Vietnamese reality: is this a VAT invoice, a household-supplier sales invoice, a slip with no legal standing, or an invoiceless buy that needs a bảng kê?
- **Missing-document coach:** for each purchase, tells the owner exactly what's needed to make it deductible — "get the seller's name, phone and ID," "this ≥VND 5M buy needs a bank/QR transfer, not cash," "ask this supplier to issue a hóa đơn bán hàng."
- **Auto-built bảng kê (seller-identification list)** in the legal format for all invoiceless goods, ready to attach at declaration.
- **Non-cash payment flag:** warns in real time when a ≥VND 5M purchase is about to be paid in cash and would be disallowed.
- **Quarterly expense pack:** one export — matched documents + bảng kê + payment proofs — handed to the shop's tax agent or uploaded alongside the declaration.
- **Deduction-at-risk meter:** running VND figure of "expenses you can't yet defend," so the owner sees the tax they'll overpay if they don't fix it.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into a form nobody fills in. AI does the real work: **OCR/vision on messy Vietnamese-script paper and phone photos**, **classifying each document against a shifting body of tax rules** (VAT invoice vs. sales invoice vs. non-legal slip), and **deciding per-purchase which of the three legal substantiation routes applies** and what's missing. The multilingual/Vietnamese-script accuracy and the rule-mapping judgment are exactly what's newly cheap and reliable in 2026 — and exactly what a shopkeeper can't do manually across hundreds of daily transactions.

## 7. Localization angle

This *is* the localization play — it cannot be a generic global product:
- **Language/script:** Vietnamese-only UI and Vietnamese-script OCR on handwritten market receipts.
- **Payment rails:** VietQR / bank-transfer proof capture, because the ≥VND 5M non-cash rule is a hard deductibility gate.
- **Local pricing:** a ₫99K–299K/mo tier works where a $49 tool never would.
- **Distribution channel:** Zalo-first, not app-store-first — that's where these owners already are.
- **Regulatory quirk = the whole moat:** Decree 68/2026, the bảng kê rules, the sales-invoice-vs-VAT-invoice distinction. A US/EU incumbent has no reason to encode any of this.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** ₫149K/mo (~$5.80) solo shop tier; ₫399K/mo (~$15.50) "tax-agent" tier managing up to ~25 client shops from one dashboard.
- **ACV:** ~₫1.8M (~$70) blended per paying account per year.
- **Rough math to $1M ARR:** ~14,300 solo shops at ₫149K/mo, or a mix skewed to tax agents (each agent seat ≈ 25 shops served) gets there with far fewer logins. Against ~880K target-band businesses, ~1.6% penetration.
- **Rough math to $5M ARR:** ~70K paying accounts, or heavier tax-agent adoption where one agent account covers dozens of shops — plausible given agents are the natural aggregators of this pain.
- **Expansion path:** add revenue-side declaration filing, a lending/credit view built on the clean expense data, and a "supplier gets nudged to issue proper invoices" loop that pulls suppliers onto the platform too.

## 9. Go-to-market wedge — first 100 customers

- **Tax agents first (the aggregators).** Vietnam's đại lý thuế associations and Facebook/Zalo groups are full of accountants panicking about onboarding shoebox-receipt clients for Q1. Offer the tax-agent tier free for their first 10 client shops; each agent that adopts brings 15–25 shops. Target 20 agents in month 1.
- **Facebook/Zalo hộ-kinh-doanh groups.** There are large, active groups where owners ask exactly the VnExpress questions ("phải liệt kê toàn bộ hay chỉ khai phần hàng không có chứng từ?"). Post the free "deduction-at-risk" self-check; convert on the fear.
- **Wholesale-market beachhead.** Pick one large market (e.g. an Bình Tây / Đồng Xuân-style hub), sign a table of 30 traders who all buy from the same invoiceless suppliers, and use them as a referral cluster.
- **Content on the exact rule confusion** (sales invoice vs VAT invoice, the ≥VND 5M cash trap) — ranks fast because it's freshly urgent and under-served in Vietnamese.

## 10. Build complexity — justification

Medium. Off-the-shelf: vision/OCR APIs, Zalo Official Account messaging, standard mobile web. Custom work: a **Vietnamese tax-rule engine** (document classification + per-purchase substantiation logic) that must be maintained as decrees update, plus reliable extraction from genuinely messy handwritten receipts. A pair with a Vietnamese tax-domain advisor ships a credible v1 in ~3–4 months; the rule engine and edge-case OCR are the honest time sinks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps owners comply with, not evade, tax law. |
| Ethical — no harm / dark patterns | ✅ | Reduces overpayment and audit penalties; no dark patterns. |
| Market exists (evidence above) | ✅ | 3.83M businesses, dated regulatory forcing event, verbatim owner complaints. |
| 1–5 person team can build this | ✅ | Pair + domain advisor. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire and dated — overpay tax or get expenses disallowed at the very first Q1 declaration. |
| Demand evidence | 15 | 13/15 | Named regulation, millions affected, verbatim owner quotes, funded adjacent incumbents. |
| Build feasibility | 15 | 11/15 | Vietnamese OCR + maintained rule engine is real work; ~3–4 months for a pair. |
| Distribution clarity | 15 | 11/15 | Tax-agent aggregators + Zalo groups are concrete; conversion of low-ARPU shops is uncertain. |
| Revenue mechanics | 15 | 11/15 | Low ARPU offset by huge base and agent leverage; retention past declaration season is the question. |
| Time to first revenue | 10 | 7/10 | Pilot-to-paid within weeks via agents, but low price means volume needed. |
| Defensibility | 10 | 4/10 | Rule-engine + workflow lock-in is a soft moat; a funded incumbent (Bizzi/MISA) could bolt this on. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will pay ₫149K/mo to *avoid overpaying tax*, not just to file. **How to test:** Show 30 owners their "deduction-at-risk" VND figure; measure how many pre-pay a quarter.
2. **Assumption:** Tax agents will adopt and bring their client shops as a channel. **How to test:** Onboard 10 agents free; track how many client shops each activates in 30 days.
3. **Assumption:** OCR + classification is accurate enough on handwritten market receipts that owners trust the output. **How to test:** Blind-test 500 real receipts; measure field-level accuracy and correction rate.
4. **Assumption:** Retention survives past the Q1 declaration crunch (not a one-quarter tool). **How to test:** Track month-4 and month-7 active rate of Q1 cohort.

### Risk flags

1. **Platform dependency:** Government-subsidized "free shared accounting software" for household businesses is promised; if it quietly absorbs the bảng kê workflow, the wedge narrows. Watch what the free tool actually ships.
2. **Incumbent bolt-on:** Bizzi/MISA have the invoice data and distribution to add an expense-substantiation module. Speed and the agent channel are the only defense.
3. **Low ARPU / churn:** ₫149K/mo means volume is everything; seasonal usage (spikes at quarterly declaration) could depress retention.
4. **Regulatory drift:** The substantiation rules (Decree 68/2026, bảng kê formats) will keep changing; the rule engine needs constant upkeep or it silently gives wrong advice.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Vietnamese technical founder + tax-domain advisor (đại lý thuế)
Time to revenue:        6–10 weeks (via tax-agent pilots)
Capital to launch:      ₫250–600M (~$10–24K)
Top 3 assumptions to validate first:
  1. Owners pay to avoid overpaying tax — show 30 owners their deduction-at-risk figure, measure pre-pay.
  2. Tax agents act as the channel — 10 free agents, count activated client shops in 30 days.
  3. Handwritten-receipt OCR is trustworthy — blind-test 500 receipts, measure correction rate.
Kill criteria:
  - Abandon if <10% of 30 owners shown their deduction-at-risk figure will pre-pay a quarter.
  - Abandon if the government free tool ships an equivalent bảng kê builder before v1.
  - Abandon if OCR correction rate on real market receipts stays above ~25% after tuning.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull 100 real market/supplier receipts from 5 friendly shops; hand-run them through an off-the-shelf Vietnamese OCR + a prompt that classifies document type and names the missing substantiation. Measure raw accuracy.
- **Day 3–4:** Sit with 3 tax agents; walk them through the "quarterly expense pack" mock and the agent dashboard. Ask directly: would you push this to your client shops, and at what price?
- **Day 5:** Show 30 owners (via a Zalo group) their personal "deduction-at-risk" VND number from a simple form. Go/no-go on a **falsifiable** bar: ≥10% say they'd pre-pay ₫149K/mo, AND ≥2 of 3 tax agents commit to onboarding client shops.
