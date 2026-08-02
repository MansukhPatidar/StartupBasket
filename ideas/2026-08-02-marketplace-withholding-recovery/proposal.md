---
title: "RetenLedger — withholding ledger for Mexican sellers"
slug: marketplace-withholding-recovery
date: 2026-08-02
category: FinTech / Mexico
complexity: Medium
score: 74
verdict: GO
confidence: Medium
oneLiner: "Shows a Mexican marketplace seller how much tax was withheld, how much is creditable, and what is quietly unrecoverable."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, Multilingual, AI-agent, Solo-builder]
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

# RetenLedger

## 1. One-liner

Shows a Mexican marketplace seller how much tax was withheld, how much is creditable, and what is quietly unrecoverable.

## 2. Trend signal — why now?

On **1 January 2026** Mexico's tax reform rewired how marketplace sellers get paid. Three things changed at once, and all three take money out of the seller's pocket:

1. **ISR withholding on goods sales jumped from 1% to 2.5%** — a 150% increase — and the rate was standardised across sectors, replacing the old differentiated table (transport 2.1%, lodging 4%, goods 1%).
2. **Legal entities (personas morales) are now withheld against for the first time.** Previously the platform withholding regime hit individuals. From 2026, platforms withhold from companies too: 50% of IVA (8% effective) plus ISR. No RFC on file and it goes to 16% IVA + 20% ISR.
3. **From 1 April 2026 the SAT has real-time access to platform transaction data** (Mercado Libre, Amazon, Uber, Airbnb), which it cross-matches against what the seller declared. Inconsistencies can hold up refunds.

The effective bite with a valid RFC is roughly **10.5% of gross** withheld before the seller sees a peso — on top of platform commission that a documented January 2026 case measured at **27.5% of gross sales**. In that same worked example: $728,402.30 MXN in gross sales, $18,210.05 ISR withheld, $58,272.18 IVA withheld, $200,457.60 in platform commission.

The reporting side is where the money leaks. Each sale generates **3–5 separate movements** in Mercado Pago (collection, commission, ISR withholding, IVA withholding, shipping commission). Mercado Libre issues **one CFDI de retenciones per month**, and invoices frequently carry **"Forma de pago 99 — Por definir"**, which means the platform must later issue a *Complemento de Pago* (REP). Without that REP, the invoice **is not fully deductible for ISR and the IVA cannot be credited at all** — as one guide puts it, for the SAT "ese IVA simplemente no existe como acreditable." Missing complementos also carry fines of **400–600 MXN per comprobante**.

Meanwhile the SAT introduced **automatic pre-fill for the IVA declaration** that now reads complementos de pago directly — so the mismatch between what the platform reported and what the seller claims is computed for you, by the tax authority, whether you looked or not.

The result, in the words of one Mexican accounting practice: the 2026 automatic withholding has caused "thousands of businesses to receive less money than expected without clearly understanding why."

Provenance:
  - Signal 1 (demand): Mexican sellers receiving less than expected from Amazon/ML with no clear explanation; each sale spawns 3–5 Mercado Pago movements requiring monthly reconciliation against a single retention CFDI — https://contarito.com.mx/blog/impuestos-mercadolibre-vendedores-mexico-2026/ and https://blog.gdlsystems.com/2025/12/nuevos-impuestos-2026-para-amazon-y.html — 2026-08-02
  - Signal 2 (feasibility/regulatory): 2026 reform raises ISR withholding 1%→2.5%, extends withholding to legal entities, and grants SAT real-time platform data access from April 2026; worked example shows 27.5% commission + $76,482 withheld on $728K gross in one month — https://blog.gigstack.pro/post/reforma-fiscal-2026-plataformas-digitales-retenciones-isr-iva-mexico and https://vonaut.com/blog-1/reforma-fiscal-2026-lo-que-todo-vendedor-en-amazon-y-mercado-libre-debe-saber — 2026-08-02
  - Signal 3 (economic): Missing Complemento de Pago on PPD invoices makes IVA non-creditable and triggers 400–600 MXN fines per comprobante; SAT now auto-prefills the IVA declaration from complementos — https://www.portaldeproveedores.mx/blog/complementos-de-pago-riesgos-fiscales/ and https://www.satfacil.com.mx/blog/complemento-de-pago-sat-guia-completa — 2026-08-02
  Category: Regulatory arbitrage

## 3. The opportunity

