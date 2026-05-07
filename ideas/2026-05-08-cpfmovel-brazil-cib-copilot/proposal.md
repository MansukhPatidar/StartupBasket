---
title: "CPFmóvel — CIB copilot for Brazilian imobiliárias"
slug: cpfmovel-brazil-cib-copilot
date: 2026-05-08
category: PropTech SaaS / Brazil Small Imobiliárias + Accounting Offices
complexity: Medium
score: 79
verdict: GO
confidence: Medium
oneLiner: WhatsApp copilot that reconciles matrícula, IPTU, and the new CIB registry for Brazilian imobiliárias.
tags:
  vertical: PropTech
  model: SaaS
  geography: LATAM
  secondary: [WhatsApp-first, Compliance-driven, SMB, AI-agent, Brazil, Reforma-Tributaria, CIB]
axes:
  problem: 16
  demand: 12
  build: 11
  distribution: 12
  revenue: 12
  time: 8
  defensibility: 8
founderFit: [technical-heavy, domain-expertise-required]
featured: false
---

# CPFmóvel — CIB copilot for Brazilian imobiliárias and contadores

## 1. One-liner

WhatsApp copilot that reconciles matrícula, IPTU, and the new CIB registry for Brazilian imobiliárias and small accountants.

## 2. Trend signal — why now?

January 1, 2026 was the largest single-day expansion of property paperwork Brazil has ever seen, and it landed on offices that were already drowning.

- **CIB ("CPF do imóvel") goes live for capitals + Federal District in January 2026.** Receita Federal regulated CIB through Instrução Normativa RFB 2.275/2025 (published 18 Aug 2025). Notary offices (cartórios), federal agencies and state capitals must integrate to SINTER and adopt CIB by Jan 2026; other municipalities follow Jan 2027. Porto Alegre's IPTU 2026 invoices already carry the CIB number. Properties with frozen registrations face IPTU/ITBI/ITCMD reassessment because municipalities can use the new federal "valor de referência" to update the base of calculation. Owners with outdated matrículas are getting reassessment surprises in their 2026 IPTU bills.
- **Reforma Tributária imposes IBS + CBS on rental income from Jan 1, 2026.** Lei Complementar 214/2025 makes a pessoa física a contribuinte do regime regular when rental revenue exceeds R$240K **or** they let 3+ distinct properties in the prior calendar year. Locadores who never issued nota fiscal in their lives must now emit NFS-e in a new national platform with codes nobody has typed before. Residential rent gets a 70% rate reduction, but the obligation to enroll, classify regimes, and reconcile contracts signed before 16-Jan-2025 (transition window) is real and immediate.
- **The two changes touch the same workflow.** Every property transaction (sale, ITBI, financiamento, lease, NFS-e for rental) now requires the CIB number, a matrícula that matches SINTER's georeferenced geometry, and an IPTU venal value that doesn't trip the Receita's reference value. A small imobiliária or contador does this 5–50 times per month; today they paste, reconcile and chase by hand across 4–6 different government portals. The accounting industry press (Roberto Dias Duarte, Portas, Fiscoplan, IOB Notícias) is screaming "map your software supplier by December 2025 or you'll be operationally discontinuous in January."

