---
title: "ProbaMX — materialidad defense file for Mexican PYMEs"
slug: cfdi-materialidad-defense-file
date: 2026-08-17
category: Compliance / Mexico — Personas Morales (₱20M–₱400M revenue) Who Deduct Invoices From Suppliers the SAT Can Blacklist Overnight and Who Have Five Business Days to Prove the Work Was Real
complexity: Medium
score: 76
verdict: GO
confidence: Medium
oneLiner: "Builds the proof-of-work file behind every supplier invoice you deduct, before the SAT freezes your seals."
tags:
  vertical: Compliance
  model: SaaS
  geography: LATAM
  secondary: [SMB, AI-agent, Compliance-driven, Multilingual, Accountant-channel]
axes:
  problem: 18
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 7
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# ProbaMX

## 1. One-liner

Builds the proof-of-work file behind every supplier invoice you deduct, before the SAT freezes your seals.

## 2. Trend signal — why now?

Mexico's 2026 fiscal reform quietly changed who has to prove what. It used to be the tax authority's job to show your supplier was fake. Now it is your job to show the work was real — and the clock is brutal.

Three things landed on top of each other:

**The burden flipped to the buyer.** Article 69-B of the Código Fiscal de la Federación lets the SAT presume an operation never happened if the *issuer* lacks assets, personnel or infrastructure. The 2026 read is explicit that *"la responsabilidad de demostrar lo contrario recae ahora con mayor fuerza en el receptor del comprobante"* — the receiver of the invoice, not the issuer, now carries the weight ([Facturando, 2026-05-08](https://www.facturando.mx/blog/index.php/2026/05/08/guia-materialidad-fiscal-2026/)). Materialidad stopped being an interpretive doctrine and became the operative test: a CFDI is valid *"única y exclusivamente sí efectivamente ampara operaciones que sean reales, existentes y comprobables."*

**The punishment became instant and existential.** The reform added fracción XIV to article 17-H Bis, tied to the new article 49-Bis expedited procedure. If you received CFDIs from a supplier whose 49-Bis procedure concluded, you have **30 calendar days from DOF publication** to amend your returns and reverse the fiscal effects — or the SAT temporarily restricts your Certificado de Sello Digital. During a 49-Bis verification the CSD is suspended *immediately* from notification until resolution, and you get **five business days** to submit evidence that the operations actually occurred ([Pérez Góngora y Asociados](https://www.perezgongora.com/blog/fiscalizacion-2026-materialidad-de-operaciones-y-el-ataque-al-csd)). A restricted CSD means you cannot issue a single CFDI. You cannot bill anyone. Revenue goes to zero on a Tuesday afternoon.

**The blast radius is already large and growing weekly.** The 69-B database now holds 5,539 RFCs — 4,558 definitivos, 282 presuntos, 139 desvirtuados, 560 with a favorable ruling ([SAT Fácil, 2026](https://www.satfacil.com.mx/blog/consultar-lista-69b-sat-gratis)). The SAT publishes new listings continuously: list #330 on 15 April 2026 added 89 taxpayers, a global definitive list went out 3 July 2026, and another oficio added 10 more on 17 July 2026 ([efos.mx](https://www.efos.mx/2026/04/21/el-dia-15-de-abril-de-2026-el-sat-publico-en-la-pagina-gob-mx-la-lista-definitiva-330-en-la-cual-se-enlisto-a-89-contribuyentes/)). Mexican financial press reported the SAT suspending seals for *thousands* of taxpayers over links to factureras ([Ámbito, 2026](https://www.ambito.com/mexico/economia/sat-suspendio-sellos-miles-contribuyentes-vinculos-empresas-factureras-falsas-esto-se-sabe-n6289208)). This is not a hypothetical enforcement posture. It is running now.

The asymmetry that makes this a business: a company gets blacklisted *after* you paid them, and you find out from a DOF publication. The invoice you deducted in March 2025 becomes a liability in August 2026. You cannot go back and take photos of a warehouse you visited eighteen months ago. As Rfácil puts it, *"intentar crear o conseguir documentos después de que inició una revisión es riesgoso legal"* — trying to assemble the evidence after the review starts is legally dangerous, and *"reconstruir la relación entre ambos durante una auditoría se convierte en una tarea titánica."*

Evidence has to be captured contemporaneously or it is worthless. Nobody sells a contemporaneous-capture tool to a company with forty employees.

Provenance:
  - Signal 1 (demand): Burden of proof for materialidad shifted to the CFDI receiver; collecting per-invoice evidence described as overwhelming for accounting departments, currently done in spreadsheets and email trails — https://www.facturando.mx/blog/index.php/2026/05/08/guia-materialidad-fiscal-2026/ — 2026-05-08
  - Signal 2 (feasibility/economic): 2026 reform adds art. 17-H Bis fracción XIV + art. 49-Bis — immediate CSD suspension, 5 business days to produce evidence, 30 calendar days to amend after DOF publication — https://www.perezgongora.com/blog/fiscalizacion-2026-materialidad-de-operaciones-y-el-ataque-al-csd — 2026
  - Signal 3 (economic/scale): 5,539 RFCs on the 69-B list (4,558 definitive), new lists published monthly; seals suspended for thousands of taxpayers over facturera links — https://www.satfacil.com.mx/blog/consultar-lista-69b-sat-gratis + https://www.ambito.com/mexico/economia/sat-suspendio-sellos-miles-contribuyentes-vinculos-empresas-factureras-falsas-esto-se-sabe-n6289208 — 2026
  Category: Geographic arbitrage (enterprise-only compliance category, no SMB tier) + Regulatory arbitrage

## 3. The opportunity

There are two products in this market today and neither one serves a 40-person company.

**Free RFC scanners** — SAT Fácil, Induxsoft, a dozen accountant blogs. You paste a supplier's RFC, it tells you whether that RFC appears on the 69-B list today. Useful, free, and completely insufficient. It answers "is this supplier blacklisted right now?" and stops. It does not tell you which of *your* deducted invoices are exposed, does not watch the list on your behalf, and builds no evidence whatsoever. A clean scan result is not a defense.

**Enterprise materialidad modules** — Rfácil, Siigo Fiscal, and the CONTPAQi/Aspel ecosystem's bolt-ons. Rfácil's module is explicitly built for *"empresas medianas y grandes en México"*, publishes no price, and sells through a "diagnóstico gratuito" consultation. That is enterprise motion: ERP integration project, implementation partner, a quarter of onboarding. Siigo Fiscal lets you attach documents and comments to CFDIs to support materialidad under 49-Bis — real functionality, but it is a feature inside an accounting suite you must first migrate onto.

The gap sits exactly where the pain is worst. A ₱80M-revenue manufacturer or construction firm has 200–600 supplier invoices a year, no in-house tax lawyer, an external despacho contable billing ₱3,000–7,000 a month for general bookkeeping, and precisely zero systematic evidence behind any deduction. They are as exposed as a ₱2B company and have none of the infrastructure. When the DOF publication lands they have 30 days, an accountant who handles 25 other clients, and a shoebox.

What a focused team does 10× better: **stop treating this as document storage and start treating it as a risk-ranked evidence pipeline.** The enterprise tools give you a filing cabinet and an alert when a folder is incomplete — you still have to know what to put in it and chase it yourself. The AI-first version reads the invoice, infers what kind of operation it was, knows which of the four evidence categories that operation actually needs, and goes and gets it: drafts the WhatsApp request to the supplier, generates the acta de trabajo from the email thread that already exists, matches the REP payment complement to the original CFDI, and scores what is still missing by peso value at risk. The output is not a folder. It is a ranked list: *these eleven invoices, worth ₱4.2M in deductions, would not survive five business days of scrutiny — here is what each one needs and here is the message to send.*

## 4. Target market

**Primary customer:** Finance director, controller or owner-operator at a Mexican *persona moral* doing ₱20M–₱400M in annual revenue — manufacturing, construction, logistics, professional services, staffing. 20–250 employees. Uses CONTPAQi or Aspel, files through an external despacho contable, has a supplier base of 40–300 vendors including small subcontractors and service providers who are exactly the profile the SAT presumes into non-existence.

The secondary and probably faster channel: the **despacho contable** itself — the independent accounting firm carrying 15–40 PYME clients. They are the ones who get the panicked phone call when the DOF publishes, and they are the ones who eat the liability when a client's deduction is rejected.

**Why they buy:** Because the failure mode is not a fine, it is a shutdown. The consequence stack is deduction rejection on ISR, IVA credit repayment, and classification as simulated operations under article 113-Bis with criminal exposure. Layered on top: CSD restriction that stops all invoicing. A finance director who has watched a peer lose their seals for two weeks does not need a demo. The verbatim complaint from the market is about the reconstruction burden — *"la carga administrativa de recolectar evidencias para cada factura puede ser abrumadora"* — and about evidence living in *"correos y carpetas personales"* that vanishes when an employee leaves.

**Rough TAM reasoning:** Roughly 900,000 formally constituted personas morales in Mexico, of which about 360,000 are actually tax-compliant and therefore actually deducting ([El Imparcial, 2026-05-14](https://www.elimparcial.com/dinero/2026/05/14/el-sat-identifica-que-550000-empresas-en-mexico-no-pagan-impuestos-y-lanza-una-estrategia-de-fiscalizacion-para-formalizar-al-60-de-las-personas-morales-sin-crear-nuevos-gravamenes/)). Strip to those with enough supplier volume and enough revenue to be worth auditing and to afford software — the ₱20M+ band — and a defensible serviceable market is 40,000–80,000 companies. At ₱3,500/mo average that is a category worth well over ₱2B annually; capturing 1,200 of them is a $2.9M ARR business. This does not need to be a big share of Mexico to work.

**Why now for them:** The 30-day amendment clock in 17-H Bis XIV did not exist before the 2026 reform. Neither did the 49-Bis expedited procedure with its 5-day evidence window and immediate CSD suspension. A company that was merely "at risk of a slow audit" in 2024 is now one DOF publication away from not being able to invoice. That is a change in kind, not degree, and it happened this year.

## 5. Product sketch (MVP)

- **Supplier exposure map.** Connect via SAT descarga masiva (the taxpayer's own CFDI download, using their credentials) and pull every CFDI received over the statute-of-limitations window. Cross-match every issuer RFC against the full 69-B list — definitivos, presuntos, desvirtuados, sentencia favorable — plus the 69 non-compliance list. Output: total pesos deducted per supplier, ranked by status and exposure.
- **Continuous DOF watch with a named clock.** Monitor SAT publications and oficios. The moment a supplier you have ever deducted from appears, the customer gets an alert that says which invoices, how many pesos, and the exact date the 30-day amendment window closes — not a generic "list updated" notification.
- **Operation-aware evidence checklist.** The system classifies each material invoice by what kind of operation it was (professional services, materials delivery, subcontracted labour, equipment rental) and generates the specific evidence set that operation needs — contract with certified date, REPSE registration where applicable, delivery guides and warehouse receipts for goods, work logs and deliverables for services, REP payment complement matched to the original CFDI, purchase order predating the invoice.
- **Evidence chase, in Spanish, over WhatsApp and email.** Drafts and sends the request to the supplier or the internal owner for each missing document, follows up, and files what comes back against the right invoice. This is the part that actually gets the file built, because nobody does it manually.
- **Auto-drafted actas and work logs.** Pulls the existing email thread, calendar entries and deliverable files for a service engagement and drafts the dated acta de trabajo / bitácora that the file requires — reviewed and signed by a human, never fabricated.
- **Risk-ranked gap report.** One screen: which deductions would not survive a five-day evidence demand, ordered by peso value at risk, with a completeness score per file.
- **Five-day defense packet.** One click produces the ordered, indexed, timestamped PDF bundle for a specific supplier or period — structured the way the four evidence categories are argued, ready to hand to the despacho or the lawyer.
- **Accountant multi-client console.** For despachos: every client's exposure on one board, so the firm works the riskiest files first.

## 6. AI angle — what's load-bearing

Remove the AI and this collapses into Rfácil — a document repository with a checklist, which already exists and already loses to inertia.

Three places the model is doing work a rules engine cannot:

**Classifying the operation from the invoice.** A CFDI carries a clave de producto/servicio, a description line written by whoever typed it, an amount, and a use code. From that, the system has to infer *what actually happened* — was this a subcontracted crew, a materials delivery, a consulting engagement, a rental? — because the required evidence set is completely different for each. The description lines are free text, inconsistent, abbreviated, in Spanish, and often wrong. Classification across a few hundred thousand of these is a language problem.

**Manufacturing evidence out of exhaust.** The single hardest part of a materialidad file is the traceability layer: the work logs, the deliverable trail, the emails with metadata. That evidence usually *exists*, scattered across an inbox and a shared drive, but nobody has ever assembled it into a dated narrative. Reading eighteen months of threads for one supplier and producing a defensible chronology of the engagement — what was requested, when, what was delivered, when it was accepted — is exactly the two-hours-to-two-minutes collapse. A human paralegal does this at ₱800/hr and it is why nobody does it preventively.

**Ranking legal exposure.** Not every incomplete file matters equally. A ₱40,000 invoice from a supplier with sentencia favorable is noise; a ₱900,000 invoice from a definitivo with no delivery evidence is the one that ends you. Scoring the interaction of supplier status, peso value, operation type, evidence completeness and how far back it sits is judgment, and it is the difference between a tool that produces a 400-item to-do list nobody works and one that produces eleven items that get done this week.

The determinism lives where it should: the 69-B matching, the date arithmetic, the CFDI parsing, the REP reconciliation. Those are rules and they must never be a model's guess. The model handles classification, assembly and prioritisation — and every generated document goes to a human for review and signature before it enters a file. **The product never invents a fact.** It finds evidence that exists and organizes it; where evidence does not exist, it says so loudly, because a fabricated file is worse than an empty one and would end the company faster than the SAT would.

## 7. Localization angle

This is not a localized version of a global product. It is a product that can only exist in Mexico.

The entire surface area is Mexican statute: CFDI 4.0 structure, the REP payment complement, the CSD as a revocable license to do business, article 69-B's presumption mechanic, the DOF as the notification channel, REPSE registration for subcontracted personnel, the descarga masiva API. There is no US or EU analogue to "the tax authority can switch off your ability to invoice on 30 days' notice because someone you bought from was blacklisted." That singular mechanism is why willingness-to-pay is high and why no global compliance vendor will bother.

Everything is Spanish-first — the UI, the generated actas, the supplier chase messages. WhatsApp is the correct channel for chasing a small subcontractor for a delivery receipt, not email, and Mexican SMB commerce already runs on it. Pricing has to land in pesos at PYME scale: ₱2,500–6,000/mo sits credibly next to the ₱3,000–7,000/mo they already pay a despacho for bookkeeping ([Praxium Consultores, 2026](https://praxiumconsultores.com/blog/cuanto-cobra-un-contador-en-mexico-honorarios-2026)), whereas a $500/mo USD enterprise SKU does not.

The natural expansion is lateral to other clearance-model LATAM regimes — Brazil's and Chile's e-invoicing stacks have their own supplier-risk doctrines — but that is a year-two conversation, and each is a genuinely separate product.

## 8. Business model — path to $1M–$5M ARR

**Pricing** (annual contracts, monthly billing, pesos):

- **Vigilancia** — ₱1,900/mo. Exposure map, continuous DOF/69-B watch, alerts with the 30-day clock. The wedge tier; a scared company buys this the week it hears about a peer losing seals.
- **Expediente** — ₱4,500/mo. Everything above plus evidence checklists, the WhatsApp/email chase, auto-drafted actas, risk-ranked gap report, five-day defense packet. This is the real product.
- **Despacho** — ₱12,000/mo for up to 15 client companies, ₱700/mo per additional client. Multi-client console. Accountants resell at their own margin.

**ACV:** Blended ~₱42,000/year (~$2,300 USD) across direct customers, weighted toward Expediente because the Vigilancia tier's whole job is to show you an exposure number that makes you upgrade. Despacho seats blend higher in absolute terms and dramatically better in CAC.

**Math to $1M ARR (~₱18.5M):** ~440 direct Expediente customers at ₱4,500/mo. Realistically a mix: ~250 direct customers (₱13.5M) plus ~35 despachos averaging ₱12,000/mo (₱5M). Roughly 250 direct logos and 35 firms. That is a reachable number in Mexico with an accountant-led motion — a single mid-size despacho brings 15–40 companies in one relationship.

**Math to $5M ARR (~₱92M):** Needs ~1,200 direct + ~180 despachos, and needs two things to be true that are not yet proven: (a) the accountant channel compounds — firms that adopt it standardize on it for their whole book, which is the difference between selling 1,200 companies and selling 200 firms; (b) an upsell layer lands, most likely per-defense-packet fees during an actual 49-Bis event (₱15,000–40,000 for an assembled, lawyer-ready defense) and supplier pre-screening for new vendor onboarding.

**Expansion path:** Seats are the wrong unit here — invoice volume and supplier count are the right ones. ACV grows as customers grow their vendor base, as they extend coverage backward over more historical periods, and through event-driven defense-packet fees, which are the highest-margin and most urgently paid revenue in the whole model. Gross margin should sit at 80%+; the cost driver is model inference on document assembly, which is bounded by invoice count and falls every quarter.

## 9. Go-to-market wedge — first 100 customers

**1. Turn every DOF publication into a named outreach list.** This is the wedge and it is nearly unfair. When the SAT publishes a new 69-B list — as it did on 15 April, 3 July and 17 July 2026 — the blacklisted RFCs are public. Their *customers* are inferable: pull the company's public presence, industry, and the sectors it served; for construction, staffing and logistics factureras the client profile is well-defined and geographically clustered. Build the list of PYMEs most likely to have deducted from those RFCs and reach them within 72 hours of publication, while the 30-day clock is visibly running. Message: "list #331 published Tuesday. If any of these RFCs are in your CFDIs, you have until [date]. Free scan, 20 minutes, we tell you your exposure in pesos." A free exposure scan is a genuinely valuable artifact and the natural top of funnel — it produces a number, and the number does the selling.

**2. Recruit 20 despachos contables as the primary channel.** The Colegio de Contadores Públicos chapters (CDMX, Nuevo León, Jalisco) run continuous education, and materialidad is the topic of the year — there is already a paid course market for it (elConta's "CFDI 2026 Bajo la Lupa del SAT: Materialidad, Validación, Cancelaciones y EFOS"). Offer to co-teach a free 45-minute session on the 49-Bis five-day window, end with the multi-client console. An accountant who adopts this brings 15–40 companies and does the onboarding themselves because it reduces *their* liability. Target: 20 firms in the first six months, which alone is 300+ companies of reach. This is the channel that gets to $5M; direct outreach is the channel that gets to first revenue.

**3. Own the search term the panic drives.** When a finance director's seals get restricted, they search *"me restringieron el sello digital qué hago"* and *"expediente de materialidad ejemplo"* at 11pm. The existing content is law-firm blogs selling consultations and vendors selling diagnósticos. Publish the actual artifact instead: a real, complete, downloadable materialidad file template for each of the five common operation types, plus a plain-Spanish walkthrough of the 49-Bis five-day procedure. Gate nothing. The download is the lead. This compounds slowly but it is the cheapest durable channel in a market where the buyer is actively searching in a crisis.

**4. Partner with the fiscal-litigation bar.** Tax lawyers who defend 69-B and CSD-restriction cases have a structural problem: clients arrive with no evidence and there is nothing to be done. Referring them upstream to a preventive tool costs the lawyer nothing and makes their eventual cases winnable. Ten lawyers each referring two clients a quarter is 80 warm, pre-terrified leads a year.

**5. CONTPAQi/Aspel adjacency.** These two own PYME accounting in Mexico. Not an integration play at first — a data-import play: accept their export formats so onboarding is a file upload, not a project, and market inside their partner/reseller communities where implementation consultants are constantly asked "what do I do about materialidad?"

## 10. Build complexity — justification

**Medium.** The off-the-shelf half is genuinely easy: CFDI XML is a documented, rigid schema; the 69-B lists are published files; the SAT descarga masiva service exists and is well-trodden by Mexican developers; the evidence classification and document assembly ride on general-purpose models with no fine-tuning. Standard web stack, no novel infrastructure.

The hard half is threefold and real. First, **credential handling** — the product needs the customer's e.firma or CIEC to run descarga masiva, which is the crown jewel of a Mexican company's identity. That demands serious key-management discipline and a trust posture from day one, and it is the single biggest thing that could sink adoption. Second, **statutory correctness** — evidence requirements per operation type, REPSE applicability, the date arithmetic on two different clocks. Getting this wrong in a customer-visible way is fatal to reputation in a market that talks. That requires a Mexican tax specialist as a paid advisor or co-founder, not a Google search. Third, **the chase loop** — WhatsApp Business API plus stateful multi-party follow-up is more engineering than it looks.

Realistic v1 for two people plus a fiscal advisor: **14–18 weeks**. Exposure map and DOF watch alone — a saleable Vigilancia tier — is 6–7 weeks and should ship first to start generating revenue and exposure-scan leads while the evidence engine is built.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Helps taxpayers comply with existing obligations using their own data and their own credentials. Nothing here evades tax; it documents real operations. The one hard line — never generate evidence for operations that did not occur — is a product rule, not a grey area. |
| Ethical — no harm / dark patterns | ✅ | Fear-adjacent marketing must stay factual; the deadlines are real and citable. The tool refuses to fabricate. It should surface "you have no evidence and cannot get any" as an answer, because that is the honest one. |
| Market exists (evidence above) | ✅ | 5,539 RFCs on the 69-B list, monthly publications, seals suspended for thousands, enterprise vendors already monetizing the same need at a higher tier. |
| 1–5 person team can build this | ✅ | Two engineers plus a fiscal advisor. 14–18 weeks to full v1, 6–7 weeks to a saleable first tier. |
| Launchable with <$50K / ₹40L | ✅ | Well under. Main line items are inference, WhatsApp Business API, hosting, and the fiscal advisor's retainer — call it $18–25K to first revenue. |

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 18/20 | About as hair-on-fire as compliance gets. CSD restriction stops all invoicing — revenue to zero, not a fine. Five business days to produce evidence, 30 days to amend. Article 113-Bis carries criminal exposure. Not 19–20 only because it is episodic: a company that has never been touched can rationalise waiting, and plenty will. |
| Demand evidence | 15 | 12/15 | Strong and multi-sourced: statutory change, a live and growing blacklist, press reporting thousands of suspensions, a paid course market on the exact topic, and two commercial vendors already selling materialidad modules — meaning someone is paying. Held below 13 because I found no direct verbatim PYME complaints in forums; the evidence is vendor-side and press-side, and the SMB tier's willingness-to-pay at ₱4,500 is inferred from adjacent accounting spend, not observed. |
| Build feasibility | 15 | 11/15 | Rigid schemas, published lists, documented government API, no custom models. Docked for e.firma/CIEC credential custody, the statutory-correctness burden requiring a paid domain expert, and the stateful chase loop. 14–18 weeks for a pair, not 6. |
| Distribution clarity | 15 | 12/15 | The DOF-publication trigger is a genuinely excellent named-list channel with natural urgency and a free scan as the hook. The despacho channel is concrete and has real leverage. Docked because accountants are notoriously slow to adopt and conversion math on the DOF outreach is unproven — I can name the list, not the response rate. |
| Revenue mechanics | 15 | 12/15 | Pricing benchmarks cleanly against the ₱3,000–7,000/mo the same buyer already pays a despacho. $1M ARR needs ~250 direct logos plus ~35 firms, which is achievable. The $5M path leans on the accountant channel compounding and on event-driven defense-packet fees, neither yet proven. |
| Time to first revenue | 10 | 7/10 | Vigilancia tier is saleable at ~7 weeks and the free exposure scan converts fast when a real number comes back. Not higher because Mexican PYME procurement runs through the external accountant, which adds a gatekeeper and a few weeks even when the buyer is scared. |
| Defensibility | 10 | 4/10 | The weakest axis and I will not dress it up. The 69-B list is public, CFDI parsing is commodity, and Rfácil or Siigo can build downmarket the moment this works — they already have the customers and the compliance brand. What accrues: the historical evidence corpus creates real switching cost by month 12, the despacho relationships are sticky, and a library of what actually survived a 49-Bis challenge compounds. But month 3 is execution-only. This is a speed-and-focus business, not a moat business. |
| **Total** | **100** | **76/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Non-negotiable: a Mexican fiscal specialist — contador or tax lawyer with real 69-B defense experience — as co-founder or heavily-compensated advisor. This is not a domain you learn from blog posts, and one publicly wrong evidence requirement kills the brand in a market where every despacho talks to every other despacho. Spanish fluency and Mexico-based presence are effectively required for the accountant channel.

### Key assumptions to validate (3–5)

1. **Assumption:** PYMEs in the ₱20M–₱400M band will pay ₱4,500/mo for preventive materialidad rather than waiting and paying a lawyer reactively. **How to test:** Run free exposure scans for 25 companies, deliver each a real pesos-at-risk number, then ask for a signed annual LOI at ₱4,500/mo. Anything under 6 of 25 converting means the fear is not yet operational and the wedge tier must carry the business.
2. **Assumption:** Companies will hand over e.firma/CIEC credentials to a young startup. **How to test:** Include the credential ask in the first 25 scans and measure refusal rate specifically. If more than half refuse, the product must be redesigned around customer-side manual CFDI export — which is a materially worse product and changes the build.
3. **Assumption:** Despachos will resell rather than see this as a threat to their own advisory billings. **How to test:** Pitch 15 firms directly. Watch for the objection "this replaces what I charge for." If it dominates, the channel inverts to white-label — they sell it as their service, which changes pricing and branding.
4. **Assumption:** AI-assembled actas and work logs are actually accepted as evidence in a 49-Bis proceeding. **How to test:** Have two independent tax litigators review three fully-assembled sample files and rate whether they would submit them. If they would not, the product is a checklist, not a generator, and value drops hard.
5. **Assumption:** DOF-publication-triggered outreach converts. **How to test:** Run it against the next two published lists, measure reply rate to 200 targeted companies. Below 4% and the primary wedge is broken.

### Risk flags

1. **Incumbent downmarket risk (highest).** Rfácil and Siigo already sell materialidad to medium and large companies and already own the compliance brand. If this segment proves out publicly, building a PYME tier is a quarter of work for them. Speed and the accountant channel are the only real answers.
2. **Regulatory volatility, both directions.** The 2026 reform is new and contested — one source flags a *nulidad* ruling touching the listing procedure, and Mexican fiscal doctrine moves through jurisprudence constantly. A court could soften 49-Bis or the CSD mechanic and deflate the urgency; equally, the SAT could tighten further. This risk cuts both ways but it means the value proposition is not stable ground.
3. **Credential custody is an existential security surface.** Holding e.firma keys for hundreds of Mexican companies makes this an attractive target, and a breach is not a bad news cycle — it is the end of the company and probably personal liability. This demands security spend that is disproportionate to a seed-stage budget.
4. **Platform dependency on SAT infrastructure.** Descarga masiva availability, format changes, and rate limits are entirely outside the company's control, and Mexican tax IT has a history of instability during filing peaks.
5. **Ethical drift under sales pressure.** The commercial temptation to let the tool "help" produce evidence for operations that did not happen is enormous and would make the product an instrument of exactly the fraud the statute targets. This has to be an architectural refusal, not a policy page.

## 14. Structured verdict

```
Score:                  76/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Mexico-based technical founder paired with a fiscal
                        specialist who has defended 69-B / CSD-restriction cases
Time to revenue:        7-10 weeks (Vigilancia tier), 4-5 months (full Expediente)
Capital to launch:      $18-25K USD (₱340-470K)
Top 3 assumptions to validate first:
  1. PYMEs pay ₱4,500/mo preventively — 25 free exposure scans, ask for signed
     annual LOI, need 6+ conversions
  2. Companies surrender e.firma/CIEC credentials — measure refusal rate in the
     same 25 scans; >50% refusal forces a product redesign
  3. AI-assembled actas survive litigator review — 3 sample files to 2 independent
     tax litigators, would they submit them as-is
Kill criteria:
  - Abandon if fewer than 6 of 25 exposure-scan recipients sign an LOI at ₱4,500/mo
  - Abandon if more than half of target companies refuse credential access AND the
    manual-export fallback tests below 40% completion in onboarding
  - Abandon if Rfácil or Siigo launches a sub-₱6,000/mo PYME materialidad tier
    before the v1 ships
  - Abandon if courts materially gut 49-Bis or the 17-H Bis XIV CSD mechanic,
    removing the deadline that drives urgency
```

## 15. Next step — 1-week validation sprint

**Day 1–2 — Build the exposure scan by hand, not in code.** Take the current 69-B definitive list and the last three published oficios. Recruit 25 PYMEs in the ₱20M–₱400M band through two accountant contacts in CDMX and Monterrey, across construction, staffing and manufacturing. Get each to export their received-CFDI file (manual export, no credentials — this also tests the fallback path). Match issuer RFCs against the list manually in a spreadsheet.

**Day 3–4 — Deliver a number and ask for money.** Send each company a one-page report: which suppliers are on the list or presumed, how many pesos of deductions sit behind them, and the specific date their amendment window closed or closes. Then the ask, on a call, not by email: ₱4,500/mo annual, signed LOI, product ships in 90 days. Separately, put three fully hand-assembled sample materialidad files in front of two tax litigators and ask one question — would you submit this as-is in a 49-Bis response?

**Day 5 — Decide on three falsifiable numbers.**

- **LOIs:** ≥6 of 25 signed at ₱4,500/mo → proceed. 3–5 → build the ₱1,900 Vigilancia tier only and re-test the upsell from a live exposure number. ≤2 → the fear is not operational at this company size; kill or move upmarket.
- **Credentials:** measured refusal rate on the e.firma ask. >50% → redesign onboarding around manual export before writing any code.
- **Litigator verdict:** both would submit the sample files → the evidence engine is the product. Neither would → this is a monitoring and checklist tool, ACV drops to ₱1,900–2,500, and the whole model needs re-running before anyone builds anything.

The trap to avoid: 25 people saying "this is a real problem." Of course it is a real problem — the statute says so. The only signal that counts is a signature on an LOI with a peso number on it.
