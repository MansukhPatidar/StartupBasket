---
title: "TrocaFácil — PIX Automático switchboard for Brazil SMBs"
slug: pix-automatico-mandate-activation
date: 2026-07-08
category: FinTech / Brazil — Micro Gyms, Clinics & Course Sellers (PIX Automático mandate activation)
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Migrates a small gym or clinic's existing paying members onto PIX Automático mandates and rescues the ones who never tap approve."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, PIX-native, AI-agent, SMB, Compliance-driven, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 12
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# TrocaFácil — PIX Automático switchboard for Brazilian recurring-revenue SMBs

> Mandate-activation service that migrates a small business's paying roster onto PIX Automático and rescues silent revokes.

## 1. One-liner

Migrates a small gym or clinic's existing paying members onto PIX Automático mandates and rescues the ones who never tap approve.

## 2. Trend signal — why now?

Brazil's Central Bank launched **PIX Automático** in June 2025 — a rail that lets a business debit a customer's account on a recurring schedule after a single in-bank-app authorization. The customer taps "approve" once; every month after, the money moves automatically for **1/10 to 1/20 of the card fee**, with first-attempt success rates of 92–96% versus 70–80% for boleto.

The catch that nobody is selling a fix for: the whole thing hinges on one metric — **adhesion rate**, the share of customers who actually tap approve when the mandate request lands. Reports peg it at ~73% for requests delivered inside the bank app, but **only when the discount is clear and the migration is staged**. Migrate the whole base at once and trust breaks. Un-migrated customers stay on 15–25%-default boleto. And when a customer revokes a mandate in their bank app — which they can do at any time, silently — the business finds out only when the money doesn't arrive.

The payment gateways (Asaas, Woovi, Efí, Vindi) ship the **API primitive**: "create an authorization, send a payment instruction." They do not run the human-side conversion campaign, the cohort tracking, or the revoke-save. A March 2026 standards update to PIX Automático/Parcelado is pushing a fresh wave of SMBs to migrate now. That's the window.