Provenance:
  - Signal 1: CIB regulated by IN RFB 2.275/2025, mandatory for capitals + Federal District + cartórios in 2026, full national coverage 2027 — https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/programas-e-atividades/sinter/cib + https://en.clickpetroleoegas.com.br/cadastro-imobiliario-brasileiro-ajustes-iptu-itbi-2026-caes/ — Aug 2025 (regulation), Jan 2026 (live)
  - Signal 2: LC 214/2025 — pessoa física locador with >R$240K rent or 3+ properties becomes IBS/CBS contributor and must issue NFS-e from Jan 2026; 70% reduction on residential rent — https://www.seudinheiro.com/2026/financas-pessoais/ibs-e-cbs-no-aluguel-de-imoveis-quem-esta-sujeito-aos-novos-impostos-sobre-a-locacao-criados-na-reforma-tributaria-mlim/ + https://escolasuperioresn.com.br/nt-007-2026-tributacao-locacao-imoveis-ibs-cbs/ — 2026
  - Signal 3: "Valor de referência" + reassessment risk for undervalued properties; cross-checks across CIB / SINTER / municipal IPTU; small accounting + imobiliária operational discontinuity warnings — https://www.barbieriadvogados.com/valor-de-referencia-como-o-fisco-vai-avaliar-seu-imovel/ + https://www.robertodiasduarte.com.br/reforma-tributaria-2026-workspace-agents-para-escritorios/ + https://prefeitura.poa.br/smf/noticias/guias-do-iptu-2026-passam-incluir-o-cadastro-imobiliario-brasileiro — 2025-2026
  Category: Regulatory arbitrage

## 3. The opportunity

The Brazilian PropTech stack is large, but it does not own the CIB seam. Three camps exist:

- **Imobiliária CRMs and listing tools** — QuintoAndar, Loft, Grupo ZAP, VivaReal, Domus, Imobzi, Universal Software. They run leads, contracts, and rent collection. They do **not** reconcile matrícula vs SINTER vs municipal venal value, and they were not built around CIB.
- **Cartório / due-diligence platforms** — onCadast, Alude, Quero Quitar, Facilite, Olho no Imóvel. They sell title-search reports, certidões, and individual cartório lookups. They are deep on document retrieval but not on the *post-2026 reconciliation workflow* — and their pricing model is per-certidão, not per-property-managed-per-month.
- **Contábil / fiscal software** — Domínio (Thomson Reuters), Sage, Alterdata, Onvio, Conta Azul. Strong on bookkeeping. They are scrambling to wire CBS/IBS into their NFS-e modules but have nothing native for property reconciliation against CIB.

The gap: a small imobiliária managing 80 rental properties, or a small contador serving 40 landlord clients, has no fast way to ask: **"For each of these 120 imóveis, is the CIB on file, does the matrícula description match SINTER's geometry, what is the federal valor de referência vs the municipal venal value, and is anyone in this portfolio at risk of an automatic ITBI/IPTU reassessment notice in 2026?"** Today they answer it manually, property by property, across the cartório site + the prefeitura site + the Receita CIB portal + the SINTER consultation. CPFmóvel reads the matrícula PDF + the IPTU bill, pulls CIB + valor de referência via the federal API, computes the deltas, and returns a portfolio risk dashboard plus a one-click corrective filing.

## 4. Target market

- **Primary customer:** Two adjacent personas, same buyer:
  - *Imobiliária pequena/média* with 1–10 staff, managing 30–500 rental contracts and brokering 5–50 sales/month. Concentrated in capital + state-capital metro regions where CIB is already mandatory in 2026. Owner or "gerente operacional" buys.
  - *Escritório contábil pequeno/médio* with 2–15 staff serving 20–300 clients including individual landlords (PF) and small property-holding PJs. The sócio or contador-líder buys.
- **Why they buy:** Both face the same January 2026 cliff. Imobiliária owners are fielding panicked client calls about IPTU 2026 invoices that arrived with new valor de referência tags and 10–40% higher base. Contadores are being asked by every PF landlord client whether they crossed the R$240K / 3-property threshold and whether they need to enroll for IBS/CBS and start emitting NFS-e on Jan 1. Both bill clients hourly today for what is a repetitive cross-portal reconciliation that AI can do in minutes.
- **Rough TAM reasoning:** Brazil has ~280K CRECI-registered real-estate professionals (COFECI) clustered in roughly ~25K imobiliárias of varying sizes, plus ~70K active escritórios contábeis (CFC). Even narrowing to capital cities and Federal District in 2026 (where CIB is mandatory), and SMB-sized only, the addressable count is 6–10K imobiliárias + 8–12K contábeis = ~15–22K targetable shops. Blended ARPU R$2,400/yr → R$36–53M (~$7–10M USD) addressable revenue this year, doubling in 2027 when the mandate goes national.
- **Why now for them:** January 2026 is *the* discontinuity. Capitals are live on CIB. Pessoa física locador NFS-e starts. Receita's valor de referência just dropped. They are asking their contábil software vendor for help and getting roadmap promises. They need a ferramenta hoje, not 2027.

