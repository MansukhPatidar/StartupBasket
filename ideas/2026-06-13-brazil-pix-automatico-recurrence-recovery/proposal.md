---
title: "FielPix — recurrence sentinel for Brazil's small merchants"
slug: brazil-pix-automatico-recurrence-recovery
date: 2026-06-13
category: FinTech / Brazil Micro & Small Recurring-Revenue Merchants
complexity: Medium
score: 72
verdict: GO
confidence: Medium
oneLiner: "Watches every Pix Automático authorization, catches the silent failures Bacen hides from you, and chases the money back over WhatsApp."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, Compliance-driven, SMB, Solo-builder, Multilingual]
axes:
  problem: 15
  demand: 10
  build: 11
  distribution: 11
  revenue: 11
  time: 8
  defensibility: 6
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FielPix — recurrence sentinel for Brazil's small merchants

## 1. One-liner

Watches every Pix Automático authorization, catches the silent failures Bacen hides from you, and chases the money back over WhatsApp.

## 2. Trend signal — why now?

Three things converged in the last twelve months, all pointing at the same fresh wound.

**Pix Automático became the law of the land.** It launched June 2025, and since 1 January 2026 it is the *mandatory* mechanism for automatic debit between different banks (Resolução BCB 308/2023). The Central Bank set an adaptation deadline of April 2026 for customers to re-authorize migrated recurrences. Overnight, recurring billing without a credit card became possible for the 60M Brazilians who don't have one — and for the millions of micro-merchants who could never afford the old bilateral bank conventions débito automático required.

**The rail ships a silent-failure problem baked into the regulation.** Bacen explicitly *prohibits* the payment institution from forwarding the merchant the real reason a charge failed when it's insufficient balance or limits. The payer can cancel the authorization inside their own bank app at any moment "without needing to contact the collecting company." Error codes exist (AM04 insufficient funds, CN01 cancelled authorization, DS0G unauthorized), the system auto-retries up to 3 times in 7 days — but the small merchant sees none of this orchestration. They just see a month where the money is short and don't know who, why, or what to do about it.

**Inadimplência is at record highs and money is racing into the rail.** 2026 condo-fee delinquency hit record levels on inflation pressure; small gyms run 15–25% monthly default with a R$119 ticket bleeding R$20k+/quarter. EBANX data shows 60%+ of Pix Automático payers are brand-new subscribers. dLocal, Gr4vy and Boku all secured licensing to plug merchants in. The orchestration layer is being built for big platforms — the small merchant's *operations* layer is not.

Provenance:
  - Signal 1 (Demand): Small-gym delinquency 15–25%/mo, R$20k+/quarter lost; record condo inadimplência in 2026; Remit already sells WhatsApp recurring billing to autônomos (paid alternative proves WTP) — https://www.remit.com.br/ , https://blog.sistemapacto.com.br/debito-recorrente-academia-quanto-custa-como-implementar-2026/ , https://cobrancaia.ia.br/blog/como-reduzir-inadimplencia-academia — 2026-06-13
  - Signal 2 (Feasibility): Pix Automático mandatory since 01 Jan 2026 (Res. BCB 308/2023), open APIs (EBANX, PagBrasil/PagStream, OpenPix), 3-retry/7-day rule, masked failure-reason rule, in-app payer cancellation — https://www.pagbrasil.com/blog/pix/pagbrasils-automatic-pix-integration-guide-for-developers/ , https://developers.openpix.com.br/en/docs/flows/error-codes-payment , https://www.socialhub.pro/blog/pix-automatico-2026-decreto-bacen-atualizacao/ — 2026-06-13
  - Signal 3 (Economic): EBANX 60%+ new-subscriber data; dLocal/Gr4vy/Boku licensing race; Pix = 42% of e-commerce, 70M brought into the system — https://vir.com.vn/ebanx-data-over-60-of-pix-automatico-users-are-new-digital-platform-subscribers-154642.html , https://gr4vy.com/posts/gr4vy-introduces-pix-automatico-in-brazil-via-dlocal-integration/amp/ — 2026-06-13
  Category: Regulatory arbitrage

## 3. The opportunity

