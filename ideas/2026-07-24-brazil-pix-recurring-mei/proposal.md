---
title: "RecebeJá — recurring-billing autopilot for Brazil MEIs"
slug: brazil-pix-recurring-mei
date: 2026-07-24
category: FinTech / LATAM-SMB
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Puts a small biller's clients on Pix Automático with one WhatsApp tap, then charges monthly and chases only the failures."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, AI-agent, SMB, Solo-builder, Multilingual]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# RecebeJá — recurring-billing autopilot for Brazil's non-vertical MEIs

## 1. One-liner

Puts a small biller's clients on Pix Automático with one WhatsApp tap, then charges monthly and chases only the failures.

## 2. Trend signal — why now?

Brazil rebuilt its recurring-payments plumbing in the last 12 months, and the plumbing is aimed at the wrong people.

- **Pix Automático went live June 16, 2025** — the first unattended recurring rail on Pix. No more per-month manual charge. Adoption is vertical: active enrollments grew ~177%/month and transaction volume ~53%/month since launch (PagBrasil / EBANX Q1 2026 data).
- **But the flagship adopters are enterprises** — Amazon Prime, Canva, Hotmart, Nord Security, and now PayPal (added Pix for SMBs, April 2026). EBANX alone processes 38% of all Pix Automático volume. The rail was unlocked top-down.
- **The authorization step — the one hard UX moment — now runs inside WhatsApp** via Open Finance payment initiation (SocialHub, 2026). The payer approves a recurring debit with a tap in the same chat where they already talk to the merchant.
- **WhatsApp itself pivoted to Pix-first in Brazil**: card payments to businesses were discontinued Jan 15, 2026; WhatsApp Pay now runs Pix + Boleto + payment links (launched Feb 2026). WhatsApp is the merchant's till.
- Meanwhile the small biller still does it by hand. In Portuguese how-to content the pain is stated plainly: *"a dificuldade maior é fazer cobranças mensais, com todo cliente, sem esquecer ninguém"* — the hardest part is billing every client every month without forgetting anyone.

Three things converged: a new rail (feasibility), a flood of money onto it (economic), and a manual monthly grind that the rail was supposed to end but hasn't — for the little guy (demand).

Provenance:
  - Signal 1 (demand): Small billers manually chase monthly mensalidades on WhatsApp; "the hardest part is billing every client every month without forgetting anyone" — https://www.socialhub.pro/blog/cobranca-recorrente-mensal-whatsapp/ — 2026-07-24
  - Signal 2 (feasibility): Pix Automático launched Jun 16 2025, growing ~177%/mo; in-chat authorization now live via Open Finance/WhatsApp — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ , https://www.socialhub.pro/blog/open-finance-brasil-2026-cobranca-recorrente-pix-automatico-whatsapp-pme/ — 2026-07-24
  - Signal 3 (economic): Enterprise-led land grab — Amazon/Canva/Nord/PayPal on Pix Automático; EBANX processes 38% of volume; 60M credit-card-less Brazilians now reachable — https://www.prnewswire.com/apac/news-releases/more-than-60-of-pix-automatico-users-are-brand-new-subscribers-to-digital-platforms-ebanx-data-shows-302797489.html — 2026-07-24
  Category: Tech-unlock

## 3. The opportunity

Pix Automático made unattended recurring collection possible for anyone with a participating bank account — no more per-bank *convênio de débito automático* that used to be "praticamente inviável para um MEI." But turning that raw capability into a working monthly cash machine still requires either (a) developer integration with a PSP — quoted at **R$25,000–60,000** to wire into an existing app — or (b) buying a full vertical ERP.

The vertical ERPs are the incumbents here: **PactoPay** (gyms, pilates, dance, CrossFit boxes), **LEP App** (sports arenas, language/swim/martial-arts schools, tutors), **NextFit**, **Betalabs** (subscription clubs), **Traus** (course studios). Every one of them is a *whole system* — student rosters, class scheduling, check-in, inventory — with recurring billing bolted on. They're priced and shaped for a gym, not for the millions of MEIs who bill monthly but aren't a gym.

That MEI — the physiotherapist with 40 patients on retainer, the condo *síndico* collecting from 60 units, the neighborhood association, the cleaning-subscription operator, the small course seller, the church treasurer — has exactly one recurring-billing need and zero need for a class scheduler. Today they either hand-chase on WhatsApp or over-buy an ERP. The opportunity is the thin horizontal layer: **just the recurring collection, running itself, on the rail Brazil built last year, delivered through WhatsApp** — nothing else.

