---
title: "CreditoZero — IBS/CBS credit screen for Brazilian contadores"
slug: brazil-ibs-cbs-credit-screen
date: 2026-07-29
category: FinTech / Brazil-SMB — Small & Mid Accounting Firms (escritórios contábeis) and their Lucro Real/Presumido clients
complexity: Medium
score: 77
verdict: GO
confidence: Medium
oneLiner: "Scores every invoice your client receives for IBS/CBS credit risk, so a supplier's sloppy paperwork stops costing you money."
tags:
  vertical: FinTech
  model: SaaS
  geography: LATAM
  secondary: [Compliance-driven, SMB, AI-agent, Multilingual, Solo-builder]
axes:
  problem: 17
  demand: 13
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 4
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CreditoZero

## 1. One-liner

Scores every invoice your client receives for IBS/CBS credit risk, so a supplier's sloppy paperwork stops costing you money.

## 2. Trend signal — why now?

Brazil is mid-way through the largest tax overhaul in its modern history, and the calendar just got sharp.

**The deadline is five days away.** From **3 August 2026**, SEFAZ automatically rejects any NF-e or NFC-e issued by a *regime regular* company (Lucro Real / Lucro Presumido) that doesn't carry the new IBS and CBS field groups. Until 2 August the flexibility window from *Ato Conjunto RFB/CGIBS nº 1/2025* holds — no fines, no rejections. After that the rejection is, in the words of one vendor writeup, "não é multa, não é aviso: é a SEFAZ recusando a autorização" — not a fine, not a warning, the tax authority refusing to authorize the document. Stopped sales, delayed delivery, broken cash flow.

**The market is nowhere near ready.** V360's *Termômetro do Crédito IBS/CBS*, an anonymized study of **over 6.4 million electronic fiscal documents**, found **66.2% of NF-e carry problems** that could block credit appropriation: 64.4% arrived with IBS and CBS fields simply unfilled, plus 1.8% with divergences between the supplier's reported calculation and the reference value. Of **139,000 suppliers mapped, only 35.8% were filling the new fields correctly**. Separately, reporting on the reform notes that more than 80% of *Regime Normal* companies haven't finished the required parameterizations, and that 60–70% of Brazilian SMEs still run without an adequate ERP.

**And the smart money already named the wedge — from the sell side.** V360's co-CEO Izaias Miguel, quoted in Agência Brasil coverage: the biggest challenge for companies **will not be in issuing invoices, but in checking the documents received**. Every ERP vendor in Brazil — Omie, Contmatic, Conta Azul, Senior — is racing to fix *emission*. The received-document side is where the money actually leaks, and it is comparatively unattended.

Here's the part that makes this durable rather than a one-quarter panic. Under LC 214/2025 the buyer's right to credit is tied not just to a valid electronic document but to **o recolhimento dos tributos nas operações anteriores** — tax actually paid upstream. Decision IT calls it the "risco invisível": *"a perda ou glosa de créditos por problemas que não ocorreram dentro da própria organização"* — losing credits because of problems that happened at someone else's company. Supplier issues a perfect invoice, buyer books the credit, supplier later fails to pay, buyer's credit is glossed. Good-faith compliance is no longer a defense. Supplier fiscal quality just became a line item on the buyer's P&L.

```
Provenance:
  - Signal 1 (demand): V360 "Termômetro do Crédito IBS/CBS" — 66.2% of 6.4M+ NF-e carry problems blocking credit; only 35.8% of 139,000 suppliers filling fields correctly — https://agenciabrasil.ebc.com.br/economia/noticia/2026-07/reforma-tributaria-poe-em-risco-credito-de-662-das-notas-fiscais — 2026-07-06
  - Signal 2 (feasibility/regulatory): Mandatory IBS/CBS fields from 03/08/2026, automatic SEFAZ rejection; end of Ato Conjunto RFB/CGIBS nº 1/2025 flexibility window — https://www.cgibs.gov.br/novo-marco-da-reforma-tributaria-inicia-em-03-de-agosto-com-preenchimento-obrigatorio-dos-campos-relativos-ao-ibs-e-a-cbs — 2026-07
  - Signal 3 (economic): Buyer credit legally conditioned on upstream recolhimento — supplier non-payment glosses the buyer's credit ("risco invisível") — https://decisionit.com.br/blog/cbs-e-ibs-credito-depende-do-fornecedor/ — 2026-07
  - Signal 4 (market size): ~101,228 active accounting firms in Brazil per CFC, 538,612 registered professionals (Oct/2025), firm count up ~40% in five years — https://andersonhernandes.com.br/numero-de-escritorios-contabeis-no-brasil/ — 2026
  Category: Regulatory arbitrage
```

