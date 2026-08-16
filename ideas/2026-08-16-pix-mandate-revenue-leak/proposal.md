---
title: "MandaTrip — Pix mandate tripwire for Brazilian SMBs"
slug: pix-mandate-revenue-leak
date: 2026-08-16
category: FinTech / Brazil
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the Pix Automático mandates that quietly died before the merchant's next billing run loses the month."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Brazil, Pix-native, SMB, Revenue-recovery, WhatsApp-first, Solo-builder]
axes:
  problem: 16
  demand: 11
  build: 13
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# MandaTrip

## 1. One-liner

Catches the Pix Automático mandates that quietly died before the merchant's next billing run loses the month.

## 2. Trend signal — why now?

Brazil forced an entire category of recurring billing onto a new rail, and the rail has a failure mode nobody has tooled for.

Pix Automático went live June 2025. The Central Bank regulation entered force 13 October 2025, and companies running interbank recurring debit had until **1 January 2026** to migrate off the old débito automático / CNAB 150 flow. That deadline has now passed. Every gym, school, clinic, and subscription business in Brazil that used to collect via bank direct debit is now operating on mandates it does not fully control.

Adoption is compounding fast. PagBrasil's own Q1 2026 data shows transactions +182%, new users +181%, recurring users +177%, revenue +170% quarter-over-quarter. Between July 2025 and May 2026, Automatic Pix accounted for 19% of all subscription transactions. The rail works — that is precisely why the leak matters.

Here is the part that is not in any vendor's marketing page, and it comes straight from the Banco Central's own FAQ for participants:

- **Post-due retries are conditional on the mandate, not on the merchant.** BCB: after a failed settlement, the payer's PSP must make one intraday retry between 18h–21h the same day. Beyond that, "tentativas nos 7 dias subsequentes, por meio de envio de novas ordens, **só serão possíveis se a autorização assim previr**." If the authorization was not provisioned for post-due retries, the merchant gets one same-day attempt and the cycle is gone. That is a setup decision made months earlier, by whoever configured the mandate.
- **When retries are exhausted, the customer sees nothing at all.** BCB: "No PSP pagador, após esgotarem-se as retentativas de liquidação, **não aparecerá nenhuma pendência no app do usuário pagador**." No dunning pressure exists on the payer side. The debt is invisible to the person who owes it.
- **Payment by another means is only discoverable via manual reconciliation.** BCB: "No PSP recebedor, o pagamento por outro meio só poderá ser identificado pelo usuário recebedor, **via conciliação**." Merchants double-charge or fail to close out charges because the rail will not tell them.
- **Cancellation is immediate and happens in the payer's bank app.** BCB: "O cancelamento de uma autorização implica o cancelamento da recorrência... Após o cancelamento da recorrência, o usuário recebedor não pode mais enviar instruções de pagamento para futuros débitos." The merchant is not in the loop of the decision — the churn event happens somewhere the merchant cannot see.
- **A failed charge does not kill the mandate.** BCB 5.3: "A não liquidação de uma cobrança específica não implica o cancelamento da autorização. Ela permanece ativa para cobranças subsequentes." So a live mandate and an unpaid month coexist silently. Nothing in the merchant's dashboard screams.

Add the authorization gap: reported adhesion to Pix Automático in the first 6 months of production was **73% among customers who received the request inside the bank app**. Flip it — roughly a quarter of a migrating merchant's base did not complete authorization. Those customers are not billed and not flagged. They simply stop generating revenue.

Meanwhile the tooling that exists is aimed at the wrong failure. Appmax, Pagou.ai, Malga, and Yuno all sell *retry intelligence* — retry the charge, rotate the acquirer, use AI to pick the moment. That is a card-era product. Under a Pix mandate you frequently cannot retry, because the mandate did not authorize it, or there is no mandate left to charge. Retrying harder does not fix a mandate that is dead, unauthorized, or capped below the invoice amount.

Provenance:
  - Signal 1 (demand): Forced migration off débito automático/CNAB to Pix Automático with a 1 Jan 2026 deadline; regulation in force 13 Oct 2025 — https://www.cora.com.br/blog/pix-fim-do-debito-automatico-com-boletos/ — observed 2026-08-16
  - Signal 2 (feasibility): BCB FAQ for participants defines conditional post-due retries, invisible-to-payer exhaustion, reconciliation-only detection of alternate payment, and immediate in-app cancellation — https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf — observed 2026-08-16
  - Signal 3 (economic): Automatic Pix Q1 2026 growth (+182% transactions, +170% revenue QoQ); 19% of all subscription transactions Jul 2025–May 2026 — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ — observed 2026-08-16
  - Signal 4 (competitive gap): Failed-payment recovery vendors sell card-style retry/dunning, not mandate-state repair — https://y.uno/pt/blog/melhor-plataforma-para-recuperacao-de-pagamentos-falhos-como-a-recuperacao-por-ia-difere-da-logi — observed 2026-08-16
  - Signal 5 (adoption gap): 73% adhesion among customers who received the in-app request — https://www.socialhub.pro/blog/pix-automatico-2026-decreto-bacen-atualizacao/ — observed 2026-08-16
  Category: Regulatory arbitrage

