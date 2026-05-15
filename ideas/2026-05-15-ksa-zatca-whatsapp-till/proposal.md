---
title: "KhatmTill — WhatsApp ZATCA stamper for KSA Wave 24 SMBs"
slug: ksa-zatca-whatsapp-till
date: 2026-05-15
category: Compliance / Saudi Arabia SMB
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: "Turns each WhatsApp sale into a ZATCA-cleared simplified e-invoice with QR and cryptographic seal in under 3 seconds."
tags:
  vertical: Compliance
  model: SaaS
  geography: Global
  secondary: [WhatsApp-first, AI-agent, Arabic-first, Voice-first, Compliance-driven, SMB, Solo-builder, MENA, ZATCA, e-invoicing]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 12
  time: 9
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# KhatmTill — WhatsApp ZATCA stamper for KSA Wave 24 SMBs

## 1. One-liner

Turns each WhatsApp sale into a ZATCA-cleared simplified e-invoice with QR and cryptographic seal in under 3 seconds.

## 2. Trend signal — why now?

ZATCA Wave 24 (announced 26 Sep 2025) is the largest expansion of Saudi Phase 2 e-invoicing yet. It pulls every VAT-registered business with SAR 375K–750K turnover into the Fatoora real-time clearance regime, with a hard deadline of **30 June 2026**. ZATCA notifies the cohort between 1 April and 30 June 2026 — the inboxes are still warm.

This is the first time Phase 2 reaches the long tail of Saudi SMBs: corner shops, salons, barbershops, café owners, single-truck contractors, accountants/lawyers running solo, small clinics. Penalties run **SAR 5,000 to SAR 50,000 per violation**, plus loss of input-VAT deductions, plus ZATCA can deactivate e-invoicing access for repeated non-compliance — meaning the shop literally cannot issue receipts and cannot collect payment.

The trade press is loud. KPMG, EY, Pagero, Tally, Cleartax, Sowaan all publishing Wave 24 panic guides. The recurring complaint from analyst columns and SafariStar/Insights KSA write-ups: small business owners "are still unclear on whether they fall under Wave 23 or Wave 24, what specific technical requirements apply to their business type, and what the financial consequences of non-compliance actually are." Most don't have an IT team. Most can't read XML or manage cryptographic certificates. Most certified solution providers are reportedly already operating at capacity as the deadline approaches.

Meanwhile the existing market — Zoho Books KSA (Standard plan), Wafeq (SAR 119/mo Starter), Qoyod (SAR 199/mo flat), Daftra (SAR 270/mo Advanced) — is shaped like full ERP, not like a WhatsApp chat. Every one of these requires the owner to log into a web app, set up a chart of accounts, and configure customers before issuing the first compliant invoice. For the salon owner who currently writes prices in a notebook, that's two days of confusion.

What's new in 2026: WhatsApp Business Cloud API is mature in KSA, SAR billing went live April 2026, and Arabic LLM inference (Claude Sonnet, GPT-class, Falcon, Jais) is cheap enough to handle voice-note → structured invoice for fractions of a riyal per transaction. ZATCA's sandbox for solution-provider qualification is open and documented. The pieces just snapped together.

```
Provenance:
  - Signal 1 (Demand): KPMG TaxNewsFlash — KSA mandates e-invoicing for SAR 375K+ taxpayers, Wave 24 deadline 30 June 2026 — https://kpmg.com/us/en/taxnewsflash/news/2025/10/saudi-arabia-mandatory-e-invoicing-24th-group-taxpayers.html — 2025-10
  - Signal 2 (Demand+Pain): SafariStar — "Most small businesses do not have a dedicated IT team capable of handling API integration, XML schema compliance, or cryptographic certificate management" — https://safaristar.com/blog/mandatory-tech-upgrades-zatca-wave-24-integration/ — 2026-Q1
  - Signal 3 (Economic): Monsha'at Q4 2024 SME Monitor — KSA SME base 1.6M (67% QoQ commercial-registration growth); incumbents Zoho/Wafeq/Qoyod/Daftra charging SAR 75–270/mo; penalties SAR 5K–50K per violation create urgent willingness to pay — https://www.monshaat.gov.sa/en/node/274250 — 2025
  Category: Regulatory arbitrage
```

## 3. The opportunity

Two failures in the existing market:

