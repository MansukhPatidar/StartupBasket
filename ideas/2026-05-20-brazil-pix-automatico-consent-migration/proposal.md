---
title: "TrocaPix — Pix Automático consent funnel for Brazil SMBs"
slug: brazil-pix-automatico-consent-migration
date: 2026-05-20
category: FinTech / Brazil-SMB
complexity: Medium
score: 78
verdict: GO
confidence: Medium
oneLiner: "Walks Brazilian gyms, schools and SaaS through moving their cartão and boleto subscribers onto Pix Automático before churn bites."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, SMB, Subscription, Open-Finance, Multilingual]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 11
  revenue: 12
  time: 8
  defensibility: 6
founderFit: [technical-heavy, sales-heavy, domain-expertise-required]
featured: false
---

# TrocaPix — Pix Automático consent funnel for Brazil SMBs

## 1. One-liner

Walks Brazilian gyms, schools and SaaS through moving their cartão and boleto subscribers onto Pix Automático before churn bites.

## 2. Trend signal — why now?

Pix Automático — the Banco Central's native recurring-debit rail — went live June 2025 and is now mandatory functionality at every Pix-participating bank in Brazil. PagBrasil completed integration ahead of the June 2026 broader launch; Asaas, Vindi, Cora, Stark Bank, PagBank and PicPay all ship Pix Automático APIs today. Boku and Gr4vy/dLocal entered the market this quarter. Mainstream coverage in Estado de Minas (Feb 2026) flagged the new BC rule requiring customers to actively re-authorize existing recurrences by April 2026 — meaning every SMB with a subscriber base now has a hard re-consent task in front of it.

On the demand side, Sistema Pacto's 2025 internal survey of 900+ gym clients pegs SMB-gym inadimplência at 18% on cartão/boleto, dropping to 3–5% on properly implemented débito recorrente — about R$ 20K/quarter in lost revenue per 200-member gym. The cited subscription stack (Tecnofit, Sistema Pacto, Memberkit, Eduzz, Hotmart, plus thousands of plataforma-de-curso SKUs) covers gyms, online courses, condomínio admins, salões de assinatura, B2B SaaS de PME — a multi-segment SMB layer that hasn't yet been walked through the consent flow.

What's missing: the **migration motion**. PSPs ship the API. WhatsApp BSPs ship messaging. Gym/curso ERPs ship management. Nobody owns the customer-by-customer job of getting 300–800 existing subscribers to open their bank app, find the autorização Pix screen, and approve the recurrence. That conversion rate is the new churn lever.

Provenance:
  - Signal 1: Brazilian gym SMBs lose 18%+ to inadimplência on cards/boleto, dropping to 3–5% on proper recurring debit (Sistema Pacto 2025 survey of 900+ gyms) — https://blog.sistemapacto.com.br/a-verdade-sobre-o-pagamento-recorrente-para-academias/ — 2025
  - Signal 2: Pix Automático live and mandatory since June 2025; BC requires re-authorization of legacy recurrences by April 2026 — https://www.em.com.br/emfoco/2026/02/17/banco-central-anuncia-nova-regra-do-pix-automatico-e-clientes-precisam-autorizar-ate-abril/ — Feb 2026
  - Signal 3: PSP arms race — PagBrasil, Asaas, Vindi, Cora, PagBank, Boku, Gr4vy/dLocal all racing on Pix Automático integration in late 2025/2026 — https://thefintechtimes.com/preparing-for-recurring-payments-pagbrasil-completes-automatic-pix-integration-ahead-of-june-launch/ — 2026
  Category: Tech-unlock + Geographic arbitrage (Brazil-native rail, no global analogue)

## 3. The opportunity

The PSPs and the ERPs both stop short of the human work. Asaas/Vindi/PagBrasil expose a "send a Pix Automático consent" endpoint. The gym ERP (Sistema Pacto, Tecnofit) imports a payment status. Neither owns the **last-mile** problem: a single SMB owner with a list of 300–800 paying customers on cartão/boleto, a one-time window to convert them, and no playbook for it.

Concrete failure mode today: the owner sends a generic "clique aqui para autorizar Pix Automático" WhatsApp blast. ~15–25% click. Of those, maybe half complete because the QR or deep link drops them in the wrong bank app or doesn't survive the Open Finance redirect. The rest go silent, keep their broken card on file, churn the following month. Owner blames "tecnologia" and stays on boleto.