## 3. The opportunity

The Brazilian recurring-payments stack was rebuilt around a rail where **the merchant lost visibility of the customer relationship's payment state**, and nobody has built the instrument panel.

Under cards, a failure was loud and fixable: the charge declined, you retried, you emailed, you asked for a new card. Under Pix Automático, four different things can be wrong and they all look identical from the merchant's side — *money didn't arrive*:

1. The mandate was never authorized (the 27%).
2. The mandate was authorized but capped below the current invoice — the customer set a `valor máximo` months ago and your price went up.
3. The mandate was cancelled or paused in the bank app, silently.
4. The mandate is live but the account had no balance, and post-due retries were never provisioned.

Each has a completely different remedy. Case 2 needs a re-consent request at a higher ceiling. Case 3 needs a win-back before the customer mentally churns. Case 4 needs a human nudge within the 7-day window, because the payer's app is showing them nothing. Case 1 needs a re-authorization campaign that most merchants never ran.

Incumbents conflate all four into "failed payment" and throw retry logic at it. The gateways (Asaas, Iugu, Vindi, Mercado Pago) are payment processors — their job ends at "transaction rejected." They are structurally uninterested in telling a merchant that 400 of their 3,000 mandates are silently unusable, because that reads as their own product failing.

The 10× move is diagnostic, not transactional: read the mandate estate, classify every account into one of the four states *before* the billing run, and drive the specific recovery action for each. This is the difference between "you lost R$ 38,000 last month" and "here are the 214 customers to contact today, in this order, with this message."

## 4. Target market

- **Primary customer:** Owner or financial manager of a Brazilian recurring-revenue SMB with **300–5,000 active subscribers** — independent gyms and boxes, private schools and cursos livres, clinics with plan-based care, condo administrators, ISPs, and subscription box operators. Revenue R$ 150K–3M/year. Typically one person doing "financeiro," often part-time, working in a spreadsheet next to the gateway dashboard.
- **Why they buy:** They migrated because the regulation made them, they do not understand mandate mechanics, and their receipts are down in a way their gateway does not explain. The pain is monthly, arrives on the same day every month, and is denominated in money they already earned. Brazil registered 8.7 million defaulting companies in January 2026, 8.3 million of them micro and small — cash-flow fragility in this segment is not theoretical.
- **Rough TAM reasoning:** Brazil has 178.8 thousand schools (public and private, 2025 Censo Escolar), of which the private network is a meaningful minority; the gym count has nearly tripled in a decade. Add clinics, ISPs, condo admins, and subscription commerce and the population of SMBs running mandate-based recurring billing is comfortably in the low hundreds of thousands. Capturing 1,500 of them at R$ 400/mo is ~R$ 7.2M ARR. This is a healthy bootstrapped business, not a venture outcome — which is exactly the target.
- **Why now for them:** The migration deadline was 1 January 2026. They are now 7+ months into operating a mandate estate they have never audited. The damage has had time to accumulate and become visible in the bank balance, but the cause is still opaque to them. That gap between *felt pain* and *understood cause* is the selling window, and it is open right now.

## 5. Product sketch (MVP)

- **Mandate estate audit** — connect the gateway, get a one-screen classification of every active subscriber into: healthy · never authorized · cap below next invoice · cancelled/paused · failed-and-unretryable. Delivered as a number in reais at the top: "R$ 47,300 at risk this cycle."
- **Pre-billing tripwire** — runs before the billing date, not after. Flags mandates that will fail this cycle for a knowable reason (price above the authorized ceiling, mandate revoked, no post-due retry provisioned) while there is still time to act.
- **Silent-cancellation alert** — detects mandates that disappeared from the estate between runs and surfaces them within a day, so the merchant reaches the customer during the window when a win-back still works rather than a month later.
- **7-day rescue queue** — for balance failures, a prioritized daily worklist with WhatsApp-ready messages, ordered by value at risk and days remaining in the retry window. The payer's bank app shows them nothing; this is the only pressure that exists.
- **Re-consent campaigns** — one-click generation of new authorization requests at a corrected ceiling for customers whose price outgrew their mandate cap, plus a re-authorization drive for the never-authorized cohort.
- **Reconciliation catch** — flags customers who paid by another method (transfer, manual Pix, card) against an open mandate charge, so the merchant cancels the CobR instead of double-charging. BCB explicitly makes this the merchant's problem, discoverable only via reconciliation.
- **Monthly leak statement** — a plain-language PDF: what was recovered, what was lost, what state each cohort is in. This is the artifact that renews the subscription.

