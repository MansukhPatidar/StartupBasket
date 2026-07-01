---
title: "PixFiel — recurring-revenue medic for Brazil subscriptions"
slug: pix-automatico-mandate-recovery
date: 2026-07-01
category: FinTech / Brazil Subscription & Creator SMBs
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Diagnoses why every Pix Automático charge silently failed and runs the WhatsApp script that rescues the mandate before churn."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, Compliance-driven, SMB, Solo-builder, Creator]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PixFiel

## 1. One-liner

Diagnoses why every Pix Automático charge silently failed and runs the WhatsApp script that rescues the mandate before churn.

## 2. Trend signal — why now?

Brazil's Central Bank launched **Pix Automático** in June 2025 — the first real account-to-account recurring-payment rail in the country. Adoption is not gradual, it's vertical: transaction volume grew **182% quarter-over-quarter** between Q4 2025 and Q1 2026, and by mid-2026 Pix Automático already accounts for **19–28% of subscription payment volume** at merchants that switched. It beats cards on approval rate by ~20 percentage points.

But the rail has a brand-new failure mode nobody has tooled for. The **customer** — not the merchant — sets a per-charge ceiling and a daily Pix Automático limit inside their own bank app, and can cancel or suspend the mandate silently at any time. A charge above the ceiling fails or flags. Insufficient funds fails. A hit daily limit fails. The merchant just sees "failed" in the PSP dashboard with no *why-in-mandate-terms* and no fix. The entire recovery ecosystem today (Hotmart's Recuperador, Vindi/Mercado Pago dunning playbooks, WhatsApp recovery bots) was built for **card** failures — expired cards, declined authorizations — and is blind to mandate semantics.

Provenance:
  - Signal 1 (Demand): Card-shaped recovery is the only thing that exists — Hotmart "Recuperador Automático" and Vindi/Mercado Pago churn-involuntário content all describe card retries, not mandate ceilings/limits/suspension — https://blog.vindi.com.br/pix-recorrente/ + https://www.mercadopago.com.br/blog/pix-automatico-reduzir-inadimplencia — 2026-07-01
  - Signal 2 (Feasibility): Pix Automático now exposes webhook-driven retry APIs (allow_3R_7D: up to 3 retries in 7 days, 1/day) across Asaas, Vindi, Iugu, EBANX, Stripe — and Hotmart/Kiwify emit payment webhooks — so a non-PSP can sit on top — https://docs.stripe.com/payments/pix/pix-automatico + https://blog.asaas.com/release/pix-automatico/ — 2026-07-01
  - Signal 3 (Economic): 182% QoQ volume growth, 19–28% of subscription TPV, Brazil creator economy USD 5.47B (2025) → USD 33.6B (2034) at 22.3% CAGR — money is stampeding onto this rail — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ + https://www.imarcgroup.com/brazil-creator-economy-market — 2026-07-01
  Category: Tech-unlock

## 3. The opportunity

Every recurring seller on Pix Automático loses a slice of MRR each cycle to failed charges. On cards, an "expired card" retry logic recovers most of it. On Pix Automático the failure reasons are *different in kind* — the customer's mandate ceiling is too low for your R$97 plan, their daily limit is exhausted, or they killed the authorization in Nubank/Itaú without telling you. Generic card dunning can't diagnose or fix any of these, because the fix isn't "retry the same charge" — it's "text the customer the exact steps to raise their ceiling / re-authorize the mandate in their bank app."

The PSPs (Asaas, Vindi, Iugu, dLocal, EBANX) own the *rail* and won't build this — for them a failed mandate is one status field in a dashboard, and they serve API-integrated merchants. The gap is the **workflow layer** for the seller who is *not* a developer: they're on a no-code checkout (Hotmart, Kiwify, Guru, Eduzz) or a light PSP account, they see "falhou," and they have no idea why or what to say. PixFiel is a focused AI-first tool that reads the mandate/charge event stream, classifies the *mandate-specific* failure reason, and drives the recovery conversation on WhatsApp — the channel every Brazilian actually answers.

## 4. Target market

- **Primary customer:** Brazilian subscription sellers doing roughly R$20k–R$300k/mo in recurring revenue on Pix Automático — infoproduct/course creators on Hotmart/Kiwify/Guru, subscription-box operators, micro-SaaS, gyms/CrossFit boxes, clubs/associations, community/membership sellers. 1–3 people, no in-house dev.
- **Why they buy:** "I switched to Pix Automático because approval is better than cartão, but now when a charge fails I just get 'recusado' and my faturamento drops — I don't know if the client cancelled, ran out of limit, or set the ceiling too low, and I'm chasing people one-by-one on WhatsApp." Recovered MRR is the pitch — it pays for itself.
- **Rough TAM reasoning:** Kiwify alone reports 29k+ creators; Hotmart is larger; add Guru/Eduzz + non-infoproduct subscription SMBs (gyms, boxes, associations) and the pool of recurring sellers big enough to feel failed-mandate pain is comfortably in the low-to-mid **hundreds of thousands**. Even 0.5% penetration at R$150/mo is a real business.
- **Why now for them:** They migrated to Pix Automático in the last 12 months. The failure volume only became material once the rail crossed ~20% of their TPV — which is exactly mid-2026.

## 5. Product sketch (MVP)

- **One-click connect** to their checkout/PSP (Hotmart, Kiwify, Guru webhooks; Asaas/Vindi/Iugu APIs) — no code, paste a key.
- **Mandate health board:** every active Pix Automático mandate with a status — healthy / ceiling-too-low / limit-risk / suspended / cancelled-in-bank / insufficient-funds-pattern.
- **Failure diagnosis:** when a charge fails, PixFiel classifies *why in mandate terms* and tells the seller in plain Portuguese what actually happened.
- **WhatsApp recovery flows:** auto-sends the exact fix script for each failure type ("seu limite do Pix Automático está em R$50, aumente para R$97 assim: …" with bank-specific steps for Nubank/Itaú/Bradesco/Caixa) and books the re-authorization.
- **Smart retry orchestration:** fires the allowed 3-retries-in-7-days window at the right moments (after payday, after the customer confirms a top-up) instead of blindly.
- **Pre-emptive ceiling nudge:** flags mandates whose authorized ceiling is *below* the next scheduled charge (e.g. an annual price bump) and fixes them before they fail.
- **Recovered-MRR dashboard:** shows R$ recovered this month vs. the subscription fee — the retention hook.

## 6. AI angle — what's load-bearing

Two places AI does real work. First, **failure classification**: the raw signal is a terse, inconsistent status code from whichever PSP/checkout the seller uses, plus the mandate's history (past charge amounts, ceiling, limit hits, timing). Mapping that to the true human-readable reason — and distinguishing "customer actively cancelled" from "temporary limit hit" from "ceiling set too low at signup" — is a classification/reasoning problem across messy multi-source data, and getting it wrong burns the recovery. Second, the **WhatsApp recovery conversation**: it's a live multilingual (PT, with regional register) back-and-forth that has to read the customer's replies, pick the right bank-specific instructions, handle objections, and know when the mandate is genuinely dead vs. recoverable. Strip the AI out and you're left with a static dashboard and canned templates — which is exactly the useless thing the PSPs already ship. The AI is the product.

## 7. Localization angle

This is a **LatAm/Brazil-only play by construction** — the entire product exists because of a Brazil-specific payment rail (Pix Automático), a Brazil-specific regulatory structure (BCB mandate rules, CDC cancellation rights), and a Brazil-specific distribution channel (WhatsApp is *the* channel; Hotmart/Kiwify are the checkouts). Language is Portuguese-first with bank-specific instruction sets for the top Brazilian banks. Pricing is set in Reais at levels a solo creator accepts (R$97–R$397/mo), which no globally-priced churn tool bothers with. A generic global dunning product literally cannot serve this — it has no concept of a mandate ceiling. That's the moat's foundation.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers — Starter R$97/mo (up to ~200 active mandates), Growth R$247/mo (up to ~1,000), Pro R$397/mo (unlimited + priority WhatsApp flows). Optional success-fee variant: 15% of recovered MRR for sellers who prefer no fixed cost.
- **ACV:** blended ~R$220/mo ≈ **US$480/yr** (at ~R$5.5/USD).
- **Rough math to $1M ARR:** ~1,750 sellers × US$480/yr ≈ US$840k; ~2,100 sellers clears US$1M. Against a pool in the hundreds of thousands of recurring sellers, that's <1% penetration.
- **Rough math to $5M ARR:** ~10,500 sellers, or a smaller base with a higher-ACV Pro/agency tier (agencies managing many creators) + the success-fee upside on large sellers. Requires becoming the default recovery layer in 2–3 checkout ecosystems.
- **Expansion path:** ACV grows via mandate volume tiers, then add adjacent modules — pre-emptive ceiling management, cohort churn analytics, a "reactivation" campaign engine for dead mandates, and eventually a marketplace/agency plan for consultants who run many creators' billing.

## 9. Go-to-market wedge — first 100 customers

- **Kiwify/Hotmart creator communities:** these creators cluster in known Telegram/WhatsApp/Discord groups and Facebook groups ("Área de Membros", "Produtores Kiwify", etc.). Post a free "Pix Automático failure teardown" — show a real seller their failure breakdown — and convert. Target the ~29k Kiwify creators specifically.
- **Cold DM the pain:** scrape sellers publicly running subscription products on Hotmart/Kiwify marketplaces, DM/WhatsApp a personalized Loom-style teardown ("aqui está por que 7% da sua recorrência falhou mês passado e como recuperar"). This is a named list + named channel.
- **Infoproduct-adjacent influencers:** partner with 3–5 mid-size Brazilian creators who *teach* other creators how to sell (the "guru dos gurus" tier) — they have the exact audience and monetize via affiliate/rev-share. One good partner = hundreds of qualified sellers.
- **PSP/checkout co-marketing (later):** Asaas, Vindi and Iugu all want merchants to succeed on Pix Automático; a recovery layer that reduces their churn is a natural listing/integration partner — warm inbound once there's traction.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: LLM APIs for classification + conversation, WhatsApp Business API (or a BSP), standard web stack, webhook ingestion. The custom work is the **integration matrix** — each checkout (Hotmart, Kiwify, Guru) and each PSP (Asaas, Vindi, Iugu) has its own webhook/event shape and its own way of surfacing mandate state — plus building the *correct* bank-specific fix instructions and keeping them current. That's honest integration and domain work, not research. A technical founder + one helper ships a credible v1 (one checkout + one PSP + WhatsApp) in ~10–14 weeks, then expands the matrix. No novel ML, no hardware, no regulatory build.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Sits on top of BCB-licensed PSPs; respects CDC cancellation rights (won't re-charge cancelled mandates). No money handling. |
| Ethical — no harm / dark patterns | ✅ | Recovery must be honest — helps a willing customer fix a technical failure, never re-charges someone who genuinely cancelled. Guardrail this hard. |
| Market exists (evidence above) | ✅ | 182% QoQ rail growth, card-only recovery incumbents, active creator base. |
| 1–5 person team can build this | ✅ | Technical founder + 1; Medium complexity. |
| Launchable with <$50K / ₹40L | ✅ | API + WhatsApp costs are usage-based; no upfront capex. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Failed recurring charges = direct MRR loss, felt every cycle. Not quite hair-on-fire (they survive today with manual WhatsApp), but painful and recurring. |
| Demand evidence | 15 | 12/15 | Strong indirect signals — card-recovery incumbents, explosive rail adoption, active churn-recovery content market. Docked: no verbatim seller quotes surfaced yet (must validate). |
| Build feasibility | 15 | 11/15 | Off-the-shelf AI + WhatsApp, but the multi-checkout/multi-PSP integration matrix and bank-specific instruction upkeep are real work. |
| Distribution clarity | 15 | 12/15 | Named communities + named seller lists + influencer tier. Conversion math still a guess; free-teardown hook is strong. |
| Revenue mechanics | 15 | 12/15 | Reais pricing benchmarked to creator wallets; recovered-MRR framing makes ROI obvious. ~2,100 sellers to $1M is credible. |
| Time to first revenue | 10 | 8/10 | Free teardown → paid in weeks; self-serve. Gated only by shipping one checkout + one PSP integration. |
| Defensibility | 10 | 5/10 | Execution + accumulating mandate-failure data + bank-instruction library + checkout integrations = a real 6–12 month head start, but a PSP or a well-funded creator-tools player could copy the concept. Data/workflow lock-in is the durable part. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs someone who can build the integration matrix *and* genuinely understand Pix Automático mandate mechanics and the Brazilian creator ecosystem. Portuguese fluency and on-the-ground network are near-mandatory.

### Key assumptions to validate (3–5)

1. **Assumption:** A meaningful share (>4%) of Pix Automático charges fail for *mandate-specific* reasons that a script can actually recover. **How to test:** Get 5–10 sellers to share anonymized failure logs; classify reasons; measure the recoverable slice.
2. **Assumption:** Sellers will pay R$97–R$397/mo when the ROI is framed as recovered MRR. **How to test:** Run 20 teardown → offer calls; measure close rate and price sensitivity.
3. **Assumption:** WhatsApp recovery flows meaningfully out-recover the seller's current manual/card-style attempts. **How to test:** A/B a small cohort — PixFiel flow vs. their status quo — over 2 billing cycles.
4. **Assumption:** The checkout/PSP webhooks expose enough mandate state to diagnose failures without being the PSP. **How to test:** Build one Hotmart + one Asaas integration and confirm the event payloads carry ceiling/limit/cancellation signal.

### Risk flags

1. **Platform dependency:** Relies on Hotmart/Kiwify/PSP webhook access and WhatsApp Business API. If a checkout builds native mandate-recovery or restricts webhooks, the wedge narrows. Mitigate by spanning multiple ecosystems fast.
2. **Incumbent absorption:** Asaas/Vindi/Iugu could ship "smart Pix Automático recovery" as a feature. Mitigate by owning the *no-code seller* segment they underserve and going multi-PSP (agnostic > any single rail).
3. **Market timing:** Depends on Pix Automático failure volume being big enough *now*. If adoption plateaus below the pain threshold at small sellers, TAM shrinks. Adoption data says the opposite, but watch it.
4. **Compliance/ethics:** CDC is strict on cancellations. Re-charging or nagging a genuinely-cancelled customer is both illegal and reputationally fatal — the classification "cancelled vs. recoverable" must be conservative.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder, Portuguese-native, plugged into the Brazilian creator/PSP ecosystem
Time to revenue:        8–12 weeks (one checkout + one PSP + WhatsApp flow)
Capital to launch:      R$40k–R$80k / US$8–15K (mostly founder time + API/WhatsApp usage)
Top 3 assumptions to validate first:
  1. >4% of Pix Automático charges fail for recoverable mandate-specific reasons — verify with real seller logs
  2. Sellers pay R$97–R$397/mo on a recovered-MRR ROI pitch — verify with 20 teardown→offer calls
  3. Checkout/PSP webhooks expose enough mandate state to diagnose without being the PSP — verify by building one integration
Kill criteria:
  - Abandon if <4% of charges in real seller logs are recoverable in mandate terms (problem too thin)
  - Abandon if <10% of 30 teardown demos convert to paid within 60 days
  - Abandon if a major checkout (Hotmart/Kiwify) ships native mandate-recovery before v1 and closes webhook access
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Recruit 6–8 Brazilian subscription sellers already on Pix Automático (from Kiwify/Hotmart creator groups). Get anonymized failed-charge logs for the last 2 cycles.
- **Day 3–4:** Manually classify every failure into mandate-specific buckets (ceiling-too-low, limit-hit, cancelled-in-bank, insufficient-funds). Compute the *recoverable* percentage. Hand-run 10–15 WhatsApp recovery attempts using bank-specific scripts and measure how many revive.
- **Day 5:** Decide go / no-go. **Falsifiable bar:** ≥4% of charges are recoverable-in-mandate-terms AND ≥3 of 8 sellers say "yes, I'd pay R$150+/mo for this" after seeing their own recovered-R$ number. Below either line → no-go or rework the wedge.
