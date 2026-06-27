---
title: "MandatoMover — Pix Automático authorization drive for Brazil"
slug: pix-automatico-authorization-migration
date: 2026-06-28
category: FinTech / Brazil Subscription SMBs (academias, escolas, clínicas, micro-SaaS)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Runs the card-to-Pix-Automático re-authorization campaign so Brazilian subscription businesses convert their base without silent churn."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, Compliance-driven, SMB, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, operations-heavy]
featured: false
---

# MandatoMover

## 1. One-liner

Runs the card-to-Pix-Automático re-authorization campaign so Brazilian subscription businesses convert their existing base without silent churn.

## 2. Trend signal — why now?

Brazil's central bank (BCB) turned on **Pix Automático** — bank-app-authorized recurring débito — in June 2025, and the recurring-mandate rules tightened on **14 May 2026**, pushing subscription businesses to move off recurring credit cards (4% MDR) and boleto (47% inadimplência) onto a near-zero-fee rail (R$0.20–0.50/charge). Adoption is exploding: Pix Automático grew **>300% in its first year**, and in one EBANX case it hit **28% of a merchant's Brazilian payment volume in six months**, with **84% of micro-businesses** using Pix to buy software.

But the rail has a trap the billing vendors gloss over. The mandate only activates after the **payer confirms inside their own bank app** (BCB's "Jornada 1/2" authorization flows). For a gym, school, or clinic with an existing card/boleto base, going live means getting *every active subscriber* to re-authorize — a confirmation that happens outside the merchant's product, in an app notification most customers ignore. Get it wrong and, in the words of Brazilian fitness-payments guides, "poorly implemented, it generates legal friction, cancellations, and loss of trust." Procon-SP has already warned banks and merchants that recurring débito **cannot be cadastrado without express, unequivocal consent**, threatening abusive-practice fines. So the migration moment is both a revenue cliff (unconfirmed = unbilled = churn) and a compliance trap.

Provenance:
  - Signal 1 (Demand): Boleto carries 47% inadimplência; Brazilian fitness/clinic guides warn that botched Pix Automático rollout drives "cancellations and loss of trust"; Procon-SP threatens fines for consent captured without express authorization — https://www.mercadopago.com.br/blog/pix-automatico-academias-cursos-reduzir-inadimplencia + https://www.procon.sp.gov.br/pix-cadastro-tem-que-ter-autorizacao-do-consumidor/ — 2026-06
  - Signal 2 (Feasibility): Pix Automático API live across EBANX/Recurly/Adyen with standardized BCB authorization journeys (Jornada 1 in-app, Jornada 2 QR); WhatsApp Business API mature; BCB-fixed 3-retry/7-day dunning window documented — https://docs.ebanx.com/docs/payments/guides/accept-payments/api/brazil/pix-automatico/recurring-payment-retry/ + https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf — 2026-06
  - Signal 3 (Economic): Pix Automático +300% YoY, 28% of volume in 6mo case (EBANX/Nord), Boku & PagBrasil licensed-in; SocialHub charges R$197/mo and reports 70%+ of structured adopters saw >25% revenue lift in 90 days — proven willingness-to-pay — https://www.globenewswire.com/news-release/2026/06/24/3316806/0/en/after-6-months-recurring-pix-payments-enabled-by-ebanx-already-account-for-28-of-nord-security-s-payment-volume-in-brazil — 2026-06
  Category: Platform shift

## 3. The opportunity

Every billing vendor in Brazil (ASAAS, Iugu, Vindi, Mercado Pago, Celcoin, Pacto, SocialHub) sells the **ongoing recurring-charge engine** — and they all assume the authorization mandate already exists. Nobody owns the **one-time, high-stakes conversion event**: taking a merchant's current 200–3,000 card/boleto subscribers and getting each one to confirm a Pix Automático mandate in their bank app, fast, with proof of consent.

That's the gap. The billing tool can debit perfectly — but only against mandates that exist. The merchant is left to figure out the migration themselves: which subscribers confirmed, which ignored the bank-app push, which bank buried the notification, who to nudge again and through which Jornada, and how to prove to Procon that consent was express. Done badly, the merchant silently loses 20–40% of their billable base in the switch and exposes themselves to consent complaints. MandatoMover is the focused campaign tool for exactly that window — a wedge that's painful, time-boxed, and lands the merchant before the billing vendors even notice the gap.

## 4. Target market

- **Primary customer:** Owner-operators of Brazilian subscription SMBs migrating an existing base — academias/CrossFit boxes, escolas de idiomas & cursos, clínicas (estética, fisio, odonto), small associations, and micro-SaaS — with **100–3,000 active recurring subscribers** and 1–3 admin staff, no dedicated TI.
- **Why they buy:** "I have 600 alunos on credit card paying 4% MDR. BCB says move to Pix Automático. My billing system can debit Pix — but only if the aluno authorized it, and half of them ignore the notification from the banco. Every one that doesn't confirm is a mensalidade I stop collecting. I can't chase 600 people by hand, and if I do it wrong I get a Procon."
- **Rough TAM reasoning:** Brazil has hundreds of thousands of recurring-revenue SMBs — ~35K+ academias alone, tens of thousands of language schools/cursos and clínicas. Even 5,000 paying R$297/mo ≈ R$17.8M ARR. The migration cliff repeats for every new subscriber cohort, so it's not purely one-time.
- **Why now for them:** The 14 May 2026 mandate tightening + 4% card MDR + 47% boleto inadimplência make the switch urgent *this quarter*, and the conversion window is open right now — first movers convert their base cleanly, laggards bleed it.

## 5. Product sketch (MVP)

- Import the current subscriber base (CSV from the gym/school system or direct ASAAS/Iugu/Vindi export) with plan, amount, billing day.
- One-click launch of a **re-authorization drive**: generates each subscriber's correct Pix Automático authorization request (Jornada 1 in-app push or Jornada 2 QR) via a connected PSP, sent over WhatsApp + SMS + email.
- **Live confirmation board**: who confirmed, who's pending, who refused — segmented by bank, so the merchant sees that (e.g.) Nubank confirmations land instantly but Caixa's are stalling.
- **AI holdout nudger**: re-sequences nudges for the unconfirmed — different copy, different Jornada, different channel, timed to avoid Procon-style harassment — and answers "como autorizo?" questions in Portuguese over WhatsApp.
- **Consent evidence vault**: timestamped, immutable record of each authorization request, channel, and the payer's confirmation — exportable as a Procon-ready consent pack.
- **Migration scorecard**: % of base converted, R$ of recurring revenue secured vs at-risk, projected churn from holdouts — the number the owner actually cares about.
- Hand-off: once a mandate is confirmed, push it cleanly into the merchant's existing billing engine (or our thin recurring debiter) so charges just work.

## 6. AI angle — what's load-bearing

AI runs the **holdout-recovery loop**, which is where the money is. After the first blast, 30–50% won't have confirmed — and they're unconfirmed for *different* reasons (ignored push, wrong bank Jornada, confused about what they're authorizing, suspicious it's a scam, genuinely churning). The AI classifies each holdout from their WhatsApp replies and behavior, picks the next move (re-send via QR instead of in-app push, switch channel, send a reassurance explainer, or flag as lost-cause), and handles the inbound "is this safe? what am I authorizing?" conversations in natural Brazilian Portuguese at 2am. Strip the AI and you're back to a static blast-and-pray that leaves 30%+ of revenue on the table — which is exactly what the incumbents' "send a reminder" feature does. The intelligence is in *which holdout gets which intervention, when*.

## 7. Localization angle

This is Brazil-native by definition — there is no global version. The product is welded to BCB's Pix Automático rail, its specific authorization Jornadas, the 3-retry/7-day dunning window, per-bank app behavior, WhatsApp as the default consumer channel, Brazilian-Portuguese conversation, and Procon/CDC consent law. A US/EU team can't parachute in; the moat such as it is comes from knowing each bank's authorization quirks. Pricing in BRL (R$197–497/mo) fits the wallet where a US$49/mo tool framed in dollars would not.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by base size. R$197/mo (≤300 subscribers), R$497/mo (≤1,500), R$997/mo (≤5,000) — plus an optional "migration sprint" setup fee (R$497 one-time) for the initial drive. Sits at/below SocialHub's R$197 anchor for the entry tier.
- **ACV:** ~R$4,300/yr blended (~US$800) at the R$297 effective mid-tier.
- **Rough math to R$6M ARR (~US$1.1M):** ~1,150 customers × R$430/mo × 12. Achievable within Brazil's academia + cursos + clínicas density.
- **Rough math to ~R$28M ARR (~US$5M):** ~5,400 customers, or fewer with upsell into ongoing recovery — needs channel partnerships with gym-management and school-management software vendors who have the install base.
- **Expansion path:** Migration drive (wedge) → ongoing **holdout & failed-débito recovery** (the 3-retry/7-day window is brutal; recovering failed charges is a recurring job) → per-cohort re-auth as new subscribers join → consent-evidence retainer. Land on the cliff, expand into the permanent leak.

## 9. Go-to-market wedge — first 100 customers

- **Channel 1 — partner with gym/school management software:** Brazil has dozens of nicho ERPs (Pacto, Tecnofit, Next Fit for academias; Sponte, escolas). They have the install base but a weak migration story. Offer a revenue-share white-label of the re-auth drive; pitch 5–10 of them, land 2. One mid-size ERP partner = hundreds of merchants.
- **Channel 2 — scrape and direct-DM academias mid-migration:** Pull the ~35K academias from Google Maps / CNAE registries, filter to those already posting about Pix Automático on Instagram, send a 60-second WhatsApp Loom showing their at-risk MRR if 30% don't re-authorize. Target 3% reply on 2,000 contacts = 60 conversations.
- **Channel 3 — accountant (contador) referral loop:** Contadores advise these exact SMBs on the boleto→Pix switch. Recruit 20 contadores in São Paulo/MG with a referral kickback; each has 30–80 SMB clients facing the same cliff.
- **Channel 4 — Pix-Automático content + WhatsApp groups:** The migration anxiety is acute and ungoogled-answered; rank for "como migrar alunos para Pix Automático sem perder cliente" and seed the answer in academia/curso owner WhatsApp/Telegram communities.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Pix Automático authorization + débito via a PSP (EBANX/Adyen/Celcoin), WhatsApp Business API, standard web stack, LLM for the holdout classifier and PT-BR chat. Custom work: the per-bank Jornada handling and confirmation-state reconciliation (each bank's app behaves differently and the confirmation comes back asynchronously), the consent-evidence vault, and CSV import mapping from messy gym/school exports. A 2-person team ships a credible v1 in ~10–14 weeks; the PSP integration and one ERP partner integration are the long poles.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates squarely within BCB Pix Automático rules; designed to *strengthen* CDC/Procon consent compliance, not skirt it. |
| Ethical — no harm / dark patterns | ✅ | Explicitly anti-dark-pattern: captures express consent, easy cancel, throttles nudges to avoid harassment. Refusing to confirm is honored. |
| Market exists (evidence above) | ✅ | Mandatory rail shift + proven WTP (SocialHub R$197) + exploding adoption. |
| 1–5 person team can build this | ✅ | 2 people, ~3 months. |
| Launchable with <$50K / ₹40L | ✅ | PSP + WhatsApp + cloud; well under the cap. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hard deadline + real revenue cliff + Procon risk. Painful and time-boxed, but it's a migration event more than a daily fire — caps it below 17. |
| Demand evidence | 15 | 12/15 | Multiple independent signals (adoption growth, MDR/inadimplência economics, proven paid incumbents). Docked because direct "I lost subscribers in the switch" verbatim from owners is still thin — the pain is documented in guides, not yet in viral owner complaints. |
| Build feasibility | 15 | 12/15 | Mostly off-the-shelf; per-bank async confirmation reconciliation is the real work. |
| Distribution clarity | 15 | 12/15 | ERP-partner and contador loops are concrete and warm; direct DM is plausible. Partner dependency is the risk. |
| Revenue mechanics | 15 | 11/15 | BRL pricing benchmarked to SocialHub; ACV reasonable. Migration is partly one-time, so the expansion-into-recovery thesis must hold to sustain ARR. |
| Time to first revenue | 10 | 8/10 | Merchants are migrating *now*; a migration sprint can be sold and delivered in weeks. |
| Defensibility | 10 | 3/10 | Thin moat. Incumbents can bolt this on; the only durable edge is per-bank Jornada know-how, ERP partnerships, and being first to own the migration narrative. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (PSP + multi-bank async integration, AI loop) · `operations-heavy` (ERP partner deals, contador network, hands-on migration sprints).

### Key assumptions to validate (3–5)

1. **Assumption:** Owners will pay specifically for the *migration/authorization* job, separate from a billing tool they may already have. **How to test:** Pitch a paid migration sprint to 15 academia/curso owners; ≥5 prepay R$497.
2. **Assumption:** Unconfirmed-mandate churn in a DIY migration is real and large (20%+). **How to test:** Interview 20 merchants who already attempted the switch; quantify what share of their base never re-authorized.
3. **Assumption:** A nicho ERP will white-label rather than build it themselves. **How to test:** Get 1 of 5 pitched ERPs to a signed pilot LOI within 6 weeks.
4. **Assumption:** PSP terms allow a thin third-party orchestrating authorizations on behalf of many small merchants. **How to test:** Confirm aggregator/sub-merchant model with EBANX/Celcoin/Adyen before building.

### Risk flags

1. **Defensibility / incumbent absorption:** ASAAS or Iugu ships a "migration wizard" and the wedge narrows. Mitigation: move fast, lock ERP partners, expand into ongoing recovery before they react.
2. **Platform dependency:** Total reliance on one PSP's Pix Automático API and on WhatsApp Business policy. A pricing or policy change hits the model directly.
3. **Compliance whiplash:** BCB or Procon could change authorization-journey or consent rules mid-flight, forcing rework — though this also *creates* the urgency the product sells into.
4. **One-time-revenue trap:** If the expansion-into-recovery thesis fails, ARR plateaus as the migration wave passes. This is the axis the whole verdict hinges on.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder fluent in Brazilian payments + an ops/partnerships co-founder with academia/curso network
Time to revenue:        4–8 weeks (paid migration sprints sellable immediately)
Capital to launch:      R$60–120k (~US$11–22K)
Top 3 assumptions to validate first:
  1. Owners pay for the migration job as a distinct product — 15 pitches, ≥5 prepay R$497
  2. DIY-migration churn is ≥20% of base — 20 merchant interviews quantifying unconfirmed mandates
  3. A nicho ERP will white-label — signed pilot LOI from 1 of 5 within 6 weeks
Kill criteria:
  - Abandon if <3 of 15 pitched owners prepay a migration sprint
  - Abandon if interviews show DIY re-authorization churn is consistently <10% (pain too small)
  - Abandon if a major billing incumbent (ASAAS/Iugu) ships a comparable migration wizard before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a list of 40 academia/curso/clínica owners in São Paulo + Belo Horizonte who have *already* started or are about to start the Pix Automático switch (Instagram/CNAE filter). Line up 20 for calls.
- **Day 3–4:** Run the 20 interviews. Quantify two numbers: (a) what share of their base never re-authorized in their DIY attempt, and (b) whether they'd prepay R$497 for a done-for-you migration drive. Simultaneously confirm sub-merchant terms with one PSP.
- **Day 5:** Decide. **Go** if ≥5 prepay AND median reported unconfirmed-churn ≥20%. **No-go** if prepays <3 or churn <10% — the pain is real but too small to charge for, and the idea reverts to a billing-tool feature.

The result is falsifiable: either owners hand over R$497 for the migration and report meaningful churn, or they don't.
