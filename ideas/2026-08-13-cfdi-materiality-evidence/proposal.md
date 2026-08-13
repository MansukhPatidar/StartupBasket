---
title: "MateriaLedger — supplier evidence ledger for MX despachos"
slug: cfdi-materiality-evidence
date: 2026-08-13
category: Compliance / Mexico — Small and Mid-Size Accounting Firms (30–400 Client RFCs) Whose Clients Deducted CFDIs From Suppliers the SAT Can Now Declare False in 24 Working Days
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Scores every supplier a Mexican client deducted, then builds the materiality file before the SAT publishes the list."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [Multilingual, AI-agent, Compliance-driven, SMB, Spanish-first, Tax]
axes:
  problem: 17
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 5
founderFit: [domain-expertise-required, sales-heavy]
featured: false
---

# MateriaLedger

## 1. One-liner

Scores every supplier a Mexican client deducted, then builds the materiality file before the SAT publishes the list.

## 2. Trend signal — why now?

Mexico's 2026 fiscal reform changed the physics of an invoice. Three things happened inside twelve months, and the third one is only five weeks old.

**First, the law redefined what a CFDI is.** Article 29-A, fracción IX of the CFF now requires that a CFDI "ampare operaciones existentes, verdaderas o actos jurídicos reales." A receipt that doesn't represent a real act is *false* — not merely disallowed, false. Article 113 Bis attaches 2 to 9 years of prison to giving fiscal effect to one, with prisión preventiva oficiosa. That last clause is the part accountants actually talk about: it means custody before trial.

**Second, the SAT got a fast weapon.** Article 49 Bis creates an abbreviated audit — an express home visit of up to 24 working days against the suspected issuer, with billing suspended from the moment it starts, 5 days for the supplier to produce evidence and 15 to resolve. Compare that to the 69-B EFOS process everyone built their habits around, which grinds for months and gives a presunto stage as an early warning. 49 Bis has no comfortable presunto runway. The supplier goes in, and roughly a month later a list comes out.

**Third — and this is the signal that makes it urgent rather than theoretical — the first lists actually published.** On 10 July 2026 the SAT published the first three Article 49 Bis lists in the DOF. Three RFCs. Everyone in the Mexican tax world read that as a range-finding shot. From publication, every taxpayer who deducted or credited those CFDIs has **30 calendar days** to file declaraciones complementarias. Miss it and the SAT can restrict your Certificado de Sello Digital — which means you stop invoicing, which means you stop collecting, which for a working business is closer to a cardiac event than a fine.

Meanwhile RMF 2026 rule 2.9.19 spelled out what an evidence file has to contain: economic substance, verifiable operating capacity of the supplier (IMSS-registered staff, locatable domicile, congruent activity), and evidence of delivery — entregables, reports, photographs, bitácoras, emails with metadata, purchase orders, minutes. Infobae ran it plainly in June: *"La factura ya no basta."* The invoice is no longer enough.

So the asymmetry is this: the SAT can now destroy a deduction in about a month, and the defense — a materiality file — takes weeks to assemble and must have been built *before* the operation went stale. Nobody builds files for suppliers who haven't been accused yet. That's the gap.

Provenance:
  - Signal 1 (demand): SAT published the first three Article 49 Bis lists in the DOF on 10 July 2026; recipients of those CFDIs have 30 calendar days to file complementarias or face CSD restriction — https://www.efos.mx/2026/07/10/hoy-se-enlistaron-a-3-contirbuyentes-en-las-listas-del-49-bis-del-cff/ and https://www.abolawlex.com/post/articulo-49-bis-cff-cfdi-falsos-sat-2026 — 10–21 July 2026
  - Signal 2 (feasibility): RMF 2026 rule 2.9.19 enumerates the required materiality evidence (substancia económica, capacidad operativa del proveedor, evidencia de prestación); CFDI XML is fully structured and already sits in every despacho's hands, so scoring and file assembly is a document-reading problem, not a research problem — https://tesio.com.mx/blog/materialidad-operaciones-sat-2026/ and https://www.infobae.com/mexico/2026/06/05/la-factura-ya-no-basta-el-sat-exige-materialidad-de-las-operaciones/ — May–June 2026
  - Signal 3 (economic): Article 113 Bis penalties of 2–9 years with prisión preventiva oficiosa raise the stakes from fine to freedom; despachos already pay for RFC-portfolio software (Alegra Plan Contador at MX$990/mo unlimited RFCs, Miskuentas Despacho at MX$800/mo) and charge clients MX$1,500–8,000/mo, proving both the wallet and the channel — https://www.hklaw.com/en/insights/publications/2025/11/reforma-fiscal-para-2026-en-mexico and https://www.satfacil.com.mx/blog/contador-independiente-cuanto-cobrar-2026 — November 2025 / 2026
  Category: Regulatory arbitrage

