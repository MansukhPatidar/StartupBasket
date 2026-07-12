---
title: "ProbaMX — materiality brief for Mexican accounting firms"
slug: mexico-cfdi-materiality-brief
date: 2026-07-12
category: Compliance / Mexico — Accounting Firms (despachos contables) and their SMB portfolios (CFF Art. 49-Bis materiality defence)
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Assembles the proof that every invoice was a real transaction, before SAT gives your client five days to find it."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Spanish-first, Accountant-channel]
axes:
  problem: 18
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 6
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# ProbaMX — materiality brief for Mexican accounting firms

## 1. One-liner

ProbaMX assembles the proof that every invoice was a real transaction, before SAT gives your client five days to find it.

## 2. Trend signal — why now?

Mexico's 2026 tax reform rewrote what an invoice *is*. Until December 2025, a CFDI (Mexico's mandatory e-invoice) was a formal object: right fields, right format, right stamp, done. As of January 1, 2026, a new Fracción IX of Article 29-A of the Fiscal Code requires that a CFDI "reflect real and truthful transactions." An invoice with no genuine underlying operation behind it is now **presumed false** by default.

That would be a lawyer's footnote if the reform hadn't also given SAT a fast-track weapon to enforce it. New **Article 49-Bis** creates an expedited domiciliary-visit procedure for suspected false CFDIs, and the timings are savage:

- SAT can **suspend the taxpayer's ability to issue invoices immediately**, on the visit order — before any finding.
- The taxpayer gets **5 business days** to submit evidence that the operations were real.
- SAT resolves in **15 business days**; the whole procedure closes in **24 business days**.
- If the taxpayer fails to rebut the presumption, their **name and RFC are published** on the SAT website and in the official gazette.

Then the contagion clause. Once a supplier is published as a false-invoice issuer (EFOS), **its customers (EDOS) get 30 days to correct their own filings** — and if they don't, *their* digital seal certificate (CSD) gets restricted too. Losing your CSD means you cannot legally invoice anyone. For an SMB, that is not a fine. That is the lights going out.

And SAT has told everyone exactly what it plans to do with this. The **Plan Maestro 2026**, presented January 26, 2026, sets a collection target of **5.8 trillion pesos**, and names "combating the buying and selling of false invoices" as one of its three strategic axes. Audits are explicitly no longer random — they are programmed by risk models and data analytics, against 12 published objective criteria, applied uniformly nationwide.

So: a new legal standard, a 5-day clock, an instant kill-switch on the ability to invoice, a contagion rule that punishes you for your *vendor's* sins, and a tax authority that has publicly committed to hunting this specific thing at scale. That's the setup.

Here's the gap. Five business days is not enough time to *reconstruct* proof of a transaction that happened eight months ago. You cannot go find the delivery photo, the signed contract, the WhatsApp thread with the vendor, and the bank transfer that ties to that specific CFDI, for forty invoices, in a week — while your invoicing is already switched off. The evidence file (the *expediente de materialidad*) has to already exist **before** SAT knocks. Almost nobody's does.

Provenance:
  - Signal 1 (demand): Mexican accounting-profession press is openly alarmed — "en 2026, si el SAT toca a la puerta de un cliente, tienes solo 5 días hábiles para probar que las operaciones llevadas a cabo realmente existieron"; firms are being told materiality is now portfolio risk management, not monthly compliance — https://contadormx.com/reformas-cff-2026/ and https://www.perezgongora.com/blog/fiscalizacion-2026-materialidad-de-operaciones-y-el-ataque-al-csd — July 2026
  - Signal 2 (economic): SAT Plan Maestro 2026 — 5.8 trillion peso collection goal, false-invoice enforcement named a strategic axis, audits programmed by data-analytics risk models against 12 objective criteria, immediate seal suspension for suspected EFOS — https://www.infobae.com/mexico/2026/01/26/sat-presenta-plan-maestro-2026-para-mejorar-atencion-y-combatir-facturas-falsas/ — January 26, 2026
  - Signal 3 (feasibility + regulatory): CFF reform effective Jan 1 2026 — Art. 29-A Frac. IX real-transaction requirement, Art. 49-Bis expedited procedure (5 business days to produce evidence, 15 to resolve, 24 total), publication of RFC, 30-day correction window for receiving taxpayers; SAT explicitly accepts "technological tools such as photos, videos, or audio recordings" as evidence — https://kpmg.com/us/en/taxnewsflash/news/2025/11/mexico-updates-electronic-invoicing-cfdi-2026-tax-reform.html — November 2025
  Category: Regulatory arbitrage

