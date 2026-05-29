---
title: "Recupera — failed-payment recovery desk for Brazil SMBs"
slug: brazil-recurring-payment-recovery
date: 2026-05-29
category: FinTech / Brazil
complexity: Medium
score: 73
verdict: GO
confidence: Medium
oneLiner: "Recupera wins back the failed gym, school, and SaaS subscription charges Brazilian dunning tools quietly write off."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, AI-agent, Pix-native, SMB, Multilingual, Brazil]
axes:
  problem: 16
  demand: 11
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# Recupera

## 1. One-liner

Recupera wins back the failed gym, school, and SaaS subscription charges Brazilian dunning tools quietly write off.

## 2. Trend signal — why now?

Brazil just got its first reliable recurring auto-debit rail. **Pix Automático launched June 16, 2025** — pre-authorized recurring Pix debits on top of a network of 150M+ Pix users. Until then, every subscription business in Brazil was stuck collecting recurring revenue through two leaky pipes: credit cards (low penetration, recurring-charge decline rates estimated at 15–25% — worse than the US) and boleto (manual, friction every cycle, non-payment rates that can exceed 20–30% in some segments). Both bleed revenue every billing run.

The recovery side is primitive. Brazilian gateways — Asaas, Iugu, Vindi, Pagar.me, Galax Pay, Cobre Fácil — ship a "régua de cobrança" (a fixed-schedule reminder sequence: retry on day X, email/SMS on day Y). It's a dumb checkbox feature, not a product. There's no intelligent retry timing, no message optimization, and crucially **no automated migration of a failing card/boleto payer onto Pix Automático**, which is the single highest-leverage recovery action that now exists and didn't 12 months ago.

Meanwhile the entire dedicated-dunning category — Churn Buster, Stunning, Churnkey, Gravy — is US-built, Stripe/Recurly/Braintree-centric, priced in USD at $50–300+/mo, and English-only. None of them touch boleto or Pix. The richest playbook in the world for fighting involuntary churn has zero presence on Brazilian rails.

Provenance:
  - Signal 1 (demand): Brazilian subscription SMBs suffer chronic inadimplência — recurring card declines ~15–25%, boleto non-payment 20–30%, recovery done by manual WhatsApp/phone; native gateway dunning is generic fixed-schedule reminders — https://www.matera.com/blog/post/what-is-pix-automatico — 2025
  - Signal 2 (feasibility): Pix Automático launched 16 Jun 2025, giving the first pre-authorized recurring debit rail on a 150M+ user network — the recovery action (migrate failing payer to auto-debit) that didn't exist a year ago — https://www.ebanx.com/en/business/pix-automatico-recurring-payments-brazil/ — 2025
  - Signal 3 (economic): The funded dunning category (Churn Buster, Stunning, Churnkey, Gravy) is entirely Stripe/USD/English; no standalone intelligent dunning product serves Brazilian rails (Asaas/Iugu/Vindi bundle only basic régua de cobrança) — https://www.ebanx.com/en/business/pix-automatico-recurring-payments-brazil/ — 2025
  Category: Platform shift

## 3. The opportunity

Involuntary churn is the cleanest problem in SaaS: the customer *wants* to pay and *intends* to stay — the money just didn't move. Recovered revenue is almost pure margin. In the US, an entire category exists to claw it back and proves businesses happily pay 20–30% of recovered MRR for it.

Brazil has the worse version of the problem (higher decline rates, boleto friction, lower card penetration) and almost none of the solution. The incumbents fall into two camps, both weak:

- **US dunning tools** (Churn Buster, Stunning, Churnkey): excellent playbooks, but they only speak Stripe and English. They will not build Iugu/Asaas/Pix-Automático integrations for a market they don't understand and can't sell into.
- **Brazilian gateways** (Asaas, Iugu, Vindi): own the payment connection but treat recovery as a free bundled "régua de cobrança" — fixed retry days, canned reminders, no intelligence, no Pix-Automático migration flow. It's a feature they don't invest in because it's not their business model.

The wedge: an AI-first recovery desk that plugs into the Brazilian gateways, applies the US dunning playbook *localized to Brazilian rails*, and — the part nobody else does — automatically nudges failing card/boleto payers to authorize Pix Automático so the *next* charge doesn't fail either. Recover this month's money, fix next month's leak.

## 4. Target market

- **Primary customer:** Brazilian subscription SMBs with R$50k–R$2M/month recurring revenue — academias (gyms), private schools and cursos, clubs/associations, subscription-box (assinatura) businesses, and small B2B SaaS — running billing through Asaas, Iugu, Vindi, or Pagar.me, with 1–20 staff and no dedicated billing-ops person.
- **Why they buy:** "Toda virada de mês perco 20% das cobranças e fico no WhatsApp atrás de aluno que não pagou." Every cycle a fifth of charges fail and the owner or secretary spends hours manually chasing. Much of it gets written off. Recovered money is margin they thought was gone.
- **Rough TAM reasoning:** Brazil has tens of thousands of academias alone (a large, fragmented fitness market), plus thousands of private schools, cursos, clubs, and a growing assinatura/SaaS layer. A serviceable beachhead of 30–50k subscription SMBs on the major gateways is plenty for a sub-$5M ARR business.
- **Why now for them:** Pix Automático gives them, for the first time, a recovery action that actually sticks — moving a chronically-failing payer onto auto-debit instead of re-chasing the same broken card every month. The rail is live in 2025–2026; the tooling to exploit it isn't.