1. **Wrong shape.** Incumbents are accounting platforms with e-invoicing bolted on. The Wave 24 cohort doesn't want accounting software — they want to ring up a sale, hand the customer a compliant receipt, and not get fined. The owner of a 4-chair barbershop in Jeddah has no use for a chart of accounts. Forcing them through ERP onboarding is the reason "many certified solution providers are already operating at capacity" — onboarding takes hours per customer.
2. **Wrong channel.** The Wave 24 owner already runs his business in WhatsApp — he books appointments in WhatsApp, collects deposits via WhatsApp Pay/STC Pay links shared in WhatsApp, sends location pins in WhatsApp. Asking him to log into a web app to issue a SAR 50 receipt is friction theatre.

A focused team can do 10× better by collapsing the workflow into a single WhatsApp interaction, in Arabic, voice-first. Owner says "بيع، قص شعر، خمسين ريال" ("sale, haircut, fifty riyals"). KhatmTill replies in 2 seconds with a stamped, cleared simplified e-invoice PDF + QR, files the report to Fatoora within the 24h window, and confirms. Done. No app. No XML. No cert pain.

Disruption is asymmetric: Zoho/Qoyod/Wafeq cannot rebuild around WhatsApp without cannibalizing their ERP positioning. ClearTax/Pagero/EDICOM are enterprise-focused. The incumbents will not chase the SAR 99/mo sole-prop salon segment fast enough.

## 4. Target market

- **Primary customer:** Saudi VAT-registered sole-prop or single-location SMB, SAR 375K–750K turnover, 1–10 staff, owner is the operator. Sub-segments in priority order: independent retail shops (electronics, mobile, abaya), salons/barbershops, restaurants/cafés, contractors (home services, mechanics), professional sole-props (accountants, lawyers, IT freelancers), small clinics/pharmacies. Concentrated 39% Riyadh, 17% Makkah/Jeddah, 16% Eastern Province (Dammam/Khobar).
- **Why they buy:** They got the ZATCA notification email/SMS in April–June 2026 saying integrate by 30 June or face penalties up to SAR 50K. They Google, get scared, ask their accountant, get told they need an "ERP" they don't want, panic. KhatmTill is the WhatsApp link a friend forwards them with the message "bro, just send your CR number and start ringing up sales."
- **Rough TAM:** Monsha'at reports 1.6M SMEs in KSA (Q4 2024). VAT-registered subset ~600K. Wave 24 cohort (SAR 375K–750K) plausibly 80K–150K businesses based on the SAR 750K threshold catching the previous waves' "thousands." Each future wave drops the threshold further; the SAR 187,500 voluntary tier eventually gets pulled in too. Pricing SAR 99/mo × even 5% capture (4K–7.5K customers) = SAR 4.8M–9M ARR ($1.3M–$2.4M).
- **Why now for them:** 30 June 2026 is in 6 weeks. After that, every B2C transaction without a stamped reported invoice exposes them to a penalty. After three months of failed VAT returns or invoice issues, ZATCA can deactivate their e-Faktur access entirely. They feel this in their gut the day they get the notice.

## 5. Product sketch (MVP)

- **WhatsApp-only onboarding.** Owner sends WhatsApp message to KhatmTill number, replies with CR (Commercial Registration) number + VAT number. We pull entity details from the public Maroof / ZATCA registry and pre-fill. 60-second activation.
- **Voice-first sale capture.** Owner sends voice note in colloquial Saudi Arabic: "بيع تيشيرت أزرق ٧٥ ريال". AI parses item + amount + VAT line. Owner taps ✅ to confirm.
- **Real-time stamped simplified invoice.** Within 2 seconds, KhatmTill mints the UUID, generates the cryptographic stamp via the device certificate it holds, embeds the QR per ZATCA Annex spec, and replies in WhatsApp with PDF + plain-text Arabic summary.
- **24-hour Fatoora reporting.** Background job batches and reports the simplified e-invoice to ZATCA via their integration API within the regulatory 24h window. Owner gets a "✅ تم الإبلاغ" confirmation.
- **Customer share-back.** Same chat, owner taps "send to customer" — KhatmTill forwards the receipt PDF + QR to the buyer's WhatsApp number.
- **B2B clearance mode.** For B2B sales (lawyers, IT freelancers), owner adds buyer VAT number and KhatmTill performs real-time clearance (waits for ZATCA accept) before delivering the cleared invoice.
- **Daily/weekly summary.** Push WhatsApp message: today's sales, VAT collected, invoices reported, any rejections. One-tap "fix" if Fatoora rejected anything.
- **Bookkeeper handoff.** End of month, owner forwards a single command to KhatmTill ("سجل الشهر") and KhatmTill emails the consolidated CSV/PDF to the owner's accountant.