## 3. The opportunity

Every Mexican business already has software that *files* CFDIs. Contpaqi, Alegra, Siigo, Contadigital, a hundred despacho-facing tools. That entire category is built around the old world, where compliance meant the XML was well-formed and submitted on time.

None of them answer the two questions that now decide whether a business lives:

1. **Which of my invoices would fail a materiality challenge?** A firm with 4,000 CFDIs a year has no idea which forty are the dangerous ones. Materiality risk isn't uniform — a recurring rent payment with a lease and a wire is bulletproof; a one-off MXN 380,000 "consultoría estratégica" with no contract, no deliverable, and a round-number transfer to a vendor incorporated four months ago is a flare in the sky. Nobody is scoring this.

2. **Which of my vendors is about to blow up and take me with them?** EDOS contagion means my exposure is a function of *my suppliers'* fiscal health. SAT publishes EFOS lists. Vendor RFCs sit in my own CFDIs. The join is trivial and nobody in the despacho's stack is doing it continuously.

The closest thing that exists is **Audita CFDI** (ContadorMx), which lets you manually attach PDFs, contracts and photos to a CFDI and download a backup. That's a filing cabinet. It's genuinely useful and it proves people will pay for the category — but it requires a human to already know *which* invoices matter, and to do the assembly by hand. It's storage, not judgment.

The 10× is this: **stop making the accountant find the risky invoices and build the file. Rank the portfolio by materiality risk, then go assemble the missing evidence automatically.** The evidence is not hidden — it's scattered across the client's email, WhatsApp, bank statements, and Drive folders. Pulling it together and matching it to a CFDI is exactly the kind of tedious cross-source correlation that got cheap in the last 18 months and was impossible to sell before there was a 5-day clock forcing the issue.

## 4. Target market

- **Primary customer:** The owner or fiscal partner of a Mexican **despacho contable** — an independent accounting firm with 3–40 staff carrying a portfolio of 40–400 SMB clients (personas morales, mostly MXN 5M–200M revenue). Concentrated in CDMX, Monterrey, Guadalajara, Querétaro, Puebla. Secondary: the in-house *contralor* at a 50–500 employee company that has enough vendors to have real EDOS exposure.

- **Why they buy:** Because the liability has quietly moved onto their desk. The profession's own commentary is explicit that the accountant's job is shifting "hacia la gestión preventiva del riesgo de cartera" — portfolio risk management — and that the difference between a firm that anticipates and one that reacts "se mide en multas evitadas y calidad del expediente de materialidad." A despacho with 200 clients now has 200 ways to get blamed. When SAT suspends a client's CSD and the client asks "why didn't you warn me," the accountant has no answer and a very awkward retention conversation. They will pay to never have that conversation.

- **Rough TAM reasoning:** Mexico has a large, fragmented accounting-firm sector serving millions of registered taxpayers; I don't have a defensible count of despachos and I'm not going to invent one. What I can anchor on: despacho-facing cloud accounting software already sells at **MXN 400–2,000/month** for unlimited-portfolio plans, and desktop licences run MXN 15,000+ with 20–30% annual support. So the channel exists, is already monetized, and the wallet is proven. I only need a low-thousands number of firms to hit the target ARR, which is a small slice of any plausible denominator.

- **Why now for them:** The reform is live *this fiscal year*. The first wave of 49-Bis visits is landing against FY2026 operations, which means the evidence that needs to exist is being generated right now, and every month a client goes without a materiality file is a month of unreconstructable exposure. This is a "start today or the gap is permanent" problem, which is the best kind of urgency there is.

