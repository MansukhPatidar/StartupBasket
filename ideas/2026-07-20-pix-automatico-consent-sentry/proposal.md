---
title: "ConsentGuard — silent-cancel sentry for Brazilian gyms"
slug: pix-automatico-consent-sentry
date: 2026-07-20
category: FinTech / Brazil — Independent Gyms, CrossFit Boxes & Pilates Studios Migrating Monthly Dues to Pix Automático
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: Catches the member who quietly killed your Pix Automático authorization inside their bank app, before the next charge fails.
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Pix-native, SMB, Portuguese-first, WhatsApp-first, Retention, Solo-builder]
axes:
  problem: 16
  demand: 12
  build: 14
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 3
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# ConsentGuard

## 1. One-liner

Catches the member who quietly killed your Pix Automático authorization inside their bank app, before the next charge fails.

## 2. Trend signal — why now?

Brazil flipped a payments rail one month ago and nobody has built the retention layer for it yet.

Pix Automático — the Central Bank's recurring-payment rail — reached general availability for consumer-facing recurring billing on **June 16, 2026**. Adoption is compounding fast: PagBrasil's Q1 2026 analysis reports transaction volume through their ecosystem grew **+182%** quarter-over-quarter, new users **+181%**, recurring users **+177%**, and processed revenue **+170%**. That's not experimentation — the tight coupling of new and recurring user growth means people are staying on the rail.

The economics are why merchants are stampeding onto it. Card MDR for Brazilian gyms runs **2.49%–4.19%** (Stone 2.49–3.49%, Cielo 2.99–3.89%, Getnet 2.79–4.19%), plus R$0.29–0.35 gateway per transaction and R$15–50 per chargeback. Pix Automático costs **R$0.00–0.99 flat, no percentage**. On the sector's R$89–149 average ticket, that's roughly R$3–5 saved per member per month — for a 300-member gym, a modeled **R$4,656/month** swing (R$55,872/year) versus boleto.

Here is the part that creates the product. **On Pix Automático, the payer cancels the authorization inside their own bank app** — "Pix" → "Pix Automático" → "Autorizações ativas." The merchant is not asked and is not in the loop. As one Brazilian implementation guide puts it bluntly:

> "Não tratar revogação de autorização. O cliente revoga no app do banco dele e você só descobre quando a cobrança falha 30 dias depois."
> — *SystemForge, "Pix Automático para SaaS: Guia Completo 2026"*

With a credit card, cancellation required calling the gym — a conversation, and a chance to save the member. Pix Automático deleted that conversation. The gym now learns about the churn a full billing cycle late, when the charge bounces.

The stakes are sized by the sector's existing default problem: gyms run **15–25% inadimplência** on manual models, dropping to **3–5%** on well-implemented recurring billing, and annual plan renewal runs **80–85%** with recurring debit versus **55–65%** manual. Brazil has **41,332 active gyms** (HFA 2025 Global Report) among **62,718 active fitness CNPJs** as of July 2025 — nearly tripled from 22,581 in 2015 — in a market moving **R$20B+/year**.

And migration is where gyms are getting burned right now. Pacto's 2026 implementation guide warns that a badly-run migration of an existing member base "gera cancelamento em cadeia e processo no Procon" — chain cancellations and consumer-protection complaints. Meanwhile there is real legal exposure on the other side: a Brazilian court awarded a consumer **R$7,000** in January 2026 after a gym kept charging a cancelled membership, with continued debits after a formal cancellation request ruled a service failure owing both moral and material damages.

So: a brand-new rail, exploding adoption, a structural blind spot the rail itself created, and legal penalties for handling it wrong on either side.

```
Provenance:
  - Signal 1 (Demand/Economic): Pix Automático Q1 2026 volume +182% QoQ, new users +181%, revenue +170%; rail GA June 16 2026 — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ — 2026-07-20
  - Signal 2 (Demand/Pain): Payer revokes consent inside their own bank app; merchant discovers only when the charge fails a cycle later — "você só descobre quando a cobrança falha 30 dias depois" — https://forjadesistemas.com.br/blog/pix-automatico-recorrencia-saas-proprio-2026/ — 2026-07-20
  - Signal 3 (Feasibility): Asaas ships PIX_AUTOMATIC_RECURRING_AUTHORIZATION_CANCELLED / _CREATED / _ACTIVATED webhooks — revocation is observable in real time via off-the-shelf PSP APIs — https://docs.asaas.com/docs/fluxos-de-webhook — 2026-07-20
  - Signal 4 (Economic): Gym MDR 2.49–4.19% + R$0.29–0.35/txn vs Pix Automático R$0.00–0.99 flat; modeled R$55,872/yr gain for a 300-member gym — https://blog.sistemapacto.com.br/debito-recorrente-academia-quanto-custa-como-implementar-2026/ — 2026-07-20
  - Signal 5 (Market size): 41,332 active Brazilian gyms; 62,718 fitness CNPJs (Jul 2025), up from 22,581 in 2015 — https://www.fitnessbrasil.com.br/newsfitbr/explosao-das-academias-no-brasil-setor-quase-triplica-em-10-anos-e-pode-ultrapassar-70-mil-cnpjs-ate-2027/ — 2026-07-20
  Category: Platform shift (new payment rail creates a new app category)
```

