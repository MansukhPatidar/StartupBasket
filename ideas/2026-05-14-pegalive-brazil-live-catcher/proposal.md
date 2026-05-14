---
title: "PegaLive — IG Live order catcher for Brazil revendedoras"
slug: pegalive-brazil-live-catcher
date: 2026-05-14
category: Social Commerce / Brazil
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "App that rounds up every comment-to-buy from your IG Live and queues PIX-linked DMs — no notebook."
tags:
  vertical: Retail
  model: SaaS
  geography: LATAM
  secondary: [Instagram-first, PIX-native, WhatsApp-first, Solo-builder, SMB, Portuguese, AI-agent]
axes:
  problem: 16
  demand: 11
  build: 10
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 6
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# PegaLive — IG Live order catcher for Brazil revendedoras

## 1. One-liner

App that rounds up every comment-to-buy from your IG Live and queues PIX-linked DMs — no notebook.

## 2. Trend signal — why now?

Brazilian live commerce hit an inflection point in late-2025/early-2026. Three things converged:

- **Live-conversion gap is too big to ignore.** Mimo Live Sales reports 10% average conversion on lives, up to 30% in some segments, vs 1.6% for standard e-commerce. Brazilian viewers comment at ~54% during lives vs the 32% global average. This high-engagement, high-conversion combo is why every clothing reseller in Goiânia, Recife and Belo Horizonte is now running 2-4 lives a week.
- **TikTok Shop landed Brazil in 2026.** Fresh second venue alongside Instagram + Facebook lives means more sellers, more chaos, more inbound demand for tooling.
- **PIX Cobrança + dynamic QR + Pix Automático matured.** A reseller can mint a per-order PIX charge URL in <300ms, embed it in a DM, and reconcile when paid. The plumbing exists; the user experience for solo sellers does not.

What's missing is the layer between the live broadcast and the shipping label. Today that layer is a paper notebook plus a tired thumb on WhatsApp.

Provenance:
  - Signal 1: Brazil live commerce 10-16% conversion, 54% of viewers comment vs 32% global avg — https://blog.investvietnam.co/the-state-of-tiktok-shop-in-vietnam-in-2026/ + https://learn.g2.com/live-commerce — 2026-05-14
  - Signal 2: Mimo Live Sales 10% avg / 30% peak conversion, 200+ brands across 6 countries, integrates VTEX/Shopify — https://mimo.com.br/en-US — 2026-05-14
  - Signal 3: TikTok Shop launched Brazil 2026; "comment-to-DM is the most effective live-sales workflow in 2026" — https://www.inro.social/blog/instagram-live-shopping + https://blog.investvietnam.co — 2026-05-14
  - Signal 4 (feasibility): PIX Cobrança dynamic QR API live; Pix Automático recurring rolled out 2025 — https://www.pagbrasil.com/blog/news/pix-cobranca-and-pix-api/ — 2026-05-14
  Category: Geographic arbitrage

## 3. The opportunity

The live-commerce platform market in Brazil (Mimo, StreamShop, 4Show, ShopLive, Vnda) is built for **brands and stores** — sellers with a Shopify, VTEX or Magento backend, R$200-2,000/mo ACV, and a marketing team. They integrate at the e-commerce platform level.

The *solo revendedora* with no e-commerce store — the woman selling 80 pieces of clothing per live from her bedroom, paying suppliers cash, doing PIX manually — is invisible to this segment. She's too small for Mimo's sales motion, too unsophisticated for VTEX, and too cheap to pay $200/mo for a feature she only needs during the 90-minute live window.

Her current stack: paper notebook + iPhone Notes + 6-hour post-live WhatsApp marathon. She loses 20-30% of declared orders to forgetfulness, lost handles, sold-out-by-the-time-she-DMs-back. That's R$2,000-6,000 of lost gross per live for a R$15k-50k/mo seller.