## 5. Product sketch (MVP)

- **Portfolio risk board.** Ingest a client's CFDIs (bulk XML download from SAT is a solved, commoditized step) and rank every invoice by materiality risk — flagging the round-number one-offs, the vendors with no operational footprint, the service invoices with vague descriptions, the payments that don't tie cleanly to a bank movement.
- **EFOS/EDOS contagion watch.** Continuously match every vendor RFC in the portfolio against SAT's published EFOS/definitivos lists. Alert the moment a client's supplier appears — with the 30-day correction clock started and counting.
- **Evidence hunter.** Connect the client's email, Drive and WhatsApp Business export; automatically find the contract, quote, delivery note, photo, or message thread that corresponds to a flagged CFDI, and attach it. The accountant reviews and approves rather than searches.
- **Gap list, per invoice.** For each high-risk CFDI, state plainly what's missing against the standard *expediente* checklist — contract, bancarized payment proof, delivery/performance evidence, vendor-capacity evidence, REPSE certificate for specialized services, coherent chronology — so the client can go get it *while it still exists*.
- **The 5-day brief.** One button: generate the defence file for a given CFDI or vendor — chronologically ordered, indexed, with the justification-of-necessity narrative drafted and every exhibit attached, formatted to hand to SAT.
- **Client-facing nag.** Automated Spanish WhatsApp/email to the *client* (not the accountant) chasing the missing contract or photo, so the despacho isn't the one doing collections on paperwork.
- **Readiness score per client**, so the partner can see across the whole portfolio which clients are indefensible today.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses back into Audita CFDI — a folder with an upload button. The AI is doing three things a human demonstrably will not do at portfolio scale:

**Risk classification.** Reading the free-text *descripción* on a CFDI and judging whether it describes a real, specific operation or is the vague boilerplate ("servicios de asesoría") that materiality challenges eat alive — then combining that with amount patterns, vendor age, payment structure and chronology into a rank. No despacho is manually reviewing 4,000 line items.

**Cross-source evidence matching.** This is the hard part and the real moat. Given a CFDI for MXN 380,000 to Vendor X dated March 14, go find — across a client's Gmail, Drive and WhatsApp — the quote, the signed contract, the delivery confirmation and the wire receipt that belong to it, and know they belong to it. That's fuzzy, multi-modal, multilingual entity resolution across unstructured mess. It was not commercially viable to build this two years ago; it is now, and SAT has helpfully confirmed it will accept "photos, videos, or audio recordings" as evidence, which is precisely the unstructured material only a model can triage.

**Narrative drafting.** The *expediente* isn't a pile of files, it's an argument: why this operation was necessary, what was delivered, how the chronology hangs together. Drafting that argument from the assembled exhibits, in the register a SAT auditor expects, is generative work.

If you strip the AI out, you're asking an already-overloaded accountant to do all three by hand for every client. They won't. That's precisely why almost no expedientes exist today despite everyone knowing they should.

## 7. Localization angle

This is a Mexico-only product and that's the entire point — the moat is the regulation. The specifics that make it valuable (CFF Art. 29-A Frac. IX, Art. 49-Bis, CSD suspension under 17-H/17-H Bis, the EFOS/EDOS publication regime, REPSE for specialized services, SAT's bulk CFDI download) do not transfer. Spanish-first, obviously — the product's output is a legal-register document read by a Mexican tax auditor, not a translated UI.

Distribution is local too: the despacho channel, the colegios de contadores públicos, and the fiscal-content ecosystem (ContadorMx, Facturando, El Conta) where Mexican accountants actually live. Pricing must work in pesos against a market where despacho software is MXN 400–2,000/month — a $99/mo US-style price point is a non-starter for a small firm and a bargain for a large one, so the tiering has to be portfolio-sized.

