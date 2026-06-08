---
title: "Autoriza — consent concierge for Brazil's Pix Automático billers"
slug: pix-automatico-consent-concierge
date: 2026-06-09
category: FinTech / Brazil-SMB
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Drives your existing subscribers to tap 'authorize' in their bank app so Pix Automático actually collects."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Compliance-driven, SMB, Pix-native, AI-agent, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [sales-heavy, technical-heavy]
featured: false
---

# Autoriza — consent concierge for Brazil's Pix Automático billers

## 1. One-liner

Autoriza drives a recurring biller's existing subscribers to tap "authorize" in their bank app so Pix Automático actually collects the money.

## 2. Trend signal — why now?

Brazil's Central Bank turned on Pix Automático — bank-app-authorized recurring Pix debits — in June 2025 and pushed it into full force through 2026, with the adequação deadline for billers closing January 1, 2026 and consumer-authorization rollout running through April. Every business that bills monthly (gyms, schools, SaaS, condos, professionals) is being told to migrate off old débito automático and card-on-file onto the new consent model.

Here's the catch that makes this an opportunity instead of a press release: **it isn't working yet.** Per Canaltech, Pix Automático hit just 599,000 transactions in its best month (December 2025) — against 2.7 billion for Chave Pix and 2.9 billion for dynamic QR. The rails exist; nobody is converting onto them. Febraban itself warns that early-migration authorization efficiency may land at only **70–80%**, "podendo gerar impactos expressivos na inadimplência e receita da empresa." That missing 20–30% is the entire pitch.

The rails are commoditized and ready (PagBrasil, EBANX, dLocal, PPRO, Asaas all shipped Pix Automático integrations). What's missing is the **conversion layer** that gets a biller's actual customer list to complete the one-time authorization. That's the gap.

Provenance:
  - Signal 1 (demand): Pix Automático adoption stalled — 599k transactions in best month vs billions for other Pix flows; Febraban warns 70–80% auth efficiency hits revenue — https://canaltech.com.br/mercado/por-que-o-pix-automatico-ainda-nao-decolou-entenda-os-motivos-da-baixa-adesao/ — 2026-06
  - Signal 2 (feasibility): Pix Automático live, no-code/API rails shipped by PagBrasil, EBANX, dLocal, PPRO; consent journeys defined by BACEN; WhatsApp Business API mature in Brazil — https://www.pagbrasil.com/blog/pix/how-automatic-pix-works/ — 2026-06
  - Signal 3 (economic): BACEN mandate forces every recurring biller to migrate by deadline; processors (Boku, Paymentwall, dLocal, EBANX) racing licenses into a $346B recurring-payments market; LatAm subscription growth 9–13% — https://www.pymnts.com/news/payments-innovation/2025/pix-automatico-debut-opens-brazils-recurring-payments-market-to-millions/ — 2026-06
  Category: Regulatory arbitrage

## 3. The opportunity

A regulator created a forced migration with a hard deadline and a measurable failure mode: 20–30% of your paying subscribers don't complete the new bank-app authorization, so your recurring revenue silently bleeds. The payment processors solved the *plumbing* — they'll happily debit a Pix once consent exists. None of them own the *campaign* that produces the consent.

The incumbents (Asaas, Vindi, Iugu, Cobre Fácil) compete on rails and pay-per-collection fees. Their interface is a billing dashboard, not a conversion machine. Asaas already draws complaints that "the interface is cluttered" and support is unhelpful. Getting 800 gym members to each open Banco do Brasil / Nubank / Caixa, find the authorization, and tap approve — across dozens of bank apps each with a different flow — is a behavior-change problem, not a payments problem. That's a Stripe-checkout-optimization-shaped wedge: sit on top of the licensed rails and own the single number that matters — **authorization completion rate**.

10× better than the status quo (a biller blasting one generic WhatsApp and hoping): per-customer authorization tracking, bank-specific tap-by-tap instructions, AI follow-up in Portuguese on the channel each customer actually answers, and a live dashboard of "342/800 authorized, R$ 41k of MRR still unsecured."

## 4. Target market

- **Primary customer:** Owner-operators of Brazilian recurring-revenue SMBs with 150–3,000 active subscribers and R$ 30k–500k MRR — independent gyms/CrossFit boxes, private schools and cursinhos, condo administrators, small B2B SaaS, and subscription product sellers. The person who today exports a spreadsheet and chases late payers on WhatsApp.
- **Why they buy:** "Tenho 800 alunos no cartão e no boleto e agora preciso que cada um autorize o Pix Automático no banco — se 200 não fizerem, perco R$ 40 mil por mês." They feel the 20–30% leak directly in revenue, monthly, with a regulator-set deadline.
- **Rough TAM reasoning:** Brazil has hundreds of thousands of recurring billers in this band — ~35k+ gyms alone, tens of thousands of private schools, condos, and a fast-growing SaaS/creator subscription base (LatAm subscription growth 9–13%). Even 8,000 paying SMBs at ~R$ 350/mo is ~R$ 34M ARR.
- **Why now for them:** The migration is happening in 2026 whether they're ready or not. Card-on-file and old débito automático are being deprecated; if they don't run a consent campaign, their MRR degrades silently. The pain has a date on it.

