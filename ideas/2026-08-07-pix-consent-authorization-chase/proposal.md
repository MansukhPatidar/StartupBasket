---
title: "ConsentChase — Pix Automático consent chase for billers"
slug: pix-consent-authorization-chase
date: 2026-08-07
category: FinTech / Brazil-SMB — Gyms, Schools, Clinics and Subscription Operators (200–5,000 Recurring Payers) Migrating Their Base to Pix Automático
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Recovers the subscribers who never opened their bank app to approve your recurring Pix charge."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, SMB, Brazil, Solo-builder, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ConsentChase

## 1. One-liner

Recovers the subscribers who never opened their bank app to approve your recurring Pix charge.

## 2. Trend signal — why now?

Brazil moved its entire recurring-payments rail in eighteen months, and the migration created a failure mode that did not exist before.

Pix Automático launched June 2025. The CMN made it mandatory: new interbank corporate direct-debit contracts had to run on Pix Automático from **13 October 2025**, and existing contracts had until **1 January 2026** to migrate ([CNN Brasil](https://www.cnnbrasil.com.br/economia/macroeconomia/pix-automatico-sera-obrigatorio-em-debitos-entre-bancos-a-partir-de-outubro/)). Schools, energy and telecom companies are named explicitly. Since 1 January 2026 every institution that offered interbank direct debit must support it.

The growth is real, not projected. PagBrasil's Q1 2026 data shows transactions **+182%**, new users **+181%**, recurring users **+177%** and revenue **+170%** quarter-over-quarter versus Q4 2025 ([PagBrasil](https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/)). One coffee subscription merchant saw Pix Automático hit 19% of all subscription transactions and cut churn 25.2%.

Here is the part nobody built for. Under the old boleto or card model, the biller pushed a charge and the customer's inaction meant the charge still landed. Under Pix Automático, **the authorization happens inside the payer's bank app, and it happens first**. If the customer never opens the app, there is no consent, and there is no subscription — not a failed payment, not a dunning event, just silence. One implementation guide puts it plainly: *"se o cliente não abrir o app, não há cobrança"* — if the customer doesn't open the app, there's no charge — and names the new metric directly: *"A taxa de autorização entre solicitar e autorizar é a nova métrica que precisa ser monitorada"* ([FWC Tecnologia](https://fwctecnologia.com/blog/post/pix-automatico-apps-recorrencia-sem-cartao-2026)).

The symmetrical problem sits on the other end. Cancellation is also done in the bank app — *"O cancelamento da autorização é feito diretamente no app do banco do pagador, conforme regras do BACEN"* — and BACEN lets the payer revoke up to 24 hours before the next due date ([Estado de Minas](https://www.em.com.br/emfoco/2026/02/17/banco-central-anuncia-nova-regra-do-pix-automatico-e-clientes-precisam-autorizar-ate-abril/)). The biller's retention window collapsed from "30 days of dunning" to "whatever you notice before the next cycle."

Meanwhile the money at stake per operator is concrete. A 300-student gym on boleto runs 18% inadimplência, loses R$6,426/month to it, and spends R$1,200/month on manual collection; recurring billing drops default to 3–5% and collection cost to R$400 ([Sistema Pacto](https://blog.sistemapacto.com.br/debito-recorrente-academia-quanto-custa-como-implementar-2026/)). Gyms above 500 students on boleto burn **30–60 hours/month** on collection and reconciliation alone. Pix Automático charges cost R$0–0.99 flat versus 2.49–4.19% on recurring cards. The prize for a successful migration is R$4,656/month net for a single mid-size gym. Which means the operator who *half*-migrates — base sent an authorization request, 40% of them never tapped approve — is sitting on the worst of both worlds.

Provenance:
  - Signal 1 (demand): Authorization rate between request and approval named as "the new metric"; customer inaction produces no charge at all; cancellation happens in the bank app outside the biller's view — https://fwctecnologia.com/blog/post/pix-automatico-apps-recorrencia-sem-cartao-2026 — observed 2026-08-07
  - Signal 2 (feasibility): Pix Automático consent lifecycle is exposed to billers as webhook events (REJECTED / REVOKED / CONSUMED) via Open Finance Brasil and PSP APIs (Asaas, PagBrasil), making consent state programmatically readable without bank convênios — https://openfinancebrasil.atlassian.net/wiki/spaces/OF/pages/1053884883/ and https://docs.asaas.com/docs/pix-automatico — observed 2026-08-07
  - Signal 3 (economic): CMN mandate forced interbank corporate direct debit onto Pix Automático (new contracts 13 Oct 2025, existing by 1 Jan 2026); Q1 2026 transactions +182% QoQ; per-gym migration prize R$4,656/month — https://www.cnnbrasil.com.br/economia/macroeconomia/pix-automatico-sera-obrigatorio-em-debitos-entre-bancos-a-partir-de-outubro/ and https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ — observed 2026-08-07
  Category: Platform shift

## 3. The opportunity

Every Brazilian recurring-payments vendor built their recovery product for the card era, where the sequence is **charge → decline → dunning**. Pix Automático inverts it. The sequence is now **consent request → (silence) → no charge ever**. The revenue leak moved upstream of the first transaction, and the entire tooling ecosystem is still standing downstream waiting for a failed payment that will never arrive.

I checked the field carefully, because "Brazilian billing automation" sounds crowded and it is:

- **Raisic** — payment recovery for recurring subscriptions, 15% of each recovered real, native Asaas webhooks, 68% claimed recovery. Explicitly built for **failed payments**. Their own positioning is involuntary-churn recovery after a decline.
- **Kollecta** — AI collections over WhatsApp. Post-default. Pix is a *settlement method* in their flow, not a consent object they track.
- **Avisa, SocialHub, Jota** — WhatsApp dunning rulers (régua de cobrança). All keyed on due dates and overdue balances.
- **Vindi, Iugu, Asaas, PagBrasil** — the PSPs. Vindi does surface revocations: *"sempre que um cliente revoga a autorização no banco, a informação chega automaticamente na plataforma."* That is a **row in a dashboard**. Vindi's own page describes real-time visibility and revocation alerts, and says nothing about reminder automation for customers who haven't yet authorized, or re-engagement workflows for non-authorizers.

So the incumbents split cleanly: PSPs emit consent *state*, dunning tools work overdue *balances*, and the space between — a customer who was asked and didn't answer — belongs to nobody. That customer is invisible to a dunning tool (no invoice is overdue; there's no charge at all) and inert in a PSP dashboard (it's a status field, not a workflow).

The opportunity is to own the consent funnel as a first-class object: **requested → pending → authorized → revoked → recovered**, with an outbound motion attached to every state that isn't "authorized." This is not a better dunning tool. It is the dunning tool for a stage that didn't used to exist.

The second half of the opportunity is that the biller cannot see *why*. A pending consent could be a customer who never got the WhatsApp, a customer whose bank buried the approval screen (Bradesco requires scanning a QR code to confirm), a customer who tapped through and hit a value-limit wall, or a customer who genuinely decided to quit. Those need four different messages. Today the biller sends all four the same "autorize seu Pix" blast, or more commonly sends nothing and writes the customer off.

## 4. Target market

**Primary customer:** The finance or operations lead at a Brazilian subscription business with **200–5,000 recurring payers** — gyms and box CrossFit chains, private schools and cursos, medical and dental clinics with plan-based patients, condominium administrators, ISPs, and subscription e-commerce. Owner-operator or a 1–3 person financial team. Ticket R$80–R$500/month. Typically already on Asaas, Vindi, Iugu or Pagar.me, mid-migration from boleto or card to Pix Automático.

**Why they buy:** They ran the migration campaign, they saw the savings math, and now they're stuck with a base that's partially converted. Every unauthorized customer is a full MRR line item sitting in limbo — not churned, not paying, and not visible in any report they own. Sistema Pacto's numbers say growth from recurring billing accelerates "acima da faixa de 200 alunos ativos," which is exactly where the manual chase stops being feasible. At 500+ students on the old model the finance team already spends 30–60 hours a month on collection; nobody is adding a manual consent chase on top of that.

**Rough TAM reasoning:** Brazil has tens of thousands of gyms alone (Sebrae/PR tracks the sector as one of the world's largest by unit count), plus private schools, clinics and subscription commerce. SEBRAE's Startup Report Brasil 2025 puts 39.1% of innovative Brazilian businesses on SaaS/subscription models. I don't need a precise number: I need ~1,500 operators paying R$300–600/month to clear R$5M+ ARR, out of a base that is plainly six figures of businesses. The constraint is distribution, not market size.

**Why now for them:** The mandate already fired. New contracts moved October 2025, old ones January 2026, and BACEN's April 2026 re-authorization push means a large slice of the country's recurring base has been asked to consent within the last several months. Anyone who ran that campaign has a pending-consent list right now, aging.

## 5. Product sketch (MVP)

- **Consent funnel view** — every payer bucketed as requested / pending / authorized / revoked / recovered, with days-in-state and MRR attached to each bucket. The number the operator has never seen: "R$ 47,300 of your MRR is sitting in unauthorized consents."
- **Pending-consent chase** — automated WhatsApp + email sequence to customers who were asked and haven't approved, with a deep link back into the authorization flow and bank-specific instructions ("no Bradesco, você vai precisar escanear o QR code").
- **Revocation tripwire** — PSP webhook fires on REVOKED, we fire outbound within minutes, not at next failed cycle. BACEN allows revocation up to 24h before due date, so speed is the whole game.
- **Bank-aware messaging** — the approval journey differs per institution. The chase adapts copy and screenshots to the payer's bank instead of sending generic instructions.
- **Reason inference** — AI reads the customer's WhatsApp replies and sorts them into didn't-see-it / couldn't-find-it / hit-a-limit / actually-quitting, routing the first three to fixes and the fourth to a retention offer.
- **Migration cohorts** — authorization rate tracked in 7/14/30-day cohorts per campaign, so the operator learns which message and which channel actually converts consents.
- **One-click PSP connect** — OAuth into Asaas/Vindi/Iugu, read consent events, no code, live in under 15 minutes.
- **Recovered-MRR report** — monthly statement of consents rescued and reais retained, which is the renewal argument.

## 6. AI angle — what's load-bearing

If you strip the AI out, you still have a useful webhook-plus-WhatsApp product — so I want to be honest that the AI here is an amplifier, not the foundation. Where it does real work:

**Reply triage is the load-bearing piece.** A chase sequence to 800 pending consents produces hundreds of free-text WhatsApp replies in Portuguese, most of them ambiguous and many in regional register — *"já fiz isso"*, *"não achei essa opção no meu banco"*, *"não tenho mais interesse"*, *"tá dando erro de limite"*. Sorting those into the four routes at volume is exactly what a cheap LLM is good at and what a rules engine is bad at. Without it, the operator drowns in replies and the product becomes another blast tool they mute.

**Bank-specific instruction generation** is the second piece — assembling correct, current, per-institution approval steps and keeping them fresh as bank apps change, rather than shipping one generic PDF.

The honest framing: the moat is the consent-state model and the PSP integrations. The AI is what makes the chase survivable at 3,000 payers instead of 300.

## 7. Localization angle

This is Brazil-only by construction and that's the point. Pix Automático is a Banco Central instrument with no analog anywhere — the closest global equivalents (SEPA mandates, ACH, UK Direct Debit) don't put consent approval inside the payer's own bank app as the mandatory first step. The product is Portuguese-first, WhatsApp-first (non-negotiable in Brazilian SMB), priced in reais at a tier a 300-student gym signs without a meeting, and its core intelligence is per-bank knowledge of Itaú, Bradesco, Nubank, Caixa, Santander and Banco do Brasil approval flows.

The upside of the constraint: a global billing vendor cannot casually add this, because the value is entirely in local rail mechanics and per-bank UX detail. The downside is honest — no international expansion path. India's e-mandate and UPI Autopay have a structurally similar consent-approval step, so the *playbook* travels even though the product doesn't.

## 8. Business model — path to $1M–$5M ARR

**Pricing:** Tiered by recurring-payer count, because that's what drives both value and message volume.
- Starter (up to 500 payers) — **R$297/month**
- Growth (501–2,000) — **R$597/month**
- Scale (2,001–5,000) — **R$1,197/month**

I'm deliberately not doing Raisic's 15%-of-recovered model. Recovered consents are hard to attribute cleanly — the customer may have authorized anyway — and performance pricing invites an attribution fight every single month. Flat SaaS, benchmarked against the R$4,656/month a single mid-size gym gains from a clean migration. At R$597 the operator is paying roughly 13% of the gain.

**ACV:** ~R$5,400 (blended R$450/month), about **US$1,000**.

**Rough math to R$6M ARR (~US$1.1M):** 1,100 customers × R$450/month × 12 = R$5.94M. That's a bootstrappable number in Brazil, and it's roughly 1,100 operators out of a market of six figures.

**Rough math to R$27M ARR (~US$5M):** ~4,200 customers at a blended R$530, which requires two things to be true: PSP marketplace distribution (Asaas and Vindi app directories) doing real volume, and an upsell tier. That's the stretch case, not the base case.

**Expansion path:** payer-count tiers grow with the customer's own base. Then WhatsApp message volume as a metered add-on. Then the natural adjacency — once we own consent state, voluntary-cancellation retention (offer flows at revocation) is the same data and a bigger budget line.

**Cost note:** WhatsApp Business API template messages are the main variable cost and they're real — a chase across 2,000 payers is a live expense. Gross margin lands in the 70s, not the 90s. Metered overage on the heaviest senders protects it.

## 9. Go-to-market wedge — first 100 customers

1. **Asaas and Vindi app marketplaces — the main channel.** Both run integration directories, both have thousands of Brazilian SMB billers, and neither has a consent-recovery app because neither built one. Ship the Asaas integration first (Raisic proved the webhook path is clean and no-code), list it, and let the PSP's own migration messaging do the qualifying. Target: 30–40 of the first 100 from marketplace inbound.

2. **The gym-software channel.** Pacto, Tecnofit and Nextfit publish migration content and serve thousands of academias — the exact segment where the migration math is loudest and finance teams are 1–2 people. Partner or integrate, and co-market to their installed base. Gyms above 200 active students are the qualifying line their own content already draws. Target: 25–30 customers.

3. **Direct outreach on the pending-consent question.** Scrape gyms, private schools and clinics in São Paulo, Belo Horizonte, Curitiba and Porto Alegre from Google Maps and sector directories. The cold open is one specific question no vendor has asked them: *"quantos dos seus alunos ainda não autorizaram o Pix Automático?"* Most won't know the number, which is the sales pitch. Offer a free consent audit — connect the PSP, get the number and the MRR attached to it, in 15 minutes. The audit *is* the demo. At 2,000 contacts and a conservative 3% conversion that's 60 customers; I'd bank on half that.

4. **Contadores and financial BPOs.** Brazilian accounting firms manage billing for portfolios of 30–200 SMB clients and are already fielding "what do I do about Pix Automático" questions. Ten firms that adopt it across their book deliver clustered accounts at near-zero incremental CAC.

5. **Content on the metric itself.** Rank for *"taxa de autorização Pix Automático"* and *"cliente não autorizou Pix Automático"* — low-competition terms with clear buying intent, because the operator searching that phrase has already discovered the problem and found no product. Slow channel, real compounding, and Brazilian Reddit/forum threads are now heavily cited by LLM answers.

## 10. Build complexity — justification

**Low.** The heavy machinery already exists: PSP consent webhooks are documented and OAuth-accessible (Asaas, Vindi, PagBrasil), WhatsApp Business API is commodity, the LLM triage is a standard classification call. What we build is a state machine over consent events, a sequencing engine, and per-bank instruction content. No models to train, no bank convênios to negotiate — BACEN's design explicitly removed the need for individual bank agreements. A competent pair ships a credible v1 against one PSP in **6–8 weeks**; the second and third PSP integrations are 2 weeks each. The genuinely slow part isn't code, it's assembling accurate per-bank approval instructions and keeping them current — that's content ops, and it's also where the defensibility hides.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operating on the biller's own customer base with existing billing relationship; LGPD applies and is manageable — we're a processor acting on the biller's instruction. WhatsApp outreach must use approved templates and honor opt-out. |
| Ethical — no harm / dark patterns | ✅ | Line to hold: we help customers who *want* the subscription complete an approval step, and we surface genuine cancel intent rather than burying it. Reason inference must route "actually quitting" to a clean exit, not a friction wall. |
| Market exists (evidence above) | ✅ | Mandated rail migration, +182% QoQ volume, quantified per-operator savings, named incumbents in adjacent slots. |
| 1–5 person team can build this | ✅ | Pair, 6–8 weeks to v1 on one PSP. |
| Launchable with <$50K / ₹40L | ✅ | Realistically US$8–15K: WhatsApp API costs, LLM inference, hosting, and the per-bank content build. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Direct MRR sitting in limbo, felt monthly, and currently invisible — operators can't even quantify it. Docked because it's a *new* pain: some operators haven't noticed the leak yet, which makes it an education sale rather than a hair-on-fire one. |
| Demand evidence | 15 | 12/15 | Strong structural evidence — mandate, growth data, quantified savings, the metric named explicitly in implementation guides. Docked because I could not source verbatim operator complaints about unauthorized consents specifically; the pain is inferred from mechanics and adjacent spend, not from a subreddit full of people screaming. That's the honest gap. |
| Build feasibility | 15 | 13/15 | Off-the-shelf everything. Real work is the state machine plus per-bank content ops. |
| Distribution clarity | 15 | 12/15 | PSP marketplaces are a named, concrete channel with a proven precedent (Raisic on Asaas), plus gym-software partners and a genuinely good cold open. Docked because marketplace conversion is unproven for this category and partner deals take longer than cold email. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked against a documented R$4,656/month gain, tiers match wallet. Docked for WhatsApp variable cost compressing margin and for ACV being modest — R$5,400 means the $5M case needs 4,000+ logos, which is a lot of SMB accounts to acquire and retain. |
| Time to first revenue | 10 | 8/10 | The free consent audit converts fast because it produces a number the operator didn't have. Revenue in 4–8 weeks post-launch is realistic; not instant, because the audit-to-paid step needs a billing cycle to prove value. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't dress it up. Raisic or Vindi can add consent-state chasing in a quarter if they decide it matters. The only real moats are per-bank instruction content that compounds, conversion data on which messages actually win consents, and PSP marketplace position. Execution-and-speed moat, nothing more. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can integrate PSP webhooks and WhatsApp cleanly, paired with someone who can work Brazilian SMB sales in Portuguese. Being in Brazil is close to mandatory — the per-bank UX knowledge and the partner conversations both require presence. A foreign founder should not attempt this without a local co-founder.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share of requested consents — call it 20%+ — sits unauthorized after 30 days. **How to test:** run free consent audits on 15 operators across gyms, schools and clinics; pull the actual pending-vs-authorized split from their PSP. This is the single number the whole business rests on, and it's directly measurable in week one.
2. **Assumption:** Operators don't already know this number and can't get it from their PSP. **How to test:** in the same 15 audits, ask before connecting — "what's your authorization rate?" If most answer accurately, the wedge is much weaker than I think.
3. **Assumption:** A chase sequence converts pending consents at a rate worth paying for (target: 25%+ of pending recovered). **How to test:** manually run the sequence for 3 operators over one billing cycle, entirely by hand, before writing product code.
4. **Assumption:** R$597/month clears for a 1,000-payer operator. **How to test:** 20 pricing conversations post-audit, with the recovered-MRR figure on the table.
5. **Assumption:** Asaas/Vindi will list the app and won't build it themselves within 12 months. **How to test:** apply to both marketplaces immediately; read their roadmaps and changelogs for consent-workflow features.

### Risk flags

1. **Platform dependency (severe):** The entire product reads consent state from PSPs. If Asaas or Vindi ships native consent chasing, the standalone case weakens sharply. Mitigation is speed, multi-PSP coverage so no single vendor can cut us off, and pushing toward the retention layer where PSPs are structurally less motivated to play.
2. **Demand evidence is inferred, not overheard:** I have mandate data, growth data and unit economics — I do not have operators saying "I'm losing money to unauthorized consents." The pain is real mechanically but may not yet be *felt* consciously, which turns this into a market-education sale and lengthens the cycle. Assumption 1 and 2 exist precisely to kill or confirm this.
3. **Market timing — the window may be closing:** The mandatory migration wave ran October 2025 through April 2026. If most bases are already converted, the pending-consent pool shrinks to new-customer flow only, which is a much smaller and less urgent product. Ongoing revocations keep it alive but at lower volume. This is the thing I'd want measured before writing code.
4. **WhatsApp channel risk:** Template approval, per-message cost and Meta policy shifts all sit on the critical path. Aggressive chase sequences risk template rejection or number reputation damage. Email-plus-SMS fallback is mandatory, not optional.
5. **Regulatory drift:** BACEN is actively iterating Pix — consent rules, salary-account permissions in July 2026, MED 2.0. Changes could either widen the market or, if BACEN mandates standardized biller-side consent tooling, remove the need entirely.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical founder with a Portuguese-fluent SMB
                        sales partner; fintech/PSP integration experience valuable
Time to revenue:        8–12 weeks (4–8 weeks post-launch to first paid)
Capital to launch:      US$8–15K (R$45,000–80,000)
Top 3 assumptions to validate first:
  1. 20%+ of requested consents sit unauthorized past 30 days — measure directly
     via free consent audits on 15 operators' PSP data
  2. Operators cannot currently see this number — ask all 15 before connecting
  3. A manual chase recovers 25%+ of pending consents — run it by hand for
     3 operators across one full billing cycle before building anything
Kill criteria:
  - Abandon if median pending-consent rate across 15 audited operators is under
    8% of base — the leak is too small to sell against
  - Abandon if manual chase recovers under 15% of pending consents in the
    hand-run pilot — the core mechanic doesn't work
  - Abandon if Asaas or Vindi ships native consent-chasing workflows before v1
    lists on either marketplace
  - Abandon if fewer than 3 of 20 audited operators will commit R$297/month
    after seeing their own recovered-MRR number
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build nothing but a read-only Asaas OAuth script that pulls consent states and outputs one page: pending count, authorized count, MRR attached to pending. Line up 15 operators — gyms, schools, clinics — through gym-software communities and direct outreach in São Paulo and Belo Horizonte.
- **Day 3–4:** Run the free audit live on all 15. Before connecting, ask each one: *"what percentage of your base has authorized?"* Record the guess, then show the real number. The gap between guess and reality is the product thesis, measured directly.
- **Day 5:** Hand-run a chase sequence — WhatsApp, personally written, no automation — against the pending list of the 3 operators with the largest leak. Then put the price on the table: R$297/month to make it automatic.

**Falsifiable outcome:** Go if median pending-consent rate is ≥8% of base, at least 10 of 15 operators materially misjudged their own authorization rate, and ≥3 of the operators shown their number commit to R$297/month. Any of those three missing and this is a VALIDATE at best — most likely a market that hasn't noticed its own leak yet, which is a different and much slower business than the one I want to build.
