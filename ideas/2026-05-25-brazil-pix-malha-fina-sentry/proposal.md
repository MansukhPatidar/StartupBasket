---
title: "MalhaSentry — Pix-to-IRPF sentry for informal Brazilian earners"
slug: brazil-pix-malha-fina-sentry
date: 2026-05-25
category: FinTech / Brazil Informal & MEI-Adjacent Earners
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Watches Pix inflows via Open Finance and drafts the IRPF/MEI paperwork before Receita's AI calls."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Pix-native, WhatsApp-first, Portuguese, AI-agent, Consumer, Compliance-driven, SMB]
axes:
  problem: 17
  demand: 13
  build: 10
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 7
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# MalhaSentry — Pix-to-IRPF sentry for informal Brazilian earners

## 1. One-liner

Watches Pix inflows via Open Finance and drafts the IRPF/MEI paperwork before Receita's AI calls.

## 2. Trend signal — why now?

Three things stacked in the last 12 months made informal Pix income suddenly dangerous in Brazil:

- **IN RFB 2.278/2025 (Sept 2025).** Receita Federal forced every fintech and payment institution (Nubank, Mercado Pago, Inter, PagBank, PicPay, Stone, …) to send full transaction-level data through the e-Financeira pipe — **retroactively to January 2025**. First IRPF cycle with the full fintech dataset = **IRPF 2026, deadline 29 May 2026** (i.e. this week). 44 million declarations expected; ~20M still pending at the deadline.
- **AI-driven malha fina.** Receita's 2026 cross-checker now reconciles Pix inflows + card receipts + e-Financeira against declared income at the individual level. Press cycle through April–May 2026 hammered the threshold: monthly Pix > R$ 2,000 + no matching CNPJ + no declared "rendimento de trabalho" = audit candidate. Fines run 75% of unpaid tax for unintentional omissions, **up to 150% for repeat / qualified evasion**, retroactive 5 years.
- **The audience is enormous and growing.** 38.5M Brazilians work informally (IBGE Q1 2026). 14M+ are formalized MEIs (Sebrae). Almost everyone now collects via Pix — Pix processed >50B transactions in 2025. The "informal-but-getting-Pix" cohort is several tens of millions of people who suddenly have a paper trail.

Provenance:
  - Signal 1: Receita Federal AI cross-checks Pix vs declared income; R$2K/mo threshold flagged — https://en.clickpetroleoegas.com.br/pix-na-mira-da-receita-federal-movimentacao-acima-de-r-2-000-por-mes-muitos-depositos-e-renda-estranha-podem-te-jogar-na-malha-fina-btl96/ — May 2026
  - Signal 2: IN RFB 2.278/2025 mandates fintech e-Financeira retroactive to Jan 2025 — https://www.contabeis.com.br/noticias/72667/receita-cobrara-dados-retroativos-de-fintechs-a-partir-de-janeiro-pela-e-financeira/ — Sept 2025
  - Signal 3: 44M IRPF 2026 declarations expected; 14M+ MEIs; Pix dominant payment rail — https://agenciabrasil.ebc.com.br/economia/noticia/2026-03/saiba-quem-deve-declarar-imposto-de-renda-em-2026 — Mar 2026
  Category: Regulatory arbitrage

## 3. The opportunity

The incumbents (Contabilizei, Agilize, ContaAzul, Meu Contador Online) all sell to people who **already have a CNPJ** — registered MEIs, MEs, Simples Nacional companies — at R$ 100–300/month, with a contador-in-the-loop. They do not serve the much larger group that needs help right now: the informal earner whose Nubank/Mercado Pago account is quietly filling with Pix and who has heard, but doesn't fully understand, that Receita can now see all of it.

That person currently has two bad choices: (a) ignore it and hope, (b) call a contador who will charge R$ 500 to open a CNPJ they may not need yet, then R$ 200/month forever. The first is increasingly expensive (75–150% fines, 5-year lookback); the second is overkill until they cross R$ 81K/year.

A focused consumer-grade product can sit in the middle: read the Pix data the bank already has via Open Finance, classify each inflow as "business / personal / gift / rent / reimbursement," tell the user **monthly** whether they're tracking toward a malha-fina alert, and when the picture is clear, generate the right paperwork — DASN-SIMEI, IRPF Carnê-Leão, or a Sebrae-style MEI registration packet — through a WhatsApp Q&A in plain Portuguese. AI does the categorization + drafting; the user clicks "enviar."

The wedge is **the warning, not the filing**. Contadores file. Nobody warns.

## 4. Target market