The natural sibling markets later are the other Latin American countries running mandatory e-invoicing with substance-over-form doctrines — Brazil, Chile, Colombia, Peru all have analogous machinery — but each is a separate build, not a config flag. Win Mexico first.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Sold to the despacho, priced by portfolio. **MXN 1,500/mo** (~$80) for up to 25 clients; **MXN 4,500/mo** (~$240) for up to 100; **MXN 9,000/mo** (~$480) for up to 300. Direct-to-SMB tier at **MXN 900/mo** for the in-house contralor. The anchor is deliberately above generic despacho software (MXN 400–2,000) because this is priced against a CSD suspension, not against a bookkeeping tool.

- **ACV:** Blended ~MXN 54,000/yr (~$2,900) assuming the mid tier dominates.

- **Rough math to $1M ARR:** ~350 despachos on the mid tier (MXN 4,500 × 12 ≈ MXN 54K ≈ $2,900) → ~$1.0M. Three hundred and fifty firms out of a fragmented national market of many thousands is a believable two-year number, and each one drags in dozens of client sub-accounts.

- **Rough math to $5M ARR:** Needs ~1,200–1,500 firms weighted toward the larger tiers, plus the direct-SMB tier contributing meaningfully, plus the obvious expansion: **per-brief fees when SAT actually knocks.** A firm that pays MXN 4,500/mo will pay MXN 15,000 for an emergency 5-day brief without blinking, because the alternative is a client losing its CSD. That event-driven revenue is high-margin and arrives exactly when willingness-to-pay peaks.

- **Expansion path:** Seats → portfolio size → per-incident briefs → the vendor-screening product (pre-transaction: "is this new supplier an EFOS risk before I pay them?"), which is a natural upsell to the client's own procurement and prices separately.

## 9. Go-to-market wedge — first 100 customers

- **Ride the fear, with a free portfolio scan.** The single best cold open in this market: "Send us your client's bulk CFDI download; we'll tell you free which of their vendors are already on SAT's EFOS list and which twenty invoices would fail a 49-Bis challenge." That report is genuinely alarming, costs nothing to produce, and is impossible to un-see. It's a demo that does the selling.
- **The colegios and the fiscal-content ecosystem.** Mexican accountants concentrate in a handful of channels — the Colegio de Contadores Públicos de México, AMCP, and the fiscal-education publishers (ContadorMx, Facturando, Startupero, Stratego) that are *already* publishing panic pieces about Art. 49-Bis. These outlets need 2026-reform content and sponsors. Co-produce the webinar "Cómo armar un expediente de materialidad en 2026," land in front of a few hundred despacho partners per session, convert on the free scan.
- **Sell the EFOS list as the wedge, not the product.** SAT publishes EFOS lists. Build a free public tool that lets any accountant paste an RFC and check a vendor. Zero friction, high shareability inside despacho WhatsApp groups (where this profession actually talks), and it captures exactly the person who is worried enough to check. Upsell from there.
- **Direct outreach to the visibly exposed.** When SAT publishes a new definitive EFOS list, the *customers* of those firms are, by definition, people with a 30-day clock running and no file. Their RFCs surface in public procurement and directory data. That's a named, timed, high-intent list to contact the week it drops.
- **Partner with fiscal lawyers.** The despachos de abogados fiscalistas who defend 49-Bis cases get called *after* the client is already suspended. They'd rather sell prevention than litigate a lost cause, and they have the relationships. Revenue-share the referral.

## 10. Build complexity — justification

**Medium.** The plumbing is off-the-shelf: bulk CFDI download from SAT is a commoditized, well-documented integration that half the Mexican accounting-software industry already does; EFOS list ingestion is public data; Gmail/Drive/WhatsApp-export connectors are standard. The genuinely custom work is the risk-scoring model and the cross-source evidence-matching pipeline, plus the brief generator — and matching a wire transfer, a WhatsApp photo and a contract to a specific CFDI with enough precision that an accountant trusts it is real engineering, not a prompt.