## 3. The opportunity

Brazil's fiscal software market is enormous and mature — but it is organized around **emission** and **archival**, not around **buy-side credit risk**.

The incumbents split cleanly:

- **ERP / emission vendors** (Omie, Contmatic, Conta Azul, Senior, TOTVS): all-hands on making sure *your* outbound invoice gets authorized on 3 August. That's an existential product fix for them, and it consumes their roadmap.
- **XML capture and archival** (Qive/Arquivei, Gestor XML, NF-e Expert): they pull your inbound documents off SEFAZ and store them. Priced by document volume, no public price list, custom enterprise proposals. They answer "do I have the XML?" — not "will this XML survive an audit in 2027?"
- **The free government tool** (Validador RTC, on the SVRS portal): validates XML *structure* against the RTC technical notes, one document at a time, pasted by hand. In its first version it covers CT-e, BP-e, NF3e and NFCom — **NF-e and NFC-e weren't even supported yet**. Useless at portfolio scale.

Nobody sits in the middle and answers the question a *contador* will be asked every single month starting now: **"Of the 3,000 invoices my clients received this month, which ones are going to cost them credit, and which supplier do I need to call today?"**

The 10× isn't a smarter tax engine. It's inversion of the unit of work. Today the accountant reviews documents one by one, reactively, when the apuração breaks. CreditoZero reviews the whole inbound stream continuously and hands over a ranked call list — twelve suppliers, not three thousand invoices. The AI does triage and drafts the awkward outreach; the accountant does judgment.

Timing is the unfair advantage. 2026 is a **test year** — rates are 0.1% IBS and 0.9% CBS, and the apuração is *meramente informativo, sem efeitos tributários*. The financial damage is near-zero today and becomes real in 2027 when actual collection begins. That gives a builder ~15 months to accumulate supplier-behavior data while the stakes are still play money, and to be the system of record when they aren't.

## 4. Target market

**Primary customer:** Owner or fiscal supervisor at a small-to-mid Brazilian accounting firm (*escritório contábil*) with 30–300 client CNPJs, at least 20 of which are Lucro Real or Lucro Presumido. Concentrated in São Paulo, Minas Gerais, Paraná, Rio Grande do Sul, Santa Catarina. Team of 3–25 people. These are the firms that already sell fiscal compliance as their core product and whose reputation dies if a client loses credit on their watch.

**Secondary customer:** Direct-to-company — the fiscal/controllership lead at a Lucro Presumido or Lucro Real business with R$10M–R$200M revenue and meaningful inbound purchase volume. Higher ACV, slower sale. Reach them later, through the accountants.

**Why they buy, concretely:** A *contador* is professionally liable for the client's apuração and structurally unable to control the input quality. LC 214/2025 hands them a problem where doing their own job perfectly still produces a loss, because the failure happened at a supplier they've never spoken to. When the client asks in March 2027 "why did we lose R$180,000 in credit?", the accountant needs to be able to say "we flagged that supplier in September 2026, here's the email trail." That artifact — the documented warning — is a good chunk of what's being bought.

**Rough TAM reasoning:** ~101,228 active accounting firms in Brazil (CFC). Cut to firms with a real *regime regular* book — call it the top 20–25%, so roughly 20,000–25,000 realistic accounts. Capturing 1.5% of that at R$700/mo average is ~R$2.9M/yr recurring. The direct-to-company segment sits on top and is larger, but the accountants are the efficient way in.

**Why now for them:** The 3 August rejection wall means inbound quality degrades visibly *this month* — some suppliers will comply, many won't, and Simples Nacional / MEI suppliers (CRT 1 and CRT 4) are legitimately exempt until 4 January 2027 under LC 214/2025 art. 348. So the inbound stream becomes a genuinely confusing mix of "correctly empty," "wrongly empty," and "filled but wrong." Sorting that by hand doesn't scale past a handful of clients.

## 5. Product sketch (MVP)