## 6. AI angle — what's load-bearing

Honest answer: **AI is a supporting actor here, and the product is stronger for admitting it.** The core is a state machine over mandate data plus hard-won regulatory knowledge. That is deterministic logic, and it should be.

Where AI genuinely earns its place:

- **Message generation per state and per vertical.** A gym nudging a student about a 7-day window writes differently than a school's financeiro contacting a parent, where Law 9.870/1999 forbids pedagogical penalties for non-payment and tone carries legal risk. Generating and localizing thousands of these in Portuguese, tuned per segment, is real work AI does well.
- **Reply handling on WhatsApp.** Recovery conversations are messy and high-volume: "já paguei," "cancelei sim," "não reconheço." Classifying intent, extracting whether they claim to have paid by another means, and routing to the right action is the difference between a worklist and an actual recovery loop.
- **Reconciliation matching.** Fuzzy-matching an inbound manual Pix against an open mandate charge — name variants, partial amounts, wrong dates — is classic messy-matching where a model beats rules.

Strip the AI out and you still have a valuable diagnostic product with manual message templates. That is a deliberate design choice: the moat is the regulatory state machine, not the model. Anyone claiming AI is load-bearing for reading a mandate status is decorating.

## 7. Localization angle

This is a Brazil-only product by construction and that is the entire point. Pix Automático is a Banco Central instrument; the four failure states are artifacts of specific BCB rules (conditional post-due retries, in-app cancellation, no payer-side pendency after exhaustion). There is no generic global version — the product *is* the local regulatory quirk.

Practical implications:
- **Portuguese-first, WhatsApp-first.** Recovery in Brazil happens on WhatsApp. Cost per collection contact drops from roughly R$ 0.18 by SMS to R$ 0.06 by WhatsApp Utility, per SocialHub's reported merchant sample — the channel is both where customers are and cheaper.
- **Pricing in reais at SMB altitude.** R$ 297–997/mo lands under the R$ 200–2,000/mo that Iugu and Vindi charge for platform subscriptions, so it reads as a rounding error against recovered revenue.
- **Gateway integration, not bank integration.** Asaas, Iugu, Vindi, and Mercado Pago hold the mandate data and expose APIs. No BCB authorization is needed to read a merchant's own data on their behalf — critical, because becoming a regulated payment institution would kill the idea outright.

The flip side: this does not port. Mexico, Colombia, India have no equivalent rail. Accept a Brazil-capped ceiling in exchange for a market where the rules are the moat.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers by subscriber count — R$ 297/mo (up to 500 mandates), R$ 597/mo (up to 2,000), R$ 997/mo (up to 5,000). Flat SaaS, not success-fee. A percentage-of-recovery model sounds founder-friendly but drags you toward looking like a collections agency, which invites regulatory scrutiny you do not want.
- **ACV:** ~R$ 6,400/year blended (~$1,150 at 5.6 BRL/USD).
- **Rough math to R$ 5M ARR (~$900K):** 780 customers × R$ 535/mo × 12. At the low tier that is a few hundred gyms and schools — reachable through direct outreach without paid acquisition.
- **Rough math to R$ 28M ARR (~$5M):** ~4,400 customers at a slightly richer blended R$ 530/mo, which requires moving upmarket into franchise networks and multi-unit school groups where one contract covers 20 units. That is the expansion path, not the starting point.
- **Expansion path:** per-unit pricing for franchise groups (Smart Fit-style networks, school groups); a "migration audit" one-time engagement at R$ 2,500 for merchants who want the estate cleaned before subscribing — this doubles as a paid trial that funds the sales cycle; later, an agency tier for the accounting firms (contabilidades) that already manage financeiro for dozens of SMBs.

Gross margin is high — gateway API reads plus WhatsApp Utility message costs at R$ 0.06 per contact. The dominant cost is customer support in month one, when the merchant sees the size of their leak and wants a human to explain it.

## 9. Go-to-market wedge — first 100 customers