TrocaPix sits on top of whichever PSP the merchant already uses (or chooses), reads the subscriber list, generates one personalized consent flow per customer (deep-linked to their specific bank's Pix Automático screen — Itaú, Bradesco, Nubank, Caixa, Inter, Santander, BB, plus the long tail), sends sequenced WhatsApp nudges in Brazilian-customer tone, retries failures, and reports back per-subscriber status: authorized / pending / refused / unreachable. Refused customers feed into a retention dunning workflow before they age out.

The opportunity is the 18-month migration window — June 2026 through end-2027 — when every SMB in Brazil with a subscription base has to do this job once. Whoever owns the consent conversion sits between the PSP and the ERP and becomes the default tool.

## 4. Target market

- **Primary customer:** Owner or financial-ops lead of a Brazilian SMB with 100–1,500 active recurring subscribers and R$ 50–500/mo average ticket. Concrete segments: academias and crossfit boxes (≈30K nationwide), escolas de idiomas and cursos online (≈20K), condomínio administradoras (≈12K), salões de assinatura + estética, B2B SaaS PME (≈15K), small clube/associativo, telemedicina assinatura, religiosos (dízimo recorrente). Operates primarily in WhatsApp.
- **Why they buy:** Inadimplência is the visible enemy — 18% of MRR walking out the door each month, plus hours of staff time chasing R$ 119 boletos. They've heard from peers/vendors that Pix Automático fixes this. They don't have a CRM motion to migrate the base.
- **Rough TAM reasoning:** Roughly 80–120K Brazilian SMBs match the recurring-revenue profile across the segments above (Sebrae estimates, industry reports). At a target ARPU of R$ 299/mo and 5–10% serviceable penetration over 36 months, the addressable book is R$ 70–360M ARR — comfortably north of the $5M ARR target with room to grow.
- **Why now for them:** BC re-authorization deadline pushed the issue from "nice to have" to "deadline." Their PSP keeps pestering them about it. Competitor gym down the street already lowered prices because their unit economics moved.

## 5. Product sketch (MVP)

- CSV / API import of current subscriber base from Sistema Pacto, Tecnofit, Memberkit, Asaas, Vindi, Cora, generic spreadsheet
- Per-subscriber consent link generator that detects bank (via phone, CPF lookup, or self-select) and deep-links to the right autorização screen
- WhatsApp Business-native sequenced campaign: invite → reminder → "your friend at the gym did it" social proof → final notice
- Live conversion dashboard: % authorized, % pending, % refused, % unreachable, per cohort
- Bank-specific failure playbooks (Itaú app routes differ from Nubank routes differ from Caixa empresa)
- Refused-customer dunning queue: keep cartão on file with extra retries, offer pre-paid annual at a discount, or graceful churn workflow
- Reporting hand-off to the PSP / ERP so the migration is auditable (and the owner can show the contador what happened)
- Multi-language UI in PT-BR + a Spanish skin (LATAM countries with similar rail rollouts next)

## 6. AI angle — what's load-bearing

Two places. **One**, the WhatsApp nudge sequencing — copy generation tuned to the customer cohort (new subscriber vs. 18-month loyalist vs. previously churned), language register tuned to the merchant's brand voice, and conversational fall-through for "como faço isso" questions in the same thread (each bank's flow walked through in PT-BR with screenshots). Without LLM in the loop, this is a static blast and conversion stays at 25%.

**Two**, the bank-flow router: given partial data (CPF, phone DDD, transactional history from the PSP), predict which bank the subscriber holds the account at and deep-link accordingly. Wrong bank = drop-off. Cheap inference + a feedback loop from observed authorization completions turns this from guesswork into a moat over months.

Strip the AI and you're left with a Mailchimp for Pix consent. Useful, but not the product.

## 7. Localization angle

The whole product is the localization angle. Pix Automático is a Brazilian-only rail with Brazilian-only consent UX, Brazilian-only Open Finance redirect chain, Brazilian-only bank distribution, Brazilian-only subscriber expectation (WhatsApp first, e-mail dead last). A US/EU player can't ship this — they don't know which DDD maps to which bank, which Open Finance redirect breaks on which bank's app version, or how Caixa empresa flows differ from PJ flows.

