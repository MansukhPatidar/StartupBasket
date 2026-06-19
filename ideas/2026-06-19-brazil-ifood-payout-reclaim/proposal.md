---
title: "RepasseCerto — payout reclaimer for Brazil's iFood restaurants"
slug: brazil-ifood-payout-reclaim
date: 2026-06-19
category: RestaurantTech / Brazil-SMB
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Audits every iFood and Rappi payout, flags wrong deductions, and builds the dispute file to get your money back."
tags:
  vertical: RestaurantTech
  model: SaaS
  geography: Global
  secondary: [Brazil, LATAM, SMB, Compliance-driven, WhatsApp-first, AI-agent]
axes:
  problem: 16
  demand: 13
  build: 12
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 5
founderFit: [operations-heavy, domain-expertise-required]
featured: false
---

# RepasseCerto — payout reclaimer for Brazil's iFood & Rappi restaurants

## 1. One-liner

Audits every iFood and Rappi payout, flags wrong deductions, and builds the dispute file to get your money back.

## 2. Trend signal — why now?

iFood ended 2025 with **380,000+ restaurants** on the platform — it added 335,000 new partners in 2025 alone (+83% YoY), and **81% of new sign-ups were small and mid-size businesses** (E-Commerce Brasil, Oct 2025). That's a flood of mom-and-pop kitchens onto a platform whose payout (*repasse*) statements they cannot read.

The complaint volume is loud and specific. Reclame Aqui is full of restaurant owners documenting deductions they can't explain: a R$108.48 sale that nets R$49 after deductions, a R$9.90 item that pays out R$4.41, promotions iFood enrolled them in *without authorization* but still charged commission on, and cancelled-but-delivered orders with near-zero compensation. iFood's own help docs tell owners to "download the Excel, filter out the R$0.00 and blank rows, and sum the columns by hand" to check a single month — a multi-hour chore most owners never do.

The deductions stack — commission (8–27%), service fee, promo co-funding, delivery-fee share, cancellation reversals — and the only recourse today is either (a) ignore it, or (b) hire a lawyer: firms like Urbano Ribeiro Advogados now advertise "iFood cancelled the order and didn't pay — here's how the restaurant collects." There's a category between *ignore* and *sue*, and nobody self-serve owns it for restaurants.

Provenance:
  - Signal 1 (demand): iFood added 335K restaurants in 2025, +83% YoY, 81% SMB; Reclame Aqui threads on wrong/unexplained *repasse* deductions and unauthorized promos — https://www.ecommercebrasil.com.br/noticias/ifood-tem-alta-de-83-na-base-de-restaurantes-cadastrados-em-2025 ; https://www.reclameaqui.com.br/ifood/descontos-indevidos-sobre-incentivos-do-ifood-para-restaurante_a9OkhHtrPSXshdTe/ — 2025-10 / 2025
  - Signal 2 (feasibility): iFood exports a full per-order Excel ledger (taxas, comissão, incentivos, entrega) and Rappi a similar statement; cheap LLM + table parsing turns the manual "filter-and-sum" chore into seconds — https://blog-parceiros.ifood.com.br/relatorio-de-conciliacao/ — 2025
  - Signal 3 (economic): Reconciliation tooling is already a paid category — Koncili sells marketplace *conciliação* (e-commerce sellers, not restaurants); Saipos bundles it inside a R$219.90/mo full ERP used by 25K of the 380K restaurants — https://saipos.com/planos-e-precos ; https://www.koncili.com/planos/ — 2026
  Category: Geographic arbitrage

## 3. The opportunity

In the US this is a known, paid category: "delivery platforms are quietly costing your restaurant $300–$1,000/month" is a Medium headline, and Trintech, PAR, and Optipro all sell DoorDash/Uber Eats reconciliation and one-click dispute filing. Brazil has 380K iFood restaurants and **no equivalent self-serve tool aimed at them.**

The incumbents that touch this in Brazil miss the SMB restaurant:
- **Koncili** is built for marketplace e-commerce *sellers* (its own intake asks "Supermarket / Pharmacy / Pet Shop"), reconciles SKU-level pricing, and its flagship is a *done-for-you human service* — wrong shape and wrong price for a R$30K/month lanchonete.
- **Saipos / Food Sistemas** fold reconciliation into a full R$220/mo restaurant ERP. To get the audit you must rip out your POS and run your whole operation on them. 25K restaurants do; **355K don't.**

The 10× move: a thin, standalone audit that needs nothing but the restaurant's iFood/Rappi login (or an uploaded statement). It doesn't replace anyone's POS. It does one job — "did they pay you what they owed, and exactly which line items can you contest" — and then it does the part everyone actually wants: it **generates the ready-to-file contestação** with order IDs, screenshots of the policy, and the math, so the owner (or their accountant) files it in two clicks instead of paying a lawyer.

## 4. Target market