## 3. The opportunity

The gap is a **timing asymmetry the rail created and nobody has closed.**

Under cards, churn was loud. The member had to call, email, or show up — and every one of those was a save opportunity a decent front desk could convert. Under Pix Automático, churn is silent. The member taps twice in Nubank at 11pm, and the gym finds out 30 days later when the charge bounces. By then the member has been to a competitor's free trial, the emotional decision has hardened, and the "we miss you" WhatsApp reads as a collections message.

The incumbents don't close this, and it's worth being precise about why. **Asaas already emits the revocation webhook** — the raw event is available off the shelf. That is exactly the point: the plumbing exists and is *unused*. PSPs (Asaas, Celcoin, Stone, Mercado Pago) treat revocation as a payments state transition — they fire the event and consider the job done. Gym ERPs (Tecnofit, ~16,500 clients; Pacto with PactoPay; Evo) treat billing as a ledger — they reconcile what was paid. Neither treats revocation as **the single highest-intent churn signal a subscription business will ever receive.**

Nobody owns the 24 hours after a member revokes consent. That window is the product.

The second gap is migration. Every gym in Brazil is currently moving its base from card/boleto onto Pix Automático, and Pacto's own guidance says a botched migration triggers chain cancellations and Procon complaints. Gyms are running this migration blind, in spreadsheets, with no view of who authorized, who stalled halfway through the consent flow, and who silently dropped off. The consent funnel is invisible to them.

Third — and this is the one that makes the product defensible in conversation with an owner — the rail's notification rules are a **pre-churn early warning system nobody is reading.** BCB rules require the receiving PSP to send payment instructions between **10 and 2 days** before settlement, with standardized advance notifications to the payer. Retries after a failed charge are only permitted within the following 7 days *and only if the authorization provides for it.* That means the gap between "notification sent" and "charge settled" is a live, observable window where a member decides whether to keep paying. Read correctly, revocations and balance failures in that window predict churn before it happens.

An AI-first tool that watches consent state across the whole member base, scores who is about to leave, and fires the right save motion in the right hour beats a payments dashboard and a billing ledger — because neither of them is even trying to do this.

## 4. Target market

**Primary customer:** Owner or gerente of an independent Brazilian fitness business — single-unit or 2–5 unit academias, CrossFit boxes, and pilates/boutique studios with **150–1,200 active members** and a **R$89–149** average monthly ticket. The buyer is the owner-operator, not a CFO. They already pay for a gym ERP (Tecnofit, Pacto, Evo) and a PSP, and they are migrating dues to Pix Automático this year to escape 3–4% MDR.

**Why they buy:** In their words, from the sector's own trade guidance — the fear is "cancelamento em cadeia e processo no Procon" during migration, and the daily pain is inadimplência that runs 15–25% on manual models. A gym at an 18% default rate and a R$119 ticket loses **over R$20,000 in cash per quarter** in unpaid dues alone, before the cost of manual collections. Owners understand this number viscerally; it is the number they complain about.

The pitch that lands is not "consent management." It is: *"Three members cancelled their Pix authorization last night. You'll find out in 30 days. Want to know now?"*

**Rough TAM reasoning:** 41,332 active gyms in Brazil (HFA 2025), 62,718 fitness CNPJs. Strip out micro-operations under ~150 members and large chains with in-house engineering, and the serviceable base is realistically **12,000–18,000 establishments**. At R$199–499/month, a 3% penetration of 15,000 (450 gyms) at a ~R$300 blended ACV is roughly **R$1.6M ARR** — and fitness is only the beachhead vertical.