- **Automatic inbound capture.** Connect the client's digital certificate once; pull every NF-e, NFC-e, CT-e and NFS-e issued against their CNPJ straight from SEFAZ. No uploads, no manual XML wrangling.
- **Credit risk score per document.** Every inbound invoice gets a red/amber/green rating: fields missing, cClassTrib inconsistent with the NCM, calculation divergent from the reference value, CST mismatch — with a plain-Portuguese explanation of the specific defect.
- **The exemption filter — the thing that makes it usable.** Automatically separates suppliers who are *legitimately* exempt (Simples Nacional CRT 1, MEI CRT 4, exempt until 04/01/2027) from those who are simply non-compliant. Without this, 60%+ of alerts are noise and the accountant stops opening the emails by week three.
- **Supplier scorecard.** Ranks the client's supplier base by credit risk contributed: which suppliers have never once filled the fields, which fixed themselves last month, which are trending worse, and how much credit each one puts at risk.
- **Auto-drafted supplier outreach.** One click generates a firm, correct, technically specific email or WhatsApp message to the offending supplier — citing the relevant Nota Técnica and the exact field defect. Sending the message is a task nobody wants; drafting it is where the hours go.
- **Monthly credit-at-risk report.** Per client CNPJ: total credit exposed, breakdown by cause, month-over-month movement. The artifact the accountant forwards to the client — and the reason the subscription renews.
- **Upstream payment watch (v1.5).** Flags suppliers whose own fiscal behavior suggests recolhimento risk — the credit that gets glossed for reasons entirely outside the buyer's walls.

## 6. AI angle — what's load-bearing

Rules do the deterministic part, and honestly they should — field presence, CST/cClassTrib coherence, arithmetic against reference values. If I claimed AI was doing the validation, that would be a sticker.

AI is load-bearing in three places where rules genuinely fail:

1. **NCM ↔ cClassTrib coherence at portfolio scale.** The chain runs NCM → cClassTrib → rate → credit; get the NCM wrong and the error propagates into the buyer's credit calculation. Judging whether a free-text product description on a specific line item plausibly matches its declared NCM is a semantic classification problem across millions of idiosyncratic descriptions. No lookup table fixes that; this is exactly where cheap inference earned its place in the last 18 months.

2. **Triage and ranking.** Thousands of defects per month per firm, and almost all of them are worth ignoring. Deciding *which twelve suppliers to actually call this week* — weighting credit value at risk, whether the supplier is trending better, and whether they're exempt anyway — is judgment work that determines whether the product gets used or churns.

3. **The outreach draft.** A *contador* asking a supplier's fiscal department to fix their NF-e emission is a delicate, technical, slightly confrontational message in Portuguese that has to cite the right Nota Técnica. Drafting it is genuinely 15 minutes each. That's the visible time saving customers will point to when they explain why they pay.

Remove the AI and you have a rules-based validator that spits out 3,000 undifferentiated alerts a month. That product exists in spirit and nobody uses it — which is roughly why the government's free validator is a paste-one-XML-at-a-time web form.

## 7. Localization angle

This *is* the localization play — it is unbuildable and unsellable anywhere but Brazil, which is precisely the point.

- **Regulation as the product.** IBS, CBS, cClassTrib, the CRT regime codes, LC 214/2025, LC 227/2026, the RFB/CGIBS technical notes. The domain knowledge is the moat and it is 100% non-transferable.
- **Rails.** SEFAZ document capture via digital certificate (e-CNPJ / A1) is uniquely Brazilian infrastructure — and it's the reason onboarding can be near-zero-effort rather than a data-migration project.
- **Pricing in reais.** R$297–R$1,497/mo lands naturally against a market where Lucro Presumido accounting itself runs R$800–R$2,500/mo per client and online accounting plans start around R$189/mo. A US-priced $299/mo tool reads as expensive; R$697 reads as one-third of a single client's monthly fee.
- **Language and channel.** Portuguese-first, non-negotiable. WhatsApp is the working channel for supplier outreach in Brazilian SMB commerce, not email.
- **Distribution.** The accounting-media ecosystem (Contábeis, Fenacon, CRC state councils) is unusually concentrated and already publishing about exactly this problem — see section 9.

## 8. Business model — path to $1M–$5M ARR

