---
title: "TrocaBase — migration drive for Brazil's card-billed subscriptions"
slug: pix-recurring-migration-campaign
date: 2026-08-12
category: FinTech / Brazil subscription businesses
complexity: Low
score: 72
verdict: GO
confidence: Medium
oneLiner: "Walks a Brazilian subscription base off credit cards onto Pix Automático one cohort at a time, without breaking trust."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Pix-native, Portuguese, WhatsApp-first, SMB, Recurring-billing, Brazil, Solo-builder]
axes:
  problem: 15
  demand: 13
  build: 12
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 2
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# TrocaBase — the migration drive for Brazil's card-billed subscription bases

## 1. One-liner

Walks a Brazilian subscription base off credit cards onto Pix Automático one cohort at a time, without breaking trust.

## 2. Trend signal — why now?

Pix Automático went live and is compounding. PagBrasil's Q1 2026 data shows transaction volume up **182%** and processed revenue up **170%** quarter-over-quarter, with new and recurring user growth nearly identical (+181% / +177%) — meaning this isn't first-time experimentation, it's retained behaviour. EBANX projects subscriptions and transaction volume growing **34% and 41% per month** through May 2026.

The economics are proven at the merchant level. Fazenda Jotacê, a specialty coffee subscription, ran Automatic Pix from July 2025 to May 2026: **19%** of subscription transactions, **25.2% churn reduction**, **21.6%** fewer billing errors, and **50% lower subscription costs** versus credit cards. Roughly 60% of Brazilians hold no credit card at all, so the rail also expands the addressable base rather than just cutting fees.

Here's the part nobody has tooling for. **There is no automatic migration** — Pix Automático operates independently of the old automatic-debit system, so every existing subscriber has to individually authorize. Practitioners report migration **costs R$18,000–R$45,000 and takes 6–10 weeks**, with acceptance landing at **60–75% when the discount is clear**. The failure mode is well known: migrating the whole base at once breaks trust; gradual migration with a clear incentive works. And the metric that decides the outcome — the **adhesion rate between soliciting and authorizing**, tracked in 7/14/30-day cohorts with reminders on a second channel — is exactly the thing merchants are currently tracking in spreadsheets.

The rails are commoditized and the campaign layer is empty. Stripe (via EBANX since August 2025), dLocal, Gr4vy, Asaas, Iugu, Pluggy and PagBrasil all carry Pix Automático. They sell the pipe. None of them run the migration.

```
Provenance:
  - Signal 1 (Demand): Pix Automático migration is manual, costs R$18-45K and 6-10 weeks, acceptance 60-75%, and adhesion rate must be tracked in 7/14/30-day cohorts — https://forjadesistemas.com.br/blog/pix-automatico-recorrencia-saas-proprio-2026/ — 2026-08-12
  - Signal 2 (Feasibility): Pix Automático is live across Stripe/EBANX, dLocal, Gr4vy, Asaas, Iugu and Pluggy with documented consent APIs, retry windows and error codes (AM04 etc.) — https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf — 2026-08-12
  - Signal 3 (Economic): Q1 2026 volume +182%, revenue +170% QoQ; documented merchant case shows 25.2% churn reduction and 50% lower cost vs cards — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ — 2026-08-12
  Category: Platform shift
```

## 3. The opportunity

A new payment rail landed that is cheaper, churns less, and reaches the 60% of Brazilians without a credit card. Every subscription business in Brazil wants to be on it. But the rail was deliberately built with consumer consent at the centre — the customer authorizes once, explicitly, from inside their own banking app — which means **the merchant cannot migrate anyone silently**. The entire installed base has to be asked, one by one, and convinced.

That converts a payments upgrade into a **marketing campaign with a deadline and a conversion funnel**. It is closer to a dunning/lifecycle problem than an integration problem, and it sits in the gap between two vendors: the PSP handles the authorization API but has no opinion about who to ask, when, on what channel, with what discount; the CRM/marketing tool can send the messages but knows nothing about authorization state, retry windows, or which subscriber is still on a card.

The incumbents' answer today is passive: re-present the authorization invite on the next invoice and hope. That converts the easy tail and leaves the rest. A focused tool that segments the base by value and risk, sequences the ask across email and WhatsApp, times the discount, and reports adhesion by cohort should beat passive re-prompting by a wide margin — and the merchant can measure the difference in one billing cycle.

The disruption target isn't a software incumbent. It's the **R$18,000–45,000 consultancy project**. That money is currently paid to agencies and dev shops to run a one-time campaign by hand. A product does it for a fraction, faster, and with better instrumentation.

## 4. Target market