The existing tools in this market solve the **wrong half of the problem**. SELLERP, SnowProfit and ProfitOS are profitability dashboards — they tell a seller their margin per SKU after commissions, ads and shipping. Useful. But they are built to answer *"am I making money on this product?"*, not *"is the tax that was taken from me actually coming back?"*

Those are different jobs, and the second one is now worth more. Withholding is not a cost — it is a **prepayment**. Every peso withheld is creditable against provisional ISR payments or the annual return. But a credit you never claim is indistinguishable from a cost you paid. And in 2026 there are four distinct ways a Mexican seller silently fails to claim it:

- The retention CFDI arrives monthly but the deposits arrive daily, so the seller never ties them out and credits from memory or from the bank balance.
- A PPD invoice never receives its Complemento de Pago, so the IVA is permanently non-creditable and nobody notices because nothing bounces.
- The seller confuses **gross revenue with net bank deposits** — a documented common error the SAT specifically cross-checks — and under-declares, which now collides with SAT's real-time platform feed.
- Returned sales never get their credit note (CFDI de egreso), leaving withholding attached to revenue that was reversed.

The incumbent for this job is not software. It is **a $3,000–$8,000 MXN/month accountant** doing it by hand in a spreadsheet, and accountants openly price *more* for multi-channel sellers because "a más canales, más conciliación de retenciones, IVA y CFDI." That is a manual, high-volume, rule-bound matching task against structured documents — precisely what collapses from hours to minutes.

This is a **regulatory arbitrage** play with a hard start date. The rules changed in January, the SAT cross-match went live in April, and the guidance in the market is still lagging — several 2026-dated Mexican accounting pages still quote the old 1% ISR rate. The sellers are confused *right now*.

## 4. Target market

- **Primary customer:** Mexican marketplace sellers — persona moral or persona física in the plataformas digitales regime — doing **$300K–$5M MXN/month in gross sales** across Mercado Libre and/or Amazon México. One to fifteen employees. Usually one person (owner or an administrative assistant) owns the monthly SAT filing pack, working with an external accountant.
- **Why they buy:** Because ~10.5% of their gross is taken before they see it, their platform commission is another ~27.5%, and they cannot tell whether the withheld portion is fully coming back. The pain is felt monthly, at filing time, and it is denominated in real pesos — the worked example above had **$76,482 MXN withheld in a single month**. On that volume, a 3% leak from unclaimed IVA and missing complementos is over $27,000 MXN a year.
- **Rough TAM reasoning:** Mercado Libre reports roughly **1 million active sellers across its 18 markets**, with Mexico among its largest. Amazon México runs a parallel seller base — 27,000 Mexican sellers participated in Prime Day 2026 alone (99% SMBs). The serviceable slice is sellers large enough to have real withholding but small enough to lack an in-house finance team — realistically **tens of thousands of businesses**, not millions. That is the right size: too small for an ERP vendor to localise for, more than enough for a $5M ARR business.
- **Why now for them:** Three simultaneous changes in one fiscal year — a 150% rate increase, first-time withholding on companies, and a SAT that can now see the platform's numbers directly. A seller who was sloppy in 2025 and got away with it will not get away with it in 2026.

## 5. Product sketch (MVP)

- **Connect Mercado Libre, Mercado Pago and Amazon Seller** — pull settlement reports, the monthly retention CFDI, and the transaction-level movement feed.
- **The withholding ledger** — one running record per month: gross sales, platform commission, ISR withheld, IVA withheld, shipping deductions, net deposited. Every line traced back to the movement that produced it.
- **Tie-out check** — reconciles the platform's monthly retention CFDI against the sum of the individual withholding movements and against what actually hit the bank. Flags the delta, in pesos, with the specific orders responsible.
- **Complemento de Pago chase list** — lists every PPD invoice still missing its REP, how much IVA is non-creditable while it stays missing, and how long it has been outstanding. This is the single highest-value screen in the product.
- **Credit position summary** — how much withheld ISR and IVA is creditable this period, formatted to hand to an accountant or drop into a provisional payment.
- **Gross-vs-net warning** — flags when declared revenue looks like it was taken from bank deposits rather than gross sales, the error the SAT cross-matches.
- **Returns and credit notes** — surfaces reversed sales that still carry withholding and have no CFDI de egreso.
- **Monthly close pack** — a single PDF/XLS bundle: ledger, tie-out, exceptions, credit position. What the accountant actually wants.

## 6. AI angle — what's load-bearing