## 4. Target market

- **Primary customer:** Brazilian MEI / micro-ME who bills the *same clients the same amount every month* and is **not** a gym/fitness/formal-school vertical: independent health professionals (physio, psych, nutrition retainers), condo síndicos and small property administrators, neighborhood/professional associations, cleaning & pet subscriptions, small course/community sellers, private security. Typically 5–300 payers at R$30–R$300/mo.
- **Why they buy (their words):** *"todo mês tenho que mandar o Pix pra cada um, conferir quem pagou e cobrar os que esquecem"* — every month I send the Pix to each one, check who paid, and chase whoever forgot. It's hours of awkward nagging and it leaks — inadimplência from "forgot" and "no balance on card" runs high (one Open Finance write-up cites ~47% of card-recurring failures from expired card / insufficient balance, which Pix debit sidesteps).
- **Rough TAM reasoning:** Brazil has ~15M+ active MEIs plus millions of micro-MEs. A conservative slice that bills recurring and isn't served by a fitness/school ERP — even 300–500K businesses — at R$49–99/mo is a multi-hundred-million-BRL wedge. We only need a few thousand to hit our range.
- **Why now for them:** Before June 2025 there was no MEI-accessible unattended recurring rail. Now there is — but it's locked behind dev integration or ERP purchase. The capability exists; the on-ramp for the non-vertical MEI doesn't.

## 5. Product sketch (MVP)

- **Payer roster in 2 minutes** — add payers by name + WhatsApp number + amount + due day. Import from a spreadsheet or WhatsApp contacts.
- **One-tap Pix Automático enrollment** — RecebeJá sends each payer a WhatsApp message; the payer authorizes the recurring debit in-chat. No app install, no card.
- **Auto-charge on the due date** — the debit fires automatically each month via the connected PSP. The biller does nothing.
- **Chase only the failures** — payers who fail (no authorization yet, insufficient balance, revoked) get an escalating, tone-graded WhatsApp sequence (gentle before due, firmer after). Everyone who pays hears nothing.
- **Live recebimento panel** — who's enrolled, who paid this cycle, who's overdue, projected monthly recurring receita — one screen, mobile-first, Portuguese.
- **Fallback link** — for payers who won't authorize recurring, a one-tap Pix copia-e-cola / QR each month with the same auto-chase.
- **Receipt + reconciliation** — instant WhatsApp receipt to payer; the biller's ledger reconciles itself against PSP settlement.

## 6. AI angle — what's load-bearing

Two places, both load-bearing:

1. **The chase agent.** Brazilian small billers are terrified of cobrança that offends — "uma palavra mal colocada... podem gerar constrangimentos e até problemas judiciais." The product's core value is an LLM that writes and paces the dunning in the biller's own register — warm reminder three days early, a check-in on day 1 late, a firm-but-legal notice at a week — personalized per payer and per history, in pt-BR, respecting CDC collection norms. Remove the AI and you're back to copy-paste templates that read as robotic and get ignored.
2. **Enrollment & reconciliation triage.** Free-text WhatsApp replies ("já paguei", "esse mês não vou conseguir", "cancela minha assinatura") get classified and routed — confirmed, negotiate, churn-risk, revoke — instead of dumping every reply on the biller. That intent-parsing over messy vernacular chat is the difference between "runs itself" and "another inbox to babysit."

If you strip the AI, this is just a PSP wrapper with a cron job — a commodity. The AI is what makes it feel like a collections employee the MEI never has to manage.

## 7. Localization angle

This is not a localizable global product — it *is* the localization. It only exists because of Brazil-specific rails:

- **Pix Automático** — the exact recurring instrument, unavailable anywhere else.
- **WhatsApp as the merchant channel** — Brazil's default business surface; in-chat Open Finance authorization is the whole UX unlock.
- **BRL pricing** — a R$49–99/mo tier works where a US-priced tool never could for a 40-payer MEI.
- **pt-BR dunning tone + CDC collection law** — the AI must speak the register and stay on the right side of consumer-protection rules.