## 3. The opportunity

There is a whole cottage industry in Mexico of **69-B checkers** — free ones. XMLGratis, SAT Fácil, Tesio, Rfácil all let you paste an RFC and see whether it's on the EFOS blacklist. They are useful and they are commodity, and their existence is the reason this opportunity is mispriced.

Because a 69-B checker answers the wrong question. It tells you *your supplier has already been publicly accused*. By then you are in the 30-day scramble. The checker gives you a red light after the crash.

What nobody sells is the thing that matters between crashes: **which of my suppliers would I fail to defend if the SAT came for them tomorrow?** That's a different computation entirely. It's not a list lookup. It's an assessment of each supplier against the 2.9.19 criteria — do they have IMSS-registered personnel consistent with what they billed me, is their domicilio locatable, does their registered activity match the service on the CFDI, and critically: **do I hold contract, payment trace, and delivery evidence for what I deducted?** That last one is entirely about the buyer's own filing cabinet, and it is almost universally empty.

The incumbents fall into two camps and both leave the middle open:

| Who | What they do | Where they stop |
|---|---|---|
| Free 69-B checkers (XMLGratis, SAT Fácil, Rfácil, Tesio) | RFC lookup against published EFOS lists | Reactive. Zero view of undeclared risk, zero evidence assembly |
| Contabilidad platforms (Alegra, Aspel, Contpaqi, Miskuentas) | Bookkeeping, CFDI issuance, declarations | Treat the CFDI as the record. No concept of the evidence *behind* it |
| Big-4 / boutique fiscal lawyers | Build materiality files by hand, beautifully | MX$40,000–150,000+ per engagement. Priced for the company being audited, not the 300 that aren't yet |

The wedge is the **despacho contable** — the small accounting firm carrying 30 to 400 client RFCs. They are the ones who get the 3 a.m. phone call when a list drops. They are also the ones who will get blamed. And they're the only party with the raw material already in hand: they hold every client's CFDI download, every bank statement, every declaration.

An AI-first product turns their existing document pile into a ranked risk register and a set of half-built evidence files. Not a lookup. An underwriting engine for their own client base.

## 4. Target market

- **Primary customer:** Owner or socio of a Mexican despacho contable with 30–400 client RFCs, 3–25 staff, based in Monterrey, Guadalajara, CDMX, Querétaro, Puebla, Tijuana. Charges each client MX$1,500–8,000/month. Personally signs off on the declarations and personally eats the reputational damage when a client gets an SAT letter.
- **Why they buy:** From the practitioner literature, the operative fear is precise. The recommended protocol when a CFDI-falso notification lands is "análisis de impacto, cálculo de impuestos omitidos, estrategias de corrección dentro del plazo de 30 días y documentación de la regularización" — and the 30 days runs from DOF publication, not from when the accountant notices. A despacho with 200 clients cannot run that analysis across 200 portfolios by hand in a month. They will triage, and triage means guessing. Buying the tool converts a guess into a sorted list.
- **Rough TAM reasoning:** Mexico has tens of thousands of small accounting practices serving the country's formal SME base. I don't need the exact census. If 8,000 despachos in the target size band exist and I win 500 of them at MX$3,500/month, that's MX$21M/year — roughly US$1.1M ARR — from about 6% of a conservatively-drawn segment. The math doesn't need heroics.
- **Why now for them:** The 10 July 2026 publication ended the abstract phase. Before that date, 49 Bis was a thing lawyers wrote alerts about. After it, three RFCs are named and the mechanism is proven to fire. Every despacho owner in Mexico now knows the next list could contain one of their clients' suppliers. That's the buying trigger, and it has a shelf life — the anxiety is highest in the next two to three publication cycles.

## 5. Product sketch (MVP)