**Why now for them:** The rail went GA June 16, 2026. Every one of these gyms is either mid-migration or about to start. The blind spot is brand new — it did not exist 60 days ago, and the gyms discovering it are discovering it the expensive way.

## 5. Product sketch (MVP)

- **Revocation alarm** — the instant a member kills their authorization in their bank app, the owner gets a WhatsApp alert with the member's name, tenure, lifetime value, last check-in date, and a one-tap save action. Minutes, not 30 days.
- **Save playbook, auto-fired** — configurable sequences per churn reason: a personal message from the member's own coach for high-tenure members, a pause-instead-of-cancel offer, a downgrade, or a win-back discount. AI drafts the message in Brazilian Portuguese in the gym's voice, referencing the member's actual history.
- **Consent health board** — every member's live authorization state in one view: active, pending consent, stalled mid-flow, revoked, failing. Answers "who is actually on the rail and who thinks they are."
- **Migration funnel tracker** — for gyms moving their base onto Pix Automático: who was invited, who opened, who abandoned the consent journey and at which step, with automated multilingual-tone nudges to finish. Kills the spreadsheet.
- **Pre-failure risk score** — combines consent state, retry history, balance-failure patterns, and check-in frequency to flag members likely to fail or revoke next cycle, while there's still time to act.
- **Smart retry orchestration** — schedules retries on the 1/3/7-day pattern within the BCB-permitted 7-day window, paired with a WhatsApp balance reminder, and stops before the pattern reads as harassment.
- **Procon-safe cancellation trail** — timestamped, exportable record of every consent grant, revocation, notification sent, and charge attempt. The document that ends a consumer dispute — directly relevant given the R$7,000 award against a gym that kept charging after cancellation.

## 6. AI angle — what's load-bearing

Strip the AI out and this degrades into a webhook forwarder — so the AI has to carry real weight in two places, and it does.

**Save-message generation is the core.** A revocation alert is worthless if the owner then has to write something. The product composes the outreach: it reads member tenure, check-in cadence, plan type, past payment behavior, and prior conversations, then writes a Portuguese message the owner can send in one tap. The message for a 3-year member whose attendance dropped to zero ("você não aparece desde março — quer pausar dois meses em vez de cancelar?") is a completely different artifact from the one for a 2-month member whose charge failed on balance ("saldo insuficiente — quer mudar o vencimento para o dia 10?"). Generating that difference correctly, at volume, in the gym's own voice, is the work. Getting it wrong reads as spam and accelerates the churn.

**Churn prediction is the second.** Consent state, retry outcomes, notification-window behavior, and check-in frequency form a messy multi-signal pattern. Learning which combinations precede revocation — and which members are savable versus already gone — is a genuine modeling problem that gets better with every gym on the platform.

Note what is *not* AI: the revocation event itself. That's a webhook, off the shelf. Honest framing: AI is not what detects churn, it's what converts detection into a save. A dashboard that shows revocations without acting on them is a report, and owners will not pay R$300/month for a report.

## 7. Localization angle

This is a **Brazil-only product by construction**, and that's the moat, not a limitation.

Pix Automático is a Banco Central rail with no analog anywhere else. The consent-revocation-inside-the-bank-app mechanic — the entire premise — is specific to how BCB designed the payer journey. The 10-to-2-day pre-notification window and the conditional 7-day retry rule are Brazilian regulation. A US or EU competitor cannot port this product because the phenomenon does not exist in their market.

Everything else is Brazilian too: WhatsApp is the delivery channel (not email — Brazilian gyms run on WhatsApp), Portuguese is the only language, R$199–499/month is priced to a Brazilian SMB wallet where $199/mo would be laughed at, and the compliance framing is CDC/Procon, not GDPR. The competitive set is Brazilian gym ERPs, and integration targets are Tecnofit, Pacto, and Evo.