A generic global "recurring billing" tool cannot serve this customer; the wedge is entirely local. (Adjacent expansion: Mexico's SPEI / cobro recurrente and India's UPI Autopay are the same shape in different rails — later, not now.)

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$49/mo (up to 50 active payers), R$99/mo (up to 200), R$199/mo (200+). Optional +0.4–0.6% platform fee on collected volume on the entry tier for very small billers who prefer usage pricing. PSP transaction cost (~R$0.10 to <1%) is passed through / absorbed into the fee.
- **ACV:** ~R$1,000/yr blended (mix of R$49 and R$99 tiers) ≈ ~US$180.
- **Rough math to R$5M ARR (~US$1M):** ~4,200 businesses × R$99/mo × 12 ≈ R$5M. Achievable — that's a rounding error against the MEI base.
- **Rough math to ~US$5M ARR (~R$27M):** ~23,000 paying businesses on a R$99 blended, or fewer with the volume-fee upside on higher-payer accounts. Requires the auto-enroll conversion to hold and one strong repeatable channel (see §9).
- **Expansion path:** volume fee grows with the biller's book; higher tiers as payer counts climb; upsell adjacent one-shot cobranças (invoices, event fees) and a "collections health" report. Land on recurring, expand into all their billing.

## 9. Go-to-market wedge — first 100 customers

- **Reclame Aqui + review-site scrape of ERP refugees.** Pull businesses publicly complaining that NextFit/Betalabs/PactoPay are too heavy or too expensive for what they need; DM a 40-second WhatsApp demo: "you don't need the whole system, just the collection." These people are pre-qualified — they already pay for recurring billing and resent it.
- **Condo síndico + association groups.** Síndicos run monthly collection from dozens of units and congregate in Facebook/WhatsApp groups and SíndicoNet-type communities. Post a "stop chasing the boleto every month" walkthrough; one adopting síndico becomes a reference for a whole building network.
- **Contador / accountant channel.** MEIs cluster under a handful of accounting offices. Accountants field the "how do I stop chasing payments" question constantly. Rev-share referral — 20% recurring — turns each contador into a distributor of qualified MEIs.
- **Vernacular finance creators.** Instagram/YouTube "dicas para MEI" and Pix-explainer creators already have the exact audience mid-scroll when Pix Automático is the hot topic; sponsored "here's how to put your clients on automatic" clips convert warm.
- **WhatsApp-native onboarding as its own funnel.** Because setup happens in chat, a shared demo link ("veja como funciona") drops a prospect straight into a working roster — near-zero setup friction, unusually high trial-to-paid.

If I can't turn ERP-complaint scrapes + the contador channel into the first 100, I don't deserve the idea. I can.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: WhatsApp Cloud API, an LLM for the chase/triage, standard web stack, and a PSP that already exposes Pix Automático (Efí, Mercado Pago, QI Tech) — no bank convênio, no custom rail. Custom work is the orchestration: enrollment/authorization state machine, monthly charge scheduler, reconciliation against PSP settlement, and the dunning agent. Estimate ~10–14 weeks to a credible v1 for a pair, most of it in the payment-state edge cases and getting the WhatsApp authorization flow clean. No research risk; the hard part is careful plumbing, not invention.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operating on regulated Pix rails via a licensed PSP; dunning within CDC norms. Not a payments institution — riding a PSP. |
| Ethical — no harm / dark patterns | ✅ | Payer explicitly authorizes recurring debit; can revoke in-chat; dunning is capped and tone-graded, not harassment. |
| Market exists (evidence above) | ✅ | Manual-chase pain documented; vertical incumbents prove willingness to pay; rail adoption exploding. |
| 1–5 person team can build this | ✅ | Pair in ~3 months on off-the-shelf PSP + WhatsApp + LLM. |
| Launchable with <$50K / ₹40L | ✅ | No inventory, no capex; PSP is pay-per-use; main cost is two builders' time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Felt monthly, costs real money (inadimplência) and hours; not quite hair-on-fire because the manual workaround limps along. |
| Demand evidence | 15 | 12/15 | Multiple signals: documented manual-chase pain, paying vertical incumbents, exploding rail adoption. Direct "non-vertical MEI will pay R$99" is still inferred, not measured. |
| Build feasibility | 15 | 11/15 | Off-the-shelf PSP + WhatsApp + LLM, but payment-state orchestration and authorization UX are non-trivial; ~3 months. |
| Distribution clarity | 15 | 12/15 | ERP-complaint scrape + contador channel + síndico groups are concrete and named; conversion math still to prove. |
| Revenue mechanics | 15 | 12/15 | BRL pricing benchmarked against incumbents; ACV modest; volume-fee upside. Path to $1M clear, $5M needs one channel to scale. |
| Time to first revenue | 10 | 8/10 | Pre-sellable to ERP refugees; realistic first paid in 6–8 weeks post-launch. |
| Defensibility | 10 | 6/10 | Soft moat: workflow lock-in once a biller's whole book is enrolled (switching = re-authorizing every payer), accumulating dunning-tuning data. Copyable rail; head start + focus wins. |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (payment orchestration, WhatsApp/PSP integration) · `domain-expertise-required` (Brazilian Pix rails, CDC collection norms, MEI reality — a Brazil-based or Brazil-fluent founder is close to mandatory).