- **The free leak audit, sold cold.** Build a self-serve audit: merchant connects Asaas or Iugu read-only, gets a one-page number — "R$ 47,300 at risk across 214 mandates." This is the entire pitch. The number is computed from their own data, so it is not a claim they can argue with. Target: 40 of the first 100 customers convert from audit to paid.
- **Gym and school management software partnerships.** Pacto, Tecnofit, and the school ERP vendors have thousands of SMB customers who just migrated and are fielding "why is my revenue down" support tickets. Their support burden is the pitch: white-label or revenue-share the audit. Three partnerships at 500 merchants each is the whole first-year target. This is the highest-leverage channel and should be worked from week one.
- **Contabilidade channel.** Brazilian SMBs outsource financeiro to accounting firms, and a single contabilidade may manage 50–200 small businesses. Sign 10 firms, give them a multi-client dashboard and a margin. They sell it as a service line, not as software.
- **Gateway marketplaces.** Asaas and Iugu both run app/integration directories. Being the only listed product that explains mandate failure is durable inbound — and the gateways are motivated to list it because it makes their rail look better, not worse.
- **Vertical WhatsApp and Telegram communities.** Brazilian gym owners and school administrators run large, active operator groups. Post the anonymized aggregate finding — "across 60 audits, an average 9% of mandates were unusable" — once you have real numbers. Do not post before you have them; fabricated stats die instantly in these groups.

## 10. Build complexity — justification

**Low.** The MVP is gateway API integrations (Asaas, Iugu, Vindi to start), a state classifier encoding BCB mandate rules, a scheduler that runs pre-billing, and WhatsApp Business API messaging. Every component is off-the-shelf. No payment handling, no funds custody, no regulatory authorization — the product reads state and sends messages; money continues to move through the merchant's existing gateway.

The genuinely hard part is not engineering, it is **correctly encoding the mandate rules and their edge cases** — settlement windows (00:00–08:00 and 18:00–21:00), TxId behavior on retries, the d+1/d+2 cancellation boundary after 22h, UPAY rejection codes. That is a careful reading of BCB documentation plus real merchant data, not a research problem. A technical founder ships v1 in 6–8 weeks; two people with one doing sales get to a sellable product faster.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads merchant's own data via authorized gateway APIs; sends messages on merchant's behalf. Not a payment institution, no BCB authorization required. LGPD applies — standard processor terms. |
| Ethical — no harm / dark patterns | ✅ | Helps merchants collect revenue they are owed and *prevents* double-charging. Must be disciplined: no aggressive dunning, respect Law 9.870/1999 for schools, honor cancellations rather than fighting them. |
| Market exists (evidence above) | ✅ | Forced migration with a passed deadline, documented adoption curve, priced incumbents in adjacent categories. |
| 1–5 person team can build this | ✅ | Low complexity, off-the-shelf integrations, 6–8 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Realistically under $15K — API costs, WhatsApp Business, hosting, and a few months of runway. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Monthly, denominated in lost revenue already earned, and structurally invisible to the victim. Not a 19 because many merchants have not yet connected the dots between mandate mechanics and their cash shortfall — you are partly selling awareness, which is slower than selling relief. |
| Demand evidence | 15 | 11/15 | Strong structural and regulatory evidence, real adoption data, priced incumbents in adjacent categories. Held down deliberately: I could not source verbatim merchant complaints about *this specific* pain. The inference is sound but the direct voice-of-customer is missing, and I will not invent it. |
| Build feasibility | 15 | 13/15 | Off-the-shelf integrations, no funds custody, 6–8 weeks. Docked for gateway API variance and the fiddliness of encoding mandate edge cases correctly. |
| Distribution clarity | 15 | 12/15 | The free audit is a genuinely strong wedge — the pitch is a number from their own data. Partnership channel is concrete and named. Docked because gym/school software partnerships have real sales cycles and the contabilidade channel is unproven for this product shape. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against Iugu/Vindi platform fees; ROI is arithmetic when the leak is a five-figure monthly number. Docked because R$ 5M ARR needs ~780 customers, and the path past that requires moving upmarket into franchise deals — a different sale. |
| Time to first revenue | 10 | 8/10 | Audit-to-paid can close in weeks; the artifact sells itself. Not a 9–10 because SMB financeiro buyers in Brazil move deliberately and the paid migration audit is the realistic first dollar. |
| Defensibility | 10 | 4/10 | This is the weak axis and it should be. The regulatory state machine is a 6–12 month head start, not a moat. A gateway could ship this as a feature — though they are conflicted, since it advertises their rail's failure modes. Accumulated cross-merchant benchmarks ("your 9% unusable rate vs. peer median 6%") is the only compounding asset, and it takes a year to matter. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who will read BCB documentation carefully and encode it precisely, paired with someone who can sell to Brazilian SMB financeiro managers in Portuguese. Brazil-based or Brazil-fluent is close to mandatory — this is not a market you serve remotely from abroad on English-language content.