## 5. Product sketch (MVP)

- Import the existing subscriber list (CSV, or sync from Asaas/Vindi/Iugu) and reconcile who has and hasn't authorized Pix Automático.
- One-tap authorization links per subscriber, with **bank-specific** step-by-step instructions (Nubank flow ≠ Caixa flow ≠ Itaú flow) shown as short visual guides.
- WhatsApp-first outreach sequences in Brazilian Portuguese: pre-deadline nudge, deadline-day push, post-fail recovery — each personalized with the customer's name, plan, and value.
- AI follow-up agent that answers "como autorizo?" / "é seguro?" objections in chat and re-sends the right bank instructions, escalating only stuck cases to the owner.
- Live authorization dashboard: % authorized, R$ of MRR secured vs at-risk, per-cohort completion, and a ranked "chase these 40 first" list.
- Automatic re-attempt logic: when a Pix Automático debit fails or is revoked, trigger a re-authorization micro-campaign instead of silent churn.

## 6. AI angle — what's load-bearing

Two places AI does real work, not decoration. First, the **conversational authorization agent**: thousands of "não consegui", "onde clico?", "no Nubank não aparece" messages, in messy Portuguese, that would otherwise land on the owner's phone — the agent resolves the common ones, detects which bank the customer uses, and serves the exact flow. Second, **channel-and-timing optimization**: predicting which subscribers won't authorize without a human touch and which message/channel/time converts them, so the campaign focuses effort where the revenue leak is. Remove the AI and you're back to a billing dashboard plus a human call center — which is exactly the status quo that produces 70–80% completion. The AI is what moves the number.

## 7. Localization angle

This is localization-as-the-whole-product. It only exists because of a Brazil-specific regulatory event (Pix Automático / BACEN consent journeys), a Brazil-specific channel (WhatsApp is the default business comms layer), Brazil-specific bank UX (each major bank's authorization flow differs), and Brazil-specific behavior (cultural distrust of auto-debit — "deixar vencer alguns boletos é tão comum," per an FGV economist). Pricing is in reais (R$ 199–699/mo bands work where $49 wouldn't). A generic global subscription tool cannot touch this; the moat is fluency in the local mess.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by active subscriber count. R$ 199/mo (≤300 subs), R$ 399/mo (≤1,000), R$ 699/mo (≤3,000) + WhatsApp message pass-through. Optional success fee: a small % of recovered at-risk MRR during the initial migration campaign.
- **ACV:** ~R$ 4,800/yr (~US$ 870) blended.
- **Rough math to $1M ARR (~R$ 5.5M):** ~1,150 customers at R$ 400/mo. Achievable inside the gym + school niches alone.
- **Rough math to $5M ARR:** ~5,500–6,000 paying SMBs, or fewer with success-fee upside and expansion into condo admins and SaaS. Requires becoming the default "ongoing consent health" tool, not just a one-time migration — see expansion.
- **Expansion path:** Migration campaign is the wedge; the recurring product is **consent health monitoring** — re-authorization on revocations, win-back on failed debits, and dunning-on-Pix. ACV grows as subscriber counts grow and as Pix Automático becomes the dominant rail.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the gym/box directories.** Brazil has public listings of CrossFit boxes, studios, and academias (plus Instagram bio-link networks). Pull ~2,000 with WhatsApp numbers, send a personalized 40-second Loom-style video in Portuguese: "vi que você cobra mensalidade — quantos dos seus alunos já autorizaram o Pix Automático? Provavelmente uns 30% ainda não." Lead with the leak.
- **Partner with the gym/school management software resellers and accountants (contadores).** Contadores already field "preciso me adequar ao Pix Automático" from every SMB client; offer a revenue share for referring the consent campaign they don't want to run.
- **Hijack the deadline noise.** Run targeted content + WhatsApp groups around "migração Pix Automático" search spikes; the regulator is doing the demand-gen for free. Cold-DM owners posting confusion in fitness/school business Facebook and WhatsApp communities.
- **Co-sell with one mid-tier PSP.** Processors (Asaas-adjacent, dLocal resellers) want completed authorizations because they earn on collected volume; a "we drive the consent, you keep the rails" partnership puts Autoriza in front of their SMB base.

## 10. Build complexity — justification

