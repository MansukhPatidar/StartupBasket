---
title: "LlaveTorno — counter turnstile for Colombian Bre-B merchants"
slug: brb-payment-proof-counter
date: 2026-08-04
category: FinTech / Colombia-Micro — Neighborhood Shops, Repair Counters and Social-Commerce Sellers Taking Key-to-Key Bre-B Payments
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: Confirms the money actually landed before your clerk hands over the goods, across every Bre-B bank.
tags:
  vertical: Retail
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Fraud-prevention, Micro-merchant, Spanish-first, Mobile-first, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 12
  distribution: 12
  revenue: 10
  time: 8
  defensibility: 4
founderFit: [technical-heavy, sales-heavy]
featured: false
---

# LlaveTorno

## 1. One-liner

Confirms the money actually landed before your clerk hands over the goods, across every Bre-B bank.

## 2. Trend signal — why now?

Colombia flipped its payment rails in ten months. Bre-B — the central bank's interoperable instant-payment scheme — launched October 2025 and passed **500 million transactions with 100 million registered keys within five months**, one of the fastest real-time payment ramps in Latin America ([ACI Worldwide / Banco de la República, March 2026](https://ffnews.com/newsarticle/paytech/colombias-bre%E2%80%91b-hits-more-than-500-million-transactions-as-aci-worldwide-and-banco-de-la-republica-take-the-stage-at-fintech-americas-2026)). By early 2026 the directory held 99 million aliases across **218 participating entities**, including **2.8 million merchants** ([Banco de la República technical document, February 2026](https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/documento-tecnico-bre-b-febrero-2026.pdf)).

That adoption is deepest exactly where the operators are smallest. Bre-B now carries **63% of virtual transactions** among Bancamía's microfinance clients, up 72% in the first half of 2026 ([El Nuevo Siglo, July 2026](https://www.elnuevosiglo.com.co/economia/bre-b-ya-representa-el-63-de-las-transacciones-en-la-microempresa)). Commerce volume through Bre-B hit **$517,000 million COP** in April alone ([Portafolio, 2026](https://www.portafolio.co/economia/finanzas/comercios-en-colombia-dispararon-uso-de-bre-b-en-abril-y-las-ventas-ya-superan-los-517-000-millones-493441)).