- **Portfolio risk sweep.** Ingest a client's CFDIs received (the standard SAT download) and produce a ranked list of suppliers by defensibility risk — highest-peso, weakest-evidence suppliers at the top.
- **Supplier scorecard.** For each supplier: 69-B / 49 Bis list status, whether registered activity matches what they billed, concentration of spend, round-number and split-invoice patterns, and — the core column — what evidence the client actually holds.
- **Evidence gap checklist per supplier**, mapped explicitly to RMF 2026 rule 2.9.19: contract, purchase order, payment trace matching bank statements, deliverables, correspondence. Green / amber / red per element.
- **Evidence request sender.** One click emails the client (or the supplier) a plain-Spanish request for the three specific missing documents, with an upload link. Chases automatically.
- **Materiality file builder.** Assembles what exists into a single indexed, dated PDF expediente per supplier — the document a lawyer would otherwise bill MX$40K to produce.
- **List watch.** Daily check of DOF and SAT publications against every RFC in the portfolio. If a match hits, the affected clients, the affected CFDIs, and the peso exposure are on screen the same morning, with the 30-day countdown running.
- **Complementaria impact calculator.** For a hit: which deductions and IVA credits are exposed, and what the amended return looks like in pesos.
- **Despacho dashboard.** All clients ranked by aggregate exposure, so the owner knows which three accounts to call first.

## 6. AI angle — what's load-bearing

Strip the AI out and this collapses into a spreadsheet with an RFC lookup — which is exactly the free product that already exists.

The AI does two jobs that are genuinely hard and genuinely tedious:

**Reading the evidence.** The materiality file is made of unstructured junk: a scanned contract, a WhatsApp thread agreeing scope, a bank statement PDF, delivery photos, an email with a report attached. The model has to read all of it and answer per supplier: does a contract exist covering this period, does the payment trail reconcile to the CFDI amounts and dates, is there any artifact evidencing actual delivery? A human associate can do this. It takes them 40 minutes per supplier, and a mid-size client has 150 suppliers. That's the 2-hour-to-2-minute collapse the whole thesis rests on.

**Judging coherence.** Deciding whether a supplier's declared activity plausibly covers what they invoiced — "servicios de consultoría administrativa" billed at MX$400,000/month by an entity whose registered activity is retail — is a semantic judgment across noisy Spanish text, not a rule. Same for spotting the classic patterns: suppliers appearing only in months where a big deduction was needed, invoice amounts clustering just under thresholds, descriptions generic enough to cover anything.

The output isn't a chat window. It's a ranked risk register and a stack of assembled PDFs. The AI is the engine, invisible.

## 7. Localization angle

This is Mexico-only by construction and that's the point, not a limitation.

The product is inseparable from Mexican fiscal machinery: CFDI 4.0 XML structure, the SAT's own list publications, DOF publication timing, RMF rule numbering, constancia de situación fiscal, opinión de cumplimiento, IMSS registration as a proxy for real personnel, CSD restriction as the enforcement lever. Interface, evidence templates, and the generated expediente are all Spanish-first — and specifically Mexican fiscal Spanish, which is a dialect of its own.

Pricing localizes too. MX$2,500–6,000/month sits comfortably inside a despacho's existing software budget, which already tolerates MX$800–990/month for portfolio tools and MX$1,500–8,000/month in fees per client. A US$300/month sticker would read as absurd; MX$4,000 reads as one client's monthly fee.

The adjacent expansion is real but later: Colombia and Brazil both run clearance e-invoicing with tightening substance doctrines. The evidence-file concept ports. The rule engine does not.

## 8. Business model — path to $1M–$5M ARR

- **Pricing:** Tiered by client RFCs under management, sold to the despacho. Starter MX$2,500/mo (up to 40 RFCs), Practice MX$4,500/mo (up to 120), Firm MX$8,500/mo (up to 400). Plus a one-shot **Rescate** engagement at MX$12,000–25,000 when a list drops and a firm needs a specific client defended fast — a strong on-ramp for non-subscribers.
- **ACV:** ~MX$54,000 (~US$2,900) at the Practice tier.
- **Rough math to $1M ARR:** 350 despachos × MX$4,500/mo × 12 = MX$18.9M ≈ US$1.02M. Three hundred fifty firms in a country with tens of thousands of practices. This is the realistic 18-month target.
- **Rough math to $5M ARR:** Needs ~1,200 firms at a higher blended MX$6,500/mo, which means moving upmarket into corporate direct sales (a mid-size Mexican company with 400 suppliers buying it for itself at MX$15,000/mo) plus Rescate revenue running as a real line. Plausible at year three; not the plan I'd underwrite.
- **Expansion path:** RFC-count tiers grow naturally as the despacho grows. Then per-expediente fees for lawyer-grade file assembly. Then the corporate direct tier. Then Colombia.

