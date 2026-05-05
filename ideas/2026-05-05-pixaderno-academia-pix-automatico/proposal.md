---
title: Pixaderno — WhatsApp Pix Automático for Brazil micro-academias
slug: pixaderno-academia-pix-automatico
date: 2026-05-05
category: FinTech SaaS / Brazil Micro-academias + Solo Professores
complexity: Medium
score: 80
verdict: STRONG GO
confidence: Medium
oneLiner: WhatsApp-native Pix Automático cobrador that ends end-of-month chasing for solo gyms, jiu-jitsu mestres, and natação teachers.
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, Portuguese, SMB, Solo-builder, Recurring-billing, Brazil]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, content-heavy]
featured: true
---

# Pixaderno — WhatsApp-first Pix Automático cobrador for Brazil's micro-academias and solo professores

## 1. One-liner

WhatsApp-native Pix Automático cobrador that ends end-of-month chasing for solo gyms, jiu-jitsu mestres, and natação teachers.

## 2. Trend signal — why now?

Three things converged in the last 12 months:

1. **Pix Automático went live June 16, 2025** — the Banco Central rolled out recurring Pix as a permitted, mandatory product across all PSPs. For the first time, a solo professor de jiu-jitsu can take a one-time consent (autorização) from a student over a QR code and then *pull* R$150 from that student's account on the 5th of every month, with three automatic retentativas if balance is short. No card. No boleto. No agreement with a bank. The same rail that already moves R$25 trillion/year in Brazil now does subscriptions.
2. **60M Brazilians without a credit card** are now reachable for recurring services for the first time — Banco do Brasil and Agência Brasil estimate Pix Automático brings this entire segment online for subscription billing. That's the bottom half of any neighborhood academia's roster.
3. **Brazilian small academias bleed cash** — industry data: a small academia with 18% inadimplência and ticket médio R$119 loses R$20K+ in cash per quarter just from unpaid mensalidades. Migrating to débito recorrente cuts inadimplência to 3-5%. Pacto, Sponte, Vindi all publish this number because it's the obvious sales pitch — but they sell R$179-299/mo full-ERP packages to multi-unit gyms, not the solo professor with 40 students in a garage in Tatuapé.

The incumbents are gold-rushing the fat middle. The micro-tier — solo personal trainers, single-mat jiu-jitsu academies, swim teachers with 25 kids on Saturdays — is too small for them, too sophisticated for "Pix manual + caderninho", and too WhatsApp-native to log into a desktop ERP twice a month.

Provenance:
  - Signal 1 (demand): Brazilian academia industry data — 18% average inadimplência, R$20K/quarter losses for a small unit at R$119 ticket; recurring debit cuts to 3-5%. — https://blog.sistemapacto.com.br/debito-recorrente-academia-quanto-custa-como-implementar-2026/ — May 2026
  - Signal 2 (feasibility): Pix Automático launched June 16, 2025; built-in 3 retentativas/7 days; available via Asaas, Efí, PagBrasil, FitBank APIs at R$0-1.99/transaction with no MDR. — https://blog.asaas.com/release/pix-automatico/ + https://www.bcb.gov.br/content/estabilidadefinanceira/pix/pix-automatico-FAQ-participantes.pdf — May 2026
  - Signal 3 (economic): Pix Automático brings 60M previously-unbanked-by-card Brazilians into recurring; 32K-36K academias in BR (72% micro), plus tens of thousands of solo professores. — https://agenciabrasil.ebc.com.br/economia/noticia/2025-06/pix-automatico-beneficiara-60-milhoes-de-pessoas-sem-cartao-de-credito + https://medicinasa.com.br/academias-brasil/ — May 2026
  Category: Tech-unlock

## 3. The opportunity

Brazil has a horizontal recurring-billing layer (Vindi, Asaas, Cobre Fácil, Iugu) and a vertical academia-ERP layer (Pacto, Sponte, Next Fit, Tecnofit, GymRise, TatamePrime). Both target establishments with ≥100 active students and a person whose job includes "use o sistema". They both treat Pix Automático as an SKU bolted onto a fuller product.

The micro-tier sits below them. The solo personal trainer with 30 alunos, the jiu-jitsu professor with one tatame and 60 alunos, the natação teacher with 25 kids — they don't open a desktop. They live in WhatsApp. End of every month they personally type "Oi Maria, esqueceu da mensalidade?" 30 times. They use a planilha. They're losing 4-8 hours/month to dunning, plus 15-20% to inadimplência, plus ~R$3.81/charge to whichever maquininha they use for the few cards.