**Pricing** — per accounting firm, tiered on client CNPJs monitored:

| Tier | CNPJs monitored | Price |
|---|---|---|
| Essencial | up to 25 | R$297/mo |
| Profissional | up to 100 | R$697/mo |
| Escritório | up to 300 | R$1,497/mo |
| Direct-to-company | single CNPJ, high volume | R$497–R$1,997/mo |

Deliberately **public, self-serve pricing** — the direct counter-position to Qive/Arquivei's "request a custom proposal" enterprise motion. A 200-person accounting firm should be able to swipe a card on a Tuesday.

**ACV:** ~R$8,400/yr blended (assumes the mix lands mostly on Profissional).

**To R$1M ARR (~USD 185K):** 120 firms on Profissional. That is 0.12% of Brazil's accounting firms. This is a small number.

**To R$6M ARR (~USD 1.1M):** ~700 firms at blended R$8,400. Roughly 3% of the realistic 20–25K serviceable base.

**To R$28M ARR (~USD 5M):** needs the direct-to-company segment carrying maybe 40% of revenue at 3–4× the ACV, plus expansion revenue. Credible but not the plan for year one — I'd rather be told the plan to R$6M and believe it.

**Expansion path:** CNPJs monitored grows naturally as firms add clients (negative churn without a price rise). Then per-CNPJ upsells: supplier payment-risk monitoring, the 2027 split-payment reconciliation module, and an audit-defense export bundling the full documented warning trail. Split payment testing starting 2027 is a second product wave against the same installed base.

## 9. Go-to-market wedge — first 100 customers

1. **The free 30-second diagnostic, distributed by fear.** A public page where an accountant uploads a single month of a client's inbound XML (or connects a certificate) and instantly gets: *"Of your 412 inbound invoices, 271 have IBS/CBS problems. 89 are legitimately exempt Simples Nacional suppliers. 182 are real. 7 suppliers cause 74% of it."* This is the whole go-to-market. It costs nothing to run, it produces a number that scares the person who is professionally liable, and the fix requires the paid product. Given the published 66.2% base rate, essentially every diagnostic returns an alarming result — because the situation is genuinely alarming.

2. **CRC and Fenacon channel, on the deadline news cycle.** The regional accounting councils and Fenacon are already republishing the 66.2% study — Fenacon carried it directly. Sindicatos run continuing-education webinars constantly and are permanently hungry for speakers on the reform. Pitch 20 state-level CRC/sindicato chapters a free 45-minute session: "IBS/CBS credit risk in received invoices — what to check before January 2027." Diagnostic link in the deck. Ten sessions × 80 attendees × 8% diagnostic → ~64 qualified leads. Accountants buy from other accountants' recommendations, and this borrows that trust.

3. **Targeted outreach to firms that already publish about the reform.** Hundreds of Brazilian accounting firms publish blog posts on IBS/CBS obligations — BLN Contabilidade, Badari Contábil, Contabilidade TEC and dozens like them turned up in one afternoon of searching. They're self-identifying as reform-aware and content-motivated. Scrape 1,500 of them, run their public CNPJ through the diagnostic where possible, and send a personalized note with a real finding in the first sentence. At 20% open / 4% conversion that's ~60 trials.

4. **Contábeis.com.br and the Portuguese-language YouTube fiscal channels.** Contábeis is where this audience reads daily and it publishes multiple reform pieces a week. A data-driven piece — "we analyzed X million inbound invoices; here's which sectors are worst" — is native to that publication and reproduces itself across the twenty regional outlets that syndicate this content, exactly as the V360 study did.

5. **Land through one client, expand to the firm.** When a mid-size company signs direct, their accountant sees the reports. Give a free firm-wide seat to any accountant whose client subscribes. The report *is* the sales collateral.

## 10. Build complexity — justification

**Medium.** The SEFAZ side is well-trodden — digital certificate authentication and NF-e/CT-e/NFS-e distribution are documented, and mature Brazilian libraries and API providers exist for the whole capture layer. The XML parsing is deterministic. The published Notas Técnicas (2025.002 and successors) specify the RTC field structures, and there's a free official validator to check interpretation against.

