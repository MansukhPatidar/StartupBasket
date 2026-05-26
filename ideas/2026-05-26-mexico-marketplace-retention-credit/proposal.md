---
title: "RetenSync — retention-credit reconciler for MX sellers"
slug: mexico-marketplace-retention-credit
date: 2026-05-26
category: FinTech / Mexico
complexity: Medium
score: 80
verdict: STRONG GO
confidence: High
oneLiner: "Stitches Mercado Libre and Amazon retention CFDIs to payouts and SAT-ready monthly credit packets for Mexican marketplace sellers."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, Marketplace, Multilingual, AI-agent, Solo-builder]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [domain-expertise-required, technical-heavy]
featured: true
---

# RetenSync — retention-credit reconciler for Mexican marketplace sellers

## 1. One-liner

Stitches Mercado Libre and Amazon retention CFDIs to payouts and SAT-ready monthly credit packets for Mexican marketplace sellers.

## 2. Trend signal — why now?

Three independent signals converge in Q1–Q2 2026:

1. **Retention spike Jan 1 2026.** SAT lifted platform ISR retention from 1% to 2.5% (a 150% jump), kept IVA at 8%, and for the first time extended the regime to *personas morales* (S.A., S. de R.L., SAPI). Without an RFC the rate climbs to 20% ISR + 16% IVA — *non-recoverable*. Effective cash-flow drag on a 2–5%-margin reseller: ~10.5% of gross sales locked up every month. Mercado Libre's own corporate communications publicly opposed the measure, citing "millions of SMEs" whose ISR refunds come yearly and IVA refunds take months. Sources: [Contadores Mismo Lenguaje](https://contadoresmismolenguaje.mx/inicio/blog/retencion-iva-isr-plataformas), [Cajanauta blog](https://cajanauta.com/blog-1/reforma-fiscal-2026-lo-que-todo-vendedor-en-amazon-y-mercado-libre-debe-saber), [La Política Online](https://www.lapoliticaonline.com/mexico/economia-mx/el-nuevo-esquema-fiscal-enfrenta-a-hacienda-y-al-comercio-digital/).