The wedge is **the 90 minutes of the live**. Watch comments in real time, build a per-buyer order sheet automatically, generate the PIX charge link the instant she stops streaming, send the DM the instant a payment lapses past 10 minutes. Replace the notebook + the post-live marathon, charge R$79/mo, never touch e-commerce integration. Compete on focus, not feature count.

## 4. Target market

- **Primary customer:** Brazilian female reseller, 25-45, selling apparel / cosmetics / kids items / home decor via Instagram + Facebook Live. R$10k-50k/month gross. Operates from home, 0-2 helpers, no e-commerce store, no Shopify, no formal CNPJ in many cases (uses MEI). Tier-2 cities: Goiânia, Recife, Belo Horizonte, Campinas, Manaus, Cuiabá, plus inner-São Paulo suburbs.
- **Why they buy:** Every live, the reseller watches 50-150 "EU QUERO", "ME GUARDA", "VENDIDO peça 7 tam M" comments fly past. She can't capture them all. After the live she spends 2-4 hours rewatching her own video, matching @handles to product codes, then DM-ing each buyer asking for confirm + sending a PIX link. By the time she DMs, ~30% of buyers have moved on. The pain hits 8-16 times a month and it is the difference between a R$30k month and a R$40k month.
- **Rough TAM reasoning:** Brazil has 10.1M women-led businesses (SEBRAE 2022, recovered post-pandemic). Conservatively 200k-500k are running active Instagram/Facebook lives weekly — pulling from MLM networks (Hinode, Natura, Avon resellers ~3-4M total, of whom a fraction are live-active), plus independent clothing/cosmetics resellers. Bottom estimate: 200k addressable solo live-sellers.
- **Why now for them:** TikTok Shop just opened Brazil. More platforms = more parallel lives = more chaos. PIX has 95% banking-population penetration, so the payment leg is finally one-tap not multi-step. WhatsApp Business API pricing dropped enough to be viable for SMB.

## 5. Product sketch (MVP)

- Connect your Instagram + Facebook business account once (OAuth via Meta Graph API).
- Hit "Start Live Catch" before you go live; PegaLive sits in the background and pipes every live comment into a real-time feed parsed for **intent + product reference + size/variant + buyer handle**.
- Comment "EU QUERO peça 7 tam M" → automatically becomes a draft order row: `@cliente_x · Peça 7 · M · R$89 · status: aguarda confirmação`.
- Tap the row → app generates a PIX Cobrança dynamic QR + payment link, drops it in a templated WhatsApp / IG DM ready to send. Send one-tap or batch send (rate-limited under 100/day for IG safety).
- Live "Sold-Out Alert" — when a product hits its declared stock, banner overlays on your phone so you stop saying "ainda tem!" on camera.
- Post-live reconciliation: every PIX paid auto-marks order ✅; auto-nudge DM at T+30min, T+2h, T+24h for unpaid orders.
- Export: ready-to-print shipping labels (Correios / Loggi / SuperFrete), CSV of paid orders, monthly MEI revenue report.
- Portuguese-first UI. Voice notes between you and PegaLive in PT-BR for adjustments mid-live ("guarda mais 2 da peça 3 pra @ana").

## 6. AI angle — what's load-bearing

AI does three things only AI can do at this price point:

1. **Real-time live-comment parsing in messy Brazilian Portuguese.** Comments come in regional slang ("ME PEGA o vestido azul tamanho médio amor"), with typos, with emojis, with multiple products in one comment. Rule-based regex would catch 40%. A small multimodal LLM tuned on PT-BR live-sale corpus catches 90%+. Without this the product is useless.
2. **Product disambiguation.** Reseller says on camera "agora a peça 7, R$89, P M G" — speech-to-text + visual frame capture binds product code "peça 7" to current SKU and price. Comment parser can then reference it.
3. **Smart DM prioritization under rate limits.** Instagram caps DMs at ~100-150/day. With 200+ buyers, you need a model that ranks DMs by likelihood-to-pay (past payment history, comment confidence, time since live) and queues the rest into WhatsApp Business fallback.