No web app required for the SMB owner. Web dashboard exists only for the bookkeeper / partner / power user.

## 6. AI angle — what's load-bearing

Two AI loads, both essential:

1. **Arabic colloquial → structured sale.** Owner types or speaks in dialect, sometimes mixed Arabic/English ("سعر ١٥٠ riyal please"), sometimes garbled. AI extracts: item description (Arabic + English), unit price, quantity, VAT-applicable flag. Without this, the owner is back to typing into forms — same as the incumbents, defeats the wedge. Whisper handles Saudi-Arabic voice; Claude/Jais handles intent extraction. Cost ≈ SAR 0.05 per transaction at current rates.
2. **Anomaly + rejection auto-repair.** When Fatoora rejects (wrong VAT calc, malformed XML, expired cert, customer VAT not found), AI reads the ZATCA error, explains in plain Arabic in WhatsApp, and proposes the fix. Owner taps ✅ to retry. This converts a tax-engineering problem into a chat conversation.

Strip the AI and you're left with another web form — exactly the incumbents' shape. The AI is the wedge.

## 7. Localization angle

This is a **Saudi-only, Arabic-first product**. Localization is the entire moat:

- **Language:** Arabic-first UI, Saudi-dialect voice recognition, RTL PDF templates. ZATCA mandates Arabic on the invoice itself.
- **Channel:** WhatsApp is the operating system for Saudi SMBs — orders, deposits, customer service all happen there.
- **Regulatory primitive:** ZATCA cryptographic stamp + Fatoora clearance is the literal product. No other geography has this exact spec.
- **Payments:** Tight integration with Mada, STC Pay, and Apple Pay receipt links so the owner can request payment in the same WhatsApp thread as the receipt.
- **Distribution:** Saudi SMB owners cluster in WhatsApp Groups by trade (Riyadh barbers WhatsApp group, Jeddah café owners, etc.). Local bookkeepers (محاسبين) are concentrated and reachable.

This is the inverse of "global SaaS adapted to Saudi." It's "Saudi-native product first, Gulf expansion later" (UAE FTA e-invoicing 2026, Oman 2027, Kuwait 2028 are next-door waves with similar shape).

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - Free starter — 30 invoices/mo, KhatmTill watermark on PDF
  - Solo — SAR 99/mo — unlimited invoices, 1 device cert, WhatsApp support
  - Shop — SAR 199/mo — multiple operators, daily/weekly reports, bookkeeper portal, B2B clearance
  - Multi — SAR 399/mo — up to 3 locations / 3 device certs, API webhook for POS integration
- **ACV:** SAR 99–199/mo blended ≈ SAR 1,500/yr ($400/yr) per customer.
- **Path to $1M ARR:** ~2,500 customers on Solo or 1,250 on Shop. Wave 24 cohort minimum 80K businesses → 3% capture. Realistic in 12 months from launch given 30 June deadline urgency.
- **Path to $5M ARR:** ~12K customers blended. Requires Wave 25/26 expansion (sub-SAR 375K thresholds expected within 18 months) plus Gulf expansion (UAE FTA wave 2026, Oman 2027) where same WhatsApp+stamper shape applies.
- **Expansion paths:**
  - Add Mada/STC Pay payment-collection (1% take) — high-margin add
  - Add appointment booking for salons/barbershops on top of WhatsApp thread — adjacency
  - Sell anonymized footfall/category data to lenders and Monsha'at (carefully)
  - Bookkeeper-channel revenue share (we pay 20% to onboarding accountants)

## 9. Go-to-market wedge — first 100 customers

- **Bookkeeper partner net (target: 60 customers).** Saudi has roughly 20K independent licensed bookkeepers / محاسبين قانونيين, many with rosters of 30–80 SMB clients. Identify 50 active bookkeepers via SOCPA member directory + LinkedIn. Pitch: "Each Wave 24 client you have is 6 hours of integration pain you don't want. Onboard them on KhatmTill in 60 seconds; we pay you SAR 200 referral + 20% recurring for 12 months." A single committed bookkeeper closes 10 customers.
- **WhatsApp trade groups (target: 25 customers).** Saudi SMB owners cluster in trade-specific Arabic WhatsApp Groups: "Riyadh Restaurant Owners," "Eastern Province Salon Owners," etc. These are findable via owner forums and Snapchat/TikTok creator pages in those trades. Drop a 30-second Arabic explainer video + free-trial link in 30 such groups in the 30 days before deadline.
- **ZATCA solution-provider directory + co-marketing (target: 10 customers).** Once we pass ZATCA Phase-2 qualification (target: month 3), we appear in the official directory ZATCA links from notification emails. Even a small inbound flow from that channel converts because urgency is maxed.
- **Performance ads on the deadline (target: 15 customers).** Snap, TikTok, Twitter/X Arabic ads geo-targeted to KSA, keyword-targeted to "ZATCA fine," "خطم الفاتورة," "تكامل فاتورة." Short window (May–July 2026), high intent, expected CPA SAR 200–400 — viable given SAR 1,500 ACV.