Provenance:
  - Signal 1 (Demand): Owners chase unpaid monthly bills manually; fitness boleto default runs 15–25%, and "the adhesion rate between soliciting and authorizing is the new metric to monitor" — [sistemapacto.com.br/pagamento-recorrente](https://sistemapacto.com.br/pagamento-recorrente), [blog.asaas.com/pix-automatico](https://blog.asaas.com/pix-automatico) — 2026-07-08
  - Signal 2 (Feasibility): PIX Automático live since June 2025 with open Central Bank spec + gateway APIs (Asaas creates authorizations but "does not create charges by itself — you must generate the instruction per cycle"); mature WhatsApp Business API + cheap PT-BR LLM copy — [docs.asaas.com/docs/pix-automatico](https://docs.asaas.com/docs/pix-automatico), [bcb.gov.br PIX Automático FAQ](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf) — 2026-07-08
  - Signal 3 (Economic): SocialHub March 2026 sample of 145 companies — 70%+ of structured PIX-recurrence adopters logged >25% revenue lift in 90 days; card fees are 10–20× PIX, so migration pays back in one billing cycle — [socialhub.pro Open Finance 2026](https://www.socialhub.pro/blog/open-finance-brasil-2026-cobranca-recorrente-pix-automatico-whatsapp-pme/) — 2026-07-08
  Category: Tech-unlock

## 3. The opportunity

The rail is done. The **migration and retention of the mandate base** is not. Every gateway assumes the merchant already has an engineering team to loop the authorization API, chase non-authorizers across WhatsApp/email, and monitor for silent revokes. The smallest merchants — a 300-member neighborhood gym, a two-chair physio clinic, a solo course seller — have none of that. They have a WhatsApp and a spreadsheet.

TrocaFácil is the **done-for-you activation layer that sits on top of any gateway**. It imports the existing paying roster, sends each customer a staged, incentive-clear WhatsApp mandate request, follows up the non-authorizers in 7/14/30-day cohorts, and watches for revokes — pinging the owner (and the customer) the moment a mandate dies, before a payment is missed. It's not another billing engine. It's the funnel that fills the billing engine the merchant already has.

Incumbents to name: **Asaas / Woovi / Efí** (API-only, no campaign layer), **SocialHub** (broad WhatsApp+CRM+PIX suite, priced per-plan, aimed at merchants who'll actually configure a CRM), and **Pacto / Tecnofit** (vertical gym-management ERPs that bundle billing but treat mandate activation as a side feature, not a rescued-revenue product). None sells the narrow outcome — *"get my current roster onto mandates and keep them there"* — to the operator who won't build or configure anything.

## 4. Target market

- **Primary customer:** Owner-operators of small recurring-revenue businesses in Brazil currently billing 100–1,500 monthly customers via boleto or card — independent gyms/CrossFit boxes, physiotherapy & aesthetic clinics, language/prep-course sellers, small condos (síndico), and pilates/dance studios. Revenue R$30k–R$400k/month.
- **Why they buy (in their words):** *"Todo mês eu corro atrás de mensalidade"* — every month I chase fees. They lose 15–25% to boleto default and eat card fees on the rest, and they've heard PIX Automático fixes it but "muitos ainda têm dúvidas de como autorizar" (many still don't know how to authorize) — so their own migration stalls at 40%.
- **Rough TAM reasoning:** Brazil has ~35,000 gyms, tens of thousands of small clinics, plus course sellers, studios and condos — comfortably 150k+ businesses that bill a recurring roster and sit below the enterprise-billing line. Capture a few thousand and the ARR math closes.
- **Why now for them:** PIX Automático is live and cheap, the March 2026 standards refresh is being marketed at them by every gateway, and the ones who migrate well are visibly pulling ahead (>25% revenue lift). Fear of being the last shop still on boleto is the urgency.

## 5. Product sketch (MVP)

- **Roster import** — upload the member list (CSV / gym-ERP export / gateway sync); dedupe, flag missing phone/CPF.
- **Staged mandate campaign** — sends each customer a WhatsApp with a one-tap PIX Automático authorization link and a clear, owner-set incentive ("R$10 off if you switch by the 10th"), rolled out in waves, not all at once.
- **Non-authorizer follow-up** — AI-drafted, PT-BR, escalating nudges across WhatsApp + email in 7/14/30-day cohorts, each personalized to the customer and the plan, until they authorize or opt out.
- **Revoke radar** — polls mandate status; the instant a customer revokes in their bank app, alerts the owner and fires a "want to keep your spot? re-authorize here" save-flow — before a payment is missed.
- **Adhesion dashboard** — one number the owner watches: % of roster on active mandates, plus recovered-revenue and default-avoided estimates.
- **Consent trail** — captures IP, timestamp, contract version on every authorization, so the merchant has the "autorização expressa e rastreável" Procon expects.
- **Gateway-agnostic** — plugs into Asaas / Woovi / Efí; the merchant keeps their existing rail and money flow.

## 6. AI angle — what's load-bearing

The AI writes and sequences the **conversion campaign**. Getting a customer to tap "approve" on a recurring bank mandate is a persuasion + objection-handling problem, per customer, at scale: the copy has to match the plan, the incentive, the person's payment history, and the specific reason they're hesitating ("é seguro?", "posso cancelar depois?"). A generic blast gets the 40% stall. AI drafts each nudge, adapts tone across the 7/14/30-day cohorts, handles inbound WhatsApp objections in PT-BR, and decides who to push vs. leave alone. Remove the AI and you're back to the owner writing messages by hand in a spreadsheet — which is exactly the status quo the product replaces. The billing itself is *not* the AI; the gateway does that.

## 7. Localization angle

This is a Brazil-native play, not a localized global product. PIX Automático is a Banco Central rail with no analog to port from the US/EU; WhatsApp is *the* channel Brazilian SMBs live in; PT-BR persuasion copy and Procon-grade consent trails are non-negotiable. Pricing works at **R$ tiers** (R$99–R$399/mo) where a $49 global tool never would. The regulatory quirk (revocable-anytime mandates, expressed-consent requirements) is the product, not a footnote. A generic global dunning tool (Churn Buster, FlyCode) cannot touch this — they assume cards and Stripe.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by roster size — R$99/mo (up to 200 customers), R$199/mo (up to 600), R$399/mo (up to 1,500). Optional **success fee** of 1–2% of *recovered* revenue (mandates activated that were previously defaulting) for owners who prefer performance pricing.
- **ACV:** ~R$2,400/yr (~$430) blended.
- **Rough math to $1M ARR:** ~1,300 merchants × R$199/mo × 12 ≈ R$3.1M ≈ **$1.05M ARR** (at ~R$3/$1... adjust to ~R$5.5/$1 → need ~2,300 merchants; either way a low-thousands merchant count, well inside a 150k-business TAM).
- **Rough math to $5M ARR:** ~6–8k merchants on the R$199 tier, or fewer if success-fee revenue and course-seller/condo expansion land. Requires becoming the default "migrate my base" tool in 2–3 verticals.
- **Expansion path:** Success fee grows with recovered revenue; upsell revoke-save analytics, multi-location, and a "new-signup mandate-first" flow so *every* new member starts on a mandate. Land on the boleto base, expand to the whole recurring-revenue operation.

## 9. Go-to-market wedge — first 100 customers

- **Gym-ERP export lists + cold WhatsApp:** Scrape/compile the ~35k Brazilian gyms (Google Maps + Instagram fitness directories); DM owners a 40-second Loom in PT-BR showing "here's your roster half-migrated — we'll finish it." Fitness owners answer WhatsApp; expect a workable reply rate on a pain they feel monthly.
- **Ride the gateway migration wave:** Asaas/Woovi/Efí are actively pushing PIX Automático content at SMBs. Publish "how to migrate your base without losing customers" PT-BR guides and offer to be the done-for-you layer their API can't be — pursue a referral/marketplace listing with one gateway.
- **Vertical influencer/consultant channel:** Gym-management and clinic-ops consultants on Brazilian Instagram/YouTube already sell "reduza inadimplência" to this exact audience. Rev-share with 3–5 of them; they have the trust and the list.
- **Procon-fear angle:** Content targeting owners who currently force card-only billing (a flagged abusive practice) — "switch to compliant PIX Automático mandates" — converts a legal worry into a signup.

## 10. Build complexity — justification

Medium. Off-the-shelf: gateway APIs (Asaas/Woovi already expose authorization create/cancel/status), WhatsApp Business API, PT-BR LLM for copy and objection handling. Custom work is the **campaign orchestration engine** — cohort scheduling, per-customer state machine, revoke polling and save-flows, consent-trail capture — plus roster-import cleanup across messy ERP exports. No novel ML, no hardware, no proprietary data. A technical pair with a Brazilian payments/domain advisor ships a credible v1 in **~10–14 weeks**.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | PIX Automático is a sanctioned BCB rail; consent-trail capture is designed for Procon compliance. Must respect expressed-consent + easy-cancel rules. |
| Ethical — no harm / dark patterns | ✅ | Product *reduces* dark patterns (forced card-only, hard-to-cancel). Save-flows must stay honest, not coercive. |
| Market exists (evidence above) | ✅ | 150k+ recurring-revenue SMBs, documented 40% migration stall, gateway boom. |
| 1–5 person team can build this | ✅ | Technical pair + domain advisor, ~10–14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + LLM costs; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly, money-losing, hair-on-fire during migration season. Not daily once solved, so shy of 17+. |
| Demand evidence | 15 | 12/20→12/15 | Documented default rates, adhesion-stall, revenue-lift data, active gateway spend. Strong but mostly vendor-sourced; few raw owner quotes on the *specific* activation pain. |
| Build feasibility | 15 | 12/15 | Standard stack; the orchestration engine + messy roster imports keep it out of the 13+ band. |
| Distribution clarity | 15 | 11/15 | Named lists, WhatsApp channel, consultant rev-share — but conversion math on cold gym DMs is still an estimate. |
| Revenue mechanics | 15 | 11/15 | R$ pricing benchmarked, low-thousands merchant count to $1M. Success-fee upside, but churn-after-migration ("job done, cancel me") is a real risk. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to a handful of gyms in weeks; short trial-to-paid. |
| Defensibility | 10 | 4/10 | Thin. Gateways or SocialHub could bolt this on. Moat is speed, vertical focus, and accumulated activation-copy that converts — copyable by month 12. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can wire gateway + WhatsApp APIs and someone who understands Brazilian SMB billing behavior and Procon norms.

### Key assumptions to validate (3–5)

1. **Assumption:** Small gym/clinic owners will pay R$199/mo for activation-as-a-service rather than muddle through the gateway's free API. **How to test:** 30 owner interviews + a pre-sell landing page with a "we finish your migration" offer; target ≥8 paid pilots.
2. **Assumption:** AI-sequenced WhatsApp nudges lift mandate adhesion meaningfully above the ~40% self-serve stall (toward the 70%+ well-migrated benchmark). **How to test:** run one real gym's non-authorizer cohort through the sequence; measure lift vs. their prior manual chase.
3. **Assumption:** Merchants won't churn the moment migration is "done." **How to test:** track pilot retention past month 2; if they cancel after the base is migrated, reposition around ongoing revoke-save + new-signup mandate flow.
4. **Assumption:** A gateway (Asaas/Woovi) will refer rather than clone. **How to test:** pitch a marketplace/referral deal early; read their appetite.

### Risk flags

1. **Defensibility / platform dependency:** Gateways own the rail and could ship the campaign layer themselves; SocialHub already sells adjacent. Win on vertical focus + speed or get squeezed.
2. **Churn-after-migration:** The core job (migrate the base) is finite. Recurring value must come from revoke-save + new-signup mandates, or ACV collapses after year one.
3. **Regulatory:** Consent, revocation, and anti-abusive-billing rules are live and enforced (Procon). Get the consent trail and save-flow honest, or the compliance angle becomes a liability.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Brazilian payments/SMB-billing domain advisor
Time to revenue:        6–10 weeks (pre-sold pilots)
Capital to launch:      R$25–40k ($5–7K)
Top 3 assumptions to validate first:
  1. Owners pay R$199/mo for done-for-you activation — 30 interviews + pre-sell, target 8 paid pilots
  2. AI nudges lift adhesion above the ~40% self-serve stall — run one gym's non-authorizer cohort, measure lift
  3. Merchants don't churn once migration is done — track pilot retention past month 2
Kill criteria:
  - Abandon if <8 of 30 interviewed owners will pre-pay for a migration-done service
  - Abandon if AI sequence fails to beat the owner's own manual chase on adhesion in a live pilot
  - Abandon if a major gateway ships an equivalent activation-campaign layer before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Compile a list of 40 independent Brazilian gyms/clinics with WhatsApp-reachable owners. Build a one-page PT-BR pre-sell offer: "We'll migrate your paying roster onto PIX Automático — you pay when 60% are on mandates."
- **Day 3–4:** Send personalized WhatsApp + Loom to all 40. Book calls. On each call, ask: current default rate, migration % so far, what they'd pay to finish it.
- **Day 5:** Decide go / no-go on a **falsifiable** bar — **≥8 owners verbally commit to a paid pilot (or leave a deposit).** Below that, the activation pain isn't worth a product; the gateway's free API is "good enough" and this is a feature, not a company.