And the fraud arrived with it. A whole class of apps — NequiDz V2, "Nequi Glitch" — generates counterfeit payment receipts that reproduce the real thing precisely: institutional logos and colors, QR codes, reference numbers, timestamps, even simulated account movement ([Infobae, September 2025](https://www.infobae.com/colombia/2025/09/11/alerta-por-app-falsa-que-suplanta-nequi-y-genera-comprobantes-fraudulentos-que-son-similares-a-los-reales/); [El Tiempo, 2026](https://www.eltiempo.com/amp/economia/finanzas-personales/nequi-glitch-la-app-con-la-que-tumban-a-comercios-y-tiendas-con-comprobantes-falsos-823979)). Telegram bots spit out convincing fakes in seconds. Regional press describes the pattern plainly: *"El comprobante dice 'pagado', pero el dinero nunca llegó"* — the receipt says paid, the money never came — reporting the scheme as one that "pone en jaque al comercio" and affects "thousands of establishments in Colombia" ([Mi Manizales del Alma, June 2026](https://www.mimanizalesdelalma.com/2026/el-comprobante-dice-pagado-pero-el-dinero-nunca-llego-asi-opera-la-estafa-digital-que-pone-en-jaque-al-comercio-de-manizales/)).

The final piece landed in April: **Decree 0368 of 2026** made open finance mandatory for all SFC-supervised entities, requiring them to share customer-authorized data through standardized APIs ([URF / Government of Colombia, April 2026](https://www.urf.gov.co/w/colombia-consolida-el-sistema-de-finanzas-abiertas-obligatorio)). Reading a merchant's own incoming-payment feed with their consent stops being a scraping hack and becomes a regulated, durable right.

```
Provenance:
  - Signal 1 (Demand): Fake-receipt apps (NequiDz V2, "Nequi Glitch") produce pixel-accurate payment
    confirmations; merchants hand over goods against them and the money never arrives; regional press
    reports thousands of affected establishments — https://www.mimanizalesdelalma.com/2026/el-comprobante-dice-pagado-pero-el-dinero-nunca-llego-asi-opera-la-estafa-digital-que-pone-en-jaque-al-comercio-de-manizales/ — 2026-06-02
  - Signal 2 (Feasibility): Decree 0368 of 2026 makes open finance mandatory across SFC-supervised
    entities via standardized consent-based APIs, creating a legal path to read a merchant's own
    inbound-payment feed — https://www.urf.gov.co/w/colombia-consolida-el-sistema-de-finanzas-abiertas-obligatorio — 2026-04-07
  - Signal 3 (Economic): Bre-B passed 500M transactions and 100M keys in five months across 218
    institutions and 2.8M merchants; commerce volume reached $517,000M COP in April 2026 alone
    — https://www.banrep.gov.co/sites/default/files/publicaciones/archivos/documento-tecnico-bre-b-febrero-2026.pdf — 2026-02
  Category: Platform shift
```

## 3. The opportunity

Instant payments broke a 200-year-old retail assumption: that the merchant sees the money at the moment of the sale. Cash you can feel. A card terminal prints a slip *the shop's own hardware produced*. Bre-B key-to-key transfers produce a confirmation on **the customer's phone** — and the shop is asked to trust it.

That is the entire attack surface. The counterfeit doesn't have to fool a bank; it only has to fool a 19-year-old clerk during a lunch rush, for about four seconds.

The incumbent response is real but narrow. Nequi shipped a QR verifier: open the app, tap "Comprobar un pago," scan the receipt's QR, no login required ([Infobae, September 2025](https://www.infobae.com/colombia/2025/09/16/nequi-explica-como-detectar-comprobantes-falsos-en-30-segundos-y-evitar-caer-en-fraudes-digitales/)). Useful. But look at what it assumes:

1. **It only verifies Nequi receipts.** Bre-B spans 218 entities. The clerk cannot ask "which of 218 institutions issued this?" and then open the right app. There is no cross-bank verifier because no single bank has any incentive to build one.
2. **It verifies the artifact, not the arrival.** It answers "is this receipt authentic?" — not "did $80,000 COP land in *my* account in the last three minutes?" Those are different questions, and only the second one protects the shop.
3. **It requires the clerk to do something.** Under queue pressure, with the customer performing impatience, the optional 30-second check is the first thing skipped.

Acquirers don't cover this either. Bold, Wompi and Nequi Negocios confirm payments **they process**. The fraud happens on direct key-to-key transfers into the owner's own account — no acquirer is in that loop, sees that money, or can attest to it.

So the gap is specific and structural: **nobody sells the merchant a single, bank-agnostic, arrival-based answer at the counter.** That's the product.

## 4. Target market

- **Primary customer:** Owner-operators of Colombian micro-retail with at least one employee they aren't standing next to — neighborhood shops (*tiendas de barrio*), phone/electronics counters, motorcycle-parts and repair shops, pharmacies, small clothing and shoe stores, and social-commerce sellers dispatching goods on payment. Concentrated in Bogotá, Medellín, Cali, Barranquilla, Bucaramanga and mid-size cities like Manizales, Cúcuta and Pereira. Typical monthly turnover $8M–$120M COP.
- **Why they buy:** The loss is unrecoverable and personal. Unlike a card chargeback, a fake-transfer loss has no reversal mechanism — the merchandise walked out the door and the money never existed. Chargeback recovery in the region already sits at barely 12% ([Semana, July 2026](https://www.semana.com/economia/empresas/articulo/fraude-en-comercio-electronico-le-costaria-a-colombia-us48-millones-por-reversiones-de-pagos-con-tarjetas-de-credito-en-2026/202632/)); for fake Bre-B receipts it is effectively zero. One gold chain lost in a documented Medellín case was valued at **$2,100,000 COP** — for a *tienda de barrio*, that's a month of margin gone in one transaction.
- **Rough TAM reasoning:** DANE counts **5.6 million micronegocios** in Colombia, of which **540,233** are bakeries and neighborhood shops generating $34.7 billion COP in 2024 sales ([DANE](https://www.dane.gov.co/index.php/actualidad-dane/5161-colombia-tiene-5-6-millones-de-micronegocios); [La República](https://www.larepublica.co/especiales/tiendas-las-joyas-del-barrio/tiendas-de-barrio-generan-763-000-empleos-4392561)). **62.5%** of micro and small businesses already accept electronic payments. Bre-B itself reports 2.8 million merchant keys. The serviceable slice — merchants with staff, meaningful ticket sizes and existing digital acceptance — is realistically 300K–600K businesses.
- **Why now for them:** Two years ago most of these shops were cash-first and the exposure was near zero. Bre-B moved the majority of their transaction volume onto rails where the confirmation lives on the buyer's screen. The risk is new, growing monthly, and they have no tool for it.

## 5. Product sketch (MVP)

- **Counter screen that turns green only on arrival.** A shared display (old tablet, or the clerk's phone) shows incoming payments to the merchant's linked accounts in real time. The clerk matches amount and time. No arrival, no green, no goods. The rule taught in one sentence: *si no está en verde, no sale de la tienda.*
- **Cross-bank by design.** One view spanning the merchant's accounts across whichever of the 218 Bre-B entities they use — the thing no individual bank will build.
- **Amount-and-window matching.** Clerk enters the sale amount; the system watches for a matching credit inside a short window and confirms *that specific sale*, rather than showing a raw feed the clerk has to interpret under pressure.
- **Receipt-photo check as fallback.** Clerk photographs the customer's confirmation screen; the system reads amount, timestamp, reference and issuing institution and flags reused reference numbers, impossible timestamps, and known counterfeit-app layouts — then still tells the truth: *"receipt looks plausible, but no matching deposit has arrived."*
- **WhatsApp alerts to the owner.** Owner gets a message for every confirmed sale above a threshold, and an immediate one when a clerk overrides a red result. The owner doesn't have to be in the shop to hold the line.
- **Shift log.** End-of-day summary of sales confirmed, overridden and disputed, per clerk. Turns "someone got tricked" into a specific, coachable event.
- **Spanish-first, works on cheap Android and bad connectivity.** Degrades to WhatsApp-only mode when the network drops.

## 6. AI angle — what's load-bearing

Strip the AI out and the core arrival-matching still works — that part is plumbing, and I'd rather say so than dress it up. AI carries two jobs that genuinely need it:

**Receipt forensics on the fallback path.** Reading a photographed confirmation screen across dozens of institutional layouts — extracting amount, timestamp, reference, issuer from a glare-covered phone screen shot at an angle by a clerk in a hurry — is vision work. Comparing that against known counterfeit-app templates, and detecting reused or structurally invalid reference numbers, is pattern work. Rules alone break the moment the fake-app authors change a font, and they change constantly.

**Matching under ambiguity.** Real counters are messy: partial payments, a customer paying for two people, rounding, tips, three payments of similar value arriving inside ninety seconds. Deciding *which* deposit settles *which* sale, and when to escalate to a human, is exactly the judgment layer that makes the difference between a tool clerks use and one they route around.

That's a fair account: load-bearing where it matters, not the foundation of the whole house.

## 7. Localization angle

This is a Colombia-first product and the localization *is* the moat's first brick.

- **Rails:** Purpose-built for Bre-B's key/alias model and its 218-entity fragmentation. Nothing about this transfers unmodified anywhere else.
- **Regulatory:** Decree 0368 open finance is the legal substrate for consented account-data access. Building on it, with proper consent handling, is both the enabler and a barrier to careless competitors.
- **Language:** Spanish-first with Colombian commercial register — *llave*, *comprobante*, *no le fíe al pantallazo*. Not translated global SaaS.
- **Price point:** Must work at $25,000–$60,000 COP/month (~$6–15 USD). Merchants already pay around $140,000 COP/month for two-location POS software, so this has to price as an add-on, not a replacement.
- **Distribution:** WhatsApp is the operating system of Colombian small commerce. Onboarding, alerts and support all live there.

Mexico (SPEI/DiMo), Peru (Yape/Plin) and Brazil (Pix) have structurally identical counter-fraud problems — that's the year-two expansion, not the wedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** $35,000 COP/month (~$9) for a single location, one clerk seat. $79,000 COP (~$20) for multi-clerk/multi-location with shift logs and owner analytics. Annual prepay at 10 months' price — meaningful in a market with weak card-on-file habits.
- **ACV:** ~$500,000 COP (~$125) blended.
- **To $1M ARR:** ~8,000 paying merchants at ~$125/year. Against 300K–600K serviceable businesses, that's 1.3–2.7% penetration. Achievable, and small enough that the number isn't a fantasy.
- **To $5M ARR:** ~30,000 merchants, or 12,000 merchants plus a distribution deal. The realistic route is bundling: POS vendors (Siigo, Tiendatek, Galaxia POS), microfinance lenders like Bancamía whose clients already run 63% of volume through Bre-B, and *tendero* buying associations. Revenue share at $3–4/merchant/month across a 50,000-merchant partner base is $1.8–2.4M ARR by itself.
- **Expansion path:** Clerk seats as shops grow. Then the natural adjacency — a merchant with a verified, structured record of every inbound payment is holding exactly the cash-flow evidence lenders want. Verified-revenue attestation for credit underwriting is a real second product, and it's the same data. Don't build it in year one.

## 9. Go-to-market wedge — first 100 customers

- **Work the specific victim lists.** Colombian regional news covers these scams constantly and by locality — Manizales, Cúcuta, Montería, Bogotá. Local merchant Facebook groups and *tendero* WhatsApp groups light up after each incident with owners naming their losses. Join the 30 largest, respond to each fresh incident with a genuinely useful free tool (the receipt-photo checker, no signup), convert to paid. This is the highest-intent audience that exists: someone who lost merchandise last Tuesday.
- **Free receipt checker as the top of funnel.** Ship the photo-verification tool free and ungated on WhatsApp. It's inherently viral in exactly the right population — a clerk who avoids one fake forwards it to every shop owner they know. Charge only for the counter screen, alerts and shift logs.
- **Feet on the street in two neighborhoods.** Pick one commercial corridor in Bogotá (Restrepo or San Andresito) and one in Medellín. These are dense clusters of electronics, parts and clothing merchants — high ticket values, high fraud exposure, hundreds of shops in walking distance. Two weeks, door to door, free month, install on their existing tablet. Target 60–80 shops signed from a single corridor; the corridor talks to itself.
- **Ride the microfinance channel.** Bancamía, Fundación Mundo Mujer and Banco W have field officers who visit micro-merchants monthly and already push Bre-B adoption. A revenue-share bundle puts the product in front of thousands of merchants through a trusted, existing relationship.
- **Fenaltiendas and shopkeeper associations.** Organized *tendero* bodies represent tens of thousands of shops and run member communications and training. One endorsement plus a member discount reaches more merchants than six months of ads.

## 10. Build complexity — justification

**Low.** The v1 is a mobile web app, a WhatsApp Business integration, an account-data connection per major institution, and a vision model for receipt reading — all off-the-shelf. The honest work is in bank coverage: open finance standards land on a published schedule, so early versions will lean on merchant-consented account connections plus notification-based confirmation for institutions not yet exposed via API, and widen as the SFC standards roll out. Two people, 8–10 weeks to a v1 that covers the top 5 institutions — which is most of the volume. Coverage breadth, not core functionality, is the long pole.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Merchant reads their own account data under explicit consent; Decree 0368 establishes this framework. Not a payment institution — no funds are held or moved. |
| Ethical — no harm / dark patterns | ✅ | Protects micro-merchants from theft. Must handle consent and financial data carefully; no dark patterns in the model. |
| Market exists (evidence above) | ✅ | 2.8M Bre-B merchant keys, documented fraud wave, incumbents shipping partial fixes. |
| 1–5 person team can build this | ✅ | Two people, ~10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under — main costs are two salaries and field sales in two corridors. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Direct, unrecoverable cash loss with no chargeback path. Felt weekly in exposed categories. Not 19–20 because plenty of low-ticket shops rationally accept the risk. |
| Demand evidence | 15 | 13/15 | Multiple independent signals: named counterfeit apps in circulation, sustained regional press coverage, incumbent (Nequi) shipping a partial fix — the clearest possible proof the pain is real and unsolved cross-bank. |
| Build feasibility | 15 | 12/15 | Core is straightforward; bank-coverage breadth is genuine integration work that phases in with the open-finance rollout. |
| Distribution clarity | 15 | 12/15 | Named corridors, named associations, named microfinance partners, and a free viral tool. Docked for unproven conversion at this price point. |
| Revenue mechanics | 15 | 10/15 | Price point is low and must be — 8,000 merchants for $1M ARR is a lot of small accounts. Partner bundling is the real path and it isn't validated yet. |
| Time to first revenue | 10 | 8/10 | Merchants decide in one conversation and pay monthly. Realistic first revenue 6–8 weeks post-launch. |
| Defensibility | 10 | 4/10 | This is the weak axis and I won't inflate it. A bank consortium, a POS vendor, or Bre-B itself could ship cross-bank verification and end the story. Moat is execution speed, merchant workflow lock-in, and accumulated counterfeit-pattern data. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `sales-heavy`

Needs someone who can ship financial integrations and a vision pipeline, paired with someone who will walk San Andresito for two weeks. In Colombia, ideally. Remote-only founders will lose this one — the distribution is physical.

### Key assumptions to validate

1. **Assumption:** Micro-merchants will pay ~$35,000 COP/month for fraud prevention rather than absorbing occasional losses. **How to test:** 40 in-person interviews across two corridors; ask what they lost in the last six months and take pre-orders at full price. Money changing hands is the only signal that counts.
2. **Assumption:** Merchant-consented account data can be read reliably enough, across enough institutions, to confirm arrivals within seconds. **How to test:** Build the connection for the top 3 institutions first and measure actual end-to-end confirmation latency against live counter conditions before writing any marketing.
3. **Assumption:** Clerks will actually use the green-light rule under queue pressure. **How to test:** Instrument override rates in the first 20 shops. If overrides exceed 30% of transactions, the workflow is wrong and the product doesn't work regardless of the technology.
4. **Assumption:** A partner channel (POS vendor or microfinance lender) will bundle this. **How to test:** Three partnership conversations in the first 60 days. This assumption carries the $5M case — test it early, not in year two.

### Risk flags

1. **Platform dependency / incumbent kill-shot:** Banco de la República, a bank consortium, or a major POS vendor could ship cross-bank arrival verification and eliminate the category overnight. This is the single largest risk. Mitigation is speed and owning the counter workflow — the alerts, shift logs and clerk accountability that a bank utility won't bother building.
2. **Integration fragility:** Open finance standards are on a publishing schedule, not shipped and stable today. Early coverage will be uneven, and uneven coverage in a trust product is worse than no product — a false green light is catastrophic. Be conservative: say "unknown," never guess.
3. **Price ceiling:** $9/month against 8,000 merchants for $1M ARR means CAC must stay near $20–30. Field sales alone won't clear that bar; the free viral tool and partner channels have to carry real weight.
4. **Regulatory perimeter:** Handling consented financial data in Colombia requires care around SFC expectations and data protection. Not a licensing barrier for a read-only, non-custodial tool, but it needs competent local counsel before launch, not after.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Colombia-based technical founder who can ship financial
                        integrations, paired with a field-sales operator willing
                        to work commercial corridors door to door
Time to revenue:        6–8 weeks post-launch
Capital to launch:      $25,000–35,000 USD (two salaries + field sales, ~4 months)
Top 3 assumptions to validate first:
  1. WTP at $35,000 COP/mo — 40 in-person interviews, take pre-orders at full price
  2. Confirmation latency across top institutions — build 3 connections, measure
     end-to-end seconds under real counter conditions before marketing anything
  3. Clerk override rate under queue pressure — instrument first 20 shops
Kill criteria:
  - Abandon if fewer than 8 of 40 interviewed merchants pre-pay at full price
  - Abandon if median confirmation latency exceeds 20 seconds across top-5
    institutions — the counter workflow does not survive that
  - Abandon if clerk override rate exceeds 30% after two weeks in pilot shops
  - Abandon if Banco de la República or a bank consortium announces native
    cross-bank arrival verification before v1 ships
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Walk one commercial corridor in Bogotá — Restrepo or San Andresito. 40 merchant interviews, one question first: *"In the last six months, how many times did someone show you a receipt and the money never arrived, and what did it cost you?"* Record amounts. Anyone who says zero is not a customer; find out what fraction that is.
- **Day 3–4:** Technical spike on the real constraint. Connect one merchant account at each of the top 3 institutions and measure actual time from transfer initiation to confirmable arrival in a third-party view. This single number decides whether the product is possible.
- **Day 5:** Return to the 15 merchants who reported the highest losses and ask for $35,000 COP for a first month, today, for a product that doesn't exist yet.

**Falsifiable outcome:** Go if ≥8 of 40 merchants report at least one fake-receipt loss in six months **and** ≥6 hand over money on Day 5 **and** median confirmation latency is under 20 seconds. Fail any one of those three and it's a no-go — I'd rather find out in a week than build a fraud tool that confirms too slowly to be used at a counter.
