---
title: "FalsoCatch — 49 Bis reversal catcher for Mexican despachos"
slug: cfdi-49bis-reversal-catcher
date: 2026-08-07
category: Compliance / Mexico-SMB — Independent Accounting Firms (30–400 Client RFCs) Whose Clients Deducted CFDIs From Suppliers Newly Declared False Under Article 49 Bis
complexity: Low
score: 76
verdict: GO
confidence: Medium
oneLiner: "Catches the supplier your client paid before SAT's 30-day clock kills their digital seal."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Multilingual, AI-agent, SMB, Compliance-driven, Solo-builder]
axes:
  problem: 17
  demand: 11
  build: 13
  distribution: 12
  revenue: 11
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# FalsoCatch

## 1. One-liner

Catches the supplier your client paid before SAT's 30-day clock kills their digital seal.

## 2. Trend signal — why now?

Mexico's 2026 fiscal reform inserted **Article 49 Bis** into the Código Fiscal de la Federación, effective January 1, 2026. It creates an *express* home-visit audit: SAT shows up, the taxpayer gets **five business days** to prove materiality, and the whole procedure closes in a **maximum 24 business days** — versus months under the older Article 69-B route. If the issuer can't prove their operations were real, SAT publishes their name and RFC in the DOF and on the SAT portal.

Then the clock starts for everybody else. Every business that *received and deducted* CFDIs from that RFC has **30 natural days from DOF publication** to file a declaración complementaria reversing the ISR deduction and the IVA credit. Miss it and SAT can restrict the receiver's Certificado de Sello Digital — which means you cannot issue invoices, which means you stop trading.

The first three 49 Bis notices hit the DOF on **July 10, 2026**. Four weeks ago. This is a brand-new regulatory surface with a live enforcement clock and, so far, no tooling pointed at it.

Three things make the timing unusually good:

1. **SAT has declared intent at scale.** The Plan Maestro 2026 targets 16,200 audits, of which **12,000 are reviews of small and medium businesses**, with combating false invoicing as one of three named pillars. SAT already suspended digital seals for **7,300 taxpayers** during 2026 over false-invoicing links.
2. **There is no consolidated file.** As of late July 2026, SAT had not consolidated 49 Bis data into a single downloadable list. Notices appear as individual DOF oficios. The existing blacklist tools all poll a structured 69-B list that, for 49 Bis, does not exist yet.
3. **The incumbents are pointed elsewhere.** Every 69-B monitor on the market watches Articles 69 and 69-B. The one tool that mentions 49 Bis (iAudita) monitors the *Buzón Tributario* for the client being audited — the issuer-side, five-day problem — and explicitly notes 49 Bis notifications arrive via Buzón, "not through DOF publication." Nobody is watching the DOF for the receiver-side 30-day problem.

That's the gap: the audited company gets a notification. The 400 companies that bought from them get nothing but a legal obligation and a countdown.

Provenance:
  - Signal 1 (demand): Receivers of 49 Bis-flagged CFDIs have 30 natural days from DOF publication to file complementarias or face CSD restriction; article states there is **no automatic notification mechanism** — companies must "periodically verify" DOF and SAT portal themselves — https://www.abolawlex.com/post/articulo-49-bis-cff-cfdi-falsos-sat-2026 — 2026-07
  - Signal 2 (feasibility): First three 49 Bis lists published in DOF July 10, 2026; SAT has **not consolidated data into a single downloadable file**, requiring monitoring of both DOF and SAT portal — https://www.facturando.mx/blog/index.php/2026/07/21/nueva-lista-negra-sat-articulo-49-bis/ — 2026-07-21
  - Signal 3 (economic): SAT Plan Maestro 2026 plans 16,200 audits including **12,000 SME reviews**, with false-invoice combat as a core pillar; **7,300 CSDs suspended** in 2026 for false invoicing — https://www.infobae.com/mexico/2026/01/26/sat-presenta-plan-maestro-2026-para-mejorar-atencion-y-combatir-facturas-falsas/ — 2026-01-26
  - Signal 4 (willingness-to-pay): Existing SAT blacklist monitors charge real money — Tesio from $499 MXN/mo, Protector Fiscal $230.84 MXN/mo, iAudita from $79+IVA per RFC/mo — and all advertise monitoring of **69 and 69-B only** — https://protectorfiscal.mx/ — 2026-08
  Category: Regulatory arbitrage