LATAM expansion path: Mexico (SPEI recurring rolling 2026–27), Colombia (Bre-B), Argentina (Transferencia 3.0 recurring) — same playbook in 18 months. Stay focused on Brazil for v1.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$ 299/mo base for up to 300 active subscribers + R$ 0,50–1,00 per successful Pix Automático authorization (one-time conversion fee). Upgrade tiers R$ 599 (up to 800), R$ 1,199 (up to 2,500). Annual prepay 2 months free.
- **ACV:** ~R$ 4,800–7,000 per customer per year blended (subscription + conversion volume).
- **Rough math to $1M ARR:** ≈900 paying SMBs at R$ 5,500 ACV ≈ R$ 5M ARR / ~US$ 1M ARR at current FX. So $1M ARR ≈ 900 customers.
- **Rough math to $5M ARR:** ~4,500 SMBs — about 4–5% of the target segment, achievable over 24 months with a focused channel motion.
- **Expansion path:** (a) ongoing retention dunning fees on refused customers, (b) per-message WhatsApp marketing fees on adjacent flows (renewal reminders, win-backs, upgrade campaigns), (c) PSP referral kickback when the merchant onboards through TrocaPix's preferred Asaas/Vindi link.

## 9. Go-to-market wedge — first 100 customers

- **Sistema Pacto + Tecnofit affiliate motion.** Both publish content about débito recorrente and migration. Land 1–2 as official partner — they have ~900 + ~2,000 gym SKUs already paying for management software. Co-marketed migration campaign closes the first 50 customers in 8 weeks.
- **Asaas / Vindi co-marketed launch.** PSPs want merchants to actually adopt Pix Automático — their fee revenue depends on it. Their merchant lists are warm. Offer the PSP a per-customer activation kickback in exchange for an in-product banner: "Migre seus clientes em 7 dias com TrocaPix." Same logic for Cora and Stark Bank.
- **WhatsApp groups of academia/escola/condomínio owners.** Brazilian SMB owners cluster heavily in private WA owner groups (FNCO, ACAD Brasil, ABF for franchises). A founder showing up with a live dashboard of "Academia X migrou 312 alunos em 9 dias, inadimplência caiu de 19% para 4%" closes warm referrals.
- **LinkedIn outbound to financeiro/sócio at 500 SMBs.** Manually scrape directories (G1 Empresas, Empresometro). Personalized Loom in PT-BR showing their estimated lost MRR vs. post-migration. Expect 3–5% reply, 1–2% close.
- **Sebrae / SEBRAE-MG events + state-level fitness/educação trade shows.** R$ 2K booth, demonstrate live migration, sign 5–10 SMBs per event.

## 10. Build complexity — justification