## 9. Go-to-market wedge — first 100 customers

- **Ambush every DOF publication.** When the SAT publishes a 49 Bis or 69-B list, run the named RFCs immediately and identify — from public sources — the sectors and regions most exposed. Publish a same-day breakdown on LinkedIn and in a Spanish-language email list aimed at contadores. This is the single highest-signal recurring event in the market and it fires repeatedly. Whoever is fastest and most useful on publication day owns the category conversation. Target: 2,000 list subscribers in six months from the first four publication cycles.
- **Colegios de Contadores Públicos.** Mexico's accounting profession is organized into state colegios that run paid continuing-education sessions and are actively hungry for 49 Bis content right now. Offer a free 90-minute clinic — "Cómo defender la materialidad de tus clientes en 30 días" — to the colegios in Nuevo León, Jalisco, CDMX and Querétaro. A working clinic converts 5–10% of a 100-person room. Four colegios, four sessions, ~30 firms.
- **Free portfolio X-ray as the hook.** A despacho uploads one client's CFDIs received and gets back a free ranked risk report on that client's top 25 suppliers. This is the demo that sells itself, because the output is genuinely alarming and specific to them. Run it as the CTA on every publication-day post. Expect a high free-to-paid rate once an owner sees three red suppliers with six-figure deductions and no contract on file.
- **Partner with fiscal litigation boutiques.** Lawyers who defend 69-B/49 Bis cases have exactly the wrong economics for prevention — they can't bill MX$40K to a client who isn't in trouble yet. Give them a referral cut. They send prevention work down; you send confirmed-hit clients up. Ten boutiques, each with dozens of despacho relationships.
- **Direct outreach to despachos already visible on 69-B content.** Firms publishing blog posts and LinkedIn commentary about EFOS lists are self-identifying as caring about this. Scrape them, send a personalized report on a real published RFC relevant to their region. A few hundred targets, high relevance, cheap.

## 10. Build complexity — justification

**Medium.** The document-reading and scoring engine runs on off-the-shelf multimodal models; CFDI XML is a well-documented structured format that every Mexican developer has already parsed; the SAT and DOF publish their lists publicly. Nothing here needs a custom model or a dataset that doesn't exist.

The real work is domain encoding, not engineering: getting the 2.9.19 evidence taxonomy right, making the generated expediente actually resemble what a fiscal lawyer would produce, and handling the messy reality of scanned Mexican documents. Budget 12–16 weeks to a v1 a real despacho will run a live client through, with a tax lawyer or experienced contador on the team from day one. Without that person this is unbuildable — the product is 70% judgment and 30% software.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helping taxpayers document real operations is exactly what the SAT is demanding. No filing authority required — the despacho files, we assemble evidence |
| Ethical — no harm / dark patterns | ✅ | The product documents genuine operations. It has to be built to *refuse* to manufacture evidence — see risk flags |
| Market exists (evidence above) | ✅ | Lists published 10 July 2026, 30-day clocks live, free checkers prove the habit, paid despacho software proves the wallet |
| 1–5 person team can build this | ✅ | Two engineers plus a domain partner |
| Launchable with <$50K / ₹40L | ✅ | Inference, hosting, and travel to four colegios. Well under |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 17/20 | Prison exposure under 113 Bis, CSD restriction stops the business invoicing, 30-day clock from a publication you might not see. Felt as dread continuously, as panic on publication days. Not 19 because for any individual client the hit is still probabilistic |
| Demand evidence | 15 | 12/15 | Strong: reform enacted, lists published, free checkers show established behaviour, paid portfolio tools show the wallet. Held below 13 because only three RFCs have actually been named — the volume of enforcement is still an inference |
| Build feasibility | 15 | 11/15 | Structured CFDI plus off-the-shelf models, but 12–16 weeks and the expediente output has to satisfy a professional reader |
| Distribution clarity | 15 | 12/15 | Publication-day content plus colegios plus free X-ray is a genuinely repeatable engine with a named recurring trigger. Not 14 because conversion off a colegio room is unproven |
| Revenue mechanics | 15 | 12/15 | Pricing anchored to real observed spend; 350 firms to $1M is achievable. Rescate one-shots de-risk the ramp. Churn after a quiet quarter is the open question |
| Time to first revenue | 10 | 8/10 | Rescate engagements can be sold before the full product exists; subscription follows within 8–10 weeks of first clinic |
| Defensibility | 10 | 5/10 | Honest score. Contpaqi or Alegra could bolt this on, and free checkers could move up. The moat is accumulated evidence files and switching cost once a firm's portfolio history lives inside — real but slow to build |
| **Total** | **100** | **77/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`domain-expertise-required` · `sales-heavy`