Call it **4–5 months to a credible v1 for a pair**, with a domain expert (a practicing fiscalista) in the loop from week one — non-negotiable, because a materiality file that a real SAT auditor would reject is worse than useless. It sits at the upper end of Medium and I'd rather say that honestly than pretend it's an 8-week build.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping taxpayers assemble genuine evidence of genuine transactions is squarely legitimate — this is compliance support, not evasion. The hard ethical line is in §13. |
| Ethical — no harm / dark patterns | ✅ | The product must help prove real operations were real. It must never help fabricate support for fake ones. That constraint is a product requirement, not a footnote. |
| Market exists (evidence above) | ✅ | Live regulation with a 5-day clock, an existing paid competitor (Audita CFDI) proving the category, and a proven despacho software wallet at MXN 400–2,000/mo. |
| 1–5 person team can build this | ✅ | Two engineers plus a fiscalista advisor. |
| Launchable with <$50K / ₹40L | ✅ | Cloud + model inference + a domain advisor's retainer. Well under. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **18**/20 | About as hair-on-fire as it gets. The downside isn't a fine, it's CSD suspension — losing the legal ability to invoice, i.e. revenue stops. Plus EDOS contagion means you can be destroyed by a vendor's misconduct. 5 business days to respond. Docked 2 only because the *acute* pain is episodic (it bites when SAT knocks), so some buyers will procrastinate until the first horror story lands in their network. |
| Demand evidence | 15 | **12**/15 | Strong: live regulation with published enforcement targets, a profession loudly alarmed in its own trade press, an existing paid competitor validating the category, and a proven software wallet. Held to 12 because I could not source *verbatim customer quotes* from accountants who have actually been through a 49-Bis visit — the reform is too new. That's a real gap, not a rounding error. |
| Build feasibility | 15 | **11**/15 | Ingestion and public-list matching are commodity. Cross-source evidence matching is genuinely hard and accuracy-critical. 4–5 months for a pair, with mandatory domain expertise. |
| Distribution clarity | 15 | **12**/15 | Named channels (colegios, fiscal publishers, despacho WhatsApp groups), a free-scan wedge that sells itself, and a timed trigger list every time SAT publishes EFOS names. Not a 2-week sprint to 100 — accountants are conservative buyers and August/annual-filing season eats their calendar — so not a 13+. |
| Revenue mechanics | 15 | **12**/15 | Pricing anchored to an existing, observed software wallet and justified by catastrophic downside. Path to $1M needs only ~350 firms. Docked because peso pricing caps ACV, and the juicy per-incident brief revenue is an assumption until someone pays it. |
| Time to first revenue | 10 | **6**/10 | Realistically 3–4 months: the build is 4–5 months to full v1, but the free EFOS-scan tool and a manual-concierge brief can be sold well before that. Accountants don't buy fast, and there's no pre-sold pipeline. This is the weakest axis and I'm not going to flatter it. |
| Defensibility | 10 | **5**/10 | Execution moat plus accumulating regulatory know-how. The evidence-matching quality compounds and the despacho relationship is sticky (they won't re-platform their portfolio's risk file lightly). But Contpaqi or Alegra could bolt this on, and Audita CFDI already has a foothold. Regulatory depth is the defence, not the tech. |
| **Total** | **100** | **76**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This one does not work without a Mexican fiscalista as a founder or a very tightly bound first hire. The output is a legal-defence document; getting it subtly wrong is worse than not shipping. And the buyer is a conservative professional who buys on trust and peer reference, not on a self-serve trial.

### Key assumptions to validate (3–5)

1. **Assumption:** Despachos will pay MXN 4,500/mo for portfolio materiality risk, rather than treating it as a service they should bill their clients for separately (or absorb). **How to test:** Run the free scan on 30 real portfolios, then put a price on the follow-up. Measure how many convert versus how many say "just send me the report."
2. **Assumption:** The evidence hunter can actually find the right documents at usable precision from a real client's messy Gmail/Drive/WhatsApp. **How to test:** Take 5 consenting clients, pick 20 flagged CFDIs each, and measure what fraction of the required expediente items the system retrieves correctly versus a human doing it manually. Below ~60% recall the product is a toy.
3. **Assumption:** SAT's 49-Bis enforcement actually materializes at volume against ordinary SMBs, not just against obvious shell-company EFOS. **How to test:** Track published EFOS/definitivo lists and 49-Bis case reporting monthly through Q4 2026. If the procedure is only ever used against blatant shells, the addressable fear evaporates.
4. **Assumption:** Accountants, not SMBs, are the right buyer. **How to test:** Run the same pitch to 20 despachos and 20 in-house contralores; compare close rate and stated urgency.