- **Primary customer:** Head of Growth, CFO or founder at a Brazilian subscription business billing **R$30,000–R$2M/month** recurring, predominantly on credit cards, with a mostly-Brazilian customer base (>70%). Think SaaS, streaming/content, box subscriptions, online education, gyms with real billing systems, insurance-adjacent memberships. Practitioners put the sensible migration threshold at R$30K/month recurring — below that the effort doesn't pay back.
- **Why they buy:** In their words, the problem is that migrating the whole base at once breaks trust, and they don't know which customers to ask first or what to offer. They're also carrying involuntary churn from expired and reissued cards — the exact failure Pix Automático removes. Every month they delay is a month of paying card fees on revenue that could be settling at Pix cost.
- **Rough TAM reasoning:** Brazil has tens of thousands of businesses with genuine recurring billing at or above R$30K/month across SaaS, media, education, fitness and subscription commerce. I don't have a verified count, so I'll size from the channel instead: the PSP partner ecosystems (Asaas, Iugu, PagBrasil, Vindi and the Stripe-Brazil cohort) each carry thousands of recurring merchants. Reaching **1,500–3,000 qualified accounts** through partner and outbound channels is realistic; that's enough for the ARR target below and I don't need the true TAM to be larger.
- **Why now for them:** The rail is live and compounding at 34–41% monthly. Their competitors are already offering Pix Automático at checkout. Card costs are roughly double. The migration is a one-time cost they will pay in 2026 either way — the only question is whether they pay R$18–45K to an agency or a fraction of that to a tool.

## 5. Product sketch (MVP)

- **Base import and segmentation** — pull the active subscriber list from the PSP (Asaas, Iugu, PagBrasil, Stripe/EBANX) and segment by MRR, tenure, payment-failure history and bank, so the merchant knows exactly who to ask first and who to leave until last.
- **Wave planner** — build the migration as sequenced cohorts rather than one blast, with a recommended order (start with high-tenure, low-risk subscribers; keep high-value accounts for a later, softer wave) and a per-wave discount recommendation.
- **Two-channel ask sequence** — email plus WhatsApp, in Portuguese, carrying the authorization link, with reminders fired at 7/14/30 days to subscribers who were solicited but never authorized.
- **Adhesion dashboard** — the core screen: solicited vs authorized, by cohort, by wave, by channel, with the conversion curve over the 7/14/30-day windows. This is the number the merchant is currently keeping in a spreadsheet.
- **Card-fallback guardrail** — never cancels a card mandate until Pix authorization is confirmed active, and flags subscribers who authorized but then failed on insufficient balance (AM04) so they get moved back rather than lost.
- **Discount ledger** — tracks what incentive was promised to whom and when it expires, so the finance team can see the true cost of the migration against the card fees saved.
- **Payback report** — a one-page view of fees saved and involuntary churn avoided versus discounts granted, which is the artifact the buyer forwards to their CFO.

## 6. AI angle — what's load-bearing

Honest answer: **AI is assistive here, not load-bearing.** This product would exist without it. That's a deliberate trade — the value is in the campaign mechanics, the state machine around authorization, and the cohort instrumentation, none of which need a model.

Where AI earns its place is in message generation and timing: writing and localizing the ask sequence in Portuguese for each segment (a ten-year subscriber gets different copy than a three-month one), and recommending the discount level per cohort based on observed adhesion in earlier waves. Useful, but a merchant could hand-write six templates and get most of the way there.

I'm flagging this rather than dressing it up. It costs the idea points on defensibility, and I've scored it accordingly. If the AI angle were the whole pitch, this would be a PASS.

## 7. Localization angle

This is **Brazil-only by construction**, which is the entire point. Pix Automático is a Banco Central rail that exists nowhere else. The consent journey runs through Brazilian banking apps. The messaging must be Portuguese and WhatsApp-first, because WhatsApp is where Brazilian customers actually read things. The buyer's mental model — boleto, cartão, agora Pix — is local.

There's no generic global version of this product, and a US or EU competitor has no reason to build it. That's protection against big-company entry, though not against local ones (see Risk flags).

Pricing has to be in reais at Brazilian SaaS levels. R$499–R$2,500/month works; the equivalent USD pricing of a comparable US lifecycle tool would not.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by base size. **R$499/mo** (up to 2,000 subscribers), **R$1,200/mo** (up to 10,000), **R$2,500/mo** (10,000+). Plus an optional success fee of ~R$1 per successfully authorized migration, capped per wave — this aligns with the outcome and is easy to justify against an R$18–45K agency quote.
- **ACV:** ~R$14,000/year (≈$2,600) blended, before success fees.
- **Rough math to $1M ARR:** ~400 customers at R$1,200/mo average × 12 = R$5.8M ≈ $1.05M ARR.
- **Rough math to $5M ARR:** Needs ~1,800–2,000 active accounts, which is at the top of my realistic channel estimate — so $5M requires either expanding beyond migration into ongoing Pix recurring operations (see below) or expanding the definition of the customer down-market. I'd call $1–2M ARR the honest target and $5M the stretch that depends on the expansion path working.
- **Expansion path:** This is the critical question, because **migration is a one-time job** and a pure migration tool churns the moment the campaign ends. The product has to graduate into ongoing Pix Automático operations: failed-payment recovery inside the 7-day retry window, re-authorization when customers switch banks, adhesion tracking for *new* subscribers at signup, and cohort reporting on Pix vs card churn. If that second act doesn't land, this is a services business with a tool attached, not SaaS. I've scored revenue mechanics down for this reason.