## 5. Product sketch (MVP)

- One-click connect to the customer's Brazilian gateway (start with Asaas + Iugu — popular with SMBs/MEIs and API-friendly).
- Auto-detect failed recurring charges (card declines, unpaid boletos) the moment they happen.
- AI-optimized retry schedule — timing tuned to decline reason and payer history, not a fixed day-3/day-7 rule.
- Multichannel recovery sequences in Brazilian Portuguese over WhatsApp (primary), SMS, and email, with messages drafted/tuned per situation rather than one canned template.
- **Pix Automático migration flow:** a one-tap WhatsApp link inviting the failing payer to authorize recurring Pix auto-debit, so the next cycle doesn't fail.
- Recovery dashboard: revenue recovered this month, recovery rate, R$ at risk, and which payers migrated to Pix Automático.
- Simple boleto re-issue / Pix-copia-e-cola fallback inside the same WhatsApp thread for payers who won't authorize auto-debit.

## 6. AI angle — what's load-bearing

Two places AI does real work. First, **retry-and-message optimization**: choosing *when* to retry and *what* to say to each payer based on decline reason, payer history, channel, and time-of-day — the difference between a 25% and a 40% recovery rate, and exactly what the dumb régua de cobrança can't do. Second, **conversational recovery in Portuguese over WhatsApp**: handling the back-and-forth ("não tenho o cartão agora", "manda o boleto", "como autorizo o Pix?") and walking the payer to either a successful charge or a Pix Automático authorization, without a human in the loop. Remove the AI and you're back to a fixed reminder schedule plus a person on WhatsApp — i.e. the status quo that's losing the money.

## 7. Localization angle

This *is* the localization play — that's the whole moat. It's unbuildable as a generic global product:

- **Payment rails:** boleto, Pix copia-e-cola, and Pix Automático authorization flows — none of which the US dunning tools touch.
- **Gateways:** Asaas, Iugu, Vindi, Pagar.me integrations — the Brazilian billing stack, not Stripe.
- **Language/channel:** Brazilian Portuguese, WhatsApp-first (the default business channel in Brazil), not email-first.
- **Pricing:** an R$-denominated tier (e.g. R$197/mo) lands where a US tool's $99/mo + USD friction never will for a small academia.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** hybrid. A flat platform tier (R$197–R$697/mo by recurring-revenue band) *plus* a success fee on recovered revenue (e.g. 10–15% of recovered MRR). The flat tier covers infra; the success fee aligns incentives and is an easy yes because it's a cut of money they'd otherwise lose.
- **ACV:** ~R$8,000–R$12,000/year blended (≈ $1,600–$2,400) — a mid-size academia recovering a few thousand reais/month easily justifies it.
- **Rough math to $1M ARR (~R$5.5M):** ~600 customers × ~R$9,200 ACV. Achievable inside the academia + cursos beachhead.
- **Rough math to $5M ARR:** ~2,800–3,200 customers, or fewer if the success-fee share grows with larger subscription bases; expand beyond gyms/schools into assinatura and SMB SaaS, and add a second-gateway and Pix-Automático-direct connection.
- **Expansion path:** success fee scales automatically with the customer's billing volume; add tiers for analytics, churn-prediction (catch the card about to expire), and a "cobrança ativa" outbound mode.

## 9. Go-to-market wedge — first 100 customers

- **Gateway-marketplace + co-sell:** Asaas and Iugu have app marketplaces and partner programs; a recovery app that increases *their* processed volume is something they want listed. Get listed, then co-sell into their SMB base.
- **Academia ERP and influencer channel:** the Brazilian gym world has tight communities and consultants (Pacto/Tecnofit ecosystems, fitness-business influencers on Instagram/YouTube). Sponsor/partner with 3–5 academia-business creators who already preach about inadimplência; offer a revenue-share. Gym owners feel this pain weekly.
- **Cold outbound off public directories:** scrape academia and curso directories (Google Maps, gateway public client lists, fitness associations), send a personalized WhatsApp/Loom: "conectei uma academia parecida com a sua e recuperamos R$X em 30 dias — quer rodar de graça no seu primeiro mês?" Free first-month pilot; pay only the success fee. The pilot *is* the proof — you show recovered reais before they pay anything.
- **ReclameAqui / forum mining:** owners publicly complain about inadimplência and gateway dunning; reach out directly.

## 10. Build complexity — justification