Medium. Off-the-shelf: PSP APIs (Asaas, Vindi, PagBrasil all have public docs), WhatsApp Business Cloud API (Meta), standard web stack, LLM via OpenRouter or self-hosted small model for nudges. Custom work: the bank-router (collecting + curating the per-bank deep-link patterns and breakage modes), the sequence engine, the dashboard, the dunning playbooks per refusal reason. Estimate: pair of builders in 12–16 weeks to a usable v1; 5 months to v1 that handles the top 8 banks cleanly. The bank-flow data is the slow part — has to be gathered empirically.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Operates on top of regulated PSPs; consent is customer-driven via Open Finance. No payments-license requirement. |
| Ethical — no harm / dark patterns | ✅ | Customer gives explicit BC-mandated consent in their own bank app; can revoke any time. |
| Market exists (evidence above) | ✅ | 18%+ inadimplência baseline, 80–120K SMB segment, BC mandate. |
| 1–5 person team can build this | ✅ | Pair + part-time SMB ops lead. 12–16 weeks to MVP. |
| Launchable with <$50K / ₹40L | ✅ | WhatsApp + PSP API costs are per-message; infra <$1K/mo at <100 customers. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | 18% inadimplência is hair-on-fire for any sub business. Owners feel it monthly. BC deadline forces action. |
| Demand evidence | 15 | 13/15 | Multiple independent industry signals + PSP arms race + a survey of 900 gyms. One step short of "incumbent at scale already charging for exactly this." |
| Build feasibility | 15 | 11/15 | Medium. PSP + WA APIs mature; the bank-router curation is the slow custom piece. |
| Distribution clarity | 15 | 11/15 | Two strong wedges (PSP co-marketing + ERP affiliate) plus warm WA owner-group community. Not 13+ because PSP partnerships need real BD work. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks against existing R$ 200–800/mo ERP wallet; conversion fee aligns incentives. R$ 5M ARR achievable. |
| Time to first revenue | 10 | 8/10 | First migration sells the next one. 6–8 weeks to first paying SMB after MVP. |
| Defensibility | 10 | 6/10 | Soft moat: accumulated bank-router data + per-segment playbooks + PSP/ERP relationships. Copyable but a 9-month lead inside an 18-month migration window is most of the prize. |
| **Total** | **100** | **78/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy` · `domain-expertise-required`

Best for a Brazilian founder pair: one with fintech/PSP fluency (preferably ex-Asaas/Vindi/PagBank/Stone), one with SMB GTM chops in academia/educação. Remote co-founder outside Brazil would struggle — local trust and PT-BR copy fluency are load-bearing.

### Key assumptions to validate (3–5)

1. **Assumption:** Consent conversion can be lifted from a baseline ~25% blast to ~60%+ with per-bank deep-links and sequenced WA nudges. **How to test:** Run two side-by-side migrations for one gym (group A generic blast, group B TrocaPix flow). Measure 14-day authorization rate.
2. **Assumption:** SMB owners will pay R$ 299/mo + per-authorization for this and not just expect their PSP to do it free. **How to test:** 20 paid pilots at R$ 299/mo. Watch churn at month 2 — if they cancel after migration finishes, the model is one-shot consulting not SaaS. Adjust to a one-time R$ 1,500 + ongoing retention motion if so.
3. **Assumption:** Sistema Pacto / Tecnofit / Asaas will partner rather than copy. **How to test:** Founder-led BD conversations in month 1–2; if all three say "we'll build this ourselves," compete on speed instead of partner.
4. **Assumption:** Bank-router data is gatherable without inside access. **How to test:** Manually map the top 8 banks' Pix Automático flows in week 1. If 3+ are undocumented or break on the redirect, the moat is real but the build slips.

### Risk flags

1. **Platform dependency:** Pix Automático is a Banco Central construct. A BC rule change (e.g. forcing a uniform consent UX across banks) eats part of the moat. Mitigated by the WhatsApp/migration motion layer remaining valuable.
2. **PSP co-option:** Asaas/Vindi could ship a comparable conversion product within 12 months. They have the merchants. Mitigated by speed + segment focus + ERP partnerships they won't bother with.
3. **WhatsApp pricing change:** Meta raised WA Business API per-message fees mid-2025. Another bump compresses margin. Mitigated by passing through cost in tiers.
4. **Migration window finite:** Once 60–70% of Brazilian sub SMBs have migrated (~2027–28), the one-time conversion fee dries up. The product must become a retention/marketing tool by year 2 or the wedge expires.

## 14. Structured verdict

```
Score:                  78/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian fintech-fluent + SMB-GTM pair (ex-Asaas/Vindi/Stone + ex-academia/escola ops)
Time to revenue:        8–10 weeks after MVP (≈4–5 months from kickoff)
Capital to launch:      R$ 150K–250K (~US$ 30–50K)
Top 3 assumptions to validate first:
  1. Per-bank deep-link + WA sequencing lifts consent conversion from ~25% baseline to >55% — measure on first paid pilot
  2. SMBs accept R$ 299+/mo recurring (not just one-time migration fee) — 20-customer pilot at month 2 retention
  3. At least one of Sistema Pacto / Tecnofit / Asaas / Vindi signs a co-marketing pilot before month 3
Kill criteria:
  - Abandon if consent conversion stays <40% across 3 segment pilots (gym, course, condomínio)
  - Abandon if Asaas or Vindi launches an in-product equivalent before the v1 ships
  - Abandon if migration motion completes faster than expected (<9 months per merchant) AND SMBs churn at >80% post-migration — model is consulting not SaaS
```

## 15. Next step — 1-week validation sprint

- Day 1–2: Cold-DM 40 owners across academia / escola de idiomas / condomínio adm in PT-BR. Ask: "qual é sua inadimplência hoje e você já migrou para Pix Automático?" Goal: 15 qualified responses.
- Day 3: Manually walk through Pix Automático autorização flow on Itaú, Nubank, Bradesco, Caixa, Inter, Santander, Banco do Brasil, PicPay. Document where each one breaks or redirects unexpectedly. Goal: confirm bank-router data is gatherable.
- Day 4: Mock the conversion flow + WA sequence on a single gym's actual subscriber list (founder's local contact or paid pilot for R$ 500). Run a generic blast control + a TrocaPix-style flow on 40 subscribers each.
- Day 5: Compare conversion rate. **Go if** TrocaPix arm beats blast arm by ≥15 absolute percentage points AND ≥10 of the 15 SMB conversations name inadimplência as their #1 ops headache. **No-go** otherwise.