The PSPs (dLocal, Gr4vy, PagBrasil, EBANX, iugu) and the dunning tools (Remit, SocialHub) are fighting over two ends of the funnel: getting the merchant *integrated*, and *sending the bill*. Nobody owns the messy middle that the regulation itself created — the **authorization lifecycle and silent-failure recovery**.

Here's what falls through the crack today. A personal trainer or self-managed condo (síndico) sets up Pix Automático through their PSP. Then: authorizations get rejected at setup and never complete; payers silently cancel inside their bank app; the April-2026 re-authorization deadline silently nukes migrated recurrences; charges fail for a reason Bacen won't let the PSP disclose; the 3-retry window opens and closes without the merchant lifting a finger. The merchant has no single screen that says *"these 7 customers are about to drop, here's why, here's the one-tap fix to send each of them."*

A focused tool that sits on top of any PSP's API, models the authorization health of every payer, decodes the failure codes the merchant is allowed to see, and runs the WhatsApp recovery loop (re-consent link, "fix your saldo before the retry," renegotiation) does 10× better than a generic dunning bot — because it's operating the *specific failure modes of this rail*, not just resending a boleto.

## 4. Target market

- **Primary customer:** Micro and small Brazilian recurring-revenue merchants who collect 30–800 monthly payments and self-administer collection — independent gyms/CrossFit boxes, personal trainers and studios, self-managed small condos (autogestão), private course/curso and EdTech sellers, neighborhood clinics, MEIs with subscriptions. 1–10 staff, no finance team.
- **Why they buy:** "Toda virada de mês eu não sei quem vai pagar e quem sumiu." They lose 15–25% of revenue to silent default, spend hours each month manually reconciling a Pix sheet and nagging on WhatsApp, and now have a brand-new rail they don't understand failing in ways their PSP won't explain.
- **Rough TAM reasoning:** Brazil has millions of MEIs and small businesses; the recurring-revenue slice (gyms ~35k, studios, autogestão condos in the hundreds of thousands, course-sellers) is easily 300k–600k addressable merchants who would pay R$49–199/mo. Even 1% at R$99 = ~R$30–60M ARR ceiling — comfortably inside a sub-$5M-USD-ARR bootstrap target.
- **Why now for them:** The Jan-2026 mandate and April-2026 re-authorization deadline are forcing every one of them onto a rail whose failure modes they've never managed. The pain is brand-new and dated.

## 5. Product sketch (MVP)

- Connect one PSP (start with OpenPix or iugu — cheapest, most indie-friendly Pix Automático APIs) in minutes; FielPix reads every authorization and charge event.
- **Authorization health board:** every payer tagged *active / pending-consent / cancelled-by-payer / expiring / failed* — the screen the PSP doesn't give them.
- **Silent-failure decoder:** translate the codes the merchant *is* allowed to see (CN01 cancelled, DS0G unauthorized, AM04-adjacent retry exhaustion) into plain-Portuguese "what happened + what to do."
- **WhatsApp recovery loop:** auto-send the right message for the right failure — re-consent link for cancelled auths, "garanta saldo antes da nova tentativa" inside the 7-day retry window, renegotiation for chronic late payers.
- **Re-authorization campaign:** one-click chase for the April-2026 migrated-recurrence deadline so merchants don't lose their whole book.
- **Month-end recovery report:** "R$X recovered, Y authorizations saved, Z customers at risk next month."
- Portuguese-first, mobile-first, WhatsApp-native onboarding.

## 6. AI angle — what's load-bearing

AI is load-bearing in two places. First, the **WhatsApp recovery conversations**: an LLM agent handles the back-and-forth in colloquial Brazilian Portuguese — re-explaining what a payer needs to tap in *their specific bank's app* to re-consent (the steps differ per bank), negotiating a late payment, answering "por que cobrou de novo?" without escalating to the owner. A scripted bot breaks on the first off-script reply; that's exactly where Remit-style tools feel robotic. Second, **failure triage**: classifying ambiguous events and the merchant's free-text context into the right recovery playbook. Remove the AI and you're back to a dumb reminder sender — which already exists and isn't winning.

## 7. Localization angle

