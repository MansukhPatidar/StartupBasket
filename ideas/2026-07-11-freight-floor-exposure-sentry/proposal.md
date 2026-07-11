---
title: "PisoGuarda — freight-floor sentry for Brazilian shippers"
slug: freight-floor-exposure-sentry
date: 2026-07-11
category: Logistics / Brazil — Mid-Market Shippers (embarcadores) exposed to ANTT minimum-freight-floor fines
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Checks every load you ship against the ANTT freight floor and counts down to the R$1 million fine."
tags:
  vertical: Logistics
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, AI-agent, Portuguese, Regulatory-arbitrage]
axes:
  problem: 18
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 3
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# PisoGuarda

## 1. One-liner

Checks every load you ship against the ANTT freight floor and counts down to the R$1 million fine.

## 2. Trend signal — why now?

Three things happened in Brazil between March and June 2026 that turned a dusty, widely-ignored rule into an automated fining machine.

**The enforcement went vertical.** ANTT citations for freight paid below the minimum floor: **4,328 in 2024 → 64,139 in 2025 → 66,954 in the first two months of 2026 alone**. That is not a trend line, it is a step function. The agency stopped doing roadside checks and started cross-referencing CT-e, MDF-e and CIOT electronically. ([Schiefler Advocacia](https://schiefler.adv.br/autuacoes-da-antt-por-frete-abaixo-do-piso-minimo-pontos-de-atencao-para-empresas-contratantes/), 2026)

**The block moved to before the truck leaves.** ANTT Resolution 6.078/2026 made CIOT mandatory for *every* remunerated road freight operation from 24 May 2026 — including own-fleet carriers, which was never true before. Portaria SUROC nº 6/2026 turned CIOT into a validation gate: declare a freight value below the floor and the system simply refuses to issue the code. No code, no legal trip. ([ANTT Resolução 6.078/2026](https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&tipo=RES&numeroAto=00006078&seqAto=000&valorAno=2026&orgao=DG%2FANTT%2FMT&cod_modulo=623&cod_menu=9230), 24 Mar 2026)

**The penalty ladder got a top rung that ends companies.** Resolution 6.077/2026: contracting below the floor is a fine of 2× the shortfall, floor R$550, cap R$10,500 — annoying but survivable. Then the trap. Accumulate **three administrative convictions totalling ≥ R$50,000** and ANTT mails you a formal *notificação de alerta*. The very next violation after you sign for that letter is no longer R$10,500 — it **starts at R$1,000,000 and escalates to R$10,000,000**, with mandatory suspension of your right to contract road freight at all (5 days at R$5M accumulated, 10 days at R$10M, 30 days at R$15M). ([Resolução ANTT 6.077/2026](https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=9230&cod_modulo=623&numeroAto=00006077&orgao=DG%2FANTT%2FMT&seqAto=000&tipo=RES&valorAno=2026), 24 Mar 2026)

And here is the part that makes this a product instead of a memo: **the fined party is usually not the trucker. It is the company that hired the trucker.** The *embarcador* — the manufacturer, the distributor, the agro co-op — is liable under *culpa in eligendo* for picking a cheap carrier, and can be cited without ever having touched a vehicle.

Meanwhile the only official tool for computing the floor is [calculadorafrete.antt.gov.br](https://calculadorafrete.antt.gov.br/) — a **manual, one-trip-at-a-time web form**. No API. No batch. No file upload. A shipper moving 400 loads a month is expected to type 400 forms, each needing exact axle count, cargo class (general / bulk / refrigerated / dangerous / neobulk), load-return status, high-performance flag, and the correct SUROC coefficient table for the *date of the trip* — coefficients that get republished every time the diesel trigger fires (three times already in 2026).

Nobody does this. So everyone is accruing convictions toward a letter they don't know is coming.

```
Provenance:
  - Signal 1 (Demand): ANTT piso-mínimo citations exploded 4,328 (2024) → 64,139 (2025) → 66,954 in Jan–Feb 2026 alone; shippers/contractors are cited directly, not just carriers — https://schiefler.adv.br/autuacoes-da-antt-por-frete-abaixo-do-piso-minimo-pontos-de-atencao-para-empresas-contratantes/ — 2026
  - Signal 2 (Feasibility): CIOT mandatory for all remunerated freight from 24 May 2026 (Res. 6.078/2026); floor validation now happens electronically at CIOT/MDF-e issuance against structured CT-e/MDF-e data — machine-readable inputs that did not exist as a complete national dataset before — https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&tipo=RES&numeroAto=00006078&seqAto=000&valorAno=2026&orgao=DG%2FANTT%2FMT&cod_modulo=623&cod_menu=9230 — 24 Mar 2026
  - Signal 3 (Economic): Res. 6.077/2026 creates the R$50K/3-conviction alert threshold, after which fines start at R$1,000,000 and reach R$10,000,000 plus suspension of the right to contract freight — https://anttlegis.antt.gov.br/action/ActionDatalegis.php?acao=abrirTextoAto&cod_menu=9230&cod_modulo=623&numeroAto=00006077&orgao=DG%2FANTT%2FMT&seqAto=000&tipo=RES&valorAno=2026 — 24 Mar 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

The gap is a mismatch between **who gets fined** and **who has software**.

Brazil's freight software market is built for *carriers*. Brudam (3,000+ transportadoras), Bsoft, Soften, Portal do Transportador, SimplesCTe — they all sell CT-e/MDF-e emitters to the people who drive the trucks. Excellent products. Wrong customer. The carrier isn't the one who gets the R$1M letter for hiring below the floor; the shipper is.

On the shipper side there are exactly two options today:

1. **Enterprise freight-audit TMS** — GKO Frete, Senior TMS Embarcador. These are genuinely good and they do validate freight values. They are also six-figure implementations with months-long deployments, sold to Ambev and Unilever. A R$80M-revenue plastics maker in Joinville shipping 300 loads a month is not buying GKO.
2. **The ANTT web form.** Manual. One trip at a time. Nobody uses it at volume.

Between those two poles sits every mid-market Brazilian manufacturer, distributor, agro co-op and building-materials trader in the country — companies with real freight volume, real exposure, and a *controladoria* team of three people running the whole thing in Excel.

The 10× is not a better calculator. **The 10× is knowing your number.** No shipper in Brazil can currently answer: "how many of my last 12 months of loads were below the floor, what is the accrued fine exposure, and how close am I to the R$50,000 alert threshold?" That question has a computable answer — the CT-e/MDF-e data is already sitting in their SEFAZ mailbox — and today it costs a law firm a five-figure engagement to produce it once, as a PDF, that is stale the day it lands.

We produce it continuously, for R$1,200/month, and we tell you *before* you dispatch the load rather than after ANTT does.

## 4. Target market

- **Primary customer:** The *gerente de logística* or *controller* at a Brazilian mid-market shipper — R$50M–R$500M annual revenue, dispatching 150–1,500 road loads/month, contracting third-party carriers and autônomos (TACs). Concentrated in SP, MG, PR, SC, RS, GO. Think plastics, food processing, building materials, agro inputs, steel service centers, furniture. They have an ERP (Totvs, Sankhya, Omie) but no TMS.
- **Why they buy:** They are not buying "compliance." They are buying the removal of a specific, dated terror: an ANTT letter with seven figures on it, arriving because of R$550 fines they never bothered to contest. The trigger event is a peer in their industry association getting hit — and given 67K citations in two months, that peer exists.
- **Rough TAM reasoning:** Brazil has on the order of tens of thousands of industrial and distribution companies in the R$50M–R$500M band that move goods by road; this is the backbone of the Brazilian economy and road carries ~60%+ of national freight. I don't need a precise number — I need 700 of them at R$1,200/mo to hit R$1M ARR. That is a rounding error of the addressable base.
- **Why now for them:** Before 24 May 2026, floor violations were caught (rarely) at roadside. After it, they are caught automatically, at scale, from documents the shipper themselves filed. The exposure is retroactive too — ANTT audits historical CT-e/MDF-e, and Resolution 5.867/2020 art. 9º §4º requires five years of document retention. The convictions are already accruing. Most of these companies simply haven't opened the envelope yet.

## 5. Product sketch (MVP)

- **Connect once, ingest forever.** Point PisoGuarda at the company's digital certificate / SEFAZ document feed. It pulls every CT-e and MDF-e where the company is the contracting party — no ERP integration project, no IT ticket.
- **The floor engine.** For every load, recompute the ANTT minimum floor from the actual trip parameters (distance, axle count, cargo class, high-performance flag, empty-return, and the SUROC coefficient table *in force on the date of that trip*). Compare against what was actually paid.
- **The exposure number.** A single figure on the dashboard: accrued fine exposure across the last 12 months, computed as 2× each shortfall (bounded R$550–R$10,500), plus the count of convictions and the distance remaining to the R$50,000 / three-conviction alert threshold. This is the screenshot that gets forwarded to the CFO.
- **Pre-dispatch check.** Before a load is contracted, paste or upload the route and vehicle and get a floor number back in seconds — with the legal minimum you must pay, so the negotiation happens above the line instead of below it.
- **Carrier scorecard.** Which of your carriers are systematically pricing you below the floor? They are creating your liability, not theirs. Hand them the list.
- **Defense pack.** For any citation already received, generate the document bundle a lawyer needs to contest it: the recomputed floor, the parameters ANTT likely used vs. the real ones (axle-count, distance and cargo-class disputes are the standard defenses), the contracts, and the payment proofs.
- **Alert-threshold watch.** Email + WhatsApp when a new conviction lands or when accrued exposure crosses a threshold the customer sets.

## 6. AI angle — what's load-bearing

Remove the AI and this product does not work, for one specific reason: **the inputs are unstructured and inconsistent.**

The floor formula itself is arithmetic — `piso = (distância × CCD) + CC`. That part is a spreadsheet. The hard part is everything upstream of the arithmetic:

- **Cargo classification.** The floor depends on whether the load is *carga geral*, *granel sólido*, *frigorificada*, *perigosa*, *neogranel*, *conteinerizada*. What the CT-e actually contains is a free-text description of goods written by a clerk in a hurry. Mapping "RESINA PP HOMOPOLIMERO BIG BAG 25T" to the correct ANTT cargo class across thousands of descriptions is a classification problem, not a lookup.
- **Vehicle composition.** The floor is a step function of axle count (2, 3, 5, 7, 9). The document gives you a plate, sometimes a vehicle type code, often a messy free-text field. Inferring the real composition — and catching when the declared composition doesn't match the one that actually ran — is inference.
- **Regulatory drift.** ANTT reissues SUROC coefficient tables whenever the diesel trigger fires — three times in 2026 already (Portarias 3/2026, 4/2026 at R$7.35/L). Resolutions get superseded (5.867 → 6.076 → 6.077). Keeping the engine correct against a moving legal target is continuous document ingestion and diffing.
- **Defense drafting.** Turning "your axle count was misread and the distance ANTT used includes a leg you didn't contract" into a filed administrative appeal is generative work over the customer's own documents.

The AI is doing the work that today requires a logistics analyst plus a lawyer. The arithmetic is the easy 5%.

## 7. Localization angle

This *is* the localization angle — it is not a global product wearing a Brazilian hat. The entire thing is Brazil-specific:

- **The regime is Brazilian.** No other major market sets a legally binding national minimum price for road freight and fines the *buyer* for underpaying. This exists because of the 2018 truckers' strike (Lei 13.703/2018) and it is politically radioactive, which is precisely why it is not going away quietly.
- **The data rails are Brazilian.** CT-e, MDF-e, CIOT, RNTRC, digital certificates (e-CNPJ / A1), SEFAZ document distribution. A foreign entrant would need to build all of this from zero.
- **Language and channel.** Portuguese-only. Sold through SETCESP/FETRANSPAR-adjacent networks, industry associations (FIESP, sectoral sindicatos), and the accounting/*contabilidade* firms that already hold these companies' fiscal documents.
- **Pricing.** R$1,200/mo (~$220) is a rounding error against a single R$10,500 fine, let alone a R$1M one. That price point is unreachable for GKO-class enterprise software but perfectly normal for a Brazilian mid-market SaaS.

No US or EU competitor will ever build this. That's the point.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered on monthly freight-document volume.
  - *Vigia* — R$690/mo, up to 200 CT-e/month. Exposure monitoring + pre-dispatch check.
  - *Blindagem* — R$1,490/mo, up to 1,000 CT-e/month. Adds carrier scorecard, defense packs, multi-CNPJ.
  - *Grupo* — R$3,900/mo, unlimited + multi-entity consolidation for groups with several CNPJs.
- **ACV:** Realistically R$1,400/mo blended → **~R$17K/yr (~$3,100)**.
- **Rough math to $1M ARR:** ~R$5.6M ARR ≈ **330 customers at the blended ACV.** Three hundred and thirty mid-market Brazilian shippers. Against an enforcement base that generated 67,000 citations in two months, this is not a heroic number.
- **Rough math to $5M ARR:** ~1,600 customers, or ~800 customers plus the second revenue line: **contingency-fee defense.** Take 20% of any fine successfully overturned using the defense pack. Given the standard defenses (wrong axle count, wrong distance, wrong cargo class) are exactly the errors a systematic engine catches, this is high-margin and self-funding. It also converts the product from a cost center into a P&L line the CFO likes.
- **Expansion path:** Volume tiers → multi-CNPJ groups → defense contingency → the natural adjacency: the same ingested CT-e/MDF-e corpus is a freight-audit dataset. Once you know the floor for every load, you also know which carriers overcharge. Selling "you overpaid R$340K last year" is an easier renewal conversation than "you avoided a fine."

## 9. Go-to-market wedge — first 100 customers

The defining feature of this market: **I can compute a prospect's exposure before they ever talk to me, from public and semi-public signals, and lead with the number.**

1. **The free exposure audit, as the wedge.** Build a one-page landing site: "Quanto você deve à ANTT sem saber?" Upload a CSV export of your last 12 months of CT-e (every ERP exports this; every accountant has it), get back a free report: how many loads below floor, accrued exposure in reais, distance to the R$50K alert threshold. This is a genuinely alarming artifact and it costs us nothing to produce. Conversion from "I saw my number" to "I need this monitored" is the entire funnel. Target: 500 audits → 100 paying.
2. **Go through the contabilidades, not around them.** Brazilian mid-market companies do not have a compliance function — they have an *escritório de contabilidade* that already holds every CT-e and MDF-e they've ever issued. A single mid-size accounting firm in Curitiba or Campinas holds 40–80 industrial clients. Sign the firm as a channel partner: they run the free audit across their book, we split revenue, they look like heroes for catching a seven-figure exposure. This is the highest-leverage channel and it is how Brazilian B2B software has always been sold. Target: 15 partner firms → 60 customers.
3. **Sectoral sindicatos and industry associations.** SETCESP, FETRANSPAR, state FIESP chapters, sectoral associations (ABIPLAST for plastics, ABIMAQ for machinery). They are actively publishing panicked explainers about Res. 6.077/6.078 right now — I linked several above. They need a speaker and a tool for their members; run a webinar titled "A carta de R$1 milhão da ANTT" and close from the attendee list. Target: 8 events → 25 customers.
4. **The citation list is a lead list.** ANTT administrative proceedings are public. Companies with recent *autos de infração* for piso mínimo are (a) proven to have the problem, (b) already scared, and (c) closest to the three-conviction threshold. Cold-call them with their own conviction count. Nothing converts like reciting a prospect's exposure back to them.
5. **The lawyers are allies, not competitors.** The *bancas* writing these client alerts (Schiefler, Mattos Filho, Menezes Niebuhr) are getting inbound from panicked shippers and have no tooling. Refer defense work to them; take the monitoring subscription. They send us the client, we send them the appeal.

## 10. Build complexity — justification

**Medium.** Roughly 14–18 weeks for two people to a paid v1.

Off-the-shelf: the web stack, the LLM for cargo-class and vehicle inference, the digital-certificate/SEFAZ document-fetch layer (Brazil has a mature ecosystem of libraries and paid APIs for this — this is a solved problem, not a research project). The floor arithmetic is trivial.

The custom work is threefold and none of it is exotic: (1) a **temporal rules engine** — the floor for a trip on 12 March 2026 uses a different coefficient table than one on 25 March, so every computation is versioned against the SUROC portaria in force that day, and the historical tables must be encoded correctly back five years; (2) **document normalization** — CT-e XML is standardized but what's *inside* the free-text fields is not, and the classification quality is the whole product; (3) **staying current** — someone has to watch the DOU and re-encode the tables when the diesel trigger fires. That last one is ongoing labor, not a build task, and it is also the moat.

What makes it Medium and not High: no hardware, no marketplace, no network effects, no regulatory approval needed to sell it, and the input data is already structured XML that the customer legally must possess.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping companies comply with ANTT rules and contest citations. Defense work is referred to licensed advogados, not performed in-house — we produce the evidence bundle, not the legal opinion. |
| Ethical — no harm / dark patterns | ✅ | The product's effect is that truckers get paid at or above the legal floor. Fear-based marketing ("R$1M letter") must stay factually accurate — the numbers are real and citable, and we don't invent urgency that doesn't exist. |
| Market exists (evidence above) | ✅ | 66,954 citations in two months. Enterprise TMS vendors already sell freight-value validation to the top of this market; the mid-market has nothing. |
| 1–5 person team can build this | ✅ | Two people, 14–18 weeks. One needs real Brazilian fiscal-document fluency. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main costs are the SEFAZ document-fetch API and a domain expert's time. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18**/20 | Hair-on-fire, and unusually so: the pain is a dated, escalating, existential financial liability that the customer is *currently accruing without knowing it*. Fines are automatic and already at 67K/2mo. The R$1M cliff after three convictions is the kind of thing that gets a CFO to sign the same week. Docked 2 only because the individual R$550–10,500 fines are, in isolation, ignorable — the terror requires explaining the ladder. |
| Demand evidence | 15 | **13**/15 | Hard, independent, citable: a 15× citation increase, an official calculator so bad nobody uses it at volume, law firms publishing client alerts (which is the surest sign that companies are calling them), and enterprise vendors already monetizing this exact validation upmarket. What's missing for a 15: I have no verbatim shipper quotes — the customer-voice evidence here is lawyer-mediated, not first-person. That's an honest gap. |
| Build feasibility | 15 | **11**/15 | Standard web stack plus LLM classification, on structured XML inputs. But the temporal rules engine is genuinely fiddly (coefficients change with the diesel trigger; get a date wrong and the output is worse than useless), and correctness here is not optional — a tool that miscalculates a legal floor is a liability, not a product. Pair, 14–18 weeks. |
| Distribution clarity | 15 | **12**/15 | The free-exposure-audit wedge is strong and cheap, and the *contabilidade* channel is exactly how Brazilian B2B software gets sold. The public citation list is a proven-pain lead list. Not a 14–15 because this is a Portuguese-language, relationship-driven, on-the-ground sale — an outsider without a Brazilian co-founder will bounce off the associations and accounting firms. |
| Revenue mechanics | 15 | **12**/15 | R$690–3,900/mo is trivially justified against a R$10,500 fine, let alone R$1M — the ROI pitch writes itself. 330 customers to $1M ARR is plausible. Docked because ACV in Brazilian mid-market SaaS is hard-won, churn risk is real if the STF strikes the regime, and the contingency-fee line (which is what gets you to $5M) is unproven. |
| Time to first revenue | 10 | **8**/10 | The free audit produces a terrifying number in week one of selling, and this is a *now* problem — no budget cycle to wait for. Realistically first paying customer 6–8 weeks post-launch. Not 9–10 because Brazilian mid-market procurement, even at R$1,200/mo, involves a *contrato* and a purchasing person. |
| Defensibility | 10 | **3**/10 | This is the weak axis and I won't dress it up. The floor formula is public. The regime is public. Any Brazilian TMS vendor — Brudam, Bsoft, Senior — can bolt this on, and if this becomes a visible category, they will. The only real moats are (a) the accumulated, correctly-versioned historical coefficient tables and classification corpus, (b) the accounting-firm channel relationships, and (c) speed. This is an execution-and-distribution business with a 6–12 month head start, not a defensible one. Build it, sell it fast, and be acquired by a TMS. |
| **Total** | **100** | **77**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This one is unusually gated on domain. You cannot build this from Bangalore or Berlin by reading translated blog posts. You need someone who has held a Brazilian e-CNPJ certificate, pulled documents from SEFAZ, and can read a SUROC portaria without flinching. **The right team is a Brazilian logistics/fiscal person + a strong engineer.** Without the former, the classification is wrong and the product is dangerous.

### Key assumptions to validate (3–5)

1. **Assumption:** Mid-market shippers are actually accruing floor violations at meaningful rates — this isn't a problem confined to the informal long tail. **How to test:** Get 10 shippers to hand over 12 months of CT-e exports (under NDA, free audit). Compute the violation rate. If the median shipper has <2% of loads below floor and zero convictions, the terror is theoretical and the product is a vitamin. **This is the single most important test and it can be run in two weeks with no code — a spreadsheet and the ANTT calculator will do.**
2. **Assumption:** The *embarcador*, not the carrier, is the one who feels this and holds the budget. **How to test:** 20 conversations with logistics managers at R$50M–500M shippers. Ask what happens today when a carrier quotes below the floor — do they even know they're liable? If they say "that's the transportadora's problem," the ICP is wrong and I should be selling to carriers instead.
3. **Assumption:** The regime survives. **How to test:** Track ADI 5956 at the STF and the fate of PLV 6/2026 in the Senate (deadline 16 July 2026). This is not testable by customer research — it's a watch-and-wait, and it belongs in kill criteria below.
4. **Assumption:** Accounting firms will act as a channel rather than build it themselves. **How to test:** Pitch 5 mid-size *contabilidades*. Offer 25% recurring revenue share. If they'd rather hand it to their in-house dev, the channel thesis collapses and CAC triples.
5. **Assumption:** Cargo-class and axle inference from CT-e free text can hit >95% accuracy. **How to test:** Hand-label 500 real CT-e records, benchmark the classifier. Below 95% the defense packs become unreliable, which is worse than not shipping.

### Risk flags

1. **Regulatory risk — and it is the big one.** ADI 5956 has been pending at the STF since 2018 and the constitutionality of Lei 13.703/2018 (the minimum-floor law itself) is genuinely unresolved; Reclamação 90.375/PR reaffirmed that a national suspension reaches processes applying the law. Separately, MP 1.343/2026 — which hardened the penalties — went to the Senate as PLV 6/2026 and **had to be voted by 16 July 2026 or lapse**; as of this writing it is "aguardando leitura." **If the STF strikes the floor regime, this product evaporates overnight.** That said: the underlying ANTT resolutions (6.076/6.077/6.078) are in force *today* independent of the MP, and the citations are being written *today* — so there is a real business in the window regardless. But nobody should build this without pricing in the possibility that the window closes. This risk alone is why confidence is Medium and not High, and why the exit is "sell to a TMS in 18 months," not "compound for a decade."
2. **Platform dependency.** The whole product rests on SEFAZ document access via digital certificate and on ANTT publishing coefficient tables in a parseable way. Both are stable, but both are government infrastructure, and neither owes us an API contract.
3. **Incumbent bolt-on.** Senior's TMS Embarcador already validates freight values for enterprise shippers. If they launch a self-serve mid-market tier — or if Brudam adds a shipper-side product for its 3,000 carriers' customers — the differentiation is only the exposure-ladder framing and the accounting-firm channel. Assume 9–12 months of clear air, not 3 years.
4. **Fear-selling ethics.** The marketing writes itself and that is exactly the danger. Every number in the pitch is real and citable today; the moment the product starts inflating exposure figures to close deals, it's a scam. Hold the line: report the computed exposure, cite the resolution, let the customer be scared by facts.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian logistics/fiscal domain expert + one strong engineer.
                        Non-negotiable: someone who can read a SUROC portaria and
                        pull documents from SEFAZ. This is not buildable from outside Brazil.
Time to revenue:        6–8 weeks post-launch (free-audit wedge; no budget cycle to wait for)
Capital to launch:      R$80–150K (~$15–28K) — mostly the domain expert's time and
                        the SEFAZ document-fetch API
Top 3 assumptions to validate first:
  1. Mid-market shippers actually violate the floor at meaningful rates —
     free audit of 10 shippers' 12-month CT-e exports. Two weeks, no code required.
  2. The embarcador knows (or can be made to understand) they are the liable party —
     20 logistics-manager interviews. If they say "that's the carrier's problem," pivot the ICP.
  3. Cargo-class/axle inference from CT-e free text clears 95% —
     hand-label 500 records and benchmark before writing the product.
Kill criteria:
  - Abandon if the STF rules Lei 13.703/2018 unconstitutional, or if the piso mínimo
    regime is suspended nationally. The product has no reason to exist without the floor.
  - Abandon if the free audit across 10 real shippers shows a median below-floor rate
    under 2% with no convictions — the exposure is theoretical and nobody buys insurance
    against a fire that isn't burning.
  - Abandon if a major TMS (Senior, Brudam, Totvs) ships a self-serve mid-market
    shipper-side floor monitor before v1 — the head start was the whole moat.
```

## 15. Next step — 1-week validation sprint

The beautiful thing about this idea is that the core validation requires **zero code**. The ANTT calculator is free and the data is in the customer's own ERP.

- **Day 1–2:** Get five mid-market Brazilian shippers (via one friendly accounting firm) to export 12 months of CT-e where they were the contracting party. Sign an NDA. This is the only hard part of the week — if I cannot get five companies to hand over an export they can produce in one click, that itself is a signal about how much they care.
- **Day 3–4:** By hand and by spreadsheet, recompute the ANTT floor for a random sample of 100 loads per company against the SUROC table in force on each trip date. Count violations. Compute accrued exposure as 2× each shortfall. Count how many companies are already past one or two convictions.
- **Day 5:** Walk the number back to each of the five logistics managers, in person. Say nothing except: *"Here is your exposure. Here is how far you are from the R$50,000 alert. Would you pay R$1,200 a month to have this watched continuously?"* Take out a contract.

**Falsifiable outcome:** Go if ≥3 of 5 shippers show real below-floor exposure **and** ≥2 of 5 sign a letter of intent or pre-pay at R$1,200/mo on the spot. No-go if the median violation rate is under 2%, or if managers shrug and say the carrier is liable — because then I've misidentified both the pain and the buyer, and no amount of good software fixes that.