## 9. Go-to-market wedge — first 100 customers

- **PSP partner channel (primary).** Asaas, Iugu, PagBrasil and Vindi all have Pix Automático live and all have merchants stuck mid-migration. They benefit directly — every migrated subscriber is volume on their rail. Approach their partner/marketplace teams with a co-marketing offer and a revenue share. Two signed partners each surfacing the tool to their recurring-merchant base is the fastest path to the first 50 customers.
- **The R$18–45K quote intercept.** Brazilian dev shops and growth agencies are currently quoting these migration projects. Find them via LinkedIn and agency directories, and offer white-label: they keep the client relationship and the services margin, we provide the tooling. Agencies convert fast because it raises their margin on work they've already sold.
- **Outbound to visibly card-only checkouts.** Build a list of Brazilian subscription businesses whose checkout still offers only cartão and boleto — this is directly observable by visiting the page. Roughly 300–500 identifiable targets across SaaS, education and subscription commerce. Send a personalized teardown: here's your checkout, here's what Pix Automático would save you at your visible price point, here's the migration plan. Expect 3–5% reply on a well-researched list of this size.
- **Portuguese-language content on the exact query.** The practitioner posts I sourced this idea from are ranking for "migração Pix Automático" and "Pix Automático SaaS" right now, which tells me merchants are searching these terms. A migration calculator (enter base size and card fees, get payback estimate) is the obvious lead magnet and it doubles as the sales pitch.
- **RD Station / Brazilian SaaS community.** The Brazilian SaaS operator scene is small and concentrated. RD Summit and the associated founder communities put the exact buyer — growth and finance leads at recurring-revenue companies — in one room.

## 10. Build complexity — justification

**Low.** No custom infrastructure. The authorization APIs, consent journeys, retry windows and error codes are documented by Banco Central and exposed by every major PSP. The build is: PSP integrations (start with two, not six), a segmentation and cohort engine, an email/WhatsApp sequencer, and a dashboard. The genuinely fiddly part is the authorization state machine — solicited, authorized, failed, expired, re-authorized — and never cancelling a card mandate before Pix is confirmed live.

A technical pair ships v1 in **8–10 weeks**. First PSP integration is the long pole. WhatsApp Business API adds a week of approval friction.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates on documented Banco Central rails via licensed PSPs. Not a payment institution — never touches funds, only orchestrates consent requests. |
| Ethical — no harm / dark patterns | ✅ | Consent is the product. Guardrails explicitly prevent cancelling card mandates before Pix is confirmed, and the discount ledger keeps promises honest. Must resist pressure to make the ask coercive. |
| Market exists (evidence above) | ✅ | Merchants are paying R$18–45K for this today, by hand. |
| 1–5 person team can build this | ✅ | Technical pair, 8–10 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are two PSP integrations and WhatsApp API. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real and current — every card-billed subscription business in Brazil faces it in 2026, and they're paying real money to solve it. Docked because it's a *project* pain, not a daily one: urgent for two months, then gone. Not hair-on-fire in the recurring sense. |
| Demand evidence | 15 | 13/15 | Strong. Quantified spend (R$18–45K), quantified acceptance (60–75%), quantified market growth (+182% QoQ, 34–41% monthly), documented merchant outcomes (25.2% churn reduction). Multiple independent sources. Missing: direct verbatim complaints from named merchants — practitioner write-ups are the closest I got. |
| Build feasibility | 15 | 12/15 | Off-the-shelf APIs, standard stack, 8–10 weeks for a pair. Docked for PSP integration surface and the authorization state machine, which has real edge cases. |
| Distribution clarity | 15 | 12/15 | PSP partner channel is genuinely strong and incentive-aligned; agency white-label and observable card-only checkouts are concrete lists. Docked because partner deals have their own sales cycle and I can't yet prove the reply rate on outbound. |
| Revenue mechanics | 15 | 10/15 | Pricing is benchmarked against a known R$18–45K alternative, so willingness to pay is real. But $5M ARR needs more accounts than my channel estimate comfortably delivers, and the model depends on the post-migration expansion path landing. Honest 10. |
| Time to first revenue | 10 | 8/10 | Pre-sellable — a merchant mid-migration will pay for a pilot before v1 is complete. Revenue in 4–8 weeks is realistic via the agency channel. |
| Defensibility | 10 | 2/10 | **The weak axis.** No moat. A PSP could ship this as a feature next quarter and give it away to keep merchants on their rail — and they have every incentive to. The migration itself is one-time, so there's no accumulating workflow lock-in unless the expansion path works. Execution speed and a two-year window are the only protection. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can ship PSP integrations *and* close partner deals with Brazilian payment processors. Portuguese fluency and presence in the Brazilian market are close to mandatory — this is not a remote-from-abroad play. A Brazil-based technical founder with fintech relationships is the ideal profile.

