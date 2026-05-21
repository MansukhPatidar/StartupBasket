---
title: "PorteScreen — Carta Porte screen for Mexican hombre-camión"
slug: mexico-carta-porte-screen
date: 2026-05-22
category: Compliance / Mexico Micro-Trucking
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: Catches every Carta Porte 3.1 rejection before the PAC stamps it, so a Mexican hombre-camión never loses a deduction.
tags:
  vertical: Logistics
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Compliance-driven, SMB, Mobile-first, AI-agent, Spanish-language, Document-OCR]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PorteScreen — Carta Porte screen for Mexican hombre-camión

## 1. One-liner

Catches every Carta Porte 3.1 rejection before the PAC stamps it, so a Mexican hombre-camión never loses a deduction.

## 2. Trend signal — why now?

The grace periods for Complemento Carta Porte (CCP) 3.1 ended in 2024. In 2026 SAT shifted to **automated electronic audits** on every traslado, and the Guardia Nacional now routinely checks Carta Porte at federal highway checkpoints. CANACAR's own research says **97% of small- and medium-sized transport firms lack the admin infrastructure** to comply. The official "Factura Móvil" SAT app exists but requires filling **180 blank fields from a phone** — vehicle data, RFC, postal codes, SICT permits — with no pre-validation; one bad field = PAC rejection or roadside detention. Penalty math is brutal: $850–$19,240 MXN per CFDI for omission/error, $19,700–$112,650 MXN per traslado for missing CCP, and shipper loses 30% ISR deductibility on the whole freight invoice if data is wrong. Same period: multimodal LLMs got cheap enough (<$0.01/page) to OCR shipper paperwork in Spanish reliably, and PAC APIs (Facturapi, Fiscalapi, Factura.com) expose programmatic stamping with structured JSON.

Provenance:
  - Signal 1: CANACAR — 97% of small/medium transport firms lack infra to comply with CCP; SAT "in debt" with hombre-camión over promised app — https://www.tyt.com.mx/nota/complemento-carta-porte-el-sat-incumple-con-app-para-el-hombre-camion / https://www.tyt.com.mx/nota/canacar-pide-al-sat-prorroga-para-multas-en-complemento-carta-porte — observed 2026-05-22
  - Signal 2: 2026 SAT moved to automated electronic audits on Carta Porte; rejection causes documented at PAC level (CP catalog mismatch, RFC operator not found, weight mismatch, SICT permit expired, vehicle config incompatible) — https://www.simetrialegal.mx/negocio-sin-riesgo/carta-porte-3-1-2026-guia-no-deducibilidad-contrabando / https://fiscalcloud.mx/2026/01/20/carta-porte-3-1-errores-frecuentes/ — observed 2026-05-22
  - Signal 3: SICT January 2026 bulletin — 179,378 micro cargo permit holders (1–5 units), 80% of all permisionarios; existing CFDI vendors (Alegra $138–199 MXN/mo, Facturama, FacturoPorTi $199–799 MXN/mo) sell horizontal stamping, none pre-validate the trucker's own vehicle/permit profile before submission — https://micrs.sct.gob.mx/images/DireccionesGrales/DGAF/EST_BASICA/Boletines/Boletin_enero2026.pdf / https://programascontabilidad.com/comparativas-de-software/facturacion-en-mexico-alegra-facturama/ — observed 2026-05-22
  Category: Regulatory arbitrage

## 3. The opportunity

CFDI vendors stamp whatever data they get. They do not know that *this specific truck* has a 5-ton capacity, that *this driver* has an expired SICT Tipo-A permit, or that the *shipper's stated postal code* (64619) isn't in SAT's catalog. Failure shows up either at PAC timbrado (driver stuck at origin) or 6 months later at the SAT audit (whole year's freight becomes non-deductible — shipper switches carrier). Generic fleet SaaS (Geotab, Samsara) ignore the Mexican fiscal layer entirely.

PorteScreen sits **between the shipper's paperwork and the PAC**. Hombre-camión photographs the shipper's *orden de carga* in WhatsApp, the agent extracts every field that ends up in the CCP, validates against SAT catalogs + the trucker's pre-loaded fleet/permit profile, and only then triggers a PAC stamp via Facturapi/Fiscalapi. Output: a stamped CFDI with CCP 3.1, a defensible evidence packet (photos, GPS, signature) for the 5-year retention, and zero rejections.

## 4. Target market