The genuinely hard part is the **validation rule set and keeping it current** — cClassTrib codes, CST combinations, the regime exemptions, and the NCM↔classification coherence checks, against a spec that has been revised repeatedly (NT 2025.002 is already at v1.60) and will keep moving through 2027. That's ongoing domain maintenance, not a one-time build, and it's the reason this needs a tax-domain co-founder rather than just a good engineer.

Call it **10–14 weeks to a credible v1** for a technical founder plus a fiscal specialist: capture, validate, score, exemption filter, supplier scorecard, monthly report. The public diagnostic tool ships first, in about three weeks, and starts collecting demand while the rest gets built.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Read-only analysis of documents the client is already entitled to via their own certificate. No filing, no representation before tax authorities, no regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Helps compliant buyers avoid losses caused by third-party errors. The fear-based diagnostic is grounded in a published 66.2% figure, not manufactured anxiety. |
| Market exists (evidence above) | ✅ | 6.4M documents analyzed, 66.2% defective, hard statutory deadline, ~101K accounting firms, incumbents publicly naming this exact gap. |
| 1–5 person team can build this | ✅ | Two people: technical founder + fiscal domain specialist. |
| Launchable with <$50K / ₹40L | ✅ | Realistically R$60–120K (~USD 11–22K): certificates, SEFAZ API/infra, inference costs, domain specialist for 3 months. |

All five pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | **17**/20 | Statutory deadline days away, measured 66.2% defect rate, direct financial loss, and professional liability sitting on the buyer. Held back from 18+ because in 2026 the apuração is *meramente informativo* — the pain is anticipatory until 2027 collection begins. Anticipatory pain converts worse than bleeding pain. |
| Demand evidence | 15 | **13**/15 | Multiple independent hard signals: 6.4M-document study, official CGIBS deadline, 101K-firm market, incumbent co-CEO publicly naming received-document checking as the core challenge, wall-to-wall trade coverage. Docked 2 because no one is yet observed *paying* specifically for buy-side credit screening. |
| Build feasibility | 15 | **11**/15 | Capture and parsing are solved problems with mature local tooling. The moving regulatory spec and NCM/cClassTrib coherence logic are real work and never stop. 10–14 weeks for a pair. |
| Distribution clarity | 15 | **12**/15 | The free diagnostic is a genuinely strong wedge with a near-guaranteed alarming output, and CRC/Fenacon/Contábeis are named, reachable, and already covering this story. Docked because accounting-firm sales cycles run on relationships and monthly cadence — this is not a two-week sprint to 100 customers. |
| Revenue mechanics | 15 | **12**/15 | R$297–1,497 is well-benchmarked against a market where a single Lucro Presumido client costs R$800–2,500/mo. 120 firms to R$1M ARR is a genuinely small number. Docked because self-serve conversion in this segment is unproven and Brazilian SMB churn is unkind. |
| Time to first revenue | 10 | **8**/10 | Diagnostic in ~3 weeks, paid v1 in 10–14, first paying firms plausibly 6–10 weeks post-launch. The deadline does the urgency work. Not a 4-week revenue story. |
| Defensibility | 10 | **4**/10 | Honest score. The rules are public, the capture layer is commoditized, and Qive/Arquivei or any ERP vendor could bolt this on — they have the inbound XML already. The only real moat is accumulated longitudinal supplier-behavior data (which suppliers fixed themselves, which never will) and that takes 12+ months to become valuable. This is an execution-and-speed play, not a moat play. |
| **Total** | **100** | **77**/100 | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Do not attempt this without a Brazilian fiscal specialist as a co-founder or first hire. The regulatory surface is genuinely deep, actively changing, and a foreigner reading translated blog posts will ship something subtly wrong in a way that destroys credibility with accountants on first contact.

### Key assumptions to validate

1. **Assumption:** Accounting firms will pay for buy-side credit risk rather than treating it as the client's problem to own. **How to test:** 25 structured calls with firm owners running 50+ CNPJs. Ask directly: "if a client loses R$200K of credit in 2027 because a supplier filled the NF-e wrong, whose fault is that?" If the consistent answer is "the client's, not mine," the buyer is wrong and the product should be sold direct-to-company instead.

2. **Assumption:** The exemption filter (Simples Nacional / MEI vs genuinely non-compliant) is accurate enough to keep alerts trustworthy. **How to test:** Run one month of real inbound XML from 5 friendly firms; manually audit 200 classifications. False-positive rate above 5% kills daily usage — accountants stop opening the report.