## 5. Product sketch (MVP)

- **WhatsApp drop-in.** Send the matrícula PDF + IPTU bill to a Zap number. CPFmóvel returns a one-page risk card in under 90 seconds: CIB status (registered / pending / divergent), valor de referência vs venal value delta, IBS/CBS regime hint for the owner, and a "is this property safe to transact in 2026" green/yellow/red signal.
- **Portfolio dashboard.** Imobiliária or contador uploads a CSV (or imports from Domínio / Onvio / Conta Azul / Imobzi). CPFmóvel batch-reconciles every property, surfaces the top risk cases first, and tracks drift over time.
- **Reassessment risk score.** Per imóvel: probability of IPTU/ITBI reassessment based on the gap between the federal reference value and the current municipal venal value, plus the matrícula-vs-SINTER geometry mismatch.
- **NFS-e enrolment helper.** For PF landlord clients, computes whether they crossed LC 214/2025 thresholds (R$240K rent or 3+ properties), drafts the IBS/CBS regime classification, and pre-fills the NFS-e nacional emission on the new platform.
- **One-click corrective filing.** Generates the matrícula correction request (averbação) and the IPTU revisão administrativa filing as PDFs, tagged with the right cartório and prefeitura forms.
- **Cliente-facing PDF.** Imobiliária or contador can white-label a 2-page report ("Diagnóstico CIB do seu imóvel") to send back to their landlord client. This is the upsell — they bill the client R$200–R$500 per report; CPFmóvel costs them a fraction of that.
- **Alert feed.** When a federal valor de referência update or a SINTER geometry change touches a property in the portfolio, the dashboard pings the user and re-scores risk.

## 6. AI angle — what's load-bearing

AI is the entire product, not garnish.

- **Vision-grade reading of matrícula PDFs.** Brazilian matrículas are a nightmare: cartório-specific layouts, decades of handwritten averbações, scanned documents from the 1980s, OCR-resistant rubricas. A traditional rules engine cannot parse them; a multimodal LLM can. This is the unlock that did not exist 18 months ago.
- **Cross-document reasoning over CIB / SINTER / cartório / prefeitura.** "Does the área construída on the matrícula match the area declared at the prefeitura which matches the geometry SINTER received from the município?" — this is exactly the kind of fuzzy reconciliation an LLM is good at and brittle ETL is bad at.
- **Regime classification under LC 214/2025.** "Locador X has 4 imóveis, R$192K of rent, plus a residential property with reduced rate, plus a contract signed 12-Jan-2025 (pre-cutoff). What's the IBS/CBS regime?" — codified rules + nuanced edge cases = LLM territory.
- **Portuguese-first.** Built for Brazilian Portuguese with cartório jargon, prefeitura abbreviations and contábil shorthand. Generic global AI assistants choke on this.

Remove the AI and the product is a checklist PDF and a pile of broken government-portal screenshots.

## 7. Localization angle (if any)

Brazil-first by design. CIB, SINTER, IBS, CBS, NFS-e nacional, the cartório system, valor de referência methodology — none of these exist anywhere else in the world. The localization *is* the product.

Sequence: São Paulo + Rio + Brasília first (where mandate is live and pain density is highest), then state capitals (Belo Horizonte, Curitiba, Porto Alegre, Recife, Salvador, Fortaleza), then non-capital municipalities in 2027 when mandate expands. WhatsApp-first because Brazilian SMBs run on WhatsApp the way US SMBs run on email — a web-only product loses 40–60% of the SMB tail.

