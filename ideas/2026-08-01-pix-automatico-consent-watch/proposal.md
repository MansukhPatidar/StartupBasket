---
title: "ConsentWatch — Pix Automático consent sentry for Brazil"
slug: pix-automatico-consent-watch
date: 2026-08-01
category: FinTech / Brazil-SMB — Subscription & Mensalidade Businesses Billing on Pix Automático
complexity: Low
score: 75
verdict: GO
confidence: Medium
oneLiner: "Tells a Brazilian subscription business which Pix Automático customers stopped being billable, while the money is still recoverable."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Brazil, Pix-native, Compliance-driven, SMB, AI-agent, Solo-builder, Revenue-recovery]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ConsentWatch

## 1. One-liner

Tells a Brazilian subscription business which Pix Automático customers stopped being billable, while the money is still recoverable.

## 2. Trend signal — why now?

Brazil just force-migrated an entire country's recurring billing onto a new rail, and nobody built the tooling for the way it breaks.

The Central Bank launched Pix Automático in June 2025. Then it stopped being optional: a BCB/CMN resolution published 25 September 2025 made interbank automatic debit run **mandatorily** through Pix Automático from **13 October 2025**, with institutions given until **1 January 2026** to adapt existing contracts and debit authorizations ([CNN Brasil](https://www.cnnbrasil.com.br/economia/macroeconomia/pix-automatico-sera-obrigatorio-em-debitos-entre-bancos-a-partir-de-outubro/), [MixVale](https://www.mixvale.com.br/2025/09/26/banco-central-torna-pix-automatico-obrigatorio-em-debitos-interbancarios-para-empresas-a-partir-de-outubro/)). Gyms, schools and insurers billing across banks got moved whether they wanted it or not.

The volume is real and compounding. EBANX — which says it processes **38% of all Pix Automático transactions in Brazil** — reports active enrollments growing at a **177% average monthly rate** between June 2025 and June 2026, transaction volume **161% monthly**, and that **64% of Pix Automático users are brand-new subscribers** to the platforms they're paying ([PR Newswire / EBANX, 11 June 2026](https://www.prnewswire.com/apac/news-releases/more-than-60-of-pix-automatico-users-are-brand-new-subscribers-to-digital-platforms-ebanx-data-shows-302797489.html)). PagBrasil's Q1 2026 data shows transactions **+182%** and revenue **+170%** quarter-over-quarter, with one coffee-subscription merchant reporting a **25.2% churn reduction** and subscription costs **50% lower than credit card** ([PagBrasil](https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/)).

Here's the part the celebration articles skip. This rail fails in ways credit cards never did, and the failures are **silent**:

1. **A cancelled authorization is unrecoverable.** When a payer kills the consent in their bank app, the merchant gets a `PIX_AUTOMATIC_RECURRING_AUTHORIZATION_CANCELLED` event and that's it — to keep billing, "a new Pix Automático authorization will need to be created," which means dragging the customer back through a fresh bank-app approval ([Asaas developer docs](https://docs.asaas.com/docs/fluxos-de-webhook)). There is no "update your card" equivalent.
2. **The payer sets a maximum value, and breaching it kills the charge quietly.** If a charge exceeds the payer-configured ceiling, "o pagamento não será agendado" — it simply is not scheduled ([BCB participant FAQ](https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf), [Stone](https://ajuda.stone.com.br/pix/pix-automatico)). Every annual price increase silently detonates a slice of the book.
3. **Consent can die before it ever lives.** Authorizations sit in awaiting-approval and expire or get refused if the payer never completes the bank-app step. As one Brazilian implementation guide puts it, the authorization journey "acontece uma vez por cliente, mas define o sucesso da operação inteira — se a UX é ruim, o usuário desiste no meio e a recorrência nunca começa" ([FWC Tecnologia](https://fwctecnologia.com/blog/post/pix-automatico-apps-recorrencia-sem-cartao-2026)).
4. **Cancellation is two-sided and merchants only see one side.** Cancelling properly requires action in *both* the provider's platform and the bank app — and "mesmo após o cancelamento no prestador, o Pix automático continua ativo no banco se não for cancelado lá" ([Kirvano help center](https://help.kirvano.com/hc/central-de-ajuda/articles/1770043282-cancelamento-de-assinatura-via-pix-automatico)). The reverse leak — cancelled at the bank, still "active" in the merchant's CRM — is the expensive one.

Meanwhile every dunning tool on earth is built for the wrong failure mode. Stripe Revenue Recovery, [Paddle Retain](https://www.paddle.com/retain), [Churn Buster](https://churnbuster.io/) — all of them retry cards and chase card updates. None of that logic maps onto a consent object that cannot be retried into existence.

Provenance:
  - Signal 1 (demand): Pix Automático mandatory for interbank automatic debit from 13 Oct 2025, institutions adapted by 1 Jan 2026 — forced migration of gyms/schools/insurers — https://www.cnnbrasil.com.br/economia/macroeconomia/pix-automatico-sera-obrigatorio-em-debitos-entre-bancos-a-partir-de-outubro/ — 26 Sep 2025
  - Signal 2 (feasibility): Full authorization-lifecycle webhook events now exposed by PSPs (CREATED / ACTIVATED / REFUSED / EXPIRED / CANCELLED), making consent state externally observable — https://docs.asaas.com/docs/fluxos-de-webhook — accessed 1 Aug 2026
  - Signal 3 (economic): EBANX reports 177% avg monthly growth in active enrollments and 38% market share; PagBrasil reports +182% transactions Q4'25→Q1'26 — money is moving onto this rail fast — https://www.prnewswire.com/apac/news-releases/more-than-60-of-pix-automatico-users-are-brand-new-subscribers-to-digital-platforms-ebanx-data-shows-302797489.html — 11 Jun 2026
  - Signal 4 (gap): Payer-set maximum value silently blocks scheduling; cancelled consent is unrecoverable and requires brand-new authorization — https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf — accessed 1 Aug 2026
  Category: Platform shift

## 3. The opportunity

A new payment rail created a new asset class — the **recurring consent** — and nobody is managing it as an asset.

Every merchant on Pix Automático now holds a portfolio of authorization objects. Each one is a live permission slip that can expire, get refused, get cancelled in a bank app the merchant can't see into, or get functionally neutered by a payer-set ceiling that's now below the price. When one dies, **billing stops silently**. There is no decline code that shows up in a report anyone reads, no "card expiring soon" email, no retry that fixes it.

The PSPs — Asaas, Vindi, iugu, Pagar.me, EBANX, PagBrasil — do a genuinely good job of the rail: they move money, they fire webhooks, they charge 0.8–1.5% MDR. But their job ends at transaction execution. They emit `AUTHORIZATION_CANCELLED` as an event; they do not run the campaign to win that customer back through a second bank-app approval. That's not a knock on them — it's simply not the layer they operate at, exactly as Stripe emits `invoice.payment_failed` and a whole dunning industry exists on top.

The vertical systems are worse positioned than they look. Pacto, Tecnofit, Nextfit and Cloud Gym all declare Pix Automático support — but "supports the payment method" and "manages consent decay across your book" are different products. Their roadmaps are consumed by scheduling, access control and CRM. A gym owner using Pacto still cannot answer the question that matters: *which 40 of my 600 members will silently stop paying next month, and what do I do about each one?*

The 10× is that this is a **known-state problem with a deadline**. Unlike card dunning, where you're guessing whether a retry will land, consent state is deterministic and observable via webhook. You know exactly which authorizations are dead, dying, or ceiling-blocked. The only reason merchants lose the money is that nobody is watching the portfolio and nobody is running the recovery play in the window where it still works.

## 4. Target market

**Primary customer:** The finance/ops person (often the owner, often "financeiro" of one or two people) at a Brazilian recurring-revenue business with **200–5,000 active subscribers** and **R$40K–R$800K monthly recurring billing**. Concretely: independent gyms and boxes de CrossFit, private schools and cursos, clínicas de odontologia and estética with plan-based patients, condomínio administrators, small insurance brokers, and Brazilian micro-SaaS/infoproduct businesses on Hotmart-adjacent stacks. They bill on Asaas, Vindi, iugu or Pagar.me and manage members in Pacto, Tecnofit, Nextfit or a spreadsheet.

**Why they buy:** Because the money is quantifiable and they can't see it. Brazilian fitness-sector reporting puts boleto-era default at 15–25%, dropping to 3–5% under well-implemented recurring debit, and notes that a small gym with 18% default and an R$119 average ticket "perde mais de R$ 20.000 em caixa por trimestre" from unpaid tuition alone ([Pacto](https://sistemapacto.com.br/pagamento-recorrente)). Pix Automático is supposed to fix that — and it does, right up until consent decay quietly re-opens the leak in a form their old dunning habits don't catch. The pitch lands in one sentence: *you migrated to Pix Automático to stop chasing payments, and now you're losing subscribers to a cancellation you never saw.*

**Rough TAM reasoning:** Brazil has roughly 41,332 active gyms catalogued as of May 2025 per ACAD/HFA data, with other sector panoramas counting 60,000+ CNPJs and projecting 70,000 by 2027 ([Jornal da USP](https://jornal.usp.br/noticias/brasil-pode-chegar-a-70-mil-academias-ate-2027-redes-sociais-reforcam-cultura-fitness-e-padroes-corporais/)). Gyms alone are a five-figure count of candidate businesses. Add private schools, clinics, condomínio administrators and subscription commerce and the serviceable set is plausibly 100K+ Brazilian businesses billing recurrently — of which I only need the slice with enough subscribers that a dashboard beats eyeballing. Call the realistic beachhead 15,000–25,000 businesses. At R$300–900/mo that's a market comfortably north of R$100M/year — far more than I need for a R$1–5M ARR outcome, and far too small and too local to attract a US dunning incumbent.

**Why now for them:** They were migrated by regulation, not by choice, between October 2025 and January 2026. Their first annual price adjustment on the new rail — the one that trips the payer's maximum-value ceiling en masse — is landing across 2026. Most of them have not yet had the quarter where they discover the leak. The ones who have are already searching for the answer.

## 5. Product sketch (MVP)

- **Consent portfolio view** — every active authorization in one table with status, payer ceiling, current charge amount, headroom, and days-to-expiry. The single screen that answers "what's about to stop paying."
- **Ceiling-breach forecast** — enter a planned price increase, get the exact list of subscribers whose payer-set maximum is below the new amount, before you send the increase, not after billing fails.
- **Silent-death alerts** — real-time notification when an authorization is refused, expires, or is cancelled in the payer's bank app, routed to WhatsApp and email with the subscriber's name and the revenue at risk.
- **Re-consent campaigns** — because cancelled authorizations can't be revived, the product generates and sends the new-authorization request through WhatsApp with a message written for that specific customer and reason, then tracks whether they completed the bank-app approval.
- **Recovery worklist** — dead and dying consents ranked by recoverable monthly revenue, so a one-person finance team works the top 20 instead of all 300.
- **Pre-notification compliance tracker** — variable-value charges require the payer be notified at least 2 business days ahead; the product tracks that this happened and flags charges at risk of not being scheduled.
- **Leak report** — monthly PDF quantifying revenue lost to consent decay and revenue recovered, in reais. This is the artifact that renews the subscription.
- **Read-only connectors** for Asaas, Vindi, iugu and Pagar.me — the merchant keeps their PSP, keeps their MDR, changes nothing about how money moves.

## 6. AI angle — what's load-bearing

Strip the AI out and you still have a useful alerting dashboard — so let me be precise about where AI is actually doing work rather than decorating.

**The re-consent message is the load-bearing part.** Recovering a cancelled Pix Automático authorization is *harder* than recovering a failed card, because you're not asking someone to paste a new number — you're asking them to open their banking app and re-approve a recurring debit they deliberately or accidentally killed. That message has to be written differently for a member who cancelled after a price increase, one whose ceiling was breached without them intending to cancel, one who never completed the initial approval, and one whose consent expired on a finishDate nobody tracked. Reason × segment × tone × the specific business, in Portuguese, at the volume of hundreds per month — that's generation work, and merchants demonstrably don't do it by hand. The Brazilian implementation literature reports 60–75% migration acceptance "quando o desconto é claro" ([Forja de Sistemas](https://forjadesistemas.com.br/blog/pix-automatico-recorrencia-saas-proprio-2026/)) — clarity of message is the variable that moves the number, and it's the variable a one-person financeiro has no time to optimize.

**Second: reconciling messy merchant reality.** The subscriber in Pacto, the payer in the PSP, and the CPF on the authorization frequently don't match cleanly — nicknames, family members paying for each other, stale records. Fuzzy identity resolution across those sources is what makes the worklist trustworthy instead of noise.

**Third: triage.** Ranking which dead consents are worth chasing, and classifying *why* each one died from the event trail, so the operator gets a prioritized list rather than a raw event dump.

Honest assessment: this is AI as the recovery engine on top of a deterministic detection engine. The detection — the part that finds the money — is plain webhook state machinery, and I'd rather have that be boring and correct than clever.

## 7. Localization angle

This is not a localization angle. This is a **Brazil-only product by construction** — which is the whole point.

Pix Automático exists nowhere else. The authorization object, the payer-set maximum value, the two-business-day pre-notification rule for variable charges, the up-to-three-retries-within-seven-days behaviour, the bank-app-side cancellation that merchants can't see — all of it is Banco Central regulation specific to one country. A US dunning company cannot port Retain into this; the failure modes don't map onto their data model at all.

Everything downstream is local too: pricing in reais at R$300–900/mo where a $99 US tool would be mispriced; recovery messaging over WhatsApp because that is where Brazilian SMBs actually reach customers; Portuguese throughout; and integration with the four PSPs and four gym systems that matter in Brazil and nowhere else.

The eventual expansion path isn't geographic, it's regulatory — India's e-mandate/UPI Autopay and Europe's SEPA-with-open-banking have structurally similar consent objects. But that's a year-three conversation, and I'd rather own consent recovery in Brazil than be mediocre in three countries.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Three tiers by active-consent count. **R$297/mo** up to 500 active authorizations, **R$697/mo** up to 2,000, **R$1,497/mo** up to 8,000. Annual plans at ~17% discount. No revenue share — I looked hard at taking 15% of recovered revenue and rejected it: attribution fights with the merchant ("they would have renewed anyway") poison the relationship, and flat SaaS is far easier to sell to a Brazilian financeiro who wants a predictable line item.
- **ACV:** Blended ~R$7,000/year (~US$1,250) assuming the mix lands mid-tier.
- **Rough math to R$1M ARR (~US$180K):** 143 customers at R$697/mo. That is roughly 0.35% of Brazil's catalogued gyms — before counting schools, clinics or condomínios. Reachable.
- **Rough math to R$5M ARR (~US$900K):** ~600 customers at a blended R$700/mo, or ~420 with mix shifted toward the R$1,497 tier. Requires two things to be true: that a second vertical beyond fitness converts at similar rates, and that the PSP-partnership channel (below) produces referrals at scale rather than one-off deals.
- **Path to $1M ARR in USD (~R$5.5M):** ~650 customers blended. This is the honest ceiling of the Brazil-only, SMB-only version — a real bootstrapped business, not a venture outcome, which is exactly the target.
- **Expansion path:** ACV grows three ways. Consent count grows as the merchant grows, moving them up tiers automatically. Multi-unit gym chains and school groups buy per-location. And the natural upsell is outbound recovery volume — merchants who see the leak report will pay for higher WhatsApp send allowances during price-increase season.

Cost side is friendly: read-only webhook ingestion plus WhatsApp Business API sends plus LLM generation for recovery messages. Gross margin should sit comfortably above 80% once WhatsApp conversation costs are passed through in the tier allowances.

## 9. Go-to-market wedge — first 100 customers

The unfair advantage here is that **the pain is quantifiable before the sale**, and the prospect list is public.

1. **The free Consent Leak Audit, sold via one number.** Build a read-only audit: merchant connects their Asaas/Vindi/iugu account with a read-only key, and within ten minutes gets a report saying "R$14,300/mo of your recurring revenue sits on authorizations that are dead, expiring within 60 days, or ceiling-blocked below your current price." That report *is* the sales pitch — it's a specific number in reais, from their own data, that they did not previously know. Convert the audit to paid at the point where they want the recovery campaigns, not just the diagnosis. This is the entire top of funnel and everything below feeds it.

2. **Scrape and work the gym list — it's enumerable.** ACAD Brasil directories, Gympass/Wellhub and TotalPass partner listings, and Google Maps by city give a named, addressable list of tens of thousands of Brazilian gyms with owner contact details. Target the 200–2,000-member independents in São Paulo, Rio, Belo Horizonte, Curitiba and Porto Alegre first — big enough to feel the leak, small enough to have no analyst. Personalized WhatsApp outreach (not email — this is Brazil) offering the free audit. At a 2,000-prospect first pass, a 6–8% audit-acceptance rate is ~130 audits, and audits convert to paid far better than cold demos because the number does the arguing. This alone can produce the first 40–60 customers.

3. **PSP and vertical-system partnerships — the leverage channel.** Asaas, Vindi and iugu all emit the authorization webhooks and none of them monetize recovery. I'm not a competitor; I make their rail stickier and reduce their churn. Pitch a co-marketing listing in their app marketplaces and a referral fee. Same play with Pacto, Tecnofit and Nextfit, who have declared Pix Automático support but have no consent-recovery module and no roadmap room to build one. Three signed partnerships is a durable inbound channel; even one moves the needle.

4. **Own the search term nobody owns yet.** Publish the definitive Portuguese-language operator guide to Pix Automático consent failure — what each webhook event means, why a cancelled authorization can't be revived, how the payer's maximum value silently blocks your price increase. Merchants hitting this problem in 2026 are searching in Portuguese and finding PSP marketing copy, not answers. This is slow relative to channels 1–2, but it's what makes channel 1 inbound by month 9.

5. **Contadores and accounting offices as a wedge into schools and clinics.** Brazilian SMBs route financial decisions through their contador. A referral arrangement with 20–30 accounting offices serving recurring-revenue clients puts the audit in front of exactly the right businesses with a trusted introduction attached.

The first 100 is channels 1 + 2, run as a two-month sprint by one person. That's the part I'd bet on.

## 10. Build complexity — justification

**Low**, bordering on the top of Low. Everything load-bearing is off-the-shelf: read-only REST + webhook integrations with four documented PSP APIs (Asaas, Vindi, iugu, Pagar.me — all publicly documented), a state machine over a well-specified set of authorization events, WhatsApp Business API for outbound, and hosted LLM calls for message generation. No custom models, no ML infrastructure, no money movement — critically, **the product never touches funds**, which sidesteps payment-institution licensing entirely and keeps this out of regulated-entity territory.

The genuinely fiddly parts are (a) idempotent webhook handling, since PSPs explicitly warn events may be redelivered on failure, and (b) identity reconciliation between the merchant's member system and the PSP's payer records. Both are engineering discipline, not research.

Realistic estimate: **8–10 weeks to a v1** a design partner can use, for one strong full-stack builder with a second person on Brazilian go-to-market. First PSP integration (Asaas — best docs) in weeks 1–3, portfolio view and alerting weeks 3–6, re-consent campaigns weeks 6–9.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only data access with merchant consent; never touches or holds funds, so no BCB payment-institution authorization required. LGPD applies and is manageable — standard controller/processor terms, data minimization, and the merchant already holds this data. |
| Ethical — no harm / dark patterns | ✅ | One line to be careful about. Helping merchants re-request consent a customer deliberately revoked can shade into harassment. The product must cap re-consent attempts, honour opt-outs, and never obscure that the customer is being asked to re-authorize a recurring debit. Built right, this is legitimate retention; built wrong it's a dark pattern, and that's a product-design commitment, not an afterthought. |
| Market exists (evidence above) | ✅ | Forced regulatory migration, 177% monthly enrollment growth, 41K+ gyms alone, documented failure modes with no tooling. |
| 1–5 person team can build this | ✅ | 8–10 weeks, one to two people, all off-the-shelf. |
| Launchable with <$50K / ₹40L | ✅ | Realistically R$60–100K (~US$11–18K) covering build time, WhatsApp API, LLM inference and hosting. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | Direct, recurring, quantifiable revenue loss — and worse than card churn because it's invisible and unrecoverable without action. Not a full 17–20 because for most merchants today the leak is a slow bleed rather than a fire: they'll survive a quarter without noticing, which is exactly why it goes unsolved, but also why urgency has to be manufactured by the audit rather than felt spontaneously. |
| Demand evidence | 15 | **11**/15 | Strong structural evidence: mandatory migration, hard growth numbers from two independent processors, documented failure modes in BCB and PSP docs, and an entire adjacent industry (Churn Buster, Paddle Retain) proving merchants pay for recovery on the card rail. Held back from 13+ because I could not find direct merchant complaints — Brazilian SMB owners aren't posting about consent decay on Reddit, and I won't invent quotes. The demand is inferred from structure, not yet heard in their own words. That's the single biggest thing the validation sprint must fix. |
| Build feasibility | 15 | **13**/15 | Documented APIs, no custom infra, no fund movement, 8–10 weeks for one to two people. |
| Distribution clarity | 15 | **12**/15 | The free audit producing a number in reais is a genuinely strong wedge, and the gym list is scrapeable and enumerable. Not higher because WhatsApp cold outreach to Brazilian SMBs has real deliverability and trust friction, and the PSP-partnership channel — the one that scales — is unproven and outside my control. |
| Revenue mechanics | 15 | **11**/15 | Pricing benchmarked against what Brazilian SMBs already pay for gym/school systems, and 143 customers to R$1M ARR is clearly achievable. Docked because R$697/mo is a real line item for an independent gym, churn risk is meaningful once the initial leak is plugged (the "we fixed it, why keep paying" problem), and the R$5M-ARR case depends on a second vertical converting like the first. |
| Time to first revenue | 10 | **8**/10 | The audit shortens the sales cycle materially — a prospect sees their own number in ten minutes. Realistic first paying customer 6–8 weeks post-launch, with design partners plausibly paying sooner. |
| Defensibility | 10 | **4**/10 | The weak axis, and I won't dress it up. The detection logic is replicable by any competent Brazilian dev team in a couple of months, and a PSP could ship this natively if it decided consent recovery mattered. What accrues over time: recovery-message performance data across thousands of campaigns (what actually gets a Brazilian to re-approve in their bank app), workflow lock-in with the finance team, and PSP/vertical partnerships that are exclusive-ish in practice. That's an execution-and-speed moat with a modest data flywheel — real, but a 6–12 month head start, not a wall. |
| **Total** | **100** | **75**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can integrate four PSP APIs cleanly and reason about a state machine — but more importantly, someone who understands Brazilian SMB sales and can sell in Portuguese over WhatsApp. A non-Brazilian founder without a local co-founder should not attempt this; the distribution is entirely local-relationship-shaped.

### Key assumptions to validate (3–5)

1. **Assumption:** Consent decay is materially large — at least 3–5% of active authorizations per quarter die silently or become ceiling-blocked. **How to test:** Get read-only API access from 5 friendly merchants with 500+ subscribers each and measure actual authorization mortality and ceiling headroom across their real books. This is the load-bearing assumption; if the leak is 0.5%, there is no product.
2. **Assumption:** Merchants don't already know about the leak and will pay to see it. **How to test:** Run the audit on those 5 merchants and watch the reaction. If they say "yeah, our PSP dashboard already shows me that" — the product is a feature, not a company.
3. **Assumption:** Re-consent campaigns actually work — a meaningful share of customers will complete a fresh bank-app authorization when asked well. **How to test:** Run one manual campaign of 100 dead consents for a design partner and measure completion. Below 10% and the recovery value proposition collapses to mere alerting, which is worth far less.
4. **Assumption:** R$697/mo is payable by an independent gym or school. **How to test:** 30 pricing conversations with owners in the target band, quoting the number directly rather than asking what they'd pay.
5. **Assumption:** PSPs will co-market rather than build it themselves. **How to test:** Direct partnership conversations with Asaas and Vindi in month one. Their reaction is also the clearest early read on competitive risk.

### Risk flags

1. **Platform dependency (high):** The entire product sits on PSP webhook access and Pix Automático's regulatory design. If BCB changes consent rules — say, making authorizations auto-renew or letting merchants revive cancelled consents — a chunk of the value evaporates overnight. Mitigate by spreading across four PSPs and staying close to BCB rule changes.
2. **Incumbent absorption (high):** Any of Asaas, Vindi or iugu could ship consent recovery as a native feature. They have the data already. My read is they won't prioritize it soon — their roadmaps are rail-and-margin focused and recovery is a services-shaped problem — but this is the most likely way the idea dies. Speed and partnership-before-competition are the only real defences.
3. **Market timing (medium):** Possibly slightly early. Merchants migrated between Oct 2025 and Jan 2026; many haven't yet had the quarter where the leak becomes visible. Being 12 months early in a market this fast-growing is survivable, but it means more education spend than the model assumes.
4. **Ethical/regulatory drift (medium):** Aggressive re-consent outreach could attract Procon complaints or WhatsApp Business API sanctions for spam. Hard caps on attempts and clean opt-out handling are non-negotiable product constraints, not nice-to-haves.
5. **Retention paradox (medium):** Once the leak is plugged and the book is clean, the monthly value proposition weakens. Counter by making the product continuous — ongoing price-increase forecasting and new-subscriber consent monitoring — rather than a one-time cleanup.

## 14. Structured verdict

```
Score:                  75/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder with a Brazilian co-founder or first hire owning
                        Portuguese-language SMB sales; payments/fintech familiarity helpful
                        but not required
Time to revenue:        6–8 weeks post-launch; ~4 months from zero to first paid customer
Capital to launch:      R$60–100K (US$11–18K)
Top 3 assumptions to validate first:
  1. Consent mortality is ≥3-5% per quarter — measure directly across 5 real merchant books
     via read-only PSP API access before writing product code
  2. Merchants can't already see this — run the audit and watch whether they say
     "my PSP dashboard shows that already"
  3. Re-consent campaigns convert above 10% — run one manual 100-customer campaign
     for a design partner and measure bank-app completion
Kill criteria:
  - Abandon if measured consent mortality across 5 merchant books is below 2% per quarter —
    the leak is too small to sell against
  - Abandon if re-consent campaign completion is below 8% after two properly-written
    attempts — recovery is the value prop, and without it this is a R$97/mo alerting tool
  - Abandon if Asaas or Vindi ships native consent-recovery with campaigns before v1 ships
  - Abandon if fewer than 8 of 40 audited merchants convert to paid within 60 days
```

## 15. Next step — 1-week validation sprint

The whole week is aimed at one falsifiable number: **how much revenue actually dies in the consent layer.**

- **Day 1–2:** Recruit 5 Brazilian merchants with 500+ active Pix Automático subscribers — reachable through gym-owner Facebook/WhatsApp groups and ACAD contacts. Get read-only API keys. Offer the audit free and permanently in exchange.
- **Day 3–4:** Pull their full authorization books via the PSP APIs. Compute, per merchant: percentage of authorizations cancelled/refused/expired in the trailing quarter, percentage where the payer's maximum value sits within 10% of the current charge amount (the ceiling-breach exposure), and total monthly revenue attached to each bucket. No product, no UI — a script and a spreadsheet.
- **Day 5:** Present each merchant a one-page number: "R$X per month of your recurring revenue is sitting on dead or at-risk consents." Then ask for R$697/mo for the tool that finds and recovers it, and try to take a card or a signed pre-commitment on the call.

**Go/no-go, measured not vibed:** Proceed only if (a) median consent-decay-plus-ceiling-exposure across the 5 books exceeds **3% of monthly recurring revenue**, and (b) at least **2 of 5** merchants commit money or sign a paid pilot on the spot. Anything less and the leak is too small or too invisible to build a company on — and I'd rather learn that in a week than in six months.