## 3. The opportunity

The 69-B monitoring market is crowded and commoditized. Tesio, Protector Fiscal, Alerta69b, Valida69B, SatFácil, 69b.mx, XMLGratis — at least seven players, several with free tiers. If this idea were "monitor the 69-B list," it would be a PASS on arrival.

It isn't. The opportunity is a specific structural mismatch that 49 Bis created seven months ago:

**The incumbents are list-pollers.** Their architecture assumes SAT publishes a clean, structured, downloadable blacklist that you diff daily against your client's supplier RFCs. That's exactly what 69-B provides. It is exactly what 49 Bis does *not* provide — 49 Bis output is unstructured oficios published as individual DOF notices, in PDF, with RFCs embedded in legal prose. Retooling a list-differ to parse legal notices is not a config change; it's a different product.

**The clock is 3× tighter and the penalty is operational, not financial.** Under 69-B, receivers had a comparatively slow, well-understood path. Under 49 Bis the issuer's whole procedure ends in 24 business days, and the receiver's window is 30 natural days from publication — during which they must find every affected CFDI across potentially multiple fiscal years, compute the ISR and IVA impact, and file complementarias. The downside isn't a fine, it's CSD restriction: your invoicing stops.

**The buyer is already assembled.** Mexican SMEs don't do their own tax filing — the despacho contable does. One accounting firm holds 30–400 client RFCs and each client has hundreds of supplier RFCs. That firm is the single point where this risk concentrates, and it's the firm that gets blamed when a client's seal gets restricted. They already pay $230–500 MXN/mo for weaker monitoring.

The 10× is not "we check a list faster." It's: **the moment an RFC appears in any DOF 49 Bis notice, we already know which of your 200 clients paid them, in which fiscal years, for how many pesos of ISR deduction and IVA credit — and we hand you the draft complementaria worksheet, day one of thirty.** The incumbents can tell you a supplier is dirty. They cannot tell you your peso exposure or start your filing.

## 4. Target market

- **Primary customer:** Owner/partner of an independent despacho contable in Mexico with 30–400 client RFCs, 3–25 staff. Concentrated in CDMX, Monterrey, Guadalajara, Puebla, Querétaro. Secondary: in-house *contralor* at a 50–500 employee Mexican company with a large, churning supplier base (construction, logistics, staffing, manufacturing) — the sectors most exposed to invoice-mill suppliers.
- **Why they buy:** Because the failure mode is career-ending and silent. A supplier they cleared eighteen months ago gets published in a DOF oficio on a Tuesday. Nobody tells them. Thirty days later their client's CSD is restricted, the client can't invoice, and the client asks the accountant why they were paying them. The article documents this precisely: there is no automatic notification, and companies must periodically verify DOF and SAT portal themselves. Firms managing 200 clients cannot manually read DOF every day and cross-reference thousands of supplier RFCs.
- **Rough TAM reasoning:** Mexico has tens of thousands of registered accounting practices serving millions of active RFCs. This product does not need most of them. At 1,200 firms paying an average of ~$1,500 MXN/mo (roughly $80 USD), that's ~$1.15M USD ARR. The market is far larger than the ambition, which is the right shape for a bootstrap.
- **Why now for them:** 49 Bis is seven months old and the first publications are four weeks old. Right now, most despachos know 49 Bis exists as an issuer-side audit risk and have not internalized the receiver-side 30-day obligation. The first time a well-publicized CSD restriction hits a client for missing a 49 Bis complementaria, this becomes a category. Better to be selling before that, with the content that explains it.