The 10× wedge: **a product that is 100% WhatsApp-native — for the operator AND the student — sells at R$49/mo, sets up Pix Automático in under 5 minutes per student via a single QR code, and then never asks the operator to log in again.** The operator commands cobranças by talking to a bot in the same WhatsApp they already live in. They get one daily WhatsApp summary: who paid, who didn't, who needs to be re-charged. That's it. No dashboard. No portal. No app.

Vindi/Asaas/Efí cannot make this product because they're horizontal — their UX must scale to anyone. Pacto/Sponte cannot make this product because their roadmap is locked into the full-ERP ladder. There's a 12-18 month window before one of them gets here, which is plenty for a focused team to take the micro-tier.

## 4. Target market

- **Primary customer:** Solo or 2-person service operators in Brazil running a recurring-mensalidade business with 20-200 active alunos: personal trainers (CREF), jiu-jitsu/judô/MMA mestres (single-mat academies), swim teachers, dance instructors, kids' karate, idiomas particulares, nutricionistas with monthly assinatura, and bairro-level micro-academias (≤R$360K/yr revenue, 1-2 funcionários). Geographies: SP, RJ, MG, RS, PR, GO, BA — the dense urban corridor where Pix already won.
- **Why they buy:** "Eu odeio cobrar mensalidade." End of every month is misery. They lose 18% of revenue to inadimplência, 4-8 hours to chasing, plus the awkwardness of cobrando a friend who's also a student. Pix Automático fixes the financial problem; WhatsApp-native UX fixes the human problem.
- **Rough TAM reasoning:** 32K-36K academias in BR, 72% micro = ~24K micro-academias. Add ~50K solo personal trainers + ~10K jiu-jitsu/judô/karate/muay-thai professores + ~15K dance/idiomas/natação solo teachers running mensalidade businesses. ≈100K addressable operators. At R$59/mo avg, full TAM is R$70M ARR. Capture 5% in 24 months = R$3.5M ARR.
- **Why now for them:** Pix Automático eliminates the "preciso de uma maquininha" objection that previously blocked recurring billing for unbanked-by-card students. The R$3.81/charge card-MDR penalty is gone. The 60M no-card population is suddenly reachable. End of 2025 → mid-2026 is the moment when "I should have moved to Pix Automático" goes from option to embarrassment.

## 5. Product sketch (MVP)

- **WhatsApp-only setup**: Operator scans QR, opens chat with the bot, says "Sou personal, tenho 30 alunos, R$120/mês". Bot generates a single shareable Pix Automático QR + link they send to each aluno via their normal WhatsApp.
- **One-tap aluno onboarding**: Aluno scans QR, lands in their bank app, taps "Autorizar". Done. No app install, no signup.
- **Auto-cobrança on the chosen day** of every month: Pix Automático pulls the mensalidade. If first attempt fails, retentativa runs 2× in 7 days automatically (Bacen rule).
- **Daily 7am WhatsApp summary** to the operator: "8 pagaram, 2 falharam, 1 retentativa amanhã." That's the whole dashboard.
- **Friendly auto-DMs** to alunos in the operator's tone (configurável: "amigo", "respeitoso", "casual"): T-3 reminder, T-0 thank-you, T+1 "deu erro, podemos tentar de novo amanhã?". Operator's name and voice — not "Equipe Pixaderno".
- **Voice command in WhatsApp**: Operator records audio "Adiciona o Lucas, R$150, dia 10" and the bot adds the aluno. No typing.
- **Lista de alunos via WhatsApp**: "Quem está atrasado?" → bot lists. "Pausa o Pedro" → bot pausa.
- **Boleto fallback** for the rare aluno who refuses Pix Automático.
- **Receipt PDFs and CREF-style relatório de receita** auto-generated for IR/contador.

## 6. AI angle — what's load-bearing

AI is doing two non-decorative things:

1. **Voice/text WhatsApp commanding** — the operator never logs in. Whisper/equivalent ASR + a small command-grounded LLM converts "adiciona a Júlia, mensalidade 130, começa dia 5 do mês que vem" into a structured aluno-creation call. This is the entire UX. Without it, you have just another web cobrança SaaS — Asaas already exists at that level. With it, you have a product the target persona will actually adopt.
2. **Tone-tuned auto-DMs** — the dunning messages need to sound like the operator wrote them. A small fine-tunable persona model rewrites every reminder in their voice (one-shot calibrated from 3-5 sample messages they've sent). Generic "Lembrete de pagamento" templates produce churn — students unsubscribe from the autorização. Tone-correct messages don't.

Strip the AI out and you're left with Asaas. Keep it in and you have a product that fits in WhatsApp the way Asaas never will.

## 7. Localization angle

This *is* the localization. Pix Automático only exists in Brazil. WhatsApp dominates Brazilian SMB ops. Portuguese tone-tuning is the moat — a generic English LLM will write "Lembrete de pagamento" in robotic PT. CREF / IR / nota fiscal de serviço integration is BR-specific. Pricing is in R$ at R$49-99/mo — sub-$20 USD pricing US tooling can't meet without bleeding.

If this works, the closest analog is Indonesia (QRIS recurring is being discussed, not yet live) and India (UPI Autopay exists but has friction with the e-mandate cap). Pixaderno can later port the playbook — but first version is BR-only, no global aspiration.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:**
  - **Base:** R$49/mo flat, includes 50 active alunos and 200 cobranças/mo.
  - **Pro:** R$99/mo, 200 active alunos, 1,000 cobranças, voice commands, branded WhatsApp persona.
  - **Pass-through fees:** R$0.99-1.99 per successful Pix cobrança (PSP fee from Asaas/Efí, no markup at first; markup of R$0.20 per charge introduced once retention is proven).
- **ACV:** ~R$840/yr at base, ~R$1,400/yr at Pro. Blended ACV ~R$960/yr (~$190/yr) once Pro mix stabilizes at ~30%.
- **Math to $1M ARR:** R$5M ARR ≈ 5,200 paying operators at R$960/yr blended. Realistic 18-month target. ~5% of 100K TAM.
- **Math to $5M ARR (R$25M):** ~26K operators or ACV expansion via R$0.50 markup per cobrança at scale. At avg 80 alunos × R$1.50/charge × 12 = R$1,440 of pure transaction margin per operator/yr. Mix of pricing tiers + transaction margin gets to R$25M ARR with ~13K operators.
- **Expansion path:**
  - **Per-aluno tier creep** as operators grow.
  - **Transaction take-rate** (R$0.20-0.50 markup once trust is built).
  - **Adjacent monetization:** nota fiscal automática, IR-ready relatórios (R$29/mo add-on), CREF receita IRPF integration, antecipação de recebíveis (split with Asaas/Efí).
  - **Vertical packs:** "Pacote Jiu-Jitsu" with graduação reminder, "Pacote Natação" with absence tracking.

## 9. Go-to-market wedge — first 100 customers

Concrete playbook:

1. **Instagram + TikTok DMs to a curated list of solo professores** (week 1-4): scrape ~3,000 profiles from #personaltrainersp, #jiujitsubrasil, #professordenatacao with active stories of cobrança pain ("aluno some no fim do mês" memes are everywhere). Personalized DM with a 60-second screencast: "Te conto como acabar com a maratona de cobrança de fim do mês — 5 minutos por aluno e nunca mais." Expect ~3% reply, ~30% reply→trial, ~40% trial→paid. 3000 × 0.03 × 0.30 × 0.40 = ~11 paying. Repeat 10×.
2. **Sponsor one episode each of Brazilian fitness micro-podcasts** (week 4-12): "Podcast do Personal", "Cafezinho do Tatame", regional jiu-jitsu YouTubers. R$500-2,000 per slot, ~3K-15K listens, 0.5-2% trial rate.
3. **Partner with 5 CREF-influencers** running paid courses for newly-formed personal trainers ("como abrir seu negócio de personal"). Pay R$500/mo + R$50 per converted referral. Their entire course audience is the perfect ICP and they need monetization.
4. **WhatsApp groups of professores** (regional). Sponsored posts in groups admin'd by já-clientes.
5. **Reclame Aqui + ReclameAqui-style prospecting**: scrape complaints about "inadimplência alunos" / "Asaas + planilha" pain. Cold WhatsApp.

Channel #1 alone gets to 100 paying in 12-16 weeks. Channels #2-#5 keep the funnel full.

## 10. Build complexity — justification

**Medium.** Off-the-shelf:
- Pix Automático API via Asaas, Efí, or PagBrasil (~2 weeks integration).
- WhatsApp Business Cloud API via Meta directly or Twilio.
- ASR via Whisper API; LLM via Claude/OpenAI.

Custom:
- Tone-tuning the auto-DM persona (light fine-tune or system-prompt + few-shot).
- Bot dialogue: aluno onboarding flow, voice command grounding, daily summary scheduler.
- Idempotent retentativa orchestration (Bacen rules: 3 attempts in 7 days at the same value).
- Operator IR/contador relatório PDF generation.

A 2-person team (1 backend + 1 product/design who can do front-end and product copy in PT-BR) ships v1 in 12-14 weeks. Need a Brazil-incorporated CNPJ to receive Pix Automático directly, OR partner with Asaas as sub-account (faster, lower margin initially — recommended path).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Pix Automático is a Bacen-approved product; sit on top of an authorized PSP (Asaas, Efí). No proprietary financial license needed. |
| Ethical — no harm / dark patterns | ✅ | Aluno explicitly authorizes via bank app; can revoke anytime per Bacen rules. Tone-tuned messaging is opt-in by operator. |
| Market exists (evidence above) | ✅ | 100K+ addressable operators; pain quantified at R$20K/quarter for the average small unit; 18% inadimplência baseline. |
| 1–5 person team can build this | ✅ | 2-person team, 12-14 weeks to v1. Off-the-shelf APIs do all the heavy lifting. |
| Launchable with <$50K / ₹40L | ✅ | ~R$80K ($16K) — 3 months of two builders' opportunity cost + R$5K Asaas/WhatsApp testing + R$5K marketing seed. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire end-of-month pain, felt monthly, quantified at 4-8 hours + R$20K/quarter for a small unit. Not 18-20 because the workaround (planilha + manual WhatsApp) does technically function. |
| Demand evidence | 15 | 13/15 | Multiple incumbents (Vindi, Asaas, Pacto, Sponte, GymRise, TatamePrime) charging R$99-299/mo prove the market; their existing customer testimonials prove inadimplência reduction; Banco Central data on Pix Automático adoption confirms the rail works. Not 14-15 because the *micro-tier specifically* is inferred from incumbent positioning, not direct verbatim quotes from the bottom-of-market segment. |
| Build feasibility | 15 | 12/15 | Off-the-shelf APIs (Asaas, WhatsApp Cloud, Whisper, LLM). Real work is in the WhatsApp-only UX, voice grounding, and tone-tuning. Not 13-15 because there's a non-trivial integration with PSP retentativa rules and CNPJ/sub-account compliance. |
| Distribution clarity | 15 | 12/15 | Instagram/TikTok DM channel with named hashtags + CREF-influencer partnership has clear conversion math. Not 13-15 because Brazilian fitness influencer market is noisy and the personal-trainer ICP has been targeted by adjacent SaaS (PersonalGO, Tecnofit) — pricing and positioning need to differentiate sharply. |
| Revenue mechanics | 15 | 12/15 | R$49-99/mo prices benchmarked against incumbents (R$99-299) and against the average operator's quantified loss (R$20K/quarter) — clear willingness-to-pay. Path to R$5M ARR with 5K-13K operators is realistic. Not 13-15 because the transaction-margin layer depends on PSP terms staying generous; if Asaas raises take rates, gross margin compresses. |
| Time to first revenue | 10 | 8/10 | Self-serve trial → paid in 14 days realistic. Operator pays before all alunos are onboarded — they pay to *start* the migration, not after they finish. |
| Defensibility | 10 | 6/10 | Soft moat: WhatsApp persona/tone calibration improves with usage data; operator workflow lock-in once 60+ alunos are on Pix Automático auth (revoke is per-aluno, painful at scale); Pacto/Sponte are too busy moving up-market. Not 7-10 because Asaas itself could clone the WhatsApp-native UI; first-mover head start is the moat. |
| **Total** | **100** | **80/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (PSP integration, voice/LLM grounding, retentativa orchestration), `content-heavy` (PT-BR tone-tuning, fitness/jiu-jitsu sub-cultural fluency for marketing).

Ideal team: 1 BR-based BR-Portuguese-native founder who has done either fintech integrations or fitness vertical work, plus 1 LLM-fluent engineer. CREF connection is a multiplier.

### Key assumptions to validate (3–5)

1. **Assumption:** Solo professores will pay R$49/mo to escape end-of-month chasing. **How to test:** 30 cold WhatsApp interviews with personal trainers/jiu-jitsu professores in SP and RJ. Show clickable Figma; ask "would you pay R$49/mo for this *today*?" Target: ≥40% yes.
2. **Assumption:** Aluno-side Pix Automático autorização conversion is ≥70% on first share. **How to test:** Before building, partner with 1 friendly academia, send the Pix Automático QR to 50 alunos via their existing system (no Pixaderno needed), measure autorização rate. <60% = product is dead unless aluno-side incentive (e.g., 1ª mensalidade -10%) is bundled.
3. **Assumption:** WhatsApp-only UX is *preferred* over web dashboard. **How to test:** Wizard-of-Oz prototype — manually run the bot for 5 paying operators for 30 days, measure NPS and "would you go back to a dashboard?" responses.
4. **Assumption:** Asaas/Efí/PagBrasil sub-account margins remain healthy enough to pass through. **How to test:** Negotiate signed term sheet with one PSP for 2026 take rates before committing to v2 pricing.
5. **Assumption:** The 18% inadimplência → 3-5% migration story closes the sale on a 14-day trial. **How to test:** A/B the landing page — "ROI calculator" vs. "feature list" — measure trial-to-paid conversion delta.

### Risk flags

1. **Platform dependency:** Two single-points-of-failure — Pix Automático rules from Bacen, and WhatsApp Business API policy from Meta. If Bacen tightens retentativa rules or Meta reclassifies Pix-related templates as "marketing", unit economics shift fast. Mitigation: keep boleto fallback live; multi-PSP integration from day 30.
2. **Incumbent reaction:** Asaas could ship a "Pix Automático para personais" SKU in 6-9 months at near-zero cost since they already own the rail. Speed and brand-in-niche are the only real defenses. The Pacto/Sponte route (slow because they're busy with multi-unit gyms) is less worrying.
3. **Aluno-side friction:** If banks make autorização painful for 60M-no-card users (UX bugs, balance-check intermittency), conversion craters. Pixaderno cannot fix bank UX — must monitor and route around the worst banks. Mitigation: bank-conversion-rate dashboard from week 1.
4. **Brand risk:** "Pixaderno" is cute but tonality-risky in a regulated PT-BR fintech context. Validate name with 30 ICPs before committing.

## 14. Structured verdict

```
Score:                  80/100
Verdict:                STRONG GO
Confidence:             Medium
Best-fit builder:       BR-based 2-person team. 1 fintech-integration engineer + 1 PT-BR product person with fitness/martial-arts sub-cultural fluency. CREF advisor on retainer.
Time to revenue:        10-14 weeks (closed-beta → first 20 paying)
Capital to launch:      R$80K (~$16K) — 3 months team opportunity cost + Asaas/WhatsApp test fees + Instagram/TikTok seed marketing
Top 3 assumptions to validate first:
  1. 30 cold WhatsApp interviews with personal trainers/jiu-jitsu professores in SP+RJ; ≥40% say "would pay R$49/mo today"
  2. Aluno-side Pix Automático autorização ≥70% on first share (run with 1 friendly academia BEFORE building)
  3. WhatsApp-only UX preferred over dashboard — Wizard-of-Oz with 5 paid operators for 30 days
Kill criteria:
  - Abandon if aluno-side autorização <60% after 200 attempted onboardings
  - Abandon if Asaas/Efí ships an equivalent WhatsApp-native SKU before week 12
  - Abandon if cold-DM trial-to-paid <15% after 500 contacted operators
  - Abandon if Bacen tightens Pix Automático rules in a way that breaks retentativa or unauthenticated onboarding
```

## 15. Next step — 1-week validation sprint

- **Day 1-2**: Build a 90-second Loom in PT-BR — operator persona, tour of fake Pixaderno bot inside WhatsApp. Build a one-page landing in PT-BR with a "comece grátis 14 dias" form (no real product yet).
- **Day 3-4**: Scrape 500 personal trainers + 200 jiu-jitsu professores from Instagram (#personaltrainersp, #jiujitsubrasil, regional tags). Personalized cold DMs (Loom + landing). Track reply rate, signup rate, NPS-style "what's your worst part of cobrança?" reply.
- **Day 5**: Run 5 live 20-minute calls with operators who replied. Show the Loom. Hard-ask: "Would you pay R$49/mo today, with annual discount?" Measure verbal yes rate AND paid-pre-order rate (ask for R$49 pix as deposit).
- **Day 6-7**: Decide go / no-go.

**Falsifiable result:** Sprint passes if (a) cold-DM reply rate ≥4%, (b) ≥40% of live calls verbally commit, AND (c) ≥3 operators paid the R$49 deposit. Anything else = back to Stage 2 with sharper ICP cut (e.g., jiu-jitsu only, or natação only).