- **Primary customer:** Owner-operators of single-location or 2–4 location restaurants, lanchonetes, docerias, and pizzarias in Brazil doing **R$15K–R$120K/month in delivery GMV**, who are on iFood (and often Rappi too) but do *not* run a full cloud ERP. The person who reads the WhatsApp and signs the checks is the buyer.
- **Why they buy:** In their words (Reclame Aqui, paraphrased to category): "vendi por R$108 e caiu R$49," "me colocaram em promoção sem autorizar," "paguei pra trabalhar." They feel robbed monthly and have no time or tool to prove it.
- **Rough TAM reasoning:** 380K iFood restaurants; strip the ~25K already on Saipos-class ERPs and the chains with finance teams, and you have **~300K+ SMB restaurants** with zero reconciliation. Add Rappi-only and multi-platform operators. Even 1% penetration at R$79/mo ≈ R$2.8M ARR.
- **Why now for them:** The 2025 SMB sign-up wave is *new* to delivery economics — they haven't built workarounds, they're feeling the deductions for the first time, and they're actively complaining out loud.

## 5. Product sketch (MVP)

- Connect iFood (and Rappi) by uploading the monthly Excel/PDF statement — or paste login for auto-pull where the partner portal allows export.
- **Expected-vs-actual per order:** for every order, show what you *should* have netted vs what landed, with each deduction itemized (commission, service fee, promo co-funding, delivery share, cancellation reversal).
- **Disputable flags:** auto-highlight the patterns owners contest most — promos you didn't authorize, cancelled-but-delivered orders, double-charged fees, repasse that never arrived for a completed order.
- **One-tap contestação file:** generate a per-dispute PDF/packet (order IDs, dates, the relevant iFood policy clause, the math) formatted to paste into the iFood partner support ticket — or hand to your accountant/lawyer.
- **Monthly "you lost R$X" WhatsApp digest:** the recovered/recoverable number, pushed where the owner already lives.
- **Bank-match (lite):** confirm the total repasse actually hit your account (catches the "completed order, no payout" case).
- Multi-platform rollup: one screen for iFood + Rappi so multi-app restaurants stop juggling two spreadsheets.

## 6. AI angle — what's load-bearing