2. **SAT real-time platform access Apr 1 2026 (Rule 2.9.21).** Marketplaces must hand SAT a permanent online window into every transaction, broken down by seller RFC, with searchable 5-year history. Noncompliance = "kill switch" suspension of platform access. SAT now sees seller-level revenue *before* the seller files. Discrepancia fiscal penalty: 55–75% of tax + criminal sanctions added in the Dec 2025 reform. Sources: [Bloomberg Tax](https://news.bloombergtax.com/tax-insights-and-commentary/mexicos-new-digital-access-law-creates-continuous-tax-oversight), [Fonoa](https://www.fonoa.com/resources/blog/mexico-rule-2-9-21-marketplaces-saas), [KPMG](https://kpmg.com/us/en/taxnewsflash/news/2025/11/mexico-updates-electronic-invoicing-cfdi-2026-tax-reform.html).

3. **8M+ CFDIs rejected in 2025 over simple errors.** SAT updated CFDI catalogs 12 times since 4.0 launched; 24-business-day expedited audits with 5 business days to produce supporting docs. Forum noise: Amazon sellers on Seller Central México publicly venting they "He solicitado ayuda en todos los centros de atención de Amazon para obtener el desglose detallado para verificar a qué facturas específicas corresponden dichas retenciones" — and getting no response. Sources: [Gigstack CFDI 4.0 guide](https://blog.gigstack.pro/post/cfdi-40-guia-completa-2026-emprendedores-mexico), [Amazon Seller Central forum thread](https://sellercentral.amazon.com.mx/seller-forums/discussions/t/8d6b74fb-3c09-49f5-b692-96c04866605c).

Provenance:
  - Signal 1: ISR retention 1%→2.5%, IVA 8%, extended to corporations, ~10.5% cash drag on SMB sellers — https://contadoresmismolenguaje.mx/inicio/blog/retencion-iva-isr-plataformas — 2026-01
  - Signal 2: SAT Rule 2.9.21 real-time platform data access effective Apr 1 2026 + criminal sanctions in Dec 2025 reform — https://news.bloombergtax.com/tax-insights-and-commentary/mexicos-new-digital-access-law-creates-continuous-tax-oversight — 2026-04
  - Signal 3: 8M+ CFDI rejections in 2025 + active forum complaints about retention breakdown opacity — https://sellercentral.amazon.com.mx/seller-forums/discussions/t/8d6b74fb-3c09-49f5-b692-96c04866605c — 2026-02
  Category: Regulatory arbitrage

## 3. The opportunity

The retention regime turns every Mexican marketplace seller into a monthly reconciliation case. Each month the seller must pull:
- the platform's retention CFDI (Mercado Libre under RFC DCM991109KR2, Amazon under its own RFC — 100+ pages of detail at scale),
- the platform's payout report (gross sales, commission, FBA fees, returns),
- their own emitted CFDIs (Ingreso, plus Egreso for refunds, plus Global for non-RFC buyers),
- bank deposits to reconcile gross-vs-net,

and match them line-by-line so the *contador* can credit the retention against the monthly ISR/IVA declaration. Miss the match: seller pays the tax twice — once via retention, once on the declaration — and waits 6–18 months (sometimes never) to recover IVA balance-in-favor via a SAT *devolución* that itself requires a separate procedure each month.

Incumbents miss this niche cleanly:
- **Heru** ($249/mo, [heru.app](https://www.heru.app/)) is freelancer-issuer-centric — emit CFDIs, do the monthly declaration. Doesn't reconcile marketplace retentions against payouts as a primary workflow.
- **Gigstack** ([gigstack.pro/marketplaces](https://gigstack.pro/marketplaces)) sells to *marketplaces themselves* — infrastructure for platforms emitting CFDIs to buyers, not seller-side retention-credit reconciliation.
- **CONTPAQi / Aspel SAE** are accountant-tier desktop suites ($1,000s setup + ongoing). Wrong wallet for a 50–500K MXN/mo seller.
- **Contador único** (independent CPA) charges 2,000–5,000 MXN/mo for PFAE and still misses the marketplace-specific reconciliation 30%+ of the time because the volume is too high to eyeball.
- **Quiero Mi Factura, FacturoPorTi** — automate CFDI *emission* for marketplace orders, not retention reconciliation downstream.

Wedge: a 399 MXN/mo (~$20) SaaS focused on one job — turn the platform's retention CFDI + payout report + your CFDIs into a SAT-ready monthly credit packet, flag discrepancies before SAT does.

## 4. Target market

- **Primary customer:** Mexican-based marketplace sellers (Mercado Libre, Amazon México, also Mercado Shops + Walmart Connect later) doing 50K–1M MXN/month in gross sales. RESICO or PFAE regime (90% of the base). Run by 1–3 people, with either a shared contador or none.
- **Why they buy:** Cash is locked up. ~10.5% of gross retained every month, IVA-favor balance climbing fast, anxiety about getting the credit applied correctly so it doesn't compound. Forum-verbatim: *"Estrangulando al emprendedor."* *"Ahora tendrás 12% por lo menos de flujo de efectivo."* *"Su IVA a favor comenzará a crecer rápidamente."* *"Tendrán que contratar un abogado fiscalista para recuperar el saldo a favor de IVA y les va a cobrar por lo menos el 15% – 20%."*
- **Rough TAM reasoning:** Mexico e-commerce 2024 = US$97B (eCDB). Mercado Libre Mexico + Amazon Mexico are the two share-gainers through 2027 (eMarketer). Conservative seller base: 300–500K active sellers on MeLi MX, 100K+ on Amazon MX (sellers maintain on multiple platforms). Target the SMB segment doing 50K–1M MXN/mo — call it 150K addressable sellers. At 399 MXN/mo, 5% penetration = 7,500 paying users = ~36M MXN ARR (~US$1.8M).
- **Why now for them:** Three things: (a) Jan 1 2026 retention spike turned a 1% annoyance into a 10.5% balance-sheet event. (b) Apr 1 2026 SAT gets real-time view — discrepancia fiscal detection automated. (c) Personas morales swept in for the first time — corporate sellers who had no platform-side fiscal burden now have one.

## 5. Product sketch (MVP)

- One-click connect to Mercado Libre Seller Central and Amazon Seller Central México (OAuth where supported, scoped session-token elsewhere) — pull monthly retention CFDI XML, payout reports, refund logs.
- Auto-fetch the seller's emitted CFDIs (Ingreso, Egreso, Global) via the SAT *Buzón Tributario* (CIEL/e.firma) — the standard authenticated path.
- Monthly reconciliation view: every transaction lined up — gross sale, IVA collected, IVA retained, ISR retained, commission, refund, payout deposit — with a status flag (matched, discrepancy, missing CFDI).
- Auto-fix common errors: missing Egreso for refund, mis-coded *uso de CFDI*, wrong *forma de pago* (key cause of the 8M+ 2025 rejections).
- **Monthly credit packet** PDF + XML bundle to hand to the contador or upload directly to the SAT mensual declaration portal: total retention to credit, IVA-favor accumulated, ISR creditable, line-item evidence for each peso.
- IVA-favor alert: when the favor balance crosses the threshold where *devolución* is worth filing (~10K MXN with documented evidence), produce the *aviso de devolución* draft.
- Discrepancia-fiscal preflight: estimate what SAT will see via the Apr 2026 Rule 2.9.21 feed, compare against your declared income, warn before SAT auto-flags.

## 6. AI angle — what's load-bearing

- **CFDI XML parsing + multi-document matching.** Platform retention CFDIs are 100+ pages of line items; payout reports are CSV with platform-specific schemas; refund logs sit in a third place. LLMs map fields across the three sources reliably where naive joins miss 20–40% (date drift, partial cancellations, currency conversions on USD listings). Without AI you're hand-mapping per platform, per month, per seller.
- **Error classification.** The 8M 2025 rejections are dominated by ~15 root causes (wrong *uso de CFDI*, missing *complemento de pago*, RFC of receiver malformed, wrong unit code 84111506 vs ACT, etc.). LLM diagnoses and rewrites the field — deterministic rules cover the obvious 60%, LLM picks up the long tail.
- **Plain-language explainer** in the seller's voice (not contador-speak): why this retention got credited, why this didn't, what to fix.
- Remove the AI and you have a glorified CSV viewer. AI is load-bearing.

## 7. Localization angle (if any)

This is a Mexico-only play and the localization *is* the moat:
- All flows in Spanish — both *castellano formal* (for contador-facing reports) and conversational (for seller in-app).
- Native SAT *e.firma* / *Buzón Tributario* / *PAC* integration. Native Mercado Libre + Amazon México auth.
- Native Mexican payment rails: SPEI, OXXO, MercadoPago — for the subscription itself (399 MXN/mo via MercadoPago beats a Stripe USD-charge UX every time).
- WhatsApp-first delivery of monthly packet — WhatsApp is the de-facto business channel in Mexico for SMB.
- Adjacent expansion: Brazil (Mercado Livre BR, Nota Fiscal Eletrônica, similar marketplace retention regime in progress) — same architecture, different fiscal rules. After 18 months of Mexico traction.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** 399 MXN/mo (~$20 USD) Solo (one platform connection), 699 MXN/mo Pro (multi-platform + IVA-devolución draft + WhatsApp delivery), 1,499 MXN/mo Studio (≤5 sellers under one contador login, white-label PDF).
- **ACV:** ~$240 USD/yr per Solo seller, ~$420 Pro, ~$900 Studio. Weighted ACV ~$300/yr.
- **Path to $1M ARR:** 3,300 paying sellers at ~$300 ACV = $1M. Mexico has 150K+ addressable sellers in the target band; 2.2% penetration.
- **Path to $5M ARR:** 16,500 paying sellers — 11% penetration of the addressable band, plus contador-channel Studio plan expansion. Plausible within 24 months because the regulatory trigger is forcing the decision on every seller in the same quarter.
- **Expansion path:** (1) contador-channel: bundle Studio plan to the 5K+ independent contadores serving SMB sellers — they bring 5–20 sellers each. (2) IVA-devolución filing as a 12% success fee on amounts recovered (fiscalistas charge 15-20% per forum — undercut and automate). (3) MeLi/Amazon → Walmart Connect / Liverpool Pro / Mercado Shops / Shopify MX expansion.

## 9. Go-to-market wedge — first 100 customers

1. **Facebook seller groups — direct DM + value-first posts.** "Vendedores de Mercado Libre México 🇲🇽" and 3+ sister groups have tens of thousands of members. Post weekly: "I parsed 50 random retention CFDIs from January — here are the top 5 errors I saw and how to fix them." Comment-DM the engaged. Conversion math: 4 posts/week × 50 DMs to engagers × 5% trial = 10 trials/week, 30% paid conversion = 3 paying customers/week from this channel alone.
2. **Amazon Seller Central México forum — answer questions, drop signature with link.** The retention threads ([thread 1](https://sellercentral.amazon.com.mx/seller-forums/discussions/t/7dac35fa-3696-4eef-818b-61a4a495a12c), [thread 2](https://sellercentral.amazon.com.mx/seller-forums/discussions/t/8d6b74fb-3c09-49f5-b692-96c04866605c), [thread 3](https://sellercentral.amazon.com.mx/seller-forums/discussions/t/05a4a37e-505f-4f17-bf55-3d8ed398b31a)) have hundreds of comments by anxious sellers explicitly asking for the reconciliation help.
3. **Contador partnership — Studio plan affiliate.** ~5,000 independent contadores serve SMB marketplace sellers. Cold-pitch the top 200 via LinkedIn + Colegio de Contadores Públicos chapter newsletters. Studio plan at 1,499 MXN/mo replaces 5–10 hours of monthly reconciliation work; contador keeps 30% rev-share on sellers they onboard.
4. **YouTube + TikTok creator partners.** Mexican "vende en Mercado Libre"-niche YouTubers (Vende+, Vendedor Premium, Cajanauta) have audiences of 50–300K. Sponsor a 60-second demo. CPM at this niche ~$15–25. ~$500–1,500 per video, expect 30–80 trial signups per video.
5. **Cajanauta-style fiscal-advice blogs** ([cajanauta.com](https://cajanauta.com/blog-1/reforma-fiscal-2026-lo-que-todo-vendedor-en-amazon-y-mercado-libre-debe-saber) and similar) — affiliate revshare 20% for the first year of subscription.

The wedge is *time-of-pain*: every seller logs into MeLi/Amazon between the 1st and 5th of the month to download last month's retention CFDI. Be present in their feed that week.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: CFDI 4.0 XML parsing libraries exist (Facturama, Edicom SDKs), SAT *Buzón Tributario* download is documented, MercadoLibre API gives orders + payout reports under OAuth, Amazon Seller Central exposes Tax Document Library reports. Custom work: the matching engine + the catalog-of-errors LLM classifier + the contador-grade PDF packet generator + the WhatsApp delivery layer. Realistic v1: 1 backend dev + 1 designer/PM-builder + 1 fiscal advisor (part-time) → 12–14 weeks. The fiscal advisor is non-negotiable; mis-classifying a *uso de CFDI* code burns the customer.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Authenticated user-side access to their own SAT + platform accounts. No scraping of third-party data. |
| Ethical — no harm / dark patterns | ✅ | Helping sellers credit retentions they're entitled to. |
| Market exists (evidence above) | ✅ | 8M+ CFDI rejections, public forum complaints, Mercado Libre's own public objection. |
| 1–5 person team can build this | ✅ | 3-person team, 12–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | <$15K USD: dev, fiscal advisor retainer, MercadoPago + WhatsApp Business API onboarding. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. 10.5% cash drag every month, criminal sanctions added Dec 2025, real-time SAT view from Apr 2026. Forum quotes verbatim about "estrangulando". |
| Demand evidence | 15 | 13/15 | Multiple independent verbatim complaint threads, Mercado Libre corporate-level objection, regulatory text explicit, paid alternatives (contadores at 2-5K MXN/mo, fiscalistas at 15-20% success fee). |
| Build feasibility | 15 | 11/15 | Medium. CFDI parsing + SAT *Buzón* auth + multi-platform integration. 12–14 weeks, off-the-shelf libraries, but fiscal-correctness bar is real. |
| Distribution clarity | 15 | 12/15 | Named Facebook groups, named forum threads, named contador channel. Conversion math is realistic. Slight risk: paid acquisition through ads = expensive in this niche. |
| Revenue mechanics | 15 | 11/15 | 399 MXN/mo ($20) is a believable wallet for a seller doing 50K-1M MXN/mo gross — single retention error costs more. ACV $240-900. Path to $1M ARR clear at 2.2% penetration. Churn risk on seasonal sellers. |
| Time to first revenue | 10 | 8/10 | Paid pilot in week 4. Real product live week 12. Revenue from day-of-launch via Facebook groups. |
| Defensibility | 10 | 7/10 | Workflow lock-in (12 months of reconciled history), fiscal-domain knowledge moat, contador channel partnerships. Not a deep moat — incumbents *could* copy in 6–9 months but only if they re-tool away from their current ICP. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `technical-heavy`

A fiscal advisor (Mexican CPA / fiscalista) on the founding team or as a paid retained partner is non-negotiable. The technical work is standard SaaS + integrations + LLM. Without the fiscal partner you'll mis-credit retentions and damage customers in month 1.

### Key assumptions to validate (3–5)

1. **Assumption:** Sellers will pay 399 MXN/mo for monthly reconciliation, not bundle it with their existing contador. **How to test:** 20 in-person/Zoom interviews with sellers in the 50K-1M MXN/mo band; ask explicitly what they pay their contador, what's missing, and price-anchor at 399 MXN.
2. **Assumption:** Amazon + MeLi seller-account integrations are stable enough for 99%+ monthly reconciliation reliability. **How to test:** Build a read-only prototype that pulls 30 days of retention CFDI + payout from 10 friendly sellers. Measure: % of line items auto-matched without human review.
3. **Assumption:** Contadores will partner via revshare rather than block as competitive threat. **How to test:** 20 cold contador calls; pitch Studio plan as a replacement for 5-10 hours of their monthly reconciliation grunt-work, not their tax-advice billable.
4. **Assumption:** The 8M-rejection error catalog converges to <20 root causes that an LLM can classify reliably. **How to test:** Hand-label 500 real rejection notices, build the classifier, target 90%+ accuracy on a held-out 200.

### Risk flags

1. **Platform-API risk:** MercadoLibre or Amazon could close the seller-side data pulls or change auth. Mitigation: scope to authenticated user-token access (the seller delegates their own credentials), not platform partnership. SAT *Buzón* is the canonical source for retention CFDIs and won't change.
2. **Heru / Konfio / Gigstack moves down-market:** Heru already has consumer-grade UX and an issuer-side product. If they pivot to retention reconciliation, they bring brand. Mitigation: ship a focused MVP in 12 weeks while they're focused on freelancer-issuance and lending respectively.
3. **SAT rule change:** Reforma fiscal in late 2026 could simplify the regime (unlikely) or further tighten (likely). Both favor the product, but a one-off simplification could compress willingness-to-pay. Watch the November 2026 *Resolución Miscelánea* draft.
4. **Contador backlash:** Contadores who see the product as commoditizing their work could resist. Mitigation: the Studio plan positions the product as a *productivity tool for the contador*, not a contador replacement. Reframe.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             High
Best-fit builder:       Solo or pair technical founder with a retained Mexican fiscalista
Time to revenue:        4 weeks (paid pilot), 12 weeks (live product)
Capital to launch:      $12K–$18K USD (dev tooling, fiscalista retainer, WhatsApp Business + MercadoPago onboarding)
Top 3 assumptions to validate first:
  1. Will sellers pay 399 MXN/mo on top of contador — 20 interviews
  2. Read-only Amazon + MeLi integration reliability — 10-seller prototype
  3. Error-classification accuracy — hand-label 500 rejections, hit 90% on held-out set
Kill criteria:
  - Abandon if <20% of 50 surveyed sellers say they'd pay 399 MXN/mo standalone
  - Abandon if Heru or Konfio ships a head-on competing product before week 14 of build
  - Abandon if a SAT rule revision in late 2026 reverses the 2.5% ISR retention back below 1.5%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 25 Mexican marketplace sellers from "Vendedores de Mercado Libre México 🇲🇽" Facebook group via 1-paragraph DM offering free first-month reconciliation. Goal: 15 booked Zoom calls.
- **Day 3–4:** Run 15 Zoom calls. Show a Figma click-prototype of the monthly credit packet. Ask: "Today, how do you handle this? What does it cost? Would you pay 399 MXN/mo for this PDF every month?" Price-anchor explicitly. Capture verbatim objections.
- **Day 5:** Tally responses against a falsifiable cut: **≥8/15 say "yes, I'd pay 399 MXN/mo within the next 30 days"** = GO. **≤3/15** = PASS. **In between** = build a 2-week paid-pilot landing page + Facebook ad, target 50 trial signups at 199 MXN first-month price-anchor; go/no-go on conversion to 399 MXN month-2.

Falsifiable result: payment commitments collected during the call window, not vague interest.