## 5. Product sketch (MVP)

- **DOF sweep.** Reads every DOF edition daily, isolates SAT oficios under Article 49 Bis, and extracts the published RFCs out of legal prose into a clean structured list. Backfilled from the July 10, 2026 first publication forward.
- **Supplier match against real spend.** Connects once to each client RFC via SAT mass-download, pulls received CFDIs across the open fiscal years, and matches every published RFC against actual invoices paid — not a manual supplier list the firm has to maintain.
- **Peso exposure, not just a flag.** For each hit: total invoiced amount, ISR deducted, IVA credited, broken out by fiscal year and period. The accountant sees the size of the problem in one screen.
- **The 30-day countdown.** A live clock per incident, dated from DOF publication, showing days remaining to file. Escalating alerts by email and WhatsApp at day 1, 7, 15, 25.
- **Complementaria worksheet.** Generates the per-period reversal worksheet — which declarations to amend, which figures change — as a draft the accountant reviews and files. It does not file for them.
- **Materiality defence pack.** Where the client believes the operation was genuine, assembles the evidence bundle SAT expects: CFDI XML/PDF, bank payment proof, contracts, deliverables — flagging which of these are missing.
- **Also covers 69-B and 69.** Table stakes, bundled, so the firm can cancel their existing monitor rather than adding a tool.
- **Multi-client console.** All client RFCs in one panel with a firm-wide risk view for the partner.

## 6. AI angle — what's load-bearing

Remove the AI and the product does not exist. Three places it does real work:

**Extraction from unstructured legal notices.** This is the core. 49 Bis output is not a CSV — it's DOF oficios in legal Spanish where RFCs sit inside sentences, sometimes in tables, sometimes in scanned-quality PDFs, with inconsistent formatting across notices. Determining *which* oficios are 49 Bis (versus 69-B, versus the dozens of other SAT publications in any DOF edition), and pulling RFCs plus the operative dates and resolution status out of prose, is exactly the job LLMs became reliable at and regex never will be. This is the entire reason the incumbent list-pollers haven't covered 49 Bis: their input was always already structured.

**Materiality gap analysis.** Reading the client's contracts, delivery evidence and bank records against a specific flagged operation, and telling the accountant whether they have a defensible materiality case or should just reverse and file. That's a document-reasoning task across mixed formats.

**Triage.** With 200 clients and thousands of supplier RFCs, a firm needs the four incidents that matter ranked by peso exposure and days remaining, not 60 alerts.

The countdown timer and the DOF fetch are plumbing. The extraction is the product, and it's the part that's genuinely hard to do without modern models.

## 7. Localization angle

This is a Mexico-only product by construction and that's the point, not a limitation. The regulation is Mexican, the document corpus is the DOF, the language is legal Spanish, the integration is SAT's mass-download service, and the buyer is a Mexican despacho contable.

Specifics that matter:

- **Pricing to the local wallet.** $999–2,499 MXN/mo tiers work here where a $99 USD price point would read as expensive against Protector Fiscal at $230 MXN. Priced in pesos, IVA included, invoiced with a proper CFDI — a foreign vendor who can't issue a CFDI is unbuyable for an accounting firm.
- **Payment rails.** SPEI transfer and domestic card via Mexican PSPs. Annual prepay is normal and helps cash flow.
- **Distribution is vernacular.** Mexican tax Twitter/X, contador Facebook groups, IMCP and colegios de contadores, and the fiscal blog ecosystem (Fiscalia, El Contribuyente, IDC Online) that despachos read daily.
- **WhatsApp is the alert channel.** Email alone gets missed; a 30-day operational clock needs WhatsApp.

The flip side is honest: there is no international expansion path for this specific product. Brazil's reform and Mexico's are different regimes. The $5M ceiling is real. That's acceptable for a bootstrap and disqualifying for a VC — which is precisely why the niche is open.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client RFC count under management.
  - Solo/small despacho (up to 25 RFCs): **$999 MXN/mo** (~$54 USD)
  - Mid firm (26–100 RFCs): **$2,499 MXN/mo** (~$135 USD)
  - Large firm (101–400 RFCs): **$5,999 MXN/mo** (~$325 USD)
  - Direct-to-company (single RFC, in-house contralor): **$699 MXN/mo**