This *is* the localization play — it cannot exist outside Brazil. It is built on a Brazilian Central Bank rail (Pix Automático), exploits Brazil-specific regulatory quirks (the masked-failure-reason rule, in-app payer cancellation, the April-2026 re-auth deadline), runs on WhatsApp (Brazil's business OS), prices in reais (R$49–199 where a $49 tool can't reach a MEI), and speaks colloquial PT-BR. A generic global dunning tool is structurally blind to all of it. Geography is the moat's foundation, not a coat of paint.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$49/mo (Starter, <50 payers) → R$99/mo (Pro, <200) → R$199/mo (studio/condo, <800). Optional success fee of 2–3% on *recovered* revenue for merchants who prefer outcome pricing.
- **ACV:** ~R$1,200/year blended (~$220 USD).
- **Rough math to $1M ARR (~R$5.5M):** ~4,600 merchants at R$99/mo. The gym segment alone (~35k) plus studios and autogestão condos makes 4–5k reachable.
- **Rough math to $5M ARR (~R$27M):** ~22k merchants, or fewer with the success-fee layer pulling ACV toward R$2k. Requires winning a second and third vertical beyond gyms (condos, course-sellers) and a PSP/white-label partnership funnel.
- **Expansion path:** start at recovery → add the success-fee on recovered cash → add a "novo aluno" consent-onboarding flow → become the merchant's whole Pix Automático ops layer, displacing the spreadsheet entirely.

## 9. Go-to-market wedge — first 100 customers

- **Scrape the gym/box directories.** Brazil has public lists of CrossFit boxes and academias by city + their Instagram/WhatsApp. DM 1,500 with a 40-second screen-recording showing "veja quais alunos vão sumir mês que vem." A 3–5% reply rate on a hair-on-fire money problem = 45–75 conversations.
- **Ride the April-2026 re-auth deadline.** Run targeted content + WhatsApp outreach: "Sua recorrência migrada vai quebrar em abril se o aluno não reautorizar — recupere antes." Time-boxed urgency converts.
- **Síndico/autogestão communities.** SíndicoNet, Facebook groups, and condo-management forums are dense and vocal. Offer a free "authorization health audit" of their first month — a falsifiable hook that surfaces money they're losing.
- **PSP co-marketing.** OpenPix/iugu want merchants to *succeed* on Pix Automático (their volume depends on it). Pitch FielPix as the retention layer they don't build; ask for a listing or referral.
- **Accountants (contadores).** Autogestão condos and MEIs lean on their contador. Recruit 10 contadores as resellers at a rev-share — each carries dozens of recurring-billing clients.

## 10. Build complexity — justification

Medium. The Pix Automático APIs (OpenPix, iugu, PagBrasil) are off-the-shelf, WhatsApp Business API is commodity, and the LLM recovery agent is standard tooling. The custom work is the **authorization-state model** (correctly tracking consent lifecycle across PSP webhooks and the masked-reason constraints) and the per-bank re-consent instructions. No model training, no hardware, no regulatory approval to launch (you sit on top of licensed PSPs). A technical founder who understands the Pix Automático spec ships v1 in 3–4 months.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates as a software layer on licensed PSP APIs; no money handling required. Respect Bacen's masked-reason rule and LGPD on payer data. |
| Ethical — no harm / dark patterns | ✅ | Helps merchants recover legitimately owed revenue and helps payers re-consent transparently; no hidden charges. |
| Market exists (evidence above) | ✅ | Mandate + record inadimplência + paid alternatives (Remit) + PSP race. |
| 1–5 person team can build this | ✅ | Off-the-shelf APIs; 1 technical founder + 1 ops/PT-BR support. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp + LLM credits; no capex. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 15/20 | Real, recurring, money-losing pain made acute by the mandate. Not yet "hair-on-fire searched" because the rail is <1yr old — intensity is rising, not peak. |
| Demand evidence | 15 | 10/15 | Strong aggregate signals (inadimplência stats, mandate, Remit as paid proxy, PSP funding) but thin *verbatim* customer voice on the specific Pix-Automático failure pain — it's too new. Honest gap. |
| Build feasibility | 15 | 11/15 | Off-the-shelf APIs; the authorization-state model and per-bank re-consent flows are the real work. 3–4 months. |
| Distribution clarity | 15 | 11/15 | Named lists (gym/box directories, síndico communities, contadores), a dated urgency hook (April 2026), realistic conversion. PSP co-marketing is uncertain. |
| Revenue mechanics | 15 | 11/15 | Pricing benchmarked to Remit/Pacto tiers; R$99 ACV credible; success-fee upside. Churn on a transactional micro-merchant base is the risk. |
| Time to first revenue | 10 | 8/10 | Self-serve + WhatsApp demo; first paid pilots in 4–8 weeks of launch. |
| Defensibility | 10 | 6/10 | Soft moat: accumulating per-bank re-consent know-how, authorization-health data, and workflow lock-in once it's the month-end ops screen. Copyable, but rail-specific domain depth slows clones. |
| **Total** | **100** | **72/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone fluent in the Pix Automático / Open Finance spec and PT-BR market.