Remove the AI and the product mostly still stands — so let me be honest about where it genuinely carries weight rather than overclaiming.

The ledger and tie-out arithmetic is deterministic. It should be. Nobody wants a language model estimating their tax position, and I would not ship one that did.

Where AI is load-bearing is **document normalisation and exception explanation**:

- **Heterogeneous document parsing.** Retention CFDIs, settlement reports and account statements differ by platform, change format without notice, and arrive as XML, PDF and CSV. Extracting a consistent set of fields across Mercado Libre, Mercado Pago and Amazon — and not silently breaking when Amazon reorders a column — is the grind that kills a rules-only build. This is exactly what document-extraction models are now reliable and cheap enough to do.
- **Explaining the delta in Spanish.** When the tie-out is off by $4,312 MXN, the seller needs to know *which orders* and *why* — a partial refund, a shipping adjustment, a withholding on a cancelled sale. Turning a set of unmatched movements into a plain-Spanish explanation an owner can act on is a genuine language task.

Deterministic math, AI-assisted ingestion and explanation. That split is the defensible design, and I would rather state it plainly than pretend there is an agent doing tax strategy.

## 7. Localization angle

This is a **Mexico-only product by construction**, and that is the entire point rather than a limitation.

- **Regulatory quirk is the moat.** CFDI 4.0, Complemento de Pago / REP, PPD vs PUE payment methods, forma de pago 99, RESICO exclusion for platform sellers, RFC validity driving the 10.5%-vs-36% withholding cliff — none of this exists outside Mexico. A generic global seller-analytics tool cannot express it.
- **Language.** The product, the exception explanations and the support are Spanish-first. Not translated — written for a Mexican seller who thinks in these terms.
- **Local pricing.** $1,200–$4,000 MXN/month ($65–$215 USD) sits comfortably below what these sellers already pay an accountant and reads as cheap. A $299 USD global SaaS price would not clear.
- **Rails.** Mercado Pago is not merely a processor here; it is where the movements live. Building around its report structure is table stakes.

The adjacent expansion is **Brazil**, which is running its own CBS/IBS reform with split payment and a hard 1 August 2026 e-invoicing deadline — structurally the same problem, different acronyms. But that is a year-two decision, not a v1 hedge.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** three tiers by gross monthly volume.
  - *Starter* — $1,200 MXN/mo (~$65 USD) — up to $500K MXN/mo gross, one marketplace.
  - *Growth* — $2,500 MXN/mo (~$135 USD) — up to $2M MXN/mo gross, multi-channel.
  - *Pro* — $4,000 MXN/mo (~$215 USD) — above $2M MXN/mo, multiple RFCs, accountant seat included.
- **ACV:** blended ~$2,400 MXN/mo = **$28,800 MXN/year (~$1,550 USD)**.
- **Math to $1M ARR:** ~$18.5M MXN ARR ÷ $28,800 = **~640 paying sellers**. Against a base of tens of thousands of qualifying Mexican sellers, that is low-single-digit penetration.
- **Math to $5M ARR:** ~3,200 sellers, or ~1,800 sellers plus an accountant-firm channel selling multi-client seats at $15,000–$40,000 MXN/mo per practice. The firm channel is the realistic route to $5M — one practice brings 20–80 sellers in a single sale.
- **Expansion path:** more connected channels (Shein, Temu, Coppel, Liverpool marketplaces, own Shopify), additional RFCs per group, multi-client accountant seats, then Brazil CBS/IBS as a separate product line.
- **Margin note:** cost to serve is document ingestion and storage. Even with per-document model calls, gross margin should sit north of 85% at any meaningful scale — these are hundreds to low thousands of documents per seller per month, not millions.

## 9. Go-to-market wedge — first 100 customers