The statements are messy, inconsistent across plan types, and change format. AI is doing real work: **parsing heterogeneous Excel/PDF exports into a normalized per-order ledger**, classifying each deduction line into a category, and — the hard part — **deciding which deductions are *contestable* under iFood/Rappi policy** (an unauthorized promo vs. a legitimately agreed one; a cancellation that should have paid out vs. one that shouldn't). Then it drafts the contestação argument in correct Portuguese with the right policy citation. Remove the AI and you're back to "download the Excel, filter out the blanks, sum by hand" — which is exactly the chore nobody does. The AI is the product, not a chatbot bolted onto a dashboard.

## 7. Localization angle

This *is* the localization play — that's the whole thesis. A generic US delivery-reconciliation tool can't read an iFood *relatório de conciliação*, doesn't know Rappi's deduction taxonomy, can't cite Brazilian platform policy, and doesn't draft a Portuguese contestação. Local specifics exploited: iFood/Rappi statement formats and plan types; Portuguese-language disputes and the *Código de Defesa do Consumidor* angle owners invoke; WhatsApp as the default owner channel; Real pricing (a R$79/mo tier works where a US$49 tier wouldn't); and PIX-friendly billing. Expansion path is the same arbitrage repeated: Colombia/Mexico Rappi, then iFood's other LatAm footprints.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$79/mo single platform, R$129/mo for iFood + Rappi + multi-location. Optional **success fee** on amounts actually recovered for owners who prefer it (test 10–15% of recovered repasse).
- **ACV:** ~R$1,100/year base (≈US$200) at the R$79 tier; higher with success fees and multi-location.
- **Rough math to $1M ARR:** ~4,500 restaurants × R$79/mo × 12 ≈ R$4.3M ≈ **US$0.8–1M ARR.** That's 1.5% of the ~300K SMB target.
- **Rough math to $5M ARR:** ~22,000 restaurants (≈7% of SMB target) on the base tier, or fewer with success fees and Rappi/LatAm expansion layered on. Reachable but requires real distribution muscle and likely the accountant channel.
- **Expansion path:** add Rappi → multi-location → success-fee tier → sell a B2B seat to *contadores* (accountants) who reconcile for many restaurant clients at once (one accountant = many restaurants).

## 9. Go-to-market wedge — first 100 customers

- **Scrape the complaint trail.** Reclame Aqui has thousands of dated, public complaints filed *against iFood by restaurants* about repasse/promo/cancellation. DM/email the complainants: "We pulled your last statement pattern — here's R$X you can likely contest." Warm list of people who've already self-identified as angry.
- **Accountant channel.** Brazilian SMB restaurants lean on a *contador*. Sign up 10 accounting offices as resellers — they reconcile clients faster, look like heroes, and earn a cut. One office can onboard dozens of restaurants.
- **Free public "audit" lead magnet.** "Upload one iFood statement, get your wrong-deduction number free." The number is the hook; the contestação file and ongoing monitoring are paid. Push it in the big restaurant-owner Facebook/WhatsApp groups and via micro-creators who already coach lanchonete owners on iFood economics.
- **Cold WhatsApp to local clusters** (São Paulo, RJ, MG — the states with the most 2025 sign-ups), leading with a recovered-Reais number, not features.

## 10. Build complexity — justification

Medium. Statement parsing across iFood/Rappi formats and plan types is the real work, plus a maintained rules layer for "what's contestable" that drifts as platforms change policy. Everything else is off-the-shelf: file upload, LLM extraction/classification, a dashboard, WhatsApp Business API, Real billing. No POS integration required for v1 (uploads first; portal auto-pull later). A pair can ship a credible v1 in ~10–14 weeks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Auditing your own statements and filing legitimate disputes is fully legal; helps owners exercise existing rights. |
| Ethical — no harm / dark patterns | ✅ | Recovers money owed to small operators; no dark patterns. Be honest about recovery odds. |
| Market exists (evidence above) | ✅ | 380K restaurants, loud public complaints, paid US/BR analogs. |
| 1–5 person team can build this | ✅ | Pair in ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | API + LLM + WhatsApp costs only. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt monthly, real money lost, owners actively complaining — but they tolerate it today, so not pure hair-on-fire. |
| Demand evidence | 15 | 13/15 | Thousands of dated public complaints + paid incumbents in adjacent shapes (Koncili, Saipos) + proven US category. Strong. |
| Build feasibility | 15 | 12/15 | Parsing variance and a drifting "contestable" rules layer keep it from a 14; no research risk. |
| Distribution clarity | 15 | 11/15 | Reclame Aqui warm list + accountant channel are concrete; conversion on cold WhatsApp is unproven. |
| Revenue mechanics | 15 | 11/15 | R$79 tier fits wallets; ACV is thin, so $5M needs volume or success-fee/accountant leverage. |
| Time to first revenue | 10 | 8/10 | Free-audit-to-paid funnel can close in weeks; no long sales cycle for a R$79 tool. |
| Defensibility | 10 | 5/10 | Execution + accumulating statement-format/rules know-how and accountant relationships. Saipos/Koncili could aim down-market; first cheap clone is a real risk. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`operations-heavy` · `domain-expertise-required` — you need to live inside iFood/Rappi statement formats and dispute policy, and grind the accountant/complaint-list distribution. Light on hardcore engineering; heavy on Brazilian restaurant-delivery domain knowledge.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of statements contain *contestable* (not just understood) deductions worth real Reais. **How to test:** Hand-audit 30 real statements from owners; measure average recoverable R$ and what fraction of disputes actually succeed.
2. **Assumption:** Owners will pay R$79/mo for an audit-only tool that doesn't replace their POS. **How to test:** Pre-sell to 20 complainants from Reclame Aqui with a paid pilot before building the full product.
3. **Assumption:** Contestações generated by the tool are accepted by iFood support at a useful rate. **How to test:** File 20 tool-generated disputes manually; measure acceptance and time-to-resolution.
4. **Assumption:** Accountants will resell. **How to test:** Pitch 10 *contador* offices; get 3 signed LOIs or a paid trial.

### Risk flags

1. **Platform dependency:** iFood can change statement formats, restrict exports, or improve its own transparency, eroding the wedge. Mitigate with multi-platform coverage and the dispute layer (value beyond raw reconciliation).
2. **Thin ACV / down-market squeeze:** R$79/mo means you need volume; Saipos (ERP) or Koncili could add a cheap restaurant tier. Speed and the accountant channel are the defense.
3. **Recovery-rate disappointment:** If iFood rejects most contestações, the "get your money back" promise weakens to "now you understand the deductions" — still useful, but a softer sell. Validate recovery rate *before* scaling the success-fee model.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Operator with Brazilian restaurant-delivery domain depth + a lightweight technical partner
Time to revenue:        6–10 weeks (free-audit → paid pilot funnel)
Capital to launch:      R$25–60K (~US$5–11K)
Top 3 assumptions to validate first:
  1. Avg recoverable R$ per statement + dispute success rate — hand-audit 30 real statements, file 20 contestações
  2. R$79/mo willingness-to-pay for audit-only — pre-sell 20 Reclame Aqui complainants
  3. Accountant resell appetite — 10 contador pitches, target 3 paid trials/LOIs
Kill criteria:
  - Abandon if <40% of audited statements surface a contestable deduction worth ≥R$150/month
  - Abandon if tool-generated contestações are accepted by iFood at <20% and owners won't pay for audit-only insight
  - Abandon if a well-resourced incumbent (Saipos/Koncili/iFood itself) ships a free standalone restaurant audit before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Collect 30 real iFood/Rappi monthly statements from owners (DM Reclame Aqui complainants; offer a free hand-audit). Hand-reconcile them. Measure average recoverable Reais and which deduction types recur.
- **Day 3–4:** Manually draft + file ~15 contestações from those statements. Pre-sell a R$79/mo paid pilot to the same owners ("we'll do this every month automatically").
- **Day 5:** Go / no-go. **Go if** ≥40% of statements show a contestable deduction ≥R$150/month *and* ≥8 of the ~30 owners commit to a paid pilot. Falsifiable: real money found, real cards charged — or not.