### Key assumptions to validate (3–5)

1. **Assumption:** Small merchants experience silent Pix Automático failures often enough to pay to fix them. **How to test:** Connect 10 pilot merchants' PSP read-only feeds for one month; measure failed/cancelled authorization rate. Need ≥8% to justify the product.
2. **Assumption:** The merchant *can* legally see and act on enough failure signal despite Bacen's masked-reason rule. **How to test:** Map exactly which codes/events the PSP webhooks expose to receivers (CN01, DS0G, retry-exhaustion) vs. what's masked — confirm the actionable set is non-trivial.
3. **Assumption:** Merchants will connect a PSP and pay R$99/mo. **How to test:** Pre-sell 20 paid pilots from cold gym/síndico outreach before building the full recovery loop.
4. **Assumption:** WhatsApp re-consent flows actually recover authorizations. **How to test:** Run a manual recovery loop on 50 cancelled/failed auths; measure % re-consented within 7 days.

### Risk flags

1. **Platform dependency:** Entirely dependent on Pix Automático rail and PSP webhook richness. If Bacen tightens what receivers can see, or PSPs build this natively, the wedge narrows.
2. **Incumbent encroachment:** PSPs (iugu, PagBrasil) and dunning tools (Remit) could add authorization-health views. Speed and vertical depth (gyms, condos) are the defense.
3. **Market timing:** The rail is <1yr old; merchant awareness of the silent-failure pain may lag the mandate by 6–12 months. Could be slightly early.
4. **Regulatory:** Must respect the masked-reason rule and LGPD precisely; mishandling payer data is fatal.

## 14. Structured verdict

```
Score:                  72/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder fluent in Pix Automático/Open Finance + PT-BR market, plus one ops/support person
Time to revenue:        4–8 weeks to first paid pilot post-launch; ~3–4 months to launch
Capital to launch:      R$60–120k (~$11–22K USD)
Top 3 assumptions to validate first:
  1. Silent authorization-failure rate ≥8% on real merchant feeds — connect 10 pilots' read-only PSP data for a month
  2. PSP webhooks expose enough actionable failure signal despite Bacen's masked-reason rule — map the exposed code set
  3. Merchants pre-pay R$99/mo — close 20 paid pilots from cold gym/síndico outreach before full build
Kill criteria:
  - Abandon if failed/cancelled authorization rate is <5% across 10 pilot merchants (no pain to recover)
  - Abandon if <10% of 50 cold gym/síndico outreaches show interest after seeing the demo
  - Abandon if a PSP ships native authorization-health + recovery before your v1
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Read the OpenPix/iugu/PagBrasil Pix Automático webhook docs end to end; write down exactly which failure/cancellation events reach the receiver and which are masked. This alone confirms or kills the product — if the rail tells the merchant nothing actionable, there's nothing to build.
- **Day 3–4:** Cold-DM 60 independent gyms/boxes and post in 3 síndico autogestão groups with a 40-second mockup video of the authorization-health board + "veja quem vai sumir." Offer a free first-month audit.
- **Day 5:** Decide go / no-go on a falsifiable bar: **≥6 of 60 merchants reply asking for the audit, AND the webhook map shows ≥3 actionable failure event types.** Below either threshold, shelve it for 6 months until rail awareness matures.