If the first 30 bookkeeper conversations don't yield 5 committed partners, the wedge is wrong — kill or reshape.

## 10. Build complexity — justification

**Medium.** Concrete weeks-to-v1 estimate for a 2–3 person team:

- Weeks 1–4: WhatsApp Business Cloud API integration, Arabic voice/text intent extraction, basic invoice data model.
- Weeks 5–8: ZATCA Fatoora sandbox integration — XML invoice generation per UBL 2.1 + KSA extension, cryptographic stamp using device cert, QR per Annex, Phase 2 simplified-invoice flow, B2B clearance flow.
- Weeks 9–12: Reporting backbone (24h batch jobs, retry/repair loop), bookkeeper web dashboard, billing.
- Weeks 13–18: ZATCA Phase 2 solution-provider qualification (sandbox → conformance → directory listing). Concurrent with paid private-beta with 20 hand-held customers.
- Weeks 19–22: Public launch, performance ads, scale.

XML/cert/cryptographic-stamp work is the gnarly part — well-documented and several open-source reference impls (e.g. AlSafaGrp ZatcaIntegration on GitHub) accelerate it. WhatsApp BSP relationship needs picking carefully (360dialog, Twilio, Karix, or local KSA BSP). Total ≈ 5 months for a Saudi-savvy technical pair + Arabic-fluent ops/sales person.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | ZATCA explicitly invites third-party solution providers; "indicative" directory model. |
| Ethical — no harm / dark patterns | ✅ | Helps SMBs comply with tax law; no dark patterns. |
| Market exists (evidence above) | ✅ | Wave 24 is government-mandated, deadline 30 June 2026, "thousands" of businesses. |
| 1–5 person team can build this | ✅ | 2–3 ppl × ~5 months. |
| Launchable with <$50K / ₹40L | ✅ | <$25K covers WhatsApp BSP, ZATCA cert, LLM inference, infra for the first 6 months. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire. Penalty up to SAR 50K per violation, plus possible deactivation of e-invoicing access (PER-19/PJ/2025 analog). Owner can't get paid if non-compliant. |
| Demand evidence | 15 | 13/15 | Government-mandated deadline 30 June 2026; "thousands" of SMBs in cohort; multiple paid incumbents validate willingness-to-pay (Zoho SAR 75, Wafeq SAR 119, Qoyod SAR 199, Daftra SAR 270); tier-1 analyst panic coverage (KPMG/EY/Pagero/Tally). Specific cohort headcount not public — small drag. |
| Build feasibility | 15 | 10/15 | XML/UBL+cert/stamp/Fatoora sandbox/WhatsApp BSP/Arabic LLM integration is real work but each piece is off-the-shelf or has reference impls. ~5 months to v1 + qualification. |
| Distribution clarity | 15 | 12/15 | Bookkeeper channel + WhatsApp trade groups + ZATCA directory + intent ads. Concrete first-100-customer plan with realistic conversion math. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked to incumbents (SAR 99–199/mo), ACV SAR 1.5K, $1M ARR achievable at <3% Wave 24 capture. Some risk on retention post-deadline (do they still pay in month 12?). |
| Time to first revenue | 10 | 9/10 | Pre-paid annual plans pre-deadline are realistic; first revenue within weeks of soft launch. |
| Defensibility | 10 | 6/10 | Workflow lock-in (cert/keys/data live with us), ZATCA solution-provider listing, Saudi-specific brand and bookkeeper relationships. Cloneable but a focused team has 6–9 month head start. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Best founder shape: technical operator with KSA presence, Arabic fluency, and either prior Saudi accounting/tax experience or willingness to embed with a Saudi bookkeeper for the first 90 days. Solo non-Arabic-speaking founder will fail this.

### Key assumptions to validate (3–5)