## 8. Business model — path to $1M–$5M ARR

- **Pricing (in BRL because the customer thinks in BRL):**
  - **Solo:** R$149/mo, 30 imóveis, 1 user. Targets the contador with 5–20 landlord clients.
  - **Escritório:** R$399/mo, 200 imóveis, 5 users, batch reconciliation, white-label client report.
  - **Premium:** R$899/mo, 1,000 imóveis, 15 users, API, alert feed, NFS-e nacional helper.
  - **Per-report add-on:** R$29 per Diagnóstico CIB PDF beyond plan limit (the report is what the imobiliária sells back to its client at 5–10× markup).
- **ACV:** ~R$5,400/yr blended (most customers on Escritório plan), ~$1,000 USD.
- **Math to $1M ARR (~R$5M):** ~900 paying shops. Across ~15K addressable imobiliárias + contábeis in capitals alone, that's 6% penetration. Plausible.
- **Math to $5M ARR (~R$25M):** ~4,500 shops, plus expansion: (a) per-report add-ons drive 20–30% of revenue at scale; (b) integration with Domínio / Onvio / Conta Azul as a tab inside their suite licensed at R$3K–R$8K/mo per 100 contadores; (c) cartório-side white-label so cartórios run CIB sanity checks before averbação — tariff-side pricing.
- **Expansion path:** ITCMD inheritance/donation copilot (the same CIB engine, different filing); rural property module (CCIR + INCRA georeferencing — a parallel pile of pain that hits Jan 2027 mandate-wise); BR contábil SaaS marketplace co-selling.

## 9. Go-to-market wedge — first 100 customers

- **CRC + Sescon scrape + LinkedIn-sourced contadores list.** ~70K active escritórios, but the right targets are 8–12K mid-tier shops listed in CRC directories and Sescon (state-by-state contábil association) rosters. Personalized email + WhatsApp: "Anexei um diagnóstico CIB grátis dos 5 imóveis que mais arriscam reavaliação no seu município. Topa um teste de 30 dias?" Target 4% conversion to trial → 200 trials → 50 paying.
- **CRECI / COFECI imobiliária directories.** Roughly 25K imobiliárias publicly listed. WhatsApp-first outreach: "Mandei o CIB de 3 imóveis da sua vitrine — 2 estão com matrícula divergente. Quer ver o resto?" Open rate on Brazilian B2B WhatsApp is ~70%; expect 30 paying customers in 90 days.
- **Roberto Dias Duarte + Mauro Negruni + Jornal Contábil ecosystem.** These are the contábil-influencer names contadores actually read. Sponsored newsletter mention + a free "CIB sanity-check tool" that anyone can run on one matrícula generates a leaderboard of contadores by portfolio risk, which is highly shareable in the closed Telegram/WhatsApp groups where contadores live.
- **Sescon / Sescap state events.** Twelve major contábil congresses in 2026. Booth + give-away the free single-property tool. Expect 10–20 paying customers per event from the high-intent crowd.
- **Cartório partnership pilot.** Approach 5 mid-size urban cartórios in São Paulo and Brasília — they're being asked by the public to "interpret" CIB and have no software for it. White-label the diagnostic at the cartório front desk for R$30 per check, R$15 to us. Cartório becomes a customer *and* a distribution channel.

## 10. Build complexity — justification

Medium. The AI work is largely off-the-shelf (Claude / GPT vision + structured outputs + light RAG over CIB/SINTER/Receita docs). The hard parts are: (a) building reliable extractors for the major matrícula formats across the top 30 cartório layouts; (b) wiring up federal portals — Receita CIB API, SINTER consulta, prefeitura IPTU portals (each capital is its own snowflake) — without breaking on captchas or session handling; (c) staying current as IBS/CBS regulamentação evolves through 2026. Founding team: one strong AI/full-stack dev, one Brazilian PropTech-or-contábil domain hire (ex-cartório, ex-Domínio, or ex-Quero Quitar). 4–5 months to a paying v1 covering São Paulo + Brasília + Rio.