### Key assumptions to validate (3–5)

1. **Assumption:** Merchants will pay for the campaign layer rather than accept their PSP's passive re-prompting on the next invoice. **How to test:** Interview 20 Brazilian subscription businesses currently mid-migration. Ask what their adhesion rate is on passive re-prompting. If they don't know the number, they don't feel the pain; if they know it and it's low, they'll buy.
2. **Assumption:** Active campaign management beats passive re-prompting by enough to matter — call it 20+ percentage points of adhesion. **How to test:** Run one migration by hand for a design partner, split the base, passive vs sequenced. Measure the 30-day adhesion delta. This is the whole thesis in one experiment.
3. **Assumption:** At least one major PSP will partner rather than build. **How to test:** Pitch Asaas and Iugu partner teams directly in month one. Their answer tells you whether you have a channel or a competitor.
4. **Assumption:** The post-migration expansion path retains customers past the campaign. **How to test:** With the first 10 customers, track what they do at month four. If they cancel when migration ends, reprice as a project fee and stop calling it SaaS.

### Risk flags

1. **Platform dependency / incumbent absorption (severe):** PSPs own the authorization API, the merchant relationship and the incentive to migrate volume onto their own rail. Any of them can build this as a retention feature and bundle it free. This is the single most likely way the idea dies, and it's why defensibility scored 2.
2. **One-time revenue:** Migration is a project, not a subscription. Without the expansion into ongoing Pix operations, churn is structural at ~4–6 months. Model this honestly from day one.
3. **Market timing — narrow window:** The migration wave is happening in 2026. Businesses that migrate this year won't need to migrate again. Arriving in mid-2027 means the addressable base has already moved and only new-subscriber adhesion remains — a much smaller product.
4. **Regulatory drift:** Banco Central actively iterates on Pix rules. A change to the consent journey (for instance, allowing bulk migration from existing automatic-debit mandates) would remove the core problem overnight. Worth monitoring the BCB Pix roadmap continuously.
5. **Geographic concentration:** Brazil-only, single-rail, single-regulator. No hedge if any of the above turns.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical founder, Portuguese-fluent,
                        with existing PSP or fintech relationships
Time to revenue:        4-8 weeks (pre-sellable to merchants mid-migration)
Capital to launch:      R$40,000-80,000 ($7-15K)
Top 3 assumptions to validate first:
  1. Active campaigns beat passive PSP re-prompting by 20+ points of adhesion
     — split-base test with one design partner
  2. A major PSP partners rather than builds
     — direct pitch to Asaas and Iugu partner teams in month one
  3. Customers retain past the campaign via ongoing Pix operations
     — track first 10 customers at month four
Kill criteria:
  - Abandon if a top-3 PSP ships native migration campaign tooling before v1
  - Abandon if the split-base test shows <15 points of adhesion lift over passive
  - Abandon if 15 of 20 merchant interviews cannot state their current adhesion rate
  - Abandon if month-4 retention on the first 10 customers is below 50%
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the list. Identify 40 Brazilian subscription businesses billing above R$30K/month whose checkout still shows only cartão and boleto — directly observable. Simultaneously, request partner conversations with Asaas and Iugu.
- **Day 3–4:** Interview 20 of them. One question decides everything: *"Of the subscribers you've asked to authorize Pix Automático, what percentage actually authorized?"* Merchants who know the number and hate it are buyers. Merchants who've never measured it are not.
- **Day 5:** Recruit one design partner for a split-base test and get a written quote from a Brazilian agency for a migration project, to confirm the R$18–45K price anchor independently.

**Falsifiable outcome:** Go only if ≥8 of 20 merchants can state their adhesion rate *and* describe it as a problem, **and** at least one agrees to a split-base test, **and** the independent agency quote confirms the price anchor above R$15K. Fewer than 8 who measure it means the pain is theoretical and the campaign layer is a vitamin — stop.