### Key assumptions to validate (3–5)

1. **Assumption:** Non-vertical MEIs will pay ~R$99/mo for collection-only, not a full ERP. **How to test:** 30 WhatsApp/phone interviews with síndicos, therapists, associations; pre-sell 10 at a founder rate before building.
2. **Assumption:** Payers will authorize recurring Pix debit in-chat at a high enough rate to matter (not spook and decline). **How to test:** run a live enrollment flow with one friendly biller's 40 payers; measure authorization conversion — need >50%.
3. **Assumption:** PSP terms (per-txn cost, settlement, Pix Automático API maturity) leave a workable margin at R$49–99. **How to test:** get real pricing + sandbox from Efí and Mercado Pago; model unit economics at 50/200 payers.
4. **Assumption:** ERP-complaint scrape + contador channel actually convert. **How to test:** 200 targeted DMs to ERP complainers, 10 contador partnership pitches; measure reply → demo → paid.

### Risk flags

1. **Platform dependency (double):** rides both WhatsApp Cloud API and a single PSP's Pix Automático implementation. A pricing or policy change on either squeezes margin or breaks the flow. Mitigate with PSP redundancy and a boleto/QR fallback.
2. **Incumbent descent:** PactoPay/LEP/Betalabs could ship a stripped "collection-only" tier for non-vertical MEIs. First-mover on the horizontal cut + WhatsApp-native onboarding is the defense; move before they notice the segment.
3. **Enrollment friction is the whole ballgame:** if in-chat recurring-debit authorization converts poorly (payer distrust, bank UX gaps), the product's core promise ("chase only failures") collapses into "chase everyone." This is the #1 kill risk — validate first.
4. **Regulatory drift:** Pix Automático rules and PSP obligations are young and evolving under Banco Central; terms could shift.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazil-based technical founder + pair, fluent in Pix/PSP integration and MEI reality
Time to revenue:        6–8 weeks post-launch (pre-sellable to ERP refugees)
Capital to launch:      R$60–120K (~US$11–22K), mostly two builders' time
Top 3 assumptions to validate first:
  1. Non-vertical MEIs pay ~R$99/mo for collection-only — 30 interviews + 10 pre-sells
  2. In-chat recurring-Pix authorization converts >50% — live test on one biller's 40 payers
  3. PSP unit economics leave margin at R$49–99 — real Efí/Mercado Pago pricing + sandbox model
Kill criteria:
  - Abandon if payer authorization conversion <40% in the live enrollment test
  - Abandon if <5 of 30 interviewed MEIs will pre-pay for collection-only (they'd rather keep chasing by hand)
  - Abandon if a vertical incumbent ships a horizontal collection-only tier before v1 launches
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit and interview 30 non-vertical recurring billers (síndicos, therapists, associations, course sellers) via síndico groups and contador intros. Nail the current monthly workaround and quantify the chase time + inadimplência. Ask the price question directly.
- **Day 3–4:** Get sandbox access + real pricing from Efí and Mercado Pago; hand-run a Pix Automático enrollment on one friendly biller's payer list (even semi-manually) to measure in-chat authorization conversion on real payers.
- **Day 5:** Decide. **Go** if ≥10 of 30 will pre-pay R$99/mo for collection-only **and** authorization conversion ≥50% on the live test. **No-go** if payers won't authorize or MEIs would rather keep chasing by hand — the whole thesis rests on those two numbers, and both are falsifiable this week.