1. **Assumption:** Wave 24 SMB owner will trust a WhatsApp-based product with ZATCA submissions. **How to test:** Recruit 30 Wave 24 owners from 5 different sectors via 3 partner bookkeepers; show clickable Figma + sample Arabic voice flow; measure willingness to pay SAR 99/mo upfront (target ≥40%).
2. **Assumption:** ZATCA Phase-2 solution-provider qualification can be passed by a small team in ≤8 weeks. **How to test:** Set up sandbox account week 1, attempt full conformance run by week 4, talk to 3 existing listed providers about their actual timeline.
3. **Assumption:** Bookkeeper partners will distribute aggressively for 20% rev share. **How to test:** 20 bookkeeper interviews in Riyadh + Jeddah, signed LOI from ≥5 with explicit roster commitment (≥10 clients each).
4. **Assumption:** Arabic-dialect voice + intent extraction works reliably enough that owners actually use voice (not just text). **How to test:** 200 voice samples from real Saudi shop owners across 4 dialects, target ≥90% intent-extraction accuracy.
5. **Assumption:** Retention holds past the deadline (don't churn on 1 July 2026 once the panic ends). **How to test:** Cohort tracking from beta onwards; segment by sector; if month-3 retention <80%, reposition pricing toward annual.

### Risk flags

1. **Regulatory risk:** ZATCA changes the technical spec or deactivates a third-party connector. Mitigate: dual-listing with multiple BSPs; participate in ZATCA solution-provider working groups.
2. **Platform dependency (double):** Both WhatsApp Business API and ZATCA Fatoora API are mission-critical singletons. Either changes terms = scramble. Mitigate: build SMS/Telegram fallback, build POS-printer fallback for receipt delivery.
3. **Market timing:** If we miss the 30 June 2026 deadline window for first revenue, Wave 24 panic dissipates and we lose pricing power. Hard ship-by date — Q1 2026 launch beta, end-Q2 GA.
4. **Cert / key custody:** Holding cryptographic stamps for thousands of merchants is a real operational responsibility. Mitigate: HSM-backed key storage from day one, SOC2-flavored controls.
5. **Competitive response:** Wafeq or Qoyod could ship a "WhatsApp bot" companion within 6 months. Mitigate: own the Arabic-voice + bookkeeper-channel wedge before they react.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Saudi-based technical co-founder + Arabic-fluent ops/sales partner; ideally with prior fintech/tax exposure
Time to revenue:        8–12 weeks from beta launch (pre-deadline urgency pulls payment forward)
Capital to launch:      $20–30K (~SAR 75–115K)
Top 3 assumptions to validate first:
  1. WhatsApp-native ZATCA UX is preferred over web ERP — 30-owner intent test in 2 weeks
  2. ZATCA solution-provider qualification achievable in ≤8 weeks for a small team — sandbox conformance run + 3 incumbent calls
  3. Bookkeeper channel will distribute for 20% rev share — 20 bookkeeper interviews + 5 signed LOIs
Kill criteria:
  - Abandon if <30% of 30 piloted Wave 24 owners pre-pay SAR 99/mo trial in week 2
  - Abandon if ZATCA Phase 2 qualification path requires >12 weeks or >SAR 100K cost
  - Abandon if Wafeq or Qoyod ships a WhatsApp-native ZATCA bot before our public launch
  - Abandon if month-3 cohort retention <60% post-deadline
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Recruit 30 Wave 24 owners across 5 trades (salon, café, mobile shop, lawyer, IT freelancer) via 3 Riyadh/Jeddah bookkeeper partners. Build a clickable Figma WhatsApp flow in Arabic with voice-input mockup.
- **Day 2–3:** Run 30-minute interviews (Arabic, in person or video). Show flow. Ask: "Today, what would you pay to never deal with the ZATCA notice email again? Will you pre-pay SAR 99 for a 3-month trial right now?" Record verbatim.
- **Day 4:** Set up ZATCA sandbox account; submit a sample simplified-invoice XML; document the time it took and the friction. Talk to 1 currently-listed solution provider about their qualification timeline.
- **Day 5:** Ship a public landing page in Arabic ("KhatmTill — فاتورة ZATCA من واتساب"), drive 1,000 KSA-targeted clicks via Snap/TikTok ads at SAR 5–8 CPC. Measure email/WhatsApp opt-in rate.
- **Decision:** Build if (a) ≥12 of 30 owners pre-pay or sign LOI, (b) sandbox conformance run completes successfully, (c) landing page hits ≥6% opt-in. Otherwise reposition (different cohort, different channel) or kill.