## 11. Gating checklist

| Gate | Pass? | Note |
|---|---|---|
| Legal in target market | ✅ | Reads public/customer-provided documents and consults open federal APIs. No regulated activity. |
| Ethical — no harm / dark patterns | ✅ | Helps property owners stay compliant and avoid surprise reassessment. |
| Market exists (evidence above) | ✅ | Three independent regulatory drivers, mandate already in force in capitals. |
| 1–5 person team can build this | ✅ | 4–5 month MVP, off-the-shelf AI, two key hires. |
| Launchable with <$50K / ₹40L | ✅ | ~R$120K (~$24K USD) for two-person team + cloud + initial cartório data acquisition. |

All five gates pass.

## 12. Feasibility score

| Axis | Weight | Score | Notes |
|---|---|---|---|
| Problem intensity | 20 | 16/20 | January 2026 is a hard cliff. Surprise IPTU reassessments and forced NFS-e enrolment are felt this month, not next year. Imobiliárias are eating client phone calls; contadores are quoting consulting hours they cannot bill at scale. Not "hair on fire daily" for every property, but "hair on fire weekly" for every shop. |
| Demand evidence | 15 | 12/15 | Three converging mandates already in force, contábil press calling out operational discontinuity, valor de referência already on Porto Alegre IPTU bills. Direct evidence of WTP from contadores billing R$300–R$800 per CIB consult by hand. Slight discount because incumbents (Domínio, Onvio) are credible threats to roadmap their way in by 2027. |
| Build feasibility | 15 | 11/15 | Vision LLM + cartório-format extraction + government portal scraping is a 4–5 month build for a strong duo. Captchas and PDF variation are the main risk. Not a 6-week solo build, but inside Medium-complexity bands. |
| Distribution clarity | 15 | 12/15 | CRECI + CRC directories give named, segmented lists. WhatsApp-first matches Brazilian SMB behavior. Sescon events are a known channel. Risk is that contábil software incumbents bundle similar features into their existing seat. |
| Revenue mechanics | 15 | 12/15 | R$149–R$899/mo pricing tracks Brazilian SMB SaaS norms (Conta Azul, Imobzi sit in this band). 6% penetration of capital-only TAM gets to $1M ARR. Per-report upsell adds upside but is unproven. |
| Time to first revenue | 10 | 8/10 | Free single-property check → paid trial → R$149/mo conversion is a 2-call sales cycle. Realistic to hit first paying customer within 4–6 weeks of MVP. Slight discount because contábeis are slow Q1 with reforma scrambles already on their plate. |
| Defensibility | 10 | 8/10 | Soft moats compound: (a) cartório-format library of extractors that takes a year to rebuild from scratch; (b) AHJ-style "this prefeitura's IPTU portal acts weird on Tuesdays" knowledge; (c) workflow lock-in once contadores import their entire portfolio; (d) BR-Portuguese-domain LLM tuning that generic global tools won't bother with. Not a patent moat, but enough for a 12–18 month defensive window. |
| **Total** | **100** | **79/100** | |

## 13. Qualitative modifiers

### Founder-fit tags

`technical-heavy` · `domain-expertise-required`

Needs a strong AI/full-stack engineer who can ship production-grade vision pipelines and government-portal scrapers, *plus* a Brazilian co-founder or first hire with cartório, Receita Federal, or contábil software DNA. Without the domain hire, the product reads like a foreign translation and contadores will sniff it out instantly.

### Key assumptions to validate (3–5)