This is not a solo technical build. It needs a Mexican contador or fiscal lawyer as a genuine partner — not an advisor on a call once a month. The product's entire value is whether the expediente holds up, and only a practitioner knows that. Distribution is relationship-driven through colegios and boutiques, which is sales work in Spanish, in person.

### Key assumptions to validate (3–5)

1. **Assumption:** Despachos will pay MX$4,500/month for prevention rather than waiting and billing the client for the emergency. **How to test:** Take the free portfolio X-ray to 25 despacho owners in Monterrey and Guadalajara, show the red suppliers, and ask for a signed pilot at price. Fewer than 5 conversions kills it.
2. **Assumption:** The evidence the client actually holds is bad enough that the risk report is alarming. **How to test:** Run 10 real client portfolios. If the median supplier already has contract plus payment plus deliverable on file, there's no gap to sell into.
3. **Assumption:** SAT publication volume ramps beyond the initial three RFCs. **How to test:** Track every DOF publication for 90 days. If it stays at a trickle of three per quarter, urgency evaporates and this becomes a vitamin.
4. **Assumption:** A generated expediente is good enough that a fiscal lawyer would submit it. **How to test:** Pay three boutiques to review five generated files and rate them against what they'd have produced.

### Risk flags

1. **Enforcement-pace risk:** The entire urgency rests on the SAT actually using 49 Bis at scale. Three RFCs in the first publication is a warning shot, not a campaign. If the SAT stays cautious — and Mexican tax enforcement has stalled before — the fear fades and this becomes a nice-to-have.
2. **Incumbent bolt-on:** Contpaqi, Aspel and Alegra already sit inside the despacho's workflow with the CFDI data. Any of them could ship a "riesgo de proveedores" tab. The defense is being sharply better on the evidence file specifically, and being there first while they're busy with the IBS/CBS-equivalent plumbing work.
3. **Ethical edge:** A tool that assembles evidence files is one bad product decision away from a tool that helps fabricate them. The generated expediente must be transparently sourced — every element traceable to a real document with a real date — and the product must never draft a contract retroactively. Getting this wrong is existential, legally and morally.
4. **Liability exposure:** If a firm relies on a green score and gets hit anyway, they will look for someone to blame. Terms, professional indemnity, and framing the output as decision support for a licensed contador — not as an opinion — matter from day one.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Technical founder paired with a Mexican contador or fiscal
                        lawyer as full co-founder. Spanish-native, based in or
                        willing to live in Monterrey/CDMX. Comfortable selling
                        in person to professional colegios.
Time to revenue:        8–10 weeks (Rescate engagements can pre-sell)
Capital to launch:      MX$400,000–700,000 (US$22–38K)
Top 3 assumptions to validate first:
  1. Despachos pay for prevention, not just emergency — 25 in-person X-ray
     demos in Monterrey and Guadalajara, need 5 signed pilots
  2. Real client portfolios have genuinely thin evidence — run 10 portfolios,
     measure the share of suppliers with no contract or no delivery proof
  3. SAT publication volume ramps — track DOF for 90 days from 10 July 2026
Kill criteria:
  - Abandon if fewer than 5 of 25 demoed despachos convert to a paid pilot
  - Abandon if the SAT publishes fewer than 25 additional 49 Bis RFCs in the
    six months following the first list
  - Abandon if Contpaqi or Alegra ships an equivalent supplier-risk module
    before your v1 reaches 40 paying firms
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Pull the three RFCs published on 10 July 2026 and everything public about them. Build the risk-scoring logic on paper with a contador — what actually makes a supplier indefensible. Hand-produce one real portfolio X-ray using a friendly despacho's client data.
- **Day 3–4:** Take that single hand-made X-ray to 25 despacho owners across Monterrey and Guadalajara. Not a deck — their own data or a close analogue, on a laptop, in their office. Ask for MX$4,500/month, monthly, starting now. Record the exact objection every time someone says no.
- **Day 5:** Count. **Go if ≥5 of 25 sign a paid pilot and at least 3 of them, unprompted, name a specific supplier they're worried about.** That second condition matters more than the first — it's the difference between polite interest and a live fear. Below either bar, the market is telling you the pain is still theoretical, and you wait for the SAT to publish more names.