Medium. Off-the-shelf: LLM APIs for message/retry optimization, WhatsApp Business API, standard web stack. Custom work is the gateway integrations (Asaas/Iugu APIs — documented but each different), the Pix Automático authorization flow (newer, evolving across banks), and the recovery state machine. A pair can ship a credible v1 on one gateway in ~10–12 weeks; the harder part is operational reliability (you're touching people's money flows) and keeping pace with Pix Automático's rollout across banks.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Payment messaging/recovery is legal; must respect LGPD + Pix Automático authorization consent rules. |
| Ethical — no harm / dark patterns | ✅ | Recovering charges customers authorized; avoid aggressive collections tone — keep it service-grade. |
| Market exists (evidence above) | ✅ | Chronic inadimplência, funded US analog category, live new rail. |
| 1–5 person team can build this | ✅ | Pair ships v1 on one gateway in ~12 weeks. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + cloud; main cost is build time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire monthly money leak; owners already burn hours chasing it. Not 17+ only because many tolerate it as a cost of doing business. |
| Demand evidence | 15 | 11/15 | Strong structural signals (decline rates, funded US category, live rail) but customer voice is forum-level, not 10 crisp verbatim quotes. Capped honestly. |
| Build feasibility | 15 | 11/15 | Pair in ~12 weeks, but gateway integrations + evolving Pix Automático flow + money-touching reliability add real work. |
| Distribution clarity | 15 | 12/15 | Gateway marketplaces, academia influencer channel, success-fee pilot are concrete; conversion math still unproven. |
| Revenue mechanics | 15 | 12/15 | Success-fee-on-recovered-money is an easy yes; ACV reasonable; expansion built-in. Depends on hitting recovery rates. |
| Time to first revenue | 10 | 7/10 | Free-pilot-then-success-fee can close in weeks once one gateway integration is live; the integration is the gate. |
| Defensibility | 10 | 4/10 | Execution + rail-specific integration depth + recovery-data flywheel; but a gateway could upgrade its régua de cobrança, and it's copyable. |
| **Total** | **100** | **73/100** | |

## 13. Qualitative modifiers

### Founder-fit tags
`technical-heavy` (gateway + Pix Automático + WhatsApp integrations, reliability) · `sales-heavy` (gateway co-sell + academia channel relationships). Brazil-local founder or strong Brazilian operator partner is close to mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** Subscription SMBs will pay a 10–15% success fee on recovered revenue. **How to test:** offer 20 academias a free-first-month pilot, show recovered R$, see how many convert to paid.
2. **Assumption:** AI-optimized retry + WhatsApp recovery beats the gateway's régua de cobrança by a meaningful margin (e.g. +10pp recovery rate). **How to test:** run head-to-head on 10 accounts, measure recovery rate delta.
3. **Assumption:** Failing payers will actually authorize Pix Automático when nudged. **How to test:** measure authorization conversion in the pilot — this is the durability of the whole pitch.
4. **Assumption:** Gateways will list/co-sell rather than clone. **How to test:** apply to Asaas/Iugu partner programs; gauge response.

### Risk flags

1. **Platform dependency:** built on gateway APIs + Pix Automático; a gateway upgrading its native dunning or restricting API access could squeeze the wedge. Mitigate by multi-gateway support and owning the recovery-data layer.
2. **Market timing:** Pix Automático adoption across banks and consumer willingness to authorize auto-debit is still ramping in 2026 — if authorization rates stay low, the "fix next month" pitch weakens (you fall back to plain dunning).
3. **Regulatory:** LGPD + Pix Automático consent rules govern messaging and auto-debit authorization; sloppy handling = legal and reputational risk.

## 14. Structured verdict

```
Score:                  73/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian technical founder (or strong BR operator partner) with payments/fintech sense
Time to revenue:        8–12 weeks (after first gateway integration; success-fee pilot closes fast)
Capital to launch:      $5–10K (R$25–50K) — mostly build time
Top 3 assumptions to validate first:
  1. SMBs pay 10–15% of recovered MRR — free-pilot 20 academias, measure conversion
  2. AI dunning beats régua de cobrança by ≥10pp recovery rate — head-to-head on 10 accounts
  3. Failing payers authorize Pix Automático when nudged — measure auth conversion in pilot
Kill criteria:
  - Abandon if <10pp recovery-rate lift over native régua de cobrança across first 10 pilots
  - Abandon if Pix Automático authorization conversion stays <15% (kills the durable wedge) AND plain dunning lift is marginal
  - Abandon if a major gateway ships intelligent AI dunning + Pix-migration natively before v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Interview 15 academia/curso owners on Brazilian fitness/business forums and WhatsApp groups — get exact failed-charge %, hours spent chasing, and what they'd pay for recovered money. Confirm the manual-WhatsApp-chase status quo.
- **Day 3–4:** Stand up a manual "concierge" recovery on 3 friendly academias using their gateway data — hand-run optimized retries + WhatsApp recovery + one Pix Automático authorization nudge. No product, just operator + spreadsheet.
- **Day 5:** Decide go/no-go on a falsifiable bar: across the 3 concierge accounts, did we recover ≥15pp more than their gateway's régua de cobrança baseline AND get ≥1-in-5 failing payers to authorize Pix Automático? If yes, build the Asaas integration. If no, the wedge isn't real — stop.
