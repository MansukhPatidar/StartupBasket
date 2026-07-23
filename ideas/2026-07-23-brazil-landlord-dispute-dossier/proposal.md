---
title: "CobraCerta — eviction-ready dossier for Brazilian landlords"
slug: brazil-landlord-dispute-dossier
date: 2026-07-23
category: PropTech / Brazil
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Charges rent via Pix, then turns a late payment into a court-ready notice and tamper-evident proof packet — automatically."
tags:
  vertical: PropTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Pix-native, Compliance-driven, SMB, AI-agent]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 11
  revenue: 12
  time: 7
  defensibility: 5
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CobraCerta — eviction-ready dossier for direct-let Brazilian landlords

## 1. One-liner

Charges rent via Pix, then turns a late payment into a court-ready notice and tamper-evident proof packet — automatically.

## 2. Trend signal — why now?

Three things moved in the last 12 months and they point at the same person: the Brazilian who owns two or three units, rents them out *himself* — no imobiliária — and manages the whole thing over WhatsApp.

- **Pix Automático became real.** Brazil's Central Bank recurring-Pix rail launched mid-2025 and hit its compliance deadline on 1 Jan 2026. Q1 2026 operational data from PagBrasil shows first-time users, transaction volume, and processed revenue all accelerating on the same curve that made vanilla Pix dominant. Rent is a textbook recurring charge — it's now programmable without a card, reaching the ~60M Brazilians who never had one.
- **Default is a live, recurring wound.** Superlógica pegged rental default at 3.50% average in 2025 and it bounced between 3.18% and 3.22% through Q1–Q2 2026. The kicker: the **up-to-R$1,000 rent bracket carries the highest default rate (5.98% in March 2026)** — precisely the low-end, self-managed, no-agency segment. When the tenant stops paying, eviction takes **6 months to 2 years**, and the landlord's first legal step is a properly-constituted *notificação extrajudicial*.
- **The paper trail is now court-admissible — if you do it right.** Brazilian courts accept WhatsApp messages, Pix receipts, and email-with-read-receipt as evidence. A cartório notice runs ~R$180 each; a lawyer to draft one costs more. Casual "cadê o aluguel?" texts don't constitute the formal record the *Lei do Inquilinato* (8.245/91) rewards. Cheap PT-BR LLM drafting closes that gap.

Provenance:
  - Signal 1: Pix Automático launched mid-2025, Jan-2026 compliance, Q1-2026 adoption accelerating; unlocks recurring rent for card-less Brazilians — https://www.pagbrasil.com/blog/recurring-payments/automatic-pix-2026/ — 2026-07-23
  - Signal 2: Rental default 3.2–3.5% nationally, 5.98% in the up-to-R$1,000 bracket; eviction takes 6mo–2yr and hinges on a proper notificação extrajudicial — https://forbes.com.br/forbes-money/forbes-real-estate/2026/06/alta-inadimplencia-aluguel-brasil/ — 2026-07-23
  - Signal 3: WhatsApp/Pix/AR accepted as court evidence; cartório notice ~R$180; notificação extrajudicial needs no lawyer to draft but must be properly formed — https://ar-online.com.br/blog/notificacao-extrajudicial-valor/ — 2026-07-23
  Category: Geographic arbitrage

## 3. The opportunity

Every rent-collection tool in Brazil — Locapay, Pilota, PixAgenda, AlugaFácil — sells to **imobiliárias and professional administrators**. Their pitch is "receive Pix, no fees, manage a portfolio." Their weakness is that they *stop at collection*. The moment a payment goes late, the amateur landlord is on his own: he doesn't know he needs a formal notice, he doesn't have one drafted, and his evidence is a scroll of WhatsApp voice notes that no judge will weigh properly.