- **Primary customer:** Self-employed Brazilians aged 22–45 receiving R$ 2K–R$ 15K/month via Pix without a CNPJ (or a sleeping MEI). Concrete archetypes: home-based hairdressers, manicures, doceiras, online tutors, fitness coaches, micro-influencers below R$ 5K/mo sponsor income, freelance designers/devs taking PJ side gigs, Uber/iFood drivers with tips, Airbnb sub-hosts, e-commerce resellers, igreja musicians, açaí window operators. Heavy in Tier-2/3 cities (Goiânia, Maringá, Feira de Santana, Manaus).
- **Why they buy:** Fear is now concrete and dated — IRPF deadline May 29 each year, fintechs already sent the data, friends started getting malha-fina notices. They want one app that tells them "you're OK" or "you have to do X by Y" without lecturing them or making them feel stupid.
- **Rough TAM reasoning:** 14M formal MEIs + maybe 10–20M informal Pix-earning self-employed. If even 1–2% pay R$ 25/mo = 200K–500K paid users = R$ 5M–15M MRR. Realistic year-3 target: 100K paying = R$ 30M/year ARR (~US$ 6M).
- **Why now for them:** First IRPF after retroactive e-Financeira; Pix Automático launched June 2026 (more inflows captured); WhatsApp news cycle saturating the topic; cousin / vizinho got a notice.

## 5. Product sketch (MVP)

- **Onboard in WhatsApp.** Connect Nubank / Mercado Pago / Inter / Caixa / BB / PagBank via Open Finance consent (Belvo or Pluggy widget). No spreadsheets, no CSVs.
- **Pix inflow inbox.** Each incoming Pix shows up with a 1-tap classify: "Cliente" / "Pessoal" / "Aluguel" / "Reembolso" / "Presente". LLM pre-classifies based on payer name + history + descriptor.
- **Malha-fina meter.** A live R$/month chart against the Receita red-line thresholds (R$ 2K/mo deposit flag, R$ 35,584/yr IRPF mandatory line, R$ 81K/yr MEI ceiling). Three colors: verde / amarelo / vermelho.
- **What-to-do card.** When the meter trips, the app says exactly what packet to file: Carnê-Leão this month, IRPF schedule by 29 May, abrir MEI now, desenquadrar para ME at 80% of ceiling.
- **One-tap DASN-SIMEI + IRPF assistant.** For users who already have a CNPJ, pre-fills the annual MEI declaration. For non-MEIs above the threshold, drafts the IRPF "Rendimentos Recebidos de PF" schedule with categories and totals.
- **MEI opening flow.** When the user crosses ~R$ 4K/mo for 3 consecutive months, walks them through the gov.br MEI registration (CNAE pick, endereço, atividades secundárias) and starts emitting the monthly DAS reminder.
- **Audit-defense pack.** If a malha-fina notice arrives, the app exports a labeled PDF of all classified Pix inflows for the period the Receita queries — a contador can pick this up and finish it.
- **Portuguese-first, jargon-light.** "Você recebeu R$ 4.230 em junho de clientes. Isso passa do limite — vamos abrir um MEI?" Not "regime de tributação."

## 6. AI angle — what's load-bearing

AI is doing the classification and the drafting:

1. **Categorizing Pix inflows** at scale. A user gets 30–300 Pix/month. Hand-tagging each one is the reason existing accounting apps lose people. LLM + heuristic (payer is recurring? name matches registered client? amount round? descriptor contains "pagamento"/"serviço"?) takes the median user from 200 untagged items to ~20 ambiguous ones.
2. **Drafting filings.** DASN-SIMEI fields, Carnê-Leão monthly entries, MEI registration CNAE selection — all turned into pre-filled forms from the same labeled data.
3. **Plain-Portuguese explainer.** Turning "você está acima do teto de receita bruta anual do Simples Nacional" into "você passou do limite do MEI — precisa virar ME, custa mais imposto mas evita multa."

Strip the AI out and you have an Excel + a YouTube tutorial, which is what most people already have and aren't using. The AI is what makes monthly use tolerable.

## 7. Localization angle (if any)

This is **Brazil-only and that's the point** — the moat is entirely local:

- **Pix + Open Finance Brasil** rails (no global analog at this depth).
- **e-Financeira + IRPF + MEI** quirks (CNAE codes, DASN-SIMEI schema, Carnê-Leão).
- **Pricing in reais** — R$ 19,90 / R$ 39,90 tiers, paid by — yes — Pix Automático recurring.
- **WhatsApp-first** distribution; 99% of the target uses it daily.
- **Portuguese-only** copy with regional warmth ("a gente cuida do chato pra você").