3. **Assumption:** Anticipatory pain in a test year converts to paid subscriptions, rather than "we'll deal with it in late 2027." **How to test:** Ship the free diagnostic first and measure diagnostic → paid trial conversion. Below 3% means the market is procrastinating and the real launch window is Q3 2027.

4. **Assumption:** Qive/Arquivei don't ship equivalent buy-side scoring within 6 months. **How to test:** Monitor their changelogs and Contábeis coverage monthly. They own the inbound XML already; this is the most likely way the idea dies.

### Risk flags

1. **Regulatory timing risk — the big one.** Brazil has already flexibilized this deadline once (Ato Conjunto RFB/CGIBS nº 1/2025). If it slips again — entirely plausible given 80%+ non-readiness among Regime Normal companies — the urgency evaporates for another two quarters and the free diagnostic converts badly. This is the single most likely reason the timing is wrong.

2. **Incumbent absorption.** Qive/Arquivei already capture the inbound XML for thousands of companies. Adding a credit-risk score to data you already hold is a feature, not a company. The defense is speed, self-serve pricing they can't match without cannibalizing enterprise deals, and owning the accountant relationship rather than the enterprise one.

3. **Spec churn as permanent tax.** NT 2025.002 is at v1.60 already. Every revision is unbudgeted maintenance, and shipping a stale rule set produces confidently wrong output — the worst possible failure mode when your entire value proposition is accuracy.

4. **Wrong-buyer risk.** If accountants deflect ownership to their clients, the ACV structure inverts: fewer, larger, slower direct-to-company deals. Recoverable, but it's a different company than the one described here.

5. **Platform dependency.** Total reliance on SEFAZ document distribution and digital-certificate access. Access rule changes are outside your control.

## 14. Structured verdict

```
Score:                  77/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian technical founder paired with a fiscal/tax
                        specialist. Portuguese fluency mandatory. Existing
                        relationships with accounting firms or CRC chapters
                        cut the GTM timeline in half.
Time to revenue:        6–10 weeks post-launch (diagnostic live in ~3 weeks)
Capital to launch:      R$60–120K (USD 11–22K)
Top 3 assumptions to validate first:
  1. Accountants — not their clients — own buy-side credit risk.
     25 structured calls with firm owners running 50+ CNPJs.
  2. Exemption filter accuracy <5% false positives.
     Manual audit of 200 classifications from 5 friendly firms' real XML.
  3. Anticipatory pain converts in a test year.
     Free diagnostic → paid trial conversion above 3%.
Kill criteria:
  - Abandon if the 03/08/2026 mandate is flexibilized again for 6+ months
    AND diagnostic→trial conversion sits below 2%.
  - Abandon if fewer than 8 of 25 interviewed firms say buy-side credit risk
    is their professional responsibility.
  - Abandon if Qive/Arquivei ship equivalent supplier credit-risk scoring
    before your v1 reaches 30 paying firms.
```

## 15. Next step — 1-week validation sprint

- **Day 1–2:** Build the diagnostic against real data. Get one month of inbound XML from 3 friendly accounting firms (offer a free manual analysis in exchange). Compute their actual defect rate, exemption split, and supplier concentration. The single most important number: does supplier concentration hold — do a handful of suppliers really cause most of the risk? If risk is evenly smeared across 400 suppliers, the "call these twelve" pitch collapses and the product needs a different shape.

- **Day 3–4:** 25 calls with owners of firms running 50+ CNPJs, sourced from CRC directories and reform-blogging firms. One question above all: **whose fault is a lost credit caused by a supplier's bad invoice?** Record verbatim answers. Then: "R$697/mo to monitor 100 client CNPJs — yes or no, today?"

- **Day 5:** Decide. **Go** requires all three: (a) supplier concentration confirmed — top 10% of suppliers cause >50% of at-risk credit in at least 2 of 3 datasets; (b) ≥12 of 25 firms name themselves as the responsible party; (c) ≥5 of 25 give a verbal yes at R$697/mo. Fewer than two of the three met → **no-go**, and revisit in Q1 2027 when collection starts and the pain stops being hypothetical.

The falsifiable core is (a). If a client's credit risk is spread evenly across their whole supplier base, there is no short call list, no weekly workflow, and no product — just a report nobody can act on.