- **ACV:** Blended ~$2,200 MXN/mo = **~$26,400 MXN/yr (~$1,430 USD)**.
- **Math to $1M USD ARR:** ~700 paying firms at blended ACV. Against a base of tens of thousands of Mexican accounting practices, that's low-single-digit penetration of the addressable segment.
- **Math to $5M USD ARR:** Needs ~3,500 firms — a stretch on the despacho segment alone. Realistically it requires the direct-to-company tier working (contralores at mid-size firms buying their own seat) plus an upsell into full blacklist and audit-readiness monitoring. I'd underwrite this as a **$1–2M ARR business** and treat $5M as upside, not plan.
- **Expansion path:** Per-RFC overage as firms grow; a per-incident "defence pack" fee for materiality bundles; annual prepay; eventually a white-label tier so larger firms resell monitoring to their own clients.

Gross margin is strong — DOF ingestion is one shared pipeline across all customers, so extraction cost is amortized across the whole base rather than per-tenant. Per-customer cost is CFDI storage and matching.

## 9. Go-to-market wedge — first 100 customers

- **Be the free 49 Bis registry, then charge for the matching.** Publish a free, public, searchable index of every RFC ever published under 49 Bis, updated the same day as DOF. This does not exist today — SAT itself has no consolidated file. Every accountant googling "49 Bis lista" lands there. Free tier: check RFCs manually. Paid tier: we watch your 200 clients' actual CFDIs automatically. The free registry is both the lead magnet and the credibility proof that our extraction works.
- **Direct outreach off the first publications.** Each DOF 49 Bis notice names specific RFCs. Their customers are identifiable through public directories and the sectors they serve. Also: the ~7,300 taxpayers whose CSDs were suspended in 2026 have accountants, and those accountants are now maximally alert. Targeted outreach to despachos in the exposed verticals — construction, staffing, logistics — with a named-supplier hook beats generic cold email.
- **Colegios de contadores and the fiscal blog circuit.** Mexican accounting has dense professional infrastructure — IMCP, state colegios, continuing-education courses. Offer a free 45-minute session: "El reloj de 30 días del 49 Bis: qué debe hacer tu despacho." Accountants attend CPE compulsively. One session with 80 attendees converts better than months of ads.
- **Partner with the fiscal publishers.** Fiscalia, El Contribuyente, IDC, Facturando and the despacho blogs are already writing about 49 Bis and hunting for the practical "so what do I do" angle. Give them the data, get the byline and the link.
- **Wedge on the incumbents' blind spot, explicitly.** Comparison content: "Tu monitor de listas negras vigila el 69-B. El 49 Bis se publica distinto." Target the paying customers of Tesio, Protector Fiscal and Alerta69b — they've already proven willingness to pay for exactly this category of anxiety.

Realistic math: free registry drives inbound; 40 firms from colegio sessions and blog partnerships in the first four months; 60 from direct outreach and comparison content. 100 paying firms by month six is aggressive but not fantasy given a $999 MXN entry price and a buyer who already pays for the weaker version.

## 10. Build complexity — justification

**Low**, edging Medium. The DOF is publicly accessible and there's prior art for programmatic access (the open-source `imco/dof-api`). SAT CFDI mass-download is a commodity — Facturapi, Fiscalapi and SatGo all sell it as an API, so no reverse-engineering. Extraction from legal PDFs is an off-the-shelf model call with careful prompting and a human-in-the-loop review queue for low-confidence pulls. The rest is a standard multi-tenant web app: matching, a countdown, alerts, worksheets.

The genuinely non-trivial parts are (a) extraction precision — a false negative means a customer's seal gets restricted, so this needs a manual review queue from day one, not month six, and (b) handling CFDI volume per client without the matching job getting slow. Neither is research.