Remove the AI, you get a manual order spreadsheet with a paper notebook beside it. Useless.

## 7. Localization angle

This is geographic arbitrage of an already-existing pattern (US/UK use Whatnot / TikTok Shop with built-in checkout; Brazil resellers are stuck on Instagram with manual PIX).

- **Language:** PT-BR-only at launch. Regional slang lexicon trained on real Brazilian live-sale comment corpus.
- **Payment rail:** PIX-native. No Stripe, no card. PIX Cobrança dynamic QR (one charge per order, auto-reconciles via webhook).
- **Pricing:** R$79/mo (~$15 USD) main tier; R$149/mo for power sellers (2+ lives/wk, 200+ orders/mo). At R$79 the math works for a R$15k/mo seller; at $49 USD-equivalent it wouldn't.
- **Distribution channel:** WhatsApp groups, Instagram creator partnerships with revendedora coaches like @SamaraLeao_oficial, @vendamais_revendedora. SEBRAE municipal workshops in Tier-2 cities.
- **Regulatory:** MEI-friendly invoicing (generates the simplified NFS-e Avulsa where needed). Stays out of full GST/CFDI-style compliance overhead.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$79/mo Starter (1 live/wk, up to 100 orders/live). R$149/mo Pro (unlimited lives, 500 orders/live, WhatsApp Business fallback included). R$299/mo Network tier for revendedora "leaders" managing 5+ sub-resellers.
- **ACV:** Blended R$1,200/yr (~$220 USD) — assumes 60% Starter, 35% Pro, 5% Network.
- **Path to $1M ARR (~R$5.5M):** ~4,500 paying customers × R$100/mo avg. With 200k addressable, that's 2.25% penetration. Aggressive but reachable in 18 months with creator-led GTM.
- **Path to $5M ARR (~R$27M):** ~22,500 paying customers. Requires either (a) cross-platform expansion to TikTok Shop Live + Kwai, (b) a network/leader tier that drives multi-seat adoption, or (c) take-rate on PIX (1.5% fee on transactions above plan limit).
- **Expansion path:** Add take-rate on PIX volume → start as $X/mo SaaS, slowly become a payments platform with embedded shipping, lending, supplier financing. Mimo went brand-direction; PegaLive goes seller-direction. Same destination, different lane.

## 9. Go-to-market wedge — first 100 customers

Concrete playbook, ordered:

- **Direct outreach to 200 reseller-coach influencers (weeks 1-3).** There's a well-defined micro-niche on Instagram of "consultoras de revendedoras" — women who teach other women how to sell on lives. They have 5k-80k followers each. Offer a 50% lifetime affiliate split + free Pro plan. Target 8-12 to actually push it to their list.
- **Hinode / Natura / Avon WhatsApp groups (weeks 2-4).** These MLM networks have publicly-visible WhatsApp recruitment groups (you can find 50+ via Google). Get permission from group admins, then offer free pilot to top 3 sellers per group. Expect 5-10 paying converts per group, slow but compounding.
- **Live-along onboarding (weeks 4-8).** First 50 customers get a 30-min Loom + one live where founder dials in and watches their first PegaLive-assisted broadcast. Conversion rate of pilot-to-paid: target 60%.
- **Reels + comparison content (weeks 6-12).** Short PT-BR Reels showing "live com caderno" (chaos) vs "live com PegaLive" (calm). Geared toward Instagram's PT-BR live-commerce search terms.
- **SEBRAE Tier-2 workshop seeding (weeks 8-16).** SEBRAE runs in-person workshops for women micro-entrepreneurs. Offer them the tool as a workshop give-away. SEBRAE referred 80% of women entrepreneurs in 2022 to their primary support source — strong proxy channel.

Not "we'll do content marketing." Each line above is a named list, named channel, plausible conversion math.