Medium. The rails are off-the-shelf — Autoriza integrates with existing Pix Automático providers' APIs and the WhatsApp Business API rather than touching regulated payment infrastructure itself. Real work is the per-bank authorization-flow library, the list-reconciliation/sync with incumbent billers, and the conversational agent. No custom ML, no hardware, no license required (the licensed PSP carries that). A two-person team ships a credible v1 in ~3–4 months, with the first niche (gyms) live faster.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Sits atop licensed PSPs; consent is initiated by the customer in their own bank app per BACEN rules. Must respect anti-harassment cobrança law. |
| Ethical — no harm / dark patterns | ✅ | Helps customers complete a consent *they choose*; no coercion. Messaging must avoid constrangimento (legally required anyway). |
| Market exists (evidence above) | ✅ | Forced migration + documented 20–30% completion gap + measurable revenue loss. |
| 1–5 person team can build this | ✅ | 2 people, ~3–4 months. |
| Launchable with <$50K / ₹40L | ✅ | Off-the-shelf APIs, no inventory, low infra. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Direct, monthly, quantifiable revenue leak with a regulator-set deadline. Just short of hair-on-fire because some billers stay on cards/boleto longer. |
| Demand evidence | 15 | 12/20→12/15 | Multiple hard signals: stalled adoption numbers, Febraban's 70–80% warning, incumbent complaints, mandate. Slightly thin on verbatim *SMB* voice (vs. industry/exec voice). |
| Build feasibility | 15 | 11/15 | Off-the-shelf rails + WhatsApp; per-bank flow library and incumbent sync are the real effort. |
| Distribution clarity | 15 | 11/15 | Named niches (gyms/schools), scrapeable lists, regulator-driven demand. Conversion math still to prove. |
| Revenue mechanics | 15 | 12/15 | R$ pricing fits wallets; clear ACV; success-fee upside. Churn risk once migration is "done" pulls it below top band. |
| Time to first revenue | 10 | 7/10 | Deadline urgency helps; still needs a working per-bank flow before the first paid campaign. |
| Defensibility | 10 | 5/10 | Execution moat: the per-bank flow library and conversion data compound, but the rails are commodity and incumbents could bolt this on. 6–12 month head start, not a fortress. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`sales-heavy` · `technical-heavy` — needs someone who can hustle Brazilian SMB niches on WhatsApp *and* wire up PSP + WhatsApp APIs and a per-bank flow library. Portuguese fluency and local ground game are non-negotiable.

### Key assumptions to validate (3–5)

1. **Assumption:** SMB billers will pay a separate tool for consent conversion rather than waiting for their incumbical biller (Asaas/Vindi) to add it free. **How to test:** 30 owner interviews + 10 paid pilot offers in the gym niche; measure willingness at R$ 399/mo.
2. **Assumption:** Autoriza can lift authorization completion meaningfully above the 70–80% baseline. **How to test:** Run one real migration campaign for a single gym (800 subs) and measure completion vs. their prior generic blast.
3. **Assumption:** The per-bank authorization flows are stable enough to maintain. **How to test:** Map the top 6 banks' flows; track how often they change over 8 weeks.
4. **Assumption:** Incumbents won't ship an equivalent campaign module within the migration window. **How to test:** Audit Asaas/Vindi/Iugu roadmaps and current Pix Automático onboarding UX.

### Risk flags

1. **Platform dependency:** Reliant on PSP APIs and WhatsApp Business API policy; a pricing or policy change hits margin and deliverability.
2. **Market timing / shrinking window:** This is partly a one-time migration wave. If it converts faster than expected, the recurring "consent health" product must carry the business — and that's less urgent. Too slow and SMBs procrastinate past caring.
3. **Incumbent absorption:** Asaas/Vindi have the merchant relationship and could bundle a "campanha de autorização" as a free feature, compressing pricing.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical+sales founder, Portuguese-native, fintech/SMB ground game
Time to revenue:        8–12 weeks (deadline urgency compresses the sales cycle)
Capital to launch:      R$ 25–60k (~US$ 5–11k)
Top 3 assumptions to validate first:
  1. SMBs pay for a standalone consent-conversion tool — 30 interviews + 10 paid pilots in gyms
  2. Autoriza beats the 70–80% completion baseline — one real 800-subscriber campaign
  3. Incumbents won't bundle this free within the window — roadmap + onboarding-UX audit
Kill criteria:
  - Abandon if <2 of 10 pilot gyms convert to paid after a completed migration campaign
  - Abandon if completion lift over a generic blast is <5 percentage points in the first real campaign
  - Abandon if Asaas or Vindi ships a free equivalent campaign module before v1 launch
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-screen mock of the authorization dashboard + the per-bank instruction flow for the top 3 banks. Pull a list of 200 independent gyms/boxes with WhatsApp numbers.
- **Day 3–4:** Send 60 personalized WhatsApp/Loom pitches leading with "quantos dos seus alunos já autorizaram o Pix Automático?" Book calls. In parallel, manually run a free mini-campaign for ONE willing gym's unauthorized subscribers and measure completion.
- **Day 5:** Go/no-go. **Go** if ≥6 of 60 reply with interest AND the single manual campaign lifts authorization completion by ≥5 points over the gym's prior generic outreach. Falsifiable: if the campaign doesn't move the number, the AI/conversion thesis is dead and this is just another billing dashboard.