A technical founder with a fiscal advisor ships v1 in **8–10 weeks**. The free 49 Bis registry — the whole GTM wedge — is shippable in about **two weeks** on its own, which is the right first move.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads public DOF publications and accesses client CFDIs with the client's own authorization via SAT's official download service. Generates draft worksheets; the accountant files. No unlicensed tax practice. |
| Ethical — no harm / dark patterns | ✅ | Helps businesses meet a legal obligation on time. Deadline urgency is genuine and set by SAT, not manufactured. Care needed not to over-market fear. |
| Market exists (evidence above) | ✅ | 7+ paying competitors in adjacent 69-B monitoring at $230–500 MXN/mo; 12,000 SME audits planned; 7,300 CSDs already suspended. |
| 1–5 person team can build this | ✅ | Technical founder + fiscal advisor, 8–10 weeks to v1. |
| Launchable with <$50K / ₹40L | ✅ | Well under $15K: inference, CFDI API fees, hosting, and a fiscal advisor's time. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | The penalty is CSD restriction — you stop being able to invoice. That's operational death, not a fine. Discovery is silent with no notification mechanism, and the clock is 30 days. Genuinely hair-on-fire *when it fires*. Held under 18 because it doesn't fire for most firms every month — yet. |
| Demand evidence | 15 | **11**/15 | Strong indirect evidence: 7+ paying competitors in adjacent 69-B monitoring proves the category and the price point; SAT's own enforcement numbers prove the risk. Weaker on direct evidence — with only three RFCs published under 49 Bis so far, I could not source verbatim accountant complaints about *this specific* obligation. That's the honest gap and it's why this is a GO, not a STRONG GO. |
| Build feasibility | 15 | **13**/15 | Public DOF data, commodity CFDI APIs, off-the-shelf extraction. 8–10 weeks. Extraction precision needs a review queue. |
| Distribution clarity | 15 | **12**/15 | Free registry as lead magnet is a strong, cheap, defensible wedge — SAT has no consolidated file. Colegios and fiscal blogs are named, reachable channels. Docked because converting the free registry to paid is unproven. |
| Revenue mechanics | 15 | **11**/15 | Pricing benchmarked directly against Protector Fiscal ($230 MXN) and Tesio ($499 MXN) — but I'm pricing 2–10× above them, which requires the peso-exposure and worksheet output to justify the premium. $1M ARR path is credible; $5M requires the direct-to-company tier to work. |
| Time to first revenue | 10 | **8**/10 | Registry live in ~2 weeks, paid product in 8–10, first paying firms plausible inside 12–14 weeks. Accountants buy fast when a deadline is concrete. |
| Defensibility | 10 | **4**/10 | The weakest axis, and I won't dress it up. Any of seven incumbents can add 49 Bis extraction once it matters. The real moat is a 6–12 month head start, the accumulated historical 49 Bis index, SEO ownership of the term, and workflow lock-in once complementarias run through the tool. Execution moat, not a structural one. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs someone who can build reliable document extraction, paired with a Mexican fiscal professional. The domain half is not optional — mis-stating a complementaria obligation damages accountants' trust permanently, and only a contador can validate the worksheet output.

### Key assumptions to validate (3–5)

1. **Assumption:** SAT publishes 49 Bis notices at meaningful volume — dozens to hundreds of RFCs per quarter, not three per year. **How to test:** Track every DOF edition for 8 weeks from the July 10 start and count RFCs. This is the make-or-break number and it's cheap to get. If volume stays near zero through Q4 2026, the product has no incidents to catch.
2. **Assumption:** Despachos will pay 2–4× the price of existing 69-B monitors for the receiver-side workflow. **How to test:** 30 structured calls with firm partners; show the peso-exposure screen and the worksheet; ask for a signed LOI at $2,499 MXN, not verbal interest.
3. **Assumption:** RFC extraction from DOF oficios hits >99% recall. **How to test:** Hand-label every 49 Bis notice published to date, run extraction, measure. A missed RFC is a customer's restricted seal.
4. **Assumption:** Firms will authorize CFDI download access for their clients. **How to test:** Ask in the same 30 calls. If firms won't connect client data, the product degrades to a manual supplier-list checker — which is the commoditized incumbent product.