A US/EU clone of this idea would be irrelevant; an India/Mexico version is a separate product. Brazil-only is a feature, not a constraint.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Free tier (one connected bank, last 30 days) → **Pro R$ 19,90/mo** (all banks, all-history, malha-fina meter, monthly export) → **Pro+ R$ 39,90/mo** (MEI assistant, DASN-SIMEI auto-draft, audit-defense PDF, priority WhatsApp support).
- **ACV:** Blend R$ 25/mo → R$ 300/year (US$ ~60). Better than US consumer-tax apps' once-a-year R$ 50 because the value is monthly.
- **$1M ARR math:** 20,000 paying users × R$ 25/mo × 12 = R$ 6M/yr ≈ **US$ 1.2M ARR**. Plausible in 12–18 months if signup is single-digit % of Brazilian malha-fina news traffic.
- **$5M ARR math:** 100,000 paying users × R$ 25/mo. Needs ~0.5% of the informal-Pix cohort. Pix Automático makes the R$ 19,90 charge basically frictionless.
- **Expansion path:** (i) contador-marketplace handoff — when a user crosses ME ceiling, sell them a referral to a contador and take 1 month fee, (ii) labeled-data play for fintechs (segmentation of MEI-eligible Nubank users, with permission), (iii) "MalhaSentry para Contador" team plan at R$ 99/mo for contadores managing 20–50 informal clients.

## 9. Go-to-market wedge — first 100 customers

Concrete sequence:

- **TikTok / Kwai "vou cair na malha?" content.** A founder-led account that quotes the actual fine math from real Receita notices (with names blurred), CTA: free risk score in WhatsApp. Brazilian financial TikTok is enormous (Nath Finanças, Me Poupe, Primo Pobre comments are the audience). Target: 30 videos in 60 days, expect 1–3 to crack 500K views.
- **Cold-DM the people quoted in the Reclame Aqui Contabilizei threads** complaining about MEI desenquadramento confusion. 200 named users, personalized loom of the malha-fina meter. Expect 10–15% reply, 3–5% paid conversion.
- **Partner with 3 mid-tier finance influencers** (5K–50K followers) in nicho specifico — beauty entrepreneurs (manicure / cabelo), micro-fitness coaches, vendedoras online. Pay per-paid-signup R$ 30 (1 month's revenue) capped 12 months. Cheaper than CAC via paid ads.
- **WhatsApp group seeding.** Goiânia / Manaus / Salvador have hundreds of "Mães Empreendedoras," "Doceiras do bairro X" groups. Founder-as-member helping with one specific Receita question per week. Slow start, free, sticky.
- **IRPF deadline ambush (May).** Each year a 3-week campaign — landing page "Conferi minha malha em 90 segundos," translation: do the lightest possible Open Finance read, return a free score, paywall the fix.

## 10. Build complexity — justification

**Medium.** Off-the-shelf: Belvo or Pluggy for Open Finance (regulated AI/ITP licenses — they hold the cost, we pay per active connection ~R$ 0,80–2 each), LLM API for categorization + drafting, WhatsApp Business Cloud API for the bot, gov.br MEI flow is web — we just guide the user through it (no government API to certify). Custom: the Receita-rules engine (threshold math, CNAE picker, DASN-SIMEI / Carnê-Leão field mapping) and the malha-fina meter. ~3 months to a credible v1 with a 2-person team (founder + 1 dev who can read Receita docs in PT).

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | We don't represent the user before Receita; we surface their own data and draft documents they file themselves. No CFC / contador license needed for software. |
| Ethical — no harm / dark patterns | ✅ | Product encourages compliance, not evasion. Open Finance is explicit-consent. |
| Market exists (evidence above) | ✅ | 14M MEIs + millions informal, R$ 100–300/mo incumbents prove willingness to pay. |
| 1–5 person team can build this | ✅ | 2–3 people, 3–4 months to v1. |
| Launchable with <$50K / ₹40L | ✅ | Aggregator on usage, LLM on usage, WhatsApp Cloud cheap, no field team. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Hair-on-fire during May each year + a continuous monthly ambient anxiety. Fine math (75–150% × 5yrs) is unignorable once explained. |
| Demand evidence | 15 | 13/15 | Three independent regulatory + market signals; Contabilizei (1M+ users) proves the upmarket exists; informal tier is unmet. |
| Build feasibility | 15 | 10/15 | Open Finance + WhatsApp + LLM = mostly glue. Receita-rules engine and DASN-SIMEI field mapping is real but tractable. Belvo/Pluggy reliability + monthly per-CPF API limits are real constraints. |
| Distribution clarity | 15 | 12/15 | TikTok / Kwai + WhatsApp groups + IRPF-deadline ambush is concrete; finance influencer landscape is dense and cheap. CAC risk is the only soft spot. |
| Revenue mechanics | 15 | 11/15 | R$ 25/mo blended is benchmarked against Contabilizei R$ 99–300 and Nubank Ultravioleta R$ 24. Pix Automático makes recurring almost frictionless. Churn risk after May–June dip is real. |
| Time to first revenue | 10 | 8/10 | Pre-sale at landing page possible immediately; full v1 paying in ~12–14 weeks. |
| Defensibility | 10 | 7/10 | Receita-rules + CNAE-engine + accumulated user-labeled Pix dataset compounds. WhatsApp comms history is sticky. Not patent-grade; copyable in 12 months, but speed + brand wins the niche. |
| **Total** | **100** | **78/100** | GO. |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs a builder who can ship a WhatsApp + Open Finance app and a co-founder/contador who can encode Receita rules without screwing them up.

### Key assumptions to validate (3–5)

1. **Assumption:** Informal Pix earners will grant Open Finance consent to a 6-month-old startup. **How to test:** Pre-launch landing page with the Belvo widget live — measure consent completion rate on the first 200 organic clicks (target ≥30%).
2. **Assumption:** Willingness to pay R$ 19,90/mo for a "tax warning" tool from a non-contador brand. **How to test:** Run a Mercado Pago pre-sale page for the malha-fina meter; sell 100 annual subs at R$ 199 before writing a single line of product code.
3. **Assumption:** LLM Pix categorization hits ≥85% precision out of the box. **How to test:** Hand-label 500 anonymized Pix inflows from 5 friendly testers; benchmark LLM vs heuristic-only.
4. **Assumption:** CAC ≤R$ 30 via organic TikTok + cheap influencer deals. **How to test:** 30-day TikTok sprint with single influencer; measure paid signups vs spend.

### Risk flags

1. **Regulatory:** Receita could itself launch a "MEI Plus" companion app that nukes the wedge. Mitigant: government apps are bad; speed and product polish win the consumer.
2. **Platform dependency:** Open Finance aggregator outages or pricing changes (Belvo/Pluggy) can squeeze gross margin. Mitigant: integrate both, swap on cost.
3. **Seasonality:** April–June revenue spike, July–February dip. Churn could be brutal. Mitigant: position malha-fina as monthly, not annual; bundle MEI DAS reminder so the value is year-round.
4. **Liability creep:** If MalhaSentry's draft IRPF is wrong, users blame us. Mitigant: explicit "you file this yourself" disclaimer, contador-handoff for complex cases, errors-and-omissions insurance from year 2.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian technical founder + contador co-founder or close advisor; bonus if either has fintech (Nubank/Mercado Pago/Stone) background
Time to revenue:        10–14 weeks (pre-sale possible immediately)
Capital to launch:      R$ 80K–150K (~US$ 15–30K) — Open Finance fees, LLM, WhatsApp, one part-time contador, basic LGPD review
Top 3 assumptions to validate first:
  1. Open Finance consent completion ≥30% on cold landing page
  2. ≥100 R$ 199/year pre-sales via Mercado Pago checkout before build
  3. LLM Pix categorization ≥85% precision on a 500-item labeled set
Kill criteria:
  - Abandon if Open Finance consent completion <15% after 500 landing-page clicks
  - Abandon if a free / well-funded competitor (Nubank, Mercado Pago, Receita itself) ships an equivalent in-app warning before MVP
  - Abandon if LLM categorization stalls below 70% precision after two engineering iterations — manual tagging will sink retention
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the landing page in Portuguese — "Veja se você vai cair na malha fina em 90 segundos." Wire the Belvo sandbox widget. Add a Mercado Pago Pix checkout for an R$ 199/year pre-sale labeled "Acesso antecipado — devolução garantida se o app não estiver pronto até 30/09."
- **Day 3–4:** Run a small TikTok campaign — 5 founder-led videos quoting the Receita fine math + the R$ 2K monthly threshold, CTA to the landing page. Budget R$ 1,500 boosted.
- **Day 5:** Cold-DM 200 commenters from recent Receita / Pix news threads with a 60-second Loom of the malha-fina meter mockup.
- **Decision (end of week):** Go if **(a) ≥30% Open Finance consent completion of landing-page visitors AND (b) ≥30 R$ 199 pre-sales** in 7 days. No-go if either misses by half.