CobraCerta serves the person the incumbents skip — the individual with 1–8 units, no agency, no lawyer on retainer. We do collection too, but the wedge is what happens *after the tenant misses*: on day one of delinquency we auto-draft a legally-formatted *notificação extrajudicial* in his name, and we continuously assemble a **tamper-evident dossier** — every charge, every Pix confirmation or non-confirmation, every message, timestamped and hashed — so that if it reaches an *ação de despejo*, he hands his lawyer (or the judge) a packet instead of a mess. We're not a collection app with better UX. We're the thing that makes a non-professional landlord as legally armed as one who pays an administradora.

## 4. Target market

- **Primary customer:** Brazilian individuals (pessoa física) owning 1–8 residential rental units, renting **direct** without an imobiliária, communicating with tenants over WhatsApp, in the R$600–R$3,000/month rent band. Concentrated in the Northeast and lower-income urban segments where default is highest and agencies bother least.
- **Why they buy — in their words:** "Meu inquilino não paga e eu não sei o que fazer primeiro." They're scared of doing the eviction wrong, losing months, and eating the loss. They know the notary costs money and the lawyer costs more, and they suspect their WhatsApp threats are worthless in court.
- **Rough TAM reasoning:** Brazil has 79.3M permanent private housing units (2025 census). Even a low-single-digit share are direct-let by amateur owners — that's millions of units across hundreds of thousands of landlords. We don't need the professional-managed stock; we need the segment agencies won't touch.
- **Why now for them:** Pix Automático makes "just automate the rent" finally possible without a card; the 2025–26 default uptick in the low-end bracket put the pain on their doorstep this year.

## 5. Product sketch (MVP)

- Set up a lease in 3 minutes: tenant name, rent, due date, contract terms (fine %, mora interest — defaults to the standard 10% + 1%/mo).
- Recurring rent charge via **Pix Automático** (with boleto fallback for the card-less/authorization-averse), instant confirmation when paid.
- **Delinquency trigger:** the day rent is late, auto-draft a formatted *notificação extrajudicial de cobrança* in the landlord's name, ready to send by WhatsApp, email-with-receipt, or export for cartório.
- **Tamper-evident dossier:** every charge, receipt, non-payment, and message logged with timestamp + hash chain, continuously — one-click export as a chronological PDF packet.
- WhatsApp-native reminders and escalation ladder (friendly → firm → formal notice) so the landlord never has to write the awkward message.
- "Eviction-ready" export: the dossier plus a plain-language summary of the landlord's legal position and next step under the Lei do Inquilinato — the thing he forwards to a lawyer.
- Optional: a directory hand-off to vetted eviction lawyers when the case actually goes judicial (referral, not our service).

## 6. AI angle — what's load-bearing

The AI does two jobs a template can't. **First, drafting:** it produces a correct, contract-specific *notificação extrajudicial* in formal PT-BR — pulling the right figures, the right legal basis, the right tone — from a messy real-world lease and payment history. A static template breaks the moment the situation is non-standard (partial payments, informal contract, disputed dates); the model reasons over the actual facts. **Second, triage:** it reads the WhatsApp thread and payment record and tells the landlord, in plain language, *where he stands and what to do next* — "you've met the notice requirement, you can file; wait 15 dias úteis." Remove the AI and you're left with a Pix-charging app plus blank templates the landlord still can't fill correctly under stress — which is exactly what he already fails to do. The AI is the reason a scared amateur ends up with a legally sound packet instead of a folder of screenshots.

## 7. Localization angle

This is a Brazil-native play by construction — it can't be a generic global product:

- **Payment rail:** Pix Automático + boleto. There is no US/EU analog; the entire "why now" is this rail.
- **Language:** formal juridical Portuguese for the notices, colloquial PT for the WhatsApp ladder.
- **Legal specificity:** the Lei do Inquilinato 8.245/91, *notificação extrajudicial*, *purgação da mora*, the 15-dias-úteis clock, standard 10% fine + 1%/mo mora. Domain knowledge *is* the product.
- **Distribution channel:** WhatsApp-first, because that's where landlord and tenant already talk.
- **Pricing:** a R$29–49/mo tier works for a two-unit owner where a $49 tool never would.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** R$29/mo for 1–2 units, R$79/mo for up to 8 units. Plus a per-notice "gerar notificação" upsell (R$39/notice) for landlords who won't subscribe until they're already in a fight — a cheap wedge versus the ~R$180 cartório cost.
- **ACV:** ~R$600–950/year for subscribers; spikes on the per-notice buyers who then convert.
- **Rough math to $1M ARR (~R$5.5M):** ~7,000 subscribers × ~R$65/mo blended × 12 ≈ R$5.5M. Against a base of hundreds of thousands of direct-let landlords, that's low-single-digit penetration.
- **Rough math to $5M ARR (~R$27M):** ~35,000 subscribers at the same blend, or a lower per-account price offset by the per-notice and lawyer-referral revenue. Requires the free-notice wedge to convert reliably and word-of-mouth in landlord communities to compound.
- **Expansion path:** more units per landlord; add-ons like *garantia locatícia* comparison, deposit management, IPTU/condo tracking, and a paid lawyer-referral marketplace when cases go judicial.

## 9. Go-to-market wedge — first 100 customers

- **Free-notice hook, distributed where the pain is posted.** Brazilian landlords vent constantly in Facebook Groups ("Proprietários de Imóveis", "Locação Direta sem Imobiliária"), on Reclame Aqui, and in the comments of blogs like asaas/quintoandar's "meu inquilino não paga" articles. Offer a free, correctly-formatted *notificação extrajudicial* generator as the top-of-funnel — the exact document they're Googling — and capture them into the subscription.
- **Content that ranks for the panic search.** People type "inquilino não paga o que fazer" and "quanto custa notificação extrajudicial" at the moment of maximum willingness to pay. Own those queries with genuinely useful, lawyer-reviewed guides that end in the tool. Slow but compounding.
- **Contador and small-lawyer referral.** Contadores and neighborhood advogados field these questions unpaid all the time. Give them a referral cut on subscriptions and on the judicial-case hand-off; they route the landlords they can't be bothered to help with a R$180 notice.
- **WhatsApp-group seeding in high-default regions.** The Northeast and low-end bracket have the worst default and the least agency coverage — seed the tool directly into regional landlord WhatsApp/Facebook groups with a real success story.

## 10. Build complexity — justification