- **Primary customer:** Mexican *hombre-camión* and small fleet (1–10 trucks) running federal cargo under SICT Tipo-A permit. Owner-operator dispatches via WhatsApp from shippers (industrial parks, agri co-ops, distribuidoras). Monthly revenue ₱100K–800K MXN; relies on accountant or basic CFDI tool today.
- **Why they buy:** Each trip is a binary fail. A bad CCP = no deduction for shipper (shipper threatens to drop them) + Guardia Nacional fine (up to $112K MXN per traslado) + admin detention of vehicle. They already know the pain — Carta Porte is the #1 SAT enforcement topic in CANACAR newsletters.
- **Rough TAM reasoning:** SICT Jan-2026 bulletin: **179,378 cargo permit holders with 1–5 units**, plus ~25K with 6–30 units. Of those, conservatively **80K are active federal-cargo movers** doing >5 trips/month with real CCP exposure. Capture 2% = 1,600 customers × $599 MXN/mo = $11.5M MXN/yr ≈ $620K USD.
- **Why now for them:** 2024 grace ended, 2026 = automated audits + 30% ISR deductibility penalty + Guardia Nacional roadside enforcement. The pain is no longer theoretical — every WhatsApp transportista group has stories of $50K+ MXN fines and lost client contracts.

## 5. Product sketch (MVP)