The flip side is real and worth naming: this is a single-country, single-regulator product. If BCB changes the consent UX to notify merchants at revocation time, the core alert loses its edge. See risk flags.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers by active member count — **R$199/mo** (up to 300 members), **R$349/mo** (301–800), **R$599/mo** (801+ or multi-unit). Positioned explicitly against the loss, not against software: a gym recovering four R$119 members a month nets ~R$476 — the tool pays for itself on the first save.
- **ACV:** ~R$3,600/year blended (~R$300/mo average), roughly **USD $650**.
- **Rough math to R$1M ARR (~USD $180K):** 280 gyms × R$300/mo × 12 = R$1.008M. Against a serviceable base of 12,000–18,000, that's under 2% penetration.
- **Rough math to R$5M ARR (~USD $900K):** ~1,390 gyms at R$300, or ~900 gyms at a R$460 blended ACV after the compliance-trail and multi-unit upsells land. Realistically this needs the vertical to widen — see expansion.
- **Path to USD $5M ARR:** requires escaping fitness. The consent blind spot is identical for **escolas e cursos** (private schools, course providers), **clínicas** (recurring treatment plans), **planos de saúde SMB**, and **assinaturas/clubes**. Same rail, same revocation mechanic, same save motion, different vocabulary in the message templates. Fitness is the beachhead because the buyer is reachable and the pain is loudest; the product generalizes to any Brazilian recurring-revenue SMB on Pix Automático. That's a 200K+ establishment addressable base.
- **Expansion path:** seats are irrelevant; expansion is member-count tiering (gyms grow), multi-unit rollouts, then a per-save success fee or a premium retention-analytics tier. Natural land-and-expand: land on revocation alerts, expand into full migration + compliance trail.
- **Margin note:** costs are a PSP webhook subscription, WhatsApp Business API message fees (the real variable cost — roughly R$0.05–0.20/conversation), and LLM inference for message drafting at a few cents per member-month. Gross margin comfortably 80%+.

## 9. Go-to-market wedge — first 100 customers

- **The migration-panic list (channels 1 and 2 combined).** Every gym migrating to Pix Automático right now is the ideal customer, and they self-identify publicly. Scrape gym directories (Achar Academia lists 297 in Salvador alone; similar directories exist per city) plus Google Maps for academias/boxes/studios in São Paulo, Rio, Belo Horizonte, and Curitiba. Target the 150–1,200-member band. Send a Portuguese WhatsApp — not email — with a 60-second Loom in the owner's own city showing the revocation alert firing live. Expect 4–8% reply rate on WhatsApp (materially better than cold email in Brazil), 100 conversations from ~2,000 targets, ~15 pilots.
- **Ride the ERP partner channel.** Tecnofit reports 16,500+ clients and Pacto runs PactoPay. Neither wants to build a retention layer, and both are fielding migration complaints right now. Pitch as a complementary integration with revenue share rather than a competitor. One partnership that converts even 1% of a 16,500-client base is 165 customers — this single channel could carry the whole first-100 goal.
- **Contabilidade and consultoria fitness firms.** Gym-specialist accountants and fitness-business consultants in Brazil advise dozens of academias each and are already being asked "how do I migrate to Pix Automático without a Procon problem?" Sign 10 as referral partners with a recurring cut. High trust, near-zero CAC.
- **Reclame Aqui as a lead list.** Complaints against gyms for cobrança indevida and cancellation difficulty are public and named. Those gyms have a demonstrated, documented compliance problem and a public reputation score they care about. Approach with the Procon-safe cancellation trail as the lead feature.
- **Content that ranks on the panic query.** Own the Portuguese search terms gym owners are typing this quarter: "como migrar mensalidade para Pix Automático", "aluno cancelou Pix Automático", "inadimplência academia Pix". A migration playbook PDF as the lead magnet. Slower than the above, compounding.

## 10. Build complexity — justification

**Low.** Everything load-bearing is off the shelf: PSP webhooks (Asaas publishes the full Pix Automático authorization event set — created, activated, cancelled), WhatsApp Business API for delivery, a standard web stack for the dashboard, and a commodity LLM for message drafting. There is no novel infrastructure and no model training required for v1 — the churn score starts as a transparent rules-based heuristic and only becomes a learned model once there's data.

The genuine work is in integrations and correctness, not algorithms: reliable webhook ingestion with replay handling, reconciling consent state against the gym ERP's member records (Tecnofit/Pacto/Evo APIs), and message sequencing that respects the BCB retry windows. Ugly edge cases — duplicate events, out-of-order webhooks, members who re-authorize mid-sequence — are where the time actually goes.