### Key assumptions to validate (3–5)

1. **Assumption:** A typical migrated SMB has 5–15% of its mandate estate in an unusable state (never authorized, capped, or cancelled). **How to test:** Run free audits on 20 merchants across gyms, schools, and clinics. Measure the actual distribution. If the median is under 3%, the leak is too small to sell against and the idea dies.
2. **Assumption:** Merchants cannot already see this in their gateway dashboard. **How to test:** Sit with 10 merchants in their Asaas/Iugu/Vindi console and ask them to tell you how many mandates are unusable. If they find it in under five minutes, there is no product.
3. **Assumption:** The 7-day rescue nudge actually recovers money — the payer-side invisibility means merchant contact is the only pressure. **How to test:** Run a controlled comparison on one merchant's failed cohort: WhatsApp nudge vs. no contact. Need a clear recovery lift to justify the subscription.
4. **Assumption:** Gym/school software vendors will partner rather than build it themselves. **How to test:** Pitch three named vendors in month one. Their reaction tells you whether this is a channel or a competitor.
5. **Assumption:** SMBs will pay flat SaaS rather than demanding success fees. **How to test:** Price the first 10 deals as flat subscriptions and count how many push back hard toward a percentage.

### Risk flags

1. **Platform dependency:** Entirely dependent on gateway APIs (Asaas, Iugu, Vindi, Mercado Pago) exposing mandate state. If a major gateway restricts access or ships this natively, a large share of the market closes at once. Mitigate by integrating several gateways early rather than going deep on one.
2. **Feature-absorption risk:** This is a feature a gateway could ship. The counter-argument is real but not permanent — gateways are conflicted about advertising their own rail's failure modes, and they optimize for transaction volume, not merchant diagnostics. Treat the head start as 6–12 months and use it to accumulate benchmark data.
3. **Regulatory drift:** BCB actively iterates on Pix. Rules that create the pain — conditional post-due retries, no payer-side pendency — could be amended in a way that closes the gap. That is genuinely double-edged: a rule change could also expand the product surface. Watch BCB releases as a core operating function, not a side task.
4. **Evidence gap:** The demand case is built on regulatory structure and adoption data, not on merchants saying "this hurts." That inference could be wrong at the margin — merchants may absorb the leak as ordinary inadimplência and never seek a fix. The 20-audit test in section 15 exists specifically to falsify this before anyone writes production code.
5. **Market timing:** Migration was Jan 2026. If merchants clean up their estates organically through 2026, the acute window narrows. Move now or not at all.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical founder + Portuguese-fluent SMB salesperson
Time to revenue:        6–10 weeks
Capital to launch:      R$ 60–85K ($11–15K)
Top 3 assumptions to validate first:
  1. Median unusable-mandate rate ≥5% across 20 free audits spanning gyms, schools, clinics
  2. Merchants cannot self-diagnose this in their existing gateway console within 5 minutes
  3. WhatsApp nudges inside the 7-day window produce measurable recovery lift vs. no contact
Kill criteria:
  - Abandon if median unusable-mandate rate across 20 audits is <3% — the leak is too small to price against
  - Abandon if Asaas or Iugu ships native mandate-health diagnostics before v1 launches
  - Abandon if <5 of the first 40 free audits convert to paid within 30 days
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build only the audit — read-only gateway connection plus the mandate state classifier. No dashboard, no messaging, no billing. One script that outputs a single page: how many mandates in each of the four states, and the total reais at risk this cycle.
- **Day 3–4:** Get it run against 20 real merchant accounts. Source them through gym-owner and school-administrator WhatsApp groups and direct outreach, offering the audit free with no strings. Record the state distribution for each, and record whether the merchant was surprised by the number.
- **Day 5:** Decide on two falsifiable numbers. **Go if:** median unusable-mandate rate ≥5% **and** ≥12 of 20 merchants say they could not see this themselves **and** ≥6 ask what it would cost to fix it on an ongoing basis. **No-go if:** median <3%, or merchants routinely locate the same information in their gateway console unaided.

The trap to avoid is demoing a pretty dashboard and reading enthusiasm as demand. The audit output is a number computed from the merchant's own data — either it is big and they did not know, or the thesis is wrong. That is the whole test, and it is designed to fail fast.