Medium. Off-the-shelf: Pix Automático/boleto via a PSP (dLocal, Adyen, or a Brazilian gateway already exposing recurring Pix), WhatsApp Business API, and an LLM for PT-BR legal drafting. Custom work: the delinquency state machine, the tamper-evident hash-chained log, and — the real moat-building effort — a lawyer-reviewed library of notice templates and a triage layer that stays correct under the Lei do Inquilinato. Small team, ~3–4 months to a credible v1; the legal-content QA, not the code, is the long pole.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Drafting a notice the user sends is not practicing law; notificação extrajudicial needs no advogado. Keep a clear "not legal advice" line and lawyer hand-off. |
| Ethical — no harm / dark patterns | ✅ | Helps a legitimate creditor exercise legal rights correctly; no exploitation of tenants beyond what the law already permits. |
| Market exists (evidence above) | ✅ | Default data, eviction timelines, cartório costs, funded incumbents serving the adjacent segment. |
| 1–5 person team can build this | ✅ | Off-the-shelf rails + LLM + a lawyer-reviewed template library. |
| Launchable with <$50K / ₹40L | ✅ | No capex; main cost is legal-content review and PSP integration. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | Hair-on-fire *at the moment of delinquency* — landlord is losing months of rent and fears doing eviction wrong. Slightly below top band because it's episodic, not daily. |
| Demand evidence | 15 | 12/15 | Hard default data, eviction timelines, cartório pricing, funded incumbents in the adjacent segment, and heavy organic venting. No direct proof this exact product converts yet. |
| Build feasibility | 15 | 11/15 | Rails and LLM are off-the-shelf; the hash-chain log and lawyer-grade template QA push it past a weekend build. |
| Distribution clarity | 15 | 11/15 | Named channels (landlord FB groups, panic-search SEO, contador/lawyer referral) with a concrete free-notice hook. Conversion of vent-to-paid is the uncertainty. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarked against ~R$180 cartório cost and lawyer fees; per-notice wedge de-risks conversion; low-single-digit penetration hits $1M. |
| Time to first revenue | 10 | 7/10 | Per-notice buyers can pay within weeks of launch; subscription conversion lags. |
| Defensibility | 10 | 5/10 | Moat is accumulating dossiers (switching cost) + a hard-won, correct legal-template library. Copyable, but the legal QA and trust take time to match. |
| **Total** | **100** | **74/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required` — needs a builder who can wire Pix/WhatsApp/LLM *and* a Brazilian real-estate lawyer close enough to guarantee the notices are correct.

### Key assumptions to validate (3–5)

1. **Assumption:** Amateur landlords will pay R$39 for a generated notice (vs R$180 cartório or nothing). **How to test:** Ship a standalone free-preview / paid-download notice generator, seed it into 5 landlord Facebook groups, measure paid conversion on 50+ generations.
2. **Assumption:** They'll convert from one-off notice into a monthly subscription. **How to test:** Offer subscription at checkout to the first 100 notice-buyers; target >15% attach.
3. **Assumption:** Pix Automático authorization friction is tolerable for tenants (they must approve the recurring debit). **How to test:** Run 10 real leases through the authorization flow; measure how many tenants complete it vs fall back to boleto.
4. **Assumption:** The notices we generate are actually accepted / weighted by courts. **How to test:** Have a partner lawyer review 20 generated notices and confirm they'd file them unchanged.

### Risk flags

1. **Regulatory / UPL risk:** Line between "document assembly" and "practicing law" (advocacia is OAB-regulated). Mitigation: user drafts-and-sends in their own name, explicit "not legal advice," lawyer hand-off for judicial phase.
2. **Platform dependency:** Reliant on WhatsApp Business API terms and on a PSP's Pix Automático access — both single points of failure.
3. **Market timing / demand shape:** Default is *falling* in aggregate through 2026; the pain is episodic, so retention between disputes is the real question — the product must stay useful (collection, records) when nothing's on fire.
4. **Incumbent reaction:** Locapay/Pilota could bolt on a notice generator. We must own the amateur segment and the trust before they bother.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder + Brazilian real-estate lawyer as co-founder/advisor
Time to revenue:        6–10 weeks (per-notice wedge first, subscription behind it)
Capital to launch:      R$40–80K ($7–14K), mostly legal-content review + PSP integration
Top 3 assumptions to validate first:
  1. Paid conversion on a standalone notice generator seeded into landlord FB groups (>10% of 50 generations)
  2. One-off notice → monthly subscription attach (>15% of first 100 buyers)
  3. A partner lawyer confirms 20 generated notices are file-ready unchanged
Kill criteria:
  - Abandon if <8% of 50 notice generations convert to paid after two channel tests
  - Abandon if Pix Automático tenant-authorization completion is <40% and boleto fallback kills the "automatic" value prop
  - Abandon if a partner lawyer rejects >30% of generated notices as not file-ready
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build a one-page "gerador de notificação extrajudicial de aluguel" — landlord enters lease + late-payment facts, gets a formatted PT-BR notice. Free preview, R$39 to download the clean PDF. Have one real-estate lawyer sanity-check the template first.
- **Day 3–4:** Seed it into 5 landlord/locação-direta Facebook groups and reply to 20 fresh "meu inquilino não paga" posts with the free tool. Track generations, downloads, and paid conversions.
- **Day 5:** Decide go/no-go on a **falsifiable** bar: **≥10% of at least 50 notice generations convert to a paid download, AND the partner lawyer confirms the generated notices are file-ready unchanged.** Miss either → the amateur landlord won't pay for the document, and the wedge is dead — revisit or pass.