## 10. Build complexity — justification

**Medium.** A 2-person team in ~12-14 weeks. The components:
- Off-the-shelf: PIX Cobrança API (Asaas, Gerencianet, Banco Inter, Stripe-BR), WhatsApp Business Cloud API, Meta Graph API webhooks, an LLM API for PT-BR parsing (Claude or OpenAI), Correios/SuperFrete shipping APIs.
- Real custom work: (1) Meta Business Verification + Instagram Live Comments webhook approval — bureaucratic but tractable, 2-4 weeks of paperwork; (2) PT-BR live-comment parsing — fine-tuned via 5k-10k labeled real comments collected from public lives during validation; (3) reliable iOS/Android background app that survives Apple's mid-broadcast app-suspend behavior.
- The Meta Graph API webhook approval is the biggest risk axis. Without it, you're polling, which means lag and rate limits.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Meta Graph API ToS compliant if approved; PIX Cobrança via licensed PSP; LGPD-compatible with standard consent. |
| Ethical — no harm / dark patterns | ✅ | Buyer is opting-in by commenting EU QUERO. No covert scraping. DMs are reseller-initiated. |
| Market exists (evidence above) | ✅ | 200k+ active live-sellers in Brazil; existing platforms ignore solo segment. |
| 1–5 person team can build this | ✅ | 2-person team, 12-14 weeks. |
| Launchable with <$50K / ₹40L | ✅ | ~$30k-$40k for 14 weeks of build + initial Meta verification + LLM inference budget. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Weekly+ pain; quantifiable lost revenue per live (~R$2-6k); current workaround (notebook) is clearly broken. Not hair-on-fire only because revendedora has tolerated it for 2 years. |
| Demand evidence | 15 | 11/15 | Strong indirect signals: Mimo's 200-brand traction, comment-to-DM described as "the workflow" in 2026 sources, PT-BR live commerce growth. Weak on direct verbatim revendedora quotes — that's the #1 validation gap. |
| Build feasibility | 15 | 10/15 | Doable in 12-14 weeks but Meta Graph API approval + reliable background mobile capture + PT-BR parsing quality is gnarly. Not solo-4-weeks easy. |
| Distribution clarity | 15 | 12/15 | Named channels (reseller-coach Instagrammers, MLM WhatsApp groups, SEBRAE). Conversion math plausible. Risk: depends on creator-affiliate willingness. |
| Revenue mechanics | 15 | 12/15 | R$79-149/mo pricing benchmarked against Bling/InstaDelivery; customer count for R$1M ARR is reachable; expansion to PIX take-rate is a credible second leg. |
| Time to first revenue | 10 | 7/10 | 8-10 weeks to first paid pilot, given Meta verification timeline. Free trial → paid conversion is the bridge. |
| Defensibility | 10 | 6/10 | Meta Graph API approval + accumulated PT-BR live-comment training corpus + reseller-coach community = soft moat. Copyable in 12 months by a well-funded competitor. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` (Meta Graph API + real-time comment processing + PIX integration) and `sales-heavy` (PT-BR creator-led distribution; the founder ideally speaks Portuguese and knows the revendedora world).

Ideal team: one Brazilian technical founder who has shipped a consumer mobile app, one Brazilian operator with a network into Hinode/Natura/MEI revendedora communities. If both are non-Brazilian-native, this is a hard PASS — the language and cultural fluency requirement is real.

### Key assumptions to validate (3-5)

1. **Assumption:** Solo revendedoras will pay R$79/mo for live-order capture vs a free notebook. **How to test:** Cold-DM 50 active live-resellers identified via #revendedora #liveroupas hashtags, offer 30-min interview + R$50 gift, then ask: "if this app captured every EU QUERO automatically and DMed the PIX link, would you pay R$79/mo? R$49? R$149?". Target 15 completed interviews.
2. **Assumption:** Meta Graph API will approve a business verification for live-comment webhook access for this use case. **How to test:** Submit early skeleton app for review in week 1; track time-to-decision and conditions. Kill the project if blocked after 6 weeks.
3. **Assumption:** PT-BR comment parsing can hit ≥90% intent-extraction accuracy on 100 real live comments. **How to test:** Manually transcribe 500 comments from 5 public lives; eval a Claude/GPT prompt vs ground-truth. Iterate until accuracy holds.
4. **Assumption:** Reseller-coach influencers will affiliate-promote at 50% LTV split. **How to test:** Pitch 20 coaches in week 2; measure response rate + conversion to signed affiliate. Target 6 signed.
5. **Assumption:** PIX Cobrança via a single PSP (Asaas or Inter) covers 95% of resellers without account-setup friction. **How to test:** Onboard 10 pilot revendedoras through Asaas flow; measure dropout at each step.

### Risk flags

1. **Platform dependency:** Meta Graph API can change ToS or pull live-comment webhook access overnight. Mitigation: build TikTok Shop Live + Kwai readers in parallel after MVP. Without diversification this is a single-vendor risk.
2. **Cultural / language fit:** Non-Brazilian founders will mis-read the revendedora world (it's MLM-adjacent, has its own slang, its own creator economy). Mitigation: hire a Brazilian co-founder or full-time operator from day 0.
3. **Tariff / take-rate temptation:** Adding a PIX take-rate is great for expansion but moves you into the regulated payments world (BACEN). Defer until $1M ARR.
4. **Whatnot / TikTok Shop full-stack pre-empts:** If TikTok Shop launches frictionless live-checkout + PIX in Brazil natively, the comment-to-DM workflow gets cut out. Mitigation: stay 90% Instagram + Facebook lives, where the gap is structural.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian technical + operator pair; technical founder with consumer-mobile + Meta API experience, operator with deep MEI/revendedora network
Time to revenue:        10-12 weeks (8 to first beta, then 2-4 to first paid)
Capital to launch:      $30k-$40k (R$160k-R$215k) — 14 weeks build, Meta verification, LLM inference, 3-month founder salary buffer
Top 3 assumptions to validate first:
  1. R$79/mo willingness-to-pay — validate with 15 in-depth revendedora interviews in 3 cities
  2. Meta Graph API live-comment webhook approval timeline — submit week 1, track decision
  3. PT-BR comment parsing ≥90% accuracy — eval on 500 real comments from 5 public lives
Kill criteria:
  - Abandon if <20% of interviewed revendedoras say they'd pay R$79/mo after seeing a 3-min demo
  - Abandon if Meta Graph API blocks/rejects live-comment webhook access after 6 weeks
  - Abandon if parsing accuracy can't clear 85% on PT-BR live comments within 4 weeks of iteration
```

## 15. Next step — 1-week validation sprint

- **Day 1-2:** Build a list of 80 active Brazilian Instagram revendedoras (use #revendedora #liveroupas #revendaroupa, filter to accounts with recent live-replay highlights, 5k-50k followers). Submit Meta Business Verification paperwork. Start an Asaas merchant account in parallel.
- **Day 3-4:** Cold-DM all 80 with a 60-second Loom mockup ("imagina não precisar do caderno") + R$50 PIX for a 30-min Zoom interview. Target 15 booked interviews by end of day 4.
- **Day 5:** Run 5-6 interviews. Standard script: "show me your last 2 lives, count the EU QUEROs, count the DMs you actually sent, ask the price question, ask which platform they'd never give up." End of day, decide: if ≥10 of 15 say they'd pay R$79/mo and ≥6 say they'd pay R$149 for Pro features, GO. Otherwise iterate the wedge (maybe focus on cosmetics-only, or kids-only, or LATAM-wide vs Brazil-only).

The decision is falsifiable: a single price-pull rate metric across 15 interviews. Either the willingness is there or it isn't.