- WhatsApp-first capture: driver sends photo of shipper's *orden de carga* / *manifiesto*; bot extracts shipper RFC, addresses, postal codes, merchandise (SAT ClaveProdServ codes), declared weight, hazmat class
- Fleet profile vault: per-truck plate, configuración vehicular (C2, C3, T3S2…), peso bruto vehicular, SICT permit number + expiry, per-driver RFC + license + permit, refreshed against SAT/SICT catalogs nightly
- 28-point pre-timbrado check: postal code present in live SAT catalog, RFC operator validated via SAT API, weight ≤ vehicle capacity, vehicle configuration matches merchandise, hazmat code current, SICT permit not expired, route geocoded with exact origin/destination coordinates
- One-tap stamping: passes a clean payload to a PAC (Facturapi/Fiscalapi) and returns the stamped XML + PDF in <30s
- "Why rejected" copy-paste fix: when the shipper's data is bad, returns the exact sentence the driver sends back to the shipper in Spanish ("Su código postal 64619 no está en el catálogo SAT — el más cercano es 64610")
- Logística inversa mode: auto-generates the return-leg CCP (Guardia Nacional's #1 audit favorite in 2026) instead of reusing the outbound papers
- Evidence packet: stamped CFDI + photos + GPS pings + delivery signature stored 5 years, exportable as the audit dossier the SAT actually asks for
- Customer-facing portal for the shipper: shows their cargo's CCP status so they trust the trucker's deductions

## 6. AI angle — what's load-bearing

Two AI uses, both load-bearing:
1. **Multimodal OCR of messy shipper paperwork in Spanish** — *orden de carga* documents are PDFs, photos, sometimes handwritten. Extracting RFC, addresses, ClaveProdServ codes, weights, hazmat classes reliably from those is the entire reason an hombre-camión can use this in 30 seconds instead of typing 180 fields. No AI = no product.
2. **Rejection-fix copywriter** — when shipper data fails validation, the agent has to explain *to a non-fiscal-expert truck driver* in plain Spanish what to ask the shipper for. "El PAC rechazará por código postal" is useless; "Pídale al cliente el CP correcto, el suyo no existe en el catálogo SAT" is the unlock. LLM rewrites SAT error codes (CFDI40138, CFDI40139…) into action-oriented WhatsApp messages.

The PAC stamping itself is a deterministic API call — that's the off-the-shelf part. AI is the OCR and the human-friendly fix surface.

## 7. Localization angle

This **is** the localization play. Built end-to-end around Mexican fiscal infrastructure (SAT CFDI 4.0, CCP 3.1, SICT permits, Guardia Nacional checkpoint regime) and Mexican comms (WhatsApp). Price in MXN (₱499–999/mo), bill via OXXO + SPEI, support in Spanish from CDMX hours. Nothing about this transfers to Brazil/Colombia without rebuilding against their own fiscal stacks (CT-e, RNDC) — and that's the moat, not a limitation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers in MXN
  - Solo (1 truck): ₱499 MXN/mo, 40 stamps/mo, WhatsApp + app, basic evidence packet
  - Fleet (2–10 trucks): ₱999 MXN/mo + ₱79/extra truck, 200 stamps/mo, multi-driver dashboard, customer portal
  - Despachador (10+ trucks): ₱2,499 MXN/mo, unlimited stamps, audit-ready dossier export, accountant seat
- **ACV:** Realistic blended ~₱8,400 MXN/yr ≈ $450 USD/yr
- **Path to $1M USD ARR (≈₱18.5M MXN):** 2,200 paying customers (mix of Solo + Fleet) — 1.2% of 179K micro permit holders. Achievable in 18 months given the pain intensity.
- **Path to $5M USD ARR (≈₱92.5M MXN):** 10,000+ customers — requires breaking past hombre-camión into the 25K firms with 6–30 trucks (Despachador tier ACV ~$1.5K/yr) and adding adjacent fiscal complements (Comercio Exterior, Pagos)
- **Expansion path:** stamp packs (overage), accountant seat upsell, shipper-side portal as paid feature, optional GPS hardware bundle (BLE tracker → exact-coordinates compliance), audit-defense add-on (we represent the trucker if SAT challenges a CCP we stamped)

## 9. Go-to-market wedge — first 100 customers

1. **WhatsApp transportista groups.** ~400 large public/semi-public groups (CONATRAM, regional CANACAR chapters, "Transportistas Nuevo León/Jalisco/Edomex/Bajío" groups, 500–5,000 members each). Drop in a 60-second WhatsApp video: shipper sends bad postal code → PorteScreen catches it → driver doesn't lose the day. Convert 0.5% = strong start.
2. **Accountant referral program.** ~3,000 *contadores* serve micro transportistas in Mexico. Each accountant has 5–30 trucker clients. Offer them a free "accountant seat" + 20% lifetime referral. Target the 200 accountants visible on LinkedIn/Facebook posting about CCP rejections. Each enrolls 3–5 clients on average.
3. **Roadside truck-stop ride-alongs.** Hire one ex-trucker on commission. Walk into 3 major federal cargo truck stops (Querétaro, San Luis Potosí, Tepotzotlán). $1,000 MXN signing bonus to switch + first month free. 30 stops × 5 sign-ups/week.
4. **Targeted Google Ads on rejection-error codes.** Truckers and accountants Google specific PAC error codes ("CFDI40138", "Rule CRP2026") in the moment of pain. Bid those exact strings — low competition, high intent.
5. **CONATRAM partnership.** CONATRAM (small-trucker chamber) actively lobbies for hombre-camión. Co-brand a "CCP 3.1 compliance kit" they distribute to members. Free shoutout = qualified leads.

## 10. Build complexity — justification

Medium. Off-the-shelf: PAC API for actual timbrado, multimodal LLM API for OCR, WhatsApp Business API, standard web/mobile stack. Custom work: the **28-point validator engine** that mirrors SAT's CCP 3.1 rules + nightly sync of SAT/SICT catalogs (postal codes, ClaveProdServ, configuraciones vehiculares, permisos SICT). Estimated 10–14 weeks for two builders to ship a credible v1 (one full-stack + one with fiscal domain knowledge or close advisor). The validator engine is the unsexy core — needs methodical reverse-engineering of every PAC rejection code seen in production.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We're a CFDI/PAC-adjacent SaaS — same legal footing as Facturapi, Alegra, Facturama; PAC partner is licensed by SAT |
| Ethical — no harm / dark patterns | ✅ | Helps small operators comply correctly with tax law; no incentive to misreport |
| Market exists (evidence above) | ✅ | 179K micro permit holders, $850–$112K MXN fines, CANACAR + SICT bulletin, existing paid alternatives |
| 1–5 person team can build this | ✅ | 2 builders, 10–14 weeks to v1 if one has Mexican fiscal experience |
| Launchable with <$50K / ₹40L | ✅ | PAC integration fees, LLM API costs, WhatsApp BSP fee, ~10 weeks of runway — comfortably under $50K |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | Hair-on-fire. Loss of deductibility = shipper drops carrier. Roadside fines up to $112K MXN per traslado. Hits every trip. |
| Demand evidence | 15 | 13/15 | CANACAR + SICT data, documented PAC rejection codes, CFDI vendors actively shipping CCP features (proof of paid demand). Missing: direct customer revenue benchmarks for *pre-validation* specifically. |
| Build feasibility | 15 | 11/15 | PAC API + LLM + WhatsApp = off-the-shelf. Validator engine + catalog sync is the real work. 10–14 weeks. |
| Distribution clarity | 15 | 12/15 | WhatsApp groups + accountant referrals + truck-stops + exact-match Google Ads. Multiple named channels with concrete conversion math. Slight discount for the channel never being formally tested. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked at 2.5–5× existing CFDI tools, justified by hard $-value of preventing one rejection. ACV ~$450/yr USD requires 2.2K customers for $1M ARR — feasible. $5M ARR needs the Despachador-tier and adjacent complements (less certain). |
| Time to first revenue | 10 | 8/10 | 8–12 weeks. Pre-sell to 10–20 WhatsApp-group truckers during build. Charge from day one of v1. |
| Defensibility | 10 | 6/10 | Workflow lock-in (fleet profile, 5-yr evidence vault), accountant network, accumulated rejection corpus. Copyable in 6–9 months by an Alegra/Facturapi if they prioritize — but they sell horizontal, not vertical. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs at least one builder fluent in Mexican fiscal mechanics (CFDI 4.0, CCP 3.1, SAT catalog versioning, PAC integration semantics). Without that, you'll spend the first 8 weeks decoding SAT documentation instead of shipping. The other builder is generalist full-stack — WhatsApp BSP, LLM API, Postgres, basic React.

### Key assumptions to validate (3–5)

1. **Assumption:** Hombres-camión will pay ₱499–999 MXN/mo for pre-validation specifically, on top of (or replacing) their existing ₱199 MXN/mo CFDI tool.
   **How to test:** Recruit 30 hombre-camión via 5 WhatsApp groups, show a Loom of the WhatsApp flow against a real *orden de carga*, ask for ₱499 MXN deposit toward 6-month subscription. Target ≥20% deposit rate.
2. **Assumption:** OCR of shipper paperwork is reliable enough (≥95% field accuracy) at LLM cost <₱2 MXN per trip.
   **How to test:** Collect 200 real *órdenes de carga* (PDF + phone photos) from 10 truckers. Run through GPT-4o-mini / Claude Haiku. Measure field-level accuracy and cost per doc.
3. **Assumption:** A PAC partner (Facturapi, Fiscalapi, Factura.com) will let us white-label timbrado at margin that supports $499 MXN/mo pricing.
   **How to test:** Direct outreach to all 3, get reseller pricing. Need ≤₱0.40 MXN/stamp at 40 stamps/customer to make Solo tier work.
4. **Assumption:** Accountants will actively refer their clients (vs. silently pocketing the seat).
   **How to test:** Pilot the referral with 10 accountants who already post about CCP rejections. Measure conversions in 60 days.
5. **Assumption:** SAT/SICT catalog versioning is tractable — we can keep up with monthly catalog updates without breaking customer flows.
   **How to test:** Track the SAT catalog change history for the last 24 months. Build a sync prototype. Confirm change frequency is ≤weekly.

### Risk flags

1. **Platform dependency:** Bound to a PAC reseller relationship. If our PAC partner deprecates, raises prices, or competes, we're exposed. Mitigation: multi-PAC abstraction layer from day one.
2. **Regulatory whiplash:** SAT could ship a "good" hombre-camión app (they've promised this since 2021 but never delivered). If they actually do, our value drops. Mitigation: validator + evidence packet + accountant workflow are still distinct from a stamping app.
3. **Catalog drift:** SAT's postal-code, ClaveProdServ, and configuración vehicular catalogs change monthly without warning. A missed sync = wave of customer rejections. Mitigation: automated daily diff + on-call rotation in year one.
4. **Accountant channel rejection:** Accountants may view us as a threat (we automate work they currently bill). Mitigation: position as "audit-protection layer" for their clients; give accountants admin seats and audit-export tools.
5. **Currency / macro:** Pricing is in MXN; if peso devalues sharply, USD-denominated PAC + LLM costs squeeze margin. Mitigation: index Pro tier annually.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Mexican fiscal-domain advisor (or co-founder ex-Alegra/Facturapi/CONTPAQi). Spanish-native.
Time to revenue:        8–12 weeks (pre-sold pilots during build)
Capital to launch:      ₱500K–800K MXN ($27K–43K USD)
Top 3 assumptions to validate first:
  1. ₱499–999 MXN/mo willingness — 30-trucker deposit test, ≥20% target
  2. OCR accuracy ≥95% on real shipper docs at ≤₱2 MXN/trip — 200-doc benchmark
  3. PAC reseller margin works at ₱0.40 MXN/stamp — three-way PAC RFP
Kill criteria:
  - Abandon if <15% of 30 truckers convert in the deposit test
  - Abandon if PAC reseller pricing forces >₱799 MXN/mo entry tier
  - Abandon if SAT ships a functional hombre-camión validator app of their own with pre-stamping checks
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull SICT permit holder rosters from public state directories. Build a 30-trucker target list across 3 WhatsApp groups (NL, Edomex, Jalisco). Record a 90-second WhatsApp Loom of the *orden de carga → catch postal code → stamp* flow using mock data.
- **Day 2–3:** DM the 30 truckers + 10 accountants. Offer 6-month pre-sale at ₱2,994 MXN (₱499 × 6, half off list) in exchange for a ₱500 MXN deposit and a 20-minute call.
- **Day 4:** Collect 200 real *órdenes de carga* (paid: ₱100 MXN each from the truckers who took the deposit call) and run a Claude Haiku OCR benchmark. Measure field-level accuracy.
- **Day 5:** **Go/no-go:**
  - **Go** if ≥6 truckers paid deposits (20%) **and** OCR field accuracy ≥95% at ≤₱2 MXN/doc
  - **No-go** if <4 deposits OR OCR <90% accuracy — pivot to accountant-first SaaS (sell the validator to the 3,000 contadores who already handle CCP for their truckers)