### Risk flags

1. **Regulatory risk (inverted, and it cuts both ways).** The whole product is a bet on one statute. The Miscelánea Fiscal 2026 and subsequent resolutions could soften the 5-day window, carve out small taxpayers, or clarify materiality so narrowly that the panic subsides. Equally, SAT could under-enforce. Either kills the urgency. This is the single biggest risk and it is not controllable.
2. **Ethical / product-integrity risk.** A tool that assembles "evidence that an operation was real" is one bad product decision away from a tool that helps manufacture cover for operations that weren't. That is fraud, it's now criminally sanctionable under the reform, and it would end the company. The product must be built to surface *gaps* honestly — it can never generate an exhibit that doesn't correspond to a real artifact. This constrains the roadmap and I'd rather flag it loudly than discover it in a deposition.
3. **Incumbent bolt-on risk.** Contpaqi, Alegra, Siigo and ContadorMx already own the despacho's daily workflow. Any of them can ship a materiality module. The defence is speed and depth — being visibly the *specialist* while they treat it as a checkbox — but a well-executed Contpaqi feature would hurt badly.
4. **Data-access fragility.** The evidence hunter depends on clients granting access to email, Drive and WhatsApp. Accountants may balk at the liability of holding a client's entire correspondence, and clients may refuse. If access rates are low, the product degrades to a manual uploader — i.e. to Audita CFDI, at a higher price.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Mexican fiscalista or ex-Big-4 tax tech, paired with an engineer who
                        can do multi-source document matching. Sales-led, not product-led.
Time to revenue:        3–4 months (concierge briefs and the free-scan funnel before full v1)
Capital to launch:      ~$25–35K (2 people, ~5 months, plus a fiscalista retainer)
Top 3 assumptions to validate first:
  1. Despachos pay for portfolio materiality risk rather than absorbing it — price the
     follow-up after 30 free portfolio scans and measure conversion.
  2. Evidence retrieval works on real, messy client data — measure recall on 100 flagged
     CFDIs across 5 consenting clients against a manual baseline. Below ~60% and it's a toy.
  3. 49-Bis gets enforced against ordinary SMBs, not just blatant shells — track published
     EFOS lists and case reporting monthly through Q4 2026.
Kill criteria:
  - Abandon if fewer than 5 of 30 free-scan despachos will pay anything for the follow-up.
  - Abandon if the Miscelánea Fiscal or a subsequent resolution materially softens the
    5-day window or carves out SMBs from 49-Bis.
  - Abandon if evidence-matching recall on real client data stays below 60% after two
    months of iteration — at that point you are selling a folder, and Audita CFDI is cheaper.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the free EFOS/EDOS vendor-exposure scanner. It's public data and a join — a weekend's work. Take a real anonymized CFDI set and confirm the alarming output is genuinely alarming (i.e. that real portfolios *do* contain vendors on the published lists).
- **Day 3–4:** Get it in front of 30 despacho partners via the colegios, the fiscal-content publishers, and accountant WhatsApp groups. Offer the free scan. Then — critically — ask for money for the next step: "MXN 4,500/mo to keep watching, rank your risky invoices, and build the files." Take a card, or take a no.
- **Day 5:** Decide.

**Falsifiable outcome:** Of 30 despachos who receive a free portfolio scan, **at least 5 must give a payment commitment** (card, signed LOI, or deposit) for the paid tier at MXN 4,500/mo. Enthusiasm, "muy interesante," and requests for more information all count as zero. Below 5 of 30, the fear is real but it isn't a budget line yet — and I go find out whether the SMB contralor is the buyer instead, or I drop it.