- **The accountant channel is the wedge, not the sellers.** Mexican e-commerce accounting practices publicly market "contador para Amazon sellers" and charge more for multi-channel retention reconciliation. Their margin problem *is* my product. Identify 150–200 such practices via their own SEO pages (praxiumconsultores, contarito, cajanauta/vonaut and the long tail already ranking for these terms), and offer the tool free for their first three clients. One practice closed = 20–80 sellers reachable. This is the highest-leverage motion and it is a phone-and-email campaign, not a marketing programme.
- **The free tie-out audit as the hook.** Build a one-off tool: seller uploads last month's retention CFDI plus their Mercado Pago statement, gets back a free report — "$X withheld, $Y creditable, $Z of IVA currently non-creditable because N invoices are missing their Complemento de Pago." That last number is the sales pitch and it is computed, not claimed. Run it as an ungated lead magnet. Every seller who runs it and sees a non-zero Z is a warm inbound.
- **Ride the April SAT cross-match.** Sellers whose declarations disagree with the platform feed will feel it at filing. Target the specific moment: content and outreach timed to the monthly 17th filing deadline, in Spanish, on the exact error modes the SAT checks (gross vs net, missing egresos, missing REP).
- **Mexican seller communities.** Facebook groups and WhatsApp communities for Mercado Libre and Amazon México sellers are where this audience actually congregates — not Reddit, which is thin for this market. Direct participation with the free audit, no ads.
- **Marketplace seller events.** Mercado Libre and Amazon run seller-facing events and training in CDMX, GDL and MTY. Physical presence with a free audit laptop converts on the spot for this buyer.

## 10. Build complexity — justification

**Medium.** The hard parts are integration breadth and document variance, not algorithms: Mercado Libre and Mercado Pago APIs, Amazon Seller reports, and CFDI 4.0 XML parsing including retention complements and REP. The tax logic is rule-based and well-documented — creditable ISR, IVA at 50%/100%, PPD/PUE handling — but it must be exactly right, which means real test coverage against real documents. A technical founder plus a Mexican accountant advisor ships a credible v1 in **12–16 weeks**; the free tie-out audit tool alone is shippable in **4–5 weeks** and is the correct first release.

The genuine risk to the calendar is CFDI edge cases. Mexican e-invoicing has a long tail of real-world malformation, and the only way through it is volume of actual documents — which is another argument for shipping the free audit tool early, purely to accumulate them.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only use of seller's own data via official APIs and their own CFDIs. No platform ToS conflict — unlike delivery-dispute tools, this does not act on the seller's behalf inside a merchant portal. |
| Ethical — no harm / dark patterns | ✅ | Helps sellers claim credits they are legally entitled to and file accurately. Compliance-positive; it makes the SAT's cross-match easier to pass, not harder. |
| Market exists (evidence above) | ✅ | Sellers already pay $3,000–$8,000 MXN/mo accountants who explicitly upcharge for this exact reconciliation. |
| 1–5 person team can build this | ✅ | Technical founder + accountant advisor. |
| Launchable with <$50K / ₹40L | ✅ | Realistically $8–15K USD: infrastructure, document-model spend, and an accountant on retainer. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **16**/20 | Monthly, money-denominated, and newly worse. $76K MXN withheld in a single month in the documented example. Not quite hair-on-fire because the loss is silent — an unclaimed credit doesn't bounce, which is exactly why it persists, but it also blunts urgency. |
| Demand evidence | 15 | **12**/15 | Strong indirect evidence: paid accountants upcharging for this precise task, multiple Mexican practices publishing 2026 reform explainers, documented seller confusion. Docked because I found no verbatim first-person seller complaints — Mexican sellers congregate in Facebook/WhatsApp groups that don't surface in search. |
| Build feasibility | 15 | **11**/15 | Rule-based logic, official APIs. Real work is CFDI edge cases and multi-platform document variance. 12–16 weeks for v1, 4–5 for the audit tool. |
| Distribution clarity | 15 | **11**/15 | Accountant channel is named, enumerable and self-identifying via their own SEO. Free tie-out audit is a genuinely computed hook. Docked because the accountant channel is partly a channel-conflict risk — I'm automating work they bill for. |
| Revenue mechanics | 15 | **12**/15 | 640 sellers to $1M ARR is credible. Pricing anchored below an existing, known line item. $5M leans on the firm channel, which is less proven. |
| Time to first revenue | 10 | **7**/10 | Free audit tool live in ~5 weeks, paid conversion realistically 8–12 weeks. Monthly filing cadence means the buying trigger comes around every month — good — but sellers may wait for a filing cycle to feel the pain. |
| Defensibility | 10 | **5**/10 | Honest score. Mexican tax-rule depth and accumulated CFDI edge-case handling are a real 6–12 month head start, and workflow lock-in grows once the ledger is the system of record. But nothing here stops a funded Mexican fintech — or SELLERP — from adding it. Execution-and-focus moat, not a structural one. |
| **Total** | **100** | **74**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

This needs a builder comfortable with messy document pipelines **and** a genuine Mexican tax advisor in the loop from week one. Do not attempt this from outside Mexico without that second person — the CFDI/REP detail is where the product lives and it is not learnable from blog posts.

