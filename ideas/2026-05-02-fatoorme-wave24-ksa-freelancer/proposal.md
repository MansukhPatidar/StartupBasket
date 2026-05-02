---
title: "FatoorMe — ZATCA Wave-24 copilot for Saudi freelancers"
slug: fatoorme-wave24-ksa-freelancer
date: 2026-05-02
category: Compliance SaaS / Saudi Arabia Freelancers + Solo Service Micro-Businesses
complexity: Medium
score: 75
verdict: GO
confidence: Medium
oneLiner: "WhatsApp/mobile bilingual ZATCA Phase-2 e-invoicer plus auto-quarterly VAT filing for Saudi freelancers caught by Wave-24."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, Multilingual, AI-agent, Compliance-driven, Solo-builder, SMB, Saudi-Arabia, MENA, Bilingual-Arabic]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, technical-heavy]
featured: false
---

# FatoorMe — ZATCA Wave-24 copilot for Saudi freelancers

## 1. One-liner

WhatsApp/mobile bilingual ZATCA Phase-2 e-invoicer plus auto-quarterly VAT filing for Saudi freelancers caught by Wave-24.

## 2. Trend signal — why now?

ZATCA Wave 24 of the Fatoora programme drops the Phase-2 integration threshold to **SAR 375,000** of annual VATable turnover — about USD 100K — and pulls "thousands of SMEs" into mandatory real-time XML clearance for the first time. The integration window opens 1 April 2026 and hard-closes **30 June 2026** ([cleartax.com/sa/zatca-wave24-einvoicing-in-saudi-arabia](https://www.cleartax.com/sa/zatca-wave24-einvoicing-in-saudi-arabia), [zatca.gov.sa news_1426](https://zatca.gov.sa/en/Pages/news_1426.aspx)).

In parallel, Saudi has gone from a few thousand registered freelancers to **2.25M** by Sept 2024 — Vision-2030 work-style reform plus a freelance-document regime that lets Saudis legally invoice without a full Commercial Registration ([Arab News](https://www.arabnews.com/node/2584265/business-economy)). Plenty of these freelancers — mid-career consultants, engineers, devs, content creators, trainers — clear SAR 375K of revenue without ever building a "shop." Today they get pulled into Phase-2.

The third leg is the supply side. Trade press flags that **"many certified solution providers are already operating at capacity as the deadline approaches"** ([insightss.co Wave-24 guide](https://insightss.co/blogs/zatca-fatoora-wave-24-compliance/), [silentinfotech ZATCA SME guide](https://silentinfotech.com/blog/integration-6/zatca-e-invoicing-compliance-for-saudi-smes-386)). Penalties run **SAR 5,000 to 50,000 per violation**, and ZATCA can revoke your ability to issue legally valid invoices — i.e. cash flow stops — until you're back in compliance.

Existing tools (Wafeq SAR 99/mo, Qoyod SAR 199/mo, Zoho Books, ClearTax SA, FatooraOnline) are real-accounting-system shaped — chart of accounts, journals, payroll, the works ([Wafeq pricing review](https://qeemahcloud.com/en/blog/strategic-evaluation-saudi-accounting-infrastructure/), [Qoyod pricing](https://www.qoyod.com/en/)). For a solo freelancer with 6-15 invoices a month, a corporate Saudi client list, and zero accounting background, that's the wrong shape.

Provenance:
  - Signal 1: Wave-24 mandate drops Phase-2 threshold to SAR 375K turnover, deadline 30 June 2026 — [cleartax.com/sa/zatca-wave24-einvoicing-in-saudi-arabia](https://www.cleartax.com/sa/zatca-wave24-einvoicing-in-saudi-arabia) — accessed 2026-05-02
  - Signal 2: 2.25M registered Saudi freelancers by Sept 2024, freelance-document regime lets Saudis invoice without CR — [Arab News](https://www.arabnews.com/node/2584265/business-economy) — accessed 2026-05-02
  - Signal 3: Certified ZATCA solution providers operating at capacity, SAR 5K–50K per-violation penalties, full invoice-issuance suspension as ultimate sanction — [insightss.co Wave-24 compliance guide](https://insightss.co/blogs/zatca-fatoora-wave-24-compliance/) — accessed 2026-05-02
  Category: Regulatory arbitrage

## 3. The opportunity

Wafeq and Qoyod won the SMB accounting-software war in KSA. They did not win the **freelancer Phase-2 onboarding war** — they didn't fight it, because Wave-24 is the first time it exists. Their products start with an empty chart-of-accounts and a setup wizard that assumes the user wants ledgers. That's wrong for a Snapchat agency owner with a laptop and a corporate Saudi client.

The 10× wedge is shape, not price. Same money (SAR 39–99/mo) buys a phone-first, WhatsApp-tight, Arabic-default tool that does **only the four things a Wave-24 freelancer actually needs**:

1. Issue a Phase-2-cleared XML invoice with cryptographic stamp + QR in under 30 seconds, in Arabic or English, from a phone or WhatsApp message.
2. Push the cleared PDF/A-3 to the buyer over WhatsApp.
3. Track receipts from those invoices (just SAR in/out — not a real GL).
4. **Auto-prepare** the quarterly VAT return on day 1 of the new quarter and one-tap submit to the ZATCA portal.

Everything else (purchase orders, multi-branch, payroll, inventory, multi-currency) is intentionally absent. That's the whole point.

## 4. Target market

- **Primary customer:** Saudi-national or GCC-resident freelancer or solo service business — software developer, designer, photographer, marketing consultant, trainer, fitness coach, lawyer-on-call, small-shop SEO agency owner — with **annual VATable revenue between SAR 375K and SAR 2M**, 0–2 staff, predominantly billing **Saudi corporate clients** (KSA-Saudi Aramco contractors, ministries, agencies, mid-cap Riyadh/Jeddah firms). They invoice 6–25 times/month.
- **Why they buy:** They got the ZATCA notification email. June 30 is real. They tried Wafeq's free trial, got lost in the chart-of-accounts. Their accountant wants SAR 1,500/quarter to onboard them. They don't have time. They want one app on their phone.
- **Rough TAM reasoning:** Saudi has 1.2M+ registered SMEs and 2.25M registered freelancers. Wave 24 specifically targets SAR 375K–750K turnover — call it conservatively **40–80K micro-businesses in this band** that need Phase-2 by June 30, with a steeper tail of 100–200K freelancers approaching the threshold over the next 18 months. Even at 5% market share that's 2K–4K paying accounts.
- **Why now for them:** Deadline is 58 days away. Solution providers are at capacity. Their accountant doesn't know Phase-2 yet either.

## 5. Product sketch (MVP)

- One-tap freelance-license + ZATCA-Fatoora portal onboarding wizard (uploads CR or freelance document, links VAT account, registers as Phase-2 taxpayer with our certified solution-provider partner under the hood).
- WhatsApp bot: send a voice or text message — "اعمل فاتورة لـ شركة الراشد، 12,500 ريال، استشارة تسويق" — and FatoorMe replies in 5 sec with a Phase-2-cleared XML+PDF/A-3 invoice and a forward-to-buyer button.
- Mobile app: full bilingual (AR-first) invoice composer, customer book, recent-invoices feed, e-signature for accepted quotes.
- Auto-quarterly VAT return: pull cleared invoices and tracked receipts → fill ZATCA's return form → preview → one-tap submit → store the receipt of acknowledgment.
- Buyer-side QR-link: every invoice generates a public link with the QR + TLV stamp the buyer can independently verify on the ZATCA portal.
- Penalty radar: pings the user 7/3/1 days before any ZATCA-tracked deadline (filing, payment, license renewal).
- "Talk to a human" button: SAR 99 paid escalation to a Saudi-CPA partner for edge cases.

## 6. AI angle — what's load-bearing

Three places AI is doing real work, not decoration:

1. **Free-form Arabic invoice creation.** Voice-note "اعمل فاتورة لمحمد، خمسة آلاف ريال، تصوير زواج" → structured invoice (counterparty resolution against the customer book, SAR amount parsing, line-item categorization, VAT rate selection). This is dialect-Arabic + named-entity work that didn't function reliably in 2023.
2. **VAT-return auto-fill.** From the issued-invoices feed plus uploaded receipts, classify each line into ZATCA return boxes (standard rate, zero-rate, exempt, reverse-charge, imports). For freelancers this is mostly mechanical, but the input is messy bilingual receipt photos and PDF bank lines.
3. **Penalty-prevention copilot.** Plain-Arabic answers to "هل أحتاج أصدر فاتورة لعميل في الإمارات؟" with a citation to the relevant ZATCA circular, plus a flag if the user's filed return looks anomalous (sudden zero, missing months, mismatched VAT collected vs. invoices).

Pull AI out and you're back to a SaaS form with a settings panel — i.e. Wafeq.

## 7. Localization angle (if any)

This is **the** localization play. The product cannot exist without:
- Arabic-first UI (right-to-left, Hijri date toggle, dialect Arabic in voice).
- ZATCA Phase-2 XML/UBL + cryptographic stamp + TLV-encoded QR.
- Saudi banking rails (mada, STC Pay, Apple Pay) for receipt tracking.
- Freelance-document and CR portal flows on Absher/MHRSD/MoC.
- WhatsApp Business API as primary invoice-delivery channel — over 90% of KSA residents use WhatsApp daily.

A US/EU SaaS dropped into KSA is unusable here. That's the moat for the first 18 months.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** SAR 39/mo (~USD 10) "Solo" — 30 invoices/mo, basic VAT autofile. SAR 99/mo (~USD 26) "Pro" — unlimited invoices, advanced bilingual receipts AI, penalty radar, priority WhatsApp escalation. One-time SAR 299 onboarding fee for end-to-end VAT registration + Phase-2 setup (waived if the user signs up annually).
- **ACV:** Blended ~SAR 720–1,200/yr (~USD 190–320), plus SAR 299 onboarding for ~50% of new accounts.
- **$1M ARR math:** ~3,500 paying customers at SAR 1,000/yr blended ACV ≈ SAR 3.5M ≈ USD 930K. Achievable inside 18 months of a hot 58-day deadline.
- **$5M ARR math:** ~15,000 paying customers at SAR 1,250/yr ACV blended with attached "talk to human" escalations and a buyer-side reconciliation upsell for 5-employee shops crossing into the next band. Attainable in 30–36 months if the per-customer hooks (auto-filing, bank linking) drive >85% renewal.
- **Expansion path:** Same product walks naturally into UAE (FTA e-invoicing mandate Q3 2026) and Oman (OTA mandate 2027). Same XML standard family (Peppol-derived UBL), different submission portal.

## 9. Go-to-market wedge — first 100 customers

The deadline does the marketing. The wedge is being on the ground at the right places in 14 days.

- **Day 1–14: Cold DM the panic.** Search X for ((ZATCA OR فاتورة OR "Wave 24") AND ("ساعدوني" OR "محتار" OR "deadline")) over the last 30 days — there are hundreds of Saudis tweeting confusion. Personalised reply with a Loom in Arabic walking them through their specific situation. Realistic conversion: 3–5% of 800 contacted → 25–40 customers in two weeks.
- **Partner with the freelance platforms that already aggregate the audience.** Marn, Ureed, Freelance Yard list tens of thousands of Saudi freelancers ([Saudi freelance market report](https://www.businesswire.com/news/home/20251212991132/en/)). Offer them a co-branded "Wave-24 onboarding partner" page — they don't want to build this themselves, and they want their power-sellers to keep being able to invoice corporate buyers. Two of three platforms = pipeline of 10K+ qualified leads.
- **Coworking + Vision-2030 incubators.** Riyadh's THE SPACE, Sentient Hub, Garage, AlUla Creative Hub, plus Misk Foundation founders — ~40 venues. Run an in-person "ZATCA in 60 minutes" lunch session in 8–10 of them. Each session reaches 20–60 freelancers; ~25% convert with a deadline this close.
- **Boring SEO play, but for the deadline window.** Buy ".sa" domain phrases like "wave 24 freelancer ZATCA" and "موجة 24 فاتورة" — small ad-spend (~USD 3K) for 8 weeks captures search-intent traffic that already exists.
- **CPA referral channel.** Saudi CPAs are slammed and most won't service freelancers under SAR 1M turnover anyway. Pay them SAR 200/referral. 200 active CPAs × ~10 freelancer-clients each they can't service = 2,000 warm referrals.

## 10. Build complexity — justification

Medium. Three real chunks: (1) ZATCA Phase-2 XML + cryptographic-stamp + Fatoora API integration — non-trivial but covered by integrating with an existing certified solution provider via API rather than getting our own Phase-2 cert in v1; (2) Arabic-dialect voice/text understanding for invoice creation — off-the-shelf models work today, but tuning will take iterations; (3) bilingual receipt OCR and quarterly-return auto-fill — standard. Mobile + WhatsApp + web admin. Realistic v1 in 3–4 months for a pair of builders, one of whom has Saudi tax/CR domain context.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | ZATCA explicitly allows third-party authorised filers; integrating via a ZATCA-listed solution provider is standard. |
| Ethical — no harm / dark patterns | ✅ | Helps small operators stay compliant; no dark patterns. |
| Market exists (evidence above) | ✅ | Mandatory deadline + 2.25M-freelancer pool + multiple incumbents already monetising. |
| 1–5 person team can build this | ✅ | Pair plus 1 ops/CPA partner. |
| Launchable with <$50K / ₹40L | ✅ | Most spend is ZATCA solution-provider revenue share + WhatsApp Business API + ad pilot. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17 | Hard deadline, real penalties up to SAR 50K + invoice-issuance suspension. Hair-on-fire for the segment. |
| Demand evidence | 15 | 12 | Multiple existing players already monetising the broader category (Wafeq $12.1M ARR), specific Wave-24 cohort is fresh and underserved. Loses points because direct freelancer-in-band complaint volume is shallow on Western forums (most pain plays out on X-Arabic). |
| Build feasibility | 15 | 11 | ZATCA integration via partner provider compresses risk, but XML/QR/cryptographic stamp + AR-voice + auto-VAT-return is real engineering. 12–16 weeks for a pair. |
| Distribution clarity | 15 | 11 | Five concrete channels above with realistic conversion math. Loses a couple points because content-SEO in Arabic compliance is slower than English. |
| Revenue mechanics | 15 | 11 | Pricing benchmarked tightly against Wafeq/Qoyod. Onboarding fee adds upfront cash. ACV may compress if Wafeq drops a freelancer SKU. |
| Time to first revenue | 10 | 8 | First paying customer 4–6 weeks. The deadline pressure itself is the funnel. |
| Defensibility | 10 | 5 | Ahead-of-the-curve product shape, freelance-platform partnerships, CPA referral network are soft moats. Wafeq could ship a "Solo" SKU in 3 months if they noticed. |
| **Total** | **100** | **75** | **GO.** |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

A founder without first-hand Saudi tax/CR/freelance-document context — or a co-founder with that context — will produce the wrong product and lose to Wafeq. A pure-engineer team without local distribution will lose distribution fast.

### Key assumptions to validate (3–5)

1. **Assumption:** Wave-24 freelancers will not just pay an accountant SAR 200–500/mo and skip software entirely. **How to test:** 30 in-person interviews in two Riyadh and one Jeddah coworking space; ask "what would you pay for [feature list], how does that compare to your accountant?"
2. **Assumption:** A WhatsApp/voice-driven Arabic invoice composer is meaningfully easier than Wafeq for this user. **How to test:** Side-by-side timed task on 20 freelancers — "issue a SAR 12,500 cleared invoice to شركة الراشد." Target: WhatsApp flow is ≥3× faster and ≥40 NPS points higher.
3. **Assumption:** Marn / Ureed / Freelance Yard will partner. **How to test:** Direct outreach to BD leads at all three within week 1 with a co-branded landing-page mockup. Need at least one yes in 30 days.
4. **Assumption:** ZATCA-listed solution provider will white-label / API-resell at <SAR 50/customer/yr. **How to test:** Direct quote requests from 4 Phase-2-certified providers in week 2.
5. **Assumption:** Auto-quarterly VAT return classification accuracy > 95% on freelancer-tier complexity. **How to test:** Ground-truth 50 historical freelancer VAT returns against the auto-classifier; pass bar is 95% box-level accuracy on Q1 2026 returns.

### Risk flags

1. **Platform-dependency risk:** Reliant on (a) a ZATCA-listed Phase-2 provider for clearance, (b) WhatsApp Business API. ZATCA spec changes (which already happen — new TSE-style spec updates Feb 2026) and WhatsApp policy changes are both upstream forks.
2. **Incumbent-counterattack risk:** Wafeq is well-funded ($12.1M ARR per public Latka data) and has a freelancer license guide already published. They could ship a "Wafeq Solo" SKU at SAR 49/mo that closes the wedge.
3. **Local-distribution risk:** Cold-DM in Arabic at scale needs a native-Arabic-speaking founder or a paid-ops hire. Without that, the GTM math breaks.
4. **Regulatory-window risk:** Wave-24 deadline is one moment. If ZATCA softens the deadline (extension is plausible — Saudi has done it before for Phase-1), urgency drops 50% overnight.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Saudi or KSA-resident founder pair, one with hands-on tax/CR/Fatoora-portal experience, one with mobile + AI engineering chops, plus a Saudi CPA on retainer.
Time to revenue:        4–6 weeks from launch
Capital to launch:      ~$15–25K (ZATCA solution-provider revenue share + WhatsApp Business API + ad pilot + 2 months of CPA retainer)
Top 3 assumptions to validate first:
  1. Wave-24 freelancers will pay SAR 39–99/mo for shape over Wafeq — 30 in-person interviews in two weeks
  2. ZATCA Phase-2 provider will API-resell at <SAR 50/customer/yr — 4 quotes in two weeks
  3. At least one of Marn / Ureed / Freelance Yard partners — direct BD in week 1
Kill criteria:
  - Abandon if <15% of 30 interviewed freelancers say they would pre-pay an annual SAR 99/mo plan after seeing the demo
  - Abandon if no ZATCA-listed Phase-2 provider quotes a ≤SAR 50/customer/yr API tier within 30 days
  - Abandon if Wafeq or Qoyod ships a phone/WhatsApp-first "Solo" SKU before our v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page bilingual landing page describing the product. Set up an Arabic-language X account. Start cold-DM-ing 200 Saudi freelancers tweeting about Wave-24 confusion in the last 30 days.
- **Day 3–4:** Conduct 15 30-minute Zoom interviews with Saudi freelancers in the SAR 375K–2M band. Walk them through the proposed flow on a mocked-up phone screen. Ask the willingness-to-pay question with a real card-capture link.
- **Day 5:** Decide go / no-go based on (a) ≥30% of interviewees enter card details for a SAR 99/mo annual pre-order, AND (b) at least one ZATCA-listed Phase-2 provider has responded with an API-tier quote, AND (c) at least one of Marn / Ureed / Freelance Yard has agreed to a co-branded landing-page test. Two of three = soft GO; three of three = full GO.