**A technical founder ships v1 in 7–9 weeks.** A single-PSP pilot (Asaas only) with revocation alerts and WhatsApp save messages is a 4-week build; the consent board, migration funnel, and second PSP integration fill the rest.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates on merchant's own payment data via authorized PSP APIs. Actively supports CDC/Procon compliance rather than evading it. No BCB licence needed — never touches or holds funds. |
| Ethical — no harm / dark patterns | ✅ | Deliberate design line: the product must never obstruct cancellation. Revocation happens in the bank app and is untouchable by design. It surfaces a signal and enables an honest, well-timed offer — pause, downgrade, or a real discount. Retry orchestration is explicitly capped to avoid harassment patterns. The compliance trail exists to protect the *member* as much as the gym. |
| Market exists (evidence above) | ✅ | 41,332 active gyms; rail volume +182% QoQ; documented R$20K/quarter loss at 18% default; documented Procon and R$7,000 court exposure. |
| 1–5 person team can build this | ✅ | Off-the-shelf webhooks, WhatsApp API, standard stack. Solo technical founder ships in 7–9 weeks. |
| Launchable with <$50K / ₹40L | ✅ | Realistically USD $8–15K: WhatsApp API fees, PSP sandbox, hosting, and Portuguese-language sales effort. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | Real money, felt monthly, with a legal tail. 18% default = R$20K+/quarter lost for a small gym; Procon exposure and a R$7,000 court award for mishandled cancellation. Not quite hair-on-fire (gyms have survived on 18% default for years and many will shrug) but sharply felt during migration, which is happening *now*. |
| Demand evidence | 15 | **12**/15 | Strong on the rail and the economics — +182% QoQ volume, hard MDR-vs-flat-fee math, sector default and renewal rates, 41,332 establishments. Docked because the *specific* demand for a consent-retention tool is inferred from trade guidance and the structure of the rail, not from gym owners explicitly asking for this product. No verbatim owner complaints about silent revocation found — the rail is only a month into GA. |
| Build feasibility | 15 | **14**/15 | Webhooks, WhatsApp API, LLM drafting, standard stack. Solo founder, 7–9 weeks. Only real friction is ERP integration variance. |
| Distribution clarity | 15 | **12**/15 | Named channels with real math: scraped city directories via WhatsApp, and the ERP partnership (Tecnofit's 16,500 clients) which could alone deliver the first 100. Docked because the partnership is the strongest path and is not in the founder's control; direct outreach to independent gym owners is proven but grindy. |
| Revenue mechanics | 15 | **11**/15 | Pricing anchors cleanly to a loss the owner already tracks, and one saved member covers most of the fee. R$1M ARR needs <2% penetration — very achievable. Docked because ARR is in reais: USD $5M requires ~1,390+ gyms *or* successful expansion beyond fitness. The BRL ceiling is the honest constraint on this idea. |
| Time to first revenue | 10 | **8**/10 | Migration urgency is immediate and the demo is visceral (an alert firing live). Pilots convert in weeks, not quarters. Short of 9–10 because gym owners buy on relationship and a pilot period is realistic before cash. |
| Defensibility | 10 | **3**/10 | **The weak axis, scored honestly.** The revocation webhook is public and already shipped by Asaas — any PSP or ERP could build the alert in a sprint. If Tecnofit or Pacto decides retention is strategic, they have the members, the billing data, and the distribution. Real defense is only: speed, an accumulating dataset of which save messages actually work, and workflow lock-in once the compliance trail is the gym's system of record. Execution moat, not a structural one. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can wire PSP webhooks and ERP integrations cleanly, **and** who can sell in Portuguese to non-technical gym owners over WhatsApp. Brazil-based or a Brazilian co-founder is close to mandatory — this is not a market to sell into remotely. Fitness-industry familiarity is a strong accelerant but learnable.

### Key assumptions to validate

1. **Assumption:** Gym owners perceive silent revocation as a problem worth R$199+/month, rather than shrugging at it as normal churn. **How to test:** 25 structured WhatsApp/phone interviews with owners in the 150–1,200 member band who have already started migrating. Ask what happened the last time a member's charge failed and how they found out. Do not lead the witness — if they don't raise the delay unprompted, the premise is weak.
2. **Assumption:** A well-timed save message actually converts a meaningful share of revocations — call it >15%. **How to test:** Manual concierge pilot with 3 gyms. Watch their PSP webhooks by hand, send save messages within an hour, measure re-authorization rate against their historical win-back rate. This is the single most important number in the business.
3. **Assumption:** Migration is messy enough that gyms want tooling for it, not just a spreadsheet. **How to test:** Ask the same 25 owners how they are tracking who has authorized. Count how many say "planilha." If most say their ERP handles it, the migration-funnel feature is dead and the product narrows to alerts alone.
4. **Assumption:** An ERP (Tecnofit/Pacto/Evo) will partner rather than clone. **How to test:** Direct partnership conversations with 3 ERPs in month one. Their reaction is also the fastest read on how defensible this is — enthusiasm means they haven't prioritized it; a cold response means they're building it.
5. **Assumption:** Pix Automático adoption among independent gyms keeps compounding rather than stalling on member reluctance to authorize. **How to test:** Ask owners what share of their base has authorized so far and what the drop-off looks like. Below ~30% authorization would mean the rail — and this product — is early.

### Risk flags

1. **Defensibility / incumbent clone risk (highest):** The core event is a public webhook. Tecnofit (16,500 clients) or Pacto could ship revocation alerts as a feature and bundle it free. The counter is to become the retention *system of record* — the save-message library, outcome data, and compliance trail — fast enough that alerts are the least valuable part of the product.
2. **Regulatory / platform dependency:** The product exists because BCB designed revocation to happen in the payer's bank app with no merchant notification. If BCB revises the consent UX to notify merchants directly, or PSPs commoditize revocation alerting, the core wedge erodes. Single-regulator, single-rail exposure.
3. **Currency ceiling:** Revenue is in BRL against a Brazilian SMB wallet. USD $5M ARR is a genuine stretch inside fitness alone and depends on expanding to schools, clinics, and subscription businesses. Attractive as a R$3–8M ARR business; harder as a USD $5M one.
4. **Market timing (could be early):** The rail hit GA one month ago. If independent gym migration takes 18 months rather than 6, the urgency thins out and the founder burns runway educating rather than selling. The migration-funnel feature is partly a hedge — it sells to gyms at the *start* of the curve.
5. **Ethical drift:** A retention product sits one bad decision away from being a dark pattern. If the roadmap ever drifts toward making cancellation harder rather than making the save offer better, the product becomes indefensible and a Procon liability. Worth writing into the company's principles on day one.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical founder (or with a Brazilian co-founder)
                        who can sell in Portuguese over WhatsApp; fitness-sector
                        familiarity is a strong accelerant
Time to revenue:        8–12 weeks
Capital to launch:      USD $8–15K (R$45–85K)
Top 3 assumptions to validate first:
  1. Save-message conversion on revocation >15% — manual concierge pilot with 3 gyms,
     measured against their historical win-back rate
  2. Owners feel silent revocation as real pain — 25 unled interviews with mid-migration
     gyms; they must raise the discovery delay unprompted
  3. An ERP will partner rather than clone — direct conversations with Tecnofit, Pacto,
     Evo in month one; their reaction also reads the defensibility risk
Kill criteria:
  - Abandon if save-message conversion on revoked consents is <8% after 100 attempted
    saves across pilot gyms — the core loop doesn't work and alerts alone won't sustain
    R$199/mo
  - Abandon if Tecnofit or Pacto ships native revocation alerting bundled free before
    v1 launch — the wedge closes before it opens
  - Abandon if <30% of a typical pilot gym's member base has authorized Pix Automático
    after 6 months — the rail is too early for the retention layer
  - Abandon if fewer than 5 of 25 interviewed owners can recall a specific instance of
    discovering a cancellation late — the premise is founder fiction
```

## 15. Next step — 1-week validation sprint

- **Day 1–2 — Build the target list and start conversations.** Pull 300 gyms in São Paulo and Belo Horizonte in the 150–1,200 member band from city directories and Google Maps. Open WhatsApp conversations with a single question, not a pitch: *"Quando um aluno cancela a autorização do Pix Automático, como você fica sabendo?"* Target 25 substantive replies. The measurable outcome is how many describe finding out late, **unprompted**.
- **Day 3–4 — Concierge the loop by hand.** Recruit 2–3 friendly gyms already on Pix Automático. Get read access to their PSP webhook feed (Asaas sandbox or production read-only). Manually watch for `PIX_AUTOMATIC_RECURRING_AUTHORIZATION_CANCELLED` events. For every revocation, hand-write and send a save message within 60 minutes — no product, just a person and WhatsApp. In parallel, call Tecnofit, Pacto, and Evo about integration partnerships and listen carefully to whether they say "interesting" or "we're already on it."
- **Day 5 — Decide on one number.** Go/no-go on **re-authorization rate within 7 days of a hand-sent save message.** ≥15% and the loop is real — build it. 8–15% and it's a VALIDATE: run the concierge two more weeks before committing engineering. <8% and the premise is dead regardless of how good the market data looks — kill it and don't rationalize.

The falsifiable result is the re-authorization rate, measured against each gym's historical win-back rate on lapsed members. Not "owners seemed interested" — owners are always interested when someone builds them something for free.