### Key assumptions to validate

1. **Assumption:** A meaningful share of active Mexican marketplace sellers have non-trivial unclaimed IVA from missing Complementos de Pago. **How to test:** Build the free tie-out audit first. Run it on 30 real sellers' last month. Measure the distribution of the "non-creditable IVA" number. If the median is under ~$2,000 MXN, the headline pitch is weak and the product must reposition around time saved rather than money recovered.
2. **Assumption:** Sellers, not their accountants, will pay for this. **How to test:** Take the same 30 audits to both audiences. Track who asks "how much?" first. If only accountants bite, reprice as a per-practice multi-client tool from day one — that changes pricing and product surface materially.
3. **Assumption:** Accountants will adopt rather than resist a tool that automates billable reconciliation. **How to test:** Pitch 15 e-commerce practices directly. Frame as margin expansion — same fee, less labour. If ≥5 pilot, the channel is real; if they stall, fall back to direct-to-seller and treat accountants as competition.
4. **Assumption:** Mercado Libre / Mercado Pago / Amazon APIs expose withholding at sufficient granularity to tie out to the monthly retention CFDI. **How to test:** Technical spike in week one against one real seller account. This is a genuine build-or-don't gate — if the movement data can't be tied to the CFDI, the core screen doesn't exist.

### Risk flags

1. **Platform dependency:** The entire product sits on Mercado Libre, Mercado Pago and Amazon APIs and report formats. A format change breaks ingestion; an API access-policy change is existential. Mitigate by supporting file upload as a first-class path, not just API sync — which also serves sellers who won't grant API access.
2. **Channel conflict:** The accountant channel is simultaneously the best distribution and the party whose billable hours this erodes. Positioning must be margin-expansion, not replacement, and the pricing must leave the practice better off.
3. **Regulatory motion:** Mexico's reform phases in over several years, and the SAT changes rules and catalogs frequently — the miscellaneous resolution is updated annually. Rule maintenance is a permanent operating cost, not a one-time build. This cuts both ways: it is also the moat.
4. **Silent-loss problem:** Unclaimed credits don't generate an alert, a fine, or a bounced payment. Selling against an invisible loss is harder than selling against a deadline. The free audit exists specifically to make the invisible number visible — if it can't, the whole GTM weakens.
5. **Incumbent adjacency:** SELLERP already markets "conciliación SAT" alongside profitability. They are closer to this than anyone. Assume 6–12 months before a credible fast-follow.

## 14. Structured verdict

```
Score:                  74/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder in Mexico (or with a Mexican co-founder),
                        paired with a practising CPA specialising in e-commerce
Time to revenue:        8–12 weeks (free audit tool live in ~5)
Capital to launch:      $8–15K USD / $150–280K MXN
Top 3 assumptions to validate first:
  1. Median unclaimed IVA per seller is material — run free tie-out audits on 30 real sellers
  2. Seller pays vs accountant pays — take the same 30 audits to both, see who asks the price first
  3. Platform APIs expose withholding granularly enough to tie out — one-week technical spike
Kill criteria:
  - Abandon if median non-creditable IVA across 30 seller audits is under $2,000 MXN/month
    (the money story dies and with it the wedge)
  - Abandon if fewer than 3 of 15 pitched accounting practices agree to a free pilot
  - Abandon if Mercado Pago movement data cannot be reconciled to the monthly retention CFDI
    without manual intervention — that makes the core screen a services business, not software
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Technical spike. Get one friendly seller's Mercado Libre + Mercado Pago credentials. Determine whether withholding movements can be pulled and tied to their monthly retention CFDI. This is binary and it gates everything downstream.
- **Day 3–4:** Manually perform the tie-out for 10 real sellers — spreadsheet, by hand, no product. Record two numbers per seller: total withheld, and IVA currently non-creditable due to missing REP. Manual is the point; it produces the distribution that assumption 1 needs.
- **Day 5:** Take those 10 completed audits back to the sellers and to 8 e-commerce accounting practices. Ask for a paid pilot at $2,500 MXN/mo.

**Falsifiable outcome:** Go if the median non-creditable IVA across the 10 audits exceeds **$2,000 MXN/month** *and* at least **3 of 18 conversations** convert to a paid pilot commitment. Below either threshold, this is a feature for an existing seller-analytics tool, not a company — and I'd rather learn that in week one than month six.