1. **Assumption:** A small contábil office serving landlord clients will pay R$399/mo to avoid 4–8 hours/month of cross-portal reconciliation. **How to test:** 30 in-person/Zoom interviews with São Paulo and Brasília contadores in their first 60 days of CIB exposure; price-anchor with three plan options.
2. **Assumption:** Federal CIB and SINTER consultas can be reached programmatically with stable rate limits. **How to test:** 2-week spike — automate retrieval of CIB + valor de referência for 200 known properties across 5 capitals, measure success rate and latency.
3. **Assumption:** Matrícula PDFs from the top 30 cartórios are extractable with ≥90% field accuracy by a multimodal LLM. **How to test:** Collect 200 anonymized matrículas across 30 cartórios, run extraction, hand-grade. Below 85% = redesign extractor stack.
4. **Assumption:** Imobiliárias will adopt a WhatsApp + web tool that is *not* a CRM. **How to test:** 25 imobiliária owner conversations; if they say "we'll only buy this if it integrates with Imobzi/Domus" → ship integration first.
5. **Assumption:** The municipal IPTU portals (top 10 capitals) can be scraped or have public APIs sufficient to fetch venal value reliably. **How to test:** 1-week spike on each capital portal, document each one's quirk, and identify the 2–3 that need manual fallback.

### Risk flags

1. **Regulatory drift:** Receita Federal and the Comitê Gestor IBS will keep tweaking IBS/CBS rules through 2026. The product must keep up; a quarter of inattention = stale rules and angry customers.
2. **Platform dependency:** The CIB / SINTER / prefeitura portal landscape is government-owned. If Receita ships a free public tool that does 60% of the job, the willingness to pay drops. Counter: own the portfolio + reconciliation layer that government tools won't build.
3. **Incumbent encroachment:** Domínio (Thomson Reuters), Onvio, and Conta Azul will eventually wire CIB into their suites. Window is 12–18 months to lock in seat-share before that becomes the default.
4. **Cartório data access:** Cartório PDFs are technically accessible per matrícula but at variable quality. If a major cartório changes layout mid-year, extractors break for that region.

## 14. Structured verdict

```
Score:                  79/100
Verdict:                GO
Confidence:             Medium
Best-fit builder:       Brazilian technical founder + Brazilian PropTech/contábil domain co-founder
Time to revenue:        6–10 weeks from MVP launch
Capital to launch:      ~R$120K / ~$24K USD
Top 3 assumptions to validate first:
  1. R$399/mo WTP among São Paulo + Brasília contadores serving landlord clients (30 interviews).
  2. ≥90% matrícula PDF extraction accuracy across top 30 cartório layouts (200 docs spike).
  3. Stable programmatic access to CIB + SINTER + top-5 capital prefeitura IPTU portals (2-week spike).
Kill criteria:
  - Abandon if matrícula extraction accuracy stays below 80% after 4 weeks of tuning.
  - Abandon if Domínio or Onvio ship a native CIB module before our paying customer #50.
  - Abandon if <10% of 50 cold contadores agree to a 30-day trial.
```

## 15. Next step — 1-week validation sprint

- **Day 1:** Pull CRC contadores + CRECI imobiliárias for São Paulo capital. Hand-build a list of 100 mid-sized escritórios (5–25 staff) with rental-client exposure.
- **Day 2:** Run the *manual* version of the diagnostic on 10 real matrículas obtained from public cartório search, plus the corresponding IPTU 2026 invoices and the federal CIB lookup. Measure how long the manual reconciliation takes, what the deltas are, and how many properties show meaningful reassessment risk.
- **Day 3:** Send 50 personalized WhatsApp messages with the diagnostic findings: "Achei 2 imóveis na sua carteira que provavelmente vão ser reavaliados no IPTU 2026. Topa 15 minutos pra mostrar?" Track reply rate.
- **Day 4:** Hold 8–10 calls. Three questions only: (1) How are you handling this today? (2) How much would you pay for a tool that did this in batch? (3) What integration would unblock the buy?
- **Day 5:** Decide.
  - **Go** if ≥4 of 8 calls verbalize R$300+/mo intent and ≥3 say they'd pay today for a R$29-per-report version.
  - **No-go** if calls reveal that contadores are passing the burden back to the property owner, or that contábil software incumbents are credible "wait three months" alternatives.