### Risk flags

1. **Market timing — the central risk.** Only three RFCs published as of late July 2026. This is a bet that SAT scales 49 Bis usage. The Plan Maestro's 12,000 SME audits and 7,300 suspensions say they intend to, but intent isn't volume. Too early is a real failure mode here, and the mitigation is that the free registry costs almost nothing to run while you wait.
2. **Competitive response.** Seven incumbents with existing distribution and paying customers. Tesio already does AI-driven CFDI analysis. If 49 Bis volume spikes, they will move. The head start needs to convert into workflow lock-in fast.
3. **Regulatory dependency.** The entire product exists because of one article of the CFF. Amendment, judicial suspension, or SAT publishing a clean consolidated file all compress the value — the last one is the most likely and would kill the extraction moat while leaving the matching workflow intact.
4. **Platform dependency.** Relies on DOF availability and SAT's mass-download service. Both are stable, but format changes to DOF publications would require extraction rework.
5. **Liability.** Positioning must be assistive. If a customer misses a deadline the tool didn't catch, the reputational damage exceeds the contractual exposure. Needs explicit ToS, a manual review queue, and conservative marketing.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder (document extraction, multi-tenant SaaS)
                        paired with a Mexican contador or fiscal lawyer as
                        co-founder or first hire. Spanish fluency mandatory.
Time to revenue:        12–14 weeks (free registry live in ~2)
Capital to launch:      $10–15K USD (₹9–13L) — inference, CFDI API, hosting,
                        fiscal advisor
Top 3 assumptions to validate first:
  1. 49 Bis publication volume scales — track every DOF edition for 8 weeks
     and count RFCs. Cheapest, most decisive test. Run it before writing
     any product code.
  2. Despachos pay $2,499 MXN/mo for receiver-side workflow — 30 partner
     calls, demo the exposure screen, ask for signed LOIs not opinions.
  3. RFC extraction achieves >99% recall — hand-label all published 49 Bis
     notices and measure against the pipeline.
Kill criteria:
  - Abandon if fewer than 50 RFCs are published under 49 Bis between
    July 2026 and December 2026 — the incident rate can't support a
    subscription.
  - Abandon if fewer than 5 of 30 despachos will sign an LOI at
    $2,499 MXN/mo after seeing a working demo.
  - Abandon if SAT publishes a clean consolidated 49 Bis file AND an
    incumbent ships receiver-side matching before v1 — the wedge closes
    from both ends.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull every DOF edition since July 10, 2026. Manually find and hand-label all 49 Bis oficios and every RFC in them. Produces two things: ground truth for extraction testing, and the actual publication run-rate. If the run-rate is near zero and flat, stop here — that's a cheap kill.
- **Day 3:** Build the free public registry off that hand-labelled data. Two days of work, no AI needed yet. Ship it, post it in three Mexican contador Facebook groups and on fiscal Twitter/X. Measure traffic and signups.
- **Day 4–5:** Twenty calls with despacho partners sourced from colegio directories and the registry's own signups. Script: "When was the last time you checked DOF for 49 Bis publications? What would happen if a client's CSD got restricted?" Then show a mocked peso-exposure screen and ask for a $2,499 MXN/mo LOI.
- **Day 5 — decision:** **Go if** ≥50 RFCs published in the tracked period *and* ≥5 of 20 firms sign an LOI. **No-go if** publication volume is flat near zero, or fewer than 3 firms will commit on paper. Verbal enthusiasm counts as zero — this market is polite.

The falsifiable core is the publication count. Everything else is a business question; that one is a fact, and it's obtainable in two days.
